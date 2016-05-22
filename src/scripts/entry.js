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
ng.module('confitura', [
        'ngAnimate', 'ngResource', 'ngSanitize', 'angular-loading-bar', 'ui.router',
        //require('twitter'),
        require('news'),
        require('partners')
        //require('v4p'),
        //require('speakers'),
        //require('presentations'),
        //require('organizers'),
        //require('registration'),
        //require('agenda')
    ])
    .constant('apiServer', 'http://c4p.confitura.pl:18080/api')
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
                templateUrl: 'partners/partners.tpl.html'
            })
            .state('partner', {
                url: '/partner',
                params: {
                    'partner': null
                },
                templateUrl: 'partners/partner.tpl.html'
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
                templateUrl: 'views/v4p.html'
            })
            .state('organizers', {
                url: '/organizers',
                templateUrl: 'views/organizers.html'
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