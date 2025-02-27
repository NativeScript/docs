const webpack = require('@nativescript/webpack')
const { resolve } = require('path')

module.exports = (env) => {
  webpack.init(env)

  // Learn how to customize:
  // https://docs.nativescript.org/webpack
  webpack.chainWebpack((config) => {
    // shared demo code
    config.resolve.alias.set(
      '@example/utils',
      resolve(__dirname, '..', 'utils', 'index.ts'),
    )
  })

  webpack.Utils.addCopyRule({
    from: '../../assets',
    to: 'assets',
    context: webpack.Utils.project.getProjectFilePath('node_modules'),
  })

  return webpack.resolveConfig()
}
