'use strict';
require('angular-animate/angular-animate');
module.exports = require('ng').module('presentations',
		[require('directives/person'), 'ngAnimate'])
		.factory('Presentations', require('./Presentations'))
		.controller('PresentationsController', require('./PresentationsController'))
		.name;
