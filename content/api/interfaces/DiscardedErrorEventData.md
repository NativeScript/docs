---
title: DiscardedErrorEventData
titleTemplate: :title - API / NativeScript
description: Event data containing information about discarded application errors.
contributors: false
---

Defined in: [application/application-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-interfaces.ts)

Event data containing information about discarded application errors.

## Extends

- [`ApplicationEventData`](ApplicationEventData.md)

## Properties

### android?

```ts
optional android?: any;
```

Defined in: [application/application-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-interfaces.ts)

Gets the native Android event arguments. Valid only when running on Android.

#### Inherited from

[`ApplicationEventData`](ApplicationEventData.md).[`android`](ApplicationEventData.md#android)

***

### error

```ts
error: NativeScriptError;
```

Defined in: [application/application-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-interfaces.ts)

***

### eventName

```ts
eventName: string;
```

Defined in: [application/application-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-interfaces.ts)

The name of the event.

#### Inherited from

[`ApplicationEventData`](ApplicationEventData.md).[`eventName`](ApplicationEventData.md#eventname)

***

### ios?

```ts
optional ios?: any;
```

Defined in: [application/application-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-interfaces.ts)

Gets the native iOS event arguments. Valid only when running on iOS.

#### Inherited from

[`ApplicationEventData`](ApplicationEventData.md).[`ios`](ApplicationEventData.md#ios)

***

### object

```ts
object: any;
```

Defined in: [application/application-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-interfaces.ts)

The instance that has raised the event.

#### Inherited from

[`ApplicationEventData`](ApplicationEventData.md).[`object`](ApplicationEventData.md#object)
