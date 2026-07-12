---
title: SharedTransition
titleTemplate: :title - API / NativeScript
description: Shared Element Transitions (preview) Allows you to auto animate between shared elements on two different screesn to create smooth navigational experiences. V...
contributors: false
---

Defined in: [ui/transition/shared-transition.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/transition/shared-transition.ts)

Shared Element Transitions (preview)
Allows you to auto animate between shared elements on two different screesn to create smooth navigational experiences.
View components can define sharedTransitionTag="name" alone with a transition through this API.

## Constructors

### Constructor

```ts
new SharedTransition(): SharedTransition;
```

#### Returns

`SharedTransition`

## Properties

### DEBUG

```ts
static DEBUG: boolean;
```

Defined in: [ui/transition/shared-transition.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/transition/shared-transition.ts)

Enable to see various console logging output of Shared Element Transition behavior.

***

### finishedEvent

```ts
static finishedEvent: string;
```

Defined in: [ui/transition/shared-transition.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/transition/shared-transition.ts)

When the transition finishes.

***

### inProgress

```ts
static inProgress: boolean;
```

Defined in: [ui/transition/shared-transition.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/transition/shared-transition.ts)

Whether a transition is in progress or not.
Note: used internally however exposed in case custom state ordering is needed.
Updated when transitions start/end/cancel.

***

### interactiveCancelledEvent

```ts
static interactiveCancelledEvent: string;
```

Defined in: [ui/transition/shared-transition.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/transition/shared-transition.ts)

When the interactive transition cancels.

***

### interactiveUpdateEvent

```ts
static interactiveUpdateEvent: string;
```

Defined in: [ui/transition/shared-transition.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/transition/shared-transition.ts)

When the interactive transition updates with the percent value.

***

### startedEvent

```ts
static startedEvent: string;
```

Defined in: [ui/transition/shared-transition.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/transition/shared-transition.ts)

When the transition starts.

## Methods

### custom()

```ts
static custom(transition: Transition, options?: SharedTransitionConfig): {
  instance: Transition;
};
```

Defined in: [ui/transition/shared-transition.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/transition/shared-transition.ts)

Configure a custom transition with presentation/dismissal options.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `transition` | [`Transition`](Transition.md) | The custom Transition instance. |
| `options?` | [`SharedTransitionConfig`](../interfaces/SharedTransitionConfig.md) | - |

#### Returns

```ts
{
  instance: Transition;
}
```

a configured SharedTransition instance for use with navigational APIs.

##### instance

```ts
instance: Transition;
```

***

### events()

```ts
static events(): SharedTransitionObservable;
```

Defined in: [ui/transition/shared-transition.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/transition/shared-transition.ts)

Listen to various shared element transition events.

#### Returns

`SharedTransitionObservable`

Observable

***

### finishState()

```ts
static finishState(id: number): void;
```

Defined in: [ui/transition/shared-transition.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/transition/shared-transition.ts)

Finish transition state.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `number` | Transition instance id |

#### Returns

`void`

***

### getSharedElements()

```ts
static getSharedElements(fromPage: ViewBase, toPage: ViewBase): {
  presented: View[];
  presenting: View[];
  sharedElements: View[];
};
```

Defined in: [ui/transition/shared-transition.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/transition/shared-transition.ts)

Gather view collections based on sharedTransitionTag details.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `fromPage` | [`ViewBase`](ViewBase.md) | Page moving away from |
| `toPage` | [`ViewBase`](ViewBase.md) | Page moving to |

#### Returns

```ts
{
  presented: View[];
  presenting: View[];
  sharedElements: View[];
}
```

Collections of views pertaining to shared elements or particular pages

##### presented

```ts
presented: View[];
```

##### presenting

```ts
presenting: View[];
```

##### sharedElements

```ts
sharedElements: View[];
```

***

### getState()

```ts
static getState(id: number): SharedTransitionState;
```

Defined in: [ui/transition/shared-transition.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/transition/shared-transition.ts)

Get current state for any transition.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `number` | Transition instance id |

#### Returns

`SharedTransitionState`

***

### notifyEvent()

```ts
static notifyEvent(eventName: string, data: SharedTransitionEventDataPayload): void;
```

Defined in: [ui/transition/shared-transition.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/transition/shared-transition.ts)

Notify a Shared Transition event.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `string` | Shared Transition event name |
| `data` | `SharedTransitionEventDataPayload` | - |

#### Returns

`void`

***

### updateState()

```ts
static updateState(id: number, state: SharedTransitionState): void;
```

Defined in: [ui/transition/shared-transition.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/transition/shared-transition.ts)

Update transition state.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `number` | Transition instance id |
| `state` | `SharedTransitionState` | SharedTransitionState |

#### Returns

`void`
