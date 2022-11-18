---
title: NativeScript CLI Basics
---

The development workflow starts with the [NativeScript CLI](https://www.npmjs.com/package/nativescript).

## CLI Basics

In this article, you'll  learn the basics of the NativeScript command-line interface, including how to create new apps, how to get those apps running on devices, and how to set up a development workflow that lets you iterate fast.

### Creating a new project in NativeScript

To create a new NativeScript app project, run:

```cli
ns create
```

The NS CLI will walk you through selecting a template using interactive prompts.

You can also use the `--template` flag with the `ns create` command to target a specific template

```cli
ns create HelloWorld --template @nativescript/template-hello-world-ts
```
`HelloWorld` above is the app name and the `--template` option tells the NativeScript CLI to scaffold an app using a predefined template named “@nativescript/template-hello-world-ts” found [here](https://github.com/NativeScript/nativescript-app-templates/tree/master/packages/template-hello-world-ts).

For a full list of the templates you can use, see the [full list here](https://github.com/NativeScript/nativescript-app-templates/tree/master/packages)

The `create` command will take a minute to complete, as the NativeScript CLI needs to download a few dependencies while setting up your new app.

### Cleaning a NativeScript project

Some times you have trouble running your application, or you have added new dependencies and you're issues. To fix try running:

Cleaning a NativeScript project is similar to running "Clean Build Folder" in XCode or other IDE environments. Sometimes during development you may trouble. To achieve that, run:

```cli
ns clean
```
Running `ns clean` is similar to running "Clean Build Folder" in XCode or other IDE environments. It deletes the `node_modules`, `hooks`, and `platforms` directories from your project.

### Running NativeScript app on a device or simulator

To run your app on all connected devices and emulators, run:

```cli
ns run
```

The command prepares, builds and deploys the app on the connected devices. By default, it listens for changes in your code, synchronizes those changes and refreshes all the devices.

To launch the app on a connected Android device or Android emulator, run:

```cli
ns run android
```

::: warning Note
If you get an error at this point you might not have completed the full [NativeScript CLI setup](/setup/).

You must have at least one AVD (Android Virtual Device) configured on your development machine for this command to run your app up on an Android emulator.
Or a connected Android device with debugging enabled.

Check the `devDependencies` of your `package.json` file. `@nativescript/android` must be installed to avoid the "[Unable to apply changes on device: emulator-5554. Error is: Invalid Version: null.](https://github.com/NativeScript/nativescript-cli/issues/4451)" error.
:::

To launch the app on a connected iOS device or iOS simulator.
```cli
ns run ios
```

::: tip Note
NativeScript uses Xcode to build and run iOS apps, and Xcode is only available on macOS; therefore, you can only run iOS apps on macOS. There are VM and/or cloud services that allow you to build on a Mac from a PC.
:::


You can customize the `ns run` command using any of the following options:

- `--no-hmr` - Disables the webpack HMR option, so changes made during a session will restart the application.
- `--emulator` - Specifies that you want to debug the app in an emulator.
- `--timeout` - Sets the number of seconds that the NativeScript CLI will wait for the debugger to boot. If not set, the default timeout is 90 seconds.
- `--clean` - If set forces rebuilding the native application.

::: tip Note
If you see this output in the terminal:

```
Webpack compilation complete. Watching for file changes.
Watchpack Error (watcher): Error: EMFILE: too many open files 'FILE_PATH'
Watchpack Error (watcher): Error: EMFILE: too many open files 'FILE_PATH'
Watchpack Error (watcher): Error: EMFILE: too many open files 'FILE_PATH' <-- This repeats many times
```

This is related to node configuration options on your machine.

**Solution**:

Try adding this to your `~/.bash_profile` if you have one or `~/.zshenv` if using Zsh:

```
export NODE_OPTIONS="--max-old-space-size=6096"
```

Then open a new terminal window and run your app.
:::

### List connected devices

To list all connected devices(physical and emulators), run:

```cli
ns device
```
`ns device` output:

| \# | Device Name | Platform | Device Identifier  | Type | Status | Connection Type |
|---|-------------|----------|----------|---------|------|-----|
| 1 | Pixel 4 API 33   | Android  | emulator-5554 | Emulator | Connected | Local |
| 2 | mlv5n_global_com | Android  | LGM250KVGQSWVKJZFQ | Device   | Connected | USB |
| 3 | iPhone 14 Pro    | iOS      | 38356C8F-073B-4F07-B65E-3BFA7B22977A | Emulator | Connected|Local|

### NativeScript cli help

To get the CLI's documentation, run:

```cli
ns help
```

It will open documentation in your web browser.