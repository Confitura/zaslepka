'use strict';
/* @ngInject */
function NewsCtrl($scope, News) {
    News.query(function (news) {
        $scope.news = news[0];
    });
}
module.exports = NewsCtrl;