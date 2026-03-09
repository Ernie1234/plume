import type { Redis } from 'ioredis';

import { getLogger } from '@plume/logger';
import type { FeedItem, TweetFanoutEvent } from '@plume/types';

const logger = getLogger('redis:timeline');

// Key patterns
export const RedisKeys = {
  // User's home timeline (sorted set: score=timestamp, member=tweetId)
  userTimeline: (userId: string) => `timeline:${userId}`,
  // Author's tweet list (sorted set)
  userTweets: (userId: string) => `tweets:${userId}`,
  // Session / rate limiting
  userSession: (userId: string) => `session:${userId}`,
  rateLimitKey: (userId: string, action: string) => `ratelimit:${userId}:${action}`,
  // Celebrity user set (for fan-out-on-read)
  celebrityUsers: () => 'celebrities:set',
  // Tweet cache (hash)
  tweetCache: (tweetId: string) => `tweet:${tweetId}`,
  // User followers count cache
  followerCount: (userId: string) => `followers:count:${userId}`,
  // Lock key for distributed operations
  lock: (resource: string) => `lock:${resource}`,
};

// Max feed items per user in Redis (sliding window)
const TIMELINE_MAX_LENGTH = 800;
// Timeline TTL: 7 days
const TIMELINE_TTL_SECONDS = 7 * 24 * 60 * 60;

export class TimelineService {
  constructor(private readonly redis: Redis) {}

  /**
   * Push a tweet into a specific user's timeline (fan-out write)
   * Uses sorted set with timestamp as score for chronological ordering
   */
  async pushToUserTimeline(userId: string, tweetId: string, timestamp: number): Promise<void> {
    const key = RedisKeys.userTimeline(userId);

    const pipeline = this.redis.pipeline();
    // Add tweet to timeline sorted set (score = timestamp for ordering)
    pipeline.zadd(key, timestamp, tweetId);
    // Trim to max length - keep newest
    pipeline.zremrangebyrank(key, 0, -(TIMELINE_MAX_LENGTH + 1));
    // Reset TTL on activity
    pipeline.expire(key, TIMELINE_TTL_SECONDS);
    await pipeline.exec();
  }

  /**
   * Push tweet to multiple users' timelines in batch (efficient fan-out)
   */
  async fanoutToFollowers(
    tweetId: string,
    followerIds: string[],
    timestamp: number,
  ): Promise<void> {
    if (followerIds.length === 0) return;

    const pipeline = this.redis.pipeline();
    for (const followerId of followerIds) {
      const key = RedisKeys.userTimeline(followerId);
      pipeline.zadd(key, timestamp, tweetId);
      pipeline.zremrangebyrank(key, 0, -(TIMELINE_MAX_LENGTH + 1));
      pipeline.expire(key, TIMELINE_TTL_SECONDS);
    }

    await pipeline.exec();
    logger.debug(`Fanned out tweet ${tweetId} to ${followerIds.length} followers`);
  }

  /**
   * Get user's home timeline (paginated with cursor)
   * Returns tweet IDs in reverse chronological order
   */
  async getUserTimeline(
    userId: string,
    cursor?: string,
    limit = 20,
  ): Promise<{ tweetIds: string[]; nextCursor: string | null }> {
    const key = RedisKeys.userTimeline(userId);

    let maxScore = '+inf';
    if (cursor) {
      // Cursor is the score (timestamp) of the last item
      maxScore = `(${cursor}`; // exclusive: ( means exclude this score
    }

    // Get tweets from newest to oldest using ZREVRANGEBYSCORE
    const results = await this.redis.zrevrangebyscore(
      key,
      maxScore,
      '-inf',
      'WITHSCORES',
      'LIMIT',
      0,
      limit + 1, // fetch one extra to detect if there are more
    );

    const tweetIds: string[] = [];
    const scores: string[] = [];

    for (let i = 0; i < results.length; i += 2) {
      tweetIds.push(results[i] as string);
      scores.push(results[i + 1] as string);
    }

    const hasMore = tweetIds.length > limit;
    if (hasMore) {
      tweetIds.pop();
      scores.pop();
    }

    const nextCursor = hasMore && scores.length > 0 ? (scores[scores.length - 1] ?? null) : null;

    return { tweetIds, nextCursor };
  }

  /**
   * Remove a tweet from all affected timelines (on delete)
   */
  async removeTweetFromTimeline(userId: string, tweetId: string): Promise<void> {
    const key = RedisKeys.userTimeline(userId);
    await this.redis.zrem(key, tweetId);
  }

  /**
   * Cache a tweet's data in Redis for fast reads
   */
  async cacheTweet(tweet: TweetFanoutEvent, ttlSeconds = 3600): Promise<void> {
    const key = RedisKeys.tweetCache(tweet.tweetId);
    await this.redis.setex(key, ttlSeconds, JSON.stringify(tweet));
  }

  /**
   * Get cached tweet data
   */
  async getCachedTweet(tweetId: string): Promise<TweetFanoutEvent | null> {
    const key = RedisKeys.tweetCache(tweetId);
    const data = await this.redis.get(key);
    if (!data) return null;
    return JSON.parse(data) as TweetFanoutEvent;
  }

  /**
   * Check if a user's timeline exists in Redis (for cold-start detection)
   */
  async timelineExists(userId: string): Promise<boolean> {
    const key = RedisKeys.userTimeline(userId);
    return (await this.redis.exists(key)) === 1;
  }

  /**
   * Add user to celebrity set (for fan-out-on-read strategy)
   */
  async markAsCelebrity(userId: string): Promise<void> {
    await this.redis.sadd(RedisKeys.celebrityUsers(), userId);
    logger.info(`User ${userId} marked as celebrity`);
  }

  async isCelebrity(userId: string): Promise<boolean> {
    return (await this.redis.sismember(RedisKeys.celebrityUsers(), userId)) === 1;
  }

  /**
   * Get celebrity followings for a user (used in fan-out-on-read)
   * Stored as a set: `celebrity:following:{userId}` -> Set<celebrityId>
   */
  async getCelebrityFollowings(userId: string): Promise<string[]> {
    return this.redis.smembers(`celebrity:following:${userId}`);
  }

  async addCelebrityFollowing(userId: string, celebrityId: string): Promise<void> {
    await this.redis.sadd(`celebrity:following:${userId}`, celebrityId);
    await this.redis.expire(`celebrity:following:${userId}`, TIMELINE_TTL_SECONDS);
  }
}

export class RateLimitService {
  constructor(private readonly redis: Redis) {}

  /**
   * Sliding window rate limiter
   */
  async isRateLimited(
    userId: string,
    action: string,
    maxRequests: number,
    windowSeconds: number,
  ): Promise<{ limited: boolean; remaining: number; resetAt: number }> {
    const key = RedisKeys.rateLimitKey(userId, action);
    const now = Date.now();
    const windowStart = now - windowSeconds * 1000;

    const pipeline = this.redis.pipeline();
    // Remove expired entries
    pipeline.zremrangebyscore(key, '-inf', windowStart);
    // Add current request
    pipeline.zadd(key, now, `${now}-${Math.random()}`);
    // Count requests in window
    pipeline.zcard(key);
    // Set expiry
    pipeline.expire(key, windowSeconds);

    const results = await pipeline.exec();
    const count = (results?.[2]?.[1] as number) ?? 0;

    const resetAt = Math.ceil((now + windowSeconds * 1000) / 1000);
    const remaining = Math.max(0, maxRequests - count);

    return {
      limited: count > maxRequests,
      remaining,
      resetAt,
    };
  }
}
