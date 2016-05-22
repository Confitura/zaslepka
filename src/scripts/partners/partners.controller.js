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
        'brown',
        'media',
        'press'
    ];
    vm.detailsOf = function(partner){
        $state.go('partner', {partner: partner});
    }


}
module.exports = PartnersController;