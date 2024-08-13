<script lang="ts" setup>
import { ref, $navigateTo } from 'nativescript-vue'

import { getComponentList } from '@example/utils'
import Button from './ui/Button/component.vue'
import SearchBar from './ui/SearchBar/component.vue'

const examples = ref<Array<{ name: string }>>(
  getComponentList(
    // @ts-expect-error
    require.context('./ui/', true, /component\.vue$/),
    '/component.vue'
  )
)

const goTo = (args: any) => {
  const { index } = args
  const item = examples.value[index]
  console.log('item:', item)
  switch (item.name) {
    case 'Button':
      $navigateTo(Button)
      break
    case 'SearchBar':
      $navigateTo(SearchBar)
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
