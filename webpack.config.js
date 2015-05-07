var webpack = require("webpack");
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = {
    entry: 'entry.js',
    output: {
        filename: 'bundle.js',
        publicPath: 'js/'
    },
    resolve: {
        modulesDirectories: ['./src/scripts/', 'node_modules', 'bower_components'],
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js'],
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
        emitErrors: true
    },
    plugins: [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        ),
        new ngAnnotatePlugin({
            add: true
        })
    ]
};