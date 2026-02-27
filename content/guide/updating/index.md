---
title: Updating
description: Updating an app to the latest version of NativeScript.
contributors:
  - rigor789
---

Updating a NativeScript app is usually a quick process if done regularly. The following guides aim to document the general update steps, highlighting breaking changes (if any) when updating between specific versions.

## Update guides

- [Updating to latest](/guide/updating/to-latest)

## Updating to a tagged version

To try upcoming features that have not been release yet, you can install the `next` tag of the CLI (built from the latest commit in the [NativeScript CLI repository](https://github.com/NativeScript/nativescript-cli/commits/main)) via:

```bash
npm install -g nativescript@next
```

You can also pass a tag to the `ns update` command.

For example, to try all the latest features that have not made it into a stable release yet, you can run:

```bash
ns update next
```
