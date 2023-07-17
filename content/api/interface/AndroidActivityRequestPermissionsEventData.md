---
title: AndroidActivityRequestPermissionsEventData
titleTemplate: "API - NativeScript"
layout: api
seo:
  description: "Data for the Android activity onRequestPermissions callback"
---

<!-- This page is auto generated, do not edit manually. -->
<!-- Run "yarn generate:api-docs" to regenerate -->

<script setup lang="ts">
  import { provide } from "vue";
  import API_DATA from "./AndroidActivityRequestPermissionsEventData.data.json";
  
  provide('API_DATA', API_DATA);
</script>

<APIRefHierarchy v-once />

<pre class="[&_a]:text-green-400">interface AndroidActivityRequestPermissionsEventData extends <a href="/api/interface/AndroidActivityEventData">AndroidActivityEventData</a> {
  grantResults: number[];
  permissions: string[];
  requestCode: number;
}</pre>

<APIRefComment commentBase64="eyJibG9ja1RhZ3MiOltdLCJtb2RpZmllclRhZ3MiOnt9LCJzdW1tYXJ5IjpbeyJraW5kIjoidGV4dCIsInRleHQiOiJEYXRhIGZvciB0aGUgQW5kcm9pZCBhY3Rpdml0eSBvblJlcXVlc3RQZXJtaXNzaW9ucyBjYWxsYmFjayJ9XX0=" v-once />

## <Heading ignore>Summary</Heading>

<APIRefSummary v-once />

## Properties

<div class="">

<APIRef for="1118" v-once>

<template #title>

### grantResults

</template>

</APIRef>

</div>

<div class="">

<APIRef for="1117" v-once>

<template #title>

### permissions

</template>

</APIRef>

</div>

<div class="">

<APIRef for="1116" v-once>

<template #title>

### requestCode

</template>

</APIRef>

</div>
