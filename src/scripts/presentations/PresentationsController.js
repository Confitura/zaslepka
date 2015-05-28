'use strict';
/* @ngInject */
function PresentationsController(Presentations, PersonModal, $anchorScroll, $timeout, $stateParams) {
	var vm = this;
	vm.presentations = Presentations.query(function () {
		$timeout(function () {
			$anchorScroll.yOffset = 50;
			$anchorScroll($stateParams.id);
		});
	});

	vm.show = function (speaker) {
		PersonModal.openFor([speaker]);
	};

}
module.exports = PresentationsController;