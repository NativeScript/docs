---
title: The Fonts folder
---

A dedicated folder for storing custom fonts. Any `.ttf` files placed here are automatically picked up by NativeScript.

## Using Custom Fonts

Place the `.ttf` file(s) in the `src/fonts` folder, then run

```cli
ns fonts
```

The result is a table with the font file name and the necessary CSS properties you can copy/paste into your css:

| Font                  | CSS Properties                                                            |
| --------------------- | ------------------------------------------------------------------------- |
| `albert-sans-700.ttf` | `font-family: "Albert Sans", "albert-sans-700"; font-weight: 700;`        |
| `fa-regular-400.ttf`  | `font-family: "Font Awesome 5 Free", "fa-regular-400"; font-weight: 400;` |

Add a new css class (for example in [`app.css`](/project-structure/src/app-css-scss)) with the **CSS Properties** from the table (the name of the class can be anything)

```css
.font-albert-sans {
  font-family: 'Albert Sans', 'albert-sans-700';
  font-weight: 700;
}

.far {
  font-family: 'Font Awesome 5 Free', 'fa-regular-400';
  font-weight: 400;
}
```

::: info Note
Using `ns fonts` is optional, however we recommend using it because there is a conceptual difference in how **.ttf** fonts are recognized on iOS and Android. On Android, the font is recognized by its **file name** while on iOS it is recognized by its **font name**. This means that fonts that are created with a font name which is different from the file name has to be registered with both names in your CSS rule.
:::

You are ready to use the new fonts, apply the font class to an element and it will use the new font.

```xml
<Label class="font-albert-sans" text="The quick brown fox jumps over the lazy dog"></Label>
```

## Font Icons

In case of font icons, you will need to set the `text` to the correct char code of the icon, for example `&#xf019;`, or in case of an `Image` you can use the `font://` scheme as the `src`.

```xml
<Label class="far" text="&#xf019;"></Label>
<Image class="far" src="font://&#xf019;"></Image>
```

::: details Sizing font images
Images have specific stretch options (`none`, `aspectFit`, `aspectFill`). Font icons on the other hand usually use `font-size` to control the size of the icon.
When using an `Image`, you can control the size with `font-size`, but you need to set `stretch="none"` for it to take effect. Setting `stretch` to anything other than `none` will cause the icon to be streched by measuring the image.
:::

If an icon doesn't appear, or renders unintended characters, make sure you are using the correct font family and weight.

::: warning Note for Vue users
In Vue, when using html entities like the char codes above, use the `.decode` modifier on the property, in this case `text.decode` and `src.decode` to opt-into parsing HTML entities, which are disabled by default:

```xml
<Label class="far" text.decode="&#xf019;" />
<Image class="far" src.decode="font://&#xf019;" />
```

:::

## Fonts Icons vs Images

In many cases font icons are ideal replacements for images since they have a few drawbacks:

- pixelation/loss of quality when scaled up
- may require additional http requests to be fetched
- increase the application size when embedded

On the other hand, font icons:

- scale well
- do not require additional http requests
- do not increase memory usage significantly

However font icons have a limitation, they can only have a single color.

## Additional Resources

- [Font Awesome 4 Cheatsheet](https://fontawesome.com/v4/cheatsheet/)
- [Material icons](https://fonts.google.com/icons)
- [Ionicons](https://ionic.io/ionicons)
