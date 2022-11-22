---
title: FileSystem
description: Work with the device file system
---

The FileSystem module provides high-level abstractions for file system entities such as files, folders, known folders( the entry to the device file system), paths, separators, etc.

## Using FileSytem

### Accessing the Documents folder

To get the root Documents folder, call the `documents()` function of the `knownFolder` namespace:

```ts
const documents = knownFolders.documents()
```

### Accessing the temporary(Caches) folder

```ts
const cache = knownFolders.temp()
```

### Accessing the root folder for the app

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

### Renaming a folder

To rename a folder, use the `rename` or `renameSync` method:

```ts

folder
  .rename(newName)
  .then(res => {
    // Folder Successfully renamed.

  })
  .catch(err => {
    //Folder couldn't be renamed
    console.error(err)
  })

```
### Check if a folder exists

```ts

const folderExists: boolean = Folder.exists('folder-path')

```

### Accessing a folder's content

To get a folder's files and folders, use the `getEntitiesSync` or  `getEntities` method:


```ts

folder
  .getEntities()
  .then((entities: FileSystemEntity[]) => {
    
  
  })
  .catch(err => {
    console.log(err)
  })

  ```

### Deleting the contents of a Folder

To delete all the content of a Folder, use the `clear` or `clearSync` method of a [Folder](#folder) instance:

```ts
folder.clear().then((result)=>{
// successful delete
}).catch((rerror)=>{
  
})

// OR

folder.clearSync((error)=>{

})
```

### Deleting a folder

To delete a folder, use the `remove` or `removeSync` method:

```ts
folder.remove().then((value: boolean)=>{

console.log(value)

}).catch((error)=>{

console.error(error.message)
})
```

### Creating a file

To create a file, call the `getFile()` method on an instance of the `Folder` class and pass it the file name with the extension.

```ts
folder.getFile("text.txt")
```

Alternatively, you can create a file from a path using the File class's  [fromPath](#frompath) static method.

```ts
const documentsFolder = knownFolders.documents()
const filePath = path.join(documentsFolder.path, 'FileFromPath.txt')
const file = File.fromPath(filePath)
```

### Check if a file exists

To check if a file exists, call the static `exists` method of the [File]() class and pass it the file path string:

```ts
const exists = File.exists(fPath)
```

### Renaming a file

To rename a file, use the `rename` or `renameSync` method: 

```ts
file.rename("new-name.ext").then((value)=>{

}).catch(err=>{

})
```

### Saving a text to a file

To save a text to a file, use the `writeText` or `writeTextSync` method:

```ts
file
  .writeText('Some text')
  .then(result => {
    // Succeeded writing to the file.
 
  })
  .catch(error => {
    console.log(error)
  })

```

### Saving a binary data to a file
<!-- TODO: binary data example -->
To save binary data to a file, use the `write` or `writeSync` method:

```ts
file
  .write(binary data)
  .then(result => {
    // Succeeded writing to the file.
 
  })
  .catch(error => {
    console.log(error)
  })

```

### Reading text from a file

To read data from a text file, use the `readText` or `readTextSync` method of the file instance:
```ts
   file.readText().then(res => {
      // Succeeded read from file.
      
    })
    .catch(error => {

  })
```

### Reading a binary data from a file

To read binary data, use the `read` or `readSync` method of the File instance. For example, you can save an image on the device and retrive it as follows:

```ts

async readAnImage() {

    const folder = knownFolders.documents()
    const fPath = path.join(folder.path, 'cat.png')
    const imageFile = File.fromPath(fPath)

    try {

      const imageSource = await ImageSource.fromFile('~/assets/images/download.jpeg')
      const saved: boolean = imageSource.saveToFile(fPath, "png")

      if (saved) {
        // READ BINARY DATA
        const imageBinary = await imageFile.read()
        const img = await ImageSource.fromData(imageBinary)
      }

    } catch (err) {

    }
}
```

### Deleting a file

To remove a file, use the `remove` or `removeSync` method of the [File]() instance:

```ts

file
  .remove()
  .then((res: boolean) => {
    // Success removing the file.
  })
  .catch(err => {
  })

 ``` 

 ### Normalizing a path

 To normalize a path use the `normalize` or create it with the `join` function from the [path]() namespace:

```ts
const testPath = '///test.txt'
let documentsFolder = knownFolders.documents()
path.normalize(documentsFolder.path + testPath)
```

## FileSystem API

### fromPath