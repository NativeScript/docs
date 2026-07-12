---
title: File
titleTemplate: :title - API / NativeScript
description: Represents a File entity on the file system.
contributors: false
---

Defined in: file-system/index.d.ts:89

Represents a File entity on the file system.

## Extends

- [`FileSystemEntity`](FileSystemEntity.md)

## Constructors

### Constructor

```ts
new File(): File;
```

#### Returns

`File`

#### Inherited from

[`FileSystemEntity`](FileSystemEntity.md).[`constructor`](FileSystemEntity.md#constructor)

## Properties

### extension

```ts
extension: string;
```

Defined in: file-system/index.d.ts:103

Gets the extension of the file.

***

### isLocked

```ts
isLocked: boolean;
```

Defined in: file-system/index.d.ts:113

Gets a value indicating whether the file is currently locked, meaning a background operation associated with this file is running.

***

### lastModified

```ts
lastModified: Date;
```

Defined in: file-system/index.d.ts:31

Gets the Date object specifying the last time this entity was modified.

#### Inherited from

[`FileSystemEntity`](FileSystemEntity.md).[`lastModified`](FileSystemEntity.md#lastmodified)

***

### name

```ts
name: string;
```

Defined in: file-system/index.d.ts:36

Gets the name of the entity.

#### Inherited from

[`FileSystemEntity`](FileSystemEntity.md).[`name`](FileSystemEntity.md#name)

***

### parent

```ts
parent: Folder;
```

Defined in: file-system/index.d.ts:48

Gets the Folder object representing the parent of this entity.
Will be null for a root folder like Documents or Temporary.
This property is readonly.

#### Inherited from

[`FileSystemEntity`](FileSystemEntity.md).[`parent`](FileSystemEntity.md#parent)

***

### path

```ts
path: string;
```

Defined in: file-system/index.d.ts:41

Gets the fully-qualified path (including the extension for a File) of the entity.

#### Inherited from

[`FileSystemEntity`](FileSystemEntity.md).[`path`](FileSystemEntity.md#path)

***

### size

```ts
size: number;
```

Defined in: file-system/index.d.ts:108

Gets the size in bytes of the file.

***

### android

```ts
readonly static android: Android;
```

Defined in: file-system/index.d.ts:90

***

### ios

```ts
readonly static ios: iOS;
```

Defined in: file-system/index.d.ts:92

## Methods

### append()

```ts
append(content: any): Promise<void>;
```

Defined in: file-system/index.d.ts:134

Appends the provided binary content to the file.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `content` | `any` | The binary content to be saved to the file. |

#### Returns

`Promise`\<`void`\>

***

### appendSync()

```ts
appendSync(content: any, onError?: (error: any) => any): void;
```

Defined in: file-system/index.d.ts:141

Appends the provided binary content to the file synchronously.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `content` | `any` | The binary content to be saved to the file. |
| `onError?` | (`error`: `any`) => `any` | An optional function to be called if some IO-error occurs. |

#### Returns

`void`

***

### appendText()

```ts
appendText(content: string, encoding?: string): Promise<any>;
```

Defined in: file-system/index.d.ts:120

Appends the provided string to the file, using the specified encoding (defaults to UTF-8).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `content` | `string` | The content to be saved to the file. |
| `encoding?` | `string` | An optional value specifying the preferred encoding (defaults to UTF-8). |

#### Returns

`Promise`\<`any`\>

***

### appendTextSync()

```ts
appendTextSync(
   content: string, 
   onError?: (error: any) => any, 
   encoding?: string): void;
```

Defined in: file-system/index.d.ts:128

Appends the provided string to the file synchronously, using the specified encoding (defaults to UTF-8).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `content` | `string` | The content to be saved to the file. |
| `onError?` | (`error`: `any`) => `any` | An optional function to be called if some IO-error occurs. |
| `encoding?` | `string` | An optional value specifying the preferred encoding (defaults to UTF-8). |

#### Returns

`void`

***

### copy()

```ts
copy(dest: string): Promise<boolean>;
```

Defined in: file-system/index.d.ts:148

Copies a file to a given path.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `dest` | `string` | The path to the destination file. Returns a Promise with a boolean. |

#### Returns

`Promise`\<`boolean`\>

***

### copySync()

```ts
copySync(dest: string, onError?: (error: any) => any): any;
```

Defined in: file-system/index.d.ts:156

Copies a file to a given path.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `dest` | `string` | The path to the destination file. |
| `onError?` | (`error`: `any`) => `any` | (optional) A callback function to use if any error occurs. Returns a Promise with a boolean. |

#### Returns

`any`

***

### read()

```ts
read(): Promise<any>;
```

Defined in: file-system/index.d.ts:181

Reads the binary content of the file asynchronously.

#### Returns

`Promise`\<`any`\>

***

### readSync()

```ts
readSync(onError?: (error: any) => any): any;
```

Defined in: file-system/index.d.ts:187

Reads the binary content of the file synchronously.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `onError?` | (`error`: `any`) => `any` | An optional function to be called if some IO-error occurs. |

#### Returns

`any`

***

### readText()

```ts
readText(encoding?: string): Promise<string>;
```

Defined in: file-system/index.d.ts:169

Reads the content of the file as a string using the specified encoding (defaults to UTF-8).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `encoding?` | `string` | An optional value specifying the preferred encoding (defaults to UTF-8). |

#### Returns

`Promise`\<`string`\>

***

### readTextSync()

```ts
readTextSync(onError?: (error: any) => any, encoding?: string): string;
```

Defined in: file-system/index.d.ts:176

Reads the content of the file as a string synchronously, using the specified encoding (defaults to UTF-8).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `onError?` | (`error`: `any`) => `any` | An optional function to be called if some IO-error occurs. |
| `encoding?` | `string` | An optional value specifying the preferred encoding (defaults to UTF-8). |

#### Returns

`string`

***

### remove()

```ts
remove(): Promise<any>;
```

Defined in: file-system/index.d.ts:53

Removes (deletes) the current Entity from the file system.

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`FileSystemEntity`](FileSystemEntity.md).[`remove`](FileSystemEntity.md#remove)

***

### removeSync()

```ts
removeSync(onError?: (error: any) => any): void;
```

Defined in: file-system/index.d.ts:58

Removes (deletes) the current Entity from the file system synchronously.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `onError?` | (`error`: `any`) => `any` |

#### Returns

`void`

#### Inherited from

[`FileSystemEntity`](FileSystemEntity.md).[`removeSync`](FileSystemEntity.md#removesync)

***

### rename()

```ts
rename(newName: string): Promise<any>;
```

Defined in: file-system/index.d.ts:64

Renames the current entity using the specified name.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `newName` | `string` | The new name to be applied to the entity. |

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`FileSystemEntity`](FileSystemEntity.md).[`rename`](FileSystemEntity.md#rename)

***

### renameSync()

```ts
renameSync(newName: string, onError?: (error: any) => any): void;
```

Defined in: file-system/index.d.ts:70

Renames the current entity synchronously, using the specified name.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `newName` | `string` | The new name to be applied to the entity. |
| `onError?` | (`error`: `any`) => `any` | - |

#### Returns

`void`

#### Inherited from

[`FileSystemEntity`](FileSystemEntity.md).[`renameSync`](FileSystemEntity.md#renamesync)

***

### write()

```ts
write(content: any): Promise<void>;
```

Defined in: file-system/index.d.ts:208

Writes the provided binary content to the file.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `content` | `any` | The binary content to be saved to the file. |

#### Returns

`Promise`\<`void`\>

***

### writeSync()

```ts
writeSync(content: any, onError?: (error: any) => any): void;
```

Defined in: file-system/index.d.ts:215

Writes the provided binary content to the file synchronously.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `content` | `any` | The binary content to be saved to the file. |
| `onError?` | (`error`: `any`) => `any` | An optional function to be called if some IO-error occurs. |

#### Returns

`void`

***

### writeText()

```ts
writeText(content: string, encoding?: string): Promise<any>;
```

Defined in: file-system/index.d.ts:194

Writes the provided string to the file, using the specified encoding (defaults to UTF-8).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `content` | `string` | The content to be saved to the file. |
| `encoding?` | `string` | An optional value specifying the preferred encoding (defaults to UTF-8). |

#### Returns

`Promise`\<`any`\>

***

### writeTextSync()

```ts
writeTextSync(
   content: string, 
   onError?: (error: any) => any, 
   encoding?: string): void;
```

Defined in: file-system/index.d.ts:202

Writes the provided string to the file synchronously, using the specified encoding (defaults to UTF-8).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `content` | `string` | The content to be saved to the file. |
| `onError?` | (`error`: `any`) => `any` | An optional function to be called if some IO-error occurs. |
| `encoding?` | `string` | An optional value specifying the preferred encoding (defaults to UTF-8). |

#### Returns

`void`

***

### exists()

```ts
static exists(path: string): boolean;
```

Defined in: file-system/index.d.ts:98

Checks whether a File with the specified path already exists.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The path to check for. |

#### Returns

`boolean`

***

### fromPath()

```ts
static fromPath(path: string, copy?: boolean): File;
```

Defined in: file-system/index.d.ts:163

Gets or creates a File entity at the specified path.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The path to get/create the file at. |
| `copy?` | `boolean` | An optional value when set, copies the content-uri to a temp file enabling the legacy behaviour |

#### Returns

`File`
