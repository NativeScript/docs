---
title: CssAnimationParser
titleTemplate: :title - API / NativeScript
contributors: false
---

Defined in: ui/styling/css-animation-parser.d.ts:2

## Constructors

### Constructor

```ts
new CssAnimationParser(): CssAnimationParser;
```

#### Returns

`CssAnimationParser`

## Methods

### keyframeAnimationsFromCSSDeclarations()

```ts
static keyframeAnimationsFromCSSDeclarations(declarations: KeyframeDeclaration[]): KeyframeAnimationInfo[];
```

Defined in: ui/styling/css-animation-parser.d.ts:3

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `declarations` | [`KeyframeDeclaration`](KeyframeDeclaration.md)[] |

#### Returns

[`KeyframeAnimationInfo`](KeyframeAnimationInfo.md)[]

***

### keyframesArrayFromCSS()

```ts
static keyframesArrayFromCSS(keyframes: UnparsedKeyframe[]): KeyframeInfo[];
```

Defined in: ui/styling/css-animation-parser.d.ts:4

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `keyframes` | `UnparsedKeyframe`[] |

#### Returns

[`KeyframeInfo`](KeyframeInfo.md)[]
