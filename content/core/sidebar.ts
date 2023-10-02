import type { NSSidebarItem } from '../../.vitepress/theme/vitepress-theme'

export default [
  {
    text: 'Core Reference',
    link: '/core/',
    // hides the sidebar item from the sidebar, but keeps it in the breadcrumbs
    visible: false,
    // todo: add a different type to disable indentation on the root level
    type: 'filetree',
    items: [
      {
        text: '@nativescript/core',
        link: '/core/#nativescript-core',
        items: [
          {
            text: 'Application',
            link: '/core/application',
          },
          {
            text: 'ApplicationSettings',
            link: '/core/application-settings',
          },
          {
            text: 'Color',
            link: '/core/color',
          },
          {
            text: 'Connectivity',
            link: '/core/connectivity',
          },
          {
            text: 'Device',
            link: '/core/device',
          },
          {
            text: 'FileSystem',
            link: '/core/file-system',
          },
          {
            text: 'FPS Meter',
            link: '/core/fps-meter',
          },
          {
            text: 'Http',
            link: '/core/http',
          },
          {
            text: 'ImageCache',
            link: '/core/image-cache',
          },
          {
            text: 'Observable',
            link: '/core/observable',
          },
          {
            text: 'Screen',
            link: '/core/screen',
          },
          {
            text: 'Trace',
            link: '/core/tracing',
          },
          {
            text: 'Utils',
            link: '/core/utils',
          },
          {
            text: 'XmlParser',
            link: '/core/xml-parser',
          },
        ],
      },
    ],
  },
] as NSSidebarItem[]
