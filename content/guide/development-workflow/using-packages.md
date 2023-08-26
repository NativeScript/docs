---
title: Using packages (aka, plugins) in NativeScript
---

### Plugins

NativeScript plugins are npm packages that often include additional native functionality. Consequently, discovering, installing, and removing NativeScript plugins resembles the process of working with npm packages used in Node.js or other front-end web development.

#### Finding plugins

The NativeScript team maintains a list of plugins [here](https://docs.nativescript.org/plugins/index.html).

Plugins can also be found at the [NativeScript marketplace](https://market.nativescript.org/) or on the [npm’s site](https://www.npmjs.com/)

Not finding the right plugin? You can try asking on our [Discord Community](https://nativescript.org/discord). Or perhaps [build a new plugin](/https://docs.nativescript.org/plugins/index.html#developing-your-own-plugins).
<!-- TODO: fix links -->

You can also explore [@nativescript/core](https://docs.nativescript.org/understanding-packages.html#nativescript-core), which is included as a dependency in every NativeScript app. It is possible that the required functionality is already available.

#### Installing Plugins

Once the needed plugin is found, it can be installed in a NativeScript app using the `ns plugin add` command which behaves just like `npm install` while also modifying any existing platform projects (linking, etc.).

```cli
ns plugin add <plugin-name>
```

For example, the following command installs the [NativeScript camera plugin](https://docs.nativescript.org/plugins/camera.html).

```cli
ns plugin add @nativescript/camera
```

Instead of using plugin add, package managers like npm, yarn, or pnpm can also be used:

```cli
npm install --save @nativescript/camera
```

The installation of a NativeScript plugin is similar to installing a npm package.  The NativeScript CLI downloads the plugin from npm and adds it to the node_modules folder in the project's root. This process also includes updating the root package.json file with the plugin and resolving its dependencies (if any).

#### Installing Plugins as Developer Dependencies

As demonstrated above, the command `ns plugin add @nativescript/camera` is equivalent to `npm i @nativescript/camera --save` internally.  However, when installing a developer dependency, such as @nativescript/types or @nativescript/webpack, you need to explicitly save it as a devDependency.  To do so, use the npm install command with the --save-dev flag. For instance:

```cli
npm i @nativescript/types --save-dev
```

::: tip Note
Regarding package handling, **dependencies** are necessary for the application to run, while **devDependencies** are only needed during the development phase. For instance, the **@nativescript/camera** plugin is a dependency required at runtime to utilize the hardware camera.  Conversely, **@nativescript/types** is a developer dependency used solely for IntelliSense during the development process. It is important to avoid installing `devDependencies` as `dependencies` to prevent large output build files and keep the application size manageable. You can find an example of a `package.json` file using both `dependencies` and `devDependencies` [here](https://github.com/NativeScript/nativescript-sdk-examples-js/blob/master/package.json#L31-L44).
:::

#### Importing and Using Plugins

Once the required plugin is installed, it can be utilized in the project. It's crucial to carefully review the plugin's documentation and README file as each plugin may have specific configuration requirements. The following code snippet demonstrates the basic usage of the [@nativescript/camera](https://docs.nativescript.org/plugins/camera.html) plugin:

```javascript
import { requestPermissions } from '@nativescript/camera'
requestPermissions()
```

```typescript
import { requestPermissions } from '@nativescript/camera'
requestPermissions()
```

#### Removing Plugins

To remove a NativeScript plugin, you can use the following command.

```cli
ns plugin remove <plugin-name>
```

For example, the following command removes the NativeScript camera plugin.

```cli
ns plugin remove @nativescript/camera
```

As with installation, the removal of a NativeScript plugin mimics the removal of an npm package.

The NativeScript CLI removes plugin files from the app's node_modules folder in the project's root. It also removes the plugin's dependencies and removes the plugin from the project's root package.json file.

### Package Managers

A package manager is software that enables management of external code necessary for a project to function properly.  The NativeScript CLI employs Node Package Manager (npm) as its default package manager.  Upon creating a new app, the CLI automatically executes `npm install` to install all required dependencies.

#### Supported package managers

NativeScript CLI allows you to [configure the package manager](/project-structure/nativescript-config-ts#setting-project-package-manager) used when working with dependencies. When you change the defaultly used `npm` package manager, CLI will use the newly set package manager for all operations it executes related to project dependencies, for example, project creation, managing dependencies, etc.

NativeScript CLI supports three package managers:

- `npm` - this is the default option
- `yarn` - you can set it by calling `ns package-manager set yarn`. More information about `yarn` is available [here](https://yarnpkg.com/)
- `pnpm` - from version 6.4, you can use `pnpm` to manage the dependencies of your application. You can use `pnpm` by calling `ns package-manager set pnpm`. NOTE: You will have to use `--shamefully-hoist` flag if you call `pnpm` on your own. CLI passes this flag when installing dependencies with `pnpm` and probably your application will not work if you omit it. More information about `pnpm` is available [here](https://pnpm.js.org/).

In case you want to check what is the currently used package manager, you can use:

```cli
ns package-manager get
```
