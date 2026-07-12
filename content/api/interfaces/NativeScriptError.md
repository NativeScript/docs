---
title: NativeScriptError
titleTemplate: :title - API / NativeScript
description: An extended JavaScript Error which will have the nativeError property initialized in case the error is caused by executing platform-specific code.
contributors: false
---

Defined in: application/application-interfaces.d.ts:7

An extended JavaScript Error which will have the nativeError property initialized in case the error is caused by executing platform-specific code.

## Extends

- `Error`

## Properties

### nativeException?

```ts
optional nativeException?: any;
```

Defined in: application/application-interfaces.d.ts:11

Represents the native error object.

***

### stack?

```ts
optional stack?: string;
```

Defined in: application/application-interfaces.d.ts:19

Javascript portion of stack trace.

#### Overrides

```ts
Error.stack
```

***

### stackTrace?

```ts
optional stackTrace?: string;
```

Defined in: application/application-interfaces.d.ts:15

The native stack trace.
