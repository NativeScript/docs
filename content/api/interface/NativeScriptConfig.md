---
title: NativeScriptConfig
category: Interfaces
titleTemplate: 'API - NativeScript'
breadcrumbs:
  - name: 'API Index'
    href: '/api/'
  - name: 'Interfaces'
    href: '/api/#summary-Interfaces'
  - name: 'NativeScriptConfig'
layout: api
seo:
  description: NativeScriptConfig
---

<!-- This page is auto generated, do not edit manually. -->
<!-- Run "yarn generate:api-docs" to regenerate -->

<script setup lang="ts">
  import { provide } from "vue";
  import API_DATA from "./NativeScriptConfig.data.json";
  
  provide('API_DATA', API_DATA);
</script>

<APIRefHierarchy v-once />

<pre class="not-prose [&_a]:text-blue-400 [&_a]:no-underline">interface NativeScriptConfig {
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

<APIRef for="888" v-once>

<template #title>

### android

</template>

</APIRef>

</div>

<div class="isOptional">

<APIRef for="881" v-once>

<template #title>

### appPath

</template>

</APIRef>

</div>

<div class="isOptional">

<APIRef for="882" v-once>

<template #title>

### appResourcesPath

</template>

</APIRef>

</div>

<div class="isOptional">

<APIRef for="892" v-once>

<template #title>

### cli

</template>

</APIRef>

</div>

<div class="isOptional">

<APIRef for="890" v-once>

<template #title>

### cssParser

</template>

</APIRef>

</div>

<div class="isOptional">

<APIRef for="893" v-once>

<template #title>

### hooks

</template>

</APIRef>

</div>

<div class="isOptional">

<APIRef for="879" v-once>

<template #title>

### id

</template>

</APIRef>

</div>

<div class="isOptional">

<APIRef for="891" v-once>

<template #title>

### ignoredNativeDependencies

</template>

</APIRef>

</div>

<div class="isOptional">

<APIRef for="887" v-once>

<template #title>

### ios

</template>

</APIRef>

</div>

<div class="isOptional">

<APIRef for="880" v-once>

<template #title>

### main

</template>

</APIRef>

</div>

<div class="isOptional">

<APIRef for="885" v-once>

<template #title>

### overridePods

</template>

</APIRef>

</div>

<div class="isOptional">

<APIRef for="884" v-once>

<template #title>

### previewAppSchema

</template>

</APIRef>

</div>

<div class="isOptional">

<APIRef for="889" v-once>

<template #title>

### profiling

</template>

</APIRef>

</div>

<div class="isOptional">

<APIRef for="883" v-once>

<template #title>

### shared

</template>

</APIRef>

</div>

<div class="isOptional">

<APIRef for="886" v-once>

<template #title>

### webpackConfigPath

</template>

</APIRef>

</div>
