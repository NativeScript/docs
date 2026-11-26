---
title: 'Compiled releases: FAQ'
description: Common questions about compiled releases.
contributors:
  - NathanWalker
---

## Do I have to change my app?

Usually not. The compiler reads the TypeScript, templates and CSS you already have. None of the apps compiled so far
changed their own source; some added a few lines of [configuration](/guide/publishing/compiled-configuration#what-your-app-may-need).
What the compiler knows it can't run stops the build with the file and line. Some differences only show at run time:
see [What works](/guide/publishing/compiled-differences).

## Will it behave exactly like the JavaScript release?

That is the goal, and it is checked rather than assumed: the compiler's tests run each case under Node and as
compiled Swift and Kotlin and require the same output, and the proof apps are compared with their JavaScript
releases screen by screen. It isn't there yet: the [known differences](/guide/publishing/compiled-differences#known-differences-at-run-time)
are listed. You develop on one engine and ship another, so check each release before you ship it.

## Can I keep over-the-air updates?

No. Over-the-air updates replace the JavaScript bundle, and a compiled release has none. Ship updates through the
stores, and replace the update plugin with a no-op module through `release.pluginReplacements`. If over-the-air
updates are essential to you, keep releasing on the JavaScript runtime.

## Can I use any npm package?

Packages are compiled with your app from their source, so what matters is what they do: code that uses `eval`,
`new Function` or loads code at run time can't be compiled. Widely used libraries are not yet systematically
verified; a construct the compiler doesn't support stops the build with its location.

## What if a plugin doesn't compile?

The build names the plugin and what stopped it. Depending on the cause: point `release.pluginSources` at its source,
replace it with `release.pluginReplacements`, or raise it with the plugin's author. Plugins that install objects
into the JavaScript engine (such as `@nativescript/canvas`) need a native counterpart in the kit; canvas has one.

## Can I still write native code?

Yes. Swift in `App_Resources/iOS/src` is compiled into the app and called from your TypeScript as before. Plugins'
native code links unchanged. See [iOS](/guide/publishing/compiled-ios) and [Android](/guide/publishing/compiled-android).

## How do I debug a compiled release, or map a crash to my TypeScript?

As a native app, in Xcode or Android Studio. On iOS, crash reports and the debugger show your TypeScript lines
through the dSYM. On Android, `ns-native-retrace` maps a stack trace to them. `ns debug` and Chrome DevTools stay with
development builds. Details: [iOS](/guide/publishing/compiled-ios#crashes-and-debugging),
[Android](/guide/publishing/compiled-android#crashes-and-debugging).

## What does the generated Swift and Kotlin look like?

It is build output in `platforms/compiled/<platform>`, regenerated on every build; your TypeScript stays the source
of truth. It is JavaScript's semantics compiled to native code, not a port to idiomatic Swift or Kotlin. A Swift or
Kotlin developer reading it will find:

- **Formatted code that names its source.** The kit is laid out by swift-format and ktfmt, and compiled statements
  carry the TypeScript line they came from.
- **Real classes and typed calls.** Core's classes are Swift and Kotlin classes, and most calls into UIKit and the
  Android SDK are direct, typed calls.
- **Checked threading.** Swift builds in the Swift 6 language mode, isolated to the main actor. Kotlin marks code
  `@UiThread` or `@AnyThread`, checked by lint.
- **Few force unwraps.** A value its type promises but that is missing throws a catchable `TypeError`, not a trap.
- **JavaScript's types where TypeScript has no better one.** Numbers are `Double`; untyped values are `Any?` and
  are often read by name, through tables classes carry for that. Async code is written as callbacks, not
  `async`/`await` or coroutines. Some names are generated.

Treat it like any compiler's output: something you ship and profile, not something you maintain.

## How long does a build take?

The compile step takes seconds to tens of seconds, then Xcode or Gradle builds. The first build also compiles
NativeScriptKit: about three minutes on iOS for a blank app, a minute or two on Android. A rebuild after a small
change takes most of a minute, because release builds optimize the whole program.

## Which platforms?

iOS 17 and later, and Android 7 (API 24) and later. visionOS and other platforms build on the JavaScript runtime.

## Can I go back?

Any time: `--no-compiled` builds one release on the JavaScript runtime, and removing `release.compiled` makes it the
default again. Nothing in your project depends on the compiled build.
