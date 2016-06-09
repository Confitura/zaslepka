require('angular-animate/angular-animate');
require('angular-ui-bootstrap/dist/ui-bootstrap');
require('angular-ui-bootstrap/dist/ui-bootstrap-tpls');
require('angular-hotkeys/build/hotkeys.min');
require('angular-hotkeys/build/hotkeys.min.css');
require('./person-modal.less');

module.exports = require('ng')
		.module('directives.person', ['ngAnimate', 'cfp.hotkeys', 'ui.bootstrap'])
		.directive('person', require('./PersonDirective'))
		.directive('persons', require('./PersonsDirective'))
		.service('PersonModal', require('./PersonModal'))
		.name;