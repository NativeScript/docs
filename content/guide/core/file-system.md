---
title: FileSystem
description: Work with the device file system
---

The FileSystem module provides high-level abstractions for file system entities such as files, folders, known folders( the entry to the device file system), paths, separators, etc.

## Using FileSytem

### Accessing the Documents folder

To get the root Documents folder, call the `documents()` method of the `knownFolder` object:

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

You can also use the [fromPath](#frompath) static method of the Folder class.

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
    // do something
  })
  .catch(err => {
    console.log(err)
  })

  ```

### Deleting the contents of a Folder

To delete all the content of a Folder, use the [clear](#clear) or [clearSync](#clearsync) method of a Folder instance:

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

### Creating, writing to and reading from a file
<!-- Preview: https://stackblitz.com/edit/nativescript-stackblitz-templates-5yndru?file=app/main-view-model.ts -->
- To create a file, call the `getFile()` method on an instance of the `Folder` class and pass it the file name with the extension.

```ts
folder.getFile("my-text.txt")
//or 
const filePath = path.join(folder.path, 'my-text.txt')
const file = File.fromPath(filePath)
```

- To save a text to a file, use the `writeText` or `writeTextSync` method:

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
- To read data from a text file, use the `readText` or `readTextSync` method of the file instance:
```ts
   file.readText().then(res => {
      // Succeeded read from file.
      
    })
    .catch(error => {

  })
```
### Check if a file exists

To check if a file exists, call the static [exists](#exists) method of the File class and pass it the file path string:

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

To remove a file, use the [remove](#remove) or [removeSync](#removesync) method of the File instance:

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

 To normalize a path use the `normalize` or create it with the `join` method from the [path](#path-operations) object:

```ts
const testPath = '///test.txt'
let documentsFolder = knownFolders.documents()
path.normalize(documentsFolder.path + testPath)
```

## FileSystem API

### documents

```ts
const folder: Folder = knownFolders.documents()
```

Gets the Documents folder available for the current application. This Folder is private for the application and not accessible from Users/External apps.

---

### externalDocuments

```ts
const folder: Folder = knownFolders.externalDocuments()
```

Gets the Documents folder available for the current application on an external storage. This Folder is private for the application and not accessible from Users/External apps. On android this requires `READ_EXTERNAL_STORAGE/WRITE_EXTERNAL_STORAGE` permissions. There is no external storage on iOS os it is the same as [documents()](#documents).

---  

### temp

```ts
const folder: Folder = knownFolders.temp()
```
Gets the Temporary (Caches) folder available for the current application. This Folder is private for the application and not accessible from Users/External apps.

---

### currentApp

```ts
const folder: Folder = knownFolders.currentApp()
```

Gets the root folder for the current application.

---

### iOS known folders

The following methods allow to access to iOS known folders.

#### library
```ts
const folder: Folder = knownFolders.ios.library()
```
Gets the NSLibraryDirectory.

---

#### developer
```ts
const folder: Folder = knownFolders.ios.developer()
```
Gets the NSDeveloperDirectory.

---

#### desktop
```ts
const folder: Folder = knownFolders.ios.desktop()
```
Gets the NSDesktopDirectory.

---

#### downloads
```ts
const folder: Folder = knownFolders.ios.downloads()
```
Gets the NSDownloadsDirectory.

---

#### movies
```ts
const folder: Folder = knownFolders.ios.movies()
```
Gets the NSMoviesDirectory.

---

#### music
```ts
const folder: Folder = knownFolders.ios.music()
```
Gets the NSMusicDirectory.

---

#### pictures
```ts
const folder: Folder = knownFolders.ios.pictures()
```
Gets the NSPicturesDirectory.

---

#### sharedPublic
```ts
const folder: Folder = knownFolders.ios.sharedPublic()
```
Gets the NSSharedPublicDirectory.

---

### fromPath

```ts

File.fromPath(path: string): File

```

or 

```ts
Folder.fromPath(path: string): Folder
```

Gets or creates a Folder or File entity at the specified path.

---

### getFolder
```ts
folder.getFolder(name: string): Folder
```

Gets or creates a Folder entity with the specified name within a Folder.

---


### exists

```ts
Folder.exists(path: string): boolean
```

or 

```ts
File.exists(path: string): boolean
```

Checks whether a Folder or File with the specified path already exists.

---

### isKnown

```ts
const isItAKnownFolder: boolean = folder.isKnown
```
Determines whether this instance is a known folder (accessed through the `knownFolders` object).

---
Both the File and Folder classes extend the FileSystemEntity which has the following API:

### lastModified

```ts
const lastModified: Date = entity.lastModified 
```

Gets the Date object specifying the last time this entity was modified.

---

### name

```ts
const name: string = entity.name
```

Gets the name of the entity.

---

### path 

```ts
const path: string = entity.path
```

Gets the fully-qualified path (including the extension for a File) of the entity.

---

### parent

```ts
const parent : Folder = entity.parent
```
Gets the Folder object representing the parent of this entity.
Will be null for a root folder like Documents or Temporary.
This property is readonly.
	
---

### remove

```ts
entity.remove(): Promise<any>
```

Asyncronously removes (deletes) the current Entity from the file system.

---

### removeSync

```ts
entity.removeSync(onError?: (error: any) => any): void
```

Removes (deletes) the current Entity from the file system.

---

### rename

```ts
entity.rename(newName: string): Promise<any>
```

Asynchronously renames the current entity using the specified name.

---

### renameSync

```ts
entity.renameSync(newName: string, onError?: (error: any) => any)
```

Renames the current entity synchronously, using the specified name.

---

### getEntities

```ts
folder.getEntities(): Promise<Array<FileSystemEntity>>
```
Asynchronously gets all the top-level entities residing within a folder.

---

### getEntitiesSync

```ts
folder.getEntitiesSync(onError?: (error: any) => any): Array<FileSystemEntity>
```

Gets all the top-level entities residing within this folder synchronously. `onError` is a optional function to be called if some error occurs.

---

### eachEntity

```ts
folder.eachEntity(onEntity: (entity: FileSystemEntity) => boolean)
```

Enumerates all the top-level FileSystem entities within a folder. `onEntity` is a callback that receives the current entity.

---
### getFile
```ts
folder.getFile(name: string): File
```
Gets or creates a File entity with the specified name within this Folder

---


### extension

```ts
const fileExt: string = file.extension
```

Gets the extension of the file.

---

### size

```ts
const fileSize: number = file.size
```

Gets the extension of the file.

---

### isLocked

```ts
file.isLocked
```

Gets a boolean value indicating whether the file is currently locked, meaning a background operation associated with this file is running.

---

### readText

```ts
file.readText(encoding?: string): Promise<string>
```

Asynchronously reads the content of the file as a string using the specified encoding (defaults to UTF-8).

---

### readTextSync

```ts
file.readTextSync(onError?: (error: any) => any, encoding?: string): string
```

Reads the content of the file as a string synchronously, using the specified encoding (defaults to UTF-8). `onError` is a function to be called if some IO-error occurs.

---


### read

```ts
file.read(): Promise<any>
```

Reads the binary content of the file asynchronously.

---

### readSync
```ts
file.readSync(onError?: (error: any) => any): any
```
Reads the binary content of the file synchronously. `onError` is a function to be called if some IO-error occurs.

---

### writeText

```ts
file.writeText(content: string, encoding?: string): Promise<any>
```
Asynchronously writes the content of the file as a string using the specified encoding (defaults to UTF-8).

---

### writeTextSync

```ts
file.writeTextSync(content: string, onError?: (error: any) => any, encoding?: string): void
```

Synchronously writes the content of the file as a string using the specified encoding (defaults to UTF-8). `onError` is a function to be called if some IO-error occurs.

---

### write

```ts
file.write(content: any): Promise<void>
```

Writes the provided binary content to the file asynchronously.

---
### writeSync
```ts
file.writeSync(content: any, onError?: (error: any) => any): void
```

Writes the provided binary content to the file synchronously. `onError` is a function to be called if some IO-error occurs.

---

### contains

```ts
const contains: boolean = folder.contains(name: string)
```
Checks whether this Folder contains an Entity with the specified name.

---

### clear

```ts
folder.clear(): Promise<any>
```
Asynchronously deletes all the files and folders (recursively), contained within the Folder.

---

### clearSync

```ts
folder.clearSync(onError?: (error: any) => void): void
```
Synchronously deletes all the files and folders (recursively), contained within the Folder.

---

### path operations

#### normalize

```ts
const normalizedPath: string = path.normalize(path: string)
```

Normalizes a path, taking care of occurrances like ".." and "//".

---

#### join

```ts
const joinedPath: string = path.join(...paths: string[])
```

Joins all the provided string components, forming a valid and normalized path.

---

#### separator

```ts
const pathSeparator: string = path.separator
```

Gets the string used to separate file paths.

---


## API References

- [File](https://docs.nativescript.org/api-reference/classes/file) class
- [Folder](https://docs.nativescript.org/api-reference/classes/folder) class
- [FileSystemEntity](https://docs.nativescript.org/api-reference/classes/folder) class
- [knownFolders](https://docs.nativescript.org/api-reference/modules/knownfolders) module
- [path](https://docs.nativescript.org/api-reference/modules/path) module

## Native Component

- Android: [java.io.File](https://developer.android.com/reference/java/io/File)

- iOS: [NSFileManager](https://developer.apple.com/documentation/foundation/nsfilemanager)

