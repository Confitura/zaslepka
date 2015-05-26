var webpack = require("webpack");
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = {
	entry: {
		app: ['entry.js'],
		vendor: [
			'lodash',
			'ng',
			'angular-animate/angular-animate',
			'angular-resource/angular-resource',
			'angular-sanitize/angular-sanitize',
			'angular-ui-router/release/angular-ui-router',
			'moment',
			'angular-loading-bar/build/loading-bar',
			'./src/css/external',
			'hammerjs/hammer.min.js',
			'imports?require=>false!angular-hammer/angular.hammer.js'
		]
	},
	output: {
		path: __dirname + '/build',
		filename: 'bundle.js',
		publicPath: 'js/'
	},
	resolve: {
		modulesDirectories: ['./src/scripts/', './src/css/', 'node_modules'],
		extensions: ['', '.webpack.js', '.web.js', '.js'],
		alias: {
			"ng": "angular/angular",
			"lodash": "lodash/index",
			"moment": "moment/moment",
			"jquery": "jquery/dist/jquery"
		}
	},
	module: {
		preLoaders: [
			{
				test: /\.js$/,
				exclude: /node_modules|google/,
				loader: 'jshint-loader'
			}
		],
		loaders: [
			{
				test: /\.ts$/,
				loader: 'typescript-loader'
			},
			{
				test: /\.less$/,
				loader: 'style!css?root=../!autoprefixer!less'
			},
			{
				test: /\.css$/,
				loader: 'style!raw'
			},
			{
				test: /\.png$/,
				loader: 'file'
			},
			{
				test: /angular/,
				loader: 'exports?angular'
			},
			{
				test: /collapse.js$ /,
				loader: 'imports?jQuery=jquery'
			},
			{
				test: /template.html$/,
				loader: 'ng-cache?prefix=[dir]'
			},
			{
				test: /\.html$/,
				loader: 'html'
			}
		]
	},
	jshint: {
		globalstrict: true,
		emitErrors: false
	},
	plugins: [
		new ngAnnotatePlugin({
			add: true
		}),
		new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js", Infinity),
		new webpack.ProvidePlugin({
			'window.Hammer': "hammerjs/hammer.js"
		})
	],
	devServer: {
		contentBase: "./build",
		hot: true,
		inline: true,
		stats: { colors: true }
	}
};