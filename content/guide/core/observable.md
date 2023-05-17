---
title: Observable
---

The Observable class is what drives data binding in NativeScript. To bind the UI to the ViewModel, an instance of Observable is set to the `bindingContext` property of a `Page` or a layout container to drive [data binding]() in NativeScript. 

## How to use Observable

The sections below show you the different ways you can use the Observable class.

### Creating an Observable instance by subclassing

Create a class extending it as shown below:

<!-- tabs: main-page-model -->
```ts
export class HelloWorldModel extends Observable {

    name = "Suzan Tomas";
    fruits = ["Chirimoya"];

    constructor() {
    super()

    this.on("propertyChange", (args: PropertyChangeData) => {

      if (args.propertyName == "name") {
        this.fruits.unshift("Kaki")

        this.set("fruits", this.fruits)
      }
    })
      
    }

    onTap(args: EventDaya){
        //handle the tap event
    }
}
```

You can also use the [fromObject](#fromobject) or [fromObjectRecursive](#fromobjectrecursive) function to create an Observable instance.


### Emitting an event

To emit a custom event, call the [notify()](#notify) method on the Observable instance:

```ts
observable.notify({
  eventName: "custom-event"
})
```

### Emitting an event for a property change

To emit an event for a property change, use the [notifyPropertyChange()](#notifypropertychange) method:

```ts
this.fruits.unshift("Kaki")

this.notifyPropertyChange("fruits", this.fruits)
```

### Avoiding Event Handler Memory Leak

To ensure that your app doesn't have memory leak caused by handlers that are no longer needed, use the [addWeakEventListener()](#addweakeventlistener) function:

<!-- TODO: Add a working example -->

## Observable API

### constructor

```ts
const observable = new Observable()
```

---

### propertyChangeEvent
```ts
observable.on(Observable.propertyChangeEvent,(args:PropertyChangeData)=>{

})
```

String value used when hooking to `propertyChange` event.

---
### addEventListener()

```ts
Observable.addEventListener(eventNames, callback: (data: EventData) => void, thisArg)

//or
observable.addEventListener(eventNames, callback: (data: EventData) => void, thisArg)
```
It is a method used to add a listener for the specified event(s).

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
This is a shortcut alias to the [addEventListener](#addeventlistener) method.

---

### once()
```ts
Observable.once(eventName, callback: (data: EventData) => void, thisArg)

//or
observable.once(eventName, callback: (data: EventData) => void, thisArg)
```

Adds one-time listener function for the specified event.
- `eventName` is the name of the event to be listened to.
- `callback` is the function that gets called when the event occurs.
- _Optional_: `thisArg` is a parameter which will be used as `this` context for callback execution.

---
### addWeakEventListener()
### removeEventListener()

```ts
Observable.removeEventListener(eventNames, callback, thisArg)

//or 
observable.removeEventListener(eventNames, callback, thisArg)
```

Removes listener(s) for the specified event name(s).
- `eventNames` is a comma delimited string containing the names of the events the specified listener listens to.
- _Optional_: The `callback` parameter points to a specific listener to be removed. If not defined, all listeners for the event names will be removed.
<!-- Is the following definition correct -->
- _Optional_: `thisArg` is a parameter used as `this` context in which the listener to be removed will be searched. 

---
### off()

```ts
Observable.off(eventNames, callback, thisArg)
//or
observable.off(eventName, callback, thisArg)
```
This method is a shortcut alias to [removeEventListener()](#removeeventlistener).

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
  eventName: "some-event-name",
  object
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
import { fromObject } from "@nativescript/core"

const observable: Observable = fromObject(obj)
```

Creates an Observable instance and sets its properties to the properties of the specified object.

---

### fromObjectRecursive()
```ts
import { fromObjectRecursive } from "@nativescript/core"

const observable: Observable = fromObjectRecursive(obj)
```

Creates an Observable instance and sets its properties to the properties of the specified object. For each nested object (except for arrays and functions) in the supplied object, it creates an Observable instance.
