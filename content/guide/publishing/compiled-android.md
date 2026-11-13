---
title: 'Compiled releases: Android'
description: Requirements, signing, threading annotations, R8 and mapping crashes back to TypeScript in a compiled Android release.
contributors:
  - NathanWalker
---

## Requirements

- **JDK 17** or newer and the **Android SDK**. The compiler ships its own Gradle wrapper.
- macOS or Linux. Windows is not supported yet.
- The app runs on **Android 7 (API 24)** and later.

## Build, sign, run

A compiled build is a release build, and Android signs every release, so all four `--key-store-*` options are
required:

```bash
ns build android --compiled --key-store-path release.keystore --key-store-password … \
  --key-store-alias … --key-store-alias-password …     # signed .apk; add --aab for a bundle
ns run android --compiled --key-store-path …           # build, install and launch
```

They sign as Android Studio does. To try a build before you have your upload key, make a throwaway keystore (see
[Getting started](/guide/publishing/compiled-getting-started#_2-build-and-run)).

Android installs an app over another only when both are signed with the same key. Moving between a debug build
(signed with the SDK's debug key) and a release signed with another key fails with "a previously installed package
of the same name has a different signature": uninstall first (`adb uninstall <app id>`).

## The Gradle project

`platforms/compiled/android` is a Gradle project, regenerated on every build. App_Resources carry over as the CLI
carries them: `res/`, `AndroidManifest.xml` (merged with plugins'), `app.gradle` and `before-plugins.gradle`, and
fonts. Plugins' Java, Kotlin and Gradle dependencies are linked unchanged.

The kit marks main-thread code `@UiThread` and code that may run on any thread `@AnyThread`, and Android lint
checks calls against them.

`fetch` and `XMLHttpRequest` are not available on Android yet. They are on iOS.

## Minification (R8)

Members reached by name at run time (a method called on an `any` value, `typeof x.getFoo`, `'getFoo' in x`) are
kept from R8's renaming by a scan of the compiled code. A name computed at run time (`x[name]()` with `name` built
from strings) isn't found by the scan: keep such members with a ProGuard rule in
`App_Resources/Android/app.gradle`, and check the minified release on a device.

By default every class and member of the kit is kept. `android: { release: { narrowKitKeeps: true } }` keeps only
what the kit's reflection needs and lets R8 remove the rest: on Recipes (Vue) the kit's dex goes from 3.3 to 2.0 MB
and the APK from 2.44 to 1.92 MB. It is opt-in until it has been checked on larger apps; under it, a kit member
reached only through a computed name is removed.

## Crashes and debugging

Kotlin has no source-location directive, so the build writes a line table (`source-lines.json`) beside the Gradle
project. `ns-native-retrace` reads a stack trace in your TypeScript lines: it runs R8's retrace with the build's
`mapping.txt`, then maps your app's frames to your files and the kit's frames to `@nativescript/core` files.

```bash
adb logcat -d -s AndroidRuntime | npx ns-native-retrace platforms/compiled/android
npx ns-native-retrace platforms/compiled/android crash.txt    # a trace saved from your crash reporter
```

Keep `mapping.txt` and `source-lines.json` with each release you upload. When the Kotlin compile fails, `ns build`
prints each error at the TypeScript line it came from.

`error.stack` lists native frames, such as `class.method(File.kt:line)`, which `ns-native-retrace` maps. Uncaught
errors go to `Application.uncaughtErrorEvent` and are logged as `***** Fatal JavaScript exception *****` (logcat
tag `JS`). Debug a compiled release in Android Studio, as a native app.

## Build times

Measured on a blank app with R8, 2026-10-13: the first build takes a minute or two, a one-line change about 45 s.
