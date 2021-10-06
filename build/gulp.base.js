const path = require('path')
const { src, dest, series } = require('gulp')

function compile(done) {
  src(path.resolve(__dirname, '../src/**/*.js'), {
    ignore: [
      path.resolve(__dirname, '../src/index.js'),
      path.resolve(__dirname, '../src/theme/**')
    ]
  })
    .pipe(dest(path.resolve(__dirname, '../lib')))
  done()
}

function copyTheme(done) {
  src(path.resolve(__dirname, '../src/theme/**'))
    .pipe(dest(path.resolve(__dirname, '../lib/theme/src')))
  done()
}

module.exports = {
  build: series(compile, copyTheme)
}
