---
title: Slider
---

<!-- TODO: Add flavors -->

`<Slider>` is a UI component that provides a slider control for picking values within a specified numeric range.

---

<DeviceFrame type="ios">
<img  src="https://raw.githubusercontent.com/nativescript-vue/nativescript-vue-ui-tests/master/screenshots/ios-simulator103iPhone6/Slider.png"/>
</DeviceFrame>
<DeviceFrame type="android">
<img src="https://raw.githubusercontent.com/nativescript-vue/nativescript-vue-ui-tests/master/screenshots/android23/Slider.png" />
</DeviceFrame>

### Simple Slider and listening to its value change event

<!-- /// flavor plain -->

To listen to the `valueChange` event, register the listener in the Slider's `loaded` event handler.

<!-- Is the preceeding phrase accurate -->

```xml
<Slider value="10" minValue="0" maxValue="100" loaded="{{ onSliderLoaded }}" />
```

```ts
import { Observable, Slider } from '@nativescript/core'

export class HelloWorldModel extends Observable {
  constructor() {
    super()
  }
  onSliderLoaded(args: EventData) {
    const slider = args.object as Slider

    slider.on('valueChange', (args: PropertyChangeData) => {
      console.log('valueChange: ', args.value, 'Old: ' + args.oldValue)
    })
  }
}
```

<!-- ///

/// flavor angular

```xml
<Slider
  value="10"
  minValue="0"
  maxValue="100"
  (valueChange)="onSliderValueChange($event)"
>
</Slider>
```

```ts
import { Component } from '@angular/core'
import { Slider } from '@nativescript/core'

@Component({
  moduleId: module.id,
  templateUrl: './usage.component.html'
})
export class UsageComponent {
  onSliderValueChange(args) {
    const slider = args.object as Slider
    console.log(`Slider new value ${args.value}`)
  }
}
```

///

/// flavor vue

```xml
<Slider value="80" @valueChange="onValueChanged" />
```

`<Slider>` provides two-way data binding using `v-model`:

```xml
<Slider v-model="value" />
```

///

/// flavor svelte

```tsx
<slider value="80" on:valueChange="{onValueChanged}" />
```

`<slider>` provides two-way data binding of `value`:

```xml
<slider bind:value="{value}" />
```

///

/// flavor react

```tsx
<slider value={0} onValueChange={onValueChange} />
```

/// -->

## Props

### value

```xml
<Slider value="10" />
```

Gets or sets the currently selected value of the slider. Defaults to `0`.

---

### minValue

```xml
<Slider minValue="0" />
```

Gets or sets the minimum value of the slider.

---

### maxValue

```xml
<Slider maxValue="100"/>
```

Gets or sets the maximum value of the slider.

---

### ...Inherited

For additional inherited properties, refer to the [API Reference](https://docs.nativescript.org/api-reference/classes/slider).

## Events

### valueChange

```ts
slider.on('valueChange', (args: PropertyChangeData) => {
  console.log('valueChange: ', args.value, 'Old: ' + args.oldValue)
})
```

Emitted when the value of the slider changes. See [PropertyChangeData](https://docs.nativescript.org/api-reference/interfaces/propertychangedata) interface for available data.

---

## Native component

| Android                                                                                         | iOS                                                                    |
| ----------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [`android.widget.SeekBar`](https://developer.android.com/reference/android/widget/SeekBar.html) | [`UISlider`](https://developer.apple.com/documentation/uikit/uislider) |
