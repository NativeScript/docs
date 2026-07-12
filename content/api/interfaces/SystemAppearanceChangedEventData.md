---
title: SystemAppearanceChangedEventData
titleTemplate: :title - API / NativeScript
description: Event data containing information for system appearance changed event.
contributors: false
---

Defined in: application/application-interfaces.d.ts:68

Event data containing information for system appearance changed event.

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

### newValue

```ts
newValue: "dark" | "light";
```

Defined in: application/application-interfaces.d.ts:72

New system appearance value.

***

### object

```ts
object: any;
```

Defined in: application/application-interfaces.d.ts:40

The instance that has raised the event.

#### Inherited from

[`ApplicationEventData`](ApplicationEventData.md).[`object`](ApplicationEventData.md#object)
