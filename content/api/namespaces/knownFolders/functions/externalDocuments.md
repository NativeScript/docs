---
title: externalDocuments
titleTemplate: :title - API / NativeScript
contributors: false
---

```ts
function externalDocuments(): Folder;
```

Defined in: [file-system/index.d.ts:301](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/file-system/index.d.ts#L301)

Gets the Documents folder available for the current application on an external storage. This Folder is private for the application and not accessible from Users/External apps.
On android this requires READ_EXTERNAL_STORAGE/WRITE_EXTERNAL_STORAGE permissions
There is no external storage on iOS os it is the same as `documents()`

## Returns

[`Folder`](../../../../classes/Folder.md)
