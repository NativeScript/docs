---
title: The Fonts folder
---

Custom fonts are placed in the `src/fonts` folder. This folder is treated special, because `.ttf` files placed here are automatically picked up by NativeScript.

## Using Custom Fonts

<!-- TODO: use concrete font as an example, and show ns fonts output -->

To use a custom font, place the `.ttf` file in the `src/fonts` folder, then run

```cli
ns fonts
```

to generate the necessary css declarations. You can manually write these, the above command is just a convenience method to save some time and reduce the guesswork, since the `font-family` can be different from the file name.

Create a new css class in your CSS, for example in [app.css or app.scss](/project-structure/src/app-css-scss)

```css
.custom-font-class {
  font-family: '...';
  font-weight: 400;
}
```

## Using Icon Fonts

<!-- TODO: example of using an icon font -->
