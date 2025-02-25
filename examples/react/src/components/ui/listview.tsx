import { Dialogs, Frame, ItemEventData } from '@nativescript/core'
import { RouteProp } from '@react-navigation/core'
import * as React from 'react'
import { StyleSheet } from 'react-nativescript'
import { FrameNavigationProp } from 'react-nativescript-navigation'
import { ListView } from 'react-nativescript'
import { MainStackParamList } from '../../NavigationParamList'

type HomeProps = {
  route: RouteProp<MainStackParamList, 'ListView'>
  navigation: FrameNavigationProp<MainStackParamList, 'ListView'>
}

{/* #region example */}
export function ListViewCmp({ navigation }: HomeProps) {

  const items: Array<{ title: string }> = []
  for (let i = 0; i < 100; i++) {
    items.push({
      title: `Item ${i + 1}`,
    })
  }
  const cellFactory = (item: { title }) => {
    return <label text={item.title} />
  }
  const testItemTap = (args: ItemEventData) => {
    alert(args.index + ' - ' + items[args.index].title)
  }

  return (
    <frame>
      <page style={styles.container}>
        <actionBar title="ListView" onTap={() => Frame.goBack()}></actionBar>

        <gridLayout>
          <ListView
            items={items}
            cellFactory={cellFactory}
            onItemTap={testItemTap}
          ></ListView>
        </gridLayout>
      </page>
    </frame>
  )
}
{/* #endregion example */}

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
