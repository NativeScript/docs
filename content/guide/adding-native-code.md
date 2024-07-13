---
title: Adding custom native code to a project
description: NativeScript allows you to access any native API anytime in your app.
contributors:
  - Ombuweb
  - NathanWalker
  - rigor789
  - vallemar
---

If the native API you need is not exposed through [@nativescript/core](/core/#nativescript-core), [third party plugins](https://market.nativescript.org/) or [@nativescript/\* plugins](https://v8.docs.nativescript.org/plugins/index.html)), you can add it to your project and access it right away in TypeScript.

Ever since [NativeScript 8.8](https://blog.nativescript.org/nativescript-8-8-announcement/#ns-native), you can use a single command to add platform language files and have them auto configured ready to use with:

```bash
ns native add swift AwesomeClass
# Swift file 'nativescript-project/App_Resources/iOS/src/AwesomeClass.swift' generated successfully.

ns native add objective-c OtherAwesomeClass
# Module map 'nativescript-project/App_Resources/iOS/src/module.modulemap' has been updated with the header 'OtherAwesomeClass.h'.

ns native add kotlin com.company.AwesomeClass
# Kotlin file 'nativescript-project/App_Resources/Android/src/main/java/com/company/AwesomeClass.kt' generated successfully.

ns native add java com.company.OtherAwesomeClass
# Java file 'nativescript-project/App_Resources/Android/src/main/java/com/company/OtherAwesomeClass.java' generated successfully.
```

1. You can also manually add native code to [App_Resources](/project-structure/app-resources):
   - [Adding Java/Kotlin code to an application](/guide/native-code/android)
   - [Adding ObjectiveC/Swift Code to an application](/guide/native-code/ios)
2. Optionally [generate TypeScript types for the added APIs](/guide/native-code/generate-typings)

Additionally, NativeScript also supports Jetpack Compose and SwiftUI through plugins.

1. [Jetpack Compose Plugin](/plugins/jetpack-compose)
   - [Jetpack Compose Introduction and example](https://dev.to/valorsoftware/introduction-to-jetpack-compose-for-nativescript-54d7)
2. [SwiftUI Plugin](/plugins/swift-ui)
   - [SwiftUI Introduction and example](https://dev.to/valorsoftware/introduction-to-swiftui-for-nativescript-4m1b)
