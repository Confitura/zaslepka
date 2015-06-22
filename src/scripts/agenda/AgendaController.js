'use strict';
var _ = require('lodash');
/* @ngInject */
function AgendaController(Agenda) {
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

	function findSlotBy(id) {
		return _.find(vm.agenda.schedule, function (item) {
			return item.slotId === id;
		});
	}
}
module.exports = AgendaController;