---
title: Tracing
---

The Trace class is a useful alternative to console logging that provides the following benefits:

- control the [categories of messages](#addcategories-and-setcategories) that you log to the console
- [disable](#disable) multiple messages logging at once
- define customised [error handling](/guide/error-handling)

## Using Trace

The following steps outline the basic usage of the Trace class. Steps 1 and 2 should be executed earlier in your application, usually in the [app.ts](/project-structure/src/main-js-ts) file.

1. Specify one or more categories to trace as a comma-separated list:

   ```ts
   // Use a single category only.
   Trace.setCategories('category')
   // Or, add multiple categories.
   Trace.addCategories('categ1, categ2')
   // Or, combine the default Trace categories with your own additional categories.
   Trace.setCategories(Trace.categories.concat('category1', 'category2'))
   ```

   When writing a trace message, if you don't set a category, or if the category you pass to `Trace.write()` has not been previously added using the above commands, the message will not be written.

2. Enable tracing in your app:

   ```ts
   Trace.enable()
   ```

3. Instead of using `console.log()` in your application to log messages, you may now use `Trace.write()` to log your messages. Pass the message content, a registered category name, and optionally, a message type as arguments to `Trace.write()`.

   ```ts
   // Add a trace message
   Trace.write('This is a simple message', 'category')
   // Add a trace message with a given message type
   Trace.write('This is an error message', 'category2'.Trace.messageType.error)
   ```

4. When your app is in production, you can now simply disable tracing and all `Trace.write()` calls will be ignored.

   ```ts
   if (!__DEV__) {
     Trace.disable()
   }
   ```

### Creating a custom Trace writer

By default, Trace messages are written to the console log, similar to using `console.log()`. By writing a custom Trace writer, you can control the output of the console log, or route messages to another system.

A Trace writer instance must specify a `write` method that accepts three arguments - a message, a category and, optionally, a message type.

```ts
const TimestampTraceWriter: TraceWriter = {
  write(message, category, type) {
    const now = new Date()
    const timestamp = now.toTimeString().substr(0, 8)

    switch (type) {
      case Trace.messageType.error:
        console.log(`${timestamp} [${category}] (error) ${message}`)
        return
      case Trace.messageType.warn:
        console.log(`${timestamp} [${category}] (warn) ${message}`)
        return
      case Trace.messageType.info:
        console.log(`${timestamp} [${category}] (info) ${message}`)
        return
      default:
        console.log(`${timestamp} [${category}] ${message}`)
        return
    }
  },
}
```

<!-- TODO: Add the example in a Preview -->

#### Registering a custom Trace writer

To utilize a custom Trace writer instance, you need to register it with the Trace module by using the `Trace.addWriter()` method. This ensures that your custom writer is recognized and incorporated into the Trace functionality.

If you wish to disable the default Trace writers included in NativeScript, you should also use the `Trace.clearWriters()` method first to deregister them.

```ts
Trace.clearWriters()
Trace.addWriter(TimestampTraceWriter)
```

### Error handling

The Trace module allows to create a custom error handler. You should register your error handler in the [app.ts](/project-structure/main-js-ts) file and set it with the [Trace.setErrorHandler()](#seterrorhandler), and pass the errors to it with [Trace.error()](#error).

```ts
const errorHandler: TraceErrorHandler = {
  handlerError(err) {
    // Option 1 (development) - throw the error
    throw err

    // Option 2 (development) - logging the error via write method provided from trace module
    Trace.write(err, 'unhandled-error', type.error)

    // (production) - custom functionality for error handling
    reportToAnalytics(err)
  },
}

// Register errorHandler
Trace.setErrorHandler(errorHandler)
```

## Trace API

### addCategories and setCategories

```ts
// Only allow the defined categories
Trace.setCategories(categories: string)

// Add the defined categories to the available existing categories
Trace.addCategories(categories: string)
```

Sets or adds to the categories that the Trace module will trace. `categories` is a comma-separated list of categories as a string.

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

Writes a message using the available writers. You must specify a category that has been added to the Trace module for it to be written.

You may optionally provide a type to indicate the severity.

:::details Message types

- Trace.messageType.log = `0`
- Trace.messageType.info = `1`
- Trace.messageType.warn = `2`
- Trace.messageType.error = `3`

:::

---

## API References

| Name                                                                                  | Type     |
| ------------------------------------------------------------------------------------- | -------- |
| [@nativescript/core/trace](https://docs.nativescript.org/api-reference/modules/trace) | `Module` |
