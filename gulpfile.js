const gulp = require('gulp');

var csso = require('gulp-csso');

gulp.task('default', function () {
  var postcss = require('gulp-postcss');
  var autoprefixer = require('autoprefixer');
  return gulp.src('./src/css/style.css')
    .pipe(postcss([autoprefixer()]))
    .pipe(csso())
    .pipe(gulp.dest('./docs/css'));
});