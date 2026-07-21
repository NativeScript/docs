---
title: notifyEvent
titleTemplate: :title - API / NativeScript
contributors: false
---

```ts
function notifyEvent(
   object: Object, 
   name: string, 
   data?: any): void;
```

Defined in: [trace/index.d.ts:90](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/trace/index.d.ts#L90)

Notifies all the attached listeners for an event that has occurred in the sender object.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `object` | `Object` | The Object instance that raised the event. |
| `name` | `string` | The name of the raised event. |
| `data?` | `any` | An optional parameter that passes the data associated with the event. |

## Returns

`void`
