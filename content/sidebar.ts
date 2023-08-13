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
      {
        text: 'Updating',
        link: '/guide/updating-an-app'
      }
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
      { text: 'Application', link: '/guide/core/application' },
      {
        text: 'Color',
        link: '/guide/core/color'
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
        link: '/guide/core/device',
      },
      {
        text: 'ImageCache',
        link: '/guide/core/image-cache',
      },
      {
        text: 'XmlParser',
        link: '/guide/core/xml-parser'
      },
      {
        text: 'Utils',
        link: '/guide/core/utils'
      },
    ],
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
        link: '/guide/shared-element-transitions',
      },
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
] as NSSidebarGroup[]
