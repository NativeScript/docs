import { useRoute } from "solid-navigation";
import { useRouter } from '~/router'

export const Home = () => {
  const router = useRouter();

  const examples = [
    {name: 'ActionBar'},
    {name: 'ActivityIndicator'},
    {name: 'Button'},
    {name: 'DatePicker'},
    {name: 'Dialogs'},
    {name: 'HtmlView'},
    {name: 'Image'},
    {name: 'Label'},
    {name: 'ListPicker'},
    {name: 'ListView'},
    {name: 'Placeholder'},
    {name: 'Progress'},
    {name: 'ScrollView'},
    {name: 'SearchBar'},
    {name: 'SegmentedBar'},
    {name: 'Slider'},
    {name: 'Switch'},
    {name: 'TabView'},
    {name: 'TextField'},
    {name: 'TextView'},
    {name: 'TimePicker'},
    {name: 'WebView'},

  ]


  return (
    <>
      <actionbar title="Home"/>
      {/* @ts-ignore */}
      <gridlayout rows="*,auto,*">
        <button
          row="1"
          text={ "GO TO SCREEN B"}
          on:tap={() => {
            router.navigate("ActionBar");
          }}
        />

      </gridlayout>
    </>
  );
};
