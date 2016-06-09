'use strict';
var ng = require('ng');
require('angular-aria/angular-aria.min');
require('angular-material/angular-material.min');
require('angular-material/angular-material.min.css');
require('angular-messages/angular-messages.min');

module.exports = ng
		.module('registration', ['ngAria', 'ngMaterial', 'ngMessages', require('presentations')])
		.controller('RegistrationFormController', require('./form/registration-form.controller'))
		.factory('Registration', require('./registration.service'))
		.config(/* @ngInject */function ($mdThemingProvider) {
			$mdThemingProvider
					.theme('default');
		})
		.name;