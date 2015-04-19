'use strict';
require('ng').module('twitter',[])
    .factory('Twitter', require('./Twitter'))
    .controller('TwitterCtrl', require('./TwitterCtrl'));
module.exports ='twitter';