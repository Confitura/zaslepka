'use strict';
/* @ngInject */
function PersonModal($uibModal) {
	var _speakerModal;
	var _callback = null;
	this.openFor = function (persons) {
		if (_speakerModal) {
			return;
		}
		_speakerModal = $uibModal.open({
			backdropClass: 'person-modal-backdrop',
			windowClass: 'person-modal',
			size: 'lg',
			template: require('./modal-template.html'),
			controller: require('./PersonModalController'),
			resolve: {
				persons: function () {
					return persons;
				}
			}
		});
		_speakerModal.result.finally(function () {
			_speakerModal = null;
			if (_callback !== null) {
				_callback();
			}
		});
		return this;
	};

	this.onClose = function (callback) {
		_callback = callback;
	};
}

module.exports = PersonModal;