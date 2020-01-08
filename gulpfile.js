const gulp = require('gulp');
var rename = require("gulp-rename");
var csso = require('gulp-csso');
var concat = require('gulp-concat');


gulp.task('default',  function () {
  var postcss = require('gulp-postcss');
  var concat = require('gulp-concat');
  var autoprefixer = require('autoprefixer');
  return gulp.src('./css/*.css')
    .pipe(concat('style-all.css'))
    .pipe(postcss([autoprefixer()]))
    .pipe(csso())
    .pipe(rename("style-min.css"))
    .pipe(gulp.dest('./docs/css'));

});