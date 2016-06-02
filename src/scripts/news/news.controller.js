'use strict';
require('./banner/news-banner.tpl.html');
/* @ngInject */
function NewsController(News) {
    var vm = this;

    News.query(function (news) {
        vm.list = news;
    });
}
module.exports = NewsController;