---
title: Creating a New Project
prev: /setup/
contributors:
  - Ombuweb
  - rigor789
---

<!--@include: ../parts/online-playground.md-->

## Summary

NativeScript allows scaffolding projects with various templates to kickstart your app development.

Official templates can be found in the [Templates GitHub repository](https://github.com/NativeScript/nativescript-app-templates/tree/master/packages) and on [NPM](https://www.npmjs.com/search?q=%40nativescript%20template).

Some of the templates are listed in the NativeScript CLI when creating a new project with `ns create`, others may be used by passing the `--template` flag with the template name (NPM package name).

```bash
ns create myCoolApp
```

If you would like to try one of the other templates not listed by `ns create` run:

```bash
ns create myCoolApp --template <template-package-name or path-to-template>
```

:::tip

If you want to skip the interactive prompts, you can pass the following flags:

```bash
ns create myCoolApp --angular // or --ng for short
ns create myCoolApp --vue
ns create myCoolApp --vue --ts // for vue with typescript
ns create myCoolApp --react
ns create myCoolApp --js
ns create myCoolApp --svelte
```

...to create the app with the default template for the specified flavor.
:::

## Official Starter Templates

### Blank Template

A basic template with a single page and no custom styles.
<DeviceFrame type="ios">
<img src="https://raw.githubusercontent.com/NativeScript/nativescript-app-templates/master/packages/template-blank/tools/assets/appTemplate-ios.png">
</DeviceFrame>
<DeviceFrame type="android">
<img src="https://raw.githubusercontent.com/NativeScript/nativescript-app-templates/master/packages/template-blank/tools/assets/appTemplate-android.png">
</DeviceFrame>

To use, run:

```bash
ns create myCoolApp --template @nativescript/template-blank
```

### Drawer Template

A template with a side drawer.

<!-- TODO: make nicer images -->

<DeviceFrame type="ios">
<img src="https://raw.githubusercontent.com/NativeScript/nativescript-app-templates/master/packages/template-drawer-navigation/tools/assets/appTemplate-ios.png">
</DeviceFrame>
<DeviceFrame type="android">
<img src="https://raw.githubusercontent.com/NativeScript/nativescript-app-templates/master/packages/template-drawer-navigation/tools/assets/appTemplate-android.png">
</DeviceFrame>

To use, run:

```bash
ns create myCoolApp --template @nativescript/template-drawer-navigation
```

### Tabs Template

A template with multiple tabs.

<!-- TODO: make nicer images -->

<DeviceFrame type="ios">
<img src="https://raw.githubusercontent.com/NativeScript/nativescript-app-templates/master/packages/template-tab-navigation/tools/assets/appTemplate-ios.png">
</DeviceFrame>
<DeviceFrame type="android">
<img src="https://raw.githubusercontent.com/NativeScript/nativescript-app-templates/master/packages/template-tab-navigation/tools/assets/appTemplate-android.png">
</DeviceFrame>

To use, run:

```bash
ns create myCoolApp --template @nativescript/template-tab-navigation
```

### List & Details Template

A template with a ListView and a details screen.

<DeviceFrame type="ios">
<img src="https://raw.githubusercontent.com/NativeScript/nativescript-app-templates/master/packages/template-master-detail/tools/assets/appTemplate-ios.png">
</DeviceFrame>
<DeviceFrame type="android">
<img src="https://raw.githubusercontent.com/NativeScript/nativescript-app-templates/master/packages/template-master-detail/tools/assets/appTemplate-android.png">
</DeviceFrame>

To use, run:

```bash
ns create myCoolApp --template @nativescript/template-master-detail
```

## Creating custom templates

The NativeScript CLI can create projects from `npm` packages or local folders by passing the `--template <npm_package_name_or_local_path>` flag to the `ns create` command. If you need a custom template, start with one of the official templates and customize it for your needs.
