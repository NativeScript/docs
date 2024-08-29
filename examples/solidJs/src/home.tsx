import { For } from "solid-js";
import { useRoute } from "solid-navigation";
import { useRouter } from '~/router'

export const Home = () => {
  const router = useRouter();

  const pages = [
    {routeName: 'ActionBar', description:"ActionBar"},
    {routeName: 'ActivityIndicator', description:"Activity Indicator"},
    {routeName: 'Button', description:"Button"},
    {routeName: 'DatePicker', description:"Date Picker"},
    {routeName: 'Dialogs' , description:"Dialogs"},
    {routeName: 'HtmlView' , description:"HTML View"},
    {routeName: 'Image' , description:"Image"},
    {routeName: 'Label', description:"Label"},
    {routeName: 'ListPicker', description:"List Picker"},
    {routeName: 'ListView', description:"List View"},
    {routeName: 'Placeholder', description:"Placeholder"},
    {routeName: 'Progress', description:"Progress"},
    {routeName: 'ScrollView', description:"Scrollview"},
    {routeName: 'SearchBar', description:"Search Bar"},
    {routeName: 'SegmentedBar', description:"Segmented Bar"},
    {routeName: 'Slider' , description:"Slider"},
    {routeName: 'Switch', description:"Switch"},
    {routeName: 'TabView', description:"TabView"},
    {routeName: 'TextField', description:"Text Field"},
    {routeName: 'TextView', description:"Text View"},
    {routeName: 'TimePicker', description:"Time Picker"},
    {routeName: 'WebView', description:"Web View"},

  ]

  const navigate = (routeName:string) => {
    console.log(routeName)
    router.navigate(routeName);
  }


  return (
    <>
      <actionbar title="Home"/>
      {/* @ts-ignore */}

        {/*<button*/}
        {/*  row="1"*/}
        {/*  text={ "GO TO SCREEN B"}*/}
        {/*  on:tap={() => {*/}
        {/*    router.navigate("ActionBar");*/}
        {/*  }}*/}
        {/*/>*/}

      <scrollview orientation="vertical">
        <stacklayout>
          <For each={pages}>{

            (item, index) => (
                <button on:tap={() => navigate(item.routeName)}>{item.description}</button>
            )
          }</For>
        </stacklayout>
      </scrollview>
    </>
  );
};
