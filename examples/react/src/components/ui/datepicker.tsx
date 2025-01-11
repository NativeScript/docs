import { Dialogs, Frame } from '@nativescript/core'
import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";

import { MainStackParamList } from '../../NavigationParamList'

type HomeProps = {
    route: RouteProp<MainStackParamList, "DatePicker">,
    navigation: FrameNavigationProp<MainStackParamList, "DatePicker">,
};

export function DatePicker({ navigation }: HomeProps) {
  const currentDate = new Date();
    return (
      <>
        <frame>
          <page style={styles.container}>
            <actionBar title="DatePicker" onTap={() => Frame.goBack()}></actionBar>

            <stackLayout
              verticalAlignment={'middle'}
              horizontalAlignment={'center'}
            >
              {/*#region example*/}
              <datePicker date={currentDate}></datePicker>
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
