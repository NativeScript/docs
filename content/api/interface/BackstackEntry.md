---
title: BackstackEntry
titleTemplate: "API - NativeScript"
layout: api
seo:
  description: "Represents an entry in the back stack of a Frame object."
---

<!-- This page is auto generated, do not edit manually. -->
<!-- Run "yarn generate:api-docs" to regenerate -->

<script setup lang="ts">
  import { provide } from "vue";
  import API_DATA from "./BackstackEntry.data.json";
  
  provide('API_DATA', API_DATA);
</script>

<APIRefHierarchy v-once />

<pre class="[&_a]:text-green-400">interface BackstackEntry {
  entry: <a href="/api/interface/NavigationEntry">NavigationEntry</a>;
  fragment: any;
  fragmentTag: string;
  frameId: number;
  navDepth: number;
  recreated: boolean;
  resolvedPage: <a href="/api/class/Page">Page</a>;
  viewSavedState: any;
}</pre>

<APIRefComment commentBase64="eyJibG9ja1RhZ3MiOltdLCJtb2RpZmllclRhZ3MiOnt9LCJzdW1tYXJ5IjpbeyJraW5kIjoidGV4dCIsInRleHQiOiJSZXByZXNlbnRzIGFuIGVudHJ5IGluIHRoZSBiYWNrIHN0YWNrIG9mIGEgRnJhbWUgb2JqZWN0LiJ9XX0=" v-once />

## <Heading ignore>Summary</Heading>

<APIRefSummary v-once />

## Properties

<div class="">

<APIRef for="10994" v-once>

<template #title>

### entry

</template>

</APIRef>

</div>

<div class="isPrivate isOptional">

<APIRef for="10998" v-once>

<template #title>

### fragment

</template>

</APIRef>

</div>

<div class="isPrivate">

<APIRef for="10997" v-once>

<template #title>

### fragmentTag

</template>

</APIRef>

</div>

<div class="isPrivate isOptional">

<APIRef for="11000" v-once>

<template #title>

### frameId

</template>

</APIRef>

</div>

<div class="isPrivate">

<APIRef for="10996" v-once>

<template #title>

### navDepth

</template>

</APIRef>

</div>

<div class="isPrivate isOptional">

<APIRef for="11001" v-once>

<template #title>

### recreated

</template>

</APIRef>

</div>

<div class="">

<APIRef for="10995" v-once>

<template #title>

### resolvedPage

</template>

</APIRef>

</div>

<div class="isPrivate isOptional">

<APIRef for="10999" v-once>

<template #title>

### viewSavedState

</template>

</APIRef>

</div>
