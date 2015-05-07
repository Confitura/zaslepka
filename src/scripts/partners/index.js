'use strict';
require('ng').module('partners',[])
    .factory('Partners', require('./Partners'))
    .controller('PartnersController', require('./PartnersController'));
module.exports ='partners';