'use strict';

module.exports = require('ng')
		.module('directives.page', ['ngResource'])
		.factory('Pages', require('./Pages'))
		.directive('page', require('./PageDirective'))
		.name;