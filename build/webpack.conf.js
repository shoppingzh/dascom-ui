const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const config = require('./config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.resolve(process.cwd(), 'lib'),
    clean: true,
    filename: 'index.js',
    library: {
      name: 'DascomUI',
      type: 'umd',
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
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  optimization: {
    minimize: false
  },
  externals: {
    ...config.externals
  },
  plugins: [
    new VueLoaderPlugin(),
    new ProgressBarPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ]
}
