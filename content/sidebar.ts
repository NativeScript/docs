import type { NSSidebarGroup } from '../.vitepress/theme/vitepress-theme'

export default [
  {
    text: 'The Basics',
    items: [
      { text: 'Introduction', link: '/' },
      {
        text: 'Environment Setup',
        link: '/setup/',
        items: [
          { text: 'Windows', link: '/setup/windows' },
          { text: 'macOS', link: '/setup/macos' },
          { text: 'Linux', link: '/setup/linux' },
        ],
      },
      {
        text: 'Creating a Project',
        link: '/guide/creating-a-project',
      },
      // {
      //   text: 'Tutorials',
      //   link: '/tutorials/',
      // },
      {
        text: 'Troubleshooting',
        link: '/troubleshooting',
      },
    ],
  },
  {
    text: 'Development Workflow',
    items: [
      {
        text: 'CLI Basics',
        link: '/guide/cli-basics',
      },
      {
        text: 'Running',
        link: '/guide/running',
      },

      {
        text: 'Debugging',
        link: '/guide/debugging',
      },
      {
        text: 'Publishing',
        link: '/guide/publishing/',
      },
    ],
  },
  {
    text: 'Configuration',
    items: [
      {
        text: 'Config Reference',
        link: '/configuration/nativescript',
      },
      {
        text: 'Webpack Reference',
        link: '/configuration/webpack',
      },
    ],
  },
  {
    text: 'Project Structure',
    type: 'filetree',
    items: [
      {
        text: 'App_Resources/',
        link: '/project-structure/app-resources',
        icon: 'folder',
      },
      {
        text: 'src/',
        link: '/project-structure/src/',
        icon: 'folder',
        collapsible: false,
        items: [
          {
            text: 'fonts/',
            link: '/project-structure/src/fonts',
            icon: 'folder',
          },
          {
            text: 'app.css•scss',
            link: '/project-structure/src/app-css-scss',
            icon: 'file',
          },
          {
            text: 'main.js•ts',
            link: '/project-structure/src/main-js-ts',
            icon: 'file',
          },
        ],
      },
      {
        text: 'nativescript.config.ts',
        link: '/project-structure/nativescript-config',
        icon: 'file',
      },
      {
        text: 'package.json',
        link: '/project-structure/package-json',
        icon: 'file',
      },
      {
        text: 'webpack.config.js',
        link: '/project-structure/webpack-config',
        icon: 'file',
      },
      // {
      //   text: 'package.json',
      //   link: '//#',
      //   icon: 'file',
      //   items: [
      //     { text: '@nativescript/core', link: '//#', icon: 'chevron_right' },
      //     { text: '@nativescript/ios', link: '//#', icon: 'chevron_right' },
      //     {
      //       text: '@nativescript/android',
      //       link: '//#',
      //       icon: 'chevron_right',
      //     },
      //   ],
      // },
      {
        text: 'tsconfig.json',
        link: '/project-structure/tsconfig-json',
        icon: 'file',
      },
      // { text: 'references.d.ts', link: '//#', icon: 'file' },
    ],
  },
  {
    text: '@nativescript/core',
    items: [
      {
        text: 'Device',
        link: '/guide/core/device',
      },
      {
        text: 'ImageCache',
        link: '/guide/core/image-cache',
      },
    ],
  },
  {
    text: 'Advanced Concepts',
    items: [
      {
        text: 'Multithreading',
        link: '/guide/multithreading',
      },
      {
        text: 'Code Sharing',
        link: '/guide/code-sharing',
      },
      {
        text: 'Shared Element Transitions',
        link: '/guide/shared-element-transitions',
      },
    ],
  },
  {
    text: 'UI / Layout Containers',
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
    text: 'UI / Navigation Components',
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
    text: 'UI / Components',
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
] as NSSidebarGroup[]
