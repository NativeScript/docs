<page>
    <actionBar >
      <label text="Home"
             class="font-bold text-lg" />
    </actionBar>
    <gridLayout>
      <listView items="{examples}" on:itemTap="{goTo}">
          <Template let:item>
            <label class="item-label" text="{item.name}" padding="16" color="black" borderBottomColor="black"></label>
          </Template>
      </listView>
    </gridLayout>
</page>

<script lang="ts">
  import { Template } from 'svelte-native/components'
  import Button from '~/components/ui/Button.svelte'
  import { navigate } from 'svelte-native'
  import ActivityIndicator from '~/components/ui/ActivityIndicator.svelte'
  import ActionBar from '~/components/ui/ActionBar.svelte'

  const examples = [
    {name: 'ActionBar', component: ActionBar},
    {name: 'ActivityIndicator', component: ActivityIndicator},
    {name: 'Button', component: Button},

  ]

  function goTo(args) {
    const {index} = args;
    console.log(index);
    const item = examples[index];
    switch (item.name) {
      case 'ActionBar':
        navigate({ page: ActionBar })
        break
      case 'ActivityIndicator':
        navigate({ page: ActivityIndicator })
        break
      case 'Button':
        navigate({ page: Button })
        break
      default:
        break
    }
  }
</script>

<style>
  .item-label{
  }
</style>
