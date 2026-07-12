---
title: iOSApplication
titleTemplate: :title - API / NativeScript
contributors: false
---

Defined in: application/application.d.ts:152

## Extends

- [`ApplicationCommon`](ApplicationCommon.md)

## Properties

### autoSystemAppearanceChanged

```ts
autoSystemAppearanceChanged: boolean;
```

Defined in: application/application-common.d.ts:136

Boolean to enable/disable systemAppearanceChanged

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`autoSystemAppearanceChanged`](ApplicationCommon.md#autosystemappearancechanged)

***

### backgroundEvent

```ts
readonly backgroundEvent: "background" = "background";
```

Defined in: application/application-common.d.ts:85

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`backgroundEvent`](ApplicationCommon.md#backgroundevent)

***

### cssChangedEvent

```ts
readonly cssChangedEvent: "cssChanged" = "cssChanged";
```

Defined in: application/application-common.d.ts:98

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`cssChangedEvent`](ApplicationCommon.md#csschangedevent)

***

### discardedErrorEvent

```ts
readonly discardedErrorEvent: "discardedError" = "discardedError";
```

Defined in: application/application-common.d.ts:91

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`discardedErrorEvent`](ApplicationCommon.md#discardederrorevent)

***

### displayedEvent

```ts
readonly displayedEvent: "displayed" = "displayed";
```

Defined in: application/application-common.d.ts:84

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`displayedEvent`](ApplicationCommon.md#displayedevent)

***

### exitEvent

```ts
readonly exitEvent: "exit" = "exit";
```

Defined in: application/application-common.d.ts:88

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`exitEvent`](ApplicationCommon.md#exitevent)

***

### fontScaleChangedEvent

```ts
readonly fontScaleChangedEvent: "fontScaleChanged" = "fontScaleChanged";
```

Defined in: application/application-common.d.ts:95

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`fontScaleChangedEvent`](ApplicationCommon.md#fontscalechangedevent)

***

### foregroundEvent

```ts
readonly foregroundEvent: "foreground" = "foreground";
```

Defined in: application/application-common.d.ts:86

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`foregroundEvent`](ApplicationCommon.md#foregroundevent)

***

### hasListeners

```ts
hasListeners: (eventName: string) => boolean;
```

Defined in: application/application-common.d.ts:124

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` |

#### Returns

`boolean`

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`hasListeners`](ApplicationCommon.md#haslisteners)

***

### initRootViewEvent

```ts
readonly initRootViewEvent: "initRootView" = "initRootView";
```

Defined in: application/application-common.d.ts:99

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`initRootViewEvent`](ApplicationCommon.md#initrootviewevent)

***

### launchEvent

```ts
readonly launchEvent: "launch" = "launch";
```

Defined in: application/application-common.d.ts:82

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`launchEvent`](ApplicationCommon.md#launchevent)

***

### layoutDirectionChangedEvent

```ts
readonly layoutDirectionChangedEvent: "layoutDirectionChanged" = "layoutDirectionChanged";
```

Defined in: application/application-common.d.ts:94

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`layoutDirectionChangedEvent`](ApplicationCommon.md#layoutdirectionchangedevent)

***

### livesyncEvent

```ts
readonly livesyncEvent: "livesync" = "livesync";
```

Defined in: application/application-common.d.ts:96

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`livesyncEvent`](ApplicationCommon.md#livesyncevent)

***

### loadAppCssEvent

```ts
readonly loadAppCssEvent: "loadAppCss" = "loadAppCss";
```

Defined in: application/application-common.d.ts:97

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`loadAppCssEvent`](ApplicationCommon.md#loadappcssevent)

***

### lowMemoryEvent

```ts
readonly lowMemoryEvent: "lowMemory" = "lowMemory";
```

Defined in: application/application-common.d.ts:89

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`lowMemoryEvent`](ApplicationCommon.md#lowmemoryevent)

***

### mainEntry

```ts
protected mainEntry: NavigationEntry;
```

Defined in: application/application-common.d.ts:131

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`mainEntry`](ApplicationCommon.md#mainentry)

***

### notify

```ts
notify: <T>(eventData: T) => void;
```

Defined in: application/application-common.d.ts:123

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

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`notify`](ApplicationCommon.md#notify)

***

### off

```ts
off: (eventNames: string, callback?: any, thisArg?: any) => void;
```

Defined in: application/application-common.d.ts:122

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventNames` | `string` |
| `callback?` | `any` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`off`](ApplicationCommon.md#off)

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

Defined in: application/application-common.d.ts:120

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

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`on`](ApplicationCommon.md#on)

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

Defined in: application/application-common.d.ts:121

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

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`once`](ApplicationCommon.md#once)

***

### orientationChangedEvent

```ts
readonly orientationChangedEvent: "orientationChanged" = "orientationChanged";
```

Defined in: application/application-common.d.ts:92

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`orientationChangedEvent`](ApplicationCommon.md#orientationchangedevent)

***

### resumeEvent

```ts
readonly resumeEvent: "resume" = "resume";
```

Defined in: application/application-common.d.ts:87

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`resumeEvent`](ApplicationCommon.md#resumeevent)

***

### sceneDelegate

```ts
sceneDelegate: UIWindowSceneDelegate;
```

Defined in: application/application.d.ts:267

The scene delegate for the application.
Get the current one or set a custom one.

***

### shouldDelayLaunchEvent

```ts
shouldDelayLaunchEvent: boolean;
```

Defined in: application/application.d.ts:273

Flag to be set when the launch event should be delayed until the application has become active.
This is useful when you want to process notifications or data in the background without creating the UI.

***

### started

```ts
started: boolean;
```

Defined in: application/application-common.d.ts:132

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`started`](ApplicationCommon.md#started)

***

### suspendEvent

```ts
readonly suspendEvent: "suspend" = "suspend";
```

Defined in: application/application-common.d.ts:83

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`suspendEvent`](ApplicationCommon.md#suspendevent)

***

### systemAppearanceChangedEvent

```ts
readonly systemAppearanceChangedEvent: "systemAppearanceChanged" = "systemAppearanceChanged";
```

Defined in: application/application-common.d.ts:93

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`systemAppearanceChangedEvent`](ApplicationCommon.md#systemappearancechangedevent)

***

### uncaughtErrorEvent

```ts
readonly uncaughtErrorEvent: "uncaughtError" = "uncaughtError";
```

Defined in: application/application-common.d.ts:90

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`uncaughtErrorEvent`](ApplicationCommon.md#uncaughterrorevent)

***

### ~~hasListeners~~

```ts
static hasListeners: (eventName: string) => boolean;
```

Defined in: application/application-common.d.ts:119

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` |

#### Returns

`boolean`

#### Deprecated

Use `Application.android.hasListeners()` instead.

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`hasListeners`](ApplicationCommon.md#haslisteners-1)

***

### ~~notify~~

```ts
static notify: <T>(eventData: T) => void;
```

Defined in: application/application-common.d.ts:115

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

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`notify`](ApplicationCommon.md#notify-1)

***

### ~~off~~

```ts
static off: (eventNames: string, callback?: any, thisArg?: any) => void;
```

Defined in: application/application-common.d.ts:111

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

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`off`](ApplicationCommon.md#off-1)

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

Defined in: application/application-common.d.ts:103

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

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`on`](ApplicationCommon.md#on-1)

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

Defined in: application/application-common.d.ts:107

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

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`once`](ApplicationCommon.md#once-1)

## Accessors

### android

#### Get Signature

```ts
get android(): AndroidApplication;
```

Defined in: application/application-common.d.ts:242

##### Returns

[`AndroidApplication`](AndroidApplication.md)

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`android`](ApplicationCommon.md#android)

***

### AndroidApplication

#### Get Signature

```ts
get AndroidApplication(): AndroidApplication;
```

Defined in: application/application-common.d.ts:244

##### Returns

[`AndroidApplication`](AndroidApplication.md)

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`AndroidApplication`](ApplicationCommon.md#androidapplication)

***

### delegate

#### Get Signature

```ts
get delegate(): any;
```

Defined in: application/application.d.ts:171

The [UIApplicationDelegate](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIApplicationDelegate_Protocol/index.html) class.

##### Returns

`any`

#### Set Signature

```ts
set delegate(value: any): void;
```

Defined in: application/application.d.ts:176

Sets a custom [UIApplicationDelegate](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIApplicationDelegate_Protocol/index.html) class.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `any` |

##### Returns

`void`

***

### inBackground

#### Get Signature

```ts
get inBackground(): boolean;
```

Defined in: application/application-common.d.ts:238

##### Returns

`boolean`

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`inBackground`](ApplicationCommon.md#inbackground)

***

### ios

#### Get Signature

```ts
get ios(): iOSApplication;
```

Defined in: application/application-common.d.ts:243

##### Returns

`iOSApplication`

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`ios`](ApplicationCommon.md#ios)

***

### iOSApplication

#### Get Signature

```ts
get iOSApplication(): iOSApplication;
```

Defined in: application/application-common.d.ts:245

##### Returns

`iOSApplication`

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`iOSApplication`](ApplicationCommon.md#iosapplication)

***

### nativeApp

#### Get Signature

```ts
get nativeApp(): UIApplication;
```

Defined in: application/application.d.ts:161

The [UIApplication](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIApplication_Class/index.html).

##### Returns

`UIApplication`

***

### rootController

#### Get Signature

```ts
get rootController(): UIViewController;
```

Defined in: application/application.d.ts:156

The root view controller for the application.

##### Returns

`UIViewController`

***

### suspended

#### Get Signature

```ts
get suspended(): boolean;
```

Defined in: application/application-common.d.ts:240

##### Returns

`boolean`

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`suspended`](ApplicationCommon.md#suspended)

***

### window

#### Get Signature

```ts
get window(): UIWindow;
```

Defined in: application/application.d.ts:166

The key window.

##### Returns

`UIWindow`

## Methods

### addCss()

```ts
addCss(cssText: string, attributeScoped?: boolean): void;
```

Defined in: application/application-common.d.ts:208

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `cssText` | `string` |
| `attributeScoped?` | `boolean` |

#### Returns

`void`

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`addCss`](ApplicationCommon.md#addcss)

***

### addDelegateHandler()

```ts
addDelegateHandler<T>(methodName: T, handler: any): void;
```

Defined in: application/application.d.ts:184

Adds a delegate handler for the specified delegate method name. This method does not replace an existing handler,
but rather adds the new handler to the existing chain of handlers.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `string` \| `number` \| `symbol` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `methodName` | `T` | The name of the delegate method to add a handler for. |
| `handler` | `any` | A function that will be called when the specified delegate method is called. |

#### Returns

`void`

***

### addNotificationObserver()

```ts
addNotificationObserver(notificationName: string, onReceiveCallback: (notification: NSNotification) => void): NotificationObserver;
```

Defined in: application/application.d.ts:192

Adds an observer to the default notification center for the specified notification.
For more information, please visit 'https://developer.apple.com/library/mac/documentation/Cocoa/Reference/Foundation/Classes/NSNotificationCenter_Class/#//apple_ref/occ/instm/NSNotificationCenter/addObserver:selector:name:object:'

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `notificationName` | `string` | A string containing the name of the notification. |
| `onReceiveCallback` | (`notification`: `NSNotification`) => `void` | A callback function that will be called each time the observer receives a notification. |

#### Returns

`NotificationObserver`

***

### applyCssClass()

```ts
applyCssClass(
   rootView: View, 
   cssClasses: string[], 
   newCssClass: string, 
   skipCssUpdate?: boolean): void;
```

Defined in: application/application-common.d.ts:153

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

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`applyCssClass`](ApplicationCommon.md#applycssclass)

***

### closeWindow()

```ts
closeWindow(target?: any): void;
```

Defined in: application/application.d.ts:229

Closes a secondary window/scene.
If no target is provided, attempts to close a non-primary active scene.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `target?` | `any` | Optional target to resolve the scene to close. Can be a View, UIWindow, UIWindowScene, or a string scene identifier. |

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

Defined in: application/application-common.d.ts:181

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `view?` | [`View`](View.md) |
| `fireLaunchEvent?` | `boolean` |
| `additionalLanchEventData?` | `any` |

#### Returns

[`View`](View.md)

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`createRootView`](ApplicationCommon.md#createrootview)

***

### getAllScenes()

```ts
getAllScenes(): UIScene[];
```

Defined in: application/application.d.ts:239

Gets all scenes for the application.

#### Returns

`UIScene`[]

***

### getAllWindows()

```ts
getAllWindows(): UIWindow[];
```

Defined in: application/application.d.ts:234

Gets all windows for the application.

#### Returns

`UIWindow`[]

***

### getCssFileName()

```ts
getCssFileName(): string;
```

Defined in: application/application-common.d.ts:200

Gets css file name for the application.

#### Returns

`string`

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`getCssFileName`](ApplicationCommon.md#getcssfilename)

***

### getLayoutDirection()

```ts
protected getLayoutDirection(): LayoutDirectionType;
```

Defined in: application/application-common.d.ts:229

#### Returns

[`LayoutDirectionType`](../namespaces/CoreTypes/type-aliases/LayoutDirectionType.md)

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`getLayoutDirection`](ApplicationCommon.md#getlayoutdirection)

***

### getMainEntry()

```ts
getMainEntry(): any;
```

Defined in: application/application-common.d.ts:179

#### Returns

`any`

The main entry of the application

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`getMainEntry`](ApplicationCommon.md#getmainentry)

***

### getNativeApplication()

```ts
getNativeApplication(): any;
```

Defined in: application/application-common.d.ts:214

#### Returns

`any`

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`getNativeApplication`](ApplicationCommon.md#getnativeapplication)

***

### getOrientation()

```ts
protected getOrientation(): "portrait" | "landscape" | "unknown";
```

Defined in: application/application-common.d.ts:210

#### Returns

`"portrait"` \| `"landscape"` \| `"unknown"`

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`getOrientation`](ApplicationCommon.md#getorientation)

***

### getPrimaryScene()

```ts
getPrimaryScene(): UIWindowScene;
```

Defined in: application/application.d.ts:254

Gets the primary scene for the application.

#### Returns

`UIWindowScene`

***

### getPrimaryWindow()

```ts
getPrimaryWindow(): UIWindow;
```

Defined in: application/application.d.ts:249

Gets the primary window for the application.

#### Returns

`UIWindow`

***

### getResources()

```ts
getResources(): any;
```

Defined in: application/application-common.d.ts:188

Get application level static resources.

#### Returns

`any`

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`getResources`](ApplicationCommon.md#getresources)

***

### getRootView()

```ts
getRootView(): View;
```

Defined in: application/application-common.d.ts:182

#### Returns

[`View`](View.md)

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`getRootView`](ApplicationCommon.md#getrootview)

***

### getSystemAppearance()

```ts
protected getSystemAppearance(): "dark" | "light";
```

Defined in: application/application-common.d.ts:216

#### Returns

`"dark"` \| `"light"`

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`getSystemAppearance`](ApplicationCommon.md#getsystemappearance)

***

### getWindowScenes()

```ts
getWindowScenes(): UIWindowScene[];
```

Defined in: application/application.d.ts:244

Gets all window scenes for the application.

#### Returns

`UIWindowScene`[]

***

### hasLaunched()

```ts
hasLaunched(): boolean;
```

Defined in: application/application-common.d.ts:215

#### Returns

`boolean`

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`hasLaunched`](ApplicationCommon.md#haslaunched)

***

### initRootView()

```ts
initRootView(rootView: View): void;
```

Defined in: application/application-common.d.ts:184

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `rootView` | [`View`](View.md) |

#### Returns

`void`

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`initRootView`](ApplicationCommon.md#initrootview)

***

### isUsingSceneLifecycle()

```ts
isUsingSceneLifecycle(): boolean;
```

Defined in: application/application.d.ts:216

Checks if the application is using the scene lifecycle.

#### Returns

`boolean`

***

### layoutDirection()

```ts
layoutDirection(): LayoutDirectionType;
```

Defined in: application/application-common.d.ts:231

#### Returns

[`LayoutDirectionType`](../namespaces/CoreTypes/type-aliases/LayoutDirectionType.md)

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`layoutDirection`](ApplicationCommon.md#layoutdirection)

***

### layoutDirectionChanged()

```ts
layoutDirectionChanged(rootView: View, newLayoutDirection: LayoutDirectionType): void;
```

Defined in: application/application-common.d.ts:237

Updates root view classes including those of modals

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `rootView` | [`View`](View.md) | the root view |
| `newLayoutDirection` | [`LayoutDirectionType`](../namespaces/CoreTypes/type-aliases/LayoutDirectionType.md) | the new layout direction change |

#### Returns

`void`

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`layoutDirectionChanged`](ApplicationCommon.md#layoutdirectionchanged)

***

### loadAppCss()

```ts
loadAppCss(): void;
```

Defined in: application/application-common.d.ts:207

Loads immediately the app.css.
By default the app.css file is loaded shortly after "loaded".
For the Android snapshot the CSS can be parsed during the snapshot generation,
as the CSS does not depend on runtime APIs, and loadAppCss will be called explicitly.

#### Returns

`void`

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`loadAppCss`](ApplicationCommon.md#loadappcss)

***

### notifyLaunch()

```ts
protected notifyLaunch(additionalLanchEventData?: any): View;
```

Defined in: application/application-common.d.ts:180

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `additionalLanchEventData?` | `any` |

#### Returns

[`View`](View.md)

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`notifyLaunch`](ApplicationCommon.md#notifylaunch)

***

### openWindow()

```ts
openWindow(data: Record<any, any>): void;
```

Defined in: application/application.d.ts:222

Opens a new window with the specified data.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `Record`\<`any`, `any`\> | The data to pass to the new window. |

#### Returns

`void`

***

### orientation()

```ts
orientation(): "portrait" | "landscape" | "unknown";
```

Defined in: application/application-common.d.ts:212

#### Returns

`"portrait"` \| `"landscape"` \| `"unknown"`

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`orientation`](ApplicationCommon.md#orientation)

***

### orientationChanged()

```ts
orientationChanged(rootView: View, newOrientation: "portrait" | "landscape" | "unknown"): void;
```

Defined in: application/application-common.d.ts:213

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `rootView` | [`View`](View.md) |
| `newOrientation` | `"portrait"` \| `"landscape"` \| `"unknown"` |

#### Returns

`void`

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`orientationChanged`](ApplicationCommon.md#orientationchanged)

***

### removeNotificationObserver()

```ts
removeNotificationObserver(observer: any, notificationName: string): any;
```

Defined in: application/application.d.ts:201

Removes the observer for the specified notification from the default notification center.
For more information, please visit 'https://developer.apple.com/library/mac/documentation/Cocoa/Reference/Foundation/Classes/NSNotificationCenter_Class/#//apple_ref/occ/instm/NSNotificationCenter/addObserver:selector:name:object:'

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `observer` | `any` | The observer that was returned from the addNotificationObserver method. |
| `notificationName` | `string` | A string containing the name of the notification. |

#### Returns

`any`

***

### resetRootView()

```ts
resetRootView(entry?: string | NavigationEntry): void;
```

Defined in: application/application-common.d.ts:183

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entry?` | `string` \| `NavigationEntry` |

#### Returns

`void`

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`resetRootView`](ApplicationCommon.md#resetrootview)

***

### run()

```ts
run(entry?: string | NavigationEntry): void;
```

Defined in: application/application-common.d.ts:209

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entry?` | `string` \| `NavigationEntry` |

#### Returns

`void`

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`run`](ApplicationCommon.md#run)

***

### setAutoSystemAppearanceChanged()

```ts
setAutoSystemAppearanceChanged(value: boolean): void;
```

Defined in: application/application-common.d.ts:222

enable/disable systemAppearanceChanged

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`setAutoSystemAppearanceChanged`](ApplicationCommon.md#setautosystemappearancechanged)

***

### setCssFileName()

```ts
setCssFileName(cssFileName: string): void;
```

Defined in: application/application-common.d.ts:196

Sets css file name for the application.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `cssFileName` | `string` |

#### Returns

`void`

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`setCssFileName`](ApplicationCommon.md#setcssfilename)

***

### setInBackground()

```ts
setInBackground(value: boolean, additonalData?: any): void;
```

Defined in: application/application-common.d.ts:239

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |
| `additonalData?` | `any` |

#### Returns

`void`

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`setInBackground`](ApplicationCommon.md#setinbackground)

***

### setLayoutDirection()

```ts
protected setLayoutDirection(value: LayoutDirectionType): void;
```

Defined in: application/application-common.d.ts:230

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`LayoutDirectionType`](../namespaces/CoreTypes/type-aliases/LayoutDirectionType.md) |

#### Returns

`void`

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`setLayoutDirection`](ApplicationCommon.md#setlayoutdirection)

***

### setMaxRefreshRate()

```ts
setMaxRefreshRate(options?: {
  max?: number;
  min?: number;
  preferred?: number;
}): void;
```

Defined in: application/application-common.d.ts:171

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

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`setMaxRefreshRate`](ApplicationCommon.md#setmaxrefreshrate)

***

### setOrientation()

```ts
protected setOrientation(value: "portrait" | "landscape" | "unknown"): void;
```

Defined in: application/application-common.d.ts:211

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `"portrait"` \| `"landscape"` \| `"unknown"` |

#### Returns

`void`

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`setOrientation`](ApplicationCommon.md#setorientation)

***

### setResources()

```ts
setResources(res: any): void;
```

Defined in: application/application-common.d.ts:192

Set application level static resources.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `res` | `any` |

#### Returns

`void`

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`setResources`](ApplicationCommon.md#setresources)

***

### setSuspended()

```ts
setSuspended(value: boolean, additonalData?: any): void;
```

Defined in: application/application-common.d.ts:241

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |
| `additonalData?` | `any` |

#### Returns

`void`

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`setSuspended`](ApplicationCommon.md#setsuspended)

***

### setSystemAppearance()

```ts
protected setSystemAppearance(value: "dark" | "light"): void;
```

Defined in: application/application-common.d.ts:217

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `"dark"` \| `"light"` |

#### Returns

`void`

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`setSystemAppearance`](ApplicationCommon.md#setsystemappearance)

***

### setWindowRootView()

```ts
setWindowRootView(window: UIWindow, view: View): void;
```

Defined in: application/application.d.ts:261

Sets the root view for a specific window.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `window` | `UIWindow` | The window to set the root view for. |
| `view` | `View` | The view to set as the root view. |

#### Returns

`void`

***

### supportsMultipleScenes()

```ts
supportsMultipleScenes(): boolean;
```

Defined in: application/application.d.ts:211

Checks if the application supports multiple scenes.

#### Returns

`boolean`

***

### supportsScenes()

```ts
supportsScenes(): boolean;
```

Defined in: application/application.d.ts:206

Checks if the application supports scenes.

#### Returns

`boolean`

***

### systemAppearance()

```ts
systemAppearance(): "dark" | "light";
```

Defined in: application/application-common.d.ts:218

#### Returns

`"dark"` \| `"light"`

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`systemAppearance`](ApplicationCommon.md#systemappearance)

***

### systemAppearanceChanged()

```ts
systemAppearanceChanged(rootView: View, newSystemAppearance: "dark" | "light"): void;
```

Defined in: application/application-common.d.ts:228

Updates root view classes including those of modals

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `rootView` | [`View`](View.md) | the root view |
| `newSystemAppearance` | `"dark"` \| `"light"` | the new appearance change |

#### Returns

`void`

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`systemAppearanceChanged`](ApplicationCommon.md#systemappearancechanged)
