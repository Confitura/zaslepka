'use strict';
require('./news.less');
require('ng').module('news', [])
    .factory('News', require('./News'))
    .controller('NewsCtrl', require('./news.controller'))
    .directive('newsItem', require('./news.item.directive'))
;
module.exports ='news';