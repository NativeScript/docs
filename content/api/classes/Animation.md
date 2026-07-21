---
title: Animation
titleTemplate: :title - API / NativeScript
description: Defines a animation set.
contributors: false
---

Defined in: [ui/animation/index.d.ts:8](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/animation/index.d.ts#L8)

Defines a animation set.

## Constructors

### Constructor

```ts
new Animation(animationDefinitions: AnimationDefinition[], playSequentially?: boolean): Animation;
```

Defined in: [ui/animation/index.d.ts:9](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/animation/index.d.ts#L9)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `animationDefinitions` | [`AnimationDefinition`](../interfaces/AnimationDefinition.md)[] |
| `playSequentially?` | `boolean` |

#### Returns

`Animation`

## Properties

### cancel

```ts
cancel: () => void;
```

Defined in: [ui/animation/index.d.ts:11](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/animation/index.d.ts#L11)

#### Returns

`void`

***

### isPlaying

```ts
isPlaying: boolean;
```

Defined in: [ui/animation/index.d.ts:12](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/animation/index.d.ts#L12)

***

### play

```ts
play: (resetOnFinish?: boolean) => AnimationPromise;
```

Defined in: [ui/animation/index.d.ts:10](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/animation/index.d.ts#L10)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `resetOnFinish?` | `boolean` |

#### Returns

[`AnimationPromise`](../type-aliases/AnimationPromise.md)

## Methods

### \_resolveAnimationCurve()

```ts
_resolveAnimationCurve(curve: any): any;
```

Defined in: [ui/animation/index.d.ts:13](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/animation/index.d.ts#L13)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `curve` | `any` |

#### Returns

`any`
