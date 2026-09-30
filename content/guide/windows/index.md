---
title: Developing for Windows
description: Build native Windows desktop apps with NativeScript, WinUI 3 and the Windows App SDK.
contributors:
  - triniwiz
---

NativeScript can target Windows desktop in addition to Android and iOS. Your app runs on a V8 based runtime that has direct access to the entire [Windows Runtime (WinRT)](https://learn.microsoft.com/windows/uwp/cpp-and-winrt-apis/intro-to-using-cpp-with-winrt) API surface, [WinUI 3](https://learn.microsoft.com/windows/apps/winui/winui3/) (`Microsoft.UI.*`) and .NET libraries. `@nativescript/core` UI components render as native WinUI 3 controls.

::: warning Experimental
The Windows platform is experimental. APIs, tooling and requirements may change between releases, and some features available on Android and iOS are not implemented yet (see [Known limitations](#known-limitations)). Please report issues on [GitHub](https://github.com/NativeScript/NativeScript/issues) or in [our Community Discord](https://nativescript.org/discord).
:::

## Requirements

- A Windows 10 (1809+) or Windows 11 development machine, x64 or arm64. Windows apps can only be built on Windows.
- The .NET 10 SDK and Developer Mode enabled.

Follow the [Windows setup guide](/setup/windows#setting-up-windows-for-windows-desktop) to prepare your environment.

## Adding Windows to a project

The Windows runtime is distributed as the [`@nativescript/windows`](https://www.npmjs.com/package/@nativescript/windows) package. While the platform is in preview, add it using the `beta` tag:

```bash
ns platform add windows@beta
```

This adds `@nativescript/windows` to the `devDependencies` of your `package.json`. You can also install it directly:

```bash
npm install --save-dev @nativescript/windows@beta
```

The CLI creates a WinUI 3 host project in `platforms/windows/<ProjectName>/` the first time you prepare, build or run the app for Windows.

::: tip
Windows support requires a version of `@nativescript/core` that includes the Windows implementation. Make sure your project uses the latest `@nativescript/core` and `@nativescript/webpack` or `@nativescript/vite`.
:::

## Running the app

```bash
ns run windows
```

The app is built, registered on the local machine and launched. Console output is streamed to your terminal, and file changes are synced to the running app. With the [Vite bundler](/configuration/vite) changes are applied using HMR; with webpack the app restarts on each change.

See [Running on Windows](/guide/running#running-on-windows) and [Debugging on Windows](/guide/debugging#debugging-on-windows) for more details.

## Writing platform-specific code

Windows follows the same conventions as the other platforms.

### Platform files

Files ending in `.windows.ts` (also `.windows.js`, `.windows.css`, `.windows.scss`, ...) are only included in Windows builds:

```
my-component/
├── index.android.ts
├── index.ios.ts
└── index.windows.ts
```

::: warning Note
Windows builds only pick up `.windows.*` files, they never fall back to `.ios.*` or `.android.*`. If a module has platform files, add a `.windows.*` variant (or a shared file without a platform suffix).
:::

### Platform conditionals

The `__WINDOWS__` global is replaced at build time, so the code for other platforms is removed from the bundle:

```ts
if (__WINDOWS__) {
  // Windows only
}
```

At runtime you can also check `Device.os`, or import `isWindows`:

```ts
import { Device } from '@nativescript/core'
import { isWindows } from '@nativescript/core/platform'

console.log(Device.os) // 'Windows'
console.log(isWindows) // true
```

### Platform specific markup and CSS

```xml
<StackLayout>
  <windows>
    <Label text="Only shown on Windows" />
  </windows>
  <Label windows:text="Hello Windows" ios:text="Hello iOS" android:text="Hello Android" />
</StackLayout>
```

```css
.ns-windows .title {
  font-size: 24;
}
```

## Accessing native APIs

All WinRT namespaces are available as globals, `Windows.*` for the system APIs and `Microsoft.*` for WinUI 3 and the Windows App SDK. Member names are used exactly as documented by Microsoft (PascalCase):

```ts
const uri = new Windows.Foundation.Uri('https://nativescript.org')
console.log(uri.Host) // nativescript.org

const settings = Windows.Storage.ApplicationData.Current.LocalSettings
```

Every `@nativescript/core` view exposes the underlying WinUI 3 control through `nativeView`:

```ts
import { Button } from '@nativescript/core'

const button = new Button()
const native = button.nativeView as Microsoft.UI.Xaml.Controls.Button
```

The application wrapper is available as `Application.windows`, and `Application.windows.getNativeApplication()` returns the `Microsoft.UI.Xaml.Application` instance.

Read [Windows Marshalling](/guide/windows-marshalling) to learn how JavaScript values are converted to WinRT types, how to subscribe to events and how to await async operations.

## App resources

Windows specific resources (app manifest, logos, splash screen) live in `App_Resources/Windows`. See [App_Resources › Windows](/project-structure/app-resources#windows-specific-resources).

Custom fonts placed in `src/fonts` work the same way as on the other platforms.

## Using plugins

Plugins written purely in JavaScript/TypeScript on top of `@nativescript/core` generally work on Windows. Plugins with native code need a Windows implementation (`.windows.ts` files and, optionally, native Windows code in `platforms/windows`). See [Adding Windows native code](/guide/native-code/windows#plugins).

## Publishing

Release builds produce MSIX packages for sideloading or for the Microsoft Store. See [Publishing to the Microsoft Store](/guide/publishing/microsoft-store).

## Known limitations

The following are not implemented on Windows yet:

- Accessibility properties (`accessible`, `accessibilityLabel`, ...)
- Pan, pinch, rotation and swipe gestures (`tap`, `doubleTap`, `longPress` and `touch` are supported)
- `isEnabled`, `isUserInteractionEnabled` and `z-index`
- Multiple windows (`Application.openWindow`)
- `font://` image sources and Image `tintColor`
- 3D transforms (`rotateX`, `rotateY`, `perspective`), `background-repeat: space | round`, and `cubicBezier` animation curves (they fall back to linear)
- `returnKeyType`, `autocorrect` and `autofillType` on TextField and TextView
- TabView tab color properties

Some behaviors differ from mobile:

- `Screen.mainScreen` reports the size of the app **window**, not the monitor, and `Device.deviceType` reports `Tablet` or `Phone` based on the window size.
- Size qualifiers (for example `page.minWH600.xml`) are re-evaluated when the window is resized.
- `Alt + Left` and the mouse back button navigate back in a `Frame`.
