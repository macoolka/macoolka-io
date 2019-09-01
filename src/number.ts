/**
 * Collection for Number
 * @desczh
 * 数值类型集合
 * @file
 */
import * as t from 'io-ts'
import { isNumber } from 'macoolka-predicate'
import { pipe } from 'fp-ts/lib/pipeable'
import * as O from 'fp-ts/lib/Option'
import { NameSplit } from './Constant'
/**
 * A codec that succeeds if a number min value is given value.
 * @desczh
 * 校验数值最小值
 * @example
 * import { numberMinValue } from 'macoolka-io'
 * import { right,isLeft } from 'fp-ts/lib/Either'
 *
 * expect(numberMinValue(3).decode(3)).toEqual(right(3))
 * expect(isLeft(numberMinValue(3).decode(2))).toEqual(true)
 * @since 0.2.0
 */
export const numberMinValue = (minValue: number) => new t.Type<number, number, unknown>(
    ['numberMinValue', minValue].join(NameSplit),
    t.number.is,
    (u, c) => {
        return pipe(
            u,
            O.fromPredicate(isNumber),
            O.chain(value => value >= minValue ? O.some(value) : O.none),
            O.fold(
                () => t.failure(u, c),
                value => t.success(value)
            )
        )
    },
    Number
)
/**
 * A codec that succeeds if a number max value is given value.
 * @desczh
 * 校验数值最大值
 * @example
 * import { numberMaxValue } from 'macoolka-io'
 * import { right,isLeft } from 'fp-ts/lib/Either'
 *
 * expect(t.numberMaxValue(3).decode(3)).toEqual(right(3))
 * expect(isLeft(t.numberMaxValue(3).decode(4))).toEqual(true)
 * @since 0.2.0
 */
export const numberMaxValue = (maxValue: number) => new t.Type<number, number, unknown>(
    ['numberMaxValue', maxValue].join(NameSplit),
    t.number.is,
    (u, c) => {
        return pipe(
            u,
            O.fromPredicate(isNumber),
            O.chain(value => value <= maxValue ? O.some(value) : O.none),
            O.fold(
                () => t.failure(u, c),
                value => t.success(value)
            )
        )
    },
    Number
)
