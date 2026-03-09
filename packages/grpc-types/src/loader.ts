import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import * as path from 'path';

/**
 * Resolve the proto directory.
 * In development the .proto files live next to loader.ts (packages/grpc-types/src/).
 * After webpack bundles the service the __dirname changes, so we also accept
 * an env override via PROTO_DIR.
 */
const PROTO_DIR =
  process.env['PROTO_DIR'] ?? path.resolve(__dirname, '..', '..', '..', 'packages', 'grpc-types', 'src');

const PROTO_LOADER_OPTIONS: protoLoader.Options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
  includeDirs: [PROTO_DIR],
};

export function getProtoDir(): string {
  return PROTO_DIR;
}

export function loadProto(protoFile: string): grpc.GrpcObject {
  const protoPath = path.join(PROTO_DIR, protoFile);
  const packageDefinition = protoLoader.loadSync(protoPath, PROTO_LOADER_OPTIONS);
  return grpc.loadPackageDefinition(packageDefinition);
}

// Lazy-load helpers — protos are loaded on first access
let _userProto: grpc.GrpcObject | null = null;
let _tweetProto: grpc.GrpcObject | null = null;
let _notificationProto: grpc.GrpcObject | null = null;
let _timelineProto: grpc.GrpcObject | null = null;
let _commentProto: grpc.GrpcObject | null = null;
let _likesProto: grpc.GrpcObject | null = null;
let _followProto: grpc.GrpcObject | null = null;
let _bookmarkProto: grpc.GrpcObject | null = null;

export function getUserProto(): grpc.GrpcObject {
  if (!_userProto) _userProto = loadProto('user.proto');
  return _userProto;
}
export function getTweetProto(): grpc.GrpcObject {
  if (!_tweetProto) _tweetProto = loadProto('tweet.proto');
  return _tweetProto;
}
export function getNotificationProto(): grpc.GrpcObject {
  if (!_notificationProto) _notificationProto = loadProto('notification.proto');
  return _notificationProto;
}
export function getTimelineProto(): grpc.GrpcObject {
  if (!_timelineProto) _timelineProto = loadProto('timeline.proto');
  return _timelineProto;
}
export function getCommentProto(): grpc.GrpcObject {
  if (!_commentProto) _commentProto = loadProto('comment.proto');
  return _commentProto;
}
export function getLikesProto(): grpc.GrpcObject {
  if (!_likesProto) _likesProto = loadProto('likes.proto');
  return _likesProto;
}
export function getFollowProto(): grpc.GrpcObject {
  if (!_followProto) _followProto = loadProto('follow.proto');
  return _followProto;
}
export function getBookmarkProto(): grpc.GrpcObject {
  if (!_bookmarkProto) _bookmarkProto = loadProto('bookmark.proto');
  return _bookmarkProto;
}

// Service client factory helpers
export function getUserServiceClient(address: string): grpc.Client {
  const pkg = getUserProto() as Record<string, Record<string, Record<string, grpc.ServiceClientConstructor>>>;
  const ServiceClient = pkg['plume']!['user']!['UserService']!;
  return new ServiceClient(address, grpc.credentials.createInsecure());
}

export function getTweetServiceClient(address: string): grpc.Client {
  const pkg = getTweetProto() as Record<string, Record<string, Record<string, grpc.ServiceClientConstructor>>>;
  const ServiceClient = pkg['plume']!['tweet']!['TweetService']!;
  return new ServiceClient(address, grpc.credentials.createInsecure());
}

export function getNotificationServiceClient(address: string): grpc.Client {
  const pkg = getNotificationProto() as Record<string, Record<string, Record<string, grpc.ServiceClientConstructor>>>;
  const ServiceClient = pkg['plume']!['notification']!['NotificationService']!;
  return new ServiceClient(address, grpc.credentials.createInsecure());
}

export function getTimelineServiceClient(address: string): grpc.Client {
  const pkg = getTimelineProto() as Record<string, Record<string, Record<string, grpc.ServiceClientConstructor>>>;
  const ServiceClient = pkg['plume']!['timeline']!['TimelineService']!;
  return new ServiceClient(address, grpc.credentials.createInsecure());
}
export function getCommentServiceClient(address: string): grpc.Client {
  const pkg = getCommentProto() as Record<string, Record<string, Record<string, grpc.ServiceClientConstructor>>>;
  const ServiceClient = pkg['plume']!['comment']!['CommentService']!;
  return new ServiceClient(address, grpc.credentials.createInsecure());
}
export function getLikesServiceClient(address: string): grpc.Client {
  const pkg = getLikesProto() as Record<string, Record<string, Record<string, grpc.ServiceClientConstructor>>>;
  const ServiceClient = pkg['plume']!['likes']!['LikesService']!;
  return new ServiceClient(address, grpc.credentials.createInsecure());
}
export function getFollowServiceClient(address: string): grpc.Client {
  const pkg = getFollowProto() as Record<string, Record<string, Record<string, grpc.ServiceClientConstructor>>>;
  const ServiceClient = pkg['plume']!['follow']!['FollowService']!;
  return new ServiceClient(address, grpc.credentials.createInsecure());
}
export function getBookmarkServiceClient(address: string): grpc.Client {
  const pkg = getBookmarkProto() as Record<string, Record<string, Record<string, grpc.ServiceClientConstructor>>>;
  const ServiceClient = pkg['plume']!['bookmark']!['BookmarkService']!;
  return new ServiceClient(address, grpc.credentials.createInsecure());
}

// gRPC call wrapper — converts callback-based calls to Promises
export function grpcCall<TResponse>(
  client: grpc.Client,
  method: string,
  request: unknown,
): Promise<TResponse> {
  return new Promise((resolve, reject) => {
    const clientMethods = client as unknown as Record<
      string,
      (req: unknown, cb: (err: grpc.ServiceError | null, res: TResponse) => void) => void
    >;

    const fn = clientMethods[method];
    if (!fn) {
      reject(new Error(`gRPC method "${method}" not found on client`));
      return;
    }

    fn.call(client, request, (error: grpc.ServiceError | null, response: TResponse) => {
      if (error) {
        reject(mapGrpcError(error));
      } else {
        resolve(response);
      }
    });
  });
}

// Map gRPC status codes to HTTP-friendly errors
export function mapGrpcError(error: grpc.ServiceError): Error & { statusCode: number; grpcCode: number } {
  const statusMap: Record<number, number> = {
    [grpc.status.OK]: 200,
    [grpc.status.CANCELLED]: 499,
    [grpc.status.UNKNOWN]: 500,
    [grpc.status.INVALID_ARGUMENT]: 400,
    [grpc.status.DEADLINE_EXCEEDED]: 504,
    [grpc.status.NOT_FOUND]: 404,
    [grpc.status.ALREADY_EXISTS]: 409,
    [grpc.status.PERMISSION_DENIED]: 403,
    [grpc.status.RESOURCE_EXHAUSTED]: 429,
    [grpc.status.FAILED_PRECONDITION]: 400,
    [grpc.status.UNAUTHENTICATED]: 401,
    [grpc.status.INTERNAL]: 500,
  };

  const httpStatus = statusMap[error.code] ?? 500;
  const mappedError = new Error(error.message) as Error & { statusCode: number; grpcCode: number };
  mappedError.statusCode = httpStatus;
  mappedError.grpcCode = error.code;
  return mappedError;
}

export { grpc };
export { PROTO_LOADER_OPTIONS };
