---
title: '[DEV] Reference'
contributors:
  - rigor789
---

This page serves as a reference for the available markdown options in the docs.

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
