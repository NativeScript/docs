---
title: AndroidActivityCallbacks
category: Interfaces
titleTemplate: 'API - NativeScript'
breadcrumbs:
  - name: 'API Index'
    href: '/api/'
  - name: 'Interfaces'
    href: '/api/#summary-Interfaces'
  - name: 'AndroidActivityCallbacks'
layout: api
seo:
  description: AndroidActivityCallbacks
---

<!-- This page is auto generated, do not edit manually. -->
<!-- Run "yarn generate:api-docs" to regenerate -->

<script setup lang="ts">
  import { provide } from "vue";
  import API_DATA from "./AndroidActivityCallbacks.data.json";
  
  provide('API_DATA', API_DATA);
</script>

<APIRefHierarchy v-once />

<pre class="not-prose [&_a]:text-blue-400 [&_a]:no-underline">interface AndroidActivityCallbacks {
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

<APIRef for="13922" v-once>

<template #title>

### getRootView

</template>

</APIRef>

</div>

<div class="">

<APIRef for="13965" v-once>

<template #title>

### onActivityResult

</template>

</APIRef>

</div>

<div class="">

<APIRef for="13954" v-once>

<template #title>

### onBackPressed

</template>

</APIRef>

</div>

<div class="">

<APIRef for="13927" v-once>

<template #title>

### onCreate

</template>

</APIRef>

</div>

<div class="">

<APIRef for="13950" v-once>

<template #title>

### onDestroy

</template>

</APIRef>

</div>

<div class="">

<APIRef for="13972" v-once>

<template #title>

### onNewIntent

</template>

</APIRef>

</div>

<div class="">

<APIRef for="13946" v-once>

<template #title>

### onPostResume

</template>

</APIRef>

</div>

<div class="">

<APIRef for="13958" v-once>

<template #title>

### onRequestPermissionsResult

</template>

</APIRef>

</div>

<div class="">

<APIRef for="13933" v-once>

<template #title>

### onSaveInstanceState

</template>

</APIRef>

</div>

<div class="">

<APIRef for="13938" v-once>

<template #title>

### onStart

</template>

</APIRef>

</div>

<div class="">

<APIRef for="13942" v-once>

<template #title>

### onStop

</template>

</APIRef>

</div>

<div class="">

<APIRef for="13924" v-once>

<template #title>

### resetActivityContent

</template>

</APIRef>

</div>
