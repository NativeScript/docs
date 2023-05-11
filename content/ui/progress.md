---
title: Progress
---

`<Progress>` is a UI component that shows a bar to indicate the progress of a task.

See also: [ActivityIndicator](/ui/activity-indicator).

---

<DeviceFrame type="ios">
<img  src="https://raw.githubusercontent.com/nativescript-vue/nativescript-vue-ui-tests/master/screenshots/ios-simulator103iPhone6/Progress.png"/>
</DeviceFrame>
<DeviceFrame type="android">
<img src="https://raw.githubusercontent.com/nativescript-vue/nativescript-vue-ui-tests/master/screenshots/android23/Progress.png" />
</DeviceFrame>

### Creating a Progress

<!-- /// flavor plain -->

```xml
<Progress
  width="100%"
  value="{{ progressValue }}"
  maxValue="{{ progressMaxValue }}"
  loaded="onProgressLoaded"
/>
```

```ts
import {
  Observable,
  Page,
  Progress,
  PropertyChangeData,
} from '@nativescript/core'

export function onNavigatingTo(args) {
  const page = args.object as Page
  vm.set('progressValue', 10) // Initial value
  vm.set('progressMaxValue', 100) // Maximum value
  // Forcing progress value change (for demonstration)
  setInterval(() => {
    const value = vm.get('progressValue')
    vm.set('progressValue', value + 2)
  }, 300)
  page.bindingContext = vm
}
export function onProgressLoaded(args) {
  const myProgressBar = args.object as Progress
  myProgressBar.on('valueChange', (pargs: PropertyChangeData) => {
    // TIP: args (for valueChange of Progress) is extending EventData with oldValue & value parameters
    console.log(`Old Value: ${pargs.oldValue}`)
    console.log(`New Value: ${pargs.value}`)
  })
}
```

<!-- ///

/// flavor angular

```xml
<progress value="25" maxValue="100" (valueChanged)="onValueChanged($event)"></progress>
```

```ts
import { Component, OnInit } from '@angular/core'

@Component({
  moduleId: module.id,
  templateUrl: './styling.component.html',
  styleUrls: ['./styling.component.css']
})
export class StylingComponent implements OnInit {
  public progressValue: number

  ngOnInit() {
    this.progressValue = 25
  }
}
```

///

/// flavor react

```tsx
function getTaskCompletionPercent() {
  // Just a stub method to illustrate the concept.
  return 10
}

;<progress value={getTaskCompletionPercent()} maxValue={100} />
```

///

/// flavor vue

```xml
<progress :value="currentProgress" />
```

///

/// flavor svelte

```xml
<progress value="{currentProgress}" />
```

/// -->

### Styling Progress

Using `backgroundColor` (**CSS**: `background-color`) & color to change the Progress style.

:::tip Note
`backgroundColor` will work only on `iOS`; on `Android` the background will be the color with applied opacity.
:::

```xml
<progress
  value="50"
  maxValue="100"
  backgroundColor="red"
  color="green"
></progress>
<!-- Using @nativescript/tailwind to change the Progress style -->
<progress value="25" maxValue="100" class="bg-red-500 text-red-900"></progress>
```

## Props

### value

```xml
<Progress value="{{ progressValue }}" />
```

ets or sets the current value of the progress bar. Must be within the range of 0 to [maxValue](#maxvalue).

---

### maxValue

```xml
<Progress maxValue="{{ progressMaxValue }}" />
```

Gets or sets the maximum value of the progress bar. Defaults to: `100`.

---

### ...Inherited

For additional inherited properties, refer to the [API Reference](https://docs.nativescript.org/api-reference/classes/progress)

## Events

### valueChange

Emitted when the `value` property changes.

---

## Native Component

| Android                                                                                                                         | iOS                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| [`android.widget.ProgressBar` (indeterminate = false)](https://developer.android.com/reference/android/widget/ProgressBar.html) | [`UIProgressView`](https://developer.apple.com/documentation/uikit/uiprogressview) |
