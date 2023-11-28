---
title: Adding custom native code to a project
description: NativeScript allows you to access any native API anytime in your app.
contributors:
  - Ombuweb
  - NathanWalker
  - rigor789
---

If the native API you need is not exposed through [@nativescript/core](/core/#nativescript-core), [third party plugins](https://market.nativescript.org/) or [@nativescript/\* plugins](https://v8.docs.nativescript.org/plugins/index.html)), you can add it to your project and access it right away in TypeScript.

1. Add native code to [App_Resources](/project-structure/app-resources). For example, see

   - [Adding Java/Kotlin code to an application](/project-structure/app-resources#adding-native-code-to-an-application)
   - [Adding ObjectiveC/Swift Code to an application](/project-structure/app-resources#adding-objectivec-swift-code-to-an-application)

2. Generate types for the added APIs
   For iOS types run:

   ```cli
   ns typings ios
   ```

   For Android run:

   ```cli
   ns typings android --jar <path to a jar>
   # or
   ns typings android --aar <path to an aar>
   ```

3. Reference the generated types in [references.d.ts](/project-structure/references-d-ts)

4. You can now code against the platform native APIs (_strongly typed_). For various examples on how to interact with native APIs in JavaScript/TypeScript, visit the [Subclassing](/guide/subclassing/), [iOS Marshalling](/guide/ios-marshalling) and [Android Marshalling](/guide/android-marshalling) pages.

## Additional Resources

- [Android d.ts Generator](https://github.com/NativeScript/android-dts-generator), for advanced types generation for Android
