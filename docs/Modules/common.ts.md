---
title: common.ts
nav_order: 2
parent: Modules
---

# Overview

Collection for Common type

---

<h2 class="text-delta">Table of contents</h2>

- [ShowMessage (interface)](#showmessage-interface)
- [show (function)](#show-function)
- [withDefault (function)](#withdefault-function)

---

# ShowMessage (interface)

**Signature**

```ts
interface ShowMessage {
  showDecoder: (a: t.Decoder<any, any>) => O.Option<string>
  showKey: (a: string) => O.Option<string>
  showValue: (a: unknown) => O.Option<string>
}
```

Added in v0.2.0

# show (function)

Show Errors to string

**Signature**

```ts

export const show = (as: t.Errors, showMessage?: Partial<ShowMessage>): string => ...

```

Added in v0.2.0

# withDefault (function)

apply a default value when the value is null.

**Signature**

```ts

export const withDefault = <T extends t.Mixed>(
    type: T, defaultValue: t.OutputOf<T>)
    : t.Type<t.TypeOf<T>, t.OutputOf<T>> => ...

```

**Example**

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

Added in v0.2.0
