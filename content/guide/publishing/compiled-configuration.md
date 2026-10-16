---
title: 'Compiled releases: configuration'
description: The release options in nativescript.config.ts, how the flag and the config combine, and what an app may need to add.
contributors:
  - NathanWalker
---

## Turning it on

`--compiled` on `ns build`, `ns run` or `ns deploy` compiles that release, and implies `--release`. To make it the
default, set `release.compiled` in `nativescript.config.ts`:

```ts
// nativescript.config.ts
export default {
  id: 'org.example.app',
  release: {
    compiled: true, // every release build is compiled
  },
  android: {
    release: { compiled: false }, // except Android's
  },
} as NativeScriptConfig
```

- `--compiled` and `--no-compiled` win over the config.
- `ios.release` and `android.release` merge over the top-level `release`; object options merge by key.
- Debug builds always run on the JavaScript runtime.

The compiler reads `nativescript.config.ts` without running it: it takes the object literal after `export default`
(an `as` or `satisfies` is fine). A value computed in code, or a config exported through a variable, isn't seen.

## Options

All of them go in `release`, or in a platform's `release`.

| Option                         | What it does                                                                                                                                                                                 |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `compiled`                     | Release builds are compiled instead of bundled for the JavaScript runtime.                                                                                                                   |
| `pluginReplacements`           | `{ 'package': './path.ts' }`: replaces a package with a module of yours that has the same exports. For plugins that only make sense with a JavaScript runtime, such as over-the-air updates. |
| `pluginSources`                | `{ 'package': '../checkout' }`: compiles a plugin from a local checkout of its source instead of fetching the published revision.                                                            |
| `allowUnimplementedProperties` | Builds even when the app sets a core property the compiled build doesn't apply, with a warning for each.                                                                                     |
| `allowCoreMismatch`            | Builds with a `@nativescript/core` other than the one the compiler was made from, with a warning.                                                                                            |
| `allowUntestedFrameworks`      | Builds with a framework version outside the [tested ones](/guide/publishing/compiled-differences#tested-framework-versions), with a warning.                                                 |
| `narrowKitKeeps`               | Android: R8 keeps only what the kit's reflection needs. See [Android](/guide/publishing/compiled-android#minification-r8).                                                                   |
| `generatedKit`                 | Android: `false` builds on the older hand-written kit instead of the one generated from core.                                                                                                |

## What your app may need

Most apps need nothing but the flag. Of the apps compiled so far, none changed their own source; some added
configuration:

| Situation                                                                       | What to do                                                                                                                                                                                             |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| A plugin that only makes sense with a JavaScript runtime (over-the-air updates) | `pluginReplacements: { '@norrix/client-sdk': './release/norrix.ts' }`                                                                                                                                  |
| A plugin whose published source can't be found, or doesn't match its JavaScript | `pluginSources: { 'some-plugin': '../some-plugin' }`                                                                                                                                                   |
| You patch a plugin with patch-package                                           | Write the same patch against the plugin's TypeScript source, in `native-release/patches/<package>+<version>.patch`. The compiler compiles the source, not the published JavaScript your patch changes. |
| You patch `@nativescript/core` with patch-package                               | The compiler recognizes common core patches and applies their effect. One it doesn't recognize stops the build.                                                                                        |
| An `Info.plist` with no `UIApplicationSceneManifest` (older templates)          | Nothing: the build adds the template's and says so.                                                                                                                                                    |

## Hooks

Your project's hooks run as they do for a JavaScript build: `before-prepare`/`after-prepare` and
`before-buildIOS`/`after-buildIOS` (`buildAndroid` on Android), with the same arguments. In a compiled build
`projectRoot` is `platforms/compiled/<platform>`, so a hook that edits the Xcode or Gradle project under
`platforms/ios` or `platforms/android` has nothing to change.
