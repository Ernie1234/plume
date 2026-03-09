// Exchange definitions
export const EXCHANGES = {
  TWEET: 'plume.tweet',           // Topic exchange for tweet events
  NOTIFICATION: 'plume.notification', // Direct exchange for notifications
  FANOUT: 'plume.fanout',         // Fanout exchange for broadcast
  DLX: 'plume.dlx',              // Dead Letter Exchange
} as const;

// Queue definitions
export const QUEUES = {
  // Fan-out worker queues
  TWEET_FANOUT_REGULAR: 'plume.tweet.fanout.regular',   // < 10k followers
  TWEET_FANOUT_CELEBRITY: 'plume.tweet.fanout.celebrity', // >= 10k followers
  // Notification queue
  NOTIFICATIONS: 'plume.notifications',
  // Search indexing
  SEARCH_INDEX: 'plume.search.index',
  // Dead letter queues
  DLQ_FANOUT: 'plume.dlq.fanout',
} as const;

// Routing keys
export const ROUTING_KEYS = {
  TWEET_CREATED: 'tweet.created',
  TWEET_DELETED: 'tweet.deleted',
  TWEET_LIKED: 'tweet.liked',
  TWEET_RETWEETED: 'tweet.retweeted',
  USER_FOLLOWED: 'user.followed',
  USER_MENTIONED: 'user.mentioned',
  // Celebrity routing
  TWEET_CELEBRITY: 'tweet.celebrity',
  TWEET_REGULAR: 'tweet.regular',
} as const;

// Message TTL: 1 hour for fanout messages
export const MESSAGE_TTL = 60 * 60 * 1000;

export type ExchangeName = (typeof EXCHANGES)[keyof typeof EXCHANGES];
export type QueueName = (typeof QUEUES)[keyof typeof QUEUES];
export type RoutingKey = (typeof ROUTING_KEYS)[keyof typeof ROUTING_KEYS];