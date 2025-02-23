<script lang="ts">
  import { action, login, confirm, prompt } from '@nativescript/core'

  function showAlert() {
    // #region example-alert
    alert({
      title: 'Alert!',
      message: 'Please try again later.',
      okButtonText: 'OK',
      cancelable: true,
    })
    // #endregion example-alert
  }

  function showAction() {
    // #region example-action
    action({
      title: 'Action!',
      message: 'Choose your language:',
      cancelButtonText: 'Cancel',
      actions: ['TypeScript', 'JavaScript', 'Neither'],
      cancelable: true,
      destructiveActionsIndexes: [2],
    })
    // #endregion example-action
  }

  function showConfirm() {
    // #region example-confirm
    confirm({
      title: 'Confirm!',
      message: 'Are you sure you want to do this?',
      okButtonText: 'Yes',
      cancelButtonText: 'No',
      neutralButtonText: 'Cancel',
    })
    // #endregion example-confirm
  }

  function showPrompt() {
    // #region example-prompt
    prompt({
      title: 'Prompt!',
      message: 'Enter the name of this framework:',
      defaultText: 'NativeScript',
      okButtonText: 'OK',
      neutralButtonText: 'Cancel',
      // cancelable: true,
      // cancelButtonText: 'Cancel',
      // capitalizationType: 'none',
      // inputType: 'email',
    })
    // #endregion example-prompt
  }

  function showLogin() {
    // #region example-login
    login({
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
    })
  }
  // #endregion example-login
</script>

<page>
  <actionBar>
    <label>Dialogs</label>
  </actionBar>

  <gridLayout>
    <contentView horizontalAlignment="center" verticalAlignment="center">
      <stackLayout>
        <button on:tap={showAlert} padding="8">Alert</button>
        <button on:tap={showAction} padding="8">Action</button>
        <button on:tap={showConfirm} padding="8">Confirm</button>
        <button on:tap={showPrompt} padding="8">Prompt</button>
        <button on:tap={showLogin} padding="8">Login</button>
      </stackLayout>
    </contentView>
  </gridLayout>
</page>

<style>
</style>
