import type { NSSidebarGroup } from '@nativescript/vitepress-theme'

import updatingItems from './guide/updating/sidebar'
import coreSidebarItems from './core/sidebar'

export default [
  {
    text: 'Getting Started',
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
        text: 'Publishing',
        link: '/guide/publishing/',
      },
      {
        text: 'Plugins',
        link: '/guide/development-workflow/using-packages',
      },
      {
        text: 'Recommended Plugins',
        link: '/recommended-plugins',
      },
      {
        text: 'Testing',
        link: '/guide/testing',
      },
      {
        text: 'Updating',
        link: '/guide/updating/',
        hideChildren: true,
        items: updatingItems,
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
        text: 'vite.config.ts',
        link: '/project-structure/vite-config',
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
    text: 'Configuration',
    items: [
      {
        text: 'Config Reference',
        link: '/configuration/nativescript',
      },
      {
        text: 'Vite Reference',
        link: '/configuration/vite',
      },
      {
        text: 'Webpack Reference',
        link: '/configuration/webpack',
      },
    ],
  },
  {
    text: 'Fundamental Concepts',
    items: [
      {
        text: 'Accessibility',
        link: '/guide/accessibility',
      },
      {
        text: 'Animations',
        link: '/guide/animations',
      },
      {
        text: 'Best Practices',
        link: '/best-practices/',
      },
      ...coreSidebarItems,
      {
        text: 'Data Binding',
        link: '/guide/data-binding',
      },
      {
        text: 'Error Handling',
        link: '/guide/error-handling',
      },
      {
        text: 'Gestures',
        link: '/guide/gestures',
      },
      {
        text: 'Navigation',
        link: '/guide/navigation/',
        items: [
          {
            text: 'Using Frames and Pages',
            link: '/guide/navigation/frames-and-pages',
          },
          {
            text: 'Using Modals',
            link: '/guide/navigation/modals',
          },
        ],
      },
      {
        text: 'Property System',
        link: '/guide/property-system',
      },
      {
        text: 'Styling',
        link: '/guide/styling',
      }
    ],
  },
  {
    text: 'Crash Reporting',
    items: [
      {
        text: 'Using Sentry',
        link: '/guide/crash-reporting-sentry',
      },
    ]
  },
  {
    text: 'Developing with Vision Pro',
    items: [
      {
        text: 'Developing with visionOS',
        link: '/guide/visionos',
      },
      {
        text: 'Previewing visionOS from StackBlitz',
        link: '/guide/visionos-preview',
      },
    ]
  },
  {
    text: 'Agentic Coding',
    items: [
      {
        text: 'Leverage AI assistants',
        link: '/guide/agentic-coding',
      }
    ]
  },
  {
    text: 'Advanced Concepts',
    items: [
      {
        text: 'Adding Native Code',
        link: '/guide/adding-native-code',
        items: [
          {
            text: 'Adding Java/Kotlin Code',
            link: '/guide/native-code/android',
          },
          {
            text: 'Adding ObjectiveC/Swift Code',
            link: '/guide/native-code/ios',
          },
          {
            text: 'Generating TypeScript types',
            link: '/guide/native-code/generate-typings',
          }
        ]
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
        text: 'Create Custom Native Elements',
        link: '/guide/create-custom-native-elements',
      },
      {
        text: 'Customizing View Elements',
        link: '/guide/customizing-view-elements',
      },
      {
        text: 'Shared Element Transitions',
        link: '/guide/shared-element-transitions',
      },
      {
        text: 'Multithreading',
        link: '/guide/multithreading',
      },
      {
        text: 'Multi-Window Development',
        link: '/guide/multi-window',
      },
      {
        text: 'Code Sharing',
        link: '/guide/code-sharing',
      },
      // {
      //   text: 'The Layout Process',
      //   link: '/guide/advanced/the-layout-process',
      // },
      {
        text: 'Metadata',
        link: '/guide/metadata',
      },
      {
        text: 'Marshalling',
        link: '/guide/marshalling/',
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
        text: 'Hooks',
        link: '/guide/hooks',
      },
      {
        text: 'Platform Version Handling',
        link: '/guide/platform-version-handling',
      },
      {
        text: 'Widgets for iOS',
        link: '/guide/widgets-ios',
      }
    ],
  },
] as NSSidebarGroup[]
