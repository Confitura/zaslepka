'use strict';
module.exports = require('ng').module('agenda', [])
		.factory('Agenda', require('./Agenda'))
		.controller('AgendaController', require('./AgendaController'))
		.name;