import * as t from '../io'
import * as E from 'fp-ts/lib/Either'
import { pipe } from 'fp-ts/lib/pipeable'
const R =  t.intersection([
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
        array: t.array(t.string)
    }, 'required'),
    t.partial({
        city: t.union([t.literal('beijing'), t.literal('london')])
    })
], 'User'
)
const result=
`Invalid value 456 supplied to : User/0: required/name: (stringMaxLength=8 & stringMinLength=2)/0: stringMaxLength=8
Invalid value 456 supplied to : User/0: required/name: (stringMaxLength=8 & stringMinLength=2)/1: stringMinLength=2
Invalid value undefined supplied to : User/0: required/int: Integer
Invalid value undefined supplied to : User/0: required/match: stringMatch=/^A/
Invalid value undefined supplied to : User/0: required/maxLength: stringMaxLength=1
Invalid value undefined supplied to : User/0: required/minLenght: stringMinLength=1
Invalid value undefined supplied to : User/0: required/minValue: numberMinValue=1
Invalid value undefined supplied to : User/0: required/maxValue: numberMaxValue=1
Invalid value undefined supplied to : User/0: required/url: Url
Invalid value undefined supplied to : User/0: required/uuid: UUID
Invalid value undefined supplied to : User/0: required/email: email
Invalid value undefined supplied to : User/0: required/ipv4: ipv4
Invalid value undefined supplied to : User/0: required/ipv6: ipv6
Invalid value undefined supplied to : User/0: required/number: number
Invalid value undefined supplied to : User/0: required/date: dateFromISOString
Invalid value undefined supplied to : User/0: required/literal: "1"
Invalid value undefined supplied to : User/0: required/keyof: "a" | "b"
Invalid value undefined supplied to : User/0: required/union: ("a" | "b")/0: "a"
Invalid value undefined supplied to : User/0: required/union: ("a" | "b")/1: "b"
Invalid value undefined supplied to : User/0: required/string: string
Invalid value undefined supplied to : User/0: required/boolean: boolean
Invalid value undefined supplied to : User/0: required/array: Array<string>`
describe('io', () => {
    it('show', () => {
        const value = {
            name: 456,
            age: '8',
            amount: 'i',
            birthday: '98',
            desc: 123,
        }
        pipe(
            R.decode(value),
            E.mapLeft(a=>{
                expect(t.show(a)).toEqual(result)
            })
        )
    })
})