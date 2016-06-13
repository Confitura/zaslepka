'use strict';
/* @ngInject */
function SpeakersController(Speakers) {
	var vm = this;
	vm.speakers = Speakers.query();
}
module.exports = SpeakersController;