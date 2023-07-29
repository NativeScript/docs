---
title: Android Marshalling
---

NativeScript seamlessly handles data type conversion between JavaScript and Java/Kotlin, utilizing type inference and dedicated wrappers, ensuring smooth integration and type safety in cross-platform development.

## String Conversion
### Converting JavaScript String to Java string types

JavaScript [String](http://www.w3schools.com/jsref/jsref_obj_string.asp) maps to [java.lang.String](http://developer.android.com/reference/java/lang/String.html):

```js
var context = ...;
var button = new android.widget.Button(context);
var text = "My Button"; 
button.setText(text); 
```
`button.setText(text)` - `text` is converted to `java.lang.String`

### Converting JavaScript String to Kotlin string types

JavaScript [String](http://www.w3schools.com/jsref/jsref_obj_string.asp) maps to [kotlin.String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html):

```js
const kotlinClass = new com.example.KotlinClassWithStringProperty()
var text = 'My Button' 
kotlinClass.setStringProperty(text) /
```
`kotlinClass.setStringProperty(text)` - JavaScript `text` is converted to `kotlin.String`

### Converting Java string types to JavaScript String
Both [java.lang.String](http://developer.android.com/reference/java/lang/String.html) and [java.lang.Character](http://docs.oracle.com/javase/7/docs/api/java/lang/Character.html) types are projected as JavaScript [String](http://www.w3schools.com/jsref/jsref_obj_string.asp):

```js
var file = new java.io.File('/path/to/file')
var path = file.getPath() 
```

`getPath()` - returns `java.lang.String`, converted to JS `String`

### Converting Kotlin string types to JavaScript String

Both [kotlin.String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) and [kotlin.Char](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-char/index.html) types are projected as JavaScript [String](http://www.w3schools.com/jsref/jsref_obj_string.asp):

```kotlin
package com.example

class KotlinClassWithStringAndCharProperty {
  val stringProperty: String = "string property"
  val charProperty: Char = 'c'
}
```

```js
var kotlinClass = new com.example.KotlinClassWithStringAndCharProperty()
var str1 = kotlinClass.getStringProperty() // returns kotlin.String, converted to JS String
var str2 = kotlinClass.getCharProperty() // returns kotlin.Char, converted to JS String
```

- `getStringProperty()`- returns `kotlin.String`, converted to `JS String`
- `getCharProperty()` - returns `kotlin.Char`, converted to JS `String`

## Boolean conversion

### JavaScript Boolean to Java boolean type
JavaScript [Boolean](http://www.w3schools.com/js/js_booleans.asp) maps to Java [primitive boolean](http://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html).

```js
var context = ...;
var button = new android.widget.Button(context);
var enabled = false; 
button.setEnabled(enabled);
```

`button.setEnabled(enabled)` - JavaScript Boolean `enabled` is converted to Java primitive boolean.

### JavaScript Boolean to Kotlin boolean type
JavaScript [Boolean](http://www.w3schools.com/js/js_booleans.asp) maps to Kotlin class [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html).

### Converting from Java boolean to JavaScript boolean

Both the primitive [boolean](http://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html) and reference [java.lang.Boolean](http://docs.oracle.com/javase/7/docs/api/java/lang/Boolean.html) types are projected as JavaScript [Boolean](http://www.w3schools.com/jsref/jsref_obj_boolean.asp):

```js 
var context = ...
var button = new android.widget.Button(context);
var enabled = button.isEnabled(); 
```

`isEnabled()` - returns `primitive boolean`, converted to JS `Boolean`


### Converting from Kotlin boolean to JavaScript boolean

Kotlin's boolean type [kotlin.Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) is mapped to JavaScript [Boolean](http://www.w3schools.com/jsref/jsref_obj_boolean.asp):


```kotlin
package com.example

class KotlinClassWithBooleanProperty {
  val booleanProperty: Boolean = false
}
```

```js
var kotlinClass = new com.example.KotlinClassWithBooleanProperty()
var enabled = kotlinClass.getBooleanProperty() // returns Kotlin Boolean, converted to JS Boolean
```

`getBooleanProperty()` - returns `Kotlin Boolean`, converted to JS `Boolean`.


## Numeric data types

### Converting JavaScript Number to Java/Kotlin numeric types

Java and Kotlin have several primitive numeric types while JavaScript has the `Number` type only. Additionally, unlike JavaScript, Java and Kotlin  support [Method Overloading](http://en.wikipedia.org/wiki/Function_overloading), which makes the numeric conversion more complex.

Consider the following examples:

```java
class MyObject extends java.lang.Object {
    public void myMethod(byte value){
    }

    public void myMethod(short value){
    }

    public void myMethod(int value){
    }

    public void myMethod(long value){
    }

    public void myMethod(float value){
    }

    public void myMethod(double value){
    }
}
```

```kotlin
class MyObject : Any() {
    fun myMethod(value: Byte) {}

    fun myMethod(value: Short) {}

    fun myMethod(value: Int) {}

    fun myMethod(value: Long) {}

    fun myMethod(value: Float) {}

    fun myMethod(value: Double) {}
}
```

The following logic applies when calling `myMethod` on a `myObject` instance from JavaScript:

```js
var myObject = new MyObject()
```
#### Implicit conversion

- **integer** conversion:

When you call 

```js
myObject.myMethod(10) 
```

the runtime implicitly converts the JavaScript `10(Number)` to Java/Kotlin `Int` and then calls the `myMethod(Int)` method.

::: warning Note
If there is no myMethod(Int) implementation, the Android runtime will try to choose the best possible overload with least conversion loss. If no such method is found an exception will be raised.
:::

- **floating-point** conversion:

```js
myObject.myMethod(10.5) // myMethod(Double) will be called.
```
The JavaScript `10.5` `Number` gets converted to Java/Kotlin `double` and then myMethod(ouble) gets called.

::: warning Note
In a scenario where no myMethod(double) implementation exists, the Runtime will attempt to select the most suitable possible overload, with the least amount of conversion loss.  If no such method is found an exception thrown.
:::

#### Explicit conversion

To explicitly convert from a JavaScript `Number` to Java/Kotlin numeric data types, and call a specific method overload, NativeScript provides the following functions in the global scope: 

- `byte(number)` → (`Java primitive byte` | `Kotlin Byte` ) <br>
    \- The number value will be truncated and only its first byte of the whole part will be used.
- `short(number)` → Java primitive short

### Converting Java numeric types to JavaScript Number

The following Java types are converted to the JavaScript [Number](http://www.w3schools.com/jsref/jsref_obj_number.asp):

- Primitive [byte](http://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html) and reference [java.lang.Byte](http://docs.oracle.com/javase/7/docs/api/java/lang/Byte.html) :

```js
var byte = new java.lang.Byte('1')
var jsByteValue = byte.byteValue() // returns primitive byte, converted to Number
```

- Primitive [short](http://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html) and reference [java.lang.Short](http://docs.oracle.com/javase/7/docs/api/java/lang/Short.html) :

```js
var short = new java.lang.Short('1')
var jsShortValue = short.shortValue() // returns primitive short, converted to Number
```

- Primitive [int](http://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html) and reference [java.lang.Integer](http://docs.oracle.com/javase/7/docs/api/java/lang/Integer.html):

```js
var int = new java.lang.Integer('1')
var jsIntValue = int.intValue() // returns primitive int, converted to Number
```
`intValue()` - returns `primitive int`, converted to `Number`
- Primitive [float](http://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html) and reference [java.lang.Float](http://docs.oracle.com/javase/7/docs/api/java/lang/Float.html) :

```js
var float = new java.lang.Float('1.5')
var jsFloatValue = float.floatValue() // returns primitive float, converted to Number
```
`floatValue()` returns a `primitive float`, converted to `Number`.

- Primitive [double](http://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html) and reference [java.lang.Double](http://docs.oracle.com/javase/7/docs/api/java/lang/Double.html) :

```js
var double = new java.lang.Double('1.5')
var jsDoubleValue = double.doubleValue() // returns primitive double, converted to Number
```
`doubleValue()` returns a `primitive float`, converted to `Number`.
- Long & Primitive long

[java.lang.Long](http://docs.oracle.com/javase/7/docs/api/java/lang/Long.html) and its primitive equivalent are special types which are projected to JavaScript by applying the following rules:

    - If the value is in the interval `(-2^53, 2^53)` then it is converted to [Number](http://www.w3schools.com/jsref/jsref_obj_number.asp)
    - Else a special object with the following characteristics is created:
    - Has Number.NaN set as a prototype
    - Has value property set to the string representation of the Java long value
    - Its `valueOf()` method returns NaN
    - Its `toString()` method returns the string representation of the Java long value 

```java
public class TestClass {
	public long getLongNumber54Bits(){
		return 1 << 54;
	}
	public long getLongNumber53Bits(){
		return 1 << 53;
	}
}
```

```js
var testClass = new TestClass()
var jsNumber = testClass.getLongNumber53Bits() 
var specialObject = testClass.getLongNumber54Bits()
```

`jsNumber` is a JavaScript Number and `specialObject` is the special object discussed above.

### Converting Kotlin numeric types to JavaScript Number

Similar to the conversion from Java numeric data types to JavaScript Number, the following Kotlin numeric data types are converted to JavaScript Number type:

- Kotlin's byte type [kotlin.Byte](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte/index.html):


```kotlin
package com.example

class KotlinClassWithByteProperty {
  val byteProperty: Byte = 42
}
```

```js
var kotlinClass = new com.example.KotlinClassWithByteProperty()
var jsByteValue = kotlinClass.getByteProperty() // returns Kotlin Byte, converted to Number
```

- Kotlin's short type [kotlin.Short](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-short/index.html):

```kotlin
package com.example

class KotlinClassWithShortProperty {
  val shortProperty: Short = 42
}
```

```js
var kotlinClass = new com.example.KotlinClassWithShortProperty()
var jsShortValue = kotlinClass.getShortProperty()
```
`getShortProperty()` - returns `Kotlin Short`, converted to `Number`

- Kotlin's integer type [kotlin.Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html):

```kotlin
package com.example

class KotlinClassWithIntProperty {
  val intProperty: Int = 42
}
```

```js
var kotlinClass = new com.example.KotlinClassWithIntProperty()
var jsIntValue = kotlinClass.getIntProperty() 
```
`getIntProperty()` - returns `Kotlin Int`, converted to `Number`

- Kotlin's float type [kotlin.Float](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-float/index.html):

```kotlin
package com.example

class KotlinClassWithFloatProperty {
  val floatProperty: Float = 42.0f
}
```

```js
var kotlinClass = new com.example.KotlinClassWithFloatProperty()
```
`getFloatProperty()` - returns `Kotlin Float`, converted to `Number`

- Kotlin's double type [kotlin.Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html):

```kotlin
package com.example

class KotlinClassWithDoubleProperty {
  val doubleProperty: Double = 42.0
}
```

```js
var kotlinClass = new com.example.KotlinClassWithDoubleProperty()
var jsDoubleValue = kotlinClass.getDoubleProperty()
```
`getDoubleProperty()` - returns `Kotlin double`, converted to `Number`

- Kotlin's long type [kotlin.Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html) is a special type which is projected to JavaScript by applying the following rules:

    - If the value is in the interval `(-2^53, 2^53)` then it is converted to [Number](http://www.w3schools.com/jsref/jsref_obj_number.asp)
    - Else a special object with the following characteristics is created:
    - Has Number.NaN set as a prototype
    - Has value property set to the string representation of the Kotlin long value
    - Its valueOf() method returns NaN
    - Its toString() method returns the string representation of the Kotlin long value

```kotlin
package com.example

class KotlinClassWithLongProperties {
  val longNumber54Bits: Long
    get() = (1 shl 54).toLong()
  val longNumber53Bits: Long
    get() = (1 shl 53).toLong()
}
```

```js
var kotlinClass = new com.example.KotlinClassWithLongProperties()
var jsNumber = kotlinClass.getLongNumber53Bits() 
var specialObject = kotlinClass.getLongNumber54Bits() 
```
`jsNumber` is a JavaScript Number and `specialObject` is the special object discussed above.

## Converting Undefined & Null 

JavaScript [Undefined](http://www.w3schools.com/jsref/jsref_undefined.asp) & [Null](https://www.w3schools.com/js/js_type_conversion.asp) maps to Java  and Kotlin  [null literal](http://docs.oracle.com/javase/specs/jls/se7/html/jls-3.html#jls-3.10.7) (or null pointer).

```js
var context = ...;
var button = new android.widget.Button(context);
button.setOnClickListener(undefined);
```
In the abve example, the Java call will be made using the `null` keyword.

## Array conversion

A JavaScript [Array](http://www.w3schools.com/jsref/jsref_obj_array.asp) is implicitly converted to a [Java Array](http://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html) or a [Kotlin Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html), using the above described rules for type conversion of the array's elements. For example:

```js
var items = ['One', 'Two', 'Three']
var myObject = new MyObject()
myObject.myMethod(items) 
```

```java
class MyObject extends java.lang.Object {
  public void myMethod(java.lang.String[] items){
  }
}
```

```kotlin
class MyObject : Any() {
    fun myMethod(items: Array<String>) {}
}
```

### Converting from Java/Kotlin arrays to JavaScript array
Array in Java/Kotlin is a special [java.lang.Object](http://docs.oracle.com/javase/7/docs/api/java/lang/Object.html) that have an implicit Class associated. A Java/Kotlin Array is projected to JavaScript as a special JavaScript proxy object with the following characteristics:

- Has length property
- Has registered indexed getter and setter callbacks, which:
  - If the array contains elements of type convertible to a JavaScript type, then accessing the i-th element will return a converted type
  - If the array contains elements of type non-convertible to JavaScript, then accessing the i-th element will return a proxy object over the Java/Kotlin type see [Accessing APIs](#accessing-apis)
<!-- TODO: add  Accessing APIs link-->

<!-- tab: Java to JS  -->
```js
var directory = new java.io.File('path/to/myDir')
var files = directory.listFiles() // files is a special object as described above
var singleFile = files[0] // the indexed getter callback is triggered and a proxy object over the java.io.File is returned
```

```kotlin
package com.example

class KotlinClassWithStringArrayProperty {
  val stringArrayProperty: Array<String> = arrayOf("element1", "element2", "element3")
}
```
<!--tab: Kt to JS  -->
```js
var kotlinClass = new com.example.KotlinClassWithStringArrayProperty()
var kotlinArray = kotlinClass.getStringArrayProperty() // kotlinArray is a special object as described above
var firstStringElement = kotlinArray[0] // the indexed getter callback is triggered and the kotlin.String is returned as a JS string
```

::: warning Note
A Java/Kotlin Array is intentionally not converted to a JavaScript [Array](http://www.w3schools.com/jsref/jsref_obj_array.asp) for the sake of performance, especially when it comes to large arrays.
:::

##### Array of Objects

In scenarios where the creation of Java/Kotlin arrays from JavaScript is mandatory.  In the given scenario, we have extended the built-in JavaScript Array object by adding a custom method named create. By doing so, we have augmented the default functionality of the Array object with our own implementation to cater to specific requirements in built-in JavaScript [`Array` object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array). Here are some examples how to use `Array.create` method:

```js
// the following statement is equivalent to byte[] byteArr = new byte[10];
var byteArr = Array.create('byte', 10)

// the following statement is equivalent to String[] stringArr = new String[10];
var stringArr = Array.create(java.lang.String, 10)
```

Here is the full specification for `Array.create` method

```js
Array.create(elementClassName, length)
```

```js
Array.create(javaClassCtorFunction, length)
```

The first signature accepts a `string` type  for an `elementClassName`.  This option becomes beneficial when the creation of a Java array of primitive types (e.g. `char`, `boolean`, `byte`, `short`, `int`, `long`, `float` and `double`) is required.  This also applicable when the creation of Java jagged arrays is needed.  For this scenario `elementClassName` must be the standard JNI class notation. Here are some examples:

```js
// equivalent to int[][] jaggedIntArray2 = new int[10][];
var jaggedIntArray2 = Array.create('[I', 10)

// equivalent to boolean[][][] jaggedBooleanArray3 = new boolean[10][][];
var jaggedBooleanArray3 = Array.create('[[Z', 10)

// equivalent to Object[][][][] jaggedObjectArray4 = new Object[10][][][];
var jaggedObjectArray4 = Array.create('[[[Ljava.lang.Object;', 10)
```

The second signature requires you to provide the `javaClassCtorFunction`, which must be the JavaScript constructor function representing the desired Java type.  Here are some examples:

```js
// equivalent to String[] stringArr = new String[10];
var stringArr = Array.create(java.lang.String, 10)

// equivalent to Object[] objectArr = new Object[10];
var objectArr = Array.create(java.lang.Object, 10)
```

#### Array of Primitive Types

When dealing with arrays of primitive types, automatic marshalling is not supported. To pass them as arguments to a method, you'll need to use wrapper classes (e.g., Integer, Double) to convert the primitives into objects, allowing for automatic marshalling.

```java
public static void myMethod(int[] someParam)
```

Then yoy need to invoke it as follows:

```js
let arr = Array.create('int', 3)
arr[0] = 1
arr[1] = 2
arr[2] = 3

SomeObject.myMethod(arr) // assuming the method is accepting an array of primitive types
```

However there are some other helpful classes we can use to create a few other arrays of primitive types

```js
const byteArray = java.nio.ByteBuffer.wrap([1]).array()
const shortArray = java.nio.ShortBuffer.wrap([1]).array()
const intArray = java.nio.IntBuffer.wrap([1]).array()
const longArray = java.nio.LongBuffer.wrap([1]).array()
const floatArray = java.nio.FloatBuffer.wrap([1]).array()
const doubleArray = java.nio.DoubleBuffer.wrap([1]).array()
```

##### Two-Dimensional Arrays of Primitive Types

The above scenario gets more tricky with two-dimensional arrays. Consider a Java method that accepts as an argument a two-dimensional array:

```java
public static void myMethod(java.lang.Integer[][] someParam)
```

The marshalled JavaScript code will look like this:

```js
let arr = Array.create('[Ljava.lang.Integer;', 2)
let elements = Array.create('java.lang.Integer', 3)
elements[0] = new java.lang.Integer(1)
elements[1] = new java.lang.Integer(2)
elements[2] = new java.lang.Integer(3)
arr[0] = elements

SomeObject.myMethod(arr) // assuming the method is accepting a two-dimensional array of primitive types
```


```kotlin
interface Printer {
    fun print(content: String)
    fun print(content: String, offset: Int)
}

interface Copier {
    fun copy(content: String): String
}

interface Writer {
    fun write(arr: Array<Any>)
    fun writeLine(arr: Array<Any>)
}
```

Implementing the interfaces:

```java
public class MyVersatileCopywriter implements Printer, Copier, Writer {
    public void print(String content) { ... }

    public void print(String content, int offset) { ... }

    public String copy(String content) { ... }

    public void write(Object[] arr) { ... }

    public void writeLine(Object[] arr) { ... }
}
```

```kotlin
class MyVersatileCopywriter: Printer, Copier, Writer{

    override fun print(content: String) { ... }

    override fun print(content: String, offset: Int) { ... }

    override fun copy(content: String): String { ... }

    override fun write(arr: Array<Any>) { ... }

    override fun writeLine(arr: Array<Any>) { ... }
}
```
The same result can be achieved in NativeScript by extending any valid object that inherits [Java Object](https://docs.oracle.com/javase/7/docs/api/java/lang/Object.html).

- In JavaScript - Declare an `interfaces` array in the implementation
- Using Typescript syntax - apply a `decorator` to the extended class (note `@Interfaces([...])`)

Using Javascript syntax - attach `interfaces` array to implementation object of the extend call

```js
let MyVersatileCopyWriter = java.lang.Object.extend({
    interfaces: [com.a.b.Printer, com.a.b.Copier, com.a.b.Writer], /* the interfaces that will be inherited by the resulting class */
    print: function() { ... }, /* implementing the 'print' methods from Printer */
    copy: function() { ... }, /* implementing the 'copy' method from Copier */
    write: function() { ... }, /* implementing the 'write' method from Writer */
    writeLine: function() { ... }, /* implementing the 'writeLine' method from Writer */
    toString: function() { ... } /* override `java.lang.Object's` `toString */
});
```

```ts
@Interfaces([com.a.b.Printer, com.a.b.Copier, com.a.b.Writer]) /* the interfaces that will be inherited by the resulting MyVersatileCopyWriter class */
class MyVersatileCopyWriter extends java.lang.Object { 
    constructor() {
        super();
        return global.__native(this);
    }

    print() { ... }
    copy() { ... }
    write() { ... }
    writeLine() { ... }
}
```

:::warning
- Implementing two interfaces with the same method signature will generate just 1 method. It is the implementor's responsibility to define how the method will behave for both interfaces

- Implementing two interfaces with the same _method name_, _parameter number_, but **different return type** (`void a()` vs `boolean a()`) will result in a compilation error.
:::

:::warning Note
Java/Kotlin method overloads are handled by the developer by explicitly checking the arguments count of the invoked function
:::

```ts
class MyVersatileCopyWriter extends ... {
    constructor() {
        super();
        return global.__native(this);
    }
    ...
    print() {
        let content = "";
        let offset = 0;

        if (arguments.length == 2) {
            offset = arguments[1];
        }

        content = arguments[0];

        // do stuff
    }
    ...
}
```
:::tip Note
In OOP, when a class extends another class aka inheritance, the new class not only gains access to the interface methods it must implement, but also has the ability to override methods from the extended class. Moreover, it can introduce new methods specific to the new class's functionality. This enables the new class to extend and enhance the behaviour of its parent class while providing additional functionality of its own.
:::

## Java nested types in NativeScript

```java
public class Outer {
    public class Inner {
      // inner and nested class
    }

    public static class Nested {
      // nested but not inner class
    }
}
```
```java
//Instantiate nested types
Outer outer = new Outer();
Outer.Inner inner1 = outer.new Inner();

Outer.Inner inner2 = new Outer().new Inner();

Outer.Nested nested = new Outer.Nested()
```
```ts
var outer = new Outer();

var inner1 = new outer.Inner();     

var inner2 = new new Outer().Inner();

var nested =  new Outer.Nested();

````
## Kotlin Types

All Kotlin types are projected to JavaScript using the Package and Class proxies as described in  <!-- TODO: add link [Accessing APIs](#accessing-apis)-->

## Kotlin Companion objects

You can access Kotlin's [companion objects](https://khan.github.io/kotlin-for-python-developers/#objects-and-companion-objects#companion-objects) via the `Companion` field:

```kotlin
package com.example

class KotlinClassWithCompanion {
  companion object {
    fun getDataFromCompanion() = "some data"
  }
}
```

```js
var companion = com.example.KotlinClassWithCompanion.Companion
var data = companion.getDataFromCompanion()
```

## Kotlin Object

To access the Kotlin's [objects](https://kotlinlang.org/docs/tutorials/kotlin-for-py/objects-and-companion-objects.html#object-declarations), use the `INSTANCE` field:

```kotlin
package com.example

object KotlinObject {
  fun getDataFromObject() = "some data"
}
```

```js
var objectInstance = com.example.KotlinObject.INSTANCE
var data = objectInstance.getDataFromObject()
```

## Accessing Kotlin properties

To access the Kotlin's [properties](https://kotlinlang.org/docs/reference/properties.html#properties-and-fields), use their compiler-generated get/set methods. Non-boolean Kotlin properties could be used in NativeScript applications as JS fields as well.


```kotlin
package com.example

class KotlinClassWithStringProperty(var stringProperty: kotlin.String)
```

```js
var kotlinClass = new com.example.KotlinClassWithStringProperty()

var propertyValue = kotlinClass.getStringPropert()
kotlinClass.setStringProperty('example')

propertyValue = kotlinClass.stringProperty
kotlinClass.stringProperty = 'second example'
```

## Accessing Kotlin package-level functions

In order to use a Kotlin [package-level function](https://kotlinlang.org/docs/reference/java-to-kotlin-interop.html#package-level-functions), the class where it's defined should be known. Let's take a look at an example:

```kotlin
package com.example

fun getRandomNumber() = 42
```

```js
var randomNumber = com.example.FunctionsKt.getRandomNumber()
```

In the example above, the class `FunctionsKt` is autogenerated by the Kotlin compiler and its name is based on the name of the file where the functions are defined. Kotlin supports annotating a file to have a user provided name and this simplifies using package-level functions:

```js
var randomNumber = com.example.UtilityFunctions.getRandomNumber()
```

```kotlin
@file:JvmName("UtilityFunctions")
package com.example

fun getRandomNumber() = 42
```

## Accessing Kotlin extension functions

In order to use an extension function, the class where it's defined is required to be known.  Also, when invoking this function, the first parameter should be an instance of the type for which the function is defined.  Let's take a look at an example:

```kotlin
package com.example

import java.util.ArrayList

fun ArrayList<String>.switchPlaces(firstElementIndex: Int, secondElementIndex: Int) {
  val temp = this[firstElementIndex]
  this[firstElementIndex] = this[secondElementIndex]
  this[secondElementIndex] = temp
}
```
```js
var arrayList = new java.util.ArrayList()
arrayList.add('firstElement')
arrayList.add('secondElement')
com.example.Extensions.switchPlaces(arrayList, 0, 1)
```

In the example above, the class `ExtensionsKt` is autogenerated by the Kotlin compiler and its name is based on the name of the file where the functions are defined. Kotlin supports annotating a file to have a user provided name and this simplifies using package-level functions:

```kotlin
@file:JvmName("ExtensionFunctions")
package com.example

import java.util.ArrayList

fun ArrayList<String>.switchPlaces(firstElementIndex: Int, secondElementIndex: Int) {
  val temp = this[firstElementIndex]
  this[firstElementIndex] = this[secondElementIndex]
  this[secondElementIndex] = temp
}
```

```js
var arrayList = new java.util.ArrayList()
arrayList.add('firstElement')
arrayList.add('secondElement')
com.example.ExtensionFunctions.switchPlaces(arrayList, 0, 1)
```

