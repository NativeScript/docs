---
title: StackLayout
---

`<StackLayout>` is a layout container that lets you stack the child elements vertically (default) or horizontally.

::: danger Important
Try not to nest too many `<StackLayout/>` in your markup. If you find yourself nesting a lot of `<StackLayout>`
you will likely get better performance by switching to a `<GridLayout>` or `<FlexboxLayout>`.

<!-- See [Layout Nesting](/common-pitfalls.html#layout-nesting) for more information. -->

:::

## Vertical stacking

By default, `<StackLayout>` stacks its child items vertically. The following example creates a vertical stack of 3 equally-sized elements. Items are stretched to cover the entire width of the screen. Items are placed in the order they were declared in.

```xml
<StackLayout backgroundColor="#3c495e">
  <Label text="first" height="70" backgroundColor="#43b883" />
  <Label text="second" height="70" backgroundColor="#289062" />
  <Label text="third" height="70" backgroundColor="#1c6b48" />
</StackLayout>
```

<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript.org/layouts/stack_layout_vertical.svg" />

### Stack layout with horizontally aligned children

To align a child element horizontally in a `StackLayout` with `orientation='vertical'`, use the child's `horizontalAlignment` property.

The following example creates a diagonal stack of items with responsive sizes. Items are vertically stacked.

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

## Horizontal stacking

To stack items horizontally, set `StackLayout`'s `orientation` to `horizontal`.

The following example creates a horizontal stack of 3 equally-sized elements. Items are stretched to cover the entire height of the screen. Items are placed in the order they were declared in.

```xml
<StackLayout orientation="horizontal" backgroundColor="#3c495e">
  <Label text="first" width="70" backgroundColor="#43b883" />
  <Label text="second" width="70" backgroundColor="#289062" />
  <Label text="third" width="70" backgroundColor="#1c6b48" />
</StackLayout>
```

<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript.org/layouts/stack_layout_horizontal.svg" />

### Horizontal stack layout with vertically aligned children

To align a child element vertically in a `StackLayout` with `orientation='horizontal'` use the child's `verticalAlignment` property.
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

## StackLayout Reference(s)

### Props

| Name           | Type        | Description                                                                                                                              |
| -------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `orientation`  | `String`    | Specifies the stacking direction.<br/>Valid values: `vertical` and `horizontal`.<br/>Default value: `vertical`.                          |
| `...Inherited` | `Inherited` | Additional inherited properties not shown. Refer to the [API Reference](https://docs.nativescript.org/api-reference/classes/stacklayout) |

### Children props

None.
