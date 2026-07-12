---
title: knownFolders
titleTemplate: :title - API / NativeScript
description: Provides access to the top-level Folders instances that are accessible from the application. Use these as entry points to access the FileSystem.
contributors: false
---

Provides access to the top-level Folders instances that are accessible from the application. Use these as entry points to access the FileSystem.

## Namespaces

| Namespace | Description |
| ------ | ------ |
| [ios](namespaces/ios/index.md) | Contains iOS-specific known folders. |

## Functions

| Function | Description |
| ------ | ------ |
| [currentApp](functions/currentApp.md) | Gets the root folder for the current application. This Folder is private for the application and not accessible from Users/External apps. iOS - this folder is read-only and contains the app and all its resources. |
| [documents](functions/documents.md) | Gets the Documents folder available for the current application. This Folder is private for the application and not accessible from Users/External apps. |
| [externalDocuments](functions/externalDocuments.md) | Gets the Documents folder available for the current application on an external storage. This Folder is private for the application and not accessible from Users/External apps. On android this requires READ_EXTERNAL_STORAGE/WRITE_EXTERNAL_STORAGE permissions There is no external storage on iOS os it is the same as `documents()` |
| [temp](functions/temp.md) | Gets the Temporary (Caches) folder available for the current application. This Folder is private for the application and not accessible from Users/External apps. |
