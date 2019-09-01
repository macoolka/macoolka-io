---
title: i18nIO.ts
nav_order: 4
parent: 模块
---

# 概述

国际化 IO

---

<h2 class="text-delta">目录</h2>

- [MessageTypeParam (接口)](#messagetypeparam-%E6%8E%A5%E5%8F%A3)
- [EncodeMessage (类型)](#encodemessage-%E7%B1%BB%E5%9E%8B)
- [MessageType (类型)](#messagetype-%E7%B1%BB%E5%9E%8B)
- [MessageValue (类型)](#messagevalue-%E7%B1%BB%E5%9E%8B)
- [Int (常量)](#int-%E5%B8%B8%E9%87%8F)
- [boolean (常量)](#boolean-%E5%B8%B8%E9%87%8F)
- [dateFromISOString (常量)](#datefromisostring-%E5%B8%B8%E9%87%8F)
- [dateFromNumber (常量)](#datefromnumber-%E5%B8%B8%E9%87%8F)
- [dateFromUnixTime (常量)](#datefromunixtime-%E5%B8%B8%E9%87%8F)
- [email (常量)](#email-%E5%B8%B8%E9%87%8F)
- [ipv4 (常量)](#ipv4-%E5%B8%B8%E9%87%8F)
- [ipv6 (常量)](#ipv6-%E5%B8%B8%E9%87%8F)
- [nonEmptyString (常量)](#nonemptystring-%E5%B8%B8%E9%87%8F)
- [number (常量)](#number-%E5%B8%B8%E9%87%8F)
- [string (常量)](#string-%E5%B8%B8%E9%87%8F)
- [url (常量)](#url-%E5%B8%B8%E9%87%8F)
- [uuid (常量)](#uuid-%E5%B8%B8%E9%87%8F)
- [void1 (常量)](#void1-%E5%B8%B8%E9%87%8F)
- [array (函数)](#array-%E5%87%BD%E6%95%B0)
- [failMessage (函数)](#failmessage-%E5%87%BD%E6%95%B0)
- [literal (函数)](#literal-%E5%87%BD%E6%95%B0)
- [nonEmptyArray (函数)](#nonemptyarray-%E5%87%BD%E6%95%B0)
- [numberMaxValue (函数)](#numbermaxvalue-%E5%87%BD%E6%95%B0)
- [numberMinValue (函数)](#numberminvalue-%E5%87%BD%E6%95%B0)
- [show (函数)](#show-%E5%87%BD%E6%95%B0)
- [stringMatch (函数)](#stringmatch-%E5%87%BD%E6%95%B0)
- [stringMaxLength (函数)](#stringmaxlength-%E5%87%BD%E6%95%B0)
- [stringMinLength (函数)](#stringminlength-%E5%87%BD%E6%95%B0)
- [withMessage (函数)](#withmessage-%E5%87%BD%E6%95%B0)
- [int (导出)](#int-%E5%AF%BC%E5%87%BA)
- [void (导出)](#void-%E5%AF%BC%E5%87%BA)

---

# MessageTypeParam (接口)

**签名**

```ts
interface MessageTypeParam {
  message: MonidI18N
  type: t.Type<A, O, I>
}
```

v0.2.0 中添加

# EncodeMessage (类型)

**签名**

```ts
export type EncodeMessage = {
  _kind: 'messageType'
  message: MonidI18N
}
```

v0.2.0 中添加

# MessageType (类型)

**签名**

```ts
export type MessageType<A, O = A, I = unknown> = t.Type<A, O, I> & EncodeMessage
```

v0.2.0 中添加

# MessageValue (类型)

**签名**

```ts
export type MessageValue = {
  _kind: 'message'
  messages: Array<MessageInfo>
}
```

v0.2.0 中添加

# Int (常量)

**签名**

```ts

export const Int: MessageType<t.Branded<number, t.IntBrand>, number, unknown> = ...

```

v0.2.0 中添加

# boolean (常量)

**签名**

```ts

export const boolean: MessageType<boolean, boolean, unknown> = ...

```

v0.2.0 中添加

# dateFromISOString (常量)

**签名**

```ts

export const dateFromISOString: MessageType<Date, string, unknown> = ...

```

v0.2.0 中添加

# dateFromNumber (常量)

**签名**

```ts

export const dateFromNumber: MessageType<Date, number, unknown> = ...

```

v0.2.0 中添加

# dateFromUnixTime (常量)

**签名**

```ts

export const dateFromUnixTime: MessageType<Date, number, unknown> = ...

```

v0.2.0 中添加

# email (常量)

**签名**

```ts

export const email: MessageType<t.Branded<string, t.EmailBrand>, string, unknown> = ...

```

v0.2.0 中添加

# ipv4 (常量)

**签名**

```ts

export const ipv4: MessageType<t.Branded<string, t.IpV4Brand>, string, unknown> = ...

```

v0.2.0 中添加

# ipv6 (常量)

**签名**

```ts

export const ipv6: MessageType<t.Branded<string, t.IpV6Brand>, string, unknown> = ...

```

v0.2.0 中添加

# nonEmptyString (常量)

**签名**

```ts

export const nonEmptyString: MessageType<t.Branded<string, t.NonEmptyStringBrand>, string, unknown> = ...

```

v0.2.0 中添加

# number (常量)

**签名**

```ts

export const number: MessageType<number, number, unknown> = ...

```

v0.2.0 中添加

# string (常量)

**签名**

```ts

export const string: MessageType<string, string, unknown> = ...

```

v0.2.0 中添加

# url (常量)

**签名**

```ts

export const url: MessageType<t.Branded<string, t.UrlBrand>, string, unknown> = ...

```

v0.2.0 中添加

# uuid (常量)

**签名**

```ts

export const uuid: MessageType<t.Branded<string, t.UUIDBrand>, string, unknown> = ...

```

v0.2.0 中添加

# void1 (常量)

**签名**

```ts

export const void1: MessageType<void, void, unknown> = ...

```

# array (函数)

**签名**

```ts

export const array = <C extends t.Mixed>(codec: C, name?: string) => ...

```

v0.2.0 中添加

# failMessage (函数)

**签名**

```ts

export const failMessage = <T>(messages: Array<MessageInfo>, context: t.Context, message?: string | undefined) => ...

```

v0.2.0 中添加

# literal (函数)

**签名**

```ts

export const literal = <V extends string | number | boolean>(value: V, name?: string) => ...

```

v0.2.0 中添加

# nonEmptyArray (函数)

**签名**

```ts

export const nonEmptyArray = <C extends t.Mixed>(codec: C, name?: string) => ...

```

v0.2.0 中添加

# numberMaxValue (函数)

**签名**

```ts

export const numberMaxValue = (value: number) => ...

```

v0.2.0 中添加

# numberMinValue (函数)

**签名**

```ts

export const numberMinValue = (value: number) => ...

```

v0.2.0 中添加

# show (函数)

解析包含 Message 的 Erros 到 MonidI18N

**签名**

```ts

export const show = (as: t.Errors): MonidI18N => p => ...

```

v0.2.0 中添加

# stringMatch (函数)

**签名**

```ts

export const stringMatch = (value: RegExp) => ...

```

v0.2.0 中添加

# stringMaxLength (函数)

**签名**

```ts

export const stringMaxLength = (value: number) => ...

```

v0.2.0 中添加

# stringMinLength (函数)

**签名**

```ts

export const stringMinLength = (value: number) => ...

```

v0.2.0 中添加

# withMessage (函数)

给一个类型增加 message

v0.2.0 中添加

# int (导出)

**签名**

```ts

MessageType<t.Branded<number, t.IntBrand>, number, unknown>

```

# void (导出)

**签名**

```ts

MessageType<void, void, unknown>

```
