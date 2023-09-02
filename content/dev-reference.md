---
title: '[DEV] Reference'
contributors:
  - rigor789
---

This page serves as a reference for the available markdown options in the docs.

## Diagrams

### Android Runtime Overview

<img class="w-full" src="./assets/diagrams/Android_Runtime_Overview.drawio.svg"/>

### iOS Runtime Overview

<img class="w-full" src="./assets/diagrams/iOS_Runtime_Overview.drawio.svg"/>

### Frame and Page Lifecycle

<img class="w-full" src="./assets/diagrams/Frame_Page_Lifecycle.drawio.svg"/>

### View Origin

<img src="./assets/diagrams/View_Origin.drawio.svg"/>

### StackLayout (exploration)

<DeviceFrame type="ios">
<img src="./assets/diagrams/StackLayout.drawio.svg"/>
</DeviceFrame>

## Videos

### View Origin Demo

<script setup lang="ts">
import { ref } from "vue";

const demos = [
  '0_0', '0.5_0', '1_0',
  '0_0.5', '0.5_0.5', '1_0.5',
  '0_1', '0.5_1', '1_1',
]

const current = ref('0_0')
</script>

<div class="mb-4 flex">
<div class="grid grid-cols-3 gap-4">
<template v-for="demo in demos">
  <button class="border px-4" @click.prevent="current = demo">{{ demo.replace('_', ' / ') }}</button>
</template>
</div>
</div>

<DeviceFrame type="ios">
<template v-for="demo in demos">
<video v-show="demo === current" 
v-bind="demo === current ? { autoplay: true} : {}"
muted="true" disablepictureinpicture="true"  loop="true" :src="`./assets/videos/ios/animation_origin__${demo}.mp4`"/>
</template>
</DeviceFrame>
<DeviceFrame type="android">
<template v-for="demo in demos">
<video v-show="demo === current" 
v-bind="demo === current ? { autoplay: true} : {}"
muted="true" disablepictureinpicture="true" loop="true" :src="`./assets/videos/android/animation_origin__${demo}.mp4`"/>
</template>
</DeviceFrame>

## Frontmatter

The top of the markdown file contains a section surrounded by `---` this part is called the frontmatter, and it is used to set a few things on a page. For example:

```md
---
title: Some title
---

<!-- the rest of the markdown -->
```

Available options:

```md
---
title: controls the h1 page title and the title in the browser tab bar
description: the page description, shown below the title and set in the description meta tags
category: the name/text of the page category, show in the breadcrumbs and above the title
categoryLink: the link where the custom category should link to
prev: the URL where the `Previous` button at the bottom should link to
prevText: the text to show in the `Previous` button. By default the text is looked up in the sidebar.
next: the URL where the `Next` button at the bottom should link to
nextText: the text to show in the `Next` button. By default the text is looked up in the sidebar.
contributors: false # to disable the contributors list in the right sidebar
contributors:
 - GitHubUsername1
 - GitHubUsername2
---

<!-- the rest of the markdown -->
```

## Images/Assets handling

Images and assets should be placed in the `content/assets` folder. Generally in a directory named the same as the page.

For example, if we have a page at `/setup/windows` the assets for this page would go in `assets/images/setup/windows/`.

This is not a hard-limitation, and can be switched up when necessary.

### Referencing images in Markdown

To show the images in markdown, use the standard markdown image markup `![title](path)` where the path is relative to the markdown file itself.

For example:

```md
<!-- content/setup/windows.md -->

![some image](../assets/images/setup/windows/<some_image>.png)
```

<!-- <Tabs>
<Tab name="Vue">

SOMETHING SOMETHING

```ts
asd
```

</Tab>

</Tabs> -->

## StepList

To notate steps from a screenshot, or steps in general, you can wrap any list with the `<StepList>` component to style the list.

**Example**:

```md
<StepList>

1. This is a test step list, that should render the bullets on the left in a red circle
2. This is the second step
3. Then there's the **third** step
4. And a **fourth**
5. It can go...
6. On, and on...
7. And on and on...
8. Until we run out of things to say
9. But the list should handle **double digit** step counters just fine, as well as lines that wrap to multiple lines in case we have lots of words to say about a given step, beause sometimes steps just need that extra bit of explanation to properly make sense to the reader.
10. Finally, we can see those **double digits** in action right here.

</StepList>
```

:::warning Important
Note the blank lines above and below the markdown list, this is required due to the way Markdown is parsed when combined with "html" elements.
:::

---

<StepList>

1. This is a test step list, that should render the bullets on the left in a red circle
2. This is the second step
3. Then there's the **third** step
4. And a **fourth**
5. It can go...
6. On, and on...
7. And on and on...
8. Until we run out of things to say
9. But the list should handle **double digit** step counters just fine, as well as lines that wrap to multiple lines in case we have lots of words to say about a given step, beause sometimes steps just need that extra bit of explanation to properly make sense to the reader.
10. Finally, we can see those **double digits** in action right here.

</StepList>

## DeviceFrame

To make content pretty, you can wrap it in a device frame

### iOS Frame

<DeviceFrame type="ios">
<img src="https://raw.githubusercontent.com/NativeScript/nativescript-app-templates/master/packages/template-blank/tools/assets/appTemplate-ios.png">
</DeviceFrame>

### Android Frame

<DeviceFrame type="android">
<img src="https://raw.githubusercontent.com/NativeScript/nativescript-app-templates/master/packages/template-blank/tools/assets/appTemplate-android.png">
</DeviceFrame>

### Generic Window Frame

Props:

- `title: string | false` - sets a custom window title
- `buttons: boolean` - hide window buttons

<DeviceFrame type="window" >
<video controls src="https://user-images.githubusercontent.com/879060/230395606-dbb4a56f-74e8-403b-a687-62e27a61f8d4.mov"></video>
</DeviceFrame>

---

<DeviceFrame type="window" :buttons="false" title="Hello World!">

<div class="p-4">
No Buttons & Custom Title
</div>

</DeviceFrame>
