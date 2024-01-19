---
title: Generate TS types
contributors:
  - vallemar
---


## Generate types for iOS

```cli
ns typings ios
```
This will generate the following folder structure `typings/ios/arm64`

  

## Generate types for Android

 For Android run:

   ```cli
   ns typings android --jar <path to a jar>
   # or
   ns typings android --aar <path to an aar>
   ```

### Custom code

1. Reference the generated types in [references.d.ts](/project-structure/references-d-ts)

2. You can now code against the platform native APIs (_strongly typed_). For various examples on how to interact with native APIs in JavaScript/TypeScript, visit the [Subclassing](/guide/subclassing/), [iOS Marshalling](/guide/ios-marshalling) and [Android Marshalling](/guide/android-marshalling) pages.

## Additional Resources

- [Android d.ts Generator](https://github.com/NativeScript/android-dts-generator), for advanced types generation for Android
