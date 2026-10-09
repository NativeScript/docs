---
title: Two pathways
description: NativeScript is your development runtime, not your production runtime. Write SwiftUI and develop it live, or write TypeScript and compile the release to native code.
contributors:
  - NathanWalker
---

NativeScript has always run your app on a JavaScript runtime with direct access to every platform API. It now offers
two pathways that keep that development experience and ship **no JavaScript runtime at all**:

|  | 1. SwiftUI, live | 2. TypeScript, compiled |
| --- | --- | --- |
| **You write** | SwiftUI, in an Xcode project | TypeScript with `@nativescript/core` and the framework you like (Angular, Vue, React, Svelte, Solid, plain TypeScript) |
| **While developing** | NativeScript runs your SwiftUI views live: each save is on screen in about 0.15–0.5 s, state kept | `ns run`: the JavaScript runtime with HMR, Chrome DevTools and the whole npm ecosystem, exactly as today |
| **What ships** | Your Swift, built by Xcode as usual | Your app compiled to Swift (iOS) and Kotlin (Android) by `ns build --compiled` |
| **Platforms** | iOS; Android live development, rendered by Jetpack Compose | iOS and Android |
| **Status** | [Preview](/guide/swiftui-live) | [Preview](/guide/publishing/compiled) |

Both rest on the same idea: **develop live, ship native.** The development runtime gives you instant feedback; the
release is the native code a platform developer would have shipped.

## Which one fits

- **You know SwiftUI, or you are starting an iOS-first app in Swift**: take [SwiftUI, live](/guide/swiftui-live).
  You keep Xcode, Swift and your project as they are; NativeScript only shortens the edit-to-screen loop.
- **You know web development, or you already have a NativeScript app**: take
  [TypeScript, compiled](/guide/publishing/compiled). Nothing changes while you develop. The release build is
  compiled instead of bundled.

The two meet at the release: both ship native code with no engine inside, and both are checked the same way,
pixel by pixel against the build they replace.

## The JavaScript runtime is not going anywhere

A release on the JavaScript runtime (`ns build --release`) remains the default and is fully supported. Compiled
releases are opt-in, per build or per platform, and you can switch back with `--no-compiled` at any time. See
[Publishing](/guide/publishing/).
