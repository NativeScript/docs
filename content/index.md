---
title: Introduction
contributors:
  - rigor789
  - NathanWalker
---

## What is NativeScript?

NativeScript provides platform APIs directly to the JavaScript runtime (_with strong types_) for a rich TypeScript development experience. 

Some popular use cases:

- Building iOS, Android and Vision Pro apps with a shared codebase (aka, cross platform apps)
- Augmenting JavaScript projects with platform API capabilities
- Embedded systems development with JavaScript
- Building native platform apps with portable JavaScript skills
- Learning native platforms through JavaScript understanding
- [Exploring platform API documentation by executing APIs directly from a web browser without requiring a platform development machine setup](https://preview.nativescript.org/)

### Why NativeScript?

- JavaScript skill reuse
- Natural platform feel and performance characteristics
- Improve how Platform developers can work together with JavaScript developers 
- Strengthening job market potential by allowing developers to port their skills between different environments
 
This is all facilitated by the supported platform runtimes:

- [@nativescript/android](https://beta.docs.nativescript.org/guide/extending-classes-and-implementing-interfaces-android)
- [@nativescript/ios](https://beta.docs.nativescript.org/guide/extending-classes-and-conforming-to-protocols-ios)
- [@nativescript/visionos](/guide/visionos)

To aid in cross-platform development, common use cases are implemented in [@nativescript/core](/core) utilizing the underlying native APIs provided by each runtime.

Many popular JavaScript frameworks can be used; often referred to as _flavors_, for example:

- Plain JavaScript or TypeScript&mdash;currently part of `@nativescript/core`, uses XML to declare the UI and JavaScript classes for data binding
- Angular&mdash;published under `@nativescript/angular`
- Vue&mdash;published under `nativescript-vue`
- React&mdash;published under `react-nativescript`
- Svelte&mdash;published under `svelte-native`

::: tip There's more!

Given how NativeScript is built, new flavors can be implemented on top of it anytime. A few great examples from the community:

- [SolidJS](https://github.com/nativescript-community/solid-js)
- [rEFui](https://github.com/SudoMaker/rEFui#native)
- and [more with DOMiNATIVE](https://github.com/SudoMaker/dominative)

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
