---
title: FPS Meter
---

This module allows you capture the frames-per-second metrics of your application.

## Using FPS Meter

### Measuring the fps

To use the module, first register a callback that will receive the FPS metrics using the [addCallBack](#addcallback) method. Then, call the [start](#start) method to start measuring the fps.

```ts
import {
  removeCallback,
  start,
  stop,
  addCallback,
  running
} from '@nativescript/core/fps-meter'

let callbackId: number;

export function startFPSMeter(args: EventData) {

  callbackId = addCallback((fps: number, minFps: number | undefined) => {

    console.log(`Frames per seconds: ${fps.toFixed(2)}`)

    console.log(minFps?.toFixed(2))
  })
  
  start()
  console.log('Is running: ', running())
}
```

### Stop measuring fps

To stop measuring the fps, remove the registered callback using its id and then call the module's [stop](#stop) method.

```ts
export function stopFPSMeter(args: EventData) {

  removeCallback(callbackId)

  stop()
}
```

## FPS Meter API

### addCallback

```ts
const callbackId = addCallback(callback: (fps: number, minFps?: number) => void): number
```

Adds a callback function to be called each time FPS data is ready. The a unique `number` id which can be used to remove this callback later.

---

### start

```ts
start()
```

Starts the frames-per-second meter.

---

### stop

```ts
stop()
```

Stops the frames-per-second meter.

---
### removeCallback

```ts
removeCallback(callbackId)
```

Removes the callback with the specified id.

---

### running

```ts
running()
```

Returns a boolean value indicating whether the frames-per-second meter is currently running.

---

## Additional Resources

### Native Component

- Android: [android.view.Choreographer]()
- iOS: [CADisplayLink](https://developer.apple.com/documentation/quartzcore/cadisplaylink)