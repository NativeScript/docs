<script lang="ts" setup>
  function showAlert() {
    // #region example-alert
    alert({
      title: 'Alert!',
      message: 'Please try again later.',
      okButtonText: 'OK',
      cancelable: true,
    })
    // #endregion example-alert
    console.log('Show Alert');
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
    }).then((result) => {
      console.log(result)
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
    }).then((result) => {
      console.log(result)
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
    }).then((result) => {
      console.log(result)
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
    }).then((result) => {
      console.log(result)
    })
    // #endregion example-login
  }
</script>

<template>
  <Page>
    <StackLayout>
      <Button @tap="showAlert" textAlignment="left" padding="8">Alert</Button>
      <Button text="Action" @tap="showAction" textAlignment="left" padding="8"></Button>
      <Button text="Confirm" @tap="showConfirm" textAlignment="left" padding="8"></Button>
      <Button text="Prompt" @tap="showPrompt" textAlignment="left" padding="8"></Button>
      <Button text="Login" @tap="showLogin" textAlignment="left" padding="8"></Button>
    </StackLayout>

  </Page>
</template>
