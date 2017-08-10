var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function() {

  // initialize browser-sync
  browserSync.init({
    notify: false,
    server: {
      baseDir: "app/assets/html"
    }
  });

  // watch for changes in main HTML file
  gulp.watch('./app/assets/html/**/*.html', function() {
    browserSync.reload();
  });

  // watch for changes to .pug files
  gulp.watch('./app/src/pug/**/*.pug', function() {
    gulp.start('htmlRefresh');
  });

  // watch for changes to CSS files
  gulp.watch('./app/assets/styles/**/*.css', function() {
    gulp.start('cssInject');
  });

  // refresh browser when changes made to .pug files
  gulp.task('htmlRefresh', ['pug'], function() {
    browserSync.reload();
  });

  // The cssInject function
  gulp.task('cssInject', ['styles'], function() {
    return gulp.src('./dist/styles/styles.css')
      .pipe(browserSync.stream());
  });
});
