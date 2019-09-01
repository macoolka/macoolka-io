---
title: date.ts
nav_order: 3
parent: 模块
---

# 概述

日期类型集合

---

<h2 class="text-delta">目录</h2>

- [DateFromISOStringC (接口)](#datefromisostringc-%E6%8E%A5%E5%8F%A3)
- [DateFromNumberC (接口)](#datefromnumberc-%E6%8E%A5%E5%8F%A3)
- [DateFromUnixTimeC (接口)](#datefromunixtimec-%E6%8E%A5%E5%8F%A3)
- [dateFromISOString (常量)](#datefromisostring-%E5%B8%B8%E9%87%8F)
- [dateFromNumber (常量)](#datefromnumber-%E5%B8%B8%E9%87%8F)
- [dateFromUnixTime (常量)](#datefromunixtime-%E5%B8%B8%E9%87%8F)

---

# DateFromISOStringC (接口)

**签名**

```ts
interface DateFromISOStringC extends Type {}
```

v0.2.0 中添加

# DateFromNumberC (接口)

**签名**

```ts
interface DateFromNumberC extends Type {}
```

v0.2.0 中添加

# DateFromUnixTimeC (接口)

**签名**

```ts
interface DateFromUnixTimeC extends Type {}
```

v0.2.0 中添加

# dateFromISOString (常量)

转换 ISOString 到 Date

**签名**

```ts

export const dateFromISOString: DateFromISOStringC = ...

```

**示例**

```ts
import { DateFromISOString } from 'macoolka-io'
import { right } from 'fp-ts/lib/Either'

const date = new Date(1973, 10, 30)
const input = date.toISOString()
assert.deepStrictEqual(DateFromISOString.decode(input), right(date))
```

v0.2.0 中添加

# dateFromNumber (常量)

转换 Number 到 Date

**签名**

```ts

export const dateFromNumber: DateFromNumberC = ...

```

**示例**

```ts
import { DateFromNumber } from 'macoolka-io'
import { right } from 'fp-ts/lib/Either'

const date = new Date(1973, 10, 30)
const input = date.getTime()
assert.deepStrictEqual(DateFromNumber.decode(input), right(date))
```

v0.2.0 中添加

# dateFromUnixTime (常量)

转换 UnixTime 到 Date

**签名**

```ts

export const dateFromUnixTime: DateFromUnixTimeC = ...

```

**示例**

```ts
import { DateFromUnixTime } from 'macoolka-io'
import { right } from 'fp-ts/lib/Either'

const date = new Date(1973, 10, 30)
const input = date.getTime() / 1000
assert.deepStrictEqual(DateFromUnixTime.decode(input), right(date))
```

v0.2.0 中添加
