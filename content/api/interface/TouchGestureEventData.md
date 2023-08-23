---
title: TouchGestureEventData
category: Interfaces
titleTemplate: 'API - NativeScript'
breadcrumbs:
  - name: 'API Index'
    href: '/api/'
  - name: 'Interfaces'
    href: '/api/#summary-Interfaces'
  - name: 'TouchGestureEventData'
layout: api
seo:
  description: "Provides gesture event data."
---

<!-- This page is auto generated, do not edit manually. -->
<!-- Run "yarn generate:api-docs" to regenerate -->

<script setup lang="ts">
  import { provide } from "vue";
  import API_DATA from "./TouchGestureEventData.data.json";
  
  provide('API_DATA', API_DATA);
</script>

<APIRefHierarchy v-once />

<pre class="not-prose [&_a]:text-blue-400 [&_a]:no-underline">interface TouchGestureEventData extends <a href="/api/interface/TapGestureEventData">TapGestureEventData</a> {
  action: "up" | "move" | "down" | "cancel";
  getActivePointers(): Pointer[];
  getAllPointers(): Pointer[];
}</pre>

<APIRefComment commentBase64="eyJibG9ja1RhZ3MiOltdLCJtb2RpZmllclRhZ3MiOnt9LCJzdW1tYXJ5IjpbeyJraW5kIjoidGV4dCIsInRleHQiOiJQcm92aWRlcyBnZXN0dXJlIGV2ZW50IGRhdGEuIn1dfQ==" v-once />

## <Heading ignore>Summary</Heading>

<APIRefSummary v-once />

## Properties

<div class="">

<APIRef for="14120" v-once>

<template #title>

### action

</template>

</APIRef>

</div>

## Methods

<div class="">

<APIRef for="14121" v-once>

<template #title>

### getActivePointers

</template>

</APIRef>

</div>

<div class="">

<APIRef for="14123" v-once>

<template #title>

### getAllPointers

</template>

</APIRef>

</div>
