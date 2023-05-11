---
title: WrapLayout
---

`<WrapLayout>` is a layout container that lets you position items in rows or columns, based on the `orientation` property. When the space is filled, the container automatically wraps items onto a new row or column.

## Horizontal wrap layout

By default, a `WrapLayout` wraps its child items along a row.
The following example creates a row of equally-sized items. When the row runs out of space, the container wraps the last item to a new row.

```xml
<WrapLayout backgroundColor="#3c495e">
  <Label text="first" width="30%" height="30%" backgroundColor="#43b883" />
  <Label text="second" width="30%" height="30%" backgroundColor="#1c6b48" />
  <Label text="third" width="30%" height="30%" backgroundColor="#289062" />
  <Label text="fourth" width="30%" height="30%" backgroundColor="#289062" />
</WrapLayout>
```

<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript.org/layouts/wrap_layout_horizontal.svg" />

## Vertical wrap layout

To wrap child items vertically, set the `WrapLayout`'s `orentation` property to `vertical`.
The following example creates a column of equally-sized items. When the column runs out of space, the container wraps the last item to a new column.

```xml
<WrapLayout orientation="vertical" backgroundColor="#3c495e">
  <Label text="first" width="30%" height="30%" backgroundColor="#43b883" />
  <Label text="second" width="30%" height="30%" backgroundColor="#1c6b48" />
  <Label text="third" width="30%" height="30%" backgroundColor="#289062" />
  <Label text="fourth" width="30%" height="30%" backgroundColor="#289062" />
</WrapLayout>
```

<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript.org/layouts/wrap_layout_vertical.svg" />

## WrapLayout Reference(s)

### Props

| Name           | Type        | Description                                                                                                                                                            |
| -------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `orientation`  | `String`    | Specifies the stacking direction.<br/>Valid values: `horizontal` (arranges items in rows) and `vertical` (arranges items in columns).<br/>Default value: `horizontal`. |
| `itemWidth`    | `Number`    | Sets the width used to measure and layout each child.<br/>Default value: `Number.NaN`, which does not restrict children.                                               |
| `itemHeight`   | `Number`    | Sets the height used to measure and layout each child.<br/>Default value is `Number.NaN`, which does not restrict children.                                            |
| `...Inherited` | `Inherited` | Additional inherited properties not shown. Refer to the [API Reference](https://docs.nativescript.org/api-reference/classes/wraplayout)                                |

### Children props

None.
