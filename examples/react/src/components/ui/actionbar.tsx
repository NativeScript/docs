import { Dialogs, Frame } from '@nativescript/core'
import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from '../../NavigationParamList'


type HomeProps = {
    route: RouteProp<MainStackParamList, "ActionBar">,
    navigation: FrameNavigationProp<MainStackParamList, "ActionBar">,
};

export function ActionBar({ navigation }: HomeProps) {
    return (
      <>
        <frame>
          <page style={styles.container}>
            {/*region example*/}
            <actionBar title="ActionBar"
                       onTap={() => Frame.goBack()}>
            </actionBar>
            {/*region example*/}

            <stackLayout verticalAlignment={'middle'} horizontalAlignment={'center'} >
              <label text="ActionBar" />
            </stackLayout>
          </page>
        </frame>
      </>
    );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
  },
  text: {
    textAlignment: "center",
    fontSize: 24,
    color: "black",
  },
  button: {
    fontSize: 24,
    color: "#2e6ddf",
  },
});
