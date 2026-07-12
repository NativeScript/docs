---
title: profilingStop
titleTemplate: :title - API / NativeScript
contributors: false
---

```ts
function profilingStop(name: string): TimerInfo;
```

Defined in: [profiling/index.d.ts:78](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/profiling/index.d.ts#L78)

Pauses a timer with a specific name. This will increase call count and accumulate time.
Works only if profiling is enabled.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | Name of the timer. |

## Returns

[`TimerInfo`](../interfaces/TimerInfo.md)

TimerInfo for the paused timer.
