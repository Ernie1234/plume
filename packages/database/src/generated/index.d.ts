
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Tweet
 * 
 */
export type Tweet = $Result.DefaultSelection<Prisma.$TweetPayload>
/**
 * Model Follow
 * 
 */
export type Follow = $Result.DefaultSelection<Prisma.$FollowPayload>
/**
 * Model Like
 * 
 */
export type Like = $Result.DefaultSelection<Prisma.$LikePayload>
/**
 * Model Bookmark
 * 
 */
export type Bookmark = $Result.DefaultSelection<Prisma.$BookmarkPayload>
/**
 * Model Media
 * 
 */
export type Media = $Result.DefaultSelection<Prisma.$MediaPayload>
/**
 * Model Hashtag
 * 
 */
export type Hashtag = $Result.DefaultSelection<Prisma.$HashtagPayload>
/**
 * Model TweetHashtag
 * 
 */
export type TweetHashtag = $Result.DefaultSelection<Prisma.$TweetHashtagPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model RefreshToken
 * 
 */
export type RefreshToken = $Result.DefaultSelection<Prisma.$RefreshTokenPayload>
/**
 * Model TweetMetrics
 * 
 */
export type TweetMetrics = $Result.DefaultSelection<Prisma.$TweetMetricsPayload>
/**
 * Model Timeline
 * 
 */
export type Timeline = $Result.DefaultSelection<Prisma.$TimelinePayload>
/**
 * Model Retweet
 * 
 */
export type Retweet = $Result.DefaultSelection<Prisma.$RetweetPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const TweetType: {
  TWEET: 'TWEET',
  REPLY: 'REPLY',
  RETWEET: 'RETWEET'
};

export type TweetType = (typeof TweetType)[keyof typeof TweetType]


export const MediaType: {
  IMAGE: 'IMAGE',
  VIDEO: 'VIDEO',
  GIF: 'GIF'
};

export type MediaType = (typeof MediaType)[keyof typeof MediaType]


export const NotificationType: {
  LIKE: 'LIKE',
  RETWEET: 'RETWEET',
  FOLLOW: 'FOLLOW',
  REPLY: 'REPLY'
};

export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type TweetType = $Enums.TweetType

export const TweetType: typeof $Enums.TweetType

export type MediaType = $Enums.MediaType

export const MediaType: typeof $Enums.MediaType

export type NotificationType = $Enums.NotificationType

export const NotificationType: typeof $Enums.NotificationType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.tweet`: Exposes CRUD operations for the **Tweet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tweets
    * const tweets = await prisma.tweet.findMany()
    * ```
    */
  get tweet(): Prisma.TweetDelegate<ExtArgs>;

  /**
   * `prisma.follow`: Exposes CRUD operations for the **Follow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Follows
    * const follows = await prisma.follow.findMany()
    * ```
    */
  get follow(): Prisma.FollowDelegate<ExtArgs>;

  /**
   * `prisma.like`: Exposes CRUD operations for the **Like** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Likes
    * const likes = await prisma.like.findMany()
    * ```
    */
  get like(): Prisma.LikeDelegate<ExtArgs>;

  /**
   * `prisma.bookmark`: Exposes CRUD operations for the **Bookmark** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookmarks
    * const bookmarks = await prisma.bookmark.findMany()
    * ```
    */
  get bookmark(): Prisma.BookmarkDelegate<ExtArgs>;

  /**
   * `prisma.media`: Exposes CRUD operations for the **Media** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Media
    * const media = await prisma.media.findMany()
    * ```
    */
  get media(): Prisma.MediaDelegate<ExtArgs>;

  /**
   * `prisma.hashtag`: Exposes CRUD operations for the **Hashtag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hashtags
    * const hashtags = await prisma.hashtag.findMany()
    * ```
    */
  get hashtag(): Prisma.HashtagDelegate<ExtArgs>;

  /**
   * `prisma.tweetHashtag`: Exposes CRUD operations for the **TweetHashtag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TweetHashtags
    * const tweetHashtags = await prisma.tweetHashtag.findMany()
    * ```
    */
  get tweetHashtag(): Prisma.TweetHashtagDelegate<ExtArgs>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs>;

  /**
   * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshTokens
    * const refreshTokens = await prisma.refreshToken.findMany()
    * ```
    */
  get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs>;

  /**
   * `prisma.tweetMetrics`: Exposes CRUD operations for the **TweetMetrics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TweetMetrics
    * const tweetMetrics = await prisma.tweetMetrics.findMany()
    * ```
    */
  get tweetMetrics(): Prisma.TweetMetricsDelegate<ExtArgs>;

  /**
   * `prisma.timeline`: Exposes CRUD operations for the **Timeline** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Timelines
    * const timelines = await prisma.timeline.findMany()
    * ```
    */
  get timeline(): Prisma.TimelineDelegate<ExtArgs>;

  /**
   * `prisma.retweet`: Exposes CRUD operations for the **Retweet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Retweets
    * const retweets = await prisma.retweet.findMany()
    * ```
    */
  get retweet(): Prisma.RetweetDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Tweet: 'Tweet',
    Follow: 'Follow',
    Like: 'Like',
    Bookmark: 'Bookmark',
    Media: 'Media',
    Hashtag: 'Hashtag',
    TweetHashtag: 'TweetHashtag',
    Notification: 'Notification',
    RefreshToken: 'RefreshToken',
    TweetMetrics: 'TweetMetrics',
    Timeline: 'Timeline',
    Retweet: 'Retweet'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "tweet" | "follow" | "like" | "bookmark" | "media" | "hashtag" | "tweetHashtag" | "notification" | "refreshToken" | "tweetMetrics" | "timeline" | "retweet"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Tweet: {
        payload: Prisma.$TweetPayload<ExtArgs>
        fields: Prisma.TweetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TweetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TweetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetPayload>
          }
          findFirst: {
            args: Prisma.TweetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TweetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetPayload>
          }
          findMany: {
            args: Prisma.TweetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetPayload>[]
          }
          create: {
            args: Prisma.TweetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetPayload>
          }
          createMany: {
            args: Prisma.TweetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TweetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetPayload>[]
          }
          delete: {
            args: Prisma.TweetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetPayload>
          }
          update: {
            args: Prisma.TweetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetPayload>
          }
          deleteMany: {
            args: Prisma.TweetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TweetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TweetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetPayload>
          }
          aggregate: {
            args: Prisma.TweetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTweet>
          }
          groupBy: {
            args: Prisma.TweetGroupByArgs<ExtArgs>
            result: $Utils.Optional<TweetGroupByOutputType>[]
          }
          count: {
            args: Prisma.TweetCountArgs<ExtArgs>
            result: $Utils.Optional<TweetCountAggregateOutputType> | number
          }
        }
      }
      Follow: {
        payload: Prisma.$FollowPayload<ExtArgs>
        fields: Prisma.FollowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FollowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FollowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          findFirst: {
            args: Prisma.FollowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FollowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          findMany: {
            args: Prisma.FollowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>[]
          }
          create: {
            args: Prisma.FollowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          createMany: {
            args: Prisma.FollowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FollowCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>[]
          }
          delete: {
            args: Prisma.FollowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          update: {
            args: Prisma.FollowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          deleteMany: {
            args: Prisma.FollowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FollowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FollowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          aggregate: {
            args: Prisma.FollowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFollow>
          }
          groupBy: {
            args: Prisma.FollowGroupByArgs<ExtArgs>
            result: $Utils.Optional<FollowGroupByOutputType>[]
          }
          count: {
            args: Prisma.FollowCountArgs<ExtArgs>
            result: $Utils.Optional<FollowCountAggregateOutputType> | number
          }
        }
      }
      Like: {
        payload: Prisma.$LikePayload<ExtArgs>
        fields: Prisma.LikeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LikeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LikeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          findFirst: {
            args: Prisma.LikeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LikeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          findMany: {
            args: Prisma.LikeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>[]
          }
          create: {
            args: Prisma.LikeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          createMany: {
            args: Prisma.LikeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LikeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>[]
          }
          delete: {
            args: Prisma.LikeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          update: {
            args: Prisma.LikeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          deleteMany: {
            args: Prisma.LikeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LikeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LikeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          aggregate: {
            args: Prisma.LikeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLike>
          }
          groupBy: {
            args: Prisma.LikeGroupByArgs<ExtArgs>
            result: $Utils.Optional<LikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.LikeCountArgs<ExtArgs>
            result: $Utils.Optional<LikeCountAggregateOutputType> | number
          }
        }
      }
      Bookmark: {
        payload: Prisma.$BookmarkPayload<ExtArgs>
        fields: Prisma.BookmarkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookmarkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookmarkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>
          }
          findFirst: {
            args: Prisma.BookmarkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookmarkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>
          }
          findMany: {
            args: Prisma.BookmarkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>[]
          }
          create: {
            args: Prisma.BookmarkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>
          }
          createMany: {
            args: Prisma.BookmarkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookmarkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>[]
          }
          delete: {
            args: Prisma.BookmarkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>
          }
          update: {
            args: Prisma.BookmarkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>
          }
          deleteMany: {
            args: Prisma.BookmarkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookmarkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BookmarkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>
          }
          aggregate: {
            args: Prisma.BookmarkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookmark>
          }
          groupBy: {
            args: Prisma.BookmarkGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookmarkGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookmarkCountArgs<ExtArgs>
            result: $Utils.Optional<BookmarkCountAggregateOutputType> | number
          }
        }
      }
      Media: {
        payload: Prisma.$MediaPayload<ExtArgs>
        fields: Prisma.MediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          findFirst: {
            args: Prisma.MediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          findMany: {
            args: Prisma.MediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          create: {
            args: Prisma.MediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          createMany: {
            args: Prisma.MediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MediaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          delete: {
            args: Prisma.MediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          update: {
            args: Prisma.MediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          deleteMany: {
            args: Prisma.MediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          aggregate: {
            args: Prisma.MediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedia>
          }
          groupBy: {
            args: Prisma.MediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MediaCountArgs<ExtArgs>
            result: $Utils.Optional<MediaCountAggregateOutputType> | number
          }
        }
      }
      Hashtag: {
        payload: Prisma.$HashtagPayload<ExtArgs>
        fields: Prisma.HashtagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HashtagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HashtagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HashtagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HashtagPayload>
          }
          findFirst: {
            args: Prisma.HashtagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HashtagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HashtagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HashtagPayload>
          }
          findMany: {
            args: Prisma.HashtagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HashtagPayload>[]
          }
          create: {
            args: Prisma.HashtagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HashtagPayload>
          }
          createMany: {
            args: Prisma.HashtagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HashtagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HashtagPayload>[]
          }
          delete: {
            args: Prisma.HashtagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HashtagPayload>
          }
          update: {
            args: Prisma.HashtagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HashtagPayload>
          }
          deleteMany: {
            args: Prisma.HashtagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HashtagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HashtagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HashtagPayload>
          }
          aggregate: {
            args: Prisma.HashtagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHashtag>
          }
          groupBy: {
            args: Prisma.HashtagGroupByArgs<ExtArgs>
            result: $Utils.Optional<HashtagGroupByOutputType>[]
          }
          count: {
            args: Prisma.HashtagCountArgs<ExtArgs>
            result: $Utils.Optional<HashtagCountAggregateOutputType> | number
          }
        }
      }
      TweetHashtag: {
        payload: Prisma.$TweetHashtagPayload<ExtArgs>
        fields: Prisma.TweetHashtagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TweetHashtagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetHashtagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TweetHashtagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetHashtagPayload>
          }
          findFirst: {
            args: Prisma.TweetHashtagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetHashtagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TweetHashtagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetHashtagPayload>
          }
          findMany: {
            args: Prisma.TweetHashtagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetHashtagPayload>[]
          }
          create: {
            args: Prisma.TweetHashtagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetHashtagPayload>
          }
          createMany: {
            args: Prisma.TweetHashtagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TweetHashtagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetHashtagPayload>[]
          }
          delete: {
            args: Prisma.TweetHashtagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetHashtagPayload>
          }
          update: {
            args: Prisma.TweetHashtagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetHashtagPayload>
          }
          deleteMany: {
            args: Prisma.TweetHashtagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TweetHashtagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TweetHashtagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetHashtagPayload>
          }
          aggregate: {
            args: Prisma.TweetHashtagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTweetHashtag>
          }
          groupBy: {
            args: Prisma.TweetHashtagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TweetHashtagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TweetHashtagCountArgs<ExtArgs>
            result: $Utils.Optional<TweetHashtagCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      RefreshToken: {
        payload: Prisma.$RefreshTokenPayload<ExtArgs>
        fields: Prisma.RefreshTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findFirst: {
            args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findMany: {
            args: Prisma.RefreshTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          create: {
            args: Prisma.RefreshTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          createMany: {
            args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RefreshTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          delete: {
            args: Prisma.RefreshTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          update: {
            args: Prisma.RefreshTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          deleteMany: {
            args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RefreshTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          aggregate: {
            args: Prisma.RefreshTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefreshToken>
          }
          groupBy: {
            args: Prisma.RefreshTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefreshTokenCountArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenCountAggregateOutputType> | number
          }
        }
      }
      TweetMetrics: {
        payload: Prisma.$TweetMetricsPayload<ExtArgs>
        fields: Prisma.TweetMetricsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TweetMetricsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetMetricsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TweetMetricsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetMetricsPayload>
          }
          findFirst: {
            args: Prisma.TweetMetricsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetMetricsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TweetMetricsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetMetricsPayload>
          }
          findMany: {
            args: Prisma.TweetMetricsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetMetricsPayload>[]
          }
          create: {
            args: Prisma.TweetMetricsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetMetricsPayload>
          }
          createMany: {
            args: Prisma.TweetMetricsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TweetMetricsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetMetricsPayload>[]
          }
          delete: {
            args: Prisma.TweetMetricsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetMetricsPayload>
          }
          update: {
            args: Prisma.TweetMetricsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetMetricsPayload>
          }
          deleteMany: {
            args: Prisma.TweetMetricsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TweetMetricsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TweetMetricsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetMetricsPayload>
          }
          aggregate: {
            args: Prisma.TweetMetricsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTweetMetrics>
          }
          groupBy: {
            args: Prisma.TweetMetricsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TweetMetricsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TweetMetricsCountArgs<ExtArgs>
            result: $Utils.Optional<TweetMetricsCountAggregateOutputType> | number
          }
        }
      }
      Timeline: {
        payload: Prisma.$TimelinePayload<ExtArgs>
        fields: Prisma.TimelineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TimelineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TimelineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelinePayload>
          }
          findFirst: {
            args: Prisma.TimelineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TimelineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelinePayload>
          }
          findMany: {
            args: Prisma.TimelineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelinePayload>[]
          }
          create: {
            args: Prisma.TimelineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelinePayload>
          }
          createMany: {
            args: Prisma.TimelineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TimelineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelinePayload>[]
          }
          delete: {
            args: Prisma.TimelineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelinePayload>
          }
          update: {
            args: Prisma.TimelineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelinePayload>
          }
          deleteMany: {
            args: Prisma.TimelineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TimelineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TimelineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelinePayload>
          }
          aggregate: {
            args: Prisma.TimelineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTimeline>
          }
          groupBy: {
            args: Prisma.TimelineGroupByArgs<ExtArgs>
            result: $Utils.Optional<TimelineGroupByOutputType>[]
          }
          count: {
            args: Prisma.TimelineCountArgs<ExtArgs>
            result: $Utils.Optional<TimelineCountAggregateOutputType> | number
          }
        }
      }
      Retweet: {
        payload: Prisma.$RetweetPayload<ExtArgs>
        fields: Prisma.RetweetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RetweetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RetweetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RetweetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RetweetPayload>
          }
          findFirst: {
            args: Prisma.RetweetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RetweetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RetweetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RetweetPayload>
          }
          findMany: {
            args: Prisma.RetweetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RetweetPayload>[]
          }
          create: {
            args: Prisma.RetweetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RetweetPayload>
          }
          createMany: {
            args: Prisma.RetweetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RetweetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RetweetPayload>[]
          }
          delete: {
            args: Prisma.RetweetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RetweetPayload>
          }
          update: {
            args: Prisma.RetweetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RetweetPayload>
          }
          deleteMany: {
            args: Prisma.RetweetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RetweetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RetweetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RetweetPayload>
          }
          aggregate: {
            args: Prisma.RetweetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRetweet>
          }
          groupBy: {
            args: Prisma.RetweetGroupByArgs<ExtArgs>
            result: $Utils.Optional<RetweetGroupByOutputType>[]
          }
          count: {
            args: Prisma.RetweetCountArgs<ExtArgs>
            result: $Utils.Optional<RetweetCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    tweets: number
    followers: number
    following: number
    likes: number
    bookmarks: number
    notifications: number
    refreshTokens: number
    timelines: number
    retweets: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tweets?: boolean | UserCountOutputTypeCountTweetsArgs
    followers?: boolean | UserCountOutputTypeCountFollowersArgs
    following?: boolean | UserCountOutputTypeCountFollowingArgs
    likes?: boolean | UserCountOutputTypeCountLikesArgs
    bookmarks?: boolean | UserCountOutputTypeCountBookmarksArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
    refreshTokens?: boolean | UserCountOutputTypeCountRefreshTokensArgs
    timelines?: boolean | UserCountOutputTypeCountTimelinesArgs
    retweets?: boolean | UserCountOutputTypeCountRetweetsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTweetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TweetWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFollowersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFollowingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookmarkWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRefreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTimelinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimelineWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRetweetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RetweetWhereInput
  }


  /**
   * Count Type TweetCountOutputType
   */

  export type TweetCountOutputType = {
    replies: number
    media: number
    hashtags: number
    likes: number
    bookmarks: number
    tweetMetrics: number
    timelines: number
    tweetHashtags: number
    retweets: number
  }

  export type TweetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    replies?: boolean | TweetCountOutputTypeCountRepliesArgs
    media?: boolean | TweetCountOutputTypeCountMediaArgs
    hashtags?: boolean | TweetCountOutputTypeCountHashtagsArgs
    likes?: boolean | TweetCountOutputTypeCountLikesArgs
    bookmarks?: boolean | TweetCountOutputTypeCountBookmarksArgs
    tweetMetrics?: boolean | TweetCountOutputTypeCountTweetMetricsArgs
    timelines?: boolean | TweetCountOutputTypeCountTimelinesArgs
    tweetHashtags?: boolean | TweetCountOutputTypeCountTweetHashtagsArgs
    retweets?: boolean | TweetCountOutputTypeCountRetweetsArgs
  }

  // Custom InputTypes
  /**
   * TweetCountOutputType without action
   */
  export type TweetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TweetCountOutputType
     */
    select?: TweetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TweetCountOutputType without action
   */
  export type TweetCountOutputTypeCountRepliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TweetWhereInput
  }

  /**
   * TweetCountOutputType without action
   */
  export type TweetCountOutputTypeCountMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaWhereInput
  }

  /**
   * TweetCountOutputType without action
   */
  export type TweetCountOutputTypeCountHashtagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HashtagWhereInput
  }

  /**
   * TweetCountOutputType without action
   */
  export type TweetCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeWhereInput
  }

  /**
   * TweetCountOutputType without action
   */
  export type TweetCountOutputTypeCountBookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookmarkWhereInput
  }

  /**
   * TweetCountOutputType without action
   */
  export type TweetCountOutputTypeCountTweetMetricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TweetMetricsWhereInput
  }

  /**
   * TweetCountOutputType without action
   */
  export type TweetCountOutputTypeCountTimelinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimelineWhereInput
  }

  /**
   * TweetCountOutputType without action
   */
  export type TweetCountOutputTypeCountTweetHashtagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TweetHashtagWhereInput
  }

  /**
   * TweetCountOutputType without action
   */
  export type TweetCountOutputTypeCountRetweetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RetweetWhereInput
  }


  /**
   * Count Type HashtagCountOutputType
   */

  export type HashtagCountOutputType = {
    tweets: number
    tweetHashtags: number
  }

  export type HashtagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tweets?: boolean | HashtagCountOutputTypeCountTweetsArgs
    tweetHashtags?: boolean | HashtagCountOutputTypeCountTweetHashtagsArgs
  }

  // Custom InputTypes
  /**
   * HashtagCountOutputType without action
   */
  export type HashtagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HashtagCountOutputType
     */
    select?: HashtagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HashtagCountOutputType without action
   */
  export type HashtagCountOutputTypeCountTweetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TweetWhereInput
  }

  /**
   * HashtagCountOutputType without action
   */
  export type HashtagCountOutputTypeCountTweetHashtagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TweetHashtagWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    bio: string | null
    avatarUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    bio: string | null
    avatarUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    passwordHash: number
    role: number
    bio: number
    avatarUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    passwordHash?: true
    role?: true
    bio?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    passwordHash?: true
    role?: true
    bio?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    passwordHash?: true
    role?: true
    bio?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    email: string
    passwordHash: string
    role: $Enums.UserRole
    bio: string | null
    avatarUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    bio?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tweets?: boolean | User$tweetsArgs<ExtArgs>
    followers?: boolean | User$followersArgs<ExtArgs>
    following?: boolean | User$followingArgs<ExtArgs>
    likes?: boolean | User$likesArgs<ExtArgs>
    bookmarks?: boolean | User$bookmarksArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    timelines?: boolean | User$timelinesArgs<ExtArgs>
    retweets?: boolean | User$retweetsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    bio?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    bio?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tweets?: boolean | User$tweetsArgs<ExtArgs>
    followers?: boolean | User$followersArgs<ExtArgs>
    following?: boolean | User$followingArgs<ExtArgs>
    likes?: boolean | User$likesArgs<ExtArgs>
    bookmarks?: boolean | User$bookmarksArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    timelines?: boolean | User$timelinesArgs<ExtArgs>
    retweets?: boolean | User$retweetsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      tweets: Prisma.$TweetPayload<ExtArgs>[]
      followers: Prisma.$FollowPayload<ExtArgs>[]
      following: Prisma.$FollowPayload<ExtArgs>[]
      likes: Prisma.$LikePayload<ExtArgs>[]
      bookmarks: Prisma.$BookmarkPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      refreshTokens: Prisma.$RefreshTokenPayload<ExtArgs>[]
      timelines: Prisma.$TimelinePayload<ExtArgs>[]
      retweets: Prisma.$RetweetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
      passwordHash: string
      role: $Enums.UserRole
      bio: string | null
      avatarUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tweets<T extends User$tweetsArgs<ExtArgs> = {}>(args?: Subset<T, User$tweetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TweetPayload<ExtArgs>, T, "findMany"> | Null>
    followers<T extends User$followersArgs<ExtArgs> = {}>(args?: Subset<T, User$followersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findMany"> | Null>
    following<T extends User$followingArgs<ExtArgs> = {}>(args?: Subset<T, User$followingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findMany"> | Null>
    likes<T extends User$likesArgs<ExtArgs> = {}>(args?: Subset<T, User$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany"> | Null>
    bookmarks<T extends User$bookmarksArgs<ExtArgs> = {}>(args?: Subset<T, User$bookmarksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "findMany"> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany"> | Null>
    refreshTokens<T extends User$refreshTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$refreshTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany"> | Null>
    timelines<T extends User$timelinesArgs<ExtArgs> = {}>(args?: Subset<T, User$timelinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, "findMany"> | Null>
    retweets<T extends User$retweetsArgs<ExtArgs> = {}>(args?: Subset<T, User$retweetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RetweetPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly bio: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.tweets
   */
  export type User$tweetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tweet
     */
    select?: TweetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetInclude<ExtArgs> | null
    where?: TweetWhereInput
    orderBy?: TweetOrderByWithRelationInput | TweetOrderByWithRelationInput[]
    cursor?: TweetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TweetScalarFieldEnum | TweetScalarFieldEnum[]
  }

  /**
   * User.followers
   */
  export type User$followersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    where?: FollowWhereInput
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[]
    cursor?: FollowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[]
  }

  /**
   * User.following
   */
  export type User$followingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    where?: FollowWhereInput
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[]
    cursor?: FollowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[]
  }

  /**
   * User.likes
   */
  export type User$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    where?: LikeWhereInput
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    cursor?: LikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * User.bookmarks
   */
  export type User$bookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    where?: BookmarkWhereInput
    orderBy?: BookmarkOrderByWithRelationInput | BookmarkOrderByWithRelationInput[]
    cursor?: BookmarkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookmarkScalarFieldEnum | BookmarkScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User.refreshTokens
   */
  export type User$refreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    cursor?: RefreshTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * User.timelines
   */
  export type User$timelinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineInclude<ExtArgs> | null
    where?: TimelineWhereInput
    orderBy?: TimelineOrderByWithRelationInput | TimelineOrderByWithRelationInput[]
    cursor?: TimelineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TimelineScalarFieldEnum | TimelineScalarFieldEnum[]
  }

  /**
   * User.retweets
   */
  export type User$retweetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Retweet
     */
    select?: RetweetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RetweetInclude<ExtArgs> | null
    where?: RetweetWhereInput
    orderBy?: RetweetOrderByWithRelationInput | RetweetOrderByWithRelationInput[]
    cursor?: RetweetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RetweetScalarFieldEnum | RetweetScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Tweet
   */

  export type AggregateTweet = {
    _count: TweetCountAggregateOutputType | null
    _min: TweetMinAggregateOutputType | null
    _max: TweetMaxAggregateOutputType | null
  }

  export type TweetMinAggregateOutputType = {
    id: string | null
    content: string | null
    type: $Enums.TweetType | null
    authorId: string | null
    parentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TweetMaxAggregateOutputType = {
    id: string | null
    content: string | null
    type: $Enums.TweetType | null
    authorId: string | null
    parentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TweetCountAggregateOutputType = {
    id: number
    content: number
    type: number
    authorId: number
    parentId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TweetMinAggregateInputType = {
    id?: true
    content?: true
    type?: true
    authorId?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TweetMaxAggregateInputType = {
    id?: true
    content?: true
    type?: true
    authorId?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TweetCountAggregateInputType = {
    id?: true
    content?: true
    type?: true
    authorId?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TweetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tweet to aggregate.
     */
    where?: TweetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tweets to fetch.
     */
    orderBy?: TweetOrderByWithRelationInput | TweetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TweetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tweets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tweets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tweets
    **/
    _count?: true | TweetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TweetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TweetMaxAggregateInputType
  }

  export type GetTweetAggregateType<T extends TweetAggregateArgs> = {
        [P in keyof T & keyof AggregateTweet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTweet[P]>
      : GetScalarType<T[P], AggregateTweet[P]>
  }




  export type TweetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TweetWhereInput
    orderBy?: TweetOrderByWithAggregationInput | TweetOrderByWithAggregationInput[]
    by: TweetScalarFieldEnum[] | TweetScalarFieldEnum
    having?: TweetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TweetCountAggregateInputType | true
    _min?: TweetMinAggregateInputType
    _max?: TweetMaxAggregateInputType
  }

  export type TweetGroupByOutputType = {
    id: string
    content: string
    type: $Enums.TweetType
    authorId: string
    parentId: string | null
    createdAt: Date
    updatedAt: Date
    _count: TweetCountAggregateOutputType | null
    _min: TweetMinAggregateOutputType | null
    _max: TweetMaxAggregateOutputType | null
  }

  type GetTweetGroupByPayload<T extends TweetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TweetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TweetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TweetGroupByOutputType[P]>
            : GetScalarType<T[P], TweetGroupByOutputType[P]>
        }
      >
    >


  export type TweetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    type?: boolean
    authorId?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | Tweet$parentArgs<ExtArgs>
    replies?: boolean | Tweet$repliesArgs<ExtArgs>
    media?: boolean | Tweet$mediaArgs<ExtArgs>
    hashtags?: boolean | Tweet$hashtagsArgs<ExtArgs>
    likes?: boolean | Tweet$likesArgs<ExtArgs>
    bookmarks?: boolean | Tweet$bookmarksArgs<ExtArgs>
    tweetMetrics?: boolean | Tweet$tweetMetricsArgs<ExtArgs>
    timelines?: boolean | Tweet$timelinesArgs<ExtArgs>
    tweetHashtags?: boolean | Tweet$tweetHashtagsArgs<ExtArgs>
    retweets?: boolean | Tweet$retweetsArgs<ExtArgs>
    _count?: boolean | TweetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tweet"]>

  export type TweetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    type?: boolean
    authorId?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | Tweet$parentArgs<ExtArgs>
  }, ExtArgs["result"]["tweet"]>

  export type TweetSelectScalar = {
    id?: boolean
    content?: boolean
    type?: boolean
    authorId?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TweetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | Tweet$parentArgs<ExtArgs>
    replies?: boolean | Tweet$repliesArgs<ExtArgs>
    media?: boolean | Tweet$mediaArgs<ExtArgs>
    hashtags?: boolean | Tweet$hashtagsArgs<ExtArgs>
    likes?: boolean | Tweet$likesArgs<ExtArgs>
    bookmarks?: boolean | Tweet$bookmarksArgs<ExtArgs>
    tweetMetrics?: boolean | Tweet$tweetMetricsArgs<ExtArgs>
    timelines?: boolean | Tweet$timelinesArgs<ExtArgs>
    tweetHashtags?: boolean | Tweet$tweetHashtagsArgs<ExtArgs>
    retweets?: boolean | Tweet$retweetsArgs<ExtArgs>
    _count?: boolean | TweetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TweetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | Tweet$parentArgs<ExtArgs>
  }

  export type $TweetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tweet"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      parent: Prisma.$TweetPayload<ExtArgs> | null
      replies: Prisma.$TweetPayload<ExtArgs>[]
      media: Prisma.$MediaPayload<ExtArgs>[]
      hashtags: Prisma.$HashtagPayload<ExtArgs>[]
      likes: Prisma.$LikePayload<ExtArgs>[]
      bookmarks: Prisma.$BookmarkPayload<ExtArgs>[]
      tweetMetrics: Prisma.$TweetMetricsPayload<ExtArgs>[]
      timelines: Prisma.$TimelinePayload<ExtArgs>[]
      tweetHashtags: Prisma.$TweetHashtagPayload<ExtArgs>[]
      retweets: Prisma.$RetweetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      type: $Enums.TweetType
      authorId: string
      parentId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tweet"]>
    composites: {}
  }

  type TweetGetPayload<S extends boolean | null | undefined | TweetDefaultArgs> = $Result.GetResult<Prisma.$TweetPayload, S>

  type TweetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TweetFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TweetCountAggregateInputType | true
    }

  export interface TweetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tweet'], meta: { name: 'Tweet' } }
    /**
     * Find zero or one Tweet that matches the filter.
     * @param {TweetFindUniqueArgs} args - Arguments to find a Tweet
     * @example
     * // Get one Tweet
     * const tweet = await prisma.tweet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TweetFindUniqueArgs>(args: SelectSubset<T, TweetFindUniqueArgs<ExtArgs>>): Prisma__TweetClient<$Result.GetResult<Prisma.$TweetPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tweet that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TweetFindUniqueOrThrowArgs} args - Arguments to find a Tweet
     * @example
     * // Get one Tweet
     * const tweet = await prisma.tweet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TweetFindUniqueOrThrowArgs>(args: SelectSubset<T, TweetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TweetClient<$Result.GetResult<Prisma.$TweetPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tweet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TweetFindFirstArgs} args - Arguments to find a Tweet
     * @example
     * // Get one Tweet
     * const tweet = await prisma.tweet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TweetFindFirstArgs>(args?: SelectSubset<T, TweetFindFirstArgs<ExtArgs>>): Prisma__TweetClient<$Result.GetResult<Prisma.$TweetPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tweet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TweetFindFirstOrThrowArgs} args - Arguments to find a Tweet
     * @example
     * // Get one Tweet
     * const tweet = await prisma.tweet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TweetFindFirstOrThrowArgs>(args?: SelectSubset<T, TweetFindFirstOrThrowArgs<ExtArgs>>): Prisma__TweetClient<$Result.GetResult<Prisma.$TweetPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tweets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TweetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tweets
     * const tweets = await prisma.tweet.findMany()
     * 
     * // Get first 10 Tweets
     * const tweets = await prisma.tweet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tweetWithIdOnly = await prisma.tweet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TweetFindManyArgs>(args?: SelectSubset<T, TweetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TweetPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tweet.
     * @param {TweetCreateArgs} args - Arguments to create a Tweet.
     * @example
     * // Create one Tweet
     * const Tweet = await prisma.tweet.create({
     *   data: {
     *     // ... data to create a Tweet
     *   }
     * })
     * 
     */
    create<T extends TweetCreateArgs>(args: SelectSubset<T, TweetCreateArgs<ExtArgs>>): Prisma__TweetClient<$Result.GetResult<Prisma.$TweetPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tweets.
     * @param {TweetCreateManyArgs} args - Arguments to create many Tweets.
     * @example
     * // Create many Tweets
     * const tweet = await prisma.tweet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TweetCreateManyArgs>(args?: SelectSubset<T, TweetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tweets and returns the data saved in the database.
     * @param {TweetCreateManyAndReturnArgs} args - Arguments to create many Tweets.
     * @example
     * // Create many Tweets
     * const tweet = await prisma.tweet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tweets and only return the `id`
     * const tweetWithIdOnly = await prisma.tweet.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TweetCreateManyAndReturnArgs>(args?: SelectSubset<T, TweetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TweetPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Tweet.
     * @param {TweetDeleteArgs} args - Arguments to delete one Tweet.
     * @example
     * // Delete one Tweet
     * const Tweet = await prisma.tweet.delete({
     *   where: {
     *     // ... filter to delete one Tweet
     *   }
     * })
     * 
     */
    delete<T extends TweetDeleteArgs>(args: SelectSubset<T, TweetDeleteArgs<ExtArgs>>): Prisma__TweetClient<$Result.GetResult<Prisma.$TweetPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tweet.
     * @param {TweetUpdateArgs} args - Arguments to update one Tweet.
     * @example
     * // Update one Tweet
     * const tweet = await prisma.tweet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TweetUpdateArgs>(args: SelectSubset<T, TweetUpdateArgs<ExtArgs>>): Prisma__TweetClient<$Result.GetResult<Prisma.$TweetPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tweets.
     * @param {TweetDeleteManyArgs} args - Arguments to filter Tweets to delete.
     * @example
     * // Delete a few Tweets
     * const { count } = await prisma.tweet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TweetDeleteManyArgs>(args?: SelectSubset<T, TweetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tweets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TweetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tweets
     * const tweet = await prisma.tweet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TweetUpdateManyArgs>(args: SelectSubset<T, TweetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tweet.
     * @param {TweetUpsertArgs} args - Arguments to update or create a Tweet.
     * @example
     * // Update or create a Tweet
     * const tweet = await prisma.tweet.upsert({
     *   create: {
     *     // ... data to create a Tweet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tweet we want to update
     *   }
     * })
     */
    upsert<T extends TweetUpsertArgs>(args: SelectSubset<T, TweetUpsertArgs<ExtArgs>>): Prisma__TweetClient<$Result.GetResult<Prisma.$TweetPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tweets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TweetCountArgs} args - Arguments to filter Tweets to count.
     * @example
     * // Count the number of Tweets
     * const count = await prisma.tweet.count({
     *   where: {
     *     // ... the filter for the Tweets we want to count
     *   }
     * })
    **/
    count<T extends TweetCountArgs>(
      args?: Subset<T, TweetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TweetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tweet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TweetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TweetAggregateArgs>(args: Subset<T, TweetAggregateArgs>): Prisma.PrismaPromise<GetTweetAggregateType<T>>

    /**
     * Group by Tweet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TweetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TweetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TweetGroupByArgs['orderBy'] }
        : { orderBy?: TweetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TweetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTweetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tweet model
   */
  readonly fields: TweetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tweet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TweetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    parent<T extends Tweet$parentArgs<ExtArgs> = {}>(args?: Subset<T, Tweet$parentArgs<ExtArgs>>): Prisma__TweetClient<$Result.GetResult<Prisma.$TweetPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    replies<T extends Tweet$repliesArgs<ExtArgs> = {}>(args?: Subset<T, Tweet$repliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TweetPayload<ExtArgs>, T, "findMany"> | Null>
    media<T extends Tweet$mediaArgs<ExtArgs> = {}>(args?: Subset<T, Tweet$mediaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findMany"> | Null>
    hashtags<T extends Tweet$hashtagsArgs<ExtArgs> = {}>(args?: Subset<T, Tweet$hashtagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "findMany"> | Null>
    likes<T extends Tweet$likesArgs<ExtArgs> = {}>(args?: Subset<T, Tweet$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany"> | Null>
    bookmarks<T extends Tweet$bookmarksArgs<ExtArgs> = {}>(args?: Subset<T, Tweet$bookmarksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "findMany"> | Null>
    tweetMetrics<T extends Tweet$tweetMetricsArgs<ExtArgs> = {}>(args?: Subset<T, Tweet$tweetMetricsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TweetMetricsPayload<ExtArgs>, T, "findMany"> | Null>
    timelines<T extends Tweet$timelinesArgs<ExtArgs> = {}>(args?: Subset<T, Tweet$timelinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, "findMany"> | Null>
    tweetHashtags<T extends Tweet$tweetHashtagsArgs<ExtArgs> = {}>(args?: Subset<T, Tweet$tweetHashtagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TweetHashtagPayload<ExtArgs>, T, "findMany"> | Null>
    retweets<T extends Tweet$retweetsArgs<ExtArgs> = {}>(args?: Subset<T, Tweet$retweetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RetweetPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tweet model
   */ 
  interface TweetFieldRefs {
    readonly id: FieldRef<"Tweet", 'String'>
    readonly content: FieldRef<"Tweet", 'String'>
    readonly type: FieldRef<"Tweet", 'TweetType'>
    readonly authorId: FieldRef<"Tweet", 'String'>
    readonly parentId: FieldRef<"Tweet", 'String'>
    readonly createdAt: FieldRef<"Tweet", 'DateTime'>
    readonly updatedAt: FieldRef<"Tweet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tweet findUnique
   */
  export type TweetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tweet
     */
    select?: TweetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetInclude<ExtArgs> | null
    /**
     * Filter, which Tweet to fetch.
     */
    where: TweetWhereUniqueInput
  }

  /**
   * Tweet findUniqueOrThrow
   */
  export type TweetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tweet
     */
    select?: TweetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetInclude<ExtArgs> | null
    /**
     * Filter, which Tweet to fetch.
     */
    where: TweetWhereUniqueInput
  }

  /**
   * Tweet findFirst
   */
  export type TweetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tweet
     */
    select?: TweetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetInclude<ExtArgs> | null
    /**
     * Filter, which Tweet to fetch.
     */
    where?: TweetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tweets to fetch.
     */
    orderBy?: TweetOrderByWithRelationInput | TweetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tweets.
     */
    cursor?: TweetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tweets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tweets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tweets.
     */
    distinct?: TweetScalarFieldEnum | TweetScalarFieldEnum[]
  }

  /**
   * Tweet findFirstOrThrow
   */
  export type TweetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tweet
     */
    select?: TweetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetInclude<ExtArgs> | null
    /**
     * Filter, which Tweet to fetch.
     */
    where?: TweetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tweets to fetch.
     */
    orderBy?: TweetOrderByWithRelationInput | TweetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tweets.
     */
    cursor?: TweetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tweets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tweets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tweets.
     */
    distinct?: TweetScalarFieldEnum | TweetScalarFieldEnum[]
  }

  /**
   * Tweet findMany
   */
  export type TweetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tweet
     */
    select?: TweetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetInclude<ExtArgs> | null
    /**
     * Filter, which Tweets to fetch.
     */
    where?: TweetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tweets to fetch.
     */
    orderBy?: TweetOrderByWithRelationInput | TweetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tweets.
     */
    cursor?: TweetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tweets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tweets.
     */
    skip?: number
    distinct?: TweetScalarFieldEnum | TweetScalarFieldEnum[]
  }

  /**
   * Tweet create
   */
  export type TweetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tweet
     */
    select?: TweetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetInclude<ExtArgs> | null
    /**
     * The data needed to create a Tweet.
     */
    data: XOR<TweetCreateInput, TweetUncheckedCreateInput>
  }

  /**
   * Tweet createMany
   */
  export type TweetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tweets.
     */
    data: TweetCreateManyInput | TweetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tweet createManyAndReturn
   */
  export type TweetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tweet
     */
    select?: TweetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tweets.
     */
    data: TweetCreateManyInput | TweetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tweet update
   */
  export type TweetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tweet
     */
    select?: TweetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetInclude<ExtArgs> | null
    /**
     * The data needed to update a Tweet.
     */
    data: XOR<TweetUpdateInput, TweetUncheckedUpdateInput>
    /**
     * Choose, which Tweet to update.
     */
    where: TweetWhereUniqueInput
  }

  /**
   * Tweet updateMany
   */
  export type TweetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tweets.
     */
    data: XOR<TweetUpdateManyMutationInput, TweetUncheckedUpdateManyInput>
    /**
     * Filter which Tweets to update
     */
    where?: TweetWhereInput
  }

  /**
   * Tweet upsert
   */
  export type TweetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tweet
     */
    select?: TweetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetInclude<ExtArgs> | null
    /**
     * The filter to search for the Tweet to update in case it exists.
     */
    where: TweetWhereUniqueInput
    /**
     * In case the Tweet found by the `where` argument doesn't exist, create a new Tweet with this data.
     */
    create: XOR<TweetCreateInput, TweetUncheckedCreateInput>
    /**
     * In case the Tweet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TweetUpdateInput, TweetUncheckedUpdateInput>
  }

  /**
   * Tweet delete
   */
  export type TweetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tweet
     */
    select?: TweetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetInclude<ExtArgs> | null
    /**
     * Filter which Tweet to delete.
     */
    where: TweetWhereUniqueInput
  }

  /**
   * Tweet deleteMany
   */
  export type TweetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tweets to delete
     */
    where?: TweetWhereInput
  }

  /**
   * Tweet.parent
   */
  export type Tweet$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tweet
     */
    select?: TweetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetInclude<ExtArgs> | null
    where?: TweetWhereInput
  }

  /**
   * Tweet.replies
   */
  export type Tweet$repliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tweet
     */
    select?: TweetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetInclude<ExtArgs> | null
    where?: TweetWhereInput
    orderBy?: TweetOrderByWithRelationInput | TweetOrderByWithRelationInput[]
    cursor?: TweetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TweetScalarFieldEnum | TweetScalarFieldEnum[]
  }

  /**
   * Tweet.media
   */
  export type Tweet$mediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    where?: MediaWhereInput
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    cursor?: MediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Tweet.hashtags
   */
  export type Tweet$hashtagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HashtagInclude<ExtArgs> | null
    where?: HashtagWhereInput
    orderBy?: HashtagOrderByWithRelationInput | HashtagOrderByWithRelationInput[]
    cursor?: HashtagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HashtagScalarFieldEnum | HashtagScalarFieldEnum[]
  }

  /**
   * Tweet.likes
   */
  export type Tweet$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    where?: LikeWhereInput
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    cursor?: LikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Tweet.bookmarks
   */
  export type Tweet$bookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    where?: BookmarkWhereInput
    orderBy?: BookmarkOrderByWithRelationInput | BookmarkOrderByWithRelationInput[]
    cursor?: BookmarkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookmarkScalarFieldEnum | BookmarkScalarFieldEnum[]
  }

  /**
   * Tweet.tweetMetrics
   */
  export type Tweet$tweetMetricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TweetMetrics
     */
    select?: TweetMetricsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetMetricsInclude<ExtArgs> | null
    where?: TweetMetricsWhereInput
    orderBy?: TweetMetricsOrderByWithRelationInput | TweetMetricsOrderByWithRelationInput[]
    cursor?: TweetMetricsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TweetMetricsScalarFieldEnum | TweetMetricsScalarFieldEnum[]
  }

  /**
   * Tweet.timelines
   */
  export type Tweet$timelinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineInclude<ExtArgs> | null
    where?: TimelineWhereInput
    orderBy?: TimelineOrderByWithRelationInput | TimelineOrderByWithRelationInput[]
    cursor?: TimelineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TimelineScalarFieldEnum | TimelineScalarFieldEnum[]
  }

  /**
   * Tweet.tweetHashtags
   */
  export type Tweet$tweetHashtagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TweetHashtag
     */
    select?: TweetHashtagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetHashtagInclude<ExtArgs> | null
    where?: TweetHashtagWhereInput
    orderBy?: TweetHashtagOrderByWithRelationInput | TweetHashtagOrderByWithRelationInput[]
    cursor?: TweetHashtagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TweetHashtagScalarFieldEnum | TweetHashtagScalarFieldEnum[]
  }

  /**
   * Tweet.retweets
   */
  export type Tweet$retweetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Retweet
     */
    select?: RetweetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RetweetInclude<ExtArgs> | null
    where?: RetweetWhereInput
    orderBy?: RetweetOrderByWithRelationInput | RetweetOrderByWithRelationInput[]
    cursor?: RetweetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RetweetScalarFieldEnum | RetweetScalarFieldEnum[]
  }

  /**
   * Tweet without action
   */
  export type TweetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tweet
     */
    select?: TweetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetInclude<ExtArgs> | null
  }


  /**
   * Model Follow
   */

  export type AggregateFollow = {
    _count: FollowCountAggregateOutputType | null
    _min: FollowMinAggregateOutputType | null
    _max: FollowMaxAggregateOutputType | null
  }

  export type FollowMinAggregateOutputType = {
    id: string | null
    followerId: string | null
    followingId: string | null
    createdAt: Date | null
  }

  export type FollowMaxAggregateOutputType = {
    id: string | null
    followerId: string | null
    followingId: string | null
    createdAt: Date | null
  }

  export type FollowCountAggregateOutputType = {
    id: number
    followerId: number
    followingId: number
    createdAt: number
    _all: number
  }


  export type FollowMinAggregateInputType = {
    id?: true
    followerId?: true
    followingId?: true
    createdAt?: true
  }

  export type FollowMaxAggregateInputType = {
    id?: true
    followerId?: true
    followingId?: true
    createdAt?: true
  }

  export type FollowCountAggregateInputType = {
    id?: true
    followerId?: true
    followingId?: true
    createdAt?: true
    _all?: true
  }

  export type FollowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Follow to aggregate.
     */
    where?: FollowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FollowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Follows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Follows
    **/
    _count?: true | FollowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FollowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FollowMaxAggregateInputType
  }

  export type GetFollowAggregateType<T extends FollowAggregateArgs> = {
        [P in keyof T & keyof AggregateFollow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFollow[P]>
      : GetScalarType<T[P], AggregateFollow[P]>
  }




  export type FollowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowWhereInput
    orderBy?: FollowOrderByWithAggregationInput | FollowOrderByWithAggregationInput[]
    by: FollowScalarFieldEnum[] | FollowScalarFieldEnum
    having?: FollowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FollowCountAggregateInputType | true
    _min?: FollowMinAggregateInputType
    _max?: FollowMaxAggregateInputType
  }

  export type FollowGroupByOutputType = {
    id: string
    followerId: string
    followingId: string
    createdAt: Date
    _count: FollowCountAggregateOutputType | null
    _min: FollowMinAggregateOutputType | null
    _max: FollowMaxAggregateOutputType | null
  }

  type GetFollowGroupByPayload<T extends FollowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FollowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FollowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FollowGroupByOutputType[P]>
            : GetScalarType<T[P], FollowGroupByOutputType[P]>
        }
      >
    >


  export type FollowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    followerId?: boolean
    followingId?: boolean
    createdAt?: boolean
    follower?: boolean | UserDefaultArgs<ExtArgs>
    following?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["follow"]>

  export type FollowSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    followerId?: boolean
    followingId?: boolean
    createdAt?: boolean
    follower?: boolean | UserDefaultArgs<ExtArgs>
    following?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["follow"]>

  export type FollowSelectScalar = {
    id?: boolean
    followerId?: boolean
    followingId?: boolean
    createdAt?: boolean
  }

  export type FollowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    follower?: boolean | UserDefaultArgs<ExtArgs>
    following?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FollowIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    follower?: boolean | UserDefaultArgs<ExtArgs>
    following?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FollowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Follow"
    objects: {
      follower: Prisma.$UserPayload<ExtArgs>
      following: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      followerId: string
      followingId: string
      createdAt: Date
    }, ExtArgs["result"]["follow"]>
    composites: {}
  }

  type FollowGetPayload<S extends boolean | null | undefined | FollowDefaultArgs> = $Result.GetResult<Prisma.$FollowPayload, S>

  type FollowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FollowFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FollowCountAggregateInputType | true
    }

  export interface FollowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Follow'], meta: { name: 'Follow' } }
    /**
     * Find zero or one Follow that matches the filter.
     * @param {FollowFindUniqueArgs} args - Arguments to find a Follow
     * @example
     * // Get one Follow
     * const follow = await prisma.follow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FollowFindUniqueArgs>(args: SelectSubset<T, FollowFindUniqueArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Follow that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FollowFindUniqueOrThrowArgs} args - Arguments to find a Follow
     * @example
     * // Get one Follow
     * const follow = await prisma.follow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FollowFindUniqueOrThrowArgs>(args: SelectSubset<T, FollowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Follow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowFindFirstArgs} args - Arguments to find a Follow
     * @example
     * // Get one Follow
     * const follow = await prisma.follow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FollowFindFirstArgs>(args?: SelectSubset<T, FollowFindFirstArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Follow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowFindFirstOrThrowArgs} args - Arguments to find a Follow
     * @example
     * // Get one Follow
     * const follow = await prisma.follow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FollowFindFirstOrThrowArgs>(args?: SelectSubset<T, FollowFindFirstOrThrowArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Follows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Follows
     * const follows = await prisma.follow.findMany()
     * 
     * // Get first 10 Follows
     * const follows = await prisma.follow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const followWithIdOnly = await prisma.follow.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FollowFindManyArgs>(args?: SelectSubset<T, FollowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Follow.
     * @param {FollowCreateArgs} args - Arguments to create a Follow.
     * @example
     * // Create one Follow
     * const Follow = await prisma.follow.create({
     *   data: {
     *     // ... data to create a Follow
     *   }
     * })
     * 
     */
    create<T extends FollowCreateArgs>(args: SelectSubset<T, FollowCreateArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Follows.
     * @param {FollowCreateManyArgs} args - Arguments to create many Follows.
     * @example
     * // Create many Follows
     * const follow = await prisma.follow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FollowCreateManyArgs>(args?: SelectSubset<T, FollowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Follows and returns the data saved in the database.
     * @param {FollowCreateManyAndReturnArgs} args - Arguments to create many Follows.
     * @example
     * // Create many Follows
     * const follow = await prisma.follow.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Follows and only return the `id`
     * const followWithIdOnly = await prisma.follow.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FollowCreateManyAndReturnArgs>(args?: SelectSubset<T, FollowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Follow.
     * @param {FollowDeleteArgs} args - Arguments to delete one Follow.
     * @example
     * // Delete one Follow
     * const Follow = await prisma.follow.delete({
     *   where: {
     *     // ... filter to delete one Follow
     *   }
     * })
     * 
     */
    delete<T extends FollowDeleteArgs>(args: SelectSubset<T, FollowDeleteArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Follow.
     * @param {FollowUpdateArgs} args - Arguments to update one Follow.
     * @example
     * // Update one Follow
     * const follow = await prisma.follow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FollowUpdateArgs>(args: SelectSubset<T, FollowUpdateArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Follows.
     * @param {FollowDeleteManyArgs} args - Arguments to filter Follows to delete.
     * @example
     * // Delete a few Follows
     * const { count } = await prisma.follow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FollowDeleteManyArgs>(args?: SelectSubset<T, FollowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Follows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Follows
     * const follow = await prisma.follow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FollowUpdateManyArgs>(args: SelectSubset<T, FollowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Follow.
     * @param {FollowUpsertArgs} args - Arguments to update or create a Follow.
     * @example
     * // Update or create a Follow
     * const follow = await prisma.follow.upsert({
     *   create: {
     *     // ... data to create a Follow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Follow we want to update
     *   }
     * })
     */
    upsert<T extends FollowUpsertArgs>(args: SelectSubset<T, FollowUpsertArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Follows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowCountArgs} args - Arguments to filter Follows to count.
     * @example
     * // Count the number of Follows
     * const count = await prisma.follow.count({
     *   where: {
     *     // ... the filter for the Follows we want to count
     *   }
     * })
    **/
    count<T extends FollowCountArgs>(
      args?: Subset<T, FollowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FollowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Follow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FollowAggregateArgs>(args: Subset<T, FollowAggregateArgs>): Prisma.PrismaPromise<GetFollowAggregateType<T>>

    /**
     * Group by Follow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FollowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FollowGroupByArgs['orderBy'] }
        : { orderBy?: FollowGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FollowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFollowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Follow model
   */
  readonly fields: FollowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Follow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FollowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    follower<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    following<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Follow model
   */ 
  interface FollowFieldRefs {
    readonly id: FieldRef<"Follow", 'String'>
    readonly followerId: FieldRef<"Follow", 'String'>
    readonly followingId: FieldRef<"Follow", 'String'>
    readonly createdAt: FieldRef<"Follow", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Follow findUnique
   */
  export type FollowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * Filter, which Follow to fetch.
     */
    where: FollowWhereUniqueInput
  }

  /**
   * Follow findUniqueOrThrow
   */
  export type FollowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * Filter, which Follow to fetch.
     */
    where: FollowWhereUniqueInput
  }

  /**
   * Follow findFirst
   */
  export type FollowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * Filter, which Follow to fetch.
     */
    where?: FollowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Follows.
     */
    cursor?: FollowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Follows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Follows.
     */
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[]
  }

  /**
   * Follow findFirstOrThrow
   */
  export type FollowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * Filter, which Follow to fetch.
     */
    where?: FollowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Follows.
     */
    cursor?: FollowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Follows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Follows.
     */
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[]
  }

  /**
   * Follow findMany
   */
  export type FollowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * Filter, which Follows to fetch.
     */
    where?: FollowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Follows.
     */
    cursor?: FollowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Follows.
     */
    skip?: number
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[]
  }

  /**
   * Follow create
   */
  export type FollowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * The data needed to create a Follow.
     */
    data: XOR<FollowCreateInput, FollowUncheckedCreateInput>
  }

  /**
   * Follow createMany
   */
  export type FollowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Follows.
     */
    data: FollowCreateManyInput | FollowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Follow createManyAndReturn
   */
  export type FollowCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Follows.
     */
    data: FollowCreateManyInput | FollowCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Follow update
   */
  export type FollowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * The data needed to update a Follow.
     */
    data: XOR<FollowUpdateInput, FollowUncheckedUpdateInput>
    /**
     * Choose, which Follow to update.
     */
    where: FollowWhereUniqueInput
  }

  /**
   * Follow updateMany
   */
  export type FollowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Follows.
     */
    data: XOR<FollowUpdateManyMutationInput, FollowUncheckedUpdateManyInput>
    /**
     * Filter which Follows to update
     */
    where?: FollowWhereInput
  }

  /**
   * Follow upsert
   */
  export type FollowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * The filter to search for the Follow to update in case it exists.
     */
    where: FollowWhereUniqueInput
    /**
     * In case the Follow found by the `where` argument doesn't exist, create a new Follow with this data.
     */
    create: XOR<FollowCreateInput, FollowUncheckedCreateInput>
    /**
     * In case the Follow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FollowUpdateInput, FollowUncheckedUpdateInput>
  }

  /**
   * Follow delete
   */
  export type FollowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * Filter which Follow to delete.
     */
    where: FollowWhereUniqueInput
  }

  /**
   * Follow deleteMany
   */
  export type FollowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Follows to delete
     */
    where?: FollowWhereInput
  }

  /**
   * Follow without action
   */
  export type FollowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
  }


  /**
   * Model Like
   */

  export type AggregateLike = {
    _count: LikeCountAggregateOutputType | null
    _min: LikeMinAggregateOutputType | null
    _max: LikeMaxAggregateOutputType | null
  }

  export type LikeMinAggregateOutputType = {
    id: string | null
    userId: string | null
    tweetId: string | null
    createdAt: Date | null
  }

  export type LikeMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    tweetId: string | null
    createdAt: Date | null
  }

  export type LikeCountAggregateOutputType = {
    id: number
    userId: number
    tweetId: number
    createdAt: number
    _all: number
  }


  export type LikeMinAggregateInputType = {
    id?: true
    userId?: true
    tweetId?: true
    createdAt?: true
  }

  export type LikeMaxAggregateInputType = {
    id?: true
    userId?: true
    tweetId?: true
    createdAt?: true
  }

  export type LikeCountAggregateInputType = {
    id?: true
    userId?: true
    tweetId?: true
    createdAt?: true
    _all?: true
  }

  export type LikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Like to aggregate.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Likes
    **/
    _count?: true | LikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikeMaxAggregateInputType
  }

  export type GetLikeAggregateType<T extends LikeAggregateArgs> = {
        [P in keyof T & keyof AggregateLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLike[P]>
      : GetScalarType<T[P], AggregateLike[P]>
  }




  export type LikeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeWhereInput
    orderBy?: LikeOrderByWithAggregationInput | LikeOrderByWithAggregationInput[]
    by: LikeScalarFieldEnum[] | LikeScalarFieldEnum
    having?: LikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikeCountAggregateInputType | true
    _min?: LikeMinAggregateInputType
    _max?: LikeMaxAggregateInputType
  }

  export type LikeGroupByOutputType = {
    id: string
    userId: string
    tweetId: string
    createdAt: Date
    _count: LikeCountAggregateOutputType | null
    _min: LikeMinAggregateOutputType | null
    _max: LikeMaxAggregateOutputType | null
  }

  type GetLikeGroupByPayload<T extends LikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikeGroupByOutputType[P]>
            : GetScalarType<T[P], LikeGroupByOutputType[P]>
        }
      >
    >


  export type LikeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tweetId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tweet?: boolean | TweetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["like"]>

  export type LikeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tweetId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tweet?: boolean | TweetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["like"]>

  export type LikeSelectScalar = {
    id?: boolean
    userId?: boolean
    tweetId?: boolean
    createdAt?: boolean
  }

  export type LikeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tweet?: boolean | TweetDefaultArgs<ExtArgs>
  }
  export type LikeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tweet?: boolean | TweetDefaultArgs<ExtArgs>
  }

  export type $LikePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Like"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      tweet: Prisma.$TweetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      tweetId: string
      createdAt: Date
    }, ExtArgs["result"]["like"]>
    composites: {}
  }

  type LikeGetPayload<S extends boolean | null | undefined | LikeDefaultArgs> = $Result.GetResult<Prisma.$LikePayload, S>

  type LikeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LikeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LikeCountAggregateInputType | true
    }

  export interface LikeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Like'], meta: { name: 'Like' } }
    /**
     * Find zero or one Like that matches the filter.
     * @param {LikeFindUniqueArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LikeFindUniqueArgs>(args: SelectSubset<T, LikeFindUniqueArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Like that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LikeFindUniqueOrThrowArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LikeFindUniqueOrThrowArgs>(args: SelectSubset<T, LikeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Like that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindFirstArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LikeFindFirstArgs>(args?: SelectSubset<T, LikeFindFirstArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Like that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindFirstOrThrowArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LikeFindFirstOrThrowArgs>(args?: SelectSubset<T, LikeFindFirstOrThrowArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Likes
     * const likes = await prisma.like.findMany()
     * 
     * // Get first 10 Likes
     * const likes = await prisma.like.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const likeWithIdOnly = await prisma.like.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LikeFindManyArgs>(args?: SelectSubset<T, LikeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Like.
     * @param {LikeCreateArgs} args - Arguments to create a Like.
     * @example
     * // Create one Like
     * const Like = await prisma.like.create({
     *   data: {
     *     // ... data to create a Like
     *   }
     * })
     * 
     */
    create<T extends LikeCreateArgs>(args: SelectSubset<T, LikeCreateArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Likes.
     * @param {LikeCreateManyArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const like = await prisma.like.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LikeCreateManyArgs>(args?: SelectSubset<T, LikeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Likes and returns the data saved in the database.
     * @param {LikeCreateManyAndReturnArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const like = await prisma.like.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Likes and only return the `id`
     * const likeWithIdOnly = await prisma.like.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LikeCreateManyAndReturnArgs>(args?: SelectSubset<T, LikeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Like.
     * @param {LikeDeleteArgs} args - Arguments to delete one Like.
     * @example
     * // Delete one Like
     * const Like = await prisma.like.delete({
     *   where: {
     *     // ... filter to delete one Like
     *   }
     * })
     * 
     */
    delete<T extends LikeDeleteArgs>(args: SelectSubset<T, LikeDeleteArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Like.
     * @param {LikeUpdateArgs} args - Arguments to update one Like.
     * @example
     * // Update one Like
     * const like = await prisma.like.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LikeUpdateArgs>(args: SelectSubset<T, LikeUpdateArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Likes.
     * @param {LikeDeleteManyArgs} args - Arguments to filter Likes to delete.
     * @example
     * // Delete a few Likes
     * const { count } = await prisma.like.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LikeDeleteManyArgs>(args?: SelectSubset<T, LikeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Likes
     * const like = await prisma.like.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LikeUpdateManyArgs>(args: SelectSubset<T, LikeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Like.
     * @param {LikeUpsertArgs} args - Arguments to update or create a Like.
     * @example
     * // Update or create a Like
     * const like = await prisma.like.upsert({
     *   create: {
     *     // ... data to create a Like
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Like we want to update
     *   }
     * })
     */
    upsert<T extends LikeUpsertArgs>(args: SelectSubset<T, LikeUpsertArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeCountArgs} args - Arguments to filter Likes to count.
     * @example
     * // Count the number of Likes
     * const count = await prisma.like.count({
     *   where: {
     *     // ... the filter for the Likes we want to count
     *   }
     * })
    **/
    count<T extends LikeCountArgs>(
      args?: Subset<T, LikeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LikeAggregateArgs>(args: Subset<T, LikeAggregateArgs>): Prisma.PrismaPromise<GetLikeAggregateType<T>>

    /**
     * Group by Like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LikeGroupByArgs['orderBy'] }
        : { orderBy?: LikeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Like model
   */
  readonly fields: LikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Like.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LikeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    tweet<T extends TweetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TweetDefaultArgs<ExtArgs>>): Prisma__TweetClient<$Result.GetResult<Prisma.$TweetPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Like model
   */ 
  interface LikeFieldRefs {
    readonly id: FieldRef<"Like", 'String'>
    readonly userId: FieldRef<"Like", 'String'>
    readonly tweetId: FieldRef<"Like", 'String'>
    readonly createdAt: FieldRef<"Like", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Like findUnique
   */
  export type LikeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like findUniqueOrThrow
   */
  export type LikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like findFirst
   */
  export type LikeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likes.
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     */
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Like findFirstOrThrow
   */
  export type LikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likes.
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     */
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Like findMany
   */
  export type LikeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Likes.
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Like create
   */
  export type LikeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * The data needed to create a Like.
     */
    data: XOR<LikeCreateInput, LikeUncheckedCreateInput>
  }

  /**
   * Like createMany
   */
  export type LikeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Likes.
     */
    data: LikeCreateManyInput | LikeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Like createManyAndReturn
   */
  export type LikeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Likes.
     */
    data: LikeCreateManyInput | LikeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Like update
   */
  export type LikeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * The data needed to update a Like.
     */
    data: XOR<LikeUpdateInput, LikeUncheckedUpdateInput>
    /**
     * Choose, which Like to update.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like updateMany
   */
  export type LikeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Likes.
     */
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyInput>
    /**
     * Filter which Likes to update
     */
    where?: LikeWhereInput
  }

  /**
   * Like upsert
   */
  export type LikeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * The filter to search for the Like to update in case it exists.
     */
    where: LikeWhereUniqueInput
    /**
     * In case the Like found by the `where` argument doesn't exist, create a new Like with this data.
     */
    create: XOR<LikeCreateInput, LikeUncheckedCreateInput>
    /**
     * In case the Like was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LikeUpdateInput, LikeUncheckedUpdateInput>
  }

  /**
   * Like delete
   */
  export type LikeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter which Like to delete.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like deleteMany
   */
  export type LikeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Likes to delete
     */
    where?: LikeWhereInput
  }

  /**
   * Like without action
   */
  export type LikeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
  }


  /**
   * Model Bookmark
   */

  export type AggregateBookmark = {
    _count: BookmarkCountAggregateOutputType | null
    _min: BookmarkMinAggregateOutputType | null
    _max: BookmarkMaxAggregateOutputType | null
  }

  export type BookmarkMinAggregateOutputType = {
    id: string | null
    userId: string | null
    tweetId: string | null
    createdAt: Date | null
  }

  export type BookmarkMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    tweetId: string | null
    createdAt: Date | null
  }

  export type BookmarkCountAggregateOutputType = {
    id: number
    userId: number
    tweetId: number
    createdAt: number
    _all: number
  }


  export type BookmarkMinAggregateInputType = {
    id?: true
    userId?: true
    tweetId?: true
    createdAt?: true
  }

  export type BookmarkMaxAggregateInputType = {
    id?: true
    userId?: true
    tweetId?: true
    createdAt?: true
  }

  export type BookmarkCountAggregateInputType = {
    id?: true
    userId?: true
    tweetId?: true
    createdAt?: true
    _all?: true
  }

  export type BookmarkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookmark to aggregate.
     */
    where?: BookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookmarks to fetch.
     */
    orderBy?: BookmarkOrderByWithRelationInput | BookmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookmarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookmarks
    **/
    _count?: true | BookmarkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookmarkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookmarkMaxAggregateInputType
  }

  export type GetBookmarkAggregateType<T extends BookmarkAggregateArgs> = {
        [P in keyof T & keyof AggregateBookmark]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookmark[P]>
      : GetScalarType<T[P], AggregateBookmark[P]>
  }




  export type BookmarkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookmarkWhereInput
    orderBy?: BookmarkOrderByWithAggregationInput | BookmarkOrderByWithAggregationInput[]
    by: BookmarkScalarFieldEnum[] | BookmarkScalarFieldEnum
    having?: BookmarkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookmarkCountAggregateInputType | true
    _min?: BookmarkMinAggregateInputType
    _max?: BookmarkMaxAggregateInputType
  }

  export type BookmarkGroupByOutputType = {
    id: string
    userId: string
    tweetId: string
    createdAt: Date
    _count: BookmarkCountAggregateOutputType | null
    _min: BookmarkMinAggregateOutputType | null
    _max: BookmarkMaxAggregateOutputType | null
  }

  type GetBookmarkGroupByPayload<T extends BookmarkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookmarkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookmarkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookmarkGroupByOutputType[P]>
            : GetScalarType<T[P], BookmarkGroupByOutputType[P]>
        }
      >
    >


  export type BookmarkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tweetId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tweet?: boolean | TweetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookmark"]>

  export type BookmarkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tweetId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tweet?: boolean | TweetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookmark"]>

  export type BookmarkSelectScalar = {
    id?: boolean
    userId?: boolean
    tweetId?: boolean
    createdAt?: boolean
  }

  export type BookmarkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tweet?: boolean | TweetDefaultArgs<ExtArgs>
  }
  export type BookmarkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tweet?: boolean | TweetDefaultArgs<ExtArgs>
  }

  export type $BookmarkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bookmark"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      tweet: Prisma.$TweetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      tweetId: string
      createdAt: Date
    }, ExtArgs["result"]["bookmark"]>
    composites: {}
  }

  type BookmarkGetPayload<S extends boolean | null | undefined | BookmarkDefaultArgs> = $Result.GetResult<Prisma.$BookmarkPayload, S>

  type BookmarkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BookmarkFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BookmarkCountAggregateInputType | true
    }

  export interface BookmarkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bookmark'], meta: { name: 'Bookmark' } }
    /**
     * Find zero or one Bookmark that matches the filter.
     * @param {BookmarkFindUniqueArgs} args - Arguments to find a Bookmark
     * @example
     * // Get one Bookmark
     * const bookmark = await prisma.bookmark.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookmarkFindUniqueArgs>(args: SelectSubset<T, BookmarkFindUniqueArgs<ExtArgs>>): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Bookmark that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BookmarkFindUniqueOrThrowArgs} args - Arguments to find a Bookmark
     * @example
     * // Get one Bookmark
     * const bookmark = await prisma.bookmark.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookmarkFindUniqueOrThrowArgs>(args: SelectSubset<T, BookmarkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Bookmark that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkFindFirstArgs} args - Arguments to find a Bookmark
     * @example
     * // Get one Bookmark
     * const bookmark = await prisma.bookmark.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookmarkFindFirstArgs>(args?: SelectSubset<T, BookmarkFindFirstArgs<ExtArgs>>): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Bookmark that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkFindFirstOrThrowArgs} args - Arguments to find a Bookmark
     * @example
     * // Get one Bookmark
     * const bookmark = await prisma.bookmark.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookmarkFindFirstOrThrowArgs>(args?: SelectSubset<T, BookmarkFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Bookmarks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookmarks
     * const bookmarks = await prisma.bookmark.findMany()
     * 
     * // Get first 10 Bookmarks
     * const bookmarks = await prisma.bookmark.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookmarkWithIdOnly = await prisma.bookmark.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookmarkFindManyArgs>(args?: SelectSubset<T, BookmarkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Bookmark.
     * @param {BookmarkCreateArgs} args - Arguments to create a Bookmark.
     * @example
     * // Create one Bookmark
     * const Bookmark = await prisma.bookmark.create({
     *   data: {
     *     // ... data to create a Bookmark
     *   }
     * })
     * 
     */
    create<T extends BookmarkCreateArgs>(args: SelectSubset<T, BookmarkCreateArgs<ExtArgs>>): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Bookmarks.
     * @param {BookmarkCreateManyArgs} args - Arguments to create many Bookmarks.
     * @example
     * // Create many Bookmarks
     * const bookmark = await prisma.bookmark.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookmarkCreateManyArgs>(args?: SelectSubset<T, BookmarkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookmarks and returns the data saved in the database.
     * @param {BookmarkCreateManyAndReturnArgs} args - Arguments to create many Bookmarks.
     * @example
     * // Create many Bookmarks
     * const bookmark = await prisma.bookmark.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookmarks and only return the `id`
     * const bookmarkWithIdOnly = await prisma.bookmark.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookmarkCreateManyAndReturnArgs>(args?: SelectSubset<T, BookmarkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Bookmark.
     * @param {BookmarkDeleteArgs} args - Arguments to delete one Bookmark.
     * @example
     * // Delete one Bookmark
     * const Bookmark = await prisma.bookmark.delete({
     *   where: {
     *     // ... filter to delete one Bookmark
     *   }
     * })
     * 
     */
    delete<T extends BookmarkDeleteArgs>(args: SelectSubset<T, BookmarkDeleteArgs<ExtArgs>>): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Bookmark.
     * @param {BookmarkUpdateArgs} args - Arguments to update one Bookmark.
     * @example
     * // Update one Bookmark
     * const bookmark = await prisma.bookmark.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookmarkUpdateArgs>(args: SelectSubset<T, BookmarkUpdateArgs<ExtArgs>>): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Bookmarks.
     * @param {BookmarkDeleteManyArgs} args - Arguments to filter Bookmarks to delete.
     * @example
     * // Delete a few Bookmarks
     * const { count } = await prisma.bookmark.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookmarkDeleteManyArgs>(args?: SelectSubset<T, BookmarkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookmarks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookmarks
     * const bookmark = await prisma.bookmark.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookmarkUpdateManyArgs>(args: SelectSubset<T, BookmarkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bookmark.
     * @param {BookmarkUpsertArgs} args - Arguments to update or create a Bookmark.
     * @example
     * // Update or create a Bookmark
     * const bookmark = await prisma.bookmark.upsert({
     *   create: {
     *     // ... data to create a Bookmark
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bookmark we want to update
     *   }
     * })
     */
    upsert<T extends BookmarkUpsertArgs>(args: SelectSubset<T, BookmarkUpsertArgs<ExtArgs>>): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Bookmarks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkCountArgs} args - Arguments to filter Bookmarks to count.
     * @example
     * // Count the number of Bookmarks
     * const count = await prisma.bookmark.count({
     *   where: {
     *     // ... the filter for the Bookmarks we want to count
     *   }
     * })
    **/
    count<T extends BookmarkCountArgs>(
      args?: Subset<T, BookmarkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookmarkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bookmark.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookmarkAggregateArgs>(args: Subset<T, BookmarkAggregateArgs>): Prisma.PrismaPromise<GetBookmarkAggregateType<T>>

    /**
     * Group by Bookmark.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookmarkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookmarkGroupByArgs['orderBy'] }
        : { orderBy?: BookmarkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookmarkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookmarkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bookmark model
   */
  readonly fields: BookmarkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bookmark.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookmarkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    tweet<T extends TweetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TweetDefaultArgs<ExtArgs>>): Prisma__TweetClient<$Result.GetResult<Prisma.$TweetPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Bookmark model
   */ 
  interface BookmarkFieldRefs {
    readonly id: FieldRef<"Bookmark", 'String'>
    readonly userId: FieldRef<"Bookmark", 'String'>
    readonly tweetId: FieldRef<"Bookmark", 'String'>
    readonly createdAt: FieldRef<"Bookmark", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Bookmark findUnique
   */
  export type BookmarkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * Filter, which Bookmark to fetch.
     */
    where: BookmarkWhereUniqueInput
  }

  /**
   * Bookmark findUniqueOrThrow
   */
  export type BookmarkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * Filter, which Bookmark to fetch.
     */
    where: BookmarkWhereUniqueInput
  }

  /**
   * Bookmark findFirst
   */
  export type BookmarkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * Filter, which Bookmark to fetch.
     */
    where?: BookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookmarks to fetch.
     */
    orderBy?: BookmarkOrderByWithRelationInput | BookmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookmarks.
     */
    cursor?: BookmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookmarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookmarks.
     */
    distinct?: BookmarkScalarFieldEnum | BookmarkScalarFieldEnum[]
  }

  /**
   * Bookmark findFirstOrThrow
   */
  export type BookmarkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * Filter, which Bookmark to fetch.
     */
    where?: BookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookmarks to fetch.
     */
    orderBy?: BookmarkOrderByWithRelationInput | BookmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookmarks.
     */
    cursor?: BookmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookmarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookmarks.
     */
    distinct?: BookmarkScalarFieldEnum | BookmarkScalarFieldEnum[]
  }

  /**
   * Bookmark findMany
   */
  export type BookmarkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * Filter, which Bookmarks to fetch.
     */
    where?: BookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookmarks to fetch.
     */
    orderBy?: BookmarkOrderByWithRelationInput | BookmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookmarks.
     */
    cursor?: BookmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookmarks.
     */
    skip?: number
    distinct?: BookmarkScalarFieldEnum | BookmarkScalarFieldEnum[]
  }

  /**
   * Bookmark create
   */
  export type BookmarkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * The data needed to create a Bookmark.
     */
    data: XOR<BookmarkCreateInput, BookmarkUncheckedCreateInput>
  }

  /**
   * Bookmark createMany
   */
  export type BookmarkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookmarks.
     */
    data: BookmarkCreateManyInput | BookmarkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bookmark createManyAndReturn
   */
  export type BookmarkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Bookmarks.
     */
    data: BookmarkCreateManyInput | BookmarkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bookmark update
   */
  export type BookmarkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * The data needed to update a Bookmark.
     */
    data: XOR<BookmarkUpdateInput, BookmarkUncheckedUpdateInput>
    /**
     * Choose, which Bookmark to update.
     */
    where: BookmarkWhereUniqueInput
  }

  /**
   * Bookmark updateMany
   */
  export type BookmarkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookmarks.
     */
    data: XOR<BookmarkUpdateManyMutationInput, BookmarkUncheckedUpdateManyInput>
    /**
     * Filter which Bookmarks to update
     */
    where?: BookmarkWhereInput
  }

  /**
   * Bookmark upsert
   */
  export type BookmarkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * The filter to search for the Bookmark to update in case it exists.
     */
    where: BookmarkWhereUniqueInput
    /**
     * In case the Bookmark found by the `where` argument doesn't exist, create a new Bookmark with this data.
     */
    create: XOR<BookmarkCreateInput, BookmarkUncheckedCreateInput>
    /**
     * In case the Bookmark was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookmarkUpdateInput, BookmarkUncheckedUpdateInput>
  }

  /**
   * Bookmark delete
   */
  export type BookmarkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * Filter which Bookmark to delete.
     */
    where: BookmarkWhereUniqueInput
  }

  /**
   * Bookmark deleteMany
   */
  export type BookmarkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookmarks to delete
     */
    where?: BookmarkWhereInput
  }

  /**
   * Bookmark without action
   */
  export type BookmarkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
  }


  /**
   * Model Media
   */

  export type AggregateMedia = {
    _count: MediaCountAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  export type MediaMinAggregateOutputType = {
    id: string | null
    tweetId: string | null
    url: string | null
    type: $Enums.MediaType | null
    createdAt: Date | null
  }

  export type MediaMaxAggregateOutputType = {
    id: string | null
    tweetId: string | null
    url: string | null
    type: $Enums.MediaType | null
    createdAt: Date | null
  }

  export type MediaCountAggregateOutputType = {
    id: number
    tweetId: number
    url: number
    type: number
    createdAt: number
    _all: number
  }


  export type MediaMinAggregateInputType = {
    id?: true
    tweetId?: true
    url?: true
    type?: true
    createdAt?: true
  }

  export type MediaMaxAggregateInputType = {
    id?: true
    tweetId?: true
    url?: true
    type?: true
    createdAt?: true
  }

  export type MediaCountAggregateInputType = {
    id?: true
    tweetId?: true
    url?: true
    type?: true
    createdAt?: true
    _all?: true
  }

  export type MediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Media to aggregate.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Media
    **/
    _count?: true | MediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediaMaxAggregateInputType
  }

  export type GetMediaAggregateType<T extends MediaAggregateArgs> = {
        [P in keyof T & keyof AggregateMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedia[P]>
      : GetScalarType<T[P], AggregateMedia[P]>
  }




  export type MediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaWhereInput
    orderBy?: MediaOrderByWithAggregationInput | MediaOrderByWithAggregationInput[]
    by: MediaScalarFieldEnum[] | MediaScalarFieldEnum
    having?: MediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediaCountAggregateInputType | true
    _min?: MediaMinAggregateInputType
    _max?: MediaMaxAggregateInputType
  }

  export type MediaGroupByOutputType = {
    id: string
    tweetId: string
    url: string
    type: $Enums.MediaType
    createdAt: Date
    _count: MediaCountAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  type GetMediaGroupByPayload<T extends MediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediaGroupByOutputType[P]>
            : GetScalarType<T[P], MediaGroupByOutputType[P]>
        }
      >
    >


  export type MediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tweetId?: boolean
    url?: boolean
    type?: boolean
    createdAt?: boolean
    tweet?: boolean | TweetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["media"]>

  export type MediaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tweetId?: boolean
    url?: boolean
    type?: boolean
    createdAt?: boolean
    tweet?: boolean | TweetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["media"]>

  export type MediaSelectScalar = {
    id?: boolean
    tweetId?: boolean
    url?: boolean
    type?: boolean
    createdAt?: boolean
  }

  export type MediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tweet?: boolean | TweetDefaultArgs<ExtArgs>
  }
  export type MediaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tweet?: boolean | TweetDefaultArgs<ExtArgs>
  }

  export type $MediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Media"
    objects: {
      tweet: Prisma.$TweetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tweetId: string
      url: string
      type: $Enums.MediaType
      createdAt: Date
    }, ExtArgs["result"]["media"]>
    composites: {}
  }

  type MediaGetPayload<S extends boolean | null | undefined | MediaDefaultArgs> = $Result.GetResult<Prisma.$MediaPayload, S>

  type MediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MediaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MediaCountAggregateInputType | true
    }

  export interface MediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Media'], meta: { name: 'Media' } }
    /**
     * Find zero or one Media that matches the filter.
     * @param {MediaFindUniqueArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MediaFindUniqueArgs>(args: SelectSubset<T, MediaFindUniqueArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Media that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MediaFindUniqueOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MediaFindUniqueOrThrowArgs>(args: SelectSubset<T, MediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindFirstArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MediaFindFirstArgs>(args?: SelectSubset<T, MediaFindFirstArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Media that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindFirstOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MediaFindFirstOrThrowArgs>(args?: SelectSubset<T, MediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Media
     * const media = await prisma.media.findMany()
     * 
     * // Get first 10 Media
     * const media = await prisma.media.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mediaWithIdOnly = await prisma.media.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MediaFindManyArgs>(args?: SelectSubset<T, MediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Media.
     * @param {MediaCreateArgs} args - Arguments to create a Media.
     * @example
     * // Create one Media
     * const Media = await prisma.media.create({
     *   data: {
     *     // ... data to create a Media
     *   }
     * })
     * 
     */
    create<T extends MediaCreateArgs>(args: SelectSubset<T, MediaCreateArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Media.
     * @param {MediaCreateManyArgs} args - Arguments to create many Media.
     * @example
     * // Create many Media
     * const media = await prisma.media.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MediaCreateManyArgs>(args?: SelectSubset<T, MediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Media and returns the data saved in the database.
     * @param {MediaCreateManyAndReturnArgs} args - Arguments to create many Media.
     * @example
     * // Create many Media
     * const media = await prisma.media.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Media and only return the `id`
     * const mediaWithIdOnly = await prisma.media.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MediaCreateManyAndReturnArgs>(args?: SelectSubset<T, MediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Media.
     * @param {MediaDeleteArgs} args - Arguments to delete one Media.
     * @example
     * // Delete one Media
     * const Media = await prisma.media.delete({
     *   where: {
     *     // ... filter to delete one Media
     *   }
     * })
     * 
     */
    delete<T extends MediaDeleteArgs>(args: SelectSubset<T, MediaDeleteArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Media.
     * @param {MediaUpdateArgs} args - Arguments to update one Media.
     * @example
     * // Update one Media
     * const media = await prisma.media.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MediaUpdateArgs>(args: SelectSubset<T, MediaUpdateArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Media.
     * @param {MediaDeleteManyArgs} args - Arguments to filter Media to delete.
     * @example
     * // Delete a few Media
     * const { count } = await prisma.media.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MediaDeleteManyArgs>(args?: SelectSubset<T, MediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Media
     * const media = await prisma.media.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MediaUpdateManyArgs>(args: SelectSubset<T, MediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Media.
     * @param {MediaUpsertArgs} args - Arguments to update or create a Media.
     * @example
     * // Update or create a Media
     * const media = await prisma.media.upsert({
     *   create: {
     *     // ... data to create a Media
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Media we want to update
     *   }
     * })
     */
    upsert<T extends MediaUpsertArgs>(args: SelectSubset<T, MediaUpsertArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaCountArgs} args - Arguments to filter Media to count.
     * @example
     * // Count the number of Media
     * const count = await prisma.media.count({
     *   where: {
     *     // ... the filter for the Media we want to count
     *   }
     * })
    **/
    count<T extends MediaCountArgs>(
      args?: Subset<T, MediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MediaAggregateArgs>(args: Subset<T, MediaAggregateArgs>): Prisma.PrismaPromise<GetMediaAggregateType<T>>

    /**
     * Group by Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MediaGroupByArgs['orderBy'] }
        : { orderBy?: MediaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Media model
   */
  readonly fields: MediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Media.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tweet<T extends TweetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TweetDefaultArgs<ExtArgs>>): Prisma__TweetClient<$Result.GetResult<Prisma.$TweetPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Media model
   */ 
  interface MediaFieldRefs {
    readonly id: FieldRef<"Media", 'String'>
    readonly tweetId: FieldRef<"Media", 'String'>
    readonly url: FieldRef<"Media", 'String'>
    readonly type: FieldRef<"Media", 'MediaType'>
    readonly createdAt: FieldRef<"Media", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Media findUnique
   */
  export type MediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media findUniqueOrThrow
   */
  export type MediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media findFirst
   */
  export type MediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media findFirstOrThrow
   */
  export type MediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media findMany
   */
  export type MediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media create
   */
  export type MediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The data needed to create a Media.
     */
    data: XOR<MediaCreateInput, MediaUncheckedCreateInput>
  }

  /**
   * Media createMany
   */
  export type MediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Media.
     */
    data: MediaCreateManyInput | MediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Media createManyAndReturn
   */
  export type MediaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Media.
     */
    data: MediaCreateManyInput | MediaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Media update
   */
  export type MediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The data needed to update a Media.
     */
    data: XOR<MediaUpdateInput, MediaUncheckedUpdateInput>
    /**
     * Choose, which Media to update.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media updateMany
   */
  export type MediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Media.
     */
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyInput>
    /**
     * Filter which Media to update
     */
    where?: MediaWhereInput
  }

  /**
   * Media upsert
   */
  export type MediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The filter to search for the Media to update in case it exists.
     */
    where: MediaWhereUniqueInput
    /**
     * In case the Media found by the `where` argument doesn't exist, create a new Media with this data.
     */
    create: XOR<MediaCreateInput, MediaUncheckedCreateInput>
    /**
     * In case the Media was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MediaUpdateInput, MediaUncheckedUpdateInput>
  }

  /**
   * Media delete
   */
  export type MediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter which Media to delete.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media deleteMany
   */
  export type MediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Media to delete
     */
    where?: MediaWhereInput
  }

  /**
   * Media without action
   */
  export type MediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
  }


  /**
   * Model Hashtag
   */

  export type AggregateHashtag = {
    _count: HashtagCountAggregateOutputType | null
    _min: HashtagMinAggregateOutputType | null
    _max: HashtagMaxAggregateOutputType | null
  }

  export type HashtagMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type HashtagMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type HashtagCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type HashtagMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type HashtagMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type HashtagCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type HashtagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hashtag to aggregate.
     */
    where?: HashtagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hashtags to fetch.
     */
    orderBy?: HashtagOrderByWithRelationInput | HashtagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HashtagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hashtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hashtags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hashtags
    **/
    _count?: true | HashtagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HashtagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HashtagMaxAggregateInputType
  }

  export type GetHashtagAggregateType<T extends HashtagAggregateArgs> = {
        [P in keyof T & keyof AggregateHashtag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHashtag[P]>
      : GetScalarType<T[P], AggregateHashtag[P]>
  }




  export type HashtagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HashtagWhereInput
    orderBy?: HashtagOrderByWithAggregationInput | HashtagOrderByWithAggregationInput[]
    by: HashtagScalarFieldEnum[] | HashtagScalarFieldEnum
    having?: HashtagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HashtagCountAggregateInputType | true
    _min?: HashtagMinAggregateInputType
    _max?: HashtagMaxAggregateInputType
  }

  export type HashtagGroupByOutputType = {
    id: string
    name: string
    _count: HashtagCountAggregateOutputType | null
    _min: HashtagMinAggregateOutputType | null
    _max: HashtagMaxAggregateOutputType | null
  }

  type GetHashtagGroupByPayload<T extends HashtagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HashtagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HashtagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HashtagGroupByOutputType[P]>
            : GetScalarType<T[P], HashtagGroupByOutputType[P]>
        }
      >
    >


  export type HashtagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tweets?: boolean | Hashtag$tweetsArgs<ExtArgs>
    tweetHashtags?: boolean | Hashtag$tweetHashtagsArgs<ExtArgs>
    _count?: boolean | HashtagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hashtag"]>

  export type HashtagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["hashtag"]>

  export type HashtagSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type HashtagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tweets?: boolean | Hashtag$tweetsArgs<ExtArgs>
    tweetHashtags?: boolean | Hashtag$tweetHashtagsArgs<ExtArgs>
    _count?: boolean | HashtagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HashtagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $HashtagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hashtag"
    objects: {
      tweets: Prisma.$TweetPayload<ExtArgs>[]
      tweetHashtags: Prisma.$TweetHashtagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["hashtag"]>
    composites: {}
  }

  type HashtagGetPayload<S extends boolean | null | undefined | HashtagDefaultArgs> = $Result.GetResult<Prisma.$HashtagPayload, S>

  type HashtagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<HashtagFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: HashtagCountAggregateInputType | true
    }

  export interface HashtagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hashtag'], meta: { name: 'Hashtag' } }
    /**
     * Find zero or one Hashtag that matches the filter.
     * @param {HashtagFindUniqueArgs} args - Arguments to find a Hashtag
     * @example
     * // Get one Hashtag
     * const hashtag = await prisma.hashtag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HashtagFindUniqueArgs>(args: SelectSubset<T, HashtagFindUniqueArgs<ExtArgs>>): Prisma__HashtagClient<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Hashtag that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {HashtagFindUniqueOrThrowArgs} args - Arguments to find a Hashtag
     * @example
     * // Get one Hashtag
     * const hashtag = await prisma.hashtag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HashtagFindUniqueOrThrowArgs>(args: SelectSubset<T, HashtagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HashtagClient<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Hashtag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagFindFirstArgs} args - Arguments to find a Hashtag
     * @example
     * // Get one Hashtag
     * const hashtag = await prisma.hashtag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HashtagFindFirstArgs>(args?: SelectSubset<T, HashtagFindFirstArgs<ExtArgs>>): Prisma__HashtagClient<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Hashtag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagFindFirstOrThrowArgs} args - Arguments to find a Hashtag
     * @example
     * // Get one Hashtag
     * const hashtag = await prisma.hashtag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HashtagFindFirstOrThrowArgs>(args?: SelectSubset<T, HashtagFindFirstOrThrowArgs<ExtArgs>>): Prisma__HashtagClient<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Hashtags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hashtags
     * const hashtags = await prisma.hashtag.findMany()
     * 
     * // Get first 10 Hashtags
     * const hashtags = await prisma.hashtag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hashtagWithIdOnly = await prisma.hashtag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HashtagFindManyArgs>(args?: SelectSubset<T, HashtagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Hashtag.
     * @param {HashtagCreateArgs} args - Arguments to create a Hashtag.
     * @example
     * // Create one Hashtag
     * const Hashtag = await prisma.hashtag.create({
     *   data: {
     *     // ... data to create a Hashtag
     *   }
     * })
     * 
     */
    create<T extends HashtagCreateArgs>(args: SelectSubset<T, HashtagCreateArgs<ExtArgs>>): Prisma__HashtagClient<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Hashtags.
     * @param {HashtagCreateManyArgs} args - Arguments to create many Hashtags.
     * @example
     * // Create many Hashtags
     * const hashtag = await prisma.hashtag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HashtagCreateManyArgs>(args?: SelectSubset<T, HashtagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hashtags and returns the data saved in the database.
     * @param {HashtagCreateManyAndReturnArgs} args - Arguments to create many Hashtags.
     * @example
     * // Create many Hashtags
     * const hashtag = await prisma.hashtag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hashtags and only return the `id`
     * const hashtagWithIdOnly = await prisma.hashtag.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HashtagCreateManyAndReturnArgs>(args?: SelectSubset<T, HashtagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Hashtag.
     * @param {HashtagDeleteArgs} args - Arguments to delete one Hashtag.
     * @example
     * // Delete one Hashtag
     * const Hashtag = await prisma.hashtag.delete({
     *   where: {
     *     // ... filter to delete one Hashtag
     *   }
     * })
     * 
     */
    delete<T extends HashtagDeleteArgs>(args: SelectSubset<T, HashtagDeleteArgs<ExtArgs>>): Prisma__HashtagClient<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Hashtag.
     * @param {HashtagUpdateArgs} args - Arguments to update one Hashtag.
     * @example
     * // Update one Hashtag
     * const hashtag = await prisma.hashtag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HashtagUpdateArgs>(args: SelectSubset<T, HashtagUpdateArgs<ExtArgs>>): Prisma__HashtagClient<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Hashtags.
     * @param {HashtagDeleteManyArgs} args - Arguments to filter Hashtags to delete.
     * @example
     * // Delete a few Hashtags
     * const { count } = await prisma.hashtag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HashtagDeleteManyArgs>(args?: SelectSubset<T, HashtagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hashtags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hashtags
     * const hashtag = await prisma.hashtag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HashtagUpdateManyArgs>(args: SelectSubset<T, HashtagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Hashtag.
     * @param {HashtagUpsertArgs} args - Arguments to update or create a Hashtag.
     * @example
     * // Update or create a Hashtag
     * const hashtag = await prisma.hashtag.upsert({
     *   create: {
     *     // ... data to create a Hashtag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hashtag we want to update
     *   }
     * })
     */
    upsert<T extends HashtagUpsertArgs>(args: SelectSubset<T, HashtagUpsertArgs<ExtArgs>>): Prisma__HashtagClient<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Hashtags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagCountArgs} args - Arguments to filter Hashtags to count.
     * @example
     * // Count the number of Hashtags
     * const count = await prisma.hashtag.count({
     *   where: {
     *     // ... the filter for the Hashtags we want to count
     *   }
     * })
    **/
    count<T extends HashtagCountArgs>(
      args?: Subset<T, HashtagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HashtagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hashtag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HashtagAggregateArgs>(args: Subset<T, HashtagAggregateArgs>): Prisma.PrismaPromise<GetHashtagAggregateType<T>>

    /**
     * Group by Hashtag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HashtagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HashtagGroupByArgs['orderBy'] }
        : { orderBy?: HashtagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HashtagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHashtagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hashtag model
   */
  readonly fields: HashtagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hashtag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HashtagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tweets<T extends Hashtag$tweetsArgs<ExtArgs> = {}>(args?: Subset<T, Hashtag$tweetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TweetPayload<ExtArgs>, T, "findMany"> | Null>
    tweetHashtags<T extends Hashtag$tweetHashtagsArgs<ExtArgs> = {}>(args?: Subset<T, Hashtag$tweetHashtagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TweetHashtagPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Hashtag model
   */ 
  interface HashtagFieldRefs {
    readonly id: FieldRef<"Hashtag", 'String'>
    readonly name: FieldRef<"Hashtag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Hashtag findUnique
   */
  export type HashtagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HashtagInclude<ExtArgs> | null
    /**
     * Filter, which Hashtag to fetch.
     */
    where: HashtagWhereUniqueInput
  }

  /**
   * Hashtag findUniqueOrThrow
   */
  export type HashtagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HashtagInclude<ExtArgs> | null
    /**
     * Filter, which Hashtag to fetch.
     */
    where: HashtagWhereUniqueInput
  }

  /**
   * Hashtag findFirst
   */
  export type HashtagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HashtagInclude<ExtArgs> | null
    /**
     * Filter, which Hashtag to fetch.
     */
    where?: HashtagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hashtags to fetch.
     */
    orderBy?: HashtagOrderByWithRelationInput | HashtagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hashtags.
     */
    cursor?: HashtagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hashtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hashtags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hashtags.
     */
    distinct?: HashtagScalarFieldEnum | HashtagScalarFieldEnum[]
  }

  /**
   * Hashtag findFirstOrThrow
   */
  export type HashtagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HashtagInclude<ExtArgs> | null
    /**
     * Filter, which Hashtag to fetch.
     */
    where?: HashtagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hashtags to fetch.
     */
    orderBy?: HashtagOrderByWithRelationInput | HashtagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hashtags.
     */
    cursor?: HashtagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hashtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hashtags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hashtags.
     */
    distinct?: HashtagScalarFieldEnum | HashtagScalarFieldEnum[]
  }

  /**
   * Hashtag findMany
   */
  export type HashtagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HashtagInclude<ExtArgs> | null
    /**
     * Filter, which Hashtags to fetch.
     */
    where?: HashtagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hashtags to fetch.
     */
    orderBy?: HashtagOrderByWithRelationInput | HashtagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hashtags.
     */
    cursor?: HashtagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hashtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hashtags.
     */
    skip?: number
    distinct?: HashtagScalarFieldEnum | HashtagScalarFieldEnum[]
  }

  /**
   * Hashtag create
   */
  export type HashtagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HashtagInclude<ExtArgs> | null
    /**
     * The data needed to create a Hashtag.
     */
    data: XOR<HashtagCreateInput, HashtagUncheckedCreateInput>
  }

  /**
   * Hashtag createMany
   */
  export type HashtagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hashtags.
     */
    data: HashtagCreateManyInput | HashtagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hashtag createManyAndReturn
   */
  export type HashtagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Hashtags.
     */
    data: HashtagCreateManyInput | HashtagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hashtag update
   */
  export type HashtagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HashtagInclude<ExtArgs> | null
    /**
     * The data needed to update a Hashtag.
     */
    data: XOR<HashtagUpdateInput, HashtagUncheckedUpdateInput>
    /**
     * Choose, which Hashtag to update.
     */
    where: HashtagWhereUniqueInput
  }

  /**
   * Hashtag updateMany
   */
  export type HashtagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Hashtags.
     */
    data: XOR<HashtagUpdateManyMutationInput, HashtagUncheckedUpdateManyInput>
    /**
     * Filter which Hashtags to update
     */
    where?: HashtagWhereInput
  }

  /**
   * Hashtag upsert
   */
  export type HashtagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HashtagInclude<ExtArgs> | null
    /**
     * The filter to search for the Hashtag to update in case it exists.
     */
    where: HashtagWhereUniqueInput
    /**
     * In case the Hashtag found by the `where` argument doesn't exist, create a new Hashtag with this data.
     */
    create: XOR<HashtagCreateInput, HashtagUncheckedCreateInput>
    /**
     * In case the Hashtag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HashtagUpdateInput, HashtagUncheckedUpdateInput>
  }

  /**
   * Hashtag delete
   */
  export type HashtagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HashtagInclude<ExtArgs> | null
    /**
     * Filter which Hashtag to delete.
     */
    where: HashtagWhereUniqueInput
  }

  /**
   * Hashtag deleteMany
   */
  export type HashtagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hashtags to delete
     */
    where?: HashtagWhereInput
  }

  /**
   * Hashtag.tweets
   */
  export type Hashtag$tweetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tweet
     */
    select?: TweetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetInclude<ExtArgs> | null
    where?: TweetWhereInput
    orderBy?: TweetOrderByWithRelationInput | TweetOrderByWithRelationInput[]
    cursor?: TweetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TweetScalarFieldEnum | TweetScalarFieldEnum[]
  }

  /**
   * Hashtag.tweetHashtags
   */
  export type Hashtag$tweetHashtagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TweetHashtag
     */
    select?: TweetHashtagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetHashtagInclude<ExtArgs> | null
    where?: TweetHashtagWhereInput
    orderBy?: TweetHashtagOrderByWithRelationInput | TweetHashtagOrderByWithRelationInput[]
    cursor?: TweetHashtagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TweetHashtagScalarFieldEnum | TweetHashtagScalarFieldEnum[]
  }

  /**
   * Hashtag without action
   */
  export type HashtagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HashtagInclude<ExtArgs> | null
  }


  /**
   * Model TweetHashtag
   */

  export type AggregateTweetHashtag = {
    _count: TweetHashtagCountAggregateOutputType | null
    _min: TweetHashtagMinAggregateOutputType | null
    _max: TweetHashtagMaxAggregateOutputType | null
  }

  export type TweetHashtagMinAggregateOutputType = {
    tweetId: string | null
    hashtagId: string | null
  }

  export type TweetHashtagMaxAggregateOutputType = {
    tweetId: string | null
    hashtagId: string | null
  }

  export type TweetHashtagCountAggregateOutputType = {
    tweetId: number
    hashtagId: number
    _all: number
  }


  export type TweetHashtagMinAggregateInputType = {
    tweetId?: true
    hashtagId?: true
  }

  export type TweetHashtagMaxAggregateInputType = {
    tweetId?: true
    hashtagId?: true
  }

  export type TweetHashtagCountAggregateInputType = {
    tweetId?: true
    hashtagId?: true
    _all?: true
  }

  export type TweetHashtagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TweetHashtag to aggregate.
     */
    where?: TweetHashtagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TweetHashtags to fetch.
     */
    orderBy?: TweetHashtagOrderByWithRelationInput | TweetHashtagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TweetHashtagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TweetHashtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TweetHashtags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TweetHashtags
    **/
    _count?: true | TweetHashtagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TweetHashtagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TweetHashtagMaxAggregateInputType
  }

  export type GetTweetHashtagAggregateType<T extends TweetHashtagAggregateArgs> = {
        [P in keyof T & keyof AggregateTweetHashtag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTweetHashtag[P]>
      : GetScalarType<T[P], AggregateTweetHashtag[P]>
  }




  export type TweetHashtagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TweetHashtagWhereInput
    orderBy?: TweetHashtagOrderByWithAggregationInput | TweetHashtagOrderByWithAggregationInput[]
    by: TweetHashtagScalarFieldEnum[] | TweetHashtagScalarFieldEnum
    having?: TweetHashtagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TweetHashtagCountAggregateInputType | true
    _min?: TweetHashtagMinAggregateInputType
    _max?: TweetHashtagMaxAggregateInputType
  }

  export type TweetHashtagGroupByOutputType = {
    tweetId: string
    hashtagId: string
    _count: TweetHashtagCountAggregateOutputType | null
    _min: TweetHashtagMinAggregateOutputType | null
    _max: TweetHashtagMaxAggregateOutputType | null
  }

  type GetTweetHashtagGroupByPayload<T extends TweetHashtagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TweetHashtagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TweetHashtagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TweetHashtagGroupByOutputType[P]>
            : GetScalarType<T[P], TweetHashtagGroupByOutputType[P]>
        }
      >
    >


  export type TweetHashtagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tweetId?: boolean
    hashtagId?: boolean
    tweet?: boolean | TweetDefaultArgs<ExtArgs>
    hashtag?: boolean | HashtagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tweetHashtag"]>

  export type TweetHashtagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tweetId?: boolean
    hashtagId?: boolean
    tweet?: boolean | TweetDefaultArgs<ExtArgs>
    hashtag?: boolean | HashtagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tweetHashtag"]>

  export type TweetHashtagSelectScalar = {
    tweetId?: boolean
    hashtagId?: boolean
  }

  export type TweetHashtagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tweet?: boolean | TweetDefaultArgs<ExtArgs>
    hashtag?: boolean | HashtagDefaultArgs<ExtArgs>
  }
  export type TweetHashtagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tweet?: boolean | TweetDefaultArgs<ExtArgs>
    hashtag?: boolean | HashtagDefaultArgs<ExtArgs>
  }

  export type $TweetHashtagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TweetHashtag"
    objects: {
      tweet: Prisma.$TweetPayload<ExtArgs>
      hashtag: Prisma.$HashtagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      tweetId: string
      hashtagId: string
    }, ExtArgs["result"]["tweetHashtag"]>
    composites: {}
  }

  type TweetHashtagGetPayload<S extends boolean | null | undefined | TweetHashtagDefaultArgs> = $Result.GetResult<Prisma.$TweetHashtagPayload, S>

  type TweetHashtagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TweetHashtagFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TweetHashtagCountAggregateInputType | true
    }

  export interface TweetHashtagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TweetHashtag'], meta: { name: 'TweetHashtag' } }
    /**
     * Find zero or one TweetHashtag that matches the filter.
     * @param {TweetHashtagFindUniqueArgs} args - Arguments to find a TweetHashtag
     * @example
     * // Get one TweetHashtag
     * const tweetHashtag = await prisma.tweetHashtag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TweetHashtagFindUniqueArgs>(args: SelectSubset<T, TweetHashtagFindUniqueArgs<ExtArgs>>): Prisma__TweetHashtagClient<$Result.GetResult<Prisma.$TweetHashtagPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TweetHashtag that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TweetHashtagFindUniqueOrThrowArgs} args - Arguments to find a TweetHashtag
     * @example
     * // Get one TweetHashtag
     * const tweetHashtag = await prisma.tweetHashtag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TweetHashtagFindUniqueOrThrowArgs>(args: SelectSubset<T, TweetHashtagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TweetHashtagClient<$Result.GetResult<Prisma.$TweetHashtagPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TweetHashtag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TweetHashtagFindFirstArgs} args - Arguments to find a TweetHashtag
     * @example
     * // Get one TweetHashtag
     * const tweetHashtag = await prisma.tweetHashtag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TweetHashtagFindFirstArgs>(args?: SelectSubset<T, TweetHashtagFindFirstArgs<ExtArgs>>): Prisma__TweetHashtagClient<$Result.GetResult<Prisma.$TweetHashtagPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TweetHashtag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TweetHashtagFindFirstOrThrowArgs} args - Arguments to find a TweetHashtag
     * @example
     * // Get one TweetHashtag
     * const tweetHashtag = await prisma.tweetHashtag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TweetHashtagFindFirstOrThrowArgs>(args?: SelectSubset<T, TweetHashtagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TweetHashtagClient<$Result.GetResult<Prisma.$TweetHashtagPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TweetHashtags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TweetHashtagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TweetHashtags
     * const tweetHashtags = await prisma.tweetHashtag.findMany()
     * 
     * // Get first 10 TweetHashtags
     * const tweetHashtags = await prisma.tweetHashtag.findMany({ take: 10 })
     * 
     * // Only select the `tweetId`
     * const tweetHashtagWithTweetIdOnly = await prisma.tweetHashtag.findMany({ select: { tweetId: true } })
     * 
     */
    findMany<T extends TweetHashtagFindManyArgs>(args?: SelectSubset<T, TweetHashtagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TweetHashtagPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TweetHashtag.
     * @param {TweetHashtagCreateArgs} args - Arguments to create a TweetHashtag.
     * @example
     * // Create one TweetHashtag
     * const TweetHashtag = await prisma.tweetHashtag.create({
     *   data: {
     *     // ... data to create a TweetHashtag
     *   }
     * })
     * 
     */
    create<T extends TweetHashtagCreateArgs>(args: SelectSubset<T, TweetHashtagCreateArgs<ExtArgs>>): Prisma__TweetHashtagClient<$Result.GetResult<Prisma.$TweetHashtagPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TweetHashtags.
     * @param {TweetHashtagCreateManyArgs} args - Arguments to create many TweetHashtags.
     * @example
     * // Create many TweetHashtags
     * const tweetHashtag = await prisma.tweetHashtag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TweetHashtagCreateManyArgs>(args?: SelectSubset<T, TweetHashtagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TweetHashtags and returns the data saved in the database.
     * @param {TweetHashtagCreateManyAndReturnArgs} args - Arguments to create many TweetHashtags.
     * @example
     * // Create many TweetHashtags
     * const tweetHashtag = await prisma.tweetHashtag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TweetHashtags and only return the `tweetId`
     * const tweetHashtagWithTweetIdOnly = await prisma.tweetHashtag.createManyAndReturn({ 
     *   select: { tweetId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TweetHashtagCreateManyAndReturnArgs>(args?: SelectSubset<T, TweetHashtagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TweetHashtagPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TweetHashtag.
     * @param {TweetHashtagDeleteArgs} args - Arguments to delete one TweetHashtag.
     * @example
     * // Delete one TweetHashtag
     * const TweetHashtag = await prisma.tweetHashtag.delete({
     *   where: {
     *     // ... filter to delete one TweetHashtag
     *   }
     * })
     * 
     */
    delete<T extends TweetHashtagDeleteArgs>(args: SelectSubset<T, TweetHashtagDeleteArgs<ExtArgs>>): Prisma__TweetHashtagClient<$Result.GetResult<Prisma.$TweetHashtagPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TweetHashtag.
     * @param {TweetHashtagUpdateArgs} args - Arguments to update one TweetHashtag.
     * @example
     * // Update one TweetHashtag
     * const tweetHashtag = await prisma.tweetHashtag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TweetHashtagUpdateArgs>(args: SelectSubset<T, TweetHashtagUpdateArgs<ExtArgs>>): Prisma__TweetHashtagClient<$Result.GetResult<Prisma.$TweetHashtagPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TweetHashtags.
     * @param {TweetHashtagDeleteManyArgs} args - Arguments to filter TweetHashtags to delete.
     * @example
     * // Delete a few TweetHashtags
     * const { count } = await prisma.tweetHashtag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TweetHashtagDeleteManyArgs>(args?: SelectSubset<T, TweetHashtagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TweetHashtags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TweetHashtagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TweetHashtags
     * const tweetHashtag = await prisma.tweetHashtag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TweetHashtagUpdateManyArgs>(args: SelectSubset<T, TweetHashtagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TweetHashtag.
     * @param {TweetHashtagUpsertArgs} args - Arguments to update or create a TweetHashtag.
     * @example
     * // Update or create a TweetHashtag
     * const tweetHashtag = await prisma.tweetHashtag.upsert({
     *   create: {
     *     // ... data to create a TweetHashtag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TweetHashtag we want to update
     *   }
     * })
     */
    upsert<T extends TweetHashtagUpsertArgs>(args: SelectSubset<T, TweetHashtagUpsertArgs<ExtArgs>>): Prisma__TweetHashtagClient<$Result.GetResult<Prisma.$TweetHashtagPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TweetHashtags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TweetHashtagCountArgs} args - Arguments to filter TweetHashtags to count.
     * @example
     * // Count the number of TweetHashtags
     * const count = await prisma.tweetHashtag.count({
     *   where: {
     *     // ... the filter for the TweetHashtags we want to count
     *   }
     * })
    **/
    count<T extends TweetHashtagCountArgs>(
      args?: Subset<T, TweetHashtagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TweetHashtagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TweetHashtag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TweetHashtagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TweetHashtagAggregateArgs>(args: Subset<T, TweetHashtagAggregateArgs>): Prisma.PrismaPromise<GetTweetHashtagAggregateType<T>>

    /**
     * Group by TweetHashtag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TweetHashtagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TweetHashtagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TweetHashtagGroupByArgs['orderBy'] }
        : { orderBy?: TweetHashtagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TweetHashtagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTweetHashtagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TweetHashtag model
   */
  readonly fields: TweetHashtagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TweetHashtag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TweetHashtagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tweet<T extends TweetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TweetDefaultArgs<ExtArgs>>): Prisma__TweetClient<$Result.GetResult<Prisma.$TweetPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    hashtag<T extends HashtagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HashtagDefaultArgs<ExtArgs>>): Prisma__HashtagClient<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TweetHashtag model
   */ 
  interface TweetHashtagFieldRefs {
    readonly tweetId: FieldRef<"TweetHashtag", 'String'>
    readonly hashtagId: FieldRef<"TweetHashtag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TweetHashtag findUnique
   */
  export type TweetHashtagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TweetHashtag
     */
    select?: TweetHashtagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetHashtagInclude<ExtArgs> | null
    /**
     * Filter, which TweetHashtag to fetch.
     */
    where: TweetHashtagWhereUniqueInput
  }

  /**
   * TweetHashtag findUniqueOrThrow
   */
  export type TweetHashtagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TweetHashtag
     */
    select?: TweetHashtagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetHashtagInclude<ExtArgs> | null
    /**
     * Filter, which TweetHashtag to fetch.
     */
    where: TweetHashtagWhereUniqueInput
  }

  /**
   * TweetHashtag findFirst
   */
  export type TweetHashtagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TweetHashtag
     */
    select?: TweetHashtagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetHashtagInclude<ExtArgs> | null
    /**
     * Filter, which TweetHashtag to fetch.
     */
    where?: TweetHashtagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TweetHashtags to fetch.
     */
    orderBy?: TweetHashtagOrderByWithRelationInput | TweetHashtagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TweetHashtags.
     */
    cursor?: TweetHashtagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TweetHashtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TweetHashtags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TweetHashtags.
     */
    distinct?: TweetHashtagScalarFieldEnum | TweetHashtagScalarFieldEnum[]
  }

  /**
   * TweetHashtag findFirstOrThrow
   */
  export type TweetHashtagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TweetHashtag
     */
    select?: TweetHashtagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetHashtagInclude<ExtArgs> | null
    /**
     * Filter, which TweetHashtag to fetch.
     */
    where?: TweetHashtagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TweetHashtags to fetch.
     */
    orderBy?: TweetHashtagOrderByWithRelationInput | TweetHashtagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TweetHashtags.
     */
    cursor?: TweetHashtagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TweetHashtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TweetHashtags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TweetHashtags.
     */
    distinct?: TweetHashtagScalarFieldEnum | TweetHashtagScalarFieldEnum[]
  }

  /**
   * TweetHashtag findMany
   */
  export type TweetHashtagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TweetHashtag
     */
    select?: TweetHashtagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetHashtagInclude<ExtArgs> | null
    /**
     * Filter, which TweetHashtags to fetch.
     */
    where?: TweetHashtagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TweetHashtags to fetch.
     */
    orderBy?: TweetHashtagOrderByWithRelationInput | TweetHashtagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TweetHashtags.
     */
    cursor?: TweetHashtagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TweetHashtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TweetHashtags.
     */
    skip?: number
    distinct?: TweetHashtagScalarFieldEnum | TweetHashtagScalarFieldEnum[]
  }

  /**
   * TweetHashtag create
   */
  export type TweetHashtagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TweetHashtag
     */
    select?: TweetHashtagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetHashtagInclude<ExtArgs> | null
    /**
     * The data needed to create a TweetHashtag.
     */
    data: XOR<TweetHashtagCreateInput, TweetHashtagUncheckedCreateInput>
  }

  /**
   * TweetHashtag createMany
   */
  export type TweetHashtagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TweetHashtags.
     */
    data: TweetHashtagCreateManyInput | TweetHashtagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TweetHashtag createManyAndReturn
   */
  export type TweetHashtagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TweetHashtag
     */
    select?: TweetHashtagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TweetHashtags.
     */
    data: TweetHashtagCreateManyInput | TweetHashtagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetHashtagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TweetHashtag update
   */
  export type TweetHashtagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TweetHashtag
     */
    select?: TweetHashtagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetHashtagInclude<ExtArgs> | null
    /**
     * The data needed to update a TweetHashtag.
     */
    data: XOR<TweetHashtagUpdateInput, TweetHashtagUncheckedUpdateInput>
    /**
     * Choose, which TweetHashtag to update.
     */
    where: TweetHashtagWhereUniqueInput
  }

  /**
   * TweetHashtag updateMany
   */
  export type TweetHashtagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TweetHashtags.
     */
    data: XOR<TweetHashtagUpdateManyMutationInput, TweetHashtagUncheckedUpdateManyInput>
    /**
     * Filter which TweetHashtags to update
     */
    where?: TweetHashtagWhereInput
  }

  /**
   * TweetHashtag upsert
   */
  export type TweetHashtagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TweetHashtag
     */
    select?: TweetHashtagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetHashtagInclude<ExtArgs> | null
    /**
     * The filter to search for the TweetHashtag to update in case it exists.
     */
    where: TweetHashtagWhereUniqueInput
    /**
     * In case the TweetHashtag found by the `where` argument doesn't exist, create a new TweetHashtag with this data.
     */
    create: XOR<TweetHashtagCreateInput, TweetHashtagUncheckedCreateInput>
    /**
     * In case the TweetHashtag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TweetHashtagUpdateInput, TweetHashtagUncheckedUpdateInput>
  }

  /**
   * TweetHashtag delete
   */
  export type TweetHashtagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TweetHashtag
     */
    select?: TweetHashtagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetHashtagInclude<ExtArgs> | null
    /**
     * Filter which TweetHashtag to delete.
     */
    where: TweetHashtagWhereUniqueInput
  }

  /**
   * TweetHashtag deleteMany
   */
  export type TweetHashtagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TweetHashtags to delete
     */
    where?: TweetHashtagWhereInput
  }

  /**
   * TweetHashtag without action
   */
  export type TweetHashtagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TweetHashtag
     */
    select?: TweetHashtagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetHashtagInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    actorId: string | null
    type: $Enums.NotificationType | null
    tweetId: string | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    actorId: string | null
    type: $Enums.NotificationType | null
    tweetId: string | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    actorId: number
    type: number
    tweetId: number
    createdAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    actorId?: true
    type?: true
    tweetId?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    actorId?: true
    type?: true
    tweetId?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    actorId?: true
    type?: true
    tweetId?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    userId: string
    actorId: string | null
    type: $Enums.NotificationType
    tweetId: string | null
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    actorId?: boolean
    type?: boolean
    tweetId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    actorId?: boolean
    type?: boolean
    tweetId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    actorId?: boolean
    type?: boolean
    tweetId?: boolean
    createdAt?: boolean
  }

  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      actorId: string | null
      type: $Enums.NotificationType
      tweetId: string | null
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */ 
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly actorId: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'NotificationType'>
    readonly tweetId: FieldRef<"Notification", 'String'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model RefreshToken
   */

  export type AggregateRefreshToken = {
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  export type RefreshTokenMinAggregateOutputType = {
    id: string | null
    userId: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type RefreshTokenMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type RefreshTokenCountAggregateOutputType = {
    id: number
    userId: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type RefreshTokenMinAggregateInputType = {
    id?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
  }

  export type RefreshTokenMaxAggregateInputType = {
    id?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
  }

  export type RefreshTokenCountAggregateInputType = {
    id?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type RefreshTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshToken to aggregate.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefreshTokens
    **/
    _count?: true | RefreshTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type GetRefreshTokenAggregateType<T extends RefreshTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshToken[P]>
      : GetScalarType<T[P], AggregateRefreshToken[P]>
  }




  export type RefreshTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithAggregationInput | RefreshTokenOrderByWithAggregationInput[]
    by: RefreshTokenScalarFieldEnum[] | RefreshTokenScalarFieldEnum
    having?: RefreshTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshTokenCountAggregateInputType | true
    _min?: RefreshTokenMinAggregateInputType
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type RefreshTokenGroupByOutputType = {
    id: string
    userId: string
    expiresAt: Date
    createdAt: Date
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  type GetRefreshTokenGroupByPayload<T extends RefreshTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefreshTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
        }
      >
    >


  export type RefreshTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectScalar = {
    id?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type RefreshTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RefreshTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefreshToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["refreshToken"]>
    composites: {}
  }

  type RefreshTokenGetPayload<S extends boolean | null | undefined | RefreshTokenDefaultArgs> = $Result.GetResult<Prisma.$RefreshTokenPayload, S>

  type RefreshTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RefreshTokenFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RefreshTokenCountAggregateInputType | true
    }

  export interface RefreshTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefreshToken'], meta: { name: 'RefreshToken' } }
    /**
     * Find zero or one RefreshToken that matches the filter.
     * @param {RefreshTokenFindUniqueArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefreshTokenFindUniqueArgs>(args: SelectSubset<T, RefreshTokenFindUniqueArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RefreshToken that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefreshTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, RefreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefreshTokenFindFirstArgs>(args?: SelectSubset<T, RefreshTokenFindFirstArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefreshTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, RefreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany()
     * 
     * // Get first 10 RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefreshTokenFindManyArgs>(args?: SelectSubset<T, RefreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RefreshToken.
     * @param {RefreshTokenCreateArgs} args - Arguments to create a RefreshToken.
     * @example
     * // Create one RefreshToken
     * const RefreshToken = await prisma.refreshToken.create({
     *   data: {
     *     // ... data to create a RefreshToken
     *   }
     * })
     * 
     */
    create<T extends RefreshTokenCreateArgs>(args: SelectSubset<T, RefreshTokenCreateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RefreshTokens.
     * @param {RefreshTokenCreateManyArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefreshTokenCreateManyArgs>(args?: SelectSubset<T, RefreshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RefreshTokens and returns the data saved in the database.
     * @param {RefreshTokenCreateManyAndReturnArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RefreshTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, RefreshTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a RefreshToken.
     * @param {RefreshTokenDeleteArgs} args - Arguments to delete one RefreshToken.
     * @example
     * // Delete one RefreshToken
     * const RefreshToken = await prisma.refreshToken.delete({
     *   where: {
     *     // ... filter to delete one RefreshToken
     *   }
     * })
     * 
     */
    delete<T extends RefreshTokenDeleteArgs>(args: SelectSubset<T, RefreshTokenDeleteArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RefreshToken.
     * @param {RefreshTokenUpdateArgs} args - Arguments to update one RefreshToken.
     * @example
     * // Update one RefreshToken
     * const refreshToken = await prisma.refreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefreshTokenUpdateArgs>(args: SelectSubset<T, RefreshTokenUpdateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RefreshTokens.
     * @param {RefreshTokenDeleteManyArgs} args - Arguments to filter RefreshTokens to delete.
     * @example
     * // Delete a few RefreshTokens
     * const { count } = await prisma.refreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefreshTokenDeleteManyArgs>(args?: SelectSubset<T, RefreshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefreshTokenUpdateManyArgs>(args: SelectSubset<T, RefreshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RefreshToken.
     * @param {RefreshTokenUpsertArgs} args - Arguments to update or create a RefreshToken.
     * @example
     * // Update or create a RefreshToken
     * const refreshToken = await prisma.refreshToken.upsert({
     *   create: {
     *     // ... data to create a RefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshToken we want to update
     *   }
     * })
     */
    upsert<T extends RefreshTokenUpsertArgs>(args: SelectSubset<T, RefreshTokenUpsertArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenCountArgs} args - Arguments to filter RefreshTokens to count.
     * @example
     * // Count the number of RefreshTokens
     * const count = await prisma.refreshToken.count({
     *   where: {
     *     // ... the filter for the RefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends RefreshTokenCountArgs>(
      args?: Subset<T, RefreshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RefreshTokenAggregateArgs>(args: Subset<T, RefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetRefreshTokenAggregateType<T>>

    /**
     * Group by RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: RefreshTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RefreshToken model
   */
  readonly fields: RefreshTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefreshTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RefreshToken model
   */ 
  interface RefreshTokenFieldRefs {
    readonly id: FieldRef<"RefreshToken", 'String'>
    readonly userId: FieldRef<"RefreshToken", 'String'>
    readonly expiresAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly createdAt: FieldRef<"RefreshToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RefreshToken findUnique
   */
  export type RefreshTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findUniqueOrThrow
   */
  export type RefreshTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findFirst
   */
  export type RefreshTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findFirstOrThrow
   */
  export type RefreshTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findMany
   */
  export type RefreshTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshTokens to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken create
   */
  export type RefreshTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a RefreshToken.
     */
    data: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
  }

  /**
   * RefreshToken createMany
   */
  export type RefreshTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RefreshToken createManyAndReturn
   */
  export type RefreshTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken update
   */
  export type RefreshTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a RefreshToken.
     */
    data: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
    /**
     * Choose, which RefreshToken to update.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken updateMany
   */
  export type RefreshTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
  }

  /**
   * RefreshToken upsert
   */
  export type RefreshTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the RefreshToken to update in case it exists.
     */
    where: RefreshTokenWhereUniqueInput
    /**
     * In case the RefreshToken found by the `where` argument doesn't exist, create a new RefreshToken with this data.
     */
    create: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
    /**
     * In case the RefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
  }

  /**
   * RefreshToken delete
   */
  export type RefreshTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter which RefreshToken to delete.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken deleteMany
   */
  export type RefreshTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshTokens to delete
     */
    where?: RefreshTokenWhereInput
  }

  /**
   * RefreshToken without action
   */
  export type RefreshTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
  }


  /**
   * Model TweetMetrics
   */

  export type AggregateTweetMetrics = {
    _count: TweetMetricsCountAggregateOutputType | null
    _avg: TweetMetricsAvgAggregateOutputType | null
    _sum: TweetMetricsSumAggregateOutputType | null
    _min: TweetMetricsMinAggregateOutputType | null
    _max: TweetMetricsMaxAggregateOutputType | null
  }

  export type TweetMetricsAvgAggregateOutputType = {
    likesCount: number | null
    repliesCount: number | null
    retweetsCount: number | null
  }

  export type TweetMetricsSumAggregateOutputType = {
    likesCount: number | null
    repliesCount: number | null
    retweetsCount: number | null
  }

  export type TweetMetricsMinAggregateOutputType = {
    tweetId: string | null
    likesCount: number | null
    repliesCount: number | null
    retweetsCount: number | null
  }

  export type TweetMetricsMaxAggregateOutputType = {
    tweetId: string | null
    likesCount: number | null
    repliesCount: number | null
    retweetsCount: number | null
  }

  export type TweetMetricsCountAggregateOutputType = {
    tweetId: number
    likesCount: number
    repliesCount: number
    retweetsCount: number
    _all: number
  }


  export type TweetMetricsAvgAggregateInputType = {
    likesCount?: true
    repliesCount?: true
    retweetsCount?: true
  }

  export type TweetMetricsSumAggregateInputType = {
    likesCount?: true
    repliesCount?: true
    retweetsCount?: true
  }

  export type TweetMetricsMinAggregateInputType = {
    tweetId?: true
    likesCount?: true
    repliesCount?: true
    retweetsCount?: true
  }

  export type TweetMetricsMaxAggregateInputType = {
    tweetId?: true
    likesCount?: true
    repliesCount?: true
    retweetsCount?: true
  }

  export type TweetMetricsCountAggregateInputType = {
    tweetId?: true
    likesCount?: true
    repliesCount?: true
    retweetsCount?: true
    _all?: true
  }

  export type TweetMetricsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TweetMetrics to aggregate.
     */
    where?: TweetMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TweetMetrics to fetch.
     */
    orderBy?: TweetMetricsOrderByWithRelationInput | TweetMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TweetMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TweetMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TweetMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TweetMetrics
    **/
    _count?: true | TweetMetricsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TweetMetricsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TweetMetricsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TweetMetricsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TweetMetricsMaxAggregateInputType
  }

  export type GetTweetMetricsAggregateType<T extends TweetMetricsAggregateArgs> = {
        [P in keyof T & keyof AggregateTweetMetrics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTweetMetrics[P]>
      : GetScalarType<T[P], AggregateTweetMetrics[P]>
  }




  export type TweetMetricsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TweetMetricsWhereInput
    orderBy?: TweetMetricsOrderByWithAggregationInput | TweetMetricsOrderByWithAggregationInput[]
    by: TweetMetricsScalarFieldEnum[] | TweetMetricsScalarFieldEnum
    having?: TweetMetricsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TweetMetricsCountAggregateInputType | true
    _avg?: TweetMetricsAvgAggregateInputType
    _sum?: TweetMetricsSumAggregateInputType
    _min?: TweetMetricsMinAggregateInputType
    _max?: TweetMetricsMaxAggregateInputType
  }

  export type TweetMetricsGroupByOutputType = {
    tweetId: string
    likesCount: number
    repliesCount: number
    retweetsCount: number
    _count: TweetMetricsCountAggregateOutputType | null
    _avg: TweetMetricsAvgAggregateOutputType | null
    _sum: TweetMetricsSumAggregateOutputType | null
    _min: TweetMetricsMinAggregateOutputType | null
    _max: TweetMetricsMaxAggregateOutputType | null
  }

  type GetTweetMetricsGroupByPayload<T extends TweetMetricsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TweetMetricsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TweetMetricsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TweetMetricsGroupByOutputType[P]>
            : GetScalarType<T[P], TweetMetricsGroupByOutputType[P]>
        }
      >
    >


  export type TweetMetricsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tweetId?: boolean
    likesCount?: boolean
    repliesCount?: boolean
    retweetsCount?: boolean
    tweet?: boolean | TweetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tweetMetrics"]>

  export type TweetMetricsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tweetId?: boolean
    likesCount?: boolean
    repliesCount?: boolean
    retweetsCount?: boolean
    tweet?: boolean | TweetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tweetMetrics"]>

  export type TweetMetricsSelectScalar = {
    tweetId?: boolean
    likesCount?: boolean
    repliesCount?: boolean
    retweetsCount?: boolean
  }

  export type TweetMetricsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tweet?: boolean | TweetDefaultArgs<ExtArgs>
  }
  export type TweetMetricsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tweet?: boolean | TweetDefaultArgs<ExtArgs>
  }

  export type $TweetMetricsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TweetMetrics"
    objects: {
      tweet: Prisma.$TweetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      tweetId: string
      likesCount: number
      repliesCount: number
      retweetsCount: number
    }, ExtArgs["result"]["tweetMetrics"]>
    composites: {}
  }

  type TweetMetricsGetPayload<S extends boolean | null | undefined | TweetMetricsDefaultArgs> = $Result.GetResult<Prisma.$TweetMetricsPayload, S>

  type TweetMetricsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TweetMetricsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TweetMetricsCountAggregateInputType | true
    }

  export interface TweetMetricsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TweetMetrics'], meta: { name: 'TweetMetrics' } }
    /**
     * Find zero or one TweetMetrics that matches the filter.
     * @param {TweetMetricsFindUniqueArgs} args - Arguments to find a TweetMetrics
     * @example
     * // Get one TweetMetrics
     * const tweetMetrics = await prisma.tweetMetrics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TweetMetricsFindUniqueArgs>(args: SelectSubset<T, TweetMetricsFindUniqueArgs<ExtArgs>>): Prisma__TweetMetricsClient<$Result.GetResult<Prisma.$TweetMetricsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TweetMetrics that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TweetMetricsFindUniqueOrThrowArgs} args - Arguments to find a TweetMetrics
     * @example
     * // Get one TweetMetrics
     * const tweetMetrics = await prisma.tweetMetrics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TweetMetricsFindUniqueOrThrowArgs>(args: SelectSubset<T, TweetMetricsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TweetMetricsClient<$Result.GetResult<Prisma.$TweetMetricsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TweetMetrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TweetMetricsFindFirstArgs} args - Arguments to find a TweetMetrics
     * @example
     * // Get one TweetMetrics
     * const tweetMetrics = await prisma.tweetMetrics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TweetMetricsFindFirstArgs>(args?: SelectSubset<T, TweetMetricsFindFirstArgs<ExtArgs>>): Prisma__TweetMetricsClient<$Result.GetResult<Prisma.$TweetMetricsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TweetMetrics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TweetMetricsFindFirstOrThrowArgs} args - Arguments to find a TweetMetrics
     * @example
     * // Get one TweetMetrics
     * const tweetMetrics = await prisma.tweetMetrics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TweetMetricsFindFirstOrThrowArgs>(args?: SelectSubset<T, TweetMetricsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TweetMetricsClient<$Result.GetResult<Prisma.$TweetMetricsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TweetMetrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TweetMetricsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TweetMetrics
     * const tweetMetrics = await prisma.tweetMetrics.findMany()
     * 
     * // Get first 10 TweetMetrics
     * const tweetMetrics = await prisma.tweetMetrics.findMany({ take: 10 })
     * 
     * // Only select the `tweetId`
     * const tweetMetricsWithTweetIdOnly = await prisma.tweetMetrics.findMany({ select: { tweetId: true } })
     * 
     */
    findMany<T extends TweetMetricsFindManyArgs>(args?: SelectSubset<T, TweetMetricsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TweetMetricsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TweetMetrics.
     * @param {TweetMetricsCreateArgs} args - Arguments to create a TweetMetrics.
     * @example
     * // Create one TweetMetrics
     * const TweetMetrics = await prisma.tweetMetrics.create({
     *   data: {
     *     // ... data to create a TweetMetrics
     *   }
     * })
     * 
     */
    create<T extends TweetMetricsCreateArgs>(args: SelectSubset<T, TweetMetricsCreateArgs<ExtArgs>>): Prisma__TweetMetricsClient<$Result.GetResult<Prisma.$TweetMetricsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TweetMetrics.
     * @param {TweetMetricsCreateManyArgs} args - Arguments to create many TweetMetrics.
     * @example
     * // Create many TweetMetrics
     * const tweetMetrics = await prisma.tweetMetrics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TweetMetricsCreateManyArgs>(args?: SelectSubset<T, TweetMetricsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TweetMetrics and returns the data saved in the database.
     * @param {TweetMetricsCreateManyAndReturnArgs} args - Arguments to create many TweetMetrics.
     * @example
     * // Create many TweetMetrics
     * const tweetMetrics = await prisma.tweetMetrics.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TweetMetrics and only return the `tweetId`
     * const tweetMetricsWithTweetIdOnly = await prisma.tweetMetrics.createManyAndReturn({ 
     *   select: { tweetId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TweetMetricsCreateManyAndReturnArgs>(args?: SelectSubset<T, TweetMetricsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TweetMetricsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TweetMetrics.
     * @param {TweetMetricsDeleteArgs} args - Arguments to delete one TweetMetrics.
     * @example
     * // Delete one TweetMetrics
     * const TweetMetrics = await prisma.tweetMetrics.delete({
     *   where: {
     *     // ... filter to delete one TweetMetrics
     *   }
     * })
     * 
     */
    delete<T extends TweetMetricsDeleteArgs>(args: SelectSubset<T, TweetMetricsDeleteArgs<ExtArgs>>): Prisma__TweetMetricsClient<$Result.GetResult<Prisma.$TweetMetricsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TweetMetrics.
     * @param {TweetMetricsUpdateArgs} args - Arguments to update one TweetMetrics.
     * @example
     * // Update one TweetMetrics
     * const tweetMetrics = await prisma.tweetMetrics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TweetMetricsUpdateArgs>(args: SelectSubset<T, TweetMetricsUpdateArgs<ExtArgs>>): Prisma__TweetMetricsClient<$Result.GetResult<Prisma.$TweetMetricsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TweetMetrics.
     * @param {TweetMetricsDeleteManyArgs} args - Arguments to filter TweetMetrics to delete.
     * @example
     * // Delete a few TweetMetrics
     * const { count } = await prisma.tweetMetrics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TweetMetricsDeleteManyArgs>(args?: SelectSubset<T, TweetMetricsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TweetMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TweetMetricsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TweetMetrics
     * const tweetMetrics = await prisma.tweetMetrics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TweetMetricsUpdateManyArgs>(args: SelectSubset<T, TweetMetricsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TweetMetrics.
     * @param {TweetMetricsUpsertArgs} args - Arguments to update or create a TweetMetrics.
     * @example
     * // Update or create a TweetMetrics
     * const tweetMetrics = await prisma.tweetMetrics.upsert({
     *   create: {
     *     // ... data to create a TweetMetrics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TweetMetrics we want to update
     *   }
     * })
     */
    upsert<T extends TweetMetricsUpsertArgs>(args: SelectSubset<T, TweetMetricsUpsertArgs<ExtArgs>>): Prisma__TweetMetricsClient<$Result.GetResult<Prisma.$TweetMetricsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TweetMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TweetMetricsCountArgs} args - Arguments to filter TweetMetrics to count.
     * @example
     * // Count the number of TweetMetrics
     * const count = await prisma.tweetMetrics.count({
     *   where: {
     *     // ... the filter for the TweetMetrics we want to count
     *   }
     * })
    **/
    count<T extends TweetMetricsCountArgs>(
      args?: Subset<T, TweetMetricsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TweetMetricsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TweetMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TweetMetricsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TweetMetricsAggregateArgs>(args: Subset<T, TweetMetricsAggregateArgs>): Prisma.PrismaPromise<GetTweetMetricsAggregateType<T>>

    /**
     * Group by TweetMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TweetMetricsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TweetMetricsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TweetMetricsGroupByArgs['orderBy'] }
        : { orderBy?: TweetMetricsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TweetMetricsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTweetMetricsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TweetMetrics model
   */
  readonly fields: TweetMetricsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TweetMetrics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TweetMetricsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tweet<T extends TweetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TweetDefaultArgs<ExtArgs>>): Prisma__TweetClient<$Result.GetResult<Prisma.$TweetPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TweetMetrics model
   */ 
  interface TweetMetricsFieldRefs {
    readonly tweetId: FieldRef<"TweetMetrics", 'String'>
    readonly likesCount: FieldRef<"TweetMetrics", 'Int'>
    readonly repliesCount: FieldRef<"TweetMetrics", 'Int'>
    readonly retweetsCount: FieldRef<"TweetMetrics", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TweetMetrics findUnique
   */
  export type TweetMetricsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TweetMetrics
     */
    select?: TweetMetricsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetMetricsInclude<ExtArgs> | null
    /**
     * Filter, which TweetMetrics to fetch.
     */
    where: TweetMetricsWhereUniqueInput
  }

  /**
   * TweetMetrics findUniqueOrThrow
   */
  export type TweetMetricsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TweetMetrics
     */
    select?: TweetMetricsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetMetricsInclude<ExtArgs> | null
    /**
     * Filter, which TweetMetrics to fetch.
     */
    where: TweetMetricsWhereUniqueInput
  }

  /**
   * TweetMetrics findFirst
   */
  export type TweetMetricsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TweetMetrics
     */
    select?: TweetMetricsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetMetricsInclude<ExtArgs> | null
    /**
     * Filter, which TweetMetrics to fetch.
     */
    where?: TweetMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TweetMetrics to fetch.
     */
    orderBy?: TweetMetricsOrderByWithRelationInput | TweetMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TweetMetrics.
     */
    cursor?: TweetMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TweetMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TweetMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TweetMetrics.
     */
    distinct?: TweetMetricsScalarFieldEnum | TweetMetricsScalarFieldEnum[]
  }

  /**
   * TweetMetrics findFirstOrThrow
   */
  export type TweetMetricsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TweetMetrics
     */
    select?: TweetMetricsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetMetricsInclude<ExtArgs> | null
    /**
     * Filter, which TweetMetrics to fetch.
     */
    where?: TweetMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TweetMetrics to fetch.
     */
    orderBy?: TweetMetricsOrderByWithRelationInput | TweetMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TweetMetrics.
     */
    cursor?: TweetMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TweetMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TweetMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TweetMetrics.
     */
    distinct?: TweetMetricsScalarFieldEnum | TweetMetricsScalarFieldEnum[]
  }

  /**
   * TweetMetrics findMany
   */
  export type TweetMetricsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TweetMetrics
     */
    select?: TweetMetricsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetMetricsInclude<ExtArgs> | null
    /**
     * Filter, which TweetMetrics to fetch.
     */
    where?: TweetMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TweetMetrics to fetch.
     */
    orderBy?: TweetMetricsOrderByWithRelationInput | TweetMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TweetMetrics.
     */
    cursor?: TweetMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TweetMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TweetMetrics.
     */
    skip?: number
    distinct?: TweetMetricsScalarFieldEnum | TweetMetricsScalarFieldEnum[]
  }

  /**
   * TweetMetrics create
   */
  export type TweetMetricsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TweetMetrics
     */
    select?: TweetMetricsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetMetricsInclude<ExtArgs> | null
    /**
     * The data needed to create a TweetMetrics.
     */
    data: XOR<TweetMetricsCreateInput, TweetMetricsUncheckedCreateInput>
  }

  /**
   * TweetMetrics createMany
   */
  export type TweetMetricsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TweetMetrics.
     */
    data: TweetMetricsCreateManyInput | TweetMetricsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TweetMetrics createManyAndReturn
   */
  export type TweetMetricsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TweetMetrics
     */
    select?: TweetMetricsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TweetMetrics.
     */
    data: TweetMetricsCreateManyInput | TweetMetricsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetMetricsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TweetMetrics update
   */
  export type TweetMetricsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TweetMetrics
     */
    select?: TweetMetricsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetMetricsInclude<ExtArgs> | null
    /**
     * The data needed to update a TweetMetrics.
     */
    data: XOR<TweetMetricsUpdateInput, TweetMetricsUncheckedUpdateInput>
    /**
     * Choose, which TweetMetrics to update.
     */
    where: TweetMetricsWhereUniqueInput
  }

  /**
   * TweetMetrics updateMany
   */
  export type TweetMetricsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TweetMetrics.
     */
    data: XOR<TweetMetricsUpdateManyMutationInput, TweetMetricsUncheckedUpdateManyInput>
    /**
     * Filter which TweetMetrics to update
     */
    where?: TweetMetricsWhereInput
  }

  /**
   * TweetMetrics upsert
   */
  export type TweetMetricsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TweetMetrics
     */
    select?: TweetMetricsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetMetricsInclude<ExtArgs> | null
    /**
     * The filter to search for the TweetMetrics to update in case it exists.
     */
    where: TweetMetricsWhereUniqueInput
    /**
     * In case the TweetMetrics found by the `where` argument doesn't exist, create a new TweetMetrics with this data.
     */
    create: XOR<TweetMetricsCreateInput, TweetMetricsUncheckedCreateInput>
    /**
     * In case the TweetMetrics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TweetMetricsUpdateInput, TweetMetricsUncheckedUpdateInput>
  }

  /**
   * TweetMetrics delete
   */
  export type TweetMetricsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TweetMetrics
     */
    select?: TweetMetricsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetMetricsInclude<ExtArgs> | null
    /**
     * Filter which TweetMetrics to delete.
     */
    where: TweetMetricsWhereUniqueInput
  }

  /**
   * TweetMetrics deleteMany
   */
  export type TweetMetricsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TweetMetrics to delete
     */
    where?: TweetMetricsWhereInput
  }

  /**
   * TweetMetrics without action
   */
  export type TweetMetricsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TweetMetrics
     */
    select?: TweetMetricsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetMetricsInclude<ExtArgs> | null
  }


  /**
   * Model Timeline
   */

  export type AggregateTimeline = {
    _count: TimelineCountAggregateOutputType | null
    _min: TimelineMinAggregateOutputType | null
    _max: TimelineMaxAggregateOutputType | null
  }

  export type TimelineMinAggregateOutputType = {
    id: string | null
    userId: string | null
    tweetId: string | null
    createdAt: Date | null
  }

  export type TimelineMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    tweetId: string | null
    createdAt: Date | null
  }

  export type TimelineCountAggregateOutputType = {
    id: number
    userId: number
    tweetId: number
    createdAt: number
    _all: number
  }


  export type TimelineMinAggregateInputType = {
    id?: true
    userId?: true
    tweetId?: true
    createdAt?: true
  }

  export type TimelineMaxAggregateInputType = {
    id?: true
    userId?: true
    tweetId?: true
    createdAt?: true
  }

  export type TimelineCountAggregateInputType = {
    id?: true
    userId?: true
    tweetId?: true
    createdAt?: true
    _all?: true
  }

  export type TimelineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Timeline to aggregate.
     */
    where?: TimelineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timelines to fetch.
     */
    orderBy?: TimelineOrderByWithRelationInput | TimelineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TimelineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timelines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Timelines
    **/
    _count?: true | TimelineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimelineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimelineMaxAggregateInputType
  }

  export type GetTimelineAggregateType<T extends TimelineAggregateArgs> = {
        [P in keyof T & keyof AggregateTimeline]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimeline[P]>
      : GetScalarType<T[P], AggregateTimeline[P]>
  }




  export type TimelineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimelineWhereInput
    orderBy?: TimelineOrderByWithAggregationInput | TimelineOrderByWithAggregationInput[]
    by: TimelineScalarFieldEnum[] | TimelineScalarFieldEnum
    having?: TimelineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimelineCountAggregateInputType | true
    _min?: TimelineMinAggregateInputType
    _max?: TimelineMaxAggregateInputType
  }

  export type TimelineGroupByOutputType = {
    id: string
    userId: string
    tweetId: string
    createdAt: Date
    _count: TimelineCountAggregateOutputType | null
    _min: TimelineMinAggregateOutputType | null
    _max: TimelineMaxAggregateOutputType | null
  }

  type GetTimelineGroupByPayload<T extends TimelineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TimelineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimelineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimelineGroupByOutputType[P]>
            : GetScalarType<T[P], TimelineGroupByOutputType[P]>
        }
      >
    >


  export type TimelineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tweetId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tweet?: boolean | TweetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timeline"]>

  export type TimelineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tweetId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tweet?: boolean | TweetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timeline"]>

  export type TimelineSelectScalar = {
    id?: boolean
    userId?: boolean
    tweetId?: boolean
    createdAt?: boolean
  }

  export type TimelineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tweet?: boolean | TweetDefaultArgs<ExtArgs>
  }
  export type TimelineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tweet?: boolean | TweetDefaultArgs<ExtArgs>
  }

  export type $TimelinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Timeline"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      tweet: Prisma.$TweetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      tweetId: string
      createdAt: Date
    }, ExtArgs["result"]["timeline"]>
    composites: {}
  }

  type TimelineGetPayload<S extends boolean | null | undefined | TimelineDefaultArgs> = $Result.GetResult<Prisma.$TimelinePayload, S>

  type TimelineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TimelineFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TimelineCountAggregateInputType | true
    }

  export interface TimelineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Timeline'], meta: { name: 'Timeline' } }
    /**
     * Find zero or one Timeline that matches the filter.
     * @param {TimelineFindUniqueArgs} args - Arguments to find a Timeline
     * @example
     * // Get one Timeline
     * const timeline = await prisma.timeline.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TimelineFindUniqueArgs>(args: SelectSubset<T, TimelineFindUniqueArgs<ExtArgs>>): Prisma__TimelineClient<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Timeline that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TimelineFindUniqueOrThrowArgs} args - Arguments to find a Timeline
     * @example
     * // Get one Timeline
     * const timeline = await prisma.timeline.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TimelineFindUniqueOrThrowArgs>(args: SelectSubset<T, TimelineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TimelineClient<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Timeline that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineFindFirstArgs} args - Arguments to find a Timeline
     * @example
     * // Get one Timeline
     * const timeline = await prisma.timeline.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TimelineFindFirstArgs>(args?: SelectSubset<T, TimelineFindFirstArgs<ExtArgs>>): Prisma__TimelineClient<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Timeline that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineFindFirstOrThrowArgs} args - Arguments to find a Timeline
     * @example
     * // Get one Timeline
     * const timeline = await prisma.timeline.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TimelineFindFirstOrThrowArgs>(args?: SelectSubset<T, TimelineFindFirstOrThrowArgs<ExtArgs>>): Prisma__TimelineClient<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Timelines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Timelines
     * const timelines = await prisma.timeline.findMany()
     * 
     * // Get first 10 Timelines
     * const timelines = await prisma.timeline.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const timelineWithIdOnly = await prisma.timeline.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TimelineFindManyArgs>(args?: SelectSubset<T, TimelineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Timeline.
     * @param {TimelineCreateArgs} args - Arguments to create a Timeline.
     * @example
     * // Create one Timeline
     * const Timeline = await prisma.timeline.create({
     *   data: {
     *     // ... data to create a Timeline
     *   }
     * })
     * 
     */
    create<T extends TimelineCreateArgs>(args: SelectSubset<T, TimelineCreateArgs<ExtArgs>>): Prisma__TimelineClient<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Timelines.
     * @param {TimelineCreateManyArgs} args - Arguments to create many Timelines.
     * @example
     * // Create many Timelines
     * const timeline = await prisma.timeline.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TimelineCreateManyArgs>(args?: SelectSubset<T, TimelineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Timelines and returns the data saved in the database.
     * @param {TimelineCreateManyAndReturnArgs} args - Arguments to create many Timelines.
     * @example
     * // Create many Timelines
     * const timeline = await prisma.timeline.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Timelines and only return the `id`
     * const timelineWithIdOnly = await prisma.timeline.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TimelineCreateManyAndReturnArgs>(args?: SelectSubset<T, TimelineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Timeline.
     * @param {TimelineDeleteArgs} args - Arguments to delete one Timeline.
     * @example
     * // Delete one Timeline
     * const Timeline = await prisma.timeline.delete({
     *   where: {
     *     // ... filter to delete one Timeline
     *   }
     * })
     * 
     */
    delete<T extends TimelineDeleteArgs>(args: SelectSubset<T, TimelineDeleteArgs<ExtArgs>>): Prisma__TimelineClient<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Timeline.
     * @param {TimelineUpdateArgs} args - Arguments to update one Timeline.
     * @example
     * // Update one Timeline
     * const timeline = await prisma.timeline.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TimelineUpdateArgs>(args: SelectSubset<T, TimelineUpdateArgs<ExtArgs>>): Prisma__TimelineClient<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Timelines.
     * @param {TimelineDeleteManyArgs} args - Arguments to filter Timelines to delete.
     * @example
     * // Delete a few Timelines
     * const { count } = await prisma.timeline.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TimelineDeleteManyArgs>(args?: SelectSubset<T, TimelineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Timelines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Timelines
     * const timeline = await prisma.timeline.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TimelineUpdateManyArgs>(args: SelectSubset<T, TimelineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Timeline.
     * @param {TimelineUpsertArgs} args - Arguments to update or create a Timeline.
     * @example
     * // Update or create a Timeline
     * const timeline = await prisma.timeline.upsert({
     *   create: {
     *     // ... data to create a Timeline
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Timeline we want to update
     *   }
     * })
     */
    upsert<T extends TimelineUpsertArgs>(args: SelectSubset<T, TimelineUpsertArgs<ExtArgs>>): Prisma__TimelineClient<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Timelines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineCountArgs} args - Arguments to filter Timelines to count.
     * @example
     * // Count the number of Timelines
     * const count = await prisma.timeline.count({
     *   where: {
     *     // ... the filter for the Timelines we want to count
     *   }
     * })
    **/
    count<T extends TimelineCountArgs>(
      args?: Subset<T, TimelineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimelineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Timeline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TimelineAggregateArgs>(args: Subset<T, TimelineAggregateArgs>): Prisma.PrismaPromise<GetTimelineAggregateType<T>>

    /**
     * Group by Timeline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TimelineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TimelineGroupByArgs['orderBy'] }
        : { orderBy?: TimelineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TimelineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimelineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Timeline model
   */
  readonly fields: TimelineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Timeline.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TimelineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    tweet<T extends TweetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TweetDefaultArgs<ExtArgs>>): Prisma__TweetClient<$Result.GetResult<Prisma.$TweetPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Timeline model
   */ 
  interface TimelineFieldRefs {
    readonly id: FieldRef<"Timeline", 'String'>
    readonly userId: FieldRef<"Timeline", 'String'>
    readonly tweetId: FieldRef<"Timeline", 'String'>
    readonly createdAt: FieldRef<"Timeline", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Timeline findUnique
   */
  export type TimelineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineInclude<ExtArgs> | null
    /**
     * Filter, which Timeline to fetch.
     */
    where: TimelineWhereUniqueInput
  }

  /**
   * Timeline findUniqueOrThrow
   */
  export type TimelineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineInclude<ExtArgs> | null
    /**
     * Filter, which Timeline to fetch.
     */
    where: TimelineWhereUniqueInput
  }

  /**
   * Timeline findFirst
   */
  export type TimelineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineInclude<ExtArgs> | null
    /**
     * Filter, which Timeline to fetch.
     */
    where?: TimelineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timelines to fetch.
     */
    orderBy?: TimelineOrderByWithRelationInput | TimelineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Timelines.
     */
    cursor?: TimelineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timelines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Timelines.
     */
    distinct?: TimelineScalarFieldEnum | TimelineScalarFieldEnum[]
  }

  /**
   * Timeline findFirstOrThrow
   */
  export type TimelineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineInclude<ExtArgs> | null
    /**
     * Filter, which Timeline to fetch.
     */
    where?: TimelineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timelines to fetch.
     */
    orderBy?: TimelineOrderByWithRelationInput | TimelineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Timelines.
     */
    cursor?: TimelineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timelines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Timelines.
     */
    distinct?: TimelineScalarFieldEnum | TimelineScalarFieldEnum[]
  }

  /**
   * Timeline findMany
   */
  export type TimelineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineInclude<ExtArgs> | null
    /**
     * Filter, which Timelines to fetch.
     */
    where?: TimelineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timelines to fetch.
     */
    orderBy?: TimelineOrderByWithRelationInput | TimelineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Timelines.
     */
    cursor?: TimelineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timelines.
     */
    skip?: number
    distinct?: TimelineScalarFieldEnum | TimelineScalarFieldEnum[]
  }

  /**
   * Timeline create
   */
  export type TimelineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineInclude<ExtArgs> | null
    /**
     * The data needed to create a Timeline.
     */
    data: XOR<TimelineCreateInput, TimelineUncheckedCreateInput>
  }

  /**
   * Timeline createMany
   */
  export type TimelineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Timelines.
     */
    data: TimelineCreateManyInput | TimelineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Timeline createManyAndReturn
   */
  export type TimelineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Timelines.
     */
    data: TimelineCreateManyInput | TimelineCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Timeline update
   */
  export type TimelineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineInclude<ExtArgs> | null
    /**
     * The data needed to update a Timeline.
     */
    data: XOR<TimelineUpdateInput, TimelineUncheckedUpdateInput>
    /**
     * Choose, which Timeline to update.
     */
    where: TimelineWhereUniqueInput
  }

  /**
   * Timeline updateMany
   */
  export type TimelineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Timelines.
     */
    data: XOR<TimelineUpdateManyMutationInput, TimelineUncheckedUpdateManyInput>
    /**
     * Filter which Timelines to update
     */
    where?: TimelineWhereInput
  }

  /**
   * Timeline upsert
   */
  export type TimelineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineInclude<ExtArgs> | null
    /**
     * The filter to search for the Timeline to update in case it exists.
     */
    where: TimelineWhereUniqueInput
    /**
     * In case the Timeline found by the `where` argument doesn't exist, create a new Timeline with this data.
     */
    create: XOR<TimelineCreateInput, TimelineUncheckedCreateInput>
    /**
     * In case the Timeline was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TimelineUpdateInput, TimelineUncheckedUpdateInput>
  }

  /**
   * Timeline delete
   */
  export type TimelineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineInclude<ExtArgs> | null
    /**
     * Filter which Timeline to delete.
     */
    where: TimelineWhereUniqueInput
  }

  /**
   * Timeline deleteMany
   */
  export type TimelineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Timelines to delete
     */
    where?: TimelineWhereInput
  }

  /**
   * Timeline without action
   */
  export type TimelineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineInclude<ExtArgs> | null
  }


  /**
   * Model Retweet
   */

  export type AggregateRetweet = {
    _count: RetweetCountAggregateOutputType | null
    _min: RetweetMinAggregateOutputType | null
    _max: RetweetMaxAggregateOutputType | null
  }

  export type RetweetMinAggregateOutputType = {
    id: string | null
    userId: string | null
    tweetId: string | null
    createdAt: Date | null
  }

  export type RetweetMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    tweetId: string | null
    createdAt: Date | null
  }

  export type RetweetCountAggregateOutputType = {
    id: number
    userId: number
    tweetId: number
    createdAt: number
    _all: number
  }


  export type RetweetMinAggregateInputType = {
    id?: true
    userId?: true
    tweetId?: true
    createdAt?: true
  }

  export type RetweetMaxAggregateInputType = {
    id?: true
    userId?: true
    tweetId?: true
    createdAt?: true
  }

  export type RetweetCountAggregateInputType = {
    id?: true
    userId?: true
    tweetId?: true
    createdAt?: true
    _all?: true
  }

  export type RetweetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Retweet to aggregate.
     */
    where?: RetweetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Retweets to fetch.
     */
    orderBy?: RetweetOrderByWithRelationInput | RetweetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RetweetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Retweets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Retweets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Retweets
    **/
    _count?: true | RetweetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RetweetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RetweetMaxAggregateInputType
  }

  export type GetRetweetAggregateType<T extends RetweetAggregateArgs> = {
        [P in keyof T & keyof AggregateRetweet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRetweet[P]>
      : GetScalarType<T[P], AggregateRetweet[P]>
  }




  export type RetweetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RetweetWhereInput
    orderBy?: RetweetOrderByWithAggregationInput | RetweetOrderByWithAggregationInput[]
    by: RetweetScalarFieldEnum[] | RetweetScalarFieldEnum
    having?: RetweetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RetweetCountAggregateInputType | true
    _min?: RetweetMinAggregateInputType
    _max?: RetweetMaxAggregateInputType
  }

  export type RetweetGroupByOutputType = {
    id: string
    userId: string
    tweetId: string
    createdAt: Date
    _count: RetweetCountAggregateOutputType | null
    _min: RetweetMinAggregateOutputType | null
    _max: RetweetMaxAggregateOutputType | null
  }

  type GetRetweetGroupByPayload<T extends RetweetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RetweetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RetweetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RetweetGroupByOutputType[P]>
            : GetScalarType<T[P], RetweetGroupByOutputType[P]>
        }
      >
    >


  export type RetweetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tweetId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tweet?: boolean | TweetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["retweet"]>

  export type RetweetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tweetId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tweet?: boolean | TweetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["retweet"]>

  export type RetweetSelectScalar = {
    id?: boolean
    userId?: boolean
    tweetId?: boolean
    createdAt?: boolean
  }

  export type RetweetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tweet?: boolean | TweetDefaultArgs<ExtArgs>
  }
  export type RetweetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tweet?: boolean | TweetDefaultArgs<ExtArgs>
  }

  export type $RetweetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Retweet"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      tweet: Prisma.$TweetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      tweetId: string
      createdAt: Date
    }, ExtArgs["result"]["retweet"]>
    composites: {}
  }

  type RetweetGetPayload<S extends boolean | null | undefined | RetweetDefaultArgs> = $Result.GetResult<Prisma.$RetweetPayload, S>

  type RetweetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RetweetFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RetweetCountAggregateInputType | true
    }

  export interface RetweetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Retweet'], meta: { name: 'Retweet' } }
    /**
     * Find zero or one Retweet that matches the filter.
     * @param {RetweetFindUniqueArgs} args - Arguments to find a Retweet
     * @example
     * // Get one Retweet
     * const retweet = await prisma.retweet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RetweetFindUniqueArgs>(args: SelectSubset<T, RetweetFindUniqueArgs<ExtArgs>>): Prisma__RetweetClient<$Result.GetResult<Prisma.$RetweetPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Retweet that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RetweetFindUniqueOrThrowArgs} args - Arguments to find a Retweet
     * @example
     * // Get one Retweet
     * const retweet = await prisma.retweet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RetweetFindUniqueOrThrowArgs>(args: SelectSubset<T, RetweetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RetweetClient<$Result.GetResult<Prisma.$RetweetPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Retweet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RetweetFindFirstArgs} args - Arguments to find a Retweet
     * @example
     * // Get one Retweet
     * const retweet = await prisma.retweet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RetweetFindFirstArgs>(args?: SelectSubset<T, RetweetFindFirstArgs<ExtArgs>>): Prisma__RetweetClient<$Result.GetResult<Prisma.$RetweetPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Retweet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RetweetFindFirstOrThrowArgs} args - Arguments to find a Retweet
     * @example
     * // Get one Retweet
     * const retweet = await prisma.retweet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RetweetFindFirstOrThrowArgs>(args?: SelectSubset<T, RetweetFindFirstOrThrowArgs<ExtArgs>>): Prisma__RetweetClient<$Result.GetResult<Prisma.$RetweetPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Retweets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RetweetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Retweets
     * const retweets = await prisma.retweet.findMany()
     * 
     * // Get first 10 Retweets
     * const retweets = await prisma.retweet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const retweetWithIdOnly = await prisma.retweet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RetweetFindManyArgs>(args?: SelectSubset<T, RetweetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RetweetPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Retweet.
     * @param {RetweetCreateArgs} args - Arguments to create a Retweet.
     * @example
     * // Create one Retweet
     * const Retweet = await prisma.retweet.create({
     *   data: {
     *     // ... data to create a Retweet
     *   }
     * })
     * 
     */
    create<T extends RetweetCreateArgs>(args: SelectSubset<T, RetweetCreateArgs<ExtArgs>>): Prisma__RetweetClient<$Result.GetResult<Prisma.$RetweetPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Retweets.
     * @param {RetweetCreateManyArgs} args - Arguments to create many Retweets.
     * @example
     * // Create many Retweets
     * const retweet = await prisma.retweet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RetweetCreateManyArgs>(args?: SelectSubset<T, RetweetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Retweets and returns the data saved in the database.
     * @param {RetweetCreateManyAndReturnArgs} args - Arguments to create many Retweets.
     * @example
     * // Create many Retweets
     * const retweet = await prisma.retweet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Retweets and only return the `id`
     * const retweetWithIdOnly = await prisma.retweet.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RetweetCreateManyAndReturnArgs>(args?: SelectSubset<T, RetweetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RetweetPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Retweet.
     * @param {RetweetDeleteArgs} args - Arguments to delete one Retweet.
     * @example
     * // Delete one Retweet
     * const Retweet = await prisma.retweet.delete({
     *   where: {
     *     // ... filter to delete one Retweet
     *   }
     * })
     * 
     */
    delete<T extends RetweetDeleteArgs>(args: SelectSubset<T, RetweetDeleteArgs<ExtArgs>>): Prisma__RetweetClient<$Result.GetResult<Prisma.$RetweetPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Retweet.
     * @param {RetweetUpdateArgs} args - Arguments to update one Retweet.
     * @example
     * // Update one Retweet
     * const retweet = await prisma.retweet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RetweetUpdateArgs>(args: SelectSubset<T, RetweetUpdateArgs<ExtArgs>>): Prisma__RetweetClient<$Result.GetResult<Prisma.$RetweetPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Retweets.
     * @param {RetweetDeleteManyArgs} args - Arguments to filter Retweets to delete.
     * @example
     * // Delete a few Retweets
     * const { count } = await prisma.retweet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RetweetDeleteManyArgs>(args?: SelectSubset<T, RetweetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Retweets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RetweetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Retweets
     * const retweet = await prisma.retweet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RetweetUpdateManyArgs>(args: SelectSubset<T, RetweetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Retweet.
     * @param {RetweetUpsertArgs} args - Arguments to update or create a Retweet.
     * @example
     * // Update or create a Retweet
     * const retweet = await prisma.retweet.upsert({
     *   create: {
     *     // ... data to create a Retweet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Retweet we want to update
     *   }
     * })
     */
    upsert<T extends RetweetUpsertArgs>(args: SelectSubset<T, RetweetUpsertArgs<ExtArgs>>): Prisma__RetweetClient<$Result.GetResult<Prisma.$RetweetPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Retweets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RetweetCountArgs} args - Arguments to filter Retweets to count.
     * @example
     * // Count the number of Retweets
     * const count = await prisma.retweet.count({
     *   where: {
     *     // ... the filter for the Retweets we want to count
     *   }
     * })
    **/
    count<T extends RetweetCountArgs>(
      args?: Subset<T, RetweetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RetweetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Retweet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RetweetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RetweetAggregateArgs>(args: Subset<T, RetweetAggregateArgs>): Prisma.PrismaPromise<GetRetweetAggregateType<T>>

    /**
     * Group by Retweet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RetweetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RetweetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RetweetGroupByArgs['orderBy'] }
        : { orderBy?: RetweetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RetweetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRetweetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Retweet model
   */
  readonly fields: RetweetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Retweet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RetweetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    tweet<T extends TweetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TweetDefaultArgs<ExtArgs>>): Prisma__TweetClient<$Result.GetResult<Prisma.$TweetPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Retweet model
   */ 
  interface RetweetFieldRefs {
    readonly id: FieldRef<"Retweet", 'String'>
    readonly userId: FieldRef<"Retweet", 'String'>
    readonly tweetId: FieldRef<"Retweet", 'String'>
    readonly createdAt: FieldRef<"Retweet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Retweet findUnique
   */
  export type RetweetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Retweet
     */
    select?: RetweetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RetweetInclude<ExtArgs> | null
    /**
     * Filter, which Retweet to fetch.
     */
    where: RetweetWhereUniqueInput
  }

  /**
   * Retweet findUniqueOrThrow
   */
  export type RetweetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Retweet
     */
    select?: RetweetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RetweetInclude<ExtArgs> | null
    /**
     * Filter, which Retweet to fetch.
     */
    where: RetweetWhereUniqueInput
  }

  /**
   * Retweet findFirst
   */
  export type RetweetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Retweet
     */
    select?: RetweetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RetweetInclude<ExtArgs> | null
    /**
     * Filter, which Retweet to fetch.
     */
    where?: RetweetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Retweets to fetch.
     */
    orderBy?: RetweetOrderByWithRelationInput | RetweetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Retweets.
     */
    cursor?: RetweetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Retweets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Retweets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Retweets.
     */
    distinct?: RetweetScalarFieldEnum | RetweetScalarFieldEnum[]
  }

  /**
   * Retweet findFirstOrThrow
   */
  export type RetweetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Retweet
     */
    select?: RetweetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RetweetInclude<ExtArgs> | null
    /**
     * Filter, which Retweet to fetch.
     */
    where?: RetweetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Retweets to fetch.
     */
    orderBy?: RetweetOrderByWithRelationInput | RetweetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Retweets.
     */
    cursor?: RetweetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Retweets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Retweets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Retweets.
     */
    distinct?: RetweetScalarFieldEnum | RetweetScalarFieldEnum[]
  }

  /**
   * Retweet findMany
   */
  export type RetweetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Retweet
     */
    select?: RetweetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RetweetInclude<ExtArgs> | null
    /**
     * Filter, which Retweets to fetch.
     */
    where?: RetweetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Retweets to fetch.
     */
    orderBy?: RetweetOrderByWithRelationInput | RetweetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Retweets.
     */
    cursor?: RetweetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Retweets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Retweets.
     */
    skip?: number
    distinct?: RetweetScalarFieldEnum | RetweetScalarFieldEnum[]
  }

  /**
   * Retweet create
   */
  export type RetweetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Retweet
     */
    select?: RetweetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RetweetInclude<ExtArgs> | null
    /**
     * The data needed to create a Retweet.
     */
    data: XOR<RetweetCreateInput, RetweetUncheckedCreateInput>
  }

  /**
   * Retweet createMany
   */
  export type RetweetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Retweets.
     */
    data: RetweetCreateManyInput | RetweetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Retweet createManyAndReturn
   */
  export type RetweetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Retweet
     */
    select?: RetweetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Retweets.
     */
    data: RetweetCreateManyInput | RetweetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RetweetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Retweet update
   */
  export type RetweetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Retweet
     */
    select?: RetweetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RetweetInclude<ExtArgs> | null
    /**
     * The data needed to update a Retweet.
     */
    data: XOR<RetweetUpdateInput, RetweetUncheckedUpdateInput>
    /**
     * Choose, which Retweet to update.
     */
    where: RetweetWhereUniqueInput
  }

  /**
   * Retweet updateMany
   */
  export type RetweetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Retweets.
     */
    data: XOR<RetweetUpdateManyMutationInput, RetweetUncheckedUpdateManyInput>
    /**
     * Filter which Retweets to update
     */
    where?: RetweetWhereInput
  }

  /**
   * Retweet upsert
   */
  export type RetweetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Retweet
     */
    select?: RetweetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RetweetInclude<ExtArgs> | null
    /**
     * The filter to search for the Retweet to update in case it exists.
     */
    where: RetweetWhereUniqueInput
    /**
     * In case the Retweet found by the `where` argument doesn't exist, create a new Retweet with this data.
     */
    create: XOR<RetweetCreateInput, RetweetUncheckedCreateInput>
    /**
     * In case the Retweet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RetweetUpdateInput, RetweetUncheckedUpdateInput>
  }

  /**
   * Retweet delete
   */
  export type RetweetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Retweet
     */
    select?: RetweetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RetweetInclude<ExtArgs> | null
    /**
     * Filter which Retweet to delete.
     */
    where: RetweetWhereUniqueInput
  }

  /**
   * Retweet deleteMany
   */
  export type RetweetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Retweets to delete
     */
    where?: RetweetWhereInput
  }

  /**
   * Retweet without action
   */
  export type RetweetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Retweet
     */
    select?: RetweetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RetweetInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    bio: 'bio',
    avatarUrl: 'avatarUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TweetScalarFieldEnum: {
    id: 'id',
    content: 'content',
    type: 'type',
    authorId: 'authorId',
    parentId: 'parentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TweetScalarFieldEnum = (typeof TweetScalarFieldEnum)[keyof typeof TweetScalarFieldEnum]


  export const FollowScalarFieldEnum: {
    id: 'id',
    followerId: 'followerId',
    followingId: 'followingId',
    createdAt: 'createdAt'
  };

  export type FollowScalarFieldEnum = (typeof FollowScalarFieldEnum)[keyof typeof FollowScalarFieldEnum]


  export const LikeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    tweetId: 'tweetId',
    createdAt: 'createdAt'
  };

  export type LikeScalarFieldEnum = (typeof LikeScalarFieldEnum)[keyof typeof LikeScalarFieldEnum]


  export const BookmarkScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    tweetId: 'tweetId',
    createdAt: 'createdAt'
  };

  export type BookmarkScalarFieldEnum = (typeof BookmarkScalarFieldEnum)[keyof typeof BookmarkScalarFieldEnum]


  export const MediaScalarFieldEnum: {
    id: 'id',
    tweetId: 'tweetId',
    url: 'url',
    type: 'type',
    createdAt: 'createdAt'
  };

  export type MediaScalarFieldEnum = (typeof MediaScalarFieldEnum)[keyof typeof MediaScalarFieldEnum]


  export const HashtagScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type HashtagScalarFieldEnum = (typeof HashtagScalarFieldEnum)[keyof typeof HashtagScalarFieldEnum]


  export const TweetHashtagScalarFieldEnum: {
    tweetId: 'tweetId',
    hashtagId: 'hashtagId'
  };

  export type TweetHashtagScalarFieldEnum = (typeof TweetHashtagScalarFieldEnum)[keyof typeof TweetHashtagScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    actorId: 'actorId',
    type: 'type',
    tweetId: 'tweetId',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const RefreshTokenScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum]


  export const TweetMetricsScalarFieldEnum: {
    tweetId: 'tweetId',
    likesCount: 'likesCount',
    repliesCount: 'repliesCount',
    retweetsCount: 'retweetsCount'
  };

  export type TweetMetricsScalarFieldEnum = (typeof TweetMetricsScalarFieldEnum)[keyof typeof TweetMetricsScalarFieldEnum]


  export const TimelineScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    tweetId: 'tweetId',
    createdAt: 'createdAt'
  };

  export type TimelineScalarFieldEnum = (typeof TimelineScalarFieldEnum)[keyof typeof TimelineScalarFieldEnum]


  export const RetweetScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    tweetId: 'tweetId',
    createdAt: 'createdAt'
  };

  export type RetweetScalarFieldEnum = (typeof RetweetScalarFieldEnum)[keyof typeof RetweetScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'TweetType'
   */
  export type EnumTweetTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TweetType'>
    


  /**
   * Reference to a field of type 'TweetType[]'
   */
  export type ListEnumTweetTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TweetType[]'>
    


  /**
   * Reference to a field of type 'MediaType'
   */
  export type EnumMediaTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MediaType'>
    


  /**
   * Reference to a field of type 'MediaType[]'
   */
  export type ListEnumMediaTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MediaType[]'>
    


  /**
   * Reference to a field of type 'NotificationType'
   */
  export type EnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType'>
    


  /**
   * Reference to a field of type 'NotificationType[]'
   */
  export type ListEnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    bio?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    tweets?: TweetListRelationFilter
    followers?: FollowListRelationFilter
    following?: FollowListRelationFilter
    likes?: LikeListRelationFilter
    bookmarks?: BookmarkListRelationFilter
    notifications?: NotificationListRelationFilter
    refreshTokens?: RefreshTokenListRelationFilter
    timelines?: TimelineListRelationFilter
    retweets?: RetweetListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    bio?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tweets?: TweetOrderByRelationAggregateInput
    followers?: FollowOrderByRelationAggregateInput
    following?: FollowOrderByRelationAggregateInput
    likes?: LikeOrderByRelationAggregateInput
    bookmarks?: BookmarkOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    refreshTokens?: RefreshTokenOrderByRelationAggregateInput
    timelines?: TimelineOrderByRelationAggregateInput
    retweets?: RetweetOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    bio?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    tweets?: TweetListRelationFilter
    followers?: FollowListRelationFilter
    following?: FollowListRelationFilter
    likes?: LikeListRelationFilter
    bookmarks?: BookmarkListRelationFilter
    notifications?: NotificationListRelationFilter
    refreshTokens?: RefreshTokenListRelationFilter
    timelines?: TimelineListRelationFilter
    retweets?: RetweetListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    bio?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TweetWhereInput = {
    AND?: TweetWhereInput | TweetWhereInput[]
    OR?: TweetWhereInput[]
    NOT?: TweetWhereInput | TweetWhereInput[]
    id?: StringFilter<"Tweet"> | string
    content?: StringFilter<"Tweet"> | string
    type?: EnumTweetTypeFilter<"Tweet"> | $Enums.TweetType
    authorId?: StringFilter<"Tweet"> | string
    parentId?: StringNullableFilter<"Tweet"> | string | null
    createdAt?: DateTimeFilter<"Tweet"> | Date | string
    updatedAt?: DateTimeFilter<"Tweet"> | Date | string
    author?: XOR<UserRelationFilter, UserWhereInput>
    parent?: XOR<TweetNullableRelationFilter, TweetWhereInput> | null
    replies?: TweetListRelationFilter
    media?: MediaListRelationFilter
    hashtags?: HashtagListRelationFilter
    likes?: LikeListRelationFilter
    bookmarks?: BookmarkListRelationFilter
    tweetMetrics?: TweetMetricsListRelationFilter
    timelines?: TimelineListRelationFilter
    tweetHashtags?: TweetHashtagListRelationFilter
    retweets?: RetweetListRelationFilter
  }

  export type TweetOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    type?: SortOrder
    authorId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    author?: UserOrderByWithRelationInput
    parent?: TweetOrderByWithRelationInput
    replies?: TweetOrderByRelationAggregateInput
    media?: MediaOrderByRelationAggregateInput
    hashtags?: HashtagOrderByRelationAggregateInput
    likes?: LikeOrderByRelationAggregateInput
    bookmarks?: BookmarkOrderByRelationAggregateInput
    tweetMetrics?: TweetMetricsOrderByRelationAggregateInput
    timelines?: TimelineOrderByRelationAggregateInput
    tweetHashtags?: TweetHashtagOrderByRelationAggregateInput
    retweets?: RetweetOrderByRelationAggregateInput
  }

  export type TweetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TweetWhereInput | TweetWhereInput[]
    OR?: TweetWhereInput[]
    NOT?: TweetWhereInput | TweetWhereInput[]
    content?: StringFilter<"Tweet"> | string
    type?: EnumTweetTypeFilter<"Tweet"> | $Enums.TweetType
    authorId?: StringFilter<"Tweet"> | string
    parentId?: StringNullableFilter<"Tweet"> | string | null
    createdAt?: DateTimeFilter<"Tweet"> | Date | string
    updatedAt?: DateTimeFilter<"Tweet"> | Date | string
    author?: XOR<UserRelationFilter, UserWhereInput>
    parent?: XOR<TweetNullableRelationFilter, TweetWhereInput> | null
    replies?: TweetListRelationFilter
    media?: MediaListRelationFilter
    hashtags?: HashtagListRelationFilter
    likes?: LikeListRelationFilter
    bookmarks?: BookmarkListRelationFilter
    tweetMetrics?: TweetMetricsListRelationFilter
    timelines?: TimelineListRelationFilter
    tweetHashtags?: TweetHashtagListRelationFilter
    retweets?: RetweetListRelationFilter
  }, "id">

  export type TweetOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    type?: SortOrder
    authorId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TweetCountOrderByAggregateInput
    _max?: TweetMaxOrderByAggregateInput
    _min?: TweetMinOrderByAggregateInput
  }

  export type TweetScalarWhereWithAggregatesInput = {
    AND?: TweetScalarWhereWithAggregatesInput | TweetScalarWhereWithAggregatesInput[]
    OR?: TweetScalarWhereWithAggregatesInput[]
    NOT?: TweetScalarWhereWithAggregatesInput | TweetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tweet"> | string
    content?: StringWithAggregatesFilter<"Tweet"> | string
    type?: EnumTweetTypeWithAggregatesFilter<"Tweet"> | $Enums.TweetType
    authorId?: StringWithAggregatesFilter<"Tweet"> | string
    parentId?: StringNullableWithAggregatesFilter<"Tweet"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Tweet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tweet"> | Date | string
  }

  export type FollowWhereInput = {
    AND?: FollowWhereInput | FollowWhereInput[]
    OR?: FollowWhereInput[]
    NOT?: FollowWhereInput | FollowWhereInput[]
    id?: StringFilter<"Follow"> | string
    followerId?: StringFilter<"Follow"> | string
    followingId?: StringFilter<"Follow"> | string
    createdAt?: DateTimeFilter<"Follow"> | Date | string
    follower?: XOR<UserRelationFilter, UserWhereInput>
    following?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type FollowOrderByWithRelationInput = {
    id?: SortOrder
    followerId?: SortOrder
    followingId?: SortOrder
    createdAt?: SortOrder
    follower?: UserOrderByWithRelationInput
    following?: UserOrderByWithRelationInput
  }

  export type FollowWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    followerId_followingId?: FollowFollowerIdFollowingIdCompoundUniqueInput
    AND?: FollowWhereInput | FollowWhereInput[]
    OR?: FollowWhereInput[]
    NOT?: FollowWhereInput | FollowWhereInput[]
    followerId?: StringFilter<"Follow"> | string
    followingId?: StringFilter<"Follow"> | string
    createdAt?: DateTimeFilter<"Follow"> | Date | string
    follower?: XOR<UserRelationFilter, UserWhereInput>
    following?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "followerId_followingId">

  export type FollowOrderByWithAggregationInput = {
    id?: SortOrder
    followerId?: SortOrder
    followingId?: SortOrder
    createdAt?: SortOrder
    _count?: FollowCountOrderByAggregateInput
    _max?: FollowMaxOrderByAggregateInput
    _min?: FollowMinOrderByAggregateInput
  }

  export type FollowScalarWhereWithAggregatesInput = {
    AND?: FollowScalarWhereWithAggregatesInput | FollowScalarWhereWithAggregatesInput[]
    OR?: FollowScalarWhereWithAggregatesInput[]
    NOT?: FollowScalarWhereWithAggregatesInput | FollowScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Follow"> | string
    followerId?: StringWithAggregatesFilter<"Follow"> | string
    followingId?: StringWithAggregatesFilter<"Follow"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Follow"> | Date | string
  }

  export type LikeWhereInput = {
    AND?: LikeWhereInput | LikeWhereInput[]
    OR?: LikeWhereInput[]
    NOT?: LikeWhereInput | LikeWhereInput[]
    id?: StringFilter<"Like"> | string
    userId?: StringFilter<"Like"> | string
    tweetId?: StringFilter<"Like"> | string
    createdAt?: DateTimeFilter<"Like"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    tweet?: XOR<TweetRelationFilter, TweetWhereInput>
  }

  export type LikeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    tweetId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    tweet?: TweetOrderByWithRelationInput
  }

  export type LikeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_tweetId?: LikeUserIdTweetIdCompoundUniqueInput
    AND?: LikeWhereInput | LikeWhereInput[]
    OR?: LikeWhereInput[]
    NOT?: LikeWhereInput | LikeWhereInput[]
    userId?: StringFilter<"Like"> | string
    tweetId?: StringFilter<"Like"> | string
    createdAt?: DateTimeFilter<"Like"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    tweet?: XOR<TweetRelationFilter, TweetWhereInput>
  }, "id" | "userId_tweetId">

  export type LikeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    tweetId?: SortOrder
    createdAt?: SortOrder
    _count?: LikeCountOrderByAggregateInput
    _max?: LikeMaxOrderByAggregateInput
    _min?: LikeMinOrderByAggregateInput
  }

  export type LikeScalarWhereWithAggregatesInput = {
    AND?: LikeScalarWhereWithAggregatesInput | LikeScalarWhereWithAggregatesInput[]
    OR?: LikeScalarWhereWithAggregatesInput[]
    NOT?: LikeScalarWhereWithAggregatesInput | LikeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Like"> | string
    userId?: StringWithAggregatesFilter<"Like"> | string
    tweetId?: StringWithAggregatesFilter<"Like"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Like"> | Date | string
  }

  export type BookmarkWhereInput = {
    AND?: BookmarkWhereInput | BookmarkWhereInput[]
    OR?: BookmarkWhereInput[]
    NOT?: BookmarkWhereInput | BookmarkWhereInput[]
    id?: StringFilter<"Bookmark"> | string
    userId?: StringFilter<"Bookmark"> | string
    tweetId?: StringFilter<"Bookmark"> | string
    createdAt?: DateTimeFilter<"Bookmark"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    tweet?: XOR<TweetRelationFilter, TweetWhereInput>
  }

  export type BookmarkOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    tweetId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    tweet?: TweetOrderByWithRelationInput
  }

  export type BookmarkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_tweetId?: BookmarkUserIdTweetIdCompoundUniqueInput
    AND?: BookmarkWhereInput | BookmarkWhereInput[]
    OR?: BookmarkWhereInput[]
    NOT?: BookmarkWhereInput | BookmarkWhereInput[]
    userId?: StringFilter<"Bookmark"> | string
    tweetId?: StringFilter<"Bookmark"> | string
    createdAt?: DateTimeFilter<"Bookmark"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    tweet?: XOR<TweetRelationFilter, TweetWhereInput>
  }, "id" | "userId_tweetId">

  export type BookmarkOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    tweetId?: SortOrder
    createdAt?: SortOrder
    _count?: BookmarkCountOrderByAggregateInput
    _max?: BookmarkMaxOrderByAggregateInput
    _min?: BookmarkMinOrderByAggregateInput
  }

  export type BookmarkScalarWhereWithAggregatesInput = {
    AND?: BookmarkScalarWhereWithAggregatesInput | BookmarkScalarWhereWithAggregatesInput[]
    OR?: BookmarkScalarWhereWithAggregatesInput[]
    NOT?: BookmarkScalarWhereWithAggregatesInput | BookmarkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Bookmark"> | string
    userId?: StringWithAggregatesFilter<"Bookmark"> | string
    tweetId?: StringWithAggregatesFilter<"Bookmark"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Bookmark"> | Date | string
  }

  export type MediaWhereInput = {
    AND?: MediaWhereInput | MediaWhereInput[]
    OR?: MediaWhereInput[]
    NOT?: MediaWhereInput | MediaWhereInput[]
    id?: StringFilter<"Media"> | string
    tweetId?: StringFilter<"Media"> | string
    url?: StringFilter<"Media"> | string
    type?: EnumMediaTypeFilter<"Media"> | $Enums.MediaType
    createdAt?: DateTimeFilter<"Media"> | Date | string
    tweet?: XOR<TweetRelationFilter, TweetWhereInput>
  }

  export type MediaOrderByWithRelationInput = {
    id?: SortOrder
    tweetId?: SortOrder
    url?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    tweet?: TweetOrderByWithRelationInput
  }

  export type MediaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MediaWhereInput | MediaWhereInput[]
    OR?: MediaWhereInput[]
    NOT?: MediaWhereInput | MediaWhereInput[]
    tweetId?: StringFilter<"Media"> | string
    url?: StringFilter<"Media"> | string
    type?: EnumMediaTypeFilter<"Media"> | $Enums.MediaType
    createdAt?: DateTimeFilter<"Media"> | Date | string
    tweet?: XOR<TweetRelationFilter, TweetWhereInput>
  }, "id">

  export type MediaOrderByWithAggregationInput = {
    id?: SortOrder
    tweetId?: SortOrder
    url?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    _count?: MediaCountOrderByAggregateInput
    _max?: MediaMaxOrderByAggregateInput
    _min?: MediaMinOrderByAggregateInput
  }

  export type MediaScalarWhereWithAggregatesInput = {
    AND?: MediaScalarWhereWithAggregatesInput | MediaScalarWhereWithAggregatesInput[]
    OR?: MediaScalarWhereWithAggregatesInput[]
    NOT?: MediaScalarWhereWithAggregatesInput | MediaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Media"> | string
    tweetId?: StringWithAggregatesFilter<"Media"> | string
    url?: StringWithAggregatesFilter<"Media"> | string
    type?: EnumMediaTypeWithAggregatesFilter<"Media"> | $Enums.MediaType
    createdAt?: DateTimeWithAggregatesFilter<"Media"> | Date | string
  }

  export type HashtagWhereInput = {
    AND?: HashtagWhereInput | HashtagWhereInput[]
    OR?: HashtagWhereInput[]
    NOT?: HashtagWhereInput | HashtagWhereInput[]
    id?: StringFilter<"Hashtag"> | string
    name?: StringFilter<"Hashtag"> | string
    tweets?: TweetListRelationFilter
    tweetHashtags?: TweetHashtagListRelationFilter
  }

  export type HashtagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    tweets?: TweetOrderByRelationAggregateInput
    tweetHashtags?: TweetHashtagOrderByRelationAggregateInput
  }

  export type HashtagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: HashtagWhereInput | HashtagWhereInput[]
    OR?: HashtagWhereInput[]
    NOT?: HashtagWhereInput | HashtagWhereInput[]
    tweets?: TweetListRelationFilter
    tweetHashtags?: TweetHashtagListRelationFilter
  }, "id" | "name">

  export type HashtagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: HashtagCountOrderByAggregateInput
    _max?: HashtagMaxOrderByAggregateInput
    _min?: HashtagMinOrderByAggregateInput
  }

  export type HashtagScalarWhereWithAggregatesInput = {
    AND?: HashtagScalarWhereWithAggregatesInput | HashtagScalarWhereWithAggregatesInput[]
    OR?: HashtagScalarWhereWithAggregatesInput[]
    NOT?: HashtagScalarWhereWithAggregatesInput | HashtagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Hashtag"> | string
    name?: StringWithAggregatesFilter<"Hashtag"> | string
  }

  export type TweetHashtagWhereInput = {
    AND?: TweetHashtagWhereInput | TweetHashtagWhereInput[]
    OR?: TweetHashtagWhereInput[]
    NOT?: TweetHashtagWhereInput | TweetHashtagWhereInput[]
    tweetId?: StringFilter<"TweetHashtag"> | string
    hashtagId?: StringFilter<"TweetHashtag"> | string
    tweet?: XOR<TweetRelationFilter, TweetWhereInput>
    hashtag?: XOR<HashtagRelationFilter, HashtagWhereInput>
  }

  export type TweetHashtagOrderByWithRelationInput = {
    tweetId?: SortOrder
    hashtagId?: SortOrder
    tweet?: TweetOrderByWithRelationInput
    hashtag?: HashtagOrderByWithRelationInput
  }

  export type TweetHashtagWhereUniqueInput = Prisma.AtLeast<{
    tweetId_hashtagId?: TweetHashtagTweetIdHashtagIdCompoundUniqueInput
    AND?: TweetHashtagWhereInput | TweetHashtagWhereInput[]
    OR?: TweetHashtagWhereInput[]
    NOT?: TweetHashtagWhereInput | TweetHashtagWhereInput[]
    tweetId?: StringFilter<"TweetHashtag"> | string
    hashtagId?: StringFilter<"TweetHashtag"> | string
    tweet?: XOR<TweetRelationFilter, TweetWhereInput>
    hashtag?: XOR<HashtagRelationFilter, HashtagWhereInput>
  }, "tweetId_hashtagId">

  export type TweetHashtagOrderByWithAggregationInput = {
    tweetId?: SortOrder
    hashtagId?: SortOrder
    _count?: TweetHashtagCountOrderByAggregateInput
    _max?: TweetHashtagMaxOrderByAggregateInput
    _min?: TweetHashtagMinOrderByAggregateInput
  }

  export type TweetHashtagScalarWhereWithAggregatesInput = {
    AND?: TweetHashtagScalarWhereWithAggregatesInput | TweetHashtagScalarWhereWithAggregatesInput[]
    OR?: TweetHashtagScalarWhereWithAggregatesInput[]
    NOT?: TweetHashtagScalarWhereWithAggregatesInput | TweetHashtagScalarWhereWithAggregatesInput[]
    tweetId?: StringWithAggregatesFilter<"TweetHashtag"> | string
    hashtagId?: StringWithAggregatesFilter<"TweetHashtag"> | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    actorId?: StringNullableFilter<"Notification"> | string | null
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    tweetId?: StringNullableFilter<"Notification"> | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    actorId?: SortOrderInput | SortOrder
    type?: SortOrder
    tweetId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: StringFilter<"Notification"> | string
    actorId?: StringNullableFilter<"Notification"> | string | null
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    tweetId?: StringNullableFilter<"Notification"> | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    actorId?: SortOrderInput | SortOrder
    type?: SortOrder
    tweetId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    userId?: StringWithAggregatesFilter<"Notification"> | string
    actorId?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    type?: EnumNotificationTypeWithAggregatesFilter<"Notification"> | $Enums.NotificationType
    tweetId?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type RefreshTokenWhereInput = {
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    userId?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type RefreshTokenOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RefreshTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    userId?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type RefreshTokenOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: RefreshTokenCountOrderByAggregateInput
    _max?: RefreshTokenMaxOrderByAggregateInput
    _min?: RefreshTokenMinOrderByAggregateInput
  }

  export type RefreshTokenScalarWhereWithAggregatesInput = {
    AND?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    OR?: RefreshTokenScalarWhereWithAggregatesInput[]
    NOT?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RefreshToken"> | string
    userId?: StringWithAggregatesFilter<"RefreshToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
  }

  export type TweetMetricsWhereInput = {
    AND?: TweetMetricsWhereInput | TweetMetricsWhereInput[]
    OR?: TweetMetricsWhereInput[]
    NOT?: TweetMetricsWhereInput | TweetMetricsWhereInput[]
    tweetId?: StringFilter<"TweetMetrics"> | string
    likesCount?: IntFilter<"TweetMetrics"> | number
    repliesCount?: IntFilter<"TweetMetrics"> | number
    retweetsCount?: IntFilter<"TweetMetrics"> | number
    tweet?: XOR<TweetRelationFilter, TweetWhereInput>
  }

  export type TweetMetricsOrderByWithRelationInput = {
    tweetId?: SortOrder
    likesCount?: SortOrder
    repliesCount?: SortOrder
    retweetsCount?: SortOrder
    tweet?: TweetOrderByWithRelationInput
  }

  export type TweetMetricsWhereUniqueInput = Prisma.AtLeast<{
    tweetId?: string
    AND?: TweetMetricsWhereInput | TweetMetricsWhereInput[]
    OR?: TweetMetricsWhereInput[]
    NOT?: TweetMetricsWhereInput | TweetMetricsWhereInput[]
    likesCount?: IntFilter<"TweetMetrics"> | number
    repliesCount?: IntFilter<"TweetMetrics"> | number
    retweetsCount?: IntFilter<"TweetMetrics"> | number
    tweet?: XOR<TweetRelationFilter, TweetWhereInput>
  }, "tweetId">

  export type TweetMetricsOrderByWithAggregationInput = {
    tweetId?: SortOrder
    likesCount?: SortOrder
    repliesCount?: SortOrder
    retweetsCount?: SortOrder
    _count?: TweetMetricsCountOrderByAggregateInput
    _avg?: TweetMetricsAvgOrderByAggregateInput
    _max?: TweetMetricsMaxOrderByAggregateInput
    _min?: TweetMetricsMinOrderByAggregateInput
    _sum?: TweetMetricsSumOrderByAggregateInput
  }

  export type TweetMetricsScalarWhereWithAggregatesInput = {
    AND?: TweetMetricsScalarWhereWithAggregatesInput | TweetMetricsScalarWhereWithAggregatesInput[]
    OR?: TweetMetricsScalarWhereWithAggregatesInput[]
    NOT?: TweetMetricsScalarWhereWithAggregatesInput | TweetMetricsScalarWhereWithAggregatesInput[]
    tweetId?: StringWithAggregatesFilter<"TweetMetrics"> | string
    likesCount?: IntWithAggregatesFilter<"TweetMetrics"> | number
    repliesCount?: IntWithAggregatesFilter<"TweetMetrics"> | number
    retweetsCount?: IntWithAggregatesFilter<"TweetMetrics"> | number
  }

  export type TimelineWhereInput = {
    AND?: TimelineWhereInput | TimelineWhereInput[]
    OR?: TimelineWhereInput[]
    NOT?: TimelineWhereInput | TimelineWhereInput[]
    id?: StringFilter<"Timeline"> | string
    userId?: StringFilter<"Timeline"> | string
    tweetId?: StringFilter<"Timeline"> | string
    createdAt?: DateTimeFilter<"Timeline"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    tweet?: XOR<TweetRelationFilter, TweetWhereInput>
  }

  export type TimelineOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    tweetId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    tweet?: TweetOrderByWithRelationInput
  }

  export type TimelineWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TimelineWhereInput | TimelineWhereInput[]
    OR?: TimelineWhereInput[]
    NOT?: TimelineWhereInput | TimelineWhereInput[]
    userId?: StringFilter<"Timeline"> | string
    tweetId?: StringFilter<"Timeline"> | string
    createdAt?: DateTimeFilter<"Timeline"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    tweet?: XOR<TweetRelationFilter, TweetWhereInput>
  }, "id">

  export type TimelineOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    tweetId?: SortOrder
    createdAt?: SortOrder
    _count?: TimelineCountOrderByAggregateInput
    _max?: TimelineMaxOrderByAggregateInput
    _min?: TimelineMinOrderByAggregateInput
  }

  export type TimelineScalarWhereWithAggregatesInput = {
    AND?: TimelineScalarWhereWithAggregatesInput | TimelineScalarWhereWithAggregatesInput[]
    OR?: TimelineScalarWhereWithAggregatesInput[]
    NOT?: TimelineScalarWhereWithAggregatesInput | TimelineScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Timeline"> | string
    userId?: StringWithAggregatesFilter<"Timeline"> | string
    tweetId?: StringWithAggregatesFilter<"Timeline"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Timeline"> | Date | string
  }

  export type RetweetWhereInput = {
    AND?: RetweetWhereInput | RetweetWhereInput[]
    OR?: RetweetWhereInput[]
    NOT?: RetweetWhereInput | RetweetWhereInput[]
    id?: StringFilter<"Retweet"> | string
    userId?: StringFilter<"Retweet"> | string
    tweetId?: StringFilter<"Retweet"> | string
    createdAt?: DateTimeFilter<"Retweet"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    tweet?: XOR<TweetRelationFilter, TweetWhereInput>
  }

  export type RetweetOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    tweetId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    tweet?: TweetOrderByWithRelationInput
  }

  export type RetweetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_tweetId?: RetweetUserIdTweetIdCompoundUniqueInput
    AND?: RetweetWhereInput | RetweetWhereInput[]
    OR?: RetweetWhereInput[]
    NOT?: RetweetWhereInput | RetweetWhereInput[]
    userId?: StringFilter<"Retweet"> | string
    tweetId?: StringFilter<"Retweet"> | string
    createdAt?: DateTimeFilter<"Retweet"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    tweet?: XOR<TweetRelationFilter, TweetWhereInput>
  }, "id" | "userId_tweetId">

  export type RetweetOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    tweetId?: SortOrder
    createdAt?: SortOrder
    _count?: RetweetCountOrderByAggregateInput
    _max?: RetweetMaxOrderByAggregateInput
    _min?: RetweetMinOrderByAggregateInput
  }

  export type RetweetScalarWhereWithAggregatesInput = {
    AND?: RetweetScalarWhereWithAggregatesInput | RetweetScalarWhereWithAggregatesInput[]
    OR?: RetweetScalarWhereWithAggregatesInput[]
    NOT?: RetweetScalarWhereWithAggregatesInput | RetweetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Retweet"> | string
    userId?: StringWithAggregatesFilter<"Retweet"> | string
    tweetId?: StringWithAggregatesFilter<"Retweet"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Retweet"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    bio?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tweets?: TweetCreateNestedManyWithoutAuthorInput
    followers?: FollowCreateNestedManyWithoutFollowerInput
    following?: FollowCreateNestedManyWithoutFollowingInput
    likes?: LikeCreateNestedManyWithoutUserInput
    bookmarks?: BookmarkCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    timelines?: TimelineCreateNestedManyWithoutUserInput
    retweets?: RetweetCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    bio?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tweets?: TweetUncheckedCreateNestedManyWithoutAuthorInput
    followers?: FollowUncheckedCreateNestedManyWithoutFollowerInput
    following?: FollowUncheckedCreateNestedManyWithoutFollowingInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    timelines?: TimelineUncheckedCreateNestedManyWithoutUserInput
    retweets?: RetweetUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tweets?: TweetUpdateManyWithoutAuthorNestedInput
    followers?: FollowUpdateManyWithoutFollowerNestedInput
    following?: FollowUpdateManyWithoutFollowingNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    bookmarks?: BookmarkUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    timelines?: TimelineUpdateManyWithoutUserNestedInput
    retweets?: RetweetUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tweets?: TweetUncheckedUpdateManyWithoutAuthorNestedInput
    followers?: FollowUncheckedUpdateManyWithoutFollowerNestedInput
    following?: FollowUncheckedUpdateManyWithoutFollowingNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    bookmarks?: BookmarkUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    timelines?: TimelineUncheckedUpdateManyWithoutUserNestedInput
    retweets?: RetweetUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    bio?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TweetCreateInput = {
    id?: string
    content: string
    type?: $Enums.TweetType
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutTweetsInput
    parent?: TweetCreateNestedOneWithoutRepliesInput
    replies?: TweetCreateNestedManyWithoutParentInput
    media?: MediaCreateNestedManyWithoutTweetInput
    hashtags?: HashtagCreateNestedManyWithoutTweetsInput
    likes?: LikeCreateNestedManyWithoutTweetInput
    bookmarks?: BookmarkCreateNestedManyWithoutTweetInput
    tweetMetrics?: TweetMetricsCreateNestedManyWithoutTweetInput
    timelines?: TimelineCreateNestedManyWithoutTweetInput
    tweetHashtags?: TweetHashtagCreateNestedManyWithoutTweetInput
    retweets?: RetweetCreateNestedManyWithoutTweetInput
  }

  export type TweetUncheckedCreateInput = {
    id?: string
    content: string
    type?: $Enums.TweetType
    authorId: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: TweetUncheckedCreateNestedManyWithoutParentInput
    media?: MediaUncheckedCreateNestedManyWithoutTweetInput
    hashtags?: HashtagUncheckedCreateNestedManyWithoutTweetsInput
    likes?: LikeUncheckedCreateNestedManyWithoutTweetInput
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutTweetInput
    tweetMetrics?: TweetMetricsUncheckedCreateNestedManyWithoutTweetInput
    timelines?: TimelineUncheckedCreateNestedManyWithoutTweetInput
    tweetHashtags?: TweetHashtagUncheckedCreateNestedManyWithoutTweetInput
    retweets?: RetweetUncheckedCreateNestedManyWithoutTweetInput
  }

  export type TweetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumTweetTypeFieldUpdateOperationsInput | $Enums.TweetType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutTweetsNestedInput
    parent?: TweetUpdateOneWithoutRepliesNestedInput
    replies?: TweetUpdateManyWithoutParentNestedInput
    media?: MediaUpdateManyWithoutTweetNestedInput
    hashtags?: HashtagUpdateManyWithoutTweetsNestedInput
    likes?: LikeUpdateManyWithoutTweetNestedInput
    bookmarks?: BookmarkUpdateManyWithoutTweetNestedInput
    tweetMetrics?: TweetMetricsUpdateManyWithoutTweetNestedInput
    timelines?: TimelineUpdateManyWithoutTweetNestedInput
    tweetHashtags?: TweetHashtagUpdateManyWithoutTweetNestedInput
    retweets?: RetweetUpdateManyWithoutTweetNestedInput
  }

  export type TweetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumTweetTypeFieldUpdateOperationsInput | $Enums.TweetType
    authorId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: TweetUncheckedUpdateManyWithoutParentNestedInput
    media?: MediaUncheckedUpdateManyWithoutTweetNestedInput
    hashtags?: HashtagUncheckedUpdateManyWithoutTweetsNestedInput
    likes?: LikeUncheckedUpdateManyWithoutTweetNestedInput
    bookmarks?: BookmarkUncheckedUpdateManyWithoutTweetNestedInput
    tweetMetrics?: TweetMetricsUncheckedUpdateManyWithoutTweetNestedInput
    timelines?: TimelineUncheckedUpdateManyWithoutTweetNestedInput
    tweetHashtags?: TweetHashtagUncheckedUpdateManyWithoutTweetNestedInput
    retweets?: RetweetUncheckedUpdateManyWithoutTweetNestedInput
  }

  export type TweetCreateManyInput = {
    id?: string
    content: string
    type?: $Enums.TweetType
    authorId: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TweetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumTweetTypeFieldUpdateOperationsInput | $Enums.TweetType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TweetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumTweetTypeFieldUpdateOperationsInput | $Enums.TweetType
    authorId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowCreateInput = {
    id?: string
    createdAt?: Date | string
    follower: UserCreateNestedOneWithoutFollowersInput
    following: UserCreateNestedOneWithoutFollowingInput
  }

  export type FollowUncheckedCreateInput = {
    id?: string
    followerId: string
    followingId: string
    createdAt?: Date | string
  }

  export type FollowUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    follower?: UserUpdateOneRequiredWithoutFollowersNestedInput
    following?: UserUpdateOneRequiredWithoutFollowingNestedInput
  }

  export type FollowUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    followerId?: StringFieldUpdateOperationsInput | string
    followingId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowCreateManyInput = {
    id?: string
    followerId: string
    followingId: string
    createdAt?: Date | string
  }

  export type FollowUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    followerId?: StringFieldUpdateOperationsInput | string
    followingId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeCreateInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLikesInput
    tweet: TweetCreateNestedOneWithoutLikesInput
  }

  export type LikeUncheckedCreateInput = {
    id?: string
    userId: string
    tweetId: string
    createdAt?: Date | string
  }

  export type LikeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLikesNestedInput
    tweet?: TweetUpdateOneRequiredWithoutLikesNestedInput
  }

  export type LikeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tweetId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeCreateManyInput = {
    id?: string
    userId: string
    tweetId: string
    createdAt?: Date | string
  }

  export type LikeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tweetId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkCreateInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBookmarksInput
    tweet: TweetCreateNestedOneWithoutBookmarksInput
  }

  export type BookmarkUncheckedCreateInput = {
    id?: string
    userId: string
    tweetId: string
    createdAt?: Date | string
  }

  export type BookmarkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookmarksNestedInput
    tweet?: TweetUpdateOneRequiredWithoutBookmarksNestedInput
  }

  export type BookmarkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tweetId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkCreateManyInput = {
    id?: string
    userId: string
    tweetId: string
    createdAt?: Date | string
  }

  export type BookmarkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tweetId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaCreateInput = {
    id?: string
    url: string
    type: $Enums.MediaType
    createdAt?: Date | string
    tweet: TweetCreateNestedOneWithoutMediaInput
  }

  export type MediaUncheckedCreateInput = {
    id?: string
    tweetId: string
    url: string
    type: $Enums.MediaType
    createdAt?: Date | string
  }

  export type MediaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tweet?: TweetUpdateOneRequiredWithoutMediaNestedInput
  }

  export type MediaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tweetId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaCreateManyInput = {
    id?: string
    tweetId: string
    url: string
    type: $Enums.MediaType
    createdAt?: Date | string
  }

  export type MediaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tweetId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HashtagCreateInput = {
    id?: string
    name: string
    tweets?: TweetCreateNestedManyWithoutHashtagsInput
    tweetHashtags?: TweetHashtagCreateNestedManyWithoutHashtagInput
  }

  export type HashtagUncheckedCreateInput = {
    id?: string
    name: string
    tweets?: TweetUncheckedCreateNestedManyWithoutHashtagsInput
    tweetHashtags?: TweetHashtagUncheckedCreateNestedManyWithoutHashtagInput
  }

  export type HashtagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tweets?: TweetUpdateManyWithoutHashtagsNestedInput
    tweetHashtags?: TweetHashtagUpdateManyWithoutHashtagNestedInput
  }

  export type HashtagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tweets?: TweetUncheckedUpdateManyWithoutHashtagsNestedInput
    tweetHashtags?: TweetHashtagUncheckedUpdateManyWithoutHashtagNestedInput
  }

  export type HashtagCreateManyInput = {
    id?: string
    name: string
  }

  export type HashtagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type HashtagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TweetHashtagCreateInput = {
    tweet: TweetCreateNestedOneWithoutTweetHashtagsInput
    hashtag: HashtagCreateNestedOneWithoutTweetHashtagsInput
  }

  export type TweetHashtagUncheckedCreateInput = {
    tweetId: string
    hashtagId: string
  }

  export type TweetHashtagUpdateInput = {
    tweet?: TweetUpdateOneRequiredWithoutTweetHashtagsNestedInput
    hashtag?: HashtagUpdateOneRequiredWithoutTweetHashtagsNestedInput
  }

  export type TweetHashtagUncheckedUpdateInput = {
    tweetId?: StringFieldUpdateOperationsInput | string
    hashtagId?: StringFieldUpdateOperationsInput | string
  }

  export type TweetHashtagCreateManyInput = {
    tweetId: string
    hashtagId: string
  }

  export type TweetHashtagUpdateManyMutationInput = {

  }

  export type TweetHashtagUncheckedUpdateManyInput = {
    tweetId?: StringFieldUpdateOperationsInput | string
    hashtagId?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationCreateInput = {
    id?: string
    actorId?: string | null
    type: $Enums.NotificationType
    tweetId?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    userId: string
    actorId?: string | null
    type: $Enums.NotificationType
    tweetId?: string | null
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    tweetId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    tweetId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    userId: string
    actorId?: string | null
    type: $Enums.NotificationType
    tweetId?: string | null
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    tweetId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    tweetId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateInput = {
    id: string
    expiresAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutRefreshTokensInput
  }

  export type RefreshTokenUncheckedCreateInput = {
    id: string
    userId: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRefreshTokensNestedInput
  }

  export type RefreshTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateManyInput = {
    id: string
    userId: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TweetMetricsCreateInput = {
    likesCount?: number
    repliesCount?: number
    retweetsCount?: number
    tweet: TweetCreateNestedOneWithoutTweetMetricsInput
  }

  export type TweetMetricsUncheckedCreateInput = {
    tweetId: string
    likesCount?: number
    repliesCount?: number
    retweetsCount?: number
  }

  export type TweetMetricsUpdateInput = {
    likesCount?: IntFieldUpdateOperationsInput | number
    repliesCount?: IntFieldUpdateOperationsInput | number
    retweetsCount?: IntFieldUpdateOperationsInput | number
    tweet?: TweetUpdateOneRequiredWithoutTweetMetricsNestedInput
  }

  export type TweetMetricsUncheckedUpdateInput = {
    tweetId?: StringFieldUpdateOperationsInput | string
    likesCount?: IntFieldUpdateOperationsInput | number
    repliesCount?: IntFieldUpdateOperationsInput | number
    retweetsCount?: IntFieldUpdateOperationsInput | number
  }

  export type TweetMetricsCreateManyInput = {
    tweetId: string
    likesCount?: number
    repliesCount?: number
    retweetsCount?: number
  }

  export type TweetMetricsUpdateManyMutationInput = {
    likesCount?: IntFieldUpdateOperationsInput | number
    repliesCount?: IntFieldUpdateOperationsInput | number
    retweetsCount?: IntFieldUpdateOperationsInput | number
  }

  export type TweetMetricsUncheckedUpdateManyInput = {
    tweetId?: StringFieldUpdateOperationsInput | string
    likesCount?: IntFieldUpdateOperationsInput | number
    repliesCount?: IntFieldUpdateOperationsInput | number
    retweetsCount?: IntFieldUpdateOperationsInput | number
  }

  export type TimelineCreateInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTimelinesInput
    tweet: TweetCreateNestedOneWithoutTimelinesInput
  }

  export type TimelineUncheckedCreateInput = {
    id?: string
    userId: string
    tweetId: string
    createdAt?: Date | string
  }

  export type TimelineUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTimelinesNestedInput
    tweet?: TweetUpdateOneRequiredWithoutTimelinesNestedInput
  }

  export type TimelineUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tweetId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimelineCreateManyInput = {
    id?: string
    userId: string
    tweetId: string
    createdAt?: Date | string
  }

  export type TimelineUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimelineUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tweetId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RetweetCreateInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutRetweetsInput
    tweet: TweetCreateNestedOneWithoutRetweetsInput
  }

  export type RetweetUncheckedCreateInput = {
    id?: string
    userId: string
    tweetId: string
    createdAt?: Date | string
  }

  export type RetweetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRetweetsNestedInput
    tweet?: TweetUpdateOneRequiredWithoutRetweetsNestedInput
  }

  export type RetweetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tweetId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RetweetCreateManyInput = {
    id?: string
    userId: string
    tweetId: string
    createdAt?: Date | string
  }

  export type RetweetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RetweetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tweetId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TweetListRelationFilter = {
    every?: TweetWhereInput
    some?: TweetWhereInput
    none?: TweetWhereInput
  }

  export type FollowListRelationFilter = {
    every?: FollowWhereInput
    some?: FollowWhereInput
    none?: FollowWhereInput
  }

  export type LikeListRelationFilter = {
    every?: LikeWhereInput
    some?: LikeWhereInput
    none?: LikeWhereInput
  }

  export type BookmarkListRelationFilter = {
    every?: BookmarkWhereInput
    some?: BookmarkWhereInput
    none?: BookmarkWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type RefreshTokenListRelationFilter = {
    every?: RefreshTokenWhereInput
    some?: RefreshTokenWhereInput
    none?: RefreshTokenWhereInput
  }

  export type TimelineListRelationFilter = {
    every?: TimelineWhereInput
    some?: TimelineWhereInput
    none?: TimelineWhereInput
  }

  export type RetweetListRelationFilter = {
    every?: RetweetWhereInput
    some?: RetweetWhereInput
    none?: RetweetWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TweetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FollowOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookmarkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RefreshTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TimelineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RetweetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    bio?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    bio?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    bio?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumTweetTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TweetType | EnumTweetTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TweetType[] | ListEnumTweetTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TweetType[] | ListEnumTweetTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTweetTypeFilter<$PrismaModel> | $Enums.TweetType
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TweetNullableRelationFilter = {
    is?: TweetWhereInput | null
    isNot?: TweetWhereInput | null
  }

  export type MediaListRelationFilter = {
    every?: MediaWhereInput
    some?: MediaWhereInput
    none?: MediaWhereInput
  }

  export type HashtagListRelationFilter = {
    every?: HashtagWhereInput
    some?: HashtagWhereInput
    none?: HashtagWhereInput
  }

  export type TweetMetricsListRelationFilter = {
    every?: TweetMetricsWhereInput
    some?: TweetMetricsWhereInput
    none?: TweetMetricsWhereInput
  }

  export type TweetHashtagListRelationFilter = {
    every?: TweetHashtagWhereInput
    some?: TweetHashtagWhereInput
    none?: TweetHashtagWhereInput
  }

  export type MediaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HashtagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TweetMetricsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TweetHashtagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TweetCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    type?: SortOrder
    authorId?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TweetMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    type?: SortOrder
    authorId?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TweetMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    type?: SortOrder
    authorId?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTweetTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TweetType | EnumTweetTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TweetType[] | ListEnumTweetTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TweetType[] | ListEnumTweetTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTweetTypeWithAggregatesFilter<$PrismaModel> | $Enums.TweetType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTweetTypeFilter<$PrismaModel>
    _max?: NestedEnumTweetTypeFilter<$PrismaModel>
  }

  export type FollowFollowerIdFollowingIdCompoundUniqueInput = {
    followerId: string
    followingId: string
  }

  export type FollowCountOrderByAggregateInput = {
    id?: SortOrder
    followerId?: SortOrder
    followingId?: SortOrder
    createdAt?: SortOrder
  }

  export type FollowMaxOrderByAggregateInput = {
    id?: SortOrder
    followerId?: SortOrder
    followingId?: SortOrder
    createdAt?: SortOrder
  }

  export type FollowMinOrderByAggregateInput = {
    id?: SortOrder
    followerId?: SortOrder
    followingId?: SortOrder
    createdAt?: SortOrder
  }

  export type TweetRelationFilter = {
    is?: TweetWhereInput
    isNot?: TweetWhereInput
  }

  export type LikeUserIdTweetIdCompoundUniqueInput = {
    userId: string
    tweetId: string
  }

  export type LikeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tweetId?: SortOrder
    createdAt?: SortOrder
  }

  export type LikeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tweetId?: SortOrder
    createdAt?: SortOrder
  }

  export type LikeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tweetId?: SortOrder
    createdAt?: SortOrder
  }

  export type BookmarkUserIdTweetIdCompoundUniqueInput = {
    userId: string
    tweetId: string
  }

  export type BookmarkCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tweetId?: SortOrder
    createdAt?: SortOrder
  }

  export type BookmarkMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tweetId?: SortOrder
    createdAt?: SortOrder
  }

  export type BookmarkMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tweetId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumMediaTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaType | EnumMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaTypeFilter<$PrismaModel> | $Enums.MediaType
  }

  export type MediaCountOrderByAggregateInput = {
    id?: SortOrder
    tweetId?: SortOrder
    url?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type MediaMaxOrderByAggregateInput = {
    id?: SortOrder
    tweetId?: SortOrder
    url?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type MediaMinOrderByAggregateInput = {
    id?: SortOrder
    tweetId?: SortOrder
    url?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumMediaTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaType | EnumMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaTypeWithAggregatesFilter<$PrismaModel> | $Enums.MediaType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMediaTypeFilter<$PrismaModel>
    _max?: NestedEnumMediaTypeFilter<$PrismaModel>
  }

  export type HashtagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type HashtagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type HashtagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type HashtagRelationFilter = {
    is?: HashtagWhereInput
    isNot?: HashtagWhereInput
  }

  export type TweetHashtagTweetIdHashtagIdCompoundUniqueInput = {
    tweetId: string
    hashtagId: string
  }

  export type TweetHashtagCountOrderByAggregateInput = {
    tweetId?: SortOrder
    hashtagId?: SortOrder
  }

  export type TweetHashtagMaxOrderByAggregateInput = {
    tweetId?: SortOrder
    hashtagId?: SortOrder
  }

  export type TweetHashtagMinOrderByAggregateInput = {
    tweetId?: SortOrder
    hashtagId?: SortOrder
  }

  export type EnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    actorId?: SortOrder
    type?: SortOrder
    tweetId?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    actorId?: SortOrder
    type?: SortOrder
    tweetId?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    actorId?: SortOrder
    type?: SortOrder
    tweetId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type RefreshTokenCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type RefreshTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type RefreshTokenMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type TweetMetricsCountOrderByAggregateInput = {
    tweetId?: SortOrder
    likesCount?: SortOrder
    repliesCount?: SortOrder
    retweetsCount?: SortOrder
  }

  export type TweetMetricsAvgOrderByAggregateInput = {
    likesCount?: SortOrder
    repliesCount?: SortOrder
    retweetsCount?: SortOrder
  }

  export type TweetMetricsMaxOrderByAggregateInput = {
    tweetId?: SortOrder
    likesCount?: SortOrder
    repliesCount?: SortOrder
    retweetsCount?: SortOrder
  }

  export type TweetMetricsMinOrderByAggregateInput = {
    tweetId?: SortOrder
    likesCount?: SortOrder
    repliesCount?: SortOrder
    retweetsCount?: SortOrder
  }

  export type TweetMetricsSumOrderByAggregateInput = {
    likesCount?: SortOrder
    repliesCount?: SortOrder
    retweetsCount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type TimelineCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tweetId?: SortOrder
    createdAt?: SortOrder
  }

  export type TimelineMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tweetId?: SortOrder
    createdAt?: SortOrder
  }

  export type TimelineMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tweetId?: SortOrder
    createdAt?: SortOrder
  }

  export type RetweetUserIdTweetIdCompoundUniqueInput = {
    userId: string
    tweetId: string
  }

  export type RetweetCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tweetId?: SortOrder
    createdAt?: SortOrder
  }

  export type RetweetMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tweetId?: SortOrder
    createdAt?: SortOrder
  }

  export type RetweetMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tweetId?: SortOrder
    createdAt?: SortOrder
  }

  export type TweetCreateNestedManyWithoutAuthorInput = {
    create?: XOR<TweetCreateWithoutAuthorInput, TweetUncheckedCreateWithoutAuthorInput> | TweetCreateWithoutAuthorInput[] | TweetUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: TweetCreateOrConnectWithoutAuthorInput | TweetCreateOrConnectWithoutAuthorInput[]
    createMany?: TweetCreateManyAuthorInputEnvelope
    connect?: TweetWhereUniqueInput | TweetWhereUniqueInput[]
  }

  export type FollowCreateNestedManyWithoutFollowerInput = {
    create?: XOR<FollowCreateWithoutFollowerInput, FollowUncheckedCreateWithoutFollowerInput> | FollowCreateWithoutFollowerInput[] | FollowUncheckedCreateWithoutFollowerInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutFollowerInput | FollowCreateOrConnectWithoutFollowerInput[]
    createMany?: FollowCreateManyFollowerInputEnvelope
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
  }

  export type FollowCreateNestedManyWithoutFollowingInput = {
    create?: XOR<FollowCreateWithoutFollowingInput, FollowUncheckedCreateWithoutFollowingInput> | FollowCreateWithoutFollowingInput[] | FollowUncheckedCreateWithoutFollowingInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutFollowingInput | FollowCreateOrConnectWithoutFollowingInput[]
    createMany?: FollowCreateManyFollowingInputEnvelope
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
  }

  export type LikeCreateNestedManyWithoutUserInput = {
    create?: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput> | LikeCreateWithoutUserInput[] | LikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutUserInput | LikeCreateOrConnectWithoutUserInput[]
    createMany?: LikeCreateManyUserInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type BookmarkCreateNestedManyWithoutUserInput = {
    create?: XOR<BookmarkCreateWithoutUserInput, BookmarkUncheckedCreateWithoutUserInput> | BookmarkCreateWithoutUserInput[] | BookmarkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookmarkCreateOrConnectWithoutUserInput | BookmarkCreateOrConnectWithoutUserInput[]
    createMany?: BookmarkCreateManyUserInputEnvelope
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type RefreshTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type TimelineCreateNestedManyWithoutUserInput = {
    create?: XOR<TimelineCreateWithoutUserInput, TimelineUncheckedCreateWithoutUserInput> | TimelineCreateWithoutUserInput[] | TimelineUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimelineCreateOrConnectWithoutUserInput | TimelineCreateOrConnectWithoutUserInput[]
    createMany?: TimelineCreateManyUserInputEnvelope
    connect?: TimelineWhereUniqueInput | TimelineWhereUniqueInput[]
  }

  export type RetweetCreateNestedManyWithoutUserInput = {
    create?: XOR<RetweetCreateWithoutUserInput, RetweetUncheckedCreateWithoutUserInput> | RetweetCreateWithoutUserInput[] | RetweetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RetweetCreateOrConnectWithoutUserInput | RetweetCreateOrConnectWithoutUserInput[]
    createMany?: RetweetCreateManyUserInputEnvelope
    connect?: RetweetWhereUniqueInput | RetweetWhereUniqueInput[]
  }

  export type TweetUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<TweetCreateWithoutAuthorInput, TweetUncheckedCreateWithoutAuthorInput> | TweetCreateWithoutAuthorInput[] | TweetUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: TweetCreateOrConnectWithoutAuthorInput | TweetCreateOrConnectWithoutAuthorInput[]
    createMany?: TweetCreateManyAuthorInputEnvelope
    connect?: TweetWhereUniqueInput | TweetWhereUniqueInput[]
  }

  export type FollowUncheckedCreateNestedManyWithoutFollowerInput = {
    create?: XOR<FollowCreateWithoutFollowerInput, FollowUncheckedCreateWithoutFollowerInput> | FollowCreateWithoutFollowerInput[] | FollowUncheckedCreateWithoutFollowerInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutFollowerInput | FollowCreateOrConnectWithoutFollowerInput[]
    createMany?: FollowCreateManyFollowerInputEnvelope
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
  }

  export type FollowUncheckedCreateNestedManyWithoutFollowingInput = {
    create?: XOR<FollowCreateWithoutFollowingInput, FollowUncheckedCreateWithoutFollowingInput> | FollowCreateWithoutFollowingInput[] | FollowUncheckedCreateWithoutFollowingInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutFollowingInput | FollowCreateOrConnectWithoutFollowingInput[]
    createMany?: FollowCreateManyFollowingInputEnvelope
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
  }

  export type LikeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput> | LikeCreateWithoutUserInput[] | LikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutUserInput | LikeCreateOrConnectWithoutUserInput[]
    createMany?: LikeCreateManyUserInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type BookmarkUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BookmarkCreateWithoutUserInput, BookmarkUncheckedCreateWithoutUserInput> | BookmarkCreateWithoutUserInput[] | BookmarkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookmarkCreateOrConnectWithoutUserInput | BookmarkCreateOrConnectWithoutUserInput[]
    createMany?: BookmarkCreateManyUserInputEnvelope
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type RefreshTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type TimelineUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TimelineCreateWithoutUserInput, TimelineUncheckedCreateWithoutUserInput> | TimelineCreateWithoutUserInput[] | TimelineUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimelineCreateOrConnectWithoutUserInput | TimelineCreateOrConnectWithoutUserInput[]
    createMany?: TimelineCreateManyUserInputEnvelope
    connect?: TimelineWhereUniqueInput | TimelineWhereUniqueInput[]
  }

  export type RetweetUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RetweetCreateWithoutUserInput, RetweetUncheckedCreateWithoutUserInput> | RetweetCreateWithoutUserInput[] | RetweetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RetweetCreateOrConnectWithoutUserInput | RetweetCreateOrConnectWithoutUserInput[]
    createMany?: RetweetCreateManyUserInputEnvelope
    connect?: RetweetWhereUniqueInput | RetweetWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TweetUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<TweetCreateWithoutAuthorInput, TweetUncheckedCreateWithoutAuthorInput> | TweetCreateWithoutAuthorInput[] | TweetUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: TweetCreateOrConnectWithoutAuthorInput | TweetCreateOrConnectWithoutAuthorInput[]
    upsert?: TweetUpsertWithWhereUniqueWithoutAuthorInput | TweetUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: TweetCreateManyAuthorInputEnvelope
    set?: TweetWhereUniqueInput | TweetWhereUniqueInput[]
    disconnect?: TweetWhereUniqueInput | TweetWhereUniqueInput[]
    delete?: TweetWhereUniqueInput | TweetWhereUniqueInput[]
    connect?: TweetWhereUniqueInput | TweetWhereUniqueInput[]
    update?: TweetUpdateWithWhereUniqueWithoutAuthorInput | TweetUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: TweetUpdateManyWithWhereWithoutAuthorInput | TweetUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: TweetScalarWhereInput | TweetScalarWhereInput[]
  }

  export type FollowUpdateManyWithoutFollowerNestedInput = {
    create?: XOR<FollowCreateWithoutFollowerInput, FollowUncheckedCreateWithoutFollowerInput> | FollowCreateWithoutFollowerInput[] | FollowUncheckedCreateWithoutFollowerInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutFollowerInput | FollowCreateOrConnectWithoutFollowerInput[]
    upsert?: FollowUpsertWithWhereUniqueWithoutFollowerInput | FollowUpsertWithWhereUniqueWithoutFollowerInput[]
    createMany?: FollowCreateManyFollowerInputEnvelope
    set?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    disconnect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    delete?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    update?: FollowUpdateWithWhereUniqueWithoutFollowerInput | FollowUpdateWithWhereUniqueWithoutFollowerInput[]
    updateMany?: FollowUpdateManyWithWhereWithoutFollowerInput | FollowUpdateManyWithWhereWithoutFollowerInput[]
    deleteMany?: FollowScalarWhereInput | FollowScalarWhereInput[]
  }

  export type FollowUpdateManyWithoutFollowingNestedInput = {
    create?: XOR<FollowCreateWithoutFollowingInput, FollowUncheckedCreateWithoutFollowingInput> | FollowCreateWithoutFollowingInput[] | FollowUncheckedCreateWithoutFollowingInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutFollowingInput | FollowCreateOrConnectWithoutFollowingInput[]
    upsert?: FollowUpsertWithWhereUniqueWithoutFollowingInput | FollowUpsertWithWhereUniqueWithoutFollowingInput[]
    createMany?: FollowCreateManyFollowingInputEnvelope
    set?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    disconnect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    delete?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    update?: FollowUpdateWithWhereUniqueWithoutFollowingInput | FollowUpdateWithWhereUniqueWithoutFollowingInput[]
    updateMany?: FollowUpdateManyWithWhereWithoutFollowingInput | FollowUpdateManyWithWhereWithoutFollowingInput[]
    deleteMany?: FollowScalarWhereInput | FollowScalarWhereInput[]
  }

  export type LikeUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput> | LikeCreateWithoutUserInput[] | LikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutUserInput | LikeCreateOrConnectWithoutUserInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutUserInput | LikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikeCreateManyUserInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutUserInput | LikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutUserInput | LikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type BookmarkUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookmarkCreateWithoutUserInput, BookmarkUncheckedCreateWithoutUserInput> | BookmarkCreateWithoutUserInput[] | BookmarkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookmarkCreateOrConnectWithoutUserInput | BookmarkCreateOrConnectWithoutUserInput[]
    upsert?: BookmarkUpsertWithWhereUniqueWithoutUserInput | BookmarkUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookmarkCreateManyUserInputEnvelope
    set?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    disconnect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    delete?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    update?: BookmarkUpdateWithWhereUniqueWithoutUserInput | BookmarkUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookmarkUpdateManyWithWhereWithoutUserInput | BookmarkUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookmarkScalarWhereInput | BookmarkScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type RefreshTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type TimelineUpdateManyWithoutUserNestedInput = {
    create?: XOR<TimelineCreateWithoutUserInput, TimelineUncheckedCreateWithoutUserInput> | TimelineCreateWithoutUserInput[] | TimelineUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimelineCreateOrConnectWithoutUserInput | TimelineCreateOrConnectWithoutUserInput[]
    upsert?: TimelineUpsertWithWhereUniqueWithoutUserInput | TimelineUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TimelineCreateManyUserInputEnvelope
    set?: TimelineWhereUniqueInput | TimelineWhereUniqueInput[]
    disconnect?: TimelineWhereUniqueInput | TimelineWhereUniqueInput[]
    delete?: TimelineWhereUniqueInput | TimelineWhereUniqueInput[]
    connect?: TimelineWhereUniqueInput | TimelineWhereUniqueInput[]
    update?: TimelineUpdateWithWhereUniqueWithoutUserInput | TimelineUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TimelineUpdateManyWithWhereWithoutUserInput | TimelineUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TimelineScalarWhereInput | TimelineScalarWhereInput[]
  }

  export type RetweetUpdateManyWithoutUserNestedInput = {
    create?: XOR<RetweetCreateWithoutUserInput, RetweetUncheckedCreateWithoutUserInput> | RetweetCreateWithoutUserInput[] | RetweetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RetweetCreateOrConnectWithoutUserInput | RetweetCreateOrConnectWithoutUserInput[]
    upsert?: RetweetUpsertWithWhereUniqueWithoutUserInput | RetweetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RetweetCreateManyUserInputEnvelope
    set?: RetweetWhereUniqueInput | RetweetWhereUniqueInput[]
    disconnect?: RetweetWhereUniqueInput | RetweetWhereUniqueInput[]
    delete?: RetweetWhereUniqueInput | RetweetWhereUniqueInput[]
    connect?: RetweetWhereUniqueInput | RetweetWhereUniqueInput[]
    update?: RetweetUpdateWithWhereUniqueWithoutUserInput | RetweetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RetweetUpdateManyWithWhereWithoutUserInput | RetweetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RetweetScalarWhereInput | RetweetScalarWhereInput[]
  }

  export type TweetUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<TweetCreateWithoutAuthorInput, TweetUncheckedCreateWithoutAuthorInput> | TweetCreateWithoutAuthorInput[] | TweetUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: TweetCreateOrConnectWithoutAuthorInput | TweetCreateOrConnectWithoutAuthorInput[]
    upsert?: TweetUpsertWithWhereUniqueWithoutAuthorInput | TweetUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: TweetCreateManyAuthorInputEnvelope
    set?: TweetWhereUniqueInput | TweetWhereUniqueInput[]
    disconnect?: TweetWhereUniqueInput | TweetWhereUniqueInput[]
    delete?: TweetWhereUniqueInput | TweetWhereUniqueInput[]
    connect?: TweetWhereUniqueInput | TweetWhereUniqueInput[]
    update?: TweetUpdateWithWhereUniqueWithoutAuthorInput | TweetUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: TweetUpdateManyWithWhereWithoutAuthorInput | TweetUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: TweetScalarWhereInput | TweetScalarWhereInput[]
  }

  export type FollowUncheckedUpdateManyWithoutFollowerNestedInput = {
    create?: XOR<FollowCreateWithoutFollowerInput, FollowUncheckedCreateWithoutFollowerInput> | FollowCreateWithoutFollowerInput[] | FollowUncheckedCreateWithoutFollowerInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutFollowerInput | FollowCreateOrConnectWithoutFollowerInput[]
    upsert?: FollowUpsertWithWhereUniqueWithoutFollowerInput | FollowUpsertWithWhereUniqueWithoutFollowerInput[]
    createMany?: FollowCreateManyFollowerInputEnvelope
    set?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    disconnect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    delete?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    update?: FollowUpdateWithWhereUniqueWithoutFollowerInput | FollowUpdateWithWhereUniqueWithoutFollowerInput[]
    updateMany?: FollowUpdateManyWithWhereWithoutFollowerInput | FollowUpdateManyWithWhereWithoutFollowerInput[]
    deleteMany?: FollowScalarWhereInput | FollowScalarWhereInput[]
  }

  export type FollowUncheckedUpdateManyWithoutFollowingNestedInput = {
    create?: XOR<FollowCreateWithoutFollowingInput, FollowUncheckedCreateWithoutFollowingInput> | FollowCreateWithoutFollowingInput[] | FollowUncheckedCreateWithoutFollowingInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutFollowingInput | FollowCreateOrConnectWithoutFollowingInput[]
    upsert?: FollowUpsertWithWhereUniqueWithoutFollowingInput | FollowUpsertWithWhereUniqueWithoutFollowingInput[]
    createMany?: FollowCreateManyFollowingInputEnvelope
    set?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    disconnect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    delete?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    update?: FollowUpdateWithWhereUniqueWithoutFollowingInput | FollowUpdateWithWhereUniqueWithoutFollowingInput[]
    updateMany?: FollowUpdateManyWithWhereWithoutFollowingInput | FollowUpdateManyWithWhereWithoutFollowingInput[]
    deleteMany?: FollowScalarWhereInput | FollowScalarWhereInput[]
  }

  export type LikeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput> | LikeCreateWithoutUserInput[] | LikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutUserInput | LikeCreateOrConnectWithoutUserInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutUserInput | LikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikeCreateManyUserInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutUserInput | LikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutUserInput | LikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type BookmarkUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookmarkCreateWithoutUserInput, BookmarkUncheckedCreateWithoutUserInput> | BookmarkCreateWithoutUserInput[] | BookmarkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookmarkCreateOrConnectWithoutUserInput | BookmarkCreateOrConnectWithoutUserInput[]
    upsert?: BookmarkUpsertWithWhereUniqueWithoutUserInput | BookmarkUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookmarkCreateManyUserInputEnvelope
    set?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    disconnect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    delete?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    update?: BookmarkUpdateWithWhereUniqueWithoutUserInput | BookmarkUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookmarkUpdateManyWithWhereWithoutUserInput | BookmarkUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookmarkScalarWhereInput | BookmarkScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type TimelineUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TimelineCreateWithoutUserInput, TimelineUncheckedCreateWithoutUserInput> | TimelineCreateWithoutUserInput[] | TimelineUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimelineCreateOrConnectWithoutUserInput | TimelineCreateOrConnectWithoutUserInput[]
    upsert?: TimelineUpsertWithWhereUniqueWithoutUserInput | TimelineUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TimelineCreateManyUserInputEnvelope
    set?: TimelineWhereUniqueInput | TimelineWhereUniqueInput[]
    disconnect?: TimelineWhereUniqueInput | TimelineWhereUniqueInput[]
    delete?: TimelineWhereUniqueInput | TimelineWhereUniqueInput[]
    connect?: TimelineWhereUniqueInput | TimelineWhereUniqueInput[]
    update?: TimelineUpdateWithWhereUniqueWithoutUserInput | TimelineUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TimelineUpdateManyWithWhereWithoutUserInput | TimelineUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TimelineScalarWhereInput | TimelineScalarWhereInput[]
  }

  export type RetweetUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RetweetCreateWithoutUserInput, RetweetUncheckedCreateWithoutUserInput> | RetweetCreateWithoutUserInput[] | RetweetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RetweetCreateOrConnectWithoutUserInput | RetweetCreateOrConnectWithoutUserInput[]
    upsert?: RetweetUpsertWithWhereUniqueWithoutUserInput | RetweetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RetweetCreateManyUserInputEnvelope
    set?: RetweetWhereUniqueInput | RetweetWhereUniqueInput[]
    disconnect?: RetweetWhereUniqueInput | RetweetWhereUniqueInput[]
    delete?: RetweetWhereUniqueInput | RetweetWhereUniqueInput[]
    connect?: RetweetWhereUniqueInput | RetweetWhereUniqueInput[]
    update?: RetweetUpdateWithWhereUniqueWithoutUserInput | RetweetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RetweetUpdateManyWithWhereWithoutUserInput | RetweetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RetweetScalarWhereInput | RetweetScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTweetsInput = {
    create?: XOR<UserCreateWithoutTweetsInput, UserUncheckedCreateWithoutTweetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTweetsInput
    connect?: UserWhereUniqueInput
  }

  export type TweetCreateNestedOneWithoutRepliesInput = {
    create?: XOR<TweetCreateWithoutRepliesInput, TweetUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: TweetCreateOrConnectWithoutRepliesInput
    connect?: TweetWhereUniqueInput
  }

  export type TweetCreateNestedManyWithoutParentInput = {
    create?: XOR<TweetCreateWithoutParentInput, TweetUncheckedCreateWithoutParentInput> | TweetCreateWithoutParentInput[] | TweetUncheckedCreateWithoutParentInput[]
    connectOrCreate?: TweetCreateOrConnectWithoutParentInput | TweetCreateOrConnectWithoutParentInput[]
    createMany?: TweetCreateManyParentInputEnvelope
    connect?: TweetWhereUniqueInput | TweetWhereUniqueInput[]
  }

  export type MediaCreateNestedManyWithoutTweetInput = {
    create?: XOR<MediaCreateWithoutTweetInput, MediaUncheckedCreateWithoutTweetInput> | MediaCreateWithoutTweetInput[] | MediaUncheckedCreateWithoutTweetInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutTweetInput | MediaCreateOrConnectWithoutTweetInput[]
    createMany?: MediaCreateManyTweetInputEnvelope
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
  }

  export type HashtagCreateNestedManyWithoutTweetsInput = {
    create?: XOR<HashtagCreateWithoutTweetsInput, HashtagUncheckedCreateWithoutTweetsInput> | HashtagCreateWithoutTweetsInput[] | HashtagUncheckedCreateWithoutTweetsInput[]
    connectOrCreate?: HashtagCreateOrConnectWithoutTweetsInput | HashtagCreateOrConnectWithoutTweetsInput[]
    connect?: HashtagWhereUniqueInput | HashtagWhereUniqueInput[]
  }

  export type LikeCreateNestedManyWithoutTweetInput = {
    create?: XOR<LikeCreateWithoutTweetInput, LikeUncheckedCreateWithoutTweetInput> | LikeCreateWithoutTweetInput[] | LikeUncheckedCreateWithoutTweetInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutTweetInput | LikeCreateOrConnectWithoutTweetInput[]
    createMany?: LikeCreateManyTweetInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type BookmarkCreateNestedManyWithoutTweetInput = {
    create?: XOR<BookmarkCreateWithoutTweetInput, BookmarkUncheckedCreateWithoutTweetInput> | BookmarkCreateWithoutTweetInput[] | BookmarkUncheckedCreateWithoutTweetInput[]
    connectOrCreate?: BookmarkCreateOrConnectWithoutTweetInput | BookmarkCreateOrConnectWithoutTweetInput[]
    createMany?: BookmarkCreateManyTweetInputEnvelope
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
  }

  export type TweetMetricsCreateNestedManyWithoutTweetInput = {
    create?: XOR<TweetMetricsCreateWithoutTweetInput, TweetMetricsUncheckedCreateWithoutTweetInput> | TweetMetricsCreateWithoutTweetInput[] | TweetMetricsUncheckedCreateWithoutTweetInput[]
    connectOrCreate?: TweetMetricsCreateOrConnectWithoutTweetInput | TweetMetricsCreateOrConnectWithoutTweetInput[]
    createMany?: TweetMetricsCreateManyTweetInputEnvelope
    connect?: TweetMetricsWhereUniqueInput | TweetMetricsWhereUniqueInput[]
  }

  export type TimelineCreateNestedManyWithoutTweetInput = {
    create?: XOR<TimelineCreateWithoutTweetInput, TimelineUncheckedCreateWithoutTweetInput> | TimelineCreateWithoutTweetInput[] | TimelineUncheckedCreateWithoutTweetInput[]
    connectOrCreate?: TimelineCreateOrConnectWithoutTweetInput | TimelineCreateOrConnectWithoutTweetInput[]
    createMany?: TimelineCreateManyTweetInputEnvelope
    connect?: TimelineWhereUniqueInput | TimelineWhereUniqueInput[]
  }

  export type TweetHashtagCreateNestedManyWithoutTweetInput = {
    create?: XOR<TweetHashtagCreateWithoutTweetInput, TweetHashtagUncheckedCreateWithoutTweetInput> | TweetHashtagCreateWithoutTweetInput[] | TweetHashtagUncheckedCreateWithoutTweetInput[]
    connectOrCreate?: TweetHashtagCreateOrConnectWithoutTweetInput | TweetHashtagCreateOrConnectWithoutTweetInput[]
    createMany?: TweetHashtagCreateManyTweetInputEnvelope
    connect?: TweetHashtagWhereUniqueInput | TweetHashtagWhereUniqueInput[]
  }

  export type RetweetCreateNestedManyWithoutTweetInput = {
    create?: XOR<RetweetCreateWithoutTweetInput, RetweetUncheckedCreateWithoutTweetInput> | RetweetCreateWithoutTweetInput[] | RetweetUncheckedCreateWithoutTweetInput[]
    connectOrCreate?: RetweetCreateOrConnectWithoutTweetInput | RetweetCreateOrConnectWithoutTweetInput[]
    createMany?: RetweetCreateManyTweetInputEnvelope
    connect?: RetweetWhereUniqueInput | RetweetWhereUniqueInput[]
  }

  export type TweetUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<TweetCreateWithoutParentInput, TweetUncheckedCreateWithoutParentInput> | TweetCreateWithoutParentInput[] | TweetUncheckedCreateWithoutParentInput[]
    connectOrCreate?: TweetCreateOrConnectWithoutParentInput | TweetCreateOrConnectWithoutParentInput[]
    createMany?: TweetCreateManyParentInputEnvelope
    connect?: TweetWhereUniqueInput | TweetWhereUniqueInput[]
  }

  export type MediaUncheckedCreateNestedManyWithoutTweetInput = {
    create?: XOR<MediaCreateWithoutTweetInput, MediaUncheckedCreateWithoutTweetInput> | MediaCreateWithoutTweetInput[] | MediaUncheckedCreateWithoutTweetInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutTweetInput | MediaCreateOrConnectWithoutTweetInput[]
    createMany?: MediaCreateManyTweetInputEnvelope
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
  }

  export type HashtagUncheckedCreateNestedManyWithoutTweetsInput = {
    create?: XOR<HashtagCreateWithoutTweetsInput, HashtagUncheckedCreateWithoutTweetsInput> | HashtagCreateWithoutTweetsInput[] | HashtagUncheckedCreateWithoutTweetsInput[]
    connectOrCreate?: HashtagCreateOrConnectWithoutTweetsInput | HashtagCreateOrConnectWithoutTweetsInput[]
    connect?: HashtagWhereUniqueInput | HashtagWhereUniqueInput[]
  }

  export type LikeUncheckedCreateNestedManyWithoutTweetInput = {
    create?: XOR<LikeCreateWithoutTweetInput, LikeUncheckedCreateWithoutTweetInput> | LikeCreateWithoutTweetInput[] | LikeUncheckedCreateWithoutTweetInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutTweetInput | LikeCreateOrConnectWithoutTweetInput[]
    createMany?: LikeCreateManyTweetInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type BookmarkUncheckedCreateNestedManyWithoutTweetInput = {
    create?: XOR<BookmarkCreateWithoutTweetInput, BookmarkUncheckedCreateWithoutTweetInput> | BookmarkCreateWithoutTweetInput[] | BookmarkUncheckedCreateWithoutTweetInput[]
    connectOrCreate?: BookmarkCreateOrConnectWithoutTweetInput | BookmarkCreateOrConnectWithoutTweetInput[]
    createMany?: BookmarkCreateManyTweetInputEnvelope
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
  }

  export type TweetMetricsUncheckedCreateNestedManyWithoutTweetInput = {
    create?: XOR<TweetMetricsCreateWithoutTweetInput, TweetMetricsUncheckedCreateWithoutTweetInput> | TweetMetricsCreateWithoutTweetInput[] | TweetMetricsUncheckedCreateWithoutTweetInput[]
    connectOrCreate?: TweetMetricsCreateOrConnectWithoutTweetInput | TweetMetricsCreateOrConnectWithoutTweetInput[]
    createMany?: TweetMetricsCreateManyTweetInputEnvelope
    connect?: TweetMetricsWhereUniqueInput | TweetMetricsWhereUniqueInput[]
  }

  export type TimelineUncheckedCreateNestedManyWithoutTweetInput = {
    create?: XOR<TimelineCreateWithoutTweetInput, TimelineUncheckedCreateWithoutTweetInput> | TimelineCreateWithoutTweetInput[] | TimelineUncheckedCreateWithoutTweetInput[]
    connectOrCreate?: TimelineCreateOrConnectWithoutTweetInput | TimelineCreateOrConnectWithoutTweetInput[]
    createMany?: TimelineCreateManyTweetInputEnvelope
    connect?: TimelineWhereUniqueInput | TimelineWhereUniqueInput[]
  }

  export type TweetHashtagUncheckedCreateNestedManyWithoutTweetInput = {
    create?: XOR<TweetHashtagCreateWithoutTweetInput, TweetHashtagUncheckedCreateWithoutTweetInput> | TweetHashtagCreateWithoutTweetInput[] | TweetHashtagUncheckedCreateWithoutTweetInput[]
    connectOrCreate?: TweetHashtagCreateOrConnectWithoutTweetInput | TweetHashtagCreateOrConnectWithoutTweetInput[]
    createMany?: TweetHashtagCreateManyTweetInputEnvelope
    connect?: TweetHashtagWhereUniqueInput | TweetHashtagWhereUniqueInput[]
  }

  export type RetweetUncheckedCreateNestedManyWithoutTweetInput = {
    create?: XOR<RetweetCreateWithoutTweetInput, RetweetUncheckedCreateWithoutTweetInput> | RetweetCreateWithoutTweetInput[] | RetweetUncheckedCreateWithoutTweetInput[]
    connectOrCreate?: RetweetCreateOrConnectWithoutTweetInput | RetweetCreateOrConnectWithoutTweetInput[]
    createMany?: RetweetCreateManyTweetInputEnvelope
    connect?: RetweetWhereUniqueInput | RetweetWhereUniqueInput[]
  }

  export type EnumTweetTypeFieldUpdateOperationsInput = {
    set?: $Enums.TweetType
  }

  export type UserUpdateOneRequiredWithoutTweetsNestedInput = {
    create?: XOR<UserCreateWithoutTweetsInput, UserUncheckedCreateWithoutTweetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTweetsInput
    upsert?: UserUpsertWithoutTweetsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTweetsInput, UserUpdateWithoutTweetsInput>, UserUncheckedUpdateWithoutTweetsInput>
  }

  export type TweetUpdateOneWithoutRepliesNestedInput = {
    create?: XOR<TweetCreateWithoutRepliesInput, TweetUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: TweetCreateOrConnectWithoutRepliesInput
    upsert?: TweetUpsertWithoutRepliesInput
    disconnect?: TweetWhereInput | boolean
    delete?: TweetWhereInput | boolean
    connect?: TweetWhereUniqueInput
    update?: XOR<XOR<TweetUpdateToOneWithWhereWithoutRepliesInput, TweetUpdateWithoutRepliesInput>, TweetUncheckedUpdateWithoutRepliesInput>
  }

  export type TweetUpdateManyWithoutParentNestedInput = {
    create?: XOR<TweetCreateWithoutParentInput, TweetUncheckedCreateWithoutParentInput> | TweetCreateWithoutParentInput[] | TweetUncheckedCreateWithoutParentInput[]
    connectOrCreate?: TweetCreateOrConnectWithoutParentInput | TweetCreateOrConnectWithoutParentInput[]
    upsert?: TweetUpsertWithWhereUniqueWithoutParentInput | TweetUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: TweetCreateManyParentInputEnvelope
    set?: TweetWhereUniqueInput | TweetWhereUniqueInput[]
    disconnect?: TweetWhereUniqueInput | TweetWhereUniqueInput[]
    delete?: TweetWhereUniqueInput | TweetWhereUniqueInput[]
    connect?: TweetWhereUniqueInput | TweetWhereUniqueInput[]
    update?: TweetUpdateWithWhereUniqueWithoutParentInput | TweetUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: TweetUpdateManyWithWhereWithoutParentInput | TweetUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: TweetScalarWhereInput | TweetScalarWhereInput[]
  }

  export type MediaUpdateManyWithoutTweetNestedInput = {
    create?: XOR<MediaCreateWithoutTweetInput, MediaUncheckedCreateWithoutTweetInput> | MediaCreateWithoutTweetInput[] | MediaUncheckedCreateWithoutTweetInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutTweetInput | MediaCreateOrConnectWithoutTweetInput[]
    upsert?: MediaUpsertWithWhereUniqueWithoutTweetInput | MediaUpsertWithWhereUniqueWithoutTweetInput[]
    createMany?: MediaCreateManyTweetInputEnvelope
    set?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    disconnect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    delete?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    update?: MediaUpdateWithWhereUniqueWithoutTweetInput | MediaUpdateWithWhereUniqueWithoutTweetInput[]
    updateMany?: MediaUpdateManyWithWhereWithoutTweetInput | MediaUpdateManyWithWhereWithoutTweetInput[]
    deleteMany?: MediaScalarWhereInput | MediaScalarWhereInput[]
  }

  export type HashtagUpdateManyWithoutTweetsNestedInput = {
    create?: XOR<HashtagCreateWithoutTweetsInput, HashtagUncheckedCreateWithoutTweetsInput> | HashtagCreateWithoutTweetsInput[] | HashtagUncheckedCreateWithoutTweetsInput[]
    connectOrCreate?: HashtagCreateOrConnectWithoutTweetsInput | HashtagCreateOrConnectWithoutTweetsInput[]
    upsert?: HashtagUpsertWithWhereUniqueWithoutTweetsInput | HashtagUpsertWithWhereUniqueWithoutTweetsInput[]
    set?: HashtagWhereUniqueInput | HashtagWhereUniqueInput[]
    disconnect?: HashtagWhereUniqueInput | HashtagWhereUniqueInput[]
    delete?: HashtagWhereUniqueInput | HashtagWhereUniqueInput[]
    connect?: HashtagWhereUniqueInput | HashtagWhereUniqueInput[]
    update?: HashtagUpdateWithWhereUniqueWithoutTweetsInput | HashtagUpdateWithWhereUniqueWithoutTweetsInput[]
    updateMany?: HashtagUpdateManyWithWhereWithoutTweetsInput | HashtagUpdateManyWithWhereWithoutTweetsInput[]
    deleteMany?: HashtagScalarWhereInput | HashtagScalarWhereInput[]
  }

  export type LikeUpdateManyWithoutTweetNestedInput = {
    create?: XOR<LikeCreateWithoutTweetInput, LikeUncheckedCreateWithoutTweetInput> | LikeCreateWithoutTweetInput[] | LikeUncheckedCreateWithoutTweetInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutTweetInput | LikeCreateOrConnectWithoutTweetInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutTweetInput | LikeUpsertWithWhereUniqueWithoutTweetInput[]
    createMany?: LikeCreateManyTweetInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutTweetInput | LikeUpdateWithWhereUniqueWithoutTweetInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutTweetInput | LikeUpdateManyWithWhereWithoutTweetInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type BookmarkUpdateManyWithoutTweetNestedInput = {
    create?: XOR<BookmarkCreateWithoutTweetInput, BookmarkUncheckedCreateWithoutTweetInput> | BookmarkCreateWithoutTweetInput[] | BookmarkUncheckedCreateWithoutTweetInput[]
    connectOrCreate?: BookmarkCreateOrConnectWithoutTweetInput | BookmarkCreateOrConnectWithoutTweetInput[]
    upsert?: BookmarkUpsertWithWhereUniqueWithoutTweetInput | BookmarkUpsertWithWhereUniqueWithoutTweetInput[]
    createMany?: BookmarkCreateManyTweetInputEnvelope
    set?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    disconnect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    delete?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    update?: BookmarkUpdateWithWhereUniqueWithoutTweetInput | BookmarkUpdateWithWhereUniqueWithoutTweetInput[]
    updateMany?: BookmarkUpdateManyWithWhereWithoutTweetInput | BookmarkUpdateManyWithWhereWithoutTweetInput[]
    deleteMany?: BookmarkScalarWhereInput | BookmarkScalarWhereInput[]
  }

  export type TweetMetricsUpdateManyWithoutTweetNestedInput = {
    create?: XOR<TweetMetricsCreateWithoutTweetInput, TweetMetricsUncheckedCreateWithoutTweetInput> | TweetMetricsCreateWithoutTweetInput[] | TweetMetricsUncheckedCreateWithoutTweetInput[]
    connectOrCreate?: TweetMetricsCreateOrConnectWithoutTweetInput | TweetMetricsCreateOrConnectWithoutTweetInput[]
    upsert?: TweetMetricsUpsertWithWhereUniqueWithoutTweetInput | TweetMetricsUpsertWithWhereUniqueWithoutTweetInput[]
    createMany?: TweetMetricsCreateManyTweetInputEnvelope
    set?: TweetMetricsWhereUniqueInput | TweetMetricsWhereUniqueInput[]
    disconnect?: TweetMetricsWhereUniqueInput | TweetMetricsWhereUniqueInput[]
    delete?: TweetMetricsWhereUniqueInput | TweetMetricsWhereUniqueInput[]
    connect?: TweetMetricsWhereUniqueInput | TweetMetricsWhereUniqueInput[]
    update?: TweetMetricsUpdateWithWhereUniqueWithoutTweetInput | TweetMetricsUpdateWithWhereUniqueWithoutTweetInput[]
    updateMany?: TweetMetricsUpdateManyWithWhereWithoutTweetInput | TweetMetricsUpdateManyWithWhereWithoutTweetInput[]
    deleteMany?: TweetMetricsScalarWhereInput | TweetMetricsScalarWhereInput[]
  }

  export type TimelineUpdateManyWithoutTweetNestedInput = {
    create?: XOR<TimelineCreateWithoutTweetInput, TimelineUncheckedCreateWithoutTweetInput> | TimelineCreateWithoutTweetInput[] | TimelineUncheckedCreateWithoutTweetInput[]
    connectOrCreate?: TimelineCreateOrConnectWithoutTweetInput | TimelineCreateOrConnectWithoutTweetInput[]
    upsert?: TimelineUpsertWithWhereUniqueWithoutTweetInput | TimelineUpsertWithWhereUniqueWithoutTweetInput[]
    createMany?: TimelineCreateManyTweetInputEnvelope
    set?: TimelineWhereUniqueInput | TimelineWhereUniqueInput[]
    disconnect?: TimelineWhereUniqueInput | TimelineWhereUniqueInput[]
    delete?: TimelineWhereUniqueInput | TimelineWhereUniqueInput[]
    connect?: TimelineWhereUniqueInput | TimelineWhereUniqueInput[]
    update?: TimelineUpdateWithWhereUniqueWithoutTweetInput | TimelineUpdateWithWhereUniqueWithoutTweetInput[]
    updateMany?: TimelineUpdateManyWithWhereWithoutTweetInput | TimelineUpdateManyWithWhereWithoutTweetInput[]
    deleteMany?: TimelineScalarWhereInput | TimelineScalarWhereInput[]
  }

  export type TweetHashtagUpdateManyWithoutTweetNestedInput = {
    create?: XOR<TweetHashtagCreateWithoutTweetInput, TweetHashtagUncheckedCreateWithoutTweetInput> | TweetHashtagCreateWithoutTweetInput[] | TweetHashtagUncheckedCreateWithoutTweetInput[]
    connectOrCreate?: TweetHashtagCreateOrConnectWithoutTweetInput | TweetHashtagCreateOrConnectWithoutTweetInput[]
    upsert?: TweetHashtagUpsertWithWhereUniqueWithoutTweetInput | TweetHashtagUpsertWithWhereUniqueWithoutTweetInput[]
    createMany?: TweetHashtagCreateManyTweetInputEnvelope
    set?: TweetHashtagWhereUniqueInput | TweetHashtagWhereUniqueInput[]
    disconnect?: TweetHashtagWhereUniqueInput | TweetHashtagWhereUniqueInput[]
    delete?: TweetHashtagWhereUniqueInput | TweetHashtagWhereUniqueInput[]
    connect?: TweetHashtagWhereUniqueInput | TweetHashtagWhereUniqueInput[]
    update?: TweetHashtagUpdateWithWhereUniqueWithoutTweetInput | TweetHashtagUpdateWithWhereUniqueWithoutTweetInput[]
    updateMany?: TweetHashtagUpdateManyWithWhereWithoutTweetInput | TweetHashtagUpdateManyWithWhereWithoutTweetInput[]
    deleteMany?: TweetHashtagScalarWhereInput | TweetHashtagScalarWhereInput[]
  }

  export type RetweetUpdateManyWithoutTweetNestedInput = {
    create?: XOR<RetweetCreateWithoutTweetInput, RetweetUncheckedCreateWithoutTweetInput> | RetweetCreateWithoutTweetInput[] | RetweetUncheckedCreateWithoutTweetInput[]
    connectOrCreate?: RetweetCreateOrConnectWithoutTweetInput | RetweetCreateOrConnectWithoutTweetInput[]
    upsert?: RetweetUpsertWithWhereUniqueWithoutTweetInput | RetweetUpsertWithWhereUniqueWithoutTweetInput[]
    createMany?: RetweetCreateManyTweetInputEnvelope
    set?: RetweetWhereUniqueInput | RetweetWhereUniqueInput[]
    disconnect?: RetweetWhereUniqueInput | RetweetWhereUniqueInput[]
    delete?: RetweetWhereUniqueInput | RetweetWhereUniqueInput[]
    connect?: RetweetWhereUniqueInput | RetweetWhereUniqueInput[]
    update?: RetweetUpdateWithWhereUniqueWithoutTweetInput | RetweetUpdateWithWhereUniqueWithoutTweetInput[]
    updateMany?: RetweetUpdateManyWithWhereWithoutTweetInput | RetweetUpdateManyWithWhereWithoutTweetInput[]
    deleteMany?: RetweetScalarWhereInput | RetweetScalarWhereInput[]
  }

  export type TweetUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<TweetCreateWithoutParentInput, TweetUncheckedCreateWithoutParentInput> | TweetCreateWithoutParentInput[] | TweetUncheckedCreateWithoutParentInput[]
    connectOrCreate?: TweetCreateOrConnectWithoutParentInput | TweetCreateOrConnectWithoutParentInput[]
    upsert?: TweetUpsertWithWhereUniqueWithoutParentInput | TweetUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: TweetCreateManyParentInputEnvelope
    set?: TweetWhereUniqueInput | TweetWhereUniqueInput[]
    disconnect?: TweetWhereUniqueInput | TweetWhereUniqueInput[]
    delete?: TweetWhereUniqueInput | TweetWhereUniqueInput[]
    connect?: TweetWhereUniqueInput | TweetWhereUniqueInput[]
    update?: TweetUpdateWithWhereUniqueWithoutParentInput | TweetUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: TweetUpdateManyWithWhereWithoutParentInput | TweetUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: TweetScalarWhereInput | TweetScalarWhereInput[]
  }

  export type MediaUncheckedUpdateManyWithoutTweetNestedInput = {
    create?: XOR<MediaCreateWithoutTweetInput, MediaUncheckedCreateWithoutTweetInput> | MediaCreateWithoutTweetInput[] | MediaUncheckedCreateWithoutTweetInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutTweetInput | MediaCreateOrConnectWithoutTweetInput[]
    upsert?: MediaUpsertWithWhereUniqueWithoutTweetInput | MediaUpsertWithWhereUniqueWithoutTweetInput[]
    createMany?: MediaCreateManyTweetInputEnvelope
    set?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    disconnect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    delete?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    update?: MediaUpdateWithWhereUniqueWithoutTweetInput | MediaUpdateWithWhereUniqueWithoutTweetInput[]
    updateMany?: MediaUpdateManyWithWhereWithoutTweetInput | MediaUpdateManyWithWhereWithoutTweetInput[]
    deleteMany?: MediaScalarWhereInput | MediaScalarWhereInput[]
  }

  export type HashtagUncheckedUpdateManyWithoutTweetsNestedInput = {
    create?: XOR<HashtagCreateWithoutTweetsInput, HashtagUncheckedCreateWithoutTweetsInput> | HashtagCreateWithoutTweetsInput[] | HashtagUncheckedCreateWithoutTweetsInput[]
    connectOrCreate?: HashtagCreateOrConnectWithoutTweetsInput | HashtagCreateOrConnectWithoutTweetsInput[]
    upsert?: HashtagUpsertWithWhereUniqueWithoutTweetsInput | HashtagUpsertWithWhereUniqueWithoutTweetsInput[]
    set?: HashtagWhereUniqueInput | HashtagWhereUniqueInput[]
    disconnect?: HashtagWhereUniqueInput | HashtagWhereUniqueInput[]
    delete?: HashtagWhereUniqueInput | HashtagWhereUniqueInput[]
    connect?: HashtagWhereUniqueInput | HashtagWhereUniqueInput[]
    update?: HashtagUpdateWithWhereUniqueWithoutTweetsInput | HashtagUpdateWithWhereUniqueWithoutTweetsInput[]
    updateMany?: HashtagUpdateManyWithWhereWithoutTweetsInput | HashtagUpdateManyWithWhereWithoutTweetsInput[]
    deleteMany?: HashtagScalarWhereInput | HashtagScalarWhereInput[]
  }

  export type LikeUncheckedUpdateManyWithoutTweetNestedInput = {
    create?: XOR<LikeCreateWithoutTweetInput, LikeUncheckedCreateWithoutTweetInput> | LikeCreateWithoutTweetInput[] | LikeUncheckedCreateWithoutTweetInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutTweetInput | LikeCreateOrConnectWithoutTweetInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutTweetInput | LikeUpsertWithWhereUniqueWithoutTweetInput[]
    createMany?: LikeCreateManyTweetInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutTweetInput | LikeUpdateWithWhereUniqueWithoutTweetInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutTweetInput | LikeUpdateManyWithWhereWithoutTweetInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type BookmarkUncheckedUpdateManyWithoutTweetNestedInput = {
    create?: XOR<BookmarkCreateWithoutTweetInput, BookmarkUncheckedCreateWithoutTweetInput> | BookmarkCreateWithoutTweetInput[] | BookmarkUncheckedCreateWithoutTweetInput[]
    connectOrCreate?: BookmarkCreateOrConnectWithoutTweetInput | BookmarkCreateOrConnectWithoutTweetInput[]
    upsert?: BookmarkUpsertWithWhereUniqueWithoutTweetInput | BookmarkUpsertWithWhereUniqueWithoutTweetInput[]
    createMany?: BookmarkCreateManyTweetInputEnvelope
    set?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    disconnect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    delete?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    update?: BookmarkUpdateWithWhereUniqueWithoutTweetInput | BookmarkUpdateWithWhereUniqueWithoutTweetInput[]
    updateMany?: BookmarkUpdateManyWithWhereWithoutTweetInput | BookmarkUpdateManyWithWhereWithoutTweetInput[]
    deleteMany?: BookmarkScalarWhereInput | BookmarkScalarWhereInput[]
  }

  export type TweetMetricsUncheckedUpdateManyWithoutTweetNestedInput = {
    create?: XOR<TweetMetricsCreateWithoutTweetInput, TweetMetricsUncheckedCreateWithoutTweetInput> | TweetMetricsCreateWithoutTweetInput[] | TweetMetricsUncheckedCreateWithoutTweetInput[]
    connectOrCreate?: TweetMetricsCreateOrConnectWithoutTweetInput | TweetMetricsCreateOrConnectWithoutTweetInput[]
    upsert?: TweetMetricsUpsertWithWhereUniqueWithoutTweetInput | TweetMetricsUpsertWithWhereUniqueWithoutTweetInput[]
    createMany?: TweetMetricsCreateManyTweetInputEnvelope
    set?: TweetMetricsWhereUniqueInput | TweetMetricsWhereUniqueInput[]
    disconnect?: TweetMetricsWhereUniqueInput | TweetMetricsWhereUniqueInput[]
    delete?: TweetMetricsWhereUniqueInput | TweetMetricsWhereUniqueInput[]
    connect?: TweetMetricsWhereUniqueInput | TweetMetricsWhereUniqueInput[]
    update?: TweetMetricsUpdateWithWhereUniqueWithoutTweetInput | TweetMetricsUpdateWithWhereUniqueWithoutTweetInput[]
    updateMany?: TweetMetricsUpdateManyWithWhereWithoutTweetInput | TweetMetricsUpdateManyWithWhereWithoutTweetInput[]
    deleteMany?: TweetMetricsScalarWhereInput | TweetMetricsScalarWhereInput[]
  }

  export type TimelineUncheckedUpdateManyWithoutTweetNestedInput = {
    create?: XOR<TimelineCreateWithoutTweetInput, TimelineUncheckedCreateWithoutTweetInput> | TimelineCreateWithoutTweetInput[] | TimelineUncheckedCreateWithoutTweetInput[]
    connectOrCreate?: TimelineCreateOrConnectWithoutTweetInput | TimelineCreateOrConnectWithoutTweetInput[]
    upsert?: TimelineUpsertWithWhereUniqueWithoutTweetInput | TimelineUpsertWithWhereUniqueWithoutTweetInput[]
    createMany?: TimelineCreateManyTweetInputEnvelope
    set?: TimelineWhereUniqueInput | TimelineWhereUniqueInput[]
    disconnect?: TimelineWhereUniqueInput | TimelineWhereUniqueInput[]
    delete?: TimelineWhereUniqueInput | TimelineWhereUniqueInput[]
    connect?: TimelineWhereUniqueInput | TimelineWhereUniqueInput[]
    update?: TimelineUpdateWithWhereUniqueWithoutTweetInput | TimelineUpdateWithWhereUniqueWithoutTweetInput[]
    updateMany?: TimelineUpdateManyWithWhereWithoutTweetInput | TimelineUpdateManyWithWhereWithoutTweetInput[]
    deleteMany?: TimelineScalarWhereInput | TimelineScalarWhereInput[]
  }

  export type TweetHashtagUncheckedUpdateManyWithoutTweetNestedInput = {
    create?: XOR<TweetHashtagCreateWithoutTweetInput, TweetHashtagUncheckedCreateWithoutTweetInput> | TweetHashtagCreateWithoutTweetInput[] | TweetHashtagUncheckedCreateWithoutTweetInput[]
    connectOrCreate?: TweetHashtagCreateOrConnectWithoutTweetInput | TweetHashtagCreateOrConnectWithoutTweetInput[]
    upsert?: TweetHashtagUpsertWithWhereUniqueWithoutTweetInput | TweetHashtagUpsertWithWhereUniqueWithoutTweetInput[]
    createMany?: TweetHashtagCreateManyTweetInputEnvelope
    set?: TweetHashtagWhereUniqueInput | TweetHashtagWhereUniqueInput[]
    disconnect?: TweetHashtagWhereUniqueInput | TweetHashtagWhereUniqueInput[]
    delete?: TweetHashtagWhereUniqueInput | TweetHashtagWhereUniqueInput[]
    connect?: TweetHashtagWhereUniqueInput | TweetHashtagWhereUniqueInput[]
    update?: TweetHashtagUpdateWithWhereUniqueWithoutTweetInput | TweetHashtagUpdateWithWhereUniqueWithoutTweetInput[]
    updateMany?: TweetHashtagUpdateManyWithWhereWithoutTweetInput | TweetHashtagUpdateManyWithWhereWithoutTweetInput[]
    deleteMany?: TweetHashtagScalarWhereInput | TweetHashtagScalarWhereInput[]
  }

  export type RetweetUncheckedUpdateManyWithoutTweetNestedInput = {
    create?: XOR<RetweetCreateWithoutTweetInput, RetweetUncheckedCreateWithoutTweetInput> | RetweetCreateWithoutTweetInput[] | RetweetUncheckedCreateWithoutTweetInput[]
    connectOrCreate?: RetweetCreateOrConnectWithoutTweetInput | RetweetCreateOrConnectWithoutTweetInput[]
    upsert?: RetweetUpsertWithWhereUniqueWithoutTweetInput | RetweetUpsertWithWhereUniqueWithoutTweetInput[]
    createMany?: RetweetCreateManyTweetInputEnvelope
    set?: RetweetWhereUniqueInput | RetweetWhereUniqueInput[]
    disconnect?: RetweetWhereUniqueInput | RetweetWhereUniqueInput[]
    delete?: RetweetWhereUniqueInput | RetweetWhereUniqueInput[]
    connect?: RetweetWhereUniqueInput | RetweetWhereUniqueInput[]
    update?: RetweetUpdateWithWhereUniqueWithoutTweetInput | RetweetUpdateWithWhereUniqueWithoutTweetInput[]
    updateMany?: RetweetUpdateManyWithWhereWithoutTweetInput | RetweetUpdateManyWithWhereWithoutTweetInput[]
    deleteMany?: RetweetScalarWhereInput | RetweetScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutFollowersInput = {
    create?: XOR<UserCreateWithoutFollowersInput, UserUncheckedCreateWithoutFollowersInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollowersInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFollowingInput = {
    create?: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollowingInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFollowersNestedInput = {
    create?: XOR<UserCreateWithoutFollowersInput, UserUncheckedCreateWithoutFollowersInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollowersInput
    upsert?: UserUpsertWithoutFollowersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFollowersInput, UserUpdateWithoutFollowersInput>, UserUncheckedUpdateWithoutFollowersInput>
  }

  export type UserUpdateOneRequiredWithoutFollowingNestedInput = {
    create?: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollowingInput
    upsert?: UserUpsertWithoutFollowingInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFollowingInput, UserUpdateWithoutFollowingInput>, UserUncheckedUpdateWithoutFollowingInput>
  }

  export type UserCreateNestedOneWithoutLikesInput = {
    create?: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikesInput
    connect?: UserWhereUniqueInput
  }

  export type TweetCreateNestedOneWithoutLikesInput = {
    create?: XOR<TweetCreateWithoutLikesInput, TweetUncheckedCreateWithoutLikesInput>
    connectOrCreate?: TweetCreateOrConnectWithoutLikesInput
    connect?: TweetWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikesInput
    upsert?: UserUpsertWithoutLikesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLikesInput, UserUpdateWithoutLikesInput>, UserUncheckedUpdateWithoutLikesInput>
  }

  export type TweetUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<TweetCreateWithoutLikesInput, TweetUncheckedCreateWithoutLikesInput>
    connectOrCreate?: TweetCreateOrConnectWithoutLikesInput
    upsert?: TweetUpsertWithoutLikesInput
    connect?: TweetWhereUniqueInput
    update?: XOR<XOR<TweetUpdateToOneWithWhereWithoutLikesInput, TweetUpdateWithoutLikesInput>, TweetUncheckedUpdateWithoutLikesInput>
  }

  export type UserCreateNestedOneWithoutBookmarksInput = {
    create?: XOR<UserCreateWithoutBookmarksInput, UserUncheckedCreateWithoutBookmarksInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookmarksInput
    connect?: UserWhereUniqueInput
  }

  export type TweetCreateNestedOneWithoutBookmarksInput = {
    create?: XOR<TweetCreateWithoutBookmarksInput, TweetUncheckedCreateWithoutBookmarksInput>
    connectOrCreate?: TweetCreateOrConnectWithoutBookmarksInput
    connect?: TweetWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBookmarksNestedInput = {
    create?: XOR<UserCreateWithoutBookmarksInput, UserUncheckedCreateWithoutBookmarksInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookmarksInput
    upsert?: UserUpsertWithoutBookmarksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookmarksInput, UserUpdateWithoutBookmarksInput>, UserUncheckedUpdateWithoutBookmarksInput>
  }

  export type TweetUpdateOneRequiredWithoutBookmarksNestedInput = {
    create?: XOR<TweetCreateWithoutBookmarksInput, TweetUncheckedCreateWithoutBookmarksInput>
    connectOrCreate?: TweetCreateOrConnectWithoutBookmarksInput
    upsert?: TweetUpsertWithoutBookmarksInput
    connect?: TweetWhereUniqueInput
    update?: XOR<XOR<TweetUpdateToOneWithWhereWithoutBookmarksInput, TweetUpdateWithoutBookmarksInput>, TweetUncheckedUpdateWithoutBookmarksInput>
  }

  export type TweetCreateNestedOneWithoutMediaInput = {
    create?: XOR<TweetCreateWithoutMediaInput, TweetUncheckedCreateWithoutMediaInput>
    connectOrCreate?: TweetCreateOrConnectWithoutMediaInput
    connect?: TweetWhereUniqueInput
  }

  export type EnumMediaTypeFieldUpdateOperationsInput = {
    set?: $Enums.MediaType
  }

  export type TweetUpdateOneRequiredWithoutMediaNestedInput = {
    create?: XOR<TweetCreateWithoutMediaInput, TweetUncheckedCreateWithoutMediaInput>
    connectOrCreate?: TweetCreateOrConnectWithoutMediaInput
    upsert?: TweetUpsertWithoutMediaInput
    connect?: TweetWhereUniqueInput
    update?: XOR<XOR<TweetUpdateToOneWithWhereWithoutMediaInput, TweetUpdateWithoutMediaInput>, TweetUncheckedUpdateWithoutMediaInput>
  }

  export type TweetCreateNestedManyWithoutHashtagsInput = {
    create?: XOR<TweetCreateWithoutHashtagsInput, TweetUncheckedCreateWithoutHashtagsInput> | TweetCreateWithoutHashtagsInput[] | TweetUncheckedCreateWithoutHashtagsInput[]
    connectOrCreate?: TweetCreateOrConnectWithoutHashtagsInput | TweetCreateOrConnectWithoutHashtagsInput[]
    connect?: TweetWhereUniqueInput | TweetWhereUniqueInput[]
  }

  export type TweetHashtagCreateNestedManyWithoutHashtagInput = {
    create?: XOR<TweetHashtagCreateWithoutHashtagInput, TweetHashtagUncheckedCreateWithoutHashtagInput> | TweetHashtagCreateWithoutHashtagInput[] | TweetHashtagUncheckedCreateWithoutHashtagInput[]
    connectOrCreate?: TweetHashtagCreateOrConnectWithoutHashtagInput | TweetHashtagCreateOrConnectWithoutHashtagInput[]
    createMany?: TweetHashtagCreateManyHashtagInputEnvelope
    connect?: TweetHashtagWhereUniqueInput | TweetHashtagWhereUniqueInput[]
  }

  export type TweetUncheckedCreateNestedManyWithoutHashtagsInput = {
    create?: XOR<TweetCreateWithoutHashtagsInput, TweetUncheckedCreateWithoutHashtagsInput> | TweetCreateWithoutHashtagsInput[] | TweetUncheckedCreateWithoutHashtagsInput[]
    connectOrCreate?: TweetCreateOrConnectWithoutHashtagsInput | TweetCreateOrConnectWithoutHashtagsInput[]
    connect?: TweetWhereUniqueInput | TweetWhereUniqueInput[]
  }

  export type TweetHashtagUncheckedCreateNestedManyWithoutHashtagInput = {
    create?: XOR<TweetHashtagCreateWithoutHashtagInput, TweetHashtagUncheckedCreateWithoutHashtagInput> | TweetHashtagCreateWithoutHashtagInput[] | TweetHashtagUncheckedCreateWithoutHashtagInput[]
    connectOrCreate?: TweetHashtagCreateOrConnectWithoutHashtagInput | TweetHashtagCreateOrConnectWithoutHashtagInput[]
    createMany?: TweetHashtagCreateManyHashtagInputEnvelope
    connect?: TweetHashtagWhereUniqueInput | TweetHashtagWhereUniqueInput[]
  }

  export type TweetUpdateManyWithoutHashtagsNestedInput = {
    create?: XOR<TweetCreateWithoutHashtagsInput, TweetUncheckedCreateWithoutHashtagsInput> | TweetCreateWithoutHashtagsInput[] | TweetUncheckedCreateWithoutHashtagsInput[]
    connectOrCreate?: TweetCreateOrConnectWithoutHashtagsInput | TweetCreateOrConnectWithoutHashtagsInput[]
    upsert?: TweetUpsertWithWhereUniqueWithoutHashtagsInput | TweetUpsertWithWhereUniqueWithoutHashtagsInput[]
    set?: TweetWhereUniqueInput | TweetWhereUniqueInput[]
    disconnect?: TweetWhereUniqueInput | TweetWhereUniqueInput[]
    delete?: TweetWhereUniqueInput | TweetWhereUniqueInput[]
    connect?: TweetWhereUniqueInput | TweetWhereUniqueInput[]
    update?: TweetUpdateWithWhereUniqueWithoutHashtagsInput | TweetUpdateWithWhereUniqueWithoutHashtagsInput[]
    updateMany?: TweetUpdateManyWithWhereWithoutHashtagsInput | TweetUpdateManyWithWhereWithoutHashtagsInput[]
    deleteMany?: TweetScalarWhereInput | TweetScalarWhereInput[]
  }

  export type TweetHashtagUpdateManyWithoutHashtagNestedInput = {
    create?: XOR<TweetHashtagCreateWithoutHashtagInput, TweetHashtagUncheckedCreateWithoutHashtagInput> | TweetHashtagCreateWithoutHashtagInput[] | TweetHashtagUncheckedCreateWithoutHashtagInput[]
    connectOrCreate?: TweetHashtagCreateOrConnectWithoutHashtagInput | TweetHashtagCreateOrConnectWithoutHashtagInput[]
    upsert?: TweetHashtagUpsertWithWhereUniqueWithoutHashtagInput | TweetHashtagUpsertWithWhereUniqueWithoutHashtagInput[]
    createMany?: TweetHashtagCreateManyHashtagInputEnvelope
    set?: TweetHashtagWhereUniqueInput | TweetHashtagWhereUniqueInput[]
    disconnect?: TweetHashtagWhereUniqueInput | TweetHashtagWhereUniqueInput[]
    delete?: TweetHashtagWhereUniqueInput | TweetHashtagWhereUniqueInput[]
    connect?: TweetHashtagWhereUniqueInput | TweetHashtagWhereUniqueInput[]
    update?: TweetHashtagUpdateWithWhereUniqueWithoutHashtagInput | TweetHashtagUpdateWithWhereUniqueWithoutHashtagInput[]
    updateMany?: TweetHashtagUpdateManyWithWhereWithoutHashtagInput | TweetHashtagUpdateManyWithWhereWithoutHashtagInput[]
    deleteMany?: TweetHashtagScalarWhereInput | TweetHashtagScalarWhereInput[]
  }

  export type TweetUncheckedUpdateManyWithoutHashtagsNestedInput = {
    create?: XOR<TweetCreateWithoutHashtagsInput, TweetUncheckedCreateWithoutHashtagsInput> | TweetCreateWithoutHashtagsInput[] | TweetUncheckedCreateWithoutHashtagsInput[]
    connectOrCreate?: TweetCreateOrConnectWithoutHashtagsInput | TweetCreateOrConnectWithoutHashtagsInput[]
    upsert?: TweetUpsertWithWhereUniqueWithoutHashtagsInput | TweetUpsertWithWhereUniqueWithoutHashtagsInput[]
    set?: TweetWhereUniqueInput | TweetWhereUniqueInput[]
    disconnect?: TweetWhereUniqueInput | TweetWhereUniqueInput[]
    delete?: TweetWhereUniqueInput | TweetWhereUniqueInput[]
    connect?: TweetWhereUniqueInput | TweetWhereUniqueInput[]
    update?: TweetUpdateWithWhereUniqueWithoutHashtagsInput | TweetUpdateWithWhereUniqueWithoutHashtagsInput[]
    updateMany?: TweetUpdateManyWithWhereWithoutHashtagsInput | TweetUpdateManyWithWhereWithoutHashtagsInput[]
    deleteMany?: TweetScalarWhereInput | TweetScalarWhereInput[]
  }

  export type TweetHashtagUncheckedUpdateManyWithoutHashtagNestedInput = {
    create?: XOR<TweetHashtagCreateWithoutHashtagInput, TweetHashtagUncheckedCreateWithoutHashtagInput> | TweetHashtagCreateWithoutHashtagInput[] | TweetHashtagUncheckedCreateWithoutHashtagInput[]
    connectOrCreate?: TweetHashtagCreateOrConnectWithoutHashtagInput | TweetHashtagCreateOrConnectWithoutHashtagInput[]
    upsert?: TweetHashtagUpsertWithWhereUniqueWithoutHashtagInput | TweetHashtagUpsertWithWhereUniqueWithoutHashtagInput[]
    createMany?: TweetHashtagCreateManyHashtagInputEnvelope
    set?: TweetHashtagWhereUniqueInput | TweetHashtagWhereUniqueInput[]
    disconnect?: TweetHashtagWhereUniqueInput | TweetHashtagWhereUniqueInput[]
    delete?: TweetHashtagWhereUniqueInput | TweetHashtagWhereUniqueInput[]
    connect?: TweetHashtagWhereUniqueInput | TweetHashtagWhereUniqueInput[]
    update?: TweetHashtagUpdateWithWhereUniqueWithoutHashtagInput | TweetHashtagUpdateWithWhereUniqueWithoutHashtagInput[]
    updateMany?: TweetHashtagUpdateManyWithWhereWithoutHashtagInput | TweetHashtagUpdateManyWithWhereWithoutHashtagInput[]
    deleteMany?: TweetHashtagScalarWhereInput | TweetHashtagScalarWhereInput[]
  }

  export type TweetCreateNestedOneWithoutTweetHashtagsInput = {
    create?: XOR<TweetCreateWithoutTweetHashtagsInput, TweetUncheckedCreateWithoutTweetHashtagsInput>
    connectOrCreate?: TweetCreateOrConnectWithoutTweetHashtagsInput
    connect?: TweetWhereUniqueInput
  }

  export type HashtagCreateNestedOneWithoutTweetHashtagsInput = {
    create?: XOR<HashtagCreateWithoutTweetHashtagsInput, HashtagUncheckedCreateWithoutTweetHashtagsInput>
    connectOrCreate?: HashtagCreateOrConnectWithoutTweetHashtagsInput
    connect?: HashtagWhereUniqueInput
  }

  export type TweetUpdateOneRequiredWithoutTweetHashtagsNestedInput = {
    create?: XOR<TweetCreateWithoutTweetHashtagsInput, TweetUncheckedCreateWithoutTweetHashtagsInput>
    connectOrCreate?: TweetCreateOrConnectWithoutTweetHashtagsInput
    upsert?: TweetUpsertWithoutTweetHashtagsInput
    connect?: TweetWhereUniqueInput
    update?: XOR<XOR<TweetUpdateToOneWithWhereWithoutTweetHashtagsInput, TweetUpdateWithoutTweetHashtagsInput>, TweetUncheckedUpdateWithoutTweetHashtagsInput>
  }

  export type HashtagUpdateOneRequiredWithoutTweetHashtagsNestedInput = {
    create?: XOR<HashtagCreateWithoutTweetHashtagsInput, HashtagUncheckedCreateWithoutTweetHashtagsInput>
    connectOrCreate?: HashtagCreateOrConnectWithoutTweetHashtagsInput
    upsert?: HashtagUpsertWithoutTweetHashtagsInput
    connect?: HashtagWhereUniqueInput
    update?: XOR<XOR<HashtagUpdateToOneWithWhereWithoutTweetHashtagsInput, HashtagUpdateWithoutTweetHashtagsInput>, HashtagUncheckedUpdateWithoutTweetHashtagsInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumNotificationTypeFieldUpdateOperationsInput = {
    set?: $Enums.NotificationType
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserCreateNestedOneWithoutRefreshTokensInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRefreshTokensNestedInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    upsert?: UserUpsertWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRefreshTokensInput, UserUpdateWithoutRefreshTokensInput>, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type TweetCreateNestedOneWithoutTweetMetricsInput = {
    create?: XOR<TweetCreateWithoutTweetMetricsInput, TweetUncheckedCreateWithoutTweetMetricsInput>
    connectOrCreate?: TweetCreateOrConnectWithoutTweetMetricsInput
    connect?: TweetWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TweetUpdateOneRequiredWithoutTweetMetricsNestedInput = {
    create?: XOR<TweetCreateWithoutTweetMetricsInput, TweetUncheckedCreateWithoutTweetMetricsInput>
    connectOrCreate?: TweetCreateOrConnectWithoutTweetMetricsInput
    upsert?: TweetUpsertWithoutTweetMetricsInput
    connect?: TweetWhereUniqueInput
    update?: XOR<XOR<TweetUpdateToOneWithWhereWithoutTweetMetricsInput, TweetUpdateWithoutTweetMetricsInput>, TweetUncheckedUpdateWithoutTweetMetricsInput>
  }

  export type UserCreateNestedOneWithoutTimelinesInput = {
    create?: XOR<UserCreateWithoutTimelinesInput, UserUncheckedCreateWithoutTimelinesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTimelinesInput
    connect?: UserWhereUniqueInput
  }

  export type TweetCreateNestedOneWithoutTimelinesInput = {
    create?: XOR<TweetCreateWithoutTimelinesInput, TweetUncheckedCreateWithoutTimelinesInput>
    connectOrCreate?: TweetCreateOrConnectWithoutTimelinesInput
    connect?: TweetWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTimelinesNestedInput = {
    create?: XOR<UserCreateWithoutTimelinesInput, UserUncheckedCreateWithoutTimelinesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTimelinesInput
    upsert?: UserUpsertWithoutTimelinesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTimelinesInput, UserUpdateWithoutTimelinesInput>, UserUncheckedUpdateWithoutTimelinesInput>
  }

  export type TweetUpdateOneRequiredWithoutTimelinesNestedInput = {
    create?: XOR<TweetCreateWithoutTimelinesInput, TweetUncheckedCreateWithoutTimelinesInput>
    connectOrCreate?: TweetCreateOrConnectWithoutTimelinesInput
    upsert?: TweetUpsertWithoutTimelinesInput
    connect?: TweetWhereUniqueInput
    update?: XOR<XOR<TweetUpdateToOneWithWhereWithoutTimelinesInput, TweetUpdateWithoutTimelinesInput>, TweetUncheckedUpdateWithoutTimelinesInput>
  }

  export type UserCreateNestedOneWithoutRetweetsInput = {
    create?: XOR<UserCreateWithoutRetweetsInput, UserUncheckedCreateWithoutRetweetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRetweetsInput
    connect?: UserWhereUniqueInput
  }

  export type TweetCreateNestedOneWithoutRetweetsInput = {
    create?: XOR<TweetCreateWithoutRetweetsInput, TweetUncheckedCreateWithoutRetweetsInput>
    connectOrCreate?: TweetCreateOrConnectWithoutRetweetsInput
    connect?: TweetWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRetweetsNestedInput = {
    create?: XOR<UserCreateWithoutRetweetsInput, UserUncheckedCreateWithoutRetweetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRetweetsInput
    upsert?: UserUpsertWithoutRetweetsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRetweetsInput, UserUpdateWithoutRetweetsInput>, UserUncheckedUpdateWithoutRetweetsInput>
  }

  export type TweetUpdateOneRequiredWithoutRetweetsNestedInput = {
    create?: XOR<TweetCreateWithoutRetweetsInput, TweetUncheckedCreateWithoutRetweetsInput>
    connectOrCreate?: TweetCreateOrConnectWithoutRetweetsInput
    upsert?: TweetUpsertWithoutRetweetsInput
    connect?: TweetWhereUniqueInput
    update?: XOR<XOR<TweetUpdateToOneWithWhereWithoutRetweetsInput, TweetUpdateWithoutRetweetsInput>, TweetUncheckedUpdateWithoutRetweetsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumTweetTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TweetType | EnumTweetTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TweetType[] | ListEnumTweetTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TweetType[] | ListEnumTweetTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTweetTypeFilter<$PrismaModel> | $Enums.TweetType
  }

  export type NestedEnumTweetTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TweetType | EnumTweetTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TweetType[] | ListEnumTweetTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TweetType[] | ListEnumTweetTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTweetTypeWithAggregatesFilter<$PrismaModel> | $Enums.TweetType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTweetTypeFilter<$PrismaModel>
    _max?: NestedEnumTweetTypeFilter<$PrismaModel>
  }

  export type NestedEnumMediaTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaType | EnumMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaTypeFilter<$PrismaModel> | $Enums.MediaType
  }

  export type NestedEnumMediaTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaType | EnumMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaTypeWithAggregatesFilter<$PrismaModel> | $Enums.MediaType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMediaTypeFilter<$PrismaModel>
    _max?: NestedEnumMediaTypeFilter<$PrismaModel>
  }

  export type NestedEnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type TweetCreateWithoutAuthorInput = {
    id?: string
    content: string
    type?: $Enums.TweetType
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: TweetCreateNestedOneWithoutRepliesInput
    replies?: TweetCreateNestedManyWithoutParentInput
    media?: MediaCreateNestedManyWithoutTweetInput
    hashtags?: HashtagCreateNestedManyWithoutTweetsInput
    likes?: LikeCreateNestedManyWithoutTweetInput
    bookmarks?: BookmarkCreateNestedManyWithoutTweetInput
    tweetMetrics?: TweetMetricsCreateNestedManyWithoutTweetInput
    timelines?: TimelineCreateNestedManyWithoutTweetInput
    tweetHashtags?: TweetHashtagCreateNestedManyWithoutTweetInput
    retweets?: RetweetCreateNestedManyWithoutTweetInput
  }

  export type TweetUncheckedCreateWithoutAuthorInput = {
    id?: string
    content: string
    type?: $Enums.TweetType
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: TweetUncheckedCreateNestedManyWithoutParentInput
    media?: MediaUncheckedCreateNestedManyWithoutTweetInput
    hashtags?: HashtagUncheckedCreateNestedManyWithoutTweetsInput
    likes?: LikeUncheckedCreateNestedManyWithoutTweetInput
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutTweetInput
    tweetMetrics?: TweetMetricsUncheckedCreateNestedManyWithoutTweetInput
    timelines?: TimelineUncheckedCreateNestedManyWithoutTweetInput
    tweetHashtags?: TweetHashtagUncheckedCreateNestedManyWithoutTweetInput
    retweets?: RetweetUncheckedCreateNestedManyWithoutTweetInput
  }

  export type TweetCreateOrConnectWithoutAuthorInput = {
    where: TweetWhereUniqueInput
    create: XOR<TweetCreateWithoutAuthorInput, TweetUncheckedCreateWithoutAuthorInput>
  }

  export type TweetCreateManyAuthorInputEnvelope = {
    data: TweetCreateManyAuthorInput | TweetCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type FollowCreateWithoutFollowerInput = {
    id?: string
    createdAt?: Date | string
    following: UserCreateNestedOneWithoutFollowingInput
  }

  export type FollowUncheckedCreateWithoutFollowerInput = {
    id?: string
    followingId: string
    createdAt?: Date | string
  }

  export type FollowCreateOrConnectWithoutFollowerInput = {
    where: FollowWhereUniqueInput
    create: XOR<FollowCreateWithoutFollowerInput, FollowUncheckedCreateWithoutFollowerInput>
  }

  export type FollowCreateManyFollowerInputEnvelope = {
    data: FollowCreateManyFollowerInput | FollowCreateManyFollowerInput[]
    skipDuplicates?: boolean
  }

  export type FollowCreateWithoutFollowingInput = {
    id?: string
    createdAt?: Date | string
    follower: UserCreateNestedOneWithoutFollowersInput
  }

  export type FollowUncheckedCreateWithoutFollowingInput = {
    id?: string
    followerId: string
    createdAt?: Date | string
  }

  export type FollowCreateOrConnectWithoutFollowingInput = {
    where: FollowWhereUniqueInput
    create: XOR<FollowCreateWithoutFollowingInput, FollowUncheckedCreateWithoutFollowingInput>
  }

  export type FollowCreateManyFollowingInputEnvelope = {
    data: FollowCreateManyFollowingInput | FollowCreateManyFollowingInput[]
    skipDuplicates?: boolean
  }

  export type LikeCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    tweet: TweetCreateNestedOneWithoutLikesInput
  }

  export type LikeUncheckedCreateWithoutUserInput = {
    id?: string
    tweetId: string
    createdAt?: Date | string
  }

  export type LikeCreateOrConnectWithoutUserInput = {
    where: LikeWhereUniqueInput
    create: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput>
  }

  export type LikeCreateManyUserInputEnvelope = {
    data: LikeCreateManyUserInput | LikeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BookmarkCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    tweet: TweetCreateNestedOneWithoutBookmarksInput
  }

  export type BookmarkUncheckedCreateWithoutUserInput = {
    id?: string
    tweetId: string
    createdAt?: Date | string
  }

  export type BookmarkCreateOrConnectWithoutUserInput = {
    where: BookmarkWhereUniqueInput
    create: XOR<BookmarkCreateWithoutUserInput, BookmarkUncheckedCreateWithoutUserInput>
  }

  export type BookmarkCreateManyUserInputEnvelope = {
    data: BookmarkCreateManyUserInput | BookmarkCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    actorId?: string | null
    type: $Enums.NotificationType
    tweetId?: string | null
    createdAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    actorId?: string | null
    type: $Enums.NotificationType
    tweetId?: string | null
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RefreshTokenCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenUncheckedCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenCreateOrConnectWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenCreateManyUserInputEnvelope = {
    data: RefreshTokenCreateManyUserInput | RefreshTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TimelineCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    tweet: TweetCreateNestedOneWithoutTimelinesInput
  }

  export type TimelineUncheckedCreateWithoutUserInput = {
    id?: string
    tweetId: string
    createdAt?: Date | string
  }

  export type TimelineCreateOrConnectWithoutUserInput = {
    where: TimelineWhereUniqueInput
    create: XOR<TimelineCreateWithoutUserInput, TimelineUncheckedCreateWithoutUserInput>
  }

  export type TimelineCreateManyUserInputEnvelope = {
    data: TimelineCreateManyUserInput | TimelineCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RetweetCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    tweet: TweetCreateNestedOneWithoutRetweetsInput
  }

  export type RetweetUncheckedCreateWithoutUserInput = {
    id?: string
    tweetId: string
    createdAt?: Date | string
  }

  export type RetweetCreateOrConnectWithoutUserInput = {
    where: RetweetWhereUniqueInput
    create: XOR<RetweetCreateWithoutUserInput, RetweetUncheckedCreateWithoutUserInput>
  }

  export type RetweetCreateManyUserInputEnvelope = {
    data: RetweetCreateManyUserInput | RetweetCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TweetUpsertWithWhereUniqueWithoutAuthorInput = {
    where: TweetWhereUniqueInput
    update: XOR<TweetUpdateWithoutAuthorInput, TweetUncheckedUpdateWithoutAuthorInput>
    create: XOR<TweetCreateWithoutAuthorInput, TweetUncheckedCreateWithoutAuthorInput>
  }

  export type TweetUpdateWithWhereUniqueWithoutAuthorInput = {
    where: TweetWhereUniqueInput
    data: XOR<TweetUpdateWithoutAuthorInput, TweetUncheckedUpdateWithoutAuthorInput>
  }

  export type TweetUpdateManyWithWhereWithoutAuthorInput = {
    where: TweetScalarWhereInput
    data: XOR<TweetUpdateManyMutationInput, TweetUncheckedUpdateManyWithoutAuthorInput>
  }

  export type TweetScalarWhereInput = {
    AND?: TweetScalarWhereInput | TweetScalarWhereInput[]
    OR?: TweetScalarWhereInput[]
    NOT?: TweetScalarWhereInput | TweetScalarWhereInput[]
    id?: StringFilter<"Tweet"> | string
    content?: StringFilter<"Tweet"> | string
    type?: EnumTweetTypeFilter<"Tweet"> | $Enums.TweetType
    authorId?: StringFilter<"Tweet"> | string
    parentId?: StringNullableFilter<"Tweet"> | string | null
    createdAt?: DateTimeFilter<"Tweet"> | Date | string
    updatedAt?: DateTimeFilter<"Tweet"> | Date | string
  }

  export type FollowUpsertWithWhereUniqueWithoutFollowerInput = {
    where: FollowWhereUniqueInput
    update: XOR<FollowUpdateWithoutFollowerInput, FollowUncheckedUpdateWithoutFollowerInput>
    create: XOR<FollowCreateWithoutFollowerInput, FollowUncheckedCreateWithoutFollowerInput>
  }

  export type FollowUpdateWithWhereUniqueWithoutFollowerInput = {
    where: FollowWhereUniqueInput
    data: XOR<FollowUpdateWithoutFollowerInput, FollowUncheckedUpdateWithoutFollowerInput>
  }

  export type FollowUpdateManyWithWhereWithoutFollowerInput = {
    where: FollowScalarWhereInput
    data: XOR<FollowUpdateManyMutationInput, FollowUncheckedUpdateManyWithoutFollowerInput>
  }

  export type FollowScalarWhereInput = {
    AND?: FollowScalarWhereInput | FollowScalarWhereInput[]
    OR?: FollowScalarWhereInput[]
    NOT?: FollowScalarWhereInput | FollowScalarWhereInput[]
    id?: StringFilter<"Follow"> | string
    followerId?: StringFilter<"Follow"> | string
    followingId?: StringFilter<"Follow"> | string
    createdAt?: DateTimeFilter<"Follow"> | Date | string
  }

  export type FollowUpsertWithWhereUniqueWithoutFollowingInput = {
    where: FollowWhereUniqueInput
    update: XOR<FollowUpdateWithoutFollowingInput, FollowUncheckedUpdateWithoutFollowingInput>
    create: XOR<FollowCreateWithoutFollowingInput, FollowUncheckedCreateWithoutFollowingInput>
  }

  export type FollowUpdateWithWhereUniqueWithoutFollowingInput = {
    where: FollowWhereUniqueInput
    data: XOR<FollowUpdateWithoutFollowingInput, FollowUncheckedUpdateWithoutFollowingInput>
  }

  export type FollowUpdateManyWithWhereWithoutFollowingInput = {
    where: FollowScalarWhereInput
    data: XOR<FollowUpdateManyMutationInput, FollowUncheckedUpdateManyWithoutFollowingInput>
  }

  export type LikeUpsertWithWhereUniqueWithoutUserInput = {
    where: LikeWhereUniqueInput
    update: XOR<LikeUpdateWithoutUserInput, LikeUncheckedUpdateWithoutUserInput>
    create: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput>
  }

  export type LikeUpdateWithWhereUniqueWithoutUserInput = {
    where: LikeWhereUniqueInput
    data: XOR<LikeUpdateWithoutUserInput, LikeUncheckedUpdateWithoutUserInput>
  }

  export type LikeUpdateManyWithWhereWithoutUserInput = {
    where: LikeScalarWhereInput
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyWithoutUserInput>
  }

  export type LikeScalarWhereInput = {
    AND?: LikeScalarWhereInput | LikeScalarWhereInput[]
    OR?: LikeScalarWhereInput[]
    NOT?: LikeScalarWhereInput | LikeScalarWhereInput[]
    id?: StringFilter<"Like"> | string
    userId?: StringFilter<"Like"> | string
    tweetId?: StringFilter<"Like"> | string
    createdAt?: DateTimeFilter<"Like"> | Date | string
  }

  export type BookmarkUpsertWithWhereUniqueWithoutUserInput = {
    where: BookmarkWhereUniqueInput
    update: XOR<BookmarkUpdateWithoutUserInput, BookmarkUncheckedUpdateWithoutUserInput>
    create: XOR<BookmarkCreateWithoutUserInput, BookmarkUncheckedCreateWithoutUserInput>
  }

  export type BookmarkUpdateWithWhereUniqueWithoutUserInput = {
    where: BookmarkWhereUniqueInput
    data: XOR<BookmarkUpdateWithoutUserInput, BookmarkUncheckedUpdateWithoutUserInput>
  }

  export type BookmarkUpdateManyWithWhereWithoutUserInput = {
    where: BookmarkScalarWhereInput
    data: XOR<BookmarkUpdateManyMutationInput, BookmarkUncheckedUpdateManyWithoutUserInput>
  }

  export type BookmarkScalarWhereInput = {
    AND?: BookmarkScalarWhereInput | BookmarkScalarWhereInput[]
    OR?: BookmarkScalarWhereInput[]
    NOT?: BookmarkScalarWhereInput | BookmarkScalarWhereInput[]
    id?: StringFilter<"Bookmark"> | string
    userId?: StringFilter<"Bookmark"> | string
    tweetId?: StringFilter<"Bookmark"> | string
    createdAt?: DateTimeFilter<"Bookmark"> | Date | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    actorId?: StringNullableFilter<"Notification"> | string | null
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    tweetId?: StringNullableFilter<"Notification"> | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type RefreshTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    update: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    data: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
  }

  export type RefreshTokenUpdateManyWithWhereWithoutUserInput = {
    where: RefreshTokenScalarWhereInput
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type RefreshTokenScalarWhereInput = {
    AND?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    OR?: RefreshTokenScalarWhereInput[]
    NOT?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    userId?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
  }

  export type TimelineUpsertWithWhereUniqueWithoutUserInput = {
    where: TimelineWhereUniqueInput
    update: XOR<TimelineUpdateWithoutUserInput, TimelineUncheckedUpdateWithoutUserInput>
    create: XOR<TimelineCreateWithoutUserInput, TimelineUncheckedCreateWithoutUserInput>
  }

  export type TimelineUpdateWithWhereUniqueWithoutUserInput = {
    where: TimelineWhereUniqueInput
    data: XOR<TimelineUpdateWithoutUserInput, TimelineUncheckedUpdateWithoutUserInput>
  }

  export type TimelineUpdateManyWithWhereWithoutUserInput = {
    where: TimelineScalarWhereInput
    data: XOR<TimelineUpdateManyMutationInput, TimelineUncheckedUpdateManyWithoutUserInput>
  }

  export type TimelineScalarWhereInput = {
    AND?: TimelineScalarWhereInput | TimelineScalarWhereInput[]
    OR?: TimelineScalarWhereInput[]
    NOT?: TimelineScalarWhereInput | TimelineScalarWhereInput[]
    id?: StringFilter<"Timeline"> | string
    userId?: StringFilter<"Timeline"> | string
    tweetId?: StringFilter<"Timeline"> | string
    createdAt?: DateTimeFilter<"Timeline"> | Date | string
  }

  export type RetweetUpsertWithWhereUniqueWithoutUserInput = {
    where: RetweetWhereUniqueInput
    update: XOR<RetweetUpdateWithoutUserInput, RetweetUncheckedUpdateWithoutUserInput>
    create: XOR<RetweetCreateWithoutUserInput, RetweetUncheckedCreateWithoutUserInput>
  }

  export type RetweetUpdateWithWhereUniqueWithoutUserInput = {
    where: RetweetWhereUniqueInput
    data: XOR<RetweetUpdateWithoutUserInput, RetweetUncheckedUpdateWithoutUserInput>
  }

  export type RetweetUpdateManyWithWhereWithoutUserInput = {
    where: RetweetScalarWhereInput
    data: XOR<RetweetUpdateManyMutationInput, RetweetUncheckedUpdateManyWithoutUserInput>
  }

  export type RetweetScalarWhereInput = {
    AND?: RetweetScalarWhereInput | RetweetScalarWhereInput[]
    OR?: RetweetScalarWhereInput[]
    NOT?: RetweetScalarWhereInput | RetweetScalarWhereInput[]
    id?: StringFilter<"Retweet"> | string
    userId?: StringFilter<"Retweet"> | string
    tweetId?: StringFilter<"Retweet"> | string
    createdAt?: DateTimeFilter<"Retweet"> | Date | string
  }

  export type UserCreateWithoutTweetsInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    bio?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    followers?: FollowCreateNestedManyWithoutFollowerInput
    following?: FollowCreateNestedManyWithoutFollowingInput
    likes?: LikeCreateNestedManyWithoutUserInput
    bookmarks?: BookmarkCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    timelines?: TimelineCreateNestedManyWithoutUserInput
    retweets?: RetweetCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTweetsInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    bio?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    followers?: FollowUncheckedCreateNestedManyWithoutFollowerInput
    following?: FollowUncheckedCreateNestedManyWithoutFollowingInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    timelines?: TimelineUncheckedCreateNestedManyWithoutUserInput
    retweets?: RetweetUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTweetsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTweetsInput, UserUncheckedCreateWithoutTweetsInput>
  }

  export type TweetCreateWithoutRepliesInput = {
    id?: string
    content: string
    type?: $Enums.TweetType
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutTweetsInput
    parent?: TweetCreateNestedOneWithoutRepliesInput
    media?: MediaCreateNestedManyWithoutTweetInput
    hashtags?: HashtagCreateNestedManyWithoutTweetsInput
    likes?: LikeCreateNestedManyWithoutTweetInput
    bookmarks?: BookmarkCreateNestedManyWithoutTweetInput
    tweetMetrics?: TweetMetricsCreateNestedManyWithoutTweetInput
    timelines?: TimelineCreateNestedManyWithoutTweetInput
    tweetHashtags?: TweetHashtagCreateNestedManyWithoutTweetInput
    retweets?: RetweetCreateNestedManyWithoutTweetInput
  }

  export type TweetUncheckedCreateWithoutRepliesInput = {
    id?: string
    content: string
    type?: $Enums.TweetType
    authorId: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: MediaUncheckedCreateNestedManyWithoutTweetInput
    hashtags?: HashtagUncheckedCreateNestedManyWithoutTweetsInput
    likes?: LikeUncheckedCreateNestedManyWithoutTweetInput
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutTweetInput
    tweetMetrics?: TweetMetricsUncheckedCreateNestedManyWithoutTweetInput
    timelines?: TimelineUncheckedCreateNestedManyWithoutTweetInput
    tweetHashtags?: TweetHashtagUncheckedCreateNestedManyWithoutTweetInput
    retweets?: RetweetUncheckedCreateNestedManyWithoutTweetInput
  }

  export type TweetCreateOrConnectWithoutRepliesInput = {
    where: TweetWhereUniqueInput
    create: XOR<TweetCreateWithoutRepliesInput, TweetUncheckedCreateWithoutRepliesInput>
  }

  export type TweetCreateWithoutParentInput = {
    id?: string
    content: string
    type?: $Enums.TweetType
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutTweetsInput
    replies?: TweetCreateNestedManyWithoutParentInput
    media?: MediaCreateNestedManyWithoutTweetInput
    hashtags?: HashtagCreateNestedManyWithoutTweetsInput
    likes?: LikeCreateNestedManyWithoutTweetInput
    bookmarks?: BookmarkCreateNestedManyWithoutTweetInput
    tweetMetrics?: TweetMetricsCreateNestedManyWithoutTweetInput
    timelines?: TimelineCreateNestedManyWithoutTweetInput
    tweetHashtags?: TweetHashtagCreateNestedManyWithoutTweetInput
    retweets?: RetweetCreateNestedManyWithoutTweetInput
  }

  export type TweetUncheckedCreateWithoutParentInput = {
    id?: string
    content: string
    type?: $Enums.TweetType
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: TweetUncheckedCreateNestedManyWithoutParentInput
    media?: MediaUncheckedCreateNestedManyWithoutTweetInput
    hashtags?: HashtagUncheckedCreateNestedManyWithoutTweetsInput
    likes?: LikeUncheckedCreateNestedManyWithoutTweetInput
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutTweetInput
    tweetMetrics?: TweetMetricsUncheckedCreateNestedManyWithoutTweetInput
    timelines?: TimelineUncheckedCreateNestedManyWithoutTweetInput
    tweetHashtags?: TweetHashtagUncheckedCreateNestedManyWithoutTweetInput
    retweets?: RetweetUncheckedCreateNestedManyWithoutTweetInput
  }

  export type TweetCreateOrConnectWithoutParentInput = {
    where: TweetWhereUniqueInput
    create: XOR<TweetCreateWithoutParentInput, TweetUncheckedCreateWithoutParentInput>
  }

  export type TweetCreateManyParentInputEnvelope = {
    data: TweetCreateManyParentInput | TweetCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type MediaCreateWithoutTweetInput = {
    id?: string
    url: string
    type: $Enums.MediaType
    createdAt?: Date | string
  }

  export type MediaUncheckedCreateWithoutTweetInput = {
    id?: string
    url: string
    type: $Enums.MediaType
    createdAt?: Date | string
  }

  export type MediaCreateOrConnectWithoutTweetInput = {
    where: MediaWhereUniqueInput
    create: XOR<MediaCreateWithoutTweetInput, MediaUncheckedCreateWithoutTweetInput>
  }

  export type MediaCreateManyTweetInputEnvelope = {
    data: MediaCreateManyTweetInput | MediaCreateManyTweetInput[]
    skipDuplicates?: boolean
  }

  export type HashtagCreateWithoutTweetsInput = {
    id?: string
    name: string
    tweetHashtags?: TweetHashtagCreateNestedManyWithoutHashtagInput
  }

  export type HashtagUncheckedCreateWithoutTweetsInput = {
    id?: string
    name: string
    tweetHashtags?: TweetHashtagUncheckedCreateNestedManyWithoutHashtagInput
  }

  export type HashtagCreateOrConnectWithoutTweetsInput = {
    where: HashtagWhereUniqueInput
    create: XOR<HashtagCreateWithoutTweetsInput, HashtagUncheckedCreateWithoutTweetsInput>
  }

  export type LikeCreateWithoutTweetInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLikesInput
  }

  export type LikeUncheckedCreateWithoutTweetInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type LikeCreateOrConnectWithoutTweetInput = {
    where: LikeWhereUniqueInput
    create: XOR<LikeCreateWithoutTweetInput, LikeUncheckedCreateWithoutTweetInput>
  }

  export type LikeCreateManyTweetInputEnvelope = {
    data: LikeCreateManyTweetInput | LikeCreateManyTweetInput[]
    skipDuplicates?: boolean
  }

  export type BookmarkCreateWithoutTweetInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBookmarksInput
  }

  export type BookmarkUncheckedCreateWithoutTweetInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type BookmarkCreateOrConnectWithoutTweetInput = {
    where: BookmarkWhereUniqueInput
    create: XOR<BookmarkCreateWithoutTweetInput, BookmarkUncheckedCreateWithoutTweetInput>
  }

  export type BookmarkCreateManyTweetInputEnvelope = {
    data: BookmarkCreateManyTweetInput | BookmarkCreateManyTweetInput[]
    skipDuplicates?: boolean
  }

  export type TweetMetricsCreateWithoutTweetInput = {
    likesCount?: number
    repliesCount?: number
    retweetsCount?: number
  }

  export type TweetMetricsUncheckedCreateWithoutTweetInput = {
    likesCount?: number
    repliesCount?: number
    retweetsCount?: number
  }

  export type TweetMetricsCreateOrConnectWithoutTweetInput = {
    where: TweetMetricsWhereUniqueInput
    create: XOR<TweetMetricsCreateWithoutTweetInput, TweetMetricsUncheckedCreateWithoutTweetInput>
  }

  export type TweetMetricsCreateManyTweetInputEnvelope = {
    data: TweetMetricsCreateManyTweetInput | TweetMetricsCreateManyTweetInput[]
    skipDuplicates?: boolean
  }

  export type TimelineCreateWithoutTweetInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTimelinesInput
  }

  export type TimelineUncheckedCreateWithoutTweetInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type TimelineCreateOrConnectWithoutTweetInput = {
    where: TimelineWhereUniqueInput
    create: XOR<TimelineCreateWithoutTweetInput, TimelineUncheckedCreateWithoutTweetInput>
  }

  export type TimelineCreateManyTweetInputEnvelope = {
    data: TimelineCreateManyTweetInput | TimelineCreateManyTweetInput[]
    skipDuplicates?: boolean
  }

  export type TweetHashtagCreateWithoutTweetInput = {
    hashtag: HashtagCreateNestedOneWithoutTweetHashtagsInput
  }

  export type TweetHashtagUncheckedCreateWithoutTweetInput = {
    hashtagId: string
  }

  export type TweetHashtagCreateOrConnectWithoutTweetInput = {
    where: TweetHashtagWhereUniqueInput
    create: XOR<TweetHashtagCreateWithoutTweetInput, TweetHashtagUncheckedCreateWithoutTweetInput>
  }

  export type TweetHashtagCreateManyTweetInputEnvelope = {
    data: TweetHashtagCreateManyTweetInput | TweetHashtagCreateManyTweetInput[]
    skipDuplicates?: boolean
  }

  export type RetweetCreateWithoutTweetInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutRetweetsInput
  }

  export type RetweetUncheckedCreateWithoutTweetInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type RetweetCreateOrConnectWithoutTweetInput = {
    where: RetweetWhereUniqueInput
    create: XOR<RetweetCreateWithoutTweetInput, RetweetUncheckedCreateWithoutTweetInput>
  }

  export type RetweetCreateManyTweetInputEnvelope = {
    data: RetweetCreateManyTweetInput | RetweetCreateManyTweetInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTweetsInput = {
    update: XOR<UserUpdateWithoutTweetsInput, UserUncheckedUpdateWithoutTweetsInput>
    create: XOR<UserCreateWithoutTweetsInput, UserUncheckedCreateWithoutTweetsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTweetsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTweetsInput, UserUncheckedUpdateWithoutTweetsInput>
  }

  export type UserUpdateWithoutTweetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followers?: FollowUpdateManyWithoutFollowerNestedInput
    following?: FollowUpdateManyWithoutFollowingNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    bookmarks?: BookmarkUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    timelines?: TimelineUpdateManyWithoutUserNestedInput
    retweets?: RetweetUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTweetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followers?: FollowUncheckedUpdateManyWithoutFollowerNestedInput
    following?: FollowUncheckedUpdateManyWithoutFollowingNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    bookmarks?: BookmarkUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    timelines?: TimelineUncheckedUpdateManyWithoutUserNestedInput
    retweets?: RetweetUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TweetUpsertWithoutRepliesInput = {
    update: XOR<TweetUpdateWithoutRepliesInput, TweetUncheckedUpdateWithoutRepliesInput>
    create: XOR<TweetCreateWithoutRepliesInput, TweetUncheckedCreateWithoutRepliesInput>
    where?: TweetWhereInput
  }

  export type TweetUpdateToOneWithWhereWithoutRepliesInput = {
    where?: TweetWhereInput
    data: XOR<TweetUpdateWithoutRepliesInput, TweetUncheckedUpdateWithoutRepliesInput>
  }

  export type TweetUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumTweetTypeFieldUpdateOperationsInput | $Enums.TweetType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutTweetsNestedInput
    parent?: TweetUpdateOneWithoutRepliesNestedInput
    media?: MediaUpdateManyWithoutTweetNestedInput
    hashtags?: HashtagUpdateManyWithoutTweetsNestedInput
    likes?: LikeUpdateManyWithoutTweetNestedInput
    bookmarks?: BookmarkUpdateManyWithoutTweetNestedInput
    tweetMetrics?: TweetMetricsUpdateManyWithoutTweetNestedInput
    timelines?: TimelineUpdateManyWithoutTweetNestedInput
    tweetHashtags?: TweetHashtagUpdateManyWithoutTweetNestedInput
    retweets?: RetweetUpdateManyWithoutTweetNestedInput
  }

  export type TweetUncheckedUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumTweetTypeFieldUpdateOperationsInput | $Enums.TweetType
    authorId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: MediaUncheckedUpdateManyWithoutTweetNestedInput
    hashtags?: HashtagUncheckedUpdateManyWithoutTweetsNestedInput
    likes?: LikeUncheckedUpdateManyWithoutTweetNestedInput
    bookmarks?: BookmarkUncheckedUpdateManyWithoutTweetNestedInput
    tweetMetrics?: TweetMetricsUncheckedUpdateManyWithoutTweetNestedInput
    timelines?: TimelineUncheckedUpdateManyWithoutTweetNestedInput
    tweetHashtags?: TweetHashtagUncheckedUpdateManyWithoutTweetNestedInput
    retweets?: RetweetUncheckedUpdateManyWithoutTweetNestedInput
  }

  export type TweetUpsertWithWhereUniqueWithoutParentInput = {
    where: TweetWhereUniqueInput
    update: XOR<TweetUpdateWithoutParentInput, TweetUncheckedUpdateWithoutParentInput>
    create: XOR<TweetCreateWithoutParentInput, TweetUncheckedCreateWithoutParentInput>
  }

  export type TweetUpdateWithWhereUniqueWithoutParentInput = {
    where: TweetWhereUniqueInput
    data: XOR<TweetUpdateWithoutParentInput, TweetUncheckedUpdateWithoutParentInput>
  }

  export type TweetUpdateManyWithWhereWithoutParentInput = {
    where: TweetScalarWhereInput
    data: XOR<TweetUpdateManyMutationInput, TweetUncheckedUpdateManyWithoutParentInput>
  }

  export type MediaUpsertWithWhereUniqueWithoutTweetInput = {
    where: MediaWhereUniqueInput
    update: XOR<MediaUpdateWithoutTweetInput, MediaUncheckedUpdateWithoutTweetInput>
    create: XOR<MediaCreateWithoutTweetInput, MediaUncheckedCreateWithoutTweetInput>
  }

  export type MediaUpdateWithWhereUniqueWithoutTweetInput = {
    where: MediaWhereUniqueInput
    data: XOR<MediaUpdateWithoutTweetInput, MediaUncheckedUpdateWithoutTweetInput>
  }

  export type MediaUpdateManyWithWhereWithoutTweetInput = {
    where: MediaScalarWhereInput
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyWithoutTweetInput>
  }

  export type MediaScalarWhereInput = {
    AND?: MediaScalarWhereInput | MediaScalarWhereInput[]
    OR?: MediaScalarWhereInput[]
    NOT?: MediaScalarWhereInput | MediaScalarWhereInput[]
    id?: StringFilter<"Media"> | string
    tweetId?: StringFilter<"Media"> | string
    url?: StringFilter<"Media"> | string
    type?: EnumMediaTypeFilter<"Media"> | $Enums.MediaType
    createdAt?: DateTimeFilter<"Media"> | Date | string
  }

  export type HashtagUpsertWithWhereUniqueWithoutTweetsInput = {
    where: HashtagWhereUniqueInput
    update: XOR<HashtagUpdateWithoutTweetsInput, HashtagUncheckedUpdateWithoutTweetsInput>
    create: XOR<HashtagCreateWithoutTweetsInput, HashtagUncheckedCreateWithoutTweetsInput>
  }

  export type HashtagUpdateWithWhereUniqueWithoutTweetsInput = {
    where: HashtagWhereUniqueInput
    data: XOR<HashtagUpdateWithoutTweetsInput, HashtagUncheckedUpdateWithoutTweetsInput>
  }

  export type HashtagUpdateManyWithWhereWithoutTweetsInput = {
    where: HashtagScalarWhereInput
    data: XOR<HashtagUpdateManyMutationInput, HashtagUncheckedUpdateManyWithoutTweetsInput>
  }

  export type HashtagScalarWhereInput = {
    AND?: HashtagScalarWhereInput | HashtagScalarWhereInput[]
    OR?: HashtagScalarWhereInput[]
    NOT?: HashtagScalarWhereInput | HashtagScalarWhereInput[]
    id?: StringFilter<"Hashtag"> | string
    name?: StringFilter<"Hashtag"> | string
  }

  export type LikeUpsertWithWhereUniqueWithoutTweetInput = {
    where: LikeWhereUniqueInput
    update: XOR<LikeUpdateWithoutTweetInput, LikeUncheckedUpdateWithoutTweetInput>
    create: XOR<LikeCreateWithoutTweetInput, LikeUncheckedCreateWithoutTweetInput>
  }

  export type LikeUpdateWithWhereUniqueWithoutTweetInput = {
    where: LikeWhereUniqueInput
    data: XOR<LikeUpdateWithoutTweetInput, LikeUncheckedUpdateWithoutTweetInput>
  }

  export type LikeUpdateManyWithWhereWithoutTweetInput = {
    where: LikeScalarWhereInput
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyWithoutTweetInput>
  }

  export type BookmarkUpsertWithWhereUniqueWithoutTweetInput = {
    where: BookmarkWhereUniqueInput
    update: XOR<BookmarkUpdateWithoutTweetInput, BookmarkUncheckedUpdateWithoutTweetInput>
    create: XOR<BookmarkCreateWithoutTweetInput, BookmarkUncheckedCreateWithoutTweetInput>
  }

  export type BookmarkUpdateWithWhereUniqueWithoutTweetInput = {
    where: BookmarkWhereUniqueInput
    data: XOR<BookmarkUpdateWithoutTweetInput, BookmarkUncheckedUpdateWithoutTweetInput>
  }

  export type BookmarkUpdateManyWithWhereWithoutTweetInput = {
    where: BookmarkScalarWhereInput
    data: XOR<BookmarkUpdateManyMutationInput, BookmarkUncheckedUpdateManyWithoutTweetInput>
  }

  export type TweetMetricsUpsertWithWhereUniqueWithoutTweetInput = {
    where: TweetMetricsWhereUniqueInput
    update: XOR<TweetMetricsUpdateWithoutTweetInput, TweetMetricsUncheckedUpdateWithoutTweetInput>
    create: XOR<TweetMetricsCreateWithoutTweetInput, TweetMetricsUncheckedCreateWithoutTweetInput>
  }

  export type TweetMetricsUpdateWithWhereUniqueWithoutTweetInput = {
    where: TweetMetricsWhereUniqueInput
    data: XOR<TweetMetricsUpdateWithoutTweetInput, TweetMetricsUncheckedUpdateWithoutTweetInput>
  }

  export type TweetMetricsUpdateManyWithWhereWithoutTweetInput = {
    where: TweetMetricsScalarWhereInput
    data: XOR<TweetMetricsUpdateManyMutationInput, TweetMetricsUncheckedUpdateManyWithoutTweetInput>
  }

  export type TweetMetricsScalarWhereInput = {
    AND?: TweetMetricsScalarWhereInput | TweetMetricsScalarWhereInput[]
    OR?: TweetMetricsScalarWhereInput[]
    NOT?: TweetMetricsScalarWhereInput | TweetMetricsScalarWhereInput[]
    tweetId?: StringFilter<"TweetMetrics"> | string
    likesCount?: IntFilter<"TweetMetrics"> | number
    repliesCount?: IntFilter<"TweetMetrics"> | number
    retweetsCount?: IntFilter<"TweetMetrics"> | number
  }

  export type TimelineUpsertWithWhereUniqueWithoutTweetInput = {
    where: TimelineWhereUniqueInput
    update: XOR<TimelineUpdateWithoutTweetInput, TimelineUncheckedUpdateWithoutTweetInput>
    create: XOR<TimelineCreateWithoutTweetInput, TimelineUncheckedCreateWithoutTweetInput>
  }

  export type TimelineUpdateWithWhereUniqueWithoutTweetInput = {
    where: TimelineWhereUniqueInput
    data: XOR<TimelineUpdateWithoutTweetInput, TimelineUncheckedUpdateWithoutTweetInput>
  }

  export type TimelineUpdateManyWithWhereWithoutTweetInput = {
    where: TimelineScalarWhereInput
    data: XOR<TimelineUpdateManyMutationInput, TimelineUncheckedUpdateManyWithoutTweetInput>
  }

  export type TweetHashtagUpsertWithWhereUniqueWithoutTweetInput = {
    where: TweetHashtagWhereUniqueInput
    update: XOR<TweetHashtagUpdateWithoutTweetInput, TweetHashtagUncheckedUpdateWithoutTweetInput>
    create: XOR<TweetHashtagCreateWithoutTweetInput, TweetHashtagUncheckedCreateWithoutTweetInput>
  }

  export type TweetHashtagUpdateWithWhereUniqueWithoutTweetInput = {
    where: TweetHashtagWhereUniqueInput
    data: XOR<TweetHashtagUpdateWithoutTweetInput, TweetHashtagUncheckedUpdateWithoutTweetInput>
  }

  export type TweetHashtagUpdateManyWithWhereWithoutTweetInput = {
    where: TweetHashtagScalarWhereInput
    data: XOR<TweetHashtagUpdateManyMutationInput, TweetHashtagUncheckedUpdateManyWithoutTweetInput>
  }

  export type TweetHashtagScalarWhereInput = {
    AND?: TweetHashtagScalarWhereInput | TweetHashtagScalarWhereInput[]
    OR?: TweetHashtagScalarWhereInput[]
    NOT?: TweetHashtagScalarWhereInput | TweetHashtagScalarWhereInput[]
    tweetId?: StringFilter<"TweetHashtag"> | string
    hashtagId?: StringFilter<"TweetHashtag"> | string
  }

  export type RetweetUpsertWithWhereUniqueWithoutTweetInput = {
    where: RetweetWhereUniqueInput
    update: XOR<RetweetUpdateWithoutTweetInput, RetweetUncheckedUpdateWithoutTweetInput>
    create: XOR<RetweetCreateWithoutTweetInput, RetweetUncheckedCreateWithoutTweetInput>
  }

  export type RetweetUpdateWithWhereUniqueWithoutTweetInput = {
    where: RetweetWhereUniqueInput
    data: XOR<RetweetUpdateWithoutTweetInput, RetweetUncheckedUpdateWithoutTweetInput>
  }

  export type RetweetUpdateManyWithWhereWithoutTweetInput = {
    where: RetweetScalarWhereInput
    data: XOR<RetweetUpdateManyMutationInput, RetweetUncheckedUpdateManyWithoutTweetInput>
  }

  export type UserCreateWithoutFollowersInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    bio?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tweets?: TweetCreateNestedManyWithoutAuthorInput
    following?: FollowCreateNestedManyWithoutFollowingInput
    likes?: LikeCreateNestedManyWithoutUserInput
    bookmarks?: BookmarkCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    timelines?: TimelineCreateNestedManyWithoutUserInput
    retweets?: RetweetCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFollowersInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    bio?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tweets?: TweetUncheckedCreateNestedManyWithoutAuthorInput
    following?: FollowUncheckedCreateNestedManyWithoutFollowingInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    timelines?: TimelineUncheckedCreateNestedManyWithoutUserInput
    retweets?: RetweetUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFollowersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFollowersInput, UserUncheckedCreateWithoutFollowersInput>
  }

  export type UserCreateWithoutFollowingInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    bio?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tweets?: TweetCreateNestedManyWithoutAuthorInput
    followers?: FollowCreateNestedManyWithoutFollowerInput
    likes?: LikeCreateNestedManyWithoutUserInput
    bookmarks?: BookmarkCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    timelines?: TimelineCreateNestedManyWithoutUserInput
    retweets?: RetweetCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFollowingInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    bio?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tweets?: TweetUncheckedCreateNestedManyWithoutAuthorInput
    followers?: FollowUncheckedCreateNestedManyWithoutFollowerInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    timelines?: TimelineUncheckedCreateNestedManyWithoutUserInput
    retweets?: RetweetUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFollowingInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput>
  }

  export type UserUpsertWithoutFollowersInput = {
    update: XOR<UserUpdateWithoutFollowersInput, UserUncheckedUpdateWithoutFollowersInput>
    create: XOR<UserCreateWithoutFollowersInput, UserUncheckedCreateWithoutFollowersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFollowersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFollowersInput, UserUncheckedUpdateWithoutFollowersInput>
  }

  export type UserUpdateWithoutFollowersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tweets?: TweetUpdateManyWithoutAuthorNestedInput
    following?: FollowUpdateManyWithoutFollowingNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    bookmarks?: BookmarkUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    timelines?: TimelineUpdateManyWithoutUserNestedInput
    retweets?: RetweetUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFollowersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tweets?: TweetUncheckedUpdateManyWithoutAuthorNestedInput
    following?: FollowUncheckedUpdateManyWithoutFollowingNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    bookmarks?: BookmarkUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    timelines?: TimelineUncheckedUpdateManyWithoutUserNestedInput
    retweets?: RetweetUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutFollowingInput = {
    update: XOR<UserUpdateWithoutFollowingInput, UserUncheckedUpdateWithoutFollowingInput>
    create: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFollowingInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFollowingInput, UserUncheckedUpdateWithoutFollowingInput>
  }

  export type UserUpdateWithoutFollowingInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tweets?: TweetUpdateManyWithoutAuthorNestedInput
    followers?: FollowUpdateManyWithoutFollowerNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    bookmarks?: BookmarkUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    timelines?: TimelineUpdateManyWithoutUserNestedInput
    retweets?: RetweetUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFollowingInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tweets?: TweetUncheckedUpdateManyWithoutAuthorNestedInput
    followers?: FollowUncheckedUpdateManyWithoutFollowerNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    bookmarks?: BookmarkUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    timelines?: TimelineUncheckedUpdateManyWithoutUserNestedInput
    retweets?: RetweetUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutLikesInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    bio?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tweets?: TweetCreateNestedManyWithoutAuthorInput
    followers?: FollowCreateNestedManyWithoutFollowerInput
    following?: FollowCreateNestedManyWithoutFollowingInput
    bookmarks?: BookmarkCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    timelines?: TimelineCreateNestedManyWithoutUserInput
    retweets?: RetweetCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLikesInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    bio?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tweets?: TweetUncheckedCreateNestedManyWithoutAuthorInput
    followers?: FollowUncheckedCreateNestedManyWithoutFollowerInput
    following?: FollowUncheckedCreateNestedManyWithoutFollowingInput
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    timelines?: TimelineUncheckedCreateNestedManyWithoutUserInput
    retweets?: RetweetUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLikesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
  }

  export type TweetCreateWithoutLikesInput = {
    id?: string
    content: string
    type?: $Enums.TweetType
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutTweetsInput
    parent?: TweetCreateNestedOneWithoutRepliesInput
    replies?: TweetCreateNestedManyWithoutParentInput
    media?: MediaCreateNestedManyWithoutTweetInput
    hashtags?: HashtagCreateNestedManyWithoutTweetsInput
    bookmarks?: BookmarkCreateNestedManyWithoutTweetInput
    tweetMetrics?: TweetMetricsCreateNestedManyWithoutTweetInput
    timelines?: TimelineCreateNestedManyWithoutTweetInput
    tweetHashtags?: TweetHashtagCreateNestedManyWithoutTweetInput
    retweets?: RetweetCreateNestedManyWithoutTweetInput
  }

  export type TweetUncheckedCreateWithoutLikesInput = {
    id?: string
    content: string
    type?: $Enums.TweetType
    authorId: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: TweetUncheckedCreateNestedManyWithoutParentInput
    media?: MediaUncheckedCreateNestedManyWithoutTweetInput
    hashtags?: HashtagUncheckedCreateNestedManyWithoutTweetsInput
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutTweetInput
    tweetMetrics?: TweetMetricsUncheckedCreateNestedManyWithoutTweetInput
    timelines?: TimelineUncheckedCreateNestedManyWithoutTweetInput
    tweetHashtags?: TweetHashtagUncheckedCreateNestedManyWithoutTweetInput
    retweets?: RetweetUncheckedCreateNestedManyWithoutTweetInput
  }

  export type TweetCreateOrConnectWithoutLikesInput = {
    where: TweetWhereUniqueInput
    create: XOR<TweetCreateWithoutLikesInput, TweetUncheckedCreateWithoutLikesInput>
  }

  export type UserUpsertWithoutLikesInput = {
    update: XOR<UserUpdateWithoutLikesInput, UserUncheckedUpdateWithoutLikesInput>
    create: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLikesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLikesInput, UserUncheckedUpdateWithoutLikesInput>
  }

  export type UserUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tweets?: TweetUpdateManyWithoutAuthorNestedInput
    followers?: FollowUpdateManyWithoutFollowerNestedInput
    following?: FollowUpdateManyWithoutFollowingNestedInput
    bookmarks?: BookmarkUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    timelines?: TimelineUpdateManyWithoutUserNestedInput
    retweets?: RetweetUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tweets?: TweetUncheckedUpdateManyWithoutAuthorNestedInput
    followers?: FollowUncheckedUpdateManyWithoutFollowerNestedInput
    following?: FollowUncheckedUpdateManyWithoutFollowingNestedInput
    bookmarks?: BookmarkUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    timelines?: TimelineUncheckedUpdateManyWithoutUserNestedInput
    retweets?: RetweetUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TweetUpsertWithoutLikesInput = {
    update: XOR<TweetUpdateWithoutLikesInput, TweetUncheckedUpdateWithoutLikesInput>
    create: XOR<TweetCreateWithoutLikesInput, TweetUncheckedCreateWithoutLikesInput>
    where?: TweetWhereInput
  }

  export type TweetUpdateToOneWithWhereWithoutLikesInput = {
    where?: TweetWhereInput
    data: XOR<TweetUpdateWithoutLikesInput, TweetUncheckedUpdateWithoutLikesInput>
  }

  export type TweetUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumTweetTypeFieldUpdateOperationsInput | $Enums.TweetType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutTweetsNestedInput
    parent?: TweetUpdateOneWithoutRepliesNestedInput
    replies?: TweetUpdateManyWithoutParentNestedInput
    media?: MediaUpdateManyWithoutTweetNestedInput
    hashtags?: HashtagUpdateManyWithoutTweetsNestedInput
    bookmarks?: BookmarkUpdateManyWithoutTweetNestedInput
    tweetMetrics?: TweetMetricsUpdateManyWithoutTweetNestedInput
    timelines?: TimelineUpdateManyWithoutTweetNestedInput
    tweetHashtags?: TweetHashtagUpdateManyWithoutTweetNestedInput
    retweets?: RetweetUpdateManyWithoutTweetNestedInput
  }

  export type TweetUncheckedUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumTweetTypeFieldUpdateOperationsInput | $Enums.TweetType
    authorId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: TweetUncheckedUpdateManyWithoutParentNestedInput
    media?: MediaUncheckedUpdateManyWithoutTweetNestedInput
    hashtags?: HashtagUncheckedUpdateManyWithoutTweetsNestedInput
    bookmarks?: BookmarkUncheckedUpdateManyWithoutTweetNestedInput
    tweetMetrics?: TweetMetricsUncheckedUpdateManyWithoutTweetNestedInput
    timelines?: TimelineUncheckedUpdateManyWithoutTweetNestedInput
    tweetHashtags?: TweetHashtagUncheckedUpdateManyWithoutTweetNestedInput
    retweets?: RetweetUncheckedUpdateManyWithoutTweetNestedInput
  }

  export type UserCreateWithoutBookmarksInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    bio?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tweets?: TweetCreateNestedManyWithoutAuthorInput
    followers?: FollowCreateNestedManyWithoutFollowerInput
    following?: FollowCreateNestedManyWithoutFollowingInput
    likes?: LikeCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    timelines?: TimelineCreateNestedManyWithoutUserInput
    retweets?: RetweetCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBookmarksInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    bio?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tweets?: TweetUncheckedCreateNestedManyWithoutAuthorInput
    followers?: FollowUncheckedCreateNestedManyWithoutFollowerInput
    following?: FollowUncheckedCreateNestedManyWithoutFollowingInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    timelines?: TimelineUncheckedCreateNestedManyWithoutUserInput
    retweets?: RetweetUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBookmarksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookmarksInput, UserUncheckedCreateWithoutBookmarksInput>
  }

  export type TweetCreateWithoutBookmarksInput = {
    id?: string
    content: string
    type?: $Enums.TweetType
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutTweetsInput
    parent?: TweetCreateNestedOneWithoutRepliesInput
    replies?: TweetCreateNestedManyWithoutParentInput
    media?: MediaCreateNestedManyWithoutTweetInput
    hashtags?: HashtagCreateNestedManyWithoutTweetsInput
    likes?: LikeCreateNestedManyWithoutTweetInput
    tweetMetrics?: TweetMetricsCreateNestedManyWithoutTweetInput
    timelines?: TimelineCreateNestedManyWithoutTweetInput
    tweetHashtags?: TweetHashtagCreateNestedManyWithoutTweetInput
    retweets?: RetweetCreateNestedManyWithoutTweetInput
  }

  export type TweetUncheckedCreateWithoutBookmarksInput = {
    id?: string
    content: string
    type?: $Enums.TweetType
    authorId: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: TweetUncheckedCreateNestedManyWithoutParentInput
    media?: MediaUncheckedCreateNestedManyWithoutTweetInput
    hashtags?: HashtagUncheckedCreateNestedManyWithoutTweetsInput
    likes?: LikeUncheckedCreateNestedManyWithoutTweetInput
    tweetMetrics?: TweetMetricsUncheckedCreateNestedManyWithoutTweetInput
    timelines?: TimelineUncheckedCreateNestedManyWithoutTweetInput
    tweetHashtags?: TweetHashtagUncheckedCreateNestedManyWithoutTweetInput
    retweets?: RetweetUncheckedCreateNestedManyWithoutTweetInput
  }

  export type TweetCreateOrConnectWithoutBookmarksInput = {
    where: TweetWhereUniqueInput
    create: XOR<TweetCreateWithoutBookmarksInput, TweetUncheckedCreateWithoutBookmarksInput>
  }

  export type UserUpsertWithoutBookmarksInput = {
    update: XOR<UserUpdateWithoutBookmarksInput, UserUncheckedUpdateWithoutBookmarksInput>
    create: XOR<UserCreateWithoutBookmarksInput, UserUncheckedCreateWithoutBookmarksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookmarksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookmarksInput, UserUncheckedUpdateWithoutBookmarksInput>
  }

  export type UserUpdateWithoutBookmarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tweets?: TweetUpdateManyWithoutAuthorNestedInput
    followers?: FollowUpdateManyWithoutFollowerNestedInput
    following?: FollowUpdateManyWithoutFollowingNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    timelines?: TimelineUpdateManyWithoutUserNestedInput
    retweets?: RetweetUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBookmarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tweets?: TweetUncheckedUpdateManyWithoutAuthorNestedInput
    followers?: FollowUncheckedUpdateManyWithoutFollowerNestedInput
    following?: FollowUncheckedUpdateManyWithoutFollowingNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    timelines?: TimelineUncheckedUpdateManyWithoutUserNestedInput
    retweets?: RetweetUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TweetUpsertWithoutBookmarksInput = {
    update: XOR<TweetUpdateWithoutBookmarksInput, TweetUncheckedUpdateWithoutBookmarksInput>
    create: XOR<TweetCreateWithoutBookmarksInput, TweetUncheckedCreateWithoutBookmarksInput>
    where?: TweetWhereInput
  }

  export type TweetUpdateToOneWithWhereWithoutBookmarksInput = {
    where?: TweetWhereInput
    data: XOR<TweetUpdateWithoutBookmarksInput, TweetUncheckedUpdateWithoutBookmarksInput>
  }

  export type TweetUpdateWithoutBookmarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumTweetTypeFieldUpdateOperationsInput | $Enums.TweetType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutTweetsNestedInput
    parent?: TweetUpdateOneWithoutRepliesNestedInput
    replies?: TweetUpdateManyWithoutParentNestedInput
    media?: MediaUpdateManyWithoutTweetNestedInput
    hashtags?: HashtagUpdateManyWithoutTweetsNestedInput
    likes?: LikeUpdateManyWithoutTweetNestedInput
    tweetMetrics?: TweetMetricsUpdateManyWithoutTweetNestedInput
    timelines?: TimelineUpdateManyWithoutTweetNestedInput
    tweetHashtags?: TweetHashtagUpdateManyWithoutTweetNestedInput
    retweets?: RetweetUpdateManyWithoutTweetNestedInput
  }

  export type TweetUncheckedUpdateWithoutBookmarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumTweetTypeFieldUpdateOperationsInput | $Enums.TweetType
    authorId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: TweetUncheckedUpdateManyWithoutParentNestedInput
    media?: MediaUncheckedUpdateManyWithoutTweetNestedInput
    hashtags?: HashtagUncheckedUpdateManyWithoutTweetsNestedInput
    likes?: LikeUncheckedUpdateManyWithoutTweetNestedInput
    tweetMetrics?: TweetMetricsUncheckedUpdateManyWithoutTweetNestedInput
    timelines?: TimelineUncheckedUpdateManyWithoutTweetNestedInput
    tweetHashtags?: TweetHashtagUncheckedUpdateManyWithoutTweetNestedInput
    retweets?: RetweetUncheckedUpdateManyWithoutTweetNestedInput
  }

  export type TweetCreateWithoutMediaInput = {
    id?: string
    content: string
    type?: $Enums.TweetType
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutTweetsInput
    parent?: TweetCreateNestedOneWithoutRepliesInput
    replies?: TweetCreateNestedManyWithoutParentInput
    hashtags?: HashtagCreateNestedManyWithoutTweetsInput
    likes?: LikeCreateNestedManyWithoutTweetInput
    bookmarks?: BookmarkCreateNestedManyWithoutTweetInput
    tweetMetrics?: TweetMetricsCreateNestedManyWithoutTweetInput
    timelines?: TimelineCreateNestedManyWithoutTweetInput
    tweetHashtags?: TweetHashtagCreateNestedManyWithoutTweetInput
    retweets?: RetweetCreateNestedManyWithoutTweetInput
  }

  export type TweetUncheckedCreateWithoutMediaInput = {
    id?: string
    content: string
    type?: $Enums.TweetType
    authorId: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: TweetUncheckedCreateNestedManyWithoutParentInput
    hashtags?: HashtagUncheckedCreateNestedManyWithoutTweetsInput
    likes?: LikeUncheckedCreateNestedManyWithoutTweetInput
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutTweetInput
    tweetMetrics?: TweetMetricsUncheckedCreateNestedManyWithoutTweetInput
    timelines?: TimelineUncheckedCreateNestedManyWithoutTweetInput
    tweetHashtags?: TweetHashtagUncheckedCreateNestedManyWithoutTweetInput
    retweets?: RetweetUncheckedCreateNestedManyWithoutTweetInput
  }

  export type TweetCreateOrConnectWithoutMediaInput = {
    where: TweetWhereUniqueInput
    create: XOR<TweetCreateWithoutMediaInput, TweetUncheckedCreateWithoutMediaInput>
  }

  export type TweetUpsertWithoutMediaInput = {
    update: XOR<TweetUpdateWithoutMediaInput, TweetUncheckedUpdateWithoutMediaInput>
    create: XOR<TweetCreateWithoutMediaInput, TweetUncheckedCreateWithoutMediaInput>
    where?: TweetWhereInput
  }

  export type TweetUpdateToOneWithWhereWithoutMediaInput = {
    where?: TweetWhereInput
    data: XOR<TweetUpdateWithoutMediaInput, TweetUncheckedUpdateWithoutMediaInput>
  }

  export type TweetUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumTweetTypeFieldUpdateOperationsInput | $Enums.TweetType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutTweetsNestedInput
    parent?: TweetUpdateOneWithoutRepliesNestedInput
    replies?: TweetUpdateManyWithoutParentNestedInput
    hashtags?: HashtagUpdateManyWithoutTweetsNestedInput
    likes?: LikeUpdateManyWithoutTweetNestedInput
    bookmarks?: BookmarkUpdateManyWithoutTweetNestedInput
    tweetMetrics?: TweetMetricsUpdateManyWithoutTweetNestedInput
    timelines?: TimelineUpdateManyWithoutTweetNestedInput
    tweetHashtags?: TweetHashtagUpdateManyWithoutTweetNestedInput
    retweets?: RetweetUpdateManyWithoutTweetNestedInput
  }

  export type TweetUncheckedUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumTweetTypeFieldUpdateOperationsInput | $Enums.TweetType
    authorId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: TweetUncheckedUpdateManyWithoutParentNestedInput
    hashtags?: HashtagUncheckedUpdateManyWithoutTweetsNestedInput
    likes?: LikeUncheckedUpdateManyWithoutTweetNestedInput
    bookmarks?: BookmarkUncheckedUpdateManyWithoutTweetNestedInput
    tweetMetrics?: TweetMetricsUncheckedUpdateManyWithoutTweetNestedInput
    timelines?: TimelineUncheckedUpdateManyWithoutTweetNestedInput
    tweetHashtags?: TweetHashtagUncheckedUpdateManyWithoutTweetNestedInput
    retweets?: RetweetUncheckedUpdateManyWithoutTweetNestedInput
  }

  export type TweetCreateWithoutHashtagsInput = {
    id?: string
    content: string
    type?: $Enums.TweetType
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutTweetsInput
    parent?: TweetCreateNestedOneWithoutRepliesInput
    replies?: TweetCreateNestedManyWithoutParentInput
    media?: MediaCreateNestedManyWithoutTweetInput
    likes?: LikeCreateNestedManyWithoutTweetInput
    bookmarks?: BookmarkCreateNestedManyWithoutTweetInput
    tweetMetrics?: TweetMetricsCreateNestedManyWithoutTweetInput
    timelines?: TimelineCreateNestedManyWithoutTweetInput
    tweetHashtags?: TweetHashtagCreateNestedManyWithoutTweetInput
    retweets?: RetweetCreateNestedManyWithoutTweetInput
  }

  export type TweetUncheckedCreateWithoutHashtagsInput = {
    id?: string
    content: string
    type?: $Enums.TweetType
    authorId: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: TweetUncheckedCreateNestedManyWithoutParentInput
    media?: MediaUncheckedCreateNestedManyWithoutTweetInput
    likes?: LikeUncheckedCreateNestedManyWithoutTweetInput
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutTweetInput
    tweetMetrics?: TweetMetricsUncheckedCreateNestedManyWithoutTweetInput
    timelines?: TimelineUncheckedCreateNestedManyWithoutTweetInput
    tweetHashtags?: TweetHashtagUncheckedCreateNestedManyWithoutTweetInput
    retweets?: RetweetUncheckedCreateNestedManyWithoutTweetInput
  }

  export type TweetCreateOrConnectWithoutHashtagsInput = {
    where: TweetWhereUniqueInput
    create: XOR<TweetCreateWithoutHashtagsInput, TweetUncheckedCreateWithoutHashtagsInput>
  }

  export type TweetHashtagCreateWithoutHashtagInput = {
    tweet: TweetCreateNestedOneWithoutTweetHashtagsInput
  }

  export type TweetHashtagUncheckedCreateWithoutHashtagInput = {
    tweetId: string
  }

  export type TweetHashtagCreateOrConnectWithoutHashtagInput = {
    where: TweetHashtagWhereUniqueInput
    create: XOR<TweetHashtagCreateWithoutHashtagInput, TweetHashtagUncheckedCreateWithoutHashtagInput>
  }

  export type TweetHashtagCreateManyHashtagInputEnvelope = {
    data: TweetHashtagCreateManyHashtagInput | TweetHashtagCreateManyHashtagInput[]
    skipDuplicates?: boolean
  }

  export type TweetUpsertWithWhereUniqueWithoutHashtagsInput = {
    where: TweetWhereUniqueInput
    update: XOR<TweetUpdateWithoutHashtagsInput, TweetUncheckedUpdateWithoutHashtagsInput>
    create: XOR<TweetCreateWithoutHashtagsInput, TweetUncheckedCreateWithoutHashtagsInput>
  }

  export type TweetUpdateWithWhereUniqueWithoutHashtagsInput = {
    where: TweetWhereUniqueInput
    data: XOR<TweetUpdateWithoutHashtagsInput, TweetUncheckedUpdateWithoutHashtagsInput>
  }

  export type TweetUpdateManyWithWhereWithoutHashtagsInput = {
    where: TweetScalarWhereInput
    data: XOR<TweetUpdateManyMutationInput, TweetUncheckedUpdateManyWithoutHashtagsInput>
  }

  export type TweetHashtagUpsertWithWhereUniqueWithoutHashtagInput = {
    where: TweetHashtagWhereUniqueInput
    update: XOR<TweetHashtagUpdateWithoutHashtagInput, TweetHashtagUncheckedUpdateWithoutHashtagInput>
    create: XOR<TweetHashtagCreateWithoutHashtagInput, TweetHashtagUncheckedCreateWithoutHashtagInput>
  }

  export type TweetHashtagUpdateWithWhereUniqueWithoutHashtagInput = {
    where: TweetHashtagWhereUniqueInput
    data: XOR<TweetHashtagUpdateWithoutHashtagInput, TweetHashtagUncheckedUpdateWithoutHashtagInput>
  }

  export type TweetHashtagUpdateManyWithWhereWithoutHashtagInput = {
    where: TweetHashtagScalarWhereInput
    data: XOR<TweetHashtagUpdateManyMutationInput, TweetHashtagUncheckedUpdateManyWithoutHashtagInput>
  }

  export type TweetCreateWithoutTweetHashtagsInput = {
    id?: string
    content: string
    type?: $Enums.TweetType
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutTweetsInput
    parent?: TweetCreateNestedOneWithoutRepliesInput
    replies?: TweetCreateNestedManyWithoutParentInput
    media?: MediaCreateNestedManyWithoutTweetInput
    hashtags?: HashtagCreateNestedManyWithoutTweetsInput
    likes?: LikeCreateNestedManyWithoutTweetInput
    bookmarks?: BookmarkCreateNestedManyWithoutTweetInput
    tweetMetrics?: TweetMetricsCreateNestedManyWithoutTweetInput
    timelines?: TimelineCreateNestedManyWithoutTweetInput
    retweets?: RetweetCreateNestedManyWithoutTweetInput
  }

  export type TweetUncheckedCreateWithoutTweetHashtagsInput = {
    id?: string
    content: string
    type?: $Enums.TweetType
    authorId: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: TweetUncheckedCreateNestedManyWithoutParentInput
    media?: MediaUncheckedCreateNestedManyWithoutTweetInput
    hashtags?: HashtagUncheckedCreateNestedManyWithoutTweetsInput
    likes?: LikeUncheckedCreateNestedManyWithoutTweetInput
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutTweetInput
    tweetMetrics?: TweetMetricsUncheckedCreateNestedManyWithoutTweetInput
    timelines?: TimelineUncheckedCreateNestedManyWithoutTweetInput
    retweets?: RetweetUncheckedCreateNestedManyWithoutTweetInput
  }

  export type TweetCreateOrConnectWithoutTweetHashtagsInput = {
    where: TweetWhereUniqueInput
    create: XOR<TweetCreateWithoutTweetHashtagsInput, TweetUncheckedCreateWithoutTweetHashtagsInput>
  }

  export type HashtagCreateWithoutTweetHashtagsInput = {
    id?: string
    name: string
    tweets?: TweetCreateNestedManyWithoutHashtagsInput
  }

  export type HashtagUncheckedCreateWithoutTweetHashtagsInput = {
    id?: string
    name: string
    tweets?: TweetUncheckedCreateNestedManyWithoutHashtagsInput
  }

  export type HashtagCreateOrConnectWithoutTweetHashtagsInput = {
    where: HashtagWhereUniqueInput
    create: XOR<HashtagCreateWithoutTweetHashtagsInput, HashtagUncheckedCreateWithoutTweetHashtagsInput>
  }

  export type TweetUpsertWithoutTweetHashtagsInput = {
    update: XOR<TweetUpdateWithoutTweetHashtagsInput, TweetUncheckedUpdateWithoutTweetHashtagsInput>
    create: XOR<TweetCreateWithoutTweetHashtagsInput, TweetUncheckedCreateWithoutTweetHashtagsInput>
    where?: TweetWhereInput
  }

  export type TweetUpdateToOneWithWhereWithoutTweetHashtagsInput = {
    where?: TweetWhereInput
    data: XOR<TweetUpdateWithoutTweetHashtagsInput, TweetUncheckedUpdateWithoutTweetHashtagsInput>
  }

  export type TweetUpdateWithoutTweetHashtagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumTweetTypeFieldUpdateOperationsInput | $Enums.TweetType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutTweetsNestedInput
    parent?: TweetUpdateOneWithoutRepliesNestedInput
    replies?: TweetUpdateManyWithoutParentNestedInput
    media?: MediaUpdateManyWithoutTweetNestedInput
    hashtags?: HashtagUpdateManyWithoutTweetsNestedInput
    likes?: LikeUpdateManyWithoutTweetNestedInput
    bookmarks?: BookmarkUpdateManyWithoutTweetNestedInput
    tweetMetrics?: TweetMetricsUpdateManyWithoutTweetNestedInput
    timelines?: TimelineUpdateManyWithoutTweetNestedInput
    retweets?: RetweetUpdateManyWithoutTweetNestedInput
  }

  export type TweetUncheckedUpdateWithoutTweetHashtagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumTweetTypeFieldUpdateOperationsInput | $Enums.TweetType
    authorId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: TweetUncheckedUpdateManyWithoutParentNestedInput
    media?: MediaUncheckedUpdateManyWithoutTweetNestedInput
    hashtags?: HashtagUncheckedUpdateManyWithoutTweetsNestedInput
    likes?: LikeUncheckedUpdateManyWithoutTweetNestedInput
    bookmarks?: BookmarkUncheckedUpdateManyWithoutTweetNestedInput
    tweetMetrics?: TweetMetricsUncheckedUpdateManyWithoutTweetNestedInput
    timelines?: TimelineUncheckedUpdateManyWithoutTweetNestedInput
    retweets?: RetweetUncheckedUpdateManyWithoutTweetNestedInput
  }

  export type HashtagUpsertWithoutTweetHashtagsInput = {
    update: XOR<HashtagUpdateWithoutTweetHashtagsInput, HashtagUncheckedUpdateWithoutTweetHashtagsInput>
    create: XOR<HashtagCreateWithoutTweetHashtagsInput, HashtagUncheckedCreateWithoutTweetHashtagsInput>
    where?: HashtagWhereInput
  }

  export type HashtagUpdateToOneWithWhereWithoutTweetHashtagsInput = {
    where?: HashtagWhereInput
    data: XOR<HashtagUpdateWithoutTweetHashtagsInput, HashtagUncheckedUpdateWithoutTweetHashtagsInput>
  }

  export type HashtagUpdateWithoutTweetHashtagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tweets?: TweetUpdateManyWithoutHashtagsNestedInput
  }

  export type HashtagUncheckedUpdateWithoutTweetHashtagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tweets?: TweetUncheckedUpdateManyWithoutHashtagsNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    bio?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tweets?: TweetCreateNestedManyWithoutAuthorInput
    followers?: FollowCreateNestedManyWithoutFollowerInput
    following?: FollowCreateNestedManyWithoutFollowingInput
    likes?: LikeCreateNestedManyWithoutUserInput
    bookmarks?: BookmarkCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    timelines?: TimelineCreateNestedManyWithoutUserInput
    retweets?: RetweetCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    bio?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tweets?: TweetUncheckedCreateNestedManyWithoutAuthorInput
    followers?: FollowUncheckedCreateNestedManyWithoutFollowerInput
    following?: FollowUncheckedCreateNestedManyWithoutFollowingInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    timelines?: TimelineUncheckedCreateNestedManyWithoutUserInput
    retweets?: RetweetUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tweets?: TweetUpdateManyWithoutAuthorNestedInput
    followers?: FollowUpdateManyWithoutFollowerNestedInput
    following?: FollowUpdateManyWithoutFollowingNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    bookmarks?: BookmarkUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    timelines?: TimelineUpdateManyWithoutUserNestedInput
    retweets?: RetweetUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tweets?: TweetUncheckedUpdateManyWithoutAuthorNestedInput
    followers?: FollowUncheckedUpdateManyWithoutFollowerNestedInput
    following?: FollowUncheckedUpdateManyWithoutFollowingNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    bookmarks?: BookmarkUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    timelines?: TimelineUncheckedUpdateManyWithoutUserNestedInput
    retweets?: RetweetUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutRefreshTokensInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    bio?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tweets?: TweetCreateNestedManyWithoutAuthorInput
    followers?: FollowCreateNestedManyWithoutFollowerInput
    following?: FollowCreateNestedManyWithoutFollowingInput
    likes?: LikeCreateNestedManyWithoutUserInput
    bookmarks?: BookmarkCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    timelines?: TimelineCreateNestedManyWithoutUserInput
    retweets?: RetweetCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRefreshTokensInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    bio?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tweets?: TweetUncheckedCreateNestedManyWithoutAuthorInput
    followers?: FollowUncheckedCreateNestedManyWithoutFollowerInput
    following?: FollowUncheckedCreateNestedManyWithoutFollowingInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    timelines?: TimelineUncheckedCreateNestedManyWithoutUserInput
    retweets?: RetweetUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRefreshTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
  }

  export type UserUpsertWithoutRefreshTokensInput = {
    update: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRefreshTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type UserUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tweets?: TweetUpdateManyWithoutAuthorNestedInput
    followers?: FollowUpdateManyWithoutFollowerNestedInput
    following?: FollowUpdateManyWithoutFollowingNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    bookmarks?: BookmarkUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    timelines?: TimelineUpdateManyWithoutUserNestedInput
    retweets?: RetweetUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tweets?: TweetUncheckedUpdateManyWithoutAuthorNestedInput
    followers?: FollowUncheckedUpdateManyWithoutFollowerNestedInput
    following?: FollowUncheckedUpdateManyWithoutFollowingNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    bookmarks?: BookmarkUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    timelines?: TimelineUncheckedUpdateManyWithoutUserNestedInput
    retweets?: RetweetUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TweetCreateWithoutTweetMetricsInput = {
    id?: string
    content: string
    type?: $Enums.TweetType
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutTweetsInput
    parent?: TweetCreateNestedOneWithoutRepliesInput
    replies?: TweetCreateNestedManyWithoutParentInput
    media?: MediaCreateNestedManyWithoutTweetInput
    hashtags?: HashtagCreateNestedManyWithoutTweetsInput
    likes?: LikeCreateNestedManyWithoutTweetInput
    bookmarks?: BookmarkCreateNestedManyWithoutTweetInput
    timelines?: TimelineCreateNestedManyWithoutTweetInput
    tweetHashtags?: TweetHashtagCreateNestedManyWithoutTweetInput
    retweets?: RetweetCreateNestedManyWithoutTweetInput
  }

  export type TweetUncheckedCreateWithoutTweetMetricsInput = {
    id?: string
    content: string
    type?: $Enums.TweetType
    authorId: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: TweetUncheckedCreateNestedManyWithoutParentInput
    media?: MediaUncheckedCreateNestedManyWithoutTweetInput
    hashtags?: HashtagUncheckedCreateNestedManyWithoutTweetsInput
    likes?: LikeUncheckedCreateNestedManyWithoutTweetInput
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutTweetInput
    timelines?: TimelineUncheckedCreateNestedManyWithoutTweetInput
    tweetHashtags?: TweetHashtagUncheckedCreateNestedManyWithoutTweetInput
    retweets?: RetweetUncheckedCreateNestedManyWithoutTweetInput
  }

  export type TweetCreateOrConnectWithoutTweetMetricsInput = {
    where: TweetWhereUniqueInput
    create: XOR<TweetCreateWithoutTweetMetricsInput, TweetUncheckedCreateWithoutTweetMetricsInput>
  }

  export type TweetUpsertWithoutTweetMetricsInput = {
    update: XOR<TweetUpdateWithoutTweetMetricsInput, TweetUncheckedUpdateWithoutTweetMetricsInput>
    create: XOR<TweetCreateWithoutTweetMetricsInput, TweetUncheckedCreateWithoutTweetMetricsInput>
    where?: TweetWhereInput
  }

  export type TweetUpdateToOneWithWhereWithoutTweetMetricsInput = {
    where?: TweetWhereInput
    data: XOR<TweetUpdateWithoutTweetMetricsInput, TweetUncheckedUpdateWithoutTweetMetricsInput>
  }

  export type TweetUpdateWithoutTweetMetricsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumTweetTypeFieldUpdateOperationsInput | $Enums.TweetType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutTweetsNestedInput
    parent?: TweetUpdateOneWithoutRepliesNestedInput
    replies?: TweetUpdateManyWithoutParentNestedInput
    media?: MediaUpdateManyWithoutTweetNestedInput
    hashtags?: HashtagUpdateManyWithoutTweetsNestedInput
    likes?: LikeUpdateManyWithoutTweetNestedInput
    bookmarks?: BookmarkUpdateManyWithoutTweetNestedInput
    timelines?: TimelineUpdateManyWithoutTweetNestedInput
    tweetHashtags?: TweetHashtagUpdateManyWithoutTweetNestedInput
    retweets?: RetweetUpdateManyWithoutTweetNestedInput
  }

  export type TweetUncheckedUpdateWithoutTweetMetricsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumTweetTypeFieldUpdateOperationsInput | $Enums.TweetType
    authorId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: TweetUncheckedUpdateManyWithoutParentNestedInput
    media?: MediaUncheckedUpdateManyWithoutTweetNestedInput
    hashtags?: HashtagUncheckedUpdateManyWithoutTweetsNestedInput
    likes?: LikeUncheckedUpdateManyWithoutTweetNestedInput
    bookmarks?: BookmarkUncheckedUpdateManyWithoutTweetNestedInput
    timelines?: TimelineUncheckedUpdateManyWithoutTweetNestedInput
    tweetHashtags?: TweetHashtagUncheckedUpdateManyWithoutTweetNestedInput
    retweets?: RetweetUncheckedUpdateManyWithoutTweetNestedInput
  }

  export type UserCreateWithoutTimelinesInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    bio?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tweets?: TweetCreateNestedManyWithoutAuthorInput
    followers?: FollowCreateNestedManyWithoutFollowerInput
    following?: FollowCreateNestedManyWithoutFollowingInput
    likes?: LikeCreateNestedManyWithoutUserInput
    bookmarks?: BookmarkCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    retweets?: RetweetCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTimelinesInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    bio?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tweets?: TweetUncheckedCreateNestedManyWithoutAuthorInput
    followers?: FollowUncheckedCreateNestedManyWithoutFollowerInput
    following?: FollowUncheckedCreateNestedManyWithoutFollowingInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    retweets?: RetweetUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTimelinesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTimelinesInput, UserUncheckedCreateWithoutTimelinesInput>
  }

  export type TweetCreateWithoutTimelinesInput = {
    id?: string
    content: string
    type?: $Enums.TweetType
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutTweetsInput
    parent?: TweetCreateNestedOneWithoutRepliesInput
    replies?: TweetCreateNestedManyWithoutParentInput
    media?: MediaCreateNestedManyWithoutTweetInput
    hashtags?: HashtagCreateNestedManyWithoutTweetsInput
    likes?: LikeCreateNestedManyWithoutTweetInput
    bookmarks?: BookmarkCreateNestedManyWithoutTweetInput
    tweetMetrics?: TweetMetricsCreateNestedManyWithoutTweetInput
    tweetHashtags?: TweetHashtagCreateNestedManyWithoutTweetInput
    retweets?: RetweetCreateNestedManyWithoutTweetInput
  }

  export type TweetUncheckedCreateWithoutTimelinesInput = {
    id?: string
    content: string
    type?: $Enums.TweetType
    authorId: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: TweetUncheckedCreateNestedManyWithoutParentInput
    media?: MediaUncheckedCreateNestedManyWithoutTweetInput
    hashtags?: HashtagUncheckedCreateNestedManyWithoutTweetsInput
    likes?: LikeUncheckedCreateNestedManyWithoutTweetInput
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutTweetInput
    tweetMetrics?: TweetMetricsUncheckedCreateNestedManyWithoutTweetInput
    tweetHashtags?: TweetHashtagUncheckedCreateNestedManyWithoutTweetInput
    retweets?: RetweetUncheckedCreateNestedManyWithoutTweetInput
  }

  export type TweetCreateOrConnectWithoutTimelinesInput = {
    where: TweetWhereUniqueInput
    create: XOR<TweetCreateWithoutTimelinesInput, TweetUncheckedCreateWithoutTimelinesInput>
  }

  export type UserUpsertWithoutTimelinesInput = {
    update: XOR<UserUpdateWithoutTimelinesInput, UserUncheckedUpdateWithoutTimelinesInput>
    create: XOR<UserCreateWithoutTimelinesInput, UserUncheckedCreateWithoutTimelinesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTimelinesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTimelinesInput, UserUncheckedUpdateWithoutTimelinesInput>
  }

  export type UserUpdateWithoutTimelinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tweets?: TweetUpdateManyWithoutAuthorNestedInput
    followers?: FollowUpdateManyWithoutFollowerNestedInput
    following?: FollowUpdateManyWithoutFollowingNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    bookmarks?: BookmarkUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    retweets?: RetweetUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTimelinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tweets?: TweetUncheckedUpdateManyWithoutAuthorNestedInput
    followers?: FollowUncheckedUpdateManyWithoutFollowerNestedInput
    following?: FollowUncheckedUpdateManyWithoutFollowingNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    bookmarks?: BookmarkUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    retweets?: RetweetUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TweetUpsertWithoutTimelinesInput = {
    update: XOR<TweetUpdateWithoutTimelinesInput, TweetUncheckedUpdateWithoutTimelinesInput>
    create: XOR<TweetCreateWithoutTimelinesInput, TweetUncheckedCreateWithoutTimelinesInput>
    where?: TweetWhereInput
  }

  export type TweetUpdateToOneWithWhereWithoutTimelinesInput = {
    where?: TweetWhereInput
    data: XOR<TweetUpdateWithoutTimelinesInput, TweetUncheckedUpdateWithoutTimelinesInput>
  }

  export type TweetUpdateWithoutTimelinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumTweetTypeFieldUpdateOperationsInput | $Enums.TweetType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutTweetsNestedInput
    parent?: TweetUpdateOneWithoutRepliesNestedInput
    replies?: TweetUpdateManyWithoutParentNestedInput
    media?: MediaUpdateManyWithoutTweetNestedInput
    hashtags?: HashtagUpdateManyWithoutTweetsNestedInput
    likes?: LikeUpdateManyWithoutTweetNestedInput
    bookmarks?: BookmarkUpdateManyWithoutTweetNestedInput
    tweetMetrics?: TweetMetricsUpdateManyWithoutTweetNestedInput
    tweetHashtags?: TweetHashtagUpdateManyWithoutTweetNestedInput
    retweets?: RetweetUpdateManyWithoutTweetNestedInput
  }

  export type TweetUncheckedUpdateWithoutTimelinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumTweetTypeFieldUpdateOperationsInput | $Enums.TweetType
    authorId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: TweetUncheckedUpdateManyWithoutParentNestedInput
    media?: MediaUncheckedUpdateManyWithoutTweetNestedInput
    hashtags?: HashtagUncheckedUpdateManyWithoutTweetsNestedInput
    likes?: LikeUncheckedUpdateManyWithoutTweetNestedInput
    bookmarks?: BookmarkUncheckedUpdateManyWithoutTweetNestedInput
    tweetMetrics?: TweetMetricsUncheckedUpdateManyWithoutTweetNestedInput
    tweetHashtags?: TweetHashtagUncheckedUpdateManyWithoutTweetNestedInput
    retweets?: RetweetUncheckedUpdateManyWithoutTweetNestedInput
  }

  export type UserCreateWithoutRetweetsInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    bio?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tweets?: TweetCreateNestedManyWithoutAuthorInput
    followers?: FollowCreateNestedManyWithoutFollowerInput
    following?: FollowCreateNestedManyWithoutFollowingInput
    likes?: LikeCreateNestedManyWithoutUserInput
    bookmarks?: BookmarkCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    timelines?: TimelineCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRetweetsInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    bio?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tweets?: TweetUncheckedCreateNestedManyWithoutAuthorInput
    followers?: FollowUncheckedCreateNestedManyWithoutFollowerInput
    following?: FollowUncheckedCreateNestedManyWithoutFollowingInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    timelines?: TimelineUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRetweetsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRetweetsInput, UserUncheckedCreateWithoutRetweetsInput>
  }

  export type TweetCreateWithoutRetweetsInput = {
    id?: string
    content: string
    type?: $Enums.TweetType
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutTweetsInput
    parent?: TweetCreateNestedOneWithoutRepliesInput
    replies?: TweetCreateNestedManyWithoutParentInput
    media?: MediaCreateNestedManyWithoutTweetInput
    hashtags?: HashtagCreateNestedManyWithoutTweetsInput
    likes?: LikeCreateNestedManyWithoutTweetInput
    bookmarks?: BookmarkCreateNestedManyWithoutTweetInput
    tweetMetrics?: TweetMetricsCreateNestedManyWithoutTweetInput
    timelines?: TimelineCreateNestedManyWithoutTweetInput
    tweetHashtags?: TweetHashtagCreateNestedManyWithoutTweetInput
  }

  export type TweetUncheckedCreateWithoutRetweetsInput = {
    id?: string
    content: string
    type?: $Enums.TweetType
    authorId: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: TweetUncheckedCreateNestedManyWithoutParentInput
    media?: MediaUncheckedCreateNestedManyWithoutTweetInput
    hashtags?: HashtagUncheckedCreateNestedManyWithoutTweetsInput
    likes?: LikeUncheckedCreateNestedManyWithoutTweetInput
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutTweetInput
    tweetMetrics?: TweetMetricsUncheckedCreateNestedManyWithoutTweetInput
    timelines?: TimelineUncheckedCreateNestedManyWithoutTweetInput
    tweetHashtags?: TweetHashtagUncheckedCreateNestedManyWithoutTweetInput
  }

  export type TweetCreateOrConnectWithoutRetweetsInput = {
    where: TweetWhereUniqueInput
    create: XOR<TweetCreateWithoutRetweetsInput, TweetUncheckedCreateWithoutRetweetsInput>
  }

  export type UserUpsertWithoutRetweetsInput = {
    update: XOR<UserUpdateWithoutRetweetsInput, UserUncheckedUpdateWithoutRetweetsInput>
    create: XOR<UserCreateWithoutRetweetsInput, UserUncheckedCreateWithoutRetweetsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRetweetsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRetweetsInput, UserUncheckedUpdateWithoutRetweetsInput>
  }

  export type UserUpdateWithoutRetweetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tweets?: TweetUpdateManyWithoutAuthorNestedInput
    followers?: FollowUpdateManyWithoutFollowerNestedInput
    following?: FollowUpdateManyWithoutFollowingNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    bookmarks?: BookmarkUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    timelines?: TimelineUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRetweetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tweets?: TweetUncheckedUpdateManyWithoutAuthorNestedInput
    followers?: FollowUncheckedUpdateManyWithoutFollowerNestedInput
    following?: FollowUncheckedUpdateManyWithoutFollowingNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    bookmarks?: BookmarkUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    timelines?: TimelineUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TweetUpsertWithoutRetweetsInput = {
    update: XOR<TweetUpdateWithoutRetweetsInput, TweetUncheckedUpdateWithoutRetweetsInput>
    create: XOR<TweetCreateWithoutRetweetsInput, TweetUncheckedCreateWithoutRetweetsInput>
    where?: TweetWhereInput
  }

  export type TweetUpdateToOneWithWhereWithoutRetweetsInput = {
    where?: TweetWhereInput
    data: XOR<TweetUpdateWithoutRetweetsInput, TweetUncheckedUpdateWithoutRetweetsInput>
  }

  export type TweetUpdateWithoutRetweetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumTweetTypeFieldUpdateOperationsInput | $Enums.TweetType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutTweetsNestedInput
    parent?: TweetUpdateOneWithoutRepliesNestedInput
    replies?: TweetUpdateManyWithoutParentNestedInput
    media?: MediaUpdateManyWithoutTweetNestedInput
    hashtags?: HashtagUpdateManyWithoutTweetsNestedInput
    likes?: LikeUpdateManyWithoutTweetNestedInput
    bookmarks?: BookmarkUpdateManyWithoutTweetNestedInput
    tweetMetrics?: TweetMetricsUpdateManyWithoutTweetNestedInput
    timelines?: TimelineUpdateManyWithoutTweetNestedInput
    tweetHashtags?: TweetHashtagUpdateManyWithoutTweetNestedInput
  }

  export type TweetUncheckedUpdateWithoutRetweetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumTweetTypeFieldUpdateOperationsInput | $Enums.TweetType
    authorId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: TweetUncheckedUpdateManyWithoutParentNestedInput
    media?: MediaUncheckedUpdateManyWithoutTweetNestedInput
    hashtags?: HashtagUncheckedUpdateManyWithoutTweetsNestedInput
    likes?: LikeUncheckedUpdateManyWithoutTweetNestedInput
    bookmarks?: BookmarkUncheckedUpdateManyWithoutTweetNestedInput
    tweetMetrics?: TweetMetricsUncheckedUpdateManyWithoutTweetNestedInput
    timelines?: TimelineUncheckedUpdateManyWithoutTweetNestedInput
    tweetHashtags?: TweetHashtagUncheckedUpdateManyWithoutTweetNestedInput
  }

  export type TweetCreateManyAuthorInput = {
    id?: string
    content: string
    type?: $Enums.TweetType
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FollowCreateManyFollowerInput = {
    id?: string
    followingId: string
    createdAt?: Date | string
  }

  export type FollowCreateManyFollowingInput = {
    id?: string
    followerId: string
    createdAt?: Date | string
  }

  export type LikeCreateManyUserInput = {
    id?: string
    tweetId: string
    createdAt?: Date | string
  }

  export type BookmarkCreateManyUserInput = {
    id?: string
    tweetId: string
    createdAt?: Date | string
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    actorId?: string | null
    type: $Enums.NotificationType
    tweetId?: string | null
    createdAt?: Date | string
  }

  export type RefreshTokenCreateManyUserInput = {
    id: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type TimelineCreateManyUserInput = {
    id?: string
    tweetId: string
    createdAt?: Date | string
  }

  export type RetweetCreateManyUserInput = {
    id?: string
    tweetId: string
    createdAt?: Date | string
  }

  export type TweetUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumTweetTypeFieldUpdateOperationsInput | $Enums.TweetType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: TweetUpdateOneWithoutRepliesNestedInput
    replies?: TweetUpdateManyWithoutParentNestedInput
    media?: MediaUpdateManyWithoutTweetNestedInput
    hashtags?: HashtagUpdateManyWithoutTweetsNestedInput
    likes?: LikeUpdateManyWithoutTweetNestedInput
    bookmarks?: BookmarkUpdateManyWithoutTweetNestedInput
    tweetMetrics?: TweetMetricsUpdateManyWithoutTweetNestedInput
    timelines?: TimelineUpdateManyWithoutTweetNestedInput
    tweetHashtags?: TweetHashtagUpdateManyWithoutTweetNestedInput
    retweets?: RetweetUpdateManyWithoutTweetNestedInput
  }

  export type TweetUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumTweetTypeFieldUpdateOperationsInput | $Enums.TweetType
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: TweetUncheckedUpdateManyWithoutParentNestedInput
    media?: MediaUncheckedUpdateManyWithoutTweetNestedInput
    hashtags?: HashtagUncheckedUpdateManyWithoutTweetsNestedInput
    likes?: LikeUncheckedUpdateManyWithoutTweetNestedInput
    bookmarks?: BookmarkUncheckedUpdateManyWithoutTweetNestedInput
    tweetMetrics?: TweetMetricsUncheckedUpdateManyWithoutTweetNestedInput
    timelines?: TimelineUncheckedUpdateManyWithoutTweetNestedInput
    tweetHashtags?: TweetHashtagUncheckedUpdateManyWithoutTweetNestedInput
    retweets?: RetweetUncheckedUpdateManyWithoutTweetNestedInput
  }

  export type TweetUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumTweetTypeFieldUpdateOperationsInput | $Enums.TweetType
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowUpdateWithoutFollowerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    following?: UserUpdateOneRequiredWithoutFollowingNestedInput
  }

  export type FollowUncheckedUpdateWithoutFollowerInput = {
    id?: StringFieldUpdateOperationsInput | string
    followingId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowUncheckedUpdateManyWithoutFollowerInput = {
    id?: StringFieldUpdateOperationsInput | string
    followingId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowUpdateWithoutFollowingInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    follower?: UserUpdateOneRequiredWithoutFollowersNestedInput
  }

  export type FollowUncheckedUpdateWithoutFollowingInput = {
    id?: StringFieldUpdateOperationsInput | string
    followerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowUncheckedUpdateManyWithoutFollowingInput = {
    id?: StringFieldUpdateOperationsInput | string
    followerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tweet?: TweetUpdateOneRequiredWithoutLikesNestedInput
  }

  export type LikeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tweetId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tweetId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tweet?: TweetUpdateOneRequiredWithoutBookmarksNestedInput
  }

  export type BookmarkUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tweetId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tweetId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    tweetId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    tweetId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    tweetId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimelineUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tweet?: TweetUpdateOneRequiredWithoutTimelinesNestedInput
  }

  export type TimelineUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tweetId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimelineUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tweetId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RetweetUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tweet?: TweetUpdateOneRequiredWithoutRetweetsNestedInput
  }

  export type RetweetUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tweetId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RetweetUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tweetId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TweetCreateManyParentInput = {
    id?: string
    content: string
    type?: $Enums.TweetType
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MediaCreateManyTweetInput = {
    id?: string
    url: string
    type: $Enums.MediaType
    createdAt?: Date | string
  }

  export type LikeCreateManyTweetInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type BookmarkCreateManyTweetInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type TweetMetricsCreateManyTweetInput = {
    likesCount?: number
    repliesCount?: number
    retweetsCount?: number
  }

  export type TimelineCreateManyTweetInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type TweetHashtagCreateManyTweetInput = {
    hashtagId: string
  }

  export type RetweetCreateManyTweetInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type TweetUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumTweetTypeFieldUpdateOperationsInput | $Enums.TweetType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutTweetsNestedInput
    replies?: TweetUpdateManyWithoutParentNestedInput
    media?: MediaUpdateManyWithoutTweetNestedInput
    hashtags?: HashtagUpdateManyWithoutTweetsNestedInput
    likes?: LikeUpdateManyWithoutTweetNestedInput
    bookmarks?: BookmarkUpdateManyWithoutTweetNestedInput
    tweetMetrics?: TweetMetricsUpdateManyWithoutTweetNestedInput
    timelines?: TimelineUpdateManyWithoutTweetNestedInput
    tweetHashtags?: TweetHashtagUpdateManyWithoutTweetNestedInput
    retweets?: RetweetUpdateManyWithoutTweetNestedInput
  }

  export type TweetUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumTweetTypeFieldUpdateOperationsInput | $Enums.TweetType
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: TweetUncheckedUpdateManyWithoutParentNestedInput
    media?: MediaUncheckedUpdateManyWithoutTweetNestedInput
    hashtags?: HashtagUncheckedUpdateManyWithoutTweetsNestedInput
    likes?: LikeUncheckedUpdateManyWithoutTweetNestedInput
    bookmarks?: BookmarkUncheckedUpdateManyWithoutTweetNestedInput
    tweetMetrics?: TweetMetricsUncheckedUpdateManyWithoutTweetNestedInput
    timelines?: TimelineUncheckedUpdateManyWithoutTweetNestedInput
    tweetHashtags?: TweetHashtagUncheckedUpdateManyWithoutTweetNestedInput
    retweets?: RetweetUncheckedUpdateManyWithoutTweetNestedInput
  }

  export type TweetUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumTweetTypeFieldUpdateOperationsInput | $Enums.TweetType
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUpdateWithoutTweetInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUncheckedUpdateWithoutTweetInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUncheckedUpdateManyWithoutTweetInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HashtagUpdateWithoutTweetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tweetHashtags?: TweetHashtagUpdateManyWithoutHashtagNestedInput
  }

  export type HashtagUncheckedUpdateWithoutTweetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tweetHashtags?: TweetHashtagUncheckedUpdateManyWithoutHashtagNestedInput
  }

  export type HashtagUncheckedUpdateManyWithoutTweetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LikeUpdateWithoutTweetInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLikesNestedInput
  }

  export type LikeUncheckedUpdateWithoutTweetInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUncheckedUpdateManyWithoutTweetInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkUpdateWithoutTweetInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookmarksNestedInput
  }

  export type BookmarkUncheckedUpdateWithoutTweetInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkUncheckedUpdateManyWithoutTweetInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TweetMetricsUpdateWithoutTweetInput = {
    likesCount?: IntFieldUpdateOperationsInput | number
    repliesCount?: IntFieldUpdateOperationsInput | number
    retweetsCount?: IntFieldUpdateOperationsInput | number
  }

  export type TweetMetricsUncheckedUpdateWithoutTweetInput = {
    likesCount?: IntFieldUpdateOperationsInput | number
    repliesCount?: IntFieldUpdateOperationsInput | number
    retweetsCount?: IntFieldUpdateOperationsInput | number
  }

  export type TweetMetricsUncheckedUpdateManyWithoutTweetInput = {
    likesCount?: IntFieldUpdateOperationsInput | number
    repliesCount?: IntFieldUpdateOperationsInput | number
    retweetsCount?: IntFieldUpdateOperationsInput | number
  }

  export type TimelineUpdateWithoutTweetInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTimelinesNestedInput
  }

  export type TimelineUncheckedUpdateWithoutTweetInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimelineUncheckedUpdateManyWithoutTweetInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TweetHashtagUpdateWithoutTweetInput = {
    hashtag?: HashtagUpdateOneRequiredWithoutTweetHashtagsNestedInput
  }

  export type TweetHashtagUncheckedUpdateWithoutTweetInput = {
    hashtagId?: StringFieldUpdateOperationsInput | string
  }

  export type TweetHashtagUncheckedUpdateManyWithoutTweetInput = {
    hashtagId?: StringFieldUpdateOperationsInput | string
  }

  export type RetweetUpdateWithoutTweetInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRetweetsNestedInput
  }

  export type RetweetUncheckedUpdateWithoutTweetInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RetweetUncheckedUpdateManyWithoutTweetInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TweetHashtagCreateManyHashtagInput = {
    tweetId: string
  }

  export type TweetUpdateWithoutHashtagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumTweetTypeFieldUpdateOperationsInput | $Enums.TweetType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutTweetsNestedInput
    parent?: TweetUpdateOneWithoutRepliesNestedInput
    replies?: TweetUpdateManyWithoutParentNestedInput
    media?: MediaUpdateManyWithoutTweetNestedInput
    likes?: LikeUpdateManyWithoutTweetNestedInput
    bookmarks?: BookmarkUpdateManyWithoutTweetNestedInput
    tweetMetrics?: TweetMetricsUpdateManyWithoutTweetNestedInput
    timelines?: TimelineUpdateManyWithoutTweetNestedInput
    tweetHashtags?: TweetHashtagUpdateManyWithoutTweetNestedInput
    retweets?: RetweetUpdateManyWithoutTweetNestedInput
  }

  export type TweetUncheckedUpdateWithoutHashtagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumTweetTypeFieldUpdateOperationsInput | $Enums.TweetType
    authorId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: TweetUncheckedUpdateManyWithoutParentNestedInput
    media?: MediaUncheckedUpdateManyWithoutTweetNestedInput
    likes?: LikeUncheckedUpdateManyWithoutTweetNestedInput
    bookmarks?: BookmarkUncheckedUpdateManyWithoutTweetNestedInput
    tweetMetrics?: TweetMetricsUncheckedUpdateManyWithoutTweetNestedInput
    timelines?: TimelineUncheckedUpdateManyWithoutTweetNestedInput
    tweetHashtags?: TweetHashtagUncheckedUpdateManyWithoutTweetNestedInput
    retweets?: RetweetUncheckedUpdateManyWithoutTweetNestedInput
  }

  export type TweetUncheckedUpdateManyWithoutHashtagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumTweetTypeFieldUpdateOperationsInput | $Enums.TweetType
    authorId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TweetHashtagUpdateWithoutHashtagInput = {
    tweet?: TweetUpdateOneRequiredWithoutTweetHashtagsNestedInput
  }

  export type TweetHashtagUncheckedUpdateWithoutHashtagInput = {
    tweetId?: StringFieldUpdateOperationsInput | string
  }

  export type TweetHashtagUncheckedUpdateManyWithoutHashtagInput = {
    tweetId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TweetCountOutputTypeDefaultArgs instead
     */
    export type TweetCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TweetCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HashtagCountOutputTypeDefaultArgs instead
     */
    export type HashtagCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HashtagCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TweetDefaultArgs instead
     */
    export type TweetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TweetDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FollowDefaultArgs instead
     */
    export type FollowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FollowDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LikeDefaultArgs instead
     */
    export type LikeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LikeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BookmarkDefaultArgs instead
     */
    export type BookmarkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BookmarkDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MediaDefaultArgs instead
     */
    export type MediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MediaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HashtagDefaultArgs instead
     */
    export type HashtagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HashtagDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TweetHashtagDefaultArgs instead
     */
    export type TweetHashtagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TweetHashtagDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NotificationDefaultArgs instead
     */
    export type NotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NotificationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RefreshTokenDefaultArgs instead
     */
    export type RefreshTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RefreshTokenDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TweetMetricsDefaultArgs instead
     */
    export type TweetMetricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TweetMetricsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TimelineDefaultArgs instead
     */
    export type TimelineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TimelineDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RetweetDefaultArgs instead
     */
    export type RetweetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RetweetDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}