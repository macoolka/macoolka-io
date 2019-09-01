---
title: number.ts
nav_order: 6
parent: 模块
---

# 概述

数值类型集合

---

<h2 class="text-delta">目录</h2>

- [numberMaxValue (函数)](#numbermaxvalue-%E5%87%BD%E6%95%B0)
- [numberMinValue (函数)](#numberminvalue-%E5%87%BD%E6%95%B0)

---

# numberMaxValue (函数)

校验数值最大值

**签名**

```ts

export const numberMaxValue = (maxValue: number) => new t.Type<number, number, unknown>(
    ['numberMaxValue', maxValue].join(NameSplit),
    t.number.is,
    (u, c) => ...

```

**示例**

```ts
import { numberMaxValue } from 'macoolka-io'
import { right, isLeft } from 'fp-ts/lib/Either'

expect(t.numberMaxValue(3).decode(3)).toEqual(right(3))
expect(isLeft(t.numberMaxValue(3).decode(4))).toEqual(true)
```

v0.2.0 中添加

# numberMinValue (函数)

校验数值最小值

**签名**

```ts

export const numberMinValue = (minValue: number) => new t.Type<number, number, unknown>(
    ['numberMinValue', minValue].join(NameSplit),
    t.number.is,
    (u, c) => ...

```

**示例**

```ts
import { numberMinValue } from 'macoolka-io'
import { right, isLeft } from 'fp-ts/lib/Either'

expect(numberMinValue(3).decode(3)).toEqual(right(3))
expect(isLeft(numberMinValue(3).decode(2))).toEqual(true)
```

v0.2.0 中添加
