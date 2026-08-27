---
title: NativeWindow
titleTemplate: :title - API / NativeScript
description: A window surface that hosts a NativeScript view tree. Wraps a platform window (iOS UIWindowScene + UIWindow, Android Activity) and owns the per-window root v...
contributors: false
---

Defined in: [native-window/index.d.ts:266](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L266)

A window surface that hosts a NativeScript view tree.

Wraps a platform window (iOS UIWindowScene + UIWindow, Android Activity) and owns the
per-window root view, its CSS classes and its lifecycle events. Instances are created by
the framework as the platform connects surfaces; reach them through
`Application.activeWindow`, `Application.primaryWindow`, `Application.getWindows()` or
`Application.getWindowById()`, and use `ios` / `android` to get at the native objects.

## Extends

- [`WindowBase`](WindowBase.md)

## Constructors

### Constructor

```ts
new NativeWindow(): NativeWindow;
```

#### Returns

`NativeWindow`

#### Inherited from

[`WindowBase`](WindowBase.md).[`constructor`](WindowBase.md#constructor)

## Properties

### android?

```ts
readonly optional android?: {
  activity: AppCompatActivity;
};
```

Defined in: [native-window/index.d.ts:71](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L71)

The Android surface backing this window, or `undefined` when not running on Android
or when the activity is already gone.

#### activity

```ts
readonly activity: AppCompatActivity;
```

#### Inherited from

[`WindowBase`](WindowBase.md).[`android`](WindowBase.md#android)

***

### id

```ts
readonly id: string;
```

Defined in: [native-window/index.d.ts:41](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L41)

Stable identifier of this window, unique for the lifetime of the JS context.
Survives a detach/re-attach, so it can be used to correlate a window across
an iOS scene reconnect or an Android activity recreation.

#### Inherited from

[`WindowBase`](WindowBase.md).[`id`](WindowBase.md#id)

***

### ios?

```ts
readonly optional ios?: {
  scene?: UIWindowScene;
  uiWindow: UIWindow;
};
```

Defined in: [native-window/index.d.ts:65](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L65)

The iOS surface backing this window, or `undefined` when not running on iOS.
`scene` is absent for apps still on the pre-scene (window-only) lifecycle.

#### scene?

```ts
readonly optional scene?: UIWindowScene;
```

#### uiWindow

```ts
readonly uiWindow: UIWindow;
```

#### Inherited from

[`WindowBase`](WindowBase.md).[`ios`](WindowBase.md#ios)

***

### isPrimary

```ts
readonly isPrimary: boolean;
```

Defined in: [native-window/index.d.ts:59](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L59)

Whether this is the application's primary window.

At most one window is primary at a time. When the primary window closes another
attached window is promoted and `primaryWindowChanged` is raised on the Application.

#### Inherited from

[`WindowBase`](WindowBase.md).[`isPrimary`](WindowBase.md#isprimary)

***

### role

```ts
readonly role: WindowRole;
```

Defined in: [native-window/index.d.ts:46](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L46)

The purpose this window surface serves.

#### Inherited from

[`WindowBase`](WindowBase.md).[`role`](WindowBase.md#role)

***

### rootView

```ts
readonly rootView: View;
```

Defined in: [native-window/index.d.ts:270](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L270)

The root view currently hosted by this window, if any.

***

### state

```ts
readonly state: WindowState;
```

Defined in: [native-window/index.d.ts:51](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L51)

Where this window currently sits in its lifecycle.

#### Inherited from

[`WindowBase`](WindowBase.md).[`state`](WindowBase.md#state)

***

### propertyChangeEvent

```ts
static propertyChangeEvent: string;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/data/observable/index.ts)

String value used when hooking to propertyChange event.

#### Ns Event

propertyChange

#### Inherited from

[`WindowBase`](WindowBase.md).[`propertyChangeEvent`](WindowBase.md#propertychangeevent)

## Methods

### \_createPropertyChangeData()

```ts
_createPropertyChangeData(
   propertyName: string, 
   value: any, 
   oldValue?: any): PropertyChangeData;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/data/observable/index.ts)

This method is intended to be overriden by inheritors to provide additional implementation.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `propertyName` | `string` |
| `value` | `any` |
| `oldValue?` | `any` |

#### Returns

[`PropertyChangeData`](../interfaces/PropertyChangeData.md)

#### Inherited from

[`WindowBase`](WindowBase.md).[`_createPropertyChangeData`](WindowBase.md#createpropertychangedata)

***

### \_emit()

```ts
_emit(eventName: string): void;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/data/observable/index.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` |

#### Returns

`void`

#### Inherited from

[`WindowBase`](WindowBase.md).[`_emit`](WindowBase.md#emit)

***

### addEventListener()

```ts
addEventListener(
   eventName: string, 
   callback: (data: EventData) => void, 
   thisArg?: any, 
   once?: boolean): void;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/data/observable/index.ts)

Adds a listener for the specified event name.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `string` | Name of the event to attach to. |
| `callback` | (`data`: [`EventData`](../interfaces/EventData.md)) => `void` | A function to be called when some of the specified event(s) is raised. |
| `thisArg?` | `any` | An optional parameter which when set will be used as "this" in callback method call. |
| `once?` | `boolean` | An optional parameter which when set will cause the event listener to fire once. |

#### Returns

`void`

#### Inherited from

[`WindowBase`](WindowBase.md).[`addEventListener`](WindowBase.md#addeventlistener)

***

### close()

```ts
abstract close(): void;
```

Defined in: [native-window/index.d.ts:79](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L79)

Closes this window.

Ends the window session: the native surface is dismissed, `close` is raised and the
window is dropped from the Application registry.

#### Returns

`void`

#### Inherited from

[`WindowBase`](WindowBase.md).[`close`](WindowBase.md#close)

***

### get()

```ts
get(name: string): any;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/data/observable/index.ts)

Gets the value of the specified property.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

`any`

#### Inherited from

[`WindowBase`](WindowBase.md).[`get`](WindowBase.md#get)

***

### hasListeners()

```ts
hasListeners(eventName: string): boolean;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/data/observable/index.ts)

Checks whether a listener is registered for the specified event name.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `string` | The name of the event to check for. |

#### Returns

`boolean`

#### Inherited from

[`WindowBase`](WindowBase.md).[`hasListeners`](WindowBase.md#haslisteners)

***

### layoutDirection()

```ts
layoutDirection(): LayoutDirectionType;
```

Defined in: [native-window/index.d.ts:310](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L310)

The current layout direction of this window.

Read from the native surface while the window is attached; a detached window reports
the last value it saw. A read that catches a change the platform has not reported yet
also raises `layoutDirectionChanged`, so a change is never swallowed by the reading.

#### Returns

[`LayoutDirectionType`](../namespaces/CoreTypes/type-aliases/LayoutDirectionType.md)

***

### notify()

```ts
notify<T>(data: T): void;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/data/observable/index.ts)

Notify this Observable instance with some data. This causes all event
handlers on the Observable instance to be called, as well as any 'global'
event handlers set on the instance's class.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `Optional`\<[`EventData`](../interfaces/EventData.md), `"object"`\> |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `T` | an object that satisfies the EventData interface, though with an optional 'object' property. If left undefined, the 'object' property will implicitly be set as this Observable instance. |

#### Returns

`void`

#### Inherited from

[`WindowBase`](WindowBase.md).[`notify`](WindowBase.md#notify)

***

### notifyPropertyChange()

```ts
notifyPropertyChange(
   name: string, 
   value: any, 
   oldValue?: any): void;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/data/observable/index.ts)

Notifies all the registered listeners for the property change event.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `value` | `any` |
| `oldValue?` | `any` |

#### Returns

`void`

#### Inherited from

[`WindowBase`](WindowBase.md).[`notifyPropertyChange`](WindowBase.md#notifypropertychange)

***

### off()

#### Call Signature

```ts
off(
   event: "contentLoaded", 
   callback?: (data: NativeWindowEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:393](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L393)

Removes the listener(s) for the specified event name.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | `"contentLoaded"` | - |
| `callback?` | (`data`: [`NativeWindowEventData`](../interfaces/NativeWindowEventData.md)) => `void` | An optional specific event listener to remove (if omitted, all event listeners by this name will be removed). |
| `thisArg?` | `any` | An optional parameter which, when set, will be used to refine search of the correct event listener to be removed. |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`off`](WindowBase.md#off)

#### Call Signature

```ts
off(
   event: "activate", 
   callback?: (data: NativeWindowEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:394](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L394)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"activate"` |
| `callback?` | (`data`: [`NativeWindowEventData`](../interfaces/NativeWindowEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`off`](WindowBase.md#off)

#### Call Signature

```ts
off(
   event: "deactivate", 
   callback?: (data: NativeWindowEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:395](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L395)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"deactivate"` |
| `callback?` | (`data`: [`NativeWindowEventData`](../interfaces/NativeWindowEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`off`](WindowBase.md#off)

#### Call Signature

```ts
off(
   event: "background", 
   callback?: (data: NativeWindowEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:396](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L396)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"background"` |
| `callback?` | (`data`: [`NativeWindowEventData`](../interfaces/NativeWindowEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`off`](WindowBase.md#off)

#### Call Signature

```ts
off(
   event: "foreground", 
   callback?: (data: NativeWindowEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:397](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L397)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"foreground"` |
| `callback?` | (`data`: [`NativeWindowEventData`](../interfaces/NativeWindowEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`off`](WindowBase.md#off)

#### Call Signature

```ts
off(
   event: "attached", 
   callback?: (data: NativeWindowEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:398](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L398)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"attached"` |
| `callback?` | (`data`: [`NativeWindowEventData`](../interfaces/NativeWindowEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`off`](WindowBase.md#off)

#### Call Signature

```ts
off(
   event: "detached", 
   callback?: (data: NativeWindowEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:399](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L399)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"detached"` |
| `callback?` | (`data`: [`NativeWindowEventData`](../interfaces/NativeWindowEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`off`](WindowBase.md#off)

#### Call Signature

```ts
off(
   event: "close", 
   callback?: (data: NativeWindowEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:400](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L400)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `callback?` | (`data`: [`NativeWindowEventData`](../interfaces/NativeWindowEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`off`](WindowBase.md#off)

#### Call Signature

```ts
off(
   event: "displayed", 
   callback?: (data: NativeWindowEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:401](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L401)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"displayed"` |
| `callback?` | (`data`: [`NativeWindowEventData`](../interfaces/NativeWindowEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`off`](WindowBase.md#off)

#### Call Signature

```ts
off(
   event: "orientationChanged", 
   callback?: (data: WindowOrientationChangedEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:402](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L402)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"orientationChanged"` |
| `callback?` | (`data`: [`WindowOrientationChangedEventData`](../interfaces/WindowOrientationChangedEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`off`](WindowBase.md#off)

#### Call Signature

```ts
off(
   event: "systemAppearanceChanged", 
   callback?: (data: WindowSystemAppearanceChangedEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:403](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L403)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"systemAppearanceChanged"` |
| `callback?` | (`data`: [`WindowSystemAppearanceChangedEventData`](../interfaces/WindowSystemAppearanceChangedEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`off`](WindowBase.md#off)

#### Call Signature

```ts
off(
   event: "layoutDirectionChanged", 
   callback?: (data: WindowLayoutDirectionChangedEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:404](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L404)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"layoutDirectionChanged"` |
| `callback?` | (`data`: [`WindowLayoutDirectionChangedEventData`](../interfaces/WindowLayoutDirectionChangedEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`off`](WindowBase.md#off)

#### Call Signature

```ts
off(
   event: "activityCreated", 
   callback?: (args: AndroidActivityBundleEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:405](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L405)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"activityCreated"` |
| `callback?` | (`args`: [`AndroidActivityBundleEventData`](../interfaces/AndroidActivityBundleEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`off`](WindowBase.md#off)

#### Call Signature

```ts
off(
   event: "activityDestroyed", 
   callback?: (args: AndroidActivityEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:406](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L406)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"activityDestroyed"` |
| `callback?` | (`args`: [`AndroidActivityEventData`](../interfaces/AndroidActivityEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`off`](WindowBase.md#off)

#### Call Signature

```ts
off(
   event: "activityStarted", 
   callback?: (args: AndroidActivityEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:407](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L407)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"activityStarted"` |
| `callback?` | (`args`: [`AndroidActivityEventData`](../interfaces/AndroidActivityEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`off`](WindowBase.md#off)

#### Call Signature

```ts
off(
   event: "activityPaused", 
   callback?: (args: AndroidActivityEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:408](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L408)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"activityPaused"` |
| `callback?` | (`args`: [`AndroidActivityEventData`](../interfaces/AndroidActivityEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`off`](WindowBase.md#off)

#### Call Signature

```ts
off(
   event: "activityResumed", 
   callback?: (args: AndroidActivityEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:409](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L409)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"activityResumed"` |
| `callback?` | (`args`: [`AndroidActivityEventData`](../interfaces/AndroidActivityEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`off`](WindowBase.md#off)

#### Call Signature

```ts
off(
   event: "activityStopped", 
   callback?: (args: AndroidActivityEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:410](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L410)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"activityStopped"` |
| `callback?` | (`args`: [`AndroidActivityEventData`](../interfaces/AndroidActivityEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`off`](WindowBase.md#off)

#### Call Signature

```ts
off(
   event: "saveActivityState", 
   callback?: (args: AndroidActivityBundleEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:411](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L411)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"saveActivityState"` |
| `callback?` | (`args`: [`AndroidActivityBundleEventData`](../interfaces/AndroidActivityBundleEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`off`](WindowBase.md#off)

#### Call Signature

```ts
off(
   event: "activityResult", 
   callback?: (args: AndroidActivityResultEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:412](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L412)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"activityResult"` |
| `callback?` | (`args`: [`AndroidActivityResultEventData`](../interfaces/AndroidActivityResultEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`off`](WindowBase.md#off)

#### Call Signature

```ts
off(
   event: "activityBackPressed", 
   callback?: (args: AndroidActivityBackPressedEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:413](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L413)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"activityBackPressed"` |
| `callback?` | (`args`: [`AndroidActivityBackPressedEventData`](../interfaces/AndroidActivityBackPressedEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`off`](WindowBase.md#off)

#### Call Signature

```ts
off(
   event: "activityNewIntent", 
   callback?: (args: AndroidActivityNewIntentEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:414](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L414)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"activityNewIntent"` |
| `callback?` | (`args`: [`AndroidActivityNewIntentEventData`](../interfaces/AndroidActivityNewIntentEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`off`](WindowBase.md#off)

#### Call Signature

```ts
off(
   event: "activityRequestPermissions", 
   callback?: (args: AndroidActivityRequestPermissionsEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:415](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L415)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"activityRequestPermissions"` |
| `callback?` | (`args`: [`AndroidActivityRequestPermissionsEventData`](../interfaces/AndroidActivityRequestPermissionsEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`off`](WindowBase.md#off)

#### Call Signature

```ts
off(
   event: "sceneWillConnect", 
   callback?: (args: SceneEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:416](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L416)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"sceneWillConnect"` |
| `callback?` | (`args`: [`SceneEventData`](../interfaces/SceneEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`off`](WindowBase.md#off)

#### Call Signature

```ts
off(
   event: "sceneDidActivate", 
   callback?: (args: SceneEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:417](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L417)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"sceneDidActivate"` |
| `callback?` | (`args`: [`SceneEventData`](../interfaces/SceneEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`off`](WindowBase.md#off)

#### Call Signature

```ts
off(
   event: "sceneWillResignActive", 
   callback?: (args: SceneEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:418](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L418)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"sceneWillResignActive"` |
| `callback?` | (`args`: [`SceneEventData`](../interfaces/SceneEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`off`](WindowBase.md#off)

#### Call Signature

```ts
off(
   event: "sceneWillEnterForeground", 
   callback?: (args: SceneEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:419](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L419)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"sceneWillEnterForeground"` |
| `callback?` | (`args`: [`SceneEventData`](../interfaces/SceneEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`off`](WindowBase.md#off)

#### Call Signature

```ts
off(
   event: "sceneDidEnterBackground", 
   callback?: (args: SceneEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:420](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L420)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"sceneDidEnterBackground"` |
| `callback?` | (`args`: [`SceneEventData`](../interfaces/SceneEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`off`](WindowBase.md#off)

#### Call Signature

```ts
off(
   event: "sceneDidDisconnect", 
   callback?: (args: SceneEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:421](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L421)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"sceneDidDisconnect"` |
| `callback?` | (`args`: [`SceneEventData`](../interfaces/SceneEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`off`](WindowBase.md#off)

#### Call Signature

```ts
off(
   event: "sceneOpenURLContexts", 
   callback?: (args: SceneOpenURLContextsEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:422](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L422)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"sceneOpenURLContexts"` |
| `callback?` | (`args`: [`SceneOpenURLContextsEventData`](../interfaces/SceneOpenURLContextsEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`off`](WindowBase.md#off)

#### Call Signature

```ts
off(
   event: "sceneContinueUserActivity", 
   callback?: (args: SceneContinueUserActivityEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:423](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L423)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"sceneContinueUserActivity"` |
| `callback?` | (`args`: [`SceneContinueUserActivityEventData`](../interfaces/SceneContinueUserActivityEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`off`](WindowBase.md#off)

#### Call Signature

```ts
off(
   event: "scenePerformActionForShortcutItem", 
   callback?: (args: ScenePerformActionForShortcutItemEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:424](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L424)

Removes a listener for the specified event name. Omitting the callback removes every
listener registered for that event on this window.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"scenePerformActionForShortcutItem"` |
| `callback?` | (`args`: [`ScenePerformActionForShortcutItemEventData`](../interfaces/ScenePerformActionForShortcutItemEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`off`](WindowBase.md#off)

#### Call Signature

```ts
off(
   eventName: string, 
   callback?: (data: NativeWindowEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:425](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L425)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` |
| `callback?` | (`data`: [`NativeWindowEventData`](../interfaces/NativeWindowEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
WindowBase.off
```

***

### on()

#### Call Signature

```ts
on(
   event: "contentLoaded", 
   callback: (data: NativeWindowEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:321](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L321)

Raised when the root view content of this window is set or changed.

Bringing a window up follows a fixed order that app code can rely on:
Application `ready` -\> Application `windowOpen` -\> the raw platform connect/create
event (`sceneWillConnect` / `activityCreated`) -\> content resolution (the window
content resolver, or the legacy `launch` bridge for the first window) -\>
`contentLoaded` -\> `activate` and `displayed`.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"contentLoaded"` |
| `callback` | (`data`: [`NativeWindowEventData`](../interfaces/NativeWindowEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`on`](WindowBase.md#on)

#### Call Signature

```ts
on(
   event: "activate", 
   callback: (data: NativeWindowEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:326](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L326)

Raised when the window loses focus.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"activate"` |
| `callback` | (`data`: [`NativeWindowEventData`](../interfaces/NativeWindowEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`on`](WindowBase.md#on)

#### Call Signature

```ts
on(
   event: "deactivate", 
   callback: (data: NativeWindowEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:327](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L327)

Raised when the window enters the background.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"deactivate"` |
| `callback` | (`data`: [`NativeWindowEventData`](../interfaces/NativeWindowEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`on`](WindowBase.md#on)

#### Call Signature

```ts
on(
   event: "background", 
   callback: (data: NativeWindowEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:328](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L328)

Raised when the window enters the foreground.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"background"` |
| `callback` | (`data`: [`NativeWindowEventData`](../interfaces/NativeWindowEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`on`](WindowBase.md#on)

#### Call Signature

```ts
on(
   event: "foreground", 
   callback: (data: NativeWindowEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:329](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L329)

Raised when a native surface is bound to the window - both on the first connect and
on every re-attach after a `detached`.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"foreground"` |
| `callback` | (`data`: [`NativeWindowEventData`](../interfaces/NativeWindowEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`on`](WindowBase.md#on)

#### Call Signature

```ts
on(
   event: "attached", 
   callback: (data: NativeWindowEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:330](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L330)

Raised when the native surface goes away while the window session stays alive
(iOS scene disconnect, Android activity recreation).

The window stays registered on the Application and keeps its listeners, so the same
instance is handed back when a surface re-attaches and handlers registered before the
detach keep working afterwards.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"attached"` |
| `callback` | (`data`: [`NativeWindowEventData`](../interfaces/NativeWindowEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`on`](WindowBase.md#on)

#### Call Signature

```ts
on(
   event: "detached", 
   callback: (data: NativeWindowEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:331](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L331)

Raised when the window session ends for good.

Fires exactly once per window. Listeners stay registered for the whole teardown, so a
handler added at any earlier point still observes it; immediately after it is
dispatched the framework drops every listener on the instance, so nothing registered
on a window outlives the window.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"detached"` |
| `callback` | (`data`: [`NativeWindowEventData`](../interfaces/NativeWindowEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`on`](WindowBase.md#on)

#### Call Signature

```ts
on(
   event: "close", 
   callback: (data: NativeWindowEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:332](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L332)

Raised after the window content has been displayed for the first time.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `callback` | (`data`: [`NativeWindowEventData`](../interfaces/NativeWindowEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`on`](WindowBase.md#on)

#### Call Signature

```ts
on(
   event: "displayed", 
   callback: (data: NativeWindowEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:333](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L333)

Raised when the orientation of this window changes.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"displayed"` |
| `callback` | (`data`: [`NativeWindowEventData`](../interfaces/NativeWindowEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`on`](WindowBase.md#on)

#### Call Signature

```ts
on(
   event: "orientationChanged", 
   callback: (data: WindowOrientationChangedEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:334](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L334)

Raised when the system appearance of this window changes between light and dark.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"orientationChanged"` |
| `callback` | (`data`: [`WindowOrientationChangedEventData`](../interfaces/WindowOrientationChangedEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`on`](WindowBase.md#on)

#### Call Signature

```ts
on(
   event: "systemAppearanceChanged", 
   callback: (data: WindowSystemAppearanceChangedEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:335](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L335)

Raised when the layout direction of this window changes between ltr and rtl.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"systemAppearanceChanged"` |
| `callback` | (`data`: [`WindowSystemAppearanceChangedEventData`](../interfaces/WindowSystemAppearanceChangedEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`on`](WindowBase.md#on)

#### Call Signature

```ts
on(
   event: "layoutDirectionChanged", 
   callback: (data: WindowLayoutDirectionChangedEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:336](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L336)

Raised when the root view content of this window is set or changed.

Bringing a window up follows a fixed order that app code can rely on:
Application `ready` -\> Application `windowOpen` -\> the raw platform connect/create
event (`sceneWillConnect` / `activityCreated`) -\> content resolution (the window
content resolver, or the legacy `launch` bridge for the first window) -\>
`contentLoaded` -\> `activate` and `displayed`.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"layoutDirectionChanged"` |
| `callback` | (`data`: [`WindowLayoutDirectionChangedEventData`](../interfaces/WindowLayoutDirectionChangedEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`on`](WindowBase.md#on)

#### Call Signature

```ts
on(
   event: "activityCreated", 
   callback: (args: AndroidActivityBundleEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:337](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L337)

Raised when the root view content of this window is set or changed.

Bringing a window up follows a fixed order that app code can rely on:
Application `ready` -\> Application `windowOpen` -\> the raw platform connect/create
event (`sceneWillConnect` / `activityCreated`) -\> content resolution (the window
content resolver, or the legacy `launch` bridge for the first window) -\>
`contentLoaded` -\> `activate` and `displayed`.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"activityCreated"` |
| `callback` | (`args`: [`AndroidActivityBundleEventData`](../interfaces/AndroidActivityBundleEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`on`](WindowBase.md#on)

#### Call Signature

```ts
on(
   event: "activityDestroyed", 
   callback: (args: AndroidActivityEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:338](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L338)

Raised when the root view content of this window is set or changed.

Bringing a window up follows a fixed order that app code can rely on:
Application `ready` -\> Application `windowOpen` -\> the raw platform connect/create
event (`sceneWillConnect` / `activityCreated`) -\> content resolution (the window
content resolver, or the legacy `launch` bridge for the first window) -\>
`contentLoaded` -\> `activate` and `displayed`.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"activityDestroyed"` |
| `callback` | (`args`: [`AndroidActivityEventData`](../interfaces/AndroidActivityEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`on`](WindowBase.md#on)

#### Call Signature

```ts
on(
   event: "activityStarted", 
   callback: (args: AndroidActivityEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:339](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L339)

Raised when the root view content of this window is set or changed.

Bringing a window up follows a fixed order that app code can rely on:
Application `ready` -\> Application `windowOpen` -\> the raw platform connect/create
event (`sceneWillConnect` / `activityCreated`) -\> content resolution (the window
content resolver, or the legacy `launch` bridge for the first window) -\>
`contentLoaded` -\> `activate` and `displayed`.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"activityStarted"` |
| `callback` | (`args`: [`AndroidActivityEventData`](../interfaces/AndroidActivityEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`on`](WindowBase.md#on)

#### Call Signature

```ts
on(
   event: "activityPaused", 
   callback: (args: AndroidActivityEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:340](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L340)

Raised when the root view content of this window is set or changed.

Bringing a window up follows a fixed order that app code can rely on:
Application `ready` -\> Application `windowOpen` -\> the raw platform connect/create
event (`sceneWillConnect` / `activityCreated`) -\> content resolution (the window
content resolver, or the legacy `launch` bridge for the first window) -\>
`contentLoaded` -\> `activate` and `displayed`.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"activityPaused"` |
| `callback` | (`args`: [`AndroidActivityEventData`](../interfaces/AndroidActivityEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`on`](WindowBase.md#on)

#### Call Signature

```ts
on(
   event: "activityResumed", 
   callback: (args: AndroidActivityEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:341](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L341)

Raised when the root view content of this window is set or changed.

Bringing a window up follows a fixed order that app code can rely on:
Application `ready` -\> Application `windowOpen` -\> the raw platform connect/create
event (`sceneWillConnect` / `activityCreated`) -\> content resolution (the window
content resolver, or the legacy `launch` bridge for the first window) -\>
`contentLoaded` -\> `activate` and `displayed`.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"activityResumed"` |
| `callback` | (`args`: [`AndroidActivityEventData`](../interfaces/AndroidActivityEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`on`](WindowBase.md#on)

#### Call Signature

```ts
on(
   event: "activityStopped", 
   callback: (args: AndroidActivityEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:342](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L342)

Raised when the root view content of this window is set or changed.

Bringing a window up follows a fixed order that app code can rely on:
Application `ready` -\> Application `windowOpen` -\> the raw platform connect/create
event (`sceneWillConnect` / `activityCreated`) -\> content resolution (the window
content resolver, or the legacy `launch` bridge for the first window) -\>
`contentLoaded` -\> `activate` and `displayed`.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"activityStopped"` |
| `callback` | (`args`: [`AndroidActivityEventData`](../interfaces/AndroidActivityEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`on`](WindowBase.md#on)

#### Call Signature

```ts
on(
   event: "saveActivityState", 
   callback: (args: AndroidActivityBundleEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:343](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L343)

Raised when the root view content of this window is set or changed.

Bringing a window up follows a fixed order that app code can rely on:
Application `ready` -\> Application `windowOpen` -\> the raw platform connect/create
event (`sceneWillConnect` / `activityCreated`) -\> content resolution (the window
content resolver, or the legacy `launch` bridge for the first window) -\>
`contentLoaded` -\> `activate` and `displayed`.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"saveActivityState"` |
| `callback` | (`args`: [`AndroidActivityBundleEventData`](../interfaces/AndroidActivityBundleEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`on`](WindowBase.md#on)

#### Call Signature

```ts
on(
   event: "activityResult", 
   callback: (args: AndroidActivityResultEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:344](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L344)

Raised when the root view content of this window is set or changed.

Bringing a window up follows a fixed order that app code can rely on:
Application `ready` -\> Application `windowOpen` -\> the raw platform connect/create
event (`sceneWillConnect` / `activityCreated`) -\> content resolution (the window
content resolver, or the legacy `launch` bridge for the first window) -\>
`contentLoaded` -\> `activate` and `displayed`.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"activityResult"` |
| `callback` | (`args`: [`AndroidActivityResultEventData`](../interfaces/AndroidActivityResultEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`on`](WindowBase.md#on)

#### Call Signature

```ts
on(
   event: "activityBackPressed", 
   callback: (args: AndroidActivityBackPressedEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:345](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L345)

Raised when the root view content of this window is set or changed.

Bringing a window up follows a fixed order that app code can rely on:
Application `ready` -\> Application `windowOpen` -\> the raw platform connect/create
event (`sceneWillConnect` / `activityCreated`) -\> content resolution (the window
content resolver, or the legacy `launch` bridge for the first window) -\>
`contentLoaded` -\> `activate` and `displayed`.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"activityBackPressed"` |
| `callback` | (`args`: [`AndroidActivityBackPressedEventData`](../interfaces/AndroidActivityBackPressedEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`on`](WindowBase.md#on)

#### Call Signature

```ts
on(
   event: "activityNewIntent", 
   callback: (args: AndroidActivityNewIntentEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:346](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L346)

Raised when the root view content of this window is set or changed.

Bringing a window up follows a fixed order that app code can rely on:
Application `ready` -\> Application `windowOpen` -\> the raw platform connect/create
event (`sceneWillConnect` / `activityCreated`) -\> content resolution (the window
content resolver, or the legacy `launch` bridge for the first window) -\>
`contentLoaded` -\> `activate` and `displayed`.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"activityNewIntent"` |
| `callback` | (`args`: [`AndroidActivityNewIntentEventData`](../interfaces/AndroidActivityNewIntentEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`on`](WindowBase.md#on)

#### Call Signature

```ts
on(
   event: "activityRequestPermissions", 
   callback: (args: AndroidActivityRequestPermissionsEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:347](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L347)

Raised when the root view content of this window is set or changed.

Bringing a window up follows a fixed order that app code can rely on:
Application `ready` -\> Application `windowOpen` -\> the raw platform connect/create
event (`sceneWillConnect` / `activityCreated`) -\> content resolution (the window
content resolver, or the legacy `launch` bridge for the first window) -\>
`contentLoaded` -\> `activate` and `displayed`.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"activityRequestPermissions"` |
| `callback` | (`args`: [`AndroidActivityRequestPermissionsEventData`](../interfaces/AndroidActivityRequestPermissionsEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`on`](WindowBase.md#on)

#### Call Signature

```ts
on(
   event: "sceneWillConnect", 
   callback: (args: SceneEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:348](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L348)

Raised when the root view content of this window is set or changed.

Bringing a window up follows a fixed order that app code can rely on:
Application `ready` -\> Application `windowOpen` -\> the raw platform connect/create
event (`sceneWillConnect` / `activityCreated`) -\> content resolution (the window
content resolver, or the legacy `launch` bridge for the first window) -\>
`contentLoaded` -\> `activate` and `displayed`.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"sceneWillConnect"` |
| `callback` | (`args`: [`SceneEventData`](../interfaces/SceneEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`on`](WindowBase.md#on)

#### Call Signature

```ts
on(
   event: "sceneDidActivate", 
   callback: (args: SceneEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:349](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L349)

Raised when the root view content of this window is set or changed.

Bringing a window up follows a fixed order that app code can rely on:
Application `ready` -\> Application `windowOpen` -\> the raw platform connect/create
event (`sceneWillConnect` / `activityCreated`) -\> content resolution (the window
content resolver, or the legacy `launch` bridge for the first window) -\>
`contentLoaded` -\> `activate` and `displayed`.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"sceneDidActivate"` |
| `callback` | (`args`: [`SceneEventData`](../interfaces/SceneEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`on`](WindowBase.md#on)

#### Call Signature

```ts
on(
   event: "sceneWillResignActive", 
   callback: (args: SceneEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:350](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L350)

Raised when the root view content of this window is set or changed.

Bringing a window up follows a fixed order that app code can rely on:
Application `ready` -\> Application `windowOpen` -\> the raw platform connect/create
event (`sceneWillConnect` / `activityCreated`) -\> content resolution (the window
content resolver, or the legacy `launch` bridge for the first window) -\>
`contentLoaded` -\> `activate` and `displayed`.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"sceneWillResignActive"` |
| `callback` | (`args`: [`SceneEventData`](../interfaces/SceneEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`on`](WindowBase.md#on)

#### Call Signature

```ts
on(
   event: "sceneWillEnterForeground", 
   callback: (args: SceneEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:351](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L351)

Raised when the root view content of this window is set or changed.

Bringing a window up follows a fixed order that app code can rely on:
Application `ready` -\> Application `windowOpen` -\> the raw platform connect/create
event (`sceneWillConnect` / `activityCreated`) -\> content resolution (the window
content resolver, or the legacy `launch` bridge for the first window) -\>
`contentLoaded` -\> `activate` and `displayed`.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"sceneWillEnterForeground"` |
| `callback` | (`args`: [`SceneEventData`](../interfaces/SceneEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`on`](WindowBase.md#on)

#### Call Signature

```ts
on(
   event: "sceneDidEnterBackground", 
   callback: (args: SceneEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:352](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L352)

Raised when the root view content of this window is set or changed.

Bringing a window up follows a fixed order that app code can rely on:
Application `ready` -\> Application `windowOpen` -\> the raw platform connect/create
event (`sceneWillConnect` / `activityCreated`) -\> content resolution (the window
content resolver, or the legacy `launch` bridge for the first window) -\>
`contentLoaded` -\> `activate` and `displayed`.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"sceneDidEnterBackground"` |
| `callback` | (`args`: [`SceneEventData`](../interfaces/SceneEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`on`](WindowBase.md#on)

#### Call Signature

```ts
on(
   event: "sceneDidDisconnect", 
   callback: (args: SceneEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:353](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L353)

Raised when the root view content of this window is set or changed.

Bringing a window up follows a fixed order that app code can rely on:
Application `ready` -\> Application `windowOpen` -\> the raw platform connect/create
event (`sceneWillConnect` / `activityCreated`) -\> content resolution (the window
content resolver, or the legacy `launch` bridge for the first window) -\>
`contentLoaded` -\> `activate` and `displayed`.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"sceneDidDisconnect"` |
| `callback` | (`args`: [`SceneEventData`](../interfaces/SceneEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`on`](WindowBase.md#on)

#### Call Signature

```ts
on(
   event: "sceneOpenURLContexts", 
   callback: (args: SceneOpenURLContextsEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:354](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L354)

Raised when the root view content of this window is set or changed.

Bringing a window up follows a fixed order that app code can rely on:
Application `ready` -\> Application `windowOpen` -\> the raw platform connect/create
event (`sceneWillConnect` / `activityCreated`) -\> content resolution (the window
content resolver, or the legacy `launch` bridge for the first window) -\>
`contentLoaded` -\> `activate` and `displayed`.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"sceneOpenURLContexts"` |
| `callback` | (`args`: [`SceneOpenURLContextsEventData`](../interfaces/SceneOpenURLContextsEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`on`](WindowBase.md#on)

#### Call Signature

```ts
on(
   event: "sceneContinueUserActivity", 
   callback: (args: SceneContinueUserActivityEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:355](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L355)

Raised when the root view content of this window is set or changed.

Bringing a window up follows a fixed order that app code can rely on:
Application `ready` -\> Application `windowOpen` -\> the raw platform connect/create
event (`sceneWillConnect` / `activityCreated`) -\> content resolution (the window
content resolver, or the legacy `launch` bridge for the first window) -\>
`contentLoaded` -\> `activate` and `displayed`.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"sceneContinueUserActivity"` |
| `callback` | (`args`: [`SceneContinueUserActivityEventData`](../interfaces/SceneContinueUserActivityEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`on`](WindowBase.md#on)

#### Call Signature

```ts
on(
   event: "scenePerformActionForShortcutItem", 
   callback: (args: ScenePerformActionForShortcutItemEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:356](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L356)

Adds a listener for the specified event name.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | `"scenePerformActionForShortcutItem"` | - |
| `callback` | (`args`: [`ScenePerformActionForShortcutItemEventData`](../interfaces/ScenePerformActionForShortcutItemEventData.md)) => `void` | The event listener to add. Will be called when an event of the given name is raised. |
| `thisArg?` | `any` | An optional parameter which, when set, will be bound as the `this` context when the callback is called. Falsy values will be not be bound. |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`on`](WindowBase.md#on)

#### Call Signature

```ts
on(
   eventName: string, 
   callback: (data: NativeWindowEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:357](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L357)

Raised when the root view content of this window is set or changed.

Bringing a window up follows a fixed order that app code can rely on:
Application `ready` -\> Application `windowOpen` -\> the raw platform connect/create
event (`sceneWillConnect` / `activityCreated`) -\> content resolution (the window
content resolver, or the legacy `launch` bridge for the first window) -\>
`contentLoaded` -\> `activate` and `displayed`.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` |
| `callback` | (`data`: [`NativeWindowEventData`](../interfaces/NativeWindowEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
WindowBase.on
```

***

### once()

#### Call Signature

```ts
once(
   event: "contentLoaded", 
   callback: (data: NativeWindowEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:359](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L359)

Adds a listener for the specified event name, which, once fired, will
remove itself.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | `"contentLoaded"` | - |
| `callback` | (`data`: [`NativeWindowEventData`](../interfaces/NativeWindowEventData.md)) => `void` | The event listener to add. Will be called when an event of the given name is raised. |
| `thisArg?` | `any` | An optional parameter which, when set, will be bound as the `this` context when the callback is called. Falsy values will be not be bound. |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`once`](WindowBase.md#once)

#### Call Signature

```ts
once(
   event: "activate", 
   callback: (data: NativeWindowEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:360](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L360)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"activate"` |
| `callback` | (`data`: [`NativeWindowEventData`](../interfaces/NativeWindowEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`once`](WindowBase.md#once)

#### Call Signature

```ts
once(
   event: "deactivate", 
   callback: (data: NativeWindowEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:361](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L361)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"deactivate"` |
| `callback` | (`data`: [`NativeWindowEventData`](../interfaces/NativeWindowEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`once`](WindowBase.md#once)

#### Call Signature

```ts
once(
   event: "background", 
   callback: (data: NativeWindowEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:362](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L362)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"background"` |
| `callback` | (`data`: [`NativeWindowEventData`](../interfaces/NativeWindowEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`once`](WindowBase.md#once)

#### Call Signature

```ts
once(
   event: "foreground", 
   callback: (data: NativeWindowEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:363](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L363)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"foreground"` |
| `callback` | (`data`: [`NativeWindowEventData`](../interfaces/NativeWindowEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`once`](WindowBase.md#once)

#### Call Signature

```ts
once(
   event: "attached", 
   callback: (data: NativeWindowEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:364](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L364)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"attached"` |
| `callback` | (`data`: [`NativeWindowEventData`](../interfaces/NativeWindowEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`once`](WindowBase.md#once)

#### Call Signature

```ts
once(
   event: "detached", 
   callback: (data: NativeWindowEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:365](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L365)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"detached"` |
| `callback` | (`data`: [`NativeWindowEventData`](../interfaces/NativeWindowEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`once`](WindowBase.md#once)

#### Call Signature

```ts
once(
   event: "close", 
   callback: (data: NativeWindowEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:366](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L366)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `callback` | (`data`: [`NativeWindowEventData`](../interfaces/NativeWindowEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`once`](WindowBase.md#once)

#### Call Signature

```ts
once(
   event: "displayed", 
   callback: (data: NativeWindowEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:367](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L367)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"displayed"` |
| `callback` | (`data`: [`NativeWindowEventData`](../interfaces/NativeWindowEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`once`](WindowBase.md#once)

#### Call Signature

```ts
once(
   event: "orientationChanged", 
   callback: (data: WindowOrientationChangedEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:368](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L368)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"orientationChanged"` |
| `callback` | (`data`: [`WindowOrientationChangedEventData`](../interfaces/WindowOrientationChangedEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`once`](WindowBase.md#once)

#### Call Signature

```ts
once(
   event: "systemAppearanceChanged", 
   callback: (data: WindowSystemAppearanceChangedEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:369](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L369)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"systemAppearanceChanged"` |
| `callback` | (`data`: [`WindowSystemAppearanceChangedEventData`](../interfaces/WindowSystemAppearanceChangedEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`once`](WindowBase.md#once)

#### Call Signature

```ts
once(
   event: "layoutDirectionChanged", 
   callback: (data: WindowLayoutDirectionChangedEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:370](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L370)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"layoutDirectionChanged"` |
| `callback` | (`data`: [`WindowLayoutDirectionChangedEventData`](../interfaces/WindowLayoutDirectionChangedEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`once`](WindowBase.md#once)

#### Call Signature

```ts
once(
   event: "activityCreated", 
   callback: (args: AndroidActivityBundleEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:371](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L371)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"activityCreated"` |
| `callback` | (`args`: [`AndroidActivityBundleEventData`](../interfaces/AndroidActivityBundleEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`once`](WindowBase.md#once)

#### Call Signature

```ts
once(
   event: "activityDestroyed", 
   callback: (args: AndroidActivityEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:372](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L372)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"activityDestroyed"` |
| `callback` | (`args`: [`AndroidActivityEventData`](../interfaces/AndroidActivityEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`once`](WindowBase.md#once)

#### Call Signature

```ts
once(
   event: "activityStarted", 
   callback: (args: AndroidActivityEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:373](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L373)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"activityStarted"` |
| `callback` | (`args`: [`AndroidActivityEventData`](../interfaces/AndroidActivityEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`once`](WindowBase.md#once)

#### Call Signature

```ts
once(
   event: "activityPaused", 
   callback: (args: AndroidActivityEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:374](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L374)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"activityPaused"` |
| `callback` | (`args`: [`AndroidActivityEventData`](../interfaces/AndroidActivityEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`once`](WindowBase.md#once)

#### Call Signature

```ts
once(
   event: "activityResumed", 
   callback: (args: AndroidActivityEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:375](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L375)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"activityResumed"` |
| `callback` | (`args`: [`AndroidActivityEventData`](../interfaces/AndroidActivityEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`once`](WindowBase.md#once)

#### Call Signature

```ts
once(
   event: "activityStopped", 
   callback: (args: AndroidActivityEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:376](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L376)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"activityStopped"` |
| `callback` | (`args`: [`AndroidActivityEventData`](../interfaces/AndroidActivityEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`once`](WindowBase.md#once)

#### Call Signature

```ts
once(
   event: "saveActivityState", 
   callback: (args: AndroidActivityBundleEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:377](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L377)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"saveActivityState"` |
| `callback` | (`args`: [`AndroidActivityBundleEventData`](../interfaces/AndroidActivityBundleEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`once`](WindowBase.md#once)

#### Call Signature

```ts
once(
   event: "activityResult", 
   callback: (args: AndroidActivityResultEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:378](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L378)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"activityResult"` |
| `callback` | (`args`: [`AndroidActivityResultEventData`](../interfaces/AndroidActivityResultEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`once`](WindowBase.md#once)

#### Call Signature

```ts
once(
   event: "activityBackPressed", 
   callback: (args: AndroidActivityBackPressedEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:379](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L379)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"activityBackPressed"` |
| `callback` | (`args`: [`AndroidActivityBackPressedEventData`](../interfaces/AndroidActivityBackPressedEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`once`](WindowBase.md#once)

#### Call Signature

```ts
once(
   event: "activityNewIntent", 
   callback: (args: AndroidActivityNewIntentEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:380](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L380)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"activityNewIntent"` |
| `callback` | (`args`: [`AndroidActivityNewIntentEventData`](../interfaces/AndroidActivityNewIntentEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`once`](WindowBase.md#once)

#### Call Signature

```ts
once(
   event: "activityRequestPermissions", 
   callback: (args: AndroidActivityRequestPermissionsEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:381](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L381)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"activityRequestPermissions"` |
| `callback` | (`args`: [`AndroidActivityRequestPermissionsEventData`](../interfaces/AndroidActivityRequestPermissionsEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`once`](WindowBase.md#once)

#### Call Signature

```ts
once(
   event: "sceneWillConnect", 
   callback: (args: SceneEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:382](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L382)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"sceneWillConnect"` |
| `callback` | (`args`: [`SceneEventData`](../interfaces/SceneEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`once`](WindowBase.md#once)

#### Call Signature

```ts
once(
   event: "sceneDidActivate", 
   callback: (args: SceneEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:383](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L383)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"sceneDidActivate"` |
| `callback` | (`args`: [`SceneEventData`](../interfaces/SceneEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`once`](WindowBase.md#once)

#### Call Signature

```ts
once(
   event: "sceneWillResignActive", 
   callback: (args: SceneEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:384](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L384)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"sceneWillResignActive"` |
| `callback` | (`args`: [`SceneEventData`](../interfaces/SceneEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`once`](WindowBase.md#once)

#### Call Signature

```ts
once(
   event: "sceneWillEnterForeground", 
   callback: (args: SceneEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:385](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L385)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"sceneWillEnterForeground"` |
| `callback` | (`args`: [`SceneEventData`](../interfaces/SceneEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`once`](WindowBase.md#once)

#### Call Signature

```ts
once(
   event: "sceneDidEnterBackground", 
   callback: (args: SceneEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:386](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L386)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"sceneDidEnterBackground"` |
| `callback` | (`args`: [`SceneEventData`](../interfaces/SceneEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`once`](WindowBase.md#once)

#### Call Signature

```ts
once(
   event: "sceneDidDisconnect", 
   callback: (args: SceneEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:387](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L387)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"sceneDidDisconnect"` |
| `callback` | (`args`: [`SceneEventData`](../interfaces/SceneEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`once`](WindowBase.md#once)

#### Call Signature

```ts
once(
   event: "sceneOpenURLContexts", 
   callback: (args: SceneOpenURLContextsEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:388](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L388)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"sceneOpenURLContexts"` |
| `callback` | (`args`: [`SceneOpenURLContextsEventData`](../interfaces/SceneOpenURLContextsEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`once`](WindowBase.md#once)

#### Call Signature

```ts
once(
   event: "sceneContinueUserActivity", 
   callback: (args: SceneContinueUserActivityEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:389](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L389)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"sceneContinueUserActivity"` |
| `callback` | (`args`: [`SceneContinueUserActivityEventData`](../interfaces/SceneContinueUserActivityEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`once`](WindowBase.md#once)

#### Call Signature

```ts
once(
   event: "scenePerformActionForShortcutItem", 
   callback: (args: ScenePerformActionForShortcutItemEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:390](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L390)

Adds a listener for the specified event name that is removed as soon as it is raised
once.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"scenePerformActionForShortcutItem"` |
| `callback` | (`args`: [`ScenePerformActionForShortcutItemEventData`](../interfaces/ScenePerformActionForShortcutItemEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`WindowBase`](WindowBase.md).[`once`](WindowBase.md#once)

#### Call Signature

```ts
once(
   eventName: string, 
   callback: (data: NativeWindowEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:391](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L391)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` |
| `callback` | (`data`: [`NativeWindowEventData`](../interfaces/NativeWindowEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
WindowBase.once
```

***

### orientation()

```ts
orientation(): "portrait" | "landscape" | "unknown";
```

Defined in: [native-window/index.d.ts:292](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L292)

The current orientation of this window.

Read from the native surface while the window is attached; a detached window reports
the last value it saw. A read that catches a change the platform has not reported yet
also raises `orientationChanged`, so a change is never swallowed by the reading.

#### Returns

`"portrait"` \| `"landscape"` \| `"unknown"`

***

### removeEventListener()

```ts
removeEventListener(
   eventName: string, 
   callback?: (data: EventData) => void, 
   thisArg?: any): void;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/data/observable/index.ts)

Removes listener(s) for the specified event name.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `string` | Name of the event to attach to. |
| `callback?` | (`data`: [`EventData`](../interfaces/EventData.md)) => `void` | An optional parameter pointing to a specific listener. If not defined, all listeners for the event names will be removed. |
| `thisArg?` | `any` | An optional parameter which when set will be used to refine search of the correct callback which will be removed as event listener. |

#### Returns

`void`

#### Inherited from

[`WindowBase`](WindowBase.md).[`removeEventListener`](WindowBase.md#removeeventlistener)

***

### set()

```ts
set(name: string, value: any): void;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/data/observable/index.ts)

Updates the specified property with the provided value.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `value` | `any` |

#### Returns

`void`

#### Inherited from

[`WindowBase`](WindowBase.md).[`set`](WindowBase.md#set)

***

### setContent()

```ts
setContent(content: string | View | NavigationEntry): void;
```

Defined in: [native-window/index.d.ts:283](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L283)

Sets the content of this window.

Replaces any content set earlier, tears the previous root view down and raises
`contentLoaded`.

A view that is already the root of another window is released from it first — that
window's `rootView` becomes null — while the view itself is left intact.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `content` | `string` \| [`View`](View.md) \| `NavigationEntry` | A View, a NavigationEntry, or the name of a module to load. |

#### Returns

`void`

***

### setProperty()

```ts
setProperty(name: string, value: any): void;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/data/observable/index.ts)

Updates the specified property with the provided value and raises a property change event and a specific change event based on the property name.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `value` | `any` |

#### Returns

`void`

#### Inherited from

[`WindowBase`](WindowBase.md).[`setProperty`](WindowBase.md#setproperty)

***

### systemAppearance()

```ts
systemAppearance(): "dark" | "light";
```

Defined in: [native-window/index.d.ts:301](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L301)

The current system appearance of this window.

Read from the native surface while the window is attached; a detached window reports
the last value it saw. A read that catches a change the platform has not reported yet
also raises `systemAppearanceChanged`, so a change is never swallowed by the reading.

#### Returns

`"dark"` \| `"light"`

***

### ~~addEventListener()~~

```ts
static addEventListener(
   eventName: string, 
   callback: (data: EventData) => void, 
   thisArg?: any, 
   once?: boolean): void;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/data/observable/index.ts)

Please avoid using the static event-handling APIs as they will be removed
in future.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` |
| `callback` | (`data`: [`EventData`](../interfaces/EventData.md)) => `void` |
| `thisArg?` | `any` |
| `once?` | `boolean` |

#### Returns

`void`

#### Deprecated

#### Inherited from

[`WindowBase`](WindowBase.md).[`addEventListener`](WindowBase.md#addeventlistener-1)

***

### ~~off()~~

```ts
static off(
   eventName: string, 
   callback?: (data: EventData) => void, 
   thisArg?: any): void;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/data/observable/index.ts)

Please avoid using the static event-handling APIs as they will be removed
in future.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` |
| `callback?` | (`data`: [`EventData`](../interfaces/EventData.md)) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Deprecated

#### Inherited from

[`WindowBase`](WindowBase.md).[`off`](WindowBase.md#off-1)

***

### ~~on()~~

```ts
static on(
   eventName: string, 
   callback: (data: EventData) => void, 
   thisArg?: any, 
   once?: boolean): void;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/data/observable/index.ts)

Please avoid using the static event-handling APIs as they will be removed
in future.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` |
| `callback` | (`data`: [`EventData`](../interfaces/EventData.md)) => `void` |
| `thisArg?` | `any` |
| `once?` | `boolean` |

#### Returns

`void`

#### Deprecated

#### Inherited from

[`WindowBase`](WindowBase.md).[`on`](WindowBase.md#on-1)

***

### ~~once()~~

```ts
static once(
   eventName: string, 
   callback: (data: EventData) => void, 
   thisArg?: any): void;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/data/observable/index.ts)

Please avoid using the static event-handling APIs as they will be removed
in future.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` |
| `callback` | (`data`: [`EventData`](../interfaces/EventData.md)) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Deprecated

#### Inherited from

[`WindowBase`](WindowBase.md).[`once`](WindowBase.md#once-1)

***

### ~~removeEventListener()~~

```ts
static removeEventListener(
   eventName: string, 
   callback?: (data: EventData) => void, 
   thisArg?: any): void;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/data/observable/index.ts)

Please avoid using the static event-handling APIs as they will be removed
in future.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` |
| `callback?` | (`data`: [`EventData`](../interfaces/EventData.md)) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Deprecated

#### Inherited from

[`WindowBase`](WindowBase.md).[`removeEventListener`](WindowBase.md#removeeventlistener-1)
