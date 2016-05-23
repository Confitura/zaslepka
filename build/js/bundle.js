webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(2);


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	__webpack_require__(5);
	__webpack_require__(11);
	__webpack_require__(36);
	__webpack_require__(37);
	var ng = __webpack_require__(38);
	__webpack_require__(39);
	__webpack_require__(40);
	__webpack_require__(41);
	__webpack_require__(42);
	__webpack_require__(43).locale('pl');
	__webpack_require__(45);
	ng.module('confitura', [
	        'ngAnimate', 'ngResource', 'ngSanitize', 'angular-loading-bar', 'ui.router',
	        //require('twitter'),
	        __webpack_require__(46),
	        __webpack_require__(50)
	        //require('v4p'),
	        //require('speakers'),
	        //require('presentations'),
	        //require('organizers'),
	        //require('registration'),
	        //require('agenda')
	    ])
	    .constant('apiServer', 'http://c4p.confitura.pl/api')
	    .config(/*@ngInject*/ ["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
	        $urlRouterProvider
	            .when('', '/')
	            .when('/presentations', '/presentations/');
	        $urlRouterProvider
	            .otherwise('/');
	        $stateProvider
	            .state('main', {
	                url: '/',
	                template: __webpack_require__(64)
	            })
	            .state('partners', {
	                url: '/partners',
	                templateUrl: 'partners/partners.tpl.html'
	            })
	            .state('partner', {
	                url: '/partner',
	                params: {
	                    'partner': null
	                },
	                templateUrl: 'partners/partner.tpl.html'
	            })
	            .state('speakers', {
	                url: '/speakers',
	                templateUrl: 'views/speakers.html'
	            })
	            .state('presentations', {
	                url: '/presentations/:id',
	                templateUrl: 'views/presentations.html'
	            })
	            .state('v4p', {
	                url: '/v4p',
	                templateUrl: 'views/v4p.html'
	            })
	            .state('organizers', {
	                url: '/organizers',
	                templateUrl: 'views/organizers.html'
	            })
	            .state('registration', {
	                url: '/registration',
	                templateUrl: 'views/registration.html'
	            })
	            .state('registration-success', {
	                url: '/registration/success',
	                templateUrl: 'views/registration-success.html'
	            })
	            .state('registration-form', {
	                url: '/registration/:token',
	                templateUrl: 'views/registration-form.html'
	            })
	            .state('agenda', {
	                url: '/agenda',
	                templateUrl: 'views/agenda.html'
	            })
	            .state('spoina', {
	                url: '/spoina',
	                templateUrl: 'views/spoina.html'
	            })
	        ;
	    }])
	    .run(function ($timeout, $rootScope) {
	        $timeout(function () {
	            //TO REPLACE WITH BS
	            $('#mobile-menu').click(function () {
	                var m = $('#mobile-nav');
	                m.is(':visible') ? m.fadeOut('fast') : m.fadeIn('fast');
	            });

	            $('a.mlink').click(function () {
	                console.log('clicked');
	                var m = $('#mobile-nav');
	                m.fadeOut('fast');

	            });
	        });
	        $rootScope.$on('$viewContentLoaded', function () {
	            $("body").animate({ scrollTop: 0 });
	        });

	    });
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(3);
	$(function () {
		'use strict';
		(function (i, s, o, g, r, a, m) {
			i['GoogleAnalyticsObject'] = r;
			i[r] = i[r] || function () {
						(i[r].q = i[r].q || []).push(arguments)
					}, i[r].l = 1 * new Date();
			a = s.createElement(o), m = s.getElementsByTagName(o)[0];
			a.async = 1;
			a.src = g;
			m.parentNode.insertBefore(a, m);
		})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

		ga('create', 'UA-23253679-1', 'confitura.pl');
		ga('send', 'pageview', location.hash);
		$('header video').height(function () {
			return $(this).width() * (440 / 728);
		});
		if (document.cookie.indexOf('accepted') < 0) {
			$('.cookies').removeClass('hidden').find('.navbar-btn').click(function () {
				document.cookie = 'accepted=1; expires=Thu, 31 Dec 2015 22:59:59 GMT';
				$('.cookies').hide();
				return false;
			});
		}
		window.onhashchange = function () {
			ga('send', 'pageview', location.hash);
		}
	});

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
	 * Bootstrap: collapse.js v3.3.6
	 * http://getbootstrap.com/javascript/#collapse
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // COLLAPSE PUBLIC CLASS DEFINITION
	  // ================================

	  var Collapse = function (element, options) {
	    this.$element      = $(element)
	    this.options       = $.extend({}, Collapse.DEFAULTS, options)
	    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
	                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
	    this.transitioning = null

	    if (this.options.parent) {
	      this.$parent = this.getParent()
	    } else {
	      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
	    }

	    if (this.options.toggle) this.toggle()
	  }

	  Collapse.VERSION  = '3.3.6'

	  Collapse.TRANSITION_DURATION = 350

	  Collapse.DEFAULTS = {
	    toggle: true
	  }

	  Collapse.prototype.dimension = function () {
	    var hasWidth = this.$element.hasClass('width')
	    return hasWidth ? 'width' : 'height'
	  }

	  Collapse.prototype.show = function () {
	    if (this.transitioning || this.$element.hasClass('in')) return

	    var activesData
	    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

	    if (actives && actives.length) {
	      activesData = actives.data('bs.collapse')
	      if (activesData && activesData.transitioning) return
	    }

	    var startEvent = $.Event('show.bs.collapse')
	    this.$element.trigger(startEvent)
	    if (startEvent.isDefaultPrevented()) return

	    if (actives && actives.length) {
	      Plugin.call(actives, 'hide')
	      activesData || actives.data('bs.collapse', null)
	    }

	    var dimension = this.dimension()

	    this.$element
	      .removeClass('collapse')
	      .addClass('collapsing')[dimension](0)
	      .attr('aria-expanded', true)

	    this.$trigger
	      .removeClass('collapsed')
	      .attr('aria-expanded', true)

	    this.transitioning = 1

	    var complete = function () {
	      this.$element
	        .removeClass('collapsing')
	        .addClass('collapse in')[dimension]('')
	      this.transitioning = 0
	      this.$element
	        .trigger('shown.bs.collapse')
	    }

	    if (!$.support.transition) return complete.call(this)

	    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

	    this.$element
	      .one('bsTransitionEnd', $.proxy(complete, this))
	      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
	  }

	  Collapse.prototype.hide = function () {
	    if (this.transitioning || !this.$element.hasClass('in')) return

	    var startEvent = $.Event('hide.bs.collapse')
	    this.$element.trigger(startEvent)
	    if (startEvent.isDefaultPrevented()) return

	    var dimension = this.dimension()

	    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

	    this.$element
	      .addClass('collapsing')
	      .removeClass('collapse in')
	      .attr('aria-expanded', false)

	    this.$trigger
	      .addClass('collapsed')
	      .attr('aria-expanded', false)

	    this.transitioning = 1

	    var complete = function () {
	      this.transitioning = 0
	      this.$element
	        .removeClass('collapsing')
	        .addClass('collapse')
	        .trigger('hidden.bs.collapse')
	    }

	    if (!$.support.transition) return complete.call(this)

	    this.$element
	      [dimension](0)
	      .one('bsTransitionEnd', $.proxy(complete, this))
	      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
	  }

	  Collapse.prototype.toggle = function () {
	    this[this.$element.hasClass('in') ? 'hide' : 'show']()
	  }

	  Collapse.prototype.getParent = function () {
	    return $(this.options.parent)
	      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
	      .each($.proxy(function (i, element) {
	        var $element = $(element)
	        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
	      }, this))
	      .end()
	  }

	  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
	    var isOpen = $element.hasClass('in')

	    $element.attr('aria-expanded', isOpen)
	    $trigger
	      .toggleClass('collapsed', !isOpen)
	      .attr('aria-expanded', isOpen)
	  }

	  function getTargetFromTrigger($trigger) {
	    var href
	    var target = $trigger.attr('data-target')
	      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

	    return $(target)
	  }


	  // COLLAPSE PLUGIN DEFINITION
	  // ==========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.collapse')
	      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

	      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
	      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
	      if (typeof option == 'string') data[option]()
	    })
	  }

	  var old = $.fn.collapse

	  $.fn.collapse             = Plugin
	  $.fn.collapse.Constructor = Collapse


	  // COLLAPSE NO CONFLICT
	  // ====================

	  $.fn.collapse.noConflict = function () {
	    $.fn.collapse = old
	    return this
	  }


	  // COLLAPSE DATA-API
	  // =================

	  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
	    var $this   = $(this)

	    if (!$this.attr('data-target')) e.preventDefault()

	    var $target = getTargetFromTrigger($this)
	    var data    = $target.data('bs.collapse')
	    var option  = data ? 'toggle' : $this.data()

	    Plugin.call($target, option)
	  })

	}(jQuery);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(38).module('news', [])
	    .factory('News', __webpack_require__(47))
	    .controller('NewsCtrl', __webpack_require__(48));
	module.exports ='news';

/***/ },
/* 47 */
/***/ function(module, exports) {

	'use strict';
	/* @ngInject */
	function News($resource, apiServer) {
	    return $resource(apiServer + '/news/0/3');
	}
	News.$inject = ["$resource", "apiServer"];
	module.exports = News;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(49);
	/* @ngInject */
	function NewsCtrl($scope, News) {
	    var vm = this;

	    News.query(function (news) {
	        vm.list = news;
	    });
	}
	NewsCtrl.$inject = ["$scope", "News"];
	module.exports = NewsCtrl;

/***/ },
/* 49 */
/***/ function(module, exports) {

	var path = 'news/news.banner.tpl.html';
	var html = "<section id=\"news-confitura\">\n    <div class=\"row-fluid\">\n        <div class=\"col-lg-12 news-confitura-header\"><h2>News</h2></div>\n    </div>\n\n    <div class=\"news-container col-lg-12\" ng-controller=\"NewsCtrl as news\">\n        <div class=\"news-confitura-left\">\n    <span class=\"news-title font-white ease\">\n    {{news.list[0].title}}\n    </span>\n    <span class=\"news-excerpt font-white ease\" ng-bind-html=\"news.list[0].shortText\">\n    </span>\n    <span class=\"news-date font-white ease\">\n     {{news.list[0].date.month}} {{news.list[0].date.day}} {{news.list[0].date.year}}\n    </span>\n        </div>\n        <div class=\"news-confitura-right\" ng-if=\"news.list.length > 1\">\n            <div class=\"semi-square black\">\n    <span class=\"news-title font-white ease\">\n    {{news.list[1].title}}\n    </span>\n    <span class=\"news-excerpt font-white ease\" ng-bind-html=\"news.list[1].shortText\">\n    </span>\n    <span class=\"news-date font-white ease\">\n        {{news.list[1].date.month}} {{news.list[1].date.day}} {{news.list[1].date.year}}\n\n    </span>\n            </div>\n            <div class=\"semi-square beige\" ng-if=\"news.list.length > 2\">\n    <span class=\"news-title font-black ease\">\n   {{news.list[2].title}}\n    </span>\n    <span class=\"news-excerpt font-black ease\" ng-bind-html=\"news.list[2].shortText\">\n    </span>\n    <span class=\"news-date font-black ease\">\n   {{news.list[2].date.month}} {{news.list[2].date.day}} {{news.list[2].date.year}}\n    </span>\n            </div>\n        </div>\n    </div>\n\n</section>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(51);
	__webpack_require__(38).module('partners',[])
	    .factory('Partners', __webpack_require__(54))
	    .controller('PartnersController', __webpack_require__(55))
	    .controller('PartnerController', __webpack_require__(57))
	    .controller('PartnersBannerController', __webpack_require__(59))
	;
	module.exports ='partners';

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(52);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?root=..!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/less-loader/index.js!./partners.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?root=..!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/less-loader/index.js!./partners.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, "section#partners-confitura .partners-header {\n  position: relative;\n  background: transparent url(" + __webpack_require__(53) + ") center center no-repeat;\n  background-size: cover;\n  filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='../../img/header-register.jpg', sizingMethod='scale');\n}\nsection#partners-confitura .partners-header h2 {\n  color: #ffffff;\n}\nsection#partners-confitura .partners-items {\n  background: transparent;\n  min-height: 350px;\n}\n@media all and (max-width: 768px) {\n  section#partners-confitura .partners-items {\n    min-height: 150px;\n  }\n}\nsection#partners-confitura .partner-type {\n  font-size: 3rem;\n  font-family: 'NeuzeitGro-Bol', Verdana, Tahoma, sans-serif;\n  padding-top: 70px;\n}\n@media all and (max-width: 768px) {\n  section#partners-confitura .partner-type {\n    padding-top: 5px;\n    padding-bottom: 20px;\n  }\n}\nsection#partners-confitura .partners-banner-container {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: space-around;\n      -ms-flex-pack: distribute;\n          justify-content: space-around;\n  -webkit-align-content: stretch;\n      -ms-flex-line-pack: stretch;\n          align-content: stretch;\n}\n@media all and (max-width: 768px) {\n  section#partners-confitura .partners-banner-container {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n}\nsection#partners-confitura .partners-banner-container > div {\n  -webkit-flex-basis: 100%;\n      -ms-flex-preferred-size: 100%;\n          flex-basis: 100%;\n}\nsection#partners-confitura .partner-header {\n  display: block;\n  text-align: center;\n  font-size: 4rem;\n  height: 110px;\n  font-family: 'NeuzeitGro-Bol', Verdana, Tahoma, sans-serif;\n}\nsection#partners-confitura .min-h {\n  height: 150px !important;\n}\nsection#partners-confitura .vcenter {\n  position: relative !important;\n}\nsection#partners-confitura .row-1140 {\n  display: block;\n  max-width: 1080px;\n  margin: 0 auto !important;\n}\nsection#partners-confitura .pt100 {\n  margin-top: 100px;\n}\nsection#partners-confitura .pb50 {\n  margin-bottom: 50px;\n}\nsection#partners-confitura .pb150 {\n  padding-bottom: 150px;\n}\nsection#partners-confitura img {\n  margin: auto;\n  max-width: 210px;\n  max-height: 80px;\n}\nsection#partners-confitura #partner {\n  padding-top: 50px;\n}\nsection#partners-confitura #partner img {\n  max-width: 400px;\n  max-height: 150px;\n}\nsection#partners-confitura .platinum img {\n  max-width: 350px;\n  max-height: 100px;\n}\nsection#partners-confitura .gold img {\n  max-width: 300px;\n  max-height: 70px;\n}\nsection#partners-confitura .silver img {\n  max-width: 250px;\n  max-height: 70px;\n}\nsection#partners-confitura .partner-description {\n  display: block;\n  text-shadow: none;\n  font-size: 2.5rem;\n  padding-top: 20px;\n  padding-left: 20px;\n  padding-right: 20px;\n}\nsection#partners-confitura .partners-logo-container {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-flow: row wrap;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  -webkit-justify-content: space-around;\n      -ms-flex-pack: distribute;\n          justify-content: space-around;\n}\n@media all and (max-width: 768px) {\n  section#partners-confitura .partners-logo-container {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n}\nsection#partners-confitura .partners-logo-container a {\n  padding: 20px;\n}\n", ""]);

	// exports


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "90e11006d489a2df093eb831379f754f.jpg";

/***/ },
/* 54 */
/***/ function(module, exports) {

	'use strict';

	/* @ngInject */
	function Partners($resource, apiServer) {
		return $resource(apiServer + '/sponsors');
	}
	Partners.$inject = ["$resource", "apiServer"];
	module.exports = Partners;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(56);

	/* @ngInject */
	function PartnersController(Partners, $state) {
	    var vm = this;
	    vm.list = Partners.get();
	    vm.types = [
	        'platinum',
	        'gold',
	        'silver',
	        'brown',
	        'media',
	        'press'
	    ];
	    vm.detailsOf = function(partner){
	        $state.go('partner', {partner: partner});
	    }


	}
	PartnersController.$inject = ["Partners", "$state"];
	module.exports = PartnersController;

/***/ },
/* 56 */
/***/ function(module, exports) {

	var path = 'partners/partners.tpl.html';
	var html = "<section id=\"partners-confitura\" ng-controller=\"PartnersController as partners\">\n    <div class=\"row-fluid\">\n        <div class=\"col-lg-12 partners-header\"><h2>partners</h2></div>\n    </div>\n    <div class=\"row-fluid\">\n        <div class=\"col-lg-12 pt100 pb50\" ng-repeat=\"type in partners.types\" ng-if=\"partners.list[type]\" ng-class=\"type\">\n            <div class=\"bg-white row-1140 text-center partner-header\">{{type}}</div>\n            <div class=\"bg-white row-1140 text-center\">\n                <div class=\"text-center\">\n                    <div class=\"vcenter text-center partners-logo-container\">\n                        <a href=\"\" class=\"a-abs\" ng-repeat=\"partner in partners.list[type]\" ng-click=\"partners.detailsOf(partner)\">\n                            <img class=\"img-responsive\" ng-src=\"{{partner.logo}}\"/>\n                        </a>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</section>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(58);

	/* @ngInject */
	function PartnersController($stateParams) {
	    var vm = this;
	    console.log($stateParams);
	    vm.model = $stateParams.partner


	}
	PartnersController.$inject = ["$stateParams"];
	module.exports = PartnersController;

/***/ },
/* 58 */
/***/ function(module, exports) {

	var path = 'partners/partner.tpl.html';
	var html = "<section id=\"partners-confitura\" class=\"beige\" ng-controller=\"PartnerController as partner\">\n    <!--<div class=\"row-fluid beige\">-->\n    <!--<div class=\"col-lg-12 beige\"><h2></h2></div>-->\n    <!--</div>-->\n    <div class=\"row-fluid beige\" id=\"partner\">\n        <div class=\"col-lg-12 beige pb150\">\n            <div class=\"row-1140\">\n                <div class=\"col-lg-5 beige\">\n                    <span class=\"img-speaker\">\n<a ng-href=\"{{partner.model.url}}\" target=\"_blank\">\n    <img class=\"img-responsive margin-auto\" ng-src=\"{{partner.model.logo}}\"/>\n</a>                    </span>\n                </div>\n                <div class=\"col-lg-7 beige\">\n                    <div class=\"ta-left pt30 person-name\"><h3># {{partner.model.name}} #</h3></div>\n                    <div class=\"partner-description\" ng-bind-html=\"partner.model.description\"></div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</section>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	__webpack_require__(60);
	__webpack_require__(61);
	__webpack_require__(62);

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
	PartnersBannerController.$inject = ["Partners", "$timeout"];
	module.exports = PartnersBannerController;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 60 */
/***/ function(module, exports) {

	var path = 'partners/partners.banner.tpl.html';
	var html = "<section id=\"partners-confitura\" ng-controller=\"PartnersBannerController as banner\">\n    <div class=\"row-fluid\">\n        <div class=\"col-lg-12 col-md-12\"><h2>our partners</h2></div>\n    </div>\n    <div class=\"row-fluid col-lg-12 partners-banner-container\">\n        <div ng-repeat=\"type in banner.types\" ng-include=\"'partner-item.html'\" ng-if=\"banner.hasAnyFor(type)\"></div>\n    </div>\n</section>\n\n<script type=\"text/ng-template\" id=\"partner-item.html\">\n    <div class=\"partners-items\">\n        <div class=\"partner-logo text-center\" >\n            <ul class=\"bxslider\">\n                <li ng-repeat=\"partner in banner.getAllFor(type)\">\n                    <a ng-href=\"{{partner.url}}\" target=\"_blank\">\n                        <img ng-src=\"{{partner.logo}}\"/>\n                    </a>\n                </li>\n            </ul>\n        </div>\n        <span class=\"partner-type text-center\" ng-if=\"banner.hasAnyFor(type)\">{{type}}</span>\n    </div>\n</script>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/**
	 * bxSlider v4.2.5
	 * Copyright 2013-2015 Steven Wanderski
	 * Written while drinking Belgian ales and listening to jazz

	 * Licensed under MIT (http://opensource.org/licenses/MIT)
	 */

	!function(a){var b={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,wrapperClass:"bx-wrapper",touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,ariaLive:!0,ariaHidden:!0,keyboardEnabled:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",stopAutoOnClick:!1,autoHover:!1,autoDelay:0,autoSlideForOnePage:!1,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,shrinkItems:!1,onSliderLoad:function(){return!0},onSlideBefore:function(){return!0},onSlideAfter:function(){return!0},onSlideNext:function(){return!0},onSlidePrev:function(){return!0},onSliderResize:function(){return!0}};a.fn.bxSlider=function(c){if(0===this.length)return this;if(this.length>1)return this.each(function(){a(this).bxSlider(c)}),this;var d={},e=this,f=a(window).width(),g=a(window).height();if(!a(e).data("bxSlider")){var h=function(){a(e).data("bxSlider")||(d.settings=a.extend({},b,c),d.settings.slideWidth=parseInt(d.settings.slideWidth),d.children=e.children(d.settings.slideSelector),d.children.length<d.settings.minSlides&&(d.settings.minSlides=d.children.length),d.children.length<d.settings.maxSlides&&(d.settings.maxSlides=d.children.length),d.settings.randomStart&&(d.settings.startSlide=Math.floor(Math.random()*d.children.length)),d.active={index:d.settings.startSlide},d.carousel=d.settings.minSlides>1||d.settings.maxSlides>1?!0:!1,d.carousel&&(d.settings.preloadImages="all"),d.minThreshold=d.settings.minSlides*d.settings.slideWidth+(d.settings.minSlides-1)*d.settings.slideMargin,d.maxThreshold=d.settings.maxSlides*d.settings.slideWidth+(d.settings.maxSlides-1)*d.settings.slideMargin,d.working=!1,d.controls={},d.interval=null,d.animProp="vertical"===d.settings.mode?"top":"left",d.usingCSS=d.settings.useCSS&&"fade"!==d.settings.mode&&function(){for(var a=document.createElement("div"),b=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"],c=0;c<b.length;c++)if(void 0!==a.style[b[c]])return d.cssPrefix=b[c].replace("Perspective","").toLowerCase(),d.animProp="-"+d.cssPrefix+"-transform",!0;return!1}(),"vertical"===d.settings.mode&&(d.settings.maxSlides=d.settings.minSlides),e.data("origStyle",e.attr("style")),e.children(d.settings.slideSelector).each(function(){a(this).data("origStyle",a(this).attr("style"))}),j())},j=function(){var b=d.children.eq(d.settings.startSlide);e.wrap('<div class="'+d.settings.wrapperClass+'"><div class="bx-viewport"></div></div>'),d.viewport=e.parent(),d.settings.ariaLive&&!d.settings.ticker&&d.viewport.attr("aria-live","polite"),d.loader=a('<div class="bx-loading" />'),d.viewport.prepend(d.loader),e.css({width:"horizontal"===d.settings.mode?1e3*d.children.length+215+"%":"auto",position:"relative"}),d.usingCSS&&d.settings.easing?e.css("-"+d.cssPrefix+"-transition-timing-function",d.settings.easing):d.settings.easing||(d.settings.easing="swing"),d.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),d.viewport.parent().css({maxWidth:n()}),d.settings.pager||d.settings.controls||d.viewport.parent().css({margin:"0 auto 0px"}),d.children.css({"float":"horizontal"===d.settings.mode?"left":"none",listStyle:"none",position:"relative"}),d.children.css("width",o()),"horizontal"===d.settings.mode&&d.settings.slideMargin>0&&d.children.css("marginRight",d.settings.slideMargin),"vertical"===d.settings.mode&&d.settings.slideMargin>0&&d.children.css("marginBottom",d.settings.slideMargin),"fade"===d.settings.mode&&(d.children.css({position:"absolute",zIndex:0,display:"none"}),d.children.eq(d.settings.startSlide).css({zIndex:d.settings.slideZIndex,display:"block"})),d.controls.el=a('<div class="bx-controls" />'),d.settings.captions&&y(),d.active.last=d.settings.startSlide===q()-1,d.settings.video&&e.fitVids(),("all"===d.settings.preloadImages||d.settings.ticker)&&(b=d.children),d.settings.ticker?d.settings.pager=!1:(d.settings.controls&&w(),d.settings.auto&&d.settings.autoControls&&x(),d.settings.pager&&v(),(d.settings.controls||d.settings.autoControls||d.settings.pager)&&d.viewport.after(d.controls.el)),k(b,l)},k=function(b,c){var d=b.find('img:not([src=""]), iframe').length,e=0;return 0===d?void c():void b.find('img:not([src=""]), iframe').each(function(){a(this).one("load error",function(){++e===d&&c()}).each(function(){this.complete&&a(this).load()})})},l=function(){if(d.settings.infiniteLoop&&"fade"!==d.settings.mode&&!d.settings.ticker){var b="vertical"===d.settings.mode?d.settings.minSlides:d.settings.maxSlides,c=d.children.slice(0,b).clone(!0).addClass("bx-clone"),f=d.children.slice(-b).clone(!0).addClass("bx-clone");d.settings.ariaHidden&&(c.attr("aria-hidden",!0),f.attr("aria-hidden",!0)),e.append(c).prepend(f)}d.loader.remove(),s(),"vertical"===d.settings.mode&&(d.settings.adaptiveHeight=!0),d.viewport.height(m()),e.redrawSlider(),d.settings.onSliderLoad.call(e,d.active.index),d.initialized=!0,d.settings.responsive&&a(window).bind("resize",S),d.settings.auto&&d.settings.autoStart&&(q()>1||d.settings.autoSlideForOnePage)&&I(),d.settings.ticker&&J(),d.settings.pager&&E(d.settings.startSlide),d.settings.controls&&H(),d.settings.touchEnabled&&!d.settings.ticker&&N(),d.settings.keyboardEnabled&&!d.settings.ticker&&a(document).keydown(M)},m=function(){var b=0,c=a();if("vertical"===d.settings.mode||d.settings.adaptiveHeight)if(d.carousel){var e=1===d.settings.moveSlides?d.active.index:d.active.index*r();for(c=d.children.eq(e),i=1;i<=d.settings.maxSlides-1;i++)c=e+i>=d.children.length?c.add(d.children.eq(i-1)):c.add(d.children.eq(e+i))}else c=d.children.eq(d.active.index);else c=d.children;return"vertical"===d.settings.mode?(c.each(function(c){b+=a(this).outerHeight()}),d.settings.slideMargin>0&&(b+=d.settings.slideMargin*(d.settings.minSlides-1))):b=Math.max.apply(Math,c.map(function(){return a(this).outerHeight(!1)}).get()),"border-box"===d.viewport.css("box-sizing")?b+=parseFloat(d.viewport.css("padding-top"))+parseFloat(d.viewport.css("padding-bottom"))+parseFloat(d.viewport.css("border-top-width"))+parseFloat(d.viewport.css("border-bottom-width")):"padding-box"===d.viewport.css("box-sizing")&&(b+=parseFloat(d.viewport.css("padding-top"))+parseFloat(d.viewport.css("padding-bottom"))),b},n=function(){var a="100%";return d.settings.slideWidth>0&&(a="horizontal"===d.settings.mode?d.settings.maxSlides*d.settings.slideWidth+(d.settings.maxSlides-1)*d.settings.slideMargin:d.settings.slideWidth),a},o=function(){var a=d.settings.slideWidth,b=d.viewport.width();if(0===d.settings.slideWidth||d.settings.slideWidth>b&&!d.carousel||"vertical"===d.settings.mode)a=b;else if(d.settings.maxSlides>1&&"horizontal"===d.settings.mode){if(b>d.maxThreshold)return a;b<d.minThreshold?a=(b-d.settings.slideMargin*(d.settings.minSlides-1))/d.settings.minSlides:d.settings.shrinkItems&&(a=Math.floor((b+d.settings.slideMargin)/Math.ceil((b+d.settings.slideMargin)/(a+d.settings.slideMargin))-d.settings.slideMargin))}return a},p=function(){var a=1,b=null;return"horizontal"===d.settings.mode&&d.settings.slideWidth>0?d.viewport.width()<d.minThreshold?a=d.settings.minSlides:d.viewport.width()>d.maxThreshold?a=d.settings.maxSlides:(b=d.children.first().width()+d.settings.slideMargin,a=Math.floor((d.viewport.width()+d.settings.slideMargin)/b)):"vertical"===d.settings.mode&&(a=d.settings.minSlides),a},q=function(){var a=0,b=0,c=0;if(d.settings.moveSlides>0)if(d.settings.infiniteLoop)a=Math.ceil(d.children.length/r());else for(;b<d.children.length;)++a,b=c+p(),c+=d.settings.moveSlides<=p()?d.settings.moveSlides:p();else a=Math.ceil(d.children.length/p());return a},r=function(){return d.settings.moveSlides>0&&d.settings.moveSlides<=p()?d.settings.moveSlides:p()},s=function(){var a,b,c;d.children.length>d.settings.maxSlides&&d.active.last&&!d.settings.infiniteLoop?"horizontal"===d.settings.mode?(b=d.children.last(),a=b.position(),t(-(a.left-(d.viewport.width()-b.outerWidth())),"reset",0)):"vertical"===d.settings.mode&&(c=d.children.length-d.settings.minSlides,a=d.children.eq(c).position(),t(-a.top,"reset",0)):(a=d.children.eq(d.active.index*r()).position(),d.active.index===q()-1&&(d.active.last=!0),void 0!==a&&("horizontal"===d.settings.mode?t(-a.left,"reset",0):"vertical"===d.settings.mode&&t(-a.top,"reset",0)))},t=function(b,c,f,g){var h,i;d.usingCSS?(i="vertical"===d.settings.mode?"translate3d(0, "+b+"px, 0)":"translate3d("+b+"px, 0, 0)",e.css("-"+d.cssPrefix+"-transition-duration",f/1e3+"s"),"slide"===c?(e.css(d.animProp,i),0!==f?e.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(b){a(b.target).is(e)&&(e.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),F())}):F()):"reset"===c?e.css(d.animProp,i):"ticker"===c&&(e.css("-"+d.cssPrefix+"-transition-timing-function","linear"),e.css(d.animProp,i),0!==f?e.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(b){a(b.target).is(e)&&(e.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),t(g.resetValue,"reset",0),K())}):(t(g.resetValue,"reset",0),K()))):(h={},h[d.animProp]=b,"slide"===c?e.animate(h,f,d.settings.easing,function(){F()}):"reset"===c?e.css(d.animProp,b):"ticker"===c&&e.animate(h,f,"linear",function(){t(g.resetValue,"reset",0),K()}))},u=function(){for(var b="",c="",e=q(),f=0;e>f;f++)c="",d.settings.buildPager&&a.isFunction(d.settings.buildPager)||d.settings.pagerCustom?(c=d.settings.buildPager(f),d.pagerEl.addClass("bx-custom-pager")):(c=f+1,d.pagerEl.addClass("bx-default-pager")),b+='<div class="bx-pager-item"><a href="" data-slide-index="'+f+'" class="bx-pager-link">'+c+"</a></div>";d.pagerEl.html(b)},v=function(){d.settings.pagerCustom?d.pagerEl=a(d.settings.pagerCustom):(d.pagerEl=a('<div class="bx-pager" />'),d.settings.pagerSelector?a(d.settings.pagerSelector).html(d.pagerEl):d.controls.el.addClass("bx-has-pager").append(d.pagerEl),u()),d.pagerEl.on("click touchend","a",D)},w=function(){d.controls.next=a('<a class="bx-next" href="">'+d.settings.nextText+"</a>"),d.controls.prev=a('<a class="bx-prev" href="">'+d.settings.prevText+"</a>"),d.controls.next.bind("click touchend",z),d.controls.prev.bind("click touchend",A),d.settings.nextSelector&&a(d.settings.nextSelector).append(d.controls.next),d.settings.prevSelector&&a(d.settings.prevSelector).append(d.controls.prev),d.settings.nextSelector||d.settings.prevSelector||(d.controls.directionEl=a('<div class="bx-controls-direction" />'),d.controls.directionEl.append(d.controls.prev).append(d.controls.next),d.controls.el.addClass("bx-has-controls-direction").append(d.controls.directionEl))},x=function(){d.controls.start=a('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+d.settings.startText+"</a></div>"),d.controls.stop=a('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+d.settings.stopText+"</a></div>"),d.controls.autoEl=a('<div class="bx-controls-auto" />'),d.controls.autoEl.on("click",".bx-start",B),d.controls.autoEl.on("click",".bx-stop",C),d.settings.autoControlsCombine?d.controls.autoEl.append(d.controls.start):d.controls.autoEl.append(d.controls.start).append(d.controls.stop),d.settings.autoControlsSelector?a(d.settings.autoControlsSelector).html(d.controls.autoEl):d.controls.el.addClass("bx-has-controls-auto").append(d.controls.autoEl),G(d.settings.autoStart?"stop":"start")},y=function(){d.children.each(function(b){var c=a(this).find("img:first").attr("title");void 0!==c&&(""+c).length&&a(this).append('<div class="bx-caption"><span>'+c+"</span></div>")})},z=function(a){a.preventDefault(),d.controls.el.hasClass("disabled")||(d.settings.auto&&d.settings.stopAutoOnClick&&e.stopAuto(),e.goToNextSlide())},A=function(a){a.preventDefault(),d.controls.el.hasClass("disabled")||(d.settings.auto&&d.settings.stopAutoOnClick&&e.stopAuto(),e.goToPrevSlide())},B=function(a){e.startAuto(),a.preventDefault()},C=function(a){e.stopAuto(),a.preventDefault()},D=function(b){var c,f;b.preventDefault(),d.controls.el.hasClass("disabled")||(d.settings.auto&&d.settings.stopAutoOnClick&&e.stopAuto(),c=a(b.currentTarget),void 0!==c.attr("data-slide-index")&&(f=parseInt(c.attr("data-slide-index")),f!==d.active.index&&e.goToSlide(f)))},E=function(b){var c=d.children.length;return"short"===d.settings.pagerType?(d.settings.maxSlides>1&&(c=Math.ceil(d.children.length/d.settings.maxSlides)),void d.pagerEl.html(b+1+d.settings.pagerShortSeparator+c)):(d.pagerEl.find("a").removeClass("active"),void d.pagerEl.each(function(c,d){a(d).find("a").eq(b).addClass("active")}))},F=function(){if(d.settings.infiniteLoop){var a="";0===d.active.index?a=d.children.eq(0).position():d.active.index===q()-1&&d.carousel?a=d.children.eq((q()-1)*r()).position():d.active.index===d.children.length-1&&(a=d.children.eq(d.children.length-1).position()),a&&("horizontal"===d.settings.mode?t(-a.left,"reset",0):"vertical"===d.settings.mode&&t(-a.top,"reset",0))}d.working=!1,d.settings.onSlideAfter.call(e,d.children.eq(d.active.index),d.oldIndex,d.active.index)},G=function(a){d.settings.autoControlsCombine?d.controls.autoEl.html(d.controls[a]):(d.controls.autoEl.find("a").removeClass("active"),d.controls.autoEl.find("a:not(.bx-"+a+")").addClass("active"))},H=function(){1===q()?(d.controls.prev.addClass("disabled"),d.controls.next.addClass("disabled")):!d.settings.infiniteLoop&&d.settings.hideControlOnEnd&&(0===d.active.index?(d.controls.prev.addClass("disabled"),d.controls.next.removeClass("disabled")):d.active.index===q()-1?(d.controls.next.addClass("disabled"),d.controls.prev.removeClass("disabled")):(d.controls.prev.removeClass("disabled"),d.controls.next.removeClass("disabled")))},I=function(){if(d.settings.autoDelay>0){setTimeout(e.startAuto,d.settings.autoDelay)}else e.startAuto(),a(window).focus(function(){e.startAuto()}).blur(function(){e.stopAuto()});d.settings.autoHover&&e.hover(function(){d.interval&&(e.stopAuto(!0),d.autoPaused=!0)},function(){d.autoPaused&&(e.startAuto(!0),d.autoPaused=null)})},J=function(){var b,c,f,g,h,i,j,k,l=0;"next"===d.settings.autoDirection?e.append(d.children.clone().addClass("bx-clone")):(e.prepend(d.children.clone().addClass("bx-clone")),b=d.children.first().position(),l="horizontal"===d.settings.mode?-b.left:-b.top),t(l,"reset",0),d.settings.pager=!1,d.settings.controls=!1,d.settings.autoControls=!1,d.settings.tickerHover&&(d.usingCSS?(g="horizontal"===d.settings.mode?4:5,d.viewport.hover(function(){c=e.css("-"+d.cssPrefix+"-transform"),f=parseFloat(c.split(",")[g]),t(f,"reset",0)},function(){k=0,d.children.each(function(b){k+="horizontal"===d.settings.mode?a(this).outerWidth(!0):a(this).outerHeight(!0)}),h=d.settings.speed/k,i="horizontal"===d.settings.mode?"left":"top",j=h*(k-Math.abs(parseInt(f))),K(j)})):d.viewport.hover(function(){e.stop()},function(){k=0,d.children.each(function(b){k+="horizontal"===d.settings.mode?a(this).outerWidth(!0):a(this).outerHeight(!0)}),h=d.settings.speed/k,i="horizontal"===d.settings.mode?"left":"top",j=h*(k-Math.abs(parseInt(e.css(i)))),K(j)})),K()},K=function(a){var b,c,f,g=a?a:d.settings.speed,h={left:0,top:0},i={left:0,top:0};"next"===d.settings.autoDirection?h=e.find(".bx-clone").first().position():i=d.children.first().position(),b="horizontal"===d.settings.mode?-h.left:-h.top,c="horizontal"===d.settings.mode?-i.left:-i.top,f={resetValue:c},t(b,"ticker",g,f)},L=function(b){var c=a(window),d={top:c.scrollTop(),left:c.scrollLeft()},e=b.offset();return d.right=d.left+c.width(),d.bottom=d.top+c.height(),e.right=e.left+b.outerWidth(),e.bottom=e.top+b.outerHeight(),!(d.right<e.left||d.left>e.right||d.bottom<e.top||d.top>e.bottom)},M=function(a){var b=document.activeElement.tagName.toLowerCase(),c="input|textarea",d=new RegExp(b,["i"]),f=d.exec(c);if(null==f&&L(e)){if(39===a.keyCode)return z(a),!1;if(37===a.keyCode)return A(a),!1}},N=function(){d.touch={start:{x:0,y:0},end:{x:0,y:0}},d.viewport.bind("touchstart MSPointerDown pointerdown",O),d.viewport.on("click",".bxslider a",function(a){d.viewport.hasClass("click-disabled")&&(a.preventDefault(),d.viewport.removeClass("click-disabled"))})},O=function(a){if(d.controls.el.addClass("disabled"),d.working)a.preventDefault(),d.controls.el.removeClass("disabled");else{d.touch.originalPos=e.position();var b=a.originalEvent,c="undefined"!=typeof b.changedTouches?b.changedTouches:[b];d.touch.start.x=c[0].pageX,d.touch.start.y=c[0].pageY,d.viewport.get(0).setPointerCapture&&(d.pointerId=b.pointerId,d.viewport.get(0).setPointerCapture(d.pointerId)),d.viewport.bind("touchmove MSPointerMove pointermove",Q),d.viewport.bind("touchend MSPointerUp pointerup",R),d.viewport.bind("MSPointerCancel pointercancel",P)}},P=function(a){t(d.touch.originalPos.left,"reset",0),d.controls.el.removeClass("disabled"),d.viewport.unbind("MSPointerCancel pointercancel",P),d.viewport.unbind("touchmove MSPointerMove pointermove",Q),d.viewport.unbind("touchend MSPointerUp pointerup",R),d.viewport.get(0).releasePointerCapture&&d.viewport.get(0).releasePointerCapture(d.pointerId)},Q=function(a){var b=a.originalEvent,c="undefined"!=typeof b.changedTouches?b.changedTouches:[b],e=Math.abs(c[0].pageX-d.touch.start.x),f=Math.abs(c[0].pageY-d.touch.start.y),g=0,h=0;3*e>f&&d.settings.preventDefaultSwipeX?a.preventDefault():3*f>e&&d.settings.preventDefaultSwipeY&&a.preventDefault(),"fade"!==d.settings.mode&&d.settings.oneToOneTouch&&("horizontal"===d.settings.mode?(h=c[0].pageX-d.touch.start.x,g=d.touch.originalPos.left+h):(h=c[0].pageY-d.touch.start.y,g=d.touch.originalPos.top+h),t(g,"reset",0))},R=function(a){d.viewport.unbind("touchmove MSPointerMove pointermove",Q),d.controls.el.removeClass("disabled");var b=a.originalEvent,c="undefined"!=typeof b.changedTouches?b.changedTouches:[b],f=0,g=0;d.touch.end.x=c[0].pageX,d.touch.end.y=c[0].pageY,"fade"===d.settings.mode?(g=Math.abs(d.touch.start.x-d.touch.end.x),g>=d.settings.swipeThreshold&&(d.touch.start.x>d.touch.end.x?e.goToNextSlide():e.goToPrevSlide(),e.stopAuto())):("horizontal"===d.settings.mode?(g=d.touch.end.x-d.touch.start.x,f=d.touch.originalPos.left):(g=d.touch.end.y-d.touch.start.y,f=d.touch.originalPos.top),!d.settings.infiniteLoop&&(0===d.active.index&&g>0||d.active.last&&0>g)?t(f,"reset",200):Math.abs(g)>=d.settings.swipeThreshold?(0>g?e.goToNextSlide():e.goToPrevSlide(),e.stopAuto()):t(f,"reset",200)),d.viewport.unbind("touchend MSPointerUp pointerup",R),d.viewport.get(0).releasePointerCapture&&d.viewport.get(0).releasePointerCapture(d.pointerId)},S=function(b){if(d.initialized)if(d.working)window.setTimeout(S,10);else{var c=a(window).width(),h=a(window).height();(f!==c||g!==h)&&(f=c,g=h,e.redrawSlider(),d.settings.onSliderResize.call(e,d.active.index))}},T=function(a){var b=p();d.settings.ariaHidden&&!d.settings.ticker&&(d.children.attr("aria-hidden","true"),d.children.slice(a,a+b).attr("aria-hidden","false"))},U=function(a){return 0>a?d.settings.infiniteLoop?q()-1:d.active.index:a>=q()?d.settings.infiniteLoop?0:d.active.index:a};return e.goToSlide=function(b,c){var f,g,h,i,j=!0,k=0,l={left:0,top:0},n=null;if(d.oldIndex=d.active.index,d.active.index=U(b),!d.working&&d.active.index!==d.oldIndex){if(d.working=!0,j=d.settings.onSlideBefore.call(e,d.children.eq(d.active.index),d.oldIndex,d.active.index),"undefined"!=typeof j&&!j)return d.active.index=d.oldIndex,void(d.working=!1);"next"===c?d.settings.onSlideNext.call(e,d.children.eq(d.active.index),d.oldIndex,d.active.index)||(j=!1):"prev"===c&&(d.settings.onSlidePrev.call(e,d.children.eq(d.active.index),d.oldIndex,d.active.index)||(j=!1)),d.active.last=d.active.index>=q()-1,(d.settings.pager||d.settings.pagerCustom)&&E(d.active.index),d.settings.controls&&H(),"fade"===d.settings.mode?(d.settings.adaptiveHeight&&d.viewport.height()!==m()&&d.viewport.animate({height:m()},d.settings.adaptiveHeightSpeed),d.children.filter(":visible").fadeOut(d.settings.speed).css({zIndex:0}),d.children.eq(d.active.index).css("zIndex",d.settings.slideZIndex+1).fadeIn(d.settings.speed,function(){a(this).css("zIndex",d.settings.slideZIndex),F()})):(d.settings.adaptiveHeight&&d.viewport.height()!==m()&&d.viewport.animate({height:m()},d.settings.adaptiveHeightSpeed),!d.settings.infiniteLoop&&d.carousel&&d.active.last?"horizontal"===d.settings.mode?(n=d.children.eq(d.children.length-1),l=n.position(),k=d.viewport.width()-n.outerWidth()):(f=d.children.length-d.settings.minSlides,l=d.children.eq(f).position()):d.carousel&&d.active.last&&"prev"===c?(g=1===d.settings.moveSlides?d.settings.maxSlides-r():(q()-1)*r()-(d.children.length-d.settings.maxSlides),n=e.children(".bx-clone").eq(g),l=n.position()):"next"===c&&0===d.active.index?(l=e.find("> .bx-clone").eq(d.settings.maxSlides).position(),d.active.last=!1):b>=0&&(i=b*parseInt(r()),l=d.children.eq(i).position()),"undefined"!=typeof l?(h="horizontal"===d.settings.mode?-(l.left-k):-l.top,t(h,"slide",d.settings.speed)):d.working=!1),d.settings.ariaHidden&&T(d.active.index*r())}},e.goToNextSlide=function(){if(d.settings.infiniteLoop||!d.active.last){var a=parseInt(d.active.index)+1;e.goToSlide(a,"next")}},e.goToPrevSlide=function(){if(d.settings.infiniteLoop||0!==d.active.index){var a=parseInt(d.active.index)-1;e.goToSlide(a,"prev")}},e.startAuto=function(a){d.interval||(d.interval=setInterval(function(){"next"===d.settings.autoDirection?e.goToNextSlide():e.goToPrevSlide()},d.settings.pause),d.settings.autoControls&&a!==!0&&G("stop"))},e.stopAuto=function(a){d.interval&&(clearInterval(d.interval),d.interval=null,d.settings.autoControls&&a!==!0&&G("start"))},e.getCurrentSlide=function(){return d.active.index},e.getCurrentSlideElement=function(){return d.children.eq(d.active.index)},e.getSlideElement=function(a){return d.children.eq(a)},e.getSlideCount=function(){return d.children.length},e.isWorking=function(){return d.working},e.redrawSlider=function(){d.children.add(e.find(".bx-clone")).outerWidth(o()),d.viewport.css("height",m()),d.settings.ticker||s(),d.active.last&&(d.active.index=q()-1),d.active.index>=q()&&(d.active.last=!0),d.settings.pager&&!d.settings.pagerCustom&&(u(),E(d.active.index)),d.settings.ariaHidden&&T(d.active.index*r())},e.destroySlider=function(){d.initialized&&(d.initialized=!1,a(".bx-clone",this).remove(),d.children.each(function(){void 0!==a(this).data("origStyle")?a(this).attr("style",a(this).data("origStyle")):a(this).removeAttr("style")}),void 0!==a(this).data("origStyle")?this.attr("style",a(this).data("origStyle")):a(this).removeAttr("style"),a(this).unwrap().unwrap(),d.controls.el&&d.controls.el.remove(),d.controls.next&&d.controls.next.remove(),d.controls.prev&&d.controls.prev.remove(),d.pagerEl&&d.settings.controls&&!d.settings.pagerCustom&&d.pagerEl.remove(),a(".bx-caption",this).remove(),d.controls.autoEl&&d.controls.autoEl.remove(),clearInterval(d.interval),d.settings.responsive&&a(window).unbind("resize",S),d.settings.keyboardEnabled&&a(document).unbind("keydown",M),a(this).removeData("bxSlider"))},e.reloadSlider=function(b){void 0!==b&&(c=b),e.destroySlider(),h(),a(e).data("bxSlider",this)},h(),a(e).data("bxSlider",this),this}}}(jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(63);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../raw-loader/index.js!./jquery.bxslider.min.css", function() {
				var newContent = require("!!./../../raw-loader/index.js!./jquery.bxslider.min.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = "/**\n * bxSlider v4.2.5\n * Copyright 2013-2015 Steven Wanderski\n * Written while drinking Belgian ales and listening to jazz\n\n * Licensed under MIT (http://opensource.org/licenses/MIT)\n */\n\n\n.bx-wrapper{position:relative;margin:0 auto 60px;padding:0;*zoom:1;-ms-touch-action:pan-y;touch-action:pan-y}.bx-wrapper img{max-width:100%;display:block}.bxslider{margin:0;padding:0}ul.bxslider{list-style:none}.bx-viewport{-webkit-transform:translatez(0)}.bx-wrapper{-moz-box-shadow:0 0 5px #ccc;-webkit-box-shadow:0 0 5px #ccc;box-shadow:0 0 5px #ccc;border:5px solid #fff;background:#fff}.bx-wrapper .bx-controls-auto,.bx-wrapper .bx-pager{position:absolute;bottom:-30px;width:100%}.bx-wrapper .bx-loading{min-height:50px;background:url(images/bx_loader.gif) center center no-repeat #fff;height:100%;width:100%;position:absolute;top:0;left:0;z-index:2000}.bx-wrapper .bx-pager{text-align:center;font-size:.85em;font-family:Arial;font-weight:700;color:#666;padding-top:20px}.bx-wrapper .bx-pager.bx-default-pager a{background:#666;text-indent:-9999px;display:block;width:10px;height:10px;margin:0 5px;outline:0;-moz-border-radius:5px;-webkit-border-radius:5px;border-radius:5px}.bx-wrapper .bx-pager.bx-default-pager a.active,.bx-wrapper .bx-pager.bx-default-pager a:focus,.bx-wrapper .bx-pager.bx-default-pager a:hover{background:#000}.bx-wrapper .bx-controls-auto .bx-controls-auto-item,.bx-wrapper .bx-pager-item{display:inline-block;*zoom:1;*display:inline}.bx-wrapper .bx-pager-item{font-size:0;line-height:0}.bx-wrapper .bx-prev{left:10px;background:url(images/controls.png) no-repeat 0 -32px}.bx-wrapper .bx-prev:focus,.bx-wrapper .bx-prev:hover{background-position:0 0}.bx-wrapper .bx-next{right:10px;background:url(images/controls.png) no-repeat -43px -32px}.bx-wrapper .bx-next:focus,.bx-wrapper .bx-next:hover{background-position:-43px 0}.bx-wrapper .bx-controls-direction a{position:absolute;top:50%;margin-top:-16px;outline:0;width:32px;height:32px;text-indent:-9999px;z-index:9999}.bx-wrapper .bx-controls-direction a.disabled{display:none}.bx-wrapper .bx-controls-auto{text-align:center}.bx-wrapper .bx-controls-auto .bx-start{display:block;text-indent:-9999px;width:10px;height:11px;outline:0;background:url(images/controls.png) -86px -11px no-repeat;margin:0 3px}.bx-wrapper .bx-controls-auto .bx-start.active,.bx-wrapper .bx-controls-auto .bx-start:focus,.bx-wrapper .bx-controls-auto .bx-start:hover{background-position:-86px 0}.bx-wrapper .bx-controls-auto .bx-stop{display:block;text-indent:-9999px;width:9px;height:11px;outline:0;background:url(images/controls.png) -86px -44px no-repeat;margin:0 3px}.bx-wrapper .bx-controls-auto .bx-stop.active,.bx-wrapper .bx-controls-auto .bx-stop:focus,.bx-wrapper .bx-controls-auto .bx-stop:hover{background-position:-86px -33px}.bx-wrapper .bx-controls.bx-has-controls-auto.bx-has-pager .bx-pager{text-align:left;width:80%}.bx-wrapper .bx-controls.bx-has-controls-auto.bx-has-pager .bx-controls-auto{right:0;width:35px}.bx-wrapper .bx-caption{position:absolute;bottom:0;left:0;background:#666;background:rgba(80,80,80,.75);width:100%}.bx-wrapper .bx-caption span{color:#fff;font-family:Arial;display:block;font-size:.85em;padding:10px}"

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = "\n<header>\n\n\t<div class=\"row-fluid\">\n\t\t<div id=\"own-carousel\" class=\"col-lg-12 own-carousel\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"carousel-caption\">\n\t\t\t\t\t<h1>confitura 2016</h1>\n\t\t\t\t\t<p class=\"carousel-p\">Java Conference for Polish community\n\t\t\t\t\t</p>\n\t\t\t\t\t<p><a class=\"btn btn-lg btn-primary btn-pink\" href=\"http://c4p.confitura.pl\" role=\"button\">Call 4 Papers</a></p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</header>\n\n<!-- /container fluid -->\n<div class=\"container-fluid\">\n\n\t<section id=\"main-confitura\">\n\t\t<div class=\"row-fluid\">\n\t\t\t<div class=\"col-lg-12 col-md-12\"><h2>confitura 2016</h2></div>\n\t\t\t<div class=\"col-lg-12 col-md-12 main-confitura-content\">\n\t\t\t\t<div class=\"main-confitura-content-inner\">\n\t\t\t\t\t<div class=\"col-lg-6 col-md-6\">\n\t\t\t\t\t\t<h3>2nd of July 2016</h3>\n\t\t\t\t\t\t\t<span class=\"mcci-content\">\n\t\t\t\t\t\t\t\tConfitura is a one day conference. it starts at around 9 a.m. and finish at 7 p.m.\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-6 col-md-6\">\n\t\t\t\t\t\t<h3>University of Warsaw, the main campus</h3>\n\t\t\t\t\t\t\t<span class=\"mcci-content\">\n\t\t\t\t\t\t\t\t5 parallel sessions. 7 slots in each session. Chillout room and, last but not least, sponsors booth where you can talk, win attractive awards or even find a new job.\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\t</section>\n\n\t<section id=\"about-confitura\">\n\t\t<div class=\"row-fluid\">\n\t\t\t<div class=\"col-lg-12 about-confitura-header\"><h2>about us</h2></div>\n\t\t\t<div class=\"col-lg-12 about-confitura-content\">\n\t\t\t\t<div class=\"about-confitura-content-inner\">\n\t\t\t\t\t<div>\n\n\t\t\t\t\t\tConfitura is one of the biggest Java conferences in Poland. It’s the place where Polish and International leaders of\n\t\t\t\t\t\tthe Java community share their Java knowledge and experience during sessions and breaks. Each year we host around\n\t\t\t\t\t\t1400 participants keen to find out about new technologies. The conference used to be totally free of charge but last\n\t\t\t\t\t\tyear we decided to use the opportunity to help others and introduced a charity donation based model of registering.\n\t\t\t\t\t\tWe collect symbolic donations of 20 zł (~ €4) with help of the Allegro Charity Platform (all the money go <strong>directly</strong>\n\t\t\t\t\t\tto a charity organization) and invite our donors to register.\n\t\t\t\t\t\t<br><strong>Registration is required</strong>.\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\n\t<div ng-include=\"'news/news.banner.tpl.html'\"></div>\n\t<div ng-include=\"'partners/partners.banner.tpl.html'\"></div>\n\n";

/***/ }
]);