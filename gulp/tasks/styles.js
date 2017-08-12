var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssVars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
hexrgba = require('postcss-hexrgba'),
cssNext = require('postcss-cssnext'),
mixins = require('postcss-mixins');

//var options = [order, cssImport, mixins, cssVars, nested, hexrgba, cssNext, autoprefixer];

gulp.task('styles', function() {
  return gulp.src('./app/src/styles/styles.css')
    .pipe(postcss([cssImport, mixins, cssVars, nested, hexrgba, autoprefixer]))
    .on('error', function(errorInfo) {
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./app/assets/styles'));
});
