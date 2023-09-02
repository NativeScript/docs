---
title: The Layout process
---

Getting views to render with the right dimensions and positions requires a run of the layout process. When rendering, a recursive process runs through every view in the **view hierarchy** in two passes &mdash; a measure pass and a layout pass.

During **the measure pass** every view is measured to obtain its desired size. The following properties are considered during the measuring:

- `width`, `height`
- `minWidth`, `minHeight`
- `visibility`
- `marginTop`, `marginRight`, `marginBottom`, `marginLeft`

During **the layout pass** every view is placed in a specific layout slot. The slot is determined by the result of the measure pass and the following properties:

- `marginTop`, `marginRight`, `marginBottom`, `marginLeft`
- `horizontalAlignment`, `verticalAlignment`

The layout process is by nature an resource-intensive process and it's performance highly depends on the number views (and complexity).
<!-- TODO: fix links -->
:::tip
It's a good practice to minimize deep nesting of views. Instead, utilize different [Layout Containers](https://chat.openai.com/ui-and-styling#layout-containers) to achieve a simpler and more organized view hierarchy. This approach improves readability, maintainability and performance.

**For example:** don't treat `<StackLayout>` as a `<div>` &mdash; instead try to use a `<GridLayout>` with specific `rows` and `columns` to achieve the same result:

```html
<StackLayout>
  <StackLayout orientation="horizontal">
    <SomeItem />
    <SomeItem />
  </StackLayout>
  <StackLayout orientation="horizontal">
    <!-- ... -->
  </StackLayout>
</StackLayout>
```

<!--  -->

```html
<GridLayout rows="auto, auto" columns="auto, auto">
  <SomeItem row="0" col="0" />
  <SomeItem row="0" col="1" />
  <!-- ... row="1" ... -->
</GridLayout>
```

One-offs are fine with the `<StackLayout>` approach, but building a whole app with the first approach will usually result in poor performance.

:::