---
title: Dialogs
---

<!-- TODO: Add SB+Preview -->

NativeScript lets you create dialogs in a similar manner to the web browser. Available dialogs are: `action`,`alert`, `confirm`, `prompt`, `login`.

All the dialogs take a `DialogOption` object with the properties:

- `title`: Sets the dialog title.
- `message` : Sets the dialog message.
- `cancelable`(`android only`): Sets if the dialog can be canceled by taping outside of the dialog.
- `theme`(`android only`): Sets the theme of the Dialog. Usable themes can be found: https://developer.android.com/reference/android/R.style

## Creating an alert dialog

| <img src="https://raw.githubusercontent.com/nativescript-vue/nativescript-vue-ui-tests/master/screenshots/android23/AlertDialog.png" alt="Android AlertDialog Example" height="300"/> | <img alt="iOS AlertDialog Example" src="https://raw.githubusercontent.com/nativescript-vue/nativescript-vue-ui-tests/master/screenshots/ios-simulator103iPhone6/AlertDialog.png" height="300" /> |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

To create an alert, use the `Dialogs.alert()` method:

`Dialogs.alert` has additonal `okButtonText` property.

At minimum, you should pass it a message:

```ts
Dialogs.alert('Some messge').then(() => {
  console.log('User notified!')
})
```

Add a title, custom OK text and more as follows:

```ts
const alertOptions: AlertOptions = {
        title: "Race selection",
        message: "Race chosen: Unicorn",
        okButtonText: "OK",
        cancelable: false

    Dialogs.alert(alertOptions).then(() => {
        console.log("User notified!");
    });
```

:::

## Creating an action dialog

| <img src="https://raw.githubusercontent.com/nativescript-vue/nativescript-vue-ui-tests/master/screenshots/android23/ActionDialog.png" alt="Android ActionDialog Example" height="200" width="300"/> | <img alt="iOS ActionDialog Example" src="https://raw.githubusercontent.com/nativescript-vue/nativescript-vue-ui-tests/master/screenshots/ios-simulator103iPhone6/ActionDialog.png" height="00" width="300"/> |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

To let the user choose an input from a list, use `Dialogs.action()`:
For the `action` dialog, there are 3 more properties available:

- `cancelButtonText`: Sets custom text for the cancel button.
- `actions`: Sets the list of available inputs.
- `destructiveActionsIndexes` (`iOS only`): Sets an array of the indexes of destructive actions.

```ts
onst actionOptions = {
    title: "Race selection",
    message: "Choose your race",
    cancelButtonText: "Cancel",
    actions: ["Human", "Elf", "Dwarf", "Orc", "Unicorn"],
    cancelable: true
};

Dialogs.action(actionOptions).then((result) => {
    console.log(result);
});
```

## Creating a confirm dialog

| <img src="https://raw.githubusercontent.com/nativescript-vue/nativescript-vue-ui-tests/master/screenshots/android23/ConfirmDialog.png" alt="Android ConfirmDialog Example" height="300" width="400"/> | <img alt="iOS ConfirmDialog Example" src="https://raw.githubusercontent.com/nativescript-vue/nativescript-vue-ui-tests/master/screenshots/ios-simulator103iPhone6/ConfirmDialog.png" height="300" width="400"/> |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

For a user's action that requires confirmation, use the `Dialogs.confirm`:

Additional properties for the parameter object are:

- `cancelButtonText`
- `okButtonText`
- `neutralButtonText`

```ts
const confirmOptions = {
  title: 'Race selection',
  message: 'Are you sure you want to be a Unicorn?',
  okButtonText: 'Yes',
  cancelButtonText: 'No',
  neutralButtonText: 'Cancel',
}
Dialogs.confirm(confirmOptions).then((result) => {
  console.log(result)
})
```

## Creating a prompt dialog

| <img class="w-full sm:w-1/2"  src="https://raw.githubusercontent.com/nativescript-vue/nativescript-vue-ui-tests/master/screenshots/android23/PromptDialog.png" alt="Android PromptDialog Example" height="300" width="400"/> | <img class="w-full sm:w-1/2"  alt="iOS PromptDialog Example" src="https://raw.githubusercontent.com/nativescript-vue/nativescript-vue-ui-tests/master/screenshots/ios-simulator103iPhone6/PromptDialog.png" height="300" width="400"/> |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

To request for a user's input, use `Dialogs.prompt`:

Other properties available for the `Dialogs.prompt`:

- `defaultText`: Sets the default text to display in the input box.
- `inputType`
  - Sets the prompt input type (`text`, `password`, or `email`).
  - Available options: `email`, `decimal`, `phone`, `number`, `text`, `password`, or `email`
- `capitalizationType`
  - Sets the prompt capitalization type.
  - Avalable options: `none`, `allCharacters`, `sentences`, or `words`.

```ts
import { Dialogs, CoreTypes, inputType } from '@nativescript/core'

export function showPromptDialog() {
  const promptOptions = {
    title: 'Hey There',
    defaultText: ' Enter your mood ',
    message: "How you doin'",
    okButtonText: 'OK',
    cancelButtonText: 'Cancel',
    neutralButtonText: 'Neutral',
    cancelable: true,
    inputType: inputType.text,
    capitalizationType: Enums.AutocapitalizationType.sentences,
  }

  Dialogs.prompt(promptOptions).then((result) => {
    console.log('Hello, ' + result.text)
  })
}
```

## Creating a login dialog

| <img src="https://raw.githubusercontent.com/nativescript-vue/nativescript-vue-ui-tests/master/screenshots/android23/LoginDialog.png" class="w-full sm:w-1/2" alt="Android LoginDialog Example" height="300" width="400"/> | <img alt="iOS LoginDialog Example" class="w-full sm:w-1/2"  src="https://raw.githubusercontent.com/nativescript-vue/nativescript-vue-ui-tests/master/screenshots/ios-simulator103iPhone6/LoginDialog.png" height="300" width="400"/> |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

To have an isolated login form, use `Dialogs.login`:

:::details Additional Resources

## API References

| Name                                                                                      | Type        |
| ----------------------------------------------------------------------------------------- | ----------- |
| [@nativescript/core/dialogs](https://docs.nativescript.org/api-reference/modules#dialogs) | `Module`    |
| [action](https://docs.nativescript.org/api-reference/interfaces/alertoptions)             | `function`  |
| [ActionOptions](https://docs.nativescript.org/api-reference/interfaces/actionoptions)     | `interface` |
| [alert](https://docs.nativescript.org/api-reference/modules#dialogs)                      | `function`  |
| [AlertOptions](https://docs.nativescript.org/api-reference/interfaces/alertoptions)       | `interface` |
| [confirm](https://docs.nativescript.org/api-reference/modules#dialogs)                    | `function`  |
| [ConfirmOptions](https://docs.nativescript.org/api-reference/interfaces/confirmoptions)   | `interface` |
| [login](https://docs.nativescript.org/api-reference/modules#dialogs)                      | `function`  |
| [LoginOptions](https://docs.nativescript.org/api-reference/interfaces/loginoptions)       | `interface` |
| [LoginResults](https://docs.nativescript.org/api-reference/interfaces/loginresult)        | `interface` |
| [prompt](https://docs.nativescript.org/api-reference/modules#dialogs)                     | `function`  |
| [PromptOptions](https://docs.nativescript.org/api-reference/interfaces/promptoptions)     | `interface` |
| [PromptResults](https://docs.nativescript.org/api-reference/interfaces/promptresult)      | `interface` |

## Native Component

| Android                                                                                                    | iOS                                                                                    |
| :--------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------- |
| [android.app.AlertDialog.Builder](https://developer.android.com/reference/android/app/AlertDialog.Builder) | [UIAlertController](https://developer.apple.com/documentation/uikit/uialertcontroller) |

:::
