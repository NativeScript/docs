---
title: NativeScriptConfig
titleTemplate: :title - API / NativeScript
description: "IMPORTANT: this is not generated automatically due to this issue: https://github.com/microsoft/TypeScript/issues/36763 the reference path above will get rewr..."
contributors: false
---

Defined in: [config/config.interface.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/config/config.interface.ts)

IMPORTANT: this is not generated automatically due to this issue:
https://github.com/microsoft/TypeScript/issues/36763
the reference path above will get rewritten and break on compilation unless kept here
Once issue is resolve we can remove this index.d.ts from repo and go back to auto generation on tsc

## Properties

### android?

```ts
optional android?: IConfigAndroid;
```

Defined in: [config/config.interface.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/config/config.interface.ts)

Android specific configurations
Various Android specific configurations including Android runtime flags.

***

### appPath?

```ts
optional appPath?: string;
```

Defined in: [config/config.interface.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/config/config.interface.ts)

Path to the app source directory
This is often the `src` or `app` directory however can be changed.

***

### appResourcesPath?

```ts
optional appResourcesPath?: string;
```

Defined in: [config/config.interface.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/config/config.interface.ts)

App_Resources path
This is often at the root or inside `src` or `app` directory however can be anywhere.

***

### bundler?

```ts
optional bundler?: BundlerType;
```

Defined in: [config/config.interface.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/config/config.interface.ts)

Bundler to use for this project.
Default is 'webpack'.

***

### bundlerConfigPath?

```ts
optional bundlerConfigPath?: string;
```

Defined in: [config/config.interface.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/config/config.interface.ts)

Custom bundler config path
For example, `vite.config.ts`, `webpack.config.js`, etc.
The default is `webpack.config.js` however you can use a custom name and place elsewhere.

***

### cli?

```ts
optional cli?: IConfigCLI;
```

Defined in: [config/config.interface.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/config/config.interface.ts)

Set cli options

***

### cssParser?

```ts
optional cssParser?: "rework" | "nativescript" | "css-tree";
```

Defined in: [config/config.interface.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/config/config.interface.ts)

Set the default CSS parser that NativeScript will use.
Default: css-tree

***

### embed?

```ts
optional embed?: IConfigEmbed;
```

Defined in: [config/config.interface.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/config/config.interface.ts)

For embedding into existing platform host projects.

***

### hooks?

```ts
optional hooks?: IConfigHook[];
```

Defined in: [config/config.interface.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/config/config.interface.ts)

Set project persistent hooks to run

***

### id?

```ts
optional id?: string;
```

Defined in: [config/config.interface.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/config/config.interface.ts)

App's bundle id
Used for both iOS and Android if they use the same bundle id. You can override per platform in the respective platform specific configurations.

***

### ignoredNativeDependencies?

```ts
optional ignoredNativeDependencies?: string[];
```

Defined in: [config/config.interface.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/config/config.interface.ts)

Optionally specify a list of npm package names for which you would like the NativeScript CLI to ignore when attaching native dependencies to the build

***

### ios?

```ts
optional ios?: IConfigIOS;
```

Defined in: [config/config.interface.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/config/config.interface.ts)

iOS specific configurations
Various iOS specific configurations including iOS runtime flags.

***

### logScriptLoading?

```ts
optional logScriptLoading?: boolean;
```

Defined in: [config/config.interface.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/config/config.interface.ts)

Enable runtime logging of script loading.

***

### main?

```ts
optional main?: string;
```

Defined in: [config/config.interface.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/config/config.interface.ts)

App's main entry file - this setting overrides the value set in package.json

***

### overridePods?

```ts
optional overridePods?: string;
```

Defined in: [config/config.interface.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/config/config.interface.ts)

***

### previewAppSchema?

```ts
optional previewAppSchema?: string;
```

Defined in: [config/config.interface.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/config/config.interface.ts)

***

### profiling?

```ts
optional profiling?: InstrumentationMode;
```

Defined in: [config/config.interface.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/config/config.interface.ts)

Enable profiling for the application. Default: no profiling
In most cases when profiling, you will want to use "timeline"

***

### projectName?

```ts
optional projectName?: string;
```

Defined in: [config/config.interface.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/config/config.interface.ts)

Custom platform project name.
By default, the platforms/\{platform\}/\{name\} is based on the basename of the project directory.
You can override that to use a name of your choice by setting this.

***

### security?

```ts
optional security?: ISecurityConfig;
```

Defined in: [config/config.interface.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/config/config.interface.ts)

Security configurations

***

### shared?

```ts
optional shared?: boolean;
```

Defined in: [config/config.interface.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/config/config.interface.ts)

***

### showErrorDisplay?

```ts
optional showErrorDisplay?: boolean;
```

Defined in: [config/config.interface.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/config/config.interface.ts)

Show visual error display when an uncaught JS exception occurs.

***

### visionos?

```ts
optional visionos?: IConfigVisionOS;
```

Defined in: [config/config.interface.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/config/config.interface.ts)

Vision Pro specific configurations
Various VisionOS specific configurations including iOS runtime flags.

***

### ~~webpackConfigPath?~~

```ts
optional webpackConfigPath?: string;
```

Defined in: [config/config.interface.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/config/config.interface.ts)

#### Deprecated

Use `bundlerConfigPath` instead.
Custom webpack config path
The default is `webpack.config.js` in the root however you can use a custom name and place elsewhere.
