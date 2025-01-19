---
title: Platform Specific Handling
---

Given there are often various differences between Android, iOS, visionOS, macOS, Meta Quest, etc.), how best to handle platform specific behavior? Like when a feature or behavior is only available on one and not the other.

NativeScript offers many ways to deal with platform specific cases.

:::tip
In general, never sacrifice the quality of a target feature for the sake of cross platform compatibility. Your job is to deliver a superior experience for your users and thus NativeScript gives you a lot to work with in this regard.
:::

## Android

There are many Android specific features which may only be accessible within the Android ecosystem. Let's start by looking at language specific features.

### Java

NativeScript gives you access to Java API's from TypeScript, however you may just want to work with Java and/or integrate Java features on Android devices. You can do so as follows:

1. Add `App_Resources/Android/src/main/java/com/company/features/Custom.java`
2. You can now access `com.company.features.Custom` and any public API implementations from your TypeScript code.

For example, `Custom.java`:

```java

```

Upon running your NativeScript project, the `Custom.java` becomes accessible to your TypeScript code:

```ts
const custom = new com.company.features.Custom();
console.log(custom.name()); // 'NativeScript'
```

### Kotlin

NativeScript gives you access to many Kotlin API's from TypeScript, however you may just want to work with Kotlin and/or integrate Kotlin features on Android devices. You can do so as follows:

1. Add `App_Resources/Android/src/main/java/com/company/features/Custom.kt`
2. You can now access `com.company.features.Custom` and any public API implementations from your NativeScript project.

For example, `Custom.kt`:

```java

```

### Jetpack Compose

[Jetpack Compose](https://developer.android.com/compose) is "Android’s recommended modern toolkit for building native UI" and thus is not available on iOS. However with NativeScript you are never limited and can use Jetpack Compose using [@nativescript/jetpack-compose](https://docs.nativescript.org/plugins/jetpack-compose) for particular feature implementations or entire UI's if desired.

A great article on using Jetpack Compose with NativeScript is [here](https://dev.to/valorsoftware/introduction-to-jetpack-compose-for-nativescript-54d7).

## iOS

There are many iOS specific features which may only be accessible within the Apple ecosystem. Let's start by looking at language specific features.

### Objective C

### Swift

### SwiftUI

[SwiftUI](https://developer.apple.com/xcode/swiftui/) "helps you build great-looking apps across all Apple platforms with the power of Swift" and thus is not available on Android. However with NativeScript you are never limited and can use SwiftUI using [@nativescript/swift-ui](https://docs.nativescript.org/plugins/swift-ui) for particular feature implementations or entire UI's if desired.

A great article on using SwiftUI with NativeScript is [here](https://dev.to/valorsoftware/introduction-to-swiftui-for-nativescript-4m1b).