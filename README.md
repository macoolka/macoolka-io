<p align="center">
I18N Runtime type system for IO decoding/encoding.
</p>

<p align="center">
  <a href="https://travis-ci.org/macoolka/macoolka-io">
    <img src="https://img.shields.io/travis/macoolka/macoolka-io/master.svg?style=flat-square" alt="build status" height="20">
  </a>
  <a href="https://david-dm.org/macoolka-io">
    <img src="https://img.shields.io/david/macoolka/macoolka-io.svg?style=flat-square" alt="dependency status" height="20">
  </a>
  <a href="https://www.npmjs.com/package/macoolka-io">
    <img src="https://img.shields.io/npm/dm/macoolka-io.svg" alt="npm downloads" height="20">
  </a>
</p>

# macoolka-io

`macoolka-io` is Runtime type system for IO decoding/encoding.

It extend on [io-ts](https://github.com/gcanti/io-ts).

It suport i18n.

It provide some common type 


**Table of contents**

- [Installation](#installation)
- [Documentation](#documentation)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->



**Inspired by**

- [io-ts](https://github.com/gcanti/io-ts)


# Installation

To install the stable version:

```
npm install macoolka-io
```


# Consuming 

Format a i18n message (english)

```ts
import * as t from 'macoolka-io'
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
```

Format a i18n message (chinese)


```ts

import * as t from 'macoolka-io'
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

```

customer a i18n type


```ts
import * as t from 'macoolka-io'
import * as E from 'fp-ts/lib/Either'
import { pipe } from 'fp-ts/lib/pipeable'
export const defaultOption = {
    defaultLanguage: 'en',
    locale: 'en',
    languages: ['en', 'zh'],
    data: {
        en: {
            'macoolka.customer.error': 'error value:{value}'
        },
        zh: {
            'macoolka.customer.error': '错误的值 :{value}'
        },
    }
}
/**
 * Customer a i18n codec
 */
const customer = new t.Type<string>(
    'customer',
    t.string.is,
    (u, c) => {
        return pipe(
            t.string.validate(u, c),
            E.chain(_ => {
                return u === 'abc' ?
                    t.failMessage<string>([{
                        id: 'macoolka.customer.error',
                        value: {
                            value: u
                        }
                    }], c)
                    : t.success<any>(u)
            })
        )

    },
    t.string.encode,
)

describe('customer i18n io', () => {
    it('ok', () => {
        const value = 'ok'
        pipe(
            customer.decode(value),
            as => expect(E.isRight(as)).toBeTruthy()
        )
    })
    it('error default', () => {
        const value = 'abc'
        pipe(
            customer.decode(value),
            as => {
                expect(E.isLeft(as)).toBeTruthy()
                return as
            },
            E.mapLeft(a => {
                expect(t.show(a)({ i18n: defaultOption })).toEqual(`error value:abc : customer`)
            })
        )
    })
    it('error zh', () => {
        const value = 'abc'
        pipe(
            customer.decode(value),
            as => {
                expect(E.isLeft(as)).toBeTruthy()
                return as
            },
            E.mapLeft(a => {
                expect(t.show(a)({ i18n: { ...defaultOption, locale: 'zh' } })).toEqual(`错误的值 :abc : customer`)
            })
        )
    })
    it('error macoolka-io', () => {
        const value = 1
        pipe(
            customer.decode(value),
            as => {
                expect(E.isLeft(as)).toBeTruthy()
                return as
            },
            E.mapLeft(a => {
                expect(t.show(a)({ i18n: { ...defaultOption, locale: 'zh' } })).toEqual(`无效的值1 : customer`)
            })
        )
    })

})

```

common type

```ts
import * as t from 'macoolka-io';
import { right,isLeft } from 'fp-ts/lib/Either';
describe('io', () => {
    it('withDefault', () => {
        const M = t.withDefault(t.string, '123');
        expect(M.decode(null)).toEqual(right('123'));
        expect(M.decode(null)).toEqual(right('123'));
        expect(M.decode('4')).toEqual(right('4'));

        const MA=t.type({
            name:t.string,
            names:t.array(t.string)
        })
   
        const MB=t.type({
            name:t.withDefault(t.string,'1'),
            names:t.withDefault(t.array(t.string),[])
        })
        expect(MB.decode({})).toEqual(right({name:'1',names:[]}));
        expect(MB.decode({name:'2'})).toEqual(right({name:'2',names:[]}));
        expect(MB.decode({names:['1']})).toEqual(right({name:'1',names:['1']}));
        expect(MB.decode({names:['3'],name:'3'})).toEqual(right({name:'3',names:['3']}));
        expect(isLeft(MA.decode({}))).toEqual(true);
     });
 
    it('dateFromNumber', () => {
        const d = new Date(2000, 1, 1);
        const millis = d.getTime();
        expect(t.dateFromNumber.decode(millis)).toEqual(right(d));
    });
    it('dateFromISOString', () => {
        const d = new Date(2000, 1, 1);
        const s = d.toISOString();
        expect(t.dateFromISOString.decode(s)).toEqual(right(d));
    });
    it('StringMaxLength',()=>{
        expect(t.stringMaxLength(3).decode('123')).toEqual(right('123'))
        expect(isLeft(t.stringMaxLength(3).decode('1234'))).toEqual(true)
    })
    it('stringMinLength',()=>{
        expect(t.stringMinLength(3).decode('123')).toEqual(right('123'))
        expect(isLeft(t.stringMinLength(3).decode('12'))).toEqual(true)
    })
    it('StringMatch',()=>{
        expect(t.stringMatch(/^A/).decode('ABC')).toEqual(right('ABC'))
        expect(isLeft(t.stringMatch(/^A/).decode('12'))).toEqual(true)
    })
    it('email',()=>{
        expect(t.email.decode('a@mail.com')).toEqual(right('a@mail.com'))
        expect(isLeft(t.email.decode('12'))).toEqual(true)
    }) 
    it('ipv4',()=>{
        expect(t.ipv4.decode('8.8.8.8')).toEqual(right('8.8.8.8'))
        expect(isLeft(t.ipv4.decode('12'))).toEqual(true)
    })  
    it('ipv6',()=>{
        expect(t.ipv6.decode('2409:8a15:244a:a780:b0f5:8e9a:2c2e:5ce2')).toEqual(right('2409:8a15:244a:a780:b0f5:8e9a:2c2e:5ce2'))
        expect(isLeft(t.ipv6.decode('8.8.8.8'))).toEqual(true)
    })  
    it('url',()=>{
        expect(t.url.decode('http://bing.com')).toEqual(right('http://bing.com'))
        expect(isLeft(t.url.decode('8.8.8.8'))).toEqual(true)
    }) 
     it('UUID',()=>{
        expect(t.uuid.decode('00000000-0000-0000-0000-000000000000')).toEqual(right('00000000-0000-0000-0000-000000000000'))
        expect(isLeft(t.uuid.decode('12'))).toEqual(true)
    })
    it('NumberMaxValue',()=>{
        expect(t.numberMaxValue(3).decode(3)).toEqual(right(3))
        expect(isLeft(t.numberMaxValue(3).decode(4))).toEqual(true)
    })
    it('NumberMinValue',()=>{
        expect(t.numberMinValue(3).decode(3)).toEqual(right(3))
        expect(isLeft(t.numberMinValue(3).decode(2))).toEqual(true)
    })
});

```


# Documentation

- [Docs](https://macoolka.github.io/macoolka-predicate)
- [API Reference](https://macoolka.github.io/macoolka-predicate/docs/Modules)
- [API Reference (中文)](https://macoolka.github.io/macoolka-predicate/docs/模块)


# License

The MIT License (MIT)
