---
title: AndroidActivityCallbacks
titleTemplate: "API - NativeScript"
layout: api
seo:
  description: undefined
---

<!-- This page is auto generated, do not edit manually. -->
<!-- Run "yarn generate:api-docs" to regenerate -->

<script setup lang="ts">
  import { provide } from "vue";
  import API_DATA from "./AndroidActivityCallbacks.data.json";
  
  provide('API_DATA', API_DATA);
</script>

<APIRefHierarchy v-once />

<pre class="[&_a]:text-green-400">interface AndroidActivityCallbacks {
  getRootView(): <a href="/api/class/View">View</a>;
  onActivityResult(
  activity: any,
  requestCode: number,
  resultCode: number,
  data: any,
  superFunc: Function
): any;
  onBackPressed(activity: any, superFunc: Function): void;
  onCreate(
  activity: any,
  savedInstanceState: any,
  intent: any,
  superFunc: Function
): void;
  onDestroy(activity: any, superFunc: Function): void;
  onNewIntent(
  activity: any,
  intent: any,
  superSetIntentFunc: Function,
  superFunc: Function
): void;
  onPostResume(activity: any, superFunc: Function): void;
  onRequestPermissionsResult(
  activity: any,
  requestCode: number,
  permissions: string[],
  grantResults: number[],
  superFunc: Function
): void;
  onSaveInstanceState(activity: any, outState: any, superFunc: Function): void;
  onStart(activity: any, superFunc: Function): void;
  onStop(activity: any, superFunc: Function): void;
  resetActivityContent(activity: any): void;
}</pre>

## <Heading ignore>Summary</Heading>

<APIRefSummary v-once />

## Methods

<div class="">

<APIRef for="11008" v-once>

<template #title>

### getRootView

</template>

</APIRef>

</div>

<div class="">

<APIRef for="11051" v-once>

<template #title>

### onActivityResult

</template>

</APIRef>

</div>

<div class="">

<APIRef for="11040" v-once>

<template #title>

### onBackPressed

</template>

</APIRef>

</div>

<div class="">

<APIRef for="11013" v-once>

<template #title>

### onCreate

</template>

</APIRef>

</div>

<div class="">

<APIRef for="11036" v-once>

<template #title>

### onDestroy

</template>

</APIRef>

</div>

<div class="">

<APIRef for="11058" v-once>

<template #title>

### onNewIntent

</template>

</APIRef>

</div>

<div class="">

<APIRef for="11032" v-once>

<template #title>

### onPostResume

</template>

</APIRef>

</div>

<div class="">

<APIRef for="11044" v-once>

<template #title>

### onRequestPermissionsResult

</template>

</APIRef>

</div>

<div class="">

<APIRef for="11019" v-once>

<template #title>

### onSaveInstanceState

</template>

</APIRef>

</div>

<div class="">

<APIRef for="11024" v-once>

<template #title>

### onStart

</template>

</APIRef>

</div>

<div class="">

<APIRef for="11028" v-once>

<template #title>

### onStop

</template>

</APIRef>

</div>

<div class="">

<APIRef for="11010" v-once>

<template #title>

### resetActivityContent

</template>

</APIRef>

</div>
