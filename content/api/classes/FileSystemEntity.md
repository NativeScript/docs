---
title: FileSystemEntity
titleTemplate: :title - API / NativeScript
description: Represents a single entity on the file system.
contributors: false
---

Defined in: file-system/index.d.ts:27

Represents a single entity on the file system.

## Extended by

- [`File`](File.md)
- [`Folder`](Folder.md)

## Constructors

### Constructor

```ts
new FileSystemEntity(): FileSystemEntity;
```

#### Returns

`FileSystemEntity`

## Properties

### lastModified

```ts
lastModified: Date;
```

Defined in: file-system/index.d.ts:31

Gets the Date object specifying the last time this entity was modified.

***

### name

```ts
name: string;
```

Defined in: file-system/index.d.ts:36

Gets the name of the entity.

***

### parent

```ts
parent: Folder;
```

Defined in: file-system/index.d.ts:48

Gets the Folder object representing the parent of this entity.
Will be null for a root folder like Documents or Temporary.
This property is readonly.

***

### path

```ts
path: string;
```

Defined in: file-system/index.d.ts:41

Gets the fully-qualified path (including the extension for a File) of the entity.

## Methods

### remove()

```ts
remove(): Promise<any>;
```

Defined in: file-system/index.d.ts:53

Removes (deletes) the current Entity from the file system.

#### Returns

`Promise`\<`any`\>

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
