import { Actionbar } from '~/ui/ActionBar'
import { createSignal, For } from 'solid-js'


document.body.actionBarHidden = false;

const App = () => {

  const [examples, setExamples] = createSignal(
    [
      {name: 'ActionBar', component: Actionbar},
      // {name: 'ActivityIndicator', component: ActivityIndicator},
      // {name: 'Button', component: Button},
      // {name: 'DatePicker', component: DatePicker},
      // {name: 'Dialogs', component: Dialogs},
      // {name: 'HtmlView', component: HtmlView},
      // {name: 'Image', component: Image},
      // {name: 'Label', component: Label},
      // {name: 'ListPicker', component: ListPicker},
      // {name: 'ListView', component: ListView},
      // {name: 'Placeholder', component: Placeholder},
      // {name: 'Progress', component: Progress},
      // {name: 'ScrollView', component: ScrollView},
      // {name: 'SearchBar', component: Searchbar},
      // {name: 'SegmentedBar', component: SegmentedBar},
      // {name: 'Slider', component: Slider},
      // {name: 'Switch', component: Switch},
      // {name: 'TabView', component: TabView},
      // {name: 'TextField', component: TextField},
      // {name: 'TextView', component: TextView},
      // {name: 'TimePicker', component: TimePicker},
      // {name: 'WebView', component: WebView},

    ]
  )
  const goTo = (item) => {

    try {
        switch (item.name) {
          case 'ActionBar':
            console.log("ActionBar")
            break;
          default:
            break;
      }
    }
    catch{

    }
  }
  const sampleName = "name";
  return (
    <>
      <actionbar title="Home"></actionbar>
      <stacklayout>
        <For each={examples()}>
          {(item, index) =>
            <button on:tap={(index)=> goTo(item)}>{item.name}</button>
        // rendering logic for each element
          }
        </For>
    </stacklayout>
    </>
  );
};

export { App };
