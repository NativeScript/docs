import { Dialogs, Frame } from '@nativescript/core'
import { RouteProp } from '@react-navigation/core'
import * as React from 'react'
import { StyleSheet } from 'react-nativescript'
import { FrameNavigationProp } from 'react-nativescript-navigation'

import { MainStackParamList } from '../../NavigationParamList'

type HomeProps = {
  route: RouteProp<MainStackParamList, 'Label'>
  navigation: FrameNavigationProp<MainStackParamList, 'Label'>
}

export function Label({ navigation }: HomeProps) {
  return (
    <>
      <frame>
        <page style={styles.container}>
          <actionBar title="Label" onTap={() => Frame.goBack()}></actionBar>

          <stackLayout
            verticalAlignment={'middle'}
            horizontalAlignment={'center'}
          >
            {/* #region example */}
            <label>Text Here</label>
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
