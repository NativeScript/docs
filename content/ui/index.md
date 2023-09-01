---
title: UI Components
description: NativeScript ships with commonly used UI components, these are the foundational building blocks. Additional UI components can be created or installed via plugins.
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

## Layout Containers {#layout-containers}

<ul>
  <li v-for="item in category('Layout Containers')">
    <a :href="item.link">{{ item.text }}</a>
  </li>
</ul>

## Navigation Components {#navigation-components}

<ul>
  <li v-for="item in category('Navigation Components')">
    <a :href="item.link">{{ item.text }}</a>
  </li>
</ul>

## Components {#components}

<ul>
  <li v-for="item in category('Components')">
    <a :href="item.link">{{ item.text }}</a>
  </li>
</ul>
