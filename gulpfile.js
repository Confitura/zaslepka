var gulp = require('gulp');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var plugins = require('gulp-load-plugins')();

gulp.task('webpack', function () {
    return gulp.src('src/scripts/entry.js')
        .pipe(plugins.webpack(webpackConfig, webpack))
        .pipe(gulp.dest('build/js/'));
});

gulp.task('watch', function () {
    webpackConfig.watch = true;
    gulp.run('webpack');
    return gulp.watch(['src/index.html', 'src/fonts/*', 'src/views/*'], ['build']);
});
gulp.task('jshint', function () {
    return gulp.src('src/scripts/**/*.js')
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter('default'))
});

gulp.task('build', ['webpack'], function () {
    gulp.src(['src/index.html'])
        .pipe(gulp.dest('./build'));
    gulp.src(['src/views/*.html'])
        .pipe(gulp.dest('./build/views'));
    gulp.src(['src/fonts/*'])
        .pipe(gulp.dest('./build/fonts'))
});
