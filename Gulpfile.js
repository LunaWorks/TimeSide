var gulp = require('gulp');
var ftp = require('vinyl-ftp');
var gutil = require('gulp-util');
var debug = require('gulp-debug');
var minimist = require('minimist');
var args = minimist(process.argv.slice(2));

gulp.task('listFiles', function() {
    gulp.src(['./src/*', './src/**/*'])
        .pipe(debug());
});

gulp.task('deploy', function() {
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
