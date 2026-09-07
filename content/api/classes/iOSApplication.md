---
title: iOSApplication
titleTemplate: :title - API / NativeScript
contributors: false
---

Defined in: [application/application.d.ts:175](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application.d.ts#L175)

## Extends

- [`ApplicationCommon`](ApplicationCommon.md)

## Properties

### \_windows

```ts
protected _windows: NativeWindow[];
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`_windows`](ApplicationCommon.md#windows)

***

### backgroundEvent

```ts
readonly backgroundEvent: "background" = "background";
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`backgroundEvent`](ApplicationCommon.md#backgroundevent)

***

### cssChangedEvent

```ts
readonly cssChangedEvent: "cssChanged" = "cssChanged";
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`cssChangedEvent`](ApplicationCommon.md#csschangedevent)

***

### discardedErrorEvent

```ts
readonly discardedErrorEvent: "discardedError" = "discardedError";
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`discardedErrorEvent`](ApplicationCommon.md#discardederrorevent)

***

### displayedEvent

```ts
readonly displayedEvent: "displayed" = "displayed";
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`displayedEvent`](ApplicationCommon.md#displayedevent)

***

### exitEvent

```ts
readonly exitEvent: "exit" = "exit";
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

On Android, raised when the last window closes; the process may stay alive.
On iOS, raised when the process itself terminates.

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`exitEvent`](ApplicationCommon.md#exitevent)

***

### fontScaleChangedEvent

```ts
readonly fontScaleChangedEvent: "fontScaleChanged" = "fontScaleChanged";
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`fontScaleChangedEvent`](ApplicationCommon.md#fontscalechangedevent)

***

### foregroundEvent

```ts
readonly foregroundEvent: "foreground" = "foreground";
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`foregroundEvent`](ApplicationCommon.md#foregroundevent)

***

### hasListeners

```ts
hasListeners: (eventName: string) => boolean;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

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

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`initRootViewEvent`](ApplicationCommon.md#initrootviewevent)

***

### ~~launchEvent~~

```ts
readonly launchEvent: "launch" = "launch";
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

#### Deprecated

Use the 'ready' event for application initialization and Application.setWindowContentResolver() to provide window UI. 'launch' continues to fire before the first window's content is created, and its 'root' property is still honored, for backwards compatibility. It never fires for additional windows. In a scene-based app it fires with the first window's content, so a background launch that connects no scene does not raise it.

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`launchEvent`](ApplicationCommon.md#launchevent)

***

### layoutDirectionChangedEvent

```ts
readonly layoutDirectionChangedEvent: "layoutDirectionChanged" = "layoutDirectionChanged";
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`layoutDirectionChangedEvent`](ApplicationCommon.md#layoutdirectionchangedevent)

***

### livesyncEvent

```ts
readonly livesyncEvent: "livesync" = "livesync";
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`livesyncEvent`](ApplicationCommon.md#livesyncevent)

***

### loadAppCssEvent

```ts
readonly loadAppCssEvent: "loadAppCss" = "loadAppCss";
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`loadAppCssEvent`](ApplicationCommon.md#loadappcssevent)

***

### lowMemoryEvent

```ts
readonly lowMemoryEvent: "lowMemory" = "lowMemory";
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`lowMemoryEvent`](ApplicationCommon.md#lowmemoryevent)

***

### mainEntry

```ts
protected mainEntry: NavigationEntry;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`mainEntry`](ApplicationCommon.md#mainentry)

***

### notify

```ts
notify: <T>(eventData: T) => void;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

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

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

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
on: IOSApplicationOn;
```

Defined in: [application/application.d.ts:176](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application.d.ts#L176)

#### Overrides

[`ApplicationCommon`](ApplicationCommon.md).[`on`](ApplicationCommon.md#on)

***

### once

```ts
once: {
  (eventNames: string, callback: (args: ApplicationEventData) => void, thisArg?: any): void;
  (event: "cssChanged", callback: (args: CssChangedEventData) => void, thisArg?: any): void;
  (event: "livesync", callback: (args: ApplicationEventData) => void, thisArg?: any): void;
  (event: "launch", callback: (args: LaunchEventData) => void, thisArg?: any): void;
  (event: "ready", callback: (args: ApplicationEventData) => void, thisArg?: any): void;
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
  (event: "windowOpen", callback: (args: WindowOpenEventData) => void, thisArg?: any): void;
  (event: "windowClose", callback: (args: WindowCloseEventData) => void, thisArg?: any): void;
  (event: "primaryWindowChanged", callback: (args: PrimaryWindowChangedEventData) => void, thisArg?: any): void;
  (event: "sceneOpenURLContexts", callback: (args: SceneOpenURLContextsEventData) => void, thisArg?: any): void;
  (event: "sceneContinueUserActivity", callback: (args: SceneContinueUserActivityEventData) => void, thisArg?: any): void;
  (event: "scenePerformActionForShortcutItem", callback: (args: ScenePerformActionForShortcutItemEventData) => void, thisArg?: any): void;
};
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

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
   event: "ready", 
   callback: (args: ApplicationEventData) => void, 
   thisArg?: any): void;
```

This event is raised once the JS context is initialized.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"ready"` |
| `callback` | (`args`: [`ApplicationEventData`](../interfaces/ApplicationEventData.md)) => `void` |
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

On Android it is raised when the last window closes; the process may stay alive.
On iOS it is raised when the process itself terminates.

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

#### Call Signature

```ts
(
   event: "windowOpen", 
   callback: (args: WindowOpenEventData) => void, 
   thisArg?: any): void;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"windowOpen"` |
| `callback` | (`args`: [`WindowOpenEventData`](../interfaces/WindowOpenEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "windowClose", 
   callback: (args: WindowCloseEventData) => void, 
   thisArg?: any): void;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"windowClose"` |
| `callback` | (`args`: [`WindowCloseEventData`](../interfaces/WindowCloseEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "primaryWindowChanged", 
   callback: (args: PrimaryWindowChangedEventData) => void, 
   thisArg?: any): void;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"primaryWindowChanged"` |
| `callback` | (`args`: [`PrimaryWindowChangedEventData`](../interfaces/PrimaryWindowChangedEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "sceneOpenURLContexts", 
   callback: (args: SceneOpenURLContextsEventData) => void, 
   thisArg?: any): void;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"sceneOpenURLContexts"` |
| `callback` | (`args`: [`SceneOpenURLContextsEventData`](../interfaces/SceneOpenURLContextsEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "sceneContinueUserActivity", 
   callback: (args: SceneContinueUserActivityEventData) => void, 
   thisArg?: any): void;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"sceneContinueUserActivity"` |
| `callback` | (`args`: [`SceneContinueUserActivityEventData`](../interfaces/SceneContinueUserActivityEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "scenePerformActionForShortcutItem", 
   callback: (args: ScenePerformActionForShortcutItemEventData) => void, 
   thisArg?: any): void;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"scenePerformActionForShortcutItem"` |
| `callback` | (`args`: [`ScenePerformActionForShortcutItemEventData`](../interfaces/ScenePerformActionForShortcutItemEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`once`](ApplicationCommon.md#once)

***

### onSceneConfiguration

```ts
onSceneConfiguration: (application: UIApplication, connectingSceneSession: UISceneSession, options: UISceneConnectionOptions) => any;
```

Defined in: [application/application.d.ts:358](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application.d.ts#L358)

Register a callback to intercept scene configuration.

Called for every new scene session. Return a `UISceneConfiguration` to handle
the scene yourself (e.g. CarPlay, external display), or return `null`/`undefined`
to let NativeScript handle it with the default SceneDelegate.

NativeScript only auto-manages `UIWindowSceneSessionRoleApplication` scenes.
All other scene roles are ignored unless you provide a configuration here.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `application` | `UIApplication` |
| `connectingSceneSession` | `UISceneSession` |
| `options` | `UISceneConnectionOptions` |

#### Returns

`any`

#### Example

```ts
Application.ios.onSceneConfiguration = (app, session, options) => {
  if (session.role === CPTemplateApplicationSceneSessionRoleApplication) {
    const config = UISceneConfiguration.configurationWithNameSessionRole('CarPlay', session.role);
    config.delegateClass = MyCarPlaySceneDelegate;
    return config;
  }
  return null;
};
```

***

### orientationChangedEvent

```ts
readonly orientationChangedEvent: "orientationChanged" = "orientationChanged";
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`orientationChangedEvent`](ApplicationCommon.md#orientationchangedevent)

***

### primaryWindowChangedEvent

```ts
readonly primaryWindowChangedEvent: "primaryWindowChanged";
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`primaryWindowChangedEvent`](ApplicationCommon.md#primarywindowchangedevent)

***

### readyEvent

```ts
readonly readyEvent: "ready" = "ready";
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

Raised once per JS context, as soon as the context is initialized. It is never deferred,
so it also fires on a background launch where no window is created.

Guaranteed ordering: `ready` -\> `windowOpen` -\> raw connect/create events -\> content
resolution (the legacy `launch` bridge runs here, for the first window only) -\>
`contentLoaded` -\> `activate`/`displayed`.

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`readyEvent`](ApplicationCommon.md#readyevent)

***

### resumeEvent

```ts
readonly resumeEvent: "resume" = "resume";
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`resumeEvent`](ApplicationCommon.md#resumeevent)

***

### sceneDelegate

```ts
sceneDelegate: UIWindowSceneDelegate;
```

Defined in: [application/application.d.ts:334](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application.d.ts#L334)

The scene delegate for the application.
Get the current one or set a custom one.

***

### ~~shouldDelayLaunchEvent~~

```ts
shouldDelayLaunchEvent: boolean;
```

Defined in: [application/application.d.ts:370](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application.d.ts#L370)

Delays the 'launch' event, and with it the creation of the first window's content, until the
app first becomes active, instead of raising it while the app finishes launching.

Applies to non-scene apps only. It has no effect in a scene-based app, where each window's
content is resolved as its scene connects.

#### Deprecated

Use the 'ready' event for application initialization, and
Application.setWindowContentResolver() to provide window UI.

***

### started

```ts
started: boolean;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`started`](ApplicationCommon.md#started)

***

### suspendEvent

```ts
readonly suspendEvent: "suspend" = "suspend";
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

Reflects whole-app state: with multiple windows it is raised once the app itself is
no longer in the foreground, not when an individual window backgrounds. Listen on a
NativeWindow for per-window state.

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`suspendEvent`](ApplicationCommon.md#suspendevent)

***

### systemAppearanceChangedEvent

```ts
readonly systemAppearanceChangedEvent: "systemAppearanceChanged" = "systemAppearanceChanged";
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`systemAppearanceChangedEvent`](ApplicationCommon.md#systemappearancechangedevent)

***

### uncaughtErrorEvent

```ts
readonly uncaughtErrorEvent: "uncaughtError" = "uncaughtError";
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`uncaughtErrorEvent`](ApplicationCommon.md#uncaughterrorevent)

***

### windowCloseEvent

```ts
readonly windowCloseEvent: "windowClose";
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`windowCloseEvent`](ApplicationCommon.md#windowcloseevent)

***

### windowOpenEvent

```ts
readonly windowOpenEvent: "windowOpen";
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`windowOpenEvent`](ApplicationCommon.md#windowopenevent)

***

### ~~hasListeners~~

```ts
static hasListeners: (eventName: string) => boolean;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

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

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

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

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

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
  (event: "ready", callback: (args: ApplicationEventData) => void, thisArg?: any): void;
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
  (event: "windowOpen", callback: (args: WindowOpenEventData) => void, thisArg?: any): void;
  (event: "windowClose", callback: (args: WindowCloseEventData) => void, thisArg?: any): void;
  (event: "primaryWindowChanged", callback: (args: PrimaryWindowChangedEventData) => void, thisArg?: any): void;
  (event: "sceneOpenURLContexts", callback: (args: SceneOpenURLContextsEventData) => void, thisArg?: any): void;
  (event: "sceneContinueUserActivity", callback: (args: SceneContinueUserActivityEventData) => void, thisArg?: any): void;
  (event: "scenePerformActionForShortcutItem", callback: (args: ScenePerformActionForShortcutItemEventData) => void, thisArg?: any): void;
};
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

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
   event: "ready", 
   callback: (args: ApplicationEventData) => void, 
   thisArg?: any): void;
```

This event is raised once the JS context is initialized.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"ready"` |
| `callback` | (`args`: [`ApplicationEventData`](../interfaces/ApplicationEventData.md)) => `void` |
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

On Android it is raised when the last window closes; the process may stay alive.
On iOS it is raised when the process itself terminates.

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

#### Call Signature

```ts
(
   event: "windowOpen", 
   callback: (args: WindowOpenEventData) => void, 
   thisArg?: any): void;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"windowOpen"` |
| `callback` | (`args`: [`WindowOpenEventData`](../interfaces/WindowOpenEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "windowClose", 
   callback: (args: WindowCloseEventData) => void, 
   thisArg?: any): void;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"windowClose"` |
| `callback` | (`args`: [`WindowCloseEventData`](../interfaces/WindowCloseEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "primaryWindowChanged", 
   callback: (args: PrimaryWindowChangedEventData) => void, 
   thisArg?: any): void;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"primaryWindowChanged"` |
| `callback` | (`args`: [`PrimaryWindowChangedEventData`](../interfaces/PrimaryWindowChangedEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "sceneOpenURLContexts", 
   callback: (args: SceneOpenURLContextsEventData) => void, 
   thisArg?: any): void;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"sceneOpenURLContexts"` |
| `callback` | (`args`: [`SceneOpenURLContextsEventData`](../interfaces/SceneOpenURLContextsEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "sceneContinueUserActivity", 
   callback: (args: SceneContinueUserActivityEventData) => void, 
   thisArg?: any): void;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"sceneContinueUserActivity"` |
| `callback` | (`args`: [`SceneContinueUserActivityEventData`](../interfaces/SceneContinueUserActivityEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "scenePerformActionForShortcutItem", 
   callback: (args: ScenePerformActionForShortcutItemEventData) => void, 
   thisArg?: any): void;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"scenePerformActionForShortcutItem"` |
| `callback` | (`args`: [`ScenePerformActionForShortcutItemEventData`](../interfaces/ScenePerformActionForShortcutItemEventData.md)) => `void` |
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
  (event: "ready", callback: (args: ApplicationEventData) => void, thisArg?: any): void;
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
  (event: "windowOpen", callback: (args: WindowOpenEventData) => void, thisArg?: any): void;
  (event: "windowClose", callback: (args: WindowCloseEventData) => void, thisArg?: any): void;
  (event: "primaryWindowChanged", callback: (args: PrimaryWindowChangedEventData) => void, thisArg?: any): void;
  (event: "sceneOpenURLContexts", callback: (args: SceneOpenURLContextsEventData) => void, thisArg?: any): void;
  (event: "sceneContinueUserActivity", callback: (args: SceneContinueUserActivityEventData) => void, thisArg?: any): void;
  (event: "scenePerformActionForShortcutItem", callback: (args: ScenePerformActionForShortcutItemEventData) => void, thisArg?: any): void;
};
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

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
   event: "ready", 
   callback: (args: ApplicationEventData) => void, 
   thisArg?: any): void;
```

This event is raised once the JS context is initialized.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"ready"` |
| `callback` | (`args`: [`ApplicationEventData`](../interfaces/ApplicationEventData.md)) => `void` |
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

On Android it is raised when the last window closes; the process may stay alive.
On iOS it is raised when the process itself terminates.

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

#### Call Signature

```ts
(
   event: "windowOpen", 
   callback: (args: WindowOpenEventData) => void, 
   thisArg?: any): void;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"windowOpen"` |
| `callback` | (`args`: [`WindowOpenEventData`](../interfaces/WindowOpenEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "windowClose", 
   callback: (args: WindowCloseEventData) => void, 
   thisArg?: any): void;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"windowClose"` |
| `callback` | (`args`: [`WindowCloseEventData`](../interfaces/WindowCloseEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "primaryWindowChanged", 
   callback: (args: PrimaryWindowChangedEventData) => void, 
   thisArg?: any): void;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"primaryWindowChanged"` |
| `callback` | (`args`: [`PrimaryWindowChangedEventData`](../interfaces/PrimaryWindowChangedEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "sceneOpenURLContexts", 
   callback: (args: SceneOpenURLContextsEventData) => void, 
   thisArg?: any): void;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"sceneOpenURLContexts"` |
| `callback` | (`args`: [`SceneOpenURLContextsEventData`](../interfaces/SceneOpenURLContextsEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "sceneContinueUserActivity", 
   callback: (args: SceneContinueUserActivityEventData) => void, 
   thisArg?: any): void;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"sceneContinueUserActivity"` |
| `callback` | (`args`: [`SceneContinueUserActivityEventData`](../interfaces/SceneContinueUserActivityEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
(
   event: "scenePerformActionForShortcutItem", 
   callback: (args: ScenePerformActionForShortcutItemEventData) => void, 
   thisArg?: any): void;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"scenePerformActionForShortcutItem"` |
| `callback` | (`args`: [`ScenePerformActionForShortcutItemEventData`](../interfaces/ScenePerformActionForShortcutItemEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

#### Deprecated

Use `Application.android.once()` instead.

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`once`](ApplicationCommon.md#once-1)

## Accessors

### activeWindow

#### Get Signature

```ts
get activeWindow(): NativeWindow;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

Get the NativeWindow the user is currently interacting with - the one that activated most
recently and is still attached. Falls back to the primary window while no window holds
activation, which is the case before the first window activates and on a platform that
never raises `activate`.

##### Returns

[`NativeWindow`](NativeWindow.md)

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`activeWindow`](ApplicationCommon.md#activewindow)

***

### android

#### Get Signature

```ts
get android(): AndroidApplication;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

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

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

##### Returns

[`AndroidApplication`](AndroidApplication.md)

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`AndroidApplication`](ApplicationCommon.md#androidapplication)

***

### autoSystemAppearanceChanged

#### Get Signature

```ts
get autoSystemAppearanceChanged(): boolean;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

Boolean to enable/disable systemAppearanceChanged

##### Returns

`boolean`

#### Set Signature

```ts
set autoSystemAppearanceChanged(value: boolean): void;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`autoSystemAppearanceChanged`](ApplicationCommon.md#autosystemappearancechanged)

***

### delegate

#### Get Signature

```ts
get delegate(): any;
```

Defined in: [application/application.d.ts:196](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application.d.ts#L196)

The [UIApplicationDelegate](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIApplicationDelegate_Protocol/index.html) class.

##### Returns

`any`

#### Set Signature

```ts
set delegate(value: any): void;
```

Defined in: [application/application.d.ts:201](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application.d.ts#L201)

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

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

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

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

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

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

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

Defined in: [application/application.d.ts:186](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application.d.ts#L186)

The [UIApplication](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIApplication_Class/index.html).

##### Returns

`UIApplication`

***

### primaryWindow

#### Get Signature

```ts
get primaryWindow(): NativeWindow;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

Get the primary NativeWindow.

##### Returns

[`NativeWindow`](NativeWindow.md)

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`primaryWindow`](ApplicationCommon.md#primarywindow)

***

### rootController

#### Get Signature

```ts
get rootController(): UIViewController;
```

Defined in: [application/application.d.ts:181](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application.d.ts#L181)

The root view controller for the application.

##### Returns

`UIViewController`

***

### suspended

#### Get Signature

```ts
get suspended(): boolean;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

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

Defined in: [application/application.d.ts:191](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application.d.ts#L191)

The key window.

##### Returns

`UIWindow`

## Methods

### \_onPrimaryWindowPromoted()

```ts
protected _onPrimaryWindowPromoted(nativeWindow: NativeWindow): void;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

Hook for platform-specific bookkeeping right after a window takes over the primary
role, before `primaryWindowChanged` is raised.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `nativeWindow` | [`NativeWindow`](NativeWindow.md) |

#### Returns

`void`

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`_onPrimaryWindowPromoted`](ApplicationCommon.md#onprimarywindowpromoted)

***

### \_onWindowRegistered()

```ts
protected _onWindowRegistered(nativeWindow: NativeWindow): void;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

Hook for platform-specific bookkeeping right after a window joins the registry,
before `windowOpen` is raised.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `nativeWindow` | [`NativeWindow`](NativeWindow.md) |

#### Returns

`void`

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`_onWindowRegistered`](ApplicationCommon.md#onwindowregistered)

***

### addCss()

```ts
addCss(cssText: string, attributeScoped?: boolean): void;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

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

Defined in: [application/application.d.ts:244](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application.d.ts#L244)

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

Defined in: [application/application.d.ts:252](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application.d.ts#L252)

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

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

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

Defined in: [application/application.d.ts:291](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application.d.ts#L291)

Closes a secondary window/scene.
If no target is provided, attempts to close a non-primary active scene.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `target?` | `any` | Optional target to resolve the window to close. Can be a NativeWindow, a View, a UIWindow, a UIWindowScene, or a string scene identifier. |

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

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

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

### defaultDiscardSceneSessions()

```ts
defaultDiscardSceneSessions(application: UIApplication, sceneSessions: NSSet<UISceneSession>): void;
```

Defined in: [application/application.d.ts:236](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application.d.ts#L236)

NativeScript's default implementation of the `UIApplicationDelegate`
`applicationDidDiscardSceneSessions` method, which retires the windows belonging
to the discarded sessions.

It is installed automatically on the application delegate class unless that class
already implements the method, in which case forward to it from there so window
bookkeeping stays correct.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `application` | `UIApplication` |
| `sceneSessions` | `NSSet`\<`UISceneSession`\> |

#### Returns

`void`

***

### defaultSceneConfiguration()

```ts
defaultSceneConfiguration(
   application: UIApplication, 
   connectingSceneSession: UISceneSession, 
   options: UISceneConnectionOptions): UISceneConfiguration;
```

Defined in: [application/application.d.ts:225](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application.d.ts#L225)

NativeScript's default implementation of the `UIApplicationDelegate`
`applicationConfigurationForConnectingSceneSessionOptions` method.

It is installed automatically on the application delegate class unless that class
already implements the method. A delegate that does implement it can handle the
scenes it cares about and forward the rest here:

```ts
applicationConfigurationForConnectingSceneSessionOptions(app, session, options) {
  if (session.role === myCustomRole) {
    return myConfig;
  }
  return Application.ios.defaultSceneConfiguration(app, session, options);
}
```

`onSceneConfiguration` is consulted first. Scenes with the
`UIWindowSceneSessionRoleApplication` role then get a configuration backed by
NativeScript's SceneDelegate; every other role gets a bare configuration that
NativeScript does not manage.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `application` | `UIApplication` |
| `connectingSceneSession` | `UISceneSession` |
| `options` | `UISceneConnectionOptions` |

#### Returns

`UISceneConfiguration`

***

### ~~getAllScenes()~~

```ts
getAllScenes(): UIScene[];
```

Defined in: [application/application.d.ts:303](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application.d.ts#L303)

Gets all scenes for the application.

#### Returns

`UIScene`[]

#### Deprecated

Use `getWindows()` instead.

***

### ~~getAllWindows()~~

```ts
getAllWindows(): UIWindow[];
```

Defined in: [application/application.d.ts:297](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application.d.ts#L297)

Gets all windows for the application.

#### Returns

`UIWindow`[]

#### Deprecated

Use `getWindows()` instead.

***

### getCssFileName()

```ts
getCssFileName(): string;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

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

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

#### Returns

[`LayoutDirectionType`](../namespaces/CoreTypes/type-aliases/LayoutDirectionType.md)

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`getLayoutDirection`](ApplicationCommon.md#getlayoutdirection)

***

### getMainEntry()

```ts
getMainEntry(): any;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

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

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

#### Returns

`any`

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`getNativeApplication`](ApplicationCommon.md#getnativeapplication)

***

### getOrientation()

```ts
protected getOrientation(): "portrait" | "landscape" | "unknown";
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

#### Returns

`"portrait"` \| `"landscape"` \| `"unknown"`

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`getOrientation`](ApplicationCommon.md#getorientation)

***

### ~~getPrimaryScene()~~

```ts
getPrimaryScene(): any;
```

Defined in: [application/application.d.ts:321](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application.d.ts#L321)

Gets the primary scene for the application.

#### Returns

`any`

#### Deprecated

Use `primaryWindow?.ios?.scene` instead.

***

### ~~getPrimaryWindow()~~

```ts
getPrimaryWindow(): UIWindow;
```

Defined in: [application/application.d.ts:315](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application.d.ts#L315)

Gets the primary window for the application.

#### Returns

`UIWindow`

#### Deprecated

Use `primaryWindow?.ios?.uiWindow` instead.

***

### getResources()

```ts
getResources(): any;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

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

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

#### Returns

[`View`](View.md)

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`getRootView`](ApplicationCommon.md#getrootview)

***

### getSystemAppearance()

```ts
protected getSystemAppearance(): "dark" | "light";
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

#### Returns

`"dark"` \| `"light"`

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`getSystemAppearance`](ApplicationCommon.md#getsystemappearance)

***

### getWindowById()

```ts
getWindowById(id: string): NativeWindow;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

Get a registered NativeWindow by its id.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

#### Returns

[`NativeWindow`](NativeWindow.md)

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`getWindowById`](ApplicationCommon.md#getwindowbyid)

***

### getWindowContentResolver()

```ts
getWindowContentResolver(): WindowContentResolver;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

#### Returns

[`WindowContentResolver`](../type-aliases/WindowContentResolver.md)

The callback currently supplying window content, if any.

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`getWindowContentResolver`](ApplicationCommon.md#getwindowcontentresolver)

***

### getWindows()

#### Call Signature

```ts
getWindows(role: "all"): WindowBase[];
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

Get the active windows, filtered by role.

Defaults to the view-carrying app windows (`application` and `embedded`).
Pass `'all'` to include every registered surface, including ones that carry no view tree.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `role` | `"all"` |

##### Returns

[`WindowBase`](WindowBase.md)[]

##### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`getWindows`](ApplicationCommon.md#getwindows)

#### Call Signature

```ts
getWindows(role?: 
  | WindowRole
  | WindowRole[]): NativeWindow[];
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

Get the active windows, filtered by role.

Defaults to the view-carrying app windows (`application` and `embedded`).
Pass `'all'` to include every registered surface, including ones that carry no view tree.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `role?` | \| [`WindowRole`](../type-aliases/WindowRole.md) \| [`WindowRole`](../type-aliases/WindowRole.md)[] |

##### Returns

[`NativeWindow`](NativeWindow.md)[]

##### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`getWindows`](ApplicationCommon.md#getwindows)

#### Call Signature

```ts
getWindows(role?: 
  | "all"
  | WindowRole
  | WindowRole[]): WindowBase[];
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

Get the active windows, filtered by role.

Defaults to the view-carrying app windows (`application` and `embedded`).
Pass `'all'` to include every registered surface, including ones that carry no view tree.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `role?` | \| `"all"` \| [`WindowRole`](../type-aliases/WindowRole.md) \| [`WindowRole`](../type-aliases/WindowRole.md)[] |

##### Returns

[`WindowBase`](WindowBase.md)[]

##### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`getWindows`](ApplicationCommon.md#getwindows)

***

### ~~getWindowScenes()~~

```ts
getWindowScenes(): UIWindowScene[];
```

Defined in: [application/application.d.ts:309](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application.d.ts#L309)

Gets all window scenes for the application.

#### Returns

`UIWindowScene`[]

#### Deprecated

Use `getWindows()` instead.

***

### hasLaunched()

```ts
hasLaunched(): boolean;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

#### Returns

`boolean`

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`hasLaunched`](ApplicationCommon.md#haslaunched)

***

### initRootView()

```ts
initRootView(rootView: View, window?: NativeWindow): void;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `rootView` | [`View`](View.md) | - |
| `window?` | [`NativeWindow`](NativeWindow.md) | the window the root view belongs to. Supplies the window-scoped CSS classes; without it they come from the primary window. |

#### Returns

`void`

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`initRootView`](ApplicationCommon.md#initrootview)

***

### isUsingSceneLifecycle()

```ts
isUsingSceneLifecycle(): boolean;
```

Defined in: [application/application.d.ts:276](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application.d.ts#L276)

Checks if the application is using the scene lifecycle.

#### Returns

`boolean`

***

### ~~layoutDirection()~~

```ts
layoutDirection(): LayoutDirectionType;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

#### Returns

[`LayoutDirectionType`](../namespaces/CoreTypes/type-aliases/LayoutDirectionType.md)

#### Deprecated

Use Application.primaryWindow?.layoutDirection() - or the NativeWindow of the relevant view - instead. Continues to reflect the primary window.

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`layoutDirection`](ApplicationCommon.md#layoutdirection)

***

### layoutDirectionChanged()

```ts
layoutDirectionChanged(rootView: View, newLayoutDirection: LayoutDirectionType): void;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

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

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

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

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

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
openWindow(options?: WindowOpenOptions): void;
```

Defined in: [application/application.d.ts:284](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application.d.ts#L284)

Opens a new window (scene).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`WindowOpenOptions`](../interfaces/WindowOpenOptions.md) | Options for the new window. `options.data` is serialized into the activating scene's `NSUserActivity.userInfo`. |

#### Returns

`void`

#### Overrides

[`ApplicationCommon`](ApplicationCommon.md).[`openWindow`](ApplicationCommon.md#openwindow)

***

### ~~orientation()~~

```ts
orientation(): "portrait" | "landscape" | "unknown";
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

#### Returns

`"portrait"` \| `"landscape"` \| `"unknown"`

#### Deprecated

Use Application.primaryWindow?.orientation() - or the NativeWindow of the relevant view - instead. Continues to reflect the primary window.

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`orientation`](ApplicationCommon.md#orientation)

***

### orientationChanged()

```ts
orientationChanged(rootView: View, newOrientation: "portrait" | "landscape" | "unknown"): void;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

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

Defined in: [application/application.d.ts:261](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application.d.ts#L261)

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

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

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

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

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

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

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

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

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

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

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

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

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

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

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

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

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

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

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

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

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

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `"dark"` \| `"light"` |

#### Returns

`void`

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`setSystemAppearance`](ApplicationCommon.md#setsystemappearance)

***

### setWindowContentResolver()

```ts
setWindowContentResolver(resolver: WindowContentResolver): void;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

Sets the callback that supplies the UI for windows that need content.
Pass `null` to remove a previously set resolver.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `resolver` | [`WindowContentResolver`](../type-aliases/WindowContentResolver.md) |

#### Returns

`void`

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`setWindowContentResolver`](ApplicationCommon.md#setwindowcontentresolver)

***

### setWindowRootView()

```ts
setWindowRootView(window: UIWindow, view: View): void;
```

Defined in: [application/application.d.ts:328](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application.d.ts#L328)

Sets the root view for a specific window.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `window` | `UIWindow` | The window to set the root view for. |
| `view` | [`View`](View.md) | The view to set as the root view. |

#### Returns

`void`

***

### supportsMultipleScenes()

```ts
supportsMultipleScenes(): boolean;
```

Defined in: [application/application.d.ts:271](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application.d.ts#L271)

Checks if the application supports multiple scenes.

#### Returns

`boolean`

***

### supportsScenes()

```ts
supportsScenes(): boolean;
```

Defined in: [application/application.d.ts:266](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application.d.ts#L266)

Checks if the application supports scenes.

#### Returns

`boolean`

***

### ~~systemAppearance()~~

```ts
systemAppearance(): "dark" | "light";
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

#### Returns

`"dark"` \| `"light"`

#### Deprecated

Use Application.primaryWindow?.systemAppearance() - or the NativeWindow of the relevant view - instead. Continues to reflect the primary window.

#### Inherited from

[`ApplicationCommon`](ApplicationCommon.md).[`systemAppearance`](ApplicationCommon.md#systemappearance)

***

### systemAppearanceChanged()

```ts
systemAppearanceChanged(rootView: View, newSystemAppearance: "dark" | "light"): void;
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

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
