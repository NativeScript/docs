---
title: Developing for Linux
description: Build native Linux desktop apps with NativeScript and GTK 4.
contributors:
  - triniwiz
---

NativeScript can target the Linux desktop in addition to Android and iOS. Your app runs on a V8 based runtime that calls C libraries directly from JavaScript: GTK 4, GLib/GIO, Pango, Cairo, libc, X11, EGL/OpenGL ES and more, plus any C library you add yourself. `@nativescript/core` UI components render as native [GTK 4](https://www.gtk.org/) widgets.

::: warning Experimental
The Linux platform is experimental. APIs, tooling and requirements may change between releases, and some features available on Android and iOS are not implemented yet (see [Known limitations](#known-limitations)). Please report issues on [GitHub](https://github.com/NativeScript/NativeScript/issues) or in [our Community Discord](https://nativescript.org/discord).
:::

## Requirements

- A Linux development machine, x64 or arm64, with glibc 2.28 or newer (most distributions released since 2018). Linux apps can only be built on Linux.
- GTK 4.

Follow the [Linux setup guide](/setup/linux#setting-up-linux-for-linux-desktop) to prepare your environment.

## Adding Linux to a project

The Linux runtime is distributed as the [`@nativescript/linux`](https://www.npmjs.com/package/@nativescript/linux) package. While the platform is in preview, add it using the `alpha` tag:

```bash
ns platform add linux@alpha
```

This adds `@nativescript/linux` to the `devDependencies` of your `package.json`. You can also install it directly:

```bash
npm install --save-dev @nativescript/linux@alpha
```

The CLI creates the app in `platforms/linux/<ProjectName>/` the first time you prepare, build or run the app for Linux. If the project has no `App_Resources/Linux` folder, the CLI adds the default one.

::: tip
Linux support requires a version of `@nativescript/core` that includes the Linux implementation. Make sure your project uses the latest `@nativescript/core` and `@nativescript/webpack` or `@nativescript/vite`.
:::

### JavaScript engines

`@nativescript/linux` runs your app on V8. The runtime is also available on other JavaScript engines, as separate packages. Add exactly one of them to `devDependencies` instead of `@nativescript/linux`, and the CLI uses it:

| Package                       | Engine                                                            |
| ----------------------------- | ----------------------------------------------------------------- |
| `@nativescript/linux`         | V8 (recommended)                                                  |
| `@nativescript/linux-quickjs` | [QuickJS](https://github.com/quickjs-ng/quickjs)                  |
| `@nativescript/linux-v8`      | V8, over Node-API                                                 |
| `@nativescript/linux-hermes`  | [Hermes](https://github.com/facebook/hermes)                      |
| `@nativescript/linux-jsc`     | The system's JavaScriptCore (requires WebKitGTK's JavaScriptCore) |

The other engines have the same C interop as `@nativescript/linux`, but don't support the debugger (`ns debug linux`).

## Running the app

```bash
ns run linux
```

The app is built and launched on the local machine. Console output is streamed to your terminal, and file changes are synced to the running app. With the [Vite bundler](/configuration/vite) changes are applied using HMR; with webpack the app restarts on each change.

See [Running on Linux](/guide/running#running-on-linux) and [Debugging on Linux](/guide/debugging#debugging-on-linux) for more details.

## Writing platform-specific code

Linux follows the same conventions as the other platforms.

### Platform files

Files ending in `.linux.ts` (also `.linux.js`, `.linux.css`, `.linux.scss`, ...) are only included in Linux builds:

```
my-component/
├── index.android.ts
├── index.ios.ts
└── index.linux.ts
```

::: warning Note
Linux builds only pick up `.linux.*` files, they never fall back to `.ios.*` or `.android.*`. If a module has platform files, add a `.linux.*` variant (or a shared file without a platform suffix).
:::

### Platform conditionals

The `__LINUX__` global is replaced at build time, so the code for other platforms is removed from the bundle:

```ts
if (__LINUX__) {
  // Linux only
}
```

At runtime you can also check `Device.os`, or import `isLinux`:

```ts
import { Device, isLinux } from '@nativescript/core'

console.log(Device.os) // 'Linux'
console.log(isLinux) // true
```

### Platform specific markup and CSS

```xml
<StackLayout>
  <linux>
    <Label text="Only shown on Linux" />
  </linux>
  <Label linux:text="Hello Linux" ios:text="Hello iOS" android:text="Hello Android" />
</StackLayout>
```

```css
.ns-linux .title {
  font-size: 24;
}
```

## Accessing native APIs

C functions, enums, constants and structs from the [Linux SDK](#the-linux-sdk) are available as globals, named exactly as in their C headers:

```ts
console.log(g_get_user_name())
console.log(getpid())

const label = gtk_label_new('Hello from JavaScript')
gtk_label_set_selectable(label, true)
```

Every `@nativescript/core` view exposes the underlying GTK widget (a `GtkWidget *`) through `nativeView`:

```ts
import { Button } from '@nativescript/core'

const button = new Button()
// ...once the view is loaded
gtk_widget_set_tooltip_text(button.nativeView, 'Click me')
```

GTK signals are connected with `g_signal_connect`:

```ts
g_signal_connect(button.nativeView, 'clicked', () => {
  console.log('clicked')
})
```

Read [Linux Marshalling](/guide/linux-marshalling) to learn how JavaScript values are converted to C types, how to work with pointers, structs and callbacks, and how to manage the memory of GObjects.

GObject classes, such as GTK widgets, can be extended from JavaScript, and GObject interfaces implemented. See [Extending GObject classes and implementing interfaces](/guide/extending-classes-and-implementing-interfaces-linux).

### The Linux SDK

The runtime ships metadata and TypeScript typings for the following libraries:

| Module         | Libraries                                                                                |
| -------------- | ---------------------------------------------------------------------------------------- |
| `libc`         | The C standard library and POSIX (`libc`, `libm`)                                        |
| `GLib`         | GLib, GObject, GIO                                                                       |
| `Gtk`          | GTK 4 and GDK (including `gdk/x11`), with Pango, Cairo, GdkPixbuf, Graphene and HarfBuzz |
| `X11`          | Xlib                                                                                     |
| `EGL`, `GLES`  | EGL, OpenGL ES 2 and 3                                                                   |
| `fontconfig`   | Fontconfig, PangoFT2                                                                     |
| `libxml2`      | libxml2                                                                                  |
| `icu`          | ICU (`icu-uc`)                                                                           |
| `zlib`, `uuid` | zlib, libuuid                                                                            |

Run `ns typings linux` to add the typings to your project, see [Generating TypeScript types](/guide/native-code/generate-typings#generate-types-for-linux). Other C libraries can be added to an app or plugin, see [Adding Linux native code](/guide/native-code/linux).

### Web APIs

The runtime also provides common web APIs as globals: `fetch`, `WebSocket`, `URL`, `TextEncoder`/`TextDecoder`, `AbortController`, `structuredClone`, `crypto.getRandomValues`, `crypto.randomUUID` and `crypto.subtle`, `performance`, `requestAnimationFrame` and `Worker`.

## App resources

Linux specific resources (app icon, desktop entry and AppStream metadata) live in `App_Resources/Linux`. See [App_Resources › Linux](/project-structure/app-resources#linux-specific-resources).

## Using plugins

Plugins written purely in JavaScript/TypeScript on top of `@nativescript/core` generally work on Linux. Plugins with native code need a Linux implementation (`.linux.ts` files and, optionally, C/C++ code in `platforms/linux`). See [Adding Linux native code](/guide/native-code/linux#plugins).

## Publishing

Release builds produce a `.tar.gz` archive with an install script. See [Distributing Linux apps](/guide/publishing/linux).

## Known limitations

The following are not implemented on Linux yet:

- `WebView` doesn't embed web content. It shows the URL and a button that opens it in the default browser.
- Accessibility properties (`accessible`, `accessibilityLabel`, ...)
- Page navigation transitions and shared element transitions (navigation isn't animated)
- `box-shadow`, `background-image` (including gradients) and `clip-path`. View backgrounds support `background-color`, borders and `border-radius`.
- `hint` and `maxLength` on TextView
- `font://` image sources, Image `tintColor`, and cropping with `stretch="aspectFill"`
- Custom fonts in `src/fonts`. Fonts have to be installed on the system.
- Tab icons in TabView

Some behaviors differ from mobile:

- `Screen.mainScreen` reports the size of the app **window**, not the monitor, and `Device.deviceType` reports `Tablet` or `Phone` based on the window size.
- Size qualifiers (for example `page.minWH600.xml`) are re-evaluated when the window is resized.
- `Connectivity` reports `ethernet` or `none`, it can't tell Wi-Fi from other connections.
- `getLocationOnScreen()` returns coordinates relative to the window, because Wayland doesn't expose window positions.
- The `ActionBar` is drawn inside the page, below the window's title bar.
- Dialogs and modal views open as separate windows.
- In release builds the app folder is read-only. Write files to `knownFolders.documents()` (`~/.local/share/<app id>`) or `knownFolders.temp()` (`~/.cache/<app id>`). `ApplicationSettings` are stored in `~/.config/<app id>/settings.json`.
