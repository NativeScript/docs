import { Dialogs, Frame } from '@nativescript/core'
import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";

import { MainStackParamList } from '../../NavigationParamList'

type HomeProps = {
    route: RouteProp<MainStackParamList, "TabView">,
    navigation: FrameNavigationProp<MainStackParamList, "TabView">,
};

export function TabView({ navigation }: HomeProps) {
    return (
      <>
        <frame>
          <page style={styles.container}>
            <actionBar title="TabView" onTap={() => Frame.goBack()}></actionBar>

            <stackLayout
              verticalAlignment={'middle'}
              horizontalAlignment={'center'}
            >
              {/*#region example*/}
              <tabView>
                <tabViewItem nodeRole="items" title="First">
                  <label text="First Tab Content" textAlignment="center" verticalAlignment="middle"></label>
                </tabViewItem>
                <tabViewItem nodeRole="items" title="Second">
                  <label text="Second Tab Content" textAlignment="center" verticalAlignment="middle"></label>
                </tabViewItem>
                <tabViewItem nodeRole="items" title="Third">
                  <label text="Third Tab Content" textAlignment="center" verticalAlignment="middle"></label>
                </tabViewItem>
              </tabView>
              {/*endregion example*/}
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
