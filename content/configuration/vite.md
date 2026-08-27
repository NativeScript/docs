---
title: Configuring Vite
description: NativeScript apps can be bundled with Vite.
contributors:
  - NathanWalker
---

All NativeScript apps can be bundled using [Vite](https://vite.dev/). To manage the required configuration, we maintain the `@nativescript/vite` package.

Starting with NativeScript CLI 9.1, the Vite dev server is fully integrated into the CLI — `ns debug ios` and `ns debug android` start the dev server, pick a free port, and connect the device automatically. No extra npm scripts are needed.

## Setup

Install the plugin.

```bash
npm install @nativescript/vite --save-dev
```

::: tip Note

Ensure it's installed in `devDependencies` since it's only needed for bundling and not at runtime.

:::

## Quick start (`init`)

To bootstrap an existing NativeScript app with Vite, you can first adjust your config.

### 1. Adjust nativescript.config.ts to use Vite

Make sure your `nativescript.config.ts` includes the following to use Vite as the bundler:

```ts
export default {
  // ...
  bundler: 'vite',
  bundlerConfigPath: 'vite.config.mts',
  // ...
}
```

### 2. Init the config

Now run from your app root:

```bash
npx nativescript-vite init
```

This will:

- Generate a `vite.config.mts` using the detected project flavor (Angular, Vue, React, Solid, TypeScript, or JavaScript) and the corresponding helper subpath from `@nativescript/vite`.
- Add the dependency `@valor/nativescript-websockets` (the WebSocket polyfill the HMR client uses to talk to the dev server).
- Append `.ns-vite-build` to `.gitignore` if it is not already present.

::: tip Why `vite.config.mts`?

The `.mts` extension keeps the config ESM without setting `"type": "module"` in the app's `package.json` (which NativeScript apps leave unset), avoiding Vite's `configLoader: 'native'` forward-compat warning.

:::

After running `init`, you have two ways to work with Vite:

1. HMR workflow (default — the CLI starts and manages the dev server for you)

```bash
ns debug ios
ns debug android
```

2. Standard dev workflow (non-HMR)

```bash
ns debug ios --no-hmr
ns debug android --no-hmr
```

## Configure

The plugin comes with several framework integrations. Each is imported from its own subpath so unrelated framework tooling is never loaded.

### Vue

```ts
import { defineConfig, mergeConfig, UserConfig } from 'vite'
import { vueConfig } from '@nativescript/vite/vue'

export default defineConfig(({ mode }): UserConfig => {
  return mergeConfig(vueConfig({ mode }), {})
})
```

### Angular

```ts
import { defineConfig, mergeConfig, UserConfig } from 'vite'
import { angularConfig } from '@nativescript/vite/angular'

export default defineConfig(({ mode }): UserConfig => {
  return mergeConfig(angularConfig({ mode }), {})
})
```

### Solid

```ts
import { defineConfig, mergeConfig, UserConfig } from 'vite'
import { solidConfig } from '@nativescript/vite/solid'

export default defineConfig(({ mode }): UserConfig => {
  return mergeConfig(solidConfig({ mode }), {})
})
```

### React

```ts
import { defineConfig, mergeConfig, UserConfig } from 'vite'
import { reactConfig } from '@nativescript/vite/react'

export default defineConfig(({ mode }): UserConfig => {
  return mergeConfig(reactConfig({ mode }), {})
})
```

### TypeScript (XML view)

```ts
import { defineConfig, mergeConfig, UserConfig } from 'vite'
import { typescriptConfig } from '@nativescript/vite/typescript'

export default defineConfig(({ mode }): UserConfig => {
  return mergeConfig(typescriptConfig({ mode }), {})
})
```

### JavaScript (XML view)

```ts
import { defineConfig, mergeConfig } from 'vite'
import { javascriptConfig } from '@nativescript/vite/javascript'

export default defineConfig(({ mode }) => {
  return mergeConfig(javascriptConfig({ mode }), {})
})
```

The above config configures most things required to bundle a NativeScript application.

This page contains examples of common things you might want to change in the [Examples of configurations section](#configuration-examples) - for anything else not mentioned here, refer to the [Vite documentation](https://vite.dev/config/).

## Type checking

Type checking diagnostics come from the project's `tsconfig.json`. By default, the build follows `compilerOptions.noEmitOnError` to decide whether type errors should fail the build. If you want to override that behavior for Vite, pass a `typeCheck` option to the framework helper:

```ts
import { defineConfig } from 'vite'
import { vueConfig } from '@nativescript/vite/vue'

export default defineConfig(({ mode }) =>
  vueConfig({ mode }, { typeCheck: 'warn' }),
)
```

Supported values are `typeCheck: 'error' | 'warn' | 'off'`.
You can also use an object form such as `typeCheck: { failOnError: false }`.
For temporary overrides, `NS_VITE_TYPECHECK=warn` or `--env.typecheck=warn` will force warn mode for a run.
If you want type errors to stay non-fatal without any Vite override, set `"noEmitOnError": false` in your project's `tsconfig.json`.

## Dev server and HMR

The NativeScript CLI owns the dev server lifecycle. For each session it picks:

- **Port** — the first free port at or above `NS_HMR_PORT` (default `5173`), the same way `vite` moves off a busy port. Whatever it picks is baked into the device URLs, bound by the dev server and (on Android) tunnelled with `adb reverse`, so all three always agree.
- **Staging directory** — `.ns-vite-build/<platform>`, so iOS and Android builds never overwrite each other's output.

The environment settings described below only need to be visible to the `ns` process — the CLI propagates them (and the values it picks) to the dev server it spawns.

### Running two platforms at once

Start both; nothing to configure:

```bash
# Terminal 1
ns debug ios       # dev server on 5173

# Terminal 2
ns debug android   # 5173 is busy → dev server on 5174
```

Each session gets its own port and staging directory.

### Android: automatic `adb reverse`

For Android HMR the CLI automatically runs `adb reverse tcp:<port> tcp:<port>` for the session's dev-server port, so the device reaches the dev server through the ADB tunnel at `127.0.0.1:<port>`. Relevant opt-outs:

- `NS_HMR_NO_ADB_REVERSE=1` — skip the tunnel and use `10.0.2.2`.
- `NS_HMR_PREFER_LAN_HOST=1` — physical device over Wi-Fi; emit the host's LAN IP.
- `NS_HMR_HOST=<host[:port]>` — point the device at an explicit origin (CI / tunnels).

### Advanced: running `vite serve` yourself

The dev server is a plain `vite serve -- --env.<platform> --env.hmr` invocation. You can run it standalone for diagnostics, but do **not** run it alongside `ns run`/`ns debug` for the same platform — both would try to bind the same port. CLI-managed is the supported default.

## Environment variables

All flags are read from the environment of the `ns` process (the CLI forwards them to the dev server it spawns).

### Dev server & connectivity

| Environment variable             | Purpose                                                                                                               | Default                     |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| `NS_HMR_PORT`                    | Preferred Vite dev-server port; the CLI moves to the next free port when it is taken                                  | `5173`                      |
| `NS_HMR_STRICT_PORT`             | Fail instead of moving when `NS_HMR_PORT` is taken (Vite's `strictPort`) — for tunnels / CI that forward a fixed port | unset                       |
| `NS_HMR_HOST`                    | Explicit `host[:port]` origin baked into device URLs (CI / tunnels)                                                   | auto-detected               |
| `NS_HMR_PROTO`                   | Force `http` or `https` for device URLs, overriding the `NS_HTTPS` default                                            | derived from `NS_HTTPS`     |
| `NS_HMR_PREFER_LAN_HOST`         | `1` to emit the host's LAN IP — for a physical Android device over Wi-Fi                                              | unset                       |
| `NS_HMR_NO_ADB_REVERSE`          | `1` to skip the automatic `adb reverse` tunnel and use `10.0.2.2`                                                     | unset                       |
| `NS_HTTPS`                       | `1`/`true` to serve the dev server over TLS (also switches the HMR socket to `wss`)                                   | unset                       |
| `NS_HTTPS_KEY` / `NS_HTTPS_CERT` | Paths to the TLS key and certificate files used when `NS_HTTPS` is enabled                                            | unset                       |
| `NS_VITE_DIST_DIR`               | Project-relative staging directory used for Vite output before the NativeScript CLI copies it into the platform app   | `.ns-vite-build/<platform>` |

### Build & tooling

| Environment variable                      | Purpose                                                                                                                                                             | Default              |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| `NS_VITE_VERBOSE`                         | `1`/`true` for verbose build logs (same as `--env.verbose`)                                                                                                         | unset                |
| `NS_VITE_TYPECHECK`                       | Type-check mode override: `error`, `warn`, or `off` (see [Type checking](#type-checking))                                                                           | from `tsconfig.json` |
| `NS_VITE_TYPECHECK_LOG`                   | `0`/`false` to suppress printing individual type diagnostics                                                                                                        | enabled              |
| `NS_VITE_PROGRESS_OVERLAY`                | `0`/`false` to disable the on-device HMR progress overlay                                                                                                           | enabled              |
| `NS_NATIVE_ES_CLASSES`                    | `1` to skip the `@NativeClass` ES5 downlevel and let the iOS runtime register plain ES classes natively (same as `--env.nativeESClasses`; never applies to Android) | unset                |
| `NS_APP_COMPONENTS`                       | Comma-separated paths to custom Android `Activity`/`Application` classes to include in the bundle                                                                   | unset                |
| `NS_VENDOR_INCLUDE` / `NS_VENDOR_EXCLUDE` | Comma-separated package names to force into / keep out of the dev-session vendor bundle                                                                             | auto-detected        |
| `NS_DISABLE_OPTIMIZEDEPS`                 | `1` to disable Vite's dependency pre-bundling discovery                                                                                                             | unset                |

### Angular-specific

| Environment variable          | Purpose                                                                              | Default |
| ----------------------------- | ------------------------------------------------------------------------------------ | ------- |
| `NS_VITE_ANGULAR_LIVE_RELOAD` | `0`/`false`/`off`/`no` to disable the Analog `liveReload` component-update path      | enabled |
| `NS_STRICT_NG_LINK`           | `1` to make Angular partial-compilation linking errors fatal instead of warnings     | unset   |
| `NS_ENABLE_ROLLUP_LINKER`     | `1` to run the Angular linker during the Rollup/Rolldown build (always on under HMR) | unset   |

::: details Diagnostics and escape hatches (rarely needed)

These exist for profiling and unusual workflows; the defaults are correct for normal development.

- `NS_CORE_PER_MODULE=1` — serve `@nativescript/core` per-module instead of the single-eval core bundle (for live-editing core source in the NativeScript monorepo).
- `NS_DEPS_PER_MODULE=1` — serve `node_modules` files per-module instead of the single-eval deps bundle (for `patch-package` workflows that edit `node_modules` mid-session).
- `NS_VITE_HMR_DISABLE_POPULATE=1` — disable the server's background transform pre-population when profiling.
- `NS_VITE_HMR_DISABLE_BOOT_RECORDING=1` — disable recording the boot URL set (used to speed up subsequent boots).
- `NS_VITE_HMR_DISABLE_NSM_MEMO=1` — disable the served-module response memo cache.
- `NS_VITE_HMR_TRANSFORM_CONCURRENCY=<n>` — override the transform fan-out (default `8`).
- `NS_VITE_HMR_TRANSFORM_CACHE_MS=<ms>` — override the transform cache TTL.
- `NS_VITE_HMR_BOOT_TRACE_IDLE_MS=<ms>` / `NS_VITE_HMR_BOOT_RECORD_IDLE_MS=<ms>` / `NS_VITE_HMR_BOOT_TRACE_PROGRESS_EVERY=<n>` — tune boot tracing/recording windows when profiling boot.
- `NS_DEBUG_NATIVECLASS=1` — verbose logs from the `@NativeClass` transform.
- `NS_CORE_EXTERNAL_DEBUG=1` — verbose logs from the `@nativescript/core` URL externalizer.
- `NS_HMR_SELF_COMPILE_TEMPLATE=1` — (Vue) prefer self-compiled SFC template variants when serving.

:::

## Advanced: HMR update hooks

When running with HMR (the default `ns debug` workflow), you may want to run some custom logic after each HMR batch is applied on device.

`@nativescript/vite` exposes a low-level hook for this:

```ts
import {
  onHmrUpdate,
  offHmrUpdate,
} from '@nativescript/vite/hmr/shared/runtime/hooks'

// Use a stable id so the handler is replaced across hmr updates
const id = 'my-app:name-of-module-or-feature'

onHmrUpdate(({ type, version, changedIds, raw }) => {
  // type: "full-graph" | "delta"
  // version: monotonically increasing batch id
  // changedIds: module ids affected in this batch
  // raw: original websocket message payload
  console.log('[HMR]', { type, version, changedIds })
}, id)

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
import { onHmrUpdate } from '@nativescript/vite/hmr/shared/runtime/hooks'

class TabCustomizer {
  resetAccessory(payload?: any) {
    console.log('payload.changedIds:', payload?.changedIds)
    // ...your reset logic
  }
}

// Keep a stable singleton for runtime references, but make it HMR-updatable by
// swapping its prototype on module re-evaluation.
const g = global as any
const existing = g.tabCustomizer as TabCustomizer | undefined

if (existing) {
  Object.setPrototypeOf(existing as any, TabCustomizer.prototype)
} else {
  g.tabCustomizer = new TabCustomizer()
}

export const tabCustomizer = g.tabCustomizer as TabCustomizer

onHmrUpdate((payload) => {
  // Prefer calling into the stable singleton so the handler remains valid.
  tabCustomizer.resetAccessory(payload)
}, 'tab-customize')
```

Tip: if you only care about specific updates, you can inspect `payload.changedIds` and return early when the batch doesn’t include the modules you care about.

## CLI Flags

When running a NativeScript app the following flags have an effect on the final vite config

### --no-hmr

Disable HMR (enabled by default)

### --env.verbose

Prints verbose logs and the internal config before building

### --env.typecheck

Override the type-check mode for a run, e.g. `--env.typecheck=warn` (see [Type checking](#type-checking))

### --env.nativeESClasses

Skip the `@NativeClass` ES5 downlevel on Apple targets (same as `NS_NATIVE_ES_CLASSES=1`)

### Additional flags

Additional env flags that are passed by the CLI automatically

- `--env.android` - `true` when running on Android
- `--env.ios` - `true` when running on iOS
- `--env.visionos` - `true` when running on visionOS
- `--env.platform=<platform>` - for specifying the platform to use. Can be `android`, `ios`, or `visionos`.
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
- `__APPLE__`, `true` when the platform is iOS or visionOS
  ```ts
  if (__APPLE__) {
    // we are running on an Apple platform
  }
  ```

::: details The following variables are also defined, but are primarily intended to be used by NativeScript Core internally, or plugins that wish to use these.

- `__NS_ENV_VERBOSE__` - `true` when `--env.verbose` is set
- `__NS_WEBPACK__` - always `false` under Vite; lets plugins detect which bundler built the app
- `__CSS_PARSER__` - the CSS parser used by NativeScript Core (`css-tree` under Vite)
- `__UI_USE_XML_PARSER__` - a flag used by NativeScript Core to disable the XML parser when it's not used
- `__UI_USE_EXTERNAL_RENDERER__` - a flag used by NativeScript Core to disable registering global modules when an external renderer is used.
- `__CI__` - `true` when the build runs in a CI environment
- `__TEST__` - `false` in app builds; various ecosystems (React, for example) check this global

:::

## Configuration examples

Here are some common examples of things you may want to do in your `vite.config.mts`.

### Adding a copy rule

```ts
import { defineConfig, mergeConfig, UserConfig } from 'vite'
import { typescriptConfig } from '@nativescript/vite/typescript'
import path from 'path'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig(({ mode }): UserConfig => {
  const base = typescriptConfig({ mode })
  const projectRoot = path.resolve(__dirname)
  const testImagePath = path.resolve(projectRoot, 'src/ui/image/700x50.png')
  return mergeConfig(base, {
    plugins: [
      viteStaticCopy({
        targets: [{ src: testImagePath, dest: 'ui/image' }],
      }),
    ],
  })
})
```

## Plugin API

NativeScript plugins can provide a `nativescript.vite.mjs` file in their root folder (next to `package.json`), and `@nativescript/vite` will include these configs when resolving the final config.

For example, a plugin could return custom processing:

```js
import { createRequire } from 'module'
const require = createRequire(import.meta.url)

let postcssConfig = './postcss.config.js'

try {
  const twV4 = require('@tailwindcss/postcss')
  const nsTailwind = require('@nativescript/tailwind')
  postcssConfig = { plugins: [twV4, nsTailwind] }
} catch (e2) {
  console.warn(
    'Inline PostCSS unavailable, falling back to ./postcss.config.js',
  )
}

export default () => {
  return {
    css: {
      postcss: postcssConfig,
    },
  }
}
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
  bundler: 'vite',
  bundlerConfigPath: 'vite.config.mts',
  // ...
}
```
