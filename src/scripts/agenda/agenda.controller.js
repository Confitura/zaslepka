'use strict';
var _ = require('lodash');
/* @ngInject */
function AgendaController(Agenda, PersonModal) {
    var vm = this;
    vm.model = {};
    vm.selectedRoom = null;
    vm.isActive = isActive;
    vm.getAllPresentationsForSlot = getAllPresentationsForSlot;
    vm.getRoomSpanFor = getRoomSpanFor;
    vm.select = select;
    vm.showSpeaker = showSpeaker;

    Agenda.get(function (agenda) {
        vm.model = agenda;
        console.log(vm.model.rooms);
        vm.selectedRoom = agenda.rooms[0];
    });

    function getAllPresentationsForSlot(slotId) {
        return _.chain(findSlotBy(slotId).presentations)
            .filter(function (presentation) {
                //if ($('.rooms-navbar').is(':visible')) {
                    return presentation.room === 'ALL' || presentation.room === vm.selectedRoom;
                //}
                //return true;
            })
            .value();
    }

    function getRoomSpanFor(presentation) {
        return presentation.room === 'ALL' ? vm.model.rooms.length : 1;
    }

    function select(room) {
        vm.selectedRoom = room;
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

    function isActive(room){
        return room === vm.selectedRoom;
    }

    function showSpeaker(speaker){
        PersonModal.openFor([speaker]);
    }
}
module.exports = AgendaController;