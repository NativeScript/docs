---
title: Data Binding in NativeScript
---

_Data Binding_ refers to a connection (_binding_) and data flow between _ViewModel_ (Model) and _User Interface_ (UI).

It gets activated through three steps:

1. Create a ViewModel(let's call it DataModel) class extending the `Observable` class
2. Make DataModel available to the UI by setting `page.bindingContext` = `new DataModel()`
3. Using the mustach syntax ({{ }} ), bind the UI components properties to the members of the `DataModel` instance.

When you look at a new project, you see an example of those steps applied.

There are various ways to manage data flow, often referred to as data bindings:

- **One-way (to UI) data binding** - This is the most common form of data binding. An example would be binding a string property in the Model to a Label component.

```xml
<Label text="{{ name }}" />
```

```ts
export class HelloWorldModel extends Observable {
        name = "John Doe"

        ...

}
```

- **One-way (to Model) data binding** - Binding which updates the model in relation to some action in the UI. The best example for this is a [tap](/guide/gestures#tap-gesture) event.

```xml
<Button text="Submit" tap="{{ onTap }}"/>
```

```ts
export class HelloWorldModel extends Observable {

        onTap(args: EventData){

        }

        ...

}
```

- **Two-way data binding** - The data flows from the Model to the UI and vice versa. A typical example is a `TextField` that reads its value from a Model, and also changes the Model based on user input.

```xml
<TextField text="{{ name }}"/>
```

```ts
export class HelloWorldModel extends Observable {
        name = "John Doe"

        ...

}
```

## Accessing parent bindingContext

A parent and a child UI components can have different binding contexts and the child component might need to bind its property to a source property in its parent's **bindingContext**.

<!-- TODO: fix links -->

Generally, the binding context is inheritable, but not when the components are created dynamically based on some data source. For example, [ListView](/ui/list-view) creates its child items based on an `itemТemplate`, which describes what the ListView component will look like. When this component is added to the visual tree, for binding context it gets an element from a `ListView` items array (with the corresponding index).

This process creates a new binding context chain for the child item and its inner UI components. So, the inner UI component cannot access the binding context of the `ListView`. In order to solve this problem, NativeScript binding infrastructure has two special keywords:

- `$parent` : denotes the binding context of the direct parent visual component
- `$parents` : can be used as an array (with a number or string index). This gives you the option to choose either N levels of UI nesting or get a parent UI component with a given type.

<!-- TODO: Add Preview -->

::: tip Note
If the value of the `items` property of the `ListView` is an array of plain elements(numbers,string, dates) as in the preceeding example, you use the `$value` variable to access the current item of the array.

If it is an array of objects,you use the current object property name as the variable name.
:::

## Using binding expressions

NativeScript supports the following polymorphic binding expressions:

### Property access

To access a value stored in an object property of the bindingContext, use the propert access expression:

```ts
...
user = {
 names:{
     first: "Sara"
 }
}
...
```

```xml

<Label text="{{  user.name.first  }}" textWrap="true" />

```

---

### array access

```xml

<Label text="{{  fruits[0]  }}" textWrap="true" />

```

---

### logical operators

You can use the not(`!`) operator to reverse the logical state of a binding context property.

```xml

<Label text="{{  !isUserLoggedIn  }}" textWrap="true" />

```

Supported operators: `&&`, `||` and `!`.

---

### unary operators

```xml

<Label text="{{  +age  }}" textWrap="true" />

```

```ts

...

age = "33"

```

Converts a property value to a `number`. To convert a property to a `number` and negate it, use the `-` operator.

---

### comparison operators

```xml

<Label text="{{  prop1 > prop2  }}" textWrap="true" />

```

Supported operators: `>`,`<`, `<=`, `>=`, `==`, `!=`, `===`, `!==`.

---

### ternary operator

```xml

<Label text="{{  prop1 ? prop2 : prop3  }}" textWrap="true" />

```

---

### grouping parenthesis

```xml

<Label text="{{  prop1*(prop2 + prop3)  }}" textWrap="true" />

```

---

### function calls

```xml

<Label text="{{  someMethod(p1,p2,...,pN)  }}" textWrap="true" />

```

---

### comparison operators

```xml

<Label text="{{  property1 > property2  }}" textWrap="true" />

```

Other supported operators are: `<`, `<=`, `>=`, `==`, `!=`, `===`, `!==`.

---

:::tip Note
Special characters need to be escaped as follows:

- double quotes(`"`) => `&quot;`
- single quote(`'`) => `&apos;`
- less than(`<`) => `&lt;`
- greater than(`>`) => `&gt;`
- ampersand(`&`) => `&amp;`

## Using data converters

Often data within the Model is stored in a way that is optimized for best performance regarding tasks such as search, replace etc. Unfortunately, the way computers store data differs significantly from human-readable formats. One fitting example is the Date object. In JavaScript, Date actually is a very big number that represents milliseconds from `01.01.1970` which does not speak much to any human. This is where data converters come into play. Data converters are essentially functions that format the data from the Model into a human-readable format for display in the UI.

 <!-- TODO: Add SB+Preview -->

```xml

 <StackLayout class="p-20 bg">

 <Label text="{{ date | dateConverter('dd-mm-yyyy') }}" textWrap="true" />
 <Label text="{{ name | toUpperCaseConverter }}" textWrap="true" />
 <Label text="{{ title | toTitle }}" textWrap="true" />

 </StackLayout>

```

```ts
export class HelloWorldModel extends Observable {

  name = "nandee"
  title = "hello world!"
  date = Date.now() // number
  dateConverter = this.formatDate()
  toUpperCaseConverter = this.toUpperCase()
  toTitle = this.convertToTitle()

  ...

formatDate() {
    return {
      toView(value: number, format: string) {

        const date = new Date(value)
        const day = date.getDate().toString().padStart(2, "0")
        const month = (date.getMonth() + 1).toString().padStart(2, "0") // months are zero based in JS.
        const year = date.getFullYear().toString()

        return format.replace("dd", day)
          .replace("mm", month)
          .replace("yyyy", year)
      }
    }
  }

  toUpperCase(){
    return {
      toView(value:string){
        return value.toUpperCase()
      }
    }
  }

  convertToTitle(){
    return {
      toView(str:string){
        return str.replace(/(^|\s)\S/g, function(t) { return t.toUpperCase() });

      }
    }
  }
}
```

## Stop binding

Generally there is no need to stop binding explicitly since the Observable object uses weak references, which prevents any memory leaks. However, if you need to data unbind a view, call the **unbind()** method with the target property name as the argument.

```ts
targetTextField.unbind('text')
```
