---
title: Multithreading and Workers
description: Heavy tasks on the main thread are a no-go, luckily NativeScript can be multi-threaded!
contributors:
  - rigor789
  - ammarahm-ed
---

One of NativeScript's benefits is that it allows fast and efficient access to all native platform (Android/Objective-C) APIs through JavaScript, without using (de)serialization or reflection. JavaScript executes on the main thread (aka the UI thread). That means that operations that potentially take longer can lag the rendering of the UI and make the application lag.

To tackle issues with slowness where UI sharpness and high performance are critical, developers can use worker threads. Workers are scripts executing on a background thread in an absolutely isolated context. Tasks that could take long to execute should be offloaded to a worker thread.

The Workers API in NativeScript is loosely based on the [Web Workers API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) and the [Web Workers Specification](https://www.w3.org/TR/workers/).

For optimal results when using the Workers API, follow these guidelines:

- Always make sure you close the worker threads, using the appropriate API (`terminate()` or `close()`), when the worker's finished its job. If Worker instances become unreachable in the scope you are working in before you are able to terminate it, you will be able to close it only from inside the worker script itself by calling the `close()` function.
- Workers are not a general solution for all performance-related problems. Starting a Worker has an overhead of its own, and may sometimes be slower than just processing a quick task. Optimize DB queries, or rethink complex application logic before resorting to workers.
- Since worker threads have access to the entire native SDK, the NativeScript developer must take care of all the synchronization when calling APIs which are not guaranteed to be thread-safe from more than one thread.

## Using Workers

### Spawning a worker

Creating a new worker is simple, all you need is to call the `Worker()` constructor with a path to the worker script (relative to current file, or an aliased path eg. `~/path/to/worker.ts`). The worker itself can be written in JavaScript or TypeScript.

```ts
const myWorker = new Worker('./worker.ts')
```

### Sending messages to a worker

To send messages to the worker, use the [`postMessage()`](#postmessage) method on the [`Worker`](#constructor) instance.

```ts
// send myMessage to the worker
myWorker.postMessage(myMessage)
```

### Receiving messages from a worker

To receive messages from the worker, use the [`onmessage`](#onmessage) callback on the [`Worker`](#constructor) instance.

```ts
// attach a message handler that will receive messages from the worker thread
myWorker.onmessage = (e) => {
  console.log('Message received from the worker thread.')
  const data = e.data // data from the worker
}
```

### Sending messages to main thread

To send messages back to the main thread use the [`self.postMessage()`](#postmessage-1) method in the worker.

```ts
// send the workerResult back to the main thread
self.postMessage(workerResult)
```

### Receiving messages from main thread

To receive messages in the worker, use the [`self.onmessage`](#onmessage-1) event handler in the worker.

```ts
// attach a message handler that will receive the messages from the main thread
self.onmessage = (e) => {
  console.log('Message received from the main thread.')
  const data = e.data // data from myMessage
}
```

<!-- ### Sending messages to and from a worker

To send messages to the worker, use the `myWorker.postMessage()` method on the `Worker` instance, and to receive these inside the worker, use the `self.onmessage` event handler inside the worker.

To send messages back to the main thread use the `self.postMessage()` method, and `myWorker.onmessage` callback on the `Worker` instance.

```ts
// send myMessage to the worker
myWorker.postMessage(myMessage);

// attach a message handler that will receive messages from the worker thread
myWorker.onmessage = (e) => {
  console.log('Message received from the worker thread.');
  const data = e.data; // data from the worker
  // do something with data
};

// inside the worker script

// attach a message handler that will receive the messages from the main thread
self.onmessage = (e) => {
  console.log('Message received from the main thread.');
  const data = e.data; // data from myMessage
  const workerResult = 'Some result after processing data...';

  // send the workerResult back to the main thread
  self.postMessage(workerResult);
};
``` -->

### Terminating a worker

If you need to stop executing the worker, you can terminate it from the main thread using the `terminate` method on the `Worker` instance:

```ts
myWorker.terminate()
```

The worker thread is killed immediately.

### Handling errors

Runtime errors inside the worker are reported back to the main thread through the `onerror` callback on the `Worker` instance.

```ts
myWorker.onerror = (e) => {
  console.log(
    `Error occured in the worker thread in file ${e.filename} on line ${e.lineno}`
  )
  console.log(e.message, e.stackTrace)
}
```

The worker can also self-handle errors by setting up an `onerror` handler, which can mark the error as "handled" and prevent the callback on the main thread from being called.

```ts
self.onerror = (e) => {
  console.log('Error occured, error:', e)

  // return true-like to stop the event from being passed onto the main thread
  return true
}
```

## Workers API

### constructor

```ts
const myWorker = new Worker(path: string)
```

Creates an instance of a Worker and spawns a new OS thread, where the script pointed to by the `path` parameter is executed.

---

### postMessage

```ts
myWorker.postMessage(message)
```

Sends a JSON-serializable message to the associated script's `onmessage` event handler.

---

### terminate

```ts
myWorker.terminate()
```

Terminates the execution of the worker thread on the next run loop tick.

---

### onmessage

```ts
myWorker.onmessage = function handler(message: { data: any }) {}
```

Handles incoming messages sent from the associated worker thread. **Note** that you are responsible for creating & setting the handler function.

The `data` in the `message` object is the JSON-serializable message the worker sends with [postMessage](#postmessage-1).

---

### onerror

```ts
myWorker.onerror = function handler(error: {
  message: string // the error message
  stackTrace?: string // the stack trace if applicable
  filename: string // the file where the uncaught error was thrown
  lineno: number // the line where the uncaught error was thrown
}) {}
```

Handles uncaught errors from the worker thread. **Note** that you are responsible for creating & setting the handler function.

---

## Worker Global Scope

Each worker gets it's own global scope (so `global.foo` in the worker is not the same as `global.foo` on the main thread).

### self

```ts
self === global // true
```

Returns a reference to the `WorkerGlobalScope` itself - also available as `global`

---

### postMessage

```ts
self.postMessage(message)
```

Sends a JSON-serializable message to the Worker instance's [`onmessage`](#onmessage) event handler on the main thread.

---

### close

```ts
self.close()
```

Terminates the execution of the worker thread on the next run loop tick.

---

### onmessage

```ts
self.onmessage = function handler(message: { data: any }) {}
```

Handles incoming messages sent from the main thread.

The `data` in the `message` object is the JSON-serializable message the main thread sends with [postMessage](#postmessage).

---

### onerror

```ts
self.onerror = function handler(error: Error): boolean {
  return true
}
```

Handles uncaught errors occurring during execution of functions inside the Worker Scope (worker thread).

If the handler returns a `true`-like value, the message will not propagate to the Worker instance's `onerror` handler on the main thread.

After `onerror` is called in the worker thread, execution is not terminated and the worker is still capable of sending/receiving messages.

---

### onclose

```ts
self.onclose = function handler() {
  // do cleanup work
}
```

Handles any "clean-up" work. Suitable for freeing up resources, closing streams and sockets.

---

## Example Worker

::: warning Note
In order to use `setTimeout`, `setInterval`, or other globals coming from the `@nativescript/core`, you will need to include them in your worker script:

```ts
import '@nativescript/core/globals'
```

<!--  -->

:::

```ts
// main-view-model.js

const worker = new Worker('./workers/image-processor')

// send a message to our worker
worker.postMessage({ src: imageSource, mode: 'scale', options: options })

// handle incoming messages from the worker
worker.onmessage = function (message) {
  if (message.data.success) {
    // the src received from the worker
    const src = message.data.src

    // terminate worker or send another message...
    worker.terminate()
  } else {
    // handle unsuccessful task
  }
}

// handle worker errors
worker.onerror = function (err) {
  console.log(
    `An unhandled error occurred in worker: ${err.filename}, line: ${err.lineno} :`,
    err.message
  )
}
```

<!--  -->

```ts
// workers/image-processor.js

// load NativeScript globals in the worker thread
import '@nativescript/core/globals'

self.onmessage = function (message) {
  const src = message.data.src
  const mode = message.data.mode || 'noop'
  const options = message.data.options

  const result = processImage(src, mode, options)

  if (result) {
    // send the result back to the main thread
    self.postMessage({
      success: true,
      src: result,
    })

    return
  }

  // no result, send back an empty object for example
  self.postMessage({})
}

// example heavy function to process an image
function processImage(src, mode, options) {
  console.log(options)
  // image processing logic
  // save image, retrieve location
  // return source to processed image
  return updatedImgSrc
}
```

## Limitations

There are certain limitations to keep in mind when working with workers:

- **No JavaScript memory sharing**. This means that you can't access a JavaScript value/object from both threads. You can only serialize the object, send it to the other thread and deserialize it there. This is what postMessage() function is responsible for. However, this is not the case with native objects. You can access a native object from more than one thread, without copying it, because the runtime will create a separate JavaScript wrapper object for each thread. Keep in mind that when you are using non-thread-safe native APIs and data you have to handle the synchronization part on your own. The runtime doesn't perform any locking or synchronization logic on native data access and API calls.
- **Only JSON-serializable objects can be sent with the `postMessage()` API**.
  - You can’t send native objects. This means that you can't send native objects with postMessage, because in most of the cases JSON serializing a JavaScript wrapper of a native object results in empty object literal - "{}". On the other side this message will be deserialized to a pure empty JavaScript object. Sending native object is something we want to support in the future.
  - Be careful when sending circular objects because their recursive nodes will be stripped on the serialization step.
- **No object transferring**. If you are a web developer you may be familiar with the ArrayBuffer and MessagePort transferring support in browsers. Currently, in NativeScript there is no such concept as object transferring.
- **Debugging workers is not currently possible.**
- **No nested workers support**. We want to hear from the community if this is something we need to support.
