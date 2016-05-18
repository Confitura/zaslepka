'use strict';
require('ng').module('partners',[])
    .factory('Partners', require('./partners.service'))
    .controller('PartnersController', require('./partners.controller'));
module.exports ='partners';