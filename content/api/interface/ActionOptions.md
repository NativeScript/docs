---
title: ActionOptions
category: Interfaces
titleTemplate: 'API - NativeScript'
breadcrumbs:
  - name: 'API Index'
    href: '/api/'
  - name: 'Interfaces'
    href: '/api/#summary-Interfaces'
  - name: 'ActionOptions'
layout: api
seo:
  description: "Provides options for the dialog."
---

<!-- This page is auto generated, do not edit manually. -->
<!-- Run "yarn generate:api-docs" to regenerate -->

<script setup lang="ts">
  import { provide } from "vue";
  import API_DATA from "./ActionOptions.data.json";
  
  provide('API_DATA', API_DATA);
</script>

<APIRefHierarchy v-once />

<pre class="not-prose [&_a]:text-blue-400 [&_a]:no-underline">interface ActionOptions extends <a href="/api/interface/CancelableOptions">CancelableOptions</a> {
  actions: string[];
  cancelButtonText: string;
  destructiveActionsIndexes: number[];
  message: string;
  title: string;
}</pre>

<APIRefComment commentBase64="eyJibG9ja1RhZ3MiOltdLCJtb2RpZmllclRhZ3MiOnt9LCJzdW1tYXJ5IjpbeyJraW5kIjoidGV4dCIsInRleHQiOiJQcm92aWRlcyBvcHRpb25zIGZvciB0aGUgZGlhbG9nLiJ9XX0=" v-once />

## <Heading ignore>Summary</Heading>

<APIRefSummary v-once />

## Properties

<div class="isOptional">

<APIRef for="13010" v-once>

<template #title>

### actions

</template>

</APIRef>

</div>

<div class="isOptional">

<APIRef for="13009" v-once>

<template #title>

### cancelButtonText

</template>

</APIRef>

</div>

<div class="isOptional">

<APIRef for="13011" v-once>

<template #title>

### destructiveActionsIndexes

</template>

</APIRef>

</div>

<div class="isOptional">

<APIRef for="13008" v-once>

<template #title>

### message

</template>

</APIRef>

</div>

<div class="isOptional">

<APIRef for="13007" v-once>

<template #title>

### title

</template>

</APIRef>

</div>
