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
    text: 'UI / Layout Containers',
    items: [{ text: 'AbsoluteLayout', link: '/ui/absolute-layout' }],
  },
] as NSSidebarGroup[]
