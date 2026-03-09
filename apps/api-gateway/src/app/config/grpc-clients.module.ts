import { Module, Global } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';

const PROTO_DIR =
  process.env['PROTO_DIR'] ??
  path.resolve(__dirname, '../../../../packages/grpc-types/proto');

const LOADER_OPTIONS: protoLoader.Options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

function loadServiceClient(
  protoFile: string,
  packagePath: string[],
  serviceName: string,
  address: string,
): grpc.Client {
  const protoPath = path.join(PROTO_DIR, protoFile);
  const packageDef = protoLoader.loadSync(protoPath, LOADER_OPTIONS);
  const proto = grpc.loadPackageDefinition(packageDef);

  // Navigate the package path to get service constructor
  let current: grpc.GrpcObject | grpc.ServiceClientConstructor = proto;
  for (const key of packagePath) {
    current = (current as Record<string, grpc.GrpcObject>)[key] as grpc.GrpcObject;
  }
  const ServiceClient = (current as Record<string, grpc.ServiceClientConstructor>)[serviceName]!;

  return new ServiceClient(
    address,
    grpc.credentials.createInsecure(),
    {
      'grpc.keepalive_time_ms': 30000,
      'grpc.keepalive_timeout_ms': 5000,
      'grpc.keepalive_permit_without_calls': 1,
      'grpc.max_reconnect_backoff_ms': 5000,
    },
  );
}

// Injection tokens
export const USER_SERVICE_CLIENT = 'USER_SERVICE_CLIENT';
export const TWEET_SERVICE_CLIENT = 'TWEET_SERVICE_CLIENT';
export const NOTIFICATION_SERVICE_CLIENT = 'NOTIFICATION_SERVICE_CLIENT';
export const COMMENT_SERVICE_CLIENT = 'COMMENT_SERVICE_CLIENT';
export const LIKES_SERVICE_CLIENT = 'LIKES_SERVICE_CLIENT';
export const FOLLOW_SERVICE_CLIENT = 'FOLLOW_SERVICE_CLIENT';
export const BOOKMARK_SERVICE_CLIENT = 'BOOKMARK_SERVICE_CLIENT';

@Global() // Make gRPC clients available everywhere
@Module({
  providers: [
    {
      provide: USER_SERVICE_CLIENT,
      inject: [ConfigService],
      useFactory: (config: ConfigService): grpc.Client => {
        const address = config.get<string>('app.grpc.userService', 'localhost:50051');
        return loadServiceClient('user.proto', ['plume', 'user'], 'UserService', address);
      },
    },
    {
      provide: TWEET_SERVICE_CLIENT,
      inject: [ConfigService],
      useFactory: (config: ConfigService): grpc.Client => {
        const address = config.get<string>('app.grpc.tweetService', 'localhost:50052');
        return loadServiceClient('tweet.proto', ['plume', 'tweet'], 'TweetService', address);
      },
    },
    {
      provide: NOTIFICATION_SERVICE_CLIENT,
      inject: [ConfigService],
      useFactory: (config: ConfigService): grpc.Client => {
        const address = config.get<string>('app.grpc.notificationService', 'localhost:50053');
        return loadServiceClient(
          'notification.proto',
          ['plume', 'notification'],
          'NotificationService',
          address,
        );
      },
    },
    {
      provide: COMMENT_SERVICE_CLIENT,
      inject: [ConfigService],
      useFactory: (config: ConfigService): grpc.Client => {
        const address = config.get<string>('app.grpc.commentService', 'localhost:50055');
        return loadServiceClient('comment.proto', ['plume', 'comment'], 'CommentService', address);
      },
    },
    {
      provide: LIKES_SERVICE_CLIENT,
      inject: [ConfigService],
      useFactory: (config: ConfigService): grpc.Client => {
        const address = config.get<string>('app.grpc.likesService', 'localhost:50056');
        return loadServiceClient('likes.proto', ['plume', 'likes'], 'LikesService', address);
      },
    },
    {
      provide: FOLLOW_SERVICE_CLIENT,
      inject: [ConfigService],
      useFactory: (config: ConfigService): grpc.Client => {
        const address = config.get<string>('app.grpc.followService', 'localhost:50057');
        return loadServiceClient('follow.proto', ['plume', 'follow'], 'FollowService', address);
      },
    },
    {
      provide: BOOKMARK_SERVICE_CLIENT,
      inject: [ConfigService],
      useFactory: (config: ConfigService): grpc.Client => {
        const address = config.get<string>('app.grpc.bookmarkService', 'localhost:50058');
        return loadServiceClient('bookmark.proto', ['plume', 'bookmark'], 'BookmarkService', address);
      },
    },
  ],
  exports: [
    USER_SERVICE_CLIENT,
    TWEET_SERVICE_CLIENT,
    NOTIFICATION_SERVICE_CLIENT,
    COMMENT_SERVICE_CLIENT,
    LIKES_SERVICE_CLIENT,
    FOLLOW_SERVICE_CLIENT,
    BOOKMARK_SERVICE_CLIENT,
  ],
})
export class GrpcClientsModule {}

// Helper to promisify gRPC calls
export function grpcCall<TRequest, TResponse>(
  client: grpc.Client,
  method: string,
  request: TRequest,
): Promise<TResponse> {
  return new Promise((resolve, reject) => {
    (client as unknown as Record<string, Function>)[method]!(
      request,
      (error: grpc.ServiceError | null, response: TResponse) => {
        if (error) {
          const err = new Error(error.message) as Error & { statusCode: number; grpcCode: number };
          err.grpcCode = error.code;
          err.statusCode = grpcStatusToHttp(error.code);
          reject(err);
        } else {
          resolve(response);
        }
      },
    );
  });
}

function grpcStatusToHttp(grpcStatus: number): number {
  const map: Record<number, number> = {
    0: 200,  // OK
    1: 499,  // CANCELLED
    2: 500,  // UNKNOWN
    3: 400,  // INVALID_ARGUMENT
    4: 504,  // DEADLINE_EXCEEDED
    5: 404,  // NOT_FOUND
    6: 409,  // ALREADY_EXISTS
    7: 403,  // PERMISSION_DENIED
    8: 429,  // RESOURCE_EXHAUSTED
    9: 400,  // FAILED_PRECONDITION
    16: 401, // UNAUTHENTICATED
  };
  return map[grpcStatus] ?? 500;
}