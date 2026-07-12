---
title: Trace
titleTemplate: :title - API / NativeScript
contributors: false
---

## Namespaces

| Namespace | Description |
| ------ | ------ |
| [categories](namespaces/categories/index.md) | all predefined categories. |
| [messageType](namespaces/messageType/index.md) | - |

## Classes

| Class | Description |
| ------ | ------ |
| [ConsoleWriter](classes/ConsoleWriter.md) | An interface used to define a writer used by trace to print (log). |
| [DefaultErrorHandler](classes/DefaultErrorHandler.md) | An interface used to for handling trace error |

## Functions

| Function | Description |
| ------ | ------ |
| [addCategories](functions/addCategories.md) | Adds categories to existing categories the module will trace. |
| [addEventListener](functions/addEventListener.md) | - |
| [addWriter](functions/addWriter.md) | Adds a TraceWriter instance to the trace module. |
| [clearWriters](functions/clearWriters.md) | Clears all the writers from the trace module. |
| [disable](functions/disable.md) | Disables the trace module. |
| [enable](functions/enable.md) | Enables the trace module. |
| [error](functions/error.md) | Passes an error to the registered ErrorHandler |
| [getErrorHandler](functions/getErrorHandler.md) | - |
| [isCategorySet](functions/isCategorySet.md) | Check if category is already set in trace module. |
| [isEnabled](functions/isEnabled.md) | A function that returns whether the tracer is enabled and there is a point in writing messages. Check this to avoid writing complex string templates. Send error messages even if tracing is disabled. |
| [notifyEvent](functions/notifyEvent.md) | Notifies all the attached listeners for an event that has occurred in the sender object. |
| [removeEventListener](functions/removeEventListener.md) | - |
| [removeWriter](functions/removeWriter.md) | Removes a TraceWriter instance from the trace module. |
| [setCategories](functions/setCategories.md) | Sets the categories the module will trace. |
| [setErrorHandler](functions/setErrorHandler.md) | - |
| [write](functions/write.md) | Writes a message using the available writers. |
