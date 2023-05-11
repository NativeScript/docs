import { NSSidebarGroup } from '@packages/vitepress-theme/src'

export default [
  {
    text: 'The Basics',
    items: [
      { text: 'Introduction', link: '/' },
      {
        text: 'Environment Setup',
        link: '/setup/',
        hideChildren: true,
        items: [
          { text: 'Windows', link: '/setup/windows' },
          { text: 'macOS', link: '/setup/macos' },
          { text: 'Linux', link: '/setup/linux' },
        ],
      },
      {
        text: 'Creating a new Project',
        link: '/creating-a-new-project',
      },
      {
        text: 'Development Workflow',
        items: [
          {
            text: 'Debugging',
            link: '/guide/debugging',
          },
        ],
      },
      {
        text: 'Tutorials',
        link: '/tutorials/',
      },
      {
        text: 'Publishing',
        link: '/guide/publishing/',
      },
      {
        text: 'Troubleshooting',
        link: '/troubleshooting',
      },
    ],
  },
  {
    text: 'Project Structure',
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
        items: [
          {
            text: 'fonts/',
            link: '/project-structure/src/fonts',
            icon: 'folder',
          },
          {
            text: 'app.(css|scss)',
            link: '/project-structure/src/app-css-scss',
            icon: 'file',
          },
          {
            text: 'main.(js|ts)',
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
      { text: 'webpack.config.js', link: '/webpack', icon: 'file' },
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
    text: 'UI',
    items: [
      //       { text: 'Styling', link: '//#' },
      //       { text: 'Interactivity', link: '//#' },
      {
        text: 'Layout Containers',
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
        items: [
          //           { text: 'Frame', link: '//#' },
          { text: 'Page', link: '/ui/page' },
          { text: 'ActionBar', link: '/ui/action-bar' },
          //           { text: 'ActionItem', link: '//#' },
          //           { text: 'NavigationButton', link: '//#' },
        ],
      },
      {
        text: 'Components',
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
      {
        text: 'Showing Modal',
        link: '/guide/ui/showing-modal',
      },
      //       {
      //         text: 'Dialogs',
      //         items: [
      //           { text: 'ActionDialog', link: '//#' },
      //           { text: 'AlertDialog', link: '//#' },
      //           { text: 'ConfirmDialog', link: '//#' },
      //           { text: 'LoginDialog', link: '//#' },
      //           { text: 'PromptDialog', link: '//#' },
      //         ],
      //       },
    ],
  },
  //   {
  //     text: 'Diving Deeper',
  //     items: [{ text: 'Architecture concepts', link: '//#' }],
  //   },
  // {
  //   text: 'UI & Styling',
  //   items: [
  //     {
  //       text: 'UI & Styling',
  //       link: '//#',
  //     },
  //     { text: 'Interaction', link: '//#' },
  //   ],
  // },
  // {
  //   text: 'Networking & Security',
  //   items: [
  //     { text: 'Networking', link: '//#' },
  //     {
  //       text: 'Security (Nathanael)',
  //       link: '//#',
  //     },
  //   ],
  // },
  // {
  //   text: 'Performance',
  //   items: [{ text: 'Performance', link: '//#' }],
  // },

  // {
  //   text: 'Distribution',
  //   items: [
  //     {
  //       text: 'Releasing your app',
  //       link: '//#',
  //     },
  //   ],
  // },
  // {
  //   text: 'Troubleshooting',
  //   items: [
  //     {
  //       text: 'Common Issues',
  //       link: '//#',
  //     },
  //     {
  //       text: 'Common Pitfalls',
  //       link: '//#',
  //     },
  //   ],
  // },
] as NSSidebarGroup[]
