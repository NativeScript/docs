---
title: FPS Meter
---

FPS Meter allows you capture the frames-per-second metrics of your application.

## Using FPS Meter

### Measuring FPS

Register a callback that will receive the FPS metrics using the [addCallBack](#addcallback) method. Then call the [start](#start) method to begin measuring.

```ts
import {
  removeCallback,
  start,
  stop,
  addCallback,
  running,
} from '@nativescript/core/fps-meter'

let callbackId: number

export function startFPSMeter(args: EventData) {
  callbackId = addCallback((fps: number, minFps: number | undefined) => {
    console.log(`Frames per seconds: ${fps.toFixed(2)}`)
    console.log(minFps?.toFixed(2))
  })

  start()
  console.log('Is running: ', running())
}
```

### Stop measuring FPS

Remove the registered callback using its id and then call the [stop](#stop) method.

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

Implement a callback function that will be executed whenever FPS data becomes available. Assign a unique identifier (`number`) to this callback, facilitating its future removal, if needed.

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
