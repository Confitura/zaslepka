'use strict';
/* @ngInject */
function PersonModalController(persons, $scope, hotkeys) {
	unbindKeys();
	bindKeys();
	var idx = 0;
	$scope.hasMany = function () {
		return persons.length > 1;
	};

	$scope.person = function () {
		return persons[idx];
	};
	$scope.next = function () {
		idx = (idx + 1) % persons.length;
	};
	$scope.prev = function () {
		idx = Math.abs(idx - 1) % persons.length;
	};

	$scope.$on('modal.closing', function () {
		unbindKeys();
	});

	function unbindKeys() {
		hotkeys.del('alt+left');
		hotkeys.del('alt+right');
	}

	function bindKeys() {
		hotkeys.bindTo($scope)
				.add({
					persistent: false,
					combo: 'alt+right',
					description: 'Następna prezentacja',
					callback: function (event) {
						event.preventDefault();
						$scope.next();
					}
				})
				.add({
					persistent: false,
					combo: 'alt+left',
					description: 'Poprzednia prezentacja',
					callback: function (event) {
						event.preventDefault();
						$scope.prev();
					}
				});
	}
}

module.exports = PersonModalController;