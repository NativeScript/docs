---
title: Folder
titleTemplate: :title - API / NativeScript
description: Represents a Folder (directory) entity on the file system.
contributors: false
---

Defined in: [file-system/index.d.ts:221](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/file-system/index.d.ts#L221)

Represents a Folder (directory) entity on the file system.

## Extends

- [`FileSystemEntity`](FileSystemEntity.md)

## Constructors

### Constructor

```ts
new Folder(): Folder;
```

#### Returns

`Folder`

#### Inherited from

[`FileSystemEntity`](FileSystemEntity.md).[`constructor`](FileSystemEntity.md#constructor)

## Properties

### isKnown

```ts
isKnown: boolean;
```

Defined in: [file-system/index.d.ts:225](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/file-system/index.d.ts#L225)

Determines whether this instance is a KnownFolder (accessed through the KnownFolders object).

***

### lastModified

```ts
lastModified: Date;
```

Defined in: [file-system/index.d.ts:31](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/file-system/index.d.ts#L31)

Gets the Date object specifying the last time this entity was modified.

#### Inherited from

[`FileSystemEntity`](FileSystemEntity.md).[`lastModified`](FileSystemEntity.md#lastmodified)

***

### name

```ts
name: string;
```

Defined in: [file-system/index.d.ts:36](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/file-system/index.d.ts#L36)

Gets the name of the entity.

#### Inherited from

[`FileSystemEntity`](FileSystemEntity.md).[`name`](FileSystemEntity.md#name)

***

### parent

```ts
parent: Folder;
```

Defined in: [file-system/index.d.ts:48](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/file-system/index.d.ts#L48)

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

Defined in: [file-system/index.d.ts:41](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/file-system/index.d.ts#L41)

Gets the fully-qualified path (including the extension for a File) of the entity.

#### Inherited from

[`FileSystemEntity`](FileSystemEntity.md).[`path`](FileSystemEntity.md#path)

## Methods

### clear()

```ts
clear(): Promise<any>;
```

Defined in: [file-system/index.d.ts:249](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/file-system/index.d.ts#L249)

Deletes all the files and folders (recursively), contained within this Folder.

#### Returns

`Promise`\<`any`\>

***

### clearSync()

```ts
clearSync(onError?: (error: any) => void): void;
```

Defined in: [file-system/index.d.ts:255](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/file-system/index.d.ts#L255)

Deletes all the files and folders (recursively), contained within this Folder synchronously.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `onError?` | (`error`: `any`) => `void` | An optional function to be called if some error occurs. |

#### Returns

`void`

***

### contains()

```ts
contains(name: string): boolean;
```

Defined in: [file-system/index.d.ts:244](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/file-system/index.d.ts#L244)

Checks whether this Folder contains an Entity with the specified name.
The path of the folder is added to the name to resolve the complete path to check for.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The name of the entity to check for. |

#### Returns

`boolean`

***

### eachEntity()

```ts
eachEntity(onEntity: (entity: FileSystemEntity) => boolean): any;
```

Defined in: [file-system/index.d.ts:284](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/file-system/index.d.ts#L284)

Enumerates all the top-level FileSystem entities residing within this folder.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `onEntity` | (`entity`: [`FileSystemEntity`](FileSystemEntity.md)) => `boolean` | A callback that receives the current entity. If the callback returns false this will mean for the iteration to stop. |

#### Returns

`any`

***

### getEntities()

```ts
getEntities(): Promise<FileSystemEntity[]>;
```

Defined in: [file-system/index.d.ts:272](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/file-system/index.d.ts#L272)

Gets all the top-level entities residing within this folder.

#### Returns

`Promise`\<[`FileSystemEntity`](FileSystemEntity.md)[]\>

***

### getEntitiesSync()

```ts
getEntitiesSync(onError?: (error: any) => any): FileSystemEntity[];
```

Defined in: [file-system/index.d.ts:278](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/file-system/index.d.ts#L278)

Gets all the top-level entities residing within this folder synchronously.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `onError?` | (`error`: `any`) => `any` | An optional function to be called if some error occurs. |

#### Returns

[`FileSystemEntity`](FileSystemEntity.md)[]

***

### getFile()

```ts
getFile(name: string): File;
```

Defined in: [file-system/index.d.ts:261](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/file-system/index.d.ts#L261)

Gets or creates a File entity with the specified name within this Folder.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The name of the file to get/create. |

#### Returns

[`File`](File.md)

***

### getFolder()

```ts
getFolder(name: string): Folder;
```

Defined in: [file-system/index.d.ts:267](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/file-system/index.d.ts#L267)

Gets or creates a Folder entity with the specified name within this Folder.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The name of the folder to get/create. |

#### Returns

`Folder`

***

### remove()

```ts
remove(): Promise<any>;
```

Defined in: [file-system/index.d.ts:53](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/file-system/index.d.ts#L53)

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

Defined in: [file-system/index.d.ts:58](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/file-system/index.d.ts#L58)

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

Defined in: [file-system/index.d.ts:64](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/file-system/index.d.ts#L64)

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

Defined in: [file-system/index.d.ts:70](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/file-system/index.d.ts#L70)

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

### exists()

```ts
static exists(path: string): boolean;
```

Defined in: [file-system/index.d.ts:237](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/file-system/index.d.ts#L237)

Checks whether a Folder with the specified path already exists.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The path to check for. |

#### Returns

`boolean`

***

### fromPath()

```ts
static fromPath(path: string): Folder;
```

Defined in: [file-system/index.d.ts:231](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/file-system/index.d.ts#L231)

Gets or creates a Folder entity at the specified path.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The path to get/create the folder at. |

#### Returns

`Folder`
