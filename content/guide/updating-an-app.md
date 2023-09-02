---
title: Updating an app
---

To upgrade a NativeScript app, ensure to update the NativeScript CLI Tooling, iOS and Android runtimes, and @nativescript/core. The following steps demonstrate the upgrade process.

To get the latest version of the NativeScript CLI, run:

```cli
npm install -g nativescript
```

To upgrade an app, run:

```cli
ns update
```

In order to get the latest development release instead, pass **next** as an argument:

```cli
ns update next
```

You can also switch to a specific version by passing the version:

```cli
ns update 8.0.0
```

::: tip Note
The command `ns update` is updating the `@nativescript/core`, `@nativescript/webpack`, and the runtimes (`@nativescript/android`and`@nativescript/ios`). The command is combining the next three commands in this article (`ns platform add`, `npm i --save @nativescript/core`and`npm i @nativescript/webpack --save-dev`).

:::

::: warning Important
When using the `--configs` flag, any previous configuration will be overwritten and lost. Consider saving any custom code that you have introduced in your `webpack.config.js` and reapplying the code after using the `--configs` flag.
:::

#### Upgrading platforms

Follow those steps in order to get the latest versions of Android and/or iOS runtimes. Navigate to the root folder of your project, and then if working on an Android project, type:

```cli
ns platform remove android
ns platform add android
```

If working on an iOS version using macOS:

```cli
ns platform remove ios
ns platform add ios
```

#### Upgrading @nativescript/core

Core is available as an npm package named [@nativescript/core](https://www.npmjs.com/package/@nativescript/core).

In order to use them in your project, you will have to explicitly install the package, for example (assuming you are still in your main app project folder from the steps above):

```cli
npm install @nativescript/core@latest --save
```

This installs the **@nativescript/core** package to the node_modules folder and adds it as a dependency to the package.json of the project.

::: warning Important
The `ns create` command will create a new project, add the **@nativescript/core** package as a dependency to its package.json and install it. So each new project you create will have the **@nativescript/core** package installed and you do not have to install it explicitly.
:::

Another place to find the **@nativescript/core** package is [NativeScript Releases](https://github.com/NativeScript/NativeScript/releases/), where you can find a collection of the available @nativescript/core-\*.tgz packages for every release. You can download a selected release and install it by running: `npm install <path to @nativescript/core-*.tgz> --save`.

---

title: Running Latest Code
description: NativeScript Documentation - Running Latest Code
position: 40
slug: latest-code
previous_url: /running-latest

---

#### Running the Latest Code

Often when working with open-source projects, at times there is a requirement for functionality that has not yet passed the full release cycle, or even functionality that is not yet fully implemented. We know that many developers using open-source software are experimenters and would wish to enjoy the option to try out the latest and greatest features of NativeScript. This is why we tried to make this process simple and easy to follow. There are two ways to get the latest development code for NativeScript:

- You can get it via npm.
- You can build the source code.

#### Getting the latest development version via npm

As an open-source project NativeScript keeps not only its source code, but its build infrastructure open. Every commit in the main branch of all major NativeScript repos triggers a Github Action Workflow that publishes a npm package, which can be used directly. Follow these steps in order to get the latest development version of NativeScript:

- Uninstall any existing NativeScript versions:

```cli
npm uninstall -g nativescript
```

- Install the latest development version of NativeScript CLI:

```cli
npm install -g nativescript@next
```

- Edit the package.json file in your project and replace @nativescript/core, @nativescript/android and @nativescript/ios versions with `next`:

```json
{
  "description": "NativeScript Application",
  "dependencies": {
    "@nativescript/core": "next"
  },
  "devDependencies": {
    "@nativescript/android": "next",
    "@nativescript/ios": "next"
  }
}
```

Instead of editing the package.json file directly, the following commands can be run:

```cli
ns platform add ios@next
ns platform add android@next
ns plugin add @nativescript/core@next
```

- Run the `npm install` command to update the node modules:

```cli
cd <your-project-folder>
npm install
```

You are now ready to use the latest development version of NativeScript.

#### Building the source code

##### Reasoning

<!-- TODO: fix links -->

Building the source code is essential when one wants to contribute to an open source project. The statement is applicable for NativeScript as well. According to the [Contribution Guidelines](https://github.com/NativeScript/NativeScript/blob/master/tools/notes/CONTRIBUTING.md), suggesting a fix involves testing the latest code.

#### Behind the curtains of running a NativeScript application

1. `npm install nativescript -g` : Node Package Manager (npm) downloads and installs the [NativeScript CLI](https://www.npmjs.com/package/nativescript).
2. `ns create [AppName]` : The NativeScript CLI downloads the [Hello-World template](https://www.npmjs.com/package/@nativescript/template-hello-world) and unpacks it to a folder named after the app name you choose. At the same time, the CLI installs the [NativeScript cross-platform modules](https://www.npmjs.com/package/@nativescript/core). As a result, your application folder now contains an `app` folder, holding the files of your application ([source code](https://github.com/NativeScript/nativescript-app-templates/tree/master/packages/template-hello-world)) and a `node_modules` folder, having the cross-platform modules ([source code](https://github.com/NativeScript/NativeScript)).
3. `ns platform add android/ios` : The NativeScript CLI downloads the latest SemVer-compatible version of the specified runtime, unpacks it and applies transformations to the native (Android Studio or xCode) project (e.g., changes the project name).
4. `ns run android/ios` : The NativeScript CLI copies the files under the `app` folder to the `platforms/[android/ios]/.../app` folder following a specific logic so that these get used later by a native build tool (_gradle_/_xcode-build_). As a next step, the NativeScript CLI executes compilation, deployment and run commands of _gradle_ or _xcode-build_.
5. Any JavaScript code gets executed in a V8 or JavaScriptCore engine and embedded in the NativeScript runtimes. Each call to an actual native object gets marshalled via the runtimes to the underlying platform and vice-versa. The runtimes provide JavaScript handles to the native objects.

#### Contents of the NativeScript repo

[@nativescript/core](https://github.com/NativeScript/NativeScript/tree/main/packages/core) is built using TypeScript. For that, one of the build steps is TypeScript compilation, which uses TypeScript declarations of the underlying native objects. These are really large files ([android17.d.ts](https://github.com/NativeScript/NativeScript/blob/main/packages/types-android/src/lib/android/android-platform-17.d.ts) and [ios.d.ts](https://github.com/NativeScript/NativeScript/blob/master/packages/types-ios/src/lib/ios/ios.d.ts)). The TypeScript compilation with these two files loaded in memory can take a moment. To save development time, the NativeScript team decided to keep several important applications inside the same repository so that all of them get compiled in a single pass.

Having said that, each subfolder of the [apps](https://github.com/NativeScript/NativeScript/tree/master/apps) subfolder of the repo represents a single application used for different purposes (`toolbox` to quickly prototype feature and verify fixes, `ui` to confirm fixes and `automated` which runs a full e2e test suite against latest changes).

#### Using the latest

To use the latest:

- Build the repo.
- Navigate to your project folder.
- Delete the `@nativescript/core` folder from the `node_modules` subfolder of your project (i.e., `rm -rf node_modules/@nativescript/core` for Linux or `rd /S /Q node_modules\@nativescript/core`).
- Install the newly built package (`npm install [PATH-TO-NATIVESCRIPT-REPO/bin/dist/nativescript-core-x.x.x.tgz]`).

#### Handling internal breaking changes

It is possible for an internal breaking change to be introduced, affecting both the runtimes and core. This type of change requires modifications to the internal code of @nativescript/core, while the public API remains unaffected.

When such a case happens, the [ios](https://github.com/NativeScript/ns-v8ios-runtime) and [android](https://github.com/NativeScript/android-runtime) runtimes must be built separately and updated via the CLI command of:
`ns platform update android/ios --frameworkPath=[Path-to-Runtime-Package]`

#### Building the runtimes

The NativeScript framework and runtimes are distributed as npm packages. To maintain consistency, the native builds (gradle/xcode-build) are encapsulated within grunt builds.

#### Building the Android runtime

The [android runtime](https://github.com/NativeScript/android-runtime) depends on the [android-metadata-generator](https://github.com/NativeScript/android-metadata-generator).

If all dependencies are set, the simplest way to build the Android runtime is by cloning the two repositories into a single folder, ensuring they are sibling folders. Then navigate to the `android-runtime` directory and execute the specified command.

```cli
gradle packar -PwidgetsPath=./widgets.jar
```

The resulting @nativescript/android-x.x.x.tgz package will get created in the `dist` folder.

#### Building the iOS runtime

Follow the instructions on setting up the dependencies for building the [ios runtime](https://github.com/NativeScript/ns-v8ios-runtime) in the repo.

The @nativescript/ios-x.x.x.tgx package will be generated in the dist folder.
