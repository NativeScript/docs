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

<pre class="not-prose [&_a]:text-blue-400 [&_a]:no-underline"><code><span class="line"><span style="color: #F97583">interface</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">SharedTransitionConfig</span><span style="color: #E1E4E8"> {</span></span>
<span class="line"><span style="color: #E1E4E8">  </span><span style="color: #FFAB70">interactive</span><span style="color: #F97583">:</span><span style="color: #E1E4E8"> {};</span></span>
<span class="line"><span style="color: #E1E4E8">  </span><span style="color: #FFAB70">pageEnd</span><span style="color: #F97583">:</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">SharedTransitionPageWithDurationProperties</span><span style="color: #E1E4E8">;</span></span>
<span class="line"><span style="color: #E1E4E8">  </span><span style="color: #FFAB70">pageReturn</span><span style="color: #F97583">:</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">SharedRect</span><span style="color: #E1E4E8"> </span><span style="color: #F97583">&amp;</span><span style="color: #E1E4E8"> {</span></span>
<span class="line"><span style="color: #E1E4E8">  </span><span style="color: #FFAB70">opacity</span><span style="color: #F97583">?:</span><span style="color: #E1E4E8"> </span><span style="color: #79B8FF">number</span></span>
<span class="line"><span style="color: #E1E4E8">} </span><span style="color: #F97583">&amp;</span><span style="color: #E1E4E8"> {</span></span>
<span class="line"><span style="color: #E1E4E8">  </span><span style="color: #FFAB70">sharedTransitionTags</span><span style="color: #F97583">?:</span><span style="color: #E1E4E8"> {}</span></span>
<span class="line"><span style="color: #E1E4E8">} </span><span style="color: #F97583">&amp;</span><span style="color: #E1E4E8"> {} </span><span style="color: #F97583">&amp;</span><span style="color: #E1E4E8"> {};</span></span>
<span class="line"><span style="color: #E1E4E8">  </span><span style="color: #FFAB70">pageStart</span><span style="color: #F97583">:</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">SharedTransitionPageProperties</span><span style="color: #E1E4E8">;</span></span>
<span class="line"><span style="color: #E1E4E8">}</span></span></code></pre>

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
