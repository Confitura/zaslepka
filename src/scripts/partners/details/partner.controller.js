'use strict';
require('./partner.tpl.html');

/* @ngInject */
function PartnersController($stateParams, Partners) {
    var vm = this;
    console.log($stateParams);
    if ($stateParams.partner) {
        vm.model = $stateParams.partner
    } else {
        vm.model = Partners.get($stateParams)
    }


}
module.exports = PartnersController;