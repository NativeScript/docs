---
title: startMonitoring
titleTemplate: :title - API / NativeScript
contributors: false
---

```ts
function startMonitoring(connectionTypeChangedCallback: (newConnectionType: number) => void): void;
```

Defined in: connectivity/index.d.ts:47

Starts monitoring the connection type.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `connectionTypeChangedCallback` | (`newConnectionType`: `number`) => `void` | A function that will be called when the connection type changes. |

## Returns

`void`
