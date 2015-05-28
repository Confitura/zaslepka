'use strict';
module.exports = require('ng').module('presentations', [require('directives/person')])
		.factory('Presentations', require('./Presentations'))
		.controller('PresentationsController', require('./PresentationsController'))
		.name;
