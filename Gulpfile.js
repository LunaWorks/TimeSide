var gulp = require('gulp');
var ftp = require('vinyl-ftp');
var gutil = require('gulp-util');
var debug = require('gulp-debug');
var minimist = require('minimist');
var gp_concat = require('gulp-concat'),
    gp_rename = require('gulp-rename'),
    gp_uglify = require('gulp-uglify'),
    gp_sourcemaps = require('gulp-sourcemaps');

gulp.task('js-fef', function () {
    return gulp.src(['./src/app/core/index.js', './src/app/core/script/*.js'])
        .pipe(gp_sourcemaps.init())
        .pipe(gp_concat('app.js'))
        .pipe(gulp.dest('./.build/dev/js'))
        .pipe(gp_rename('app.min.js'))
        .pipe(gp_uglify())
        .pipe(gp_sourcemaps.write('./'))
        .pipe(gulp.dest('./.build/dev/js'));
});
var args = minimist(process.argv.slice(2));

gulp.task('listFiles', function () {
    gulp.src(['./src/*', './src/**/*'])
        .pipe(debug());
});

gulp.task('deploy', function () {
    var isPull = args.request !== 'false';
    console.log(args.request);
    console.log('Is pull-request: ' + isPull);
    console.log('Triggering deployment: ' + !isPull);
    if (!isPull) {
        console.log('Deploying...');
        var remotePath = './';
        var conn = ftp.create({
            host: 'ftp.s5.domain-ellenorzes.hu',
            user: args.user,
            password: args.password,
            log: gutil.log
        });

        gulp.src(['./src/*', './src/**/*'])
            .pipe(debug())
            .pipe(conn.newer(remotePath))
            .pipe(conn.dest(remotePath));
    } else {
        console.log ('Deployment skipped.');
    }
});

gulp.task('test', function () {
    console.log('No tests found.');
});
