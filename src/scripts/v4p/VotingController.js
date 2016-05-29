'use strict';
var _ = require('lodash');
/* @ngInject */
function VotingController(Voting, hotkeys, PersonModal, $timeout) {
    var vm = this;
    var speakerModal = null;

    vm.info = {SHORT: 'short', FULL: 'full'};
    vm.configuration = {info: 'short', idx: 0};
    vm.rating = ['-1', '0', '+1'];
    vm.votes = [];




    vm.isVisible = function (idx) {
        return Voting.isCurrent(idx);
    };
    vm.isActive = function () {
        return Voting.isActive();
    };

    vm.next = function () {
        submit(function () {
            Voting.next();
            vm.direction = 'next';
        });
    };

    vm.prev = function () {
        submit(function () {
            var moved = Voting.prev();
            vm.direction = moved ? 'prev' : 'block';
        });
    };

    vm.hasPrevious = function () {
        return vm.currentIdx() > 1;
    };

    vm.showInfo = function (type) {
        vm.configuration.info = type;
    };

    vm.toggleInfo = function () {
        vm.showInfo(vm.configuration.info === vm.info.SHORT ? vm.info.FULL : vm.info.SHORT);
    };

    vm.getInfoFor = function (presentation) {
        return vm.configuration.info === vm.info.SHORT ? presentation.shortDesc : presentation.longDesc;
    };

    vm.up = function () {
        Voting.up();
    };

    vm.down = function () {
        Voting.down();
    };
    vm.vote = function (vote) {
        console.log("voting", vote);
        Voting.vote(parseInt(vote));
    };

    vm.loading = function () {
        return _.isEmpty(vm.votes);
    };

    vm.notStarted = function () {
        return Voting.notStarted();
    };

    vm.started = function () {
        return !vm.notStarted();
    };

    vm.start = function () {
        Voting.start();
        loadVotes();
    };
    vm.currentIdx = function () {
        return Voting.getIdx();
    };

    vm.open = function () {
        vm.$broadcast("open");
    };

    vm.showSpeakers = function () {
        PersonModal
            .openFor(Voting.getCurrent().presentation.speakers)
            .onClose(function () {
                bindKeys();
            });
    };
    vm.showSpeaker = function (speaker) {
        PersonModal
            .openFor([speaker])
            .onClose(function () {
                bindKeys();
            });
    };
    bindKeys();

    function submit(callback) {
        vm.saving = true;
        Voting.submit()
            .then(function () {
                vm.saving = false;
                callback();
            });
    }

    function callback(event, method) {
        if (vm.isActive()) {
            event.preventDefault();
            vm[method]();
        }
    }

    function bindKeys() {
        hotkeys.del('alt+up');
        hotkeys.del('alt+down');
        hotkeys.del('alt+right');
        hotkeys.del('alt+left');
        hotkeys.del('s');
        hotkeys.del('d');
        hotkeys.add({
            persistent: false,
            combo: 'd',
            description: 'toggle between TL;DR and full description',
            callback: function (event) {
                callback(event, "toggleInfo");
            }
        });
        hotkeys.add({
            persistent: false,
            combo: 's',
            description: 'Speakers bio',
            callback: function (event) {
                callback(event, "showSpeakers");
            }
        });
        hotkeys.add({
            persistent: false,
            combo: 'alt+up',
            description: 'Vote up!',
            callback: function (event) {
                callback(event, "up");
            }
        });
        hotkeys.add({
            persistent: false,
            combo: 'alt+down',
            description: 'Vote down!',
            callback: function (event) {
                callback(event, "down");
            }
        });
        //hotkeys.add({
        //	persistent: false,
        //	combo: 'right',
        //	description: 'Next presentation',
        //	callback: function (event) {
        //		callback(event, "next");
        //	}
        //});
        //hotkeys.add({
        //	persistent: false,
        //	combo: 'left',
        //	description: 'previous presentation',
        //	callback: function (event) {
        //		callback(event, "prev");
        //	}
        //});


    }
    function loadVotes() {
        Voting.get().then(function (votes) {
            vm.votes = votes;
            $timeout(function () {
                var slider = $('.vote-slider');
                slider.slick(
                    {
                        dots: false,
                        infinite: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        lazyLoad: 'ondemand',
                        prevArrow: '<div class="slick-prev vote-prev"  alt="previous" ></div>',
                        nextArrow: '<div class="slick-next vote-next"  alt="next"></div>'
                    }
                );
                slider.slick('slickAdd', '<div></div>');
                slider.slick('slickGoTo', vm.currentIdx() - 1, true);
                slider.on('beforeChange', function (event, slick, curentSlide, nextSlide) {
                    var step = nextSlide - curentSlide;
                    console.log('move', step);
                    if (step == 1) {
                        vm.next();
                    } else if (step == -1) {
                        vm.prev();
                    }
                });

            });
        });
    }

    if (vm.started()){
        loadVotes();
    }


}

module.exports = VotingController;