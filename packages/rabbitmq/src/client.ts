import * as amqp from 'amqplib';
import { getLogger } from '@plume/logger';

import { EXCHANGES, MESSAGE_TTL, QUEUES } from './patterns';

const logger = getLogger('rabbitmq');

export interface RabbitMQConfig {
  url: string;
  prefetch?: number;
}

export class RabbitMQClient {
  private connection: amqp.ChannelModel | null = null;
  private channel: amqp.Channel | null = null;
  private confirmChannel: amqp.ConfirmChannel | null = null;
  private isConnecting = false;

  constructor(private readonly config: RabbitMQConfig) {}

  async connect(): Promise<void> {
    if (this.isConnecting || this.connection) return;
    this.isConnecting = true;

    try {
      const connection = await amqp.connect(this.config.url);
      this.connection = connection;
      logger.info('RabbitMQ connected');

      connection.on('error', (err: Error) => {
        logger.error('RabbitMQ connection error', err);
        void this.reconnect();
      });
      connection.on('close', () => {
        logger.warn('RabbitMQ connection closed');
        void this.reconnect();
      });

      await this.setupChannels();
      await this.setupTopology();
    } catch (error) {
      logger.error('Failed to connect to RabbitMQ', error as Error);
      this.isConnecting = false;
      throw error;
    } finally {
      this.isConnecting = false;
    }
  }

  private async setupChannels(): Promise<void> {
    const connection = this.connection;
    if (!connection) throw new Error('Not connected');

    this.channel = await connection.createChannel();
    this.confirmChannel = await connection.createConfirmChannel();

    // Set prefetch for fair dispatch
    const channel = this.channel;
    if (!channel) throw new Error('Channel setup failed');
    await channel.prefetch(this.config.prefetch ?? 10);

    channel.on('error', (err) => logger.error('Channel error', err));
    logger.info('RabbitMQ channels created');
  }

  /**
   * Setup exchanges, queues, and bindings
   */
  private async setupTopology(): Promise<void> {
    const ch = this.channel!;

    // Dead Letter Exchange
    await ch.assertExchange(EXCHANGES.DLX, 'direct', { durable: true });

    // Dead Letter Queues
    await ch.assertQueue(QUEUES.DLQ_FANOUT, { durable: true });
    await ch.bindQueue(QUEUES.DLQ_FANOUT, EXCHANGES.DLX, QUEUES.TWEET_FANOUT_REGULAR);
    await ch.bindQueue(QUEUES.DLQ_FANOUT, EXCHANGES.DLX, QUEUES.TWEET_FANOUT_CELEBRITY);

    // Tweet Exchange (topic)
    await ch.assertExchange(EXCHANGES.TWEET, 'topic', { durable: true });

    // Fan-out queues with DLX
    await ch.assertQueue(QUEUES.TWEET_FANOUT_REGULAR, {
      durable: true,
      arguments: {
        'x-dead-letter-exchange': EXCHANGES.DLX,
        'x-dead-letter-routing-key': QUEUES.TWEET_FANOUT_REGULAR,
        'x-message-ttl': MESSAGE_TTL,
        'x-max-length': 100000,
      },
    });

    await ch.assertQueue(QUEUES.TWEET_FANOUT_CELEBRITY, {
      durable: true,
      arguments: {
        'x-dead-letter-exchange': EXCHANGES.DLX,
        'x-dead-letter-routing-key': QUEUES.TWEET_FANOUT_CELEBRITY,
        'x-message-ttl': MESSAGE_TTL,
        'x-max-length': 10000,
      },
    });

    // Bind queues to tweet exchange
    await ch.bindQueue(QUEUES.TWEET_FANOUT_REGULAR, EXCHANGES.TWEET, 'tweet.regular');
    await ch.bindQueue(QUEUES.TWEET_FANOUT_CELEBRITY, EXCHANGES.TWEET, 'tweet.celebrity');
    await ch.bindQueue(QUEUES.TWEET_FANOUT_REGULAR, EXCHANGES.TWEET, 'tweet.created');

    // Notification Exchange (direct)
    await ch.assertExchange(EXCHANGES.NOTIFICATION, 'direct', { durable: true });
    await ch.assertQueue(QUEUES.NOTIFICATIONS, { durable: true });
    await ch.bindQueue(QUEUES.NOTIFICATIONS, EXCHANGES.NOTIFICATION, QUEUES.NOTIFICATIONS);

    // Search indexing queue
    await ch.assertQueue(QUEUES.SEARCH_INDEX, { durable: true });

    logger.info('RabbitMQ topology configured');
  }

  private async reconnect(): Promise<void> {
    logger.info('Reconnecting to RabbitMQ in 5s...');
    await new Promise((resolve) => setTimeout(resolve, 5000));
    try {
      await this.connect();
    } catch (error) {
      logger.error('Reconnection failed', error as Error);
      void this.reconnect();
    }
  }

  /**
   * Publish message with publisher confirms
   */
  async publish<T>(
    exchange: string,
    routingKey: string,
    message: T,
    options?: amqp.Options.Publish,
  ): Promise<boolean> {
    if (!this.confirmChannel) throw new Error('Not connected');

    const content = Buffer.from(JSON.stringify(message));

    return new Promise((resolve, reject) => {
      this.confirmChannel!.publish(
        exchange,
        routingKey,
        content,
        {
          persistent: true,
          contentType: 'application/json',
          timestamp: Date.now(),
          ...options,
        },
        (err) => {
          if (err) {
            logger.error('Message publish failed', err);
            reject(err);
          } else {
            resolve(true);
          }
        },
      );
    });
  }

  /**
   * Consume messages from a queue
   */
  async consume<T>(
    queue: string,
    handler: (message: T, ack: () => void, nack: (requeue?: boolean) => void) => Promise<void>,
  ): Promise<void> {
    if (!this.channel) throw new Error('Not connected');

    await this.channel.consume(queue, async (msg) => {
      if (!msg) return;

      const ack = () => this.channel!.ack(msg);
      const nack = (requeue = false) => this.channel!.nack(msg, false, requeue);

      try {
        const content = JSON.parse(msg.content.toString()) as T;
        await handler(content, ack, nack);
      } catch (error) {
        logger.error(`Error processing message from ${queue}`, error as Error);
        nack(false); // Don't requeue - send to DLQ
      }
    });

    logger.info(`Consuming from queue: ${queue}`);
  }

  async close(): Promise<void> {
    try {
      await this.channel?.close();
      await this.confirmChannel?.close();
      await this.connection?.close();
      logger.info('RabbitMQ connection closed gracefully');
    } catch (error) {
      logger.error('Error closing RabbitMQ connection', error as Error);
    }
  }
}

let rabbitMQInstance: RabbitMQClient | null = null;

export function getRabbitMQClient(): RabbitMQClient {
  if (!rabbitMQInstance) {
    rabbitMQInstance = new RabbitMQClient({
      url: process.env['RABBITMQ_URL'] ?? 'amqp://localhost:5672',
      prefetch: 10,
    });
  }
  return rabbitMQInstance;
}
