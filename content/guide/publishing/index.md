---
title: Publishing Overview
description: Build a release of your app, on the JavaScript runtime or compiled to native code, and publish it to the stores.
contributors:
  - rigor789
  - NathanWalker
breadcrumbs:
  - name: 'Publishing'
---

Publishing takes two steps: build a release of the app, then submit that build to a store.

## 1. Build a release

NativeScript builds a release in one of two ways. Your development workflow (`ns run`, `ns debug`, HMR) is the same
for both.

|  | JavaScript runtime release | Compiled release |
| --- | --- | --- |
| **Command** | `ns build ios --release` | `ns build ios --compiled` |
| **What ships** | Your bundled JavaScript and the NativeScript runtime (V8 on Android and iOS) | Swift (iOS) and Kotlin (Android) compiled from your TypeScript; no JavaScript engine |
| **Status** | Stable, the default | [Preview](/guide/publishing/compiled) |
| **Plugins** | Every NativeScript plugin | Plugins compiled from their TypeScript source; see [what a compiled release supports](/guide/publishing/compiled#what-a-compiled-release-supports) |

A compiled release is opt-in. It can be the default for every release build through `nativescript.config.ts`, per
platform, and `--no-compiled` builds one release on the JavaScript runtime whatever the config says. Read
[Compiled releases](/guide/publishing/compiled) for how it works, what it supports and how to check that the
compiled build matches the JavaScript one.

## 2. Publish it

- [Publishing to the Apple App Store](/guide/publishing/apple-app-store)
- [Publishing to Google Play](/guide/publishing/android-google-play)
- [Publishing iOS updates with `ns publish ios`](/guide/publishing/ns-publish)
- [Publishing with Fastlane](https://blog.nativescript.org/automatic-nativescript-app-deployments-with-fastlane/)

The store steps are the same for both kinds of release: a compiled release produces the same signed `.ipa`, `.apk`
or `.aab`, under the same app id.
