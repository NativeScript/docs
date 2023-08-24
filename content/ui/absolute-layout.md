---
title: AbsoluteLayout
description: A simple layout container for positioning elements at top/left coordinates.
contributors:
  - Ombuweb
  - rigor789
---

The `<AbsoluteLayout>` container is the simplest layout container in NativeScript.

`<AbsoluteLayout>` has the following behavior:

- Uses a pair of absolute top/left coordinates to position its children.
- Doesn't enforce any layout constraints on its children.
- Doesn't resize its children at runtime when its size changes.

### Creating a simple grid-like layout

The following example creates a simple grid.

```xml
<AbsoluteLayout backgroundColor="#eef7ff">
  <Label
    text="10, 10"
    left="10"
    top="10"
    width="100"
    height="100"
    backgroundColor="#43b2f4"
  />
  <Label
    text="120, 10"
    left="120"
    top="10"
    width="100"
    height="100"
    backgroundColor="#43b2f4"
  />
  <Label
    text="10, 120"
    left="10"
    top="120"
    width="100"
    height="100"
    backgroundColor="#43b2f4"
  />
  <Label
    text="120, 120"
    left="120"
    top="120"
    width="100"
    height="100"
    backgroundColor="#43b2f4"
  />
</AbsoluteLayout>
```

<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript.org/layouts/absolute_layout_grid.svg" />

::: warning Note

This example shows building a grid-like layout, however this mainly serves as an example to illustrate how `<AbsoluteLayout>` works. In most cases building this type of UI will be better served by using a [GridLayout](/ui/grid-layout).

:::

### Overlapping elements

The following example creates a group of overlapping items.

```xml
<AbsoluteLayout backgroundColor="#eef7ff">
  <Label
    text="10, 10"
    left="10"
    top="10"
    width="100"
    height="100"
    backgroundColor="#0089ca"
  />
  <Label
    text="30, 40"
    left="30"
    top="40"
    width="100"
    height="100"
    backgroundColor="#43b2f4"
  />
</AbsoluteLayout>
```

<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript.org/layouts/absolute_layout_overlap.svg" />

::: warning Note

If you need to build more complex UIs with overlapping elements, consider using a [GridLayout](/ui/grid-layout) for greater flexibility.

:::

## AbsoluteLayout Reference

### Props

| Name           | Type        | Description                                                                                                                                 |
| -------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `N/A`          | `N/A`       | None.                                                                                                                                       |
| `...Inherited` | `Inherited` | Additional inherited properties not shown. Refer to the [API Reference](https://docs.nativescript.org/api-reference/classes/absolutelayout) |

### Children props

When an element is a direct child of `<AbsoluteLayout>`, you can set the following additional properties.

| Name   | Type     | Description                                                                                               |
| ------ | -------- | --------------------------------------------------------------------------------------------------------- |
| `top`  | `Number` | Gets or sets the distance, in pixels, between the top edge of the child and the top edge of its parent.   |
| `left` | `Number` | Gets or sets the distance, in pixels, between the left edge of the child and the left edge of its parent. |
