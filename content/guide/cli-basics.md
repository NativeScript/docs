---
title: CLI Basics
contributors:
  - Ombuweb
  - rigor789
---

When working with NativeScript, you will often interact with the NativeScript CLI. The CLI is self-documented, so you can always run `ns --help` or `ns <command> --help` to view available commands, flags and descriptions.

This page is a quick reference for useful development commands, but it's not meant to be an exhaustive list of all the commands.

**The following workflows have their dedicated pages with further information:**

- [Running](/guide/running)
- [Debugging](/guide/debugging)
- [Publishing](/guide/publishing/)

## Cleaning

### Cleaning a single project

When you're installing plugins with native dependencies or updating runtime versions, it's a good practice to perform a clean build.
This helps ensure everything fits together correctly. If you're dealing with mysterious build errors, they might disappear after a clean build.

To clean, run this command from your project's root directory:

```cli
ns clean
```

Running `ns clean` removes the `node_modules`, `hooks`, and `platforms` directories and the `package-lock.json` file. You can customize what's cleaned in the [nativescript.config.ts](/configuration/nativescript#cli-pathstoclean).

### Cleaning multiple projects

If you have multiple projects in a directory, you can run `ns clean` in it, and it will scan for any valid NativeScript projects in sub-directories and then prompt you to choose the ones to clean.

<DeviceFrame type="window">
<video controls src="https://user-images.githubusercontent.com/879060/230395606-dbb4a56f-74e8-403b-a687-62e27a61f8d4.mov"></video>
</DeviceFrame>

## Listing connected devices

To list all connected devices (both physical and virtual), run:

```cli
ns devices
```

Example output:

```
| # | Device Name    | Platform | Device Identifier                    | Type     | Status    | Connection Type |
| - | -------------- | -------- | ------------------------------------ | -------- | --------- | --------------- |
| 1 | Pixel 4 API 33 | Android  | emulator-5554                        | Emulator | Connected | Local           |
| 2 | generic_device | Android  | XXXXXXXXXXXXXX                       | Device   | Connected | USB             |
| 3 | iPhone 14 Pro  | iOS      | XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX | Emulator | Connected | Local           |
```

## Setting the default package manager

To set the default package manager that the CLI uses (unless overridden in [nativescript.config.ts](/project-structure/nativescript-config#cli-packagemanager)):

```cli
ns package-manager set npm
ns package-manager set yarn
ns package-manager set yarn2 # experimental
ns package-manager set pnpm
```
