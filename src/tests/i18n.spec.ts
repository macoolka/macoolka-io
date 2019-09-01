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
    }, 'required'),
    t.partial({
        city: t.union([t.literal('beijing'), t.literal('london')])
    })
], 'User'
)
const result=
`Invalid value undefined supplied to : User/0: required/name: (stringMaxLength=8 & stringMinLength=2)/0: string max length=8
Invalid value undefined supplied to : User/0: required/name: (stringMaxLength=8 & stringMinLength=2)/1: string min length=2
Invalid value undefined supplied to : User/0: required/int: integer
Invalid value undefined supplied to : User/0: required/match: string match
Invalid value undefined supplied to : User/0: required/maxLength: string max length=1
Invalid value undefined supplied to : User/0: required/minLenght: string min length=1
Invalid value undefined supplied to : User/0: required/minValue: number min value=1
Invalid value undefined supplied to : User/0: required/maxValue: number max value=1
Invalid value undefined supplied to : User/0: required/url: Url
Invalid value undefined supplied to : User/0: required/uuid: UUID
Invalid value undefined supplied to : User/0: required/email: EMail
Invalid value undefined supplied to : User/0: required/ipv4: IPV4
Invalid value undefined supplied to : User/0: required/ipv6: IPV6
Invalid value undefined supplied to : User/0: required/number: number
Invalid value undefined supplied to : User/0: required/date: ISO Date
Invalid value undefined supplied to : User/0: required/literal: literal
Invalid value undefined supplied to : User/0: required/keyof: "a" | "b"
Invalid value undefined supplied to : User/0: required/union: ("a" | "b")/0: literal
Invalid value undefined supplied to : User/0: required/union: ("a" | "b")/1: literal
Invalid value undefined supplied to : User/0: required/string: string
Invalid value undefined supplied to : User/0: required/boolean: boolean
Invalid value undefined supplied to : User/0: required/array: Array<string>
Invalid value undefined supplied to : User/0: required/nonEmptyArray: NonEmptyArray<string>
Invalid value undefined supplied to : User/0: required/nonEmptyString: NonEmptyString`
describe('i18n io', () => {
    it('with locale en', () => {
        const value = {}
        pipe(
            R.decode(value),
            E.mapLeft(a => {
                expect(t.show(a)({})).toEqual(result)
            })
        )
    })
})