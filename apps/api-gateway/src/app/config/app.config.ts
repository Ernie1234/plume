import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  nodeEnv: process.env['NODE_ENV'] ?? 'development',
  port: parseInt(process.env['API_GATEWAY_PORT'] ?? '3000', 10),
  host: process.env['API_GATEWAY_HOST'] ?? '0.0.0.0',

  // JWT
  jwt: {
    accessSecret: process.env['JWT_ACCESS_SECRET'] ?? 'plume-access-secret',
    refreshSecret: process.env['JWT_REFRESH_SECRET'] ?? 'plume-refresh-secret',
    accessExpiresIn: process.env['JWT_ACCESS_EXPIRES_IN'] ?? '15m',
    refreshExpiresIn: process.env['JWT_REFRESH_EXPIRES_IN'] ?? '7d',
  },

  // Redis
  redis: {
    host: process.env['REDIS_HOST'] ?? 'localhost',
    port: parseInt(process.env['REDIS_PORT'] ?? '6379', 10),
    password: process.env['REDIS_PASSWORD'],
  },

  // gRPC service addresses
  grpc: {
    userService: process.env['USER_SERVICE_GRPC_URL'] ?? 'localhost:50051',
    tweetService: process.env['TWEET_SERVICE_GRPC_URL'] ?? 'localhost:50052',
    notificationService: process.env['NOTIFICATION_SERVICE_GRPC_URL'] ?? 'localhost:50053',
    realtimeService: process.env['REALTIME_SERVICE_GRPC_URL'] ?? 'localhost:50054',
    commentService: process.env['COMMENT_SERVICE_GRPC_URL'] ?? 'localhost:50055',
    likesService: process.env['LIKES_SERVICE_GRPC_URL'] ?? 'localhost:50056',
    followService: process.env['FOLLOW_SERVICE_GRPC_URL'] ?? 'localhost:50057',
    bookmarkService: process.env['BOOKMARK_SERVICE_GRPC_URL'] ?? 'localhost:50058',
  },

  // HTTP service URLs (for non-gRPC services)
  services: {
    feedService: process.env['FEED_SERVICE_URL'] ?? 'http://localhost:3003',
    mediaService: process.env['MEDIA_SERVICE_URL'] ?? 'http://localhost:3005',
    searchService: process.env['SEARCH_SERVICE_URL'] ?? 'http://localhost:3006',
  },

  // Fan-out
  fanout: {
    celebrityThreshold: parseInt(process.env['CELEBRITY_FOLLOWER_THRESHOLD'] ?? '10000', 10),
  },
}));