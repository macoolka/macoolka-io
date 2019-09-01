/**
 * Collection for Common type
 * @desczh
 * 通用类型集合
 * @file
 */
import * as t from 'io-ts'
import { pipe } from 'fp-ts/lib/pipeable'
import * as A from 'fp-ts/lib/Array'
import { isNaN } from 'macoolka-predicate'
import { eqString } from 'fp-ts/lib/Eq'
import { merge, showUnknow } from 'macoolka-object'
import * as O from 'fp-ts/lib/Option'
/**
 * apply a default value when the value is null.
 * @desczh
 * 给一个类型赋缺省值
 * @example
 * import * as t from 'macoolka-io'
 * import { right } from 'fp-ts/lib/Either'
 *
 * const M = t.withDefault(t.string, '123');
 * expect(M.decode(null)).toEqual(right('123'));
 * expect(M.decode(null)).toEqual(right('123'));
 * expect(M.decode('4')).toEqual(right('4'));
 *
 * const MA=t.type({
 *     name:t.string,
 *      names:t.array(t.string)
 *  })
 *
 *  const MB=t.type({
 *      name:t.withDefault(t.string,'1'),
 *      names:t.withDefault(t.array(t.string),[])
 *  })
 *  expect(MB.decode({})).toEqual(right({name:'1',names:[]}));
 *  expect(MB.decode({name:'2'})).toEqual(right({name:'2',names:[]}));
 *  expect(MB.decode({names:['1']})).toEqual(right({name:'1',names:['1']}));
 *  expect(MB.decode({names:['3'],name:'3'})).toEqual(right({name:'3',names:['3']}));
 *  expect(isLeft(MA.decode({}))).toEqual(true);
 *
 * @since 0.2.0
 */
export const withDefault = <T extends t.Mixed>(
    type: T, defaultValue: t.OutputOf<T>)
    : t.Type<t.TypeOf<T>, t.OutputOf<T>> => {
    return new t.Type(
        `withDefault(${type.name}, ${JSON.stringify(defaultValue)})`,
        type.is,
        (v, c) => {

            return type.validate(v != null ? v : defaultValue, c)
        },
        type.encode
    )
}

/**
 * @ignore
 */
export function formatValue(v: any): string {
    if (typeof v === 'function') {
        return t.getFunctionName(v)
    }
    if (typeof v === 'number' && !isFinite(v)) {
        if (isNaN(v)) {
            return 'NaN'
        }
        return v > 0 ? 'Infinity' : '-Infinity'
    }
    return showUnknow.show(v)
}

const showRecord = ({ showValue, showDecoder, showKey }: ShowMessage) => (e: t.ValidationError): string => {
    function getContextPath(context: t.Context): string {

        return pipe(
            context as Array<t.ContextEntry>,
            A.map(({ key, type }) => {
                return `${pipe(
                    showKey(key),
                    O.getOrElse(() => key)
                )}: ${pipe(
                    type,
                    showDecoder,
                    O.getOrElse(() => type.name)
                )
                    }`
            }),
            as => as.join('/')
        )
    }
    return `${pipe(
        e.value,
        showValue,
        O.getOrElse(() => `Invalid value ${formatValue(e.value)} supplied to`)
    )} ${getContextPath(e.context)}`
}
/**
 * @since 0.2.0
 */
export interface ShowMessage {
    showValue: (a: unknown) => O.Option<string>
    showDecoder: (a: t.Decoder<any, any>) => O.Option<string>
    showKey: (a: string) => O.Option<string>
}
const defaultShowMessage: ShowMessage = {
    showValue: value => O.some(`Invalid value ${value} supplied to`),
    showDecoder: type => O.some(type.name),
    showKey: key => O.some(key)
}
/**
 * Show Errors to string
 * @desczh
 * 格式化错误到文本
 * @since 0.2.0
 */
export const show = (as: t.Errors, showMessage?: Partial<ShowMessage>): string => {

    const _showMessage: ShowMessage = merge(defaultShowMessage, showMessage)
    return pipe(
        as.map(e => {
            return e.message !== undefined
                ? e.message
                : showRecord(_showMessage)(e)
        }),
        A.uniq(eqString),
        as => as.join('\n')

    )
}
