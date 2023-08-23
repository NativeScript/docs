---
title: SharedTransitionConfig
category: Interfaces
titleTemplate: 'API - NativeScript'
breadcrumbs: 
  - name: 'API Index'
    href: '/api/'
  - name: 'Interfaces'
    href: '/api/#summary-Interfaces'
  - name: 'SharedTransitionConfig'
layout: api
seo:
  description: SharedTransitionConfig
---

<!-- This page is auto generated, do not edit manually. -->
<!-- Run "yarn generate:api-docs" to regenerate -->

<script setup lang="ts">
  import { provide } from "vue";
  import API_DATA from "./SharedTransitionConfig.data.json";
  
  provide('API_DATA', API_DATA);
</script>

<APIRefHierarchy v-once />

<pre class="not-prose [&_a]:text-blue-400 [&_a]:no-underline">interface SharedTransitionConfig {
  interactive: {};
  pageEnd: SharedTransitionPageWithDurationProperties;
  pageReturn: SharedRect & {
  opacity?: number
} & {
  sharedTransitionTags?: {}
} & {} & {};
  pageStart: SharedTransitionPageProperties;
}</pre>

## <Heading ignore>Summary</Heading>

<APIRefSummary v-once />

## Properties

<div class="isOptional">

<APIRef for="32738" v-once>

<template #title>

### interactive

</template>

</APIRef>

</div>

<div class="isOptional">

<APIRef for="32742" v-once>

<template #title>

### pageEnd

</template>

</APIRef>

</div>

<div class="isOptional">

<APIRef for="32743" v-once>

<template #title>

### pageReturn

</template>

</APIRef>

</div>

<div class="isOptional">

<APIRef for="32741" v-once>

<template #title>

### pageStart

</template>

</APIRef>

</div>
