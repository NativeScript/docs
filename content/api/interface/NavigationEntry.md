---
title: NavigationEntry
category: Interfaces
titleTemplate: 'API - NativeScript'
breadcrumbs: 
  - name: 'API Index'
    href: '/api/'
  - name: 'Interfaces'
    href: '/api/#summary-Interfaces'
  - name: 'NavigationEntry'
layout: api
seo:
  description: "Represents an entry in passed to navigate method."
---

<!-- This page is auto generated, do not edit manually. -->
<!-- Run "yarn generate:api-docs" to regenerate -->

<script setup lang="ts">
  import { provide } from "vue";
  import API_DATA from "./NavigationEntry.data.json";
  
  provide('API_DATA', API_DATA);
</script>

<APIRefHierarchy v-once />

<pre class="not-prose [&_a]:text-blue-400 [&_a]:no-underline">interface NavigationEntry extends <a href="/api/interface/ViewEntry">ViewEntry</a> {
  animated: boolean;
  backstackVisible: boolean;
  bindingContext: any;
  clearHistory: boolean;
  context: any;
  transition: <a href="/api/interface/NavigationTransition">NavigationTransition</a>;
  transitionAndroid: <a href="/api/interface/NavigationTransition">NavigationTransition</a>;
  transitioniOS: <a href="/api/interface/NavigationTransition">NavigationTransition</a>;
}</pre>

<APIRefComment commentBase64="eyJibG9ja1RhZ3MiOltdLCJtb2RpZmllclRhZ3MiOnt9LCJzdW1tYXJ5IjpbeyJraW5kIjoidGV4dCIsInRleHQiOiJSZXByZXNlbnRzIGFuIGVudHJ5IGluIHBhc3NlZCB0byBuYXZpZ2F0ZSBtZXRob2QuIn1dfQ==" v-once />

## <Heading ignore>Summary</Heading>

<APIRefSummary v-once />

## Properties

<div class="isOptional">

<APIRef for="13888" v-once>

<template #title>

### animated

</template>

</APIRef>

</div>

<div class="isOptional">

<APIRef for="13892" v-once>

<template #title>

### backstackVisible

</template>

</APIRef>

</div>

<div class="isOptional">

<APIRef for="13887" v-once>

<template #title>

### bindingContext

</template>

</APIRef>

</div>

<div class="isOptional">

<APIRef for="13893" v-once>

<template #title>

### clearHistory

</template>

</APIRef>

</div>

<div class="isOptional">

<APIRef for="13886" v-once>

<template #title>

### context

</template>

</APIRef>

</div>

<div class="isOptional">

<APIRef for="13889" v-once>

<template #title>

### transition

</template>

</APIRef>

</div>

<div class="isOptional">

<APIRef for="13891" v-once>

<template #title>

### transitionAndroid

</template>

</APIRef>

</div>

<div class="isOptional">

<APIRef for="13890" v-once>

<template #title>

### transitioniOS

</template>

</APIRef>

</div>
