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
  import SegmentedBar from '~/components/ui/SegmentedBar.svelte'
  import Slider from '~/components/ui/Slider.svelte'
  import Switch from '~/components/ui/Switch.svelte'
  import TabView from '~/components/ui/TabView.svelte'
  import TextField from '~/components/ui/TextField.svelte'
  import TextView from '~/components/ui/TextView.svelte'
  import TimePicker from '~/components/ui/TimePicker.svelte'
  import WebView from '~/components/ui/WebView.svelte'

  const examples = [
    { name: 'ActionBar', component: ActionBar },
    { name: 'ActivityIndicator', component: ActivityIndicator },
    { name: 'Button', component: Button },
    { name: 'DatePicker', component: DatePicker },
    { name: 'Dialogs', component: Dialogs },
    { name: 'HtmlView', component: HtmlView },
    { name: 'Image', component: Image },
    { name: 'Label', component: Label },
    { name: 'ListPicker', component: ListPicker },
    { name: 'ListView', component: ListView },
    { name: 'Placeholder', component: Placeholder },
    { name: 'Progress', component: Progress },
    { name: 'ScrollView', component: ScrollView },
    { name: 'SearchBar', component: Searchbar },
    { name: 'SegmentedBar', component: SegmentedBar },
    { name: 'Slider', component: Slider },
    { name: 'Switch', component: Switch },
    { name: 'TabView', component: TabView },
    { name: 'TextField', component: TextField },
    { name: 'TextView', component: TextView },
    { name: 'TimePicker', component: TimePicker },
    { name: 'WebView', component: WebView },
  ]

  function goTo(args) {
    const { index } = args
    const item = examples[index]
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
      case 'SegmentedBar':
        navigate({ page: SegmentedBar })
        break
      case 'Slider':
        navigate({ page: Slider })
        break
      case 'Switch':
        navigate({ page: Switch })
        break
      case 'TabView':
        navigate({ page: TabView })
        break
      case 'TextField':
        navigate({ page: TextField })
        break
      case 'TextView':
        navigate({ page: TextView })
        break
      case 'TimePicker':
        navigate({ page: TimePicker })
        break
      case 'WebView':
        navigate({ page: WebView })
        break
      default:
        break
    }
  }
</script>

<page>
  <actionBar>
    <label text="Home" class="font-bold text-lg" />
  </actionBar>
  <gridLayout>
    <listView items={examples} on:itemTap={goTo}>
      <Template let:item>
        <label
          class="item-label"
          text={item.name}
          padding="16"
          color="black"
          borderBottomColor="black"
        ></label>
      </Template>
    </listView>
  </gridLayout>
</page>

<style>
  .item-label {
  }
</style>
