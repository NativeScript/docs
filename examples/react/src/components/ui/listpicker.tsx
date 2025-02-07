import { Dialogs, Frame } from '@nativescript/core'
import { RouteProp } from '@react-navigation/core'
import * as React from 'react'
import { StyleSheet } from 'react-nativescript'
import { FrameNavigationProp } from 'react-nativescript-navigation'

import { MainStackParamList } from '../../NavigationParamList'

type HomeProps = {
  route: RouteProp<MainStackParamList, 'ListPicker'>
  navigation: FrameNavigationProp<MainStackParamList, 'ListPicker'>
}

export function ListPicker({ navigation }: HomeProps) {
  const items = ["First", "Second", "Third"];
  return (
    <>
      <frame>
        <page style={styles.container}>
          <actionBar title="ListPicker" onTap={() => Frame.goBack()}></actionBar>
          <stackLayout
            verticalAlignment={'middle'}
            horizontalAlignment={'center'}
          >
            {/*#region example*/}
            <listPicker items={items} />
            {/*#endregion example*/}
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
