---
title: DatePicker
---

<!-- TODO: Add flavors -->

`<DatePicker>` is a UI component that lets users select a date from a pre-configured range.

See also: [TimePicker](/ui/timepicker).

---

<DeviceFrame type="ios">
<img  src="https://raw.githubusercontent.com/nativescript-vue/nativescript-vue-ui-tests/master/screenshots/ios-simulator103iPhone6/DatePicker.png"/>
</DeviceFrame>
<DeviceFrame type="android">
<img src="https://raw.githubusercontent.com/nativescript-vue/nativescript-vue-ui-tests/master/screenshots/android23/DatePicker.png" />
</DeviceFrame>

<!-- /// flavor plain -->

```xml
<DatePicker
  year="1980"
  month="4"
  day="20"
  loaded="onDatePickerLoaded"
  date="{{ date }}"
  minDate="{{ minDate }}"
  maxDate="{{ maxDate }}"
/>
```

```ts
import { DatePicker, EventData, Observable, Page } from '@nativescript/core'

export function onNavigatingTo(args: EventData) {
  const page = args.object as Page
  const vm = new Observable()

  // in the following example the DatePicker properties are binded via Observableproperties
  vm.set('minDate', new Date(1975, 0, 29)) // the binded minDate property accepts Date object
  vm.set('maxDate', new Date(2045, 4, 12)) // the binded maxDate property accepts Date object

  page.bindingContext = vm
}

export function onDatePickerLoaded(data: EventData) {
  const datePicker = data.object as DatePicker
  datePicker.on('dateChange', (args) => {
    console.dir(args)
  })
  datePicker.on('dayChange', (args) => {
    console.dir(args)
  })
  datePicker.on('monthChange', (args) => {
    console.dir(args)
  })
  datePicker.on('yearChange', (args) => {
    console.dir(args)
  })
}
```

<!--
///

/// flavor angular

```xml
<DatePicker
  year="1980"
  month="4"
  day="20"
  [minDate]="minDate"
  [maxDate]="maxDate"
  (dateChange)="onDateChanged($event)"
  (dayChange)="onDayChanged($event)"
  (monthChange)="onMonthChanged($event)"
  (yearChange)="onYearChanged($event)"
  (loaded)="onDatePickerLoaded($event)"
  verticalAlignment="center"
>
</DatePicker>
```

```typescript
import { Component } from '@angular/core'
import { DatePicker } from '@nativescript/core'

@Component({
  moduleId: module.id,
  templateUrl: './usage.component.html'
})
export class DatePickerUsageComponent {
  minDate: Date = new Date(1975, 0, 29)
  maxDate: Date = new Date(2045, 4, 12)

  onDatePickerLoaded(args) {
    // const datePicker = args.object as DatePicker;
  }

  onDateChanged(args) {
    console.log('Date New value: ' + args.value)
    console.log('Date value: ' + args.oldValue)
  }

  onDayChanged(args) {
    console.log('Day New value: ' + args.value)
    console.log('Day Old value: ' + args.oldValue)
  }

  onMonthChanged(args) {
    console.log('Month New value: ' + args.value)
    console.log('Month Old value: ' + args.oldValue)
  }

  onYearChanged(args) {
    console.log('Year New value: ' + args.value)
    console.log('Year Old value: ' + args.oldValue)
  }
}
```

///

/// flavor vue

```xml
<DatePicker :date="someDate" />
```

`<DatePicker>` provides two-way data binding using `v-model`.

```xml
<DatePicker v-model="selectedDate" />
```

///

/// flavor react

```tsx
import { EventData } from '@nativescript/core'
;<datePicker
  date={new Date()}
  onDateChange={(args: EventData) => {
    const datePicker = args.object
  }}
/>
```

///

/// flavor svelte

```xml
<datePicker date="{someDate}" />
```

`<datePicker>` provides two-way data binding using `bind`.

```xml
<datePicker bind:date="{selectedDate}" />
```

/// -->

## Props

### date

```xml
<DatePicker date="{{ date }}" />
```

```ts
export class HelloWorldModel extends Observable {
  date = new Date()
}
```

Gets or sets the complete date.

---

### dateMin

```xml
<DatePicker minDate="{{ minDate }}" />
```

```ts
export class HelloWorldModel extends Observable {
  minDate = new Date('2021-01-01')
}
```

Gets or sets the earliest possible date to select.

---

### dateMax

```xml
<DatePicker maxDate="{{ maxDate }}" />
```

```ts
export class HelloWorldModel extends Observable {
  minDate = new Date('2023-12-31')
}
```

Gets or sets the latest possible date to select.

---

### day

```xml
<DatePicker day="{{ day }}" />
```

```ts
export class HelloWorldModel extends Observable {
  day = 1
}
```

Gets or sets the day of the month.

---

### month

```xml
<DatePicker month="{{ month }}" />
```

```ts
export class HelloWorldModel extends Observable {
  month = 1
}
```

Gets or sets the month.

---

### year

```xml
<DatePicker year="{{ year }}" />
```

```ts
export class HelloWorldModel extends Observable {
  year = 2022
}
```

Gets or sets the year.

---

### iosPreferredDatePickerStyle

```xml
<DatePicker iosPreferredDatePickerStyle="2"/>
```

```ts
datePicker.iosPreferredDatePickerStyle = 2
```

Gets or set the UIDatePickerStyle of the date picker in iOS `13.4+`. Defaults to `0`.
Valid values are numbers:

- `0 = automatic`: system picks the concrete style based on the current platform and date picker mode.
- `1 = wheels`: the date picker displays as a wheel picker.
- `2 = compact` : the date picker displays as a label that when tapped displays a calendar-style editor.
- `3 = inline` : the date pickers displays as an inline, editable field

---

## Event(s)

### dateChange

```xml
<DatePicker loaded="{{ onDatePickerLoaded }}"/>
```

```ts
onDatePickerLoaded(args: EventData) {
    const picker = args.object as DatePicker
    picker.on("dateChange", (args: PropertyChangeData) => {
    console.log("New date: ", args.value)
    })
  }
```

Emitted when the selected date changes. See the [PropertyChangeData](https://docs.nativescript.org/api-reference/interfaces/propertychangedata) interface for the event data.

---

### Native component

| Android                                                                                               | iOS                                                                            |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| [`android.widget.DatePicker`](https://developer.android.com/reference/android/widget/DatePicker.html) | [`UIDatePicker`](https://developer.apple.com/documentation/uikit/uidatepicker) |
