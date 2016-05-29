'use strict';
require('./about.tpl.html');
require('./about.less');
module.exports = require('ng').module('organizers', [require('directives/person')])
    .factory('Organizers', require('./organizers.service'))
    .controller('OrganizersController', require('./organizers.controller'))
    .name;