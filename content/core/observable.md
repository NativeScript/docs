---
title: Observable
---

Observable is a fundamental building block throughout @nativescript/core.

:::warning Note
Not to be confused with [rxjs Observable](https://rxjs.dev/guide/observable), the `Observable` within NativeScript predates rxjs itself and the name has always stuck around. If you'd like us to rename this in the future, feel free to chime in via [RFC Discussions](https://github.com/NativeScript/rfcs/discussions).
:::

`Observable` plays a vital role in enabling data binding in NativeScript. It serves as a key component for connecting the user interface (UI) with the underlying data in a ViewModel. By setting an instance of Observable as the bindingContext property of a Page or a layout container, you can establish a seamless connection that drives data binding within NativeScript.

In simpler terms, an Observable allows you to easily synchronize and update the UI elements of your app with changes in the underlying data. It acts as a bridge that notifies the UI whenever there are modifications to the data, ensuring that the UI stays in sync with the latest values. This makes it convenient to build dynamic and reactive interfaces, as changes in the data will automatically trigger corresponding updates in the UI.

By utilizing the power of Observables and data binding, you can create interactive and responsive NativeScript applications with minimal effort.

## How to use Observable

The sections below show you different ways Observable can be used.

### Creating an Observable by subclassing

Create a class extending Observable as shown below:

<!-- tabs: main-page-model -->

```ts
export class HelloWorldModel extends Observable {
  name = 'Suzan Tomas'
  fruits = ['Chirimoya']

  constructor() {
    super()

    this.on('propertyChange', (args: PropertyChangeData) => {
      if (args.propertyName == 'name') {
        this.fruits.unshift('Kaki')

        this.set('fruits', this.fruits)
      }
    })
  }

  onTap(args: EventDaya) {
    //handle the tap event
  }
}
```

You can also use the [fromObject](#fromobject) or [fromObjectRecursive](#fromobjectrecursive) function to create an Observable from data.

### Emitting an event

To emit a custom event, call the [notify](#notify) method on the Observable instance:

```ts
observable.notify({
  eventName: 'custom-event',
})
```

### Emitting an event for a property change

To emit an event for a property change, use the [notifyPropertyChange](#notifypropertychange) method:

```ts
this.fruits.unshift('Kaki')

this.notifyPropertyChange('fruits', this.fruits)
```

### Avoiding Event Handler Memory Leak

To ensure that your app doesn't have memory leak caused by handlers that are no longer needed, use the [addWeakEventListener](#addweakeventlistener) function.

<!-- TODO: Add a working example -->

## Observable API

### constructor

```ts
const observable = new Observable()
```

---

### propertyChangeEvent

```ts
observable.on(Observable.propertyChangeEvent, (args: PropertyChangeData) => {})
```

String value used when hooking to `propertyChange` event.

---

### addEventListener()

```ts
Observable.addEventListener(eventNames, callback: (data: EventData) => void, thisArg)

//or
observable.addEventListener(eventNames, callback: (data: EventData) => void, thisArg)
```

Add a listener for the specified event(s).

- `eventNames` is a comma delimited string containing the names of the events to be listened to.
- `callback` is the function that gets called when any of the registered event occurs.
- _Optional_: `thisArg` is a parameter which will be used as `this` context for callback execution

---

### on()

```ts
Observable.on(eventNames, callback: (data: EventData) => void, thisArg)

//or
observable.on(eventNames, callback: (data: EventData) => void, thisArg)
```

A shortcut alias to [addEventListener](#addeventlistener).

---

### once()

```ts
Observable.once(eventName, callback: (data: EventData) => void, thisArg)

//or
observable.once(eventName, callback: (data: EventData) => void, thisArg)
```

Adds a one-time listener for the specified event.

- `eventName` is the name of the event to be listened to.
- `callback` is the function that gets called when the event occurs.
- _Optional_: `thisArg` is a parameter which will be used as `this` context for callback execution.

---

### addWeakEventListener()

```ts
observable.addWeakEventListener(source, eventName, callback, target)
```

Attaches a Weak Event Listener.

- `source`: Observable class which emits the event.
- `eventName`: The event name the specified listener listens to.
- `callback`: The function which should be called when event occurs.
- `target`: Subscriber (target) of the event listener. It will be used as a thisArg in the handler function.

### removeEventListener()

```ts
observable.removeEventListener(eventNames, callback, target)
```

Removes listener(s) for the specified event name(s).

- `eventNames`: Comma delimited string containing the names of the events the specified listener listens to.
- `callback`: A specific listener to be removed. If not defined, all listeners for the event names will be removed.
- `target`: Subscriber (target) of the event listener. It will be used as a thisArg in the handler function.

---

### off()

```ts
Observable.off(eventNames, callback, thisArg)
//or
observable.off(eventName, callback, thisArg)
```

A shortcut alias to [removeEventListener](#removeeventlistener).

---

### set()

```ts
observable.set(propertyName, value)
```

Updates the specified property with the provided value.

---

### setProperty()

```ts
observable.setProperty(propertyName, value)
```

Updates the specified property with the provided value and raises a [propertyChangeEvent](#propertychangeevent)

---

### get()

```ts
observable.get(propertyName)
```

Updates the specified property with the provided value.

---

### notify()

```ts
observable.notify({
  eventName: 'some-event-name',
  object,
})
```

Allows you to manually emit an event(custom or NativeScript provided)

- `eventName` is the name of the event to be emitted.
- _Optional_: `object` is an Observable instance that has raised the event.

---

### notifyPropertyChange()

```ts
observable.notifyPropertyChange(propertyName, value, oldValue)
```

Notifies all the registered listeners for the propertyChange event.

- `propertyName` is the property whose value has changed.
- `value` the new value of the property.
- _Optional_: `oldValue` the previous value of the property.

---

### hasListeners()

```ts
const hasListeners: boolean = observable.hasListeners(eventName)
```

Checks whether a listener is registered for the specified event name.

---

### fromObject()

```ts
import { fromObject } from '@nativescript/core'

const observable: Observable = fromObject(obj)
```

Creates an Observable instance and sets its properties to the properties of the specified object.

---

### fromObjectRecursive()

```ts
import { fromObjectRecursive } from '@nativescript/core'

const observable: Observable = fromObjectRecursive(obj)
```

Creates an Observable instance and sets its properties to the properties of the specified object. For each nested object (except for arrays and functions) in the supplied object, it creates an Observable instance.
