module.exports = {
  configureWebpack: {
    externals: {
      tinymce: 'tinyMCE'
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          'dascom-ui': {
            test: /[\\/]node_modules[\\/]dascom-ui/,
            priority: 10
          }
        }
      }
    }
  }
}