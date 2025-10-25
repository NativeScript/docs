---
title: Hooks
description: A Guide to using CLI hooks.
contributors:
  - jcassidyav
---

## Overview

NativeScript hooks are executable pieces of code or Node.js scripts that can be added by application or plugin developers to customize the execution of particular NativeScript commands. They provide the power to perform special activities by plugging into different parts of the build process of your application.

Hooks are added to the `hooks/` folder of a project by plugins, or are specified in the `nativescript.config.ts` by an application.

For example, when `ns prepare ...` is executed, all script files in the `hooks/before-prepare/` and `hooks/after-prepare/` folders are executed as well.

Starting with NativeScript 9.0 CLI (`npm install -g nativescript`), you can create hooks as either CommonJS with extension `.js` or ECMAScript Modules (ESM) with extension `.mjs`.

For versions of the NativeScript CLI < 9.0 hooks must be written in CommonJS with extension `.js`.

## Hook Execution Types

The NativeScript CLI supports two different ways of executing hooks:

**1. In-Process Execution**

- Available only for JavaScript hooks
- Executes within the CLI process
- Provides access to NativeScript CLI services via dependency injection
- Determined by the presence of `module.exports` statement
- **Recommended approach** for writing hooks

**2. Spawned Execution**

- Executed via Node.js's `child_process.spawn` function
- Run from the project's root directory
- Cannot access NativeScript CLI services
- If a hook returns a non-zero exit code, the NativeScript command will throw an exception

## In-Process Hooks

**Basic Module Definition**

To write an in-process hook, use the following module definition:
::: code-group

```javascript [thehook.mjs (ESM)]
export default function (hookArgs) {
  // Hook implementation ESM
}
```

```javascript [thehook.js (CommonJS)]
module.exports = function () {
  // Hook implementation CommonJs
}
```

:::
**Using hookArgs**

The hook function can accept a special argument named `hookArgs`, which is an object containing all arguments passed to the hooked method.

**Example:**

If the NativeScript CLI has a method `prepareJSApp` defined as:

```typescript
@hook("prepareJSApp")
public async prepareJSApp(projectData: IProjectData, platformData: IPlatformData) { }
```

Then `hookArgs` will have the following structure:

```json
{
  "projectData": {...},
  "platformData": {...}
}
```

**Using hookArgs in your hook:**
::: code-group

```javascript [thehook.mjs (ESM)]
export default function (hookArgs) {
  console.log(JSON.stringify(hookArgs.prepareData))
}
```

```javascript [thehook.js (CommonJS)]
module.exports = function (hookArgs) {
  console.log(hookArgs.projectData)
}
```

:::
**Dependency Injection**

NativeScript CLI is built with Dependency Injection and executes in-process hooks in a way that allows you to use any registered service from the injector.

**_Approach 1: Direct Service Injection_**

::: code-group

```javascript [thehook.mjs (ESM)]
export default function ($logger, $fs, $projectDataService, hookArgs) {
  $logger.info('Executing hook')
  // Use $fs, $projectDataService, etc.
}
```

```javascript [thehook.js (CommonJS)]
module.exports = function ($logger, $fs, $projectDataService, hookArgs) {
  $logger.info('Executing hook')
  // Use $fs, $projectDataService, etc.
}
```

:::
**_Approach 2: Injector Resolution_**

::: code-group

```javascript [thehook.mjs (ESM)]
export default function ($injector, hookArgs) {
  const $logger = $injector.resolve('$logger')
  const $fs = $injector.resolve('$fs')

  $logger.info('Executing hook')
}
```

```javascript [thehook.js (CommonJS)]
module.exports = function ($injector, hookArgs) {
  const $logger = $injector.resolve('$logger')
  const $fs = $injector.resolve('$fs')

  $logger.info('Executing hook')
}
```

:::

**Important Notes:**

- Injected dependencies are resolved by name
- If you inject a non-existent service (e.g., `$logger1`), the CLI won't execute the hook and will show a warning
- When using `$injector` directly, no warning is shown for incorrect service names, and an error will be thrown during execution

### Async Code in Hooks

NativeScript CLI supports asynchronous code in hooks. If executing async code, you must return a Promise:

::: code-group

```javascript [thehook.mjs (ESM)]
import { mkdirp } from 'mkdirp'

export default function ($logger) {
  return new Promise(function (resolve, reject) {
    mkdirp('somedir', function (err) {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
  })
}
```

```javascript [thehook.js (CommonJS)]
var mkdirp = require('mkdirp')

module.exports = function ($logger) {
  return new Promise(function (resolve, reject) {
    mkdirp('somedir', function (err) {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
  })
}
```

:::

## Spawned Hooks

Spawned hooks are executed via Node's `child_process.spawn` from the project's root directory. All options are passed to the script using environment variables:

| Environment Variable | Description                                                                                  |
| -------------------- | -------------------------------------------------------------------------------------------- |
| `TNS-VERSION`        | The version of the NativeScript CLI                                                          |
| `TNS-HOOK_FULL_PATH` | The full path to the executed hook                                                           |
| `TNS-COMMANDLINE`    | The exact command-line arguments passed to NativeScript CLI (e.g., `tns run ios --emulator`) |

If a spawned hook returns a non-zero exit code, NativeScript CLI will throw an error and abort the command's execution.

## Hook Types and Behaviors

**Before/After Hooks**

Hooks can execute code before or after a specific action:

::: code-group

```javascript [thehook.mjs (ESM)]
export default function (hookArgs) {
  if (hookArgs.prepareData.release) {
    console.log('Before executing release build.')
  }
}
```

```javascript [thehook.js (CommonJS)]
module.exports = function (hookArgs) {
  if (hookArgs.prepareData.release) {
    console.log('Before executing release build.')
  }
}
```

:::

## Adding Hooks to Plugins

To add hooks to your plugin, follow these steps:

**1. Install the Hook Module**

```bash
npm install @nativescript/hook --save
```

**2. Create postinstall.js**

Create a postinstall script at the root folder of your plugin:
::: code-group

```javascript [postinstall.mjs (ESM)]
import path from 'path'
import hook from '@nativescript/hook'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
hook(path.join(__dirname, '..')).postinstall()
```

```javascript [postinstall.js(CommonJS)]
require('@nativescript/hook')(__dirname).postinstall()
```

:::

**3. Create preuninstall.js**

Create preuninstall script at the root folder of your plugin:

::: code-group

```javascript [postinstall.mjs (ESM)]
import path from 'path'
import hook from '@nativescript/hook'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
hook(path.join(__dirname, '..')).preuninstall()
```

```javascript [postinstall.js(CommonJS)]
require('@nativescript/hook')(__dirname).postinstall()
```

:::
**4. Update package.json Scripts**

Add the postinstall and preuninstall scripts:

```json
{
  "scripts": {
    "postinstall": "node postinstall.js",
    "preuninstall": "node preuninstall.js"
  }
}
```

**5. Declare Hooks in package.json**

Define your hooks under the `nativescript` property:

```json
{
  "nativescript": {
    "hooks": [
      {
        "type": "before-prepare",
        "script": "lib/before-prepare.mjs"
      },
      {
        "type": "after-prepare",
        "script": "lib/after-prepare.mjs"
      }
    ]
  }
}
```

### Hook Configuration Properties

#### type (Required)

Specifies when the hook should execute. Format: `before-<hookName>` or `after-<hookName>`

#### script (Required)

The relative path from the plugin root to the hook implementation file.

#### name (Optional)

Custom name for the hook. Defaults to the plugin package name.

**Example with custom name:**

```json
{
  "nativescript": {
    "hooks": [
      {
        "type": "after-prepare",
        "script": "lib/after-prepare.mjs",
        "name": "my-custom-hook"
      }
    ]
  }
}
```

## Adding Hooks to Applications

You can define project-persistent hooks in your `nativescript.config.ts` file:

```typescript
import { NativeScriptConfig } from '@nativescript/core'

export default {
  id: 'org.nativescript.app',
  appPath: 'app',
  appResourcesPath: 'App_Resources',
  hooks: [
    {
      type: 'before-prepare',
      script: './scripts/hooks/before-prepare.mjs',
    },
    {
      type: 'after-prepare',
      script: './scripts/hooks/after-prepare.mjs',
    },
  ],
} as NativeScriptConfig
```

## Configuration Reference

### Hooks Configuration in nativescript.config.ts

```typescript
hooks: [
  {
    type: 'before-<hookName>' | 'after-<hookName>',
    script: './path/to/script.mjs',
  },
]
```

## Available Hook Types

The following hook types are available (prefix with `before-` or `after-`):

| Hook Name            | Description                              | Execution Context                                                                          |
| -------------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------ |
| `buildAndroidPlugin` | Builds aar file for Android plugin       | Runs during `prepareNativeApp`                                                             |
| `buildAndroid`       | Builds Android app                       | During Android build process                                                               |
| `buildIOS`           | Builds iOS app                           | During iOS build process                                                                   |
| `checkEnvironment`   | Validates project environment            | Runs during `ns doctor`, `ns clean`, and most build commands                               |
| `checkForChanges`    | Detects changes during watch             | NativeScript CLI checks application state to decide if rebuild/reinstall/restart is needed |
| `install`            | Application installed to device/emulator | After app installation                                                                     |
| `prepare`            | Compiles webpack and prepares native app | Prepares the application in platforms folder                                               |
| `prepareNativeApp`   | Prepares the actual native app           | Runs during `prepare`/`watch` hook                                                         |
| `resolveCommand`     | Resolves command and arguments           | Runs before all CLI commands                                                               |
| `watch`              | Sets up watchers for live sync           | During `prepare` hook for live development                                                 |
| `watchPatterns`      | Sets up watch patterns                   | During `watch` hook                                                                        |

### Hook Execution Examples

**Example: Release Build Check**

::: code-group

```javascript [thehook.mjs (ESM)]
export default function (hookArgs) {
  if (hookArgs.prepareData.release) {
    console.log('Executing release build')
    // Modify API keys, enable production features, etc.
  }
}
```

```javascript [thehook.js (CommonJS)]
module.exports = function (hookArgs) {
  if (hookArgs.prepareData.release) {
    console.log('Executing release build')
    // Modify API keys, enable production features, etc.
  }
}
```

:::
**Example: Using NativeScript Services**

::: code-group

```javascript [thehook.mjs (ESM)]
export default function ($logger, $fs, hookArgs) {
  $logger.info('Starting custom hook')

  const configPath = hookArgs.projectData.projectDir + '/config.json'
  if ($fs.exists(configPath)) {
    const config = $fs.readJson(configPath)
    $logger.info(`Loaded config: ${JSON.stringify(config)}`)
  }
}
```

```javascript [thehook.js (CommonJS)]
module.exports = function ($logger, $fs, hookArgs) {
  $logger.info('Starting custom hook')

  const configPath = hookArgs.projectData.projectDir + '/config.json'
  if ($fs.exists(configPath)) {
    const config = $fs.readJson(configPath)
    $logger.info(`Loaded config: ${JSON.stringify(config)}`)
  }
}
```

:::

## Hooks CLI Command

As described above these hooks are installed automatically through npm postinstall scripts included in the plugin package.

However, if you (or your CI environment) install dependencies with:

```bash
npm install --ignore-scripts
```

then those postinstall scripts don’t run, which means:

- Plugin hooks aren’t copied to the correct location (`hooks/` folder).
- Builds may fail or certain plugin functionality won’t work.

Starting with NativeScript 9.0 CLI (`npm install -g nativescript`), a new command was introduced:

```bash
ns hooks
```

This command installs all plugin hooks after dependencies have been installed.

So if your environment blocks postinstall scripts, you can now safely do:

```bash
npm install --ignore-scripts
ns hooks
```

The new `ns hooks` command will install the hooks into the proper project locations (as postinstall would have done).

**Available Commands**

| Command            | Description                                                                                                                                                 |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ns hooks`         | Lists the hooks that are in the installed plugins ( also `ns hooks list` ).                                                                                 |
| `ns hooks install` | Installs the hooks.                                                                                                                                         |
| `ns hooks lock`    | Creates a `nativescript-lock.json` file, this is a list of hooks per plugin and a hash of the script for each hook.                                         |
| `ns hooks verify`  | Compares the hooks in the plugins with what is specified in the `nativescript-lock.json` file, failing if a hook is not listed or the hash is not the same. |

**For extra peace of mind**

Typically the contents of the hook scripts do not change in plugins from version to version, to prevent unexpecected changes to hooks you can utilize the `lock` command.

This will:

- Create a `nativescript-lock.json` file containing details of the current plugin hooks.
- Ensure that any future `ns hooks install` or `ns hooks verify` invocations will fail if any new hooks are introduced by dependencies or if these hook scripts differ from what was previously installed.

i.e. run `ns hooks lock` and `ns hooks install` will fail if any of the hooks have changed since the last time `ns hooks lock` has been executed.
