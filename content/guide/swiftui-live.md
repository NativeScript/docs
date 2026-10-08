---
title: SwiftUI, live
description: Edit a SwiftUI app's Swift while it runs and see each save in about a third of a second, with the app's state kept. NativeScript is the development runtime; what ships is your Swift.
contributors:
  - NathanWalker
---

<!-- Keep in step with the swiftui-live repository's README and docs/BRIEF.md. -->

::: warning Preview
SwiftUI Live is in preview and not yet publicly available. This page describes it as it works today, so the
pathway is clear before it opens up.
:::

This is one of NativeScript's [two pathways](/guide/pathways). You write SwiftUI, in an ordinary Xcode project,
and NativeScript runs it **live** while you develop: save a Swift file and the running app shows the change in
about 0.15–0.5 seconds, at the screen and state you were on. Nothing of NativeScript ships. The App Store build is
your Swift, compiled by Xcode as usual.

It is the inverse of the [TypeScript pathway](/guide/publishing/compiled): there, you write TypeScript and the
release is compiled to Swift and Kotlin. Here, you write Swift and the development session runs it on a JavaScript
engine for speed.

## What a session is like

In your app's folder:

```bash
swiftui-live            # reads the .xcodeproj, builds, launches on a simulator, watches
swiftui-live doctor     # checks the machine; lists which views go live on save, and why the rest do not
swiftui-live down       # stops the session
```

There is nothing to add or configure in the project: no `#Preview` blocks, mocks or annotations. The command
reads the project's targets, packages and build settings and builds a development copy of the app (about 22 s the
first time, 10 s after that). The development build lives in `~/Library/Caches/swiftui-live`; your project is not
modified.

Each save reports one line:

```
[live] ● Backyards/BackyardGridItem.swift: on screen in 368 ms
[live]   swiftc agrees (0.7 s)
[live] ✗ Backyards/BackyardGridItem.swift:37:31: value of type 'Backyard' has no member 'nam' (swiftc); the last version it accepted is back on screen
[live] ○ Donut/TopDonutSalesChart.swift: line 36: modifier `.chartXAxis` is not in the compiled runtime yet; taking the library path (state kept, about a second)
```

## How it works

```text
your .swift file ── swift-js ──▶ JavaScript for the view's body ──▶ engine in the running app
                                                                     │
                                       the body builds real SwiftUI views; the rest of the app
                                       is untouched compiled Swift
          └── swiftc type-checks the same save against the app's module; a rejected save is rolled back
```

- **Fast path.** Each view's `body` is compiled from Swift to JavaScript and run by an engine inside the app:
  JavaScriptCore in a plain Xcode project, or NativeScript's V8 in a NativeScript host. The body builds a tree of
  real SwiftUI views. Swift that the compiler cannot express stays compiled Swift (an _island_) and runs in place.
- **Library path.** A save that changes code outside view bodies, or uses SwiftUI the fast path does not cover yet,
  is built as a replacement library, the mechanism Xcode Previews uses: about a second, state kept.
- **Swift stays the judge.** Every save is also type-checked by `swiftc` against the app's own module. Anything the
  compiler rejects is taken back off the screen.

## What is measured

- **Real apps, unmodified.** Apple's Food Truck and Backyard Birds (SwiftData, three packages) run live from their
  own sources.
- **Pixel conformance.** Views rendered live and compiled in the same process are compared pixel by pixel: the
  fixture app 16 of 16 (on both JavaScriptCore and V8), Food Truck 6 of 6, Backyard Birds 6 of 6, checked nightly
  in CI.
- **Coverage.** Of every SwiftUI view in ten open-source apps (1,684), 1,068 (63%) go live in 0.15–0.5 s; the rest
  take the library path in about a second, still with state kept.

## Android: the same SwiftUI source, live

The same SwiftUI source also runs live on an Android emulator. View bodies are compiled to JavaScript as on iOS and
rendered by **Jetpack Compose** (Material 3), and the app's models are compiled for Android by the official Swift
SDK for Android. One save updates an iOS simulator and an Android emulator at once.

What this proves, and what it does not yet:

| | iOS | Android |
| --- | --- | --- |
| Live development of SwiftUI | Yes | Yes, rendered by Compose |
| The app's non-UI Swift | Compiled Swift | Compiled by the Swift SDK for Android |
| Views the fast path cannot express | Islands of compiled SwiftUI | A placeholder (there is no SwiftUI on Android to fall back to) |
| Look | SwiftUI | Material 3: SwiftUI's vocabulary mapped onto Compose components |
| A release build | Your Xcode project, as always | Not yet: there is no release path for SwiftUI on Android today |

## Limits today

None of these is architectural; each is breadth or polish with a known path.

- **37% of views take the library path** (about a second instead of a third of one). The missing SwiftUI
  vocabulary is ranked by how often real apps use it (`.onReceive`, `.focused`, gestures, Charts modifiers).
- **New stored properties, types or model changes need a rebuild**, as with Previews and every hot-reload tool:
  Swift cannot add stored properties to a running binary. `swiftui-live rebuild` relaunches into the saved state.
- **Simulator and emulator only.**
- **Some Swift semantics differ on the fast path**: integer overflow traps, `Dictionary` order, number formatting.
  `swiftc` still checks every save.
- **Fidelity is proven on still frames in light mode.** Animation, dark mode, Dynamic Type and right-to-left are not
  yet in the conformance harness.

## Requirements

- macOS with Xcode 26 or later, and Node 22.
- For Android: the Android SDK with an arm64 emulator image, NDK r30, and the Swift 6.4 toolchain with the Swift SDK
  for Android.

## See also

- [Two pathways](/guide/pathways): choosing between SwiftUI and TypeScript.
- [Compiled releases](/guide/publishing/compiled): the TypeScript pathway's release, with no JavaScript runtime.
