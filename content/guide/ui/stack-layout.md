---
title: StackLayout
---

`<StackLayout>` is a layout container that lets you stack the child elements vertically (default) or horizontally.

::: danger Important
Try not to nest too many `<StackLayout/>` in your markup. If you find yourself nesting a lot of `<StackLayout>`
you will likely get better performance by switching to a `<GridLayout>` or `<FlexboxLayout>`.
<!-- See [Layout Nesting](/common-pitfalls.html#layout-nesting) for more information. -->
:::

#### Example: Default stacking

The following example creates a vertical stack of 3 equally-sized elements. Items are stretched to cover the entire width of the screen. Items are placed in the order they were declared in.

```html
<StackLayout backgroundColor="#3c495e">
  <label text="first" height="70" backgroundColor="#43b883" />
  <label text="second" height="70" backgroundColor="#289062" />
  <label text="third" height="70" backgroundColor="#1c6b48" />
</StackLayout>
```

<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript.org/layouts/stack_layout_vertical.svg" />

#### Example: Horizontal stacking

The following example creates a horizontal stack of 3 equally-sized elements. Items are stretched to cover the entire height of the screen. Items are placed in the order they were declared in.

```html
<StackLayout orientation="horizontal" backgroundColor="#3c495e">
  <label text="first" width="70" backgroundColor="#43b883" />
  <label text="second" width="70" backgroundColor="#289062" />
  <label text="third" width="70" backgroundColor="#1c6b48" />
</StackLayout>
```

<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript.org/layouts/stack_layout_horizontal.svg" />

#### Example: Stack layout with horizontally aligned children

The following example creates a diagonal stack of items with responsive sizes. Items are vertically stacked.

```html
<StackLayout backgroundColor="#3c495e">
  <label
    text="left"
    horizontalAlignment="left"
    width="33%"
    height="70"
    backgroundColor="#43b883"
  />
  <label
    text="center"
    horizontalAlignment="center"
    width="33%"
    height="70"
    backgroundColor="#289062"
  />
  <label
    text="right"
    horizontalAlignment="right"
    width="33%"
    height="70"
    backgroundColor="#1c6b48"
  />
  <label
    text="stretch"
    horizontalAlignment="stretch"
    height="70"
    backgroundColor="#43b883"
  />
</StackLayout>
```

<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript.org/layouts/stack_layout_vertical_align_children.svg" />

#### Example: Horizontal stack layout with vertically aligned children

The following example creates a diagonal stack of items with responsive sizes. Items are horizontally stacked.

```html
<StackLayout orientation="horizontal" backgroundColor="#3c495e">
  <label
    text="top"
    verticalAlignment="top"
    width="70"
    height="33%"
    backgroundColor="#43b883"
  />
  <label
    text="center"
    verticalAlignment="center"
    width="70"
    height="33%"
    backgroundColor="#289062"
  />
  <label
    text="bottom"
    verticalAlignment="bottom"
    width="70"
    height="33%"
    backgroundColor="#1c6b48"
  />
  <label
    text="stretch"
    verticalAlignment="stretch"
    width="70"
    backgroundColor="#43b883"
  />
</StackLayout>
```

<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript.org/layouts/stack_layout_horizontal_align_children.svg" />

#### Props

| Name           | Type        | Description                                                                                                                              |
| -------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `orientation`  | `String`    | Specifies the stacking direction.<br/>Valid values: `vertical` and `horizontal`.<br/>Default value: `vertical`.                          |
| `...Inherited` | `Inherited` | Additional inherited properties not shown. Refer to the [API Reference](https://docs.nativescript.org/api-reference/classes/stacklayout) |

#### Additional children props

None.