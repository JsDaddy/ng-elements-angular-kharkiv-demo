var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('concat', function() {
  return gulp.src('./dist/ngx-elements/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./libary/'));
});

gulp.task('copy', function() {
  return gulp.src('./dist/ngx-elements/*.css')
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./libary'));
});

gulp.task('default', ['concat', 'copy']);
