---
title: string.ts
nav_order: 7
parent: Modules
---

# Overview

Collection for String

---

<h2 class="text-delta">Table of contents</h2>

- [EMailBrand (interface)](#emailbrand-interface)
- [EmailBrand (interface)](#emailbrand-interface)
- [IpV4Brand (interface)](#ipv4brand-interface)
- [IpV6Brand (interface)](#ipv6brand-interface)
- [NonEmptyStringBrand (interface)](#nonemptystringbrand-interface)
- [NonEmptyStringC (interface)](#nonemptystringc-interface)
- [StringMatchBrand (interface)](#stringmatchbrand-interface)
- [StringMaxLengthBrand (interface)](#stringmaxlengthbrand-interface)
- [StringMinLengthBrand (interface)](#stringminlengthbrand-interface)
- [UUIDBrand (interface)](#uuidbrand-interface)
- [UrlBrand (interface)](#urlbrand-interface)
- [NonEmptyString (type alias)](#nonemptystring-type-alias)
- [UUID (type alias)](#uuid-type-alias)
- [Url (type alias)](#url-type-alias)
- [email (type alias)](#email-type-alias)
- [ipv4 (type alias)](#ipv4-type-alias)
- [ipv6 (type alias)](#ipv6-type-alias)
- [email (constant)](#email-constant)
- [ipv4 (constant)](#ipv4-constant)
- [ipv6 (constant)](#ipv6-constant)
- [nonEmptyString (constant)](#nonemptystring-constant)
- [url (constant)](#url-constant)
- [uuid (constant)](#uuid-constant)
- [stringMatch (function)](#stringmatch-function)
- [stringMaxLength (function)](#stringmaxlength-function)
- [stringMinLength (function)](#stringminlength-function)

---

# EMailBrand (interface)

**Signature**

```ts
interface EMailBrand {
  readonly EMail: unique symbol
}
```

Added in v0.2.0

# EmailBrand (interface)

**Signature**

```ts
interface EmailBrand {
  readonly email: unique symbol
}
```

Added in v0.2.0

# IpV4Brand (interface)

**Signature**

```ts
interface IpV4Brand {
  readonly ipv4: unique symbol
}
```

Added in v0.2.0

# IpV6Brand (interface)

**Signature**

```ts
interface IpV6Brand {
  readonly ipv6: unique symbol
}
```

Added in v0.2.0

# NonEmptyStringBrand (interface)

**Signature**

```ts
interface NonEmptyStringBrand {
  readonly NonEmptyString: unique symbol
}
```

Added in v0.2.0

# NonEmptyStringC (interface)

**Signature**

```ts
interface NonEmptyStringC extends Type {}
```

Added in v0.2.0

# StringMatchBrand (interface)

**Signature**

```ts
interface StringMatchBrand {
  readonly StringMatch: unique symbol
}
```

Added in v0.2.0

# StringMaxLengthBrand (interface)

**Signature**

```ts
interface StringMaxLengthBrand {
  readonly StringMaxLength: unique symbol
}
```

Added in v0.2.0

# StringMinLengthBrand (interface)

**Signature**

```ts
interface StringMinLengthBrand {
  readonly StringMinLength: unique symbol
}
```

Added in v0.2.0

# UUIDBrand (interface)

**Signature**

```ts
interface UUIDBrand {
  readonly UUID: unique symbol
}
```

Added in v0.2.0

# UrlBrand (interface)

**Signature**

```ts
interface UrlBrand {
  readonly Url: unique symbol
}
```

Added in v0.2.0

# NonEmptyString (type alias)

**Signature**

```ts
export type NonEmptyString = t.Branded<string, NonEmptyStringBrand>
```

Added in v0.2.0

# UUID (type alias)

**Signature**

```ts
export type UUID = t.Branded<string, UUIDBrand>
```

Added in v0.2.0

# Url (type alias)

**Signature**

```ts
export type Url = t.Branded<string, UrlBrand>
```

Added in v0.2.0

# email (type alias)

**Signature**

```ts
export type email = t.Branded<string, EmailBrand>
```

Added in v0.2.0

# ipv4 (type alias)

**Signature**

```ts
export type ipv4 = t.Branded<string, IpV4Brand>
```

Added in v0.2.0

# ipv6 (type alias)

**Signature**

```ts
export type ipv6 = t.Branded<string, IpV6Brand>
```

Added in v0.2.0

# email (constant)

A codec that succeeds if a string is EMAIL.

**Signature**

```ts

export const email: t.BrandC<t.StringC, EmailBrand> = ...

```

**Example**

```ts
import { email } from 'macoolka-io'
import { right, isLeft } from 'fp-ts/lib/Either'

expect(email.decode('a@mail.com')).toEqual(right('a@mail.com'))
expect(isLeft(email.decode('12'))).toEqual(true)
```

Added in v0.2.0

# ipv4 (constant)

A codec that succeeds if a string is IPV4.

**Signature**

```ts

export const ipv4: t.BrandC<t.StringC, IpV4Brand> = ...

```

**Example**

```ts
import { ipv4 } from 'macoolka-io'
import { right, isLeft } from 'fp-ts/lib/Either'

expect(ipv4.decode('8.8.8.8')).toEqual(right('8.8.8.8'))
expect(isLeft(ipv4.decode('12'))).toEqual(true)
```

Added in v0.2.0

# ipv6 (constant)

A codec that succeeds if a string is IPV6.

**Signature**

```ts

export const ipv6: t.BrandC<t.StringC, IpV6Brand> = ...

```

**Example**

```ts
import { ipv6 } from 'macoolka-io'
import { right, isLeft } from 'fp-ts/lib/Either'

expect(ipv6.decode('2409:8a15:244a:a780:b0f5:8e9a:2c2e:5ce2')).toEqual(right('2409:8a15:244a:a780:b0f5:8e9a:2c2e:5ce2'))
expect(isLeft(ipv6.decode('8.8.8.8'))).toEqual(true)
```

Added in v0.2.0

# nonEmptyString (constant)

A codec that succeeds if a string is not empty

**Signature**

```ts

export const nonEmptyString: NonEmptyStringC = ...

```

**Example**

```ts
import { NonEmptyString } from 'macoolka-io'
import { right, isLeft } from 'fp-ts/lib/Either'

assert.deepStrictEqual(NonEmptyString.decode('a'), right('a'))
assert(isLeft(NonEmptyString.decode('')))
```

Added in v0.2.0

# url (constant)

A codec that succeeds if a string is url.

**Signature**

```ts

export const url: t.BrandC<t.StringC, UrlBrand> = ...

```

**Example**

```ts
import { url } from 'macoolka-io'
import { right, isLeft } from 'fp-ts/lib/Either'

expect(url.decode('http://bing.com')).toEqual(right('http://bing.com'))
expect(isLeft(url.decode('8.8.8.8'))).toEqual(true)
```

Added in v0.2.0

# uuid (constant)

A codec that succeeds if a string is UUID.

**Signature**

```ts

export const uuid: t.BrandC<t.StringC, UUIDBrand> = ...

```

**Example**

```ts
import { uuid } from 'macoolka-io'
import { right, isLeft } from 'fp-ts/lib/Either'
```

Added in v0.2.0

# stringMatch (function)

A codec that succeeds if a string match a RegExp.

**Signature**

```ts

export const stringMatch = (regexp: RegExp) => new t.Type<string, string, unknown>(
    ['stringMatch', regexp].join(NameSplit),
    t.string.is,
    (u, c) => ...

```

**Example**

```ts
import { stringMatch } from 'macoolka-io'
import { right, isLeft } from 'fp-ts/lib/Either'

expect(stringMatch(/^A/).decode('ABC')).toEqual(right('ABC'))
expect(isLeft(stringMatch(/^A/).decode('12'))).toEqual(true)
```

Added in v0.2.0

# stringMaxLength (function)

A codec that succeeds if a string max length is given value.

**Signature**

```ts

export const stringMaxLength = (_maxLength: number) => new t.Type<string, string, unknown>(
    ['stringMaxLength', _maxLength].join(NameSplit),
    t.string.is,
    (u, c) => ...

```

**Example**

```ts
import { stringMaxLength } from 'macoolka-io'
import { right, isLeft } from 'fp-ts/lib/Either'

expect(t.stringMaxLength(3).decode('123')).toEqual(right('123'))
expect(isLeft(t.stringMaxLength(3).decode('1234'))).toEqual(true)
```

Added in v0.2.0

# stringMinLength (function)

A codec that succeeds if a string min length is given value.

**Signature**

```ts

export const stringMinLength = (_minLength: number) => new t.Type<string, string, unknown>(
    ['stringMinLength', _minLength].join(NameSplit),
    t.string.is,
    (u, c) => ...

```

**Example**

```ts
import { stringMinLength } from 'macoolka-io'
import { right, isLeft } from 'fp-ts/lib/Either'

expect(stringMinLength(3).decode('123')).toEqual(right('123'))
expect(isLeft(stringMinLength(3).decode('12'))).toEqual(true)
```

Added in v0.2.0
