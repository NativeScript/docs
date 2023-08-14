---
title: TemplatedItemsView
titleTemplate: "API - NativeScript"
layout: api
seo:
  description: undefined
---

<!-- This page is auto generated, do not edit manually. -->
<!-- Run "yarn generate:api-docs" to regenerate -->

<script setup lang="ts">
  import { provide } from "vue";
  import API_DATA from "./TemplatedItemsView.data.json";
  
  provide('API_DATA', API_DATA);
</script>

<APIRefHierarchy v-once />

<pre class="[&_a]:text-green-400">interface TemplatedItemsView {
  itemTemplate: string | <a href="/api/interface/Template">Template</a>;
  itemTemplates: string | <a href="/api/interface/KeyedTemplate">KeyedTemplate</a>[];
  items: any[] | <a href="/api/interface/ItemsSource">ItemsSource</a>;
  off(event: "itemLoading", callback: (args: <a href="/api/interface/EventData">EventData</a>) => void, thisArg?: any): any;
  on(event: "itemLoading", callback: (args: <a href="/api/interface/ItemEventData">ItemEventData</a>) => void, thisArg?: any): any;
  refresh(): void;
}</pre>

## <Heading ignore>Summary</Heading>

<APIRefSummary v-once />

## Properties

<div class="">

<APIRef for="14890" v-once>

<template #title>

### itemTemplate

</template>

</APIRef>

</div>

<div class="isOptional">

<APIRef for="14891" v-once>

<template #title>

### itemTemplates

</template>

</APIRef>

</div>

<div class="">

<APIRef for="14889" v-once>

<template #title>

### items

</template>

</APIRef>

</div>

## Methods

<div class="">

<APIRef for="14902" v-once>

<template #title>

### off

</template>

</APIRef>

</div>

<div class="">

<APIRef for="14894" v-once>

<template #title>

### on

</template>

</APIRef>

</div>

<div class="">

<APIRef for="14892" v-once>

<template #title>

### refresh

</template>

</APIRef>

</div>
