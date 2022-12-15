---
title: TimePicker
---
<!-- TODO: Add flavors -->
`<TimePicker>` is a UI component that lets users select time.

See also: [DatePicker](/ui/datepicker).

---

## Creating a simple TimePicker
To listen to time change event, handle the `timeChange` event in the `loaded` event handler of the `<TimePicker>`
<!-- /// flavor plain -->

```xml
<TimePicker
  hour="10"
  minute="25"
  loaded="onPickerLoaded"
/>
```

```ts
import { TimePicker } from '@nativescript/core'

export function onPickerLoaded(args) {
  const timePicker = args.object as TimePicker

  // Configurable properties of TimePicker
  timePicker.hour = 10
  timePicker.minute = 25
  timePicker.minuteInterval = 5
  timePicker.minHour = 7
  timePicker.maxHour = 11
  timePicker.minMinute = 10
  timePicker.maxMinute = 45

  timePicker.on('timeChange', (data: PropertyChangeData ) => {
    // data is of type PropertyChangeData
    console.log('Picked TIME: ', data.value)
    console.log('Previous TIME: ', data.oldValue)
  })
}
```

<!-- ///

/// flavor angular

```html
<TimePicker
  hour="9"
  minute="25"
  maxHour="23"
  maxMinute="59"
  minuteInterval="5"
  (timeChange)="onTimeChanged($event)"
>
</TimePicker>
```

```ts
import { Component } from '@angular/core'
import { TimePicker } from '@nativescript/core'

@Component({
  moduleId: module.id,
  templateUrl: './usage.component.html'
})
export class UsageComponent {
  todayObj: Date = new Date()

  onTimeChanged(args) {
    const tp = args.object as TimePicker

    const time = args.value
    console.log(`Chosen time: ${time}`)
  }
}
```

///

/// flavor vue

```html
<TimePicker :hour="selectedHour" :minute="selectedMinute" />
```

`<TimePicker>` provides two-way data binding using `v-model`.

```html
<TimePicker v-model="selectedTime" />
```

///

/// flavor svelte

```tsx
<timePicker hour="{selectedHour}" minute="{selectedMinute}" />
```

`<timePicker>` provides two-way data binding using `bind`.

```html
<timePicker bind:time="{selectedTime}" />
```

///

/// flavor react

```tsx
<timePicker hour={selectedHour} minute={selectedMinute} />
```

/// -->

## Props
### hour
```xml
<TimePicker hour="10"/>
```
```ts
timePicker.hour = 10
```
Gets or sets the selected hour.

---
### minute
```xml
<TimePicker minute="10"/>
```
```ts
timePicker.minute = 25
```
Gets or sets the selected minute.

---
### time
```ts
time: Date = timePicker.time
```
Gets or sets the selected time.                              

---
### minHour
```xml
<TimePicker minHour="7"/>
```
```ts
timePicker.minHour = 7
```
Gets or sets the minimum selectable hour. 

---
### maxHour
```xml
<TimePicker maxHour="7"/>
```
```ts
timePicker.maxHour = 11
``` 
Gets or sets the maximum selectable hour. 

---
### minMinute
```xml
<TimePicker minMinute="10"/>
```
```ts
timePicker.minMinute = 10
```
Gets or sets the minimum selectable minute.                            

---
### maxMinute
```xml
<TimePicker maxMinute="45"/>
```
```ts
timePicker.maxMinute = 45
```
Gets or sets the maximum selectable minute.                            

---
### minuteInterval
```xml
<TimePicker minuteInterval="45"/>
```
```ts
timePicker.minuteInterval = 45
```

Gets or sets the selectable minute interval. `Default`:`1`.                                      

---

### Inherited Props
 For additional inherited properties not shown, refer to the [API Reference](https://docs.nativescript.org/api-reference/classes/timepicker) |

## Events

### timeChange
```ts
timePicker.on('timeChange', (data: PropertyChangeData ) => {
    console.log('Picked TIME: ', data.value)
    console.log('Previous TIME: ', data.oldValue)
  })
  ```
Emitted when the selected time changes. See the [PropertyChangeData](https://docs.nativescript.org/api-reference/interfaces/propertychangedata) interface for available event data properties.

---
## Native component

| Android                                                                                          | iOS                                                                            |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| [`android.widget.TimePicker`](https://developer.android.com/reference/android/widget/TimePicker) | [`UIDatePicker`](https://developer.apple.com/documentation/uikit/uidatepicker) |
