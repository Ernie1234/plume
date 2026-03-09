import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

import { getLogger } from '@plume/logger';

const logger = getLogger('api-gateway:http-exception');

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<{
      status: (statusCode: number) => { json: (body: unknown) => void };
    }>();
    const request = ctx.getRequest<{ url?: string; method?: string }>();

    const statusCode =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const message =
      exception instanceof HttpException
        ? exception.message
        : 'Internal server error';

    logger.error('HTTP exception', {
      statusCode,
      message,
      method: request.method,
      url: request.url,
    });

    response.status(statusCode).json({
      success: false,
      error: {
        statusCode,
        message,
      },
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
