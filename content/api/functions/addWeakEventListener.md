---
title: addWeakEventListener
titleTemplate: :title - API / NativeScript
contributors: false
---

```ts
function addWeakEventListener(
   source: Observable, 
   eventName: string, 
   handler: (eventData: EventData) => void, 
   target: any): void;
```

Defined in: ui/core/weak-event-listener/index.d.ts:10

Attaches a WeakEventListener.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `source` | [`Observable`](../classes/Observable.md) | Observable class which emits the event. |
| `eventName` | `string` | The event name. |
| `handler` | (`eventData`: [`EventData`](../interfaces/EventData.md)) => `void` | The function which should be called when event occurs. |
| `target` | `any` | Subscriber (target) of the event listener. It will be used as a thisArg in the handler function. |

## Returns

`void`
