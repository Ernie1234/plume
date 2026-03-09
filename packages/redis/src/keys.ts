 const RedisKeys = {
  userTimeline: (userId: string) => `timeline:${userId}`,
  userTweets: (userId: string) => `tweets:${userId}`,
  userSession: (userId: string) => `session:${userId}`,
  rateLimitKey: (userId: string, action: string) => `ratelimit:${userId}:${action}`,
  celebrityUsers: () => 'celebrities:set',
  tweetCache: (tweetId: string) => `tweet:${tweetId}`,
  followerCount: (userId: string) => `followers:count:${userId}`,
  lock: (resource: string) => `lock:${resource}`,
};

export default RedisKeys;