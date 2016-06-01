'use strict';
require('../css/external');
require('../css/main.less');
require('google/analytics');
require('bootstrap/js/collapse.js');
var ng = require('ng');
require('angular-animate/angular-animate.min');
require('angular-resource/angular-resource.min');
require('angular-sanitize/angular-sanitize.min');
require('angular-ui-router/release/angular-ui-router.min');
require('moment').locale('pl');
require('angular-loading-bar/build/loading-bar.min');
require('directives/page');
ng.module('confitura', [
        'ngAnimate', 'ngResource', 'ngSanitize', 'angular-loading-bar', 'ui.router','directives.page',
        //require('twitter'),
        require('news'),
        require('partners'),
    //,
        require('v4p'),
        require('about'),
        require('cookies')
        //require('speakers'),
        //require('presentations'),
        //require('organizers'),
        //require('registration')
        //require('agenda')
    ])
    .constant('apiServer', 'http://c4p.confitura.pl/api')
    .config(/*@ngInject*/ function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider
            .when('', '/')
            .when('/presentations', '/presentations/');
        $urlRouterProvider
            .otherwise('/');
        $stateProvider
            .state('main', {
                url: '/',
                template: require('../views/main.html')
            })
            .state('partners', {
                url: '/partners',
                templateUrl: 'partners/list/partners.tpl.html'
            })
            .state('partner', {
                url: '/partner/:name',
                params: {
                    'partner': null
                },
                templateUrl: 'partners/details/partner.tpl.html'
            })
            .state('speakers', {
                url: '/speakers',
                templateUrl: 'views/speakers.html'
            })
            .state('presentations', {
                url: '/presentations/:id',
                templateUrl: 'views/presentations.html'
            })
            .state('v4p', {
                url: '/v4p',
                templateUrl: 'v4p/v4p.tpl.html'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'about/about.tpl.html'
            })
            .state('registration', {
                url: '/registration',
                templateUrl: 'views/registration.html'
            })
            .state('registration-success', {
                url: '/registration/success',
                templateUrl: 'views/registration-success.html'
            })
            .state('registration-form', {
                url: '/registration/:token',
                templateUrl: 'views/registration-form.html'
            })
            .state('agenda', {
                url: '/agenda',
                templateUrl: 'views/agenda.html'
            })
            .state('spoina', {
                url: '/spoina',
                templateUrl: 'views/spoina.html'
            })
        ;
    })
    .run(function ($timeout, $rootScope) {
        $timeout(function () {
            //TO REPLACE WITH BS
            $('#mobile-menu').click(function () {
                var m = $('#mobile-nav');
                m.is(':visible') ? m.fadeOut('fast') : m.fadeIn('fast');
            });

            $('a.mlink').click(function () {
                console.log('clicked');
                var m = $('#mobile-nav');
                m.fadeOut('fast');

            });
        });
        $rootScope.$on('$viewContentLoaded', function () {
            $("body").animate({ scrollTop: 0 });
        });

    });