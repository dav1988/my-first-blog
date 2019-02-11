// FOUNDATION FOR APPS TEMPLATE GULPFILE
// -------------------------------------
// This file processes all of the assets in the "client" folder, combines them with the Foundation for Apps assets, and outputs the finished files in the "build" folder as a finished app.

// 1. LIBRARIES
// - - - - - - - - - - - - - - -

var $        = require('gulp-load-plugins')();
//var argv     = require('yargs').argv;
var gulp     = require('gulp');
//var rimraf   = require('rimraf');
//var router   = require('front-router');
//var sequence = require('run-sequence');
var jade     = require('gulp-jade');
//var uncss    = require('gulp-uncss');
//var uglify   = require('gulp-uglify');
//var concat   = require('gulp-concat');
//var minifyCss = require('gulp-minify-css');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass',function() {
    return gulp.src('./scss/*scss')
	.pipe(sass())
	.pipe(gulp.dest('./css'))
});



gulp.task('jade',function() {
    return gulp.src('./jade/*.jade')
	.pipe(jade({
	    pretty: true
	}))
	.pipe(gulp.dest('../../prova_v2/blog/templates/blog'))
});


gulp.task('default', function() {
    gulp.watch(['./client/**/*.jade'],['jade']);

});
