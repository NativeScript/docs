import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'org.nativescript.examplesApp',
  appPath: 'src',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  },
  ios: {
    SPMPackages: [
      {
        name: 'SimulatorStatusMagic',
        repositoryURL: 'https://github.com/shinydevelopment/SimulatorStatusMagic.git',
        libs: ['SimulatorStatusMagic'],
        version: '2.7.0'
      }
    ]
  },
  hooks: [
    {
      type: 'after-install',
      script: './scripts/grant-demo-permissions.js'
    }
  ]
} as NativeScriptConfig;
