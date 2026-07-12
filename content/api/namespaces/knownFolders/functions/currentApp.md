---
title: currentApp
titleTemplate: :title - API / NativeScript
contributors: false
---

```ts
function currentApp(): Folder;
```

Defined in: [file-system/index.d.ts:312](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/file-system/index.d.ts#L312)

Gets the root folder for the current application. This Folder is private for the application and not accessible from Users/External apps.
iOS - this folder is read-only and contains the app and all its resources.

## Returns

[`Folder`](../../../../classes/Folder.md)
