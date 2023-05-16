---
title: ApplicationSettings
description: Persist data locally on the device storage
---

The `ApplicationSettings` class allows you to store and retrieve data from the device local storage. ApplicationSettings provides setters and getters for storing and retrieving different data types. Use the appropriate setter to avoid errors.

## How to use the ApplicationSettings class

<!-- https://stackblitz.com/edit/nativescript-stackblitz-templates-5ns4cv?file=app/main-view-model.ts -->

### Store a string value

To store a string value, use the [setString](#setstring)  method:

```ts
ApplicationSettings.setString("username", "Wolfgang");
```
:::tip :green_circle: Tip
You can use this method with the `JSON.stringify()`(as shown in the `saveObjectAsString` method in the StackBlitz demo app at the link above) to store an object or an array as a string. Then, use `JSON.parse()` to convert the result of [getString()](#getstring) back to the object or array.
:::

### Store a boolean value

To store a boolean value, call the [setBoolean](#setboolean) method passing the key as the first argument and the value as second argument.

```ts
ApplicationSettings.setBoolean("isTurnedOn", true);
```

### Store a numeric value

To store a number, use the [setNumber()](#setnumber) method:

```ts
ApplicationSettings.setNumber("locationX", 54.321);
```

## ApplicationSettings API

### setString()

```ts
ApplicationSettings.setString(key: string, value: string)
```

Stores a string value for the specified key.

---

### getString()

```ts
ApplicationSettings.getString(key: string, deafaultValue?: string)
```

Gets a value (if existing) for a key as a `String` object. A default value can be provided in case there is no existing value.

---

### setNumber()

```ts
ApplicationSettings.setNumber(key: string, value: number)
```

Sets a `Number` object for a key.

---

### getNumber()

```ts
ApplicationSettings.getNumber(key: string, deafaultValue?: number)
```

Gets a value (if existing) for a key as a `Number` object. A default value can be provided in case the value does not exist.

---

### setBoolean()

```ts
ApplicationSettings.setBoolean(key: string, value: boolean)
```

Sets a `boolean` for a key.

---

### getBoolean()

```ts
ApplicationSettings.getBoolean(key: string, deafaultValue?: boolean)
```

Gets a value (if existing) for a key as a `boolean`.  A default value can be provided in case the value does not exist.value.

---

### remove()

```ts
ApplicationSettings.remove(key: string)
```

Removes the key and its value from the device storage.

---

### clear()

```ts
ApplicationSettings.clear()
```

Removes all values from the device storage.

---

### getAllKeys()

```ts
ApplicationSettings.getAllKeys(): Array<string>
```
Returns an array of all stored keys or an empty array if no keys exist in the device storage.

---


## API Reference(s)
- [@nativescript/core/application-settings](https://docs.nativescript.org/api-reference/modules#applicationsettings) module

## Native Component
- `Android`: [SharedPreferences](https://developer.android.com/reference/android/content/SharedPreferences)
- `iOS`: [NSUserDefaults](https://developer.apple.com/documentation/foundation/nsuserdefaults)
