---
title: Compiled releases
description: Build a release of your NativeScript app compiled to Swift and Kotlin, with no JavaScript runtime inside, using one flag. Develop exactly as you do today.
contributors:
  - NathanWalker
---

<!-- Keep in step with the compiler's CLI.md, README.md and STATUS.md in NativeScript/swiftui-live. -->

::: warning Preview
Compiled releases are in preview. The `--compiled` flag is in the CLI's `feat/native-release` branch, and
`@nativescript/compiler` is not yet published to npm. This page describes how it works today, what it supports, and
what is still open, so you can judge it against your app.
:::

A compiled release is the TypeScript pathway's release (see [Two pathways](/guide/pathways)). You develop with
`ns run` exactly as today: the JavaScript runtime, HMR, Chrome DevTools. When you build the release, one flag
compiles your app to **Swift on iOS and Kotlin on Android**, and the app that ships has no JavaScript engine, no
bundle and no NativeScript runtime.

```bash
ns build ios --compiled
```

## The short version

- **One flag.** `--compiled` on `ns build`, `ns run` or `ns deploy`, or `release: { compiled: true }` in
  `nativescript.config.ts`. It implies `--release`.
- **Your code does not change.** The compiler reads the TypeScript you already have, the framework you already use,
  and your plugins' own TypeScript source.
- **What it cannot compile, it refuses.** Anything it does not support stops the build with the file, the line and
  what to do, instead of shipping something that behaves differently.
- **It is checked against the release it replaces.** Proof apps match their JavaScript Release builds pixel for
  pixel, screen by screen and after the same taps.

What you get, measured on real apps:

| App | JavaScript release | Compiled release |
| --- | --- | --- |
| Recipes (Vue), `.ipa` | 14.0 MB | 0.45 MB |
| Recipes (Vue), memory at launch, iPhone 16 Pro | 45.1 MB | 15.6 MB |
| Recipes (Vue), first frame, iPhone 16 Pro | 227 ms | 129 ms |
| ns-octane (6 plugins), `.ipa` | 14.4 MB | 0.96 MB |
| Recipes, Android APK | 104 MB (4 ABIs) | 0.9 MB |
| openjs-app (App Store app), installed on iPhone | 79.6 MB | 5.4 MB |

## Using it

### Install

```bash
npm install --save-dev @nativescript/compiler
```

Requirements:

- **Node.js 20 or newer**, as for the CLI.
- **iOS:** Xcode. The Xcode project is generated with [XcodeGen](https://github.com/yonaskolb/XcodeGen): yours if it is
  installed, otherwise a pinned release the compiler downloads once into `~/Library/Caches/nativescript`, checked
  against its published checksum. The deployment target is at least iOS 17; a lower one in `build.xcconfig` is raised,
  and the build says so.
- **Android:** the Android SDK. The compiler ships its own Gradle wrapper. Windows is not supported yet.

### Build, run, deploy

```bash
ns build ios --compiled                   # simulator .app
ns build ios --compiled --for-device      # archive and .ipa; sign with --team-id or --provision
ns run ios --compiled                     # build, install and launch on a simulator or device

ns build android --compiled --key-store-path release.keystore --key-store-password … \
  --key-store-alias … --key-store-alias-password …     # signed .apk; add --aab for a bundle
ns run android --compiled --key-store-path …
```

Signing works as for any release: on iOS, `--team-id` signs automatically and `--provision` signs with a profile
(without either, the archive and `.ipa` are unsigned, with a warning); on Android, the `--key-store-*` options sign
as Android Studio does. The app id is your project's `id`, so a compiled release installs over the JavaScript build
of the same app, and the [store steps](/guide/publishing/) are the same.

`ns run` without `--compiled`, `ns debug` and every debug build stay on the JavaScript runtime.

### Make it the default

```ts
// nativescript.config.ts
export default {
  id: 'org.example.app',
  release: {
    compiled: true, // every release build is compiled
  },
  android: {
    release: { compiled: false }, // except Android's, for now
  },
} as NativeScriptConfig
```

`--compiled` and `--no-compiled` on the command line win over the config, and a platform's `release` wins over the
top-level one. `--no-compiled` builds one release on the JavaScript runtime whatever the config says.

The output goes to `platforms/compiled/ios` and `platforms/compiled/android`, never `platforms/ios` or
`platforms/android`: the JavaScript platform projects are left as they are. On iOS the output is an ordinary Xcode
project you can open, build and run from Xcode.

## How it works

```text
your app (TypeScript, templates, CSS)            plugins (their TypeScript source)
                     │                                        │
                     └──── one TypeScript program, type-checked against @nativescript/core ────┘
                                                │
                              compiler: Swift (iOS) / Kotlin (Android)
                                                │
                            + NativeScriptKit: @nativescript/core as native code
                            + plugins' native code (platforms/ios, platforms/android), linked unchanged
                                                │
                               Xcode / Gradle ──▶ .app .ipa / .apk .aab
```

1. **Your framework's own parser reads your templates.** Angular, Vue, React, Svelte, Solid and Octane templates are
   parsed by each framework's own compiler, so what you write means what it means in the framework.
2. **Your styles go through your own build.** Your CSS pipeline (Tailwind, PostCSS, Sass) runs as your app's build runs
   it; the result is applied as core applies CSS. Components' own styles (Vue `<style>`, including `scoped`; Angular
   `styles` and `styleUrl`, encapsulated as NativeScript Angular encapsulates them; Svelte `<style>` where your Svelte
   configuration injects component CSS) are scoped as their framework scopes them and added in the same order.
3. **Everything is type-checked as one program.** The app and its plugins are checked against `@nativescript/core`'s
   declarations, then translated. JavaScript semantics (numbers, promises and microtasks, closures, `Map`/`Set`,
   iteration order) are reproduced exactly; the compiler's differential tests run each case under Node and as
   compiled code and require the same output.
4. **Core becomes NativeScriptKit.** What `@nativescript/core` does through the JavaScript runtime, the compiled app
   does through NativeScriptKit: core's views, layouts, styling, property system and platform APIs as Swift and
   Kotlin. On iOS, NativeScriptKit is generated from core's own TypeScript by the same compiler, so it follows core
   release by release (see [Under the hood](#under-the-hood)).
5. **Plugins compile from their own TypeScript.** For each plugin the compiler fetches the exact source its published
   version was built from, checks it against the published JavaScript, and compiles it with your app. The plugin's
   native code (`platforms/ios`, `platforms/android`: Swift, Objective-C, `.xcframework`s, CocoaPods, Swift packages,
   Java/Kotlin, Gradle dependencies) is linked unchanged.
6. **`App_Resources` carry over** as the CLI carries them: `Info.plist` and entitlements merged with plugins', asset
   catalogs, the launch screen, `build.xcconfig`, the Android manifest and resources, fonts, and the files your build
   copies (`assets/`). Native source in `App_Resources/iOS/src` is compiled into the app, and app extensions (widgets,
   Live Activities) become their own targets.

## What a compiled release supports

### Frameworks

| Framework | Status |
| --- | --- |
| Vue 3 (`<script setup>`, Options API) | Supported |
| Angular (standalone with signals; NgModules with zone.js) | Supported; `ChangeDetectionStrategy.Default` components, the `async` pipe, a subset of RxJS |
| Svelte 4 and 5 | Supported |
| React (react-nativescript) | Supported |
| Solid | Supported |
| Octane | Supported |
| Plain TypeScript with XML | In progress: core's own Builder makes the views from your XML, as in the JavaScript build |

### Platforms

| | iOS | Android |
| --- | --- | --- |
| Pixel-identical to the JavaScript release | Recipes in six frameworks; gallery (40 screens); ns-octane; openjs-app's tabs | Recipes in six frameworks; gallery (169 of 171 shots); ns-octane |
| Verified on | Simulators and an iPhone 16 Pro | Emulators |
| NativeScriptKit | Generated from core | Hand port of core, on core's own `org.nativescript.widgets` |
| Runs on | iOS 17 and later; checked on iOS 26 and 27 | Android 7 (API 24) and later |

### Plugins

| Kind of plugin | In a compiled release |
| --- | --- |
| TypeScript over native APIs (most plugins) | Compiled from the plugin's source, as part of your app |
| Native code in `platforms/ios` / `platforms/android` | Linked unchanged |
| Installs objects into the JavaScript engine itself (`@nativescript/canvas`) | Needs a native counterpart in the kit. Canvas has one on iOS: 2D, WebGL and WebGPU over the same native library |
| Only meaningful with a JavaScript runtime (over-the-air JavaScript updates) | Replace it with a module of your own: `release.pluginReplacements` |

### What stops a build

The compiler refuses what it cannot compile faithfully, and says so with the file and line:

- **Inherently:** `eval`, `new Function`, loading code at run time and over-the-air JavaScript updates. There is no
  JavaScript to evaluate or replace. Apps that depend on these keep the JavaScript release.
- **Android: a core property the hand-ported kit does not apply yet.** The build names the view, the property and
  the line. `release: { allowUnimplementedProperties: true }` builds anyway, with a warning for each. On iOS every
  core property applies, as the kit is core.
- **Language constructs not supported yet**, such as a class declared inside a function, a `default` clause before
  other cases, symbol-named members, or `return` in a `finally` block. Each message names the construct.
- **Framework features not supported yet**, such as Angular `OnPush` under zone.js, Angular pipes other than
  `async`, more than one Angular `@Component` in a file, Vue `<style module>`, JSX spread attributes, and Vue
  Options-API keys beyond the common ones.
- **Plugin native code the build does not carry yet:** a prebuilt `.framework` or `.a` (an `.xcframework` is
  fine), a resource `.bundle`, a `.podspec`, Android `jniLibs`/`.so` files, and plugin hooks.
- **Not at parity yet:** RTL layout, Dynamic Type and font scale, `background-image: url()`, inset box shadows,
  `font://` icons. Accessibility and localization are not yet checked against core.

## What your app may need

For most apps: **nothing but the flag.** Of the apps compiled so far, none changed their own source to compile.
What some needed was configuration, all of it in `release`:

| Situation | What to add |
| --- | --- |
| A plugin only meaningful with a JavaScript runtime (OTA updates such as Norrix) | `pluginReplacements: { '@norrix/client-sdk': './release/norrix.ts' }`: a module of your own with the same exports |
| A plugin whose published source cannot be found or does not match its JavaScript | `pluginSources: { 'some-plugin': '../some-plugin' }`: a checkout of its source |
| You patch a plugin with patch-package | The same patch against the plugin's TypeScript source, in `native-release/patches/<package>+<version>.patch`. The compiler compiles source, not the published JavaScript your existing patch changes |
| You patch `@nativescript/core` with patch-package | The compiler recognizes common core patches and applies their effect; a core patch it does not recognize stops the build, so you know to raise it |
| A core property the compiled build does not apply yet | Fix it in the kit, or `allowUnimplementedProperties: true` to ship without it |

```ts
// nativescript.config.ts: every option
release: {
  compiled: true,
  pluginReplacements: { '@norrix/client-sdk': './release/norrix.ts' },
  pluginSources: { 'some-plugin': '../some-plugin' },
  allowUnimplementedProperties: false,
},
```

How it went for real apps:

- **openjs-app** (Angular, on the App Store): no source changes. A stand-in for its OTA update plugin, and
  source-level copies of two plugin patches.
- **ns-octane** (Octane, six plugins): no source changes. Its input-accessory patch was ported to the plugin's
  source. One Swift file that called into the JavaScript runtime was left out, with a message.
- **ns-duo-guitar** (Angular, `@nativescript/canvas` with WebGPU): no source changes needed to compile. Its AI
  feature was left out of the release by product choice.

## Checking a compiled release

Treat a compiled release like any new build: compare it with the JavaScript release before you ship it.

1. Build both: `ns build ios --release` and `ns build ios --compiled`, on the same version of `@nativescript/core`
   (the compiler's kit is core at its own version). They use the same app id, so install them on separate
   simulators, or uninstall between them (installing over a different build keeps stale files).
2. Walk the same screens and taps in both, focusing and typing in every input, and compare. The proof apps are
   compared pixel by pixel; differences that come from the platform itself (the clock, animation timing) are
   expected.
3. Watch for crashes as well as pixels: a screen can match and still fail on interaction.

A command that runs this comparison for you (`ns compiled verify`) is planned.

## FAQ

### Do I have to change my app to use `--compiled`?

Usually not. The compiler reads the TypeScript, templates and CSS you already have. None of the apps compiled so
far changed their own source; some added a few lines of `release` configuration (see
[What your app may need](#what-your-app-may-need)). If something cannot be compiled, the build stops and names the
file and line, so you never find out from a user.

### How do I map a crash in a compiled release back to my TypeScript?

**iOS, today:** every compiled statement carries the file and line it came from (a Swift `#sourceLocation`
directive). The archive's dSYM therefore symbolicates crash reports straight to your `.ts`, `.vue`, `.tsx` or
`.svelte` lines. Upload the dSYM to your crash reporter (Sentry, Crashlytics, App Store Connect) as you would for any
iOS app, and its frames name your TypeScript. The Xcode debugger shows and steps through the same lines.

**Android, today:** Kotlin has no such directive, so the build writes a line table (`source-lines.json`) beside the
Gradle project. `ns-native-retrace` reads a stack trace in source lines: it runs R8's retrace with the build's
`mapping.txt` (from the Android SDK's command-line tools), then applies the line table:

```bash
adb logcat -d -s AndroidRuntime | npx ns-native-retrace platforms/compiled/android
npx ns-native-retrace platforms/compiled/android crash.txt    # or a trace saved from your crash reporter
```

Expressions from templates map to the component's source file, matched by what they share with it; with a separate
template file (Angular's `templateUrl`) that is the component's `.ts`, not the `.html`. The code that builds a
component's view tree appears under the component's generated name (for example `GuitarComponent.swift`), which
still tells you which component it was.

**Planned:**

- One upload for Android crash reporters: the line table composed into `mapping.txt`, or a standard source map, so
  reporters show TypeScript lines without a manual step.
- Template-file lines for template expressions and the view-building code.

### Can I debug a compiled release?

With Xcode or Android Studio, as a native app: breakpoints, stepping and variables, on iOS against your TypeScript
lines. `ns debug` and Chrome DevTools need the JavaScript runtime, so they stay with development builds.

### Will the compiled release behave exactly like the JavaScript one?

That is the goal, and it is checked rather than assumed. JavaScript's semantics (numbers, promises and microtask
order, closures, iteration order, `Map`/`Set`) are reproduced by a runtime that the compiler's differential tests
hold to Node's output, and the proof apps match their JavaScript releases pixel for pixel. The development runtime
and the release are still different engines, so check each release before you ship it (see
[Checking a compiled release](#checking-a-compiled-release)).

### Can I keep over-the-air updates (Norrix, CodePush-style)?

No. Over-the-air updates replace the JavaScript bundle, and a compiled release has none. Ship updates through the
stores, and replace the update plugin with a no-op module through `release.pluginReplacements`. If over-the-air
updates are essential to you, keep releasing on the JavaScript runtime.

### Can I use any npm package?

Packages are compiled with your app from their source, like plugins, so what matters is what they do: code that
uses `eval`, `new Function` or loads code at run time cannot be compiled. Widely used libraries are not yet
systematically verified; a construct the compiler does not support stops the build with its location.

### Can I still write native code?

Yes. Swift in `App_Resources/iOS/src` is compiled into the app and called from your TypeScript as before. Plugins'
native code (Swift, Objective-C, `.xcframework`s, CocoaPods, Swift packages, Java, Kotlin, Gradle dependencies)
links unchanged. App extensions such as widgets and Live Activities become their own targets.

### Is the generated Swift and Kotlin meant to be edited?

No. It is build output in `platforms/compiled/<platform>`, regenerated on every build; your TypeScript stays the
source of truth. You can open the iOS project in Xcode to run, profile or debug it.

### How long does a compiled build take?

The compile step takes seconds to tens of seconds, depending on the app (an Angular app with 9 components and 27
modules: about 20 seconds), followed by Xcode's or Gradle's build. Rebuilds after a small change take a few seconds
of Xcode or Gradle time.

### Which platforms and OS versions?

iOS 17 and later, and Android. visionOS, watchOS and other platforms build on the JavaScript runtime.

### What if a plugin I use does not compile?

The build names the plugin and what stopped it. Depending on the cause: point `release.pluginSources` at its
source, replace it with `release.pluginReplacements`, or raise it with the plugin's author. Plugins that install
objects into the JavaScript engine (such as `@nativescript/canvas`) need a native counterpart in the kit, which
exists for canvas on iOS.

### Can I go back?

Any time: `--no-compiled` builds one release on the JavaScript runtime, and removing `release.compiled` from the
config makes it the default again. Nothing in your project depends on the compiled build.

## Under the hood

Who touches what:

| Piece | What it is | Who uses it |
| --- | --- | --- |
| The CLI (`nativescript`) | `--compiled`, the `release` config, building, signing and installing the compiled project | App developers |
| `@nativescript/compiler` | The compiler, and NativeScriptKit's sources for Swift and Kotlin | App developers, as a devDependency |
| NativeScriptKit | `@nativescript/core` as native code, linked by every compiled app | Nobody directly; it comes with the compiler |
| Core's kit generator (`tools/native-kit` and `packages/compiler` in the NativeScript repo) | Compiles core's TypeScript into NativeScriptKit, once per core release, checked by CI, which builds every file of the kit; the compiler is published at core's version | Core maintainers |

NativeScriptKit started as a hand port of core and matched it wherever it was ported, but a hand port drifts
everywhere else. It is now generated from core's own TypeScript by the same compiler that compiles apps, so every
core release, fix and platform-version branch reaches compiled releases without a port. On iOS the generated kit
runs the proof apps; Android still uses the hand port.

## What is still open

- Publishing `@nativescript/compiler` and releasing the CLI flag.
- Plain TypeScript apps with XML pages (in progress), and core's own UI test suite run as a compiled app.
- Plugins: `.framework` and static libraries, resource bundles, plugin hooks, and a way for plugin authors to ship
  native counterparts of engine-bound code.
- Android: the kit generated from core, and real-device verification.
- Accessibility, RTL, Dynamic Type and localization at core parity.
- A command that compares a compiled release with its JavaScript release for you (`ns compiled verify`), and
  uploading the compiled code's TypeScript line maps to crash reporters.

## See also

- [Two pathways](/guide/pathways)
- [SwiftUI, live](/guide/swiftui-live): the other direction: write Swift, develop it live.
- [Publishing overview](/guide/publishing/)
