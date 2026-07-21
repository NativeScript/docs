---
title: ApplicationCommon
titleTemplate: :title - API / NativeScript
contributors: false
---

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

## Extended by

- [`AndroidApplication`](AndroidApplication.md)
- [`iOSApplication`](iOSApplication.md)

## Properties

### autoSystemAppearanceChanged

```ts
autoSystemAppearanceChanged: boolean;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

Boolean to enable/disable systemAppearanceChanged

***

### backgroundEvent

```ts
readonly backgroundEvent: "background" = "background";
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

***

### cssChangedEvent

```ts
readonly cssChangedEvent: "cssChanged" = "cssChanged";
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

***

### discardedErrorEvent

```ts
readonly discardedErrorEvent: "discardedError" = "discardedError";
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

***

### displayedEvent

```ts
readonly displayedEvent: "displayed" = "displayed";
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

***

### exitEvent

```ts
readonly exitEvent: "exit" = "exit";
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

***

### fontScaleChangedEvent

```ts
readonly fontScaleChangedEvent: "fontScaleChanged" = "fontScaleChanged";
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

***

### foregroundEvent

```ts
readonly foregroundEvent: "foreground" = "foreground";
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

***

### hasListeners

```ts
hasListeners: (eventName: string) => boolean;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` |

#### Returns

`boolean`

***

### initRootViewEvent

```ts
readonly initRootViewEvent: "initRootView" = "initRootView";
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

***

### launchEvent

```ts
readonly launchEvent: "launch" = "launch";
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

***

### layoutDirectionChangedEvent

```ts
readonly layoutDirectionChangedEvent: "layoutDirectionChanged" = "layoutDirectionChanged";
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

***

### livesyncEvent

```ts
readonly livesyncEvent: "livesync" = "livesync";
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

***

### loadAppCssEvent

```ts
readonly loadAppCssEvent: "loadAppCss" = "loadAppCss";
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

***

### lowMemoryEvent

```ts
readonly lowMemoryEvent: "lowMemory" = "lowMemory";
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

***

### mainEntry

```ts
protected mainEntry: NavigationEntry;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

***

### notify

```ts
notify: <T>(eventData: T) => void;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`ApplicationEventData`](../interfaces/ApplicationEventData.md) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventData` | `T` |

#### Returns

`void`

***

### off

```ts
off: (eventNames: string, callback?: any, thisArg?: any) => void;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventNames` | `string` |
| `callback?` | `any` |
| `thisArg?` | `any` |

#### Returns

`void`

***

### on

```ts
on: {
  (eventNames: string, callback: (args: ApplicationEventData) => void, thisArg?: any): void;
  (event: "cssChanged", callback: (args: CssChangedEventData) => void, thisArg?: any): void;
  (event: "livesync", callback: (args: ApplicationEventData) => void, thisArg?: any): void;
  (event: "launch", callback: (args: LaunchEventData) => void, thisArg?: any): void;
  (event: "displayed", callback: (args: ApplicationEventData) => void, thisArg?: any): void;
  (event: "suspend", callback: (args: ApplicationEventData) => void, thisArg?: any): void;
  (event: "resume", callback: (args: ApplicationEventData) => void, thisArg?: any): void;
  (event: "exit", callback: (args: ApplicationEventData) => void, thisArg?: any): void;
  (event: "lowMemory", callback: (args: ApplicationEventData) => void, thisArg?: any): void;
  (event: "uncaughtError", callback: (args: UnhandledErrorEventData) => void, thisArg?: any): void;
  (event: "discardedError", callback: (args: DiscardedErrorEventData) => void, thisArg?: any): void;
  (event: "orientationChanged", callback: (args: OrientationChangedEventData) => void, thisArg?: any): void;
  (event: "systemAppearanceChanged", callback: (args: SystemAppearanceChangedEventData) => void, thisArg?: any): void;
  (event: "layoutDirectionChanged", callback: (args: LayoutDirectionChangedEventData) => void, thisArg?: any): void;
  (event: "fontScaleChanged", callback: (args: FontScaleChangedEventData) => void, thisArg?: any): void;
};
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

#### Call Signature

```ts
(
   eventNames: string, 
   callback: (args: ApplicationEventData) => void, 
   thisArg?: any): void;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventNames` | `string` |
| `callback` | (`args`: [`ApplicationEventData`](../interfaces/ApplicationEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "cssChanged", 
   callback: (args: CssChangedEventData) => void, 
   thisArg?: any): void;
```

This event is raised when application css is changed.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"cssChanged"` |
| `callback` | (`args`: [`CssChangedEventData`](../interfaces/CssChangedEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "livesync", 
   callback: (args: ApplicationEventData) => void, 
   thisArg?: any): void;
```

Event raised then livesync operation is performed.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"livesync"` |
| `callback` | (`args`: [`ApplicationEventData`](../interfaces/ApplicationEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "launch", 
   callback: (args: LaunchEventData) => void, 
   thisArg?: any): void;
```

This event is raised on application launchEvent.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"launch"` |
| `callback` | (`args`: [`LaunchEventData`](../interfaces/LaunchEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "displayed", 
   callback: (args: ApplicationEventData) => void, 
   thisArg?: any): void;
```

**`Experimental`**

This event is raised after the application has performed most of its startup actions.
Its intent is to be suitable for measuring app startup times.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"displayed"` |
| `callback` | (`args`: [`ApplicationEventData`](../interfaces/ApplicationEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "suspend", 
   callback: (args: ApplicationEventData) => void, 
   thisArg?: any): void;
```

This event is raised when the Application is suspended.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"suspend"` |
| `callback` | (`args`: [`ApplicationEventData`](../interfaces/ApplicationEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "resume", 
   callback: (args: ApplicationEventData) => void, 
   thisArg?: any): void;
```

This event is raised when the Application is resumed after it has been suspended.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"resume"` |
| `callback` | (`args`: [`ApplicationEventData`](../interfaces/ApplicationEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "exit", 
   callback: (args: ApplicationEventData) => void, 
   thisArg?: any): void;
```

This event is raised when the Application is about to exit.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"exit"` |
| `callback` | (`args`: [`ApplicationEventData`](../interfaces/ApplicationEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "lowMemory", 
   callback: (args: ApplicationEventData) => void, 
   thisArg?: any): void;
```

This event is raised when there is low memory on the target device.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"lowMemory"` |
| `callback` | (`args`: [`ApplicationEventData`](../interfaces/ApplicationEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "uncaughtError", 
   callback: (args: UnhandledErrorEventData) => void, 
   thisArg?: any): void;
```

This event is raised when an uncaught error occurs while the application is running.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"uncaughtError"` |
| `callback` | (`args`: [`UnhandledErrorEventData`](../interfaces/UnhandledErrorEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "discardedError", 
   callback: (args: DiscardedErrorEventData) => void, 
   thisArg?: any): void;
```

This event is raised when an discarded error occurs while the application is running.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"discardedError"` |
| `callback` | (`args`: [`DiscardedErrorEventData`](../interfaces/DiscardedErrorEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "orientationChanged", 
   callback: (args: OrientationChangedEventData) => void, 
   thisArg?: any): void;
```

This event is raised when the orientation of the application changes.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"orientationChanged"` |
| `callback` | (`args`: [`OrientationChangedEventData`](../interfaces/OrientationChangedEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "systemAppearanceChanged", 
   callback: (args: SystemAppearanceChangedEventData) => void, 
   thisArg?: any): void;
```

This event is raised when the operating system appearance changes
between light and dark theme (for Android);
between light and dark mode (for iOS) and vice versa.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"systemAppearanceChanged"` |
| `callback` | (`args`: [`SystemAppearanceChangedEventData`](../interfaces/SystemAppearanceChangedEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "layoutDirectionChanged", 
   callback: (args: LayoutDirectionChangedEventData) => void, 
   thisArg?: any): void;
```

This event is raised when the operating system layout direction changes
between ltr and rtl.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"layoutDirectionChanged"` |
| `callback` | (`args`: [`LayoutDirectionChangedEventData`](../interfaces/LayoutDirectionChangedEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "fontScaleChanged", 
   callback: (args: FontScaleChangedEventData) => void, 
   thisArg?: any): void;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"fontScaleChanged"` |
| `callback` | (`args`: [`FontScaleChangedEventData`](../interfaces/FontScaleChangedEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

***

### once

```ts
once: {
  (eventNames: string, callback: (args: ApplicationEventData) => void, thisArg?: any): void;
  (event: "cssChanged", callback: (args: CssChangedEventData) => void, thisArg?: any): void;
  (event: "livesync", callback: (args: ApplicationEventData) => void, thisArg?: any): void;
  (event: "launch", callback: (args: LaunchEventData) => void, thisArg?: any): void;
  (event: "displayed", callback: (args: ApplicationEventData) => void, thisArg?: any): void;
  (event: "suspend", callback: (args: ApplicationEventData) => void, thisArg?: any): void;
  (event: "resume", callback: (args: ApplicationEventData) => void, thisArg?: any): void;
  (event: "exit", callback: (args: ApplicationEventData) => void, thisArg?: any): void;
  (event: "lowMemory", callback: (args: ApplicationEventData) => void, thisArg?: any): void;
  (event: "uncaughtError", callback: (args: UnhandledErrorEventData) => void, thisArg?: any): void;
  (event: "discardedError", callback: (args: DiscardedErrorEventData) => void, thisArg?: any): void;
  (event: "orientationChanged", callback: (args: OrientationChangedEventData) => void, thisArg?: any): void;
  (event: "systemAppearanceChanged", callback: (args: SystemAppearanceChangedEventData) => void, thisArg?: any): void;
  (event: "layoutDirectionChanged", callback: (args: LayoutDirectionChangedEventData) => void, thisArg?: any): void;
  (event: "fontScaleChanged", callback: (args: FontScaleChangedEventData) => void, thisArg?: any): void;
};
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

#### Call Signature

```ts
(
   eventNames: string, 
   callback: (args: ApplicationEventData) => void, 
   thisArg?: any): void;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventNames` | `string` |
| `callback` | (`args`: [`ApplicationEventData`](../interfaces/ApplicationEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "cssChanged", 
   callback: (args: CssChangedEventData) => void, 
   thisArg?: any): void;
```

This event is raised when application css is changed.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"cssChanged"` |
| `callback` | (`args`: [`CssChangedEventData`](../interfaces/CssChangedEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "livesync", 
   callback: (args: ApplicationEventData) => void, 
   thisArg?: any): void;
```

Event raised then livesync operation is performed.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"livesync"` |
| `callback` | (`args`: [`ApplicationEventData`](../interfaces/ApplicationEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "launch", 
   callback: (args: LaunchEventData) => void, 
   thisArg?: any): void;
```

This event is raised on application launchEvent.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"launch"` |
| `callback` | (`args`: [`LaunchEventData`](../interfaces/LaunchEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "displayed", 
   callback: (args: ApplicationEventData) => void, 
   thisArg?: any): void;
```

**`Experimental`**

This event is raised after the application has performed most of its startup actions.
Its intent is to be suitable for measuring app startup times.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"displayed"` |
| `callback` | (`args`: [`ApplicationEventData`](../interfaces/ApplicationEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "suspend", 
   callback: (args: ApplicationEventData) => void, 
   thisArg?: any): void;
```

This event is raised when the Application is suspended.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"suspend"` |
| `callback` | (`args`: [`ApplicationEventData`](../interfaces/ApplicationEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "resume", 
   callback: (args: ApplicationEventData) => void, 
   thisArg?: any): void;
```

This event is raised when the Application is resumed after it has been suspended.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"resume"` |
| `callback` | (`args`: [`ApplicationEventData`](../interfaces/ApplicationEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "exit", 
   callback: (args: ApplicationEventData) => void, 
   thisArg?: any): void;
```

This event is raised when the Application is about to exit.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"exit"` |
| `callback` | (`args`: [`ApplicationEventData`](../interfaces/ApplicationEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "lowMemory", 
   callback: (args: ApplicationEventData) => void, 
   thisArg?: any): void;
```

This event is raised when there is low memory on the target device.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"lowMemory"` |
| `callback` | (`args`: [`ApplicationEventData`](../interfaces/ApplicationEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "uncaughtError", 
   callback: (args: UnhandledErrorEventData) => void, 
   thisArg?: any): void;
```

This event is raised when an uncaught error occurs while the application is running.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"uncaughtError"` |
| `callback` | (`args`: [`UnhandledErrorEventData`](../interfaces/UnhandledErrorEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "discardedError", 
   callback: (args: DiscardedErrorEventData) => void, 
   thisArg?: any): void;
```

This event is raised when an discarded error occurs while the application is running.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"discardedError"` |
| `callback` | (`args`: [`DiscardedErrorEventData`](../interfaces/DiscardedErrorEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "orientationChanged", 
   callback: (args: OrientationChangedEventData) => void, 
   thisArg?: any): void;
```

This event is raised when the orientation of the application changes.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"orientationChanged"` |
| `callback` | (`args`: [`OrientationChangedEventData`](../interfaces/OrientationChangedEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "systemAppearanceChanged", 
   callback: (args: SystemAppearanceChangedEventData) => void, 
   thisArg?: any): void;
```

This event is raised when the operating system appearance changes
between light and dark theme (for Android);
between light and dark mode (for iOS) and vice versa.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"systemAppearanceChanged"` |
| `callback` | (`args`: [`SystemAppearanceChangedEventData`](../interfaces/SystemAppearanceChangedEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "layoutDirectionChanged", 
   callback: (args: LayoutDirectionChangedEventData) => void, 
   thisArg?: any): void;
```

This event is raised when the operating system layout direction changes
between ltr and rtl.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"layoutDirectionChanged"` |
| `callback` | (`args`: [`LayoutDirectionChangedEventData`](../interfaces/LayoutDirectionChangedEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "fontScaleChanged", 
   callback: (args: FontScaleChangedEventData) => void, 
   thisArg?: any): void;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"fontScaleChanged"` |
| `callback` | (`args`: [`FontScaleChangedEventData`](../interfaces/FontScaleChangedEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

***

### orientationChangedEvent

```ts
readonly orientationChangedEvent: "orientationChanged" = "orientationChanged";
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

***

### resumeEvent

```ts
readonly resumeEvent: "resume" = "resume";
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

***

### started

```ts
started: boolean;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

***

### suspendEvent

```ts
readonly suspendEvent: "suspend" = "suspend";
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

***

### systemAppearanceChangedEvent

```ts
readonly systemAppearanceChangedEvent: "systemAppearanceChanged" = "systemAppearanceChanged";
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

***

### uncaughtErrorEvent

```ts
readonly uncaughtErrorEvent: "uncaughtError" = "uncaughtError";
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

***

### ~~hasListeners~~

```ts
static hasListeners: (eventName: string) => boolean;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` |

#### Returns

`boolean`

#### Deprecated

Use `Application.android.hasListeners()` instead.

***

### ~~notify~~

```ts
static notify: <T>(eventData: T) => void;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`ApplicationEventData`](../interfaces/ApplicationEventData.md) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventData` | `T` |

#### Returns

`void`

#### Deprecated

Use `Application.android.notify()` instead.

***

### ~~off~~

```ts
static off: (eventNames: string, callback?: any, thisArg?: any) => void;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventNames` | `string` |
| `callback?` | `any` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Deprecated

Use `Application.android.off()` instead.

***

### ~~on~~

```ts
static on: {
  (eventNames: string, callback: (args: ApplicationEventData) => void, thisArg?: any): void;
  (event: "cssChanged", callback: (args: CssChangedEventData) => void, thisArg?: any): void;
  (event: "livesync", callback: (args: ApplicationEventData) => void, thisArg?: any): void;
  (event: "launch", callback: (args: LaunchEventData) => void, thisArg?: any): void;
  (event: "displayed", callback: (args: ApplicationEventData) => void, thisArg?: any): void;
  (event: "suspend", callback: (args: ApplicationEventData) => void, thisArg?: any): void;
  (event: "resume", callback: (args: ApplicationEventData) => void, thisArg?: any): void;
  (event: "exit", callback: (args: ApplicationEventData) => void, thisArg?: any): void;
  (event: "lowMemory", callback: (args: ApplicationEventData) => void, thisArg?: any): void;
  (event: "uncaughtError", callback: (args: UnhandledErrorEventData) => void, thisArg?: any): void;
  (event: "discardedError", callback: (args: DiscardedErrorEventData) => void, thisArg?: any): void;
  (event: "orientationChanged", callback: (args: OrientationChangedEventData) => void, thisArg?: any): void;
  (event: "systemAppearanceChanged", callback: (args: SystemAppearanceChangedEventData) => void, thisArg?: any): void;
  (event: "layoutDirectionChanged", callback: (args: LayoutDirectionChangedEventData) => void, thisArg?: any): void;
  (event: "fontScaleChanged", callback: (args: FontScaleChangedEventData) => void, thisArg?: any): void;
};
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

#### Call Signature

```ts
(
   eventNames: string, 
   callback: (args: ApplicationEventData) => void, 
   thisArg?: any): void;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventNames` | `string` |
| `callback` | (`args`: [`ApplicationEventData`](../interfaces/ApplicationEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "cssChanged", 
   callback: (args: CssChangedEventData) => void, 
   thisArg?: any): void;
```

This event is raised when application css is changed.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"cssChanged"` |
| `callback` | (`args`: [`CssChangedEventData`](../interfaces/CssChangedEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "livesync", 
   callback: (args: ApplicationEventData) => void, 
   thisArg?: any): void;
```

Event raised then livesync operation is performed.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"livesync"` |
| `callback` | (`args`: [`ApplicationEventData`](../interfaces/ApplicationEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "launch", 
   callback: (args: LaunchEventData) => void, 
   thisArg?: any): void;
```

This event is raised on application launchEvent.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"launch"` |
| `callback` | (`args`: [`LaunchEventData`](../interfaces/LaunchEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "displayed", 
   callback: (args: ApplicationEventData) => void, 
   thisArg?: any): void;
```

**`Experimental`**

This event is raised after the application has performed most of its startup actions.
Its intent is to be suitable for measuring app startup times.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"displayed"` |
| `callback` | (`args`: [`ApplicationEventData`](../interfaces/ApplicationEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "suspend", 
   callback: (args: ApplicationEventData) => void, 
   thisArg?: any): void;
```

This event is raised when the Application is suspended.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"suspend"` |
| `callback` | (`args`: [`ApplicationEventData`](../interfaces/ApplicationEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "resume", 
   callback: (args: ApplicationEventData) => void, 
   thisArg?: any): void;
```

This event is raised when the Application is resumed after it has been suspended.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"resume"` |
| `callback` | (`args`: [`ApplicationEventData`](../interfaces/ApplicationEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "exit", 
   callback: (args: ApplicationEventData) => void, 
   thisArg?: any): void;
```

This event is raised when the Application is about to exit.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"exit"` |
| `callback` | (`args`: [`ApplicationEventData`](../interfaces/ApplicationEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "lowMemory", 
   callback: (args: ApplicationEventData) => void, 
   thisArg?: any): void;
```

This event is raised when there is low memory on the target device.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"lowMemory"` |
| `callback` | (`args`: [`ApplicationEventData`](../interfaces/ApplicationEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "uncaughtError", 
   callback: (args: UnhandledErrorEventData) => void, 
   thisArg?: any): void;
```

This event is raised when an uncaught error occurs while the application is running.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"uncaughtError"` |
| `callback` | (`args`: [`UnhandledErrorEventData`](../interfaces/UnhandledErrorEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "discardedError", 
   callback: (args: DiscardedErrorEventData) => void, 
   thisArg?: any): void;
```

This event is raised when an discarded error occurs while the application is running.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"discardedError"` |
| `callback` | (`args`: [`DiscardedErrorEventData`](../interfaces/DiscardedErrorEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "orientationChanged", 
   callback: (args: OrientationChangedEventData) => void, 
   thisArg?: any): void;
```

This event is raised when the orientation of the application changes.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"orientationChanged"` |
| `callback` | (`args`: [`OrientationChangedEventData`](../interfaces/OrientationChangedEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "systemAppearanceChanged", 
   callback: (args: SystemAppearanceChangedEventData) => void, 
   thisArg?: any): void;
```

This event is raised when the operating system appearance changes
between light and dark theme (for Android);
between light and dark mode (for iOS) and vice versa.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"systemAppearanceChanged"` |
| `callback` | (`args`: [`SystemAppearanceChangedEventData`](../interfaces/SystemAppearanceChangedEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "layoutDirectionChanged", 
   callback: (args: LayoutDirectionChangedEventData) => void, 
   thisArg?: any): void;
```

This event is raised when the operating system layout direction changes
between ltr and rtl.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"layoutDirectionChanged"` |
| `callback` | (`args`: [`LayoutDirectionChangedEventData`](../interfaces/LayoutDirectionChangedEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "fontScaleChanged", 
   callback: (args: FontScaleChangedEventData) => void, 
   thisArg?: any): void;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"fontScaleChanged"` |
| `callback` | (`args`: [`FontScaleChangedEventData`](../interfaces/FontScaleChangedEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Deprecated

Use `Application.android.on()` instead.

***

### ~~once~~

```ts
static once: {
  (eventNames: string, callback: (args: ApplicationEventData) => void, thisArg?: any): void;
  (event: "cssChanged", callback: (args: CssChangedEventData) => void, thisArg?: any): void;
  (event: "livesync", callback: (args: ApplicationEventData) => void, thisArg?: any): void;
  (event: "launch", callback: (args: LaunchEventData) => void, thisArg?: any): void;
  (event: "displayed", callback: (args: ApplicationEventData) => void, thisArg?: any): void;
  (event: "suspend", callback: (args: ApplicationEventData) => void, thisArg?: any): void;
  (event: "resume", callback: (args: ApplicationEventData) => void, thisArg?: any): void;
  (event: "exit", callback: (args: ApplicationEventData) => void, thisArg?: any): void;
  (event: "lowMemory", callback: (args: ApplicationEventData) => void, thisArg?: any): void;
  (event: "uncaughtError", callback: (args: UnhandledErrorEventData) => void, thisArg?: any): void;
  (event: "discardedError", callback: (args: DiscardedErrorEventData) => void, thisArg?: any): void;
  (event: "orientationChanged", callback: (args: OrientationChangedEventData) => void, thisArg?: any): void;
  (event: "systemAppearanceChanged", callback: (args: SystemAppearanceChangedEventData) => void, thisArg?: any): void;
  (event: "layoutDirectionChanged", callback: (args: LayoutDirectionChangedEventData) => void, thisArg?: any): void;
  (event: "fontScaleChanged", callback: (args: FontScaleChangedEventData) => void, thisArg?: any): void;
};
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

#### Call Signature

```ts
(
   eventNames: string, 
   callback: (args: ApplicationEventData) => void, 
   thisArg?: any): void;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventNames` | `string` |
| `callback` | (`args`: [`ApplicationEventData`](../interfaces/ApplicationEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "cssChanged", 
   callback: (args: CssChangedEventData) => void, 
   thisArg?: any): void;
```

This event is raised when application css is changed.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"cssChanged"` |
| `callback` | (`args`: [`CssChangedEventData`](../interfaces/CssChangedEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "livesync", 
   callback: (args: ApplicationEventData) => void, 
   thisArg?: any): void;
```

Event raised then livesync operation is performed.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"livesync"` |
| `callback` | (`args`: [`ApplicationEventData`](../interfaces/ApplicationEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "launch", 
   callback: (args: LaunchEventData) => void, 
   thisArg?: any): void;
```

This event is raised on application launchEvent.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"launch"` |
| `callback` | (`args`: [`LaunchEventData`](../interfaces/LaunchEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "displayed", 
   callback: (args: ApplicationEventData) => void, 
   thisArg?: any): void;
```

**`Experimental`**

This event is raised after the application has performed most of its startup actions.
Its intent is to be suitable for measuring app startup times.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"displayed"` |
| `callback` | (`args`: [`ApplicationEventData`](../interfaces/ApplicationEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "suspend", 
   callback: (args: ApplicationEventData) => void, 
   thisArg?: any): void;
```

This event is raised when the Application is suspended.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"suspend"` |
| `callback` | (`args`: [`ApplicationEventData`](../interfaces/ApplicationEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "resume", 
   callback: (args: ApplicationEventData) => void, 
   thisArg?: any): void;
```

This event is raised when the Application is resumed after it has been suspended.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"resume"` |
| `callback` | (`args`: [`ApplicationEventData`](../interfaces/ApplicationEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "exit", 
   callback: (args: ApplicationEventData) => void, 
   thisArg?: any): void;
```

This event is raised when the Application is about to exit.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"exit"` |
| `callback` | (`args`: [`ApplicationEventData`](../interfaces/ApplicationEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "lowMemory", 
   callback: (args: ApplicationEventData) => void, 
   thisArg?: any): void;
```

This event is raised when there is low memory on the target device.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"lowMemory"` |
| `callback` | (`args`: [`ApplicationEventData`](../interfaces/ApplicationEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "uncaughtError", 
   callback: (args: UnhandledErrorEventData) => void, 
   thisArg?: any): void;
```

This event is raised when an uncaught error occurs while the application is running.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"uncaughtError"` |
| `callback` | (`args`: [`UnhandledErrorEventData`](../interfaces/UnhandledErrorEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "discardedError", 
   callback: (args: DiscardedErrorEventData) => void, 
   thisArg?: any): void;
```

This event is raised when an discarded error occurs while the application is running.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"discardedError"` |
| `callback` | (`args`: [`DiscardedErrorEventData`](../interfaces/DiscardedErrorEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "orientationChanged", 
   callback: (args: OrientationChangedEventData) => void, 
   thisArg?: any): void;
```

This event is raised when the orientation of the application changes.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"orientationChanged"` |
| `callback` | (`args`: [`OrientationChangedEventData`](../interfaces/OrientationChangedEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "systemAppearanceChanged", 
   callback: (args: SystemAppearanceChangedEventData) => void, 
   thisArg?: any): void;
```

This event is raised when the operating system appearance changes
between light and dark theme (for Android);
between light and dark mode (for iOS) and vice versa.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"systemAppearanceChanged"` |
| `callback` | (`args`: [`SystemAppearanceChangedEventData`](../interfaces/SystemAppearanceChangedEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "layoutDirectionChanged", 
   callback: (args: LayoutDirectionChangedEventData) => void, 
   thisArg?: any): void;
```

This event is raised when the operating system layout direction changes
between ltr and rtl.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"layoutDirectionChanged"` |
| `callback` | (`args`: [`LayoutDirectionChangedEventData`](../interfaces/LayoutDirectionChangedEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "fontScaleChanged", 
   callback: (args: FontScaleChangedEventData) => void, 
   thisArg?: any): void;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"fontScaleChanged"` |
| `callback` | (`args`: [`FontScaleChangedEventData`](../interfaces/FontScaleChangedEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Deprecated

Use `Application.android.once()` instead.

## Accessors

### android

#### Get Signature

```ts
get android(): AndroidApplication;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

##### Returns

[`AndroidApplication`](AndroidApplication.md)

***

### AndroidApplication

#### Get Signature

```ts
get AndroidApplication(): AndroidApplication;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

##### Returns

[`AndroidApplication`](AndroidApplication.md)

***

### inBackground

#### Get Signature

```ts
get inBackground(): boolean;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

##### Returns

`boolean`

***

### ios

#### Get Signature

```ts
get ios(): iOSApplication;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

##### Returns

[`iOSApplication`](iOSApplication.md)

***

### iOSApplication

#### Get Signature

```ts
get iOSApplication(): iOSApplication;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

##### Returns

[`iOSApplication`](iOSApplication.md)

***

### suspended

#### Get Signature

```ts
get suspended(): boolean;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

##### Returns

`boolean`

## Methods

### addCss()

```ts
addCss(cssText: string, attributeScoped?: boolean): void;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `cssText` | `string` |
| `attributeScoped?` | `boolean` |

#### Returns

`void`

***

### applyCssClass()

```ts
applyCssClass(
   rootView: View, 
   cssClasses: string[], 
   newCssClass: string, 
   skipCssUpdate?: boolean): void;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

Applies the the `newCssClass` to the `rootView` and removes all other css classes from `cssClasses`
previously applied to the `rootView`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `rootView` | [`View`](View.md) | - |
| `cssClasses` | `string`[] | - |
| `newCssClass` | `string` | - |
| `skipCssUpdate?` | `boolean` | - |

#### Returns

`void`

***

### createRootView()

```ts
createRootView(
   view?: View, 
   fireLaunchEvent?: boolean, 
   additionalLanchEventData?: any): View;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `view?` | [`View`](View.md) |
| `fireLaunchEvent?` | `boolean` |
| `additionalLanchEventData?` | `any` |

#### Returns

[`View`](View.md)

***

### getCssFileName()

```ts
getCssFileName(): string;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

Gets css file name for the application.

#### Returns

`string`

***

### getLayoutDirection()

```ts
protected getLayoutDirection(): LayoutDirectionType;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

#### Returns

[`LayoutDirectionType`](../namespaces/CoreTypes/type-aliases/LayoutDirectionType.md)

***

### getMainEntry()

```ts
getMainEntry(): any;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

#### Returns

`any`

The main entry of the application

***

### getNativeApplication()

```ts
getNativeApplication(): any;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

#### Returns

`any`

***

### getOrientation()

```ts
protected getOrientation(): "portrait" | "landscape" | "unknown";
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

#### Returns

`"portrait"` \| `"landscape"` \| `"unknown"`

***

### getResources()

```ts
getResources(): any;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

Get application level static resources.

#### Returns

`any`

***

### getRootView()

```ts
getRootView(): View;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

#### Returns

[`View`](View.md)

***

### getSystemAppearance()

```ts
protected getSystemAppearance(): "dark" | "light";
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

#### Returns

`"dark"` \| `"light"`

***

### hasLaunched()

```ts
hasLaunched(): boolean;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

#### Returns

`boolean`

***

### initRootView()

```ts
initRootView(rootView: View): void;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `rootView` | [`View`](View.md) |

#### Returns

`void`

***

### layoutDirection()

```ts
layoutDirection(): LayoutDirectionType;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

#### Returns

[`LayoutDirectionType`](../namespaces/CoreTypes/type-aliases/LayoutDirectionType.md)

***

### layoutDirectionChanged()

```ts
layoutDirectionChanged(rootView: View, newLayoutDirection: LayoutDirectionType): void;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

Updates root view classes including those of modals

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `rootView` | [`View`](View.md) | the root view |
| `newLayoutDirection` | [`LayoutDirectionType`](../namespaces/CoreTypes/type-aliases/LayoutDirectionType.md) | the new layout direction change |

#### Returns

`void`

***

### loadAppCss()

```ts
loadAppCss(): void;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

Loads immediately the app.css.
By default the app.css file is loaded shortly after "loaded".
For the Android snapshot the CSS can be parsed during the snapshot generation,
as the CSS does not depend on runtime APIs, and loadAppCss will be called explicitly.

#### Returns

`void`

***

### notifyLaunch()

```ts
protected notifyLaunch(additionalLanchEventData?: any): View;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `additionalLanchEventData?` | `any` |

#### Returns

[`View`](View.md)

***

### orientation()

```ts
orientation(): "portrait" | "landscape" | "unknown";
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

#### Returns

`"portrait"` \| `"landscape"` \| `"unknown"`

***

### orientationChanged()

```ts
orientationChanged(rootView: View, newOrientation: "portrait" | "landscape" | "unknown"): void;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `rootView` | [`View`](View.md) |
| `newOrientation` | `"portrait"` \| `"landscape"` \| `"unknown"` |

#### Returns

`void`

***

### resetRootView()

```ts
resetRootView(entry?: string | NavigationEntry): void;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entry?` | `string` \| `NavigationEntry` |

#### Returns

`void`

***

### run()

```ts
run(entry?: string | NavigationEntry): void;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entry?` | `string` \| `NavigationEntry` |

#### Returns

`void`

***

### setAutoSystemAppearanceChanged()

```ts
setAutoSystemAppearanceChanged(value: boolean): void;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

enable/disable systemAppearanceChanged

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`void`

***

### setCssFileName()

```ts
setCssFileName(cssFileName: string): void;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

Sets css file name for the application.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `cssFileName` | `string` |

#### Returns

`void`

***

### setInBackground()

```ts
setInBackground(value: boolean, additonalData?: any): void;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |
| `additonalData?` | `any` |

#### Returns

`void`

***

### setLayoutDirection()

```ts
protected setLayoutDirection(value: LayoutDirectionType): void;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`LayoutDirectionType`](../namespaces/CoreTypes/type-aliases/LayoutDirectionType.md) |

#### Returns

`void`

***

### setMaxRefreshRate()

```ts
setMaxRefreshRate(options?: {
  max?: number;
  min?: number;
  preferred?: number;
}): void;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

iOS Only
Dynamically change the preferred frame rate
For devices (iOS 15+) which support min/max/preferred frame rate you can specify ranges
For devices (iOS \< 15), you can specify the max frame rate
see: https://developer.apple.com/documentation/quartzcore/optimizing_promotion_refresh_rates_for_iphone_13_pro_and_ipad_pro
To use, ensure your Info.plist has:
```xml
  <key>CADisableMinimumFrameDurationOnPhone</key>
  <true/>
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | \{ `max?`: `number`; `min?`: `number`; `preferred?`: `number`; \} | \{ min?: number; max?: number; preferred?: number \} |
| `options.max?` | `number` | - |
| `options.min?` | `number` | - |
| `options.preferred?` | `number` | - |

#### Returns

`void`

***

### setOrientation()

```ts
protected setOrientation(value: "portrait" | "landscape" | "unknown"): void;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `"portrait"` \| `"landscape"` \| `"unknown"` |

#### Returns

`void`

***

### setResources()

```ts
setResources(res: any): void;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

Set application level static resources.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `res` | `any` |

#### Returns

`void`

***

### setSuspended()

```ts
setSuspended(value: boolean, additonalData?: any): void;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |
| `additonalData?` | `any` |

#### Returns

`void`

***

### setSystemAppearance()

```ts
protected setSystemAppearance(value: "dark" | "light"): void;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `"dark"` \| `"light"` |

#### Returns

`void`

***

### systemAppearance()

```ts
systemAppearance(): "dark" | "light";
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

#### Returns

`"dark"` \| `"light"`

***

### systemAppearanceChanged()

```ts
systemAppearanceChanged(rootView: View, newSystemAppearance: "dark" | "light"): void;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-common.ts)

Updates root view classes including those of modals

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `rootView` | [`View`](View.md) | the root view |
| `newSystemAppearance` | `"dark"` \| `"light"` | the new appearance change |

#### Returns

`void`
