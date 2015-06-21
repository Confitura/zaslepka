'use strict';
var _ = require('lodash');
/* @ngInject */
function AgendaController(Agenda) {
	var vm = this;
	vm.agenda = Agenda.get();

	vm.getAllPresentationsForSlot = function (slotId) {
		return _.chain(findSlotBy(slotId).presentations)
				.value();
	};
	vm.getRoomSpanFor = function (presentation) {
		return presentation.room === 'ALL' ? vm.agenda.rooms.length : 1;
	};

	function findSlotBy(id) {
		return _.find(vm.agenda.schedule, function (item) {
			return item.slotId === id;
		});
	}
}
module.exports = AgendaController;