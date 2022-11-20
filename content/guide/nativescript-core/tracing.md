---
title: Tracing in NativeScript
---

The Trace class allows you to:

- control the [categories of messages](#addcategories-and-setcategories) you log to the console
- [disable](#disable) multiple messages logging at once
- [handle errors](/guide/error-handling)

## Using Trace

The following 3 steps outline the basic usage of the Trace class.

The first two step should be executed earlier in your applicaton, usually in the [app.ts](/project-structure/src/main-js-ts) file.

1. Specify atleast one category to trace:

```ts
Trace.setCategories("category"))
// or
Trace.setCategories(Trace.categories.concat("category1","category2"));
//or
Trace.addCategories("categ1, categ2")
```
If you don't set any category or the category you pass to `Trace.write()` is not one of the registered, `Trace.write`'s message won't be logged.

2. Enable tracing

```ts
Trace.enable()
```

3. Call the `Trace.write()` where you would call `console.log()` passing it a message,a category name and optionally, a message type. The category should be one of those you set with `Trace.setCategories()`

```ts
Trace.write('some message', 'category')
```

### Creating custom Trace writer
For an example, see `app/trace/trace-writer.ts` in the editor below.
<!-- TODO: Add the example in a Preview -->

#### Registering custom trace writer

In order to use the custom TraceWriter instance, you have to register it with the Trace module, using the `addWriter()` method.

```ts
Trace.clearWriters();
Trace.addWriter(new TimestampConsoleWriter())
```

### Error handling

The Trace module allows to create a custom error handler, register(in the [app.ts](/project-structure/main-js-ts)) it with [setErrorHandler](#seterrorhandler), and pass the errors to it with [error](#error).

```ts
const errorHandler: TraceErrorHandler = {
  handlerError(err) {
    // Option 1 (development) - throw the error
    throw err

    // Option 2 (development) - logging the error via write method provided from trace module
    Trace.write(err, 'unhandled-error', type.error)

    // (production) - custom functionality for error handling
    reportToAnalytics(err)
  }
}

// Register errorHandler
Trace.setErrorHandler(errorHandler)

```

## Trace API

### addCategories and setCategories

```ts
Trace.addCategories(categories: string)
```

Adds categories to existing categories the module will trace.
`categories` is a comma-separated list of categories.

:::details Available categories

- Trace.categories.VisualTreeEvents = `"VisualTreeEvents"`
- Trace.categories.Layout = `"Layout"`
- Trace.categories.Style = `"Style"`
- Trace.categories.ViewHierarchy = `"ViewHierarchy"`
- Trace.categories.NativeLifecycle = `"NativeLifecycle"`
- Trace.categories.Debug = `"Debug"`
- Trace.categories.Navigation = `"Navigation"`
- Trace.categories.Test = `"Test"`
- Trace.categories.Binding = `"Binding"`
- Trace.categories.BindingError = `"BindingError"`
- Trace.categories.Error = `"Error"`
- Trace.categories.Animation = `"Animation"`
- Trace.categories.Transition = `"Transition"`
- Trace.categories.Livesync = `"Livesync"`
- Trace.categories.ModuleNameResolver = `"ModuleNameResolver"`
- Trace.categories.All(All of the categories above).
- Trace.categories.concat(`"cat1"`, `"cat2"`, `"cat3"`, `"cat4"`).

:::

---

### addWriter

```ts
Trace.addWriter(writer: TraceWriter)
```

Adds a TraceWriter instance to the trace module.

---

### clearWriters

```ts
Trace.clearWriters()
```

Clears all the writers from the trace module. Call this methods before adding a custom trace writer to avoid pre-registered writers from interfering with it.

---

### disable

If you've placed several `console.log`s in your code for debugging, you might want to comment them out before you send the app to production. That may mean tediously having to locate each `console.log`. By calling once `Trace.disable()`, you disable all the `Trace.write()`calls in your code.

```ts
Trace.disable()

```

Disables the tracing.

---

### enable

```ts
Trace.enable()

```

Enables the tracing.

---

### error

```ts
Trace.error(error: string | Error)
```

Passes an error to the registered TraceErrorHandler.

---

### getErrorHandler

```ts
Trace.getErrorHandler()
```

Gets the registered `TraceErrorHandler`.  

---

### setErrorHandler

```ts
Trace.setErrorHandler(handler: TraceErrorHandler)
```

Registers an error handler.

---

### isCategorySet

```ts
Trace.isCategorySet(category: string)
```

Check if a category is already set in trace module.

---

### isEnabled()

```ts
Trace.isEnabled()
```

Returns a `boolean` for whether tracing is enabled or not.

---

### notifyEvent

```ts
Trace.notifyEvent(object: Object, name: string, data?: any)
```

Notifies all the attached listeners for an event that has occurred in the sender object.

---

### removeWriter

```ts
Trace.removeWriter(writer: TraceWriter)
```

Removes a `TraceWriter` instance from the trace module.

---

### write

```ts
Trace.write(message: any, category: string, type?: number)
```

Writes a message using the available writers.

:::details Message types

- `log = 0`
- `info = 1`
- `warn = 2`
- `error = 3`

:::

---


## API References

| Name                                                                                  | Type     |
| ------------------------------------------------------------------------------------- | -------- |
| [@nativescript/core/trace](https://docs.nativescript.org/api-reference/modules/trace) | `Module` |

