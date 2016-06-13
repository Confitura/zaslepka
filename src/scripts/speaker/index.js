'use strict';
var ng = require('ng');
ng
		.module('speaker', [require('directives/person')])
		.factory('Speaker', require('./speaker.service'))
		.controller('SpeakerListController', require('./list/speaker-list.controller'));
module.exports = 'speaker';