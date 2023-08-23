---
title: AndroidActivityResultEventData
category: Interfaces
titleTemplate: 'API - NativeScript'
breadcrumbs: 
  - name: 'API Index'
    href: '/api/'
  - name: 'Interfaces'
    href: '/api/#summary-Interfaces'
  - name: 'AndroidActivityResultEventData'
layout: api
seo:
  description: "Data for the Android activity result event."
---

<!-- This page is auto generated, do not edit manually. -->
<!-- Run "yarn generate:api-docs" to regenerate -->

<script setup lang="ts">
  import { provide } from "vue";
  import API_DATA from "./AndroidActivityResultEventData.data.json";
  
  provide('API_DATA', API_DATA);
</script>

<APIRefHierarchy v-once />

<pre class="not-prose [&_a]:text-blue-400 [&_a]:no-underline">interface AndroidActivityResultEventData extends <a href="/api/interface/AndroidActivityEventData">AndroidActivityEventData</a> {
  intent: Intent;
  requestCode: number;
  resultCode: number;
}</pre>

<APIRefComment commentBase64="eyJibG9ja1RhZ3MiOltdLCJtb2RpZmllclRhZ3MiOnt9LCJzdW1tYXJ5IjpbeyJraW5kIjoidGV4dCIsInRleHQiOiJEYXRhIGZvciB0aGUgQW5kcm9pZCBhY3Rpdml0eSByZXN1bHQgZXZlbnQuIn1dfQ==" v-once />

## <Heading ignore>Summary</Heading>

<APIRefSummary v-once />

## Properties

<div class="">

<APIRef for="4745" v-once>

<template #title>

### intent

</template>

</APIRef>

</div>

<div class="">

<APIRef for="4743" v-once>

<template #title>

### requestCode

</template>

</APIRef>

</div>

<div class="">

<APIRef for="4744" v-once>

<template #title>

### resultCode

</template>

</APIRef>

</div>
