---
title: ObservableArray
titleTemplate: :title - API / NativeScript
description: Advanced array like class used when you want to be notified when a change occurs.
contributors: false
---

Defined in: data/observable-array/index.d.ts:33

Advanced array like class used when you want to be notified when a change occurs.

## Extends

- [`Observable`](Observable.md)

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Constructors

### Constructor

```ts
new ObservableArray<T>(arrayLength?: number): ObservableArray<T>;
```

Defined in: data/observable-array/index.d.ts:44

Create ObservableArray\<T\> with specified length.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `arrayLength?` | `number` |

#### Returns

`ObservableArray`\<`T`\>

#### Overrides

[`Observable`](Observable.md).[`constructor`](Observable.md#constructor)

### Constructor

```ts
new ObservableArray<T>(items: T[]): ObservableArray<T>;
```

Defined in: data/observable-array/index.d.ts:48

Create ObservableArray\<T\> from source Array\<T\>.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `items` | `T`[] |

#### Returns

`ObservableArray`\<`T`\>

#### Overrides

```ts
Observable.constructor
```

### Constructor

```ts
new ObservableArray<T>(...items: T[]): ObservableArray<T>;
```

Defined in: data/observable-array/index.d.ts:52

Create ObservableArray\<T\> from T items.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`items` | `T`[] |

#### Returns

`ObservableArray`\<`T`\>

#### Overrides

```ts
Observable.constructor
```

## Properties

### changeEvent

```ts
static changeEvent: string;
```

Defined in: data/observable-array/index.d.ts:37

String value used when hooking to change event.

***

### propertyChangeEvent

```ts
static propertyChangeEvent: string;
```

Defined in: data/observable/index.d.ts:75

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

Defined in: data/observable-array/index.d.ts:67

Gets or sets the length of the array. This is a number one higher than the highest element defined in an array.

##### Returns

`number`

#### Set Signature

```ts
set length(value: number): void;
```

Defined in: data/observable-array/index.d.ts:68

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

Defined in: data/observable/index.d.ts:198

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

Defined in: data/observable/index.d.ts:199

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` |

#### Returns

`void`

#### Inherited from

[`Observable`](Observable.md).[`_emit`](Observable.md#emit)

***

### \_notifyLengthChange()

```ts
_notifyLengthChange(): void;
```

Defined in: data/observable-array/index.d.ts:94

#### Returns

`void`

***

### \[iterator\]()

```ts
iterator: Generator<T, void, unknown>;
```

Defined in: data/observable-array/index.d.ts:53

#### Returns

`Generator`\<`T`, `void`, `unknown`\>

***

### addEventListener()

```ts
addEventListener(
   eventName: string, 
   callback: (data: EventData) => void, 
   thisArg?: any, 
   once?: boolean): void;
```

Defined in: data/observable/index.d.ts:134

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

### concat()

```ts
concat(...args: any[]): ObservableArray<T>;
```

Defined in: data/observable-array/index.d.ts:79

Combines two or more arrays.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | `any`[] |

#### Returns

`ObservableArray`\<`T`\>

***

### every()

```ts
every(callbackfn: (value: T, index: number, array: ObservableArray<T>) => boolean, thisArg?: any): boolean;
```

Defined in: data/observable-array/index.d.ts:164

Determines whether all the members of an array satisfy the specified test.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callbackfn` | (`value`: `T`, `index`: `number`, `array`: `ObservableArray`\<`T`\>) => `boolean` | A function that accepts up to three arguments. The every method calls the callbackfn function for each element in array1 until the callbackfn returns false, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`boolean`

***

### filter()

```ts
filter(callbackfn: (value: T, index: number, array: ObservableArray<T>) => boolean, thisArg?: any): ObservableArray<T>;
```

Defined in: data/observable-array/index.d.ts:188

Returns the elements of an array that meet the condition specified in a callback function.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callbackfn` | (`value`: `T`, `index`: `number`, `array`: `ObservableArray`\<`T`\>) => `boolean` | A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`ObservableArray`\<`T`\>

***

### find()

```ts
find(callbackfn: (value: T, index: number, array: ObservableArray<T>) => any, thisArg?: any): T;
```

Defined in: data/observable-array/index.d.ts:134

Returns the first element in the array where predicate is true, and null otherwise.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callbackfn` | (`value`: `T`, `index`: `number`, `array`: `ObservableArray`\<`T`\>) => `any` | - |
| `thisArg?` | `any` | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

#### Returns

`T`

***

### findIndex()

```ts
findIndex(callbackfn: (value: T, index: number, array: ObservableArray<T>) => any, thisArg?: any): number;
```

Defined in: data/observable-array/index.d.ts:140

Returns the index of the first element in the array where predicate is true, and -1 otherwise.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callbackfn` | (`value`: `T`, `index`: `number`, `array`: `ObservableArray`\<`T`\>) => `any` | - |
| `thisArg?` | `any` | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

#### Returns

`number`

***

### forEach()

```ts
forEach(callbackfn: (value: T, index: number, array: ObservableArray<T>) => void, thisArg?: any): void;
```

Defined in: data/observable-array/index.d.ts:176

Performs the specified action for each element in an array.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callbackfn` | (`value`: `T`, `index`: `number`, `array`: `ObservableArray`\<`T`\>) => `void` | A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`void`

***

### get()

```ts
get(name: string): any;
```

Defined in: data/observable/index.d.ts:85

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
getItem(pos: number): T;
```

Defined in: data/observable-array/index.d.ts:58

Returns item at specified position.
Supports relative indexing from the end of the array when passed a negative index.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `pos` | `number` |

#### Returns

`T`

***

### hasListeners()

```ts
hasListeners(eventName: string): boolean;
```

Defined in: data/observable/index.d.ts:194

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

### includes()

```ts
includes(searchElement: T, fromIndex?: number): boolean;
```

Defined in: data/observable-array/index.d.ts:146

Determines whether the specified element exists inside the array.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `searchElement` | `T` | The value to locate in the array. |
| `fromIndex?` | `number` | The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0. |

#### Returns

`boolean`

***

### indexOf()

```ts
indexOf(searchElement: T, fromIndex?: number): number;
```

Defined in: data/observable-array/index.d.ts:152

Returns the index of the first occurrence of a value in an array.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `searchElement` | `T` | The value to locate in the array. |
| `fromIndex?` | `number` | The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0. |

#### Returns

`number`

***

### join()

```ts
join(separator?: string): string;
```

Defined in: data/observable-array/index.d.ts:84

Adds all the elements of an array separated by the specified separator string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `separator?` | `string` | A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma. |

#### Returns

`string`

***

### lastIndexOf()

```ts
lastIndexOf(searchElement: T, fromIndex?: number): number;
```

Defined in: data/observable-array/index.d.ts:158

Returns the index of the last occurrence of a specified value in an array.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `searchElement` | `T` | The value to locate in the array. |
| `fromIndex?` | `number` | The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array. |

#### Returns

`number`

***

### map()

```ts
map<U>(callbackfn: (value: T, index: number, array: ObservableArray<T>) => U, thisArg?: any): ObservableArray<U>;
```

Defined in: data/observable-array/index.d.ts:182

Calls a defined callback function on each element of an array, and returns an array that contains the results.

#### Type Parameters

| Type Parameter |
| ------ |
| `U` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callbackfn` | (`value`: `T`, `index`: `number`, `array`: `ObservableArray`\<`T`\>) => `U` | A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`ObservableArray`\<`U`\>

***

### notify()

```ts
notify<T>(data: T): void;
```

Defined in: data/observable/index.d.ts:183

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

Defined in: data/observable/index.d.ts:189

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

Defined in: data/observable/index.d.ts:126

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

Defined in: data/observable-array/index.d.ts:213

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
   event: "change", 
   callback: (args: ChangedData<T>) => void, 
   thisArg?: any): void;
```

Defined in: data/observable-array/index.d.ts:214

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

Defined in: data/observable/index.d.ts:116

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

### pop()

```ts
pop(): T;
```

Defined in: data/observable-array/index.d.ts:88

Removes the last element from an array and returns it.

#### Returns

`T`

***

### push()

```ts
push(...args: T[]): number;
```

Defined in: data/observable-array/index.d.ts:93

Appends new elements to an array, and returns the new length of the array.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | `T`[] |

#### Returns

`number`

***

### reduce()

```ts
reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: ObservableArray<T>) => T, initialValue?: T): T;
```

Defined in: data/observable-array/index.d.ts:194

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callbackfn` | (`previousValue`: `T`, `currentValue`: `T`, `currentIndex`: `number`, `array`: `ObservableArray`\<`T`\>) => `T` | A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |
| `initialValue?` | `T` | If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns

`T`

***

### reduceRight()

```ts
reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: ObservableArray<T>) => T, initialValue?: T): T;
```

Defined in: data/observable-array/index.d.ts:200

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callbackfn` | (`previousValue`: `T`, `currentValue`: `T`, `currentIndex`: `number`, `array`: `ObservableArray`\<`T`\>) => `T` | A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |
| `initialValue?` | `T` | If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns

`T`

***

### removeEventListener()

```ts
removeEventListener(
   eventName: string, 
   callback?: (data: EventData) => void, 
   thisArg?: any): void;
```

Defined in: data/observable/index.d.ts:141

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

### reverse()

```ts
reverse(): ObservableArray<T>;
```

Defined in: data/observable-array/index.d.ts:99

Reverses the elements in an Array.
This method uses 'in place' algorithm.

#### Returns

`ObservableArray`\<`T`\>

***

### set()

```ts
set(name: string, value: any): void;
```

Defined in: data/observable/index.d.ts:89

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
setItem(pos: number, value: T): void;
```

Defined in: data/observable-array/index.d.ts:63

Sets item at specified position.
Supports relative indexing from the end of the array when passed a negative index.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `pos` | `number` |
| `value` | `T` |

#### Returns

`void`

***

### setProperty()

```ts
setProperty(name: string, value: any): void;
```

Defined in: data/observable/index.d.ts:93

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

### shift()

```ts
shift(): T;
```

Defined in: data/observable-array/index.d.ts:103

Removes the first element from an array and returns it.

#### Returns

`T`

***

### slice()

```ts
slice(start?: number, end?: number): ObservableArray<T>;
```

Defined in: data/observable-array/index.d.ts:109

Returns a section of an array.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `start?` | `number` | The beginning of the specified portion of the array. |
| `end?` | `number` | The end of the specified portion of the array. |

#### Returns

`ObservableArray`\<`T`\>

***

### some()

```ts
some(callbackfn: (value: T, index: number, array: ObservableArray<T>) => boolean, thisArg?: any): boolean;
```

Defined in: data/observable-array/index.d.ts:170

Determines whether the specified callback function returns true for any element of an array.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callbackfn` | (`value`: `T`, `index`: `number`, `array`: `ObservableArray`\<`T`\>) => `boolean` | A function that accepts up to three arguments. The some method calls the callbackfn function for each element in array1 until the callbackfn returns true, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`boolean`

***

### sort()

```ts
sort(compareFn?: (a: T, b: T) => number): ObservableArray<T>;
```

Defined in: data/observable-array/index.d.ts:115

Sorts an array.
This method uses 'in place' algorithm.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `compareFn?` | (`a`: `T`, `b`: `T`) => `number` | The name of the function used to determine the order of the elements. If omitted, the elements are sorted in ascending, ASCII character order. |

#### Returns

`ObservableArray`\<`T`\>

***

### splice()

```ts
splice(
   start: number, 
   deleteCount?: number, ...
items: T[]): ObservableArray<T>;
```

Defined in: data/observable-array/index.d.ts:123

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
This method uses 'in place' algorithm.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `start` | `number` | The zero-based location in the array from which to start removing elements. |
| `deleteCount?` | `number` | The number of elements to remove. |
| ...`items?` | `T`[] | Elements to insert into the array in place of the deleted elements. |

#### Returns

`ObservableArray`\<`T`\>

***

### toJSON()

```ts
toJSON(): any[];
```

Defined in: data/observable-array/index.d.ts:69

#### Returns

`any`[]

***

### toLocaleString()

```ts
toLocaleString(): string;
```

Defined in: data/observable-array/index.d.ts:74

Returns a date converted to a string using the current locale.

#### Returns

`string`

***

### toString()

```ts
toString(): string;
```

Defined in: data/observable-array/index.d.ts:73

Returns a string representation of an array.

#### Returns

`string`

***

### unshift()

```ts
unshift(...args: T[]): number;
```

Defined in: data/observable-array/index.d.ts:128

Inserts new elements at the start of an array.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | `T`[] |

#### Returns

`number`

***

### ~~addEventListener()~~

```ts
static addEventListener(
   eventName: string, 
   callback: (data: EventData) => void, 
   thisArg?: any, 
   once?: boolean): void;
```

Defined in: data/observable/index.d.ts:172

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

Defined in: data/observable/index.d.ts:159

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

Defined in: data/observable/index.d.ts:147

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

Defined in: data/observable/index.d.ts:153

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

Defined in: data/observable/index.d.ts:166

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
