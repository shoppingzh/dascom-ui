const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

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
      loader: 'vue-loader',
      options: {
        compilerOptions: {
          preserveWhitespace: false
        }
      }
    }, {
      test: /\.s[ac]ss$/,
      use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
    }]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
