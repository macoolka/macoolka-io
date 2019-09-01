import * as t from '../i18nIO'
import * as E from 'fp-ts/lib/Either'
import { pipe } from 'fp-ts/lib/pipeable'
const R = t.intersection([
    t.type({
        name: t.intersection([t.stringMaxLength(8), t.stringMinLength(2)]),
        int: t.int,
        match: t.stringMatch(/^A/),
        maxLength: t.stringMaxLength(1),
        minLenght: t.stringMinLength(1),
        minValue: t.numberMinValue(1),
        maxValue: t.numberMaxValue(1),
        url: t.url,
        uuid: t.uuid,
        email: t.email,
        ipv4: t.ipv4,
        ipv6: t.ipv6,
        number: t.number,
        date: t.dateFromISOString,
        literal: t.literal('1'),
        keyof: t.keyof({ 'a': '', "b": '' }),
        union: t.union([t.literal('a'), t.literal('b')]),
        string: t.string,
        boolean: t.boolean,
        array: t.array(t.string),
        nonEmptyArray:t.nonEmptyArray(t.string),
        nonEmptyString:t.nonEmptyString,
    },'必填'),
    t.partial({
        city: t.union([t.literal('beijing'), t.literal('london')])
    })
], '用户'
)
const result=
`无效的值undefined : 用户/0: 必填/name: (stringMaxLength=8 & stringMinLength=2)/0: 最大长度=8
无效的值undefined : 用户/0: 必填/name: (stringMaxLength=8 & stringMinLength=2)/1: 最小长度=2
无效的值undefined : 用户/0: 必填/int: 整型
无效的值undefined : 用户/0: 必填/match: 正则表达式
无效的值undefined : 用户/0: 必填/maxLength: 最大长度=1
无效的值undefined : 用户/0: 必填/minLenght: 最小长度=1
无效的值undefined : 用户/0: 必填/minValue: 最小值=1
无效的值undefined : 用户/0: 必填/maxValue: 最大值=1
无效的值undefined : 用户/0: 必填/url: 网址
无效的值undefined : 用户/0: 必填/uuid: UUID
无效的值undefined : 用户/0: 必填/email: 邮箱
无效的值undefined : 用户/0: 必填/ipv4: IPV4
无效的值undefined : 用户/0: 必填/ipv6: IPV6
无效的值undefined : 用户/0: 必填/number: 浮点型
无效的值undefined : 用户/0: 必填/date: ISO日期
无效的值undefined : 用户/0: 必填/literal: 标量
无效的值undefined : 用户/0: 必填/keyof: "a" | "b"
无效的值undefined : 用户/0: 必填/union: ("a" | "b")/0: 标量
无效的值undefined : 用户/0: 必填/union: ("a" | "b")/1: 标量
无效的值undefined : 用户/0: 必填/string: 字符型
无效的值undefined : 用户/0: 必填/boolean: 布尔型
无效的值undefined : 用户/0: 必填/array: 数组<字符型>
无效的值undefined : 用户/0: 必填/nonEmptyArray: 非空数组<字符型>
无效的值undefined : 用户/0: 必填/nonEmptyString: 非空字符串`
describe('i18n io', () => {
    it('with locale zh', () => {
        const value = {}
        pipe(
            R.decode(value),
            E.mapLeft(a => {
                expect(t.show(a)({i18n:{locale:'zh'}})).toEqual(result)
            })
        )
    })
})