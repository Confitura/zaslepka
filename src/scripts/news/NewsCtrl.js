'use strict';
require('./news.banner.tpl.html');
/* @ngInject */
function NewsCtrl($scope, News) {
    var vm = this;

    News.query(function (news) {
        vm.list = news;
    });
}
module.exports = NewsCtrl;