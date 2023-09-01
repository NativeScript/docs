---
title: Placeholder
description: Helper UI component for rendering native views.
contributors:
  - rigor789
  - Ombuweb
---

`<Placeholder>` allows adding native views directly in your markup without creating a full [View](#) wrapper for it. When NativeScript is constructing the UI and encounters a Placeholder element, it emits a `creatingView` event, allowing you to pass in any native view to be rendered by assigning it to the `args.view` parameter.

<DeviceFrame type="ios">
<img src="../screenshots/ios/Placeholder.png"/>
</DeviceFrame>
<DeviceFrame type="android">
<img src="../screenshots/android/Placeholder.png"/>
</DeviceFrame>

<<< @/../examples/src/ui/Placeholder/template.xml#example
<<< @/../examples/src/ui/Placeholder/template.ts#example

## Props

### ...Inherited

For additional inherited properties, refer to the [API Reference](/api/class/Placeholder).

## Events

### creatingView

```ts
on('creatingView', (args: CreateViewEventData) => {
  const placeholder = args.object as Placeholder
  args.view = someNativeView
})
```

Emitted when building the UI, the event args allow passing a native view instance back via `args.view`.

See [CreateViewEventData](/api/interface/CreateViewEventData)
