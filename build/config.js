const externals = {
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
  },
  'pdfjs-dist': {
    root: 'pdfjs-dist',
    commonjs: 'pdfjs-dist',
    commonjs2: 'pdfjs-dist',
    amd: 'pdfjs-dist'
  }
}

module.exports = {
  externals
}
