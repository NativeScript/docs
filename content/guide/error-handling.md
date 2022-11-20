---
title: Error handling in NativeScript
---

### Error handling

You handle errors in NativeScript differently to how you do in a web application. By default, when an unhandled exception is thrown in NativeScript, the app will crash, and an error with the corresponding stack trace will be shown. When the app is in **development** mode this may be the desired behaviour. However, when the app is in **production** similar application crashes can seriously hurt your application credibility and drive away customers. In many cases, you might prefer something else (e.g. app freeze, blank screen, failed navigation) to an actual crash with an error log.

NativeScript allows you to set error handling dependent on whether the app is in **development** or **production** mode in the following 3 ways:

- **development mode**
**Allow app crash**: Throw exceptions as soon as an error occurs and crash the app.

```ts
const errorHandler: TraceErrorHandler = {
  handlerError(err) {
    
    throw err

  }
}
```
- **development mode** 

**Prevent app crash**: Write the error message to the console and continue the execution of the app. 

```ts
const errorHandler: TraceErrorHandler = {
  handlerError(err) {
    
  Trace.write(err, 'unhandled-error', type.error)
    
  }
}
```
- **production mode**

**Prevent app crash**: Send an error report to your analytics/error-report server but continue app execution.

```ts
const errorHandler: TraceErrorHandler = {
  handlerError(err) {
  
   reportToAnalytics(err)
  }
}
```
For more details about the `TraceErrorHandler`, see the [Tracing in NativeScript](/guide/nativescript-core/tracing) page.

### Disabling rethrowing of uncaught JS exceptions to native

Nativescript also allows you to prevent app crash by disabling rethrowing of uncaught JS exceptions to native. You do that by setting the `discardUncaughtJsExceptions` property to `true` inside the [nativescript.config.ts](/project-structure/nativescript-config-ts)file.

<!--tab: app/nativescript.config.ts -->

```ts
ios: {
...
    "discardUncaughtJsExceptions": true,
  
},
android: {
...
    "discardUncaughtJsExceptions": true,
  
},
```
To handle discarded exceptions, you have 2 options:
- Listening to the `Application.discardedErrorEvent` and using the received `DiscardedErrorEventData` instance

```ts
import { Application, DiscardedErrorEventData } from '@nativescript/core'

Application.on(Application.discardedErrorEvent, function (args: DiscardedErrorEventData) {
  const error = args.error

  console.log('Received discarded exception: ')
  console.log(error.message)
  console.log(error.name)
  console.log(error.stack)
  console.log(error.nativeError)
  //report the exception in your analytics solution here
})
```

- Assigning a one-argument function to `global.__onDiscardedError` which will receive the exception as a `NativeScriptError` instance.


