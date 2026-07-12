---
title: GesturesObserver
titleTemplate: :title - API / NativeScript
description: Provides options for the GesturesObserver.
contributors: false
---

Defined in: [ui/gestures/index.d.ts:11](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/gestures/index.d.ts#L11)

Provides options for the GesturesObserver.

## Constructors

### Constructor

```ts
new GesturesObserver(
   target: View, 
   callback: (args: GestureEventData) => void, 
   context: any): GesturesObserver;
```

Defined in: [ui/gestures/index.d.ts:18](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/gestures/index.d.ts#L18)

Creates an instance of GesturesObserver class.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `target` | [`View`](View.md) | The view for which the observer is created. |
| `callback` | (`args`: [`GestureEventData`](../interfaces/GestureEventData.md)) => `void` | A function that will be executed when a gesture is received. |
| `context` | `any` | default this argument for the callbacks. |

#### Returns

`GesturesObserver`

## Properties

### androidOnTouchEvent

```ts
androidOnTouchEvent: (motionEvent: any) => void;
```

Defined in: [ui/gestures/index.d.ts:51](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/gestures/index.d.ts#L51)

An internal Android specific method used to pass the motion event to the correct gesture observer.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `motionEvent` | `any` |

#### Returns

`void`

***

### callback

```ts
callback: (args: GestureEventData) => void;
```

Defined in: [ui/gestures/index.d.ts:41](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/gestures/index.d.ts#L41)

A function that will be executed when a gesture is received.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | [`GestureEventData`](../interfaces/GestureEventData.md) |

#### Returns

`void`

***

### context

```ts
context: any;
```

Defined in: [ui/gestures/index.d.ts:46](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/gestures/index.d.ts#L46)

A context which will be used as `this` in callback execution.

***

### type

```ts
type: GestureTypes;
```

Defined in: [ui/gestures/index.d.ts:36](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/gestures/index.d.ts#L36)

Singular gesture type (e.g. GestureTypes.tap) attached to the observer.
Does not support plural gesture types (e.g.
GestureTypes.tap & GestureTypes.doubleTap).

## Methods

### disconnect()

```ts
disconnect(): any;
```

Defined in: [ui/gestures/index.d.ts:29](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/gestures/index.d.ts#L29)

Disconnects the gesture observer.

#### Returns

`any`

***

### observe()

```ts
observe(type: GestureTypes): any;
```

Defined in: [ui/gestures/index.d.ts:24](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/gestures/index.d.ts#L24)

Registers a gesture observer to a view and gesture.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | [`GestureTypes`](../enumerations/GestureTypes.md) | Type of the gesture. |

#### Returns

`any`
