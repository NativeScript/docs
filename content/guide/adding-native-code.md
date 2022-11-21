---
title: Adding custom native code to a project
---


NativeScript allows you to access any native APIs anytime in your app. If the native API you need is not exposed through the [@nativescript/core](https://docs.nativescript.org/understanding-packages#nativescript-core) or plugins([third-party](https://market.nativescript.org/)  or [NativeScript-maintained](https://docs.nativescript.org/plugins/index.html)), you can add it to your project and access it right away in TypeScript.


1. Add native code to the plaform folders in [App_resources](/project-structure/app-resources). For examples,see [Adding Java/Kotlin code to an application](/project-structure/app-resources#adding-java-kotlin-code-to-an-application) and [Adding ObjectiveC/Swift Code to an application](/project-structure/app-resources#adding-objectivec-swift-code-to-an-application)

2. Generate types for the added APIs
For iOS types run:

```cli
ns typings ios
```

For Android run:

```cli
ns typings android --jar <.jar path>
```

3. Reference the generated types in the [references.d.ts](/project-structure/references-d-ts-in-nativescript)

4. Code against the APIs. For various examples of to code the native API's in JavaScript/TypeScript, visit the [Subclassing](/guide/subclassing/), [iOS Marshalling](/guide/marshalling/nativescript-ios-marshalling) and [Android Marshalling](/guide/marshalling/nativescript-android-marshalling) pages

:::details Additional Resources

- [Android d.ts Generator](https://github.com/NativeScript/android-dts-generator), for advanced types generation for Android

:::
