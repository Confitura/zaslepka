var gulp = require('gulp');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var plugins = require('gulp-load-plugins')();
var argv = require('minimist')(process.argv.slice(2));
if (argv.production) { // --production
	webpackConfig.plugins = webpackConfig.plugins.concat([new webpack.optimize.UglifyJsPlugin()])
}

gulp.task('webpack', ['copy'], function () {
	return gulp.src('src/scripts/entry.js')
			.pipe(plugins.webpack(webpackConfig, webpack))
			.pipe(gulp.dest('build/js/'));
});

gulp.task('watch', function () {
	webpackConfig.watch = true;
	gulp.run('webpack');
	gulp.watch(['src/index.html', 'src/fonts/*', 'src/views/*'], ['copy']);
	//gulp.watch(['src/index.html', 'src/fonts/*', 'src/views/*'], ['build']);
});

gulp.task('jshint', function () {
	return gulp.src('src/scripts/**/*.js')
			.pipe(plugins.jshint())
			.pipe(plugins.jshint.reporter('default'))
});

gulp.task('copy', function () {
	gulp.src(['src/index.html'])
			.pipe(gulp.dest('./build'));
	gulp.src(['src/views/*.html'])
			.pipe(gulp.dest('./build/views'));
	gulp.src(['src/fonts/**/*'])
			.pipe(gulp.dest('./build/fonts'))
});

gulp.task('default', ['webpack'], function () {
});
