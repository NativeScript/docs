import { BaseNavigationContainer } from '@react-navigation/core'
import * as React from 'react'
import { stackNavigatorFactory } from 'react-nativescript-navigation'

import { HomePage } from './home'
import { ActionBar } from './ui/actionbar'
import { ActivityIndicator } from './ui/activityindicator'
import { Button } from './ui/button'
import { DatePicker } from './ui/datepicker'
import { DialogsCmp } from './ui/dialogs'
import { HtmlView } from './ui/htmlview'
import { Image } from './ui/image'
import { Label } from './ui/label'
import { ListPicker } from './ui/listpicker'
import { ListView } from './ui/listview'
import { Placeholder } from './ui/placeholder'
import { Progress } from './ui/progress'
import { ScrollView } from './ui/scrollview'
import { SearchBar } from './ui/searchbar'
import { SegmentedBar } from './ui/segmentedbar'
import { Slider } from './ui/slider'
import { Switch } from './ui/switch'
import { TabView } from './ui/tabview'
import { TextField } from './ui/textfield'
import { TextView } from './ui/textview'
import { TimePicker } from './ui/timepicker'
import { WebView } from './ui/webview'

const StackNavigator = stackNavigatorFactory()

/**
 * The main stack navigator for the whole app.
 */
export const MainStack = () => (
  <BaseNavigationContainer>
    <StackNavigator.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: 'white',
        },
        headerShown: false,
      }}
    >
      <StackNavigator.Screen name="Home" component={HomePage} />

      <StackNavigator.Screen name="ActionBar" component={ActionBar} />

      <StackNavigator.Screen
        name="ActivityIndicator"
        component={ActivityIndicator}
      />

      <StackNavigator.Screen name="Button" component={Button} />

      <StackNavigator.Screen name="DatePicker" component={DatePicker} />

      <StackNavigator.Screen name="Dialogs" component={DialogsCmp} />

      <StackNavigator.Screen name="HtmlView" component={HtmlView} />

      <StackNavigator.Screen name="Image" component={Image} />

      <StackNavigator.Screen name="Label" component={Label} />

      <StackNavigator.Screen name="ListPicker" component={ListPicker} />

      <StackNavigator.Screen name="ListView" component={ListView} />

      <StackNavigator.Screen name="Placeholder" component={Placeholder} />

      <StackNavigator.Screen name="Progress" component={Progress} />

      <StackNavigator.Screen name="ScrollView" component={ScrollView} />

      <StackNavigator.Screen name="SearchBar" component={SearchBar} />

      <StackNavigator.Screen name="SegmentedBar" component={SegmentedBar} />

      <StackNavigator.Screen name="Slider" component={Slider} />

      <StackNavigator.Screen name="Switch" component={Switch} />

      <StackNavigator.Screen name="TabView" component={TabView} />

      <StackNavigator.Screen name="TextField" component={TextField} />

      <StackNavigator.Screen name="TextView" component={TextView} />

      <StackNavigator.Screen name="TimePicker" component={TimePicker} />

      <StackNavigator.Screen name="WebView" component={WebView} />
    </StackNavigator.Navigator>
  </BaseNavigationContainer>
)
