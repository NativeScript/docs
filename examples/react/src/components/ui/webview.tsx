import { Dialogs, Frame } from '@nativescript/core'
import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";

import { MainStackParamList } from '../../NavigationParamList'

type HomeProps = {
    route: RouteProp<MainStackParamList, "WebView">,
    navigation: FrameNavigationProp<MainStackParamList, "WebView">,
};

export function WebView({ navigation }: HomeProps) {
  // todo this doesn't work well?
    return (
      <>
        <frame>
          <page style={styles.container}>
            <actionBar title="WebView" onTap={() => Frame.goBack()}></actionBar>

            <stackLayout
              verticalAlignment={'middle'}
              horizontalAlignment={'center'}
            >
              {/*actual example - not rendered because the above WebView is used for the screenshot instead.*/}
                {/*#region example */}
                <webView src="https://nativescript-vue.org/" />


                <webView src="<div><h1>Some static HTML</h1></div>" />
                {/*#endregion example */}
            </stackLayout>
          </page>
        </frame>
      </>
    )
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
