---
title: DownloadRequest
category: Interfaces
titleTemplate: 'API - NativeScript'
breadcrumbs: 
  - name: 'API Index'
    href: '/api/'
  - name: 'Interfaces'
    href: '/api/#summary-Interfaces'
  - name: 'DownloadRequest'
layout: api
seo:
  description: "Represents a single download request."
---

<!-- This page is auto generated, do not edit manually. -->
<!-- Run "yarn generate:api-docs" to regenerate -->

<script setup lang="ts">
  import { provide } from "vue";
  import API_DATA from "./DownloadRequest.data.json";
  
  provide('API_DATA', API_DATA);
</script>

<APIRefHierarchy v-once />

<pre class="not-prose [&_a]:text-blue-400 [&_a]:no-underline">interface DownloadRequest {
  completed: (image: any, key: string) => void;
  error: (key: string) => void;
  key: string;
  url: string;
}</pre>

<APIRefComment commentBase64="eyJibG9ja1RhZ3MiOltdLCJtb2RpZmllclRhZ3MiOnt9LCJzdW1tYXJ5IjpbeyJraW5kIjoidGV4dCIsInRleHQiOiJSZXByZXNlbnRzIGEgc2luZ2xlIGRvd25sb2FkIHJlcXVlc3QuIn1dfQ==" v-once />

## <Heading ignore>Summary</Heading>

<APIRefSummary v-once />

## Properties

<div class="isOptional">

<APIRef for="15801" v-once>

<template #title>

### completed

</template>

</APIRef>

</div>

<div class="isOptional">

<APIRef for="15806" v-once>

<template #title>

### error

</template>

</APIRef>

</div>

<div class="">

<APIRef for="15800" v-once>

<template #title>

### key

</template>

</APIRef>

</div>

<div class="">

<APIRef for="15799" v-once>

<template #title>

### url

</template>

</APIRef>

</div>
