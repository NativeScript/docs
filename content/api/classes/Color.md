---
title: Color
titleTemplate: :title - API / NativeScript
description: Represents a color object. Stores all color components (alpha (opacity), red, green, blue) in a [0..255] range.
contributors: false
---

Defined in: [color/index.d.ts:4](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/color/index.d.ts#L4)

Represents a color object. Stores all color components (alpha (opacity), red, green, blue) in a [0..255] range.

## Constructors

### Constructor

```ts
new Color(knownColor: string): Color;
```

Defined in: [color/index.d.ts:5](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/color/index.d.ts#L5)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `knownColor` | `string` |

#### Returns

`Color`

### Constructor

```ts
new Color(hex: string): Color;
```

Defined in: [color/index.d.ts:6](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/color/index.d.ts#L6)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `hex` | `string` |

#### Returns

`Color`

### Constructor

```ts
new Color(argb: number): Color;
```

Defined in: [color/index.d.ts:7](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/color/index.d.ts#L7)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `argb` | `number` |

#### Returns

`Color`

### Constructor

```ts
new Color(
   alpha: number, 
   red: number, 
   green: number, 
   blue: number, 
   type?: "rgb" | "hsl" | "hsv"): Color;
```

Defined in: [color/index.d.ts:8](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/color/index.d.ts#L8)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `alpha` | `number` |
| `red` | `number` |
| `green` | `number` |
| `blue` | `number` |
| `type?` | `"rgb"` \| `"hsl"` \| `"hsv"` |

#### Returns

`Color`

## Properties

### a

```ts
a: number;
```

Defined in: [color/index.d.ts:13](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/color/index.d.ts#L13)

Gets the Alpha component (in the [0, 255] range) of this color. This is a read-only property.

***

### android

```ts
android: number;
```

Defined in: [color/index.d.ts:48](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/color/index.d.ts#L48)

Gets the android-specific integer value representation. Same as the Argb one. This is a read-only property.

***

### argb

```ts
argb: number;
```

Defined in: [color/index.d.ts:38](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/color/index.d.ts#L38)

Gets the Argb Number representation of this color where each 8 bits represent a single color component. This is a read-only property.

***

### b

```ts
b: number;
```

Defined in: [color/index.d.ts:28](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/color/index.d.ts#L28)

Gets the Blue component (in the [0, 255] range) of this color. This is a read-only property.

***

### g

```ts
g: number;
```

Defined in: [color/index.d.ts:23](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/color/index.d.ts#L23)

Gets the Green component (in the [0, 255] range) of this color. This is a read-only property.

***

### hex

```ts
hex: string;
```

Defined in: [color/index.d.ts:33](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/color/index.d.ts#L33)

Gets the Hexadecimal string representation of this color. This is a read-only property.

***

### ios

```ts
ios: any;
```

Defined in: [color/index.d.ts:53](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/color/index.d.ts#L53)

Gets the iOS-specific UIColor value representation. This is a read-only property.

***

### name

```ts
name: string;
```

Defined in: [color/index.d.ts:43](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/color/index.d.ts#L43)

Gets the known name of this instance. Defined only if it has been constructed from a known color name - e.g. "red". This is a read-only property.

***

### r

```ts
r: number;
```

Defined in: [color/index.d.ts:18](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/color/index.d.ts#L18)

Gets the Red component (in the [0, 255] range) of this color. This is a read-only property.

## Methods

### brighten()

```ts
brighten(amount: number): Color;
```

Defined in: [color/index.d.ts:172](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/color/index.d.ts#L172)

Brighten the color a given amount, from 0 to 100.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `amount` | `number` | (between 0 and 100) |

#### Returns

`Color`

***

### complement()

```ts
complement(): Color;
```

Defined in: [color/index.d.ts:192](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/color/index.d.ts#L192)

returns the color complement

#### Returns

`Color`

***

### darken()

```ts
darken(amount: number): Color;
```

Defined in: [color/index.d.ts:179](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/color/index.d.ts#L179)

Darken the color a given amount, from 0 to 100. Providing 100 will always return black.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `amount` | `number` | (between 0 and 100) |

#### Returns

`Color`

***

### desaturate()

```ts
desaturate(amount: number): Color;
```

Defined in: [color/index.d.ts:143](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/color/index.d.ts#L143)

Desaturate the color a given amount, from 0 to 100. Providing 100 will is the same as calling greyscale.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `amount` | `number` | (between 0 and 100) |

#### Returns

`Color`

***

### equals()

```ts
equals(value: Color): boolean;
```

Defined in: [color/index.d.ts:59](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/color/index.d.ts#L59)

Specifies whether this Color is equal to the Color parameter.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `Color` | The Color to test. |

#### Returns

`boolean`

***

### getBrightness()

```ts
getBrightness(): number;
```

Defined in: [color/index.d.ts:95](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/color/index.d.ts#L95)

return the [brightness](http://www.w3.org/TR/AERT#color-contrast)

#### Returns

`number`

***

### getLuminance()

```ts
getLuminance(): number;
```

Defined in: [color/index.d.ts:100](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/color/index.d.ts#L100)

return the [luminance](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef)

#### Returns

`number`

***

### greyscale()

```ts
greyscale(): Color;
```

Defined in: [color/index.d.ts:157](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/color/index.d.ts#L157)

Completely desaturates a color into greyscale. Same as calling desaturate(100).

#### Returns

`Color`

***

### isDark()

```ts
isDark(): boolean;
```

Defined in: [color/index.d.ts:83](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/color/index.d.ts#L83)

return true if brightenss \< 128

#### Returns

`boolean`

***

### isLight()

```ts
isLight(): boolean;
```

Defined in: [color/index.d.ts:89](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/color/index.d.ts#L89)

return true if brightenss \>= 128

#### Returns

`boolean`

***

### lighten()

```ts
lighten(amount: number): Color;
```

Defined in: [color/index.d.ts:165](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/color/index.d.ts#L165)

Lighten the color a given amount, from 0 to 100. Providing 100 will always return white.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `amount` | `number` | (between 0 and 100) |

#### Returns

`Color`

olor : Color

***

### saturate()

```ts
saturate(amount: number): Color;
```

Defined in: [color/index.d.ts:150](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/color/index.d.ts#L150)

Saturate the color a given amount, from 0 to 100.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `amount` | `number` | (between 0 and 100) |

#### Returns

`Color`

***

### setAlpha()

```ts
setAlpha(a: number): Color;
```

Defined in: [color/index.d.ts:107](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/color/index.d.ts#L107)

Return this color (as a new Color instance) with the provided alpha

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `number` |

#### Returns

`Color`

***

### spin()

```ts
spin(amount: number): Color;
```

Defined in: [color/index.d.ts:186](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/color/index.d.ts#L186)

Spin the hue a given amount, from -360 to 360. Calling with 0, 360, or -360 will do nothing (since it sets the hue back to what it was before).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `amount` | `number` | (between 0 and 100) |

#### Returns

`Color`

***

### toHsl()

```ts
toHsl(): {
  a: number;
  h: number;
  l: number;
  s: number;
};
```

Defined in: [color/index.d.ts:112](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/color/index.d.ts#L112)

return the hsl representation of the color

#### Returns

```ts
{
  a: number;
  h: number;
  l: number;
  s: number;
}
```

##### a

```ts
a: number;
```

##### h

```ts
h: number;
```

##### l

```ts
l: number;
```

##### s

```ts
s: number;
```

***

### toHslString()

```ts
toHslString(): string;
```

Defined in: [color/index.d.ts:118](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/color/index.d.ts#L118)

return the [CSS hsv](https://www.w3schools.com/Css/css_colors_hsl.asp) representation of the color

#### Returns

`string`

***

### toHsv()

```ts
toHsv(): {
  a: number;
  h: number;
  s: number;
  v: number;
};
```

Defined in: [color/index.d.ts:124](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/color/index.d.ts#L124)

return the hsv representation of the color

#### Returns

```ts
{
  a: number;
  h: number;
  s: number;
  v: number;
}
```

##### a

```ts
a: number;
```

##### h

```ts
h: number;
```

##### s

```ts
s: number;
```

##### v

```ts
v: number;
```

***

### toHsvString()

```ts
toHsvString(): string;
```

Defined in: [color/index.d.ts:130](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/color/index.d.ts#L130)

return the [CSS hsv](https://www.w3schools.com/Css/css_colors_rgb.asp) representation of the color

#### Returns

`string`

***

### toRgbString()

```ts
toRgbString(): string;
```

Defined in: [color/index.d.ts:136](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/color/index.d.ts#L136)

return the [CSS rgb](https://www.w3schools.com/Css/css_colors_rgb.asp) representation of the color

#### Returns

`string`

***

### equals()

```ts
static equals(value1: Color, value2: Color): boolean;
```

Defined in: [color/index.d.ts:66](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/color/index.d.ts#L66)

Compares two Color instances.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value1` | `Color` | A Color to compare. |
| `value2` | `Color` | A Color to compare. |

#### Returns

`boolean`

***

### fromHSL()

```ts
static fromHSL(
   a: any, 
   h: any, 
   s: any, 
   l: any): Color;
```

Defined in: [color/index.d.ts:204](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/color/index.d.ts#L204)

returns a new Color from HSL

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `any` |
| `h` | `any` |
| `s` | `any` |
| `l` | `any` |

#### Returns

`Color`

***

### fromHSV()

```ts
static fromHSV(
   a: any, 
   h: any, 
   s: any, 
   l: any): Color;
```

Defined in: [color/index.d.ts:205](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/color/index.d.ts#L205)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `any` |
| `h` | `any` |
| `s` | `any` |
| `l` | `any` |

#### Returns

`Color`

***

### fromIosColor()

```ts
static fromIosColor(value: any): Color;
```

Defined in: [color/index.d.ts:77](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/color/index.d.ts#L77)

Creates color from iOS-specific UIColor value representation.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `any` |

#### Returns

`Color`

***

### isValid()

```ts
static isValid(value: any): boolean;
```

Defined in: [color/index.d.ts:72](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/color/index.d.ts#L72)

Validates if a value can be converted to color.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `any` | Input string. |

#### Returns

`boolean`

***

### mix()

```ts
static mix(
   color1: Color, 
   color2: Color, 
   amount: number): Color;
```

Defined in: [color/index.d.ts:198](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/color/index.d.ts#L198)

returns the color complement

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `color1` | `Color` |
| `color2` | `Color` |
| `amount` | `number` |

#### Returns

`Color`
