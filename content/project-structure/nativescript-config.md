---
title: nativescript.config.ts
contributors:
  - rigor789
  - Ombuweb
  - NathanWalker
---

The `nativescript.config.ts` is a central place to configure your project. It allows you to configure your project structure, application id, runtime related flags and more.

::: info Note about the `.ts` extension
You can author the config file as plain `.js` file as well, however we recommend sticking with the `.ts` extension even if your project doesn't use TypeScript, because most editors will provide autocompletion in the `.ts` file.
:::

By default a config looks somewhat like the following

```ts
import { NativeScriptConfig } from '@nativescript/core'

export default {
  id: 'org.nativescript.app',
  appPath: 'app',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none',
  },
} as NativeScriptConfig
```

::: tip Read More

:point_right: [NativeScript Config Reference](/configuration/nativescript)

:::
