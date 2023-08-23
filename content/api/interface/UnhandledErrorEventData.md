---
title: UnhandledErrorEventData
category: Interfaces
titleTemplate: 'API - NativeScript'
breadcrumbs: 
  - name: 'API Index'
    href: '/api/'
  - name: 'Interfaces'
    href: '/api/#summary-Interfaces'
  - name: 'UnhandledErrorEventData'
layout: api
seo:
  description: "Event data containing information about unhandled application errors."
---

<!-- This page is auto generated, do not edit manually. -->
<!-- Run "yarn generate:api-docs" to regenerate -->

<script setup lang="ts">
  import { provide } from "vue";
  import API_DATA from "./UnhandledErrorEventData.data.json";
  
  provide('API_DATA', API_DATA);
</script>

<APIRefHierarchy v-once />

<pre class="not-prose [&_a]:text-blue-400 [&_a]:no-underline">interface UnhandledErrorEventData extends <a href="/api/interface/ApplicationEventData">ApplicationEventData</a> {
  android: <a href="/api/interface/NativeScriptError">NativeScriptError</a>;
  error: <a href="/api/interface/NativeScriptError">NativeScriptError</a>;
  ios: <a href="/api/interface/NativeScriptError">NativeScriptError</a>;
}</pre>

<APIRefComment commentBase64="eyJibG9ja1RhZ3MiOltdLCJtb2RpZmllclRhZ3MiOnt9LCJzdW1tYXJ5IjpbeyJraW5kIjoidGV4dCIsInRleHQiOiJFdmVudCBkYXRhIGNvbnRhaW5pbmcgaW5mb3JtYXRpb24gYWJvdXQgdW5oYW5kbGVkIGFwcGxpY2F0aW9uIGVycm9ycy4ifV19" v-once />

## <Heading ignore>Summary</Heading>

<APIRefSummary v-once />

## Properties

<div class="isOptional">

<APIRef for="4709" v-once>

<template #title>

### android

</template>

</APIRef>

</div>

<div class="">

<APIRef for="4710" v-once>

<template #title>

### error

</template>

</APIRef>

</div>

<div class="isOptional">

<APIRef for="4708" v-once>

<template #title>

### ios

</template>

</APIRef>

</div>
