'use strict';
require('ng').module('speakers', [require('directives/person')])
    .factory('Speakers', require('./Speakers'))
    .controller('SpeakersController', require('./SpeakersController'));
module.exports ='speakers';