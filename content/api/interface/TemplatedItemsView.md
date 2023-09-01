---
title: TemplatedItemsView
category: Interfaces
titleTemplate: 'API - NativeScript'
breadcrumbs:
  - name: 'API Index'
    href: '/api/'
  - name: 'Interfaces'
    href: '/api/#summary-Interfaces'
  - name: 'TemplatedItemsView'
layout: api
seo:
  description: TemplatedItemsView
---

<!-- This page is auto generated, do not edit manually. -->
<!-- Run "yarn generate:api-docs" to regenerate -->

<script setup lang="ts">
  import { provide } from "vue";
  import API_DATA from "./TemplatedItemsView.data.json";
  
  provide('API_DATA', API_DATA);
</script>

<APIRefHierarchy v-once />

<pre class="not-prose [&_a]:text-blue-400 [&_a]:no-underline">interface TemplatedItemsView {
  itemTemplate: string | <a href="/api/interface/Template">Template</a>;
  itemTemplates: string | <a href="/api/interface/KeyedTemplate">KeyedTemplate</a>[];
  items: any[] | <a href="/api/interface/ItemsSource">ItemsSource</a>;
  off(event: "itemLoading", callback: (args: <a href="/api/interface/EventData">EventData</a>) => void, thisArg?: any): void;
  on(event: "itemLoading", callback: (args: <a href="/api/interface/ItemEventData">ItemEventData</a>) => void, thisArg?: any): void;
  refresh(): void;
}</pre>

## <Heading ignore>Summary</Heading>

<APIRefSummary v-once />

## Properties

<div class="">

<APIRef for="18091" v-once>

<template #title>

### itemTemplate

</template>

</APIRef>

</div>

<div class="isOptional">

<APIRef for="18092" v-once>

<template #title>

### itemTemplates

</template>

</APIRef>

</div>

<div class="">

<APIRef for="18090" v-once>

<template #title>

### items

</template>

</APIRef>

</div>

## Methods

<div class="">

<APIRef for="18103" v-once>

<template #title>

### off

</template>

</APIRef>

</div>

<div class="">

<APIRef for="18095" v-once>

<template #title>

### on

</template>

</APIRef>

</div>

<div class="">

<APIRef for="18093" v-once>

<template #title>

### refresh

</template>

</APIRef>

</div>
