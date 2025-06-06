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

<Tabs>
<Tab flavor="typescript">

<<< @/../examples/typescript/src/ui/Slider/template.xml#example

</Tab>
<Tab flavor="angular">

<<< @/../examples/angular/src/ui/Slider/component.html#example

</Tab>
<Tab flavor="react">

<<< @/../examples/react/src/components/ui/slider.tsx#example

</Tab>
<Tab flavor="solid">

<<< @/../examples/solid/src/ui/slider.tsx#example

</Tab>
<Tab flavor="svelte">

<<< @/../examples/svelte/app/components/ui/Slider.svelte#example

</Tab>
<Tab flavor="vue">

<<< @/../examples/vue/src/ui/Slider/component.vue#example

</Tab>
</Tabs>

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
