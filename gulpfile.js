'use strict';

var gulp = require('gulp');
var express = require('express');
var clipboard = require("gulp-clipboard");
var premailer = require('gulp-premailer');

gulp.task('default', function () {
  gulp.src('html/latest.html')
    .pipe(premailer())
    .pipe(clipboard())
    .pipe(gulp.dest('output'));
});

gulp.task('watch', function () {
  var app = express();
  app.use(express.static('./html'));
  app.use(directory('./html'));
  app.listen(8090);
});
