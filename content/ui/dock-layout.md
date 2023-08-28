---
title: DockLayout
description: Layout container for docking views to the sides or the middle.
contributors:
  - rigor789
  - Ombuweb
---

`<DockLayout>` is a layout container that lets you dock child views to the sides or the center of the layout.

`<DockLayout>` has the following behavior:

- Uses the `dock` property to dock its children to the `left`, `right`, `top`, `bottom` or center of the layout.<br/>To dock a child element to the center, it must be the **last child** of the container and you must set the `stretchLastChild` property of the parent to `true`.
- Enforces layout constraints to its children.
- Resizes its children at runtime when its size changes.

## Examples

### Dock to every side without stretching the last child

The following example creates a frame-like layout consisting of 4 elements, positioned at the 4 edges of the screen.

```xml
<DockLayout stretchLastChild="false" backgroundColor="#3c495e">
  <Label text="left" dock="left" width="40" backgroundColor="#43B3F4" />
  <Label text="top" dock="top" height="40" backgroundColor="#1089CA" />
  <Label text="right" dock="right" width="40" backgroundColor="#43B3F4" />
  <Label text="bottom" dock="bottom" height="40" backgroundColor="#1089CA" />
</DockLayout>
```

<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript.org/layouts/dock_layout_no_stretch.svg" />

### Dock to every side and stretch the last child

The following example shows how `stretchLastChild` affects the positioning of child elements in a `DockLayout` container. The last child (`bottom`) is stretched to take up all the remaining space after positioning the first three elements.

```xml
<DockLayout stretchLastChild="true" backgroundColor="#3c495e">
  <Label text="left" dock="left" width="40" backgroundColor="#43B3F4" />
  <Label text="top" dock="top" height="40" backgroundColor="#1089CA" />
  <Label text="right" dock="right" width="40" backgroundColor="#43B3F4" />
  <Label text="bottom" dock="bottom" backgroundColor="#075B88" />
</DockLayout>
```

<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript.org/layouts/dock_layout_stretch.svg" />

### Dock to every side and the center

The following example creates a `<DockLayout>` of 5 elements. The first four wrap the center element in a frame.

```xml
<DockLayout stretchLastChild="true" backgroundColor="#3c495e">
  <Label text="left" dock="left" width="40" backgroundColor="#43B3F4" />
  <Label text="top" dock="top" height="40" backgroundColor="#1089CA" />
  <Label text="right" dock="right" width="40" backgroundColor="#43B3F4" />
  <Label text="bottom" dock="bottom" height="40" backgroundColor="#1089CA" />
  <Label text="center" backgroundColor="#075B88" />
</DockLayout>
```

<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript.org/layouts/dock_layout_all_sides_and_stretch.svg" />

### Dock multiple children to the same side

The following example creates a single line of 4 elements that stretch across the entire height and width of the screen.

```xml
<DockLayout stretchLastChild="true" backgroundColor="#3c495e">
  <Label text="left 1" dock="left" width="40" backgroundColor="#43B3F4" />
  <Label text="left 2" dock="left" width="40" backgroundColor="#1089CA" />
  <Label text="left 3" dock="left" width="40" backgroundColor="#075B88" />
  <Label text="last child" backgroundColor="#43B3F4" />
</DockLayout>
```

<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript.org/layouts/dock_layout_multiple_on_same_side.svg" />

## Props

### stretchLastChild

```ts
stretchLastChild: boolean
```

Enables or disables stretching the last child to fit the remaining space.

### ...Inherited

Additional inherited properties not shown. Refer to the [API Reference](/api/class/DockLayout).

## Children props

When an element is a direct child of `<DockLayout>`, these properties are accounted for:

### dock

```ts
dock: 'top' | 'right' | 'bottom' | 'left'
```

Specifies which side to dock the element to.
