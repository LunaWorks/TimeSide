/**
 * Including all Gulp task files
 */
require('require-dir')('./.gulp');
var gulp = require('gulp');

gulp.task('default', ['vendor', 'view', 'style', 'images', 'script'], function() {
    var version = require('./package.json').version;
    console.info('\n--- Build of TimeSide project v' + version + 'was successfull ---\n');
});
