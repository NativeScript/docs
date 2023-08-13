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
            text: 'Running',
            link: '/guide/running',
          },
          {
            text: 'Testing',
            link: '/guide/testing'
          },
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
    text: '@nativescript/core',
    items: [
      { text: 'Application', link: '/guide/core/application' },
      {
        text: 'Color',
        link: '/guide/core/color'
      },
      {
        text: 'Connectivity',
        link: '/guide/core/connectivity',
      },
      { 
        text: 'Http',
        link: '/guide/core/http'
      },
      {
        text: 'FPS Meter',
        link: '/guide/core/fps-meter'
      },
      {
        text: 'FileSystem',
        link: '/guide/core/file-system'
      },
      {
        text: 'Observable',
        link: '/guide/core/observable'
      },
      {
        text: 'Screen',
        link: '/guide/core/screen'
      },
      {
        text: 'Device',
        link: '/guide/core/device'
      },
      {
        text: 'Trace',
        link: '/guide/core/tracing'
      },
      {
        text: 'XmlParser',
        link: '/guide/core/xml-parser'
      },
      {
        text: 'Utils',
        link: '/guide/core/utils'
      }
    ]
  },
  {
    text: 'Advanced Concepts',
    items: [
      {
        text: 'Navigation',
        link: '/guide/ui/navigation',
      },
      {
        text: 'Multithreading',
        link: '/guide/multithreading',
      },
      {
        text: 'Code Sharing',
        link: '/guide/code-sharing',
      },
      {
        text: 'Marshalling',
        items: [
          {
            text: 'iOS',
            link: '/guide/ios-runtime-types',
          },
          {
            text: 'Android',
            link: '/guide/android-marshalling',
          }
        ]
      },
      {
        text: 'Property System',
        link: '/guide/property-system'
      },
      {
        text: 'Shared Element Transitions',
        link: '/guide/shared-element-transitions'
      }
    ],
  },
  {
    text: 'UI',
    items: [
      {
        text: 'Image',
        items: [
          {
            text: 'ImageCache',
            link: '/guide/ui/image-cache'
          },
          {
            text: 'ImageSource',
            link: '/guide/ui/image-source'
          }
        ]
      },
      //       { text: 'Styling', link: '//#' },
      //       { text: 'Interactivity', link: '//#' },
      {
        text: 'Layout Containers',
        items: [
          //           { text: 'StackLayout', link: '//#' },
          //           { text: 'GridLayout', link: '//#' },
          //           { text: 'RootLayout', link: '//#' },
          //           { text: 'FlexboxLayout', link: '//#' },
          //           { text: 'WrapLayout', link: '//#' },
          { text: 'AbsoluteLayout', link: '/ui/absolute-layout' },
        ],
      },
      //       {
      //         text: 'Navigation Components',
      //         items: [
      //           { text: 'Frame', link: '//#' },
      //           { text: 'Page', link: '//#' },
      //           { text: 'ActionBar', link: '//#' },
      //           { text: 'ActionItem', link: '//#' },
      //           { text: 'NavigationButton', link: '//#' },
      //         ],
      //       },
      //       {
      //         text: 'Components',
      //         items: [
      //           { text: 'ActivityIndicator', link: '//#' },
      //           { text: 'Button', link: '//#' },
      //           { text: 'DatePicker', link: '//#' },
      //           { text: 'HtmlView', link: '//#' },
      //           { text: 'Image', link: '/' },
      //           { text: 'Label', link: '//#' },
      //           { text: 'ListPicker', link: '//#' },
      //           { text: 'ListView', link: '//#' },
      //           { text: 'Placeholder', link: '//#' },
      //           { text: 'Progress', link: '//#' },
      //           { text: 'ScrollView', link: '//#' },
      //           { text: 'SearchBar', link: '//#' },
      //           { text: 'SegmentedBar', link: '//#' },
      //           { text: 'Slider', link: '//#' },
      //           { text: 'Switch', link: '//#' },
      //           { text: 'TabView', link: '//#' },
      //           { text: 'TextField', link: '//#' },
      //           { text: 'TextView', link: '//#' },
      //           { text: 'TimePicker', link: '//#' },
      //           { text: 'WevView', link: '//#' },
    ],
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
  //     ],
  //   },
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
