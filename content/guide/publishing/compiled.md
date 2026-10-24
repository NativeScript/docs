---
title: Compiled releases
description: Build a release of your NativeScript app compiled to Swift and Kotlin, with no JavaScript runtime inside.
contributors:
  - NathanWalker
---

<!-- Keep in step with the compiler's docs/CLI.md and the support table (SUPPORT.md) in NativeScript/swiftui-live. -->

::: warning Alpha
Compiled releases are a public preview: `nativescript`, `@nativescript/core` and `@nativescript/compiler` are
published with the `alpha` tag. What isn't implemented yet stops the build (see
[Preview limits](/guide/publishing/compiled-differences#preview-limits)). Check each compiled build against your
JavaScript release before you ship it.
:::

A compiled release is how the TypeScript option ships (see [TypeScript or SwiftUI](/guide/pathways)). You develop with
`ns run` and `ns debug` exactly as today: on the JavaScript runtime, with HMR and Chrome DevTools. When you build the
release with `--compiled`, your app, its framework, its plugins and `@nativescript/core` are compiled to **Swift on
iOS and Kotlin on Android**. The app ships no JavaScript engine, no bundle and no NativeScript runtime.

```bash
ns build ios --compiled
```

Start with [Getting started](/guide/publishing/compiled-getting-started). Then:

- [Configuration](/guide/publishing/compiled-configuration): the `release` options in `nativescript.config.ts`.
- [iOS](/guide/publishing/compiled-ios) and [Android](/guide/publishing/compiled-android): requirements, signing,
  the generated projects, crashes and debugging.
- [What works](/guide/publishing/compiled-differences): frameworks, plugins, what the build refuses, and the known
  differences.
- [Reporting issues](/guide/publishing/compiled-report) with `ns compiled report`.
- [FAQ](/guide/publishing/compiled-faq).

## Before you choose `--compiled`

What you gain:

- **No JavaScript engine in the app.** Your TypeScript, your framework and `@nativescript/core` ship as Swift and
  Kotlin.
- **Smaller apps that use less memory** (measurements below).
- **What the compiler can't run faithfully, it refuses.** Before compiling, a check reports every construct outside
  the supported subset with the file, the line and what to write instead.

What you give up:

- **Some JavaScript semantics.** Most are reproduced; the [known differences](/guide/publishing/compiled-differences#known-differences-at-run-time)
  are not, and they show only when the app runs.
- **Code made or loaded at run time.** `eval`, `new Function`, `Proxy`, `Reflect` and a computed `import()` are
  refused.
- **Over-the-air updates.** There is no JavaScript bundle to replace. Updates go through the stores.
- **Speed in some code.** Launch is no faster. Typed class code is faster on iOS, but JavaScript's library (JSON,
  regular expressions, sorting, `Map` and `Set`, `async`) is several times slower than on V8 today, and on Android
  so are string `+=` and list scrolling. Measure data-heavy screens.
- **Build time.** The first build compiles NativeScriptKit, about three minutes on iOS. A rebuild after a small
  change takes most of a minute.
- **JavaScript debugging.** A compiled release is debugged as a native app in Xcode or Android Studio.

## Measured on real apps

| App                                                                | JavaScript release | Compiled release |
| ------------------------------------------------------------------ | ------------------ | ---------------- |
| Recipes (Vue), first frame, iPhone 16 Pro                          | 190 ms             | 191 ms           |
| Recipes (Vue), memory footprint after launch, iPhone 16 Pro        | 47.3 MB            | 18.9 MB          |
| Recipes (Vue), `.ipa`                                              | 14 MB              | 2.35 MB          |
| ns-duo-guitar (Angular, WebGPU), Play download, arm64              | 28.1 MB            | 14.6 MB          |
| openjs-app (Angular, eight plugins), Play download, arm64, 420 dpi | 28.6 MB            | 15.2 MB          |
| openjs-app, `.ipa`                                                 | 27.8 MB            | 17.3 MB          |
| openjs-app, installed on iOS                                       | 79.9 MB            | 40.0 MB          |

iOS: 2026-10-09, cold launch to first frame from screen recordings, median of 5 runs; memory is the physical
footprint; the `.ipa` is unsigned, arm64. Android: 2026-10-10, sizes from the App Bundle for one device
configuration (arm64-v8a, 420 dpi, English). openjs-app on iOS: 2026-10-13. The scripts are in the compiler's
`bench/` folder.

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
2. **Your styles go through your own build.** Your CSS pipeline (Tailwind, PostCSS, Sass) runs as your app's build
   runs it, and the result is applied as core applies CSS. Components' own styles are scoped as their framework
   scopes them.
3. **Everything is type-checked as one program**, then translated. JavaScript semantics (numbers, promises and
   microtasks, closures, `Map`/`Set`, iteration order) are reproduced by a runtime that the compiler's tests hold to
   Node's output.
4. **Core becomes NativeScriptKit**: core's views, layouts, styling, property system and platform APIs as Swift and
   Kotlin, generated from core's own TypeScript by the same compiler. It follows core release by release.
5. **Plugins compile from their own TypeScript.** For each plugin the compiler fetches the exact source its
   published version was built from, checks it against the published JavaScript, and compiles it with your app. Its
   native code is linked unchanged.
6. **`App_Resources` carry over** as the CLI carries them.

## Under the hood

| Piece                                                                                            | What it is                                                                                | Who uses it                                 |
| ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------- | ------------------------------------------- |
| The CLI (`nativescript`)                                                                         | `--compiled`, the `release` config, building, signing and installing the compiled project | App developers                              |
| `@nativescript/compiler`                                                                         | The compiler, and NativeScriptKit for Swift and Kotlin                                    | App developers, as a devDependency          |
| NativeScriptKit                                                                                  | `@nativescript/core` as native code, linked by every compiled app                         | Nobody directly; it comes with the compiler |
| Core's kit generator (`tools/native-kit` and `packages/compiler` in the NativeScript repository) | Compiles core's TypeScript into NativeScriptKit, once per core release, checked by CI     | Core maintainers                            |

The compiler is published at core's version and carries the kit generated from that core release, which is why the
two must match.

## What is still open

- The [preview limits](/guide/publishing/compiled-differences#preview-limits): some Angular forms placements,
  `canLoad` and `resolve`, `<ng-content>`, and binary-only plugins.
- The [differences and unsupported patterns](/guide/publishing/compiled-differences#not-fixed-yet) listed today.
- The speed of the runtime library and of typed member access.
- Plugins: `.framework` and static libraries, resource bundles, and a way for plugin authors to ship native
  counterparts of engine-bound code; a corpus of widely used plugins and npm libraries, built in CI.
- Android: `fetch` and `XMLHttpRequest`; R8's narrow kit keeps by default.
- `Intl.Collator`, `Intl.PluralRules` and `Intl.RelativeTimeFormat`.
- One upload of TypeScript line maps to Android crash reporters.

## See also

- [TypeScript or SwiftUI](/guide/pathways)
- [SwiftUI, live](/guide/swiftui-live): the other direction: write Swift, develop it live.
- [Publishing overview](/guide/publishing/)
