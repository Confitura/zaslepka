'use strict';
var _ = require('lodash');

/* @ngInject */
function PartnersController(Partners) {
	var partners = Partners.get();

	var vm = this;
	vm.types = [
		'platynowi',
		'złoci',
		'srebrni',
		'brązowi',
		'technologiczni',
		'media'
	];

	vm.selected = vm.types[0];


	vm.hasAnyFor = function (type) {
		return partners[type].length > 0;
	};

	vm.select = function (type) {
		vm.selected = type;
	};

	vm.getForSelected = function () {
		return partners[vm.selected];
	};

	vm.isSelected = function (type) {
		return vm.selected === type;
	};


}
module.exports = PartnersController;