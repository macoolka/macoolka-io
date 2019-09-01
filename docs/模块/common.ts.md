---
title: common.ts
nav_order: 2
parent: 模块
---

# 概述

通用类型集合

---

<h2 class="text-delta">目录</h2>

- [ShowMessage (接口)](#showmessage-%E6%8E%A5%E5%8F%A3)
- [show (函数)](#show-%E5%87%BD%E6%95%B0)
- [withDefault (函数)](#withdefault-%E5%87%BD%E6%95%B0)

---

# ShowMessage (接口)

**签名**

```ts
interface ShowMessage {
  showDecoder: (a: t.Decoder<any, any>) => O.Option<string>
  showKey: (a: string) => O.Option<string>
  showValue: (a: unknown) => O.Option<string>
}
```

v0.2.0 中添加

# show (函数)

格式化错误到文本

**签名**

```ts

export const show = (as: t.Errors, showMessage?: Partial<ShowMessage>): string => ...

```

v0.2.0 中添加

# withDefault (函数)

给一个类型赋缺省值

**签名**

```ts

export const withDefault = <T extends t.Mixed>(
    type: T, defaultValue: t.OutputOf<T>)
    : t.Type<t.TypeOf<T>, t.OutputOf<T>> => ...

```

**示例**

```ts
import * as t from 'macoolka-io'
import { right } from 'fp-ts/lib/Either'

const M = t.withDefault(t.string, '123')
expect(M.decode(null)).toEqual(right('123'))
expect(M.decode(null)).toEqual(right('123'))
expect(M.decode('4')).toEqual(right('4'))

const MA = t.type({
  name: t.string,
  names: t.array(t.string)
})

const MB = t.type({
  name: t.withDefault(t.string, '1'),
  names: t.withDefault(t.array(t.string), [])
})
expect(MB.decode({})).toEqual(right({ name: '1', names: [] }))
expect(MB.decode({ name: '2' })).toEqual(right({ name: '2', names: [] }))
expect(MB.decode({ names: ['1'] })).toEqual(right({ name: '1', names: ['1'] }))
expect(MB.decode({ names: ['3'], name: '3' })).toEqual(right({ name: '3', names: ['3'] }))
expect(isLeft(MA.decode({}))).toEqual(true)
```

v0.2.0 中添加
