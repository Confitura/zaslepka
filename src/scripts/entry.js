'use strict';
require('../css');
require('google/analytics');

var ng = require('ng');
require('angular-animate/angular-animate');
require('angular-resource/angular-resource');
require('angular-sanitize/angular-sanitize');
require('angular-ui-router/release/angular-ui-router');
require('moment').locale('pl');


require('angular-loading-bar/build/loading-bar');
ng.module('confitura', [
    'ngAnimate', 'ngResource', 'ngSanitize', 'angular-loading-bar', 'ui.router',
    require('twitter'), require('news')
])
    .constant('apiServer', 'http://c4p.confitura.pl/api')
    /* ng Inject*/
    .config(function($stateProvider){
        $stateProvider
            .state('main',{
                url: '/',
                template: require('../views/main.html')
            })
            .state('partners',{
                url: '/partners',
                templateUrl: 'views/partners.html'
            })
        ;
    });