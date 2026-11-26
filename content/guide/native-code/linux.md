---
title: Adding Linux native code to an application
description: Use your own C and C++ code, and other C libraries, in NativeScript Linux apps.
contributors:
  - triniwiz
---

::: warning Experimental
The Linux platform is experimental. See [Developing for Linux](/guide/linux/).
:::

On Linux, NativeScript calls C functions directly from JavaScript. Besides the libraries of the [Linux SDK](/guide/linux/#the-linux-sdk), an app can use its own C or C++ code, prebuilt shared libraries, or other C libraries installed on the system.

On every build, the CLI compiles the native code, generates metadata from its headers and bundles the result with the app, as on iOS. The functions, structs, enums and constants declared in the headers are then available as JavaScript globals, see [Linux Marshalling](/guide/linux-marshalling).

Native code for the app goes in `App_Resources/Linux`. Plugins use the same layout in their `platforms/linux` folder (see [Plugins](#plugins)):

```bash
App_Resources/
└─ Linux/
   ├─ src/                 # C/C++ sources and headers, compiled into a shared library
   ├─ include/             # public headers (optional)
   ├─ lib/
   │  ├─ x64/              # prebuilt .so files (bundled) and .a files (linked)
   │  └─ arm64/
   ├─ native.json          # pkg-config packages, compiler and linker flags (optional)
   ├─ CMakeLists.txt       # builds the native code with CMake instead (optional)
   └─ ...
```

Building native code requires a C toolchain, see [Installing a C toolchain](/setup/linux#installing-a-c-toolchain-optional).

## Adding C or C++ code

Put your sources (`.c`, `.cc`, `.cpp`, `.cxx`) and headers in `App_Resources/Linux/src`:

```c
// App_Resources/Linux/src/greeter.h
#pragma once

typedef struct {
  int width;
  int height;
} GreeterSize;

const char *greeter_message(const char *name);
GreeterSize greeter_size(void);
```

```c
// App_Resources/Linux/src/greeter.c
#include <stdio.h>
#include "greeter.h"

const char *greeter_message(const char *name) {
  static char buffer[128];
  snprintf(buffer, sizeof buffer, "Hello, %s!", name);
  return buffer;
}

GreeterSize greeter_size(void) {
  return (GreeterSize){ 640, 480 };
}
```

The sources are compiled into `libapp.so` (with `-O2` in release builds, `-O0 -g` otherwise), and every function declared in the headers can be called from JavaScript:

```ts
console.log(greeter_message('NativeScript')) // 'Hello, NativeScript!'

const { width, height } = greeter_size()
```

When the code has an `include/` folder, only the headers in `include/` are exposed to JavaScript. Otherwise every header in `src/` is.

### Compiler flags and libraries

To use other libraries, list their [pkg-config](https://www.freedesktop.org/wiki/Software/pkg-config/) packages, and any additional compiler and linker flags, in `native.json`:

```json
{
  "pkg-config": ["gtk4", "sqlite3"],
  "cflags": ["-DGREETER_DEBUG=1"],
  "libs": ["-lm"]
}
```

The library's development package must be installed on the build machine (for example `libsqlite3-dev` for `sqlite3`), and the library itself on the machine that runs the app.

Types your headers use from the Linux SDK (`GtkWidget *`, `GdkRGBA`, `graphene_rect_t *`, ...) are referenced by name and resolved from the SDK metadata at runtime, so a function that takes a `GtkWidget *` can be passed the `nativeView` of a NativeScript view.

## Using prebuilt libraries

Put prebuilt libraries in `lib/<arch>`, where `<arch>` is `x64` or `arm64`, and their headers in `include/`:

```bash
App_Resources/
└─ Linux/
   ├─ include/
   │  └─ mylib.h
   └─ lib/
      ├─ x64/
      │  └─ libmylib.so
      └─ arm64/
         └─ libmylib.so
```

- Shared libraries (`.so`) are bundled in the app's `lib/` folder, which the runtime searches first when it loads a library.
- Static libraries (`.a`) are linked into the compiled library.

## Using module maps

By default, all headers become one module named after the app (`app`) or plugin, linked to the compiled or prebuilt libraries. For more control, add a [Clang module map](https://clang.llvm.org/docs/Modules.html#module-map-language) (`module.modulemap`) to `src/` or `include/`, as on iOS. When there is one, the CLI uses it as it is:

- The `header` entries are the headers that are exposed to JavaScript.
- The `link` entries are the libraries the runtime loads.
- Sources in `src/` are compiled into the library named by the first `link` (`link "greeter"` builds `libgreeter.so`).

```
module greeter [system] {
  header "greeter.h"
  link "greeter"
}
```

A module map can also expose a library that is installed on the system, with headers from anywhere:

```
module sqlite3 [system] {
  header "/usr/include/sqlite3.h"
  link "sqlite3"
}
```

```ts
const db = new interop.Reference(interop.types.pointer, null)
sqlite3_open(':memory:', db)
console.log(sqlite3_libversion())
sqlite3_close(db.value)
```

A `link` is a library filename (`libsqlite3.so`), a soname (`libsqlite3.so.0`) or an `-l` style name (`sqlite3`). An `-l` style name is looked up as `libsqlite3.so` or `libsqlite3.so.<version>` in the app's `lib/` folder, then on the system's library paths. If a library can't be loaded, the runtime prints the names it tried.

## Using CMake

For larger projects, add a `CMakeLists.txt`. It takes over the build of the native code, and `src/` is left to CMake:

```cmake
cmake_minimum_required(VERSION 3.16)
project(greeter C)

add_library(greeter SHARED src/greeter.c)

find_package(PkgConfig REQUIRED)
pkg_check_modules(GTK4 REQUIRED IMPORTED_TARGET gtk4)
target_link_libraries(greeter PRIVATE PkgConfig::GTK4)
```

The CLI configures and builds the project and:

- sets `CMAKE_BUILD_TYPE` to `Release` for `--release` builds and to `Debug` otherwise, and `NS_ARCH` to `x64` or `arm64`
- bundles every shared library the project builds in the app's `lib/` folder
- generates the metadata with the include paths and defines from the project's `compile_commands.json`

Use a [module map](#using-module-maps) to choose the headers and libraries that are exposed to JavaScript. The CMake build folder is kept in `platforms/linux/build/native`, so later builds are incremental.

## TypeScript typings

Run `ns typings linux` to generate typings for your native code (and the Linux SDK) into `typings/linux`. Later builds keep them up to date. See [Generating TypeScript types](/guide/native-code/generate-typings#generate-types-for-linux).

## Plugins

Plugins add Linux native code in their `platforms/linux` folder, with the same layout as `App_Resources/Linux` (`src/`, `include/`, `lib/<arch>/`, `native.json`, `CMakeLists.txt` and module maps):

```bash
my-plugin/
├─ index.linux.ts
├─ index.ios.ts
├─ index.android.ts
└─ platforms/
   └─ linux/
      ├─ src/
      │  ├─ my_plugin.c
      │  └─ my_plugin.h
      └─ native.json
```

Without a module map, the plugin's module and library are named after the package, with characters that aren't valid in C replaced by `_` (`@scope/my-plugin` becomes `scope_my_plugin` and `libscope_my_plugin.so`).

Native code in plugins is built for the app on every build, like the app's own native code. As on the other platforms, a plugin can include a `native-api-usage.json` in `platforms/linux` to filter the metadata, see [Metadata › Metadata filtering](/guide/metadata#metadata-filtering).

## Generating metadata by hand

The NativeScript CLI generates metadata automatically. To use the runtime outside of the CLI, see the [Linux runtime repository](https://github.com/triniwiz/linux-runtime#metadata-for-an-apps-own-c-library) for how to run the metadata generator yourself.
