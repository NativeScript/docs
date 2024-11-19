

import { Route, StackRouter } from "./router";
import { Home } from '~/home'
import { ActionBar } from '~/ui/actionbar'
import { Button } from "./ui/button";
import { DatePicker } from "./ui/datepicker";
import { Dialogs } from "./ui/dialogs";
import { HtmlView } from "./ui/htmlview";
import { Image } from "./ui/image";
import { ListPicker } from "./ui/listpicker";
import { ListView } from "./ui/listview";
import { Label } from "./ui/label";
import { Progress } from "./ui/progress";
import { Placeholder } from "./ui/placeholder";
import { SearchBar } from "./ui/searchbar";
import { SegmentedBar } from "./ui/segmentedbar";
import { ScrollView } from "./ui/scrollview";
import { Slider } from "./ui/slider";
import { Switch } from "./ui/switch";
import { TabView } from "./ui/tabview";
import { TextField } from "./ui/textfield";
import { TextView } from "./ui/textview";
import { TimePicker } from "./ui/timepicker";
import { WebView } from "./ui/webview";
import { ActivityIndicator } from "./ui/activityindicator";


const App = () => {

  return (
    <StackRouter initialRouteName="Home">
      <Route name="Home" component={Home} />

      <Route name="ActionBar" component={ActionBar} />
      <Route name="ActivityIndicator" component={ActivityIndicator} />
      <Route name="Button" component={Button} />
      <Route name="DatePicker" component={DatePicker} />
      <Route name="Dialogs" component={Dialogs} />
      <Route name="HtmlView" component={HtmlView} />
      <Route name="Image" component={Image} />
      <Route name="Label" component={Label} />
      <Route name="ListPicker" component={ListPicker} />
      <Route name="ListView" component={ListView} />
      <Route name="Placeholder" component={Placeholder} />
      <Route name="Progress" component={Progress} />
      <Route name="ScrollView" component={ScrollView} />
      <Route name="SearchBar" component={SearchBar} />
      <Route name="SegmentedBar" component={SegmentedBar} />
      <Route name="Slider" component={Slider} />
      <Route name="Switch" component={Switch} />
      <Route name="TabView" component={TabView} />
      <Route name="TextField" component={TextField} />
      <Route name="TextView" component={TextView} />
      <Route name="TimePicker" component={TimePicker} />
      <Route name="WebView" component={WebView} />

    </StackRouter>
  );
};

export { App };
