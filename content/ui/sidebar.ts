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
          { text: 'Frame', link: '/ui/frame' },
          { text: 'Page', link: '/ui/page' },
          { text: 'ActionBar', link: '/ui/action-bar' },
          {
            text: 'ActionItem',
            link: '/ui/action-bar#action-item',
            visible: false, // only shown in the index/reference
          },
          {
            text: 'NavigationButton',
            link: '/ui/action-bar#navigation-button',
            visible: false, // only shown in the index/reference
          },
        ],
      },
      {
        text: 'Dialogs',
        link: '/ui/dialogs',
        items: [
          { text: 'Alert', link: '/ui/dialogs#alert' },
          { text: 'Action', link: '/ui/dialogs#action' },
          { text: 'Confirm', link: '/ui/dialogs#confirm' },
          { text: 'Prompt', link: '/ui/dialogs#prompt' },
          { text: 'Login', link: '/ui/dialogs#login' },
        ],
      },
      {
        text: 'Components',
        link: '/ui/#components',
        items: [
          { text: 'ActivityIndicator', link: '/ui/activity-indicator' },
          { text: 'Button', link: '/ui/button' },
          { text: 'DatePicker', link: '/ui/date-picker' },
          { text: 'HtmlView', link: '/ui/html-view' },
          { text: 'Image', link: '/ui/image' },
          { text: 'Label', link: '/ui/label' },
          { text: 'ListPicker', link: '/ui/list-picker' },
          { text: 'ListView', link: '/ui/list-view' },
          { text: 'Placeholder', link: '/ui/placeholder' },
          { text: 'Progress', link: '/ui/progress' },
          { text: 'ScrollView', link: '/ui/scroll-view' },
          { text: 'SearchBar', link: '/ui/search-bar' },
          { text: 'SegmentedBar', link: '/ui/segmented-bar' },
          { text: 'Slider', link: '/ui/slider' },
          { text: 'Switch', link: '/ui/switch' },
          { text: 'TabView', link: '/ui/tab-view' },
          { text: 'TextField', link: '/ui/text-field' },
          { text: 'TextView', link: '/ui/text-view' },
          { text: 'TimePicker', link: '/ui/time-picker' },
          { text: 'WebView', link: '/ui/web-view' },
        ],
      },
    ],
  },
] as NSSidebarItem[]
