'use strict';
/* @ngInject */
function PersonDirectiveController($scope, $modal) {
	var speakerModal;

	$scope.showModal = function () {
		if (speakerModal) {
			return;
		}
		speakerModal = $modal.open({
			backdropClass: 'person-modal-backdrop',
			windowClass: 'person-modal',
			size: 'md',

			template: require('./modal-template.html'),
			controller: require('./PersonModalController'),
			resolve: {
				persons: function () {
					return [$scope.person];
				}
			}
		});
		speakerModal.result.finally(function () {
			speakerModal = null;
		});
	};

	$scope.$on('person.modal:open', function (event, speakers) {
		$scope.showModal();
	});

}
module.exports = PersonDirectiveController;