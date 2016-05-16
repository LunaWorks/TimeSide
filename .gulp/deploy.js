/**
 * Deploying app to server
 */

var gulp = require('gulp'),
    minimist = require('minimist'),
    ftp = require('vinyl-ftp'),
    gutil = require('gulp-util'),
    debug = require('gulp-debug');

var args = minimist(process.argv.slice(2));
var buildPath = './.build/dev';
var remotePath = './';

gulp.task('deploy', function () {
    var isPull = args.request !== 'false';
    console.log(args.request);
    console.log('Is pull-request: ' + isPull);
    console.log('Triggering deployment: ' + !isPull);
    if (!isPull) {
        console.log('Deploying...');
        var conn = ftp.create({
            host: 'ftp.s5.domain-ellenorzes.hu',
            user: args.user,
            password: args.password,
            log: gutil.log
        });

        gulp.src([buildPath + '/*', buildPath + '/**/*'])
            .pipe(debug())
            .pipe(conn.newer(remotePath))
            .pipe(conn.dest(remotePath));
    } else {
        console.log ('Deployment skipped.');
    }
});
