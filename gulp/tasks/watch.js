var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function() {

  // initialize browser-sync
  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
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
  gulp.watch('./app/src/styles/**/*.css', function() {
    gulp.start('cssInject');
  });

  // watch for changes to JavaScripts
  watch('./app/src/scripts/**/*.js', function() {
    gulp.start('scriptsRefresh');
  });

});

// refresh browser when changes made to .pug files
gulp.task('htmlRefresh', ['pug'], function() {
  browserSync.reload();
});

// Stream changes made to CSS files
gulp.task('cssInject', ['styles'], function() {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(browserSync.stream());
});

// reload page when changes made to JavaScripts
gulp.task('scriptsRefresh', ['scripts'], function() {
  browserSync.reload();
});
