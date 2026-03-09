import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import 'reflect-metadata';

import { getLogger } from '@plume/logger';

import { AppModule } from './app/app.module';
import { HttpExceptionFilter } from './app/rest/middlewares/http-exception.filter';
import { LoggingInterceptor } from './app/rest/middlewares/logging.interceptor';
import { TransformInterceptor } from './app/rest/middlewares/transform.interceptor';

const logger = getLogger('api-gateway');

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: false, // Use Pino instead
    bufferLogs: true,
  });

  // Security
  app.use(helmet());
  app.use(cookieParser());

  // CORS
  app.enableCors({
    origin: process.env['FRONTEND_URL'] ?? 'http://localhost:3001',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Refresh-Token'],
  });

  // Global pipes
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );

  // Global filters & interceptors
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new LoggingInterceptor(), new TransformInterceptor());

  // API prefix for REST routes
  app.setGlobalPrefix('api/v1', {
    exclude: ['health', 'graphql'],
  });

  // Swagger docs
  if (process.env['NODE_ENV'] !== 'production') {
    const swaggerConfig = new DocumentBuilder()
      .setTitle('Plume API')
      .setDescription('Plume social platform REST API documentation')
      .setVersion('1.0')
      .addBearerAuth()
      .addCookieAuth('refresh_token')
      .addTag('auth', 'Authentication endpoints')
      .addTag('tweets', 'Tweet endpoints')
      .addTag('users', 'User endpoints')
      .addTag('feed', 'Feed endpoints')
      .addTag('search', 'Search endpoints')
      .build();

    const document = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup('api/docs', app, document, {
      swaggerOptions: { persistAuthorization: true },
    });

    logger.info('Swagger docs available at /api/docs');
  }

  const port = parseInt(process.env['API_GATEWAY_PORT'] ?? '8000', 10);
  const host = process.env['API_GATEWAY_HOST'] ?? '0.0.0.0';

  await app.listen(port, host);
  logger.info(`🪶 Plume API Gateway running on http://${host}:${port}`);
  logger.info(`📊 GraphQL Playground: http://${host}:${port}/graphql`);
}

bootstrap().catch((error: unknown) => {
  logger.error('Failed to start API Gateway', error as Error);
  process.exit(1);
});
