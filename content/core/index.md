---
title: Core Reference
description: Commonly used features in @nativescript/core
contributors: false
prev: false
next: false
---

<script setup lang="ts">
  import uiSidebar from "./sidebar";

  function category(name: string) {
    return uiSidebar[0].items.find(i => i.text === name).items
  }
</script>

## @nativescript/core {#nativescript-core}

<ul>
  <li v-for="item in category('@nativescript/core')">
    <a :href="item.link">{{ item.text }}</a>
  </li>
</ul>

See also [API Reference](/api/).