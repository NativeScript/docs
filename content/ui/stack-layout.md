---
title: StackLayout
---

`<StackLayout>` is a layout container that arranges child views in a horizontal or vertical stack.

When you add child views to a StackLayout, they will be arranged one after the other in the specified direction, either horizontally or vertically. By default, the orientation of a StackLayout is vertical, but you can change it to `horizontal` by setting the `orientation` property.

::: danger Important

StackLayout is a basic layout container often used excessively in complex layouts. Overusing it with many nested containers or numerous child views can result in poor performance and slow rendering. If you're extensively nesting `<StackLayout>`, consider switching to `<GridLayout>` or `<FlexboxLayout>` for better performance.

<!-- See [Layout Nesting](/common-pitfalls.html#layout-nesting) for more information. -->

:::

## Vertical stack

By default, `<StackLayout>` stacks its child items vertically. The following example creates a vertical stack of 3 equally-sized elements. Items are stretched to cover the entire width of the screen. Items are placed in the order they were declared in.

```xml
<StackLayout backgroundColor="#3c495e">
  <Label text="first" height="70" backgroundColor="#43b883" />
  <Label text="second" height="70" backgroundColor="#289062" />
  <Label text="third" height="70" backgroundColor="#1c6b48" />
</StackLayout>
```

<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript.org/layouts/stack_layout_vertical.svg" />

You can play with these examples in [StackBlitz](https://stackblitz.com/edit/nativescript-stackblitz-templates-ofdvhw?file=app%2Fmain-page.xml&title=NativeScript%20Starter%20TypeScript).

### Aligning children horizontally in a veritcal stack

Child elements of a vertical stack can align themselves horizontally at `left`, `center` or `right` positions with the `horizontalAlignment` property.

For example, we can align child elements diagonally in a vertical stack.

```xml
<StackLayout backgroundColor="#3c495e">
  <Label
    text="left"
    horizontalAlignment="left"
    width="33%"
    height="70"
    backgroundColor="#43b883"
  />
  <Label
    text="center"
    horizontalAlignment="center"
    width="33%"
    height="70"
    backgroundColor="#289062"
  />
  <Label
    text="right"
    horizontalAlignment="right"
    width="33%"
    height="70"
    backgroundColor="#1c6b48"
  />
  <Label
    text="stretch"
    horizontalAlignment="stretch"
    height="70"
    backgroundColor="#43b883"
  />
</StackLayout>
```

<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript.org/layouts/stack_layout_vertical_align_children.svg" />

## Horizontal stack

Setting `orientation="horizontal"` on the `StackLayout` will stack items horizontally.
The following example creates a horizontal stack of 3 equally-sized elements. Items are stretched to cover the entire height of the screen.

```xml
<StackLayout orientation="horizontal" backgroundColor="#3c495e">
  <Label text="first" width="70" backgroundColor="#43b883" />
  <Label text="second" width="70" backgroundColor="#289062" />
  <Label text="third" width="70" backgroundColor="#1c6b48" />
</StackLayout>
```

<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript.org/layouts/stack_layout_horizontal.svg" />

### Aligning children vertically in a horizontal stack

Child elements of a horizontal stack can align themselves veritcally at `top`, `center` or `bottom` positions with the `verticalAlignment` property.
The following example creates a diagonal stack of items with responsive sizes.

```xml
<StackLayout orientation="horizontal" backgroundColor="#3c495e">
  <Label
    text="top"
    verticalAlignment="top"
    width="70"
    height="33%"
    backgroundColor="#43b883"
  />
  <Label
    text="center"
    verticalAlignment="center"
    width="70"
    height="33%"
    backgroundColor="#289062"
  />
  <Label
    text="bottom"
    verticalAlignment="bottom"
    width="70"
    height="33%"
    backgroundColor="#1c6b48"
  />
  <Label
    text="stretch"
    verticalAlignment="stretch"
    width="70"
    backgroundColor="#43b883"
  />
</StackLayout>
```

<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript.org/layouts/stack_layout_horizontal_align_children.svg" />

## StackLayout Reference

### Props

| Name           | Type        | Description                                                                                                                                 |
| -------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `orientation`  | `String`    | Specifies the direction of child elements in the StackLayout.<br/>Valid values: `vertical` and `horizontal`.<br/>Default value: `vertical`. |
| `...Inherited` | `Inherited` | Additional inherited properties not shown. Refer to the [API Reference](https://docs.nativescript.org/api-reference/classes/stacklayout)    |

### Children props

None.
