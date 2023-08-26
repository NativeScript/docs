---
title: FlexboxLayout
description: A layout container that implements (close-to-spec) CSS Flexbox.
contributors:
 - rigor789
 - Ombuweb
---

`<FlexboxLayout>` is a layout container that provides a non-exact implementation of [CSS Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox). This layout lets you arrange child components both horizontally and vertically.

Items are placed in the order they were declared in, unless overridden by the `order` child property.

## Examples

### Default FlexboxLayout

The following example creates a row of three equally-sized elements that span across the entire height of the screen.

```xml
<FlexboxLayout backgroundColor="#3c495e">
  <Label text="first" width="70" backgroundColor="#43B3F4" />
  <Label text="second" width="70" backgroundColor="#075B88" />
  <Label text="third" width="70" backgroundColor="#1089CA" />
</FlexboxLayout>
```

<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript.org/layouts/flexbox_layout_row_stretch.svg" />

### Default FlexboxLayout with items aligned to the top (`flex-start`)

The following example creates a row with items aligned to the top of the FlexboxLayout container (`flex-start`).

```xml
<FlexboxLayout alignItems="flex-start" backgroundColor="#3c495e">
  <Label text="first" width="70" height="70" backgroundColor="#43B3F4" />
  <Label text="second" width="70" height="70" backgroundColor="#075B88" />
  <Label text="third" width="70" height="70" backgroundColor="#1089CA" />
</FlexboxLayout>
```

<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript.org/layouts/flexbox_layout_row_flex-start.svg" />

### Custom item ordering in a FlexboxLayout

The following example reorders items using the `order` property.

```xml
<FlexboxLayout backgroundColor="#3c495e">
  <Label
    text="first"
    order="2"
    width="70"
    height="70"
    backgroundColor="#43B3F4"
  />
  <Label
    text="second"
    order="3"
    width="70"
    height="70"
    backgroundColor="#075B88"
  />
  <Label
    text="third"
    order="1"
    width="70"
    height="70"
    backgroundColor="#1089CA"
  />
</FlexboxLayout>
```

<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript.org/layouts/flexbox_layout_row_custom_order.svg" />

### FlexboxLayout with item wrapping

The following example shows items that wrap to a new row when there's not enough space for them to fit on the first row.

```xml
<FlexboxLayout flexWrap="wrap" backgroundColor="#3c495e">
  <Label text="first" width="30%" backgroundColor="#43B3F4" />
  <Label text="second" width="30%" backgroundColor="#075B88" />
  <Label text="third" width="30%" backgroundColor="#1089CA" />
  <Label text="fourth" width="30%" backgroundColor="#1089CA" />
</FlexboxLayout>
```

<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript.org/layouts/flexbox_layout_wrap.svg" />

### FlexboxLayout with a vertical direction (`column`)

The following example creates a column of three equally-sized elements that span across the entire width of the screen.

::: info Flexbox axis changed

This is the opposite of the default `flexDirection`, notice how the items are laid out in a column instead of a row.

:::

```xml
<FlexboxLayout flexDirection="column" backgroundColor="#3c495e">
  <Label text="first" height="70" backgroundColor="#43B3F4" />
  <Label text="second" height="70" backgroundColor="#075B88" />
  <Label text="third" height="70" backgroundColor="#1089CA" />
</FlexboxLayout>
```

<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript.org/layouts/flexbox_layout_column_stretch.svg" />

### Reversed items with mixed alignment in a FlexboxLayout

The following example paces items in a reversed column direction, with the remaining space split between items, and the begginging/end of the FlexboxLayout container using `justifyContent`.

The example also shows how items can modify their position using `alignSelf`

```xml
<FlexboxLayout
  flexDirection="column-reverse"
  justifyContent="space-around"
  backgroundColor="#3c495e"
>
  <Label text="first" height="70" backgroundColor="#43B3F4" />
  <Label
    text="second"
    alignSelf="center"
    width="70"
    height="70"
    backgroundColor="#075B88"
  />
  <Label
    text="third\nflex-end"
    alignSelf="flex-end"
    width="70"
    height="70"
    backgroundColor="#1089CA"
  />
  <Label text="fourth" height="70" backgroundColor="#1089CA" />
</FlexboxLayout>
```

<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript.org/layouts/flexbox_layout_column_reverse_space_around_align_self.svg" />

## Props

### flexDirection

```ts
flexDirection: 'row' | 'row-reverse' | 'column' | 'column-reverse'
```

Sets the direction for placing child elements in the flexbox container.

Valid values:

- `row` - horizontal, left to right
- `row-reverse` - horizontal, right to left
- `column` - vertical, top to bottom
- `column-reverse` - vertical, bottom to top

Default value: `row`.

### flexWrap

```ts
flexWrap: 'nowrap' | 'wrap' | 'wrap-reverse'
```

Sets whether child elements are forced in a single line or can flow into multiple lines. If set to multiple lines, also defines the cross axis which determines the direction new lines are stacked in.

Valid values:

- `nowrap` - single line which may cause the container to overflow
- `wrap` - multiple lines, direction is defined by `flexDirection`
- `wrap-reverse` - multiple lines, opposite to the direction defined by `flexDirection`

Default value: `nowrap`.

### justifyContent

```ts
justifyContent: 'flex-start' |
  'flex-end' |
  'center' |
  'space-between' |
  'space-around'
```

Sets the alignment of child elements along the main axis. You can use it to distribute leftover space when all the child elements on a line are inflexible or are flexible but have reached their maximum size. You can also use it to control the alignment of items when they overflow the line.

Valid values:

- `flex-start` - items are packed toward the start line
- `flex-end` - items are packed toward the end line
- `center` - items are centered along the line
- `space-between` - items are evenly distributed on the line&mdash;first item is on the start line, last item on the end line
- `space-around` - items are evenly distributed on the line with equal space around them

Default value: `flex-start`.

### alignItems

```ts
alignItems: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
```

(Android-only) Sets the alignment of child elements along the cross axis on the current line. Acts as `justifyContent` for the cross axis.

Valid values:

- `flex-start` - cross-start margin edge of the items is placed on the cross-start line
- `flex-end` - cross-end margin edge of the items is placed on the cross-end line
- `center` - items are centered оn the cross axis
- `baseline` - the item baselines are aligned
- `stretch` - items are stretched to fill the container but respect `min-width` and `max-width`

Default value: `stretch`.

### alignContent

```ts
alignContent: 'flex-start' |
  'flex-end' |
  'center' |
  'space-between' |
  'space-around' |
  'stretch'
```

Sets how lines are aligned in the flex container on the cross axis, similar to how `justifyContent` aligns individual items within the main axis.

This property has no effect when the flex container has only one line.

Valid values:

- `flex-start` - lines are packed to the start of the container
- `flex-end` - lines are packed to the end of the container
- `center` - lines are packed to the center of the container
- `space-between` - lines are evenly distributed; the first line is at the start of the container while the last one is at the end
- `space-around` - lines are evenly distributed with equal space between them
- `stretch` - lines are stretched to take up the remaining space

Default value: `stretch`.

### ...Inherited

Additional inherited properties not shown. Refer to the [API Reference](/api/class/FlexboxLayout)

## Children props

When an element is a direct child of `<FlexboxLayout>`, these properties are accounted for:

### order

```ts
order: number
```

Sets the order in which child element appear in relation to one another.

### flexGrow

```ts
flexGrow: number
```

Indicates that the child should grow in size, if necessary. Sets how much the child will grow in proportion to the rest of the child elements in the flex container.

### flexShrink

```ts
flexShrink: number
```

Indicates that the child should shrink when the row runs out of space. Sets how much the flex item will shrink in proportion to the rest of the child elements in the flex container. When not specified, its value is set to `1`.

### alignSelf

```ts
alignSelf: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
```

(Android-only) Overrides the `alignItems` value for the child.

Valid values:

- `flex-start` (cross-start margin edge of the item is placed on the cross-start line),
- `flex-end` (cross-end margin edge of the item is placed on the cross-end line),
- `center` (item is centered on the cross axis),
- `baseline` (the item baselines are aligned), and
- `stretch` (items is stretched to fill the container but respects `min-width` and `max-width`).

Default value: `stretch`.

### flexWrapBefore

```ts
flexWrapBefore: boolean
```

When `true`, forces the item to wrap onto a new line.

::: info Note

This property is not part of the CSS Flexbox specification.

:::

Default value: `false`.
