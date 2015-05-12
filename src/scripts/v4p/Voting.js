'use strict';
var _ = require('lodash');
/* @ngInject */
function Voting(Vote, $q, $cookies) {
	var _items = [];
	var _idx = 0;

	function move(direction) {
		_idx += direction;
	}


	function moveVote(direction) {
		var vote = _items[_idx].vote + direction;
		if (vote < -1 || vote > 1) {
			vote = direction;
		}
		return vote;
	}


	return {
		get: function () {
			var deferred = $q.defer();
			var key = $cookies.get('key');
			var voteObj = Vote.get({key: key}, function () {
				_idx = voteObj.voted;
				_items = voteObj.presentations;
				_.each(_items, function (item) {
					if (item.vote === null) {
						item.vote = 0;
					}
				});
				$cookies.put('key', voteObj.key);
				deferred.resolve(_items);
			});
			return deferred.promise;
		},
		getIdx: function () {
			return _idx + 1;
		},
		isActive: function () {
			return _.isEmpty(_items) || _idx < _items.length;
		},
		next: function () {
			move(1);
		},
		prev: function () {
			if (this.hasPrevious()) {
				move(-1);
				return true;
			} else {
				return false;
			}
		},
		hasPrevious: function () {
			return _idx > 0;
		},
		isCurrent: function (idx) {
			return _idx === idx;
		},
		getCurrent: function () {
			return _items[_idx];
		},
		vote: function (vote) {
			this.getCurrent().vote = vote;
		},
		up: function () {
			this.vote(moveVote(1));
		},
		down: function () {
			this.vote(moveVote(-1));
		},
		submit: function () {
			var current = this.getCurrent();
			var vote = new Vote();
			vote.key = $cookies.get('key') || '';
			vote.rate = current.vote;
			vote.presentationId = current.presentation.id;
			var deferred = $q.defer();
			vote.$save(function () {
				deferred.resolve();
			});
			return deferred.promise;
		},
		notStarted: function () {
			return _.isUndefined($cookies.get('started'));
		},
		start: function () {
			$cookies.put('started', true);
		}

	};
}
module.exports = Voting;