---
title: Color
---

This class allows you to create a color object with all color components(alpha, red, green, blue in the [0, 255] range) from different types of input. The properties `ios` and `android` of an instance of this class provide the color object for the respective native platform.

## Use the Color class

<!-- Preview: https://stackblitz.com/edit/nativescript-stackblitz-templates-x2y7k6?file=app/main-view-model.ts -->
### Create a color object from hex values

```ts
const color = new Color('#FF00CC');
const colorShortHex = new Color('#F0C');
```

### Create a color object from an alpha value

```ts
const colorARGB = new Color(100, 255, 100, 100);
```

## Color API

The Color class offers the following properties and methods.

### constructor

Creates a color object. The Color class offers the following constructor overloads:

```ts
const color = new Color(knownColor)
```
Creates a Color instance from a known color name.
- `knownColor` : A color name string such as `'red'`, `'purple'`, `'orange'`.

```ts
const color = new Color(hex)
```
Creates a Color instance from a color hexidecimal code.

- `hex`: A string of a hexidecimal color value such as `'#fff'` or `'#FF00CC'`.

```ts
const color = new Color(argb)
```
Creates a Color instance from a number representing a color with an alpha.
- `argb`: A number  such as `4293377432` as, representing color.

```ts
const color = new Color(alpha: number, red: number, green:number, blue: number, type?: 'rgb' | 'hsl' | 'hsv')
```
---

### a

```ts
colorAlpha: number = color.a
```

Gets the Alpha component of the color. This is a `read-only` property.

---

### r

```ts
colorRed: number = color.r
```

Gets the Red component of the color. This is a `read-only` property.

---

### g

```ts
colorGreen: number = color.g
```

Gets the Green component of the color. This is a `read-only` property.

---

### b

```ts
colorBlue: number = color.b
```

Gets the Blue component of the color. This is a `read-only` property.

---

### argb

```ts
colorARGB : number = color.argb
```

Gets the Argb Number representation of this color where each 8 bits represent a single color component. This is a `read-only` property.

---

### hex

```ts
colorHex: string = color.hex
```

Gets the Hexadecimal string representation of the color.

---

### name

```ts
colorName: string =color.name
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
iOSColor: UIColor = color.ios
```

Gets the iOS-specific [UIColor](https://developer.apple.com/documentation/uikit/uicolor) value representation.

---

### Color.equals()

```ts
equalColors: boolean = Color.equals(value1: Color, value2: Color)
```

A static Color class method that compares two `Color` instances and returns `true` if they are the same or `false` otherwise.

---

###  Color.isValid()

```ts
isValidColorValue: boolean = Color.isValid(value)
```

A static Color class method that validates if a value can be converted to a color.

---

### Color.fromIosColor()

```ts
color: Color = Color.fromIosColor(value)
```

Creates a Color instance from iOS-specific UIColor value representation. `value` is of type [UIColor](https://developer.apple.com/documentation/uikit/uicolor).

---

### Color.mix()

```ts
color: Color = Color.mix(color1: Color, color2: Color, amount: number)
```

A static method that creates a Color instance from mixture of two colors.

---

### Color.fromHSL()

```ts
color: Color = Color.fromHSL(a, h, s, l)
```

A static method that returns a new Color from HSL.

---

### Color.fromHSV()

```ts
color: Color = Color.fromHSV(a, h, s, v)
```

A static method that returns a new Color from HSV.

---

### equals

```ts
color.equals(value)
```

A Color instance method that checks whether the color instance on which the method is called equals the Color instance passed to the method. 

---

### isDark

```ts
color.isDark()
```

A Color instance method that returns true if `brightenss < 128`.

---

### isLight()

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
- `Android`: [android.graphics.Color](https://developer.android.com/reference/android/graphics/Color)
- `iOS`: [UIColor](https://developer.apple.com/documentation/uikit/uicolor?language=objc)
