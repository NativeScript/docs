---
title: 'Compiled releases: iOS'
description: Requirements, signing, the generated Xcode project, Swift 6 isolation, and mapping crashes back to TypeScript in a compiled iOS release.
contributors:
  - NathanWalker
---

## Requirements

- macOS with **Xcode 26** or newer.
- **XcodeGen** generates the Xcode project. Yours is used if it is installed; otherwise the compiler downloads a
  pinned release once into `~/Library/Caches/nativescript`, checked against its published checksum.
- The app runs on **iOS 17** and later. A lower deployment target in `build.xcconfig` is raised, and the build says
  so. Compiled releases are checked on iOS 26.

## Build, sign, run

```bash
ns build ios --compiled                     # simulator .app
ns build ios --compiled --for-device        # archive and .ipa
ns run ios --compiled                       # build, install and launch
```

`--team-id` signs automatically and `--provision` signs with a profile. Without either, the archive and `.ipa` are
unsigned, with a warning. The app id is your project's `id`, so the [store steps](/guide/publishing/) are the same as
for a JavaScript release.

Simulator builds compile only your Mac's architecture. Installing a compiled build over a JavaScript build of the
same app on a simulator keeps stale files from the old bundle: uninstall first, or use another simulator.

## The Xcode project

`platforms/compiled/ios` is an ordinary Xcode project you can open, build, run, profile and debug in Xcode.
It is regenerated on every build, so don't edit it.

- **Swift 6, main-actor isolated.** The kit and your compiled code build in the Swift 6 language mode with
  `MainActor` as the default isolation. Native code that calls into your code from another thread goes through
  entry points that hand the call to the main thread.
- **Your own Swift.** Swift in `App_Resources/iOS/src` is compiled into the app and called from your TypeScript as
  before. An app that has its own Swift builds in the Swift 5 language mode, still main-actor isolated and with the
  Swift 6 checks the generated code needs, so your code doesn't have to be Swift 6 ready.
- **App_Resources carry over** as the CLI carries them: `Info.plist` and entitlements merged with plugins', asset
  catalogs, the launch screen, `build.xcconfig`, `PrivacyInfo.xcprivacy`, fonts, Podfiles and Swift packages.
  Widgets and Live Activities in `App_Resources/iOS/extensions` become their own targets.
- **Plugins' native code** (Swift, Objective-C, `.xcframework`s, CocoaPods, Swift packages) is linked unchanged.

## Crashes and debugging

Every compiled statement carries the TypeScript file and line it came from (a Swift `#sourceLocation`). So:

- the archive's dSYM symbolicates crash reports to your `.ts`, `.vue`, `.tsx` or `.svelte` lines. Upload it to
  your crash reporter (Sentry, Crashlytics, App Store Connect) as for any iOS app;
- Xcode's debugger shows and steps through the same lines.

`error.stack` lists native frames, such as `symbol (App+0x1a2b3c)`. Resolve one with the dSYM:

```bash
atos -o App.app.dSYM/Contents/Resources/DWARF/App -l 0x100000000 0x1001a2b3c
```

Uncaught errors go to `Application.uncaughtErrorEvent` and are logged as `***** Fatal JavaScript exception *****`.
With `uncaughtErrorPolicy: 'throw'` the app then ends with a native exception that crash reporters record.

`ns debug` and Chrome DevTools need the JavaScript runtime, so they stay with development builds.

## Build times

Measured on a blank app, 2026-10-13. The first build compiles NativeScriptKit as well.

| Build           | iOS simulator |
| --------------- | ------------- |
| First build     | about 170 s   |
| One-line change | about 55 s    |
| Nothing changed | about 14 s    |
