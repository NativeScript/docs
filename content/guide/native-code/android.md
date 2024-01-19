---
title: Adding Java/Kotlin Code to an application
contributors:
  - vallemar
---

## Adding native code to an application

There are different ways to add native code to an Android application. You can add Java JAR files or Java and/or Kotlin source files in `App_Resources/Android/libs` and `App_Resources/Android/src` respectively, e.g.:

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

Define the java file within the path `App_Resources/Android/src/main/java`.

```java
// HelloJava.java
package com.example;

public class HelloJava {
  public String getString() {
    return "Hello from Java!";
  }
}
```

Given the example above, your JavaScript or TypeScript code can reference the Java code by using the full class names, e.g.

```typescript
const helloJava = new com.example.HelloJava()
console.log('Java says: ' + helloJava.getString())
// prints: Java says: Hello from Java!
```

:::tip Note

If using TypeScript, you may need to [generate typings](/guide/native-code/generate-types), or alternatively declare the top level package name as `any`, e.g.

```typescript
declare const com: any
```
:::

## Adding Kotlin code

### Kotlin Setting

#### Enable kotlin

If using Kotlin source files, must be enabled.

Set `useKotlin` in `gradle.properties`, the full path of this file is `App_Resources/Android/gradle.properties`, if it does not exist yet you must create it

```properties
useKotlin=true
```

#### Configure version

Configure the version of Kotlin to use in the application.

This option is configured in `before-plugins.gradle`,  the full path of this file is `App_Resources/Android/before-plugins.gradle`

```gradle
project.ext {
  kotlinVersion = "1.9.10"
}
```

### Using kotlin

Define the kotlin file within the path `App_Resources/Android/src/main/java`.

```kotlin
// HelloKotlin.kt
package com.example

class HelloKotlin {
  val hello = "Hello from Kotlin!"
}
```

Given the example above, your JavaScript or TypeScript code can reference the Kotlin code by using the full class names, e.g.

```typescript
const helloKotlin = new com.example.HelloKotlin()
console.log('Kotlin says: ' + helloKotlin.hello)
// prints: Kotlin says: Hello from Kotlin!
```

:::tip Note

If using TypeScript, you may need to [generate typings](/guide/native-code/generate-types), or alternatively declare the top level package name as `any`, e.g.

```typescript
declare const com: any
```
:::