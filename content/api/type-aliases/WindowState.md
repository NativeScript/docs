---
title: WindowState
titleTemplate: :title - API / NativeScript
description: The lifecycle state of a window surface. - `attached` – connected to a live native surface. - `detached` – the native surface went away but the window may be...
contributors: false
---

```ts
type WindowState = "attached" | "detached" | "closed";
```

Defined in: [native-window/index.d.ts:27](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L27)

The lifecycle state of a window surface.

- `attached` – connected to a live native surface.
- `detached` – the native surface went away but the window may be reconnected.
- `closed` – permanently torn down.
