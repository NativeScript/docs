---
title: webpack.config.js
description: NativeScript apps are bundled with webpack, giving you flexibility to configure it any way you need it.
contributors:
  - rigor789
---

NativeScript applications are bundled using webpack. The bundling process can be further customized via the `webpack.config.js`.

### Default webpack config

By default, the webpack config will automatically configure everything for your project, and should looks something like this:

```js
const webpack = require('@nativescript/webpack')

module.exports = (env) => {
  webpack.init(env)

  // Learn how to customize:
  // https://docs.nativescript.org/webpack

  return webpack.resolveConfig()
}
```

::: tip Read More

:point_right: [NativeScript Webpack Reference](/configuration/webpack)

:::
