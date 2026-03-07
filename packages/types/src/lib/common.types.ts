export interface PaginationParams {
  cursor?: string;
  limit?: number;
  page?: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  nextCursor?: string;
  hasMore: boolean;
  total?: number;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: ApiError;
  meta?: Record<string, unknown>;
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
  statusCode: number;
}

export interface NotificationPayload {
  type: NotificationType;
  recipientId: string;
  actorId: string;
  tweetId?: string;
  message: string;
  createdAt: string;
}

export type NotificationType =
  | 'LIKE'
  | 'RETWEET'
  | 'REPLY'
  | 'FOLLOW'
  | 'MENTION'
  | 'QUOTE'
  | 'NEW_TWEET'; // for celebrity fan-out on read

export interface SearchResult {
  tweets: import('./tweet.types').TweetWithAuthor[];
  users: import('./user.types').UserProfile[];
  hashtags: HashtagResult[];
}

export interface HashtagResult {
  tag: string;
  tweetCount: number;
  trendingScore: number;
}

// gRPC service status codes mapped to HTTP
export type ServiceErrorCode =
  | 'NOT_FOUND'
  | 'UNAUTHORIZED'
  | 'FORBIDDEN'
  | 'VALIDATION_ERROR'
  | 'INTERNAL_ERROR'
  | 'CONFLICT'
  | 'TOO_MANY_REQUESTS';
