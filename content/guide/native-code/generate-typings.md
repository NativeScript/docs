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

## Generate types for Windows

::: warning Experimental
The Windows platform is experimental. See [Developing for Windows](/guide/windows/).
:::

On a Windows machine, run:

```bash
ns typings windows
```

This generates typings for the `Windows.*` WinRT APIs into `typings/windows/`, one `.d.ts` file per namespace group. If the project hasn't been prepared for Windows yet, the CLI runs `ns prepare windows` first to get the typings generator from `@nativescript/windows`.

The following options control what is generated:

| Option                  | Description                                                                                             |
| ----------------------- | ------------------------------------------------------------------------------------------------------- |
| `--root <namespace>`    | The root namespace to generate typings for, for example `Microsoft` for WinUI 3. Defaults to `Windows`. |
| `--roots <ns1,ns2,...>` | A comma separated list of namespaces, for example `Windows.Foundation,Windows.Storage`.                 |
| `--input <path>`        | Generate typings for a `.winmd` file (WinRT component) or a `.dll`/`.csproj` (.NET library).            |
| `--lib <path>`          | An additional `.winmd`, `.dll`, `.nupkg` or folder used to resolve referenced types. Can be repeated.   |
| `--libs <a,b,...>`      | A comma separated list of `--lib` paths.                                                                |

For instance, to generate typings for your own [C++/WinRT component](/guide/native-code/windows#adding-c-winrt-components):

```bash
ns typings windows --input App_Resources/Windows/libs/x64/MyCompany.Native.winmd
```

### Custom code

1. Reference the generated types in [references.d.ts](/project-structure/references-d-ts)
2. You can now code against the platform native APIs (_strongly typed_). For various examples on how to interact with native APIs in JavaScript/TypeScript, visit the [Subclassing](/guide/subclassing/), [iOS Marshalling](/guide/ios-marshalling), [Android Marshalling](/guide/android-marshalling) and [Windows Marshalling](/guide/windows-marshalling) pages.

## Additional Resources

- [Android d.ts Generator](https://github.com/NativeScript/android-dts-generator), for advanced types generation for Android
