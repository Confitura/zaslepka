'use strict';
require('../css/external');
require('../css/main.less');
require('google/analytics');
//require('bootstrap/js/collapse.js');
var ng = require('ng');
require('angular-animate/angular-animate');
require('angular-resource/angular-resource');
require('angular-sanitize/angular-sanitize');
require('angular-ui-router/release/angular-ui-router');
require('moment').locale('pl');
require('angular-loading-bar/build/loading-bar');
ng.module('confitura', [
	'ngAnimate', 'ngResource', 'ngSanitize', 'angular-loading-bar', 'ui.router',
	require('twitter'),
	require('news'),
	require('partners'), require('v4p'), require('pages'),
	require('speakers'),
	require('presentations')])
	//.constant('apiServer', 'http://c4p.confitura.pl/api')
		.constant('apiServer', 'http://confitura.pl:18080/api')
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
			;
		});