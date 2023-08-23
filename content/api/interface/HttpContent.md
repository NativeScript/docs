---
title: HttpContent
category: Interfaces
titleTemplate: 'API - NativeScript'
breadcrumbs:
  - name: 'API Index'
    href: '/api/'
  - name: 'Interfaces'
    href: '/api/#summary-Interfaces'
  - name: 'HttpContent'
layout: api
seo:
  description: "Encapsulates the content of an HttpResponse."
---

<!-- This page is auto generated, do not edit manually. -->
<!-- Run "yarn generate:api-docs" to regenerate -->

<script setup lang="ts">
  import { provide } from "vue";
  import API_DATA from "./HttpContent.data.json";
  
  provide('API_DATA', API_DATA);
</script>

<APIRefHierarchy v-once />

<pre class="not-prose [&_a]:text-blue-400 [&_a]:no-underline">interface HttpContent {
  raw: any;
  toArrayBuffer: () => ArrayBuffer;
  toFile: (destinationFilePath?: string) => <a href="/api/class/File">File</a>;
  toImage: () => Promise&lt;<a href="/api/class/ImageSource">ImageSource</a>&gt;;
  toJSON: (encoding?: <a href="/api/enum/HttpResponseEncoding">HttpResponseEncoding</a>) => any;
  toString: (encoding?: <a href="/api/enum/HttpResponseEncoding">HttpResponseEncoding</a>) => string;
}</pre>

<APIRefComment commentBase64="eyJibG9ja1RhZ3MiOltdLCJtb2RpZmllclRhZ3MiOnt9LCJzdW1tYXJ5IjpbeyJraW5kIjoidGV4dCIsInRleHQiOiJFbmNhcHN1bGF0ZXMgdGhlIGNvbnRlbnQgb2YgYW4gSHR0cFJlc3BvbnNlLiJ9XX0=" v-once />

## <Heading ignore>Summary</Heading>

<APIRefSummary v-once />

## Properties

<div class="">

<APIRef for="2000" v-once>

<template #title>

### raw

</template>

</APIRef>

</div>

<div class="">

<APIRef for="2001" v-once>

<template #title>

### toArrayBuffer

</template>

</APIRef>

</div>

<div class="">

<APIRef for="2015" v-once>

<template #title>

### toFile

</template>

</APIRef>

</div>

<div class="">

<APIRef for="2012" v-once>

<template #title>

### toImage

</template>

</APIRef>

</div>

<div class="">

<APIRef for="2008" v-once>

<template #title>

### toJSON

</template>

</APIRef>

</div>

<div class="">

<APIRef for="2004" v-once>

<template #title>

### toString

</template>

</APIRef>

</div>
