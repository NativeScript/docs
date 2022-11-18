---
title: package.json
---

The `package.json` contains a list of dependencies, scripts and the entry point to your app (in the `main` field). [Learn more on the NPM docs](https://docs.npmjs.com/cli/v9/configuring-npm/package-json)

::: warning Note
NativeScript plugins should always be installed as `dependencies`, because NativeScript doesn't include native code from `devDependencies`.
:::

```json
{
  "name": "core-docs-tester",
  "main": "app/app.ts",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "@nativescript/core": "~8.4.0"
  },
  "devDependencies": {
    "@nativescript/android": "8.4.0",
    "@nativescript/ios": "8.4.0",
    "@nativescript/types": "~8.4.0",
    "@nativescript/webpack": "~5.0.9",
    "typescript": "~4.5.5"
  }
}
```
