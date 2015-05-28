'use strict';
/* @ngInject */
function PersonDirectiveController($scope, $attrs, PersonModal) {
	$scope.showPhoto = $attrs.textOnly !== undefined ? false : true;
	$scope.showModal = function () {
		PersonModal.openFor([$scope.person]);
	};

	$scope.$on('person.modal:open', function (event, speakers) {
		$scope.showModal();
	});

}
module.exports = PersonDirectiveController;