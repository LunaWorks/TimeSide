var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    gp_concat = require('gulp-concat'),
    gp_rename = require('gulp-rename'),
    gp_uglify = require('gulp-uglify'),
    gp_sourcemaps = require('gulp-sourcemaps');

/**
 * Concatenate JS files
 */
gulp.task('js.build.dev', function () {
    return gulp.src(['./src/main/core/index.js', './src/main/core/script/*.js'])
        .pipe(gp_sourcemaps.init())
        .pipe(gp_concat('main.js'))
        .pipe(gulp.dest('./.build/dev/js'))
        .pipe(gp_rename('main.min.js'))
        .pipe(gp_sourcemaps.write('./'))
        .pipe(gulp.dest('./.build/dev/js'));
});

/**
 * Concatenate and uglify JS files
 */
gulp.task('js.build.prod', function () {
    return gulp.src(['./src/main/core/script/Core.js', './src/main/core/script/*.js'])
        .pipe(gp_sourcemaps.init())
        .pipe(gp_concat('main.js'))
        .pipe(gulp.dest('./.build/dev/js'))
        .pipe(gp_rename('main.min.js'))
        .pipe(gp_uglify())
        .pipe(gp_sourcemaps.write('./'))
        .pipe(gulp.dest('./.build/prod/js'));
});

// JSHint task
gulp.task('js.hint', function() {
    gulp.src('./src/main/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

/**
 * Run test once and exit
 */
var Server = require('karma').Server;

gulp.task('js.test', function (done) {
    console.log(__dirname + '/karma.conf.js');
    new Server({
        configFile: __dirname + '/../karma.conf.js',
        singleRun: true
    }, done).start();
});

gulp.task('js.tdd', ['js.hint'], function (done) {
    console.log(__dirname + '/karma.conf.js');
    new Server({
        configFile: __dirname + '/../karma.conf.js'
    }, done).start();
});
