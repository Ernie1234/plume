export type TweetType = 'TWEET' | 'REPLY' | 'RETWEET' | 'QUOTE';
export type MediaType = 'IMAGE' | 'VIDEO' | 'GIF';

export interface Media {
  id: string;
  url: string;
  type: MediaType;
  width?: number;
  height?: number;
  altText?: string;
}

export interface Tweet {
  id: string;
  content: string;
  authorId: string;
  type: TweetType;
  parentId?: string;
  quotedTweetId?: string;
  media: Media[];
  likeCount: number;
  retweetCount: number;
  replyCount: number;
  quoteCount: number;
  viewCount: number;
  isLiked?: boolean;
  isRetweeted?: boolean;
  isBookmarked?: boolean;
  hashtags: string[];
  mentions: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface TweetWithAuthor extends Tweet {
  author: {
    id: string;
    username: string;
    displayName: string;
    avatarUrl?: string;
    isVerified: boolean;
    isCelebrity: boolean;
  };
  parentTweet?: TweetWithAuthor;
  quotedTweet?: TweetWithAuthor;
}

export interface Like {
  id: string;
  userId: string;
  tweetId: string;
  createdAt: Date;
}

export interface Bookmark {
  id: string;
  userId: string;
  tweetId: string;
  createdAt: Date;
}

// Fan-out event payload sent to RabbitMQ
export interface TweetFanoutEvent {
  tweetId: string;
  authorId: string;
  authorUsername: string;
  followerCount: number;
  isCelebrity: boolean;
  createdAt: string;
  content: string;
  media: Media[];
}

export interface FeedItem {
  tweetId: string;
  authorId: string;
  score: number; // timestamp as float for Redis sorted set
  addedAt: Date;
}
