/**
 *  Style tasks
 */

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    flatten = require('gulp-flatten'),
    gp_concat = require('gulp-concat'),
    debug = require('gulp-debug');

gulp.task('style', ['style.build.dev']);

gulp.task('style.build.dev', function () {
    return gulp.src('./src/main/**/style/*.scss')
        .pipe(debug())
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gp_concat('app.css'))
        .pipe(flatten())
        .pipe(gulp.dest('./.build/dev/css'));
});
