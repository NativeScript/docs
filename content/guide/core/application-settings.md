---
title: ApplicationSettings
description: Persist data on the device
---

The `ApplicationSettings` class allows you to store and retrieve data on the device.
<!-- TODO: Add Preview -->
## Using ApplicationSettings

ApplicationSettings provides setters(and getters) for different data types. Use the appropriate setter, otherwise an error will be thrown.

### Storing a string value

To store a string value, use the [setString()](#setstring)  method:

```ts
    ApplicationSettings.setString("username", "Wolfgang");
```

You can use this method with the `JSON.stringify()` to store an object or an array as a string and then use `JSON.parse()` to convert the result of [getString()](#getstring) back to the object or array.


### Storing a boolean value

To store a boolean value, use the [setBoolean()](#setboolean) method:

```ts
    ApplicationSettings.setBoolean("isTurnedOn", true);
```

### Storing a numeric value

To store a number, use the [setNumber()](#setnumber) method:

```ts
    ApplicationSettings.setNumber("locationX", 54.321);
```


## ApplicationSettings API

### setString

```ts
ApplicationSettings.setString(key: string, value: string)

```

Stores a string value for the specified key.

---

### getString

```ts

ApplicationSettings.getString(key: string, deafaultValue?: string)

```

Gets a value (if existing) for a key as a `String` object. A default value can be provided in case there is no existing value.

---

### setNumber

```ts
ApplicationSettings.setNumber(key: string, value: number)
```

Sets a `Number` object for a key.

---

### getNumber

```ts
ApplicationSettings.getNumber(key: string, deafaultValue?: number)
```

Gets a value (if existing) for a key as a `Number` object. A default value can be provided in case the value does not exist.

---

### setBoolean

```ts
ApplicationSettings.setBoolean(key: string, value: boolean)
```

Sets a `boolean` for a key.

---

### getBoolean

```ts
ApplicationSettings.getBoolean(key: string, deafaultValue?: boolean)
```

Gets a value (if existing) for a key as a `boolean`.  A default value can be provided in case the value does not exist.value.

---

### remove

```ts
ApplicationSettings.remove(key: string)
```

Removes the key and its value from the device storage.

---

### clear

```ts
ApplicationSettings.clear()
```

Removes all values from the device storage.

---

### getAllKeys

```ts
ApplicationSettings.getAllKeys(): Array<string>
```
Returns an array of all stored keys or an empty array if no keys exist in the device storage.

---

:::details References

## API References

| Name                                                                                                               | Type     |
| ------------------------------------------------------------------------------------------------------------------ | -------- |
| [@nativescript/core/application-settings](https://docs.nativescript.org/api-reference/modules#applicationsettings) | `Module` |

## Native Component

| Android                                                                                        | iOS                                                                                   |
| :--------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------ |
| [SharedPreferences](https://developer.android.com/reference/android/content/SharedPreferences) | [NSUserDefaults](https://developer.apple.com/documentation/foundation/nsuserdefaults) |

:::