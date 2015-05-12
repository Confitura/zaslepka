'use strict';
var _ = require('lodash');
/* @ngInject */
function VotingController(Voting, hotkeys, $modal, $scope) {
	var vm = this;
	var speakerModal = null;

	vm.info = {SHORT: 'short', FULL: 'full'};
	vm.configuration = {info: 'short', idx: 0};
	vm.rating = ['+1', '0', '-1'];
	vm.votes = [];

	Voting.get().then(function (votes) {
		vm.votes = votes;
	});

	vm.isVisible = function (idx) {
		return Voting.isCurrent(idx);
	};
	vm.isActive = function () {
		return Voting.isActive();
	};

	vm.next = function () {
		submit(function () {
			Voting.next();
			vm.direction = 'next';
		});
	};

	vm.prev = function () {
		submit(function () {
			var moved = Voting.prev();
			vm.direction = moved ? 'prev' : 'block';
		});
	};

	vm.hasPrevious = function () {
		return vm.currentIdx() > 1;
	};

	vm.showInfo = function (type) {
		vm.configuration.info = type;
	};
	vm.toggleInfo = function () {
		vm.showInfo(vm.configuration.info === vm.info.SHORT ? vm.info.FULL : vm.info.SHORT);
	};

	vm.up = function () {
		Voting.up();
	};

	vm.down = function () {
		Voting.down();
	};
	vm.vote = function (vote) {
		Voting.vote(parseInt(vote));
	};

	vm.loading = function () {
		return _.isEmpty(vm.votes);
	};

	vm.notStarted = function () {
		return Voting.notStarted();
	};

	vm.started = function () {
		return !vm.notStarted();
	};

	vm.start = function () {
		return Voting.start();
	};
	vm.currentIdx = function () {
		return Voting.getIdx();
	};

	vm.open = function () {
		vm.$broadcast("open");
	};

	vm.showSpeakers = function () {
		vm.showModal(Voting.getCurrent().presentation.speakers);
	};

	vm.showSpeaker = function (speaker) {
		vm.showModal([speaker]);
	};

	vm.showModal = function (speakers) {
		if (speakerModal) {
			return;
		}
		hotkeys.del('alt+left');
		hotkeys.del('alt+right');
		speakerModal = $modal.open({
			backdropClass: 'person-modal-backdrop',
			windowClass: 'person-modal',
			size: 'md',
			templateUrl: 'views/person-modal.html',
			controller: /* @ngInject */ function (persons, $scope, hotkeys) {
				hotkeys
						.add({
							persistent: false,
							combo: 'alt+right',
							description: 'Następna prezentacja?',
							callback: function (event) {
								event.preventDefault();
								$scope.next();
							}
						});
				hotkeys.add({
					persistent: false,
					combo: 'alt+left',
					description: 'Poprzednia prezentacja',
					callback: function (event) {
						event.preventDefault();
						$scope.prev();
					}
				});

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
			},
			resolve: {
				persons: function () {
					return speakers;
				}
			}
		});
		speakerModal.result.finally(function () {
			speakerModal = null;
			bindKeys();

		});
	};

	vm.helpOpened = false;
	bindKeys();

	function submit(callback) {
		vm.saving = true;
		Voting.submit()
				.then(function () {
					vm.saving = false;
					callback();
				});
	}

	function callback(event, method) {
		if (vm.isActive()) {
			event.preventDefault();
			vm[method]();
		}
	}

	function bindKeys() {
		hotkeys.del('alt+up');
		hotkeys.del('alt+down');
		hotkeys.del('alt+right');
		hotkeys.del('alt+left');
		hotkeys.del('p');
		hotkeys.del('i');
		hotkeys.add({
			persistent: false,
			combo: 'i',
			description: 'krótki/pełny opis prezentacji',
			callback: function (event) {
				callback(event, "toggleInfo");
			}
		});
		hotkeys.add({
			persistent: false,
			combo: 'p',
			description: 'Informacja o prelegencie',
			callback: function (event) {
				callback(event, "showSpeakers");
			}
		});
		hotkeys.add({
			persistent: false,
			combo: 'alt+up',
			description: 'Łapka w górę!',
			callback: function (event) {
				callback(event, "up");
			}
		});
		hotkeys.add({
			persistent: false,
			combo: 'alt+down',
			description: 'Łapka w dół!',
			callback: function (event) {
				callback(event, "down");
			}
		});
		hotkeys.add({
			persistent: false,
			combo: 'alt+right',
			description: 'Następna prezentacja',
			callback: function (event) {
				callback(event, "next");
			}
		});
		hotkeys.add({
			persistent: false,
			combo: 'alt+left',
			description: 'Poprzednia prezentacja',
			callback: function (event) {
				callback(event, "prev");
			}
		});


	}

}

module.exports = VotingController;