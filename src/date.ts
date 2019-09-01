/**
 * Collection for Date
 * @desczh
 * 日期类型集合
 * @file
 */
import * as t from 'io-ts'
import { either } from 'fp-ts/lib/Either'

/**
 * @since 0.2.0
 */
export interface DateFromISOStringC extends t.Type<Date, string, unknown> {}

/**
 * Get Date From ISOString
 * @desczh
 * 转换ISOString到Date
 * @example
 * import { DateFromISOString } from 'macoolka-io'
 * import { right } from 'fp-ts/lib/Either'
 *
 * const date = new Date(1973, 10, 30)
 * const input = date.toISOString()
 * assert.deepStrictEqual(DateFromISOString.decode(input), right(date))
 *
 * @since 0.2.0
 */
export const dateFromISOString: DateFromISOStringC = new t.Type<Date, string, unknown>(
  'dateFromISOString',
  (u): u is Date => u instanceof Date,
  (u, c) =>
    either.chain(t.string.validate(u, c), s => {
      const d = new Date(s)
      return isNaN(d.getTime()) ? t.failure(u, c) : t.success(d)
    }),
  a => a.toISOString()
)

/**
 * @since 0.2.0
 */
export interface DateFromNumberC extends t.Type<Date, number, unknown> {}

/**
 * Get Date From Number
 * @desczh
 * 转换Number到Date
 * @example
 * import { DateFromNumber } from 'macoolka-io'
 * import { right } from 'fp-ts/lib/Either'
 *
 * const date = new Date(1973, 10, 30)
 * const input = date.getTime()
 * assert.deepStrictEqual(DateFromNumber.decode(input), right(date))
 *
 * @since 0.2.0
 */
export const dateFromNumber: DateFromNumberC = new t.Type<Date, number, unknown>(
  'dateFromNumber',
  (u): u is Date => u instanceof Date,
  (u, c) =>
    either.chain(t.number.validate(u, c), n => {
      const d = new Date(n)
      return isNaN(d.getTime()) ? t.failure(u, c) : t.success(d)
    }),
  a => a.getTime()
)

/**
 * @since 0.2.0
 */
export interface DateFromUnixTimeC extends t.Type<Date, number, unknown> {}

/**
 * Get Date From UnixTime
 * @desczh
 * 转换UnixTime到Date
 * @example
 * import { DateFromUnixTime } from 'macoolka-io'
 * import { right } from 'fp-ts/lib/Either'
 *
 * const date = new Date(1973, 10, 30)
 * const input = date.getTime() / 1000
 * assert.deepStrictEqual(DateFromUnixTime.decode(input), right(date))
 *
 * @since 0.2.0
 */
export const dateFromUnixTime: DateFromUnixTimeC = new t.Type<Date, number, unknown>(
  'dateFromUnixTime',
  (u): u is Date => u instanceof Date,
  (u, c) =>
    either.chain(t.Int.validate(u, c), n => {
      const d = new Date(n * 1000)
      return isNaN(d.getTime()) ? t.failure(u, c) : t.success(d)
    }),
  a => a.getTime() / 1000
)
