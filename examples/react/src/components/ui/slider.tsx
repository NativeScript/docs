import { Dialogs, Frame } from '@nativescript/core'
import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";

import { MainStackParamList } from '../../NavigationParamList'

type HomeProps = {
    route: RouteProp<MainStackParamList, "Slider">,
    navigation: FrameNavigationProp<MainStackParamList, "Slider">,
};

export function Slider({ navigation }: HomeProps) {
  const [sliderValue, setSliderValue] = React.useState<number>(0);

  const sliderValueChanged = (args) => {

   setSliderValue(args.value);
  }
  return (
    <>
      <frame>
        <page style={styles.container}>
          <actionBar title="Slider" onTap={() => Frame.goBack()}></actionBar>

          <stackLayout
            verticalAlignment={'middle'}
            horizontalAlignment={'center'}
          >
            {/*#region example*/}
            <slider value="{sliderValue}" onValueChange={sliderValueChanged} />
            {/*#endregion example*/}
            <label width="100%" textAlignment="center">
              {sliderValue}
            </label>
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
