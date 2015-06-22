'use strict';
module.exports = require('ng').module('agenda', ['ngMaterial'])
		.factory('Agenda', require('./Agenda'))
		.controller('AgendaController', require('./AgendaController'))
		.name;