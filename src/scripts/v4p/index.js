'use strict';
var angular = require('ng');
require('angular-bootstrap/ui-bootstrap.min');
require('angular-bootstrap/ui-bootstrap-tpls.min');
require('angular-cookies/angular-cookies.min');
require('angular-hotkeys/build/hotkeys.min');
require('angular-hotkeys/build/hotkeys.min.css');
require('./v4p.tpl.html');
require('./v4p.less');
require('slick-carousel/slick/slick.min');
require('slick-carousel/slick/slick.css');
require('slick-carousel/slick/slick-theme.css');

module.exports = angular.module('v4p',
		['ngCookies', 'cfp.hotkeys', 'ui.bootstrap', 'hmTouchEvents',
			require('directives/person'), require('directives/page')])
		.factory('Vote', require('./Vote'))
		.factory('Voting', require('./Voting'))
		.controller('VotingController', require('./VotingController'))
		.name;
