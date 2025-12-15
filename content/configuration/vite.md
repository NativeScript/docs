---
title: Configuring Vite
description: NativeScript apps can be bundled with Vite.
contributors:
  - NathanWalker
---

All NativeScript apps can be bundled using [Vite](https://vite.dev/). To manage the required configuration, we maintain the `@nativescript/vite` package.

## Setup

Install the plugin.

```bash
npm install @nativescript/vite
```

## Quick start (`init`)

To bootstrap an existing NativeScript app with Vite, you can first adjust your config.

### 1. Adjust nativescript.config.ts to use Vite

Make sure your `nativescript.config.ts` includes the following to use Vite as the bundler:

```ts
export default {
  // ...
  bundler: "vite",
  bundlerConfigPath: "vite.config.ts",
  // ...
};
```

### 2. Init the config

Now run from your app root:

```bash
npx nativescript-vite init
```

This will:

- Generate a `vite.config.ts` using the detected project flavor (Angular, Vue, React, Solid, TypeScript, or JavaScript) and the corresponding helper from `@nativescript/vite`.
- Add (or update) the following npm scripts in your app `package.json`:
	- `dev:ios`
	- `dev:android`
	- `dev:server:ios`
	- `dev:server:android`
	- `ios`
	- `android`
- Add the devDependencies `concurrently` and `wait-on`.
- Add the dependency `@valor/nativescript-websockets`.
- Append `.ns-vite-build` to `.gitignore` if it is not already present.

After running `init`, you now have two ways to work with Vite:

1. HMR workflow

```bash
npm run dev:ios
```

2. Standard dev workflow (non-HMR)

```bash
ns debug ios --no-hmr
ns debug android --no-hmr
```

## Configure

The plugin comes with several framework integrations.

### Vue

```ts
import { defineConfig, mergeConfig, UserConfig } from 'vite';
import { vueConfig } from '@nativescript/vite';

export default defineConfig(({ mode }): UserConfig => {
	return mergeConfig(vueConfig({ mode }), {});
});
```

### Angular

```ts
import { defineConfig, mergeConfig, UserConfig } from 'vite';
import { angularConfig } from '@nativescript/vite';

export default defineConfig(({ mode }): UserConfig => {
	return mergeConfig(angularConfig({ mode }), {});
});
```

### Solid

```ts
import { defineConfig, mergeConfig, UserConfig } from 'vite';
import { solidConfig } from '@nativescript/vite';

export default defineConfig(({ mode }): UserConfig => {
	return mergeConfig(solidConfig({ mode }), {});
});
```

### Svelte

```ts
import { defineConfig, mergeConfig, UserConfig } from 'vite';
import { solidConfig } from '@nativescript/vite';

export default defineConfig(({ mode }): UserConfig => {
	return mergeConfig(solidConfig({ mode }), {});
});
```

### React

```ts
import { defineConfig, mergeConfig, UserConfig } from 'vite';
import { reactConfig } from '@nativescript/vite';

export default defineConfig(({ mode }): UserConfig => {
	return mergeConfig(reactConfig({ mode }), {});
});
```

### TypeScript (XML view)

```ts
import { defineConfig, mergeConfig, UserConfig } from 'vite';
import { typescriptConfig } from '@nativescript/vite';

export default defineConfig(({ mode }): UserConfig => {
	return mergeConfig(typescriptConfig({ mode }), {});
});
```

The above config configures most things required to bundle a NativeScript application. 

This page contains examples of common things you might want to change in the [Examples of configurations section](#configuration-examples) - for anything else not mentioned here, refer to the [Vite documentation](https://vite.dev/config/).

## Advanced: HMR update hooks

When using the HMR workflow (for example `npm run dev:ios` / `npm run dev:android` / `npm run dev:visionos`, etc.), you may want to run some custom logic after each HMR batch is applied on device.

`@nativescript/vite` exposes a low-level hook for this:

```ts
import {
  onHmrUpdate,
  offHmrUpdate,
} from '@nativescript/vite/hmr/shared/runtime/hooks';

// Use a stable id so the handler is replaced across hmr updates
const id = 'my-app:name-of-module-or-feature';

onHmrUpdate(({ type, version, changedIds, raw }) => {
  // type: "full-graph" | "delta"
  // version: monotonically increasing batch id
  // changedIds: module ids affected in this batch
  // raw: original websocket message payload
  console.log('[HMR]', { type, version, changedIds });
}, id);

// Optional: unregister when you no longer need it
// offHmrUpdate(id);
```

Why you might use this:

- Debug or observe HMR behavior (what changed, and when) without modifying the bundler.
- Trigger specific app-level actions after an update is applied (for example, refresh caches, re-run a health check, emit telemetry in dev builds).

Notes:

- The `id` is required and prevents duplicate handlers across module reloads; re-registering with the same `id` replaces the previous handler.

### Example: Persisting data across hmr updates

If you need a stable runtime reference across HMR (for example, a singleton that other modules hold onto), a common pattern is to store the data or instance on [import.meta.hot.data](https://vite.dev/guide/api-hmr#hot-data). 

You could also store it on `global` and update it on module re-evaluation by swapping its prototype. Let's explore this global approach with an example of a hypothetical `TabCustomizer` singleton that needs to reset some state on each HMR update.

```ts
import { onHmrUpdate } from '@nativescript/vite/hmr/shared/runtime/hooks';

class TabCustomizer {
  resetAccessory(payload?: any) {
    console.log('payload.changedIds:', payload?.changedIds);
    // ...your reset logic
  }
}

// Keep a stable singleton for runtime references, but make it HMR-updatable by
// swapping its prototype on module re-evaluation.
const g = global as any;
const existing = g.tabCustomizer as TabCustomizer | undefined;

if (existing) {
  Object.setPrototypeOf(existing as any, TabCustomizer.prototype);
} else {
  g.tabCustomizer = new TabCustomizer();
}

export const tabCustomizer = g.tabCustomizer as TabCustomizer;

onHmrUpdate((payload) => {
  // Prefer calling into the stable singleton so the handler remains valid.
  tabCustomizer.resetAccessory(payload);
}, 'tab-customize');
```

Tip: if you only care about specific updates, you can inspect `payload.changedIds` and return early when the batch doesn’t include the modules you care about.

## CLI Flags

When running a NativeScript app the following flags have an effect on the final vite config

### --no-hmr

Disable HMR (enabled by default)

### --env.verbose

Prints verbose logs and the internal config before building

### Additional flags

Additional env flags that are usually passed by the CLI automatically

- `--env.appPath` - path to the app source (same as `appPath` in the `nativescript.config.ts`)
- `--env.appResourcesPath` - path to App_Resources (same as `appResourcesPath` in the `nativescript.config.ts`)
- `--env.nativescriptLibPath` - path to the currently running CLI's library.
- `--env.android` - `true` when running on android
- `--env.ios` - `true` when running on ios
- `--env.platform=<platform>` - for specifying the platform to use. Can be `android` or `ios`, or a custom platform in the future.
- `--env.hmr` - `true` when building with HMR enabled

## Global "magic" variables

We define a few useful globally available variables that you can use to alter logic in your applications.

- `__DEV__` - `true` when vite is building in development mode
  ```ts
  if (__DEV__) {
    // we are running a dev build
  }
  ```
- `__ANDROID__`, `true` when the platform is Android
  ```ts
  if (__ANDROID__) {
    // we are running on android
  }
  ```
- `__IOS__`, `true` when the platform is iOS
  ```ts
  if (__IOS__) {
    // we are running on iOS
  }
  ```
- `__VISIONOS__`, `true` when the platform is visionOS
  ```ts
  if (__VISIONOS__) {
    // we are running on visionOS
  }
  ```

::: details The following variables are also defined, but are primarily intended to be used by NativeScript Core internally, or plugins that wish to use these.

- `__NS_ENV_VERBOSE__` - `true` when `--env.verbose` is set
- `__CSS_PARSER__` - the CSS parser used by NativeScript Core. The value is set based on the `cssParser` value in the `nativescript.config.ts` and defaults to `css-tree`
- `__UI_USE_XML_PARSER__` - a flag used by NativeScript Core to disable the XML parser when it's not used
- `__UI_USE_EXTERNAL_RENDERER__` - a flag used by NativeScript Core to disable registering global modules when an external renderer is used.

:::

## Configuration examples

Here are some common examples of things you may want to do in your `vite.config.ts`.

### Adding a copy rule

```ts
import { defineConfig, mergeConfig, UserConfig } from 'vite';
import { typescriptConfig } from '@nativescript/vite';
import path from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig(({ mode }): UserConfig => {
	const base = typescriptConfig({ mode });
	const projectRoot = path.resolve(__dirname);
	const testImagePath = path.resolve(projectRoot, 'src/ui/image/700x50.png');
	return mergeConfig(base, {
		plugins: [
      viteStaticCopy({
				targets: [{ src: testImagePath, dest: 'ui/image' }],
			})
    ],
	});
});

```

## Plugin API

NativeScript plugins can provide a `nativescript.vite.mjs` file in their root folder (next to `package.json`), and `@nativescript/vite` will include these configs when resolving the final config.

For example, a plugin could return custom processing:

```js
import { createRequire } from "module";
const require = createRequire(import.meta.url);

let postcssConfig = "./postcss.config.js";

try {
  const twV4 = require("@tailwindcss/postcss");
  const nsTailwind = require("@nativescript/tailwind");
  postcssConfig = { plugins: [twV4, nsTailwind] };
} catch (e2) {
  console.warn(
    "Inline PostCSS unavailable, falling back to ./postcss.config.js"
  );
}

export default () => {
  return {
    css: {
      postcss: postcssConfig,
    },
  };
};
```

## Android Notes

Be sure to have a proper security policy in place using something as follows:


1. `App_Resources/Android/src/main/res/xml/network_security.xml`

```xml
<?xml version="1.0" encoding="utf-8"?>
<network-security-config>
    <base-config cleartextTrafficPermitted="true">
        <trust-anchors>
            <certificates src="system" />
            <certificates src="user" />
        </trust-anchors>
    </base-config>
    <domain-config cleartextTrafficPermitted="true">
        <domain includeSubdomains="true">localhost</domain>
        <domain includeSubdomains="true">127.0.0.1</domain>
        <domain includeSubdomains="true">10.0.2.2</domain>
    </domain-config>
</network-security-config>
```

2. Then make sure to reference it in your `AndroidManifest.xml`:

```xml
<application
    ...
    android:networkSecurityConfig="@xml/network_security"
    ... >
    ...
</application>
```

## Troubleshooting

If you run into issues or have questions, please visit the [NativeScript Community Discord](https://nativescript.org/discord).

If you see your app is not building with Vite, ensure that your `nativescript.config.ts` has the correct bundler set:

```ts
export default {
  // ...
  bundler: "vite",    
  bundlerConfigPath: "vite.config.ts",
  // ...
};
```