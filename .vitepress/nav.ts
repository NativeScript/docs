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
    activeMatch: '^/(?!plugins|best-practices|api|dev-reference|tutorials)',
    icon: 'BookOpenIcon',
  },
  {
    text: 'Preview',
    link: 'https://preview.nativescript.org',
    icon: 'DevicePhoneMobileIcon',
    target: '_blank',
  },
  {
    text: 'Tutorials',
    link: '/tutorials/',
    activeMatch: '^/tutorials',
    icon: 'AcademicCapIcon',
  },
  {
    text: 'Plugins',
    link: '/soon',
    activeMatch: '^/plugins',
    icon: 'CubeTransparentIcon',
  },
  // {
  //   text: 'Best Practices',
  //   link: '/soon',
  //   activeMatch: '^/best-practices',
  //   icon: 'CheckIcon',
  // },
  {
    text: 'Integrations',
    link: '/soon',
    icon: 'CpuChipIcon',
  },
  {
    text: 'API Reference',
    link: '/api/',
    activeMatch: '^/api',
    icon: 'CodeBracketIcon',
  },
]
