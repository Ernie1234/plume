import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { extractBearerToken, JwtService as PlumeJwtService } from '@plume/auth';
import type { JwtPayload } from '@plume/types';

@Injectable()
export class AuthService {
  private readonly jwtService: PlumeJwtService;

  constructor(private readonly configService: ConfigService) {
    this.jwtService = new PlumeJwtService({
      accessSecret: this.configService.get<string>('app.jwt.accessSecret', 'plume-access-secret'),
      refreshSecret: this.configService.get<string>('app.jwt.refreshSecret', 'plume-refresh-secret'),
      accessExpiresIn: this.configService.get<string>('app.jwt.accessExpiresIn', '15m'),
      refreshExpiresIn: this.configService.get<string>('app.jwt.refreshExpiresIn', '7d'),
    });
  }

  extractTokenFromHeader(authorizationHeader?: string): string | null {
    return extractBearerToken(authorizationHeader);
  }

  verifyAccessToken(token: string): JwtPayload {
    try {
      return this.jwtService.verifyAccessToken(token);
    } catch {
      throw new UnauthorizedException('Invalid or expired access token');
    }
  }
}
