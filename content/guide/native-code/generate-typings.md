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

## Generate types for Linux

::: warning Experimental
The Linux platform is experimental. See [Developing for Linux](/guide/linux/).
:::

On a Linux machine, run:

```bash
ns typings linux
```

This writes the typings for the [Linux SDK](/guide/linux/#the-linux-sdk) (GLib, GTK, Pango, Cairo, X11, ...) and for the app's and plugins' [native code](/guide/native-code/linux) to `typings/linux/`. Once the folder exists, later builds keep the typings of the native code up to date. Reference them in [references.d.ts](/project-structure/references-d-ts):

```ts
/// <reference path="./typings/linux/index.d.ts" />
```

`index.d.ts` includes the typings of GLib, GTK, Pango, Cairo, GdkPixbuf, Graphene, HarfBuzz, X11 and Fontconfig. The typings of the other SDK modules (libc, ICU, EGL, OpenGL ES, libxml2, zlib and libuuid) are in `typings/linux/sdk/` too, but aren't included by default, because libc and ICU conflict with the typings of other platforms. Reference the ones you need separately, for example `/// <reference path="./typings/linux/sdk/c!libc.d.ts" />`.

### Custom code

1. Reference the generated types in [references.d.ts](/project-structure/references-d-ts)
2. You can now code against the platform native APIs (_strongly typed_). For various examples on how to interact with native APIs in JavaScript/TypeScript, visit the [Subclassing](/guide/subclassing/), [iOS Marshalling](/guide/ios-marshalling), [Android Marshalling](/guide/android-marshalling) and [Linux Marshalling](/guide/linux-marshalling) pages.

## Additional Resources

- [Android d.ts Generator](https://github.com/NativeScript/android-dts-generator), for advanced types generation for Android
