'use strict';
var angular = require('ng');
require('imports?require=>false!angular-hammer/angular.hammer.js');
require('angular-bootstrap/ui-bootstrap.min');
require('angular-bootstrap/ui-bootstrap-tpls.min');
require('angular-cookies/angular-cookies.min');
require('angular-hotkeys/build/hotkeys.min');
require('angular-hotkeys/build/hotkeys.min.css');

module.exports = angular.module('v4p',
		['ngCookies', 'cfp.hotkeys', 'ui.bootstrap', 'hmTouchEvents',
			require('directives/person'), require('directives/page')])
		.factory('Vote', require('./Vote'))
		.factory('Voting', require('./Voting'))
		.controller('VotingController', require('./VotingController'))
		.name;
