---
title: 'Compiled releases: getting started'
description: Install the alpha, build and run a compiled release on iOS and Android, and report what fails.
contributors:
  - NathanWalker
---

::: warning Alpha
Compiled releases are in alpha. Develop as usual, and check each compiled build against the JavaScript release
before you ship it.
:::

## 1. Install the alpha

The CLI, `@nativescript/core` and `@nativescript/compiler` must be the same alpha:

```bash
npm install -g nativescript@alpha

# in your project
npm install @nativescript/core@alpha
npm install --save-dev @nativescript/compiler@alpha
```

::: tip webpack 5.112
Until `@nativescript/webpack` 5.0.39 is out, a new webpack-based project needs `npm install -D webpack@5.111.1` for `ns run` (the JavaScript dev loop). Compiled builds aren't affected.
:::

The CLI runs the compiler from your project's `node_modules`. The build stops if your `@nativescript/core` is not
the version the compiler was made from, or if your framework is outside the
[tested versions](/guide/publishing/compiled-differences#tested-framework-versions).

You need Node.js 22 or newer, and:

- **iOS:** macOS with Xcode 26 or newer.
- **Android:** JDK 17 or newer and the Android SDK, on macOS or Linux. Windows is not supported yet.
- **git and network access** the first time a plugin is compiled: its source is fetched once and cached.

## 2. Build and run

`--compiled` implies `--release`. `ns run` and `ns debug` without it stay on the JavaScript runtime, with HMR.

**iOS:**

```bash
ns run ios --compiled                                # build, install and launch on a simulator; streams the log until Ctrl+C
ns build ios --compiled --for-device --team-id <id>  # signed archive and .ipa
```

**Android:** a release always needs a keystore, so pass all four `--key-store-*` options. To try it before you have
your upload key, make a throwaway one:

```bash
keytool -genkeypair -keystore test.keystore -storepass testpass -keypass testpass -alias test \
  -keyalg RSA -keysize 2048 -validity 365 -dname "CN=Test"

ns run android --compiled --key-store-path test.keystore --key-store-password testpass \
  --key-store-alias test --key-store-alias-password testpass
```

Add `--aab` to `ns build android` for an App Bundle. If a debug build of the app is installed, uninstall it first
(`adb uninstall <app id>`): Android won't install over an app signed with another key.

## 3. Make it the default (optional)

```ts
// nativescript.config.ts
export default {
  id: 'org.example.app',
  release: { compiled: true },
} as NativeScriptConfig
```

Now `ns build ios --release` is compiled too, and `--no-compiled` builds one release on the JavaScript runtime. See
[Configuration](/guide/publishing/compiled-configuration).

## 4. Find the output

The compiled projects are in `platforms/compiled/ios` (an Xcode project) and `platforms/compiled/android` (a Gradle
project). `platforms/ios` and `platforms/android` aren't touched. The build prints where the `.app`, `.ipa`, `.apk`
or `.aab` is; `--copy-to <path>` copies it out.

## 5. When something fails

- **The build stops with a message.** Most messages name your TypeScript file and line, and say what to write
  instead. Check [What works](/guide/publishing/compiled-differences) for the construct.
- **It looks like a NativeScript problem.** Run `ns compiled report ios` (or `android`). It shows you the report and
  asks before sending anything. See [Reporting issues](/guide/publishing/compiled-report).
- **The app throws at run time.** Uncaught errors are logged as `***** Fatal JavaScript exception *****` in the
  device log. Save the error to a file and run `ns compiled report ios --error crash.txt`.
- **You need to ship now.** Build that release with `--no-compiled`.
