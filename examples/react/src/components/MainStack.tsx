import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";

import { ScreenTwo } from "./ScreenTwo";
import { HomePage } from './home'
import { ActionBar } from './ui/actionbar'

const StackNavigator = stackNavigatorFactory();

/**
 * The main stack navigator for the whole app.
 */
export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "white",
                },
                headerShown: false,
            }}
        >
            <StackNavigator.Screen
                name="Home"

                component={HomePage}
            />

          <StackNavigator.Screen
            name="ActionBar"
            component={ActionBar}
          />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);
