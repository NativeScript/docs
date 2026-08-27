---
title: WindowOpenOptions
titleTemplate: :title - API / NativeScript
description: Options for opening a new window.
contributors: false
---

Defined in: [native-window/native-window-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/native-window-interfaces.ts)

Options for opening a new window.

## Properties

### data?

```ts
optional data?: Record<string, any>;
```

Defined in: [native-window/native-window-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/native-window-interfaces.ts)

Data to pass to the new window.
On iOS: serialized into NSUserActivity.userInfo.
On Android: added as intent extras.
