'use strict';
require('./partners.banner.tpl.html');
require('bxslider/dist/jquery.bxslider.min.js');
require('bxslider/dist/jquery.bxslider.min.css');

/* @ngInject */
function PartnersBannerController(Partners, $timeout) {
    var partners = null;
    Partners.get().$promise
        .then(function (data) {
            partners = data;
            $timeout(function () {
                $('.bxslider').bxSlider({
                    mode: 'fade',
                    auto: true,
                    controls: false,
                    preloadImages: 'all',
                    pager: false,
                    randomStart: true,
                    autoHober: true
                });
            });
        });

    var vm = this;
    vm.types = ['platinum', 'gold', 'silver', 'brown'];
    vm.hasAnyFor = hasAnyFor;
    vm.getAllFor = getAllFor;

    function hasAnyFor(type) {
        return partners && partners[type] && partners[type].length > 0;
    }

    function getAllFor(type) {
        return partners[type];
    }


}
module.exports = PartnersBannerController;