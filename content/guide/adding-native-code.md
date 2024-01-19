---
title: Adding custom native code to a project
description: NativeScript allows you to access any native API anytime in your app.
contributors:
  - Ombuweb
  - NathanWalker
  - rigor789
---

If the native API you need is not exposed through [@nativescript/core](/core/#nativescript-core), [third party plugins](https://market.nativescript.org/) or [@nativescript/\* plugins](https://v8.docs.nativescript.org/plugins/index.html)), you can add it to your project and access it right away in TypeScript.

1. Add native code to [App_Resources](/project-structure/app-resources). See

   - [Adding Java/Kotlin code to an application](/guide/native-code/android)
   - [Adding ObjectiveC/Swift Code to an application](/guide/native-code/ios)

2. [Generate TS types for the added APIs](/guide/native-code/generate-types)


Additionally, NativeScript also supports Jetpack Compose and SwiftUI through plugins.
1. Jetpack Compose. [Plugin](/plugins/jetpack-compose). [Blog page with explample](https://dev.to/valorsoftware/introduction-to-jetpack-compose-for-nativescript-54d7).
2. SwiftUI. [Plugin](/plugins/swift-ui). [Blog page with explample](https://dev.to/valorsoftware/introduction-to-swiftui-for-nativescript-4m1b).