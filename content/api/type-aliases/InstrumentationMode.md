---
title: InstrumentationMode
titleTemplate: :title - API / NativeScript
description: Profiling mode to use. - `counters` Accumulates method call counts and times until dumpProfiles is called and then prints aggregated statistic in the console...
contributors: false
---

```ts
type InstrumentationMode = "counters" | "timeline" | "lifecycle";
```

Defined in: profiling/index.d.ts:17

Profiling mode to use.
 - `counters` Accumulates method call counts and times until dumpProfiles is called and then prints aggregated statistic in the console. This is the default.
 - `timeline` Outputs method names along start/end timestamps in the console on the go.
 - `lifecycle` Outputs basic non-verbose times for startup, navigation, etc.
