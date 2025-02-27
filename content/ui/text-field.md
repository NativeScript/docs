---
title: TextField
description: UI component for single-line text entry.
contributors:
  - rigor789
  - Ombuweb
---

`<TextField>` is a UI component for single-line text entry.

For multi-line text input, see [TextView](/ui/text-view).

<DeviceFrame type="ios">
<img src="../assets/images/screenshots/ios/TextField.png"/>
</DeviceFrame>
<DeviceFrame type="android">
<img src="../assets/images/screenshots/android/TextField.png"/>
</DeviceFrame>

<Tabs>
<Tab flavor="typescript">

<<< @/../examples/typescript/src/ui/TextField/template.xml#example

</Tab>
<Tab flavor="angular">

<<< @/../examples/angular/src/ui/TextField/component.html#example

</Tab>
<Tab flavor="react">

<<< @/../examples/react/src/components/ui/textfield.tsx#example

</Tab>
<Tab flavor="solid">

<<< @/../examples/solid/src/ui/textfield.tsx#example

</Tab>
<Tab flavor="svelte">

<<< @/../examples/svelte/app/components/ui/TextField.svelte#example

</Tab>
<Tab flavor="vue">

<<< @/../examples/vue/src/ui/TextField/component.vue#example

</Tab>
</Tabs>

## Examples

### Formatting text inside a TextField

If you need to style parts of the text, you can use a combination of a `FormattedString` and `Span` elements.

```xml
<TextField>
  <FormattedString>
    <Span text="This text has a " />
    <Span text="red " style="color: red" />
    <Span text="piece of text. " />
    <Span text="Also, this bit is italic, " fontStyle="italic" />
    <Span text="and this bit is bold." fontWeight="bold" />
  </FormattedString>
</TextField>
```

## Props

### text

```ts
text: string
```

Gets or sets the `text` of the TextField.

### hint

```ts
hint: string
```

<!-- textlint-disable terminology -->

Gets or sets the placeholder text for the TextField.

<!-- textlint-enable -->

### editable

```ts
editable: boolean
```

When set to `false` the TextField is read-only.

Defaults to `true`.

### keyboardType

```ts
keyboardType: CoreTypes.KeyboardType | number // "datetime" | "email" | "integer" | "number" | "phone" | "url"
```

Gets or sets the keyboard type shown when editing this TextField.

On iOS, any valid `UIKeyboardType` number works, for example:

```ts
keyboardType = 8 // UIKeyboardType.DecimalPad
```

See [CoreTypes.KeyboardType](/api/namespace/CoreTypes-KeyboardType), [UIKeyboardType](https://developer.apple.com/documentation/uikit/uikeyboardtype?language=objc).

### returnKeyType

```ts
returnKeyType: CoreTypes.ReturnKeyType // "done" | "go" | "next" | "search" | "send"
```

Gets or sets the label of the return key.

See [CoreTypes.ReturnKeyType](/api/namespace/CoreTypes-ReturnKeyType).

### isEnabled

Allows disabling the TextField. A disabled TextField does not react to user gestures or input.

Default value is `true`.

### maxLength

```ts
maxLength: number
```

Limits input to the specified number of characters.

### secure

```ts
secure: boolean
```

Hides the entered text when `true`. Useful for password input fields.

Defaults to `false`.

### secureWithoutAutofill

```ts
secureWithoutAutofill: boolean
```

Prevents iOS 12+ auto suggested strong password handling. **iOS only**

Defaults to `false`.

### autocapitalizationType

```ts
autocapitalizationType: CoreTypes.AutocapitalizationType // "allCharacters" | "none" | "sentences" | "words"
```

Gets or sets the autocapitalization type.

See [CoreTypes.AutocapitalizationType](/api/namespace/CoreTypes-AutocapitalizationType)

### ...Inherited

For additional inherited properties, refer to the [API Reference](/api/class/TextField).

## Methods

### focus()

```ts
focus(): boolean
```

Focuses the TextField and returns `true` if the focus was succeessful.

### dismissSoftInput()

```ts
dismissSoftInput(): void
```

Hides the on-screen keyboard.

## Events

### textChange

```ts
on('textChange', (args: PropertyChangeData) => {
  const textField = args.object as TextField
  console.log('TextField text changed:', args.value)
})
```

Emitted when the input text changes.

Event data type: [PropertyChangeData](https://docs.nativescript.org/api/interface/PropertyChangeData)

### returnPress

```ts
on('returnPress', (args: EventData) => {
  const textField = args.object as TextField
  console.log('TextField return key pressed.')
})
```

Emitted when the return key is pressed.

### focus

```ts
on('focus', (args: EventData) => {
  const textField = args.object as TextField
  console.log('TextField has been focused')
})
```

Emitted when the TextField gains focus.

### blur

```ts
on('blur', (args: EventData) => {
  const textField = args.object as TextField
  console.log('TextField has been blured')
})
```

Emitted when the TextField loses focus.

## Native component

- Android: [`android.widget.EditText`](https://developer.android.com/reference/android/widget/EditText.html)
- iOS: [`UITextField`](https://developer.apple.com/documentation/uikit/uitextfield)
