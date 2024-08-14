<script lang="ts" setup>
import { ref, $navigateTo } from 'nativescript-vue'

import { getComponentList } from '@example/utils'
import Button from './ui/Button/component.vue'
import DatePicker from './ui/DatePicker/component.vue'
import HtmlView from './ui/HtmlView/component.vue'
import Image from './ui/Image/component.vue'
// todo not working label
// import Label from './ui/Label/component.vue'
import ListPicker from './ui/ListPicker/component.vue'
// todo notworking listview
// import ListView  from './ui/ListView/component.vue'
import Placeholder from './ui/Placeholder/component.vue'
import Progress from './ui/Progress/component.vue'
import ScrollView from './ui/ScrollView/component.vue'
import SearchBar from './ui/SearchBar/component.vue'
import SegmentedBar from './ui/SegmentedBar/component.vue'
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
    case 'Button':
      $navigateTo(Button)
      break
    case 'DatePicker':
      $navigateTo(DatePicker)
      break
    case 'HtmlView':
      $navigateTo(HtmlView)
      break
    case 'Image':
      $navigateTo(Image)
      break
    case 'Label':
      $navigateTo(Image)
      break
    case 'ListPicker':
      $navigateTo(ListPicker)
      break
    case 'ListView':
      $navigateTo(ListPicker)
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
