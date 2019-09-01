---
title: date.ts
nav_order: 3
parent: Modules
---

# Overview

Collection for Date

---

<h2 class="text-delta">Table of contents</h2>

- [DateFromISOStringC (interface)](#datefromisostringc-interface)
- [DateFromNumberC (interface)](#datefromnumberc-interface)
- [DateFromUnixTimeC (interface)](#datefromunixtimec-interface)
- [dateFromISOString (constant)](#datefromisostring-constant)
- [dateFromNumber (constant)](#datefromnumber-constant)
- [dateFromUnixTime (constant)](#datefromunixtime-constant)

---

# DateFromISOStringC (interface)

**Signature**

```ts
interface DateFromISOStringC extends Type {}
```

Added in v0.2.0

# DateFromNumberC (interface)

**Signature**

```ts
interface DateFromNumberC extends Type {}
```

Added in v0.2.0

# DateFromUnixTimeC (interface)

**Signature**

```ts
interface DateFromUnixTimeC extends Type {}
```

Added in v0.2.0

# dateFromISOString (constant)

Get Date From ISOString

**Signature**

```ts

export const dateFromISOString: DateFromISOStringC = ...

```

**Example**

```ts
import { DateFromISOString } from 'macoolka-io'
import { right } from 'fp-ts/lib/Either'

const date = new Date(1973, 10, 30)
const input = date.toISOString()
assert.deepStrictEqual(DateFromISOString.decode(input), right(date))
```

Added in v0.2.0

# dateFromNumber (constant)

Get Date From Number

**Signature**

```ts

export const dateFromNumber: DateFromNumberC = ...

```

**Example**

```ts
import { DateFromNumber } from 'macoolka-io'
import { right } from 'fp-ts/lib/Either'

const date = new Date(1973, 10, 30)
const input = date.getTime()
assert.deepStrictEqual(DateFromNumber.decode(input), right(date))
```

Added in v0.2.0

# dateFromUnixTime (constant)

Get Date From UnixTime

**Signature**

```ts

export const dateFromUnixTime: DateFromUnixTimeC = ...

```

**Example**

```ts
import { DateFromUnixTime } from 'macoolka-io'
import { right } from 'fp-ts/lib/Either'

const date = new Date(1973, 10, 30)
const input = date.getTime() / 1000
assert.deepStrictEqual(DateFromUnixTime.decode(input), right(date))
```

Added in v0.2.0
