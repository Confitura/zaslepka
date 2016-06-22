'use strict';
var _ = require('lodash');
/* @ngInject */
function AgendaController(Agenda, PersonModal) {
    var vm = this;
    vm.model = {};
    vm.selectedRoom = null;
    vm.rooms = [];
    vm.isActive = isActive;
    vm.getAllPresentationsForSlot = getAllPresentationsForSlot;
    vm.getRoomSpanFor = getRoomSpanFor;
    vm.select = select;
    vm.showSpeaker = showSpeaker;
    vm.countSelected = countSelected;

    Agenda.get(function (agenda) {
        vm.model = agenda;
        vm.rooms = _.map(agenda.rooms, function (room) {
            return {name: room, selected: true};
        });
    });


    function getAllPresentationsForSlot(slotId) {
        return _.chain(findSlotBy(slotId).presentations)
            .filter(function (presentation) {
                return presentation.room === 'ALL' || isSelected(presentation.room);
            })
            .value();
    }

    function getRoomSpanFor(room) {
        return presentation.room === 'ALL' ? vm.model.rooms.length : 1;
    }

    function select(name) {
        var room = getRoomBy(name);
        room.selected = !room.selected;
    }

    //function show(presentation) {
    //    $modal.open({
    //        backdropClass: 'person-modal-backdrop',
    //        windowClass: 'person-modal',
    //        size: 'md',
    //        template: require('./modal-template.html'),
    //        controller: require('./PresentationModalController'),
    //        resolve: {
    //            presentation: function () {
    //                return presentation;
    //            }
    //        }
    //    })
    //}

    function findSlotBy(id) {
        return _.find(vm.model.schedule, function (item) {
            return item.slotId === id;
        });
    }

    function isActive(room) {
        return isSelected(room);
    }

    function showSpeaker(speaker) {
        PersonModal.openFor([speaker]);
    }

    function countSelected() {
        return _.filter(vm.rooms, 'selected').length;
    }

    var getRoomBy = function (name) {
        return _.find(vm.rooms, function (room) {
            return room.name == name;
        });
    };
    var isSelected = function (name) {
        return getRoomBy(name).selected;
    };
}
module.exports = AgendaController;