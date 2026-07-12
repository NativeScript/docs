---
title: ImageCache
titleTemplate: :title - API / NativeScript
description: Represents a class that stores handles image download requests and caches the already downloaded images.
contributors: false
---

Defined in: [ui/image-cache/index.d.ts:29](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/image-cache/index.d.ts#L29)

Represents a class that stores handles image download requests and caches the already downloaded images.

## Extends

- [`Observable`](Observable.md)

## Constructors

### Constructor

```ts
new ImageCache(): Cache;
```

#### Returns

`Cache`

#### Inherited from

[`Observable`](Observable.md).[`constructor`](Observable.md#constructor)

## Properties

### maxRequests

```ts
maxRequests: number;
```

Defined in: [ui/image-cache/index.d.ts:45](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/image-cache/index.d.ts#L45)

The maximum number of simultaneous download requests. Defaults to 5.

***

### placeholder

```ts
placeholder: ImageSource;
```

Defined in: [ui/image-cache/index.d.ts:41](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/image-cache/index.d.ts#L41)

The image to be used to notify for a pending download request - e.g. loading indicator.

***

### downloadedEvent

```ts
static downloadedEvent: string;
```

Defined in: [ui/image-cache/index.d.ts:33](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/image-cache/index.d.ts#L33)

String value used when hooking to downloaded event.

***

### downloadErrorEvent

```ts
static downloadErrorEvent: string;
```

Defined in: [ui/image-cache/index.d.ts:37](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/image-cache/index.d.ts#L37)

String value used when hooking to download error event.

***

### propertyChangeEvent

```ts
static propertyChangeEvent: string;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/observable/index.ts)

String value used when hooking to propertyChange event.

#### Ns Event

propertyChange

#### Inherited from

[`Observable`](Observable.md).[`propertyChangeEvent`](Observable.md#propertychangeevent)

## Methods

### \_createPropertyChangeData()

```ts
_createPropertyChangeData(
   propertyName: string, 
   value: any, 
   oldValue?: any): PropertyChangeData;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/observable/index.ts)

This method is intended to be overriden by inheritors to provide additional implementation.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `propertyName` | `string` |
| `value` | `any` |
| `oldValue?` | `any` |

#### Returns

[`PropertyChangeData`](../interfaces/PropertyChangeData.md)

#### Inherited from

[`Observable`](Observable.md).[`_createPropertyChangeData`](Observable.md#createpropertychangedata)

***

### \_emit()

```ts
_emit(eventName: string): void;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/observable/index.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` |

#### Returns

`void`

#### Inherited from

[`Observable`](Observable.md).[`_emit`](Observable.md#emit)

***

### addEventListener()

```ts
addEventListener(
   eventName: string, 
   callback: (data: EventData) => void, 
   thisArg?: any, 
   once?: boolean): void;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/observable/index.ts)

Adds a listener for the specified event name.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `string` | Name of the event to attach to. |
| `callback` | (`data`: [`EventData`](../interfaces/EventData.md)) => `void` | A function to be called when some of the specified event(s) is raised. |
| `thisArg?` | `any` | An optional parameter which when set will be used as "this" in callback method call. |
| `once?` | `boolean` | An optional parameter which when set will cause the event listener to fire once. |

#### Returns

`void`

#### Inherited from

[`Observable`](Observable.md).[`addEventListener`](Observable.md#addeventlistener)

***

### clear()

```ts
clear(): void;
```

Defined in: [ui/image-cache/index.d.ts:80](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/image-cache/index.d.ts#L80)

Removes all the previously cached images.

#### Returns

`void`

***

### disableDownload()

```ts
disableDownload(): void;
```

Defined in: [ui/image-cache/index.d.ts:54](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/image-cache/index.d.ts#L54)

Temporary disables download requests.

#### Returns

`void`

***

### enableDownload()

```ts
enableDownload(): void;
```

Defined in: [ui/image-cache/index.d.ts:50](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/image-cache/index.d.ts#L50)

Enables previously suspended download requests.

#### Returns

`void`

***

### enqueue()

```ts
enqueue(request: DownloadRequest): any;
```

Defined in: [ui/image-cache/index.d.ts:63](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/image-cache/index.d.ts#L63)

Adds a new download request at the end of the download queue. This will be the last download to start.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | [`DownloadRequest`](../interfaces/DownloadRequest.md) |

#### Returns

`any`

***

### get()

```ts
get(key: string): any;
```

Defined in: [ui/image-cache/index.d.ts:68](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/image-cache/index.d.ts#L68)

Gets the image for the specified key. May be undefined if the key is not present in the cache.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |

#### Returns

`any`

#### Overrides

[`Observable`](Observable.md).[`get`](Observable.md#get)

***

### hasListeners()

```ts
hasListeners(eventName: string): boolean;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/observable/index.ts)

Checks whether a listener is registered for the specified event name.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `string` | The name of the event to check for. |

#### Returns

`boolean`

#### Inherited from

[`Observable`](Observable.md).[`hasListeners`](Observable.md#haslisteners)

***

### notify()

```ts
notify<T>(data: T): void;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/observable/index.ts)

Notify this Observable instance with some data. This causes all event
handlers on the Observable instance to be called, as well as any 'global'
event handlers set on the instance's class.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `Optional`\<[`EventData`](../interfaces/EventData.md), `"object"`\> |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `T` | an object that satisfies the EventData interface, though with an optional 'object' property. If left undefined, the 'object' property will implicitly be set as this Observable instance. |

#### Returns

`void`

#### Inherited from

[`Observable`](Observable.md).[`notify`](Observable.md#notify)

***

### notifyPropertyChange()

```ts
notifyPropertyChange(
   name: string, 
   value: any, 
   oldValue?: any): void;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/observable/index.ts)

Notifies all the registered listeners for the property change event.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `value` | `any` |
| `oldValue?` | `any` |

#### Returns

`void`

#### Inherited from

[`Observable`](Observable.md).[`notifyPropertyChange`](Observable.md#notifypropertychange)

***

### off()

```ts
off(
   eventName: string, 
   callback?: (data: EventData) => void, 
   thisArg?: any): void;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/observable/index.ts)

Removes the listener(s) for the specified event name.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `string` | The name of the event. |
| `callback?` | (`data`: [`EventData`](../interfaces/EventData.md)) => `void` | An optional specific event listener to remove (if omitted, all event listeners by this name will be removed). |
| `thisArg?` | `any` | An optional parameter which, when set, will be used to refine search of the correct event listener to be removed. |

#### Returns

`void`

#### Inherited from

[`Observable`](Observable.md).[`off`](Observable.md#off)

***

### on()

#### Call Signature

```ts
on(
   eventName: string, 
   callback: (args: EventData) => void, 
   thisArg?: any): void;
```

Defined in: [ui/image-cache/index.d.ts:92](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/image-cache/index.d.ts#L92)

Adds a listener for the specified event name.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `string` | The name of the event. |
| `callback` | (`args`: [`EventData`](../interfaces/EventData.md)) => `void` | The event listener to add. Will be called when an event of the given name is raised. |
| `thisArg?` | `any` | An optional parameter which, when set, will be bound as the `this` context when the callback is called. Falsy values will be not be bound. |

##### Returns

`void`

##### Overrides

[`Observable`](Observable.md).[`on`](Observable.md#on)

#### Call Signature

```ts
on(
   event: "downloaded", 
   callback: (args: DownloadedData) => void, 
   thisArg?: any): void;
```

Defined in: [ui/image-cache/index.d.ts:97](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/image-cache/index.d.ts#L97)

Raised when the image has been downloaded.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"downloaded"` |
| `callback` | (`args`: [`DownloadedData`](../interfaces/DownloadedData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.on
```

#### Call Signature

```ts
on(
   event: "downloadError", 
   callback: (args: DownloadError) => void, 
   thisArg?: any): void;
```

Defined in: [ui/image-cache/index.d.ts:102](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/image-cache/index.d.ts#L102)

Raised if the image download errors.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"downloadError"` |
| `callback` | (`args`: [`DownloadError`](../interfaces/DownloadError.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
Observable.on
```

***

### once()

```ts
once(
   eventName: string, 
   callback: (data: EventData) => void, 
   thisArg?: any): void;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/observable/index.ts)

Adds a listener for the specified event name, which, once fired, will
remove itself.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `string` | The name of the event. |
| `callback` | (`data`: [`EventData`](../interfaces/EventData.md)) => `void` | The event listener to add. Will be called when an event of the given name is raised. |
| `thisArg?` | `any` | An optional parameter which, when set, will be bound as the `this` context when the callback is called. Falsy values will be not be bound. |

#### Returns

`void`

#### Inherited from

[`Observable`](Observable.md).[`once`](Observable.md#once)

***

### push()

```ts
push(request: DownloadRequest): any;
```

Defined in: [ui/image-cache/index.d.ts:59](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/image-cache/index.d.ts#L59)

Adds a new download request at the top of the download queue. This will be the next immediate download to start.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | [`DownloadRequest`](../interfaces/DownloadRequest.md) |

#### Returns

`any`

***

### remove()

```ts
remove(key: string): void;
```

Defined in: [ui/image-cache/index.d.ts:76](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/image-cache/index.d.ts#L76)

Removes the cache for the specified key.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |

#### Returns

`void`

***

### removeEventListener()

```ts
removeEventListener(
   eventName: string, 
   callback?: (data: EventData) => void, 
   thisArg?: any): void;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/observable/index.ts)

Removes listener(s) for the specified event name.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `string` | Name of the event to attach to. |
| `callback?` | (`data`: [`EventData`](../interfaces/EventData.md)) => `void` | An optional parameter pointing to a specific listener. If not defined, all listeners for the event names will be removed. |
| `thisArg?` | `any` | An optional parameter which when set will be used to refine search of the correct callback which will be removed as event listener. |

#### Returns

`void`

#### Inherited from

[`Observable`](Observable.md).[`removeEventListener`](Observable.md#removeeventlistener)

***

### set()

```ts
set(key: string, image: any): void;
```

Defined in: [ui/image-cache/index.d.ts:72](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/image-cache/index.d.ts#L72)

Sets the image for the specified key.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |
| `image` | `any` |

#### Returns

`void`

#### Overrides

[`Observable`](Observable.md).[`set`](Observable.md#set)

***

### setProperty()

```ts
setProperty(name: string, value: any): void;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/observable/index.ts)

Updates the specified property with the provided value and raises a property change event and a specific change event based on the property name.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `value` | `any` |

#### Returns

`void`

#### Inherited from

[`Observable`](Observable.md).[`setProperty`](Observable.md#setproperty)

***

### ~~addEventListener()~~

```ts
static addEventListener(
   eventName: string, 
   callback: (data: EventData) => void, 
   thisArg?: any, 
   once?: boolean): void;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/observable/index.ts)

Please avoid using the static event-handling APIs as they will be removed
in future.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` |
| `callback` | (`data`: [`EventData`](../interfaces/EventData.md)) => `void` |
| `thisArg?` | `any` |
| `once?` | `boolean` |

#### Returns

`void`

#### Deprecated

#### Inherited from

[`Observable`](Observable.md).[`addEventListener`](Observable.md#addeventlistener-1)

***

### ~~off()~~

```ts
static off(
   eventName: string, 
   callback?: (data: EventData) => void, 
   thisArg?: any): void;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/observable/index.ts)

Please avoid using the static event-handling APIs as they will be removed
in future.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` |
| `callback?` | (`data`: [`EventData`](../interfaces/EventData.md)) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Deprecated

#### Inherited from

[`Observable`](Observable.md).[`off`](Observable.md#off-1)

***

### ~~on()~~

```ts
static on(
   eventName: string, 
   callback: (data: EventData) => void, 
   thisArg?: any, 
   once?: boolean): void;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/observable/index.ts)

Please avoid using the static event-handling APIs as they will be removed
in future.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` |
| `callback` | (`data`: [`EventData`](../interfaces/EventData.md)) => `void` |
| `thisArg?` | `any` |
| `once?` | `boolean` |

#### Returns

`void`

#### Deprecated

#### Inherited from

[`Observable`](Observable.md).[`on`](Observable.md#on-1)

***

### ~~once()~~

```ts
static once(
   eventName: string, 
   callback: (data: EventData) => void, 
   thisArg?: any): void;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/observable/index.ts)

Please avoid using the static event-handling APIs as they will be removed
in future.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` |
| `callback` | (`data`: [`EventData`](../interfaces/EventData.md)) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Deprecated

#### Inherited from

[`Observable`](Observable.md).[`once`](Observable.md#once-1)

***

### ~~removeEventListener()~~

```ts
static removeEventListener(
   eventName: string, 
   callback?: (data: EventData) => void, 
   thisArg?: any): void;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/observable/index.ts)

Please avoid using the static event-handling APIs as they will be removed
in future.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` |
| `callback?` | (`data`: [`EventData`](../interfaces/EventData.md)) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Deprecated

#### Inherited from

[`Observable`](Observable.md).[`removeEventListener`](Observable.md#removeeventlistener-1)
