---
title: string.ts
nav_order: 7
parent: 模块
---

# 概述

文本类型集合

---

<h2 class="text-delta">目录</h2>

- [EMailBrand (接口)](#emailbrand-%E6%8E%A5%E5%8F%A3)
- [EmailBrand (接口)](#emailbrand-%E6%8E%A5%E5%8F%A3)
- [IpV4Brand (接口)](#ipv4brand-%E6%8E%A5%E5%8F%A3)
- [IpV6Brand (接口)](#ipv6brand-%E6%8E%A5%E5%8F%A3)
- [NonEmptyStringBrand (接口)](#nonemptystringbrand-%E6%8E%A5%E5%8F%A3)
- [NonEmptyStringC (接口)](#nonemptystringc-%E6%8E%A5%E5%8F%A3)
- [StringMatchBrand (接口)](#stringmatchbrand-%E6%8E%A5%E5%8F%A3)
- [StringMaxLengthBrand (接口)](#stringmaxlengthbrand-%E6%8E%A5%E5%8F%A3)
- [StringMinLengthBrand (接口)](#stringminlengthbrand-%E6%8E%A5%E5%8F%A3)
- [UUIDBrand (接口)](#uuidbrand-%E6%8E%A5%E5%8F%A3)
- [UrlBrand (接口)](#urlbrand-%E6%8E%A5%E5%8F%A3)
- [NonEmptyString (类型)](#nonemptystring-%E7%B1%BB%E5%9E%8B)
- [UUID (类型)](#uuid-%E7%B1%BB%E5%9E%8B)
- [Url (类型)](#url-%E7%B1%BB%E5%9E%8B)
- [email (类型)](#email-%E7%B1%BB%E5%9E%8B)
- [ipv4 (类型)](#ipv4-%E7%B1%BB%E5%9E%8B)
- [ipv6 (类型)](#ipv6-%E7%B1%BB%E5%9E%8B)
- [email (常量)](#email-%E5%B8%B8%E9%87%8F)
- [ipv4 (常量)](#ipv4-%E5%B8%B8%E9%87%8F)
- [ipv6 (常量)](#ipv6-%E5%B8%B8%E9%87%8F)
- [nonEmptyString (常量)](#nonemptystring-%E5%B8%B8%E9%87%8F)
- [url (常量)](#url-%E5%B8%B8%E9%87%8F)
- [uuid (常量)](#uuid-%E5%B8%B8%E9%87%8F)
- [stringMatch (函数)](#stringmatch-%E5%87%BD%E6%95%B0)
- [stringMaxLength (函数)](#stringmaxlength-%E5%87%BD%E6%95%B0)
- [stringMinLength (函数)](#stringminlength-%E5%87%BD%E6%95%B0)

---

# EMailBrand (接口)

**签名**

```ts
interface EMailBrand {
  readonly EMail: unique symbol
}
```

v0.2.0 中添加

# EmailBrand (接口)

**签名**

```ts
interface EmailBrand {
  readonly email: unique symbol
}
```

v0.2.0 中添加

# IpV4Brand (接口)

**签名**

```ts
interface IpV4Brand {
  readonly ipv4: unique symbol
}
```

v0.2.0 中添加

# IpV6Brand (接口)

**签名**

```ts
interface IpV6Brand {
  readonly ipv6: unique symbol
}
```

v0.2.0 中添加

# NonEmptyStringBrand (接口)

**签名**

```ts
interface NonEmptyStringBrand {
  readonly NonEmptyString: unique symbol
}
```

v0.2.0 中添加

# NonEmptyStringC (接口)

**签名**

```ts
interface NonEmptyStringC extends Type {}
```

v0.2.0 中添加

# StringMatchBrand (接口)

**签名**

```ts
interface StringMatchBrand {
  readonly StringMatch: unique symbol
}
```

v0.2.0 中添加

# StringMaxLengthBrand (接口)

**签名**

```ts
interface StringMaxLengthBrand {
  readonly StringMaxLength: unique symbol
}
```

v0.2.0 中添加

# StringMinLengthBrand (接口)

**签名**

```ts
interface StringMinLengthBrand {
  readonly StringMinLength: unique symbol
}
```

v0.2.0 中添加

# UUIDBrand (接口)

**签名**

```ts
interface UUIDBrand {
  readonly UUID: unique symbol
}
```

v0.2.0 中添加

# UrlBrand (接口)

**签名**

```ts
interface UrlBrand {
  readonly Url: unique symbol
}
```

v0.2.0 中添加

# NonEmptyString (类型)

**签名**

```ts
export type NonEmptyString = t.Branded<string, NonEmptyStringBrand>
```

v0.2.0 中添加

# UUID (类型)

**签名**

```ts
export type UUID = t.Branded<string, UUIDBrand>
```

v0.2.0 中添加

# Url (类型)

**签名**

```ts
export type Url = t.Branded<string, UrlBrand>
```

v0.2.0 中添加

# email (类型)

**签名**

```ts
export type email = t.Branded<string, EmailBrand>
```

v0.2.0 中添加

# ipv4 (类型)

**签名**

```ts
export type ipv4 = t.Branded<string, IpV4Brand>
```

v0.2.0 中添加

# ipv6 (类型)

**签名**

```ts
export type ipv6 = t.Branded<string, IpV6Brand>
```

v0.2.0 中添加

# email (常量)

校验文本是 EMAIL

**签名**

```ts

export const email: t.BrandC<t.StringC, EmailBrand> = ...

```

**示例**

```ts
import { email } from 'macoolka-io'
import { right, isLeft } from 'fp-ts/lib/Either'

expect(email.decode('a@mail.com')).toEqual(right('a@mail.com'))
expect(isLeft(email.decode('12'))).toEqual(true)
```

v0.2.0 中添加

# ipv4 (常量)

校验文本是 IPV4

**签名**

```ts

export const ipv4: t.BrandC<t.StringC, IpV4Brand> = ...

```

**示例**

```ts
import { ipv4 } from 'macoolka-io'
import { right, isLeft } from 'fp-ts/lib/Either'

expect(ipv4.decode('8.8.8.8')).toEqual(right('8.8.8.8'))
expect(isLeft(ipv4.decode('12'))).toEqual(true)
```

v0.2.0 中添加

# ipv6 (常量)

校验文本是 IPV6

**签名**

```ts

export const ipv6: t.BrandC<t.StringC, IpV6Brand> = ...

```

**示例**

```ts
import { ipv6 } from 'macoolka-io'
import { right, isLeft } from 'fp-ts/lib/Either'

expect(ipv6.decode('2409:8a15:244a:a780:b0f5:8e9a:2c2e:5ce2')).toEqual(right('2409:8a15:244a:a780:b0f5:8e9a:2c2e:5ce2'))
expect(isLeft(ipv6.decode('8.8.8.8'))).toEqual(true)
```

v0.2.0 中添加

# nonEmptyString (常量)

非空文本

**签名**

```ts

export const nonEmptyString: NonEmptyStringC = ...

```

**示例**

```ts
import { NonEmptyString } from 'macoolka-io'
import { right, isLeft } from 'fp-ts/lib/Either'

assert.deepStrictEqual(NonEmptyString.decode('a'), right('a'))
assert(isLeft(NonEmptyString.decode('')))
```

v0.2.0 中添加

# url (常量)

校验文本是 url

**签名**

```ts

export const url: t.BrandC<t.StringC, UrlBrand> = ...

```

**示例**

```ts
import { url } from 'macoolka-io'
import { right, isLeft } from 'fp-ts/lib/Either'

expect(url.decode('http://bing.com')).toEqual(right('http://bing.com'))
expect(isLeft(url.decode('8.8.8.8'))).toEqual(true)
```

v0.2.0 中添加

# uuid (常量)

校验文本是 UUID

**签名**

```ts

export const uuid: t.BrandC<t.StringC, UUIDBrand> = ...

```

**示例**

```ts
import { uuid } from 'macoolka-io'
import { right, isLeft } from 'fp-ts/lib/Either'
```

v0.2.0 中添加

# stringMatch (函数)

校验文本匹配正则表达式

**签名**

```ts

export const stringMatch = (regexp: RegExp) => new t.Type<string, string, unknown>(
    ['stringMatch', regexp].join(NameSplit),
    t.string.is,
    (u, c) => ...

```

**示例**

```ts
import { stringMatch } from 'macoolka-io'
import { right, isLeft } from 'fp-ts/lib/Either'

expect(stringMatch(/^A/).decode('ABC')).toEqual(right('ABC'))
expect(isLeft(stringMatch(/^A/).decode('12'))).toEqual(true)
```

v0.2.0 中添加

# stringMaxLength (函数)

校验文本最大长度

**签名**

```ts

export const stringMaxLength = (_maxLength: number) => new t.Type<string, string, unknown>(
    ['stringMaxLength', _maxLength].join(NameSplit),
    t.string.is,
    (u, c) => ...

```

**示例**

```ts
import { stringMaxLength } from 'macoolka-io'
import { right, isLeft } from 'fp-ts/lib/Either'

expect(t.stringMaxLength(3).decode('123')).toEqual(right('123'))
expect(isLeft(t.stringMaxLength(3).decode('1234'))).toEqual(true)
```

v0.2.0 中添加

# stringMinLength (函数)

校验文本最小长度

**签名**

```ts

export const stringMinLength = (_minLength: number) => new t.Type<string, string, unknown>(
    ['stringMinLength', _minLength].join(NameSplit),
    t.string.is,
    (u, c) => ...

```

**示例**

```ts
import { stringMinLength } from 'macoolka-io'
import { right, isLeft } from 'fp-ts/lib/Either'

expect(stringMinLength(3).decode('123')).toEqual(right('123'))
expect(isLeft(stringMinLength(3).decode('12'))).toEqual(true)
```

v0.2.0 中添加
