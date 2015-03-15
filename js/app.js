angular.module('confitura', ['ngResource', 'ngSanitize', 'angular-loading-bar', 'ngAnimate'])
    .config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeSpinner = false;
        moment.locale('pl');
    }])
    .factory('Twitter', function ($resource) {
        return $resource('1http://c4p.confitura.pl/api/twitter');
    })
    .factory('News', function ($resource) {
        return $resource('http://c4p.confitura.pl/api/news/0/1');
    })
    .controller('TwitterCtrl', function ($scope, Twitter) {
        Twitter.query(function (tweets) {
            $scope.tweet = tweets[0];
        });

        $scope.getDate = function (timestamp) {
            return moment(Date.parse(timestamp)).fromNow();
        };
    })
    .controller('NewsCtrl', function ($scope, $sce, News) {
        News.query(function (news) {
            $scope.news = news[0];
        })
    })
;