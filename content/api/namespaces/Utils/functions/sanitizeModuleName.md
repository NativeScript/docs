---
title: sanitizeModuleName
titleTemplate: :title - API / NativeScript
contributors: false
---

```ts
function sanitizeModuleName(moduleName: string, removeExtension?: boolean): string;
```

Defined in: [utils/common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/utils/common.ts)

Helps sanitize a module name if it is prefixed with '~/', '~' or '/'

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `moduleName` | `string` | the name |
| `removeExtension?` | `boolean` | whether to remove extension |

## Returns

`string`
