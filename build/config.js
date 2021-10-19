const externals = {
  // 基础设施
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
  lodash: {
    root: '_',
    commonjs: 'lodash',
    commonjs2: 'lodash',
    amd: 'lodash'
  },
  // 第三方库
  'pdfjs-dist': {
    root: 'pdfjs-dist',
    commonjs: 'pdfjs-dist',
    commonjs2: 'pdfjs-dist',
    amd: 'pdfjs-dist'
  },
  'pdfjs-dist/es5/build/pdf.worker.entry': {
    root: 'pdfjs-dist/es5/build/pdf.worker.entry',
    commonjs: 'pdfjs-dist/es5/build/pdf.worker.entry',
    commonjs2: 'pdfjs-dist/es5/build/pdf.worker.entry',
    amd: 'pdfjs-dist/es5/build/pdf.worker.entry'
  },
  'video.js': {
    root: 'video.js',
    commonjs: 'video.js',
    commonjs2: 'video.js',
    amd: 'video.js'
  },
  'video.js/dist/lang/zh-CN.json': {
    root: 'video.js/dist/lang/zh-CN.json',
    commonjs: 'video.js/dist/lang/zh-CN.json',
    commonjs2: 'video.js/dist/lang/zh-CN.json',
    amd: 'video.js/dist/lang/zh-CN.json'
  },
  'tinymce': {
    root: 'tinymce',
    commonjs: 'tinymce',
    commonjs2: 'tinymce',
    amd: 'tinymce'
  }
}

module.exports = {
  externals
}
