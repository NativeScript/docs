---
title: profilingEnable
titleTemplate: :title - API / NativeScript
contributors: false
---

```ts
function profilingEnable(type?: InstrumentationMode): void;
```

Defined in: profiling/index.d.ts:53

Enables profiling.

Upon loading of the module it will cache the package.json of the app and check if there is a "profiling" key set,
its value can be one of the options available for InstrumentationMode, and if set,
enable() will be called in pre app start with the value in the package.json.

An example for an `app/package.json` enabling the manual instrumentation profiling is:
```
{
    "main": "main.js",
    "profiling": "timeline"
}
```

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type?` | [`InstrumentationMode`](../type-aliases/InstrumentationMode.md) | Profiling mode to use. - "counters" - Accumulates method call counts and times until dumpProfiles is called and then prints aggregated statistic in the console. This is the default. - "timeline" - Outputs method names along start/end timestamps in the console on the go. - "lifecycle" - Outputs basic non-verbose times for startup, navigation, etc. |

## Returns

`void`
