'use strict';
var ng = require('ng');
ng.module('news', [])
    .factory('News', require('./News'))
    .controller('NewsCtrl', require('./NewsCtrl'));
module.exports ='news';