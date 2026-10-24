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
| `stubPlugins`                  | `['nativescript-ui-listview']`: builds binary-only plugins as empty stand-ins. See [Plugin options](#plugin-options).                                                                        |
| `allowUnimplementedProperties` | Builds even when the app sets a core property the compiled build doesn't apply, with a warning for each.                                                                                     |
| `allowCoreMismatch`            | Builds with a `@nativescript/core` other than the one the compiler was made from, with a warning.                                                                                            |
| `allowUntestedFrameworks`      | Builds with a framework version outside the [tested ones](/guide/publishing/compiled-differences#tested-framework-versions), with a warning.                                                 |
| `narrowKitKeeps`               | Android: R8 keeps only what the kit's reflection needs. See [Android](/guide/publishing/compiled-android#minification-r8).                                                                   |
| `generatedKit`                 | Android: `false` builds on the older hand-written kit instead of the one generated from core.                                                                                                |

## Plugin options

Paths are relative to the project. `ios.release` and `android.release` can set them per platform: `pluginReplacements`
and `pluginSources` merge by package over the top-level ones, while a platform's `stubPlugins` list replaces the
top-level list.

### `pluginReplacements`

Every import of the package resolves to a TypeScript module of your app instead. The module exports, typed, what
your app uses of the package. The package's native code isn't linked. Use it for a package that only makes sense
with a JavaScript runtime, a JavaScript-only package the compiler can't type, or a binary-only plugin you rewrite.

```ts
// nativescript.config.ts
release: {
  pluginReplacements: { 'some-ota-plugin': './release/ota.ts' },
},
```

```ts
// release/ota.ts: the same exports, typed; a compiled release has no bundle to update
export async function sync(): Promise<boolean> {
  return false
}
```

### `pluginSources`

The compiler normally fetches the source a plugin's published version was built from, and checks it against the
installed JavaScript. `pluginSources` points a package at a checkout of its TypeScript instead, used as it is and
not checked. Use it for a fork, a private package, or one whose published source can't be found; the build's
message names this option when that happens.

```ts
release: {
  pluginSources: { 'some-plugin': '../some-plugin' },
},
```

### `stubPlugins`

`nativescript-ui-listview`, `-sidedrawer`, `-calendar`, `-chart`, `-dataform`, `-autocomplete` and `-gauge` are
binary-only: they ship no TypeScript source, and the build stops on each one it finds. Listing one in
`stubPlugins` builds it as a no-op stand-in. Its views are empty and keep their place in the layout (row, column,
size, margins, classes), their content and events are dropped, and every method does nothing. Its native code isn't
linked, and the build prints a warning naming each stubbed package. Naming any other package is an error.

```ts
release: {
  stubPlugins: ['nativescript-ui-listview', 'nativescript-ui-sidedrawer'],
},
```

A stubbed screen renders blank where the plugin was, so this suits trying the rest of an app; replace the plugin
before you ship.

## What your app may need

Most apps need nothing but the flag. Of the apps compiled so far, none changed their own source; some added
configuration:

| Situation                                                                       | What to do                                                                                                                                                                                             |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| A plugin that only makes sense with a JavaScript runtime (over-the-air updates) | `pluginReplacements: { '@norrix/client-sdk': './release/norrix.ts' }`                                                                                                                                  |
| A plugin whose published source can't be found, or doesn't match its JavaScript | `pluginSources: { 'some-plugin': '../some-plugin' }`                                                                                                                                                   |
| A binary-only plugin (`nativescript-ui-*`)                                      | `pluginReplacements`, or `stubPlugins: ['nativescript-ui-listview']`                                                                                                                                   |
| You patch a plugin with patch-package                                           | Write the same patch against the plugin's TypeScript source, in `native-release/patches/<package>+<version>.patch`. The compiler compiles the source, not the published JavaScript your patch changes. |
| You patch `@nativescript/core` with patch-package                               | The compiler recognizes common core patches and applies their effect. One it doesn't recognize stops the build.                                                                                        |
| An `Info.plist` with no `UIApplicationSceneManifest` (older templates)          | Nothing: the build adds the template's and says so.                                                                                                                                                    |

## Hooks

Your project's hooks run as they do for a JavaScript build: `before-prepare`/`after-prepare` and
`before-buildIOS`/`after-buildIOS` (`buildAndroid` on Android), with the same arguments. In a compiled build
`projectRoot` is `platforms/compiled/<platform>`, so a hook that edits the Xcode or Gradle project under
`platforms/ios` or `platforms/android` has nothing to change.
