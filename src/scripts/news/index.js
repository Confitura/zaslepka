'use strict';
require('ng').module('news', [])
    .factory('News', require('./News'))
    .controller('NewsCtrl', require('./NewsCtrl'));
module.exports ='news';