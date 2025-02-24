import { Dialogs } from '@nativescript/core'

import { Component, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular';

@Component({
  selector: 'ns-dialogs',
  templateUrl: './component.html',
  imports: [NativeScriptCommonModule],
  schemas: [NO_ERRORS_SCHEMA]
})
export class DialogsComponent {
  
  // #region example-alert
  showAlert() {
    Dialogs.alert({
      title: 'Alert!',
      message: 'Please try again later.',
      okButtonText: 'OK',
      cancelable: true,
    })
    console.log('Show Alert');
  }
  // #endregion example-alert

  // #region example-action
  showAction() {
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
  }
  // #endregion example-action
  
  // #region example-confirm
  showConfirm() {
    Dialogs.confirm({
      title: 'Confirm!',
      message: 'Are you sure you want to do this?',
      okButtonText: 'Yes',
      cancelButtonText: 'No',
      neutralButtonText: 'Cancel',
    }).then((result) => {
      console.log(result)
    })
  }
  // #endregion example-confirm

  // #region example-prompt
  showPrompt() {
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
  }
  // #endregion example-prompt

  // #region example-login
  showLogin() {
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
  }
  // #endregion example-login
}
