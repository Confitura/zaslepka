'use strict';

/* @ngInject */
function OrganizersController(Organizers, PersonModal, $scope) {
	var vm = this;
	vm.list = Organizers.query({type: 'main'});
	vm.detailsOf = detailsOf;

	function detailsOf(person){
		PersonModal.openFor([person]);
	}
	$scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
}
module.exports = OrganizersController;