import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { type Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { getLogger } from '@plume/logger';

const logger = getLogger('api-gateway:http-logging');

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const startedAt = Date.now();
    const request = context.switchToHttp().getRequest<{ method?: string; url?: string }>();

    return next.handle().pipe(
      tap(() => {
        logger.info('HTTP request completed', {
          method: request.method,
          url: request.url,
          durationMs: Date.now() - startedAt,
        });
      }),
    );
  }
}
