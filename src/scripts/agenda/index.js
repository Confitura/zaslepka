'use strict';
require('./agenda.tpl.html');
require('./agenda.less');

module.exports = require('ng')
    .module('agenda', [])
    .factory('Agenda', require('./agenda.service'))
    .controller('AgendaController', require('./agenda.controller'))
    .name;