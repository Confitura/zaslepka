'use strict';
require('../css');
require('google/analytics');
require('imports?jQuery=jquery!bootstrap/js/collapse.js');
var ng = require('ng');
require('angular-animate/angular-animate');
require('angular-resource/angular-resource');
require('angular-sanitize/angular-sanitize');
require('angular-ui-router/release/angular-ui-router');
require('moment').locale('pl');


require('angular-loading-bar/build/loading-bar');

ng
		.module('confitura', [
			'ngAnimate', 'ngResource', 'ngSanitize', 'angular-loading-bar', 'ui.router',
			require('twitter'), require('news'), require('partners')])
		.constant('apiServer', 'http://c4p.confitura.pl/api')

		.config(/*@ngInject*/ function ($stateProvider, $urlRouterProvider) {
			$urlRouterProvider.when('', '/');
			$stateProvider
					.state('main', {
						url: '/',
						template: require('../views/main.html')
					})
					.state('partners', {
						url: '/partners',
						templateUrl: 'views/partners.html'
					})
			;
		});