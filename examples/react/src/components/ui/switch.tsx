import { Dialogs, Frame } from '@nativescript/core'
import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";

import { MainStackParamList } from '../../NavigationParamList'

type HomeProps = {
    route: RouteProp<MainStackParamList, "Switch">,
    navigation: FrameNavigationProp<MainStackParamList, "Switch">,
};

export function Switch({ navigation }: HomeProps) {
  const [switchValue, setSwitchValue] = React.useState<boolean>(false);
  return (
    <>
      <frame>
        <page style={styles.container}>
          <actionBar title="Switch" onTap={() => Frame.goBack()}></actionBar>

          <stackLayout
            verticalAlignment={'middle'}
            horizontalAlignment={'center'}
          >
            {/*#region example*/}
            <switch
              horizontalAlignment="center"
              checked={switchValue}
              onCheckedChange={
              (args) => {
                setSwitchValue(args.value);
                console.log(args.value)

              }
            }
            ></switch>
            <label textAlignment="center" width="100%">
              {JSON.stringify(switchValue, null, 2)}
            </label>
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
