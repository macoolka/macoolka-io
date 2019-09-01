---
title: i18nIO.ts
nav_order: 4
parent: Modules
---

# Overview

I18n io

---

<h2 class="text-delta">Table of contents</h2>

- [MessageTypeParam (interface)](#messagetypeparam-interface)
- [EncodeMessage (type alias)](#encodemessage-type-alias)
- [MessageType (type alias)](#messagetype-type-alias)
- [MessageValue (type alias)](#messagevalue-type-alias)
- [Int (constant)](#int-constant)
- [boolean (constant)](#boolean-constant)
- [dateFromISOString (constant)](#datefromisostring-constant)
- [dateFromNumber (constant)](#datefromnumber-constant)
- [dateFromUnixTime (constant)](#datefromunixtime-constant)
- [email (constant)](#email-constant)
- [ipv4 (constant)](#ipv4-constant)
- [ipv6 (constant)](#ipv6-constant)
- [nonEmptyString (constant)](#nonemptystring-constant)
- [number (constant)](#number-constant)
- [string (constant)](#string-constant)
- [url (constant)](#url-constant)
- [uuid (constant)](#uuid-constant)
- [void1 (constant)](#void1-constant)
- [array (function)](#array-function)
- [failMessage (function)](#failmessage-function)
- [literal (function)](#literal-function)
- [nonEmptyArray (function)](#nonemptyarray-function)
- [numberMaxValue (function)](#numbermaxvalue-function)
- [numberMinValue (function)](#numberminvalue-function)
- [show (function)](#show-function)
- [stringMatch (function)](#stringmatch-function)
- [stringMaxLength (function)](#stringmaxlength-function)
- [stringMinLength (function)](#stringminlength-function)
- [withMessage (function)](#withmessage-function)
- [int (export)](#int-export)
- [void (export)](#void-export)

---

# MessageTypeParam (interface)

**Signature**

```ts
interface MessageTypeParam {
  message: MonidI18N
  type: t.Type<A, O, I>
}
```

Added in v0.2.0

# EncodeMessage (type alias)

**Signature**

```ts
export type EncodeMessage = {
  _kind: 'messageType'
  message: MonidI18N
}
```

Added in v0.2.0

# MessageType (type alias)

**Signature**

```ts
export type MessageType<A, O = A, I = unknown> = t.Type<A, O, I> & EncodeMessage
```

Added in v0.2.0

# MessageValue (type alias)

**Signature**

```ts
export type MessageValue = {
  _kind: 'message'
  messages: Array<MessageInfo>
}
```

Added in v0.2.0

# Int (constant)

**Signature**

```ts

export const Int: MessageType<t.Branded<number, t.IntBrand>, number, unknown> = ...

```

Added in v0.2.0

# boolean (constant)

**Signature**

```ts

export const boolean: MessageType<boolean, boolean, unknown> = ...

```

Added in v0.2.0

# dateFromISOString (constant)

**Signature**

```ts

export const dateFromISOString: MessageType<Date, string, unknown> = ...

```

Added in v0.2.0

# dateFromNumber (constant)

**Signature**

```ts

export const dateFromNumber: MessageType<Date, number, unknown> = ...

```

Added in v0.2.0

# dateFromUnixTime (constant)

**Signature**

```ts

export const dateFromUnixTime: MessageType<Date, number, unknown> = ...

```

Added in v0.2.0

# email (constant)

**Signature**

```ts

export const email: MessageType<t.Branded<string, t.EmailBrand>, string, unknown> = ...

```

Added in v0.2.0

# ipv4 (constant)

**Signature**

```ts

export const ipv4: MessageType<t.Branded<string, t.IpV4Brand>, string, unknown> = ...

```

Added in v0.2.0

# ipv6 (constant)

**Signature**

```ts

export const ipv6: MessageType<t.Branded<string, t.IpV6Brand>, string, unknown> = ...

```

Added in v0.2.0

# nonEmptyString (constant)

**Signature**

```ts

export const nonEmptyString: MessageType<t.Branded<string, t.NonEmptyStringBrand>, string, unknown> = ...

```

Added in v0.2.0

# number (constant)

**Signature**

```ts

export const number: MessageType<number, number, unknown> = ...

```

Added in v0.2.0

# string (constant)

**Signature**

```ts

export const string: MessageType<string, string, unknown> = ...

```

Added in v0.2.0

# url (constant)

**Signature**

```ts

export const url: MessageType<t.Branded<string, t.UrlBrand>, string, unknown> = ...

```

Added in v0.2.0

# uuid (constant)

**Signature**

```ts

export const uuid: MessageType<t.Branded<string, t.UUIDBrand>, string, unknown> = ...

```

Added in v0.2.0

# void1 (constant)

**Signature**

```ts

export const void1: MessageType<void, void, unknown> = ...

```

# array (function)

**Signature**

```ts

export const array = <C extends t.Mixed>(codec: C, name?: string) => ...

```

Added in v0.2.0

# failMessage (function)

**Signature**

```ts

export const failMessage = <T>(messages: Array<MessageInfo>, context: t.Context, message?: string | undefined) => ...

```

Added in v0.2.0

# literal (function)

**Signature**

```ts

export const literal = <V extends string | number | boolean>(value: V, name?: string) => ...

```

Added in v0.2.0

# nonEmptyArray (function)

**Signature**

```ts

export const nonEmptyArray = <C extends t.Mixed>(codec: C, name?: string) => ...

```

Added in v0.2.0

# numberMaxValue (function)

**Signature**

```ts

export const numberMaxValue = (value: number) => ...

```

Added in v0.2.0

# numberMinValue (function)

**Signature**

```ts

export const numberMinValue = (value: number) => ...

```

Added in v0.2.0

# show (function)

Parse Erros(contains message) to MonidI18N

**Signature**

```ts

export const show = (as: t.Errors): MonidI18N => p => ...

```

Added in v0.2.0

# stringMatch (function)

**Signature**

```ts

export const stringMatch = (value: RegExp) => ...

```

Added in v0.2.0

# stringMaxLength (function)

**Signature**

```ts

export const stringMaxLength = (value: number) => ...

```

Added in v0.2.0

# stringMinLength (function)

**Signature**

```ts

export const stringMinLength = (value: number) => ...

```

Added in v0.2.0

# withMessage (function)

Add message to a type

Added in v0.2.0

# int (export)

**Signature**

```ts

MessageType<t.Branded<number, t.IntBrand>, number, unknown>

```

# void (export)

**Signature**

```ts

MessageType<void, void, unknown>

```
