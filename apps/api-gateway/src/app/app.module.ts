import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, type ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import GraphQLJSON from 'graphql-type-json';
import { DateTimeResolver } from 'graphql-scalars';

import { AuthModule } from './auth/auth.module';
import { UsersModule } from './graphql/resolvers/users/users.module';
import { TweetsModule } from './graphql/resolvers/tweets/tweets.module';
import { FeedModule } from './graphql/resolvers/feed/feed.module';
import { SearchModule } from './graphql/resolvers/search/search.module';
import { NotificationsModule } from './graphql/resolvers/notifications/notifications.module';
import { GrpcClientsModule } from './config/grpc-clients.module';
import { HealthController } from './rest/controllers/health.controller';
import { RedisThrottlerStorage } from './config/redis-throttler.storage';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { ThrottlerBehindProxyGuard } from './auth/guards/throttler.guard';
import appConfig from './config/app.config';

@Module({
  imports: [
    // Configuration
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig],
      envFilePath: ['.env.local', '.env'],
      cache: true,
    }),

    // GraphQL - Code-first approach
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        autoSchemaFile: join(process.cwd(), 'src/graphql/schema.gql'),
        sortSchema: true,
        playground: config.get('NODE_ENV') !== 'production',
        introspection: config.get('NODE_ENV') !== 'production',
        resolvers: {
          JSON: GraphQLJSON,
          DateTime: DateTimeResolver,
        },
        context: ({ req, res }: { req: unknown; res: unknown }) => ({ req, res }),
        formatError: (error) => ({
          message: error.message,
          code: error.extensions?.['code'],
          path: error.path,
          // Don't expose internals in production
          ...(config.get('NODE_ENV') !== 'production' && {
            locations: error.locations,
            extensions: error.extensions,
          }),
        }),
        subscriptions: {
          'graphql-ws': true,
          'subscriptions-transport-ws': false,
        },
        csrfPrevention: true,
        cache: 'bounded',
      }),
    }),

    // Rate limiting with Redis backend
    ThrottlerModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        throttlers: [
          {
            name: 'global',
            ttl: config.get<number>('RATE_LIMIT_TTL', 60) * 1000,
            limit: config.get<number>('RATE_LIMIT_MAX', 100),
          },
          {
            name: 'tweet',
            ttl: config.get<number>('RATE_LIMIT_TWEET_TTL', 60) * 1000,
            limit: config.get<number>('RATE_LIMIT_TWEET_MAX', 10),
          },
          {
            name: 'auth',
            ttl: 15 * 60 * 1000, // 15 minutes
            limit: 5,
          },
        ],
        storage: new RedisThrottlerStorage(),
      }),
    }),

    // gRPC client connections
    GrpcClientsModule,

    // Feature modules
    AuthModule,
    UsersModule,
    TweetsModule,
    FeedModule,
    SearchModule,
    NotificationsModule,
  ],
  controllers: [HealthController],
  providers: [
    // Apply JWT guard globally
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    // Apply rate limiting globally
    {
      provide: APP_GUARD,
      useClass: ThrottlerBehindProxyGuard,
    },
  ],
})
export class AppModule {}