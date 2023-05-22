---
title: Property
---

The property system in NativeScript is a way to expose a native property when you are exposing a native UI component.

NativeScript provides a basic property system via the `Property` class, which is a simple wrapper around the [Object.defineProperty](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) with some additional callbacks like `valueChange`, `valueConverter` and `equalityComparer`.

## Using Property

### Adding a new property to a View instance
Add new properties by creating a new `Property` with desired [options](#propertyoptions-interface).

```ts
class MyButtonBase extends Button{}
export const textProperty = new Property<MyButtonBase, string>({
    name: "text",
    defaultValue: "",
    affectsLayout: true
})
```
Then register the property with the desired class:

```ts
textProperty.register(MyButtonBase);
```
To apply the JS value to the exposed native view, call the `setNative` method on the property instance.

```ts
[textProperty.setNative](value: string) {
    this.nativeView.text = value
}
```
For a complete real world example about exposing a native UI Component to NativeScript developers, and how the Property system is used, read the [How to create a NativeScript plugin that uses native iOS & Android views (Part 1) - Label Marquee!](https://blog.nativescript.org/create-a-custom-view-plugin-marquee-label/) article.
### Adding a new CSS property
To add a new CSS property, use the [CssProperty]() class. It extends the [Property]() class to accept the extra `cssName` option. CSS properties are registered with the [Style](https://docs.nativescript.org/api-reference/classes/style) class.

```ts
import { CssProperty, Style } from "@nativescript-core"

export const myOpacityProperty = new CssProperty<Style, number>({
    name: "myOpacity",
    cssName: "my-opacity",
    defaultValue: 1,
    valueConverter: (v) => {
        const x = parseFloat(v);
        if (x < 0 || x > 1) {
            throw new Error(`opacity accepts values in the range [0, 1]. Value: ${v}`);
        }

        return x;
    }
});
myOpacityProperty.register(Style);
```

Now any instance of the [Style](https://docs.nativescript.org/api-reference/classes/style) class will have `myOpacity` property and developers can set it in CSS as follows:

```css
.some-class {
    my-opacity: 0.5
}
```

#### Inheritable property
To create a CSS property that can be applied to a view and is inheritable by the children of that view, instanciate the [InheritedCssProperty](https://docs.nativescript.org/api-reference/classes/inheritedcssproperty) class passing it an [PropertyOptions](#property-options-interface) object. Then use the `setInheritedValue: (value: U)` method to set the inherited value.
The examples of inherited properties are the`FontSize`, `FontWeight`, `Color`, etc.

```ts
import { Color, InheritedCssProperty, Style } from "@nativescript-core"

export const selectedBackgroundColorProperty = new InheritedCssProperty<Style, Color>({
    name: "selectedBackgroundColor",
    cssName: "selected-background-color",
    equalityComparer: Color.equals,
    valueConverter: (v) => new Color(v)
});
selectedBackgroundColorProperty.register(Style);
```
#### Shorthand property
To create a CSS property that can be applied using the shorthand syntax rules, use the [ShorthandProperty](https://docs.nativescript.org/api-reference/classes/shorthandproperty) class, passing it the [ShorthandPropertyOptions](#shorthandpropertyoptions-interface) object. For example, instead of setting margin using seperate rules for each side,
```css
.title {
    margin-top:  0;
    margin-right: 10;
    margin-bottom: 0;
    margin-left: 10;
}
```
you can use one rule for all the sides.
```css
.title { 
    margin: 0 10 0 10
}
```
To create a shorthand property, use the CssPropery class to define all the properties to be shortened. Then return the shorthand with the `getter()` method of the ShorthandProperty class.
<!-- TODO: Add an example -->
```ts
import { ShorthandProperty, Style } from "@nativescript-core"
```
### Creating a coercible property
<!-- TODO: Add a proper explanation about when to create this property -->
To create a coercible property use the [CoercibleProperty](https://docs.nativescript.org/api-reference/classes/coercibleproperty) class passing it a [CoerciblePropertyOptions](#co) object.

```ts
export const selectedIndexProperty = new CoercibleProperty<SegmentedBar, number>({
  name: "selectedIndex", defaultValue: -1,
  valueChanged: (target, oldValue, newValue) => {
      target.notify(<SelectedIndexChangedEventData>{ eventName: SegmentedBar.selectedIndexChangedEvent, object: target, oldIndex: oldValue, newIndex: newValue });
  },

  // in this case the coerce value will change depending on whether the actual number of items
  // is more or less than the value we want to apply for selectedIndex
  coerceValue: (target, value) => {
      let items = target.items;
      if (items) {
          let max = items.length - 1;
          if (value < 0) {
              value = 0;
          }
          if (value > max) {
              value = max;
          }
      } else {
          value = -1;
      }

      return value;
  },

  valueConverter: (v) => parseInt(v)
});
selectedIndexProperty.register(SegmentedBar);
```
Then when setting the property value, you call the `coerce()` method:
```ts
[itemsProperty.setNative](value: SegmentedBarItem[]) {
 ...
    selectedIndexProperty.coerce(this);
}
```
## Property System Reference
### Property class
The Property class has the following members.
#### constructor
```ts
property = new Property<MyClass, U>(propertyOptions)
```
### enumerable
```ts
isEnumerable: boolean = property.enumerable
```
---

### configurable
```ts
isConfigurable: boolean = property.configurable
```
---
### writable
```ts
isWritable: boolean = property.writable
```
---

#### name
```ts
propertyName: string = property.name
```
---
#### getDefault
```ts
[property.getDefault]()
```
#### setNative
```ts
[property.setNative](value){

}
```

#### defaultValue
```ts
defaultValue: U = property.defaultValue
```
---
#### nativeValueChange
```ts
property.nativeValueChange(owner: T, value: U)
```
---
#### isStyleProperty
```ts
isStyleProperty: boolean = property.isStyleProperty
```
---
### get()
```ts
propertyValue: U = property.get()
```
---
### set()
```ts
property.set(value: U)
```
---
### register()
```ts
property.register(SomeClass)
```
---
### isSet()
```ts
isPropertySet: boolean = property.isSet(instance: T)
```
---
### overrideHandlers()

```ts
property.overrideHandlers(options: PropertyOptions<T, U>)
```
---

### PropertyOptions Interface
#### name
```ts
{
    name: "propertyName"
}
```

---
#### defaultValue
```ts
{
    defaultValue: someValue
}
```

---
#### affectsLayout
```ts
{
    affectLayout: true
}
```
---
#### equalityComparer
```ts
{
    equalityComparer: (x,y)=>{
    // compare x to y and return boolean
    return true
  }
}
```
#### valueChanged
```ts
{
    valueChanged: (target: T, oldValue: U, newValue: U)=>{
    
    }
}
```
#### valueConverter
```ts
{
    valueConverter: (value: string)=>{
        
        return someValue
    }
}
```

### CssPropertyOptions interface
#### cssName
   ```ts
{
    cssName: "my-css-property"
}
   ```
The name of the property to be used in a CSS rule.

### ShorthandPropertyOptions Interface
```ts
{
    name: "newProperty"
}
```

---
#### cssName
   ```ts
{
    cssName: "my-css-property"
}
   ```

---
<!-- TODO: Add example -->
#### converter()
```ts
{

}
```
----
#### getter()
```ts
{
    getter: function (this: Style){
        return cssValue
    }
}
```
