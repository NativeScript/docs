---
title: startMonitoring
titleTemplate: :title - API / NativeScript
contributors: false
---

```ts
function startMonitoring(connectionTypeChangedCallback: (newConnectionType: number) => void): void;
```

Defined in: [connectivity/index.d.ts:47](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/connectivity/index.d.ts#L47)

Starts monitoring the connection type.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `connectionTypeChangedCallback` | (`newConnectionType`: `number`) => `void` | A function that will be called when the connection type changes. |

## Returns

`void`
