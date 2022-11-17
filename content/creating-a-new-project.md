---
title: Creating a New Project
prev: /setup/
---

<!--@include: ./parts/online-playground.md-->

## Summary

NativeScript allows scaffolding projects with various templates to kickstart your app development.

Official templates can be found in the [Templates GitHub repository](https://github.com/NativeScript/nativescript-app-templates/tree/master/packages) and on [NPM](https://www.npmjs.com/search?q=%40nativescript%20template).

Some of the templates are listed in the NativeScript CLI when creating a new project with `ns create`, others may be used by passing the `--template` flag with the template name (NPM package name).

```cli
ns create myCoolApp
```

If you would like to try one of the other templates not listed by `ns create` run:

```cli
ns create myCoolApp --template <template-package-name or path-to-template>
```

:::tip

If you want to skip the interactive prompts, you can pass the following flags:

```cli
ns create myCoolApp --angular // or --ng for short
ns create myCoolApp --vue
ns create myCoolApp --vue --ts // for vue with typescript
ns create myCoolApp --react
ns create myCoolApp --js
ns create myCoolApp --svelte
```

...to create the app with the default template for the specified flavor.
:::

## Official Templates

### Blank Template

### Drawer Template

### Tabs Template

### List & Details Template
