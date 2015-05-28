'use strict';
function PersonDirective() {
	return {
		restrict: 'E',
		scope: {
			person: "=for"
		},
		template: require('./template.html'),
		controller: require('./PersonDirectiveController')
	};
}
module.exports = PersonDirective;