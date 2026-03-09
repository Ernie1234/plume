import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Reflector } from '@nestjs/core';

import type { JwtPayload } from '@plume/types';

import { AuthService } from '../auth.service';
import { IS_PUBLIC_KEY } from '../decorators/public.decorator';

type RequestWithAuth = {
  headers?: Record<string, string | string[] | undefined>;
  user?: JwtPayload;
};

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly authService: AuthService,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) {
      return true;
    }

    const request = this.getRequest(context);
    const authHeader = this.getAuthHeader(request);
    const token = this.authService.extractTokenFromHeader(authHeader);
    if (!token) {
      throw new UnauthorizedException('Missing authorization token');
    }

    const payload = this.authService.verifyAccessToken(token);
    request.user = payload;
    return true;
  }

  private getRequest(context: ExecutionContext): RequestWithAuth {
    if (context.getType<'http' | 'rpc' | 'ws'>() === 'http') {
      return context.switchToHttp().getRequest<RequestWithAuth>();
    }

    const gqlCtx = GqlExecutionContext.create(context).getContext<{ req?: RequestWithAuth }>();
    return gqlCtx.req ?? {};
  }

  private getAuthHeader(request: RequestWithAuth): string | undefined {
    const header = request.headers?.['authorization'];
    if (Array.isArray(header)) {
      return header[0];
    }
    return header;
  }
}
