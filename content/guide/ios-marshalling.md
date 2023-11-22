---
title: iOS Marshalling
---

NativeScript for iOS handles the conversion between JavaScript and Objective-C data types. The following is a thorough but not exhaustive list of rules and exceptions NativeScript abides by when exposing Objective-C APIs in JavaScript.

## Converting Objective-C Classes and Objects

Classes can have instance methods, static methods, and properties. NativeScript exposes an Objective-C class and its members as a JavaScript constructor function with an associated prototype according to the [prototypal inheritance model](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain). This means that each static method on an Objective-C class becomes a function on its JavaScript constructor function, each instance method becomes a function on the JavaScript prototype, and each property becomes a property descriptor on the same prototype. Every JavaScript constructor function created to expose an Objective-C class is arranged in a prototype chain that mirrors the class hierarchy in Objective-C: if `NSMutableArray` extends `NSArray`, which in turn extends `NSObject` in Objective-C, then in JavaScript the prototype of the `NSObject` constructor function is the prototype of `NSArray`, which in turn is the prototype of `NSMutableArray`.

To illustrate:

```objc
@interface NSArray : NSObject

+ (instancetype)arrayWithArray:(NSArray *)anArray;

- (id)objectAtIndex:(NSUInteger)index;

@property (readonly) NSUInteger count;

@end
```

```js
var NSArray = {
  __proto__: NSObject,

  arrayWithArray: function () {
    [native code]
  }
}

NSArray.prototype = {
  __proto__: NSObject.prototype,

  constructor: NSArray,

  objectAtIndex: function () {
    [native code]
  },

  get count() {
    [native code]
  }
}
```

Instances of Objective-C classes exist in JavaScript as special "wrapper" exotic objects - they keep track of and reference native objects, as well as manage their memory. When a native API returns an Objective-C object, NativeScript constructs such a wrapper for it in case one doesn't already exist. Wrappers have a prototype just like regular JavaScript objects. This prototype is the same as the prototype of the JavaScript constructor function that exposes the class the native object is an instance of. In essence:

```js
const tableViewController = new UITableViewController() // returns a wrapper around a UITableViewController instance
Object.getPrototypeOf(tableViewController) === UITableViewController.prototype // returns true
```

There is only one JavaScript wrapper around an Objective-C object, always. This means that Objective-C wrappers maintain JavaScript identity equality:

```js
tableViewController.tableView === tableViewController.tableView
```

To call native APIs that expect Objective-C classes or objects just pass the JavaScript constructor function for the class, or the wrapper for the object.

If an API is declared as accepting a `Class` in Objective-C, the argument in JavaScript is the constructor function:

```objc
NSString *className = NSStringFromClass([NSArray class]);
```

```js
const className = NSStringFromClass(NSArray)
```

Conversely, if an API is declared as accepting an instance of a specific class such as `NSDate`, the argument is a wrapper around an object inheriting from that class.

```objc
NSDateFormatter *formatter = [[NSDateFormatter alloc] init];
NSDate *date = [NSDate date];
NSString *formattedDate = [formatter stringFromDate:date];
```

```js
const formatter = new NSDateFormatter()
const date = NSDate.date()
const formattedDate = formatter.stringFromDate(date)
```

An API expecting the `id` data type in Objective-C means it will accept any Objective-C class or object in JavaScript.

```objc
NSMutableArray *array = [[NSMutableArray alloc] init];
Class buttonClass = [UIButton class];
UIButton *button = [[buttonClass alloc] init];
[array setObject:buttonClass atIndex:0];
[array setObject:button atIndex:1];
```

```js
const array = new NSMutableArray()
const buttonClass = UIButton
const button = new buttonClass()
array.setObjectAtIndex(buttonClass, 0)
array.setObjectAtIndex(button, 1)
```

## Calling Objective-C/Swift methods with multiple arguments

Consider the following `NSMutableArray` selector: `replaceObjectsInRange:withObjectsFromArray:range:`.

In JavaScript it is represented by: `replaceObjectsInRangeWithObjectsFromArrayRange(objectsToRange, sourceArray, sourceRange)` (argument names are arbitrary).

In Objective-C, when generating the function name for a method, it follows a convention of appending the names of the arguments defined by the Objective-C selector. The function name starts with a lowercase letter for the first argument and appends subsequent arguments with a capital letter.

This naming convention helps to create unique and descriptive function names based on the arguments of the method. By incorporating the argument names into the function name, it provides clarity and readability when working with Objective-C APIs.

It's important to note that this convention is specific to Objective-C and may differ from naming conventions in other programming languages.

For an example of how to extend an Objective-C/Swift class, have a look at [Extending iOS classes in NativeScript](/guide/extending-classes-and-conforming-to-protocols-ios)

## Converting JavaScript array to CGFloat array

The below code shows how to convert a JavaScript array to a `CGFloat` array to pass it to an Objective-C method expecting `CGFloat` as an argument:

```js
const CGFloatArray =
  interop.sizeof(interop.types.id) == 4 ? Float32Array : Float64Array
const jsArray = [4.5, 0, 1e-5, -1242e10, -4.5, 34, -34, -1e-6]

FloatArraySample.dumpFloats(CGFloatArray.from(jsArray), jsArray.length)
```

```objc
@interface FloatArraySample
+ (void)dumpFloats:(CGFloat*) arr withCount:(int)cnt;
@end

@implementation TNSBaseInterface

+ (void)dumpFloats:(CGFloat*) arr withCount:(int)cnt {
    for(int i = 0; i < cnt; i++) {
      NSLog(@"arr[%d] = %f", i, arr[i]);
    }
}
@end
```

::: warning Note
Keep in mind that `CGFloat` is architecture dependent. On 32-bit devices, we need to use `Float32Array` and `Float64Array` -- on 64-bit ones. A straightforward way to verify the device/emulator architecture is to check the pointer size via `interop.sizeof(interop.types.id)`. The return value for the pointer size will be 4 bytes for 32-bit architectures and 8 bytes - for 64-bit ones. For further info, check out [CGFloat's documentation](https://developer.apple.com/documentation/coregraphics/cgfloat).
:::

## Primitive Exceptions

NativeScript considers instances of `NSNull`, `NSNumber`, `NSString` and `NSDate` to be "primitives". This means that instances of these classes won't be exposed in JavaScript via a wrapper exotic object, instead they will be converted to the equivalent JavaScript data type: `NSNull` becomes `null`, `NSNumber` becomes `number` or `boolean`, `NSString` becomes `string` and `NSDate` becomes `Date`. The exception to this are the methods on those classes declared as returning `instancetype` - init methods and factory methods. This means that a call to `NSString.stringWithString` whose return type in Objective-C is `instancetype` will return a wrapper around an `NSString` instance, rather than a JavaScript string. This applies for all methods on `NSNull`, `NSNumber`, `NSString` and `NSDate` returning `instancetype`.

On the other hand, any API that expects a `NSNull`, `NSNumber`, `NSString` or `NSDate` instance in Objective-C can be called either with a wrapper object or a JavaScript value - `null`, `number` or `boolean`, `string` or `Date`, in JavaScript. The conversion is automatically handled by NativeScript.

### Converting numeric types

```ts
console.log(`pow(2.5, 3) = ${Math.pow(2.5, 3)}`)
```

The iOS Runtime converts JavaScript number literals to native doubles and utilizes the native pow(double x, double y) function. The resulting native integer is automatically converted back to a JavaScript number and then passed as an argument to console.log() for output..

### Converting string

```ts
let button = UIButton.new()
button.setTitleForState('Button title', UIControlState.Normal)
console.log(button.titleLabel.text)
```

`Button title` is converted to `NSString` and the returned `NSString` is converted to JavaScript `string`.

### Converting boolean

```ts
let str = NSString.stringWithString('YES')
let isTrue = str.boolValue
```

## Objective-C Protocols

Protocols in Objective-C serve a similar purpose as interfaces in other programming languages. They define a blueprint or contract that specifies the members (methods, properties, etc.) that a class should implement. Protocols are exposed as empty objects in JavaScript. Protocols are usually only referenced when [subclassing](/guide/extending-classes-and-conforming-to-protocols-ios#conforming-to-objective-c-swift-protocols) an Objective-C class or when checking whether an object or class conforms to a protocol.

```objc
BOOL isCopying = [NSArray conformsToProtocol:@protocol(NSCopying)];
```

```js
const isCopying = NSArray.conformsToProtocol(NSCopying)
```

To implement Objective-C/Swift protocols in NativeScript, hava look at [Conforming to Objective-C/Swift protocols in NativeScript](/guide/extending-classes-and-conforming-to-protocols-ios#conforming-to-objective-c-swift-protocols)

## Objective-C Selectors

In Objective-C, a `SEL` is a data type that represents a method name in an Objective-C class. NativeScript exposes this data type in the form of a JavaScript string. When working with APIs in Objective-C, if an API expects a selector value, the corresponding JavaScript projection in NativeScript will expect a string representing the method name.

```objc
NSMutableString *aString = [[NSMutableString alloc] init];
BOOL hasAppend = [aString respondsToSelector:@selector(appendString:)];
```

```js
const aString = NSMutableString.alloc().init()
const hasAppend = aString.respondsToSelector('appendString:')
```

## Objective-C Blocks

[Objective-C blocks](https://developer.apple.com/library/ios/documentation/Cocoa/Conceptual/Blocks/Articles/00_Introduction.html) are anonymous functions in Objective-C. They can be closures, just like JavaScript functions, and are often used as callbacks. NativeScript implicitly exposes an Objective-C block as a JavaScript function. Any API that accepts a block in Objective-C accepts a JavaScript function when called in JavaScript:

```objc
NSURL *url = [NSURL URLWithString:@"http://example.com"];
NSURLRequest *request = [NSURLRequest requestWithURL:url];
[NSURLConnection sendAsynchronousRequest:request queue:nil completionHandler:^(NSURLResponse *response, NSData *data, NSError *connectionError) {
    NSLog(@"request complete");
}];
```

```js
const url = NSURL.URLWithString('http://example.com')
const request = NSURLRequest.requestWithURL(url)
NSURLConnection.sendAsynchronousRequestQueueCompletionHandler(
  request,
  null,
  (response, data, connectionError) => {
    console.log('request complete')
  }
)
```

Blocks in Objective-C, especially those that function as closures, require proper retention and release to avoid memory leaks. However, in NativeScript, this memory management is handled automatically. When a block is exposed as a JavaScript function, it is released as soon as the function is garbage collected. Conversely, a JavaScript function that is implicitly converted to a block will not be garbage collected as long as the block is retained.

## CoreFoundation Objects

iOS contains both an Objective-C standard library (the Foundation framework) and a pure C standard library (Core Foundation). Core Foundation is modeled after Foundation to a great extent and implements a limited object model. Data types such as CFDictionaryRef and CFBundleRef are Core Foundation objects. Core Foundation objects are retained and released just like Objective-C objects, using the CFRetain and CFRelease functions. NativeScript implements automatic memory management for functions that are annotated as returning a retained Core Foundation object. For those that are not annotated, NativeScript returns an Unmanaged type that wraps the Core Foundation instance. This makes you partially responsible for keeping the instance alivee. You could either

- Call takeRetainedValue() which would return managed reference to the wrapped instance, decrementing the reference count while doing so
- Call takeUnretainedValue() which would return managed reference to the wrapped instance _without_ decrementing the reference count

### Toll-free Bridging

Core Foundation has the concept of [Toll-free bridged types](https://developer.apple.com/library/ios/documentation/CoreFoundation/Conceptual/CFDesignConcepts/Articles/tollFreeBridgedTypes.html) - data types which can be used interchangeably with their Objective-C counterparts. When dealing with a toll-free bridged type NativeScript always treats it as its Objective-C counterpart. Core Foundation objects on the [toll-free bridged types list](https://developer.apple.com/library/ios/documentation/CoreFoundation/Conceptual/CFDesignConcepts/Articles/tollFreeBridgedTypes.html#//apple_ref/doc/uid/TP40010677-SW4) are exposed as if they were instances of the equivalent Objective-C class. This means that a `CFDictionaryRef` value in JavaScript has the same methods on its prototype as if it were a `NSDictionary` object. Unlike regular Core Foundation objects, toll-free bridged types are automatically memory managed by NativeScript, so there is no need to retain or release them using `CFRetain` and `CFRelease`.

### Null Values

Objective-C has three null values - `NULL`, `Nil` and `nil`. `NULL` means a regular C pointer to zero, `Nil` is a `NULL` pointer to an Objective-C class, and `nil` is a `NULL` pointer to an Objective-C object. They are implicitly converted to `null` in JavaScript. When calling a native API with a `null` argument NativeScript converts the JavaScript null value to a C pointer to zero. Some APIs require their arguments to not be pointers to zero - invoking them with null in JavaScript can potentially crash the application without a chance to recover.

## Numeric Types

Integer and floating point data types in Objective-C are converted to JavaScript numbers. This includes types such as `char`, `int`, `long`, `float`, `double`, `NSInteger` and their unsigned variants. However, integer values larger than ±2<sup>53</sup> will lose their precision because the JavaScript number type is limited in size to 53-bit integers.

## Struct Types

NativeScript exposes Objective-C structures as JavaScript objects. The properties on such an object are the same as the fields on the structure it exposes. APIs that expect a struct type in Objective-C can be called with a JavaScript object with the same shape as the structure:

```objc
CGRect rect = {
  .origin = {
    .x = 0,
    .y = 0
  },
  .size = {
    .width = 100,
    .height = 100
  }
};
UIView *view = [[UIView alloc] initWithFrame:rect];
```

```js
const rect = {
  origin: {
    x: 0,
    y: 0,
  },
  size: {
    width: 100,
    height: 100,
  },
}
const view = UIView.alloc().initWithFrame(rect)
```

More information on how NativeScript deals with structures is available [here](#C-Structures).

<!-- TODO: fix links -->

## `NSError **` marshalling

### Native to JavaScript

```objc
@interface NSFileManager : NSObject
+ (NSFileManager *)defaultManager;
- (NSArray *)contentsOfDirectoryAtPath:(NSString *)path error:(NSError **)error;
@end
```

We can use this method from JavaScript in the following way:

```js
const fileManager = NSFileManager.defaultManager
const bundlePath = NSBundle.mainBundle.bundlePath

console.log(fileManager.contentsOfDirectoryAtPathError(bundlePath, null))
```

If we want to check the error using out parameters:

```js
const errorRef = new interop.Reference()
fileManager.contentsOfDirectoryAtPathError('/not-existing-path', errorRef)
console.log(errorRef.value) // NSError: "The folder '/not-existing-path' doesn't exist."
```

Or we can skip passing the **last NSError \*\*** out parameter and a JavaScript error will be thrown if the `NSError **` is set from native:

```js
try {
  fileManager.contentsOfDirectoryAtPathError('/not-existing-path')
} catch (e) {
  console.log(e) // NSError: "The folder '/not-existing-path' doesn't exist."
}
```

### JavaScript to Native

When overriding a method having **NSError ** out parameter in the end** any thrown JavaScript error will be wrapped and set to the `NSError **` argument (if given).

### Pointer Types

Languages in the C family, including iOS SDK, utilize the concept of a pointer data type. Pointers are values that represent the memory location of another value. However, JavaScript, unlike C-based languages, does not have native support for pointers. To bridge this gap, NativeScript introduces the Reference object. References are special objects designed to enable JavaScript to handle and interact with pointer values. They provide a mechanism for JavaScript to reason about and access memory locations. To illustrate, consider the following example:

```objc
NSFileManager *fileManager = [NSFileManager defaultManager];
BOOL isDirectory;
BOOL exists = [fileManager fileExistsAtPath:@"/var/log" isDirectory:&isDirectory];
if (isDirectory) {
    NSLog(@"The path is actually a directory");
}
```

This code snippet invokes the Objective C `fileExistsAtPath:isDirectory:` selector method of the NSFileManager class. The method takes an NSString as its first argument and a pointer to a boolean value as its second argument. When executed, the method updates the boolean value directly using the provided pointer, allowing the `isDirectory` variable to be modified. The code can be expressed via NativeScript in the following manner:

```js
const fileManager = NSFileManager.defaultManager
const isDirectory = new interop.Reference()
const exists = fileManager.fileExistsAtPathIsDirectory('/var/log', isDirectory)
if (isDirectory.value) {
  console.log('The path is actually a directory')
}
```
