module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        loose: true,
        modules: false,
        targets: {
          browsers: ['> 1%', 'last 2 versions', 'not ie <= 11']
        }
      }
    ]
  ],
  plugins: [
    'transform-vue-jsx'
  ]
}
