---
title: Introduction
---

## What is NativeScript?

NativeScript is primarily a framework for building cross platform applications. The core technology revolves around exposing native APIs directly to the JavaScript runtime, providing type declarations for a rich TypeScript development experience. This is facilitated by the iOS runtime (`@nativescript/ios` on npm) and the Android runtime (`@nativescript/android`). To aid in cross-platform development, common use-cases are implemented in `@nativescript/core` utilizing the underlying native APIs exposed by each runtime.

The "frontend" code can be authored in various frameworks often referred to as _flavors_. The currently supported flavors consist of the following:

- Plain JavaScript or TypeScript&mdash;currently part of `@nativescript/core`, uses XML to declare the UI and JavaScript classes for data binding
- Angular&mdash;published under `@nativescript/angular`
- Vue&mdash;published under `nativescript-vue`
- React&mdash;published under `react-nativescript`
- Svelte&mdash;published under `svelte-native`

::: tip

These are the officially supported frontend flavors, however given how NativeScript is built, new flavors can be implemented on top of it. A great example is a few community projects that bring support for various other flavors: [Example 1](#), [Example 2](#)

:::

## How to use the docs?

The docs have been written with no assumptions of the reader's experience, however it does assume knowledge of JavaScript fundamentals. If you are new to JavaScript, we recommend these resources from <abbr title="Mozilla Developer Network">MDN</abbr>:

- [Introduction to JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Re-Introduction to JavaScript to refresh your knowledge](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)

The left sidebar (a dropdown on top on mobile devices) contains the primary navigation.

On most pages, the right sidebar (hidden on mobile) contains an outline of the current page, allowing quickly jumping to a section of interest. Apart from the outline, this section shows a list of GitHub users who have contributed to the current page, an "Edit this page" button (where applicable) that can be used to contribute additional details or just fixing a typo on the current page.

## Ready to dive in?

You will want to setup your development machine using the [Environment Setup guide](/setup/) which involves preparing your machine for iOS and Android development as well as installing the [NativeScript CLI](https://www.npmjs.com/package/nativescript) via `npm install -g nativescript`

<!-- TODO: provide alternative path via StackBlitz and tutorials -->
