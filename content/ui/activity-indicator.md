---
title: ActivityIndicator
description: UI component for signaling activity.
contributors:
  - rigor789
  - Ombuweb
---

`<ActivityIndicator>` is a UI component that shows a progress indicator signaling to the user of an operation running in the background.

<DeviceFrame type="ios">
<img src="../screenshots/ios/ActivityIndicator.png"/>
</DeviceFrame>
<DeviceFrame type="android">
<img src="../screenshots/android/ActivityIndicator.png"/>
</DeviceFrame>

<<< @/../examples/src/ui/ActivityIndicator/template.xml#example

## Examples

### Always busy ActivityIndicator

```xml
<ActivityIndicator busy="true" />
```

## Props

### busy

```ts
busy: boolean
```

Gets or sets whether the indicator is busy.

---

### ...Inherited

For additional inherited properties, refer to the [API Reference](/api/class/ActivityIndicator).

## Events

### busyChange

```ts
on('busyChange', (args: EventData) => {
  const indicator = args.object as ActivityIndicator
  console.log(`indicator.busy changed to: ${indicator.busy}`)
})
```

Emitted when the busy property changes.

See [EventData](/api/interface/EventData).

## Native component

| Android                                                                                                                        | iOS                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| [`android.widget.ProgressBar` (indeterminate = true)](https://developer.android.com/reference/android/widget/ProgressBar.html) | [`UIActivityIndicatorView`](https://developer.apple.com/documentation/uikit/uiactivityindicatorview) |
