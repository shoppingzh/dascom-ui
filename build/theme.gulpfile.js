const path = require('path')
const { src, dest } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const cssmin = require('gulp-cssmin')
const autoprefixer = require('gulp-autoprefixer')

function compile(done) {
  src(path.resolve(__dirname, '../src/theme/*.scss'))
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(dest(path.resolve(__dirname, '../lib/theme')))
  done()
}

module.exports = {
  compile
}
