---
title: TextView
---

`<TextView>` is a UI component that shows an editable or a read-only multi-line text container. You can use it to let users type large text in your app or to show longer, multi-line text on the screen.

`<TextView>` extends [`TextBase`](https://docs.nativescript.org/api-reference/classes/textbase) and [`EditableTextBase`](https://docs.nativescript.org/api-reference/classes/editabletextbase) which provide additional properties and events.

---

<DeviceFrame type="ios">
<img  src="https://raw.githubusercontent.com/nativescript-vue/nativescript-vue-ui-tests/master/screenshots/ios-simulator103iPhone6/TextView.png"/>
</DeviceFrame>
<DeviceFrame type="android">
<img src="https://raw.githubusercontent.com/nativescript-vue/nativescript-vue-ui-tests/master/screenshots/android23/TextView.png" />
</DeviceFrame>

<!-- /// flavor plain -->

```xml
<TextView
  loaded="onTextViewLoaded"
  hint="Enter Date"
  text="{{ viewDate }}"
  secure="false"
  keyboardType="datetime"
  returnKeyType="done"
  autocorrect="false"
  maxLength="10"
/>
```

```ts
import { Observable, Page, TextView } from '@nativescript/core'

export function onNavigatingTo(args) {
  const page = args.object as Page
  const vm = new Observable()
  vm.set('viewDate', '')
  page.bindingContext = vm
}
export function onTextViewLoaded(argsloaded) {
  const textView = argsloaded.object as TextView
  textView.on('focus', (args) => {
    const view = args.object as TextView
    console.log('On TextView focus')
  })
  textView.on('blur', (args) => {
    const view = args.object as TextView
    console.log('On TextView blur')
  })
}
```

<!-- ///

/// flavor angular

```xml
<TextView hint="Enter some text..." [text]="tvtext" (textChange)="onTextChange($event)">
</TextView>
```

```ts
import { Component } from '@angular/core'
import { EventData, TextView } from '@nativescript/core'

@Component({
  moduleId: module.id,
  templateUrl: './usage.component.html'
})
export class UsageComponent {
  tvtext = ''

  onTextChange(args: EventData) {
    const tv = args.object as TextView
    console.log(tv.text)
  }
}
```

///

/// flavor vue

```xml
<TextView text="Multi\nLine\nText" />
```

`<TextView>` provides two-way data binding using `v-model`.

```xml
<TextView v-model="textViewValue" />
```

///

/// flavor svelte

```xml
<textView text="Multi\nLine\nText" />
```

`<textView>` provides two-way data binding using `bind`.

```xml
<textView bind:text="{textViewValue}" />
```

///

/// flavor react

```tsx
<textView text={'Multi\nLine\nText'} />
```

/// -->

### Displaying multi-style text

To apply multiple styles to the text in your `<TextView>`, you can use `<FormattedString>`

<!-- /// flavor vue

```xml
<TextView editable="false">
  <FormattedString>
    <span text="You can use text attributes such as " />
    <span text="bold, " fontWeight="Bold" />
    <span text="italic " fontStyle="Italic" />
    <span text="and " />
    <span text="underline." textDecoration="Underline" />
  </FormattedString>
</TextView>
```

///

/// flavor svelte

```tsx
<textView editable="{false}">
  <formattedString>
    <span text="You can use text attributes such as " />
    <span text="bold, " fontWeight="Bold" />
    <span text="italic " fontStyle="Italic" />
    <span text="and " />
    <span text="underline." textDecoration="Underline" />
  </formattedString>
</textView>
```

///

/// flavor plain -->

```xml
<TextView editable="false">
  <FormattedString>
    <span text="You can use text attributes such as " />
    <span text="bold, " fontWeight="Bold" />
    <span text="italic " fontStyle="Italic" />
    <span text="and " />
    <span text="underline." textDecoration="Underline" />
  </FormattedString>
</TextView>
```

<!-- ///

/// flavor angular

```xml
<TextView editable="false">
  <FormattedString>
    <span text="You can use text attributes such as "></span>
    <span text="bold, " fontWeight="Bold"></span>
    <span text="italic " fontStyle="Italic"></span>
    <span text="and "></span>
    <span text="underline." textDecoration="Underline"></span>
  </FormattedString>
</TextView>
```

 ///

/// flavor react

```tsx
<textView editable={false}>
  <formattedString>
    <span text="You can use text attributes such as " />
    <span text="bold, " fontWeight="bold" />
    <span text="italic " fontStyle="italic" />
    <span text="and " />
    <span text="underline." textDecoration="underline" />
     To set text on the <span> element, please do use the `text` prop; it can't safely take text nodes as children!
  </formattedString>
</textView>
```

/// -->

## Props

### text

```xml
<TextView text="{{ viewDate }}" />
```

```ts
text: string = textView.text
```

Gets or sets the `text` value of the component.

---

### hint

```xml
<TextView hint="hint" />
```

```ts
hint: string = textView.hint
```

Gets or sets the placeholder text for the component.

---

### editable

```xml
<TextView editable="false" />
```

```ts
editable: boolean = textView.editable
//or
textView.editable = false
```

Toggles the ability to take user input.

---

### keyboardType

```xml
<TextView keyboardType="number" />
```

```ts
textView.keyboardType = CoreTypes.KeyboardType.number
//or
keyboardType: CoreTypes.KeyboardType = textView.keyboardType
```

Shows the appropriate keyboard keys for the data the TextField will capture. See [CoreTypes.KeyboardType](https://docs.nativescript.org/api-reference/modules/coretypes.keyboardtype) for available values.

---

### returnKeyType

```xml
<TextView returnKeyType="next" />
```

```ts
textView.returnKeyType = CoreTypes.ReturnKeyType.next
//or
returnKeyType: CoreTypes.ReturnKeyType = textView.returnKeyType
```

Gets or sets the label of the return key. See [CoreTypes.ReturnKeyType](https://docs.nativescript.org/api-reference/modules/coretypes.returnkeytype) for available values.

---

### maxLines

```xml
<TextView maxLines="2" />
```

```ts
textView.maxLines = 2
```

Limits input to a certain number of lines.

---

### autocorrect

```xml
<TextView returnKeyType="autocorrect" />
```

```ts
textView.autocorrect = true
//or
autocorrect: boolean = textView.autocorrect
```

Enables or disables autocorrect.

---

### ...Inherited

For additional inherited properties not shown, refer to the [API Reference](https://docs.nativescript.org/api-reference/classes/textview).

---

## Events

| Name          | Description                                                                                                                                     |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `textChange`  | Emitted when the text changes. Event data type: [PropertyChangeData](https://docs.nativescript.org/api-reference/interfaces/propertychangedata) |
| `returnPress` | Emitted when the return key is pressed. Event data type: [EventData](https://docs.nativescript.org/api-reference/interfaces/eventdata)          |
| `focus`       | Emitted when the field is in focus. Event data type: [EventData](https://docs.nativescript.org/api-reference/interfaces/eventdata)              |
| `blur`        | Emitted when the field loses focus. Event data type: [EventData](https://docs.nativescript.org/api-reference/interfaces/eventdata)              |

## Native component

| Android                                                                                           | iOS                                                                        |
| ------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| [`android.widget.EditText`](https://developer.android.com/reference/android/widget/EditText.html) | [`UITextView`](https://developer.apple.com/documentation/uikit/uitextview) |
