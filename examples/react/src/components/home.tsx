import { Dialogs, Frame, ItemEventData, Page } from '@nativescript/core';
import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";

import { MainStackParamList } from "../NavigationParamList";

type HomeProps = {
    route: RouteProp<MainStackParamList, "Home">,
    navigation: FrameNavigationProp<MainStackParamList, "Home">,
};

export function HomePage({ navigation }: HomeProps) {
  const examples = [
    "ActionBar",
    "ActivityIndicator",
    "Button",
    "DatePicker",
    "Dialogs",
    "HtmlView",
    "Image",
    "Label",
    "ListPicker",
    "ListView",
    "Placeholder",
    "Progress",
    "ScrollView",
    "SearchBar",
    "SegmentedBar",
    "Slider",
    "Switch",
    "TabView",
    "TextField",
    "TextView",
    "TimePicker",
    "WebView"
  ]
  const navigate = (args:ItemEventData) => {
    console.log(args.index)
      const index = args.index;
      const value = examples[index];
      navigation.navigate(value,{Title: value});
  }

  return (
      <>
        <frame>
          <page style={styles.container}>
            <actionBar title="Home">
            </actionBar>

            <stackLayout style={styles.container} >

              <listView items={examples} onItemTap={navigate}/>
            </stackLayout>
          </page>
        </frame>
      </>
    );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 10,
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
