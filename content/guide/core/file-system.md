---
title: FileSystem
description: Work with the device file system
---

The FileSystem module provides high-level abstractions for file system entities such as files, folders, known folders( the entry to the device file system), paths, separators, etc.

## Using FileSytem

### Getting the Documents folder

To get the root Documents folder, call the `documents()` function of the `knownFolder` namespace:

```ts
const documents = knownFolders.documents()
```

### Getting the temporary(Caches) folder

```ts
const cache = knownFolders.temp()
```

### Getting the root folder the app

```ts
const appRootFolder = knownFolders.currentApp()
```

### Creating a folder

To create a folder, call the `getFolder()` method on an instance of the `Folder`(any of the root folders above or one you create) class and  pass it the name of the folder.

```ts

folder.getFolder("folder-name")
```

You can also use the `fromPath` static method of the [Folder](#folder) class.

```ts
const folderPath = path.join(knownFolders.documents().path, 'music')
const folder: Folder = Folder.fromPath(folderPath)
```

### Clearing the contents of a Folder

To delete all the content of a Folder, use the `clear` and `clearSync` methods of a [Folder](#folder) instance:

```ts
folder.clear().then((result)=>{

}).catch((reason)=>{
  
})

// OR

folder.clearSync((error)=>{

})
```
### Creating a file

To create a file, call the `getFile()` method on an instance of the `Folder` class and pass it the file name with the extension.

```ts
folder.getFile("text.txt")
```

## FileSystem API

### Folder