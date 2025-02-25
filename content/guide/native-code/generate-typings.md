---
title: Generating TypeScript types
contributors:
  - Ombuweb
  - NathanWalker
  - rigor789
---

## Generate types for iOS

```bash
ns typings ios
```

This will generate the following folder structure `typings/ios/arm64`

## Generate types for Android

For Android run:

```bash
ns typings android --jar <path to a jar>
# or
ns typings android --aar <path to an aar>
```

You can also generate typings for an Android package (Maven):

```bash
ns typings android <package-name>
```

For instance:

```bash
ns typings android "com.google.android.gms:play-services-tasks"
```

### Custom code

1. Reference the generated types in [references.d.ts](/project-structure/references-d-ts)
2. You can now code against the platform native APIs (_strongly typed_). For various examples on how to interact with native APIs in JavaScript/TypeScript, visit the [Subclassing](/guide/subclassing/), [iOS Marshalling](/guide/ios-marshalling) and [Android Marshalling](/guide/android-marshalling) pages.

## Additional Resources

- [Android d.ts Generator](https://github.com/NativeScript/android-dts-generator), for advanced types generation for Android
