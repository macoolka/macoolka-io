/**
 * Collection for String
 * @desczh
 * 文本类型集合
 * @file
 */
import * as t from 'io-ts'
import { pipe } from 'fp-ts/lib/pipeable'
import { isString } from 'macoolka-predicate'
import * as O from 'fp-ts/lib/Option'
import {
    isEmail, isIpV4, isIpV6, isUUID, isUrl, maxLength,
    minLength, match
} from 'macoolka-predicate/lib/string'
import { NameSplit } from './Constant'
/**
 * @since 0.2.0
 */
export interface StringMinLengthBrand {
    readonly StringMinLength: unique symbol
}
/**
 * @since 0.2.0
 */
export interface StringMatchBrand {
    readonly StringMatch: unique symbol
}
/**
 * @since 0.2.0
 */
export interface StringMaxLengthBrand {
    readonly StringMaxLength: unique symbol
}
/**
 * @since 0.2.0
 */
export interface EMailBrand {
    readonly EMail: unique symbol
}
/**
 * @since 0.2.0
 */
export interface NonEmptyStringBrand {
    readonly NonEmptyString: unique symbol
}
/**
 * @since 0.2.0
 */
export type NonEmptyString = t.Branded<string, NonEmptyStringBrand>
/**
 * @since 0.2.0
 */
export interface NonEmptyStringC extends t.Type<NonEmptyString, string, unknown> { }

/**
 * A codec that succeeds if a string is not empty
 * @desczh
 * 非空文本
 * @example
 * import { NonEmptyString } from 'macoolka-io'
 * import { right,isLeft } from 'fp-ts/lib/Either'
 *
 * assert.deepStrictEqual(NonEmptyString.decode('a'), right('a'))
 * assert(isLeft(NonEmptyString.decode('')))
 *
 * @since 0.2.0
 */
export const nonEmptyString: NonEmptyStringC = t.brand(
    t.string,
    (s): s is NonEmptyString => s.length > 0,
    'NonEmptyString'
)

/**
 * A codec that succeeds if a string min length is given value.
 * @desczh
 * 校验文本最小长度
 * @example
 * import { stringMinLength } from 'macoolka-io'
 * import { right,isLeft } from 'fp-ts/lib/Either'
 *
 * expect(stringMinLength(3).decode('123')).toEqual(right('123'))
 * expect(isLeft(stringMinLength(3).decode('12'))).toEqual(true)
 * @since 0.2.0
 */
export const stringMinLength = (_minLength: number) => new t.Type<string, string, unknown>(
    ['stringMinLength', _minLength].join(NameSplit),
    t.string.is,
    (u, c) => {
        return pipe(
            u,
            O.fromPredicate(isString),
            O.chain(value => minLength(_minLength)(value) ? O.some(value) : O.none),
            O.fold(
                () => t.failure(u, c),
                value => t.success(value)
            )
        )
    },
    String
)
/**
 * A codec that succeeds if a string max length is given value.
 * @desczh
 * 校验文本最大长度
 * @example
 * import { stringMaxLength } from 'macoolka-io'
 * import { right,isLeft } from 'fp-ts/lib/Either'
 *
 * expect(t.stringMaxLength(3).decode('123')).toEqual(right('123'))
 * expect(isLeft(t.stringMaxLength(3).decode('1234'))).toEqual(true)
 * @since 0.2.0
 */
export const stringMaxLength = (_maxLength: number) => new t.Type<string, string, unknown>(
    ['stringMaxLength', _maxLength].join(NameSplit),
    t.string.is,
    (u, c) => {
        return pipe(
            u,
            O.fromPredicate(isString),
            O.chain(value => maxLength(_maxLength)(value) ? O.some(value) : O.none),
            O.fold(
                () => t.failure(u, c),
                value => t.success(value)
            )
        )
    },
    String
)
/**
 * A codec that succeeds if a string match a RegExp.
 * @desczh
 * 校验文本匹配正则表达式
 * @example
 * import { stringMatch } from 'macoolka-io'
 * import { right,isLeft } from 'fp-ts/lib/Either'
 *
 * expect(stringMatch(/^A/).decode('ABC')).toEqual(right('ABC'))
 * expect(isLeft(stringMatch(/^A/).decode('12'))).toEqual(true)
 * @since 0.2.0
 */
export const stringMatch = (regexp: RegExp) => new t.Type<string, string, unknown>(
    ['stringMatch', regexp].join(NameSplit),
    t.string.is,
    (u, c) => {
        return pipe(
            u,
            O.fromPredicate(isString),
            O.chain(value => match(regexp)(value) ? O.some(value) : O.none),
            O.fold(
                () => t.failure(u, c),
                value => t.success(value)
            )
        )
    },
    String
)

/**
 * @since 0.2.0
 */
export interface UUIDBrand {
    readonly UUID: unique symbol
}

/**
 * @since 0.2.0
 */
export type UUID = t.Branded<string, UUIDBrand>

/**
 * A codec that succeeds if a string is UUID.
 * @desczh
 * 校验文本是UUID
 * @example
 * import { uuid } from 'macoolka-io'
 * import { right,isLeft } from 'fp-ts/lib/Either'
 *
 * @since 0.2.0
 */
export const uuid = t.brand(t.string, (s): s is UUID => isUUID(s), 'UUID')

/**
 * @since 0.2.0
 */
export interface EmailBrand {
    readonly email: unique symbol
}
/**
 * @since 0.2.0
 */
export type email = t.Branded<string, EmailBrand>
/**
 * A codec that succeeds if a string is EMAIL.
 * @desczh
 * 校验文本是EMAIL
 * @example
 * import { email } from 'macoolka-io'
 * import { right,isLeft } from 'fp-ts/lib/Either'
 *
 * expect(email.decode('a@mail.com')).toEqual(right('a@mail.com'))
 * expect(isLeft(email.decode('12'))).toEqual(true)
 * @since 0.2.0
 */
export const email = t.brand(t.string, (s): s is email => isEmail(s), 'email')

/**
 * @since 0.2.0
 */
export interface IpV4Brand {
    readonly ipv4: unique symbol
}
/**
 * @since 0.2.0
 */
export type ipv4 = t.Branded<string, IpV4Brand>
/**
 * A codec that succeeds if a string is IPV4.
 * @desczh
 * 校验文本是IPV4
 * @example
 * import { ipv4 } from 'macoolka-io'
 * import { right,isLeft } from 'fp-ts/lib/Either'
 *
 * expect(ipv4.decode('8.8.8.8')).toEqual(right('8.8.8.8'))
 * expect(isLeft(ipv4.decode('12'))).toEqual(true)
 *
 * @since 0.2.0
 */
export const ipv4 = t.brand(t.string, (s): s is ipv4 => isIpV4(s), 'ipv4')

/**
 * @since 0.2.0
 */
export interface IpV6Brand {
    readonly ipv6: unique symbol
}
/**
 * @since 0.2.0
 */
export type ipv6 = t.Branded<string, IpV6Brand>
/**
 * A codec that succeeds if a string is IPV6.
 * @desczh
 * 校验文本是IPV6
 * @example
 * import { ipv6 } from 'macoolka-io'
 * import { right,isLeft } from 'fp-ts/lib/Either'
 *
 * expect(ipv6.decode('2409:8a15:244a:a780:b0f5:8e9a:2c2e:5ce2')).toEqual(right('2409:8a15:244a:a780:b0f5:8e9a:2c2e:5ce2'))
 * expect(isLeft(ipv6.decode('8.8.8.8'))).toEqual(true)
 * @since 0.2.0
 */
export const ipv6 = t.brand(t.string, (s): s is ipv6 => isIpV6(s), 'ipv6')
/**
 * @since 0.2.0
 */
export interface UrlBrand {
    readonly Url: unique symbol
}
/**
 * @since 0.2.0
 */
export type Url = t.Branded<string, UrlBrand>
/**
 * A codec that succeeds if a string is url.
 * @desczh
 * 校验文本是url
 * @example
 * import { url } from 'macoolka-io'
 * import { right,isLeft } from 'fp-ts/lib/Either'
 *
 * expect(url.decode('http://bing.com')).toEqual(right('http://bing.com'))
 * expect(isLeft(url.decode('8.8.8.8'))).toEqual(true)
 * @since 0.2.0
 */
export const url = t.brand(t.string, (s): s is Url => isUrl(s), 'Url')
