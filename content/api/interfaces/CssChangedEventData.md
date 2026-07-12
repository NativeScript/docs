---
title: CssChangedEventData
titleTemplate: :title - API / NativeScript
description: Event data containing information about application css change.
contributors: false
---

Defined in: application/application-interfaces.d.ts:109

Event data containing information about application css change.

## Extends

- [`ApplicationEventData`](ApplicationEventData.md)

## Properties

### android?

```ts
optional android?: any;
```

Defined in: application/application-interfaces.d.ts:36

Gets the native Android event arguments. Valid only when running on Android.

#### Inherited from

[`ApplicationEventData`](ApplicationEventData.md).[`android`](ApplicationEventData.md#android)

***

### cssFile?

```ts
optional cssFile?: string;
```

Defined in: application/application-interfaces.d.ts:110

***

### cssText?

```ts
optional cssText?: string;
```

Defined in: application/application-interfaces.d.ts:111

***

### eventName

```ts
eventName: string;
```

Defined in: application/application-interfaces.d.ts:28

The name of the event.

#### Inherited from

[`ApplicationEventData`](ApplicationEventData.md).[`eventName`](ApplicationEventData.md#eventname)

***

### ios?

```ts
optional ios?: any;
```

Defined in: application/application-interfaces.d.ts:32

Gets the native iOS event arguments. Valid only when running on iOS.

#### Inherited from

[`ApplicationEventData`](ApplicationEventData.md).[`ios`](ApplicationEventData.md#ios)

***

### object

```ts
object: any;
```

Defined in: application/application-interfaces.d.ts:40

The instance that has raised the event.

#### Inherited from

[`ApplicationEventData`](ApplicationEventData.md).[`object`](ApplicationEventData.md#object)
