require('angular-bootstrap/dist/ui-bootstrap.min.js');
require('angular-bootstrap/dist/ui-bootstrap-tpls.min.js');
require('angular-hotkeys/build/hotkeys.min.js');
require('angular-hotkeys/build/hotkeys.min.css');

module.exports = require('ng')
		.module('directives.person', ['cfp.hotkeys', 'ui.bootstrap'])
		.directive('person', require('./PersonDirective'))
		.service('PersonModal', require('./PersonModal'))
		.name;