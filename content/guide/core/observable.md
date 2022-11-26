---
title: Observable
---

Observable is used when you want to be notified when a change occurs. Its instance is set to the `bindingContext` of a `Page` or a layout container to drive [data binding]() in NativeScript. 

## Using Observable

### Creating an Observable instance by subclassing

To use it for data binding, create a class extending it as shown below:

<!-- ```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd" navigatingTo="navigatingTo">
    <ActionBar title="My app"/>

    <StackLayout>
        <Button text="Tap" tap="{{ onTap }}"/>
        <Label text="{{ name }}" />
        <Label text="{{ 'Latest fruit: '+ fruits[0] }}" />
    </StackLayout>
</Page>

```
```ts
import { EventData, Page } from '@nativescript/core'
import { HelloWorldModel } from './main-view-model'

export function navigatingTo(args: EventData) {
  const page = <Page>args.object
  page.bindingContext = new HelloWorldModel()
}

``` -->
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

        this.notifyPropertyChange("fruits", this.fruits)
      }
    })
      
    }

    onTap(args: EventDaya){
        //handle the tap event
    }
}
```

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

### notifyPropertyChange()

```ts
observable.notifyPropertyChange(propertyName, value, oldValue)
```

Notifies all the registered listeners for the propertyChangeEvent.
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