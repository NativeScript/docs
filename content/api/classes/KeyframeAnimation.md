---
title: KeyframeAnimation
titleTemplate: :title - API / NativeScript
contributors: false
---

Defined in: ui/animation/keyframe-animation.d.ts:57

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

Defined in: ui/animation/keyframe-animation.d.ts:58

***

### delay

```ts
delay: number;
```

Defined in: ui/animation/keyframe-animation.d.ts:59

***

### iterations

```ts
iterations: number;
```

Defined in: ui/animation/keyframe-animation.d.ts:60

## Accessors

### isPlaying

#### Get Signature

```ts
get isPlaying(): boolean;
```

Defined in: ui/animation/keyframe-animation.d.ts:68

##### Returns

`boolean`

## Methods

### \_resetAnimations()

```ts
_resetAnimations(): void;
```

Defined in: ui/animation/keyframe-animation.d.ts:73

#### Returns

`void`

***

### \_resolveAnimationFinishedPromise()

```ts
_resolveAnimationFinishedPromise(): void;
```

Defined in: ui/animation/keyframe-animation.d.ts:72

#### Returns

`void`

***

### cancel()

```ts
cancel(): void;
```

Defined in: ui/animation/keyframe-animation.d.ts:69

#### Returns

`void`

***

### play()

```ts
play(view: View): Promise<void>;
```

Defined in: ui/animation/keyframe-animation.d.ts:70

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

Defined in: ui/animation/keyframe-animation.d.ts:66

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `info` | [`KeyframeAnimationInfo`](KeyframeAnimationInfo.md) |

#### Returns

`KeyframeAnimation`
