'use strict';
var moment = require('moment');
/* @ngInject */
function TwitterCtrl($scope, Twitter) {
    Twitter.query(function (tweets) {
        $scope.tweet = tweets[0];
    });

    $scope.getDate = function (timestamp) {
        return moment(Date.parse(timestamp)).fromNow();
    };
}
module.exports = TwitterCtrl;