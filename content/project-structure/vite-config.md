---
title: vite.config.mts
description: NativeScript apps can be bundled with Vite, giving you flexibility to configure any way you need.
contributors:
  - NathanWalker
---

At anytime you can switch to Vite build tooling if you prefer. The bundling process can be further customized via the `vite.config.mts`.

### Default vite config

By default, the vite config will automatically configure everything for your project, and should looks something like this:

```ts
import { defineConfig, mergeConfig, UserConfig } from 'vite'
import { typescriptConfig } from '@nativescript/vite/typescript'

export default defineConfig(({ mode }): UserConfig => {
  return mergeConfig(typescriptConfig({ mode }), {})
})
```

::: tip Read More

:point_right: [NativeScript Vite Reference](/configuration/vite)

:::
