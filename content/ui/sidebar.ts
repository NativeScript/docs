import type { NSSidebarItem } from '../../.vitepress/theme/vitepress-theme'

export default [
  {
    text: 'UI Components',
    link: '/ui/',
    // hides the sidebar item from the sidebar, but keeps it in the breadcrumbs
    visible: false,
    // todo: add a different type to disable indentation on the root level
    type: 'filetree',
    items: [
      {
        text: 'Layout Containers',
        link: '/ui/#layout-containers',
        items: [
          { text: 'StackLayout', link: '/ui/stack-layout' },
          { text: 'GridLayout', link: '/ui/grid-layout' },
          { text: 'RootLayout', link: '/ui/root-layout' },
          { text: 'FlexboxLayout', link: '/ui/flexbox-layout' },
          { text: 'WrapLayout', link: '/ui/wrap-layout' },
          { text: 'DockLayout', link: '/ui/dock-layout' },
          { text: 'AbsoluteLayout', link: '/ui/absolute-layout' },
        ],
      },
      {
        text: 'Navigation Components',
        link: '/ui/#navigation-containers',
        items: [
          // { text: 'Frame', link: '//#' },
          { text: 'Page', link: '/ui/page' },
          { text: 'ActionBar', link: '/ui/action-bar' },
          // { text: 'ActionItem', link: '//#' },
          // { text: 'NavigationButton', link: '//#' },
          // todo: move this elsewhere
          {
            text: 'Showing Modal',
            link: '/guide/ui/showing-modal',
          },
        ],
      },
      {
        text: 'Components',
        link: '/ui/#components',
        items: [
          { text: 'ActivityIndicator', link: '/ui/activity-indicator' },
          { text: 'Button', link: '/ui/button' },
          { text: 'DatePicker', link: '/ui/datepicker' },
          { text: 'HtmlView', link: '/ui/htmlview' },
          { text: 'Image', link: '/ui/image' },
          { text: 'Label', link: '/ui/label' },
          { text: 'ListPicker', link: '/ui/listpicker' },
          { text: 'ListView', link: '/ui/listview' },
          { text: 'Placeholder', link: '/ui/placeholder' },
          { text: 'Progress', link: '/ui/progress' },
          { text: 'ScrollView', link: '/ui/scrollview' },
          { text: 'SearchBar', link: '/ui/searchbar' },
          { text: 'SegmentedBar', link: '/ui/segmentedbar' },
          { text: 'Slider', link: '/ui/slider' },
          { text: 'Switch', link: '/ui/switch' },
          { text: 'TabView', link: '/ui/tabview' },
          { text: 'TextField', link: '/ui/textfield' },
          { text: 'TextView', link: '/ui/textview' },
          { text: 'TimePicker', link: '/ui/timepicker' },
          { text: 'WebView', link: '/ui/webview' },
        ],
      },
    ],
  },
] as NSSidebarItem[]
