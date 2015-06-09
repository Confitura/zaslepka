'use strict';
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
		"Dopiero się uczę",
		"Zawodowo mniej niż rok",
		"Zawodowo 1-2 lata",
		"Zawodowo 2-4 lata",
		"Zawodowo 4-8 lata",
		"Zawodowo powyżej 8 lat"
	];
	vm.occupationLevels = [
		"Student/uczeń",
		"Programista",
		"Tester",
		"Kierownik zespołu",
		"Kierownik projektu",
		"Inne"
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
							.content('Wybrano maksymalną liczbę prezentacji')
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