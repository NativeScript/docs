---
title: vite.config.ts
description: NativeScript apps can be bundled with Vite, giving you flexibility to configure it any way you need it.
contributors:
  - NathanWalker
---

At anytime you can switch to Vite build tooling if you prefer. The bundling process can be further customized via the `vite.config.ts`.

### Default vite config

By default, the vite config will automatically configure everything for your project, and should looks something like this:

```js
import { defineConfig, mergeConfig, UserConfig } from 'vite'
import { typescriptConfig } from '@nativescript/vite'

export default defineConfig(({ mode }): UserConfig => {
  return mergeConfig(typescriptConfig({ mode }), {})
})
```

::: tip Read More

:point_right: [NativeScript Vite Reference](/configuration/vite)

:::
