/**
 * Images tasks
 */

var gulp = require('gulp'),
    flatten = require('gulp-flatten');

gulp.task('images', ['images.build.dev']);

gulp.task('images.build.dev', function () {
    gulp.src([
            './src/**/images/*'
        ])
        .pipe(flatten())
        .pipe(gulp.dest('./.build/dev/images'));
});