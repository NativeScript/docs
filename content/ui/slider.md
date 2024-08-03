---
title: Slider
description: UI component for picking numeric values from a range.
contributors:
  - rigor789
  - Ombuweb
---

`<Slider>` is a UI component that provides a slider control for picking values within a specified numeric range.

<DeviceFrame type="ios">
<img src="../assets/images/screenshots/ios/Slider.png"/>
</DeviceFrame>
<DeviceFrame type="android">
<img src="../assets/images/screenshots/android/Slider.png"/>
</DeviceFrame>

<<< @/../examples/typescript/src/ui/Slider/template.xml#example

## Props

### value

```ts
value: number
```

Gets or sets the currently selected value of the slider.

Defaults to `0`.

### minValue

```ts
minValue: number
```

Gets or sets the minimum value of the slider.

### maxValue

```ts
maxValue: number
```

Gets or sets the maximum value of the slider.

### ...Inherited

For additional inherited properties, refer to the [API Reference](/api/class/Slider).

## Events

### valueChange

```ts
on('valueChange', (args: PropertyChangeData) => {
  const slider = args.object as Slider
  console.log('Slider value changed to', args.value)
})
```

Emitted when the value of the slider changes.

See [PropertyChangeData](/api/interface/PropertyChangeData).

## Native component

- Android: [`android.widget.SeekBar`](https://developer.android.com/reference/android/widget/SeekBar.html)
- iOS: [`UISlider`](https://developer.apple.com/documentation/uikit/uislider)
