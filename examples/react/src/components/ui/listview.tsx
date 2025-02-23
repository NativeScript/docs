import { Dialogs, Frame, ItemEventData } from '@nativescript/core'
import { RouteProp } from '@react-navigation/core'
import * as React from 'react'
import { StyleSheet } from 'react-nativescript'
import { FrameNavigationProp } from 'react-nativescript-navigation'
import { ListView as LV } from 'react-nativescript'
import { MainStackParamList } from '../../NavigationParamList'

type HomeProps = {
  route: RouteProp<MainStackParamList, 'ListView'>
  navigation: FrameNavigationProp<MainStackParamList, 'ListView'>
}

export function ListView({ navigation }: HomeProps) {
  // #region example

  const items = []
  for (let index = 0; index < 100; index++) {
    items.push({
      title: `Item ${index + 1}`,
    })
  }
  const cellFactory = (item: { title }) => {
    return <label text={item.title} />
  }
  const testItemTap = (args: ItemEventData) => {
    alert(args.index + ' - ' + items[args.index].title)
  }
  // #endregion example

  return (
    <>
      <frame>
        <page style={styles.container}>
          <actionBar title="ListView" onTap={() => Frame.goBack()}></actionBar>

          <stackLayout
            verticalAlignment={'middle'}
            horizontalAlignment={'center'}
          >
            {/* #region example */}
            <LV
              items={items}
              cellFactory={cellFactory}
              onItemTap={testItemTap}
            ></LV>
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
