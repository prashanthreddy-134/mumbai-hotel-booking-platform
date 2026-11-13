
/**
 * Client
**/

import * as runtime from './runtime/client.js';
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
 * Model Hotel
 * 
 */
export type Hotel = $Result.DefaultSelection<Prisma.$HotelPayload>
/**
 * Model HotelImage
 * 
 */
export type HotelImage = $Result.DefaultSelection<Prisma.$HotelImagePayload>
/**
 * Model HotelAmenity
 * 
 */
export type HotelAmenity = $Result.DefaultSelection<Prisma.$HotelAmenityPayload>
/**
 * Model HotelPolicy
 * 
 */
export type HotelPolicy = $Result.DefaultSelection<Prisma.$HotelPolicyPayload>
/**
 * Model Room
 * 
 */
export type Room = $Result.DefaultSelection<Prisma.$RoomPayload>
/**
 * Model RoomAmenity
 * 
 */
export type RoomAmenity = $Result.DefaultSelection<Prisma.$RoomAmenityPayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model PaymentWebhookEvent
 * 
 */
export type PaymentWebhookEvent = $Result.DefaultSelection<Prisma.$PaymentWebhookEventPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hotel`: Exposes CRUD operations for the **Hotel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hotels
    * const hotels = await prisma.hotel.findMany()
    * ```
    */
  get hotel(): Prisma.HotelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hotelImage`: Exposes CRUD operations for the **HotelImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HotelImages
    * const hotelImages = await prisma.hotelImage.findMany()
    * ```
    */
  get hotelImage(): Prisma.HotelImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hotelAmenity`: Exposes CRUD operations for the **HotelAmenity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HotelAmenities
    * const hotelAmenities = await prisma.hotelAmenity.findMany()
    * ```
    */
  get hotelAmenity(): Prisma.HotelAmenityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hotelPolicy`: Exposes CRUD operations for the **HotelPolicy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HotelPolicies
    * const hotelPolicies = await prisma.hotelPolicy.findMany()
    * ```
    */
  get hotelPolicy(): Prisma.HotelPolicyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.room`: Exposes CRUD operations for the **Room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.room.findMany()
    * ```
    */
  get room(): Prisma.RoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roomAmenity`: Exposes CRUD operations for the **RoomAmenity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoomAmenities
    * const roomAmenities = await prisma.roomAmenity.findMany()
    * ```
    */
  get roomAmenity(): Prisma.RoomAmenityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paymentWebhookEvent`: Exposes CRUD operations for the **PaymentWebhookEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentWebhookEvents
    * const paymentWebhookEvents = await prisma.paymentWebhookEvent.findMany()
    * ```
    */
  get paymentWebhookEvent(): Prisma.PaymentWebhookEventDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.1
   * Query Engine version: d1b3f377ca835d73fd50954a5e22128b9ebdd6b8
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Hotel: 'Hotel',
    HotelImage: 'HotelImage',
    HotelAmenity: 'HotelAmenity',
    HotelPolicy: 'HotelPolicy',
    Room: 'Room',
    RoomAmenity: 'RoomAmenity',
    Booking: 'Booking',
    Payment: 'Payment',
    PaymentWebhookEvent: 'PaymentWebhookEvent'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "hotel" | "hotelImage" | "hotelAmenity" | "hotelPolicy" | "room" | "roomAmenity" | "booking" | "payment" | "paymentWebhookEvent"
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      Hotel: {
        payload: Prisma.$HotelPayload<ExtArgs>
        fields: Prisma.HotelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HotelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HotelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>
          }
          findFirst: {
            args: Prisma.HotelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HotelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>
          }
          findMany: {
            args: Prisma.HotelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>[]
          }
          create: {
            args: Prisma.HotelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>
          }
          createMany: {
            args: Prisma.HotelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HotelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>[]
          }
          delete: {
            args: Prisma.HotelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>
          }
          update: {
            args: Prisma.HotelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>
          }
          deleteMany: {
            args: Prisma.HotelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HotelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HotelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>[]
          }
          upsert: {
            args: Prisma.HotelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>
          }
          aggregate: {
            args: Prisma.HotelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHotel>
          }
          groupBy: {
            args: Prisma.HotelGroupByArgs<ExtArgs>
            result: $Utils.Optional<HotelGroupByOutputType>[]
          }
          count: {
            args: Prisma.HotelCountArgs<ExtArgs>
            result: $Utils.Optional<HotelCountAggregateOutputType> | number
          }
        }
      }
      HotelImage: {
        payload: Prisma.$HotelImagePayload<ExtArgs>
        fields: Prisma.HotelImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HotelImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HotelImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelImagePayload>
          }
          findFirst: {
            args: Prisma.HotelImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HotelImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelImagePayload>
          }
          findMany: {
            args: Prisma.HotelImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelImagePayload>[]
          }
          create: {
            args: Prisma.HotelImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelImagePayload>
          }
          createMany: {
            args: Prisma.HotelImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HotelImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelImagePayload>[]
          }
          delete: {
            args: Prisma.HotelImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelImagePayload>
          }
          update: {
            args: Prisma.HotelImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelImagePayload>
          }
          deleteMany: {
            args: Prisma.HotelImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HotelImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HotelImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelImagePayload>[]
          }
          upsert: {
            args: Prisma.HotelImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelImagePayload>
          }
          aggregate: {
            args: Prisma.HotelImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHotelImage>
          }
          groupBy: {
            args: Prisma.HotelImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<HotelImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.HotelImageCountArgs<ExtArgs>
            result: $Utils.Optional<HotelImageCountAggregateOutputType> | number
          }
        }
      }
      HotelAmenity: {
        payload: Prisma.$HotelAmenityPayload<ExtArgs>
        fields: Prisma.HotelAmenityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HotelAmenityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelAmenityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HotelAmenityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelAmenityPayload>
          }
          findFirst: {
            args: Prisma.HotelAmenityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelAmenityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HotelAmenityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelAmenityPayload>
          }
          findMany: {
            args: Prisma.HotelAmenityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelAmenityPayload>[]
          }
          create: {
            args: Prisma.HotelAmenityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelAmenityPayload>
          }
          createMany: {
            args: Prisma.HotelAmenityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HotelAmenityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelAmenityPayload>[]
          }
          delete: {
            args: Prisma.HotelAmenityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelAmenityPayload>
          }
          update: {
            args: Prisma.HotelAmenityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelAmenityPayload>
          }
          deleteMany: {
            args: Prisma.HotelAmenityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HotelAmenityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HotelAmenityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelAmenityPayload>[]
          }
          upsert: {
            args: Prisma.HotelAmenityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelAmenityPayload>
          }
          aggregate: {
            args: Prisma.HotelAmenityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHotelAmenity>
          }
          groupBy: {
            args: Prisma.HotelAmenityGroupByArgs<ExtArgs>
            result: $Utils.Optional<HotelAmenityGroupByOutputType>[]
          }
          count: {
            args: Prisma.HotelAmenityCountArgs<ExtArgs>
            result: $Utils.Optional<HotelAmenityCountAggregateOutputType> | number
          }
        }
      }
      HotelPolicy: {
        payload: Prisma.$HotelPolicyPayload<ExtArgs>
        fields: Prisma.HotelPolicyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HotelPolicyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPolicyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HotelPolicyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPolicyPayload>
          }
          findFirst: {
            args: Prisma.HotelPolicyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPolicyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HotelPolicyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPolicyPayload>
          }
          findMany: {
            args: Prisma.HotelPolicyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPolicyPayload>[]
          }
          create: {
            args: Prisma.HotelPolicyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPolicyPayload>
          }
          createMany: {
            args: Prisma.HotelPolicyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HotelPolicyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPolicyPayload>[]
          }
          delete: {
            args: Prisma.HotelPolicyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPolicyPayload>
          }
          update: {
            args: Prisma.HotelPolicyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPolicyPayload>
          }
          deleteMany: {
            args: Prisma.HotelPolicyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HotelPolicyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HotelPolicyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPolicyPayload>[]
          }
          upsert: {
            args: Prisma.HotelPolicyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPolicyPayload>
          }
          aggregate: {
            args: Prisma.HotelPolicyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHotelPolicy>
          }
          groupBy: {
            args: Prisma.HotelPolicyGroupByArgs<ExtArgs>
            result: $Utils.Optional<HotelPolicyGroupByOutputType>[]
          }
          count: {
            args: Prisma.HotelPolicyCountArgs<ExtArgs>
            result: $Utils.Optional<HotelPolicyCountAggregateOutputType> | number
          }
        }
      }
      Room: {
        payload: Prisma.$RoomPayload<ExtArgs>
        fields: Prisma.RoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findFirst: {
            args: Prisma.RoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findMany: {
            args: Prisma.RoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          create: {
            args: Prisma.RoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          createMany: {
            args: Prisma.RoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          delete: {
            args: Prisma.RoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          update: {
            args: Prisma.RoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          deleteMany: {
            args: Prisma.RoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          upsert: {
            args: Prisma.RoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          aggregate: {
            args: Prisma.RoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoom>
          }
          groupBy: {
            args: Prisma.RoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomCountArgs<ExtArgs>
            result: $Utils.Optional<RoomCountAggregateOutputType> | number
          }
        }
      }
      RoomAmenity: {
        payload: Prisma.$RoomAmenityPayload<ExtArgs>
        fields: Prisma.RoomAmenityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomAmenityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomAmenityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomAmenityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomAmenityPayload>
          }
          findFirst: {
            args: Prisma.RoomAmenityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomAmenityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomAmenityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomAmenityPayload>
          }
          findMany: {
            args: Prisma.RoomAmenityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomAmenityPayload>[]
          }
          create: {
            args: Prisma.RoomAmenityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomAmenityPayload>
          }
          createMany: {
            args: Prisma.RoomAmenityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomAmenityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomAmenityPayload>[]
          }
          delete: {
            args: Prisma.RoomAmenityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomAmenityPayload>
          }
          update: {
            args: Prisma.RoomAmenityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomAmenityPayload>
          }
          deleteMany: {
            args: Prisma.RoomAmenityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomAmenityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomAmenityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomAmenityPayload>[]
          }
          upsert: {
            args: Prisma.RoomAmenityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomAmenityPayload>
          }
          aggregate: {
            args: Prisma.RoomAmenityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoomAmenity>
          }
          groupBy: {
            args: Prisma.RoomAmenityGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomAmenityGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomAmenityCountArgs<ExtArgs>
            result: $Utils.Optional<RoomAmenityCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      PaymentWebhookEvent: {
        payload: Prisma.$PaymentWebhookEventPayload<ExtArgs>
        fields: Prisma.PaymentWebhookEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentWebhookEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentWebhookEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentWebhookEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentWebhookEventPayload>
          }
          findFirst: {
            args: Prisma.PaymentWebhookEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentWebhookEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentWebhookEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentWebhookEventPayload>
          }
          findMany: {
            args: Prisma.PaymentWebhookEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentWebhookEventPayload>[]
          }
          create: {
            args: Prisma.PaymentWebhookEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentWebhookEventPayload>
          }
          createMany: {
            args: Prisma.PaymentWebhookEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentWebhookEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentWebhookEventPayload>[]
          }
          delete: {
            args: Prisma.PaymentWebhookEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentWebhookEventPayload>
          }
          update: {
            args: Prisma.PaymentWebhookEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentWebhookEventPayload>
          }
          deleteMany: {
            args: Prisma.PaymentWebhookEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentWebhookEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentWebhookEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentWebhookEventPayload>[]
          }
          upsert: {
            args: Prisma.PaymentWebhookEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentWebhookEventPayload>
          }
          aggregate: {
            args: Prisma.PaymentWebhookEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentWebhookEvent>
          }
          groupBy: {
            args: Prisma.PaymentWebhookEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentWebhookEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentWebhookEventCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentWebhookEventCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    hotel?: HotelOmit
    hotelImage?: HotelImageOmit
    hotelAmenity?: HotelAmenityOmit
    hotelPolicy?: HotelPolicyOmit
    room?: RoomOmit
    roomAmenity?: RoomAmenityOmit
    booking?: BookingOmit
    payment?: PaymentOmit
    paymentWebhookEvent?: PaymentWebhookEventOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
    bookings: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | UserCountOutputTypeCountBookingsArgs
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
  export type UserCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Count Type HotelCountOutputType
   */

  export type HotelCountOutputType = {
    rooms: number
    images: number
    amenities: number
    policies: number
  }

  export type HotelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | HotelCountOutputTypeCountRoomsArgs
    images?: boolean | HotelCountOutputTypeCountImagesArgs
    amenities?: boolean | HotelCountOutputTypeCountAmenitiesArgs
    policies?: boolean | HotelCountOutputTypeCountPoliciesArgs
  }

  // Custom InputTypes
  /**
   * HotelCountOutputType without action
   */
  export type HotelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelCountOutputType
     */
    select?: HotelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HotelCountOutputType without action
   */
  export type HotelCountOutputTypeCountRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
  }

  /**
   * HotelCountOutputType without action
   */
  export type HotelCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HotelImageWhereInput
  }

  /**
   * HotelCountOutputType without action
   */
  export type HotelCountOutputTypeCountAmenitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HotelAmenityWhereInput
  }

  /**
   * HotelCountOutputType without action
   */
  export type HotelCountOutputTypeCountPoliciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HotelPolicyWhereInput
  }


  /**
   * Count Type RoomCountOutputType
   */

  export type RoomCountOutputType = {
    bookings: number
    amenities: number
  }

  export type RoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | RoomCountOutputTypeCountBookingsArgs
    amenities?: boolean | RoomCountOutputTypeCountAmenitiesArgs
  }

  // Custom InputTypes
  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCountOutputType
     */
    select?: RoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountAmenitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomAmenityWhereInput
  }


  /**
   * Count Type BookingCountOutputType
   */

  export type BookingCountOutputType = {
    payments: number
  }

  export type BookingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | BookingCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingCountOutputType
     */
    select?: BookingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
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
    name: string | null
    email: string | null
    password: string | null
    role: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
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
    name: string
    email: string
    password: string
    role: string
    createdAt: Date
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
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      role: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends User$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, User$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.bookings
   */
  export type User$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Hotel
   */

  export type AggregateHotel = {
    _count: HotelCountAggregateOutputType | null
    _avg: HotelAvgAggregateOutputType | null
    _sum: HotelSumAggregateOutputType | null
    _min: HotelMinAggregateOutputType | null
    _max: HotelMaxAggregateOutputType | null
  }

  export type HotelAvgAggregateOutputType = {
    price: number | null
    rating: number | null
  }

  export type HotelSumAggregateOutputType = {
    price: number | null
    rating: number | null
  }

  export type HotelMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    location: string | null
    address: string | null
    price: number | null
    rating: number | null
    image: string | null
    createdAt: Date | null
  }

  export type HotelMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    location: string | null
    address: string | null
    price: number | null
    rating: number | null
    image: string | null
    createdAt: Date | null
  }

  export type HotelCountAggregateOutputType = {
    id: number
    name: number
    description: number
    location: number
    address: number
    price: number
    rating: number
    image: number
    createdAt: number
    _all: number
  }


  export type HotelAvgAggregateInputType = {
    price?: true
    rating?: true
  }

  export type HotelSumAggregateInputType = {
    price?: true
    rating?: true
  }

  export type HotelMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    location?: true
    address?: true
    price?: true
    rating?: true
    image?: true
    createdAt?: true
  }

  export type HotelMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    location?: true
    address?: true
    price?: true
    rating?: true
    image?: true
    createdAt?: true
  }

  export type HotelCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    location?: true
    address?: true
    price?: true
    rating?: true
    image?: true
    createdAt?: true
    _all?: true
  }

  export type HotelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hotel to aggregate.
     */
    where?: HotelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hotels to fetch.
     */
    orderBy?: HotelOrderByWithRelationInput | HotelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HotelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hotels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hotels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hotels
    **/
    _count?: true | HotelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HotelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HotelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HotelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HotelMaxAggregateInputType
  }

  export type GetHotelAggregateType<T extends HotelAggregateArgs> = {
        [P in keyof T & keyof AggregateHotel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHotel[P]>
      : GetScalarType<T[P], AggregateHotel[P]>
  }




  export type HotelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HotelWhereInput
    orderBy?: HotelOrderByWithAggregationInput | HotelOrderByWithAggregationInput[]
    by: HotelScalarFieldEnum[] | HotelScalarFieldEnum
    having?: HotelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HotelCountAggregateInputType | true
    _avg?: HotelAvgAggregateInputType
    _sum?: HotelSumAggregateInputType
    _min?: HotelMinAggregateInputType
    _max?: HotelMaxAggregateInputType
  }

  export type HotelGroupByOutputType = {
    id: string
    name: string
    description: string
    location: string
    address: string
    price: number
    rating: number
    image: string | null
    createdAt: Date
    _count: HotelCountAggregateOutputType | null
    _avg: HotelAvgAggregateOutputType | null
    _sum: HotelSumAggregateOutputType | null
    _min: HotelMinAggregateOutputType | null
    _max: HotelMaxAggregateOutputType | null
  }

  type GetHotelGroupByPayload<T extends HotelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HotelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HotelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HotelGroupByOutputType[P]>
            : GetScalarType<T[P], HotelGroupByOutputType[P]>
        }
      >
    >


  export type HotelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    location?: boolean
    address?: boolean
    price?: boolean
    rating?: boolean
    image?: boolean
    createdAt?: boolean
    rooms?: boolean | Hotel$roomsArgs<ExtArgs>
    images?: boolean | Hotel$imagesArgs<ExtArgs>
    amenities?: boolean | Hotel$amenitiesArgs<ExtArgs>
    policies?: boolean | Hotel$policiesArgs<ExtArgs>
    _count?: boolean | HotelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hotel"]>

  export type HotelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    location?: boolean
    address?: boolean
    price?: boolean
    rating?: boolean
    image?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["hotel"]>

  export type HotelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    location?: boolean
    address?: boolean
    price?: boolean
    rating?: boolean
    image?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["hotel"]>

  export type HotelSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    location?: boolean
    address?: boolean
    price?: boolean
    rating?: boolean
    image?: boolean
    createdAt?: boolean
  }

  export type HotelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "location" | "address" | "price" | "rating" | "image" | "createdAt", ExtArgs["result"]["hotel"]>
  export type HotelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | Hotel$roomsArgs<ExtArgs>
    images?: boolean | Hotel$imagesArgs<ExtArgs>
    amenities?: boolean | Hotel$amenitiesArgs<ExtArgs>
    policies?: boolean | Hotel$policiesArgs<ExtArgs>
    _count?: boolean | HotelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HotelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type HotelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $HotelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hotel"
    objects: {
      rooms: Prisma.$RoomPayload<ExtArgs>[]
      images: Prisma.$HotelImagePayload<ExtArgs>[]
      amenities: Prisma.$HotelAmenityPayload<ExtArgs>[]
      policies: Prisma.$HotelPolicyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      location: string
      address: string
      price: number
      rating: number
      image: string | null
      createdAt: Date
    }, ExtArgs["result"]["hotel"]>
    composites: {}
  }

  type HotelGetPayload<S extends boolean | null | undefined | HotelDefaultArgs> = $Result.GetResult<Prisma.$HotelPayload, S>

  type HotelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HotelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HotelCountAggregateInputType | true
    }

  export interface HotelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hotel'], meta: { name: 'Hotel' } }
    /**
     * Find zero or one Hotel that matches the filter.
     * @param {HotelFindUniqueArgs} args - Arguments to find a Hotel
     * @example
     * // Get one Hotel
     * const hotel = await prisma.hotel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HotelFindUniqueArgs>(args: SelectSubset<T, HotelFindUniqueArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hotel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HotelFindUniqueOrThrowArgs} args - Arguments to find a Hotel
     * @example
     * // Get one Hotel
     * const hotel = await prisma.hotel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HotelFindUniqueOrThrowArgs>(args: SelectSubset<T, HotelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hotel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelFindFirstArgs} args - Arguments to find a Hotel
     * @example
     * // Get one Hotel
     * const hotel = await prisma.hotel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HotelFindFirstArgs>(args?: SelectSubset<T, HotelFindFirstArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hotel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelFindFirstOrThrowArgs} args - Arguments to find a Hotel
     * @example
     * // Get one Hotel
     * const hotel = await prisma.hotel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HotelFindFirstOrThrowArgs>(args?: SelectSubset<T, HotelFindFirstOrThrowArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hotels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hotels
     * const hotels = await prisma.hotel.findMany()
     * 
     * // Get first 10 Hotels
     * const hotels = await prisma.hotel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hotelWithIdOnly = await prisma.hotel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HotelFindManyArgs>(args?: SelectSubset<T, HotelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hotel.
     * @param {HotelCreateArgs} args - Arguments to create a Hotel.
     * @example
     * // Create one Hotel
     * const Hotel = await prisma.hotel.create({
     *   data: {
     *     // ... data to create a Hotel
     *   }
     * })
     * 
     */
    create<T extends HotelCreateArgs>(args: SelectSubset<T, HotelCreateArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hotels.
     * @param {HotelCreateManyArgs} args - Arguments to create many Hotels.
     * @example
     * // Create many Hotels
     * const hotel = await prisma.hotel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HotelCreateManyArgs>(args?: SelectSubset<T, HotelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hotels and returns the data saved in the database.
     * @param {HotelCreateManyAndReturnArgs} args - Arguments to create many Hotels.
     * @example
     * // Create many Hotels
     * const hotel = await prisma.hotel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hotels and only return the `id`
     * const hotelWithIdOnly = await prisma.hotel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HotelCreateManyAndReturnArgs>(args?: SelectSubset<T, HotelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hotel.
     * @param {HotelDeleteArgs} args - Arguments to delete one Hotel.
     * @example
     * // Delete one Hotel
     * const Hotel = await prisma.hotel.delete({
     *   where: {
     *     // ... filter to delete one Hotel
     *   }
     * })
     * 
     */
    delete<T extends HotelDeleteArgs>(args: SelectSubset<T, HotelDeleteArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hotel.
     * @param {HotelUpdateArgs} args - Arguments to update one Hotel.
     * @example
     * // Update one Hotel
     * const hotel = await prisma.hotel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HotelUpdateArgs>(args: SelectSubset<T, HotelUpdateArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hotels.
     * @param {HotelDeleteManyArgs} args - Arguments to filter Hotels to delete.
     * @example
     * // Delete a few Hotels
     * const { count } = await prisma.hotel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HotelDeleteManyArgs>(args?: SelectSubset<T, HotelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hotels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hotels
     * const hotel = await prisma.hotel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HotelUpdateManyArgs>(args: SelectSubset<T, HotelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hotels and returns the data updated in the database.
     * @param {HotelUpdateManyAndReturnArgs} args - Arguments to update many Hotels.
     * @example
     * // Update many Hotels
     * const hotel = await prisma.hotel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hotels and only return the `id`
     * const hotelWithIdOnly = await prisma.hotel.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HotelUpdateManyAndReturnArgs>(args: SelectSubset<T, HotelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hotel.
     * @param {HotelUpsertArgs} args - Arguments to update or create a Hotel.
     * @example
     * // Update or create a Hotel
     * const hotel = await prisma.hotel.upsert({
     *   create: {
     *     // ... data to create a Hotel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hotel we want to update
     *   }
     * })
     */
    upsert<T extends HotelUpsertArgs>(args: SelectSubset<T, HotelUpsertArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hotels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelCountArgs} args - Arguments to filter Hotels to count.
     * @example
     * // Count the number of Hotels
     * const count = await prisma.hotel.count({
     *   where: {
     *     // ... the filter for the Hotels we want to count
     *   }
     * })
    **/
    count<T extends HotelCountArgs>(
      args?: Subset<T, HotelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HotelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hotel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HotelAggregateArgs>(args: Subset<T, HotelAggregateArgs>): Prisma.PrismaPromise<GetHotelAggregateType<T>>

    /**
     * Group by Hotel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelGroupByArgs} args - Group by arguments.
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
      T extends HotelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HotelGroupByArgs['orderBy'] }
        : { orderBy?: HotelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HotelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHotelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hotel model
   */
  readonly fields: HotelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hotel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HotelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rooms<T extends Hotel$roomsArgs<ExtArgs> = {}>(args?: Subset<T, Hotel$roomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    images<T extends Hotel$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Hotel$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    amenities<T extends Hotel$amenitiesArgs<ExtArgs> = {}>(args?: Subset<T, Hotel$amenitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelAmenityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    policies<T extends Hotel$policiesArgs<ExtArgs> = {}>(args?: Subset<T, Hotel$policiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelPolicyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Hotel model
   */
  interface HotelFieldRefs {
    readonly id: FieldRef<"Hotel", 'String'>
    readonly name: FieldRef<"Hotel", 'String'>
    readonly description: FieldRef<"Hotel", 'String'>
    readonly location: FieldRef<"Hotel", 'String'>
    readonly address: FieldRef<"Hotel", 'String'>
    readonly price: FieldRef<"Hotel", 'Float'>
    readonly rating: FieldRef<"Hotel", 'Float'>
    readonly image: FieldRef<"Hotel", 'String'>
    readonly createdAt: FieldRef<"Hotel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Hotel findUnique
   */
  export type HotelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * Filter, which Hotel to fetch.
     */
    where: HotelWhereUniqueInput
  }

  /**
   * Hotel findUniqueOrThrow
   */
  export type HotelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * Filter, which Hotel to fetch.
     */
    where: HotelWhereUniqueInput
  }

  /**
   * Hotel findFirst
   */
  export type HotelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * Filter, which Hotel to fetch.
     */
    where?: HotelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hotels to fetch.
     */
    orderBy?: HotelOrderByWithRelationInput | HotelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hotels.
     */
    cursor?: HotelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hotels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hotels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hotels.
     */
    distinct?: HotelScalarFieldEnum | HotelScalarFieldEnum[]
  }

  /**
   * Hotel findFirstOrThrow
   */
  export type HotelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * Filter, which Hotel to fetch.
     */
    where?: HotelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hotels to fetch.
     */
    orderBy?: HotelOrderByWithRelationInput | HotelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hotels.
     */
    cursor?: HotelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hotels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hotels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hotels.
     */
    distinct?: HotelScalarFieldEnum | HotelScalarFieldEnum[]
  }

  /**
   * Hotel findMany
   */
  export type HotelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * Filter, which Hotels to fetch.
     */
    where?: HotelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hotels to fetch.
     */
    orderBy?: HotelOrderByWithRelationInput | HotelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hotels.
     */
    cursor?: HotelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hotels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hotels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hotels.
     */
    distinct?: HotelScalarFieldEnum | HotelScalarFieldEnum[]
  }

  /**
   * Hotel create
   */
  export type HotelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * The data needed to create a Hotel.
     */
    data: XOR<HotelCreateInput, HotelUncheckedCreateInput>
  }

  /**
   * Hotel createMany
   */
  export type HotelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hotels.
     */
    data: HotelCreateManyInput | HotelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hotel createManyAndReturn
   */
  export type HotelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * The data used to create many Hotels.
     */
    data: HotelCreateManyInput | HotelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hotel update
   */
  export type HotelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * The data needed to update a Hotel.
     */
    data: XOR<HotelUpdateInput, HotelUncheckedUpdateInput>
    /**
     * Choose, which Hotel to update.
     */
    where: HotelWhereUniqueInput
  }

  /**
   * Hotel updateMany
   */
  export type HotelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Hotels.
     */
    data: XOR<HotelUpdateManyMutationInput, HotelUncheckedUpdateManyInput>
    /**
     * Filter which Hotels to update
     */
    where?: HotelWhereInput
    /**
     * Limit how many Hotels to update.
     */
    limit?: number
  }

  /**
   * Hotel updateManyAndReturn
   */
  export type HotelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * The data used to update Hotels.
     */
    data: XOR<HotelUpdateManyMutationInput, HotelUncheckedUpdateManyInput>
    /**
     * Filter which Hotels to update
     */
    where?: HotelWhereInput
    /**
     * Limit how many Hotels to update.
     */
    limit?: number
  }

  /**
   * Hotel upsert
   */
  export type HotelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * The filter to search for the Hotel to update in case it exists.
     */
    where: HotelWhereUniqueInput
    /**
     * In case the Hotel found by the `where` argument doesn't exist, create a new Hotel with this data.
     */
    create: XOR<HotelCreateInput, HotelUncheckedCreateInput>
    /**
     * In case the Hotel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HotelUpdateInput, HotelUncheckedUpdateInput>
  }

  /**
   * Hotel delete
   */
  export type HotelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * Filter which Hotel to delete.
     */
    where: HotelWhereUniqueInput
  }

  /**
   * Hotel deleteMany
   */
  export type HotelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hotels to delete
     */
    where?: HotelWhereInput
    /**
     * Limit how many Hotels to delete.
     */
    limit?: number
  }

  /**
   * Hotel.rooms
   */
  export type Hotel$roomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    cursor?: RoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Hotel.images
   */
  export type Hotel$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelImage
     */
    select?: HotelImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelImage
     */
    omit?: HotelImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelImageInclude<ExtArgs> | null
    where?: HotelImageWhereInput
    orderBy?: HotelImageOrderByWithRelationInput | HotelImageOrderByWithRelationInput[]
    cursor?: HotelImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HotelImageScalarFieldEnum | HotelImageScalarFieldEnum[]
  }

  /**
   * Hotel.amenities
   */
  export type Hotel$amenitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelAmenity
     */
    select?: HotelAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelAmenity
     */
    omit?: HotelAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelAmenityInclude<ExtArgs> | null
    where?: HotelAmenityWhereInput
    orderBy?: HotelAmenityOrderByWithRelationInput | HotelAmenityOrderByWithRelationInput[]
    cursor?: HotelAmenityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HotelAmenityScalarFieldEnum | HotelAmenityScalarFieldEnum[]
  }

  /**
   * Hotel.policies
   */
  export type Hotel$policiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelPolicy
     */
    select?: HotelPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelPolicy
     */
    omit?: HotelPolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelPolicyInclude<ExtArgs> | null
    where?: HotelPolicyWhereInput
    orderBy?: HotelPolicyOrderByWithRelationInput | HotelPolicyOrderByWithRelationInput[]
    cursor?: HotelPolicyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HotelPolicyScalarFieldEnum | HotelPolicyScalarFieldEnum[]
  }

  /**
   * Hotel without action
   */
  export type HotelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
  }


  /**
   * Model HotelImage
   */

  export type AggregateHotelImage = {
    _count: HotelImageCountAggregateOutputType | null
    _avg: HotelImageAvgAggregateOutputType | null
    _sum: HotelImageSumAggregateOutputType | null
    _min: HotelImageMinAggregateOutputType | null
    _max: HotelImageMaxAggregateOutputType | null
  }

  export type HotelImageAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type HotelImageSumAggregateOutputType = {
    sortOrder: number | null
  }

  export type HotelImageMinAggregateOutputType = {
    id: string | null
    url: string | null
    altText: string | null
    sortOrder: number | null
    hotelId: string | null
  }

  export type HotelImageMaxAggregateOutputType = {
    id: string | null
    url: string | null
    altText: string | null
    sortOrder: number | null
    hotelId: string | null
  }

  export type HotelImageCountAggregateOutputType = {
    id: number
    url: number
    altText: number
    sortOrder: number
    hotelId: number
    _all: number
  }


  export type HotelImageAvgAggregateInputType = {
    sortOrder?: true
  }

  export type HotelImageSumAggregateInputType = {
    sortOrder?: true
  }

  export type HotelImageMinAggregateInputType = {
    id?: true
    url?: true
    altText?: true
    sortOrder?: true
    hotelId?: true
  }

  export type HotelImageMaxAggregateInputType = {
    id?: true
    url?: true
    altText?: true
    sortOrder?: true
    hotelId?: true
  }

  export type HotelImageCountAggregateInputType = {
    id?: true
    url?: true
    altText?: true
    sortOrder?: true
    hotelId?: true
    _all?: true
  }

  export type HotelImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HotelImage to aggregate.
     */
    where?: HotelImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HotelImages to fetch.
     */
    orderBy?: HotelImageOrderByWithRelationInput | HotelImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HotelImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HotelImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HotelImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HotelImages
    **/
    _count?: true | HotelImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HotelImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HotelImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HotelImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HotelImageMaxAggregateInputType
  }

  export type GetHotelImageAggregateType<T extends HotelImageAggregateArgs> = {
        [P in keyof T & keyof AggregateHotelImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHotelImage[P]>
      : GetScalarType<T[P], AggregateHotelImage[P]>
  }




  export type HotelImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HotelImageWhereInput
    orderBy?: HotelImageOrderByWithAggregationInput | HotelImageOrderByWithAggregationInput[]
    by: HotelImageScalarFieldEnum[] | HotelImageScalarFieldEnum
    having?: HotelImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HotelImageCountAggregateInputType | true
    _avg?: HotelImageAvgAggregateInputType
    _sum?: HotelImageSumAggregateInputType
    _min?: HotelImageMinAggregateInputType
    _max?: HotelImageMaxAggregateInputType
  }

  export type HotelImageGroupByOutputType = {
    id: string
    url: string
    altText: string | null
    sortOrder: number
    hotelId: string
    _count: HotelImageCountAggregateOutputType | null
    _avg: HotelImageAvgAggregateOutputType | null
    _sum: HotelImageSumAggregateOutputType | null
    _min: HotelImageMinAggregateOutputType | null
    _max: HotelImageMaxAggregateOutputType | null
  }

  type GetHotelImageGroupByPayload<T extends HotelImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HotelImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HotelImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HotelImageGroupByOutputType[P]>
            : GetScalarType<T[P], HotelImageGroupByOutputType[P]>
        }
      >
    >


  export type HotelImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    altText?: boolean
    sortOrder?: boolean
    hotelId?: boolean
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hotelImage"]>

  export type HotelImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    altText?: boolean
    sortOrder?: boolean
    hotelId?: boolean
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hotelImage"]>

  export type HotelImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    altText?: boolean
    sortOrder?: boolean
    hotelId?: boolean
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hotelImage"]>

  export type HotelImageSelectScalar = {
    id?: boolean
    url?: boolean
    altText?: boolean
    sortOrder?: boolean
    hotelId?: boolean
  }

  export type HotelImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "altText" | "sortOrder" | "hotelId", ExtArgs["result"]["hotelImage"]>
  export type HotelImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }
  export type HotelImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }
  export type HotelImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }

  export type $HotelImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HotelImage"
    objects: {
      hotel: Prisma.$HotelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      altText: string | null
      sortOrder: number
      hotelId: string
    }, ExtArgs["result"]["hotelImage"]>
    composites: {}
  }

  type HotelImageGetPayload<S extends boolean | null | undefined | HotelImageDefaultArgs> = $Result.GetResult<Prisma.$HotelImagePayload, S>

  type HotelImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HotelImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HotelImageCountAggregateInputType | true
    }

  export interface HotelImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HotelImage'], meta: { name: 'HotelImage' } }
    /**
     * Find zero or one HotelImage that matches the filter.
     * @param {HotelImageFindUniqueArgs} args - Arguments to find a HotelImage
     * @example
     * // Get one HotelImage
     * const hotelImage = await prisma.hotelImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HotelImageFindUniqueArgs>(args: SelectSubset<T, HotelImageFindUniqueArgs<ExtArgs>>): Prisma__HotelImageClient<$Result.GetResult<Prisma.$HotelImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HotelImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HotelImageFindUniqueOrThrowArgs} args - Arguments to find a HotelImage
     * @example
     * // Get one HotelImage
     * const hotelImage = await prisma.hotelImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HotelImageFindUniqueOrThrowArgs>(args: SelectSubset<T, HotelImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HotelImageClient<$Result.GetResult<Prisma.$HotelImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HotelImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelImageFindFirstArgs} args - Arguments to find a HotelImage
     * @example
     * // Get one HotelImage
     * const hotelImage = await prisma.hotelImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HotelImageFindFirstArgs>(args?: SelectSubset<T, HotelImageFindFirstArgs<ExtArgs>>): Prisma__HotelImageClient<$Result.GetResult<Prisma.$HotelImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HotelImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelImageFindFirstOrThrowArgs} args - Arguments to find a HotelImage
     * @example
     * // Get one HotelImage
     * const hotelImage = await prisma.hotelImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HotelImageFindFirstOrThrowArgs>(args?: SelectSubset<T, HotelImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__HotelImageClient<$Result.GetResult<Prisma.$HotelImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HotelImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HotelImages
     * const hotelImages = await prisma.hotelImage.findMany()
     * 
     * // Get first 10 HotelImages
     * const hotelImages = await prisma.hotelImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hotelImageWithIdOnly = await prisma.hotelImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HotelImageFindManyArgs>(args?: SelectSubset<T, HotelImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HotelImage.
     * @param {HotelImageCreateArgs} args - Arguments to create a HotelImage.
     * @example
     * // Create one HotelImage
     * const HotelImage = await prisma.hotelImage.create({
     *   data: {
     *     // ... data to create a HotelImage
     *   }
     * })
     * 
     */
    create<T extends HotelImageCreateArgs>(args: SelectSubset<T, HotelImageCreateArgs<ExtArgs>>): Prisma__HotelImageClient<$Result.GetResult<Prisma.$HotelImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HotelImages.
     * @param {HotelImageCreateManyArgs} args - Arguments to create many HotelImages.
     * @example
     * // Create many HotelImages
     * const hotelImage = await prisma.hotelImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HotelImageCreateManyArgs>(args?: SelectSubset<T, HotelImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HotelImages and returns the data saved in the database.
     * @param {HotelImageCreateManyAndReturnArgs} args - Arguments to create many HotelImages.
     * @example
     * // Create many HotelImages
     * const hotelImage = await prisma.hotelImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HotelImages and only return the `id`
     * const hotelImageWithIdOnly = await prisma.hotelImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HotelImageCreateManyAndReturnArgs>(args?: SelectSubset<T, HotelImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HotelImage.
     * @param {HotelImageDeleteArgs} args - Arguments to delete one HotelImage.
     * @example
     * // Delete one HotelImage
     * const HotelImage = await prisma.hotelImage.delete({
     *   where: {
     *     // ... filter to delete one HotelImage
     *   }
     * })
     * 
     */
    delete<T extends HotelImageDeleteArgs>(args: SelectSubset<T, HotelImageDeleteArgs<ExtArgs>>): Prisma__HotelImageClient<$Result.GetResult<Prisma.$HotelImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HotelImage.
     * @param {HotelImageUpdateArgs} args - Arguments to update one HotelImage.
     * @example
     * // Update one HotelImage
     * const hotelImage = await prisma.hotelImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HotelImageUpdateArgs>(args: SelectSubset<T, HotelImageUpdateArgs<ExtArgs>>): Prisma__HotelImageClient<$Result.GetResult<Prisma.$HotelImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HotelImages.
     * @param {HotelImageDeleteManyArgs} args - Arguments to filter HotelImages to delete.
     * @example
     * // Delete a few HotelImages
     * const { count } = await prisma.hotelImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HotelImageDeleteManyArgs>(args?: SelectSubset<T, HotelImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HotelImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HotelImages
     * const hotelImage = await prisma.hotelImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HotelImageUpdateManyArgs>(args: SelectSubset<T, HotelImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HotelImages and returns the data updated in the database.
     * @param {HotelImageUpdateManyAndReturnArgs} args - Arguments to update many HotelImages.
     * @example
     * // Update many HotelImages
     * const hotelImage = await prisma.hotelImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HotelImages and only return the `id`
     * const hotelImageWithIdOnly = await prisma.hotelImage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HotelImageUpdateManyAndReturnArgs>(args: SelectSubset<T, HotelImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HotelImage.
     * @param {HotelImageUpsertArgs} args - Arguments to update or create a HotelImage.
     * @example
     * // Update or create a HotelImage
     * const hotelImage = await prisma.hotelImage.upsert({
     *   create: {
     *     // ... data to create a HotelImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HotelImage we want to update
     *   }
     * })
     */
    upsert<T extends HotelImageUpsertArgs>(args: SelectSubset<T, HotelImageUpsertArgs<ExtArgs>>): Prisma__HotelImageClient<$Result.GetResult<Prisma.$HotelImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HotelImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelImageCountArgs} args - Arguments to filter HotelImages to count.
     * @example
     * // Count the number of HotelImages
     * const count = await prisma.hotelImage.count({
     *   where: {
     *     // ... the filter for the HotelImages we want to count
     *   }
     * })
    **/
    count<T extends HotelImageCountArgs>(
      args?: Subset<T, HotelImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HotelImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HotelImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HotelImageAggregateArgs>(args: Subset<T, HotelImageAggregateArgs>): Prisma.PrismaPromise<GetHotelImageAggregateType<T>>

    /**
     * Group by HotelImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelImageGroupByArgs} args - Group by arguments.
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
      T extends HotelImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HotelImageGroupByArgs['orderBy'] }
        : { orderBy?: HotelImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HotelImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHotelImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HotelImage model
   */
  readonly fields: HotelImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HotelImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HotelImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hotel<T extends HotelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HotelDefaultArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the HotelImage model
   */
  interface HotelImageFieldRefs {
    readonly id: FieldRef<"HotelImage", 'String'>
    readonly url: FieldRef<"HotelImage", 'String'>
    readonly altText: FieldRef<"HotelImage", 'String'>
    readonly sortOrder: FieldRef<"HotelImage", 'Int'>
    readonly hotelId: FieldRef<"HotelImage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * HotelImage findUnique
   */
  export type HotelImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelImage
     */
    select?: HotelImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelImage
     */
    omit?: HotelImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelImageInclude<ExtArgs> | null
    /**
     * Filter, which HotelImage to fetch.
     */
    where: HotelImageWhereUniqueInput
  }

  /**
   * HotelImage findUniqueOrThrow
   */
  export type HotelImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelImage
     */
    select?: HotelImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelImage
     */
    omit?: HotelImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelImageInclude<ExtArgs> | null
    /**
     * Filter, which HotelImage to fetch.
     */
    where: HotelImageWhereUniqueInput
  }

  /**
   * HotelImage findFirst
   */
  export type HotelImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelImage
     */
    select?: HotelImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelImage
     */
    omit?: HotelImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelImageInclude<ExtArgs> | null
    /**
     * Filter, which HotelImage to fetch.
     */
    where?: HotelImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HotelImages to fetch.
     */
    orderBy?: HotelImageOrderByWithRelationInput | HotelImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HotelImages.
     */
    cursor?: HotelImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HotelImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HotelImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HotelImages.
     */
    distinct?: HotelImageScalarFieldEnum | HotelImageScalarFieldEnum[]
  }

  /**
   * HotelImage findFirstOrThrow
   */
  export type HotelImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelImage
     */
    select?: HotelImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelImage
     */
    omit?: HotelImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelImageInclude<ExtArgs> | null
    /**
     * Filter, which HotelImage to fetch.
     */
    where?: HotelImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HotelImages to fetch.
     */
    orderBy?: HotelImageOrderByWithRelationInput | HotelImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HotelImages.
     */
    cursor?: HotelImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HotelImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HotelImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HotelImages.
     */
    distinct?: HotelImageScalarFieldEnum | HotelImageScalarFieldEnum[]
  }

  /**
   * HotelImage findMany
   */
  export type HotelImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelImage
     */
    select?: HotelImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelImage
     */
    omit?: HotelImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelImageInclude<ExtArgs> | null
    /**
     * Filter, which HotelImages to fetch.
     */
    where?: HotelImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HotelImages to fetch.
     */
    orderBy?: HotelImageOrderByWithRelationInput | HotelImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HotelImages.
     */
    cursor?: HotelImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HotelImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HotelImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HotelImages.
     */
    distinct?: HotelImageScalarFieldEnum | HotelImageScalarFieldEnum[]
  }

  /**
   * HotelImage create
   */
  export type HotelImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelImage
     */
    select?: HotelImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelImage
     */
    omit?: HotelImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelImageInclude<ExtArgs> | null
    /**
     * The data needed to create a HotelImage.
     */
    data: XOR<HotelImageCreateInput, HotelImageUncheckedCreateInput>
  }

  /**
   * HotelImage createMany
   */
  export type HotelImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HotelImages.
     */
    data: HotelImageCreateManyInput | HotelImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HotelImage createManyAndReturn
   */
  export type HotelImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelImage
     */
    select?: HotelImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HotelImage
     */
    omit?: HotelImageOmit<ExtArgs> | null
    /**
     * The data used to create many HotelImages.
     */
    data: HotelImageCreateManyInput | HotelImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HotelImage update
   */
  export type HotelImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelImage
     */
    select?: HotelImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelImage
     */
    omit?: HotelImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelImageInclude<ExtArgs> | null
    /**
     * The data needed to update a HotelImage.
     */
    data: XOR<HotelImageUpdateInput, HotelImageUncheckedUpdateInput>
    /**
     * Choose, which HotelImage to update.
     */
    where: HotelImageWhereUniqueInput
  }

  /**
   * HotelImage updateMany
   */
  export type HotelImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HotelImages.
     */
    data: XOR<HotelImageUpdateManyMutationInput, HotelImageUncheckedUpdateManyInput>
    /**
     * Filter which HotelImages to update
     */
    where?: HotelImageWhereInput
    /**
     * Limit how many HotelImages to update.
     */
    limit?: number
  }

  /**
   * HotelImage updateManyAndReturn
   */
  export type HotelImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelImage
     */
    select?: HotelImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HotelImage
     */
    omit?: HotelImageOmit<ExtArgs> | null
    /**
     * The data used to update HotelImages.
     */
    data: XOR<HotelImageUpdateManyMutationInput, HotelImageUncheckedUpdateManyInput>
    /**
     * Filter which HotelImages to update
     */
    where?: HotelImageWhereInput
    /**
     * Limit how many HotelImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HotelImage upsert
   */
  export type HotelImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelImage
     */
    select?: HotelImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelImage
     */
    omit?: HotelImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelImageInclude<ExtArgs> | null
    /**
     * The filter to search for the HotelImage to update in case it exists.
     */
    where: HotelImageWhereUniqueInput
    /**
     * In case the HotelImage found by the `where` argument doesn't exist, create a new HotelImage with this data.
     */
    create: XOR<HotelImageCreateInput, HotelImageUncheckedCreateInput>
    /**
     * In case the HotelImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HotelImageUpdateInput, HotelImageUncheckedUpdateInput>
  }

  /**
   * HotelImage delete
   */
  export type HotelImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelImage
     */
    select?: HotelImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelImage
     */
    omit?: HotelImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelImageInclude<ExtArgs> | null
    /**
     * Filter which HotelImage to delete.
     */
    where: HotelImageWhereUniqueInput
  }

  /**
   * HotelImage deleteMany
   */
  export type HotelImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HotelImages to delete
     */
    where?: HotelImageWhereInput
    /**
     * Limit how many HotelImages to delete.
     */
    limit?: number
  }

  /**
   * HotelImage without action
   */
  export type HotelImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelImage
     */
    select?: HotelImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelImage
     */
    omit?: HotelImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelImageInclude<ExtArgs> | null
  }


  /**
   * Model HotelAmenity
   */

  export type AggregateHotelAmenity = {
    _count: HotelAmenityCountAggregateOutputType | null
    _min: HotelAmenityMinAggregateOutputType | null
    _max: HotelAmenityMaxAggregateOutputType | null
  }

  export type HotelAmenityMinAggregateOutputType = {
    id: string | null
    name: string | null
    hotelId: string | null
  }

  export type HotelAmenityMaxAggregateOutputType = {
    id: string | null
    name: string | null
    hotelId: string | null
  }

  export type HotelAmenityCountAggregateOutputType = {
    id: number
    name: number
    hotelId: number
    _all: number
  }


  export type HotelAmenityMinAggregateInputType = {
    id?: true
    name?: true
    hotelId?: true
  }

  export type HotelAmenityMaxAggregateInputType = {
    id?: true
    name?: true
    hotelId?: true
  }

  export type HotelAmenityCountAggregateInputType = {
    id?: true
    name?: true
    hotelId?: true
    _all?: true
  }

  export type HotelAmenityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HotelAmenity to aggregate.
     */
    where?: HotelAmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HotelAmenities to fetch.
     */
    orderBy?: HotelAmenityOrderByWithRelationInput | HotelAmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HotelAmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HotelAmenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HotelAmenities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HotelAmenities
    **/
    _count?: true | HotelAmenityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HotelAmenityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HotelAmenityMaxAggregateInputType
  }

  export type GetHotelAmenityAggregateType<T extends HotelAmenityAggregateArgs> = {
        [P in keyof T & keyof AggregateHotelAmenity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHotelAmenity[P]>
      : GetScalarType<T[P], AggregateHotelAmenity[P]>
  }




  export type HotelAmenityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HotelAmenityWhereInput
    orderBy?: HotelAmenityOrderByWithAggregationInput | HotelAmenityOrderByWithAggregationInput[]
    by: HotelAmenityScalarFieldEnum[] | HotelAmenityScalarFieldEnum
    having?: HotelAmenityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HotelAmenityCountAggregateInputType | true
    _min?: HotelAmenityMinAggregateInputType
    _max?: HotelAmenityMaxAggregateInputType
  }

  export type HotelAmenityGroupByOutputType = {
    id: string
    name: string
    hotelId: string
    _count: HotelAmenityCountAggregateOutputType | null
    _min: HotelAmenityMinAggregateOutputType | null
    _max: HotelAmenityMaxAggregateOutputType | null
  }

  type GetHotelAmenityGroupByPayload<T extends HotelAmenityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HotelAmenityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HotelAmenityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HotelAmenityGroupByOutputType[P]>
            : GetScalarType<T[P], HotelAmenityGroupByOutputType[P]>
        }
      >
    >


  export type HotelAmenitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    hotelId?: boolean
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hotelAmenity"]>

  export type HotelAmenitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    hotelId?: boolean
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hotelAmenity"]>

  export type HotelAmenitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    hotelId?: boolean
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hotelAmenity"]>

  export type HotelAmenitySelectScalar = {
    id?: boolean
    name?: boolean
    hotelId?: boolean
  }

  export type HotelAmenityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "hotelId", ExtArgs["result"]["hotelAmenity"]>
  export type HotelAmenityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }
  export type HotelAmenityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }
  export type HotelAmenityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }

  export type $HotelAmenityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HotelAmenity"
    objects: {
      hotel: Prisma.$HotelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      hotelId: string
    }, ExtArgs["result"]["hotelAmenity"]>
    composites: {}
  }

  type HotelAmenityGetPayload<S extends boolean | null | undefined | HotelAmenityDefaultArgs> = $Result.GetResult<Prisma.$HotelAmenityPayload, S>

  type HotelAmenityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HotelAmenityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HotelAmenityCountAggregateInputType | true
    }

  export interface HotelAmenityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HotelAmenity'], meta: { name: 'HotelAmenity' } }
    /**
     * Find zero or one HotelAmenity that matches the filter.
     * @param {HotelAmenityFindUniqueArgs} args - Arguments to find a HotelAmenity
     * @example
     * // Get one HotelAmenity
     * const hotelAmenity = await prisma.hotelAmenity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HotelAmenityFindUniqueArgs>(args: SelectSubset<T, HotelAmenityFindUniqueArgs<ExtArgs>>): Prisma__HotelAmenityClient<$Result.GetResult<Prisma.$HotelAmenityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HotelAmenity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HotelAmenityFindUniqueOrThrowArgs} args - Arguments to find a HotelAmenity
     * @example
     * // Get one HotelAmenity
     * const hotelAmenity = await prisma.hotelAmenity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HotelAmenityFindUniqueOrThrowArgs>(args: SelectSubset<T, HotelAmenityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HotelAmenityClient<$Result.GetResult<Prisma.$HotelAmenityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HotelAmenity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelAmenityFindFirstArgs} args - Arguments to find a HotelAmenity
     * @example
     * // Get one HotelAmenity
     * const hotelAmenity = await prisma.hotelAmenity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HotelAmenityFindFirstArgs>(args?: SelectSubset<T, HotelAmenityFindFirstArgs<ExtArgs>>): Prisma__HotelAmenityClient<$Result.GetResult<Prisma.$HotelAmenityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HotelAmenity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelAmenityFindFirstOrThrowArgs} args - Arguments to find a HotelAmenity
     * @example
     * // Get one HotelAmenity
     * const hotelAmenity = await prisma.hotelAmenity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HotelAmenityFindFirstOrThrowArgs>(args?: SelectSubset<T, HotelAmenityFindFirstOrThrowArgs<ExtArgs>>): Prisma__HotelAmenityClient<$Result.GetResult<Prisma.$HotelAmenityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HotelAmenities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelAmenityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HotelAmenities
     * const hotelAmenities = await prisma.hotelAmenity.findMany()
     * 
     * // Get first 10 HotelAmenities
     * const hotelAmenities = await prisma.hotelAmenity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hotelAmenityWithIdOnly = await prisma.hotelAmenity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HotelAmenityFindManyArgs>(args?: SelectSubset<T, HotelAmenityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelAmenityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HotelAmenity.
     * @param {HotelAmenityCreateArgs} args - Arguments to create a HotelAmenity.
     * @example
     * // Create one HotelAmenity
     * const HotelAmenity = await prisma.hotelAmenity.create({
     *   data: {
     *     // ... data to create a HotelAmenity
     *   }
     * })
     * 
     */
    create<T extends HotelAmenityCreateArgs>(args: SelectSubset<T, HotelAmenityCreateArgs<ExtArgs>>): Prisma__HotelAmenityClient<$Result.GetResult<Prisma.$HotelAmenityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HotelAmenities.
     * @param {HotelAmenityCreateManyArgs} args - Arguments to create many HotelAmenities.
     * @example
     * // Create many HotelAmenities
     * const hotelAmenity = await prisma.hotelAmenity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HotelAmenityCreateManyArgs>(args?: SelectSubset<T, HotelAmenityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HotelAmenities and returns the data saved in the database.
     * @param {HotelAmenityCreateManyAndReturnArgs} args - Arguments to create many HotelAmenities.
     * @example
     * // Create many HotelAmenities
     * const hotelAmenity = await prisma.hotelAmenity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HotelAmenities and only return the `id`
     * const hotelAmenityWithIdOnly = await prisma.hotelAmenity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HotelAmenityCreateManyAndReturnArgs>(args?: SelectSubset<T, HotelAmenityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelAmenityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HotelAmenity.
     * @param {HotelAmenityDeleteArgs} args - Arguments to delete one HotelAmenity.
     * @example
     * // Delete one HotelAmenity
     * const HotelAmenity = await prisma.hotelAmenity.delete({
     *   where: {
     *     // ... filter to delete one HotelAmenity
     *   }
     * })
     * 
     */
    delete<T extends HotelAmenityDeleteArgs>(args: SelectSubset<T, HotelAmenityDeleteArgs<ExtArgs>>): Prisma__HotelAmenityClient<$Result.GetResult<Prisma.$HotelAmenityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HotelAmenity.
     * @param {HotelAmenityUpdateArgs} args - Arguments to update one HotelAmenity.
     * @example
     * // Update one HotelAmenity
     * const hotelAmenity = await prisma.hotelAmenity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HotelAmenityUpdateArgs>(args: SelectSubset<T, HotelAmenityUpdateArgs<ExtArgs>>): Prisma__HotelAmenityClient<$Result.GetResult<Prisma.$HotelAmenityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HotelAmenities.
     * @param {HotelAmenityDeleteManyArgs} args - Arguments to filter HotelAmenities to delete.
     * @example
     * // Delete a few HotelAmenities
     * const { count } = await prisma.hotelAmenity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HotelAmenityDeleteManyArgs>(args?: SelectSubset<T, HotelAmenityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HotelAmenities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelAmenityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HotelAmenities
     * const hotelAmenity = await prisma.hotelAmenity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HotelAmenityUpdateManyArgs>(args: SelectSubset<T, HotelAmenityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HotelAmenities and returns the data updated in the database.
     * @param {HotelAmenityUpdateManyAndReturnArgs} args - Arguments to update many HotelAmenities.
     * @example
     * // Update many HotelAmenities
     * const hotelAmenity = await prisma.hotelAmenity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HotelAmenities and only return the `id`
     * const hotelAmenityWithIdOnly = await prisma.hotelAmenity.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HotelAmenityUpdateManyAndReturnArgs>(args: SelectSubset<T, HotelAmenityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelAmenityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HotelAmenity.
     * @param {HotelAmenityUpsertArgs} args - Arguments to update or create a HotelAmenity.
     * @example
     * // Update or create a HotelAmenity
     * const hotelAmenity = await prisma.hotelAmenity.upsert({
     *   create: {
     *     // ... data to create a HotelAmenity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HotelAmenity we want to update
     *   }
     * })
     */
    upsert<T extends HotelAmenityUpsertArgs>(args: SelectSubset<T, HotelAmenityUpsertArgs<ExtArgs>>): Prisma__HotelAmenityClient<$Result.GetResult<Prisma.$HotelAmenityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HotelAmenities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelAmenityCountArgs} args - Arguments to filter HotelAmenities to count.
     * @example
     * // Count the number of HotelAmenities
     * const count = await prisma.hotelAmenity.count({
     *   where: {
     *     // ... the filter for the HotelAmenities we want to count
     *   }
     * })
    **/
    count<T extends HotelAmenityCountArgs>(
      args?: Subset<T, HotelAmenityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HotelAmenityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HotelAmenity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelAmenityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HotelAmenityAggregateArgs>(args: Subset<T, HotelAmenityAggregateArgs>): Prisma.PrismaPromise<GetHotelAmenityAggregateType<T>>

    /**
     * Group by HotelAmenity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelAmenityGroupByArgs} args - Group by arguments.
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
      T extends HotelAmenityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HotelAmenityGroupByArgs['orderBy'] }
        : { orderBy?: HotelAmenityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HotelAmenityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHotelAmenityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HotelAmenity model
   */
  readonly fields: HotelAmenityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HotelAmenity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HotelAmenityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hotel<T extends HotelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HotelDefaultArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the HotelAmenity model
   */
  interface HotelAmenityFieldRefs {
    readonly id: FieldRef<"HotelAmenity", 'String'>
    readonly name: FieldRef<"HotelAmenity", 'String'>
    readonly hotelId: FieldRef<"HotelAmenity", 'String'>
  }
    

  // Custom InputTypes
  /**
   * HotelAmenity findUnique
   */
  export type HotelAmenityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelAmenity
     */
    select?: HotelAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelAmenity
     */
    omit?: HotelAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelAmenityInclude<ExtArgs> | null
    /**
     * Filter, which HotelAmenity to fetch.
     */
    where: HotelAmenityWhereUniqueInput
  }

  /**
   * HotelAmenity findUniqueOrThrow
   */
  export type HotelAmenityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelAmenity
     */
    select?: HotelAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelAmenity
     */
    omit?: HotelAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelAmenityInclude<ExtArgs> | null
    /**
     * Filter, which HotelAmenity to fetch.
     */
    where: HotelAmenityWhereUniqueInput
  }

  /**
   * HotelAmenity findFirst
   */
  export type HotelAmenityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelAmenity
     */
    select?: HotelAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelAmenity
     */
    omit?: HotelAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelAmenityInclude<ExtArgs> | null
    /**
     * Filter, which HotelAmenity to fetch.
     */
    where?: HotelAmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HotelAmenities to fetch.
     */
    orderBy?: HotelAmenityOrderByWithRelationInput | HotelAmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HotelAmenities.
     */
    cursor?: HotelAmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HotelAmenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HotelAmenities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HotelAmenities.
     */
    distinct?: HotelAmenityScalarFieldEnum | HotelAmenityScalarFieldEnum[]
  }

  /**
   * HotelAmenity findFirstOrThrow
   */
  export type HotelAmenityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelAmenity
     */
    select?: HotelAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelAmenity
     */
    omit?: HotelAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelAmenityInclude<ExtArgs> | null
    /**
     * Filter, which HotelAmenity to fetch.
     */
    where?: HotelAmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HotelAmenities to fetch.
     */
    orderBy?: HotelAmenityOrderByWithRelationInput | HotelAmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HotelAmenities.
     */
    cursor?: HotelAmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HotelAmenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HotelAmenities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HotelAmenities.
     */
    distinct?: HotelAmenityScalarFieldEnum | HotelAmenityScalarFieldEnum[]
  }

  /**
   * HotelAmenity findMany
   */
  export type HotelAmenityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelAmenity
     */
    select?: HotelAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelAmenity
     */
    omit?: HotelAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelAmenityInclude<ExtArgs> | null
    /**
     * Filter, which HotelAmenities to fetch.
     */
    where?: HotelAmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HotelAmenities to fetch.
     */
    orderBy?: HotelAmenityOrderByWithRelationInput | HotelAmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HotelAmenities.
     */
    cursor?: HotelAmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HotelAmenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HotelAmenities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HotelAmenities.
     */
    distinct?: HotelAmenityScalarFieldEnum | HotelAmenityScalarFieldEnum[]
  }

  /**
   * HotelAmenity create
   */
  export type HotelAmenityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelAmenity
     */
    select?: HotelAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelAmenity
     */
    omit?: HotelAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelAmenityInclude<ExtArgs> | null
    /**
     * The data needed to create a HotelAmenity.
     */
    data: XOR<HotelAmenityCreateInput, HotelAmenityUncheckedCreateInput>
  }

  /**
   * HotelAmenity createMany
   */
  export type HotelAmenityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HotelAmenities.
     */
    data: HotelAmenityCreateManyInput | HotelAmenityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HotelAmenity createManyAndReturn
   */
  export type HotelAmenityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelAmenity
     */
    select?: HotelAmenitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HotelAmenity
     */
    omit?: HotelAmenityOmit<ExtArgs> | null
    /**
     * The data used to create many HotelAmenities.
     */
    data: HotelAmenityCreateManyInput | HotelAmenityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelAmenityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HotelAmenity update
   */
  export type HotelAmenityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelAmenity
     */
    select?: HotelAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelAmenity
     */
    omit?: HotelAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelAmenityInclude<ExtArgs> | null
    /**
     * The data needed to update a HotelAmenity.
     */
    data: XOR<HotelAmenityUpdateInput, HotelAmenityUncheckedUpdateInput>
    /**
     * Choose, which HotelAmenity to update.
     */
    where: HotelAmenityWhereUniqueInput
  }

  /**
   * HotelAmenity updateMany
   */
  export type HotelAmenityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HotelAmenities.
     */
    data: XOR<HotelAmenityUpdateManyMutationInput, HotelAmenityUncheckedUpdateManyInput>
    /**
     * Filter which HotelAmenities to update
     */
    where?: HotelAmenityWhereInput
    /**
     * Limit how many HotelAmenities to update.
     */
    limit?: number
  }

  /**
   * HotelAmenity updateManyAndReturn
   */
  export type HotelAmenityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelAmenity
     */
    select?: HotelAmenitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HotelAmenity
     */
    omit?: HotelAmenityOmit<ExtArgs> | null
    /**
     * The data used to update HotelAmenities.
     */
    data: XOR<HotelAmenityUpdateManyMutationInput, HotelAmenityUncheckedUpdateManyInput>
    /**
     * Filter which HotelAmenities to update
     */
    where?: HotelAmenityWhereInput
    /**
     * Limit how many HotelAmenities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelAmenityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HotelAmenity upsert
   */
  export type HotelAmenityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelAmenity
     */
    select?: HotelAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelAmenity
     */
    omit?: HotelAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelAmenityInclude<ExtArgs> | null
    /**
     * The filter to search for the HotelAmenity to update in case it exists.
     */
    where: HotelAmenityWhereUniqueInput
    /**
     * In case the HotelAmenity found by the `where` argument doesn't exist, create a new HotelAmenity with this data.
     */
    create: XOR<HotelAmenityCreateInput, HotelAmenityUncheckedCreateInput>
    /**
     * In case the HotelAmenity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HotelAmenityUpdateInput, HotelAmenityUncheckedUpdateInput>
  }

  /**
   * HotelAmenity delete
   */
  export type HotelAmenityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelAmenity
     */
    select?: HotelAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelAmenity
     */
    omit?: HotelAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelAmenityInclude<ExtArgs> | null
    /**
     * Filter which HotelAmenity to delete.
     */
    where: HotelAmenityWhereUniqueInput
  }

  /**
   * HotelAmenity deleteMany
   */
  export type HotelAmenityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HotelAmenities to delete
     */
    where?: HotelAmenityWhereInput
    /**
     * Limit how many HotelAmenities to delete.
     */
    limit?: number
  }

  /**
   * HotelAmenity without action
   */
  export type HotelAmenityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelAmenity
     */
    select?: HotelAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelAmenity
     */
    omit?: HotelAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelAmenityInclude<ExtArgs> | null
  }


  /**
   * Model HotelPolicy
   */

  export type AggregateHotelPolicy = {
    _count: HotelPolicyCountAggregateOutputType | null
    _min: HotelPolicyMinAggregateOutputType | null
    _max: HotelPolicyMaxAggregateOutputType | null
  }

  export type HotelPolicyMinAggregateOutputType = {
    id: string | null
    category: string | null
    title: string | null
    description: string | null
    hotelId: string | null
  }

  export type HotelPolicyMaxAggregateOutputType = {
    id: string | null
    category: string | null
    title: string | null
    description: string | null
    hotelId: string | null
  }

  export type HotelPolicyCountAggregateOutputType = {
    id: number
    category: number
    title: number
    description: number
    hotelId: number
    _all: number
  }


  export type HotelPolicyMinAggregateInputType = {
    id?: true
    category?: true
    title?: true
    description?: true
    hotelId?: true
  }

  export type HotelPolicyMaxAggregateInputType = {
    id?: true
    category?: true
    title?: true
    description?: true
    hotelId?: true
  }

  export type HotelPolicyCountAggregateInputType = {
    id?: true
    category?: true
    title?: true
    description?: true
    hotelId?: true
    _all?: true
  }

  export type HotelPolicyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HotelPolicy to aggregate.
     */
    where?: HotelPolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HotelPolicies to fetch.
     */
    orderBy?: HotelPolicyOrderByWithRelationInput | HotelPolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HotelPolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HotelPolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HotelPolicies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HotelPolicies
    **/
    _count?: true | HotelPolicyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HotelPolicyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HotelPolicyMaxAggregateInputType
  }

  export type GetHotelPolicyAggregateType<T extends HotelPolicyAggregateArgs> = {
        [P in keyof T & keyof AggregateHotelPolicy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHotelPolicy[P]>
      : GetScalarType<T[P], AggregateHotelPolicy[P]>
  }




  export type HotelPolicyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HotelPolicyWhereInput
    orderBy?: HotelPolicyOrderByWithAggregationInput | HotelPolicyOrderByWithAggregationInput[]
    by: HotelPolicyScalarFieldEnum[] | HotelPolicyScalarFieldEnum
    having?: HotelPolicyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HotelPolicyCountAggregateInputType | true
    _min?: HotelPolicyMinAggregateInputType
    _max?: HotelPolicyMaxAggregateInputType
  }

  export type HotelPolicyGroupByOutputType = {
    id: string
    category: string
    title: string
    description: string
    hotelId: string
    _count: HotelPolicyCountAggregateOutputType | null
    _min: HotelPolicyMinAggregateOutputType | null
    _max: HotelPolicyMaxAggregateOutputType | null
  }

  type GetHotelPolicyGroupByPayload<T extends HotelPolicyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HotelPolicyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HotelPolicyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HotelPolicyGroupByOutputType[P]>
            : GetScalarType<T[P], HotelPolicyGroupByOutputType[P]>
        }
      >
    >


  export type HotelPolicySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    title?: boolean
    description?: boolean
    hotelId?: boolean
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hotelPolicy"]>

  export type HotelPolicySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    title?: boolean
    description?: boolean
    hotelId?: boolean
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hotelPolicy"]>

  export type HotelPolicySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    title?: boolean
    description?: boolean
    hotelId?: boolean
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hotelPolicy"]>

  export type HotelPolicySelectScalar = {
    id?: boolean
    category?: boolean
    title?: boolean
    description?: boolean
    hotelId?: boolean
  }

  export type HotelPolicyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "category" | "title" | "description" | "hotelId", ExtArgs["result"]["hotelPolicy"]>
  export type HotelPolicyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }
  export type HotelPolicyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }
  export type HotelPolicyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }

  export type $HotelPolicyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HotelPolicy"
    objects: {
      hotel: Prisma.$HotelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      category: string
      title: string
      description: string
      hotelId: string
    }, ExtArgs["result"]["hotelPolicy"]>
    composites: {}
  }

  type HotelPolicyGetPayload<S extends boolean | null | undefined | HotelPolicyDefaultArgs> = $Result.GetResult<Prisma.$HotelPolicyPayload, S>

  type HotelPolicyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HotelPolicyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HotelPolicyCountAggregateInputType | true
    }

  export interface HotelPolicyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HotelPolicy'], meta: { name: 'HotelPolicy' } }
    /**
     * Find zero or one HotelPolicy that matches the filter.
     * @param {HotelPolicyFindUniqueArgs} args - Arguments to find a HotelPolicy
     * @example
     * // Get one HotelPolicy
     * const hotelPolicy = await prisma.hotelPolicy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HotelPolicyFindUniqueArgs>(args: SelectSubset<T, HotelPolicyFindUniqueArgs<ExtArgs>>): Prisma__HotelPolicyClient<$Result.GetResult<Prisma.$HotelPolicyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HotelPolicy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HotelPolicyFindUniqueOrThrowArgs} args - Arguments to find a HotelPolicy
     * @example
     * // Get one HotelPolicy
     * const hotelPolicy = await prisma.hotelPolicy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HotelPolicyFindUniqueOrThrowArgs>(args: SelectSubset<T, HotelPolicyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HotelPolicyClient<$Result.GetResult<Prisma.$HotelPolicyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HotelPolicy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelPolicyFindFirstArgs} args - Arguments to find a HotelPolicy
     * @example
     * // Get one HotelPolicy
     * const hotelPolicy = await prisma.hotelPolicy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HotelPolicyFindFirstArgs>(args?: SelectSubset<T, HotelPolicyFindFirstArgs<ExtArgs>>): Prisma__HotelPolicyClient<$Result.GetResult<Prisma.$HotelPolicyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HotelPolicy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelPolicyFindFirstOrThrowArgs} args - Arguments to find a HotelPolicy
     * @example
     * // Get one HotelPolicy
     * const hotelPolicy = await prisma.hotelPolicy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HotelPolicyFindFirstOrThrowArgs>(args?: SelectSubset<T, HotelPolicyFindFirstOrThrowArgs<ExtArgs>>): Prisma__HotelPolicyClient<$Result.GetResult<Prisma.$HotelPolicyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HotelPolicies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelPolicyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HotelPolicies
     * const hotelPolicies = await prisma.hotelPolicy.findMany()
     * 
     * // Get first 10 HotelPolicies
     * const hotelPolicies = await prisma.hotelPolicy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hotelPolicyWithIdOnly = await prisma.hotelPolicy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HotelPolicyFindManyArgs>(args?: SelectSubset<T, HotelPolicyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelPolicyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HotelPolicy.
     * @param {HotelPolicyCreateArgs} args - Arguments to create a HotelPolicy.
     * @example
     * // Create one HotelPolicy
     * const HotelPolicy = await prisma.hotelPolicy.create({
     *   data: {
     *     // ... data to create a HotelPolicy
     *   }
     * })
     * 
     */
    create<T extends HotelPolicyCreateArgs>(args: SelectSubset<T, HotelPolicyCreateArgs<ExtArgs>>): Prisma__HotelPolicyClient<$Result.GetResult<Prisma.$HotelPolicyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HotelPolicies.
     * @param {HotelPolicyCreateManyArgs} args - Arguments to create many HotelPolicies.
     * @example
     * // Create many HotelPolicies
     * const hotelPolicy = await prisma.hotelPolicy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HotelPolicyCreateManyArgs>(args?: SelectSubset<T, HotelPolicyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HotelPolicies and returns the data saved in the database.
     * @param {HotelPolicyCreateManyAndReturnArgs} args - Arguments to create many HotelPolicies.
     * @example
     * // Create many HotelPolicies
     * const hotelPolicy = await prisma.hotelPolicy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HotelPolicies and only return the `id`
     * const hotelPolicyWithIdOnly = await prisma.hotelPolicy.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HotelPolicyCreateManyAndReturnArgs>(args?: SelectSubset<T, HotelPolicyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelPolicyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HotelPolicy.
     * @param {HotelPolicyDeleteArgs} args - Arguments to delete one HotelPolicy.
     * @example
     * // Delete one HotelPolicy
     * const HotelPolicy = await prisma.hotelPolicy.delete({
     *   where: {
     *     // ... filter to delete one HotelPolicy
     *   }
     * })
     * 
     */
    delete<T extends HotelPolicyDeleteArgs>(args: SelectSubset<T, HotelPolicyDeleteArgs<ExtArgs>>): Prisma__HotelPolicyClient<$Result.GetResult<Prisma.$HotelPolicyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HotelPolicy.
     * @param {HotelPolicyUpdateArgs} args - Arguments to update one HotelPolicy.
     * @example
     * // Update one HotelPolicy
     * const hotelPolicy = await prisma.hotelPolicy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HotelPolicyUpdateArgs>(args: SelectSubset<T, HotelPolicyUpdateArgs<ExtArgs>>): Prisma__HotelPolicyClient<$Result.GetResult<Prisma.$HotelPolicyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HotelPolicies.
     * @param {HotelPolicyDeleteManyArgs} args - Arguments to filter HotelPolicies to delete.
     * @example
     * // Delete a few HotelPolicies
     * const { count } = await prisma.hotelPolicy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HotelPolicyDeleteManyArgs>(args?: SelectSubset<T, HotelPolicyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HotelPolicies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelPolicyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HotelPolicies
     * const hotelPolicy = await prisma.hotelPolicy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HotelPolicyUpdateManyArgs>(args: SelectSubset<T, HotelPolicyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HotelPolicies and returns the data updated in the database.
     * @param {HotelPolicyUpdateManyAndReturnArgs} args - Arguments to update many HotelPolicies.
     * @example
     * // Update many HotelPolicies
     * const hotelPolicy = await prisma.hotelPolicy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HotelPolicies and only return the `id`
     * const hotelPolicyWithIdOnly = await prisma.hotelPolicy.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HotelPolicyUpdateManyAndReturnArgs>(args: SelectSubset<T, HotelPolicyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelPolicyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HotelPolicy.
     * @param {HotelPolicyUpsertArgs} args - Arguments to update or create a HotelPolicy.
     * @example
     * // Update or create a HotelPolicy
     * const hotelPolicy = await prisma.hotelPolicy.upsert({
     *   create: {
     *     // ... data to create a HotelPolicy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HotelPolicy we want to update
     *   }
     * })
     */
    upsert<T extends HotelPolicyUpsertArgs>(args: SelectSubset<T, HotelPolicyUpsertArgs<ExtArgs>>): Prisma__HotelPolicyClient<$Result.GetResult<Prisma.$HotelPolicyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HotelPolicies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelPolicyCountArgs} args - Arguments to filter HotelPolicies to count.
     * @example
     * // Count the number of HotelPolicies
     * const count = await prisma.hotelPolicy.count({
     *   where: {
     *     // ... the filter for the HotelPolicies we want to count
     *   }
     * })
    **/
    count<T extends HotelPolicyCountArgs>(
      args?: Subset<T, HotelPolicyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HotelPolicyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HotelPolicy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelPolicyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HotelPolicyAggregateArgs>(args: Subset<T, HotelPolicyAggregateArgs>): Prisma.PrismaPromise<GetHotelPolicyAggregateType<T>>

    /**
     * Group by HotelPolicy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelPolicyGroupByArgs} args - Group by arguments.
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
      T extends HotelPolicyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HotelPolicyGroupByArgs['orderBy'] }
        : { orderBy?: HotelPolicyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HotelPolicyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHotelPolicyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HotelPolicy model
   */
  readonly fields: HotelPolicyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HotelPolicy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HotelPolicyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hotel<T extends HotelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HotelDefaultArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the HotelPolicy model
   */
  interface HotelPolicyFieldRefs {
    readonly id: FieldRef<"HotelPolicy", 'String'>
    readonly category: FieldRef<"HotelPolicy", 'String'>
    readonly title: FieldRef<"HotelPolicy", 'String'>
    readonly description: FieldRef<"HotelPolicy", 'String'>
    readonly hotelId: FieldRef<"HotelPolicy", 'String'>
  }
    

  // Custom InputTypes
  /**
   * HotelPolicy findUnique
   */
  export type HotelPolicyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelPolicy
     */
    select?: HotelPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelPolicy
     */
    omit?: HotelPolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelPolicyInclude<ExtArgs> | null
    /**
     * Filter, which HotelPolicy to fetch.
     */
    where: HotelPolicyWhereUniqueInput
  }

  /**
   * HotelPolicy findUniqueOrThrow
   */
  export type HotelPolicyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelPolicy
     */
    select?: HotelPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelPolicy
     */
    omit?: HotelPolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelPolicyInclude<ExtArgs> | null
    /**
     * Filter, which HotelPolicy to fetch.
     */
    where: HotelPolicyWhereUniqueInput
  }

  /**
   * HotelPolicy findFirst
   */
  export type HotelPolicyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelPolicy
     */
    select?: HotelPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelPolicy
     */
    omit?: HotelPolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelPolicyInclude<ExtArgs> | null
    /**
     * Filter, which HotelPolicy to fetch.
     */
    where?: HotelPolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HotelPolicies to fetch.
     */
    orderBy?: HotelPolicyOrderByWithRelationInput | HotelPolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HotelPolicies.
     */
    cursor?: HotelPolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HotelPolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HotelPolicies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HotelPolicies.
     */
    distinct?: HotelPolicyScalarFieldEnum | HotelPolicyScalarFieldEnum[]
  }

  /**
   * HotelPolicy findFirstOrThrow
   */
  export type HotelPolicyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelPolicy
     */
    select?: HotelPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelPolicy
     */
    omit?: HotelPolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelPolicyInclude<ExtArgs> | null
    /**
     * Filter, which HotelPolicy to fetch.
     */
    where?: HotelPolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HotelPolicies to fetch.
     */
    orderBy?: HotelPolicyOrderByWithRelationInput | HotelPolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HotelPolicies.
     */
    cursor?: HotelPolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HotelPolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HotelPolicies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HotelPolicies.
     */
    distinct?: HotelPolicyScalarFieldEnum | HotelPolicyScalarFieldEnum[]
  }

  /**
   * HotelPolicy findMany
   */
  export type HotelPolicyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelPolicy
     */
    select?: HotelPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelPolicy
     */
    omit?: HotelPolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelPolicyInclude<ExtArgs> | null
    /**
     * Filter, which HotelPolicies to fetch.
     */
    where?: HotelPolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HotelPolicies to fetch.
     */
    orderBy?: HotelPolicyOrderByWithRelationInput | HotelPolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HotelPolicies.
     */
    cursor?: HotelPolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HotelPolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HotelPolicies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HotelPolicies.
     */
    distinct?: HotelPolicyScalarFieldEnum | HotelPolicyScalarFieldEnum[]
  }

  /**
   * HotelPolicy create
   */
  export type HotelPolicyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelPolicy
     */
    select?: HotelPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelPolicy
     */
    omit?: HotelPolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelPolicyInclude<ExtArgs> | null
    /**
     * The data needed to create a HotelPolicy.
     */
    data: XOR<HotelPolicyCreateInput, HotelPolicyUncheckedCreateInput>
  }

  /**
   * HotelPolicy createMany
   */
  export type HotelPolicyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HotelPolicies.
     */
    data: HotelPolicyCreateManyInput | HotelPolicyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HotelPolicy createManyAndReturn
   */
  export type HotelPolicyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelPolicy
     */
    select?: HotelPolicySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HotelPolicy
     */
    omit?: HotelPolicyOmit<ExtArgs> | null
    /**
     * The data used to create many HotelPolicies.
     */
    data: HotelPolicyCreateManyInput | HotelPolicyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelPolicyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HotelPolicy update
   */
  export type HotelPolicyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelPolicy
     */
    select?: HotelPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelPolicy
     */
    omit?: HotelPolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelPolicyInclude<ExtArgs> | null
    /**
     * The data needed to update a HotelPolicy.
     */
    data: XOR<HotelPolicyUpdateInput, HotelPolicyUncheckedUpdateInput>
    /**
     * Choose, which HotelPolicy to update.
     */
    where: HotelPolicyWhereUniqueInput
  }

  /**
   * HotelPolicy updateMany
   */
  export type HotelPolicyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HotelPolicies.
     */
    data: XOR<HotelPolicyUpdateManyMutationInput, HotelPolicyUncheckedUpdateManyInput>
    /**
     * Filter which HotelPolicies to update
     */
    where?: HotelPolicyWhereInput
    /**
     * Limit how many HotelPolicies to update.
     */
    limit?: number
  }

  /**
   * HotelPolicy updateManyAndReturn
   */
  export type HotelPolicyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelPolicy
     */
    select?: HotelPolicySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HotelPolicy
     */
    omit?: HotelPolicyOmit<ExtArgs> | null
    /**
     * The data used to update HotelPolicies.
     */
    data: XOR<HotelPolicyUpdateManyMutationInput, HotelPolicyUncheckedUpdateManyInput>
    /**
     * Filter which HotelPolicies to update
     */
    where?: HotelPolicyWhereInput
    /**
     * Limit how many HotelPolicies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelPolicyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HotelPolicy upsert
   */
  export type HotelPolicyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelPolicy
     */
    select?: HotelPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelPolicy
     */
    omit?: HotelPolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelPolicyInclude<ExtArgs> | null
    /**
     * The filter to search for the HotelPolicy to update in case it exists.
     */
    where: HotelPolicyWhereUniqueInput
    /**
     * In case the HotelPolicy found by the `where` argument doesn't exist, create a new HotelPolicy with this data.
     */
    create: XOR<HotelPolicyCreateInput, HotelPolicyUncheckedCreateInput>
    /**
     * In case the HotelPolicy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HotelPolicyUpdateInput, HotelPolicyUncheckedUpdateInput>
  }

  /**
   * HotelPolicy delete
   */
  export type HotelPolicyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelPolicy
     */
    select?: HotelPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelPolicy
     */
    omit?: HotelPolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelPolicyInclude<ExtArgs> | null
    /**
     * Filter which HotelPolicy to delete.
     */
    where: HotelPolicyWhereUniqueInput
  }

  /**
   * HotelPolicy deleteMany
   */
  export type HotelPolicyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HotelPolicies to delete
     */
    where?: HotelPolicyWhereInput
    /**
     * Limit how many HotelPolicies to delete.
     */
    limit?: number
  }

  /**
   * HotelPolicy without action
   */
  export type HotelPolicyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelPolicy
     */
    select?: HotelPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelPolicy
     */
    omit?: HotelPolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelPolicyInclude<ExtArgs> | null
  }


  /**
   * Model Room
   */

  export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  export type RoomAvgAggregateOutputType = {
    capacity: number | null
    price: number | null
  }

  export type RoomSumAggregateOutputType = {
    capacity: number | null
    price: number | null
  }

  export type RoomMinAggregateOutputType = {
    id: string | null
    name: string | null
    capacity: number | null
    price: number | null
    hotelId: string | null
  }

  export type RoomMaxAggregateOutputType = {
    id: string | null
    name: string | null
    capacity: number | null
    price: number | null
    hotelId: string | null
  }

  export type RoomCountAggregateOutputType = {
    id: number
    name: number
    capacity: number
    price: number
    hotelId: number
    _all: number
  }


  export type RoomAvgAggregateInputType = {
    capacity?: true
    price?: true
  }

  export type RoomSumAggregateInputType = {
    capacity?: true
    price?: true
  }

  export type RoomMinAggregateInputType = {
    id?: true
    name?: true
    capacity?: true
    price?: true
    hotelId?: true
  }

  export type RoomMaxAggregateInputType = {
    id?: true
    name?: true
    capacity?: true
    price?: true
    hotelId?: true
  }

  export type RoomCountAggregateInputType = {
    id?: true
    name?: true
    capacity?: true
    price?: true
    hotelId?: true
    _all?: true
  }

  export type RoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Room to aggregate.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rooms
    **/
    _count?: true | RoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMaxAggregateInputType
  }

  export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom[P]>
      : GetScalarType<T[P], AggregateRoom[P]>
  }




  export type RoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithAggregationInput | RoomOrderByWithAggregationInput[]
    by: RoomScalarFieldEnum[] | RoomScalarFieldEnum
    having?: RoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCountAggregateInputType | true
    _avg?: RoomAvgAggregateInputType
    _sum?: RoomSumAggregateInputType
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
  }

  export type RoomGroupByOutputType = {
    id: string
    name: string
    capacity: number
    price: number
    hotelId: string
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  type GetRoomGroupByPayload<T extends RoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomGroupByOutputType[P]>
            : GetScalarType<T[P], RoomGroupByOutputType[P]>
        }
      >
    >


  export type RoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    capacity?: boolean
    price?: boolean
    hotelId?: boolean
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
    bookings?: boolean | Room$bookingsArgs<ExtArgs>
    amenities?: boolean | Room$amenitiesArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    capacity?: boolean
    price?: boolean
    hotelId?: boolean
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    capacity?: boolean
    price?: boolean
    hotelId?: boolean
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectScalar = {
    id?: boolean
    name?: boolean
    capacity?: boolean
    price?: boolean
    hotelId?: boolean
  }

  export type RoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "capacity" | "price" | "hotelId", ExtArgs["result"]["room"]>
  export type RoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
    bookings?: boolean | Room$bookingsArgs<ExtArgs>
    amenities?: boolean | Room$amenitiesArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }
  export type RoomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }

  export type $RoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Room"
    objects: {
      hotel: Prisma.$HotelPayload<ExtArgs>
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      amenities: Prisma.$RoomAmenityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      capacity: number
      price: number
      hotelId: string
    }, ExtArgs["result"]["room"]>
    composites: {}
  }

  type RoomGetPayload<S extends boolean | null | undefined | RoomDefaultArgs> = $Result.GetResult<Prisma.$RoomPayload, S>

  type RoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomCountAggregateInputType | true
    }

  export interface RoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Room'], meta: { name: 'Room' } }
    /**
     * Find zero or one Room that matches the filter.
     * @param {RoomFindUniqueArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomFindUniqueArgs>(args: SelectSubset<T, RoomFindUniqueArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Room that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomFindUniqueOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomFindFirstArgs>(args?: SelectSubset<T, RoomFindFirstArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.room.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.room.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomWithIdOnly = await prisma.room.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomFindManyArgs>(args?: SelectSubset<T, RoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Room.
     * @param {RoomCreateArgs} args - Arguments to create a Room.
     * @example
     * // Create one Room
     * const Room = await prisma.room.create({
     *   data: {
     *     // ... data to create a Room
     *   }
     * })
     * 
     */
    create<T extends RoomCreateArgs>(args: SelectSubset<T, RoomCreateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rooms.
     * @param {RoomCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomCreateManyArgs>(args?: SelectSubset<T, RoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rooms and returns the data saved in the database.
     * @param {RoomCreateManyAndReturnArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Room.
     * @param {RoomDeleteArgs} args - Arguments to delete one Room.
     * @example
     * // Delete one Room
     * const Room = await prisma.room.delete({
     *   where: {
     *     // ... filter to delete one Room
     *   }
     * })
     * 
     */
    delete<T extends RoomDeleteArgs>(args: SelectSubset<T, RoomDeleteArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Room.
     * @param {RoomUpdateArgs} args - Arguments to update one Room.
     * @example
     * // Update one Room
     * const room = await prisma.room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomUpdateArgs>(args: SelectSubset<T, RoomUpdateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rooms.
     * @param {RoomDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomDeleteManyArgs>(args?: SelectSubset<T, RoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomUpdateManyArgs>(args: SelectSubset<T, RoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms and returns the data updated in the database.
     * @param {RoomUpdateManyAndReturnArgs} args - Arguments to update many Rooms.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoomUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Room.
     * @param {RoomUpsertArgs} args - Arguments to update or create a Room.
     * @example
     * // Update or create a Room
     * const room = await prisma.room.upsert({
     *   create: {
     *     // ... data to create a Room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room we want to update
     *   }
     * })
     */
    upsert<T extends RoomUpsertArgs>(args: SelectSubset<T, RoomUpsertArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.room.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends RoomCountArgs>(
      args?: Subset<T, RoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoomAggregateArgs>(args: Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>

    /**
     * Group by Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomGroupByArgs} args - Group by arguments.
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
      T extends RoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomGroupByArgs['orderBy'] }
        : { orderBy?: RoomGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Room model
   */
  readonly fields: RoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hotel<T extends HotelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HotelDefaultArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bookings<T extends Room$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Room$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    amenities<T extends Room$amenitiesArgs<ExtArgs> = {}>(args?: Subset<T, Room$amenitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomAmenityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Room model
   */
  interface RoomFieldRefs {
    readonly id: FieldRef<"Room", 'String'>
    readonly name: FieldRef<"Room", 'String'>
    readonly capacity: FieldRef<"Room", 'Int'>
    readonly price: FieldRef<"Room", 'Float'>
    readonly hotelId: FieldRef<"Room", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Room findUnique
   */
  export type RoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findUniqueOrThrow
   */
  export type RoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findFirst
   */
  export type RoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findFirstOrThrow
   */
  export type RoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findMany
   */
  export type RoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room create
   */
  export type RoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to create a Room.
     */
    data: XOR<RoomCreateInput, RoomUncheckedCreateInput>
  }

  /**
   * Room createMany
   */
  export type RoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Room createManyAndReturn
   */
  export type RoomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Room update
   */
  export type RoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to update a Room.
     */
    data: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
    /**
     * Choose, which Room to update.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room updateMany
   */
  export type RoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
  }

  /**
   * Room updateManyAndReturn
   */
  export type RoomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Room upsert
   */
  export type RoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The filter to search for the Room to update in case it exists.
     */
    where: RoomWhereUniqueInput
    /**
     * In case the Room found by the `where` argument doesn't exist, create a new Room with this data.
     */
    create: XOR<RoomCreateInput, RoomUncheckedCreateInput>
    /**
     * In case the Room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
  }

  /**
   * Room delete
   */
  export type RoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter which Room to delete.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room deleteMany
   */
  export type RoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rooms to delete
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to delete.
     */
    limit?: number
  }

  /**
   * Room.bookings
   */
  export type Room$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Room.amenities
   */
  export type Room$amenitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomAmenity
     */
    select?: RoomAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomAmenity
     */
    omit?: RoomAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomAmenityInclude<ExtArgs> | null
    where?: RoomAmenityWhereInput
    orderBy?: RoomAmenityOrderByWithRelationInput | RoomAmenityOrderByWithRelationInput[]
    cursor?: RoomAmenityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomAmenityScalarFieldEnum | RoomAmenityScalarFieldEnum[]
  }

  /**
   * Room without action
   */
  export type RoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
  }


  /**
   * Model RoomAmenity
   */

  export type AggregateRoomAmenity = {
    _count: RoomAmenityCountAggregateOutputType | null
    _min: RoomAmenityMinAggregateOutputType | null
    _max: RoomAmenityMaxAggregateOutputType | null
  }

  export type RoomAmenityMinAggregateOutputType = {
    id: string | null
    name: string | null
    roomId: string | null
  }

  export type RoomAmenityMaxAggregateOutputType = {
    id: string | null
    name: string | null
    roomId: string | null
  }

  export type RoomAmenityCountAggregateOutputType = {
    id: number
    name: number
    roomId: number
    _all: number
  }


  export type RoomAmenityMinAggregateInputType = {
    id?: true
    name?: true
    roomId?: true
  }

  export type RoomAmenityMaxAggregateInputType = {
    id?: true
    name?: true
    roomId?: true
  }

  export type RoomAmenityCountAggregateInputType = {
    id?: true
    name?: true
    roomId?: true
    _all?: true
  }

  export type RoomAmenityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomAmenity to aggregate.
     */
    where?: RoomAmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomAmenities to fetch.
     */
    orderBy?: RoomAmenityOrderByWithRelationInput | RoomAmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomAmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomAmenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomAmenities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoomAmenities
    **/
    _count?: true | RoomAmenityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomAmenityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomAmenityMaxAggregateInputType
  }

  export type GetRoomAmenityAggregateType<T extends RoomAmenityAggregateArgs> = {
        [P in keyof T & keyof AggregateRoomAmenity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoomAmenity[P]>
      : GetScalarType<T[P], AggregateRoomAmenity[P]>
  }




  export type RoomAmenityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomAmenityWhereInput
    orderBy?: RoomAmenityOrderByWithAggregationInput | RoomAmenityOrderByWithAggregationInput[]
    by: RoomAmenityScalarFieldEnum[] | RoomAmenityScalarFieldEnum
    having?: RoomAmenityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomAmenityCountAggregateInputType | true
    _min?: RoomAmenityMinAggregateInputType
    _max?: RoomAmenityMaxAggregateInputType
  }

  export type RoomAmenityGroupByOutputType = {
    id: string
    name: string
    roomId: string
    _count: RoomAmenityCountAggregateOutputType | null
    _min: RoomAmenityMinAggregateOutputType | null
    _max: RoomAmenityMaxAggregateOutputType | null
  }

  type GetRoomAmenityGroupByPayload<T extends RoomAmenityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomAmenityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomAmenityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomAmenityGroupByOutputType[P]>
            : GetScalarType<T[P], RoomAmenityGroupByOutputType[P]>
        }
      >
    >


  export type RoomAmenitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    roomId?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomAmenity"]>

  export type RoomAmenitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    roomId?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomAmenity"]>

  export type RoomAmenitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    roomId?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomAmenity"]>

  export type RoomAmenitySelectScalar = {
    id?: boolean
    name?: boolean
    roomId?: boolean
  }

  export type RoomAmenityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "roomId", ExtArgs["result"]["roomAmenity"]>
  export type RoomAmenityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }
  export type RoomAmenityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }
  export type RoomAmenityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }

  export type $RoomAmenityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoomAmenity"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      roomId: string
    }, ExtArgs["result"]["roomAmenity"]>
    composites: {}
  }

  type RoomAmenityGetPayload<S extends boolean | null | undefined | RoomAmenityDefaultArgs> = $Result.GetResult<Prisma.$RoomAmenityPayload, S>

  type RoomAmenityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomAmenityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomAmenityCountAggregateInputType | true
    }

  export interface RoomAmenityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoomAmenity'], meta: { name: 'RoomAmenity' } }
    /**
     * Find zero or one RoomAmenity that matches the filter.
     * @param {RoomAmenityFindUniqueArgs} args - Arguments to find a RoomAmenity
     * @example
     * // Get one RoomAmenity
     * const roomAmenity = await prisma.roomAmenity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomAmenityFindUniqueArgs>(args: SelectSubset<T, RoomAmenityFindUniqueArgs<ExtArgs>>): Prisma__RoomAmenityClient<$Result.GetResult<Prisma.$RoomAmenityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RoomAmenity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomAmenityFindUniqueOrThrowArgs} args - Arguments to find a RoomAmenity
     * @example
     * // Get one RoomAmenity
     * const roomAmenity = await prisma.roomAmenity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomAmenityFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomAmenityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomAmenityClient<$Result.GetResult<Prisma.$RoomAmenityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomAmenity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAmenityFindFirstArgs} args - Arguments to find a RoomAmenity
     * @example
     * // Get one RoomAmenity
     * const roomAmenity = await prisma.roomAmenity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomAmenityFindFirstArgs>(args?: SelectSubset<T, RoomAmenityFindFirstArgs<ExtArgs>>): Prisma__RoomAmenityClient<$Result.GetResult<Prisma.$RoomAmenityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomAmenity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAmenityFindFirstOrThrowArgs} args - Arguments to find a RoomAmenity
     * @example
     * // Get one RoomAmenity
     * const roomAmenity = await prisma.roomAmenity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomAmenityFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomAmenityFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomAmenityClient<$Result.GetResult<Prisma.$RoomAmenityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RoomAmenities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAmenityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoomAmenities
     * const roomAmenities = await prisma.roomAmenity.findMany()
     * 
     * // Get first 10 RoomAmenities
     * const roomAmenities = await prisma.roomAmenity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomAmenityWithIdOnly = await prisma.roomAmenity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomAmenityFindManyArgs>(args?: SelectSubset<T, RoomAmenityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomAmenityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RoomAmenity.
     * @param {RoomAmenityCreateArgs} args - Arguments to create a RoomAmenity.
     * @example
     * // Create one RoomAmenity
     * const RoomAmenity = await prisma.roomAmenity.create({
     *   data: {
     *     // ... data to create a RoomAmenity
     *   }
     * })
     * 
     */
    create<T extends RoomAmenityCreateArgs>(args: SelectSubset<T, RoomAmenityCreateArgs<ExtArgs>>): Prisma__RoomAmenityClient<$Result.GetResult<Prisma.$RoomAmenityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RoomAmenities.
     * @param {RoomAmenityCreateManyArgs} args - Arguments to create many RoomAmenities.
     * @example
     * // Create many RoomAmenities
     * const roomAmenity = await prisma.roomAmenity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomAmenityCreateManyArgs>(args?: SelectSubset<T, RoomAmenityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RoomAmenities and returns the data saved in the database.
     * @param {RoomAmenityCreateManyAndReturnArgs} args - Arguments to create many RoomAmenities.
     * @example
     * // Create many RoomAmenities
     * const roomAmenity = await prisma.roomAmenity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RoomAmenities and only return the `id`
     * const roomAmenityWithIdOnly = await prisma.roomAmenity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomAmenityCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomAmenityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomAmenityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RoomAmenity.
     * @param {RoomAmenityDeleteArgs} args - Arguments to delete one RoomAmenity.
     * @example
     * // Delete one RoomAmenity
     * const RoomAmenity = await prisma.roomAmenity.delete({
     *   where: {
     *     // ... filter to delete one RoomAmenity
     *   }
     * })
     * 
     */
    delete<T extends RoomAmenityDeleteArgs>(args: SelectSubset<T, RoomAmenityDeleteArgs<ExtArgs>>): Prisma__RoomAmenityClient<$Result.GetResult<Prisma.$RoomAmenityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RoomAmenity.
     * @param {RoomAmenityUpdateArgs} args - Arguments to update one RoomAmenity.
     * @example
     * // Update one RoomAmenity
     * const roomAmenity = await prisma.roomAmenity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomAmenityUpdateArgs>(args: SelectSubset<T, RoomAmenityUpdateArgs<ExtArgs>>): Prisma__RoomAmenityClient<$Result.GetResult<Prisma.$RoomAmenityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RoomAmenities.
     * @param {RoomAmenityDeleteManyArgs} args - Arguments to filter RoomAmenities to delete.
     * @example
     * // Delete a few RoomAmenities
     * const { count } = await prisma.roomAmenity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomAmenityDeleteManyArgs>(args?: SelectSubset<T, RoomAmenityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomAmenities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAmenityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoomAmenities
     * const roomAmenity = await prisma.roomAmenity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomAmenityUpdateManyArgs>(args: SelectSubset<T, RoomAmenityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomAmenities and returns the data updated in the database.
     * @param {RoomAmenityUpdateManyAndReturnArgs} args - Arguments to update many RoomAmenities.
     * @example
     * // Update many RoomAmenities
     * const roomAmenity = await prisma.roomAmenity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RoomAmenities and only return the `id`
     * const roomAmenityWithIdOnly = await prisma.roomAmenity.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoomAmenityUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomAmenityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomAmenityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RoomAmenity.
     * @param {RoomAmenityUpsertArgs} args - Arguments to update or create a RoomAmenity.
     * @example
     * // Update or create a RoomAmenity
     * const roomAmenity = await prisma.roomAmenity.upsert({
     *   create: {
     *     // ... data to create a RoomAmenity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoomAmenity we want to update
     *   }
     * })
     */
    upsert<T extends RoomAmenityUpsertArgs>(args: SelectSubset<T, RoomAmenityUpsertArgs<ExtArgs>>): Prisma__RoomAmenityClient<$Result.GetResult<Prisma.$RoomAmenityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RoomAmenities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAmenityCountArgs} args - Arguments to filter RoomAmenities to count.
     * @example
     * // Count the number of RoomAmenities
     * const count = await prisma.roomAmenity.count({
     *   where: {
     *     // ... the filter for the RoomAmenities we want to count
     *   }
     * })
    **/
    count<T extends RoomAmenityCountArgs>(
      args?: Subset<T, RoomAmenityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomAmenityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoomAmenity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAmenityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoomAmenityAggregateArgs>(args: Subset<T, RoomAmenityAggregateArgs>): Prisma.PrismaPromise<GetRoomAmenityAggregateType<T>>

    /**
     * Group by RoomAmenity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAmenityGroupByArgs} args - Group by arguments.
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
      T extends RoomAmenityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomAmenityGroupByArgs['orderBy'] }
        : { orderBy?: RoomAmenityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoomAmenityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomAmenityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoomAmenity model
   */
  readonly fields: RoomAmenityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoomAmenity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomAmenityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RoomAmenity model
   */
  interface RoomAmenityFieldRefs {
    readonly id: FieldRef<"RoomAmenity", 'String'>
    readonly name: FieldRef<"RoomAmenity", 'String'>
    readonly roomId: FieldRef<"RoomAmenity", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RoomAmenity findUnique
   */
  export type RoomAmenityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomAmenity
     */
    select?: RoomAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomAmenity
     */
    omit?: RoomAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomAmenityInclude<ExtArgs> | null
    /**
     * Filter, which RoomAmenity to fetch.
     */
    where: RoomAmenityWhereUniqueInput
  }

  /**
   * RoomAmenity findUniqueOrThrow
   */
  export type RoomAmenityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomAmenity
     */
    select?: RoomAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomAmenity
     */
    omit?: RoomAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomAmenityInclude<ExtArgs> | null
    /**
     * Filter, which RoomAmenity to fetch.
     */
    where: RoomAmenityWhereUniqueInput
  }

  /**
   * RoomAmenity findFirst
   */
  export type RoomAmenityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomAmenity
     */
    select?: RoomAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomAmenity
     */
    omit?: RoomAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomAmenityInclude<ExtArgs> | null
    /**
     * Filter, which RoomAmenity to fetch.
     */
    where?: RoomAmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomAmenities to fetch.
     */
    orderBy?: RoomAmenityOrderByWithRelationInput | RoomAmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomAmenities.
     */
    cursor?: RoomAmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomAmenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomAmenities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomAmenities.
     */
    distinct?: RoomAmenityScalarFieldEnum | RoomAmenityScalarFieldEnum[]
  }

  /**
   * RoomAmenity findFirstOrThrow
   */
  export type RoomAmenityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomAmenity
     */
    select?: RoomAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomAmenity
     */
    omit?: RoomAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomAmenityInclude<ExtArgs> | null
    /**
     * Filter, which RoomAmenity to fetch.
     */
    where?: RoomAmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomAmenities to fetch.
     */
    orderBy?: RoomAmenityOrderByWithRelationInput | RoomAmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomAmenities.
     */
    cursor?: RoomAmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomAmenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomAmenities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomAmenities.
     */
    distinct?: RoomAmenityScalarFieldEnum | RoomAmenityScalarFieldEnum[]
  }

  /**
   * RoomAmenity findMany
   */
  export type RoomAmenityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomAmenity
     */
    select?: RoomAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomAmenity
     */
    omit?: RoomAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomAmenityInclude<ExtArgs> | null
    /**
     * Filter, which RoomAmenities to fetch.
     */
    where?: RoomAmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomAmenities to fetch.
     */
    orderBy?: RoomAmenityOrderByWithRelationInput | RoomAmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoomAmenities.
     */
    cursor?: RoomAmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomAmenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomAmenities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomAmenities.
     */
    distinct?: RoomAmenityScalarFieldEnum | RoomAmenityScalarFieldEnum[]
  }

  /**
   * RoomAmenity create
   */
  export type RoomAmenityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomAmenity
     */
    select?: RoomAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomAmenity
     */
    omit?: RoomAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomAmenityInclude<ExtArgs> | null
    /**
     * The data needed to create a RoomAmenity.
     */
    data: XOR<RoomAmenityCreateInput, RoomAmenityUncheckedCreateInput>
  }

  /**
   * RoomAmenity createMany
   */
  export type RoomAmenityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoomAmenities.
     */
    data: RoomAmenityCreateManyInput | RoomAmenityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoomAmenity createManyAndReturn
   */
  export type RoomAmenityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomAmenity
     */
    select?: RoomAmenitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoomAmenity
     */
    omit?: RoomAmenityOmit<ExtArgs> | null
    /**
     * The data used to create many RoomAmenities.
     */
    data: RoomAmenityCreateManyInput | RoomAmenityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomAmenityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoomAmenity update
   */
  export type RoomAmenityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomAmenity
     */
    select?: RoomAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomAmenity
     */
    omit?: RoomAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomAmenityInclude<ExtArgs> | null
    /**
     * The data needed to update a RoomAmenity.
     */
    data: XOR<RoomAmenityUpdateInput, RoomAmenityUncheckedUpdateInput>
    /**
     * Choose, which RoomAmenity to update.
     */
    where: RoomAmenityWhereUniqueInput
  }

  /**
   * RoomAmenity updateMany
   */
  export type RoomAmenityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoomAmenities.
     */
    data: XOR<RoomAmenityUpdateManyMutationInput, RoomAmenityUncheckedUpdateManyInput>
    /**
     * Filter which RoomAmenities to update
     */
    where?: RoomAmenityWhereInput
    /**
     * Limit how many RoomAmenities to update.
     */
    limit?: number
  }

  /**
   * RoomAmenity updateManyAndReturn
   */
  export type RoomAmenityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomAmenity
     */
    select?: RoomAmenitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoomAmenity
     */
    omit?: RoomAmenityOmit<ExtArgs> | null
    /**
     * The data used to update RoomAmenities.
     */
    data: XOR<RoomAmenityUpdateManyMutationInput, RoomAmenityUncheckedUpdateManyInput>
    /**
     * Filter which RoomAmenities to update
     */
    where?: RoomAmenityWhereInput
    /**
     * Limit how many RoomAmenities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomAmenityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoomAmenity upsert
   */
  export type RoomAmenityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomAmenity
     */
    select?: RoomAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomAmenity
     */
    omit?: RoomAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomAmenityInclude<ExtArgs> | null
    /**
     * The filter to search for the RoomAmenity to update in case it exists.
     */
    where: RoomAmenityWhereUniqueInput
    /**
     * In case the RoomAmenity found by the `where` argument doesn't exist, create a new RoomAmenity with this data.
     */
    create: XOR<RoomAmenityCreateInput, RoomAmenityUncheckedCreateInput>
    /**
     * In case the RoomAmenity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomAmenityUpdateInput, RoomAmenityUncheckedUpdateInput>
  }

  /**
   * RoomAmenity delete
   */
  export type RoomAmenityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomAmenity
     */
    select?: RoomAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomAmenity
     */
    omit?: RoomAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomAmenityInclude<ExtArgs> | null
    /**
     * Filter which RoomAmenity to delete.
     */
    where: RoomAmenityWhereUniqueInput
  }

  /**
   * RoomAmenity deleteMany
   */
  export type RoomAmenityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomAmenities to delete
     */
    where?: RoomAmenityWhereInput
    /**
     * Limit how many RoomAmenities to delete.
     */
    limit?: number
  }

  /**
   * RoomAmenity without action
   */
  export type RoomAmenityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomAmenity
     */
    select?: RoomAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomAmenity
     */
    omit?: RoomAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomAmenityInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    total: number | null
    guestCount: number | null
  }

  export type BookingSumAggregateOutputType = {
    total: number | null
    guestCount: number | null
  }

  export type BookingMinAggregateOutputType = {
    id: string | null
    userId: string | null
    roomId: string | null
    checkIn: Date | null
    checkOut: Date | null
    status: string | null
    total: number | null
    guestName: string | null
    guestEmail: string | null
    guestPhone: string | null
    guestCount: number | null
    specialRequests: string | null
    holdExpiresAt: Date | null
    createdAt: Date | null
  }

  export type BookingMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    roomId: string | null
    checkIn: Date | null
    checkOut: Date | null
    status: string | null
    total: number | null
    guestName: string | null
    guestEmail: string | null
    guestPhone: string | null
    guestCount: number | null
    specialRequests: string | null
    holdExpiresAt: Date | null
    createdAt: Date | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    userId: number
    roomId: number
    checkIn: number
    checkOut: number
    status: number
    total: number
    guestName: number
    guestEmail: number
    guestPhone: number
    guestCount: number
    specialRequests: number
    holdExpiresAt: number
    createdAt: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    total?: true
    guestCount?: true
  }

  export type BookingSumAggregateInputType = {
    total?: true
    guestCount?: true
  }

  export type BookingMinAggregateInputType = {
    id?: true
    userId?: true
    roomId?: true
    checkIn?: true
    checkOut?: true
    status?: true
    total?: true
    guestName?: true
    guestEmail?: true
    guestPhone?: true
    guestCount?: true
    specialRequests?: true
    holdExpiresAt?: true
    createdAt?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    userId?: true
    roomId?: true
    checkIn?: true
    checkOut?: true
    status?: true
    total?: true
    guestName?: true
    guestEmail?: true
    guestPhone?: true
    guestCount?: true
    specialRequests?: true
    holdExpiresAt?: true
    createdAt?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    userId?: true
    roomId?: true
    checkIn?: true
    checkOut?: true
    status?: true
    total?: true
    guestName?: true
    guestEmail?: true
    guestPhone?: true
    guestCount?: true
    specialRequests?: true
    holdExpiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: string
    userId: string
    roomId: string
    checkIn: Date
    checkOut: Date
    status: string
    total: number
    guestName: string | null
    guestEmail: string | null
    guestPhone: string | null
    guestCount: number
    specialRequests: string | null
    holdExpiresAt: Date | null
    createdAt: Date
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    roomId?: boolean
    checkIn?: boolean
    checkOut?: boolean
    status?: boolean
    total?: boolean
    guestName?: boolean
    guestEmail?: boolean
    guestPhone?: boolean
    guestCount?: boolean
    specialRequests?: boolean
    holdExpiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
    payments?: boolean | Booking$paymentsArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    roomId?: boolean
    checkIn?: boolean
    checkOut?: boolean
    status?: boolean
    total?: boolean
    guestName?: boolean
    guestEmail?: boolean
    guestPhone?: boolean
    guestCount?: boolean
    specialRequests?: boolean
    holdExpiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    roomId?: boolean
    checkIn?: boolean
    checkOut?: boolean
    status?: boolean
    total?: boolean
    guestName?: boolean
    guestEmail?: boolean
    guestPhone?: boolean
    guestCount?: boolean
    specialRequests?: boolean
    holdExpiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectScalar = {
    id?: boolean
    userId?: boolean
    roomId?: boolean
    checkIn?: boolean
    checkOut?: boolean
    status?: boolean
    total?: boolean
    guestName?: boolean
    guestEmail?: boolean
    guestPhone?: boolean
    guestCount?: boolean
    specialRequests?: boolean
    holdExpiresAt?: boolean
    createdAt?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "roomId" | "checkIn" | "checkOut" | "status" | "total" | "guestName" | "guestEmail" | "guestPhone" | "guestCount" | "specialRequests" | "holdExpiresAt" | "createdAt", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
    payments?: boolean | Booking$paymentsArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }
  export type BookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      room: Prisma.$RoomPayload<ExtArgs>
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      roomId: string
      checkIn: Date
      checkOut: Date
      status: string
      total: number
      guestName: string | null
      guestEmail: string | null
      guestPhone: string | null
      guestCount: number
      specialRequests: string | null
      holdExpiresAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {BookingCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {BookingUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookingUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
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
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payments<T extends Booking$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Booking$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'String'>
    readonly userId: FieldRef<"Booking", 'String'>
    readonly roomId: FieldRef<"Booking", 'String'>
    readonly checkIn: FieldRef<"Booking", 'DateTime'>
    readonly checkOut: FieldRef<"Booking", 'DateTime'>
    readonly status: FieldRef<"Booking", 'String'>
    readonly total: FieldRef<"Booking", 'Float'>
    readonly guestName: FieldRef<"Booking", 'String'>
    readonly guestEmail: FieldRef<"Booking", 'String'>
    readonly guestPhone: FieldRef<"Booking", 'String'>
    readonly guestCount: FieldRef<"Booking", 'Int'>
    readonly specialRequests: FieldRef<"Booking", 'String'>
    readonly holdExpiresAt: FieldRef<"Booking", 'DateTime'>
    readonly createdAt: FieldRef<"Booking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking createManyAndReturn
   */
  export type BookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking updateManyAndReturn
   */
  export type BookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking.payments
   */
  export type Booking$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: number | null
    refundedAmount: number | null
    refundAttempts: number | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: number | null
    refundedAmount: number | null
    refundAttempts: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    bookingId: string | null
    amount: number | null
    currency: string | null
    status: string | null
    provider: string | null
    razorpayOrderId: string | null
    razorpayPaymentId: string | null
    razorpaySignature: string | null
    refundId: string | null
    refundStatus: string | null
    refundedAmount: number | null
    failureReason: string | null
    refundLockToken: string | null
    refundLockExpiresAt: Date | null
    refundAttempts: number | null
    refundCreateAttemptedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    bookingId: string | null
    amount: number | null
    currency: string | null
    status: string | null
    provider: string | null
    razorpayOrderId: string | null
    razorpayPaymentId: string | null
    razorpaySignature: string | null
    refundId: string | null
    refundStatus: string | null
    refundedAmount: number | null
    failureReason: string | null
    refundLockToken: string | null
    refundLockExpiresAt: Date | null
    refundAttempts: number | null
    refundCreateAttemptedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    bookingId: number
    amount: number
    currency: number
    status: number
    provider: number
    razorpayOrderId: number
    razorpayPaymentId: number
    razorpaySignature: number
    refundId: number
    refundStatus: number
    refundedAmount: number
    failureReason: number
    refundLockToken: number
    refundLockExpiresAt: number
    refundAttempts: number
    refundCreateAttemptedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
    refundedAmount?: true
    refundAttempts?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
    refundedAmount?: true
    refundAttempts?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    bookingId?: true
    amount?: true
    currency?: true
    status?: true
    provider?: true
    razorpayOrderId?: true
    razorpayPaymentId?: true
    razorpaySignature?: true
    refundId?: true
    refundStatus?: true
    refundedAmount?: true
    failureReason?: true
    refundLockToken?: true
    refundLockExpiresAt?: true
    refundAttempts?: true
    refundCreateAttemptedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    bookingId?: true
    amount?: true
    currency?: true
    status?: true
    provider?: true
    razorpayOrderId?: true
    razorpayPaymentId?: true
    razorpaySignature?: true
    refundId?: true
    refundStatus?: true
    refundedAmount?: true
    failureReason?: true
    refundLockToken?: true
    refundLockExpiresAt?: true
    refundAttempts?: true
    refundCreateAttemptedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    bookingId?: true
    amount?: true
    currency?: true
    status?: true
    provider?: true
    razorpayOrderId?: true
    razorpayPaymentId?: true
    razorpaySignature?: true
    refundId?: true
    refundStatus?: true
    refundedAmount?: true
    failureReason?: true
    refundLockToken?: true
    refundLockExpiresAt?: true
    refundAttempts?: true
    refundCreateAttemptedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    bookingId: string
    amount: number
    currency: string
    status: string
    provider: string
    razorpayOrderId: string | null
    razorpayPaymentId: string | null
    razorpaySignature: string | null
    refundId: string | null
    refundStatus: string | null
    refundedAmount: number | null
    failureReason: string | null
    refundLockToken: string | null
    refundLockExpiresAt: Date | null
    refundAttempts: number
    refundCreateAttemptedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    provider?: boolean
    razorpayOrderId?: boolean
    razorpayPaymentId?: boolean
    razorpaySignature?: boolean
    refundId?: boolean
    refundStatus?: boolean
    refundedAmount?: boolean
    failureReason?: boolean
    refundLockToken?: boolean
    refundLockExpiresAt?: boolean
    refundAttempts?: boolean
    refundCreateAttemptedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    provider?: boolean
    razorpayOrderId?: boolean
    razorpayPaymentId?: boolean
    razorpaySignature?: boolean
    refundId?: boolean
    refundStatus?: boolean
    refundedAmount?: boolean
    failureReason?: boolean
    refundLockToken?: boolean
    refundLockExpiresAt?: boolean
    refundAttempts?: boolean
    refundCreateAttemptedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    provider?: boolean
    razorpayOrderId?: boolean
    razorpayPaymentId?: boolean
    razorpaySignature?: boolean
    refundId?: boolean
    refundStatus?: boolean
    refundedAmount?: boolean
    failureReason?: boolean
    refundLockToken?: boolean
    refundLockExpiresAt?: boolean
    refundAttempts?: boolean
    refundCreateAttemptedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    bookingId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    provider?: boolean
    razorpayOrderId?: boolean
    razorpayPaymentId?: boolean
    razorpaySignature?: boolean
    refundId?: boolean
    refundStatus?: boolean
    refundedAmount?: boolean
    failureReason?: boolean
    refundLockToken?: boolean
    refundLockExpiresAt?: boolean
    refundAttempts?: boolean
    refundCreateAttemptedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookingId" | "amount" | "currency" | "status" | "provider" | "razorpayOrderId" | "razorpayPaymentId" | "razorpaySignature" | "refundId" | "refundStatus" | "refundedAmount" | "failureReason" | "refundLockToken" | "refundLockExpiresAt" | "refundAttempts" | "refundCreateAttemptedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      booking: Prisma.$BookingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bookingId: string
      amount: number
      currency: string
      status: string
      provider: string
      razorpayOrderId: string | null
      razorpayPaymentId: string | null
      razorpaySignature: string | null
      refundId: string | null
      refundStatus: string | null
      refundedAmount: number | null
      failureReason: string | null
      refundLockToken: string | null
      refundLockExpiresAt: Date | null
      refundAttempts: number
      refundCreateAttemptedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends BookingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingDefaultArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly bookingId: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Float'>
    readonly currency: FieldRef<"Payment", 'String'>
    readonly status: FieldRef<"Payment", 'String'>
    readonly provider: FieldRef<"Payment", 'String'>
    readonly razorpayOrderId: FieldRef<"Payment", 'String'>
    readonly razorpayPaymentId: FieldRef<"Payment", 'String'>
    readonly razorpaySignature: FieldRef<"Payment", 'String'>
    readonly refundId: FieldRef<"Payment", 'String'>
    readonly refundStatus: FieldRef<"Payment", 'String'>
    readonly refundedAmount: FieldRef<"Payment", 'Float'>
    readonly failureReason: FieldRef<"Payment", 'String'>
    readonly refundLockToken: FieldRef<"Payment", 'String'>
    readonly refundLockExpiresAt: FieldRef<"Payment", 'DateTime'>
    readonly refundAttempts: FieldRef<"Payment", 'Int'>
    readonly refundCreateAttemptedAt: FieldRef<"Payment", 'DateTime'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model PaymentWebhookEvent
   */

  export type AggregatePaymentWebhookEvent = {
    _count: PaymentWebhookEventCountAggregateOutputType | null
    _avg: PaymentWebhookEventAvgAggregateOutputType | null
    _sum: PaymentWebhookEventSumAggregateOutputType | null
    _min: PaymentWebhookEventMinAggregateOutputType | null
    _max: PaymentWebhookEventMaxAggregateOutputType | null
  }

  export type PaymentWebhookEventAvgAggregateOutputType = {
    attempts: number | null
  }

  export type PaymentWebhookEventSumAggregateOutputType = {
    attempts: number | null
  }

  export type PaymentWebhookEventMinAggregateOutputType = {
    id: string | null
    provider: string | null
    eventId: string | null
    eventType: string | null
    processedAt: Date | null
    processingToken: string | null
    processingLockExpiresAt: Date | null
    attempts: number | null
    lastError: string | null
    createdAt: Date | null
  }

  export type PaymentWebhookEventMaxAggregateOutputType = {
    id: string | null
    provider: string | null
    eventId: string | null
    eventType: string | null
    processedAt: Date | null
    processingToken: string | null
    processingLockExpiresAt: Date | null
    attempts: number | null
    lastError: string | null
    createdAt: Date | null
  }

  export type PaymentWebhookEventCountAggregateOutputType = {
    id: number
    provider: number
    eventId: number
    eventType: number
    processedAt: number
    processingToken: number
    processingLockExpiresAt: number
    attempts: number
    lastError: number
    createdAt: number
    _all: number
  }


  export type PaymentWebhookEventAvgAggregateInputType = {
    attempts?: true
  }

  export type PaymentWebhookEventSumAggregateInputType = {
    attempts?: true
  }

  export type PaymentWebhookEventMinAggregateInputType = {
    id?: true
    provider?: true
    eventId?: true
    eventType?: true
    processedAt?: true
    processingToken?: true
    processingLockExpiresAt?: true
    attempts?: true
    lastError?: true
    createdAt?: true
  }

  export type PaymentWebhookEventMaxAggregateInputType = {
    id?: true
    provider?: true
    eventId?: true
    eventType?: true
    processedAt?: true
    processingToken?: true
    processingLockExpiresAt?: true
    attempts?: true
    lastError?: true
    createdAt?: true
  }

  export type PaymentWebhookEventCountAggregateInputType = {
    id?: true
    provider?: true
    eventId?: true
    eventType?: true
    processedAt?: true
    processingToken?: true
    processingLockExpiresAt?: true
    attempts?: true
    lastError?: true
    createdAt?: true
    _all?: true
  }

  export type PaymentWebhookEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentWebhookEvent to aggregate.
     */
    where?: PaymentWebhookEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentWebhookEvents to fetch.
     */
    orderBy?: PaymentWebhookEventOrderByWithRelationInput | PaymentWebhookEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWebhookEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentWebhookEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentWebhookEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentWebhookEvents
    **/
    _count?: true | PaymentWebhookEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentWebhookEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentWebhookEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentWebhookEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentWebhookEventMaxAggregateInputType
  }

  export type GetPaymentWebhookEventAggregateType<T extends PaymentWebhookEventAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentWebhookEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentWebhookEvent[P]>
      : GetScalarType<T[P], AggregatePaymentWebhookEvent[P]>
  }




  export type PaymentWebhookEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWebhookEventWhereInput
    orderBy?: PaymentWebhookEventOrderByWithAggregationInput | PaymentWebhookEventOrderByWithAggregationInput[]
    by: PaymentWebhookEventScalarFieldEnum[] | PaymentWebhookEventScalarFieldEnum
    having?: PaymentWebhookEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentWebhookEventCountAggregateInputType | true
    _avg?: PaymentWebhookEventAvgAggregateInputType
    _sum?: PaymentWebhookEventSumAggregateInputType
    _min?: PaymentWebhookEventMinAggregateInputType
    _max?: PaymentWebhookEventMaxAggregateInputType
  }

  export type PaymentWebhookEventGroupByOutputType = {
    id: string
    provider: string
    eventId: string
    eventType: string
    processedAt: Date | null
    processingToken: string | null
    processingLockExpiresAt: Date | null
    attempts: number
    lastError: string | null
    createdAt: Date
    _count: PaymentWebhookEventCountAggregateOutputType | null
    _avg: PaymentWebhookEventAvgAggregateOutputType | null
    _sum: PaymentWebhookEventSumAggregateOutputType | null
    _min: PaymentWebhookEventMinAggregateOutputType | null
    _max: PaymentWebhookEventMaxAggregateOutputType | null
  }

  type GetPaymentWebhookEventGroupByPayload<T extends PaymentWebhookEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentWebhookEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentWebhookEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentWebhookEventGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentWebhookEventGroupByOutputType[P]>
        }
      >
    >


  export type PaymentWebhookEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    eventId?: boolean
    eventType?: boolean
    processedAt?: boolean
    processingToken?: boolean
    processingLockExpiresAt?: boolean
    attempts?: boolean
    lastError?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["paymentWebhookEvent"]>

  export type PaymentWebhookEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    eventId?: boolean
    eventType?: boolean
    processedAt?: boolean
    processingToken?: boolean
    processingLockExpiresAt?: boolean
    attempts?: boolean
    lastError?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["paymentWebhookEvent"]>

  export type PaymentWebhookEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    eventId?: boolean
    eventType?: boolean
    processedAt?: boolean
    processingToken?: boolean
    processingLockExpiresAt?: boolean
    attempts?: boolean
    lastError?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["paymentWebhookEvent"]>

  export type PaymentWebhookEventSelectScalar = {
    id?: boolean
    provider?: boolean
    eventId?: boolean
    eventType?: boolean
    processedAt?: boolean
    processingToken?: boolean
    processingLockExpiresAt?: boolean
    attempts?: boolean
    lastError?: boolean
    createdAt?: boolean
  }

  export type PaymentWebhookEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "provider" | "eventId" | "eventType" | "processedAt" | "processingToken" | "processingLockExpiresAt" | "attempts" | "lastError" | "createdAt", ExtArgs["result"]["paymentWebhookEvent"]>

  export type $PaymentWebhookEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentWebhookEvent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      provider: string
      eventId: string
      eventType: string
      processedAt: Date | null
      processingToken: string | null
      processingLockExpiresAt: Date | null
      attempts: number
      lastError: string | null
      createdAt: Date
    }, ExtArgs["result"]["paymentWebhookEvent"]>
    composites: {}
  }

  type PaymentWebhookEventGetPayload<S extends boolean | null | undefined | PaymentWebhookEventDefaultArgs> = $Result.GetResult<Prisma.$PaymentWebhookEventPayload, S>

  type PaymentWebhookEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentWebhookEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentWebhookEventCountAggregateInputType | true
    }

  export interface PaymentWebhookEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentWebhookEvent'], meta: { name: 'PaymentWebhookEvent' } }
    /**
     * Find zero or one PaymentWebhookEvent that matches the filter.
     * @param {PaymentWebhookEventFindUniqueArgs} args - Arguments to find a PaymentWebhookEvent
     * @example
     * // Get one PaymentWebhookEvent
     * const paymentWebhookEvent = await prisma.paymentWebhookEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentWebhookEventFindUniqueArgs>(args: SelectSubset<T, PaymentWebhookEventFindUniqueArgs<ExtArgs>>): Prisma__PaymentWebhookEventClient<$Result.GetResult<Prisma.$PaymentWebhookEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaymentWebhookEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentWebhookEventFindUniqueOrThrowArgs} args - Arguments to find a PaymentWebhookEvent
     * @example
     * // Get one PaymentWebhookEvent
     * const paymentWebhookEvent = await prisma.paymentWebhookEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentWebhookEventFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentWebhookEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentWebhookEventClient<$Result.GetResult<Prisma.$PaymentWebhookEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentWebhookEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentWebhookEventFindFirstArgs} args - Arguments to find a PaymentWebhookEvent
     * @example
     * // Get one PaymentWebhookEvent
     * const paymentWebhookEvent = await prisma.paymentWebhookEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentWebhookEventFindFirstArgs>(args?: SelectSubset<T, PaymentWebhookEventFindFirstArgs<ExtArgs>>): Prisma__PaymentWebhookEventClient<$Result.GetResult<Prisma.$PaymentWebhookEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentWebhookEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentWebhookEventFindFirstOrThrowArgs} args - Arguments to find a PaymentWebhookEvent
     * @example
     * // Get one PaymentWebhookEvent
     * const paymentWebhookEvent = await prisma.paymentWebhookEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentWebhookEventFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentWebhookEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentWebhookEventClient<$Result.GetResult<Prisma.$PaymentWebhookEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaymentWebhookEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentWebhookEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentWebhookEvents
     * const paymentWebhookEvents = await prisma.paymentWebhookEvent.findMany()
     * 
     * // Get first 10 PaymentWebhookEvents
     * const paymentWebhookEvents = await prisma.paymentWebhookEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWebhookEventWithIdOnly = await prisma.paymentWebhookEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentWebhookEventFindManyArgs>(args?: SelectSubset<T, PaymentWebhookEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentWebhookEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaymentWebhookEvent.
     * @param {PaymentWebhookEventCreateArgs} args - Arguments to create a PaymentWebhookEvent.
     * @example
     * // Create one PaymentWebhookEvent
     * const PaymentWebhookEvent = await prisma.paymentWebhookEvent.create({
     *   data: {
     *     // ... data to create a PaymentWebhookEvent
     *   }
     * })
     * 
     */
    create<T extends PaymentWebhookEventCreateArgs>(args: SelectSubset<T, PaymentWebhookEventCreateArgs<ExtArgs>>): Prisma__PaymentWebhookEventClient<$Result.GetResult<Prisma.$PaymentWebhookEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaymentWebhookEvents.
     * @param {PaymentWebhookEventCreateManyArgs} args - Arguments to create many PaymentWebhookEvents.
     * @example
     * // Create many PaymentWebhookEvents
     * const paymentWebhookEvent = await prisma.paymentWebhookEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentWebhookEventCreateManyArgs>(args?: SelectSubset<T, PaymentWebhookEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentWebhookEvents and returns the data saved in the database.
     * @param {PaymentWebhookEventCreateManyAndReturnArgs} args - Arguments to create many PaymentWebhookEvents.
     * @example
     * // Create many PaymentWebhookEvents
     * const paymentWebhookEvent = await prisma.paymentWebhookEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentWebhookEvents and only return the `id`
     * const paymentWebhookEventWithIdOnly = await prisma.paymentWebhookEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentWebhookEventCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentWebhookEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentWebhookEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PaymentWebhookEvent.
     * @param {PaymentWebhookEventDeleteArgs} args - Arguments to delete one PaymentWebhookEvent.
     * @example
     * // Delete one PaymentWebhookEvent
     * const PaymentWebhookEvent = await prisma.paymentWebhookEvent.delete({
     *   where: {
     *     // ... filter to delete one PaymentWebhookEvent
     *   }
     * })
     * 
     */
    delete<T extends PaymentWebhookEventDeleteArgs>(args: SelectSubset<T, PaymentWebhookEventDeleteArgs<ExtArgs>>): Prisma__PaymentWebhookEventClient<$Result.GetResult<Prisma.$PaymentWebhookEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaymentWebhookEvent.
     * @param {PaymentWebhookEventUpdateArgs} args - Arguments to update one PaymentWebhookEvent.
     * @example
     * // Update one PaymentWebhookEvent
     * const paymentWebhookEvent = await prisma.paymentWebhookEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentWebhookEventUpdateArgs>(args: SelectSubset<T, PaymentWebhookEventUpdateArgs<ExtArgs>>): Prisma__PaymentWebhookEventClient<$Result.GetResult<Prisma.$PaymentWebhookEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaymentWebhookEvents.
     * @param {PaymentWebhookEventDeleteManyArgs} args - Arguments to filter PaymentWebhookEvents to delete.
     * @example
     * // Delete a few PaymentWebhookEvents
     * const { count } = await prisma.paymentWebhookEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentWebhookEventDeleteManyArgs>(args?: SelectSubset<T, PaymentWebhookEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentWebhookEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentWebhookEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentWebhookEvents
     * const paymentWebhookEvent = await prisma.paymentWebhookEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentWebhookEventUpdateManyArgs>(args: SelectSubset<T, PaymentWebhookEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentWebhookEvents and returns the data updated in the database.
     * @param {PaymentWebhookEventUpdateManyAndReturnArgs} args - Arguments to update many PaymentWebhookEvents.
     * @example
     * // Update many PaymentWebhookEvents
     * const paymentWebhookEvent = await prisma.paymentWebhookEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PaymentWebhookEvents and only return the `id`
     * const paymentWebhookEventWithIdOnly = await prisma.paymentWebhookEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentWebhookEventUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentWebhookEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentWebhookEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PaymentWebhookEvent.
     * @param {PaymentWebhookEventUpsertArgs} args - Arguments to update or create a PaymentWebhookEvent.
     * @example
     * // Update or create a PaymentWebhookEvent
     * const paymentWebhookEvent = await prisma.paymentWebhookEvent.upsert({
     *   create: {
     *     // ... data to create a PaymentWebhookEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentWebhookEvent we want to update
     *   }
     * })
     */
    upsert<T extends PaymentWebhookEventUpsertArgs>(args: SelectSubset<T, PaymentWebhookEventUpsertArgs<ExtArgs>>): Prisma__PaymentWebhookEventClient<$Result.GetResult<Prisma.$PaymentWebhookEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaymentWebhookEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentWebhookEventCountArgs} args - Arguments to filter PaymentWebhookEvents to count.
     * @example
     * // Count the number of PaymentWebhookEvents
     * const count = await prisma.paymentWebhookEvent.count({
     *   where: {
     *     // ... the filter for the PaymentWebhookEvents we want to count
     *   }
     * })
    **/
    count<T extends PaymentWebhookEventCountArgs>(
      args?: Subset<T, PaymentWebhookEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentWebhookEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentWebhookEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentWebhookEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentWebhookEventAggregateArgs>(args: Subset<T, PaymentWebhookEventAggregateArgs>): Prisma.PrismaPromise<GetPaymentWebhookEventAggregateType<T>>

    /**
     * Group by PaymentWebhookEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentWebhookEventGroupByArgs} args - Group by arguments.
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
      T extends PaymentWebhookEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentWebhookEventGroupByArgs['orderBy'] }
        : { orderBy?: PaymentWebhookEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentWebhookEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentWebhookEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentWebhookEvent model
   */
  readonly fields: PaymentWebhookEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentWebhookEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentWebhookEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the PaymentWebhookEvent model
   */
  interface PaymentWebhookEventFieldRefs {
    readonly id: FieldRef<"PaymentWebhookEvent", 'String'>
    readonly provider: FieldRef<"PaymentWebhookEvent", 'String'>
    readonly eventId: FieldRef<"PaymentWebhookEvent", 'String'>
    readonly eventType: FieldRef<"PaymentWebhookEvent", 'String'>
    readonly processedAt: FieldRef<"PaymentWebhookEvent", 'DateTime'>
    readonly processingToken: FieldRef<"PaymentWebhookEvent", 'String'>
    readonly processingLockExpiresAt: FieldRef<"PaymentWebhookEvent", 'DateTime'>
    readonly attempts: FieldRef<"PaymentWebhookEvent", 'Int'>
    readonly lastError: FieldRef<"PaymentWebhookEvent", 'String'>
    readonly createdAt: FieldRef<"PaymentWebhookEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PaymentWebhookEvent findUnique
   */
  export type PaymentWebhookEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentWebhookEvent
     */
    select?: PaymentWebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentWebhookEvent
     */
    omit?: PaymentWebhookEventOmit<ExtArgs> | null
    /**
     * Filter, which PaymentWebhookEvent to fetch.
     */
    where: PaymentWebhookEventWhereUniqueInput
  }

  /**
   * PaymentWebhookEvent findUniqueOrThrow
   */
  export type PaymentWebhookEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentWebhookEvent
     */
    select?: PaymentWebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentWebhookEvent
     */
    omit?: PaymentWebhookEventOmit<ExtArgs> | null
    /**
     * Filter, which PaymentWebhookEvent to fetch.
     */
    where: PaymentWebhookEventWhereUniqueInput
  }

  /**
   * PaymentWebhookEvent findFirst
   */
  export type PaymentWebhookEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentWebhookEvent
     */
    select?: PaymentWebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentWebhookEvent
     */
    omit?: PaymentWebhookEventOmit<ExtArgs> | null
    /**
     * Filter, which PaymentWebhookEvent to fetch.
     */
    where?: PaymentWebhookEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentWebhookEvents to fetch.
     */
    orderBy?: PaymentWebhookEventOrderByWithRelationInput | PaymentWebhookEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentWebhookEvents.
     */
    cursor?: PaymentWebhookEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentWebhookEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentWebhookEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentWebhookEvents.
     */
    distinct?: PaymentWebhookEventScalarFieldEnum | PaymentWebhookEventScalarFieldEnum[]
  }

  /**
   * PaymentWebhookEvent findFirstOrThrow
   */
  export type PaymentWebhookEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentWebhookEvent
     */
    select?: PaymentWebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentWebhookEvent
     */
    omit?: PaymentWebhookEventOmit<ExtArgs> | null
    /**
     * Filter, which PaymentWebhookEvent to fetch.
     */
    where?: PaymentWebhookEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentWebhookEvents to fetch.
     */
    orderBy?: PaymentWebhookEventOrderByWithRelationInput | PaymentWebhookEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentWebhookEvents.
     */
    cursor?: PaymentWebhookEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentWebhookEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentWebhookEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentWebhookEvents.
     */
    distinct?: PaymentWebhookEventScalarFieldEnum | PaymentWebhookEventScalarFieldEnum[]
  }

  /**
   * PaymentWebhookEvent findMany
   */
  export type PaymentWebhookEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentWebhookEvent
     */
    select?: PaymentWebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentWebhookEvent
     */
    omit?: PaymentWebhookEventOmit<ExtArgs> | null
    /**
     * Filter, which PaymentWebhookEvents to fetch.
     */
    where?: PaymentWebhookEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentWebhookEvents to fetch.
     */
    orderBy?: PaymentWebhookEventOrderByWithRelationInput | PaymentWebhookEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentWebhookEvents.
     */
    cursor?: PaymentWebhookEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentWebhookEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentWebhookEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentWebhookEvents.
     */
    distinct?: PaymentWebhookEventScalarFieldEnum | PaymentWebhookEventScalarFieldEnum[]
  }

  /**
   * PaymentWebhookEvent create
   */
  export type PaymentWebhookEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentWebhookEvent
     */
    select?: PaymentWebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentWebhookEvent
     */
    omit?: PaymentWebhookEventOmit<ExtArgs> | null
    /**
     * The data needed to create a PaymentWebhookEvent.
     */
    data: XOR<PaymentWebhookEventCreateInput, PaymentWebhookEventUncheckedCreateInput>
  }

  /**
   * PaymentWebhookEvent createMany
   */
  export type PaymentWebhookEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentWebhookEvents.
     */
    data: PaymentWebhookEventCreateManyInput | PaymentWebhookEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentWebhookEvent createManyAndReturn
   */
  export type PaymentWebhookEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentWebhookEvent
     */
    select?: PaymentWebhookEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentWebhookEvent
     */
    omit?: PaymentWebhookEventOmit<ExtArgs> | null
    /**
     * The data used to create many PaymentWebhookEvents.
     */
    data: PaymentWebhookEventCreateManyInput | PaymentWebhookEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentWebhookEvent update
   */
  export type PaymentWebhookEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentWebhookEvent
     */
    select?: PaymentWebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentWebhookEvent
     */
    omit?: PaymentWebhookEventOmit<ExtArgs> | null
    /**
     * The data needed to update a PaymentWebhookEvent.
     */
    data: XOR<PaymentWebhookEventUpdateInput, PaymentWebhookEventUncheckedUpdateInput>
    /**
     * Choose, which PaymentWebhookEvent to update.
     */
    where: PaymentWebhookEventWhereUniqueInput
  }

  /**
   * PaymentWebhookEvent updateMany
   */
  export type PaymentWebhookEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentWebhookEvents.
     */
    data: XOR<PaymentWebhookEventUpdateManyMutationInput, PaymentWebhookEventUncheckedUpdateManyInput>
    /**
     * Filter which PaymentWebhookEvents to update
     */
    where?: PaymentWebhookEventWhereInput
    /**
     * Limit how many PaymentWebhookEvents to update.
     */
    limit?: number
  }

  /**
   * PaymentWebhookEvent updateManyAndReturn
   */
  export type PaymentWebhookEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentWebhookEvent
     */
    select?: PaymentWebhookEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentWebhookEvent
     */
    omit?: PaymentWebhookEventOmit<ExtArgs> | null
    /**
     * The data used to update PaymentWebhookEvents.
     */
    data: XOR<PaymentWebhookEventUpdateManyMutationInput, PaymentWebhookEventUncheckedUpdateManyInput>
    /**
     * Filter which PaymentWebhookEvents to update
     */
    where?: PaymentWebhookEventWhereInput
    /**
     * Limit how many PaymentWebhookEvents to update.
     */
    limit?: number
  }

  /**
   * PaymentWebhookEvent upsert
   */
  export type PaymentWebhookEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentWebhookEvent
     */
    select?: PaymentWebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentWebhookEvent
     */
    omit?: PaymentWebhookEventOmit<ExtArgs> | null
    /**
     * The filter to search for the PaymentWebhookEvent to update in case it exists.
     */
    where: PaymentWebhookEventWhereUniqueInput
    /**
     * In case the PaymentWebhookEvent found by the `where` argument doesn't exist, create a new PaymentWebhookEvent with this data.
     */
    create: XOR<PaymentWebhookEventCreateInput, PaymentWebhookEventUncheckedCreateInput>
    /**
     * In case the PaymentWebhookEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentWebhookEventUpdateInput, PaymentWebhookEventUncheckedUpdateInput>
  }

  /**
   * PaymentWebhookEvent delete
   */
  export type PaymentWebhookEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentWebhookEvent
     */
    select?: PaymentWebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentWebhookEvent
     */
    omit?: PaymentWebhookEventOmit<ExtArgs> | null
    /**
     * Filter which PaymentWebhookEvent to delete.
     */
    where: PaymentWebhookEventWhereUniqueInput
  }

  /**
   * PaymentWebhookEvent deleteMany
   */
  export type PaymentWebhookEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentWebhookEvents to delete
     */
    where?: PaymentWebhookEventWhereInput
    /**
     * Limit how many PaymentWebhookEvents to delete.
     */
    limit?: number
  }

  /**
   * PaymentWebhookEvent without action
   */
  export type PaymentWebhookEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentWebhookEvent
     */
    select?: PaymentWebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentWebhookEvent
     */
    omit?: PaymentWebhookEventOmit<ExtArgs> | null
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
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const HotelScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    location: 'location',
    address: 'address',
    price: 'price',
    rating: 'rating',
    image: 'image',
    createdAt: 'createdAt'
  };

  export type HotelScalarFieldEnum = (typeof HotelScalarFieldEnum)[keyof typeof HotelScalarFieldEnum]


  export const HotelImageScalarFieldEnum: {
    id: 'id',
    url: 'url',
    altText: 'altText',
    sortOrder: 'sortOrder',
    hotelId: 'hotelId'
  };

  export type HotelImageScalarFieldEnum = (typeof HotelImageScalarFieldEnum)[keyof typeof HotelImageScalarFieldEnum]


  export const HotelAmenityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    hotelId: 'hotelId'
  };

  export type HotelAmenityScalarFieldEnum = (typeof HotelAmenityScalarFieldEnum)[keyof typeof HotelAmenityScalarFieldEnum]


  export const HotelPolicyScalarFieldEnum: {
    id: 'id',
    category: 'category',
    title: 'title',
    description: 'description',
    hotelId: 'hotelId'
  };

  export type HotelPolicyScalarFieldEnum = (typeof HotelPolicyScalarFieldEnum)[keyof typeof HotelPolicyScalarFieldEnum]


  export const RoomScalarFieldEnum: {
    id: 'id',
    name: 'name',
    capacity: 'capacity',
    price: 'price',
    hotelId: 'hotelId'
  };

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const RoomAmenityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    roomId: 'roomId'
  };

  export type RoomAmenityScalarFieldEnum = (typeof RoomAmenityScalarFieldEnum)[keyof typeof RoomAmenityScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    roomId: 'roomId',
    checkIn: 'checkIn',
    checkOut: 'checkOut',
    status: 'status',
    total: 'total',
    guestName: 'guestName',
    guestEmail: 'guestEmail',
    guestPhone: 'guestPhone',
    guestCount: 'guestCount',
    specialRequests: 'specialRequests',
    holdExpiresAt: 'holdExpiresAt',
    createdAt: 'createdAt'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    bookingId: 'bookingId',
    amount: 'amount',
    currency: 'currency',
    status: 'status',
    provider: 'provider',
    razorpayOrderId: 'razorpayOrderId',
    razorpayPaymentId: 'razorpayPaymentId',
    razorpaySignature: 'razorpaySignature',
    refundId: 'refundId',
    refundStatus: 'refundStatus',
    refundedAmount: 'refundedAmount',
    failureReason: 'failureReason',
    refundLockToken: 'refundLockToken',
    refundLockExpiresAt: 'refundLockExpiresAt',
    refundAttempts: 'refundAttempts',
    refundCreateAttemptedAt: 'refundCreateAttemptedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const PaymentWebhookEventScalarFieldEnum: {
    id: 'id',
    provider: 'provider',
    eventId: 'eventId',
    eventType: 'eventType',
    processedAt: 'processedAt',
    processingToken: 'processingToken',
    processingLockExpiresAt: 'processingLockExpiresAt',
    attempts: 'attempts',
    lastError: 'lastError',
    createdAt: 'createdAt'
  };

  export type PaymentWebhookEventScalarFieldEnum = (typeof PaymentWebhookEventScalarFieldEnum)[keyof typeof PaymentWebhookEventScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    bookings?: BookingListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    bookings?: BookingOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    bookings?: BookingListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type HotelWhereInput = {
    AND?: HotelWhereInput | HotelWhereInput[]
    OR?: HotelWhereInput[]
    NOT?: HotelWhereInput | HotelWhereInput[]
    id?: StringFilter<"Hotel"> | string
    name?: StringFilter<"Hotel"> | string
    description?: StringFilter<"Hotel"> | string
    location?: StringFilter<"Hotel"> | string
    address?: StringFilter<"Hotel"> | string
    price?: FloatFilter<"Hotel"> | number
    rating?: FloatFilter<"Hotel"> | number
    image?: StringNullableFilter<"Hotel"> | string | null
    createdAt?: DateTimeFilter<"Hotel"> | Date | string
    rooms?: RoomListRelationFilter
    images?: HotelImageListRelationFilter
    amenities?: HotelAmenityListRelationFilter
    policies?: HotelPolicyListRelationFilter
  }

  export type HotelOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    location?: SortOrder
    address?: SortOrder
    price?: SortOrder
    rating?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    rooms?: RoomOrderByRelationAggregateInput
    images?: HotelImageOrderByRelationAggregateInput
    amenities?: HotelAmenityOrderByRelationAggregateInput
    policies?: HotelPolicyOrderByRelationAggregateInput
  }

  export type HotelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HotelWhereInput | HotelWhereInput[]
    OR?: HotelWhereInput[]
    NOT?: HotelWhereInput | HotelWhereInput[]
    name?: StringFilter<"Hotel"> | string
    description?: StringFilter<"Hotel"> | string
    location?: StringFilter<"Hotel"> | string
    address?: StringFilter<"Hotel"> | string
    price?: FloatFilter<"Hotel"> | number
    rating?: FloatFilter<"Hotel"> | number
    image?: StringNullableFilter<"Hotel"> | string | null
    createdAt?: DateTimeFilter<"Hotel"> | Date | string
    rooms?: RoomListRelationFilter
    images?: HotelImageListRelationFilter
    amenities?: HotelAmenityListRelationFilter
    policies?: HotelPolicyListRelationFilter
  }, "id">

  export type HotelOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    location?: SortOrder
    address?: SortOrder
    price?: SortOrder
    rating?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: HotelCountOrderByAggregateInput
    _avg?: HotelAvgOrderByAggregateInput
    _max?: HotelMaxOrderByAggregateInput
    _min?: HotelMinOrderByAggregateInput
    _sum?: HotelSumOrderByAggregateInput
  }

  export type HotelScalarWhereWithAggregatesInput = {
    AND?: HotelScalarWhereWithAggregatesInput | HotelScalarWhereWithAggregatesInput[]
    OR?: HotelScalarWhereWithAggregatesInput[]
    NOT?: HotelScalarWhereWithAggregatesInput | HotelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Hotel"> | string
    name?: StringWithAggregatesFilter<"Hotel"> | string
    description?: StringWithAggregatesFilter<"Hotel"> | string
    location?: StringWithAggregatesFilter<"Hotel"> | string
    address?: StringWithAggregatesFilter<"Hotel"> | string
    price?: FloatWithAggregatesFilter<"Hotel"> | number
    rating?: FloatWithAggregatesFilter<"Hotel"> | number
    image?: StringNullableWithAggregatesFilter<"Hotel"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Hotel"> | Date | string
  }

  export type HotelImageWhereInput = {
    AND?: HotelImageWhereInput | HotelImageWhereInput[]
    OR?: HotelImageWhereInput[]
    NOT?: HotelImageWhereInput | HotelImageWhereInput[]
    id?: StringFilter<"HotelImage"> | string
    url?: StringFilter<"HotelImage"> | string
    altText?: StringNullableFilter<"HotelImage"> | string | null
    sortOrder?: IntFilter<"HotelImage"> | number
    hotelId?: StringFilter<"HotelImage"> | string
    hotel?: XOR<HotelScalarRelationFilter, HotelWhereInput>
  }

  export type HotelImageOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    altText?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    hotelId?: SortOrder
    hotel?: HotelOrderByWithRelationInput
  }

  export type HotelImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HotelImageWhereInput | HotelImageWhereInput[]
    OR?: HotelImageWhereInput[]
    NOT?: HotelImageWhereInput | HotelImageWhereInput[]
    url?: StringFilter<"HotelImage"> | string
    altText?: StringNullableFilter<"HotelImage"> | string | null
    sortOrder?: IntFilter<"HotelImage"> | number
    hotelId?: StringFilter<"HotelImage"> | string
    hotel?: XOR<HotelScalarRelationFilter, HotelWhereInput>
  }, "id">

  export type HotelImageOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    altText?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    hotelId?: SortOrder
    _count?: HotelImageCountOrderByAggregateInput
    _avg?: HotelImageAvgOrderByAggregateInput
    _max?: HotelImageMaxOrderByAggregateInput
    _min?: HotelImageMinOrderByAggregateInput
    _sum?: HotelImageSumOrderByAggregateInput
  }

  export type HotelImageScalarWhereWithAggregatesInput = {
    AND?: HotelImageScalarWhereWithAggregatesInput | HotelImageScalarWhereWithAggregatesInput[]
    OR?: HotelImageScalarWhereWithAggregatesInput[]
    NOT?: HotelImageScalarWhereWithAggregatesInput | HotelImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HotelImage"> | string
    url?: StringWithAggregatesFilter<"HotelImage"> | string
    altText?: StringNullableWithAggregatesFilter<"HotelImage"> | string | null
    sortOrder?: IntWithAggregatesFilter<"HotelImage"> | number
    hotelId?: StringWithAggregatesFilter<"HotelImage"> | string
  }

  export type HotelAmenityWhereInput = {
    AND?: HotelAmenityWhereInput | HotelAmenityWhereInput[]
    OR?: HotelAmenityWhereInput[]
    NOT?: HotelAmenityWhereInput | HotelAmenityWhereInput[]
    id?: StringFilter<"HotelAmenity"> | string
    name?: StringFilter<"HotelAmenity"> | string
    hotelId?: StringFilter<"HotelAmenity"> | string
    hotel?: XOR<HotelScalarRelationFilter, HotelWhereInput>
  }

  export type HotelAmenityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    hotelId?: SortOrder
    hotel?: HotelOrderByWithRelationInput
  }

  export type HotelAmenityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    hotelId_name?: HotelAmenityHotelIdNameCompoundUniqueInput
    AND?: HotelAmenityWhereInput | HotelAmenityWhereInput[]
    OR?: HotelAmenityWhereInput[]
    NOT?: HotelAmenityWhereInput | HotelAmenityWhereInput[]
    name?: StringFilter<"HotelAmenity"> | string
    hotelId?: StringFilter<"HotelAmenity"> | string
    hotel?: XOR<HotelScalarRelationFilter, HotelWhereInput>
  }, "id" | "hotelId_name">

  export type HotelAmenityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    hotelId?: SortOrder
    _count?: HotelAmenityCountOrderByAggregateInput
    _max?: HotelAmenityMaxOrderByAggregateInput
    _min?: HotelAmenityMinOrderByAggregateInput
  }

  export type HotelAmenityScalarWhereWithAggregatesInput = {
    AND?: HotelAmenityScalarWhereWithAggregatesInput | HotelAmenityScalarWhereWithAggregatesInput[]
    OR?: HotelAmenityScalarWhereWithAggregatesInput[]
    NOT?: HotelAmenityScalarWhereWithAggregatesInput | HotelAmenityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HotelAmenity"> | string
    name?: StringWithAggregatesFilter<"HotelAmenity"> | string
    hotelId?: StringWithAggregatesFilter<"HotelAmenity"> | string
  }

  export type HotelPolicyWhereInput = {
    AND?: HotelPolicyWhereInput | HotelPolicyWhereInput[]
    OR?: HotelPolicyWhereInput[]
    NOT?: HotelPolicyWhereInput | HotelPolicyWhereInput[]
    id?: StringFilter<"HotelPolicy"> | string
    category?: StringFilter<"HotelPolicy"> | string
    title?: StringFilter<"HotelPolicy"> | string
    description?: StringFilter<"HotelPolicy"> | string
    hotelId?: StringFilter<"HotelPolicy"> | string
    hotel?: XOR<HotelScalarRelationFilter, HotelWhereInput>
  }

  export type HotelPolicyOrderByWithRelationInput = {
    id?: SortOrder
    category?: SortOrder
    title?: SortOrder
    description?: SortOrder
    hotelId?: SortOrder
    hotel?: HotelOrderByWithRelationInput
  }

  export type HotelPolicyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HotelPolicyWhereInput | HotelPolicyWhereInput[]
    OR?: HotelPolicyWhereInput[]
    NOT?: HotelPolicyWhereInput | HotelPolicyWhereInput[]
    category?: StringFilter<"HotelPolicy"> | string
    title?: StringFilter<"HotelPolicy"> | string
    description?: StringFilter<"HotelPolicy"> | string
    hotelId?: StringFilter<"HotelPolicy"> | string
    hotel?: XOR<HotelScalarRelationFilter, HotelWhereInput>
  }, "id">

  export type HotelPolicyOrderByWithAggregationInput = {
    id?: SortOrder
    category?: SortOrder
    title?: SortOrder
    description?: SortOrder
    hotelId?: SortOrder
    _count?: HotelPolicyCountOrderByAggregateInput
    _max?: HotelPolicyMaxOrderByAggregateInput
    _min?: HotelPolicyMinOrderByAggregateInput
  }

  export type HotelPolicyScalarWhereWithAggregatesInput = {
    AND?: HotelPolicyScalarWhereWithAggregatesInput | HotelPolicyScalarWhereWithAggregatesInput[]
    OR?: HotelPolicyScalarWhereWithAggregatesInput[]
    NOT?: HotelPolicyScalarWhereWithAggregatesInput | HotelPolicyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HotelPolicy"> | string
    category?: StringWithAggregatesFilter<"HotelPolicy"> | string
    title?: StringWithAggregatesFilter<"HotelPolicy"> | string
    description?: StringWithAggregatesFilter<"HotelPolicy"> | string
    hotelId?: StringWithAggregatesFilter<"HotelPolicy"> | string
  }

  export type RoomWhereInput = {
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    id?: StringFilter<"Room"> | string
    name?: StringFilter<"Room"> | string
    capacity?: IntFilter<"Room"> | number
    price?: FloatFilter<"Room"> | number
    hotelId?: StringFilter<"Room"> | string
    hotel?: XOR<HotelScalarRelationFilter, HotelWhereInput>
    bookings?: BookingListRelationFilter
    amenities?: RoomAmenityListRelationFilter
  }

  export type RoomOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    price?: SortOrder
    hotelId?: SortOrder
    hotel?: HotelOrderByWithRelationInput
    bookings?: BookingOrderByRelationAggregateInput
    amenities?: RoomAmenityOrderByRelationAggregateInput
  }

  export type RoomWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    name?: StringFilter<"Room"> | string
    capacity?: IntFilter<"Room"> | number
    price?: FloatFilter<"Room"> | number
    hotelId?: StringFilter<"Room"> | string
    hotel?: XOR<HotelScalarRelationFilter, HotelWhereInput>
    bookings?: BookingListRelationFilter
    amenities?: RoomAmenityListRelationFilter
  }, "id">

  export type RoomOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    price?: SortOrder
    hotelId?: SortOrder
    _count?: RoomCountOrderByAggregateInput
    _avg?: RoomAvgOrderByAggregateInput
    _max?: RoomMaxOrderByAggregateInput
    _min?: RoomMinOrderByAggregateInput
    _sum?: RoomSumOrderByAggregateInput
  }

  export type RoomScalarWhereWithAggregatesInput = {
    AND?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    OR?: RoomScalarWhereWithAggregatesInput[]
    NOT?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Room"> | string
    name?: StringWithAggregatesFilter<"Room"> | string
    capacity?: IntWithAggregatesFilter<"Room"> | number
    price?: FloatWithAggregatesFilter<"Room"> | number
    hotelId?: StringWithAggregatesFilter<"Room"> | string
  }

  export type RoomAmenityWhereInput = {
    AND?: RoomAmenityWhereInput | RoomAmenityWhereInput[]
    OR?: RoomAmenityWhereInput[]
    NOT?: RoomAmenityWhereInput | RoomAmenityWhereInput[]
    id?: StringFilter<"RoomAmenity"> | string
    name?: StringFilter<"RoomAmenity"> | string
    roomId?: StringFilter<"RoomAmenity"> | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
  }

  export type RoomAmenityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    roomId?: SortOrder
    room?: RoomOrderByWithRelationInput
  }

  export type RoomAmenityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    roomId_name?: RoomAmenityRoomIdNameCompoundUniqueInput
    AND?: RoomAmenityWhereInput | RoomAmenityWhereInput[]
    OR?: RoomAmenityWhereInput[]
    NOT?: RoomAmenityWhereInput | RoomAmenityWhereInput[]
    name?: StringFilter<"RoomAmenity"> | string
    roomId?: StringFilter<"RoomAmenity"> | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
  }, "id" | "roomId_name">

  export type RoomAmenityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    roomId?: SortOrder
    _count?: RoomAmenityCountOrderByAggregateInput
    _max?: RoomAmenityMaxOrderByAggregateInput
    _min?: RoomAmenityMinOrderByAggregateInput
  }

  export type RoomAmenityScalarWhereWithAggregatesInput = {
    AND?: RoomAmenityScalarWhereWithAggregatesInput | RoomAmenityScalarWhereWithAggregatesInput[]
    OR?: RoomAmenityScalarWhereWithAggregatesInput[]
    NOT?: RoomAmenityScalarWhereWithAggregatesInput | RoomAmenityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RoomAmenity"> | string
    name?: StringWithAggregatesFilter<"RoomAmenity"> | string
    roomId?: StringWithAggregatesFilter<"RoomAmenity"> | string
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: StringFilter<"Booking"> | string
    userId?: StringFilter<"Booking"> | string
    roomId?: StringFilter<"Booking"> | string
    checkIn?: DateTimeFilter<"Booking"> | Date | string
    checkOut?: DateTimeFilter<"Booking"> | Date | string
    status?: StringFilter<"Booking"> | string
    total?: FloatFilter<"Booking"> | number
    guestName?: StringNullableFilter<"Booking"> | string | null
    guestEmail?: StringNullableFilter<"Booking"> | string | null
    guestPhone?: StringNullableFilter<"Booking"> | string | null
    guestCount?: IntFilter<"Booking"> | number
    specialRequests?: StringNullableFilter<"Booking"> | string | null
    holdExpiresAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    payments?: PaymentListRelationFilter
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    roomId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    status?: SortOrder
    total?: SortOrder
    guestName?: SortOrderInput | SortOrder
    guestEmail?: SortOrderInput | SortOrder
    guestPhone?: SortOrderInput | SortOrder
    guestCount?: SortOrder
    specialRequests?: SortOrderInput | SortOrder
    holdExpiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    room?: RoomOrderByWithRelationInput
    payments?: PaymentOrderByRelationAggregateInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    userId?: StringFilter<"Booking"> | string
    roomId?: StringFilter<"Booking"> | string
    checkIn?: DateTimeFilter<"Booking"> | Date | string
    checkOut?: DateTimeFilter<"Booking"> | Date | string
    status?: StringFilter<"Booking"> | string
    total?: FloatFilter<"Booking"> | number
    guestName?: StringNullableFilter<"Booking"> | string | null
    guestEmail?: StringNullableFilter<"Booking"> | string | null
    guestPhone?: StringNullableFilter<"Booking"> | string | null
    guestCount?: IntFilter<"Booking"> | number
    specialRequests?: StringNullableFilter<"Booking"> | string | null
    holdExpiresAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    payments?: PaymentListRelationFilter
  }, "id">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    roomId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    status?: SortOrder
    total?: SortOrder
    guestName?: SortOrderInput | SortOrder
    guestEmail?: SortOrderInput | SortOrder
    guestPhone?: SortOrderInput | SortOrder
    guestCount?: SortOrder
    specialRequests?: SortOrderInput | SortOrder
    holdExpiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _avg?: BookingAvgOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
    _sum?: BookingSumOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Booking"> | string
    userId?: StringWithAggregatesFilter<"Booking"> | string
    roomId?: StringWithAggregatesFilter<"Booking"> | string
    checkIn?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    checkOut?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    status?: StringWithAggregatesFilter<"Booking"> | string
    total?: FloatWithAggregatesFilter<"Booking"> | number
    guestName?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    guestEmail?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    guestPhone?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    guestCount?: IntWithAggregatesFilter<"Booking"> | number
    specialRequests?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    holdExpiresAt?: DateTimeNullableWithAggregatesFilter<"Booking"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    bookingId?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    currency?: StringFilter<"Payment"> | string
    status?: StringFilter<"Payment"> | string
    provider?: StringFilter<"Payment"> | string
    razorpayOrderId?: StringNullableFilter<"Payment"> | string | null
    razorpayPaymentId?: StringNullableFilter<"Payment"> | string | null
    razorpaySignature?: StringNullableFilter<"Payment"> | string | null
    refundId?: StringNullableFilter<"Payment"> | string | null
    refundStatus?: StringNullableFilter<"Payment"> | string | null
    refundedAmount?: FloatNullableFilter<"Payment"> | number | null
    failureReason?: StringNullableFilter<"Payment"> | string | null
    refundLockToken?: StringNullableFilter<"Payment"> | string | null
    refundLockExpiresAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    refundAttempts?: IntFilter<"Payment"> | number
    refundCreateAttemptedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    provider?: SortOrder
    razorpayOrderId?: SortOrderInput | SortOrder
    razorpayPaymentId?: SortOrderInput | SortOrder
    razorpaySignature?: SortOrderInput | SortOrder
    refundId?: SortOrderInput | SortOrder
    refundStatus?: SortOrderInput | SortOrder
    refundedAmount?: SortOrderInput | SortOrder
    failureReason?: SortOrderInput | SortOrder
    refundLockToken?: SortOrderInput | SortOrder
    refundLockExpiresAt?: SortOrderInput | SortOrder
    refundAttempts?: SortOrder
    refundCreateAttemptedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    booking?: BookingOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    razorpayOrderId?: string
    razorpayPaymentId?: string
    refundId?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    bookingId?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    currency?: StringFilter<"Payment"> | string
    status?: StringFilter<"Payment"> | string
    provider?: StringFilter<"Payment"> | string
    razorpaySignature?: StringNullableFilter<"Payment"> | string | null
    refundStatus?: StringNullableFilter<"Payment"> | string | null
    refundedAmount?: FloatNullableFilter<"Payment"> | number | null
    failureReason?: StringNullableFilter<"Payment"> | string | null
    refundLockToken?: StringNullableFilter<"Payment"> | string | null
    refundLockExpiresAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    refundAttempts?: IntFilter<"Payment"> | number
    refundCreateAttemptedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }, "id" | "razorpayOrderId" | "razorpayPaymentId" | "refundId">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    provider?: SortOrder
    razorpayOrderId?: SortOrderInput | SortOrder
    razorpayPaymentId?: SortOrderInput | SortOrder
    razorpaySignature?: SortOrderInput | SortOrder
    refundId?: SortOrderInput | SortOrder
    refundStatus?: SortOrderInput | SortOrder
    refundedAmount?: SortOrderInput | SortOrder
    failureReason?: SortOrderInput | SortOrder
    refundLockToken?: SortOrderInput | SortOrder
    refundLockExpiresAt?: SortOrderInput | SortOrder
    refundAttempts?: SortOrder
    refundCreateAttemptedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    bookingId?: StringWithAggregatesFilter<"Payment"> | string
    amount?: FloatWithAggregatesFilter<"Payment"> | number
    currency?: StringWithAggregatesFilter<"Payment"> | string
    status?: StringWithAggregatesFilter<"Payment"> | string
    provider?: StringWithAggregatesFilter<"Payment"> | string
    razorpayOrderId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    razorpayPaymentId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    razorpaySignature?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    refundId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    refundStatus?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    refundedAmount?: FloatNullableWithAggregatesFilter<"Payment"> | number | null
    failureReason?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    refundLockToken?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    refundLockExpiresAt?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
    refundAttempts?: IntWithAggregatesFilter<"Payment"> | number
    refundCreateAttemptedAt?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type PaymentWebhookEventWhereInput = {
    AND?: PaymentWebhookEventWhereInput | PaymentWebhookEventWhereInput[]
    OR?: PaymentWebhookEventWhereInput[]
    NOT?: PaymentWebhookEventWhereInput | PaymentWebhookEventWhereInput[]
    id?: StringFilter<"PaymentWebhookEvent"> | string
    provider?: StringFilter<"PaymentWebhookEvent"> | string
    eventId?: StringFilter<"PaymentWebhookEvent"> | string
    eventType?: StringFilter<"PaymentWebhookEvent"> | string
    processedAt?: DateTimeNullableFilter<"PaymentWebhookEvent"> | Date | string | null
    processingToken?: StringNullableFilter<"PaymentWebhookEvent"> | string | null
    processingLockExpiresAt?: DateTimeNullableFilter<"PaymentWebhookEvent"> | Date | string | null
    attempts?: IntFilter<"PaymentWebhookEvent"> | number
    lastError?: StringNullableFilter<"PaymentWebhookEvent"> | string | null
    createdAt?: DateTimeFilter<"PaymentWebhookEvent"> | Date | string
  }

  export type PaymentWebhookEventOrderByWithRelationInput = {
    id?: SortOrder
    provider?: SortOrder
    eventId?: SortOrder
    eventType?: SortOrder
    processedAt?: SortOrderInput | SortOrder
    processingToken?: SortOrderInput | SortOrder
    processingLockExpiresAt?: SortOrderInput | SortOrder
    attempts?: SortOrder
    lastError?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type PaymentWebhookEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    eventId?: string
    AND?: PaymentWebhookEventWhereInput | PaymentWebhookEventWhereInput[]
    OR?: PaymentWebhookEventWhereInput[]
    NOT?: PaymentWebhookEventWhereInput | PaymentWebhookEventWhereInput[]
    provider?: StringFilter<"PaymentWebhookEvent"> | string
    eventType?: StringFilter<"PaymentWebhookEvent"> | string
    processedAt?: DateTimeNullableFilter<"PaymentWebhookEvent"> | Date | string | null
    processingToken?: StringNullableFilter<"PaymentWebhookEvent"> | string | null
    processingLockExpiresAt?: DateTimeNullableFilter<"PaymentWebhookEvent"> | Date | string | null
    attempts?: IntFilter<"PaymentWebhookEvent"> | number
    lastError?: StringNullableFilter<"PaymentWebhookEvent"> | string | null
    createdAt?: DateTimeFilter<"PaymentWebhookEvent"> | Date | string
  }, "id" | "eventId">

  export type PaymentWebhookEventOrderByWithAggregationInput = {
    id?: SortOrder
    provider?: SortOrder
    eventId?: SortOrder
    eventType?: SortOrder
    processedAt?: SortOrderInput | SortOrder
    processingToken?: SortOrderInput | SortOrder
    processingLockExpiresAt?: SortOrderInput | SortOrder
    attempts?: SortOrder
    lastError?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PaymentWebhookEventCountOrderByAggregateInput
    _avg?: PaymentWebhookEventAvgOrderByAggregateInput
    _max?: PaymentWebhookEventMaxOrderByAggregateInput
    _min?: PaymentWebhookEventMinOrderByAggregateInput
    _sum?: PaymentWebhookEventSumOrderByAggregateInput
  }

  export type PaymentWebhookEventScalarWhereWithAggregatesInput = {
    AND?: PaymentWebhookEventScalarWhereWithAggregatesInput | PaymentWebhookEventScalarWhereWithAggregatesInput[]
    OR?: PaymentWebhookEventScalarWhereWithAggregatesInput[]
    NOT?: PaymentWebhookEventScalarWhereWithAggregatesInput | PaymentWebhookEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PaymentWebhookEvent"> | string
    provider?: StringWithAggregatesFilter<"PaymentWebhookEvent"> | string
    eventId?: StringWithAggregatesFilter<"PaymentWebhookEvent"> | string
    eventType?: StringWithAggregatesFilter<"PaymentWebhookEvent"> | string
    processedAt?: DateTimeNullableWithAggregatesFilter<"PaymentWebhookEvent"> | Date | string | null
    processingToken?: StringNullableWithAggregatesFilter<"PaymentWebhookEvent"> | string | null
    processingLockExpiresAt?: DateTimeNullableWithAggregatesFilter<"PaymentWebhookEvent"> | Date | string | null
    attempts?: IntWithAggregatesFilter<"PaymentWebhookEvent"> | number
    lastError?: StringNullableWithAggregatesFilter<"PaymentWebhookEvent"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PaymentWebhookEvent"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    createdAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    createdAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HotelCreateInput = {
    id?: string
    name: string
    description: string
    location: string
    address: string
    price: number
    rating?: number
    image?: string | null
    createdAt?: Date | string
    rooms?: RoomCreateNestedManyWithoutHotelInput
    images?: HotelImageCreateNestedManyWithoutHotelInput
    amenities?: HotelAmenityCreateNestedManyWithoutHotelInput
    policies?: HotelPolicyCreateNestedManyWithoutHotelInput
  }

  export type HotelUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    location: string
    address: string
    price: number
    rating?: number
    image?: string | null
    createdAt?: Date | string
    rooms?: RoomUncheckedCreateNestedManyWithoutHotelInput
    images?: HotelImageUncheckedCreateNestedManyWithoutHotelInput
    amenities?: HotelAmenityUncheckedCreateNestedManyWithoutHotelInput
    policies?: HotelPolicyUncheckedCreateNestedManyWithoutHotelInput
  }

  export type HotelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUpdateManyWithoutHotelNestedInput
    images?: HotelImageUpdateManyWithoutHotelNestedInput
    amenities?: HotelAmenityUpdateManyWithoutHotelNestedInput
    policies?: HotelPolicyUpdateManyWithoutHotelNestedInput
  }

  export type HotelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUncheckedUpdateManyWithoutHotelNestedInput
    images?: HotelImageUncheckedUpdateManyWithoutHotelNestedInput
    amenities?: HotelAmenityUncheckedUpdateManyWithoutHotelNestedInput
    policies?: HotelPolicyUncheckedUpdateManyWithoutHotelNestedInput
  }

  export type HotelCreateManyInput = {
    id?: string
    name: string
    description: string
    location: string
    address: string
    price: number
    rating?: number
    image?: string | null
    createdAt?: Date | string
  }

  export type HotelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HotelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HotelImageCreateInput = {
    id?: string
    url: string
    altText?: string | null
    sortOrder?: number
    hotel: HotelCreateNestedOneWithoutImagesInput
  }

  export type HotelImageUncheckedCreateInput = {
    id?: string
    url: string
    altText?: string | null
    sortOrder?: number
    hotelId: string
  }

  export type HotelImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    hotel?: HotelUpdateOneRequiredWithoutImagesNestedInput
  }

  export type HotelImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    hotelId?: StringFieldUpdateOperationsInput | string
  }

  export type HotelImageCreateManyInput = {
    id?: string
    url: string
    altText?: string | null
    sortOrder?: number
    hotelId: string
  }

  export type HotelImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type HotelImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    hotelId?: StringFieldUpdateOperationsInput | string
  }

  export type HotelAmenityCreateInput = {
    id?: string
    name: string
    hotel: HotelCreateNestedOneWithoutAmenitiesInput
  }

  export type HotelAmenityUncheckedCreateInput = {
    id?: string
    name: string
    hotelId: string
  }

  export type HotelAmenityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    hotel?: HotelUpdateOneRequiredWithoutAmenitiesNestedInput
  }

  export type HotelAmenityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
  }

  export type HotelAmenityCreateManyInput = {
    id?: string
    name: string
    hotelId: string
  }

  export type HotelAmenityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type HotelAmenityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
  }

  export type HotelPolicyCreateInput = {
    id?: string
    category: string
    title: string
    description: string
    hotel: HotelCreateNestedOneWithoutPoliciesInput
  }

  export type HotelPolicyUncheckedCreateInput = {
    id?: string
    category: string
    title: string
    description: string
    hotelId: string
  }

  export type HotelPolicyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    hotel?: HotelUpdateOneRequiredWithoutPoliciesNestedInput
  }

  export type HotelPolicyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
  }

  export type HotelPolicyCreateManyInput = {
    id?: string
    category: string
    title: string
    description: string
    hotelId: string
  }

  export type HotelPolicyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type HotelPolicyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
  }

  export type RoomCreateInput = {
    id?: string
    name: string
    capacity: number
    price: number
    hotel: HotelCreateNestedOneWithoutRoomsInput
    bookings?: BookingCreateNestedManyWithoutRoomInput
    amenities?: RoomAmenityCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateInput = {
    id?: string
    name: string
    capacity: number
    price: number
    hotelId: string
    bookings?: BookingUncheckedCreateNestedManyWithoutRoomInput
    amenities?: RoomAmenityUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    hotel?: HotelUpdateOneRequiredWithoutRoomsNestedInput
    bookings?: BookingUpdateManyWithoutRoomNestedInput
    amenities?: RoomAmenityUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    hotelId?: StringFieldUpdateOperationsInput | string
    bookings?: BookingUncheckedUpdateManyWithoutRoomNestedInput
    amenities?: RoomAmenityUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomCreateManyInput = {
    id?: string
    name: string
    capacity: number
    price: number
    hotelId: string
  }

  export type RoomUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type RoomUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    hotelId?: StringFieldUpdateOperationsInput | string
  }

  export type RoomAmenityCreateInput = {
    id?: string
    name: string
    room: RoomCreateNestedOneWithoutAmenitiesInput
  }

  export type RoomAmenityUncheckedCreateInput = {
    id?: string
    name: string
    roomId: string
  }

  export type RoomAmenityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    room?: RoomUpdateOneRequiredWithoutAmenitiesNestedInput
  }

  export type RoomAmenityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
  }

  export type RoomAmenityCreateManyInput = {
    id?: string
    name: string
    roomId: string
  }

  export type RoomAmenityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RoomAmenityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
  }

  export type BookingCreateInput = {
    id?: string
    checkIn: Date | string
    checkOut: Date | string
    status?: string
    total: number
    guestName?: string | null
    guestEmail?: string | null
    guestPhone?: string | null
    guestCount?: number
    specialRequests?: string | null
    holdExpiresAt?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    room: RoomCreateNestedOneWithoutBookingsInput
    payments?: PaymentCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateInput = {
    id?: string
    userId: string
    roomId: string
    checkIn: Date | string
    checkOut: Date | string
    status?: string
    total: number
    guestName?: string | null
    guestEmail?: string | null
    guestPhone?: string | null
    guestCount?: number
    specialRequests?: string | null
    holdExpiresAt?: Date | string | null
    createdAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    guestName?: NullableStringFieldUpdateOperationsInput | string | null
    guestEmail?: NullableStringFieldUpdateOperationsInput | string | null
    guestPhone?: NullableStringFieldUpdateOperationsInput | string | null
    guestCount?: IntFieldUpdateOperationsInput | number
    specialRequests?: NullableStringFieldUpdateOperationsInput | string | null
    holdExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    room?: RoomUpdateOneRequiredWithoutBookingsNestedInput
    payments?: PaymentUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    guestName?: NullableStringFieldUpdateOperationsInput | string | null
    guestEmail?: NullableStringFieldUpdateOperationsInput | string | null
    guestPhone?: NullableStringFieldUpdateOperationsInput | string | null
    guestCount?: IntFieldUpdateOperationsInput | number
    specialRequests?: NullableStringFieldUpdateOperationsInput | string | null
    holdExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingCreateManyInput = {
    id?: string
    userId: string
    roomId: string
    checkIn: Date | string
    checkOut: Date | string
    status?: string
    total: number
    guestName?: string | null
    guestEmail?: string | null
    guestPhone?: string | null
    guestCount?: number
    specialRequests?: string | null
    holdExpiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type BookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    guestName?: NullableStringFieldUpdateOperationsInput | string | null
    guestEmail?: NullableStringFieldUpdateOperationsInput | string | null
    guestPhone?: NullableStringFieldUpdateOperationsInput | string | null
    guestCount?: IntFieldUpdateOperationsInput | number
    specialRequests?: NullableStringFieldUpdateOperationsInput | string | null
    holdExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    guestName?: NullableStringFieldUpdateOperationsInput | string | null
    guestEmail?: NullableStringFieldUpdateOperationsInput | string | null
    guestPhone?: NullableStringFieldUpdateOperationsInput | string | null
    guestCount?: IntFieldUpdateOperationsInput | number
    specialRequests?: NullableStringFieldUpdateOperationsInput | string | null
    holdExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    amount: number
    currency?: string
    status?: string
    provider?: string
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    razorpaySignature?: string | null
    refundId?: string | null
    refundStatus?: string | null
    refundedAmount?: number | null
    failureReason?: string | null
    refundLockToken?: string | null
    refundLockExpiresAt?: Date | string | null
    refundAttempts?: number
    refundCreateAttemptedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    booking: BookingCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    bookingId: string
    amount: number
    currency?: string
    status?: string
    provider?: string
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    razorpaySignature?: string | null
    refundId?: string | null
    refundStatus?: string | null
    refundedAmount?: number | null
    failureReason?: string | null
    refundLockToken?: string | null
    refundLockExpiresAt?: Date | string | null
    refundAttempts?: number
    refundCreateAttemptedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    refundId?: NullableStringFieldUpdateOperationsInput | string | null
    refundStatus?: NullableStringFieldUpdateOperationsInput | string | null
    refundedAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    refundLockToken?: NullableStringFieldUpdateOperationsInput | string | null
    refundLockExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundAttempts?: IntFieldUpdateOperationsInput | number
    refundCreateAttemptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    refundId?: NullableStringFieldUpdateOperationsInput | string | null
    refundStatus?: NullableStringFieldUpdateOperationsInput | string | null
    refundedAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    refundLockToken?: NullableStringFieldUpdateOperationsInput | string | null
    refundLockExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundAttempts?: IntFieldUpdateOperationsInput | number
    refundCreateAttemptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    bookingId: string
    amount: number
    currency?: string
    status?: string
    provider?: string
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    razorpaySignature?: string | null
    refundId?: string | null
    refundStatus?: string | null
    refundedAmount?: number | null
    failureReason?: string | null
    refundLockToken?: string | null
    refundLockExpiresAt?: Date | string | null
    refundAttempts?: number
    refundCreateAttemptedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    refundId?: NullableStringFieldUpdateOperationsInput | string | null
    refundStatus?: NullableStringFieldUpdateOperationsInput | string | null
    refundedAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    refundLockToken?: NullableStringFieldUpdateOperationsInput | string | null
    refundLockExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundAttempts?: IntFieldUpdateOperationsInput | number
    refundCreateAttemptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    refundId?: NullableStringFieldUpdateOperationsInput | string | null
    refundStatus?: NullableStringFieldUpdateOperationsInput | string | null
    refundedAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    refundLockToken?: NullableStringFieldUpdateOperationsInput | string | null
    refundLockExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundAttempts?: IntFieldUpdateOperationsInput | number
    refundCreateAttemptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentWebhookEventCreateInput = {
    id?: string
    provider?: string
    eventId: string
    eventType: string
    processedAt?: Date | string | null
    processingToken?: string | null
    processingLockExpiresAt?: Date | string | null
    attempts?: number
    lastError?: string | null
    createdAt?: Date | string
  }

  export type PaymentWebhookEventUncheckedCreateInput = {
    id?: string
    provider?: string
    eventId: string
    eventType: string
    processedAt?: Date | string | null
    processingToken?: string | null
    processingLockExpiresAt?: Date | string | null
    attempts?: number
    lastError?: string | null
    createdAt?: Date | string
  }

  export type PaymentWebhookEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processingToken?: NullableStringFieldUpdateOperationsInput | string | null
    processingLockExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attempts?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentWebhookEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processingToken?: NullableStringFieldUpdateOperationsInput | string | null
    processingLockExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attempts?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentWebhookEventCreateManyInput = {
    id?: string
    provider?: string
    eventId: string
    eventType: string
    processedAt?: Date | string | null
    processingToken?: string | null
    processingLockExpiresAt?: Date | string | null
    attempts?: number
    lastError?: string | null
    createdAt?: Date | string
  }

  export type PaymentWebhookEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processingToken?: NullableStringFieldUpdateOperationsInput | string | null
    processingLockExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attempts?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentWebhookEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processingToken?: NullableStringFieldUpdateOperationsInput | string | null
    processingLockExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attempts?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type RoomListRelationFilter = {
    every?: RoomWhereInput
    some?: RoomWhereInput
    none?: RoomWhereInput
  }

  export type HotelImageListRelationFilter = {
    every?: HotelImageWhereInput
    some?: HotelImageWhereInput
    none?: HotelImageWhereInput
  }

  export type HotelAmenityListRelationFilter = {
    every?: HotelAmenityWhereInput
    some?: HotelAmenityWhereInput
    none?: HotelAmenityWhereInput
  }

  export type HotelPolicyListRelationFilter = {
    every?: HotelPolicyWhereInput
    some?: HotelPolicyWhereInput
    none?: HotelPolicyWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HotelImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HotelAmenityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HotelPolicyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HotelCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    location?: SortOrder
    address?: SortOrder
    price?: SortOrder
    rating?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
  }

  export type HotelAvgOrderByAggregateInput = {
    price?: SortOrder
    rating?: SortOrder
  }

  export type HotelMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    location?: SortOrder
    address?: SortOrder
    price?: SortOrder
    rating?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
  }

  export type HotelMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    location?: SortOrder
    address?: SortOrder
    price?: SortOrder
    rating?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
  }

  export type HotelSumOrderByAggregateInput = {
    price?: SortOrder
    rating?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type HotelScalarRelationFilter = {
    is?: HotelWhereInput
    isNot?: HotelWhereInput
  }

  export type HotelImageCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    altText?: SortOrder
    sortOrder?: SortOrder
    hotelId?: SortOrder
  }

  export type HotelImageAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type HotelImageMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    altText?: SortOrder
    sortOrder?: SortOrder
    hotelId?: SortOrder
  }

  export type HotelImageMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    altText?: SortOrder
    sortOrder?: SortOrder
    hotelId?: SortOrder
  }

  export type HotelImageSumOrderByAggregateInput = {
    sortOrder?: SortOrder
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

  export type HotelAmenityHotelIdNameCompoundUniqueInput = {
    hotelId: string
    name: string
  }

  export type HotelAmenityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    hotelId?: SortOrder
  }

  export type HotelAmenityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    hotelId?: SortOrder
  }

  export type HotelAmenityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    hotelId?: SortOrder
  }

  export type HotelPolicyCountOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    title?: SortOrder
    description?: SortOrder
    hotelId?: SortOrder
  }

  export type HotelPolicyMaxOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    title?: SortOrder
    description?: SortOrder
    hotelId?: SortOrder
  }

  export type HotelPolicyMinOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    title?: SortOrder
    description?: SortOrder
    hotelId?: SortOrder
  }

  export type RoomAmenityListRelationFilter = {
    every?: RoomAmenityWhereInput
    some?: RoomAmenityWhereInput
    none?: RoomAmenityWhereInput
  }

  export type RoomAmenityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    price?: SortOrder
    hotelId?: SortOrder
  }

  export type RoomAvgOrderByAggregateInput = {
    capacity?: SortOrder
    price?: SortOrder
  }

  export type RoomMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    price?: SortOrder
    hotelId?: SortOrder
  }

  export type RoomMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    price?: SortOrder
    hotelId?: SortOrder
  }

  export type RoomSumOrderByAggregateInput = {
    capacity?: SortOrder
    price?: SortOrder
  }

  export type RoomScalarRelationFilter = {
    is?: RoomWhereInput
    isNot?: RoomWhereInput
  }

  export type RoomAmenityRoomIdNameCompoundUniqueInput = {
    roomId: string
    name: string
  }

  export type RoomAmenityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    roomId?: SortOrder
  }

  export type RoomAmenityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    roomId?: SortOrder
  }

  export type RoomAmenityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    roomId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roomId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    status?: SortOrder
    total?: SortOrder
    guestName?: SortOrder
    guestEmail?: SortOrder
    guestPhone?: SortOrder
    guestCount?: SortOrder
    specialRequests?: SortOrder
    holdExpiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    total?: SortOrder
    guestCount?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roomId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    status?: SortOrder
    total?: SortOrder
    guestName?: SortOrder
    guestEmail?: SortOrder
    guestPhone?: SortOrder
    guestCount?: SortOrder
    specialRequests?: SortOrder
    holdExpiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roomId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    status?: SortOrder
    total?: SortOrder
    guestName?: SortOrder
    guestEmail?: SortOrder
    guestPhone?: SortOrder
    guestCount?: SortOrder
    specialRequests?: SortOrder
    holdExpiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    total?: SortOrder
    guestCount?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BookingScalarRelationFilter = {
    is?: BookingWhereInput
    isNot?: BookingWhereInput
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    provider?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrder
    razorpaySignature?: SortOrder
    refundId?: SortOrder
    refundStatus?: SortOrder
    refundedAmount?: SortOrder
    failureReason?: SortOrder
    refundLockToken?: SortOrder
    refundLockExpiresAt?: SortOrder
    refundAttempts?: SortOrder
    refundCreateAttemptedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
    refundedAmount?: SortOrder
    refundAttempts?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    provider?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrder
    razorpaySignature?: SortOrder
    refundId?: SortOrder
    refundStatus?: SortOrder
    refundedAmount?: SortOrder
    failureReason?: SortOrder
    refundLockToken?: SortOrder
    refundLockExpiresAt?: SortOrder
    refundAttempts?: SortOrder
    refundCreateAttemptedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    provider?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrder
    razorpaySignature?: SortOrder
    refundId?: SortOrder
    refundStatus?: SortOrder
    refundedAmount?: SortOrder
    failureReason?: SortOrder
    refundLockToken?: SortOrder
    refundLockExpiresAt?: SortOrder
    refundAttempts?: SortOrder
    refundCreateAttemptedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
    refundedAmount?: SortOrder
    refundAttempts?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type PaymentWebhookEventCountOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    eventId?: SortOrder
    eventType?: SortOrder
    processedAt?: SortOrder
    processingToken?: SortOrder
    processingLockExpiresAt?: SortOrder
    attempts?: SortOrder
    lastError?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentWebhookEventAvgOrderByAggregateInput = {
    attempts?: SortOrder
  }

  export type PaymentWebhookEventMaxOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    eventId?: SortOrder
    eventType?: SortOrder
    processedAt?: SortOrder
    processingToken?: SortOrder
    processingLockExpiresAt?: SortOrder
    attempts?: SortOrder
    lastError?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentWebhookEventMinOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    eventId?: SortOrder
    eventType?: SortOrder
    processedAt?: SortOrder
    processingToken?: SortOrder
    processingLockExpiresAt?: SortOrder
    attempts?: SortOrder
    lastError?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentWebhookEventSumOrderByAggregateInput = {
    attempts?: SortOrder
  }

  export type BookingCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BookingUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type RoomCreateNestedManyWithoutHotelInput = {
    create?: XOR<RoomCreateWithoutHotelInput, RoomUncheckedCreateWithoutHotelInput> | RoomCreateWithoutHotelInput[] | RoomUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutHotelInput | RoomCreateOrConnectWithoutHotelInput[]
    createMany?: RoomCreateManyHotelInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type HotelImageCreateNestedManyWithoutHotelInput = {
    create?: XOR<HotelImageCreateWithoutHotelInput, HotelImageUncheckedCreateWithoutHotelInput> | HotelImageCreateWithoutHotelInput[] | HotelImageUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: HotelImageCreateOrConnectWithoutHotelInput | HotelImageCreateOrConnectWithoutHotelInput[]
    createMany?: HotelImageCreateManyHotelInputEnvelope
    connect?: HotelImageWhereUniqueInput | HotelImageWhereUniqueInput[]
  }

  export type HotelAmenityCreateNestedManyWithoutHotelInput = {
    create?: XOR<HotelAmenityCreateWithoutHotelInput, HotelAmenityUncheckedCreateWithoutHotelInput> | HotelAmenityCreateWithoutHotelInput[] | HotelAmenityUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: HotelAmenityCreateOrConnectWithoutHotelInput | HotelAmenityCreateOrConnectWithoutHotelInput[]
    createMany?: HotelAmenityCreateManyHotelInputEnvelope
    connect?: HotelAmenityWhereUniqueInput | HotelAmenityWhereUniqueInput[]
  }

  export type HotelPolicyCreateNestedManyWithoutHotelInput = {
    create?: XOR<HotelPolicyCreateWithoutHotelInput, HotelPolicyUncheckedCreateWithoutHotelInput> | HotelPolicyCreateWithoutHotelInput[] | HotelPolicyUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: HotelPolicyCreateOrConnectWithoutHotelInput | HotelPolicyCreateOrConnectWithoutHotelInput[]
    createMany?: HotelPolicyCreateManyHotelInputEnvelope
    connect?: HotelPolicyWhereUniqueInput | HotelPolicyWhereUniqueInput[]
  }

  export type RoomUncheckedCreateNestedManyWithoutHotelInput = {
    create?: XOR<RoomCreateWithoutHotelInput, RoomUncheckedCreateWithoutHotelInput> | RoomCreateWithoutHotelInput[] | RoomUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutHotelInput | RoomCreateOrConnectWithoutHotelInput[]
    createMany?: RoomCreateManyHotelInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type HotelImageUncheckedCreateNestedManyWithoutHotelInput = {
    create?: XOR<HotelImageCreateWithoutHotelInput, HotelImageUncheckedCreateWithoutHotelInput> | HotelImageCreateWithoutHotelInput[] | HotelImageUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: HotelImageCreateOrConnectWithoutHotelInput | HotelImageCreateOrConnectWithoutHotelInput[]
    createMany?: HotelImageCreateManyHotelInputEnvelope
    connect?: HotelImageWhereUniqueInput | HotelImageWhereUniqueInput[]
  }

  export type HotelAmenityUncheckedCreateNestedManyWithoutHotelInput = {
    create?: XOR<HotelAmenityCreateWithoutHotelInput, HotelAmenityUncheckedCreateWithoutHotelInput> | HotelAmenityCreateWithoutHotelInput[] | HotelAmenityUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: HotelAmenityCreateOrConnectWithoutHotelInput | HotelAmenityCreateOrConnectWithoutHotelInput[]
    createMany?: HotelAmenityCreateManyHotelInputEnvelope
    connect?: HotelAmenityWhereUniqueInput | HotelAmenityWhereUniqueInput[]
  }

  export type HotelPolicyUncheckedCreateNestedManyWithoutHotelInput = {
    create?: XOR<HotelPolicyCreateWithoutHotelInput, HotelPolicyUncheckedCreateWithoutHotelInput> | HotelPolicyCreateWithoutHotelInput[] | HotelPolicyUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: HotelPolicyCreateOrConnectWithoutHotelInput | HotelPolicyCreateOrConnectWithoutHotelInput[]
    createMany?: HotelPolicyCreateManyHotelInputEnvelope
    connect?: HotelPolicyWhereUniqueInput | HotelPolicyWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type RoomUpdateManyWithoutHotelNestedInput = {
    create?: XOR<RoomCreateWithoutHotelInput, RoomUncheckedCreateWithoutHotelInput> | RoomCreateWithoutHotelInput[] | RoomUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutHotelInput | RoomCreateOrConnectWithoutHotelInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutHotelInput | RoomUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: RoomCreateManyHotelInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutHotelInput | RoomUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutHotelInput | RoomUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type HotelImageUpdateManyWithoutHotelNestedInput = {
    create?: XOR<HotelImageCreateWithoutHotelInput, HotelImageUncheckedCreateWithoutHotelInput> | HotelImageCreateWithoutHotelInput[] | HotelImageUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: HotelImageCreateOrConnectWithoutHotelInput | HotelImageCreateOrConnectWithoutHotelInput[]
    upsert?: HotelImageUpsertWithWhereUniqueWithoutHotelInput | HotelImageUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: HotelImageCreateManyHotelInputEnvelope
    set?: HotelImageWhereUniqueInput | HotelImageWhereUniqueInput[]
    disconnect?: HotelImageWhereUniqueInput | HotelImageWhereUniqueInput[]
    delete?: HotelImageWhereUniqueInput | HotelImageWhereUniqueInput[]
    connect?: HotelImageWhereUniqueInput | HotelImageWhereUniqueInput[]
    update?: HotelImageUpdateWithWhereUniqueWithoutHotelInput | HotelImageUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: HotelImageUpdateManyWithWhereWithoutHotelInput | HotelImageUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: HotelImageScalarWhereInput | HotelImageScalarWhereInput[]
  }

  export type HotelAmenityUpdateManyWithoutHotelNestedInput = {
    create?: XOR<HotelAmenityCreateWithoutHotelInput, HotelAmenityUncheckedCreateWithoutHotelInput> | HotelAmenityCreateWithoutHotelInput[] | HotelAmenityUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: HotelAmenityCreateOrConnectWithoutHotelInput | HotelAmenityCreateOrConnectWithoutHotelInput[]
    upsert?: HotelAmenityUpsertWithWhereUniqueWithoutHotelInput | HotelAmenityUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: HotelAmenityCreateManyHotelInputEnvelope
    set?: HotelAmenityWhereUniqueInput | HotelAmenityWhereUniqueInput[]
    disconnect?: HotelAmenityWhereUniqueInput | HotelAmenityWhereUniqueInput[]
    delete?: HotelAmenityWhereUniqueInput | HotelAmenityWhereUniqueInput[]
    connect?: HotelAmenityWhereUniqueInput | HotelAmenityWhereUniqueInput[]
    update?: HotelAmenityUpdateWithWhereUniqueWithoutHotelInput | HotelAmenityUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: HotelAmenityUpdateManyWithWhereWithoutHotelInput | HotelAmenityUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: HotelAmenityScalarWhereInput | HotelAmenityScalarWhereInput[]
  }

  export type HotelPolicyUpdateManyWithoutHotelNestedInput = {
    create?: XOR<HotelPolicyCreateWithoutHotelInput, HotelPolicyUncheckedCreateWithoutHotelInput> | HotelPolicyCreateWithoutHotelInput[] | HotelPolicyUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: HotelPolicyCreateOrConnectWithoutHotelInput | HotelPolicyCreateOrConnectWithoutHotelInput[]
    upsert?: HotelPolicyUpsertWithWhereUniqueWithoutHotelInput | HotelPolicyUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: HotelPolicyCreateManyHotelInputEnvelope
    set?: HotelPolicyWhereUniqueInput | HotelPolicyWhereUniqueInput[]
    disconnect?: HotelPolicyWhereUniqueInput | HotelPolicyWhereUniqueInput[]
    delete?: HotelPolicyWhereUniqueInput | HotelPolicyWhereUniqueInput[]
    connect?: HotelPolicyWhereUniqueInput | HotelPolicyWhereUniqueInput[]
    update?: HotelPolicyUpdateWithWhereUniqueWithoutHotelInput | HotelPolicyUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: HotelPolicyUpdateManyWithWhereWithoutHotelInput | HotelPolicyUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: HotelPolicyScalarWhereInput | HotelPolicyScalarWhereInput[]
  }

  export type RoomUncheckedUpdateManyWithoutHotelNestedInput = {
    create?: XOR<RoomCreateWithoutHotelInput, RoomUncheckedCreateWithoutHotelInput> | RoomCreateWithoutHotelInput[] | RoomUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutHotelInput | RoomCreateOrConnectWithoutHotelInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutHotelInput | RoomUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: RoomCreateManyHotelInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutHotelInput | RoomUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutHotelInput | RoomUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type HotelImageUncheckedUpdateManyWithoutHotelNestedInput = {
    create?: XOR<HotelImageCreateWithoutHotelInput, HotelImageUncheckedCreateWithoutHotelInput> | HotelImageCreateWithoutHotelInput[] | HotelImageUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: HotelImageCreateOrConnectWithoutHotelInput | HotelImageCreateOrConnectWithoutHotelInput[]
    upsert?: HotelImageUpsertWithWhereUniqueWithoutHotelInput | HotelImageUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: HotelImageCreateManyHotelInputEnvelope
    set?: HotelImageWhereUniqueInput | HotelImageWhereUniqueInput[]
    disconnect?: HotelImageWhereUniqueInput | HotelImageWhereUniqueInput[]
    delete?: HotelImageWhereUniqueInput | HotelImageWhereUniqueInput[]
    connect?: HotelImageWhereUniqueInput | HotelImageWhereUniqueInput[]
    update?: HotelImageUpdateWithWhereUniqueWithoutHotelInput | HotelImageUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: HotelImageUpdateManyWithWhereWithoutHotelInput | HotelImageUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: HotelImageScalarWhereInput | HotelImageScalarWhereInput[]
  }

  export type HotelAmenityUncheckedUpdateManyWithoutHotelNestedInput = {
    create?: XOR<HotelAmenityCreateWithoutHotelInput, HotelAmenityUncheckedCreateWithoutHotelInput> | HotelAmenityCreateWithoutHotelInput[] | HotelAmenityUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: HotelAmenityCreateOrConnectWithoutHotelInput | HotelAmenityCreateOrConnectWithoutHotelInput[]
    upsert?: HotelAmenityUpsertWithWhereUniqueWithoutHotelInput | HotelAmenityUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: HotelAmenityCreateManyHotelInputEnvelope
    set?: HotelAmenityWhereUniqueInput | HotelAmenityWhereUniqueInput[]
    disconnect?: HotelAmenityWhereUniqueInput | HotelAmenityWhereUniqueInput[]
    delete?: HotelAmenityWhereUniqueInput | HotelAmenityWhereUniqueInput[]
    connect?: HotelAmenityWhereUniqueInput | HotelAmenityWhereUniqueInput[]
    update?: HotelAmenityUpdateWithWhereUniqueWithoutHotelInput | HotelAmenityUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: HotelAmenityUpdateManyWithWhereWithoutHotelInput | HotelAmenityUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: HotelAmenityScalarWhereInput | HotelAmenityScalarWhereInput[]
  }

  export type HotelPolicyUncheckedUpdateManyWithoutHotelNestedInput = {
    create?: XOR<HotelPolicyCreateWithoutHotelInput, HotelPolicyUncheckedCreateWithoutHotelInput> | HotelPolicyCreateWithoutHotelInput[] | HotelPolicyUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: HotelPolicyCreateOrConnectWithoutHotelInput | HotelPolicyCreateOrConnectWithoutHotelInput[]
    upsert?: HotelPolicyUpsertWithWhereUniqueWithoutHotelInput | HotelPolicyUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: HotelPolicyCreateManyHotelInputEnvelope
    set?: HotelPolicyWhereUniqueInput | HotelPolicyWhereUniqueInput[]
    disconnect?: HotelPolicyWhereUniqueInput | HotelPolicyWhereUniqueInput[]
    delete?: HotelPolicyWhereUniqueInput | HotelPolicyWhereUniqueInput[]
    connect?: HotelPolicyWhereUniqueInput | HotelPolicyWhereUniqueInput[]
    update?: HotelPolicyUpdateWithWhereUniqueWithoutHotelInput | HotelPolicyUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: HotelPolicyUpdateManyWithWhereWithoutHotelInput | HotelPolicyUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: HotelPolicyScalarWhereInput | HotelPolicyScalarWhereInput[]
  }

  export type HotelCreateNestedOneWithoutImagesInput = {
    create?: XOR<HotelCreateWithoutImagesInput, HotelUncheckedCreateWithoutImagesInput>
    connectOrCreate?: HotelCreateOrConnectWithoutImagesInput
    connect?: HotelWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type HotelUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<HotelCreateWithoutImagesInput, HotelUncheckedCreateWithoutImagesInput>
    connectOrCreate?: HotelCreateOrConnectWithoutImagesInput
    upsert?: HotelUpsertWithoutImagesInput
    connect?: HotelWhereUniqueInput
    update?: XOR<XOR<HotelUpdateToOneWithWhereWithoutImagesInput, HotelUpdateWithoutImagesInput>, HotelUncheckedUpdateWithoutImagesInput>
  }

  export type HotelCreateNestedOneWithoutAmenitiesInput = {
    create?: XOR<HotelCreateWithoutAmenitiesInput, HotelUncheckedCreateWithoutAmenitiesInput>
    connectOrCreate?: HotelCreateOrConnectWithoutAmenitiesInput
    connect?: HotelWhereUniqueInput
  }

  export type HotelUpdateOneRequiredWithoutAmenitiesNestedInput = {
    create?: XOR<HotelCreateWithoutAmenitiesInput, HotelUncheckedCreateWithoutAmenitiesInput>
    connectOrCreate?: HotelCreateOrConnectWithoutAmenitiesInput
    upsert?: HotelUpsertWithoutAmenitiesInput
    connect?: HotelWhereUniqueInput
    update?: XOR<XOR<HotelUpdateToOneWithWhereWithoutAmenitiesInput, HotelUpdateWithoutAmenitiesInput>, HotelUncheckedUpdateWithoutAmenitiesInput>
  }

  export type HotelCreateNestedOneWithoutPoliciesInput = {
    create?: XOR<HotelCreateWithoutPoliciesInput, HotelUncheckedCreateWithoutPoliciesInput>
    connectOrCreate?: HotelCreateOrConnectWithoutPoliciesInput
    connect?: HotelWhereUniqueInput
  }

  export type HotelUpdateOneRequiredWithoutPoliciesNestedInput = {
    create?: XOR<HotelCreateWithoutPoliciesInput, HotelUncheckedCreateWithoutPoliciesInput>
    connectOrCreate?: HotelCreateOrConnectWithoutPoliciesInput
    upsert?: HotelUpsertWithoutPoliciesInput
    connect?: HotelWhereUniqueInput
    update?: XOR<XOR<HotelUpdateToOneWithWhereWithoutPoliciesInput, HotelUpdateWithoutPoliciesInput>, HotelUncheckedUpdateWithoutPoliciesInput>
  }

  export type HotelCreateNestedOneWithoutRoomsInput = {
    create?: XOR<HotelCreateWithoutRoomsInput, HotelUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: HotelCreateOrConnectWithoutRoomsInput
    connect?: HotelWhereUniqueInput
  }

  export type BookingCreateNestedManyWithoutRoomInput = {
    create?: XOR<BookingCreateWithoutRoomInput, BookingUncheckedCreateWithoutRoomInput> | BookingCreateWithoutRoomInput[] | BookingUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutRoomInput | BookingCreateOrConnectWithoutRoomInput[]
    createMany?: BookingCreateManyRoomInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type RoomAmenityCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomAmenityCreateWithoutRoomInput, RoomAmenityUncheckedCreateWithoutRoomInput> | RoomAmenityCreateWithoutRoomInput[] | RoomAmenityUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomAmenityCreateOrConnectWithoutRoomInput | RoomAmenityCreateOrConnectWithoutRoomInput[]
    createMany?: RoomAmenityCreateManyRoomInputEnvelope
    connect?: RoomAmenityWhereUniqueInput | RoomAmenityWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<BookingCreateWithoutRoomInput, BookingUncheckedCreateWithoutRoomInput> | BookingCreateWithoutRoomInput[] | BookingUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutRoomInput | BookingCreateOrConnectWithoutRoomInput[]
    createMany?: BookingCreateManyRoomInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type RoomAmenityUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomAmenityCreateWithoutRoomInput, RoomAmenityUncheckedCreateWithoutRoomInput> | RoomAmenityCreateWithoutRoomInput[] | RoomAmenityUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomAmenityCreateOrConnectWithoutRoomInput | RoomAmenityCreateOrConnectWithoutRoomInput[]
    createMany?: RoomAmenityCreateManyRoomInputEnvelope
    connect?: RoomAmenityWhereUniqueInput | RoomAmenityWhereUniqueInput[]
  }

  export type HotelUpdateOneRequiredWithoutRoomsNestedInput = {
    create?: XOR<HotelCreateWithoutRoomsInput, HotelUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: HotelCreateOrConnectWithoutRoomsInput
    upsert?: HotelUpsertWithoutRoomsInput
    connect?: HotelWhereUniqueInput
    update?: XOR<XOR<HotelUpdateToOneWithWhereWithoutRoomsInput, HotelUpdateWithoutRoomsInput>, HotelUncheckedUpdateWithoutRoomsInput>
  }

  export type BookingUpdateManyWithoutRoomNestedInput = {
    create?: XOR<BookingCreateWithoutRoomInput, BookingUncheckedCreateWithoutRoomInput> | BookingCreateWithoutRoomInput[] | BookingUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutRoomInput | BookingCreateOrConnectWithoutRoomInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutRoomInput | BookingUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: BookingCreateManyRoomInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutRoomInput | BookingUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutRoomInput | BookingUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type RoomAmenityUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomAmenityCreateWithoutRoomInput, RoomAmenityUncheckedCreateWithoutRoomInput> | RoomAmenityCreateWithoutRoomInput[] | RoomAmenityUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomAmenityCreateOrConnectWithoutRoomInput | RoomAmenityCreateOrConnectWithoutRoomInput[]
    upsert?: RoomAmenityUpsertWithWhereUniqueWithoutRoomInput | RoomAmenityUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomAmenityCreateManyRoomInputEnvelope
    set?: RoomAmenityWhereUniqueInput | RoomAmenityWhereUniqueInput[]
    disconnect?: RoomAmenityWhereUniqueInput | RoomAmenityWhereUniqueInput[]
    delete?: RoomAmenityWhereUniqueInput | RoomAmenityWhereUniqueInput[]
    connect?: RoomAmenityWhereUniqueInput | RoomAmenityWhereUniqueInput[]
    update?: RoomAmenityUpdateWithWhereUniqueWithoutRoomInput | RoomAmenityUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomAmenityUpdateManyWithWhereWithoutRoomInput | RoomAmenityUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomAmenityScalarWhereInput | RoomAmenityScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<BookingCreateWithoutRoomInput, BookingUncheckedCreateWithoutRoomInput> | BookingCreateWithoutRoomInput[] | BookingUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutRoomInput | BookingCreateOrConnectWithoutRoomInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutRoomInput | BookingUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: BookingCreateManyRoomInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutRoomInput | BookingUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutRoomInput | BookingUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type RoomAmenityUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomAmenityCreateWithoutRoomInput, RoomAmenityUncheckedCreateWithoutRoomInput> | RoomAmenityCreateWithoutRoomInput[] | RoomAmenityUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomAmenityCreateOrConnectWithoutRoomInput | RoomAmenityCreateOrConnectWithoutRoomInput[]
    upsert?: RoomAmenityUpsertWithWhereUniqueWithoutRoomInput | RoomAmenityUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomAmenityCreateManyRoomInputEnvelope
    set?: RoomAmenityWhereUniqueInput | RoomAmenityWhereUniqueInput[]
    disconnect?: RoomAmenityWhereUniqueInput | RoomAmenityWhereUniqueInput[]
    delete?: RoomAmenityWhereUniqueInput | RoomAmenityWhereUniqueInput[]
    connect?: RoomAmenityWhereUniqueInput | RoomAmenityWhereUniqueInput[]
    update?: RoomAmenityUpdateWithWhereUniqueWithoutRoomInput | RoomAmenityUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomAmenityUpdateManyWithWhereWithoutRoomInput | RoomAmenityUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomAmenityScalarWhereInput | RoomAmenityScalarWhereInput[]
  }

  export type RoomCreateNestedOneWithoutAmenitiesInput = {
    create?: XOR<RoomCreateWithoutAmenitiesInput, RoomUncheckedCreateWithoutAmenitiesInput>
    connectOrCreate?: RoomCreateOrConnectWithoutAmenitiesInput
    connect?: RoomWhereUniqueInput
  }

  export type RoomUpdateOneRequiredWithoutAmenitiesNestedInput = {
    create?: XOR<RoomCreateWithoutAmenitiesInput, RoomUncheckedCreateWithoutAmenitiesInput>
    connectOrCreate?: RoomCreateOrConnectWithoutAmenitiesInput
    upsert?: RoomUpsertWithoutAmenitiesInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutAmenitiesInput, RoomUpdateWithoutAmenitiesInput>, RoomUncheckedUpdateWithoutAmenitiesInput>
  }

  export type UserCreateNestedOneWithoutBookingsInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    connect?: UserWhereUniqueInput
  }

  export type RoomCreateNestedOneWithoutBookingsInput = {
    create?: XOR<RoomCreateWithoutBookingsInput, RoomUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutBookingsInput
    connect?: RoomWhereUniqueInput
  }

  export type PaymentCreateNestedManyWithoutBookingInput = {
    create?: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput> | PaymentCreateWithoutBookingInput[] | PaymentUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutBookingInput | PaymentCreateOrConnectWithoutBookingInput[]
    createMany?: PaymentCreateManyBookingInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutBookingInput = {
    create?: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput> | PaymentCreateWithoutBookingInput[] | PaymentUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutBookingInput | PaymentCreateOrConnectWithoutBookingInput[]
    createMany?: PaymentCreateManyBookingInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    upsert?: UserUpsertWithoutBookingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookingsInput, UserUpdateWithoutBookingsInput>, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type RoomUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<RoomCreateWithoutBookingsInput, RoomUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutBookingsInput
    upsert?: RoomUpsertWithoutBookingsInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutBookingsInput, RoomUpdateWithoutBookingsInput>, RoomUncheckedUpdateWithoutBookingsInput>
  }

  export type PaymentUpdateManyWithoutBookingNestedInput = {
    create?: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput> | PaymentCreateWithoutBookingInput[] | PaymentUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutBookingInput | PaymentCreateOrConnectWithoutBookingInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutBookingInput | PaymentUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: PaymentCreateManyBookingInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutBookingInput | PaymentUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutBookingInput | PaymentUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutBookingNestedInput = {
    create?: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput> | PaymentCreateWithoutBookingInput[] | PaymentUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutBookingInput | PaymentCreateOrConnectWithoutBookingInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutBookingInput | PaymentUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: PaymentCreateManyBookingInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutBookingInput | PaymentUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutBookingInput | PaymentUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type BookingCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<BookingCreateWithoutPaymentsInput, BookingUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutPaymentsInput
    connect?: BookingWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BookingUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<BookingCreateWithoutPaymentsInput, BookingUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutPaymentsInput
    upsert?: BookingUpsertWithoutPaymentsInput
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutPaymentsInput, BookingUpdateWithoutPaymentsInput>, BookingUncheckedUpdateWithoutPaymentsInput>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BookingCreateWithoutUserInput = {
    id?: string
    checkIn: Date | string
    checkOut: Date | string
    status?: string
    total: number
    guestName?: string | null
    guestEmail?: string | null
    guestPhone?: string | null
    guestCount?: number
    specialRequests?: string | null
    holdExpiresAt?: Date | string | null
    createdAt?: Date | string
    room: RoomCreateNestedOneWithoutBookingsInput
    payments?: PaymentCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutUserInput = {
    id?: string
    roomId: string
    checkIn: Date | string
    checkOut: Date | string
    status?: string
    total: number
    guestName?: string | null
    guestEmail?: string | null
    guestPhone?: string | null
    guestCount?: number
    specialRequests?: string | null
    holdExpiresAt?: Date | string | null
    createdAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutUserInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingCreateManyUserInputEnvelope = {
    data: BookingCreateManyUserInput | BookingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BookingUpsertWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
  }

  export type BookingUpdateManyWithWhereWithoutUserInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutUserInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: StringFilter<"Booking"> | string
    userId?: StringFilter<"Booking"> | string
    roomId?: StringFilter<"Booking"> | string
    checkIn?: DateTimeFilter<"Booking"> | Date | string
    checkOut?: DateTimeFilter<"Booking"> | Date | string
    status?: StringFilter<"Booking"> | string
    total?: FloatFilter<"Booking"> | number
    guestName?: StringNullableFilter<"Booking"> | string | null
    guestEmail?: StringNullableFilter<"Booking"> | string | null
    guestPhone?: StringNullableFilter<"Booking"> | string | null
    guestCount?: IntFilter<"Booking"> | number
    specialRequests?: StringNullableFilter<"Booking"> | string | null
    holdExpiresAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
  }

  export type RoomCreateWithoutHotelInput = {
    id?: string
    name: string
    capacity: number
    price: number
    bookings?: BookingCreateNestedManyWithoutRoomInput
    amenities?: RoomAmenityCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutHotelInput = {
    id?: string
    name: string
    capacity: number
    price: number
    bookings?: BookingUncheckedCreateNestedManyWithoutRoomInput
    amenities?: RoomAmenityUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutHotelInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutHotelInput, RoomUncheckedCreateWithoutHotelInput>
  }

  export type RoomCreateManyHotelInputEnvelope = {
    data: RoomCreateManyHotelInput | RoomCreateManyHotelInput[]
    skipDuplicates?: boolean
  }

  export type HotelImageCreateWithoutHotelInput = {
    id?: string
    url: string
    altText?: string | null
    sortOrder?: number
  }

  export type HotelImageUncheckedCreateWithoutHotelInput = {
    id?: string
    url: string
    altText?: string | null
    sortOrder?: number
  }

  export type HotelImageCreateOrConnectWithoutHotelInput = {
    where: HotelImageWhereUniqueInput
    create: XOR<HotelImageCreateWithoutHotelInput, HotelImageUncheckedCreateWithoutHotelInput>
  }

  export type HotelImageCreateManyHotelInputEnvelope = {
    data: HotelImageCreateManyHotelInput | HotelImageCreateManyHotelInput[]
    skipDuplicates?: boolean
  }

  export type HotelAmenityCreateWithoutHotelInput = {
    id?: string
    name: string
  }

  export type HotelAmenityUncheckedCreateWithoutHotelInput = {
    id?: string
    name: string
  }

  export type HotelAmenityCreateOrConnectWithoutHotelInput = {
    where: HotelAmenityWhereUniqueInput
    create: XOR<HotelAmenityCreateWithoutHotelInput, HotelAmenityUncheckedCreateWithoutHotelInput>
  }

  export type HotelAmenityCreateManyHotelInputEnvelope = {
    data: HotelAmenityCreateManyHotelInput | HotelAmenityCreateManyHotelInput[]
    skipDuplicates?: boolean
  }

  export type HotelPolicyCreateWithoutHotelInput = {
    id?: string
    category: string
    title: string
    description: string
  }

  export type HotelPolicyUncheckedCreateWithoutHotelInput = {
    id?: string
    category: string
    title: string
    description: string
  }

  export type HotelPolicyCreateOrConnectWithoutHotelInput = {
    where: HotelPolicyWhereUniqueInput
    create: XOR<HotelPolicyCreateWithoutHotelInput, HotelPolicyUncheckedCreateWithoutHotelInput>
  }

  export type HotelPolicyCreateManyHotelInputEnvelope = {
    data: HotelPolicyCreateManyHotelInput | HotelPolicyCreateManyHotelInput[]
    skipDuplicates?: boolean
  }

  export type RoomUpsertWithWhereUniqueWithoutHotelInput = {
    where: RoomWhereUniqueInput
    update: XOR<RoomUpdateWithoutHotelInput, RoomUncheckedUpdateWithoutHotelInput>
    create: XOR<RoomCreateWithoutHotelInput, RoomUncheckedCreateWithoutHotelInput>
  }

  export type RoomUpdateWithWhereUniqueWithoutHotelInput = {
    where: RoomWhereUniqueInput
    data: XOR<RoomUpdateWithoutHotelInput, RoomUncheckedUpdateWithoutHotelInput>
  }

  export type RoomUpdateManyWithWhereWithoutHotelInput = {
    where: RoomScalarWhereInput
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyWithoutHotelInput>
  }

  export type RoomScalarWhereInput = {
    AND?: RoomScalarWhereInput | RoomScalarWhereInput[]
    OR?: RoomScalarWhereInput[]
    NOT?: RoomScalarWhereInput | RoomScalarWhereInput[]
    id?: StringFilter<"Room"> | string
    name?: StringFilter<"Room"> | string
    capacity?: IntFilter<"Room"> | number
    price?: FloatFilter<"Room"> | number
    hotelId?: StringFilter<"Room"> | string
  }

  export type HotelImageUpsertWithWhereUniqueWithoutHotelInput = {
    where: HotelImageWhereUniqueInput
    update: XOR<HotelImageUpdateWithoutHotelInput, HotelImageUncheckedUpdateWithoutHotelInput>
    create: XOR<HotelImageCreateWithoutHotelInput, HotelImageUncheckedCreateWithoutHotelInput>
  }

  export type HotelImageUpdateWithWhereUniqueWithoutHotelInput = {
    where: HotelImageWhereUniqueInput
    data: XOR<HotelImageUpdateWithoutHotelInput, HotelImageUncheckedUpdateWithoutHotelInput>
  }

  export type HotelImageUpdateManyWithWhereWithoutHotelInput = {
    where: HotelImageScalarWhereInput
    data: XOR<HotelImageUpdateManyMutationInput, HotelImageUncheckedUpdateManyWithoutHotelInput>
  }

  export type HotelImageScalarWhereInput = {
    AND?: HotelImageScalarWhereInput | HotelImageScalarWhereInput[]
    OR?: HotelImageScalarWhereInput[]
    NOT?: HotelImageScalarWhereInput | HotelImageScalarWhereInput[]
    id?: StringFilter<"HotelImage"> | string
    url?: StringFilter<"HotelImage"> | string
    altText?: StringNullableFilter<"HotelImage"> | string | null
    sortOrder?: IntFilter<"HotelImage"> | number
    hotelId?: StringFilter<"HotelImage"> | string
  }

  export type HotelAmenityUpsertWithWhereUniqueWithoutHotelInput = {
    where: HotelAmenityWhereUniqueInput
    update: XOR<HotelAmenityUpdateWithoutHotelInput, HotelAmenityUncheckedUpdateWithoutHotelInput>
    create: XOR<HotelAmenityCreateWithoutHotelInput, HotelAmenityUncheckedCreateWithoutHotelInput>
  }

  export type HotelAmenityUpdateWithWhereUniqueWithoutHotelInput = {
    where: HotelAmenityWhereUniqueInput
    data: XOR<HotelAmenityUpdateWithoutHotelInput, HotelAmenityUncheckedUpdateWithoutHotelInput>
  }

  export type HotelAmenityUpdateManyWithWhereWithoutHotelInput = {
    where: HotelAmenityScalarWhereInput
    data: XOR<HotelAmenityUpdateManyMutationInput, HotelAmenityUncheckedUpdateManyWithoutHotelInput>
  }

  export type HotelAmenityScalarWhereInput = {
    AND?: HotelAmenityScalarWhereInput | HotelAmenityScalarWhereInput[]
    OR?: HotelAmenityScalarWhereInput[]
    NOT?: HotelAmenityScalarWhereInput | HotelAmenityScalarWhereInput[]
    id?: StringFilter<"HotelAmenity"> | string
    name?: StringFilter<"HotelAmenity"> | string
    hotelId?: StringFilter<"HotelAmenity"> | string
  }

  export type HotelPolicyUpsertWithWhereUniqueWithoutHotelInput = {
    where: HotelPolicyWhereUniqueInput
    update: XOR<HotelPolicyUpdateWithoutHotelInput, HotelPolicyUncheckedUpdateWithoutHotelInput>
    create: XOR<HotelPolicyCreateWithoutHotelInput, HotelPolicyUncheckedCreateWithoutHotelInput>
  }

  export type HotelPolicyUpdateWithWhereUniqueWithoutHotelInput = {
    where: HotelPolicyWhereUniqueInput
    data: XOR<HotelPolicyUpdateWithoutHotelInput, HotelPolicyUncheckedUpdateWithoutHotelInput>
  }

  export type HotelPolicyUpdateManyWithWhereWithoutHotelInput = {
    where: HotelPolicyScalarWhereInput
    data: XOR<HotelPolicyUpdateManyMutationInput, HotelPolicyUncheckedUpdateManyWithoutHotelInput>
  }

  export type HotelPolicyScalarWhereInput = {
    AND?: HotelPolicyScalarWhereInput | HotelPolicyScalarWhereInput[]
    OR?: HotelPolicyScalarWhereInput[]
    NOT?: HotelPolicyScalarWhereInput | HotelPolicyScalarWhereInput[]
    id?: StringFilter<"HotelPolicy"> | string
    category?: StringFilter<"HotelPolicy"> | string
    title?: StringFilter<"HotelPolicy"> | string
    description?: StringFilter<"HotelPolicy"> | string
    hotelId?: StringFilter<"HotelPolicy"> | string
  }

  export type HotelCreateWithoutImagesInput = {
    id?: string
    name: string
    description: string
    location: string
    address: string
    price: number
    rating?: number
    image?: string | null
    createdAt?: Date | string
    rooms?: RoomCreateNestedManyWithoutHotelInput
    amenities?: HotelAmenityCreateNestedManyWithoutHotelInput
    policies?: HotelPolicyCreateNestedManyWithoutHotelInput
  }

  export type HotelUncheckedCreateWithoutImagesInput = {
    id?: string
    name: string
    description: string
    location: string
    address: string
    price: number
    rating?: number
    image?: string | null
    createdAt?: Date | string
    rooms?: RoomUncheckedCreateNestedManyWithoutHotelInput
    amenities?: HotelAmenityUncheckedCreateNestedManyWithoutHotelInput
    policies?: HotelPolicyUncheckedCreateNestedManyWithoutHotelInput
  }

  export type HotelCreateOrConnectWithoutImagesInput = {
    where: HotelWhereUniqueInput
    create: XOR<HotelCreateWithoutImagesInput, HotelUncheckedCreateWithoutImagesInput>
  }

  export type HotelUpsertWithoutImagesInput = {
    update: XOR<HotelUpdateWithoutImagesInput, HotelUncheckedUpdateWithoutImagesInput>
    create: XOR<HotelCreateWithoutImagesInput, HotelUncheckedCreateWithoutImagesInput>
    where?: HotelWhereInput
  }

  export type HotelUpdateToOneWithWhereWithoutImagesInput = {
    where?: HotelWhereInput
    data: XOR<HotelUpdateWithoutImagesInput, HotelUncheckedUpdateWithoutImagesInput>
  }

  export type HotelUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUpdateManyWithoutHotelNestedInput
    amenities?: HotelAmenityUpdateManyWithoutHotelNestedInput
    policies?: HotelPolicyUpdateManyWithoutHotelNestedInput
  }

  export type HotelUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUncheckedUpdateManyWithoutHotelNestedInput
    amenities?: HotelAmenityUncheckedUpdateManyWithoutHotelNestedInput
    policies?: HotelPolicyUncheckedUpdateManyWithoutHotelNestedInput
  }

  export type HotelCreateWithoutAmenitiesInput = {
    id?: string
    name: string
    description: string
    location: string
    address: string
    price: number
    rating?: number
    image?: string | null
    createdAt?: Date | string
    rooms?: RoomCreateNestedManyWithoutHotelInput
    images?: HotelImageCreateNestedManyWithoutHotelInput
    policies?: HotelPolicyCreateNestedManyWithoutHotelInput
  }

  export type HotelUncheckedCreateWithoutAmenitiesInput = {
    id?: string
    name: string
    description: string
    location: string
    address: string
    price: number
    rating?: number
    image?: string | null
    createdAt?: Date | string
    rooms?: RoomUncheckedCreateNestedManyWithoutHotelInput
    images?: HotelImageUncheckedCreateNestedManyWithoutHotelInput
    policies?: HotelPolicyUncheckedCreateNestedManyWithoutHotelInput
  }

  export type HotelCreateOrConnectWithoutAmenitiesInput = {
    where: HotelWhereUniqueInput
    create: XOR<HotelCreateWithoutAmenitiesInput, HotelUncheckedCreateWithoutAmenitiesInput>
  }

  export type HotelUpsertWithoutAmenitiesInput = {
    update: XOR<HotelUpdateWithoutAmenitiesInput, HotelUncheckedUpdateWithoutAmenitiesInput>
    create: XOR<HotelCreateWithoutAmenitiesInput, HotelUncheckedCreateWithoutAmenitiesInput>
    where?: HotelWhereInput
  }

  export type HotelUpdateToOneWithWhereWithoutAmenitiesInput = {
    where?: HotelWhereInput
    data: XOR<HotelUpdateWithoutAmenitiesInput, HotelUncheckedUpdateWithoutAmenitiesInput>
  }

  export type HotelUpdateWithoutAmenitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUpdateManyWithoutHotelNestedInput
    images?: HotelImageUpdateManyWithoutHotelNestedInput
    policies?: HotelPolicyUpdateManyWithoutHotelNestedInput
  }

  export type HotelUncheckedUpdateWithoutAmenitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUncheckedUpdateManyWithoutHotelNestedInput
    images?: HotelImageUncheckedUpdateManyWithoutHotelNestedInput
    policies?: HotelPolicyUncheckedUpdateManyWithoutHotelNestedInput
  }

  export type HotelCreateWithoutPoliciesInput = {
    id?: string
    name: string
    description: string
    location: string
    address: string
    price: number
    rating?: number
    image?: string | null
    createdAt?: Date | string
    rooms?: RoomCreateNestedManyWithoutHotelInput
    images?: HotelImageCreateNestedManyWithoutHotelInput
    amenities?: HotelAmenityCreateNestedManyWithoutHotelInput
  }

  export type HotelUncheckedCreateWithoutPoliciesInput = {
    id?: string
    name: string
    description: string
    location: string
    address: string
    price: number
    rating?: number
    image?: string | null
    createdAt?: Date | string
    rooms?: RoomUncheckedCreateNestedManyWithoutHotelInput
    images?: HotelImageUncheckedCreateNestedManyWithoutHotelInput
    amenities?: HotelAmenityUncheckedCreateNestedManyWithoutHotelInput
  }

  export type HotelCreateOrConnectWithoutPoliciesInput = {
    where: HotelWhereUniqueInput
    create: XOR<HotelCreateWithoutPoliciesInput, HotelUncheckedCreateWithoutPoliciesInput>
  }

  export type HotelUpsertWithoutPoliciesInput = {
    update: XOR<HotelUpdateWithoutPoliciesInput, HotelUncheckedUpdateWithoutPoliciesInput>
    create: XOR<HotelCreateWithoutPoliciesInput, HotelUncheckedCreateWithoutPoliciesInput>
    where?: HotelWhereInput
  }

  export type HotelUpdateToOneWithWhereWithoutPoliciesInput = {
    where?: HotelWhereInput
    data: XOR<HotelUpdateWithoutPoliciesInput, HotelUncheckedUpdateWithoutPoliciesInput>
  }

  export type HotelUpdateWithoutPoliciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUpdateManyWithoutHotelNestedInput
    images?: HotelImageUpdateManyWithoutHotelNestedInput
    amenities?: HotelAmenityUpdateManyWithoutHotelNestedInput
  }

  export type HotelUncheckedUpdateWithoutPoliciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUncheckedUpdateManyWithoutHotelNestedInput
    images?: HotelImageUncheckedUpdateManyWithoutHotelNestedInput
    amenities?: HotelAmenityUncheckedUpdateManyWithoutHotelNestedInput
  }

  export type HotelCreateWithoutRoomsInput = {
    id?: string
    name: string
    description: string
    location: string
    address: string
    price: number
    rating?: number
    image?: string | null
    createdAt?: Date | string
    images?: HotelImageCreateNestedManyWithoutHotelInput
    amenities?: HotelAmenityCreateNestedManyWithoutHotelInput
    policies?: HotelPolicyCreateNestedManyWithoutHotelInput
  }

  export type HotelUncheckedCreateWithoutRoomsInput = {
    id?: string
    name: string
    description: string
    location: string
    address: string
    price: number
    rating?: number
    image?: string | null
    createdAt?: Date | string
    images?: HotelImageUncheckedCreateNestedManyWithoutHotelInput
    amenities?: HotelAmenityUncheckedCreateNestedManyWithoutHotelInput
    policies?: HotelPolicyUncheckedCreateNestedManyWithoutHotelInput
  }

  export type HotelCreateOrConnectWithoutRoomsInput = {
    where: HotelWhereUniqueInput
    create: XOR<HotelCreateWithoutRoomsInput, HotelUncheckedCreateWithoutRoomsInput>
  }

  export type BookingCreateWithoutRoomInput = {
    id?: string
    checkIn: Date | string
    checkOut: Date | string
    status?: string
    total: number
    guestName?: string | null
    guestEmail?: string | null
    guestPhone?: string | null
    guestCount?: number
    specialRequests?: string | null
    holdExpiresAt?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    payments?: PaymentCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutRoomInput = {
    id?: string
    userId: string
    checkIn: Date | string
    checkOut: Date | string
    status?: string
    total: number
    guestName?: string | null
    guestEmail?: string | null
    guestPhone?: string | null
    guestCount?: number
    specialRequests?: string | null
    holdExpiresAt?: Date | string | null
    createdAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutRoomInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutRoomInput, BookingUncheckedCreateWithoutRoomInput>
  }

  export type BookingCreateManyRoomInputEnvelope = {
    data: BookingCreateManyRoomInput | BookingCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type RoomAmenityCreateWithoutRoomInput = {
    id?: string
    name: string
  }

  export type RoomAmenityUncheckedCreateWithoutRoomInput = {
    id?: string
    name: string
  }

  export type RoomAmenityCreateOrConnectWithoutRoomInput = {
    where: RoomAmenityWhereUniqueInput
    create: XOR<RoomAmenityCreateWithoutRoomInput, RoomAmenityUncheckedCreateWithoutRoomInput>
  }

  export type RoomAmenityCreateManyRoomInputEnvelope = {
    data: RoomAmenityCreateManyRoomInput | RoomAmenityCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type HotelUpsertWithoutRoomsInput = {
    update: XOR<HotelUpdateWithoutRoomsInput, HotelUncheckedUpdateWithoutRoomsInput>
    create: XOR<HotelCreateWithoutRoomsInput, HotelUncheckedCreateWithoutRoomsInput>
    where?: HotelWhereInput
  }

  export type HotelUpdateToOneWithWhereWithoutRoomsInput = {
    where?: HotelWhereInput
    data: XOR<HotelUpdateWithoutRoomsInput, HotelUncheckedUpdateWithoutRoomsInput>
  }

  export type HotelUpdateWithoutRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: HotelImageUpdateManyWithoutHotelNestedInput
    amenities?: HotelAmenityUpdateManyWithoutHotelNestedInput
    policies?: HotelPolicyUpdateManyWithoutHotelNestedInput
  }

  export type HotelUncheckedUpdateWithoutRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: HotelImageUncheckedUpdateManyWithoutHotelNestedInput
    amenities?: HotelAmenityUncheckedUpdateManyWithoutHotelNestedInput
    policies?: HotelPolicyUncheckedUpdateManyWithoutHotelNestedInput
  }

  export type BookingUpsertWithWhereUniqueWithoutRoomInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutRoomInput, BookingUncheckedUpdateWithoutRoomInput>
    create: XOR<BookingCreateWithoutRoomInput, BookingUncheckedCreateWithoutRoomInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutRoomInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutRoomInput, BookingUncheckedUpdateWithoutRoomInput>
  }

  export type BookingUpdateManyWithWhereWithoutRoomInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutRoomInput>
  }

  export type RoomAmenityUpsertWithWhereUniqueWithoutRoomInput = {
    where: RoomAmenityWhereUniqueInput
    update: XOR<RoomAmenityUpdateWithoutRoomInput, RoomAmenityUncheckedUpdateWithoutRoomInput>
    create: XOR<RoomAmenityCreateWithoutRoomInput, RoomAmenityUncheckedCreateWithoutRoomInput>
  }

  export type RoomAmenityUpdateWithWhereUniqueWithoutRoomInput = {
    where: RoomAmenityWhereUniqueInput
    data: XOR<RoomAmenityUpdateWithoutRoomInput, RoomAmenityUncheckedUpdateWithoutRoomInput>
  }

  export type RoomAmenityUpdateManyWithWhereWithoutRoomInput = {
    where: RoomAmenityScalarWhereInput
    data: XOR<RoomAmenityUpdateManyMutationInput, RoomAmenityUncheckedUpdateManyWithoutRoomInput>
  }

  export type RoomAmenityScalarWhereInput = {
    AND?: RoomAmenityScalarWhereInput | RoomAmenityScalarWhereInput[]
    OR?: RoomAmenityScalarWhereInput[]
    NOT?: RoomAmenityScalarWhereInput | RoomAmenityScalarWhereInput[]
    id?: StringFilter<"RoomAmenity"> | string
    name?: StringFilter<"RoomAmenity"> | string
    roomId?: StringFilter<"RoomAmenity"> | string
  }

  export type RoomCreateWithoutAmenitiesInput = {
    id?: string
    name: string
    capacity: number
    price: number
    hotel: HotelCreateNestedOneWithoutRoomsInput
    bookings?: BookingCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutAmenitiesInput = {
    id?: string
    name: string
    capacity: number
    price: number
    hotelId: string
    bookings?: BookingUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutAmenitiesInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutAmenitiesInput, RoomUncheckedCreateWithoutAmenitiesInput>
  }

  export type RoomUpsertWithoutAmenitiesInput = {
    update: XOR<RoomUpdateWithoutAmenitiesInput, RoomUncheckedUpdateWithoutAmenitiesInput>
    create: XOR<RoomCreateWithoutAmenitiesInput, RoomUncheckedCreateWithoutAmenitiesInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutAmenitiesInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutAmenitiesInput, RoomUncheckedUpdateWithoutAmenitiesInput>
  }

  export type RoomUpdateWithoutAmenitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    hotel?: HotelUpdateOneRequiredWithoutRoomsNestedInput
    bookings?: BookingUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutAmenitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    hotelId?: StringFieldUpdateOperationsInput | string
    bookings?: BookingUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type UserCreateWithoutBookingsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    createdAt?: Date | string
  }

  export type UserUncheckedCreateWithoutBookingsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    createdAt?: Date | string
  }

  export type UserCreateOrConnectWithoutBookingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
  }

  export type RoomCreateWithoutBookingsInput = {
    id?: string
    name: string
    capacity: number
    price: number
    hotel: HotelCreateNestedOneWithoutRoomsInput
    amenities?: RoomAmenityCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutBookingsInput = {
    id?: string
    name: string
    capacity: number
    price: number
    hotelId: string
    amenities?: RoomAmenityUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutBookingsInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutBookingsInput, RoomUncheckedCreateWithoutBookingsInput>
  }

  export type PaymentCreateWithoutBookingInput = {
    id?: string
    amount: number
    currency?: string
    status?: string
    provider?: string
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    razorpaySignature?: string | null
    refundId?: string | null
    refundStatus?: string | null
    refundedAmount?: number | null
    failureReason?: string | null
    refundLockToken?: string | null
    refundLockExpiresAt?: Date | string | null
    refundAttempts?: number
    refundCreateAttemptedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUncheckedCreateWithoutBookingInput = {
    id?: string
    amount: number
    currency?: string
    status?: string
    provider?: string
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    razorpaySignature?: string | null
    refundId?: string | null
    refundStatus?: string | null
    refundedAmount?: number | null
    failureReason?: string | null
    refundLockToken?: string | null
    refundLockExpiresAt?: Date | string | null
    refundAttempts?: number
    refundCreateAttemptedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutBookingInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput>
  }

  export type PaymentCreateManyBookingInputEnvelope = {
    data: PaymentCreateManyBookingInput | PaymentCreateManyBookingInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBookingsInput = {
    update: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type UserUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUpsertWithoutBookingsInput = {
    update: XOR<RoomUpdateWithoutBookingsInput, RoomUncheckedUpdateWithoutBookingsInput>
    create: XOR<RoomCreateWithoutBookingsInput, RoomUncheckedCreateWithoutBookingsInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutBookingsInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutBookingsInput, RoomUncheckedUpdateWithoutBookingsInput>
  }

  export type RoomUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    hotel?: HotelUpdateOneRequiredWithoutRoomsNestedInput
    amenities?: RoomAmenityUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    hotelId?: StringFieldUpdateOperationsInput | string
    amenities?: RoomAmenityUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type PaymentUpsertWithWhereUniqueWithoutBookingInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutBookingInput, PaymentUncheckedUpdateWithoutBookingInput>
    create: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutBookingInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutBookingInput, PaymentUncheckedUpdateWithoutBookingInput>
  }

  export type PaymentUpdateManyWithWhereWithoutBookingInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutBookingInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    bookingId?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    currency?: StringFilter<"Payment"> | string
    status?: StringFilter<"Payment"> | string
    provider?: StringFilter<"Payment"> | string
    razorpayOrderId?: StringNullableFilter<"Payment"> | string | null
    razorpayPaymentId?: StringNullableFilter<"Payment"> | string | null
    razorpaySignature?: StringNullableFilter<"Payment"> | string | null
    refundId?: StringNullableFilter<"Payment"> | string | null
    refundStatus?: StringNullableFilter<"Payment"> | string | null
    refundedAmount?: FloatNullableFilter<"Payment"> | number | null
    failureReason?: StringNullableFilter<"Payment"> | string | null
    refundLockToken?: StringNullableFilter<"Payment"> | string | null
    refundLockExpiresAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    refundAttempts?: IntFilter<"Payment"> | number
    refundCreateAttemptedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type BookingCreateWithoutPaymentsInput = {
    id?: string
    checkIn: Date | string
    checkOut: Date | string
    status?: string
    total: number
    guestName?: string | null
    guestEmail?: string | null
    guestPhone?: string | null
    guestCount?: number
    specialRequests?: string | null
    holdExpiresAt?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    room: RoomCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutPaymentsInput = {
    id?: string
    userId: string
    roomId: string
    checkIn: Date | string
    checkOut: Date | string
    status?: string
    total: number
    guestName?: string | null
    guestEmail?: string | null
    guestPhone?: string | null
    guestCount?: number
    specialRequests?: string | null
    holdExpiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type BookingCreateOrConnectWithoutPaymentsInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutPaymentsInput, BookingUncheckedCreateWithoutPaymentsInput>
  }

  export type BookingUpsertWithoutPaymentsInput = {
    update: XOR<BookingUpdateWithoutPaymentsInput, BookingUncheckedUpdateWithoutPaymentsInput>
    create: XOR<BookingCreateWithoutPaymentsInput, BookingUncheckedCreateWithoutPaymentsInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutPaymentsInput, BookingUncheckedUpdateWithoutPaymentsInput>
  }

  export type BookingUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    guestName?: NullableStringFieldUpdateOperationsInput | string | null
    guestEmail?: NullableStringFieldUpdateOperationsInput | string | null
    guestPhone?: NullableStringFieldUpdateOperationsInput | string | null
    guestCount?: IntFieldUpdateOperationsInput | number
    specialRequests?: NullableStringFieldUpdateOperationsInput | string | null
    holdExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    room?: RoomUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    guestName?: NullableStringFieldUpdateOperationsInput | string | null
    guestEmail?: NullableStringFieldUpdateOperationsInput | string | null
    guestPhone?: NullableStringFieldUpdateOperationsInput | string | null
    guestCount?: IntFieldUpdateOperationsInput | number
    specialRequests?: NullableStringFieldUpdateOperationsInput | string | null
    holdExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyUserInput = {
    id?: string
    roomId: string
    checkIn: Date | string
    checkOut: Date | string
    status?: string
    total: number
    guestName?: string | null
    guestEmail?: string | null
    guestPhone?: string | null
    guestCount?: number
    specialRequests?: string | null
    holdExpiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type BookingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    guestName?: NullableStringFieldUpdateOperationsInput | string | null
    guestEmail?: NullableStringFieldUpdateOperationsInput | string | null
    guestPhone?: NullableStringFieldUpdateOperationsInput | string | null
    guestCount?: IntFieldUpdateOperationsInput | number
    specialRequests?: NullableStringFieldUpdateOperationsInput | string | null
    holdExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutBookingsNestedInput
    payments?: PaymentUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    guestName?: NullableStringFieldUpdateOperationsInput | string | null
    guestEmail?: NullableStringFieldUpdateOperationsInput | string | null
    guestPhone?: NullableStringFieldUpdateOperationsInput | string | null
    guestCount?: IntFieldUpdateOperationsInput | number
    specialRequests?: NullableStringFieldUpdateOperationsInput | string | null
    holdExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    guestName?: NullableStringFieldUpdateOperationsInput | string | null
    guestEmail?: NullableStringFieldUpdateOperationsInput | string | null
    guestPhone?: NullableStringFieldUpdateOperationsInput | string | null
    guestCount?: IntFieldUpdateOperationsInput | number
    specialRequests?: NullableStringFieldUpdateOperationsInput | string | null
    holdExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomCreateManyHotelInput = {
    id?: string
    name: string
    capacity: number
    price: number
  }

  export type HotelImageCreateManyHotelInput = {
    id?: string
    url: string
    altText?: string | null
    sortOrder?: number
  }

  export type HotelAmenityCreateManyHotelInput = {
    id?: string
    name: string
  }

  export type HotelPolicyCreateManyHotelInput = {
    id?: string
    category: string
    title: string
    description: string
  }

  export type RoomUpdateWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    bookings?: BookingUpdateManyWithoutRoomNestedInput
    amenities?: RoomAmenityUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    bookings?: BookingUncheckedUpdateManyWithoutRoomNestedInput
    amenities?: RoomAmenityUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateManyWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type HotelImageUpdateWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type HotelImageUncheckedUpdateWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type HotelImageUncheckedUpdateManyWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type HotelAmenityUpdateWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type HotelAmenityUncheckedUpdateWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type HotelAmenityUncheckedUpdateManyWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type HotelPolicyUpdateWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type HotelPolicyUncheckedUpdateWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type HotelPolicyUncheckedUpdateManyWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type BookingCreateManyRoomInput = {
    id?: string
    userId: string
    checkIn: Date | string
    checkOut: Date | string
    status?: string
    total: number
    guestName?: string | null
    guestEmail?: string | null
    guestPhone?: string | null
    guestCount?: number
    specialRequests?: string | null
    holdExpiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type RoomAmenityCreateManyRoomInput = {
    id?: string
    name: string
  }

  export type BookingUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    guestName?: NullableStringFieldUpdateOperationsInput | string | null
    guestEmail?: NullableStringFieldUpdateOperationsInput | string | null
    guestPhone?: NullableStringFieldUpdateOperationsInput | string | null
    guestCount?: IntFieldUpdateOperationsInput | number
    specialRequests?: NullableStringFieldUpdateOperationsInput | string | null
    holdExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    payments?: PaymentUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    guestName?: NullableStringFieldUpdateOperationsInput | string | null
    guestEmail?: NullableStringFieldUpdateOperationsInput | string | null
    guestPhone?: NullableStringFieldUpdateOperationsInput | string | null
    guestCount?: IntFieldUpdateOperationsInput | number
    specialRequests?: NullableStringFieldUpdateOperationsInput | string | null
    holdExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    guestName?: NullableStringFieldUpdateOperationsInput | string | null
    guestEmail?: NullableStringFieldUpdateOperationsInput | string | null
    guestPhone?: NullableStringFieldUpdateOperationsInput | string | null
    guestCount?: IntFieldUpdateOperationsInput | number
    specialRequests?: NullableStringFieldUpdateOperationsInput | string | null
    holdExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomAmenityUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RoomAmenityUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RoomAmenityUncheckedUpdateManyWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentCreateManyBookingInput = {
    id?: string
    amount: number
    currency?: string
    status?: string
    provider?: string
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    razorpaySignature?: string | null
    refundId?: string | null
    refundStatus?: string | null
    refundedAmount?: number | null
    failureReason?: string | null
    refundLockToken?: string | null
    refundLockExpiresAt?: Date | string | null
    refundAttempts?: number
    refundCreateAttemptedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    refundId?: NullableStringFieldUpdateOperationsInput | string | null
    refundStatus?: NullableStringFieldUpdateOperationsInput | string | null
    refundedAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    refundLockToken?: NullableStringFieldUpdateOperationsInput | string | null
    refundLockExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundAttempts?: IntFieldUpdateOperationsInput | number
    refundCreateAttemptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    refundId?: NullableStringFieldUpdateOperationsInput | string | null
    refundStatus?: NullableStringFieldUpdateOperationsInput | string | null
    refundedAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    refundLockToken?: NullableStringFieldUpdateOperationsInput | string | null
    refundLockExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundAttempts?: IntFieldUpdateOperationsInput | number
    refundCreateAttemptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    refundId?: NullableStringFieldUpdateOperationsInput | string | null
    refundStatus?: NullableStringFieldUpdateOperationsInput | string | null
    refundedAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    refundLockToken?: NullableStringFieldUpdateOperationsInput | string | null
    refundLockExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundAttempts?: IntFieldUpdateOperationsInput | number
    refundCreateAttemptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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