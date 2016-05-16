/**
 * View tasks
 */

var gulp = require('gulp'),
    htmlreplace = require('gulp-html-replace'),
    flatten = require('gulp-flatten');

gulp.task('view', ['view.build.dev']);

gulp.task('view.build.dev.index', function () {
   gulp.src('./src/index.html')
       .pipe(htmlreplace({
           css: 'css/app.css',
           js: 'js/app.js'
       }))
       .pipe(gulp.dest('./.build/dev'));
});

gulp.task('view.build.dev', ['view.build.dev.index'], function () {
    gulp.src('./src/**/view/*.html')
        .pipe(flatten())
        .pipe(gulp.dest('./.build/dev/view'));
});
