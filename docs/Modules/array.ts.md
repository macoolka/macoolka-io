---
title: array.ts
nav_order: 1
parent: Modules
---

# Overview

Collection for Array

---

<h2 class="text-delta">Table of contents</h2>

- [NonEmptyArrayC (interface)](#nonemptyarrayc-interface)
- [nonEmptyArray (function)](#nonemptyarray-function)

---

# NonEmptyArrayC (interface)

**Signature**

```ts
interface NonEmptyArrayC extends Type {}
```

Added in v0.2.0

# nonEmptyArray (function)

Get A non empty array

**Example**

```ts
import { nonEmptyArray } from 'macoolka-io'
import { isLeft } from 'fp-ts/lib/Either'

const input: string[] = []
assert(isLeft(nonEmptyArray.decode(input)))
```

Added in v0.2.0
