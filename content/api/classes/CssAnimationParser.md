---
title: CssAnimationParser
titleTemplate: :title - API / NativeScript
contributors: false
---

Defined in: [ui/styling/css-animation-parser.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/css-animation-parser.ts)

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

Defined in: [ui/styling/css-animation-parser.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/css-animation-parser.ts)

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

Defined in: [ui/styling/css-animation-parser.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/css-animation-parser.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `keyframes` | `UnparsedKeyframe`[] |

#### Returns

[`KeyframeInfo`](KeyframeInfo.md)[]
