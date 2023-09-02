---
title: WrapLayout
description: Layout Container that wraps it's items once there's no more space to fit them.
contributors:
  - rigor789
  - Ombuweb
---

`<WrapLayout>` is a layout container that lets you position items in rows or columns, based on the `orientation` property. When the space is filled, the container automatically wraps items onto a new row or column.

## Examples

### Horizontal WrapLayout

By default, a `WrapLayout` wraps its child items along a row.
The following example creates a row of equally-sized items. When the row runs out of space, the container wraps the last item to a new row.

```xml
<WrapLayout backgroundColor="#3c495e">
  <Label text="first" width="30%" height="30%" backgroundColor="#43B3F4" />
  <Label text="second" width="30%" height="30%" backgroundColor="#075B88" />
  <Label text="third" width="30%" height="30%" backgroundColor="#1089CA" />
  <Label text="fourth" width="30%" height="30%" backgroundColor="#1089CA" />
</WrapLayout>
```

<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript.org/layouts/wrap_layout_horizontal.svg" />

### Vertical WrapLayout

To wrap child items vertically, set the `WrapLayout`'s `orentation` property to `vertical`.
The following example creates a column of equally-sized items. When the column runs out of space, the container wraps the last item to a new column.

```xml
<WrapLayout orientation="vertical" backgroundColor="#3c495e">
  <Label text="first" width="30%" height="30%" backgroundColor="#43B3F4" />
  <Label text="second" width="30%" height="30%" backgroundColor="#075B88" />
  <Label text="third" width="30%" height="30%" backgroundColor="#1089CA" />
  <Label text="fourth" width="30%" height="30%" backgroundColor="#1089CA" />
</WrapLayout>
```

<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript.org/layouts/wrap_layout_vertical.svg" />

## Props

### orientation

```ts
orientation: 'horizontal' | 'vertical'
```

Specifies the stacking direction.

Defaults to `horizontal`.

### itemWidth

```ts
itemWidth: number
```

Sets the width used to measure and layout each child. When not set, the item width is automatically calculated based on it's contents.

Defaults to `Number.NaN`.

### itemHeight

```ts
itemHeight: number
```

Sets the height used to measure and layout each child. When not set, the item height is automatically calculated based on it's contents.

### ...Inherited

For additional inherited properties not shown, refer to the [API Reference](/api/class/WrapLayout).
