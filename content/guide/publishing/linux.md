---
title: Distributing Linux apps
description: Build release packages of NativeScript Linux apps.
category: Publishing
categoryLink: /guide/publishing/
prev: /guide/publishing/
next: false
contributors:
  - triniwiz
breadcrumbs:
  - name: 'Publishing'
    href: '/guide/publishing/'
  - name: 'Distributing Linux apps'
---

::: warning Experimental
The Linux platform is experimental. See [Developing for Linux](/guide/linux/).
:::

A release build packs the app into a `.tar.gz` archive that users can extract and run, or install for the current user with the included install script:

```bash
ns build linux --release
```

The archive is written to `platforms/linux/<ProjectName>/dist/<ProjectName>.tar.gz`, and the folder it was created from to `platforms/linux/<ProjectName>/dist/<ProjectName>/`.

## Preparing the app

### App id

The app id names the app's desktop entry (`<app id>.desktop`), its icon and its install folder, and GTK uses it to match the app's windows to the desktop entry. It defaults to your app id ([`id`](/configuration/nativescript#id), or [`linux.id`](/configuration/nativescript#linux-id)) and must be a reverse DNS name, for example `org.nativescript.MyApp`.

### Version

The version shown in the app's AppStream metadata is the `version` of your `package.json`.

### Icon, desktop entry and metadata

Replace `App_Resources/Linux/icon.png` (512&times;512) or add an `icon.svg`, and update `app.desktop` and `app.metainfo.xml` with your app's name, categories, summary and description. See [App_Resources › Linux](/project-structure/app-resources#linux-specific-resources).

### Architecture

Each build targets a single architecture, the architecture of the build machine by default. Use `--arch` to choose `x64` or `arm64`:

```bash
ns build linux --release --arch arm64
```

Apps with [native code](/guide/native-code/linux) are compiled by the build machine's C compiler, so build them on a machine of the target architecture.

Release packages run on glibc based distributions with glibc 2.28 or newer and GTK 4. Libraries your native code links to must be installed on the user's machine too.

## What's in the package

```bash
MyApp/
├─ MyApp                     # the app executable
├─ app.nsbundle              # the app's JavaScript and assets
├─ app.nsbundle.unpacked/    # files kept outside of the bundle (fonts by default)
├─ metadata-x86_64.bin       # C API metadata
├─ metadata/                 # metadata of the app's and plugins' native code
├─ lib/                      # shared libraries of the app's and plugins' native code
├─ icons/
├─ org.nativescript.MyApp.desktop
├─ org.nativescript.MyApp.metainfo.xml
└─ install.sh
```

### The app bundle

By default, the app's files are packed into a single read-only `app.nsbundle`, and the executable is locked to it:

- the bundle's integrity is checked against a hash stored in the executable
- the executable only loads the app from the bundle
- the debugger, command line flags and environment variable overrides are turned off

These settings are [configurable](/configuration/nativescript#linux-fuses). Files that need to stay real files (fonts by default) are listed in [`linux.bundleUnpack`](/configuration/nativescript#linux-bundleunpack).

### Source protection

To encrypt the bundle with a key embedded in the executable, enable [`linux.sourceProtect`](/configuration/nativescript#linux-sourceprotect) or build with `--source-protect`:

```bash
ns build linux --release --source-protect
```

A new key is generated for every build. To use your own, pass `--source-protect-key-hex <key>` or set the `NS_LINUX_BUNDLE_KEY` environment variable.

## Installing the app

Users extract the archive and run `install.sh`:

```bash
tar -xzf MyApp.tar.gz
./MyApp/install.sh
```

The script installs the app for the current user, without root privileges:

- the app is copied to `~/.local/share/<app id>/`
- the desktop entry is written to `~/.local/share/applications/<app id>.desktop`, so the app shows up in the desktop's app launcher
- the icons are copied to `~/.local/share/icons/`

To uninstall the app, remove those files.

The app can also be run without installing it, by running the executable in the extracted folder.

## Other package formats

The CLI doesn't produce AppImage, Flatpak, Snap, `.deb` or `.rpm` packages yet. The release folder (`platforms/linux/<ProjectName>/dist/<ProjectName>/`) contains everything the app needs, including an AppStream `metainfo.xml` and a desktop entry, and can be used as the input for those packaging tools.
