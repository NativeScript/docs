---
title: Configuring your Project
contributors:
  - rigor789
  - Ombuweb
  - NathanWalker
  - achou11
---

The `nativescript.config.ts` is a central place to configure your project. It allows you to configure your project structure, application id, runtime related flags and more.

::: info Note about the `.ts` extension
You can author the config file as plain `.js` file as well. We recommend sticking with the `.ts` extension even if your project doesn't use TypeScript, because most editors will provide autocompletion in the `.ts` file.
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

## Configuration Reference

### id

```ts
id: string = 'com.mycompany.myapp'
```

Controls the Application ID of your app, this setting can be overridden per platform via [ios.id](#ios-id) and [android.id](#android-id).

### main

```ts
main: string = './src/custom-main.ts'
```

Sets the entry point to your app. This value is usually set in [package.json](/project-structure/package-json) in the `main` field.

### appPath

```ts
appPath: string = 'custom-src'
```

Specifies where your app source is located, usually `src` or `app`.

### appResourcesPath

```ts
appResourcesPath: string = '../shared/app_resources'
```

Specifies where your app resources are located, usually `App_Resources`.

<!--
### shared

```ts
shared: boolean = true
```

TODO: document or remove
-->

<!--
### previewAppSchema

```ts
previewAppSchema: string = ""
```

TODO: remove from config - this is old stuff.
-->

<!--
### overridePods

```ts
overridePods: string = ""
```

TODO: document or remove?
-->

### webpackConfigPath

```ts
webpackConfigPath: string = 'custom-webpack.config.js'
```

Specifies the [webpack config](./webpack) location. The default is `webpack.config.js` in the root.

### projectName (8.8+)

```ts
projectName: string = 'projectName'
```

Specifies the name of the project. The default is the basename of the project directory.

### profiling

```ts
profiling: 'counters' | 'timeline' | 'lifecycle' = "timeline"
```

Enable profiler logs. In most cases when profiling, you would use `timeline`.

<!-- TODO: document profiling and link to it -->

### cssParser

```ts
cssParser: 'rework' | 'nativescript' | 'css-tree' = "css-tree"
```

Set the default CSS parser that NativeScript will use, by default it uses `css-tree`.

### ignoredNativeDependencies

```ts
ignoredNativeDependencies: string[] = ['@nativescript/imagepicker']
```

A list of npm package names to ignore when attaching native dependencies to the build.

<!-- textlint-disable -->

### cli

<!-- textlint-enable -->

```ts
cli: Object = {}
```

See [CLI Configuration Reference](#cli-configuration-reference)

### android

```ts
android: Object = {}
```

See [Android Configuration Reference](#android-configuration-reference)

### ios

```ts
ios: Object = {}
```

See [iOS Configuration Reference](#ios-configuration-reference)

### hooks

```ts
hooks: Array = []
```

See [Hooks Configuration Reference](#hooks-configuration-reference)

### security

NativeScript supports dynamic `import()` from remote URLs. This is useful during development but carries security implications in production since NativeScript code has **direct access to native platform APIs** (file system, keychain, network, camera, etc.).

| Mode | Remote Modules |
|------|----------------|
| **Debug** | ✅ Always allowed |
| **Production** | ❌ Blocked by default |

#### Enabling Remote Modules in Production

If you need remote ES modules in production, explicitly opt-in:

```typescript
import { NativeScriptConfig } from '@nativescript/core'

export default {
  id: 'org.nativescript.myapp',
  appPath: 'src',
  
  security: {
    allowRemoteModules: true
  }
} as NativeScriptConfig
```

#### Using an Allowlist (Recommended)

Restrict to specific trusted origins:

```typescript
export default {
  // ...
  security: {
    allowRemoteModules: true,
    remoteModuleAllowlist: [
      'https://cdn.yourcompany.com/modules/',
      'https://esm.sh/@yourorg/'
    ]
  }
} as NativeScriptConfig
```

The allowlist uses **prefix matching** — a URL is allowed if it starts with any entry.

#### Security Best Practices

- **Keep production secure by default** - Don't enable unless necessary
- **Use narrow allowlists** - Specific paths, not broad domains
- **Pin versions in URLs** - Use immutable, versioned URLs
- **Never use user-controlled URLs** - Injection vulnerability risk

For comprehensive security guidance, see the [Security Guide](/guide/security).

## CLI Configuration Reference

### cli.packageManager

::: tip Note
`yarn2` is experimental and available in `nativescript@8.5.0` or newer.
:::

```ts
cli.packageManager: 'npm' | 'yarn' | 'pnpm' | 'yarn2' = 'yarn';
```

Sets the package manager to use for this project.

Defaults to the package manager set with the CLI (`ns package-manager set yarn`), or `npm` if not set.

### cli.pathsToClean

```ts
pathsToClean?: string[];
```

**Overrides** the files or paths to clean when running the `ns clean` command.

### cli.additionalPathsToClean

```ts
additionalPathsToClean?: string[];
```

Additional files or paths to clean when running the `ns clean` command, the paths are appended to the default list of paths.

## Android Configuration Reference

### <span>android.id</span>

```ts
android.id: string = 'com.mycompany.myapp.android';
```

Controls the Application ID of your Android app, this setting overrides the value set in [id](#id).

See also [ios.id](#ios-id).

### android.discardUncaughtJsExceptions

```ts
android.discardUncaughtJsExceptions: boolean = true;
```

Discard any uncaught JS exceptions. This can be useful in production environments where you don't want your app to crash in case an unexpected JS exception is thrown.

### android.v8Flags

```ts
android.v8Flags: string = "--expose_gc --trace=true";
```

Flags passed to the v8 runtime. `--expose_gc` is **required** for the runtime to function properly.

For a list of [available v8 flags see this Gist](https://gist.github.com/cevek/ef1c9761a67d80d642f98cc75885bf31).

### android.codeCache

```ts
android.codeCache: boolean = true;
```

Enables the v8 code-cache.

<!-- TODO: document more about code cache in general and link to it here. -->

<!--
### android.profilerOutputDir

```ts
android.profilerOutputDir: string = "./profiling";
```

Sets the path where the profiler outputs data.

TODO: check if this still exists/works
-->

### android.gcThrottleTime

```ts
android.gcThrottleTime: number = 20; // in ms
```

Trigger a gc periodically (in `ms`). Defaults to `0` (disabled).

### android.markingMode

```ts
android.markingMode: 'none' | 'full';
```

Sets the default gc marking mode, defaults to `none`.

::: warning Deprecated value

`full` has been deprecated and it's not recommended.

:::

### android.handleTimeZoneChanges

```ts
android.handleTimeZoneChanges: boolean = true;
```

Notify the app when the timezone changes, defaults to `false`.

### android.maxLogcatObjectSize

```ts
android.maxLogcatObjectSize: number = 9999;
```

Sets the max length of a single output string. Defaults to `1024`.

### android.forceLog

```ts
android.forceLog: boolean = true;
```

Enable logging in Release mode. Defaults to `false`.

### android.memoryCheckInterval

```ts
android.memoryCheckInterval: number; // in ms
```

Sets the frequency of the `freeMemoryRatio` check.

### android.freeMemoryRatio

```ts
android.freeMemoryRatio: number;
```

Percentage of memory (`0.0` to `1.0`) before it forces a GC. Defaults to `0` (disabled).

When set, it also requires [memoryCheckInterval](#android-memorycheckinterval) to be set.

### android.enableLineBreakpoints

```ts
android.enableLineBreakpoints: boolean;
```

Used for advanced debugging.

<!-- TODO: remove or document "advanced debugging" whatever that means... -->

### android.enableMultithreadedJavascript

```ts
android.enableMultithreadedJavascript: boolean;
```

Enable the multithreaded JavaScript engine. Defaults to `false`.

## iOS Configuration Reference

### <span>ios.id</span>

```ts
ios.id: string = 'com.mycompany.myapp.ios';
```

Controls the Bundle Identifier of your iOS app, this setting overrides the value set in [id](#id).

See also [android.id](#android-id).

### ios.discardUncaughtJsExceptions

```ts
ios.discardUncaughtJsExceptions: boolean = true;
```

Discard any uncaught JS exceptions. This can be useful in production environments where you don't want your app to crash in case an unexpected JS exception is thrown.

### ios.SPMPackages

::: tip

SPM packages are available in `nativescript@8.5.0` or newer.

:::

```ts
ios.SPMPackages: Array<{
  name: string;
  libs: Array<string>;
  repositoryURL: string;
  version: string;
  /**
   * (8.9+) If you have more targets (like widgets for example),
   * you can list their names here to include the Swift Package with them.
   */
  targets?: string[];
}>
```

Allows defining Swift Package Manager dependencies that should be installed into the project. Any dependencies listed here, similar to Cocoapods dependencies will be built with the project. This means you can generate typings for them via `ns typings ios` for TypeScript usage.

#### Example

```ts
// ...
ios: {
  SPMPackages: [
    {
      name: 'swift-numerics',
      libs: ['Numerics'],
      repositoryURL: 'https://github.com/apple/swift-numerics.git',
      version: '1.0.0',
    },
  ]
}
```

### ios.NativeSource

::: tip

NativeSource config option is available in `nativescript@8.9.0` or newer.

:::

```ts
ios.NativeSource: Array<{
  name: string;
  path: string;
}>
```

Include any native source code from anywhere in the project (or workspace). Glob patterns are fully supported.

#### Example

- Include any `.swift` files anywhere within the project `src` directory:

```ts
// ...
ios: {
  NativeSource: [
    {
      name: 'ProjectPlatformSrc',
      path: './src/**/*.swift'
    }
  ],
}
```

This will create a file reference folder named `ProjectPlatformSrc` within the generated Xcode project containing any .swift files found anywhere within the project `src` directory.

- Include any `.swift` files anywhere within the project `src` directory, including any (Swift, Obj-C impl/headers, as well as any module.modulemap files) within a workspace `packages` or `libs` dir:

```ts
// ...
ios: {
  NativeSource: [
    {
      name: 'ProjectPlatformSrc',
      path: './src/**/*.swift'
    },
    {
      name: 'Auth',
      path: '../../packages/**/*.{swift,m,h,modulemap}'
    },
    {
      name: 'Purchasing',
      path: '../../libs/**/*.{swift,m,h,modulemap}'
    }
  ],
}
```

## Hooks Configuration Reference

```ts
hooks: [
  {
    type: 'before-<hookName>' | 'after-<hookName>',
    script: './path/to/script.js',
  },
]
```

Allows defining project-persistent hooks.

Available hooks (prefix with `before-` or `after-`):

- `buildAndroidPlugin` - Builds aar file for Android plugin, runs during `prepareNativeApp`
- `buildAndroid` - Builds Android app
- `buildIOS` - Builds iOS app
- `checkEnvironment` - Validate project env, runs during `ns doctor`, `ns clean`, and most build commands
- `checkForChanges` - Changes occurred during `watch`
- `install` - Application installed to device/emulator
- `prepare` - Compiles webpack and prepares native app in platforms folder
- `prepareNativeApp` - Preparing the actual native app, runs during `prepare`/`watch` hook
- `resolveCommand` - Resolves command and arguments, runs before all CLI commands
- `watch` - Set up watchers for live sync, runs during `prepare` hook
- `watchPatterns` - Set up watch patterns, runs during `watch` hook

<!-- TODO: check if we are missing some hooks here, ie. before-gradleArgs? -->

## Security Configuration Reference

NativeScript provides security configuration options to control sensitive runtime behaviors, particularly around remote code execution via ES module imports.

::: tip
For comprehensive security guidance and best practices, see the [Security Guide](/guide/security).
:::

### security.allowRemoteModules

```ts
security.allowRemoteModules: boolean = false;
```

Enable remote ES module loading in production builds.

| Mode | Remote Modules |
|------|----------------|
| **Debug** (local development) | ✅ Always allowed |
| **Production** (Release builds) | ❌ Blocked by default |

When `false` (the default), any attempt to `import("https://...")` in production will throw an error. This is a security measure because NativeScript code has **direct access to native platform APIs** (file system, keychain, network, camera, etc.).

```ts
export default {
  // ...
  security: {
    allowRemoteModules: true
  }
} as NativeScriptConfig
```

::: warning Security Implications
Remote modules bypass App Store/Play Store code review and can access any native API your app has access to. Only enable this if you have a specific, justified need and understand the implications.
:::

### security.remoteModuleAllowlist

```ts
security.remoteModuleAllowlist: string[] = [];
```

Restrict remote modules to specific URL prefixes. Only used when `allowRemoteModules` is `true`.

The allowlist uses **prefix matching** — a URL is allowed if it starts with any entry in the list.

```ts
export default {
  // ...
  security: {
    allowRemoteModules: true,
    remoteModuleAllowlist: [
      'https://cdn.yourcompany.com/modules/',
      'https://esm.sh/@yourorg/'
    ]
  }
} as NativeScriptConfig
```

#### Allowlist Examples

| Allowlist Entry | Allowed URLs | Blocked URLs |
|-----------------|--------------|--------------|
| `https://cdn.example.com/` | `https://cdn.example.com/mod.js` | `https://other.com/mod.js` |
| `https://esm.sh/@myorg/` | `https://esm.sh/@myorg/pkg` | `https://esm.sh/@other/pkg` |
| `https://unpkg.com/` | `https://unpkg.com/lodash` | `http://unpkg.com/lodash` (http blocked) |

If the allowlist is empty or not provided (and `allowRemoteModules` is `true`), all HTTPS URLs are allowed — this is **not recommended** for production.

### Error Messages

When remote module loading is blocked, you'll see clear error messages:

```
// Remote modules disabled
Remote ES modules are not allowed in production. URL: https://example.com/mod.js. 
Enable via security.allowRemoteModules in nativescript.config.ts

// URL not in allowlist
Remote URL not in security.remoteModuleAllowlist: https://untrusted.com/mod.js
```

### Best Practices

1. **Keep production secure by default** — Don't enable `allowRemoteModules` unless necessary
2. **Use narrow allowlists** — Specific paths, not broad domains
3. **Pin versions in URLs** — Use immutable, versioned URLs over mutable endpoints
4. **Never use user-controlled URLs** — Avoid injection vulnerabilities

For more details on security implications and additional best practices, see the [Security Guide](/guide/security).
