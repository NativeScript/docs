---
title: TextField
---

`<TextField>` is an input component that creates an editable single-line box.

`<TextField>` extends [`TextBase`](https://docs.nativescript.org/api-reference/classes/textbase) and [`EditableTextBase`](https://docs.nativescript.org/api-reference/classes/editabletextbase) which provide additional properties and events.

---
<div>
<div class="flex flex-wrap p-4 sm:p-8">
<div  class="w-full sm:w-1/2">
 <img  src="https://raw.githubusercontent.com/nativescript-vue/nativescript-vue-ui-tests/master/screenshots/android23/TextField.png" alt="Android TextField Example"/> 
</div>

<div  class="w-full sm:w-1/2 sm:pl-8">
<img alt="iOS TextField Example" src="https://raw.githubusercontent.com/nativescript-vue/nativescript-vue-ui-tests/master/screenshots/ios-simulator103iPhone6/TextField.png" />
</div>
</div>
</div>

### Creating a simple TextField
Below is a simple TextField component listening to a user input change event.

<!-- /// flavor plain -->

```html
 <TextField hint="Your first name"
    text="{{ firstName }}"
    textChange="{{ onFirstNameChange }}"/>
```
```ts
  onFirstNameChange(args: PropertyChangeData) {
    console.log(args.value)
  }
```
<!-- ///

/// flavor angular

```html
<TextField
  hint="Enter Date"
  secure="false"
  keyboardType="datetime"
  returnKeyType="done"
  autocorrect="false"
  maxLength="10"
  [text]="name"
  (returnPress)="onReturnPress($event)"
  (focus)="onFocus($event)"
  (blur)="onBlur($event)"
>
</TextField>
```

```ts
import { Component } from '@angular/core'
import { TextField, Utils } from '@nativescript/core'

@Component({
  moduleId: module.id,
  templateUrl: './usage.component.html'
})
export class UsageComponent {
  name = ''

  onReturnPress(args) {
    // returnPress event will be triggered when user submits a value
    const textField = args.object as TextField

    // Gets or sets the placeholder text.
    console.log(textField.hint)
    // Gets or sets the input text.
    console.log(textField.text)
    // Gets or sets the secure option (e.g. for passwords).
    console.log(textField.secure)
    // Gets or sets the secure without autofill for iOS 12+ (e.g. for passwords).
    console.log(textField.secureWithoutAutofill)
    // Gets or sets the soft keyboard type. Options: "datetime" | "phone" | "number" | "url" | "email"
    console.log(textField.keyboardType)
    // Gets or sets the soft keyboard return key flavor. Options: "done" | "next" | "go" | "search" | "send"
    console.log(textField.returnKeyType)
    // Gets or sets the autocapitalization type. Options: "none" | "words" | "sentences" | "allcharacters"
    console.log(textField.autocapitalizationType)
    // Gets or sets a value indicating when the text property will be updated.
    console.log(textField.updateTextTrigger)
    // Gets or sets whether the instance is editable.
    console.log(textField.editable)
    // Enables or disables autocorrection.
    console.log(textField.autocorrect)
    // Limits input to a certain number of characters.
    console.log(textField.maxLength)

    Utils.setTimeout(() => {
      textField.dismissSoftInput() // Hides the soft input method, usually a soft keyboard.
    }, 100)
  }

  onFocus(args) {
    // focus event will be triggered when the users enters the TextField
    const textField = args.object as TextField
  }

  onBlur(args) {
    // blur event will be triggered when the user leaves the TextField
    const textField = args.object as TextField
  }
}
```

///

/// flavor vue

```html
<TextField :text="textFieldValue" hint="Enter text..." />
```

`<TextField>` provides two-way data binding using `v-model`.

```html
<TextField v-model="textFieldValue" />
```

///

/// flavor svelte

```tsx
<textField text="{textFieldValue}" hint="Enter text..." />
```

`<textField>` provides two-way data binding using `bind`.

```html
<textField bind:text="{textFieldValue}" />
```

///

/// flavor react

```tsx
<textField text={textFieldValue} hint="Enter text..." />
```

/// -->

### Styling

The following example shows a TextField styled with `@nativescript/tailwind`.

```xml
 <TextField hint="Your first name"
    text="{{ firstName }}"
    textChange="{{ onFirstNameChange }}"
    class="border border-gray-500 rounded-lg pl-2 text-gray-700"/>
```
## Props
### text
```xml
<TextView text="{{ viewDate }}" />
```
```ts
text: string = textField.text
```
Gets or sets the `text` value of the component. 

---
### hint
```xml
<TextView hint="hint" />
```
```ts
hint: string = textField.hint
```
Gets or sets the placeholder text for the component.

---
### editable
```xml
<TextView editable="false" />
```
```ts
editable: boolean = textField.editable
//or
textField.editable = false
```
Toggles the ability to take user input.

---
### keyboardType
```xml
<TextView keyboardType="number" />
```
```ts
textField.keyboardType = CoreTypes.KeyboardType.number
//or
keyboardType: CoreTypes.KeyboardType = textField.keyboardType
```
Shows the appropriate keyboard keys for the data the TextField will capture. See [CoreTypes.KeyboardType](https://docs.nativescript.org/api-reference/modules/coretypes.keyboardtype) for available values.

---
### returnKeyType
```xml
<TextView returnKeyType="next" />
```
```ts
textField.returnKeyType = CoreTypes.ReturnKeyType.next
//or
returnKeyType: CoreTypes.ReturnKeyType = textField.returnKeyType
```
Gets or sets the label of the return key. See [CoreTypes.ReturnKeyType](https://docs.nativescript.org/api-reference/modules/coretypes.returnkeytype) for available values.

---
### isEnabled
Allows or disallow the field to be editted. Default value is `true`. 

---
### maxLength
```xml
<TextView maxLength="10" />
```
```ts
textView.maxLength = 10
```
Limits input to the specified number of characters.   

---
### secure
```xml
<TextView secure="true" />
```
Hides the entered text when `true`. Use this property for password input fields. Default value: `false`.   

---
### secureWithoutAutofill

(`iOS-only`) Prevents iOS 12+ auto suggested strong password handling.

---
### autocapitalizationType
```xml
<TextField text="Hello" autocapitalizationType="words" />  
```
Gets or sets the autocapitalization type. See [AutocapitalizationType](https://docs.nativescript.org/api-reference/modules/coretypes.autocapitalizationtype) interface for valid options. 

---
### letterSpacing
```xml
<TextField text="Hello" letterSpacing="4" />  
```
Gets or sets letter space style property.

---
<!-- Is the lineHeight necessary for a TextField -->
<!-- ### lineHeight
```xml
<TextField text="Hello" lineHeight="4" />  
```
Gets or sets line height style property.

--- -->
### textAlignment
```xml
<TextView textAlignment="center" />
```
Gets or sets the text alignment. See [TextAlignment](https://docs.nativescript.org/api-reference/modules/coretypes.textalignment) for valid options.
                                                                         
---                             
### textDecoration
 Gets or sets the text decoration. See [TextDecoration](https://docs.nativescript.org/api-reference/modules/coretypes.textdecoration) for valid options.

---
### textTransform
```xml
<TextField hint="" text="Hello" textTransform="uppercase">
```
Gets or sets the text transform.  See [TextTransform](https://docs.nativescript.org/api-reference/modules/coretypes.texttransform) for valid options.
 
---
### whiteSpace
Gets or sets white space style property.  See [WhiteSpace](https://docs.nativescript.org/api-reference/modules/coretypes.whitespace) for valid options.                                                                       

---                     
### ...Inherited
For additional inherited properties, refer to the [API Reference](https://docs.nativescript.org/api-reference/classes/textfield).

---

## Methods

### focus()
```ts
isFieldFocused: boolean = textField.focus()
```
Focuses the TextField and returns `true` if the focus is succeessful.

---
### dismissSoftInput()
```ts
textField.dismissSoftInput()
```
Hides the keyboard on the screen.

---
## Events

### textChange
Emitted when the input value text changes. Event data type: [PropertyChangeData](https://docs.nativescript.org/api-reference/interfaces/propertychangedata)

---
### returnPress
Emitted when the return key is pressed. Event data type: [EventData](https://docs.nativescript.org/api-reference/interfaces/eventdata)

---
### focus
Emitted when the field is in focus. Event data type: [EventData](https://docs.nativescript.org/api-reference/interfaces/eventdata)

---
### blur
Emitted when the field loses focus. Event data type: [EventData](https://docs.nativescript.org/api-reference/interfaces/eventdata)

---

### Native component

| Android                                                                                           | iOS                                                                          |
| ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| [`android.widget.EditText`](https://developer.android.com/reference/android/widget/EditText.html) | [`UITextField`](https://developer.apple.com/documentation/uikit/uitextfield) |
