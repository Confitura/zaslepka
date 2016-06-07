'use strict';
require('./partners.tpl.html');

/* @ngInject */
function PartnersController(Partners, $state) {
    var vm = this;
    vm.list = Partners.get();
    vm.types = [
        'platinum',
        'gold',
        'silver',
        'bronze',
        'media',
        'press',
        'technical'
    ];
    vm.detailsOf = function(partner){
        $state.go('partner', {partner: partner, name: partner.name});
    }


}
module.exports = PartnersController;