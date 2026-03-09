import Redis, { type RedisOptions } from 'ioredis';

import { getLogger } from '@plume/logger';

const logger = getLogger('redis');

// Explicitly type the singleton as the Redis class instance or null
let redisClient: Redis | null = null;

export function createRedisClient(options?: RedisOptions): Redis {
  const client = new Redis({
    host: process.env['REDIS_HOST'] ?? 'localhost',
    port: parseInt(process.env['REDIS_PORT'] ?? '6379', 10),
    password: process.env['REDIS_PASSWORD'],
    retryStrategy: (times: number): number => {
      const delay = Math.min(times * 50, 2000);
      logger.warn(`Redis reconnect attempt ${times}, retrying in ${delay}ms`);
      return delay;
    },
    maxRetriesPerRequest: 3,
    enableReadyCheck: true,
    lazyConnect: false,
    ...options,
  });

  client.on('connect', () => logger.info('Redis connected'));
  client.on('ready', () => logger.info('Redis ready'));
  client.on('error', (err: Error) => logger.error('Redis error', err));
  client.on('close', () => logger.warn('Redis connection closed'));
  client.on('reconnecting', () => logger.info('Redis reconnecting'));

  return client;
}

export function getRedisClient(): Redis {
  if (!redisClient) {
    redisClient = createRedisClient();
  }
  return redisClient;
}

export async function closeRedisConnection(): Promise<void> {
  if (redisClient) {
    await redisClient.quit();
    redisClient = null;
    logger.info('Redis connection closed');
  }
}

export { Redis };
