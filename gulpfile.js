'use strict';

// Include gulp
var gulp = require('gulp');
var express = require('express');
var clipboard = require("gulp-clipboard");
var premailer = require('gulp-premailer');

// Tasks aliases
gulp.task('default', function () {
	var mq;
	gulp.src('html/latest.html')
		.pipe(premailer())
		.pipe(clipboard())
		.pipe(gulp.dest('output'));
});

// Watch Files For Changes
gulp.task('watch', function () {
  var app = express();
  app.use(express.static('./html'));
  app.use(directory('./html'));
  app.listen(8090);
});
