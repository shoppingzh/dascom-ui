const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve(process.cwd(), 'lib'),
    clean: true,
    filename: 'index.js',
    library: {
      name: 'DascomUI',
      type:'umd',
      export: 'default'
    },
    globalObject: 'this'
  },
  module: {
    rules: [{
      test: /\.vue$/,
      use: {
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      }
    }, {
      test: /\.s[ac]ss$/,
      use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
    }]
  },
  optimization: {
    minimize: false
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    },
    '@vue/composition-api': {
      root: 'VueCompositionAPI',
      commonjs: '@vue/composition-api',
      commonjs2: '@vue/composition-api',
      amd: '@vue/composition-api'
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new ProgressBarPlugin()
  ]
}
