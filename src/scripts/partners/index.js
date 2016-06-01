'use strict';
require('./partners.less');
require('ng').module('partners',[])
    .factory('Partners', require('./partners.service'))
    .controller('PartnersController', require('./list/partners.controller'))
    .controller('PartnerController', require('./details/partner.controller'))
    .controller('PartnersBannerController', require('./banner/partners-banner.controller'))
;
module.exports ='partners';