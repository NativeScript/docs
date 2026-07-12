---
title: SharedTransitionHelper
titleTemplate: :title - API / NativeScript
description: Platform helper to aid in creating your own custom Shared Element Transition classes. (iOS Only)
contributors: false
---

Defined in: ui/transition/shared-transition-helper.d.ts:8

Platform helper to aid in creating your own custom Shared Element Transition classes.
(iOS Only)

## Constructors

### Constructor

```ts
new SharedTransitionHelper(): SharedTransitionHelper;
```

#### Returns

`SharedTransitionHelper`

## Methods

### animate()

```ts
static animate(
   state: SharedTransitionState, 
   transitionContext: any, 
   type: TransitionNavigationType): void;
```

Defined in: ui/transition/shared-transition-helper.d.ts:9

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `state` | `SharedTransitionState` |
| `transitionContext` | `any` |
| `type` | `TransitionNavigationType` |

#### Returns

`void`

***

### interactiveCancel()

```ts
static interactiveCancel(
   state: SharedTransitionState, 
   interactiveState: TransitionInteractiveState, 
   type: TransitionNavigationType): void;
```

Defined in: ui/transition/shared-transition-helper.d.ts:12

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `state` | `SharedTransitionState` |
| `interactiveState` | `TransitionInteractiveState` |
| `type` | `TransitionNavigationType` |

#### Returns

`void`

***

### interactiveFinish()

```ts
static interactiveFinish(
   state: SharedTransitionState, 
   interactiveState: TransitionInteractiveState, 
   type: TransitionNavigationType): void;
```

Defined in: ui/transition/shared-transition-helper.d.ts:13

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `state` | `SharedTransitionState` |
| `interactiveState` | `TransitionInteractiveState` |
| `type` | `TransitionNavigationType` |

#### Returns

`void`

***

### interactiveStart()

```ts
static interactiveStart(
   state: SharedTransitionState, 
   interactiveState: TransitionInteractiveState, 
   type: TransitionNavigationType): void;
```

Defined in: ui/transition/shared-transition-helper.d.ts:10

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `state` | `SharedTransitionState` |
| `interactiveState` | `TransitionInteractiveState` |
| `type` | `TransitionNavigationType` |

#### Returns

`void`

***

### interactiveUpdate()

```ts
static interactiveUpdate(
   state: SharedTransitionState, 
   interactiveState: TransitionInteractiveState, 
   type: TransitionNavigationType, 
   percent: number): void;
```

Defined in: ui/transition/shared-transition-helper.d.ts:11

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `state` | `SharedTransitionState` |
| `interactiveState` | `TransitionInteractiveState` |
| `type` | `TransitionNavigationType` |
| `percent` | `number` |

#### Returns

`void`
