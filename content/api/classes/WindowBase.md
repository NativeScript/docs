---
title: WindowBase
titleTemplate: :title - API / NativeScript
description: Cross-platform base for any window surface. Carries identity, role, state, lifecycle events and the native accessors. Surfaces that host a NativeScript view ...
contributors: false
---

Defined in: [native-window/index.d.ts:35](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L35)

Cross-platform base for any window surface.

Carries identity, role, state, lifecycle events and the native accessors.
Surfaces that host a NativeScript view tree are [NativeWindow](NativeWindow.md) instances.

## Extends

- [`Observable`](Observable.md)

## Extended by

- [`NativeWindow`](NativeWindow.md)

## Constructors

### Constructor

```ts
new WindowBase(): WindowBase;
```

#### Returns

`WindowBase`

#### Inherited from

[`Observable`](Observable.md).[`constructor`](Observable.md#constructor)

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

***

### id

```ts
readonly id: string;
```

Defined in: [native-window/index.d.ts:41](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L41)

Stable identifier of this window, unique for the lifetime of the JS context.
Survives a detach/re-attach, so it can be used to correlate a window across
an iOS scene reconnect or an Android activity recreation.

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

***

### isPrimary

```ts
readonly isPrimary: boolean;
```

Defined in: [native-window/index.d.ts:59](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L59)

Whether this is the application's primary window.

At most one window is primary at a time. When the primary window closes another
attached window is promoted and `primaryWindowChanged` is raised on the Application.

***

### role

```ts
readonly role: WindowRole;
```

Defined in: [native-window/index.d.ts:46](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L46)

The purpose this window surface serves.

***

### state

```ts
readonly state: WindowState;
```

Defined in: [native-window/index.d.ts:51](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L51)

Where this window currently sits in its lifecycle.

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

[`Observable`](Observable.md).[`propertyChangeEvent`](Observable.md#propertychangeevent)

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

[`Observable`](Observable.md).[`_createPropertyChangeData`](Observable.md#createpropertychangedata)

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

[`Observable`](Observable.md).[`_emit`](Observable.md#emit)

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

[`Observable`](Observable.md).[`addEventListener`](Observable.md#addeventlistener)

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

[`Observable`](Observable.md).[`get`](Observable.md#get)

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

[`Observable`](Observable.md).[`hasListeners`](Observable.md#haslisteners)

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

[`Observable`](Observable.md).[`notify`](Observable.md#notify)

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

[`Observable`](Observable.md).[`notifyPropertyChange`](Observable.md#notifypropertychange)

***

### off()

#### Call Signature

```ts
off(
   event: "activate", 
   callback?: (data: WindowBaseEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:218](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L218)

Removes the listener(s) for the specified event name.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | `"activate"` | - |
| `callback?` | (`data`: [`WindowBaseEventData`](../interfaces/WindowBaseEventData.md)) => `void` | An optional specific event listener to remove (if omitted, all event listeners by this name will be removed). |
| `thisArg?` | `any` | An optional parameter which, when set, will be used to refine search of the correct event listener to be removed. |

##### Returns

`void`

##### Overrides

[`Observable`](Observable.md).[`off`](Observable.md#off)

#### Call Signature

```ts
off(
   event: "deactivate", 
   callback?: (data: WindowBaseEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:219](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L219)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"deactivate"` |
| `callback?` | (`data`: [`WindowBaseEventData`](../interfaces/WindowBaseEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.off
```

#### Call Signature

```ts
off(
   event: "background", 
   callback?: (data: WindowBaseEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:220](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L220)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"background"` |
| `callback?` | (`data`: [`WindowBaseEventData`](../interfaces/WindowBaseEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.off
```

#### Call Signature

```ts
off(
   event: "foreground", 
   callback?: (data: WindowBaseEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:221](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L221)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"foreground"` |
| `callback?` | (`data`: [`WindowBaseEventData`](../interfaces/WindowBaseEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.off
```

#### Call Signature

```ts
off(
   event: "attached", 
   callback?: (data: WindowBaseEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:222](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L222)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"attached"` |
| `callback?` | (`data`: [`WindowBaseEventData`](../interfaces/WindowBaseEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.off
```

#### Call Signature

```ts
off(
   event: "detached", 
   callback?: (data: WindowBaseEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:223](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L223)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"detached"` |
| `callback?` | (`data`: [`WindowBaseEventData`](../interfaces/WindowBaseEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.off
```

#### Call Signature

```ts
off(
   event: "close", 
   callback?: (data: WindowBaseEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:224](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L224)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `callback?` | (`data`: [`WindowBaseEventData`](../interfaces/WindowBaseEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.off
```

#### Call Signature

```ts
off(
   event: "displayed", 
   callback?: (data: WindowBaseEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:225](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L225)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"displayed"` |
| `callback?` | (`data`: [`WindowBaseEventData`](../interfaces/WindowBaseEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.off
```

#### Call Signature

```ts
off(
   event: "orientationChanged", 
   callback?: (data: WindowOrientationChangedEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:226](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L226)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"orientationChanged"` |
| `callback?` | (`data`: [`WindowOrientationChangedEventData`](../interfaces/WindowOrientationChangedEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.off
```

#### Call Signature

```ts
off(
   event: "systemAppearanceChanged", 
   callback?: (data: WindowSystemAppearanceChangedEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:227](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L227)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"systemAppearanceChanged"` |
| `callback?` | (`data`: [`WindowSystemAppearanceChangedEventData`](../interfaces/WindowSystemAppearanceChangedEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.off
```

#### Call Signature

```ts
off(
   event: "layoutDirectionChanged", 
   callback?: (data: WindowLayoutDirectionChangedEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:228](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L228)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"layoutDirectionChanged"` |
| `callback?` | (`data`: [`WindowLayoutDirectionChangedEventData`](../interfaces/WindowLayoutDirectionChangedEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.off
```

#### Call Signature

```ts
off(
   event: "activityCreated", 
   callback?: (args: AndroidActivityBundleEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:229](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L229)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"activityCreated"` |
| `callback?` | (`args`: [`AndroidActivityBundleEventData`](../interfaces/AndroidActivityBundleEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.off
```

#### Call Signature

```ts
off(
   event: "activityDestroyed", 
   callback?: (args: AndroidActivityEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:230](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L230)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"activityDestroyed"` |
| `callback?` | (`args`: [`AndroidActivityEventData`](../interfaces/AndroidActivityEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.off
```

#### Call Signature

```ts
off(
   event: "activityStarted", 
   callback?: (args: AndroidActivityEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:231](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L231)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"activityStarted"` |
| `callback?` | (`args`: [`AndroidActivityEventData`](../interfaces/AndroidActivityEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.off
```

#### Call Signature

```ts
off(
   event: "activityPaused", 
   callback?: (args: AndroidActivityEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:232](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L232)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"activityPaused"` |
| `callback?` | (`args`: [`AndroidActivityEventData`](../interfaces/AndroidActivityEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.off
```

#### Call Signature

```ts
off(
   event: "activityResumed", 
   callback?: (args: AndroidActivityEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:233](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L233)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"activityResumed"` |
| `callback?` | (`args`: [`AndroidActivityEventData`](../interfaces/AndroidActivityEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.off
```

#### Call Signature

```ts
off(
   event: "activityStopped", 
   callback?: (args: AndroidActivityEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:234](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L234)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"activityStopped"` |
| `callback?` | (`args`: [`AndroidActivityEventData`](../interfaces/AndroidActivityEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.off
```

#### Call Signature

```ts
off(
   event: "saveActivityState", 
   callback?: (args: AndroidActivityBundleEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:235](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L235)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"saveActivityState"` |
| `callback?` | (`args`: [`AndroidActivityBundleEventData`](../interfaces/AndroidActivityBundleEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.off
```

#### Call Signature

```ts
off(
   event: "activityResult", 
   callback?: (args: AndroidActivityResultEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:236](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L236)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"activityResult"` |
| `callback?` | (`args`: [`AndroidActivityResultEventData`](../interfaces/AndroidActivityResultEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.off
```

#### Call Signature

```ts
off(
   event: "activityBackPressed", 
   callback?: (args: AndroidActivityBackPressedEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:237](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L237)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"activityBackPressed"` |
| `callback?` | (`args`: [`AndroidActivityBackPressedEventData`](../interfaces/AndroidActivityBackPressedEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.off
```

#### Call Signature

```ts
off(
   event: "activityNewIntent", 
   callback?: (args: AndroidActivityNewIntentEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:238](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L238)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"activityNewIntent"` |
| `callback?` | (`args`: [`AndroidActivityNewIntentEventData`](../interfaces/AndroidActivityNewIntentEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.off
```

#### Call Signature

```ts
off(
   event: "activityRequestPermissions", 
   callback?: (args: AndroidActivityRequestPermissionsEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:239](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L239)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"activityRequestPermissions"` |
| `callback?` | (`args`: [`AndroidActivityRequestPermissionsEventData`](../interfaces/AndroidActivityRequestPermissionsEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.off
```

#### Call Signature

```ts
off(
   event: "sceneWillConnect", 
   callback?: (args: SceneEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:240](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L240)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"sceneWillConnect"` |
| `callback?` | (`args`: [`SceneEventData`](../interfaces/SceneEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.off
```

#### Call Signature

```ts
off(
   event: "sceneDidActivate", 
   callback?: (args: SceneEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:241](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L241)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"sceneDidActivate"` |
| `callback?` | (`args`: [`SceneEventData`](../interfaces/SceneEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.off
```

#### Call Signature

```ts
off(
   event: "sceneWillResignActive", 
   callback?: (args: SceneEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:242](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L242)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"sceneWillResignActive"` |
| `callback?` | (`args`: [`SceneEventData`](../interfaces/SceneEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.off
```

#### Call Signature

```ts
off(
   event: "sceneWillEnterForeground", 
   callback?: (args: SceneEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:243](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L243)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"sceneWillEnterForeground"` |
| `callback?` | (`args`: [`SceneEventData`](../interfaces/SceneEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.off
```

#### Call Signature

```ts
off(
   event: "sceneDidEnterBackground", 
   callback?: (args: SceneEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:244](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L244)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"sceneDidEnterBackground"` |
| `callback?` | (`args`: [`SceneEventData`](../interfaces/SceneEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.off
```

#### Call Signature

```ts
off(
   event: "sceneDidDisconnect", 
   callback?: (args: SceneEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:245](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L245)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"sceneDidDisconnect"` |
| `callback?` | (`args`: [`SceneEventData`](../interfaces/SceneEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.off
```

#### Call Signature

```ts
off(
   event: "sceneOpenURLContexts", 
   callback?: (args: SceneOpenURLContextsEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:246](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L246)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"sceneOpenURLContexts"` |
| `callback?` | (`args`: [`SceneOpenURLContextsEventData`](../interfaces/SceneOpenURLContextsEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.off
```

#### Call Signature

```ts
off(
   event: "sceneContinueUserActivity", 
   callback?: (args: SceneContinueUserActivityEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:247](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L247)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"sceneContinueUserActivity"` |
| `callback?` | (`args`: [`SceneContinueUserActivityEventData`](../interfaces/SceneContinueUserActivityEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.off
```

#### Call Signature

```ts
off(
   event: "scenePerformActionForShortcutItem", 
   callback?: (args: ScenePerformActionForShortcutItemEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:248](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L248)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"scenePerformActionForShortcutItem"` |
| `callback?` | (`args`: [`ScenePerformActionForShortcutItemEventData`](../interfaces/ScenePerformActionForShortcutItemEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.off
```

#### Call Signature

```ts
off(
   eventName: string, 
   callback?: (data: WindowBaseEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:254](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L254)

Removes a listener for the specified event name. Omitting the callback removes every
listener registered for that event on this window.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` |
| `callback?` | (`data`: [`WindowBaseEventData`](../interfaces/WindowBaseEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.off
```

***

### on()

#### Call Signature

```ts
on(
   event: "activate", 
   callback: (data: WindowBaseEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:84](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L84)

Raised when the window becomes the active/focused window.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"activate"` |
| `callback` | (`data`: [`WindowBaseEventData`](../interfaces/WindowBaseEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`Observable`](Observable.md).[`on`](Observable.md#on)

#### Call Signature

```ts
on(
   event: "deactivate", 
   callback: (data: WindowBaseEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:89](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L89)

Raised when the window loses focus.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"deactivate"` |
| `callback` | (`data`: [`WindowBaseEventData`](../interfaces/WindowBaseEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.on
```

#### Call Signature

```ts
on(
   event: "background", 
   callback: (data: WindowBaseEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:94](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L94)

Raised when the window enters the background.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"background"` |
| `callback` | (`data`: [`WindowBaseEventData`](../interfaces/WindowBaseEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.on
```

#### Call Signature

```ts
on(
   event: "foreground", 
   callback: (data: WindowBaseEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:99](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L99)

Raised when the window enters the foreground.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"foreground"` |
| `callback` | (`data`: [`WindowBaseEventData`](../interfaces/WindowBaseEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.on
```

#### Call Signature

```ts
on(
   event: "attached", 
   callback: (data: WindowBaseEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:105](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L105)

Raised when a native surface is bound to the window - both on the first connect and
on every re-attach after a `detached`.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"attached"` |
| `callback` | (`data`: [`WindowBaseEventData`](../interfaces/WindowBaseEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.on
```

#### Call Signature

```ts
on(
   event: "detached", 
   callback: (data: WindowBaseEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:115](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L115)

Raised when the native surface goes away while the window session stays alive
(iOS scene disconnect, Android activity recreation).

The window stays registered on the Application and keeps its listeners, so the same
instance is handed back when a surface re-attaches and handlers registered before the
detach keep working afterwards.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"detached"` |
| `callback` | (`data`: [`WindowBaseEventData`](../interfaces/WindowBaseEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.on
```

#### Call Signature

```ts
on(
   event: "close", 
   callback: (data: WindowBaseEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:125](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L125)

Raised when the window session ends for good.

Fires exactly once per window. Listeners stay registered for the whole teardown, so a
handler added at any earlier point still observes it; immediately after it is
dispatched the framework drops every listener on the instance, so nothing registered
on a window outlives the window.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `callback` | (`data`: [`WindowBaseEventData`](../interfaces/WindowBaseEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.on
```

#### Call Signature

```ts
on(
   event: "displayed", 
   callback: (data: WindowBaseEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:130](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L130)

Raised after the window content has been displayed for the first time.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"displayed"` |
| `callback` | (`data`: [`WindowBaseEventData`](../interfaces/WindowBaseEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.on
```

#### Call Signature

```ts
on(
   event: "orientationChanged", 
   callback: (data: WindowOrientationChangedEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:135](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L135)

Raised when the orientation of this window changes.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"orientationChanged"` |
| `callback` | (`data`: [`WindowOrientationChangedEventData`](../interfaces/WindowOrientationChangedEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.on
```

#### Call Signature

```ts
on(
   event: "systemAppearanceChanged", 
   callback: (data: WindowSystemAppearanceChangedEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:140](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L140)

Raised when the system appearance of this window changes between light and dark.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"systemAppearanceChanged"` |
| `callback` | (`data`: [`WindowSystemAppearanceChangedEventData`](../interfaces/WindowSystemAppearanceChangedEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.on
```

#### Call Signature

```ts
on(
   event: "layoutDirectionChanged", 
   callback: (data: WindowLayoutDirectionChangedEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:145](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L145)

Raised when the layout direction of this window changes between ltr and rtl.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"layoutDirectionChanged"` |
| `callback` | (`data`: [`WindowLayoutDirectionChangedEventData`](../interfaces/WindowLayoutDirectionChangedEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.on
```

#### Call Signature

```ts
on(
   event: "activityCreated", 
   callback: (args: AndroidActivityBundleEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:147](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L147)

Raised when the window becomes the active/focused window.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"activityCreated"` |
| `callback` | (`args`: [`AndroidActivityBundleEventData`](../interfaces/AndroidActivityBundleEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.on
```

#### Call Signature

```ts
on(
   event: "activityDestroyed", 
   callback: (args: AndroidActivityEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:148](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L148)

Raised when the window becomes the active/focused window.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"activityDestroyed"` |
| `callback` | (`args`: [`AndroidActivityEventData`](../interfaces/AndroidActivityEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.on
```

#### Call Signature

```ts
on(
   event: "activityStarted", 
   callback: (args: AndroidActivityEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:149](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L149)

Raised when the window becomes the active/focused window.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"activityStarted"` |
| `callback` | (`args`: [`AndroidActivityEventData`](../interfaces/AndroidActivityEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.on
```

#### Call Signature

```ts
on(
   event: "activityPaused", 
   callback: (args: AndroidActivityEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:150](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L150)

Raised when the window becomes the active/focused window.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"activityPaused"` |
| `callback` | (`args`: [`AndroidActivityEventData`](../interfaces/AndroidActivityEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.on
```

#### Call Signature

```ts
on(
   event: "activityResumed", 
   callback: (args: AndroidActivityEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:151](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L151)

Raised when the window becomes the active/focused window.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"activityResumed"` |
| `callback` | (`args`: [`AndroidActivityEventData`](../interfaces/AndroidActivityEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.on
```

#### Call Signature

```ts
on(
   event: "activityStopped", 
   callback: (args: AndroidActivityEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:152](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L152)

Raised when the window becomes the active/focused window.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"activityStopped"` |
| `callback` | (`args`: [`AndroidActivityEventData`](../interfaces/AndroidActivityEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.on
```

#### Call Signature

```ts
on(
   event: "saveActivityState", 
   callback: (args: AndroidActivityBundleEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:153](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L153)

Raised when the window becomes the active/focused window.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"saveActivityState"` |
| `callback` | (`args`: [`AndroidActivityBundleEventData`](../interfaces/AndroidActivityBundleEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.on
```

#### Call Signature

```ts
on(
   event: "activityResult", 
   callback: (args: AndroidActivityResultEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:154](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L154)

Raised when the window becomes the active/focused window.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"activityResult"` |
| `callback` | (`args`: [`AndroidActivityResultEventData`](../interfaces/AndroidActivityResultEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.on
```

#### Call Signature

```ts
on(
   event: "activityBackPressed", 
   callback: (args: AndroidActivityBackPressedEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:155](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L155)

Raised when the window becomes the active/focused window.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"activityBackPressed"` |
| `callback` | (`args`: [`AndroidActivityBackPressedEventData`](../interfaces/AndroidActivityBackPressedEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.on
```

#### Call Signature

```ts
on(
   event: "activityNewIntent", 
   callback: (args: AndroidActivityNewIntentEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:156](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L156)

Raised when the window becomes the active/focused window.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"activityNewIntent"` |
| `callback` | (`args`: [`AndroidActivityNewIntentEventData`](../interfaces/AndroidActivityNewIntentEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.on
```

#### Call Signature

```ts
on(
   event: "activityRequestPermissions", 
   callback: (args: AndroidActivityRequestPermissionsEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:157](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L157)

Raised when the window becomes the active/focused window.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"activityRequestPermissions"` |
| `callback` | (`args`: [`AndroidActivityRequestPermissionsEventData`](../interfaces/AndroidActivityRequestPermissionsEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.on
```

#### Call Signature

```ts
on(
   event: "sceneWillConnect", 
   callback: (args: SceneEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:158](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L158)

Raised when the window becomes the active/focused window.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"sceneWillConnect"` |
| `callback` | (`args`: [`SceneEventData`](../interfaces/SceneEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.on
```

#### Call Signature

```ts
on(
   event: "sceneDidActivate", 
   callback: (args: SceneEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:159](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L159)

Raised when the window becomes the active/focused window.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"sceneDidActivate"` |
| `callback` | (`args`: [`SceneEventData`](../interfaces/SceneEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.on
```

#### Call Signature

```ts
on(
   event: "sceneWillResignActive", 
   callback: (args: SceneEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:160](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L160)

Raised when the window becomes the active/focused window.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"sceneWillResignActive"` |
| `callback` | (`args`: [`SceneEventData`](../interfaces/SceneEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.on
```

#### Call Signature

```ts
on(
   event: "sceneWillEnterForeground", 
   callback: (args: SceneEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:161](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L161)

Raised when the window becomes the active/focused window.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"sceneWillEnterForeground"` |
| `callback` | (`args`: [`SceneEventData`](../interfaces/SceneEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.on
```

#### Call Signature

```ts
on(
   event: "sceneDidEnterBackground", 
   callback: (args: SceneEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:162](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L162)

Raised when the window becomes the active/focused window.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"sceneDidEnterBackground"` |
| `callback` | (`args`: [`SceneEventData`](../interfaces/SceneEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.on
```

#### Call Signature

```ts
on(
   event: "sceneDidDisconnect", 
   callback: (args: SceneEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:163](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L163)

Raised when the window becomes the active/focused window.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"sceneDidDisconnect"` |
| `callback` | (`args`: [`SceneEventData`](../interfaces/SceneEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.on
```

#### Call Signature

```ts
on(
   event: "sceneOpenURLContexts", 
   callback: (args: SceneOpenURLContextsEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:164](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L164)

Raised when the window becomes the active/focused window.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"sceneOpenURLContexts"` |
| `callback` | (`args`: [`SceneOpenURLContextsEventData`](../interfaces/SceneOpenURLContextsEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.on
```

#### Call Signature

```ts
on(
   event: "sceneContinueUserActivity", 
   callback: (args: SceneContinueUserActivityEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:165](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L165)

Raised when the window becomes the active/focused window.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"sceneContinueUserActivity"` |
| `callback` | (`args`: [`SceneContinueUserActivityEventData`](../interfaces/SceneContinueUserActivityEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.on
```

#### Call Signature

```ts
on(
   event: "scenePerformActionForShortcutItem", 
   callback: (args: ScenePerformActionForShortcutItemEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:166](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L166)

Raised when the window becomes the active/focused window.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"scenePerformActionForShortcutItem"` |
| `callback` | (`args`: [`ScenePerformActionForShortcutItemEventData`](../interfaces/ScenePerformActionForShortcutItemEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.on
```

#### Call Signature

```ts
on(
   eventName: string, 
   callback: (data: WindowBaseEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:178](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L178)

Adds a listener for the specified event name.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `string` | The name of the event. |
| `callback` | (`data`: [`WindowBaseEventData`](../interfaces/WindowBaseEventData.md)) => `void` | The event listener to add. Will be called when an event of the given name is raised. |
| `thisArg?` | `any` | An optional parameter which, when set, will be bound as the `this` context when the callback is called. Falsy values will be not be bound. |

##### Returns

`void`

##### Overrides

```ts
Observable.on
```

***

### once()

#### Call Signature

```ts
once(
   event: "activate", 
   callback: (data: WindowBaseEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:180](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L180)

Adds a listener for the specified event name, which, once fired, will
remove itself.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | `"activate"` | - |
| `callback` | (`data`: [`WindowBaseEventData`](../interfaces/WindowBaseEventData.md)) => `void` | The event listener to add. Will be called when an event of the given name is raised. |
| `thisArg?` | `any` | An optional parameter which, when set, will be bound as the `this` context when the callback is called. Falsy values will be not be bound. |

##### Returns

`void`

##### Overrides

[`Observable`](Observable.md).[`once`](Observable.md#once)

#### Call Signature

```ts
once(
   event: "deactivate", 
   callback: (data: WindowBaseEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:181](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L181)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"deactivate"` |
| `callback` | (`data`: [`WindowBaseEventData`](../interfaces/WindowBaseEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.once
```

#### Call Signature

```ts
once(
   event: "background", 
   callback: (data: WindowBaseEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:182](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L182)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"background"` |
| `callback` | (`data`: [`WindowBaseEventData`](../interfaces/WindowBaseEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.once
```

#### Call Signature

```ts
once(
   event: "foreground", 
   callback: (data: WindowBaseEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:183](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L183)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"foreground"` |
| `callback` | (`data`: [`WindowBaseEventData`](../interfaces/WindowBaseEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.once
```

#### Call Signature

```ts
once(
   event: "attached", 
   callback: (data: WindowBaseEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:184](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L184)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"attached"` |
| `callback` | (`data`: [`WindowBaseEventData`](../interfaces/WindowBaseEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.once
```

#### Call Signature

```ts
once(
   event: "detached", 
   callback: (data: WindowBaseEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:185](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L185)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"detached"` |
| `callback` | (`data`: [`WindowBaseEventData`](../interfaces/WindowBaseEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.once
```

#### Call Signature

```ts
once(
   event: "close", 
   callback: (data: WindowBaseEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:186](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L186)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `callback` | (`data`: [`WindowBaseEventData`](../interfaces/WindowBaseEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.once
```

#### Call Signature

```ts
once(
   event: "displayed", 
   callback: (data: WindowBaseEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:187](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L187)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"displayed"` |
| `callback` | (`data`: [`WindowBaseEventData`](../interfaces/WindowBaseEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.once
```

#### Call Signature

```ts
once(
   event: "orientationChanged", 
   callback: (data: WindowOrientationChangedEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:188](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L188)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"orientationChanged"` |
| `callback` | (`data`: [`WindowOrientationChangedEventData`](../interfaces/WindowOrientationChangedEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.once
```

#### Call Signature

```ts
once(
   event: "systemAppearanceChanged", 
   callback: (data: WindowSystemAppearanceChangedEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:189](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L189)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"systemAppearanceChanged"` |
| `callback` | (`data`: [`WindowSystemAppearanceChangedEventData`](../interfaces/WindowSystemAppearanceChangedEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.once
```

#### Call Signature

```ts
once(
   event: "layoutDirectionChanged", 
   callback: (data: WindowLayoutDirectionChangedEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:190](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L190)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"layoutDirectionChanged"` |
| `callback` | (`data`: [`WindowLayoutDirectionChangedEventData`](../interfaces/WindowLayoutDirectionChangedEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.once
```

#### Call Signature

```ts
once(
   event: "activityCreated", 
   callback: (args: AndroidActivityBundleEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:191](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L191)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"activityCreated"` |
| `callback` | (`args`: [`AndroidActivityBundleEventData`](../interfaces/AndroidActivityBundleEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.once
```

#### Call Signature

```ts
once(
   event: "activityDestroyed", 
   callback: (args: AndroidActivityEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:192](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L192)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"activityDestroyed"` |
| `callback` | (`args`: [`AndroidActivityEventData`](../interfaces/AndroidActivityEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.once
```

#### Call Signature

```ts
once(
   event: "activityStarted", 
   callback: (args: AndroidActivityEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:193](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L193)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"activityStarted"` |
| `callback` | (`args`: [`AndroidActivityEventData`](../interfaces/AndroidActivityEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.once
```

#### Call Signature

```ts
once(
   event: "activityPaused", 
   callback: (args: AndroidActivityEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:194](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L194)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"activityPaused"` |
| `callback` | (`args`: [`AndroidActivityEventData`](../interfaces/AndroidActivityEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.once
```

#### Call Signature

```ts
once(
   event: "activityResumed", 
   callback: (args: AndroidActivityEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:195](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L195)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"activityResumed"` |
| `callback` | (`args`: [`AndroidActivityEventData`](../interfaces/AndroidActivityEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.once
```

#### Call Signature

```ts
once(
   event: "activityStopped", 
   callback: (args: AndroidActivityEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:196](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L196)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"activityStopped"` |
| `callback` | (`args`: [`AndroidActivityEventData`](../interfaces/AndroidActivityEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.once
```

#### Call Signature

```ts
once(
   event: "saveActivityState", 
   callback: (args: AndroidActivityBundleEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:197](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L197)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"saveActivityState"` |
| `callback` | (`args`: [`AndroidActivityBundleEventData`](../interfaces/AndroidActivityBundleEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.once
```

#### Call Signature

```ts
once(
   event: "activityResult", 
   callback: (args: AndroidActivityResultEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:198](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L198)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"activityResult"` |
| `callback` | (`args`: [`AndroidActivityResultEventData`](../interfaces/AndroidActivityResultEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.once
```

#### Call Signature

```ts
once(
   event: "activityBackPressed", 
   callback: (args: AndroidActivityBackPressedEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:199](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L199)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"activityBackPressed"` |
| `callback` | (`args`: [`AndroidActivityBackPressedEventData`](../interfaces/AndroidActivityBackPressedEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.once
```

#### Call Signature

```ts
once(
   event: "activityNewIntent", 
   callback: (args: AndroidActivityNewIntentEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:200](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L200)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"activityNewIntent"` |
| `callback` | (`args`: [`AndroidActivityNewIntentEventData`](../interfaces/AndroidActivityNewIntentEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.once
```

#### Call Signature

```ts
once(
   event: "activityRequestPermissions", 
   callback: (args: AndroidActivityRequestPermissionsEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:201](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L201)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"activityRequestPermissions"` |
| `callback` | (`args`: [`AndroidActivityRequestPermissionsEventData`](../interfaces/AndroidActivityRequestPermissionsEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.once
```

#### Call Signature

```ts
once(
   event: "sceneWillConnect", 
   callback: (args: SceneEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:202](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L202)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"sceneWillConnect"` |
| `callback` | (`args`: [`SceneEventData`](../interfaces/SceneEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.once
```

#### Call Signature

```ts
once(
   event: "sceneDidActivate", 
   callback: (args: SceneEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:203](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L203)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"sceneDidActivate"` |
| `callback` | (`args`: [`SceneEventData`](../interfaces/SceneEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.once
```

#### Call Signature

```ts
once(
   event: "sceneWillResignActive", 
   callback: (args: SceneEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:204](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L204)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"sceneWillResignActive"` |
| `callback` | (`args`: [`SceneEventData`](../interfaces/SceneEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.once
```

#### Call Signature

```ts
once(
   event: "sceneWillEnterForeground", 
   callback: (args: SceneEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:205](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L205)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"sceneWillEnterForeground"` |
| `callback` | (`args`: [`SceneEventData`](../interfaces/SceneEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.once
```

#### Call Signature

```ts
once(
   event: "sceneDidEnterBackground", 
   callback: (args: SceneEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:206](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L206)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"sceneDidEnterBackground"` |
| `callback` | (`args`: [`SceneEventData`](../interfaces/SceneEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.once
```

#### Call Signature

```ts
once(
   event: "sceneDidDisconnect", 
   callback: (args: SceneEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:207](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L207)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"sceneDidDisconnect"` |
| `callback` | (`args`: [`SceneEventData`](../interfaces/SceneEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.once
```

#### Call Signature

```ts
once(
   event: "sceneOpenURLContexts", 
   callback: (args: SceneOpenURLContextsEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:208](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L208)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"sceneOpenURLContexts"` |
| `callback` | (`args`: [`SceneOpenURLContextsEventData`](../interfaces/SceneOpenURLContextsEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.once
```

#### Call Signature

```ts
once(
   event: "sceneContinueUserActivity", 
   callback: (args: SceneContinueUserActivityEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:209](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L209)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"sceneContinueUserActivity"` |
| `callback` | (`args`: [`SceneContinueUserActivityEventData`](../interfaces/SceneContinueUserActivityEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.once
```

#### Call Signature

```ts
once(
   event: "scenePerformActionForShortcutItem", 
   callback: (args: ScenePerformActionForShortcutItemEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:210](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L210)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"scenePerformActionForShortcutItem"` |
| `callback` | (`args`: [`ScenePerformActionForShortcutItemEventData`](../interfaces/ScenePerformActionForShortcutItemEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.once
```

#### Call Signature

```ts
once(
   eventName: string, 
   callback: (data: WindowBaseEventData) => void, 
   thisArg?: any): void;
```

Defined in: [native-window/index.d.ts:216](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L216)

Adds a listener for the specified event name that is removed as soon as it is raised
once.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` |
| `callback` | (`data`: [`WindowBaseEventData`](../interfaces/WindowBaseEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.once
```

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

[`Observable`](Observable.md).[`removeEventListener`](Observable.md#removeeventlistener)

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

[`Observable`](Observable.md).[`set`](Observable.md#set)

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

[`Observable`](Observable.md).[`setProperty`](Observable.md#setproperty)

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

[`Observable`](Observable.md).[`addEventListener`](Observable.md#addeventlistener-1)

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

[`Observable`](Observable.md).[`off`](Observable.md#off-1)

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

[`Observable`](Observable.md).[`on`](Observable.md#on-1)

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

[`Observable`](Observable.md).[`once`](Observable.md#once-1)

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

[`Observable`](Observable.md).[`removeEventListener`](Observable.md#removeeventlistener-1)
