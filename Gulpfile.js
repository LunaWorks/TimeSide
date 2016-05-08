var gulp = require('gulp');
var ftp = require('vinyl-ftp');
var gutil = require('gulp-util');
var debug = require('gulp-debug');
var minimist = require('minimist');
var gp_concat = require('gulp-concat'),
    gp_rename = require('gulp-rename'),
    gp_uglify = require('gulp-uglify'),
    gp_sourcemaps = require('gulp-sourcemaps');
var Server = require('karma').Server;

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
    console.log(__dirname + '/karma.conf.js');
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});

gulp.task('js-fef', function () {
    return gulp.src(['./src/main/core/index.js', './src/main/core/script/*.js'])
        .pipe(gp_sourcemaps.init())
        .pipe(gp_concat('main.js'))
        .pipe(gulp.dest('./.build/dev/js'))
        .pipe(gp_rename('main.min.js'))
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
