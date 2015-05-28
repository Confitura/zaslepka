'use strict';
/* @ngInject */
function PageDirective(Pages) {
	return {
		scope: {name: '@'},
		template: '<div ng-bind-html="content.text"></div>',
		controller: /* @ngInject */function ($scope) {
			$scope.content = Pages.get({name: $scope.name});
		}
	};
}

module.exports = PageDirective;