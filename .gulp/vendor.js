/**
 *  Vendor tasks
 */

var gulp = require('gulp');

gulp.task('vendor.build.dev', ['vendor.build.dev.angular', 'vendor.build.dev.bootstrap', 'vendor.build.dev.jquery', 'vendor.build.dev.fixes']);

gulp.task('vendor.build.prod', ['vendor.build.prod.angular', 'vendor.build.prod.bootstrap']);

gulp.task('vendor.build.dev.angular', function () {
    gulp.src([
        './node_modules/angular/angular.min.js',
        './node_modules/angular/angular.min.js.map'
    ])
        .pipe(gulp.dest('./.build/dev/js'));
});

gulp.task('vendor.build.prod.angular', function () {
    gulp.src([
            './node_modules/angular/angular.min.js',
            './node_modules/angular/angular.min.js.map'
        ])
        .pipe(gulp.dest('./.build/prod/js'));
});

gulp.task('vendor.build.dev.bootstrap', function () {
    gulp.src([
            './node_modules/bootstrap/dist/js/bootstrap.min.js'
        ])
        .pipe(gulp.dest('./.build/dev/js'));

    gulp.src([
            './node_modules/bootstrap/dist/css/bootstrap.min.css',
            './node_modules/bootstrap/dist/css/bootstrap.min.css.map',
            './src/css/sticky-footer-navbar.css'
        ])
        .pipe(gulp.dest('./.build/dev/css'));
});

gulp.task('vendor.build.prod.bootstrap', function () {
    gulp.src([
            './node_modules/bootstrap/dist/js/bootstrap.min.js'
        ])
        .pipe(gulp.dest('./.build/prod/js'));

    gulp.src([
            './node_modules/bootstrap/dist/css/bootstrap.min.css',
            './node_modules/bootstrap/dist/css/bootstrap.min.css.map',
            './src/css/sticky-footer-navbar.css'
        ])
        .pipe(gulp.dest('./.build/prod/css'));
});

gulp.task('vendor.build.dev.jquery', function () {
    gulp.src([
            './src/js/jquery-2.2.3.min.js',
            './src/js/jquery-2.2.3.min.map'
        ])
        .pipe(gulp.dest('./.build/dev/js'));
});

gulp.task('vendor.build.prod.bootstrap', function () {
    gulp.src([
            './src/js/jquery-2.2.3.min.js',
            './src/js/jquery-2.2.3.min.map'
        ])
        .pipe(gulp.dest('./.build/prod/js'));
});

gulp.task('vendor.build.dev.fixes', function () {
    gulp.src([
            './src/js/ie8-responsive-file-warning.js',
            './src/js/ie10-viewport-bug-workaround.js',
            'src/js/ie-emulation-modes-warning.js'
        ])
        .pipe(gulp.dest('./.build/dev/js'));

    gulp.src([
            './src/css/ie10-viewport-bug-workaround.css'
        ])
        .pipe(gulp.dest('./.build/dev/css'));
});

gulp.task('vendor.build.prod.fixes', function () {
    gulp.src([
            './src/js/ie8-responsive-file-warning.js',
            './src/js/ie10-viewport-bug-workaround.js',
            'src/js/ie-emulation-modes-warning.js'
        ])
        .pipe(gulp.dest('./.build/prod/js'));

    gulp.src([
            './src/css/ie10-viewport-bug-workaround.css'
        ])
        .pipe(gulp.dest('./.build/prod/css'));
});