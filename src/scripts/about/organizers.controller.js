'use strict';

/* @ngInject */
function OrganizersController(Organizers, PersonModal) {
	var vm = this;
	vm.list = Organizers.query({type: 'main'});
	vm.detailsOf = detailsOf;

	function detailsOf(person){
		PersonModal.openFor([person]);
	}
}
module.exports = OrganizersController;