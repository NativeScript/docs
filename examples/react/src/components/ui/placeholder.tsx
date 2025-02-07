import { Dialogs, Frame, Utils } from '@nativescript/core'
import { RouteProp } from '@react-navigation/core'
import * as React from 'react'
import { StyleSheet } from 'react-nativescript'
import { FrameNavigationProp } from 'react-nativescript-navigation'

import { MainStackParamList } from '../../NavigationParamList'

type HomeProps = {
  route: RouteProp<MainStackParamList, 'Placeholder'>
  navigation: FrameNavigationProp<MainStackParamList, 'Placeholder'>
}

export function Placeholder({ navigation }: HomeProps) {
  const creatingView = (args) => {
    let nativeView
    if (global.isIOS) {
      // Example with UITextView on iOS
      nativeView = UITextView.new()
      nativeView.text = 'Native View (iOS)'
    } else if (global.isAndroid) {
      // Example with TextView on Android
      nativeView = new android.widget.TextView(
        Utils.android.getApplicationContext(),
      )
      nativeView.setText('Native View (Android)')
    }

    // assign it to args.view so NativeScript can place it into the UI
    args.view = nativeView
  }
  return (
    <>
      <frame>
        <page style={styles.container}>
          <actionBar
            title="Placeholder"
            onTap={() => Frame.goBack()}
          ></actionBar>

          <stackLayout
            verticalAlignment={'middle'}
            horizontalAlignment={'center'}
          >
            {/* #region example */}
            <placeholder onCreatingView={creatingView} />
            {/* #endregion example */}
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
  },
})
