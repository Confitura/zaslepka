'use strict';
require('./partner.tpl.html');

/* @ngInject */
function PartnersController($stateParams) {
    var vm = this;
    console.log($stateParams);
    vm.model = $stateParams.partner


}
module.exports = PartnersController;