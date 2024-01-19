---
title: Plugins
description: NativeScript core functionality can be extended via plugins.
contributors: false
prev: false
next: false
breadcrumbs:
  - name: 'Plugins'
    href: '/plugins/'
---

<script setup lang="ts">
  import uiSidebar from "./sidebar";

  function category(name: string) {
    console.log("test")
    return uiSidebar[0].items.find(i => i.text === name).items
  }
</script>

## @nativescript/\* plugins

Many plugins offered by NativeScript's Technical Steering Committee (TSC) are listed in the sidebar/sub navigation to help with your developments. For example, everything from [biometrics](./biometrics), [camera](./camera) handling, [contacts](./contacts) management, [Firebase](./firebase-core) integration, [Google Maps](./google-maps), to payment management using [Apple Pay](./apple-pay), [Google Pay](./google-pay), or [IAP and Subscription handling](./payments) and many more can be found here.

## Developing your own plugins

If you are interested in building your own plugins, we recommend following our [Getting Started with Plugin Workspaces](./plugin-workspace-guide) guide which uses our [plugin workspace seed](https://github.com/NativeScript/plugin-seed) (_the exact same setup the TSC uses to develop it's own plugins_) as a starting point because it provides the following:

- consistent plugin source structure
- ability to scale and add additional plugins through automated tooling
- reduces configuration files to provide easy maintainence
- provides shareable structure for ease of demoing your plugins
- ability to focus your workspace down to a single plugin in an instant if you ever need to isolate development when working within a multi-plugin workspace
- provides automated migrations managed by the TSC to keep your plugin workspaces up-to-date without manual hassles

You may also find these resources helpful:

- [Introducing plugin workspaces to simplify and streamline maintenance](https://blog.nativescript.org/announcing-plugin-workspaces)
- [Migrate your plugin workspace in 2 seconds - NativeScript 8 + webpack5 + configuration updates](https://blog.nativescript.org/plugin-workspace-migrate-to-v2)

### Creating NativeScript Plugins and Enhancing Behavior

- [Part 1: How to create a NativeScript plugin that uses native iOS & Android views - Label Marquee!](https://blog.nativescript.org/create-a-custom-view-plugin-marquee-label)
- [Part 2: How to create a NativeScript plugin that uses native iOS & Android views - more native platform APIs - Shimmer!](https://blog.nativescript.org/create-a-custom-view-plugin-shimmer)
- [Part 3: Should this be a plugin or part of core? 💥 Holy Interactivity Batman!](https://blog.nativescript.org/create-a-custom-view-plugin-touch-effects)
