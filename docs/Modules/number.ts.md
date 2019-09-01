---
title: number.ts
nav_order: 6
parent: Modules
---

# Overview

Collection for Number

---

<h2 class="text-delta">Table of contents</h2>

- [numberMaxValue (function)](#numbermaxvalue-function)
- [numberMinValue (function)](#numberminvalue-function)

---

# numberMaxValue (function)

A codec that succeeds if a number max value is given value.

**Signature**

```ts

export const numberMaxValue = (maxValue: number) => new t.Type<number, number, unknown>(
    ['numberMaxValue', maxValue].join(NameSplit),
    t.number.is,
    (u, c) => ...

```

**Example**

```ts
import { numberMaxValue } from 'macoolka-io'
import { right, isLeft } from 'fp-ts/lib/Either'

expect(t.numberMaxValue(3).decode(3)).toEqual(right(3))
expect(isLeft(t.numberMaxValue(3).decode(4))).toEqual(true)
```

Added in v0.2.0

# numberMinValue (function)

A codec that succeeds if a number min value is given value.

**Signature**

```ts

export const numberMinValue = (minValue: number) => new t.Type<number, number, unknown>(
    ['numberMinValue', minValue].join(NameSplit),
    t.number.is,
    (u, c) => ...

```

**Example**

```ts
import { numberMinValue } from 'macoolka-io'
import { right, isLeft } from 'fp-ts/lib/Either'

expect(numberMinValue(3).decode(3)).toEqual(right(3))
expect(isLeft(numberMinValue(3).decode(2))).toEqual(true)
```

Added in v0.2.0
