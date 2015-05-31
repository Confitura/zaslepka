'use strict';
function PersonsDirective() {
	return {
		restrict: 'E',
		scope: {
			persons: "=for"
		},
		template: require('./persons-template.html')
	};
}
module.exports = PersonsDirective;