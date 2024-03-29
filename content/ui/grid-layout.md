---
title: GridLayout
description: A layout container that lets you arrange its child elements in a table-like manner.
contributors:
  - rigor789
  - Ombuweb
---

The grid consists of rows, columns, and cells. A cell can span one or more rows and one or more columns. It can contain multiple child elements which can span over multiple rows and columns, and even overlap each other.

By default, `<GridLayout>` has one column and one row. You can add columns and rows by configuring the `columns` and the `rows` properties. In these properties, you need to set the number of columns and rows and their width and height. You set the number of columns by listing their widths, separated by a comma. You set the number of rows by listing their heights, separated by a comma.

You can set a fixed size for column width and row height or you can create them in a responsive manner:

- **An absolute number:** Indicates a fixed size.
- **auto:** Makes the column as wide as its widest child or makes the row as tall as its tallest child.
- **\*:** Takes as much space as available after filling all auto and fixed size columns or rows.

## Examples

### GridLayout with fixed sizing

The following example creates a simple 2-by-2 grid with fixed column widths and row heights.

```xml
<GridLayout columns="115, 115" rows="115, 115">
  <Label text="0,0" row="0" col="0" backgroundColor="#43B3F4" />
  <Label text="0,1" row="0" col="1" backgroundColor="#075B88" />
  <Label text="1,0" row="1" col="0" backgroundColor="#1089CA" />
  <Label text="1,1" row="1" col="1" backgroundColor="#43B3F4" />
</GridLayout>
```

<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript.org/layouts/grid_layout.svg" />

### GridLayout with star sizing

The following example creates a grid with responsive design, where space is allotted proportionally to child elements.

```xml
<GridLayout columns="*, 2*" rows="2*, 3*" backgroundColor="#3c495e">
  <Label text="0,0" row="0" col="0" backgroundColor="#43B3F4" />
  <Label text="0,1" row="0" col="1" backgroundColor="#075B88" />
  <Label text="1,0" row="1" col="0" backgroundColor="#1089CA" />
  <Label text="1,1" row="1" col="1" backgroundColor="#43B3F4" />
</GridLayout>
```

<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript.org/layouts/grid_layout_star_sizing.svg" />

### GridLayout with fixed and auto sizing

The following example create a grid with one auto-sized column and one column with fixed size. Rows have a fixed height.

```xml
<GridLayout columns="80, auto" rows="80, 80" backgroundColor="#3c495e">
  <Label text="0,0" row="0" col="0" backgroundColor="#43B3F4" />
  <Label text="0,1" row="0" col="1" backgroundColor="#075B88" />
  <Label text="1,0" row="1" col="0" backgroundColor="#1089CA" />
  <Label text="1,1" row="1" col="1" backgroundColor="#43B3F4" />
</GridLayout>
```

<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript.org/layouts/grid_layout_fixed_auto.svg" />

### GridLayout with mixed sizing and merged cells

The following example creates a complex grid with responsive design, mixed width and height settings, and some merged cells.

```xml
<GridLayout columns="40, auto, *" rows="40, auto, *" backgroundColor="#3c495e">
  <Label text="0,0" row="0" col="0" backgroundColor="#43B3F4" />
  <Label text="0,1" row="0" col="1" colSpan="2" backgroundColor="#075B88" />
  <Label text="1,0" row="1" col="0" rowSpan="2" backgroundColor="#1089CA" />
  <Label text="1,1" row="1" col="1" backgroundColor="#43B3F4" />
  <Label text="1,2" row="1" col="2" backgroundColor="#1089CA" />
  <Label text="2,1" row="2" col="1" backgroundColor="#075B88" />
  <Label text="2,2" row="2" col="2" backgroundColor="#43B3F4" />
</GridLayout>
```

<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript.org/layouts/grid_layout_complex.svg" />

## Props

### columns {#grid-columns}

```ts
columns: string // eg. *, 50, auto
```

A string value representing column widths delimited with commas.

Valid values: an absolute number, `auto`, or `*`:

- A number indicates an absolute column width.
- `auto` makes the column as wide as its widest child.
- `*` makes the column occupy all available horizontal space. The space is proportionally divided over all star-sized columns. You can set values such as `3*` and `5*` to indicate a ratio of 3:5 in sizes.

### rows {#grid-rows}

```ts
rows: string // eg. *, 50, auto
```

A string value representing row heights delimited with commas.

Valid values: an absolute number, `auto`, or `*`:

- A number indicates an absolute row height.
- `auto` makes the row as tall as its tallest child.
- `*` makes the row occupy all available vertical space. The space is proportionally divided over all star-sized rows. You can set values such as `3*` and `5*` to indicate a ratio of 3:5 in sizes.

### ...Inherited

Additional inherited properties not shown. Refer to the [API Reference](/api/class/GridLayout).

## Children props

When an element is a direct child of `<GridLayout>`, these properties are accounted for:

### row

```ts
row: number
```

The row for the element.

The rows are 0-indexed, so the first row is indicated by `0`.

### col

```ts
col: number
```

The column for the element.

The columns are 0-indexed, so the first column is indicated by `0`.

### rowSpan

```ts
rowSpan: number
```

The number of rows for the element to span across.

### colSpan

```ts
colSpan: number
```

The number of columns for the element to span across.
