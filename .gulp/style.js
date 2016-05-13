/**
 *  Style tasks
 */

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    flatten = require('gulp-flatten'),
    gp_concat = require('gulp-concat');

gulp.task('style.build.dev', function () {
    return gulp.src('./src/main/**/style/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gp_concat('app.css'))
        .pipe(flatten())
        .pipe(gulp.dest('./.build/dev/css'));
});

gulp.task('style.build.prod', function () {
    var version = require('../package.json').version;
    return gulp.src('./src/main/**/style/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gp_concat('app-' + version + '.css'))
        .pipe(flatten())
        .pipe(gulp.dest('./.build/prod/css'));
});