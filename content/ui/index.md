---
title: UI Components
contributors: false
---

<script setup lang="ts">
  import uiSidebar from "./sidebar";
  function categoryId(category: any) {
    const url = new URL(category.link, 'https://example.com/')
    return url.hash.slice(1);
  }
</script>

## Layout Containers {#layout-containers}

<ul>
  <li v-for="item in uiSidebar.find(i => i.text === 'Layout Containers').items">
    <a :href="item.link">{{ item.text }}</a>
  </li>
</ul>

## Navigation Components {#navigation-components}

<ul>
  <li v-for="item in uiSidebar.find(i => i.text === 'Navigation Components').items">
    <a :href="item.link">{{ item.text }}</a>
  </li>
</ul>

## Components {#components}

<ul>
  <li v-for="item in uiSidebar.find(i => i.text === 'Components').items">
    <a :href="item.link">{{ item.text }}</a>
  </li>
</ul>
