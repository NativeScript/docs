---
title: LaunchEventData
category: Interfaces
titleTemplate: 'API - NativeScript'
breadcrumbs: 
  - name: 'API Index'
    href: '/api/'
  - name: 'Interfaces'
    href: '/api/#summary-Interfaces'
  - name: 'LaunchEventData'
layout: api
seo:
  description: "Event data containing information for launch event."
---

<!-- This page is auto generated, do not edit manually. -->
<!-- Run "yarn generate:api-docs" to regenerate -->

<script setup lang="ts">
  import { provide } from "vue";
  import API_DATA from "./LaunchEventData.data.json";
  
  provide('API_DATA', API_DATA);
</script>

<APIRefHierarchy v-once />

<pre class="not-prose [&_a]:text-blue-400 [&_a]:no-underline">interface LaunchEventData extends <a href="/api/interface/EventData">EventData</a> {
  android: Intent;
  ios: any;
  root: <a href="/api/class/View">View</a>;
  savedInstanceState: any;
}</pre>

<APIRefComment commentBase64="eyJibG9ja1RhZ3MiOltdLCJtb2RpZmllclRhZ3MiOnt9LCJzdW1tYXJ5IjpbeyJraW5kIjoidGV4dCIsInRleHQiOiJFdmVudCBkYXRhIGNvbnRhaW5pbmcgaW5mb3JtYXRpb24gZm9yIGxhdW5jaCBldmVudC4ifV19" v-once />

## <Heading ignore>Summary</Heading>

<APIRefSummary v-once />

## Properties

<div class="isOptional">

<APIRef for="4685" v-once>

<template #title>

### android

</template>

</APIRef>

</div>

<div class="isOptional">

<APIRef for="4686" v-once>

<template #title>

### ios

</template>

</APIRef>

</div>

<div class="isOptional">

<APIRef for="4683" v-once>

<template #title>

### root

</template>

</APIRef>

</div>

<div class="isOptional">

<APIRef for="4684" v-once>

<template #title>

### savedInstanceState

</template>

</APIRef>

</div>
