import { createStackRouter, RouteDefinition } from "solid-navigation";

declare module "solid-navigation" {
  export interface Routers {
    Default: {
      Home: RouteDefinition;
      ActionBar: RouteDefinition;
      ActivityIndicator: RouteDefinition;
      Button: RouteDefinition;
      DatePicker: RouteDefinition;
      Dialogs: RouteDefinition;
      HtmlView: RouteDefinition;
      Image: RouteDefinition;
      Label: RouteDefinition;
      ListPicker: RouteDefinition;
      ListView: RouteDefinition;
      Placeholder: RouteDefinition;
      Progress: RouteDefinition;
      ScrollView: RouteDefinition;
      SegmentedBar: RouteDefinition;
      SearchBar: RouteDefinition;
      Slider: RouteDefinition;
      Switch: RouteDefinition;
      TabView: RouteDefinition;
      TextField: RouteDefinition;
      TextView: RouteDefinition;
      TimePicker: RouteDefinition;
      WebView: RouteDefinition;
    };
  }
}

export const { Route, StackRouter, useParams, useRouter } =
  createStackRouter<"Default">();