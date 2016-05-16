/**
 *  Utility tasks
 */

var gulp = require('gulp'),
    debug = require('gulp-debug');

gulp.task('listFiles', function () {
    gulp.src(['./src/*', './src/**/*'])
        .pipe(debug());
});