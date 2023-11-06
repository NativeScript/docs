import { Dialogs } from '@nativescript/core'

export function navigatingTo(args) {}

export function showAlert() {
  // #region example-alert
  Dialogs.alert({
    title: 'Alert!',
    message: 'Please try again later.',
    okButtonText: 'OK',
    cancelable: true,
  })
  // #endregion example-alert
}

export function showAction() {
  // #region example-action
  Dialogs.action({
    title: 'Action!',
    message: 'Choose your language:',
    cancelButtonText: 'Cancel',
    actions: ['TypeScript', 'JavaScript', 'Neither'],
    cancelable: true,
    destructiveActionsIndexes: [2],
  }).then((result) => {
    console.log(result)
  })
  // #endregion example-action
}

export function showConfirm() {
  // #region example-confirm
  Dialogs.confirm({
    title: 'Confirm!',
    message: 'Are you sure you want to do this?',
    okButtonText: 'Yes',
    cancelButtonText: 'No',
    neutralButtonText: 'Cancel',
  }).then((result) => {
    console.log(result)
  })
  // #endregion example-confirm
}

export function showPrompt() {
  // #region example-prompt
  Dialogs.prompt({
    title: 'Prompt!',
    message: 'Enter the name of this framework:',
    defaultText: 'NativeScript',
    okButtonText: 'OK',
    neutralButtonText: 'Cancel',
    // cancelable: true,
    // cancelButtonText: 'Cancel',
    // capitalizationType: 'none',
    // inputType: 'email',
  }).then((result) => {
    console.log(result)
  })
  // #endregion example-prompt
}

export function showLogin() {
  // #region example-login
  Dialogs.login({
    title: 'Login!',
    message: 'Enter your credentials',
    okButtonText: 'Login',
    cancelButtonText: 'Cancel',
    userName: 'NativeScript',
    password: 'hunter2',
    // neutralButtonText: 'Neutral',
    // cancelable: true,
    // passwordHint: 'Your password',
    // userNameHint: 'Your username',
  }).then((result) => {
    console.log(result)
  })
  // #endregion example-login
}
