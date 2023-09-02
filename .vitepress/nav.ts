export default [
  ...(process.env.NODE_ENV !== 'production'
    ? [
        {
          text: '[DEV] Reference',
          link: '/dev-reference',
          activeMatch: '^/dev-reference',
          icon: 'CodeBracketIcon',
        },
      ]
    : []),
  {
    text: 'Docs',
    link: '/',
    activeMatch: '^/(?!plugins|best-practices|api|dev-reference|tutorials|ui)',
    icon: 'BookOpenIcon',
  },

  {
    text: 'Tutorials',
    link: '/tutorials/',
    activeMatch: '^/tutorials',
    icon: 'AcademicCapIcon',
  },
  {
    text: 'Preview',
    link: 'https://preview.nativescript.org',
    icon: 'DevicePhoneMobileIcon',
    target: '_blank',
  },
  {
    text: 'Plugins',
    link: 'https://docs.nativescript.org/plugins/index.html',
    icon: 'CubeTransparentIcon',
  },
  // {
  //   text: 'Best Practices',
  //   link: '/soon',
  //   activeMatch: '^/best-practices',
  //   icon: 'CheckIcon',
  // },
  // {
  //   text: 'Integrations',
  //   link: '/soon',
  //   icon: 'CpuChipIcon',
  // },
  {
    text: 'UI Components',
    link: '/ui/',
    activeMatch: '^/ui',
    icon: 'CubeTransparentIcon',
  },
  {
    text: 'API Reference',
    link: '/api/',
    activeMatch: '^/api',
    icon: 'CodeBracketIcon',
  },
]
