'use strict';
var ng = require('ng');
require('slick-carousel/slick/slick.css');
require('slick-carousel/slick/slick-theme.css');
require('slick-carousel/slick/slick.min');
require('angular-slick/dist/slick.min');
ng
		.module('speakers', ['slick', require('directives/person')])
		.factory('Speakers', require('./Speakers'))
		.controller('SpeakersController', require('./SpeakersController'));
module.exports = 'speakers';