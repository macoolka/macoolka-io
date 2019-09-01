---
title: array.ts
nav_order: 1
parent: 模块
---

# 概述

数组类型集合

---

<h2 class="text-delta">目录</h2>

- [NonEmptyArrayC (接口)](#nonemptyarrayc-%E6%8E%A5%E5%8F%A3)
- [nonEmptyArray (函数)](#nonemptyarray-%E5%87%BD%E6%95%B0)

---

# NonEmptyArrayC (接口)

**签名**

```ts
interface NonEmptyArrayC extends Type {}
```

v0.2.0 中添加

# nonEmptyArray (函数)

得到一个非空数组

**示例**

```ts
import { nonEmptyArray } from 'macoolka-io'
import { isLeft } from 'fp-ts/lib/Either'

const input: string[] = []
assert(isLeft(nonEmptyArray.decode(input)))
```

v0.2.0 中添加
