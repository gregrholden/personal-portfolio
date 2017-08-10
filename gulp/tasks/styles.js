var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssVars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
hexrgba = require('postcss-hexrgba'),
cssNext = require('postcss-cssnext'),
mixins = require('postcss-mixins'),
order = require('postcss-processor-order');

var options = [order, cssImport, mixins, cssVars, nested, hexrgba, cssNext, autoprefixer];

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss(options))
    .on('error', function(errorInfo) {
      this.emit('end');
    })
    .pipe(gulp.dest('./dist/assets/styles'));
});
