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
        text: 'Navigation',
        link: '/guide/navigation/',
      },
      {
        text: 'Using Modals',
        link: '/guide/navigation/modals',
      },
      {
        text: 'Styling',
        link: '/guide/styling',
      },
      {
        text: 'Choosing an editor',
        link: '/guide/choosing-an-editor',
      },
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
        text: 'Plugins',
        link: '/guide/development-workflow/using-packages',
      },
      {
        text: 'Testing',
        link: '/guide/testing',
      },
      {
        text: 'Publishing',
        link: '/guide/publishing/',
      },
      {
        text: 'Updating',
        link: '/guide/updating-an-app',
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
        text: 'references.d.ts',
        link: '/project-structure/references-d-ts',
        icon: 'file',
      },
      {
        text: 'tsconfig.json',
        link: '/project-structure/tsconfig-json',
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
    ],
  },
  {
    text: '@nativescript/core',
    items: [
      { text: 'Application', link: '/guide/core/application' },
      {
        text: 'ApplicationSettings',
        link: '/guide/core/application-settings',
      },
      {
        text: 'Color',
        link: '/guide/core/color',
      },
      {
        text: 'Connectivity',
        link: '/guide/core/connectivity',
      },
      {
        text: 'Http',
        link: '/guide/core/http',
      },
      {
        text: 'FPS Meter',
        link: '/guide/core/fps-meter',
      },
      {
        text: 'FileSystem',
        link: '/guide/core/file-system',
      },
      {
        text: 'Observable',
        link: '/guide/core/observable',
      },
      {
        text: 'Screen',
        link: '/guide/core/screen',
      },
      {
        text: 'Device',
        link: '/guide/core/device',
      },
      {
        text: 'Trace',
        link: '/guide/core/tracing',
      },
      {
        text: 'XmlParser',
        link: '/guide/core/xml-parser',
      },
      {
        text: 'Utils',
        link: '/guide/core/utils',
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
        text: 'Adding Native Code',
        link: '/guide/adding-native-code',
      },
      {
        text: 'Extending Native Classes',
        link: '/guide/subclassing/',
        items: [
          {
            text: 'Android',
            link: '/guide/extending-classes-and-implementing-interfaces-android',
          },
          {
            text: 'iOS',
            link: '/guide/extending-classes-and-conforming-to-protocols-ios',
          },
        ],
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
        text: 'Metadata',
        link: '/guide/metadata',
      },
      {
        text: 'Marshalling',
        link: '/guide/marshalling',
        items: [
          {
            text: 'iOS Marshalling',
            link: '/guide/ios-marshalling',
          },
          {
            text: 'iOS Runtime Types',
            link: '/guide/ios-runtime-types',
          },
          {
            text: 'Android Marshalling',
            link: '/guide/android-marshalling',
          },
        ],
      },
      {
        text: 'Animations',
        link: '/guide/animations',
      },
      {
        text: 'Gestures',
        link: '/guide/gestures',
      },
      {
        text: 'Shared Element Transitions',
        link: '/guide/shared-element-transitions',
      },
      {
        text: 'Data Binding',
        link: '/guide/data-binding',
      },
      {
        text: 'Property System',
        link: '/guide/property-system',
      },
      {
        text: 'The Layout Process',
        link: '/guide/advanced/the-layout-process',
      },
      {
        text: 'Error Handling',
        link: '/guide/error-handling',
      },
    ],
  },
] as NSSidebarGroup[]
