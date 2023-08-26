---
title: Frame
titleTemplate: "API - NativeScript"
layout: api
seo:
  description: "Represents the logical View unit that is responsible for navigation within an application.\nNested frames are supported, enabling hierarchical navigation scenarios."
---

<!-- This page is auto generated, do not edit manually. -->
<!-- Run "yarn generate:api-docs" to regenerate -->

<script setup lang="ts">
  import { provide } from "vue";
  import API_DATA from "./Frame.data.json";
  
  provide('API_DATA', API_DATA);
</script>

<APIRefHierarchy v-once />

<APIRefComment commentBase64="eyJibG9ja1RhZ3MiOltdLCJtb2RpZmllclRhZ3MiOnt9LCJzdW1tYXJ5IjpbeyJraW5kIjoidGV4dCIsInRleHQiOiJSZXByZXNlbnRzIHRoZSBsb2dpY2FsIFZpZXcgdW5pdCB0aGF0IGlzIHJlc3BvbnNpYmxlIGZvciBuYXZpZ2F0aW9uIHdpdGhpbiBhbiBhcHBsaWNhdGlvbi5cbk5lc3RlZCBmcmFtZXMgYXJlIHN1cHBvcnRlZCwgZW5hYmxpbmcgaGllcmFyY2hpY2FsIG5hdmlnYXRpb24gc2NlbmFyaW9zLiJ9XX0=" v-once />

## <Heading ignore>Summary</Heading>

<APIRefSummary v-once />

## Constructors

<div class="">

<APIRef for="10265" v-once>

<template #title>

### constructor

</template>

</APIRef>

</div>

## Properties

<div class="isPrivate">

<APIRef for="10299" v-once>

<template #title>

### _animationInProgress

</template>

</APIRef>

</div>

<div class="isPrivate">

<APIRef for="10300" v-once>

<template #title>

### _currentEntry

</template>

</APIRef>

</div>

<div class="isPrivate">

<APIRef for="10301" v-once>

<template #title>

### _executingContext

</template>

</APIRef>

</div>

<div class="isPublic">

<APIRef for="10281" v-once>

<template #title>

### actionBarVisibility

</template>

</APIRef>

</div>

<div class="">

<APIRef for="10287" v-once>

<template #title>

### android

</template>

</APIRef>

</div>

<div class="">

<APIRef for="10285" v-once>

<template #title>

### animated

</template>

</APIRef>

</div>

<div class="">

<APIRef for="10282" v-once>

<template #title>

### backStack

</template>

</APIRef>

</div>

<div class="">

<APIRef for="10284" v-once>

<template #title>

### currentEntry

</template>

</APIRef>

</div>

<div class="">

<APIRef for="10283" v-once>

<template #title>

### currentPage

</template>

</APIRef>

</div>

<div class="">

<APIRef for="10288" v-once>

<template #title>

### ios

</template>

</APIRef>

</div>

<div class="isPrivate">

<APIRef for="10298" v-once>

<template #title>

### navigationBarHeight

</template>

</APIRef>

</div>

<div class="">

<APIRef for="10286" v-once>

<template #title>

### transition

</template>

</APIRef>

</div>

<div class="isStatic">

<APIRef for="10195" v-once>

<template #title>

### defaultAnimatedNavigation

</template>

</APIRef>

</div>

<div class="isStatic">

<APIRef for="10196" v-once>

<template #title>

### defaultTransition

</template>

</APIRef>

</div>

## Methods

<div class="isPrivate">

<APIRef for="10321" v-once>

<template #title>

### _findEntryForTag

</template>

</APIRef>

</div>

<div class="isPrivate">

<APIRef for="10305" v-once>

<template #title>

### _getIsAnimatedNavigation

</template>

</APIRef>

</div>

<div class="isPrivate">

<APIRef for="10318" v-once>

<template #title>

### _getNavBarVisible

</template>

</APIRef>

</div>

<div class="isPrivate">

<APIRef for="10308" v-once>

<template #title>

### _getNavigationTransition

</template>

</APIRef>

</div>

<div class="isPrivate">

<APIRef for="10302" v-once>

<template #title>

### _processNavigationQueue

</template>

</APIRef>

</div>

<div class="isPrivate">

<APIRef for="10328" v-once>

<template #title>

### _pushInFrameStack

</template>

</APIRef>

</div>

<div class="isPrivate">

<APIRef for="10330" v-once>

<template #title>

### _pushInFrameStackRecursive

</template>

</APIRef>

</div>

<div class="isPrivate">

<APIRef for="10332" v-once>

<template #title>

### _removeFromFrameStack

</template>

</APIRef>

</div>

<div class="isPrivate">

<APIRef for="10311" v-once>

<template #title>

### _updateActionBar

</template>

</APIRef>

</div>

<div class="isPrivate">

<APIRef for="10324" v-once>

<template #title>

### _updateBackstack

</template>

</APIRef>

</div>

<div class="">

<APIRef for="10270" v-once>

<template #title>

### canGoBack

</template>

</APIRef>

</div>

<div class="">

<APIRef for="10267" v-once>

<template #title>

### goBack

</template>

</APIRef>

</div>

<div class="isPrivate">

<APIRef for="10289" v-once>

<template #title>

### isCurrent

</template>

</APIRef>

</div>

<div class="">

<APIRef for="10272" v-once>

<template #title>

### navigate

</template>

</APIRef>

</div>

<div class="isPrivate">

<APIRef for="10296" v-once>

<template #title>

### navigationQueueIsEmpty

</template>

</APIRef>

</div>

<div class="">

<APIRef for="10334" v-once>

<template #title>

### on

</template>

</APIRef>

</div>

<div class="isPrivate">

<APIRef for="10315" v-once>

<template #title>

### performNavigation

</template>

</APIRef>

</div>

<div class="isPrivate">

<APIRef for="10292" v-once>

<template #title>

### setCurrent

</template>

</APIRef>

</div>

<div class="isPrivate isStatic">

<APIRef for="10193" v-once>

<template #title>

### _stack

</template>

</APIRef>

</div>

<div class="isStatic">

<APIRef for="10183" v-once>

<template #title>

### getFrameById

</template>

</APIRef>

</div>

<div class="isStatic">

<APIRef for="10188" v-once>

<template #title>

### goBack

</template>

</APIRef>

</div>

<div class="isPrivate isStatic">

<APIRef for="10190" v-once>

<template #title>

### reloadPage

</template>

</APIRef>

</div>

<div class="isStatic">

<APIRef for="10186" v-once>

<template #title>

### topmost

</template>

</APIRef>

</div>
