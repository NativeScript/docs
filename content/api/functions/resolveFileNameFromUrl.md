---
title: resolveFileNameFromUrl
titleTemplate: :title - API / NativeScript
contributors: false
---

```ts
function resolveFileNameFromUrl(
   url: string, 
   appDirectory: string, 
   fileExists: (name: string) => boolean, 
   importSource?: string): string;
```

Defined in: [ui/styling/style-scope.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style-scope.ts)

## Parameters

| Parameter | Type |
| ------ | ------ |
| `url` | `string` |
| `appDirectory` | `string` |
| `fileExists` | (`name`: `string`) => `boolean` |
| `importSource?` | `string` |

## Returns

`string`
