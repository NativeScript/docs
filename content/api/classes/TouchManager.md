---
title: TouchManager
titleTemplate: :title - API / NativeScript
description: Manage interactivity in your apps easily with TouchManager. Store reusable down/up animation settings for touches as well as optionally enable automatic tap ...
contributors: false
---

Defined in: ui/gestures/touch-manager.d.ts:24

Manage interactivity in your apps easily with TouchManager.
Store reusable down/up animation settings for touches as well as optionally enable automatic tap (down/up) animations for your app.

## Constructors

### Constructor

```ts
new TouchManager(): TouchManager;
```

#### Returns

`TouchManager`

## Properties

### animations

```ts
static animations: TouchAnimationOptions;
```

Defined in: ui/gestures/touch-manager.d.ts:48

Define reusable touch animations to use on views with touchAnimation defined or with enableGlobalTapAnimations on.

***

### enableGlobalHoverWhereTap

```ts
static enableGlobalHoverWhereTap: boolean;
```

Defined in: ui/gestures/touch-manager.d.ts:32

(visionOS Only) Enable hoverStyle for all tap bindings in the UI.

***

### enableGlobalTapAnimations

```ts
static enableGlobalTapAnimations: boolean;
```

Defined in: ui/gestures/touch-manager.d.ts:28

Enable animations for all tap bindings in the UI.

***

### touchAnimationDefinitions

```ts
static touchAnimationDefinitions: {
  animation: Animation;
  type: TouchAnimationTypes;
  view: View;
}[];
```

Defined in: ui/gestures/touch-manager.d.ts:61

When using NativeScript AnimationDefinition's for touch animations this will contain any instances for finer grain control of starting/stopping under various circumstances.
The TouchManager uses this internally but makes public for other versatility if needed.

#### animation

```ts
animation: Animation;
```

#### type

```ts
type: TouchAnimationTypes;
```

#### view

```ts
view: View;
```

***

### touchHandlers

```ts
static touchHandlers: {
  handler: any;
  view: View;
}[];
```

Defined in: ui/gestures/touch-manager.d.ts:53

Native Touch handlers (iOS only) registered with the view through the TouchManager.
The TouchManager uses this internally but makes public for other versatility if needed.

#### handler

```ts
handler: any;
```

#### view

```ts
view: View;
```

***

### visionHoverOptions

```ts
static visionHoverOptions: {
[key: string]: VisionHoverOptions;
};
```

Defined in: ui/gestures/touch-manager.d.ts:36

Define reusable hover styles keyed by name to use throughout your UI.

#### Index Signature

```ts
[key: string]: VisionHoverOptions
```

***

### visionHoverStyleCache

```ts
static visionHoverStyleCache: {
[key: string]: UIHoverStyle;
};
```

Defined in: ui/gestures/touch-manager.d.ts:42

Used internally - defines reusable UIHoverStyle's

#### Index Signature

```ts
[key: string]: UIHoverStyle
```

## Methods

### addAnimations()

```ts
static addAnimations(view: View): void;
```

Defined in: ui/gestures/touch-manager.d.ts:71

The TouchManager uses this internally.
Adds touch animations to view based upon it's touchAnimation property or TouchManager.animations.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `view` | [`View`](View.md) | NativeScript view instance |

#### Returns

`void`

***

### addHoverStyle()

```ts
static addHoverStyle(view: View): void;
```

Defined in: ui/gestures/touch-manager.d.ts:78

The TouchManager uses this internally.
Adds visionOS hover styles to views based upon it's visionHoverStyle property

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `view` | [`View`](View.md) | NativeScript view instance |

#### Returns

`void`

***

### startAnimationForType()

```ts
static startAnimationForType(view: View, type: TouchAnimationTypes): void;
```

Defined in: ui/gestures/touch-manager.d.ts:72

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `view` | [`View`](View.md) |
| `type` | `TouchAnimationTypes` |

#### Returns

`void`
