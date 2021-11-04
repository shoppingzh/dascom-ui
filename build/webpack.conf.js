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
  resolve: {
    alias: {
      'dascom-ui': path.resolve(__dirname, '../')
    }
  },
  module: {
    rules: [{
      test: /\.m?(jsx?|babel|es6)$/,
      include: process.cwd(),
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.vue$/,
      use: [
        {
          loader: 'vue-loader',
          options: {
            compilerOptions: {
              preserveWhitespace: false
            }
          }
        }
      ]
    }, {
      test: /\.s[ac]ss$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader'
      ]
    }, {
      test: /\.svg$/,
      use: [
        {
          loader: 'url-loader'
        }
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
  ],
  watch: true
}
