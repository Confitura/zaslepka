require('./speaker-list.tpl.html');

/* @ngInject */
function SpeakerListController(Speaker, PersonModal) {
    var vm = this;
    vm.list = Speaker.query();
    vm.detailsOf = detailsOf;

    function detailsOf(person){
        PersonModal.openFor([person]);
    }
}

module.exports = SpeakerListController;