---
title: ActivityIndicator
---

<!-- TODO: Add flavors -->

`<ActivityIndicator>` is a UI component that shows a progress indicator signaling to the user of an operation running in the background.

---

<DeviceFrame type="ios">
<img src="https://raw.githubusercontent.com/nativescript-vue/nativescript-vue-ui-tests/master/screenshots/ios-simulator103iPhone6/ActivityIndicator.png"/>
</DeviceFrame>
<DeviceFrame type="android">
<img src="https://raw.githubusercontent.com/nativescript-vue/nativescript-vue-ui-tests/master/screenshots/android23/ActivityIndicator.png" />
</DeviceFrame>

<!-- /// flavor plain -->

```xml
<ActivityIndicator
  busy="{{ isBusy }}"
  busyChange="{{ onBusyChanged }}"
/>
```

```ts
import { ActivityIndicator } from '@nativescript/core'

onBusyChanged(args: EventData) {
  const indicator: ActivityIndicator = args.object
  console.log(`indicator.busy changed to: ${indicator.busy}`)
}
```

<!-- ///

/// flavor angular

```xml
<ActivityIndicator [busy]="isBusy" (busyChange)="onBusyChanged($event)">
</ActivityIndicator>
```

```ts
import { ActivityIndicator } from '@nativescript/core'

onBusyChanged(args: EventData) {
  const indicator: ActivityIndicator = args.object
  console.log(`indicator.busy changed to: ${indicator.busy}`)
}
```

///

/// flavor vue

```xml
<ActivityIndicator busy="true" @busyChange="onBusyChanged" />
```

```js
export default {
  methods: {
    onBusyChanged(args) {
      const indicator = args.object // ActivityIndicator
      console.log(`indicator.busy changed to: ${indicator.busy}`)
    }
  }
}
```

///

/// flavor react

```tsx
<activityIndicator busy={true} />
```

///

/// flavor svelte

```xml
<activityIndicator busy="{true}" on:busyChange="{onBusyChanged}" />
```

```js
export default {
  methods: {
    onBusyChanged(args) {
      const indicator = args.object // ActivityIndicator
      console.log(`indicator.busy changed to: ${indicator.busy}`)
    }
  }
}
```

/// -->

## Props

### busy

```xml
<ActivityIndicator busy="{{ isBusy }}"
/>
```

```ts
export class HelloWorldModel extends Observable {
  isBusy = true
}
```

Gets or sets whether the indicator is active.

---

### Inherited

For additional inherited properties,refer to the [API Reference](https://docs.nativescript.org/api-reference/classes/activityindicator).

## Events

### busyChange

```xml
<ActivityIndicator
  busyChange="{{ onBusyChanged }}"
/>
```

```ts
export class HelloWorldModel extends Observable {
  onBusyChanged(args: EventData) {
    const indicator: ActivityIndicator = args.object as ActivityIndicator
    console.log(`indicator.busy changed to: ${indicator.busy}`)
  }
}
```

Emitted when the [busy](#busy) property is changed. Event data type: [EventData](https://docs.nativescript.org/api-reference/interfaces/eventdata).

---

### Native component

| Android                                                                                                                        | iOS                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| [`android.widget.ProgressBar` (indeterminate = true)](https://developer.android.com/reference/android/widget/ProgressBar.html) | [`UIActivityIndicatorView`](https://developer.apple.com/documentation/uikit/uiactivityindicatorview) |
