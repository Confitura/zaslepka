'use strict';

require('./presentation-list.less');
require('./presentation-list.tpl.html');

/* @ngInject */
function PresentationListController(Presentations, PersonModal, $anchorScroll, $timeout, $stateParams, $window) {
    var vm = this;
    vm.list = Presentations.query(function () {

        $timeout(function () {
            console.log($stateParams.id);
            if ($window.innerWidth >= 768) {
                $anchorScroll.yOffset = 80;
            }
            $anchorScroll($stateParams.id);
        });
    });

    vm.show = show;
    vm.getDescriptionFor = getDescriptionFor;

    function getDescriptionFor(presentation) {
        return presentation.longDesc ? presentation.longDesc : presentation.shortDesc;
    }

    function show(speaker) {
        PersonModal.openFor([speaker]);
    }

}
module.exports = PresentationListController;