'use strict';
module.exports = require('ng').module('organizers', [require('directives/person')])
    .factory('Organizers', require('./Organizers'))
    .controller('OrganizersController', require('./OrganizersController'))
    .name;