---
title: iOS Runtime Types
---

NativeScript provides the `interop` module for working with native C types, pointers, pointer arithmetic and memory.


<!-- TODO: Add examples -->

## Using interop

### Creating a pointer

The `Pointer` type allows you to represent a void*.

#### Using the constructor

To create a new pointer with the given offset, use the constructor:

```ts
   const interop1 = new interop.Pointer(34)
```

#### Creating a pointer by adding an offset from an existing pointer

 ```ts
const interop2 = interop1.add(4)
 ```

#### Creating a pointer by removing an offeset to an existing pointer

 ```ts
const interop3 = interop1.subtract(3)
 ```

## interop API

### Pointer.toNumber()

```ts

pointerInstance.toNumber()

```

Converts the value of a `Pointer` instance to a number.

---

### adopt

```ts

interop.adopt(ptr: Pointer): AdoptedPointer

```

Makes the specified pointer adopted.

---

### free

```ts

interop.free(ptr: Pointer): void

```

Releases the memory of the specified unadopted pointer.

---

### sizeof

```ts

interop.sizeof(type: any): number

```
Returns the size of the provided type. The `type` can be: a class constructor (of Objective-C interface), an instance (wrapper of Objective-C interface), struct constructor, struct instance, reference, protocol, function (for c function), fundamental types

---

### alloc

```ts

interop.alloc(size: number): AdoptedPointer

```

Allocates memory `size` in bytes.

---

### handleof

```ts

interop.handleof(instance: any): Pointer

```

From a JavaScript object gets a pointer to the backing native object. The `instance` can be a class constructor (of Objective-C interface), an instance (wrapper of Objective-C interface), struct instance, reference, protocol, function (for c function) or block.

---

### bufferFromData

```ts

interop.bufferFromData(data: NSData): ArrayBuffer

```

Wraps an NSData instance in an ArrayBuffer.

---


### new Reference(value)

Creates a new reference around a JavaScript `value`. The native representation of the type will be determined the first time the Reference is used in operation involving marshalling.

---

### new Reference(type: Type\<T\>, data: Pointer)

Creates a reference from to the pointer with a given type.

---

### new Reference(type: Type\<T\>, value: any)

Creates a new reference around a `value` of a certain `type`.

---

### new FunctionReference(func: T)

Creates a function reference that can be marshalled as a native function pointer. The JavaScript reference must be held alive as long as the native code needs the function.

### interop types


- "void": Type\<void\>
- bool: Type\<boolean\>
- int8: Type\<number\>
- uint8: Type\<number\>
- int16: Type\<number\>
- uint16: Type\<number\>
- int32: Type\<number\>
- uint32: Type\<number\>
- int64: Type\<number\>
- uint64: Type\<number\>
- float: Type\<number\>
- double: Type\<number\>

- UTF8CString: Type\<Reference\<number\>\>
- unichar: Type\<string\>

- id: Type\<any\>
- protocol: Type\<any\>
- "class": Type\<any\>
- selector: Type\<string\>

----

### new StructType()

Create a new instance of the struct.

---

### new StructType (obj: T)

Create a new instance of the struct and initialize it from the fields of the provided object.

---

### equals
```ts
someStructTypeIntastance.equals(left: T, right: T): boolean

```

Checks two structs for equality.

---

### new NSErrorWrapper (error: NSError)
<!-- TODO: Add description -->