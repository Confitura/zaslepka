'use strict';

var ngModule = require('ng')
		.module('pages', ['ngResource'])
		.factory('Pages', require('./Pages'))
		.directive('page', require('./PageDirective'));

module.exports = ngModule.name;