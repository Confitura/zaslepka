'use strict';
var _ = require('lodash');
/* @ngInject */
function AgendaController(Agenda, $modal) {
	var vm = this;
	Agenda.get(function (agenda) {
		vm.agenda = agenda;
		vm.selected = agenda.rooms[0];
	});

	vm.getAllPresentationsForSlot = function (slotId) {
		return _.chain(findSlotBy(slotId).presentations)
				.filter(function (presentation) {
					if ($('.rooms-navbar').is(':visible')) {
						return presentation.room === 'ALL' || presentation.room === vm.selected;
					}
					return true;
				})
				.value();
	};
	vm.getRoomSpanFor = function (presentation) {
		return presentation.room === 'ALL' ? vm.agenda.rooms.length : 1;
	};
	vm.select = function (room) {
		vm.selected = room;
	};
	vm.show = function (presentation) {
		$modal.open({
			backdropClass: 'person-modal-backdrop',
			windowClass: 'person-modal',
			size: 'md',
			template: require('./modal-template.html'),
			controller: require('./PresentationModalController'),
			resolve: {
				presentation: function () {
					return presentation;
				}
			}
		})
	};

	function findSlotBy(id) {
		return _.find(vm.agenda.schedule, function (item) {
			return item.slotId === id;
		});
	}
}
module.exports = AgendaController;