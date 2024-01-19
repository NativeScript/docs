---
title: Adding Java/Kotlin Code to an application
contributors:
  - Ombuweb
  - NathanWalker
  - rigor789
  - vallemar
---

## Adding native code to an application

There are different ways to add native code to an Android application. You can add `.jar` and `.aar` files, or Java/Kotlin source files in `App_Resources/Android/libs` and `App_Resources/Android/src` respectively.

```bash
App_Resources/
├─ Android/
│  ├─ app.gradle
│  ├─ libs/
│  │  ├─ HelloAndroidLib.aar  # Android Archive
│  │  └─ HelloJavaLib.jar     # Java Archive
│  └─ src/
│     └─ main/
│       ├─ java/
│       │  ├─ com/example/HelloKotlin.kt  # Kotlin source code
│       │  └─ com/example/HelloJava.java  # Java source code
│       └─ res/
└─ ... more
```

## Adding Java code

Define the java file in `App_Resources/Android/src/main/java`.

```java
// HelloJava.java
package com.example;

public class HelloJava {
  public String getString() {
    return "Hello from Java!";
  }
}
```

Given the example above, your JavaScript or TypeScript code can reference the Java code by using the full class name:

```typescript
const helloJava = new com.example.HelloJava()
console.log('Java says: ' + helloJava.getString())
// prints: Java says: Hello from Java!
```

:::tip Note

When using TypeScript, you may need to [generate typings](/guide/native-code/generate-typings), or alternatively declare the top level package name as `any`.

```typescript
declare const com: any
```

:::

## Adding Kotlin code

### Configuring Kotlin

#### Enable kotlin

When using Kotlin, it must be enabled first.

Set `useKotlin=true` in `App_Resources/Android/gradle.properties` (create the file if it doesn't exist).

```ini
useKotlin=true
```

#### Configure Kotlin version

Configure the version of Kotlin to use in the application in `App_Resources/Android/before-plugins.gradle` (create the file if it doesn't exist).

```groovy
project.ext {
  kotlinVersion = "1.9.10"
}
```

### Using kotlin

Define the kotlin file in `App_Resources/Android/src/main/java`.

```kotlin
// HelloKotlin.kt
package com.example

class HelloKotlin {
  val hello = "Hello from Kotlin!"
}
```

Given the example above, your JavaScript or TypeScript code can reference the Kotlin code by using the full class name:

```typescript
const helloKotlin = new com.example.HelloKotlin()
console.log('Kotlin says: ' + helloKotlin.hello)
// prints: Kotlin says: Hello from Kotlin!
```

:::tip Note

When using TypeScript, you may need to [generate typings](/guide/native-code/generate-typings), or alternatively declare the top level package name as `any`.

```typescript
declare const com: any
```

:::
