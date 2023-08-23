---
title: NativeScriptError
category: Interfaces
titleTemplate: 'API - NativeScript'
breadcrumbs: 
  - name: 'API Index'
    href: '/api/'
  - name: 'Interfaces'
    href: '/api/#summary-Interfaces'
  - name: 'NativeScriptError'
layout: api
seo:
  description: "An extended JavaScript Error which will have the nativeError property initialized in case the error is caused by executing platform-specific code."
---

<!-- This page is auto generated, do not edit manually. -->
<!-- Run "yarn generate:api-docs" to regenerate -->

<script setup lang="ts">
  import { provide } from "vue";
  import API_DATA from "./NativeScriptError.data.json";
  
  provide('API_DATA', API_DATA);
</script>

<APIRefHierarchy v-once />

<pre class="not-prose [&_a]:text-blue-400 [&_a]:no-underline">interface NativeScriptError extends Error {
  nativeException: any;
  stack: string;
  stackTrace: string;
}</pre>

<APIRefComment commentBase64="eyJibG9ja1RhZ3MiOltdLCJtb2RpZmllclRhZ3MiOnt9LCJzdW1tYXJ5IjpbeyJraW5kIjoidGV4dCIsInRleHQiOiJBbiBleHRlbmRlZCBKYXZhU2NyaXB0IEVycm9yIHdoaWNoIHdpbGwgaGF2ZSB0aGUgbmF0aXZlRXJyb3IgcHJvcGVydHkgaW5pdGlhbGl6ZWQgaW4gY2FzZSB0aGUgZXJyb3IgaXMgY2F1c2VkIGJ5IGV4ZWN1dGluZyBwbGF0Zm9ybS1zcGVjaWZpYyBjb2RlLiJ9XX0=" v-once />

## <Heading ignore>Summary</Heading>

<APIRefSummary v-once />

## Properties

<div class="isOptional">

<APIRef for="4672" v-once>

<template #title>

### nativeException

</template>

</APIRef>

</div>

<div class="isOptional">

<APIRef for="4674" v-once>

<template #title>

### stack

</template>

</APIRef>

</div>

<div class="isOptional">

<APIRef for="4673" v-once>

<template #title>

### stackTrace

</template>

</APIRef>

</div>
