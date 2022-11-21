---
title: Color
---

This class allows you to create a color object with all color components(in the [0, 255] range) - alpha, red, green, blue - using a diffent input types.

## Using Color

First import the Color from `@nativescript/core`:

```ts
import { Color } from '@nativescript/core'
```

### Creating a color from hex values

```ts
const color = new Color('#FF00CC');
const colorShortHex = new Color('#F0C');
```

### Creating a color with an alpha value

```ts
const colorARGB = new Color(100, 255, 100, 100);
```

## Color API

### constructor

Represents a color object. The Color class the following overloads:

```ts
const color = new Color(knownColor: string)
```
```ts
const color = new Color(hex: string)
```
```ts
const color = new Color(argb: number)
```
```ts
const color = new Color(alpha: number, red: number, green:number, blue: number, type?: 'rgb' | 'hsl' | 'hsv')
```
---

### a

```ts
color.a
```

Gets the Alpha component of the color. This is a read-only

---

### r

```ts
color.r
```

Gets the Red component of the color. This is a read-only property.

---

### g

```ts
color.g
```

Gets the Green component of the color. This is a read-only property.

---

### b

```ts
color.b
```

Gets the Blue component of the color. This is a read-only property.

---

### argb

```ts
color.argb
```

Gets the Argb Number representation of this color where each 8 bits represent a single color component. This is a read-only property.

---

### hex

```ts
color.hex
```

Gets the Hexadecimal string representation of the color.

---

### name

```ts
color.name
```

Gets the known name of this instance. Defined only if it has been constructed from a known color name - e.g. "red".

---

### android

```ts
color.android
```

Gets the android-specific integer value representation. Same as the Argb one.

---

### ios

```ts
color.ios
```

Gets the iOS-specific `UIColor` value representation.

---

### Color.equals

```ts
Color.equals(value1: Color, value2: Color)
```

Compares two `Color` instances.

---

### Color.isValid

```ts
Color.isValid(value: any)
```

Validates if a value can be converted to a color.

---

### Color.fromIosColor

```ts
Color.fromIosColor(value: UIColor)
```

Creates color from iOS-specific UIColor value representation.

---

### Color.mix

```ts
Color.mix(color1: Color, color2: Color, amount: number)
```

Creates a mixture of two colors.

---

### Color.fromHSL

```ts
Color.fromHSL(a, h, s, l)
```

Returns a new Color from HSL.

---

### Color.fromHSV

```ts
Color.fromHSV(a, h, s, v)
```

Returns a new Color from HSV.

---

### equals

```ts
color.equals(value: Color)
```

Checks whether the created Color is equal to the Color parameter.

---

### isDark

```ts
color.isDark()
```

Returns true if `brightenss < 128`

---

### isLight

```ts
color.isLight()
```

Returns true if `brightenss >= 128`

---

### getBrightness

```ts
color.getBrightness()
```

Returns the [brightness](http://www.w3.org/TR/AERT#color-contrast).

---

### getLuminance

```ts
color.getLuminance()
```

Returns the [luminance](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef).

---

### setAlpha

```ts
color.setAlpha(a: number)
```

`a` is a value between `0` and `255`. Return the created color (as a new Color instance) with the provided alpha.

---

### toHsl

```ts
color.toHsl()
```

Return the hsl(`{ h: number; s: number; l: number; a: number }`) representation of the color.

---

### toHslString

```ts
color.toHslString()
```

Returns the [CSS hsl](https://www.w3schools.com/Css/css_colors_hsl.asp) representation of the color

---

### toHsv

```ts
color.toHsv()
```

Returns the hsv(`{ h: number; s: number; v: number; a: number }`) representation of the color

---

### toHsvString

```ts
color.toHsvString()
```

Returns the [CSS rgb](https://www.w3schools.com/Css/css_colors_rgb.asp) representation of the color.

---

### desaturate

```ts
color.desaturate(amount: number)
```

Desaturates the color a given amount, from `0` to `100`. Providing `100` is the same as calling [greyscale](#greyscale).

---

### saturate

```ts
color.saturate(amount: number)
```

Saturates the color a given amount, from `0` to `100`.

---

### greyscale

```ts
color.greyscale()
```

Completely desaturates a color into greyscale. Same as calling [desaturate(100)](#desaturate).

---

### lighten

```ts
color.lighten()
```

Lightens the color a given amount, from `0` to `100`. Providing `100` returns white.

---

### brighten

```ts
color.brighten(amount: number)
```

Brightens the color a given amount, from `0` to `100`.

---

### darken

```ts
color.darken(amount: number)
```

Darkens the color a given amount, from `0` to `100`. `100` returns black.

---

### spin

```ts
color.darken(amount: number)
```

Spins the hue a given amount, from -`360` to `360`. Calling with `0`, `360`, or -`360` does nothing since it sets the hue back to what it was before.

---
### complement

```ts
color.complement()
```

Returns the color complement.

---
## Native Component

| Android | iOS |
|---------|-----|
| [android.graphics.Color](https://developer.android.com/reference/android/graphics/Color) | [UIColor](https://developer.apple.com/documentation/uikit/uicolor?language=objc)|