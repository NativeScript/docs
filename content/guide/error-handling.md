---
title: Error handling
---

Errors in NativeScript are handled differently to how they operate in a web app. By default when an unhandled exception is thrown in NativeScript, the app may crash, and an error with the corresponding stack trace will be shown. When the app is in **development** mode this may be the desired behaviour. However, when the app is in **production** an app crash can seriously hurt an app's credibility and drive away customers. In many cases, you'll want different error handling behavior between development and production (e.g. app freeze, blank screen, failed navigation).

NativeScript allows error handling to be set dependent on whether the app is in **Development** or **Production** mode in the following three ways:

## Development Mode

**Allow app crash**: Throw exceptions as soon as an error occurs and crash the app.

```ts
const errorHandler: TraceErrorHandler = {

  handlerError(err) {
    throw err
  }
}
```

**Prevent app crash**: Write the error message to the console and continue the execution of the app. 

```ts
const errorHandler: TraceErrorHandler = {

  handlerError(err) {
    Trace.write(err, 'unhandled-error', type.error)
  }
}
```

## Production Mode

**Prevent app crash**: For example, send an error report to an analytics server but continue app execution.

```ts
const errorHandler: TraceErrorHandler = {

  handlerError(err) {
    reportToAnalytics(err)
  }
}
```

For more details about the `TraceErrorHandler`, see the [Tracing in NativeScript](/guide/nativescript-core/tracing) page.

## Disabling rethrowing of uncaught JS exceptions to native

Nativescript also allows the prevention of an app crash by disabling rethrowing of uncaught JS exceptions to native. This can be done by setting the `discardUncaughtJsExceptions` property to `true` inside the [nativescript.config.ts](/project-structure/nativescript-config-ts)file.

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

To handle discarded exceptions, two options are available:

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
  // for example, report the exception to an analytics solution here
})
```

- Assigning a one-argument function to `global.__onDiscardedError` which will receive the exception as a `NativeScriptError` instance.


