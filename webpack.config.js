var webpack = require("webpack");
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = {
    entry: {
        app: ['entry.js'],
        vendor: [
            'lodash',
            'ng',
            'angular-animate/angular-animate.min',
            'angular-resource/angular-resource.min',
            'angular-sanitize/angular-sanitize.min',
            'angular-material/angular-material.min',
            'angular-messages/angular-messages.min',
            'angular-ui-router/release/angular-ui-router.min',
            'moment',
            'angular-loading-bar/build/loading-bar.min',
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
        modulesDirectories: ['./src/scripts/', './src/css/', 'node_modules', 'bower_components'],
        extensions: ['', '.webpack.js', '.web.js', '.js'],
        alias: {
            "ng": "angular/angular.min",
            "lodash": "lodash",
            "moment": "moment/min/moment.min",
            "jquery": "jquery/dist/jquery.min"
        }
    },
    module: {
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
            //{
            //	test: /template.html$/,
            //	loader: 'ng-cache?prefix=[dir]'
            //},
            {
                test: /\.html$/,
                loader: 'html'
            }, {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                loader: 'file-loader'
            }
        ]
    },
    jshint: {
        globalstrict: true,
        emitErrors: false
    },
    plugins: [
        //new webpack.ResolverPlugin(
        //		new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
        //),
        new ngAnnotatePlugin({
            add: true
        }),
        new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js", Infinity),
        new webpack.ProvidePlugin({
            'window.Hammer': 'hammerjs/hammer.js',
            "$": "jquery",
            "jQuery": "jquery"
        })
    ],
    devServer: {
        contentBase: "./build",
        hot: true,
        inline: true,
        stats: {colors: true}
    }
};