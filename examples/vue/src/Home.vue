<script lang="ts" setup>
import { ref, $navigateTo } from 'nativescript-vue'

import { getComponentList } from '@example/utils'
import Actionbar from './ui/Actionbar/component.vue'
import ActivityIndicator from './ui/ActivityIndicator/component.vue'
import Button from './ui/Button/component.vue'
import DatePicker from './ui/DatePicker/component.vue'
import Dialogs from './ui/Dialogs/component.vue'
import HtmlView from './ui/HtmlView/component.vue'
import Image from './ui/Image/component.vue'
import Label_  from './ui/Label_/component.vue'
import ListPicker from './ui/ListPicker/component.vue'
import Listview  from './ui/Listview/component.vue'
import Placeholder from './ui/Placeholder/component.vue'
import Progress from './ui/Progress/component.vue'
import ScrollView from './ui/ScrollView/component.vue'
import SearchBar from './ui/SearchBar/component.vue'
import SegmentedBar from './ui/SegmentedBar/component.vue'
import Slider from './ui/Slider/component.vue'
import Switch from './ui/Switch/component.vue'
import TabView from './ui/TabView/component.vue'
import TextField from './ui/TextField/component.vue'
import TextView from './ui/TextView/component.vue'
import TimePicker from './ui/TimePicker/component.vue'
import WebView from './ui/WebView/component.vue'
const examples = ref<Array<{ name: string }>>(
  getComponentList(
    // @ts-expect-error
    require.context('./ui/', true, /component\.vue$/),
    '/component.vue'
  )
)

const goTo = (args: any) => {
  const { index } = args
  console.log(examples);
  const item = examples.value[index]
  console.log('item:', item)
  switch (item.name) {
    case 'Actionbar':
      $navigateTo(Actionbar)
      break
    case 'ActivityIndicator':
      $navigateTo(ActivityIndicator)
      break
    case 'Button':
      $navigateTo(Button)
      break
    case 'DatePicker':
      $navigateTo(DatePicker)
      break
    case 'Dialogs':
      $navigateTo(Dialogs)
      break
    case 'HtmlView':
      $navigateTo(HtmlView)
      break
    case 'Image':
      $navigateTo(Image)
      break
    case 'Label_':
      $navigateTo(Label_)
      break
    case 'ListPicker':
      $navigateTo(ListPicker)
      break
    case 'Listview':
      $navigateTo(Listview)
      break
    case 'Placeholder':
      $navigateTo(Placeholder)
      break
    case 'Progress':
      $navigateTo(Progress)
      break
    case 'ScrollView':
      $navigateTo(ScrollView)
      break
    case 'SearchBar':
      $navigateTo(SearchBar)
      break
    case 'SegmentedBar':
      $navigateTo(SegmentedBar)
      break
    case 'Slider':
      $navigateTo(Slider)
      break
    case 'Switch':
      $navigateTo(Switch)
      break
    case 'TabView':
      $navigateTo(TabView)
      break
    case 'TextField':
      $navigateTo(TextField)
      break
    case 'TextView':
      $navigateTo(TextView)
      break
    case 'TimePicker':
      $navigateTo(TimePicker)
      break
    case 'WebView':
      $navigateTo(WebView)
      break
    default:
      console.log('No component found')
      break
  }
}
</script>

<template>
  <Frame>
    <Page>
      <ActionBar>
        <Label text="Home" class="font-bold text-lg" />
      </ActionBar>

      <GridLayout>
        <ListView :items="examples" @itemTap="goTo">
          <template #default="{ item }">
            <StackLayout>
              <Label :text="item.name" padding="16" color="black" />
            </StackLayout>
          </template>
        </ListView>
      </GridLayout>
    </Page>
  </Frame>
</template>
