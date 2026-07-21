---
title: ApplicationEventData
titleTemplate: :title - API / NativeScript
description: Event data containing information for the application events.
contributors: false
---

Defined in: [application/application-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-interfaces.ts)

Event data containing information for the application events.

## Extended by

- [`OrientationChangedEventData`](OrientationChangedEventData.md)
- [`SystemAppearanceChangedEventData`](SystemAppearanceChangedEventData.md)
- [`LayoutDirectionChangedEventData`](LayoutDirectionChangedEventData.md)
- [`FontScaleChangedEventData`](FontScaleChangedEventData.md)
- [`UnhandledErrorEventData`](UnhandledErrorEventData.md)
- [`DiscardedErrorEventData`](DiscardedErrorEventData.md)
- [`CssChangedEventData`](CssChangedEventData.md)
- [`InitRootViewEventData`](InitRootViewEventData.md)
- [`LoadAppCSSEventData`](LoadAppCSSEventData.md)
- [`SceneEventData`](SceneEventData.md)

## Properties

### android?

```ts
optional android?: any;
```

Defined in: [application/application-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-interfaces.ts)

Gets the native Android event arguments. Valid only when running on Android.

***

### eventName

```ts
eventName: string;
```

Defined in: [application/application-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-interfaces.ts)

The name of the event.

***

### ios?

```ts
optional ios?: any;
```

Defined in: [application/application-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-interfaces.ts)

Gets the native iOS event arguments. Valid only when running on iOS.

***

### object

```ts
object: any;
```

Defined in: [application/application-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-interfaces.ts)

The instance that has raised the event.
