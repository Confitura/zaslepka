'use strict';
/* @ngInject */
function PersonModal($modal) {
	var speakerModal;
	this.openFor = function (persons) {
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
					return persons;
				}
			}
		});
		speakerModal.result.finally(function () {
			speakerModal = null;
		});
	};
}

module.exports = PersonModal;