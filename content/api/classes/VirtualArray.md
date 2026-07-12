---
title: VirtualArray
titleTemplate: :title - API / NativeScript
description: Advanced array like class that helps loading items on demand.
contributors: false
---

Defined in: [data/virtual-array/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/virtual-array/index.ts)

Advanced array like class that helps loading items on demand.

## Extends

- [`Observable`](Observable.md)

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Constructors

### Constructor

```ts
new VirtualArray<T>(length?: number): VirtualArray<T>;
```

Defined in: [data/virtual-array/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/virtual-array/index.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `length?` | `number` |

#### Returns

`VirtualArray`\<`T`\>

#### Overrides

[`Observable`](Observable.md).[`constructor`](Observable.md#constructor)

## Properties

### changeEvent

```ts
static changeEvent: string;
```

Defined in: [data/virtual-array/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/virtual-array/index.ts)

String value used when hooking to change event.

***

### itemsLoadingEvent

```ts
static itemsLoadingEvent: string;
```

Defined in: [data/virtual-array/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/virtual-array/index.ts)

String value used when hooking to itemsLoading event.

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

## Accessors

### length

#### Get Signature

```ts
get length(): number;
```

Defined in: [data/virtual-array/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/virtual-array/index.ts)

Gets or sets length for the virtual array.

##### Returns

`number`

#### Set Signature

```ts
set length(value: number): void;
```

Defined in: [data/virtual-array/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/virtual-array/index.ts)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`void`

***

### loadSize

#### Get Signature

```ts
get loadSize(): number;
```

Defined in: [data/virtual-array/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/virtual-array/index.ts)

##### Returns

`number`

#### Set Signature

```ts
set loadSize(value: number): void;
```

Defined in: [data/virtual-array/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/virtual-array/index.ts)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`void`

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

### get()

```ts
get(name: string): any;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/observable/index.ts)

Gets the value of the specified property.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

`any`

#### Inherited from

[`Observable`](Observable.md).[`get`](Observable.md#get)

***

### getItem()

```ts
getItem(index: number): T;
```

Defined in: [data/virtual-array/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/virtual-array/index.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |

#### Returns

`T`

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

### load()

```ts
load(index: number, items: T[]): void;
```

Defined in: [data/virtual-array/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/virtual-array/index.ts)

Loads items from an array starting at index.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |
| `items` | `T`[] |

#### Returns

`void`

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
   callback: (data: EventData) => void, 
   thisArg?: any): void;
```

Defined in: [data/virtual-array/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/virtual-array/index.ts)

Adds a listener for the specified event name.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `string` | The name of the event. |
| `callback` | (`data`: [`EventData`](../interfaces/EventData.md)) => `void` | The event listener to add. Will be called when an event of the given name is raised. |
| `thisArg?` | `any` | An optional parameter which, when set, will be bound as the `this` context when the callback is called. Falsy values will be not be bound. |

##### Returns

`void`

##### Inherited from

[`Observable`](Observable.md).[`on`](Observable.md#on)

#### Call Signature

```ts
on(
   event: "itemsLoading", 
   callback: (args: ItemsLoading) => void, 
   thisArg?: any): void;
```

Defined in: [data/virtual-array/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/virtual-array/index.ts)

Raised when still not loaded items are requested.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"itemsLoading"` |
| `callback` | (`args`: [`ItemsLoading`](../interfaces/ItemsLoading.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Inherited from

```ts
Observable.on
```

#### Call Signature

```ts
on(
   event: "change", 
   callback: (args: ChangedData<T>) => void, 
   thisArg?: any): void;
```

Defined in: [data/virtual-array/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/virtual-array/index.ts)

Raised when a change occurs.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"change"` |
| `callback` | (`args`: [`ChangedData`](../interfaces/ChangedData.md)\<`T`\>) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Inherited from

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
set(name: string, value: any): void;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/observable/index.ts)

Updates the specified property with the provided value.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `value` | `any` |

#### Returns

`void`

#### Inherited from

[`Observable`](Observable.md).[`set`](Observable.md#set)

***

### setItem()

```ts
setItem(index: number, value: T): void;
```

Defined in: [data/virtual-array/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/virtual-array/index.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |
| `value` | `T` |

#### Returns

`void`

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
