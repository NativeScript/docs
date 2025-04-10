import { Dialogs, Frame } from '@nativescript/core'
import { RouteProp } from '@react-navigation/core'
import * as React from 'react'
import { StyleSheet } from 'react-nativescript'
import { FrameNavigationProp } from 'react-nativescript-navigation'

import { MainStackParamList } from '../../NavigationParamList'

type HomeProps = {
  route: RouteProp<MainStackParamList, 'Segmentedbar'>
  navigation: FrameNavigationProp<MainStackParamList, 'Segmentedbar'>
}

export function SegmentedBar({ navigation }: HomeProps) {
  return (
    <>
      <frame>
        <page style={styles.container}>
          <actionBar
            title="SegmentedBar"
            onTap={() => Frame.goBack()}
          ></actionBar>

          <stackLayout
            verticalAlignment={'middle'}
            horizontalAlignment={'center'}
          >
            {/* #region example */}
            <segmentedBar>
              <segmentedBarItem title="First" />
              <segmentedBarItem title="Second" />
              <segmentedBarItem title="Third" />
            </segmentedBar>
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
