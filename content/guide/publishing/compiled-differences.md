---
title: 'Compiled releases: what works'
description: The frameworks, apps, plugins and JavaScript a compiled release supports, what the build refuses, and where it still behaves differently from the JavaScript release.
contributors:
  - NathanWalker
---

<!-- The tables come from SUPPORT.md in NativeScript/swiftui-live, which tools/support-table.py generates from the compiler's test results (test262, the differential cases, the semantics list and the milestone runs). Regenerate and copy rather than editing a row by hand. -->

A [compiled release](/guide/publishing/compiled) runs your TypeScript as Swift and Kotlin, against a runtime that
reproduces JavaScript's semantics. This page lists what is checked, what the build refuses, and where a compiled
release still behaves differently from the JavaScript release. The status is as of 2026-10-15.

## Frameworks and apps

Each app is compared with its own JavaScript release build, screenshot by screenshot.

| App                                           | iOS                                                                       | Android                                                         |
| --------------------------------------------- | ------------------------------------------------------------------------- | --------------------------------------------------------------- |
| XML + TypeScript gallery                      | Identical (0 px)                                                          | Identical (0 px, minified)                                      |
| Vue gallery                                   | 189 of 191 shots identical; a text caret (timing) and one HtmlView differ | Identical (0 px, minified)                                      |
| Angular gallery                               | Identical (0 px)                                                          | Identical (0 px, minified)                                      |
| Svelte 5 gallery                              | Identical (0 px)                                                          | Identical (0 px, minified)                                      |
| OpenJS app (Angular, eight plugins)           | Builds and launches                                                       | 47 of 49 shots identical; the other two are run-to-run variance |
| ns-duo-guitar (Angular, WebGPU, audio worker) | On the App Store                                                          | On Google Play                                                  |

React, Solid and Octane compile with the same pipeline and are supported; they are not in the comparison runs above.

### Tested framework versions

The build stops on a framework version outside these (`release.allowUntestedFrameworks: true` builds anyway, with a
warning).

| Framework                 | Packages and versions                                                                                           |
| ------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Vue                       | `nativescript-vue` 3.1 and later 3.x                                                                            |
| Angular                   | `@nativescript/angular` and `@angular/core` 22.x                                                                |
| React                     | `react-nativescript` 5.x with `react` 18.2 or later 18.x                                                        |
| Solid                     | `@nativescript-community/solid-js` and `solid-js` 2.x (from 2.0.0-rc.0)                                         |
| Svelte                    | `@nativescript-community/svelte-native` 1.x with `svelte` 4.2+, or 5.x (from 5.0.0-alpha.0) with `svelte` 5.50+ |
| Octane                    | `@nativescript-community/octane` 0.2.4 and later 0.2.x                                                          |
| Plain TypeScript with XML | Core's own Builder: `{{ }}` bindings, code-behind, custom components and ListView templates                     |

Framework features not supported yet stop the build with a message. The main ones:

- **Angular:** under zone.js (`provideZoneChangeDetection()`), a component that doesn't set
  `changeDetection: ChangeDetectionStrategy.Default`; more than one `@Component` in a file; the `currency`,
  `i18nPlural` and `i18nSelect` pipes (`async`, `date`, `number`, `percent`, `uppercase`, `lowercase`, `titlecase`,
  `json`, `slice`, `keyvalue` and your own `@Pipe`s work). RxJS compiles from its source on iOS and is a subset on
  Android. Forms (template-driven and reactive, on NativeScript views), `[ngClass]`, `[ngStyle]` and route guards
  (`canActivate`, `canActivateChild`, `canDeactivate`, `canMatch`) work; the rest is in [Preview limits](#preview-limits).
- **React:** a component body may hold function declarations, variable declarations and the `return`; a bare
  statement such as `useEffect(() => …, [])` on its own line is refused. JSX spread attributes are refused.
- **Vue:** `<style module>`, `<style src>`, a prop `default`, and Options API keys other than `name`, `components`,
  `props`, `emits`, `data`, `computed`, `methods`, `watch` and `setup`.

## Plugins and platform APIs

| Kind of plugin                                                       | In a compiled release                                                   |
| -------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| TypeScript over native APIs (most plugins)                           | Compiled from the plugin's source, as part of your app                  |
| Native code in `platforms/ios` / `platforms/android`                 | Linked unchanged                                                        |
| Installs objects into the JavaScript engine (`@nativescript/canvas`) | Needs a native counterpart in the kit; canvas has one on both platforms |
| Only meaningful with a JavaScript runtime (over-the-air updates)     | Replace it with `release.pluginReplacements`                            |
| Binary-only, no TypeScript source (`nativescript-ui-*`)              | Stops the build; see [Preview limits](#binary-only-plugins)             |

Plugin native packaging not carried yet stops the build: a prebuilt `.framework` or `.a` (an `.xcframework` is
fine), a resource `.bundle`, a `.podspec`; on Android, `jniLibs/`, `.so` files, `assets/` and `cpp/` in a plugin's
`platforms/android`, and its `buildscript.gradle`, `rootbuildscript.gradle`, `include-settings.gradle` or
`before-plugins.gradle`.

The web globals the NativeScript runtime provides are there on both platforms: `crypto` (`randomUUID`,
`getRandomValues`, and `subtle` with SHA digests, HMAC and RSA-OAEP), `TextEncoder`/`TextDecoder`, `atob`/`btoa`,
timers, `queueMicrotask` and `console`. `fetch`, `XMLHttpRequest`, `FormData`, `Blob` and `AbortController` are
available on iOS only.

## What the build refuses

Before anything is compiled, the compiler checks the app and the plugin code it reaches, and reports each of these
with the file, the line and what to write instead, all at once.

| Construct                                                                         | Why                                          | Instead                                                                                |
| --------------------------------------------------------------------------------- | -------------------------------------------- | -------------------------------------------------------------------------------------- |
| `new Proxy(…)`                                                                    | No traps without a JavaScript engine         | A class with explicit getters and setters, or a `Map` for dynamic keys                 |
| `Reflect.*`                                                                       | Not provided by the runtime                  | The operation itself: `obj[key]`, `key in obj`, `Object.keys(obj)`, `new Cls(...args)` |
| `eval(…)`, `new Function(…)`                                                      | There is no engine to evaluate code          | A lookup of known functions, or keep this app on the JavaScript release                |
| `FinalizationRegistry`                                                            | Finalizers don't run                         | Release the resource explicitly (`dispose()`, `unloaded`, `disposeNativeView`)         |
| `SharedArrayBuffer`, `Atomics`                                                    | No shared memory between workers             | An `ArrayBuffer`, with copies posted between workers                                   |
| `with (obj) { … }`                                                                |                                              | Name the object explicitly                                                             |
| `import(expr)`, `require(expr)` with a computed specifier                         | Every module is linked when the app is built | Import each module by a literal path, and choose among them at run time                |
| `arguments.callee`, `__proto__`                                                   |                                              | A named function; `Object.getPrototypeOf`                                              |
| A bundler constant nothing defines (`declare const __API_URL__`, `process.env.X`) | It would read as undefined                   | Define it: Vite's `define` and webpack's `DefinePlugin` values are compiled in         |

The build also stops when:

- **`@nativescript/core` isn't the core the compiler was made from.** Install the version the message names
  (`release.allowCoreMismatch: true` builds anyway, with a warning).
- **The toolchain is missing or too old:** Xcode 26 for iOS; JDK 17 and the Android SDK for Android.
- **A language construct isn't supported yet**, such as a class declared inside a function that reads the function's
  own variables, and on iOS a `default` clause before other cases or a `return` or `throw` in a `finally` block.
- **A library member isn't provided yet:** `Object.create`, `String.prototype.normalize`, `Intl.Collator`,
  `Intl.PluralRules`, `Intl.RelativeTimeFormat`, a class expression (`const Mixin = (B) => class extends B {}`) and
  an array literal with holes (`[1, , 3]`). `Intl.NumberFormat`, `Intl.DateTimeFormat`, `toLocaleString` and the
  ES2023 array and grouping methods are provided.

A few valid constructs still fail later, in the Swift or Kotlin compile, reported at your TypeScript line. The ones
known today are listed in [Not fixed yet](#not-fixed-yet).

## Preview limits

`9.2.0-alpha.1` is a public preview. The features below aren't implemented in a compiled release yet. Rather than
compile to something that silently does nothing, each one stops the build with a message naming the file and what
it found, most of them ending in "is not supported in a release build yet". The JavaScript release supports all
of them.

### Angular

| Refused                                                                                                                                                                                                                                                            | Instead, for now                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------- |
| `@angular/forms` on a component or hosted component (it needs `NG_VALUE_ACCESSOR`), on `<ng-container>`, with `ngDefaultControl`, or beside a `[class]` binding; two controls or two form containers on one element; a forms directive whose module isn't imported | Put the control on a NativeScript view (`TextField`, `Switch`, `Slider`, …) |
| `ngPlural`, `ngPluralCase`, `ngComponentOutlet`; `ngIf`, `ngForOf` or `ngSwitchCase` on an element without `*`; `[ngTemplateOutlet]` anywhere but `<ng-container>`                                                                                                 | `@if`, `@for`, `@switch`, or the `*` form                                   |
| `<ng-content>` (content projection), and content inside an element that hosts an attribute-selected component                                                                                                                                                      | Pass the data as inputs and render it in the child's own template           |
| `*pagerItem`, and structural directives other than `*ngIf`, `*ngFor`, `*ngTemplateOutlet`, `*ngSwitchCase` and `*ngSwitchDefault`                                                                                                                                  | For a pager, `<Pager [items]>` with an `<ng-template let-item>`             |
| `canLoad` and `resolve`                                                                                                                                                                                                                                            | `canMatch` in place of `canLoad`; load the data in the routed component     |
| Route fields other than `path`, `pathMatch`, `component`, `loadComponent`, `redirectTo`, `outlet`, `children`, `loadChildren`, `title` and `runGuardsAndResolvers` (such as `data`, `providers`, `matcher`)                                                        |                                                                             |
| A `path`, `pathMatch`, `redirectTo` or `outlet` that isn't a string literal; a `component` that isn't a class name                                                                                                                                                 |                                                                             |
| Router features other than `withPreloading()` and `withDebugTracing()`; `forRoot` options other than `enableTracing`, `useHash`, `preloadingStrategy`, `scrollPositionRestoration`, `anchorScrolling`, `scrollOffset`                                              |                                                                             |
| In a routes table outside the app's entry (an NgModule's routing module): `children`, `loadChildren`, `loadComponent`, `outlet`, and a redirect from a path other than `''`                                                                                        | Give the routes to `provideNativeScriptRouter(routes)` in the entry         |
| Angular's `routerLink` and `routerLinkActive`, and `nsRouterLinkActive`                                                                                                                                                                                            | `nsRouterLink`                                                              |
| `animate.enter`, `animate.leave` and animation events; `(window:…)` and `(document:…)` events                                                                                                                                                                      |                                                                             |
| `<ng-container>` with a `#ref`, an event, a directive of yours, or an input other than `ngSwitch`, `ngTemplateOutlet` and `ngTemplateOutletContext`                                                                                                                |                                                                             |
| `<page-router-outlet>` with anything but `name` and `actionBarVisibility="auto"`                                                                                                                                                                                   |                                                                             |
| `@Component` `host`, `providers`, `viewProviders`, `inputs`, `outputs`, `queries`, `hostDirectives`, `interpolation`, `preserveWhitespaces: true`                                                                                                                  | `providedIn: 'root'` services; `input()` and `output()`                     |
| `viewChild()`, `viewChildren()`, `contentChild()`, `contentChildren()`; an `input()` or `model()` option other than `alias`; an `output()` option                                                                                                                  | `@ViewChild` and `@ViewChildren`                                            |
| In a `@Directive`: fields other than `selector`, `inputs` and `host`; `input()`, `output()`, `model()` and signal queries; lifecycle hooks other than `ngOnInit`, `ngOnChanges`, `ngAfterViewInit`, `ngOnDestroy`                                                  |                                                                             |
| An app `@NgModule`'s `providers`                                                                                                                                                                                                                                   |                                                                             |
| A plugin element whose `registerElement` meta adds its children itself (`insertChild`, `removeChild`), when it has children; one registered with `skipAddToDom`                                                                                                    |                                                                             |

A name in the first rows that a directive or attribute-selected component of your own takes as an input is
yours, and isn't refused.

### Binary-only plugins

`nativescript-ui-listview`, `-sidedrawer`, `-calendar`, `-chart`, `-dataform`, `-autocomplete` and `-gauge` ship
no TypeScript source, so there is nothing to compile. The build stops and names each one, with two remedies:
replace the package with a module of your app (`release.pluginReplacements`), or build it as an empty stand-in
(`release.stubPlugins`). See [Configuration](/guide/publishing/compiled-configuration#plugin-options).

### Android: an instance's own function for a class method

Assigning a function to a method that a class compiled with your app declares (`logger.log = (m) => …`, where
`log` is a method of `Logger`) stops an Android build: "giving an instance its own Logger.log in place of the
class's method". In the Kotlin output, calls go straight to the class's method, so the assignment would be ignored.
iOS supports it. **Instead:** declare `log` as a field holding a function, or override the method in a subclass.

### Converted values are copies, not the same object (iOS and Android)

This one compiles and runs, and behaves differently. A value with no static type (`any`, parsed JSON, a value from
a non-strict module) becomes a typed object where your code gives it an interface type. That conversion makes a new
object each time:

- The same object read as an interface twice gives two objects: `a === b` is `false`, so are their arrays
  (`a.items === b.items`), and a `Map` or `Set` keyed by one doesn't find the other. A memoized selector that
  compares its input by identity recomputes every time.
- A typed array (`Float32Array`), or an untyped array, passed to a `number[]` parameter is copied, so what the
  function writes into it doesn't reach the caller's array. On Android, an untyped array whose elements already
  have the parameter's element type is passed as it is.

**Instead:** give the value its type once, where it enters your code, and pass that typed reference on. Compare
records by an id rather than `===`. Have a function return the values it computes instead of writing into an
array argument, or pass it a `number[]`.

## JavaScript coverage

The compiler is also run against [test262](https://github.com/tc39/test262), the JavaScript conformance suite.
"Behaves as Node" is the share of the tests the compiler accepts whose output matches Node. "Refused" are tests
stopped at build time, most of them by constructs above or by code no typed app contains. test262 exercises edge
cases far more than apps do: read this as a map of where differences live, not as how much of an app works.

| Area                             | Tests | iOS behaves as Node | Android behaves as Node | iOS refused | Android refused |
| -------------------------------- | ----: | ------------------: | ----------------------: | ----------: | --------------: |
| String                           |   916 |                 58% |                     52% |         276 |             269 |
| Template literals                |    84 |                 54% |                     48% |           0 |               1 |
| Array                            |  2687 |                 34% |                     27% |        1378 |            1338 |
| Number                           |   294 |                 77% |                     82% |          81 |              87 |
| Math                             |   169 |                 83% |                     87% |          11 |              11 |
| JSON                             |   136 |                 73% |                     76% |           7 |               7 |
| Object                           |   549 |                 73% |                     61% |          56 |              85 |
| Map                              |   165 |                 82% |                     78% |          71 |              70 |
| Set                              |   162 |                 63% |                     83% |          94 |              94 |
| Promise                          |   675 |                 19% |                     55% |         160 |             173 |
| Date                             |   327 |                 64% |                     66% |          85 |              88 |
| RegExp                           |   830 |                 56% |                     55% |          41 |             137 |
| Destructuring                    |   651 |                 23% |                     35% |          55 |              57 |
| Classes                          |   666 |                 20% |                     19% |         109 |              94 |
| Getters and setters              |    64 |                  4% |                      2% |           3 |               2 |
| Closures and scope               |   366 |                 30% |                     42% |           9 |               7 |
| Optional chaining and nullish    |   140 |                 52% |                     73% |           2 |               3 |
| typeof and equality              |   161 |                 47% |                     68% |           3 |               4 |
| Exceptions                       |   295 |                 45% |                     37% |          15 |              10 |
| **Total** (with 5 harness tests) |  9342 |                 50% |                     50% |        2456 |            2537 |

test262 `d53ebc8b19`, compiler 2026-10-14. App-shaped code is held to a stricter bar: 271 differential cases, each
run under Node and compiled, all matching except those under [Not fixed yet](#not-fixed-yet).

## Known differences at run time

These compile and run, and behave differently from the JavaScript release. The most likely to affect an app come
first.

### `null` and `undefined` are one value in a typed optional (iOS and Android)

Where a type admits both (`name?: string | null`), `=== null` and `=== undefined` don't tell them apart: depending
on where the value is held, an explicit `null` reads as `undefined`, or as both, and `undefined` passed to a
parameter `x?: string | null` can read as `null`. A destructuring default applies to `null`. Where the value is held
typed, `JSON.stringify` leaves the key out instead of writing `null`.

**Instead:** test with `== null`, which is true for both. Where an API needs an explicit `null` in JSON, build that
JSON by hand.

### A value of the wrong type throws a `TypeError` (iOS and Android)

JavaScript keeps a value of the wrong type and carries on. In your app's code, a compiled release throws a
`TypeError` you can catch: when an untyped value (`any`, parsed JSON) is assigned where a class, a string, a number
or a boolean is declared, and on a downcast to the wrong subclass (`shape as Circle` holding a `Square`). Core's own
untyped paths, such as XML attributes and bindings, convert as JavaScript does (a binding's `5` for a string is
`"5"`).

Parsed JSON typed as an interface reads a missing string field as `''` and a missing number as `NaN`, where
JavaScript has `undefined`.

**Instead:** validate parsed data before you type it, and mark fields that may be missing optional (`age?: number`).

### A class's getters, setters and methods are not found by name (iOS)

In an app built with a framework, a member a class declares as a getter, a setter or a method is undefined when
read through `any` or a computed key: `(order as any).total`, `order[key]`, `'total' in order`. An assignment
through `any` doesn't run the setter. Fields are found. Android finds all of them, and so does iOS in an XML app,
where core's bindings read them.

**Instead:** read members through a typed reference. For duck typing, test a field, or use `instanceof`.

### Functions in arrays, `Set`s and `Map`s are not found again (iOS; Android for methods)

A function read twice is `===` to itself, so `obj.off('tap', handler)` works. But on iOS a function stored in an
array, a `Set` or as a `Map` key isn't found by `indexOf`, `includes`, `has`, `delete` or `get`. On Android this
applies to a method read as a value (`[this.onTap].indexOf(this.onTap)`).

**Instead:** have `on()` return a subscription object or an id, and remove by that.

### Pages and views can stay in memory (iOS)

iOS frees objects by reference counting. A closure that a page's view holds and that captures the page
(`button.on('tap', () => this.save())`) is a cycle, so a page you navigated away from can stay in memory. Core's own
references don't cause this. A `WeakMap` value that refers to its own key keeps both alive; on Android, a
`WeakRef`'s target is held until memory runs low.

**Instead:** remove the listeners you add in `unloaded` or `navigatedFrom`, or reach the page through a `WeakRef`.

### Native callbacks from other threads run on the main thread (iOS and Android)

A callback a native API calls on a background thread runs on the main thread. One that returns nothing runs later,
as a task. One that returns a value runs while the calling thread waits, so it deadlocks if the main thread is
waiting for that thread.

**Instead:** don't block the main thread on a native thread that calls back into your code. Do heavy work in a
[worker](/guide/multithreading) or in native code.

### Regular expressions (iOS and Android)

On iOS, a capture group that took no part in the match reads `''`, not `undefined` (`/(a)|(b)/.exec('b')[1]`), and
a capture inside a repeated group keeps an earlier iteration's value. On both platforms, a `replace` callback's
group parameter declared `string` isn't `=== undefined` for such a group.

**Instead:** test with `!m[1]` or `m[1] || fallback`, and declare `replace` callback groups optional
(`(all, x?: string) => …`).

### Arrays with holes (iOS and Android)

An array with holes (written past its end, or `new Array(n)` not filled) doesn't behave as in JavaScript: writing
past the end of an array of objects can stop the app on iOS, and iteration and `Object.keys` treat holes
differently.

**Instead:** `push`, or create the array at its length with values (`new Array(n).fill(0)`).

### Missing values on iOS can stop the app

A member of `undefined` or `null` read, set or called, and a module constant read before its declaration runs, stop
the app on iOS instead of throwing a `TypeError` or `ReferenceError`. Deep mutual recursion (two functions calling
each other) also stops it; a single recursive function throws a `RangeError`.

### Strings (iOS and Android)

- `str[i]` past the end is `undefined`, but a call on it doesn't throw: `str[9].toUpperCase()` gives `''` on iOS and
  `'UNDEFINED'` on Android.
- On iOS, cutting inside a surrogate pair (`'a😀b'.slice(0, 2)`) gives U+FFFD, and `JSON.stringify('\ud83d')` writes
  U+FFFD. A circular structure's `TypeError` from `JSON.stringify` has an empty message.
- `'ΑΣ'.toLowerCase()` ends in `σ`, not `ς` (iOS).

### Other differences

- `error.stack` lists native frames, not JavaScript ones (see [iOS](/guide/publishing/compiled-ios#crashes-and-debugging)
  and [Android](/guide/publishing/compiled-android#crashes-and-debugging)).
- An object literal's own `valueOf` isn't called by `<` or `Math.max`, and its `[Symbol.toPrimitive]` is ignored
  (iOS). A `Date` held as `any` gives `NaN` in arithmetic. Call `.valueOf()` or `.getTime()`.
- Subclass fields are set before the base constructor runs (iOS). The build warns where an app's class relies on
  this.
- `typeof new String('x')` is `'string'`, not `'object'`.
- `String(Symbol('s'))` gives `@@s#1` (iOS). `JSON.stringify` writes a symbol value, where JavaScript leaves it out.
- `new RegExp('a/b').source` is `a/b`, not `a\/b` (iOS).
- A `TypeError`'s `constructor.name` is `JSTypeError` (Android). `new Array(-1)` and an over-long `padStart` throw an
  `Error`, not a `RangeError` (Android).
- `new Date(y, m, d, h)` in the hour a daylight-saving change skips lands an hour early (iOS).
- `Object.assign(target, …)` with a literal `null` among the sources stops the app (iOS).
- A `var` declared in a loop head or a branch, and read through a closure before it is set, reads `0`, `''` or
  `false`, not `undefined` (Android). So does a `let x: boolean;` declared without a value.
- On Android, minification can remove a member reached only by a name computed at run time
  ([R8](/guide/publishing/compiled-android#minification-r8)).

## Not fixed yet

The open items in the compiler's test suites, by what you would see.

**Doesn't build yet** (reported at your TypeScript line):

| Pattern                                                                                                              | Platform                  |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| Untyped callbacks called with JavaScript's arity, and `thisArg`                                                      | iOS, Android              |
| A prototype method called on another receiver (`Array.prototype.slice.call(list, 1)`, `X.prototype.m.call(r)`)       | iOS (some forms), Android |
| Destructuring assignment to existing variables in some forms; a rest element in one (`[first, ...others] = list`)    | iOS, Android              |
| Properties given to a function value (`fn.tag = …`)                                                                  | iOS                       |
| Top-level names declared by several modules (an enum, files of the same name in two folders)                         | iOS                       |
| `null as string \| null` in a template or a concatenation                                                            | iOS                       |
| A `sort` comparator declared with fewer parameters than `sort` passes                                                | iOS                       |
| `RegExp(…)` without `new`, and indexing an `exec()` result without `!`                                               | Android                   |
| A built-in error constructor held as a value (`const E: ErrorConstructor = TypeError`), and `error.constructor.name` | Android                   |
| A function with a rest parameter passed to `then` (`then(log)`)                                                      | Android                   |

**Builds, behaves differently:**

| Pattern                                                                                                                                         | Platform     |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| `Object.defineProperty` on a class instance, an array or a function is dropped                                                                  | iOS, Android |
| `delete arr[i]`, and `delete` of a declared member                                                                                              | iOS          |
| A `string` parameter given `undefined` reads `''`; a `void` promise's value isn't `undefined`                                                   | iOS          |
| An object literal an `async` function returns isn't made as its declared type                                                                   | iOS          |
| An optional member set after the object is made is listed in declaration order, not last                                                        | iOS          |
| `Object.keys` lists the holes of `new Array(n)`                                                                                                 | iOS          |
| A native class's own method declared with a non-optional result throws when it returns `undefined`                                              | iOS          |
| `typeof` of a function read from an optional member, or of a narrowed `string \| string[]` parameter, is decided at build time and can be wrong | Android      |
| `JSON.parse` and `JSON.stringify` edges: number forms, escapes, `toJSON` and replacer order, syntax error messages                              | Android      |

## Checking a compiled release

You develop on the JavaScript runtime and ship compiled code, so a difference shows only in the release. Compare
each compiled release with its JavaScript release before you ship it:

1. Build both, `ns build ios --release` and `ns build ios --compiled`, with the same `@nativescript/core`. They
   share the app id, so install them on separate simulators or uninstall between them.
2. Walk the same screens and taps in both, focusing and typing in every input, and watch for crashes as well as
   pixels.

`ns compiled verify` does this on an iOS Simulator. It builds both releases, runs the same steps on each (from the
project's `verify.json`: taps, swipes, typing, waits and shots, each screen from a fresh launch), compares every
shot pixel by pixel, and fails on a difference or on an app that stops running. The screenshots and a
`report.json` go to `platforms/compiled/verify`.

```json
{
  "screens": [
    {
      "name": "home",
      "steps": [
        ["shot", "start"],
        ["tap", 200, 400],
        ["wait", 1],
        ["type", "Ada"],
        ["shot", "typed"]
      ]
    }
  ]
}
```

Found a difference that isn't listed here? [Report it](/guide/publishing/compiled-report).
