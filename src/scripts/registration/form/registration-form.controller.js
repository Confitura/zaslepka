'use strict';
require('./registration-form.tpl.html');
require('./registration-success.tpl.html');
require('./registration-form.less');
var _ = require('lodash');
/* @ngInject */
function RegistrationFormController(Registration, Presentations, $mdToast, $stateParams, $state) {
	var vm = this;
	vm.LIMIT = 7;
	vm.sizes = [
		'S',
		'M',
		'L',
		'XL',
		'XXL'
	];
	vm.experienceLevels = [
		"I am just learning",
		"Less than a year",
		"1-2 years",
		"2-4 years",
		"4-8 years",
		"More than 8 years"
	];
	vm.occupationLevels = [
		"Student",
		"Developer",
		"Tester",
		"Team Lead",
		"Project Lead",
		"Other"
	];
	vm.presentations = Presentations.query();
	Registration.get({token: $stateParams.token})
			.$promise
			.then(function (participant) {
				if (participant.status === 'FINAL_CONFIRMED') {
					$state.go('registration-success');
				}
				vm.participant = participant;
			})
			.catch(function () {
				vm.error = true;
			});

	vm.isDisabled = function (presentation) {
		return (_.isUndefined(presentation.selected) || presentation.selected == false) &&
				maxNumberOfPresentationsSelected();
	};

	vm.showWarning = function () {
		if (maxNumberOfPresentationsSelected()) {
			$mdToast.show(
					$mdToast.simple()
							.content('Maximum number of presentations have been selected')
							.position('top right')
							.hideDelay(10000)
			);
		}
	};

	vm.doRegister = function () {
		vm.participant.chosenPresentations = _.map(findSelectedPresentations(), function (presentation) {
			return _.pick(presentation, 'id');
		});
		Registration.save(vm.participant).$promise
				.then(function () {
					$state.go('registration-success');
				});
	};

	function findSelectedPresentations() {
		return _.filter(vm.presentations, 'selected');
	}

	function maxNumberOfPresentationsSelected() {
		return findSelectedPresentations().length >= vm.LIMIT;
	}

}
module.exports = RegistrationFormController;