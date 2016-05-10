/**
 * View tasks
 */

var gulp = require('gulp'),
    htmlreplace = require('gulp-html-replace'),
    flatten = require('gulp-flatten');

gulp.task('view.build.dev.index', function () {
   gulp.src('./src/index.html')
       .pipe(htmlreplace({
           css: 'css/app.css',
           js: 'js/app.js'
       }))
       .pipe(gulp.dest('./.build/dev'));
});

gulp.task('view.build.dev', ['view.build.gev.index'], function () {
    gulp.src('./src/**/view/*.html')
        .pipe(flatten())
        .pipe(gulp.dest('./.build/dev/view'));
});


gulp.task('view.build.prod.index', function () {
    var version = require('../package.json').version;
    gulp.src('./src/index.html')
        .pipe(htmlreplace({
            css: 'css/app-' + version + '.min.css',
            js: 'js/app-' + version + '.min.js'
        }))
        .pipe(gulp.dest('./.build/prod'));
});

gulp.task('view.build.prod', ['view.build.prod.index'],  function () {
    gulp.src('./src/**/view/*.html')
        .pipe(flatten())
        .pipe(gulp.dest('./.build/prod/view'));
});