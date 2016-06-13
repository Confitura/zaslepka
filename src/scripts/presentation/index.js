'use strict';
require('angular-animate/angular-animate');
module.exports = require('ng').module('presentation',
		[require('directives/person'), 'ngAnimate'])
		.factory('Presentations', require('./presentation.service'))
		.controller('PresentationListController', require('./list/presentation-list.controller'))
		.name;
