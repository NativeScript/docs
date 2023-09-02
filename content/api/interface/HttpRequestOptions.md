---
title: HttpRequestOptions
category: Interfaces
titleTemplate: 'API - NativeScript'
breadcrumbs:
  - name: 'API Index'
    href: '/api/'
  - name: 'Interfaces'
    href: '/api/#summary-Interfaces'
  - name: 'HttpRequestOptions'
layout: api
seo:
  description: "Provides options for the http requests."
---

<!-- This page is auto generated, do not edit manually. -->
<!-- Run "yarn generate:api-docs" to regenerate -->

<script setup lang="ts">
  import { provide } from "vue";
  import API_DATA from "./HttpRequestOptions.data.json";
  
  provide('API_DATA', API_DATA);
</script>

<APIRefHierarchy v-once />

<pre class="not-prose [&_a]:text-blue-400 [&_a]:no-underline"><code><span class="line"><span style="color: #F97583">interface</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">HttpRequestOptions</span><span style="color: #E1E4E8"> {</span></span>
<span class="line"><span style="color: #E1E4E8">  </span><span style="color: #FFAB70">content</span><span style="color: #F97583">:</span><span style="color: #E1E4E8"> </span><span style="color: #79B8FF">string</span><span style="color: #E1E4E8"> </span><span style="color: #F97583">|</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">FormData</span><span style="color: #E1E4E8"> </span><span style="color: #F97583">|</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">ArrayBuffer</span><span style="color: #E1E4E8">;</span></span>
<span class="line"><span style="color: #E1E4E8">  </span><span style="color: #FFAB70">dontFollowRedirects</span><span style="color: #F97583">:</span><span style="color: #E1E4E8"> </span><span style="color: #79B8FF">boolean</span><span style="color: #E1E4E8">;</span></span>
<span class="line"><span style="color: #E1E4E8">  </span><span style="color: #FFAB70">headers</span><span style="color: #F97583">:</span><span style="color: #E1E4E8"> </span><span style="color: #79B8FF">any</span><span style="color: #E1E4E8">;</span></span>
<span class="line"><span style="color: #E1E4E8">  </span><span style="color: #FFAB70">method</span><span style="color: #F97583">:</span><span style="color: #E1E4E8"> </span><span style="color: #79B8FF">string</span><span style="color: #E1E4E8">;</span></span>
<span class="line"><span style="color: #E1E4E8">  </span><span style="color: #FFAB70">timeout</span><span style="color: #F97583">:</span><span style="color: #E1E4E8"> </span><span style="color: #79B8FF">number</span><span style="color: #E1E4E8">;</span></span>
<span class="line"><span style="color: #E1E4E8">  </span><span style="color: #FFAB70">url</span><span style="color: #F97583">:</span><span style="color: #E1E4E8"> </span><span style="color: #79B8FF">string</span><span style="color: #E1E4E8">;</span></span>
<span class="line"><span style="color: #E1E4E8">}</span></span></code></pre>

<APIRefComment commentBase64="eyJibG9ja1RhZ3MiOltdLCJtb2RpZmllclRhZ3MiOnt9LCJzdW1tYXJ5IjpbeyJraW5kIjoidGV4dCIsInRleHQiOiJQcm92aWRlcyBvcHRpb25zIGZvciB0aGUgaHR0cCByZXF1ZXN0cy4ifV19" v-once />

## <Heading ignore>Summary</Heading>

<APIRefSummary v-once />

## Properties

<div class="isOptional">

<APIRef for="1985" v-once>

<template #title>

### content

</template>

</APIRef>

</div>

<div class="isOptional">

<APIRef for="1987" v-once>

<template #title>

### dontFollowRedirects

</template>

</APIRef>

</div>

<div class="isOptional">

<APIRef for="1984" v-once>

<template #title>

### headers

</template>

</APIRef>

</div>

<div class="">

<APIRef for="1983" v-once>

<template #title>

### method

</template>

</APIRef>

</div>

<div class="isOptional">

<APIRef for="1986" v-once>

<template #title>

### timeout

</template>

</APIRef>

</div>

<div class="">

<APIRef for="1982" v-once>

<template #title>

### url

</template>

</APIRef>

</div>
