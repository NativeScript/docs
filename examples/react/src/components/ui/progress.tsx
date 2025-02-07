import { Dialogs, Frame } from '@nativescript/core'
import { RouteProp } from '@react-navigation/core'
import * as React from 'react'
import { StyleSheet } from 'react-nativescript'
import { FrameNavigationProp } from 'react-nativescript-navigation'

import { MainStackParamList } from '../../NavigationParamList'
import { set } from '@nativescript/core/ui/core/bindable/bindable-resources'

type HomeProps = {
  route: RouteProp<MainStackParamList, 'Progress'>
  navigation: FrameNavigationProp<MainStackParamList, 'Progress'>
}

export function Progress({ navigation }: HomeProps) {
  // #region example
  const [currentValue, setCurrentValue] = React.useState(0)
  setInterval( () =>{
    setCurrentValue( currentValue + 10 )
    if(currentValue > 101)
      setCurrentValue(0);

  }, 1000);
  // #endregion example
  return (
    <>
      <frame>
        <page style={styles.container}>
          <actionBar title="Progress" onTap={() => Frame.goBack()}></actionBar>

          <stackLayout
            verticalAlignment={'middle'}
            horizontalAlignment={'center'}
          >
            {/*#region example*/}
            <progress value={currentValue}/>
            <label>{currentValue}</label>
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
