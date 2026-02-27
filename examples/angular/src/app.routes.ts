import { Routes } from '@angular/router'
import { HomeComponent } from './home.component'

import { ActionBarComponent } from './ui/ActionBar/component'
import { ActivityIndicatorComponent } from './ui/ActivityIndicator/component'
import { ButtonComponent } from './ui/Button/component'
import { DatePickerComponent } from './ui/DatePicker/component'
import { DialogsComponent } from './ui/Dialogs/component'
import { HtmlViewComponent } from './ui/HtmlView/component'
import { ImageComponent } from './ui/Image/component'
import { LabelComponent } from './ui/Label/component'
import { ListPickerComponent } from './ui/ListPicker/component'
import { ListViewComponent } from './ui/ListView/component'
import { PlaceholderComponent } from './ui/Placeholder/component'
import { ProgressComponent } from './ui/Progress/component'
import { ScrollViewComponent } from './ui/ScrollView/component'
import { SearchBarComponent } from './ui/SearchBar/component'
import { SegmentedBarComponent } from './ui/SegmentedBar/component'
import { SliderComponent } from './ui/Slider/component'
import { SplitViewComponent } from './ui/SplitView/component'
import { SwitchComponent } from './ui/Switch/component'
import { TabViewComponent } from './ui/TabView/component'
import { TextFieldComponent } from './ui/TextField/component'
import { TextViewComponent } from './ui/TextView/component'
import { TimePickerComponent } from './ui/TimePicker/component'
import { ViewOriginComponent } from './ui/ViewOrigin/component'
import { WebViewComponent } from './ui/WebView/component'

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'ui/ActionBar', component: ActionBarComponent },
  { path: 'ui/ActivityIndicator', component: ActivityIndicatorComponent },
  { path: 'ui/Button', component: ButtonComponent },
  { path: 'ui/DatePicker', component: DatePickerComponent },
  { path: 'ui/Dialogs', component: DialogsComponent },
  { path: 'ui/HtmlView', component: HtmlViewComponent },
  { path: 'ui/Image', component: ImageComponent },
  { path: 'ui/Label', component: LabelComponent },
  { path: 'ui/ListPicker', component: ListPickerComponent },
  { path: 'ui/ListView', component: ListViewComponent },
  { path: 'ui/Placeholder', component: PlaceholderComponent },
  { path: 'ui/Progress', component: ProgressComponent },
  { path: 'ui/ScrollView', component: ScrollViewComponent },
  { path: 'ui/SearchBar', component: SearchBarComponent },
  { path: 'ui/SegmentedBar', component: SegmentedBarComponent },
  { path: 'ui/Slider', component: SliderComponent },
  // must be root route to function properly
  // here for docs template examples only
  // { path: 'ui/SplitView', component: SplitViewComponent },
  { path: 'ui/Switch', component: SwitchComponent },
  { path: 'ui/TabView', component: TabViewComponent },
  { path: 'ui/TextField', component: TextFieldComponent },
  { path: 'ui/TextView', component: TextViewComponent },
  { path: 'ui/TimePicker', component: TimePickerComponent },
  { path: 'ui/ViewOrigin', component: ViewOriginComponent },
  { path: 'ui/WebView', component: WebViewComponent },
]