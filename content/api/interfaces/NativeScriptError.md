---
title: NativeScriptError
titleTemplate: :title - API / NativeScript
description: An extended JavaScript Error which will have the nativeError property initialized in case the error is caused by executing platform-specific code.
contributors: false
---

Defined in: [application/application-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-interfaces.ts)

An extended JavaScript Error which will have the nativeError property initialized in case the error is caused by executing platform-specific code.

## Extends

- `Error`

## Properties

### nativeException?

```ts
optional nativeException?: any;
```

Defined in: [application/application-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-interfaces.ts)

Represents the native error object.

***

### stack?

```ts
optional stack?: string;
```

Defined in: [application/application-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-interfaces.ts)

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

Defined in: [application/application-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-interfaces.ts)

The native stack trace.
