---
title: Font
titleTemplate: :title - API / NativeScript
contributors: false
---

Defined in: [ui/styling/font.d.ts:6](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/font.d.ts#L6)

## Extends

- `Font`

## Constructors

### Constructor

```ts
new Font(
   family: string, 
   size: number, 
   style?: FontStyleType, 
   weight?: FontWeightType, 
   scale?: number, 
   fontVariationSettings?: FontVariationSettings[]): Font;
```

Defined in: [ui/styling/font.d.ts:19](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/font.d.ts#L19)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `family` | `string` |
| `size` | `number` |
| `style?` | `FontStyleType` |
| `weight?` | `FontWeightType` |
| `scale?` | `number` |
| `fontVariationSettings?` | `FontVariationSettings`[] |

#### Returns

`Font`

#### Overrides

```ts
FontBase.constructor
```

## Properties

### fontFamily

```ts
fontFamily: string;
```

Defined in: [ui/styling/font.d.ts:9](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/font.d.ts#L9)

#### Overrides

```ts
FontBase.fontFamily
```

***

### fontScale

```ts
fontScale: number;
```

Defined in: [ui/styling/font.d.ts:13](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/font.d.ts#L13)

#### Overrides

```ts
FontBase.fontScale
```

***

### fontSize

```ts
fontSize: number;
```

Defined in: [ui/styling/font.d.ts:12](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/font.d.ts#L12)

#### Overrides

```ts
FontBase.fontSize
```

***

### fontStyle

```ts
fontStyle: FontStyleType;
```

Defined in: [ui/styling/font.d.ts:10](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/font.d.ts#L10)

#### Overrides

```ts
FontBase.fontStyle
```

***

### fontVariationSettings?

```ts
optional fontVariationSettings?: FontVariationSettingsType[];
```

Defined in: [ui/styling/font.d.ts:14](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/font.d.ts#L14)

#### Overrides

```ts
FontBase.fontVariationSettings
```

***

### fontWeight

```ts
fontWeight: FontWeightType;
```

Defined in: [ui/styling/font.d.ts:11](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/font.d.ts#L11)

#### Overrides

```ts
FontBase.fontWeight
```

***

### isBold

```ts
isBold: boolean;
```

Defined in: [ui/styling/font.d.ts:16](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/font.d.ts#L16)

#### Overrides

```ts
FontBase.isBold
```

***

### isItalic

```ts
isItalic: boolean;
```

Defined in: [ui/styling/font.d.ts:17](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/font.d.ts#L17)

#### Overrides

```ts
FontBase.isItalic
```

***

### default

```ts
static default: Font;
```

Defined in: [ui/styling/font.d.ts:7](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/font.d.ts#L7)

#### Overrides

```ts
FontBase.default
```

## Methods

### getAndroidTypeface()

```ts
getAndroidTypeface(): any;
```

Defined in: [ui/styling/font.d.ts:21](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/font.d.ts#L21)

#### Returns

`any`

#### Overrides

```ts
FontBase.getAndroidTypeface
```

***

### getUIFont()

```ts
getUIFont(defaultFont: any): any;
```

Defined in: [ui/styling/font.d.ts:22](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/font.d.ts#L22)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `defaultFont` | `any` |

#### Returns

`any`

#### Overrides

```ts
FontBase.getUIFont
```

***

### withFontFamily()

```ts
withFontFamily(family: string): Font;
```

Defined in: [ui/styling/font.d.ts:24](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/font.d.ts#L24)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `family` | `string` |

#### Returns

`Font`

#### Overrides

```ts
FontBase.withFontFamily
```

***

### withFontScale()

```ts
withFontScale(scale: number): Font;
```

Defined in: [ui/styling/font.d.ts:28](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/font.d.ts#L28)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `scale` | `number` |

#### Returns

`Font`

#### Overrides

```ts
FontBase.withFontScale
```

***

### withFontSize()

```ts
withFontSize(size: number): Font;
```

Defined in: [ui/styling/font.d.ts:27](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/font.d.ts#L27)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `size` | `number` |

#### Returns

`Font`

#### Overrides

```ts
FontBase.withFontSize
```

***

### withFontStyle()

```ts
withFontStyle(style: FontStyleType): Font;
```

Defined in: [ui/styling/font.d.ts:25](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/font.d.ts#L25)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `style` | `FontStyleType` |

#### Returns

`Font`

#### Overrides

```ts
FontBase.withFontStyle
```

***

### withFontVariationSettings()

```ts
withFontVariationSettings(variationSettings: FontVariationSettings[]): Font;
```

Defined in: [ui/styling/font.d.ts:29](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/font.d.ts#L29)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `variationSettings` | `FontVariationSettings`[] |

#### Returns

`Font`

#### Overrides

```ts
FontBase.withFontVariationSettings
```

***

### withFontWeight()

```ts
withFontWeight(weight: FontWeightType): Font;
```

Defined in: [ui/styling/font.d.ts:26](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/font.d.ts#L26)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `weight` | `FontWeightType` |

#### Returns

`Font`

#### Overrides

```ts
FontBase.withFontWeight
```

***

### equals()

```ts
static equals(value1: Font, value2: Font): boolean;
```

Defined in: [ui/styling/font.d.ts:31](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/font.d.ts#L31)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value1` | `Font` |
| `value2` | `Font` |

#### Returns

`boolean`

#### Overrides

```ts
FontBase.equals
```
