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
        'ngAnimate', 'ngResource', 'ngSanitize', 'angular-loading-bar', 'ui.router', 'directives.page',
        require('news'),
        require('partners'),
        require('v4p'),
        require('speaker'),
        require('presentation'),
        require('about'),
        require('cookies'),
        require('registration')

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
                templateUrl: 'speaker/list/speaker-list.tpl.html'
            })
            .state('presentations', {
                url: '/presentations/:id',
                templateUrl: 'presentation/list/presentation-list.tpl.html'
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
                templateUrl: 'registration/registration.tpl.html'
            })
            .state('registration-success', {
                url: '/registration/success',
                templateUrl: 'registration/form/registration-success.tpl.html'
            })
            .state('registration-form', {
                url: '/registration/:token',
                templateUrl: 'registration/form/registration-form.tpl.html'
            })
            .state('agenda', {
                url: '/agenda',
                templateUrl: 'views/agenda.html'
            })
            .state('spoina', {
                url: '/spoina',
                templateUrl: 'views/spoina.html'
            })
            .state('show-cookie', {
                url: '/show-cookie',
                templateUrl: 'cookies/show/cookie-show.tpl.html'
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

            var hideMenu = function () {
                var m = $('#mobile-nav');
                m.fadeOut('fast');
            };
            $('a.mlink').click(function () {
                hideMenu();

            });
            $('a.navbar-brand').click(function () {
                hideMenu();

            });
        });
        //$rootScope.$on('$viewContentLoaded', function () {
        //    $("body").animate({ scrollTop: 0 });
        //});

    });