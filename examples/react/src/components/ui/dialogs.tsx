import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { action, Frame, confirm, login, prompt } from '@nativescript/core'

import { MainStackParamList } from '../../NavigationParamList'

type HomeProps = {
    route: RouteProp<MainStackParamList, "Dialogs">,
    navigation: FrameNavigationProp<MainStackParamList, "Dialogs">,
};

export function Dialogs({ navigation }: HomeProps) {
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
    });
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
    });
  }
  // #endregion example-login
  return (
    <>
      <frame>
        <page style={styles.container}>
          <actionBar title="Dialogs" onTap={() => Frame.goBack()}></actionBar>

          <stackLayout
            verticalAlignment={'middle'}
            horizontalAlignment={'center'}
          >
            {/*#region example*/}
            <button onTap={showAlert} padding="8" style={styles.button}>
              Alert
            </button>
            <button onTap={showAction} padding="8" style={styles.button}>
              Action
            </button>
            <button onTap={showConfirm} padding="8" style={styles.button}>
              Confirm
            </button>
            <button onTap={showPrompt} padding="8" style={styles.button}>
              Prompt
            </button>
            <button onTap={showLogin} padding="8" style={styles.button}>
              Login
            </button>
            {/*endregion example*/}
          </stackLayout>
        </page>
      </frame>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  text: {
    textAlignment: 'center',
    fontSize: 24,
    color: 'black',
  },
  button: {
    fontSize: 24,
    color: '#2e6ddf',
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
  },
})
