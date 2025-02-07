import { Dialogs, Frame } from '@nativescript/core'
import { RouteProp } from '@react-navigation/core'
import * as React from 'react'
import { StyleSheet } from 'react-nativescript'
import { FrameNavigationProp } from 'react-nativescript-navigation'

import { MainStackParamList } from '../../NavigationParamList'

type HomeProps = {
  route: RouteProp<MainStackParamList, 'ScrollView'>
  navigation: FrameNavigationProp<MainStackParamList, 'ScrollView'>
}

export function ScrollView({ navigation }: HomeProps) {
  return (
    <>
      <frame>
        <page style={styles.container}>
          <actionBar title="ScrollView" onTap={() => Frame.goBack()}></actionBar>

          <stackLayout
            verticalAlignment={'middle'}
            horizontalAlignment={'center'}
          >
            {/*#region example*/}

            <gridLayout rows="*, 50, 300, *">
              <scrollView orientation="horizontal" row="1">
                <stackLayout orientation="horizontal" padding="12">
                  <label text="h1" width="50"></label>
                  <label text="h2" width="50"></label>
                  <label text="h3" width="50"></label>
                  <label text="h4" width="50"></label>
                  <label text="h5" width="50"></label>
                  <label text="h6" width="50"></label>
                  <label text="h7" width="50"></label>
                  <label text="h8" width="50"></label>
                  <label text="h9" width="50"></label>
                </stackLayout>
              </scrollView>

              <contentView row="2">
                {/*//  #region example */}
                <scrollView>
                  <stackLayout padding="12">
                    <label text="v1" height="50"></label>
                    <label text="v2" height="50"></label>
                    <label text="v3" height="50"></label>
                    <label text="v4" height="50"></label>
                    <label text="v5" height="50"></label>
                    <label text="v6" height="50"></label>
                    <label text="v7" height="50"></label>
                    <label text="v8" height="50"></label>
                    <label text="v9" height="50"></label>
                  </stackLayout>
                </scrollView>
                {/*#endregion example*/}
              </contentView>
            </gridLayout>
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
