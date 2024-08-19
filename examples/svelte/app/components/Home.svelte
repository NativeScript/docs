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
  import DatePicker from '~/components/ui/DatePicker.svelte'
  import Dialogs from '~/components/ui/Dialogs.svelte'
  import HtmlView from '~/components/ui/HtmlView.svelte'
  import Image from '~/components/ui/Image.svelte'
  import Label from '~/components/ui/Label.svelte'
  import ListPicker from '~/components/ui/ListPicker.svelte'
  import ListView from '~/components/ui/ListView.svelte'
  import Placeholder from '~/components/ui/Placeholder.svelte'
  import Progress from '~/components/ui/Progress.svelte'
  import ScrollView from '~/components/ui/ScrollView.svelte'
  import Searchbar from '~/components/ui/SearchBar.svelte'

  const examples = [
    {name: 'ActionBar', component: ActionBar},
    {name: 'ActivityIndicator', component: ActivityIndicator},
    {name: 'Button', component: Button},
    {name: 'DatePicker', component: DatePicker},
    {name: 'Dialogs', component: Dialogs},
    {name: 'HtmlView', component: HtmlView},
    {name: 'Image', component: Image},
    {name: 'Label', component: Label},
    {name: 'ListPicker', component: ListPicker},
    {name: 'ListView', component: ListView},
    {name: 'Placeholder', component: Placeholder},
    {name: 'Progress', component: Progress},
    {name: 'ScrollView', component: ScrollView},
    {name: 'SearchBar', component: Searchbar},
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
      case 'DatePicker':
        navigate({ page: DatePicker })
        break
      case 'Dialogs':
        navigate({ page: Dialogs })
        break
      case 'HtmlView':
        navigate({ page: HtmlView })
        break
      case 'Image':
        navigate({ page: Image })
        break
      case 'Label':
        navigate({ page: Label })
        break
      case 'ListPicker':
        navigate({ page: ListPicker })
        break
      case 'ListView':
        navigate({ page: ListView })
        break
      case 'Placeholder':
        navigate({ page: Placeholder })
        break
      case 'Progress':
        navigate({ page: Progress })
        break
      case 'ScrollView':
        navigate({ page: ScrollView })
        break
      case 'SearchBar':
        navigate({ page: Searchbar })
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
