import { Dialogs } from '@nativescript/core';
import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";

import { MainStackParamList } from "~/NavigationParamList";

type HomeProps = {
    route: RouteProp<MainStackParamList, "Switch">,
    navigation: FrameNavigationProp<MainStackParamList, "Switch">,
};

export function Switch({ navigation }: HomeProps) {
    return (
      <>
        <frame>
          <page style={styles.container}>
            {/*region example*/}
            <actionBar title="ActionBar">
            </actionBar>
            {/*region example*/}

            <stackLayout verticalAlignment={'middle'} horizontalAlignment={'center'} >
                <label>Content Here</label>
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
