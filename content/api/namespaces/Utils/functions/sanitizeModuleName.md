---
title: sanitizeModuleName
titleTemplate: :title - API / NativeScript
contributors: false
---

```ts
function sanitizeModuleName(moduleName: string, removeExtension?: boolean): string;
```

Defined in: utils/common.d.ts:16

Helps sanitize a module name if it is prefixed with '~/', '~' or '/'

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `moduleName` | `string` | the name |
| `removeExtension?` | `boolean` | whether to remove extension |

## Returns

`string`
