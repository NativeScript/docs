---
title: KeyframeAnimation
titleTemplate: :title - API / NativeScript
contributors: false
---

Defined in: [ui/animation/keyframe-animation.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/animation/keyframe-animation.ts)

## Constructors

### Constructor

```ts
new KeyframeAnimation(): KeyframeAnimation;
```

#### Returns

`KeyframeAnimation`

## Properties

### animations

```ts
animations: Keyframe[];
```

Defined in: [ui/animation/keyframe-animation.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/animation/keyframe-animation.ts)

***

### delay

```ts
delay: number;
```

Defined in: [ui/animation/keyframe-animation.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/animation/keyframe-animation.ts)

***

### iterations

```ts
iterations: number;
```

Defined in: [ui/animation/keyframe-animation.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/animation/keyframe-animation.ts)

## Accessors

### isPlaying

#### Get Signature

```ts
get isPlaying(): boolean;
```

Defined in: [ui/animation/keyframe-animation.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/animation/keyframe-animation.ts)

##### Returns

`boolean`

## Methods

### \_resetAnimations()

```ts
_resetAnimations(): void;
```

Defined in: [ui/animation/keyframe-animation.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/animation/keyframe-animation.ts)

#### Returns

`void`

***

### \_resolveAnimationFinishedPromise()

```ts
_resolveAnimationFinishedPromise(): void;
```

Defined in: [ui/animation/keyframe-animation.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/animation/keyframe-animation.ts)

#### Returns

`void`

***

### cancel()

```ts
cancel(): void;
```

Defined in: [ui/animation/keyframe-animation.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/animation/keyframe-animation.ts)

#### Returns

`void`

***

### play()

```ts
play(view: View): Promise<void>;
```

Defined in: [ui/animation/keyframe-animation.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/animation/keyframe-animation.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `view` | [`View`](View.md) |

#### Returns

`Promise`\<`void`\>

***

### keyframeAnimationFromInfo()

```ts
static keyframeAnimationFromInfo(info: KeyframeAnimationInfo): KeyframeAnimation;
```

Defined in: [ui/animation/keyframe-animation.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/animation/keyframe-animation.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `info` | [`KeyframeAnimationInfo`](KeyframeAnimationInfo.md) |

#### Returns

`KeyframeAnimation`
