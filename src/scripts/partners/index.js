'use strict';
require('./partners.less');
require('ng').module('partners',[])
    .factory('Partners', require('./partners.service'))
    .controller('PartnersController', require('./partners.controller'))
    .controller('PartnerController', require('./partner.controller'))
    .controller('PartnersBannerController', require('./partners.banner.controller'))
;
module.exports ='partners';