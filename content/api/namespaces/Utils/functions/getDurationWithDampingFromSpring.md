---
title: getDurationWithDampingFromSpring
titleTemplate: :title - API / NativeScript
contributors: false
---

```ts
function getDurationWithDampingFromSpring(springSettings?: {
  friction?: number;
  mass?: number;
  tension?: number;
  velocity?: number;
}): {
  damping: number;
  duration: number;
};
```

Defined in: [utils/animation-helpers.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/utils/animation-helpers.ts)

Get a duration with damping value from various spring related settings.
Helpful when needing to convert spring settings to isolated duration value.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `springSettings?` | \{ `friction?`: `number`; `mass?`: `number`; `tension?`: `number`; `velocity?`: `number`; \} | various spring settings |
| `springSettings.friction?` | `number` | - |
| `springSettings.mass?` | `number` | - |
| `springSettings.tension?` | `number` | - |
| `springSettings.velocity?` | `number` | - |

## Returns

```ts
{
  damping: number;
  duration: number;
}
```

calculated duration with damping from spring settings

### damping

```ts
damping: number;
```

### duration

```ts
duration: number;
```
