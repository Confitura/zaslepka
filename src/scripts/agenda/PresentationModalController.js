'use strict';
/* @ngInject */
function PresentationModalController($scope, presentation) {
	$scope.presentation = presentation;

	$scope.getDescription = function () {
		return presentation.longDesc ? presentation.longDesc : presentation.shortDesc;
	};
}

module.exports = PresentationModalController;