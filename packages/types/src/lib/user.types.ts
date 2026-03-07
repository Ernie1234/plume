export interface User {
  id: string;
  username: string;
  displayName: string;
  email: string;
  bio?: string;
  avatarUrl?: string;
  bannerUrl?: string;
  followerCount: number;
  followingCount: number;
  tweetCount: number;
  isVerified: boolean;
  isCelebrity: boolean; // followerCount > CELEBRITY_THRESHOLD
  createdAt: Date;
  updatedAt: Date;
}

export interface UserProfile extends Omit<User, 'email'> {
  isFollowing?: boolean;
  isFollowedBy?: boolean;
}

export interface Follow {
  id: string;
  followerId: string;
  followingId: string;
  createdAt: Date;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

export interface JwtPayload {
  sub: string; // userId
  username: string;
  email: string;
  iat?: number;
  exp?: number;
}

export interface RefreshTokenPayload {
  sub: string;
  tokenId: string;
  iat?: number;
  exp?: number;
}

export type UserRole = 'USER' | 'ADMIN' | 'MODERATOR';
