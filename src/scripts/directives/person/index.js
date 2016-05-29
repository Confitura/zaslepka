require('angular-animate/angular-animate');
require('angular-bootstrap/ui-bootstrap.min');
require('angular-bootstrap/ui-bootstrap-tpls.min');
require('angular-hotkeys/build/hotkeys.min');
require('angular-hotkeys/build/hotkeys.min.css');
require('./person-modal.less');

module.exports = require('ng')
		.module('directives.person', ['ngAnimate', 'cfp.hotkeys', 'ui.bootstrap'])
		.directive('person', require('./PersonDirective'))
		.directive('persons', require('./PersonsDirective'))
		.service('PersonModal', require('./PersonModal'))
		.name;