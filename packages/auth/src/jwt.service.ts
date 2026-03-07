import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';

import type { AuthTokens, JwtPayload, RefreshTokenPayload } from '@plume/types';

const BCRYPT_ROUNDS = 12;

export interface TokenConfig {
  accessSecret: string;
  refreshSecret: string;
  accessExpiresIn: string;
  refreshExpiresIn: string;
}

export class JwtService {
  constructor(private readonly config: TokenConfig) {}

  generateTokens(payload: Omit<JwtPayload, 'iat' | 'exp'>): AuthTokens {
    const accessToken = jwt.sign(payload, this.config.accessSecret, {
      expiresIn: this.config.accessExpiresIn,
    } as jwt.SignOptions);

    const tokenId = uuidv4();
    const refreshPayload: RefreshTokenPayload = {
      sub: payload.sub,
      tokenId,
    };

    const refreshToken = jwt.sign(refreshPayload, this.config.refreshSecret, {
      expiresIn: this.config.refreshExpiresIn,
    } as jwt.SignOptions);

    return {
      accessToken,
      refreshToken,
      expiresIn: 15 * 60, // 15 minutes in seconds
    };
  }

  verifyAccessToken(token: string): JwtPayload {
    try {
      return jwt.verify(token, this.config.accessSecret) as JwtPayload;
    } catch (error) {
      if (error instanceof jwt.TokenExpiredError) {
        throw new Error('ACCESS_TOKEN_EXPIRED');
      }
      throw new Error('ACCESS_TOKEN_INVALID');
    }
  }

  verifyRefreshToken(token: string): RefreshTokenPayload {
    try {
      return jwt.verify(token, this.config.refreshSecret) as RefreshTokenPayload;
    } catch (error) {
      if (error instanceof jwt.TokenExpiredError) {
        throw new Error('REFRESH_TOKEN_EXPIRED');
      }
      throw new Error('REFRESH_TOKEN_INVALID');
    }
  }

  decodeToken<T>(token: string): T | null {
    try {
      return jwt.decode(token) as T;
    } catch {
      return null;
    }
  }
}

// Password utilities
export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, BCRYPT_ROUNDS);
}

export async function comparePassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

// Extract Bearer token from Authorization header
export function extractBearerToken(authHeader: string | undefined): string | null {
  if (!authHeader?.startsWith('Bearer ')) {
    return null;
  }
  return authHeader.slice(7);
}
