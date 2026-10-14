---
title: Adding Windows native code to an application
description: Use .NET libraries, NuGet packages, WinRT components and Win32 DLLs in NativeScript Windows apps.
contributors:
  - triniwiz
---

::: warning Experimental
The Windows platform is experimental. See [Developing for Windows](/guide/windows/).
:::

All of the Windows Runtime (`Windows.*`) and WinUI 3 (`Microsoft.*`) APIs are available to your app without any setup. On top of that, you can add:

- [.NET libraries and NuGet packages](#using-net-libraries)
- [C++/WinRT (or any WinRT) components](#adding-c-winrt-components)
- [Win32 DLLs](#calling-win32-dlls)

## The Windows host project

When you build for Windows, the CLI generates a WinUI 3 host project in `platforms/windows/<ProjectName>/` and builds it with `dotnet build`. You don't edit the generated project directly. Instead, add MSBuild files to `App_Resources/Windows`, which are imported by the host project:

```bash
App_Resources/
├─ Windows/
│  ├─ app.csproj            # imported by the host project
│  ├─ before-plugins.props  # imported before plugin files
│  ├─ after-plugins.props   # imported after plugin files
│  ├─ Package.appxmanifest
│  ├─ src/                  # C# sources, compiled into the app
│  └─ Assets/
└─ ... more
```

- `app.csproj` is the place for most customizations, such as package references and build properties. It is similar to `app.gradle` on Android.
- `before-plugins.props` and `after-plugins.props` let you set properties before plugins are applied or override values set by plugins. They are similar to `before-plugins.gradle` on Android.

All three files are optional MSBuild fragments with a `<Project>` root element:

```xml
<!-- App_Resources/Windows/app.csproj -->
<Project>
  <PropertyGroup>
    <ApplicationManifest Condition="'$(ApplicationManifest)' == '' and Exists('$(MSBuildThisFileDirectory)app.manifest')">$(MSBuildThisFileDirectory)app.manifest</ApplicationManifest>
  </PropertyGroup>
</Project>
```

::: tip Note
The whole `App_Resources/Windows` folder is copied into the host project, so `$(MSBuildThisFileDirectory)` points at the copied folder. To reference files elsewhere in your project, use `$(MSBuildProjectDirectory)\..\..\..\`, which resolves to your project root.
:::

## Using .NET libraries

The Windows runtime hosts .NET in-process, so .NET APIs can be called directly from JavaScript. The base class library is available through the `System` global:

```ts
const stopwatch = System.Diagnostics.Stopwatch.StartNew()
// ... do some work
stopwatch.Stop()
console.log(`Took ${stopwatch.ElapsedMilliseconds}ms`)

console.log(System.Environment.MachineName)
```

### Adding a NuGet package

Add a `PackageReference` to `App_Resources/Windows/app.csproj`:

```xml
<Project>
  <ItemGroup>
    <PackageReference Include="Newtonsoft.Json" Version="13.0.3" />
  </ItemGroup>
</Project>
```

Then use it from JavaScript. The root namespaces of the app's assemblies (`Newtonsoft` here) are globals, like `System`:

```ts
const json = Newtonsoft.Json.JsonConvert.SerializeObject({ hello: 'world' })
```

Assemblies are loaded from the app's output folder, including its `libs` and `plugins` subfolders.

### Adding your own C# code

Add C# files to `App_Resources/Windows`, for example in `App_Resources/Windows/src`. They are compiled into the app, the way Java/Kotlin files in `App_Resources/Android/src` and Objective-C/Swift files in `App_Resources/iOS/src` are, and their types are available from JavaScript by namespace:

```cs
// App_Resources/Windows/src/Greeter.cs
namespace MyCompany.Native;

public class Greeter
{
    public string Name { get; set; } = "C#";

    public string Hello(string who) => $"Hello {who} from {Name}!";

    public static int Add(int a, int b) => a + b;
}
```

```ts
const greeter = new MyCompany.Native.Greeter()
console.log(greeter.Hello('NativeScript')) // Hello NativeScript from C#!
console.log(MyCompany.Native.Greeter.Add(2, 3)) // 5
```

Public members are available, including those of internal types. Add the NuGet packages your code needs to `App_Resources/Windows/app.csproj`. JavaScript classes can also [extend your C# classes](/guide/extending-classes-and-implementing-interfaces-windows).

For a larger code base, a separate .NET class library works too: reference it from `app.csproj` with a `ProjectReference` (`$(MSBuildProjectDirectory)\..\..\..\` is your project root).

### .NET tasks, delegates and structs

- A method returning a `Task` returns an awaitable: `const data = await MyCompany.Native.Api.LoadAsync()`. `NSWinRT.toPromise(task)` converts it explicitly.
- Pass a JavaScript function where a method expects a delegate (`Func<>`, `Action<>` or another delegate type). Its return value is returned to the caller. `NSWinRT.dotnet.asDelegate(typeName, fn)` creates one explicitly; for WinRT delegates see [Windows Marshalling › Events](/guide/windows-marshalling#events).
- Subscribe to .NET events with their `add_`/`remove_` methods: `greeter.add_Greeted((sender, message) => {})`.
- Pass a plain object where a struct is expected (`{ Width: 120, Height: 40 }`). Structs passed to JavaScript callbacks arrive as plain objects.
- .NET objects are released when they are garbage collected. Call `obj.release()` to release one immediately.

## Adding C++/WinRT components

Any WinRT component, for example one written in C++/WinRT, can be used from JavaScript once its metadata (`.winmd`) and implementation (`.dll`) are deployed with the app, and its classes are registered in the app manifest. `@nativescript/core` itself uses this approach for its `NativeScript.Widgets` component.

::: info Note
Building C++/WinRT components requires [Visual Studio](https://visualstudio.microsoft.com/) with the **Desktop development with C++** workload and the C++/WinRT extension. Build the component for every architecture you ship (`x64`, `arm64`).
:::

### 1. Deploy the component

Place the built files in `App_Resources/Windows`, one folder per architecture:

```bash
App_Resources/
└─ Windows/
   ├─ app.csproj
   └─ libs/
      ├─ x64/
      │  ├─ MyCompany.Native.dll
      │  └─ MyCompany.Native.winmd
      └─ arm64/
         ├─ MyCompany.Native.dll
         └─ MyCompany.Native.winmd
```

Copy the files matching the target architecture next to the app executable with a target in `app.csproj`:

```xml
<Project>
  <Target Name="CopyMyCompanyNative" AfterTargets="Build">
    <ItemGroup>
      <_MyNativeFiles Include="$(MSBuildThisFileDirectory)libs\$(Platform)\*.dll;$(MSBuildThisFileDirectory)libs\$(Platform)\*.winmd" />
    </ItemGroup>
    <Copy SourceFiles="@(_MyNativeFiles)" DestinationFolder="$(OutDir)" SkipUnchangedFiles="true" />
  </Target>
</Project>
```

On startup, the runtime loads every `.winmd` file found next to the executable and in the app root.

### 2. Register the activatable classes

Add an `inProcessServer` extension for your classes to `App_Resources/Windows/Package.appxmanifest`:

```xml
<Package ...>
  <!-- ... -->
  <Extensions>
    <Extension Category="windows.activatableClass.inProcessServer">
      <InProcessServer>
        <Path>MyCompany.Native.dll</Path>
        <ActivatableClass ActivatableClassId="MyCompany.Native.Greeter" ThreadingModel="both" />
      </InProcessServer>
    </Extension>
  </Extensions>
</Package>
```

### 3. Use it from JavaScript

The component's namespaces are available as globals, like `Windows` and `Microsoft`:

```ts
const greeter = new MyCompany.Native.Greeter()
console.log(greeter.Hello('NativeScript'))
```

:::tip Note
When using TypeScript, you can [generate typings](/guide/native-code/generate-typings#generate-types-for-windows) from the component's `.winmd`, or declare the root namespace as `any`:

```ts
declare const MyCompany: any
```

:::

## Calling Win32 DLLs

Functions exported from Win32 DLLs can be called without any native code using `NSWinRT.win32`:

```ts
const kernel32 = NSWinRT.win32.define(
  'kernel32.dll',
  { GetTickCount64: [] },
  'u64',
)
console.log(kernel32.GetTickCount64())
```

See [Windows Marshalling › Win32 functions](/guide/windows-marshalling#win32-functions) for the supported types.

## Plugins

Plugins provide Windows implementations with `.windows.ts` files. Native Windows files are placed in the plugin's `platforms/windows` folder:

```bash
my-plugin/
├─ index.windows.ts
├─ plugin.props      # optional, imported by the host project
├─ plugin.targets    # optional, imported by the host project
└─ platforms/
   └─ windows/
      ├─ src/        # C# sources, compiled into the app
      ├─ x64/
      └─ arm64/
```

The CLI copies the contents of `platforms/windows` into the host project (under `plugins/<plugin-name>/`) and imports the plugin's `plugin.props` and `plugin.targets` files. C# files are compiled into the app, so a plugin can ship its native code as source, as Android and iOS plugins do. Use them to add package references, copy native files to the output folder or register activatable classes, the same way an app does with `app.csproj`. When a plugin has no `plugin.props`/`plugin.targets`, the CLI generates default ones that copy the plugin's files into `plugins\<plugin-name>` in the app output folder.

See [`@nativescript/core`'s `plugin.targets`](https://github.com/NativeScript/NativeScript/blob/main/packages/core/plugin.targets) for a complete example that deploys a C++/WinRT component and registers its classes.
