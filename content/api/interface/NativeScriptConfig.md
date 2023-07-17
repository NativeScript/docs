---
title: NativeScriptConfig
titleTemplate: "API - NativeScript"
layout: api
seo:
  description: undefined
---

<!-- This page is auto generated, do not edit manually. -->
<!-- Run "yarn generate:api-docs" to regenerate -->

<script setup lang="ts">
  import { provide } from "vue";
  import API_DATA from "./NativeScriptConfig.data.json";
  
  provide('API_DATA', API_DATA);
</script>

<APIRefHierarchy v-once />

<pre class="[&_a]:text-green-400">interface NativeScriptConfig {
  android: IConfigAndroid;
  appPath: string;
  appResourcesPath: string;
  cli: IConfigCLI;
  cssParser: "rework" | "nativescript" | "css-tree";
  hooks: IConfigHook[];
  id: string;
  ignoredNativeDependencies: string[];
  ios: IConfigIOS;
  main: string;
  overridePods: string;
  previewAppSchema: string;
  profiling: <a href="/api/index#instrumentationmode">InstrumentationMode</a>;
  shared: boolean;
  webpackConfigPath: string;
}</pre>

## <Heading ignore>Summary</Heading>

<APIRefSummary v-once />

## Properties

<div class="isOptional">

<APIRef for="831" v-once>

<template #title>

### android

</template>

</APIRef>

</div>

<div class="isOptional">

<APIRef for="824" v-once>

<template #title>

### appPath

</template>

</APIRef>

</div>

<div class="isOptional">

<APIRef for="825" v-once>

<template #title>

### appResourcesPath

</template>

</APIRef>

</div>

<div class="isOptional">

<APIRef for="835" v-once>

<template #title>

### cli

</template>

</APIRef>

</div>

<div class="isOptional">

<APIRef for="833" v-once>

<template #title>

### cssParser

</template>

</APIRef>

</div>

<div class="isOptional">

<APIRef for="836" v-once>

<template #title>

### hooks

</template>

</APIRef>

</div>

<div class="isOptional">

<APIRef for="822" v-once>

<template #title>

### id

</template>

</APIRef>

</div>

<div class="isOptional">

<APIRef for="834" v-once>

<template #title>

### ignoredNativeDependencies

</template>

</APIRef>

</div>

<div class="isOptional">

<APIRef for="830" v-once>

<template #title>

### ios

</template>

</APIRef>

</div>

<div class="isOptional">

<APIRef for="823" v-once>

<template #title>

### main

</template>

</APIRef>

</div>

<div class="isOptional">

<APIRef for="828" v-once>

<template #title>

### overridePods

</template>

</APIRef>

</div>

<div class="isOptional">

<APIRef for="827" v-once>

<template #title>

### previewAppSchema

</template>

</APIRef>

</div>

<div class="isOptional">

<APIRef for="832" v-once>

<template #title>

### profiling

</template>

</APIRef>

</div>

<div class="isOptional">

<APIRef for="826" v-once>

<template #title>

### shared

</template>

</APIRef>

</div>

<div class="isOptional">

<APIRef for="829" v-once>

<template #title>

### webpackConfigPath

</template>

</APIRef>

</div>
