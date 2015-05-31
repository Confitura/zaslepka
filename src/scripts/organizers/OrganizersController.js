'use strict';

/* @ngInject */
function OrganizersController(Organizers) {
	var vm = this;

	vm.organizers = Organizers.query({type: 'main'});
}
module.exports = OrganizersController;