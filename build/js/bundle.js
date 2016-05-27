webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(3);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	__webpack_require__(6);
	__webpack_require__(12);
	__webpack_require__(37);
	__webpack_require__(38);
	var ng = __webpack_require__(39);
	__webpack_require__(40);
	__webpack_require__(41);
	__webpack_require__(42);
	__webpack_require__(43);
	__webpack_require__(44).locale('pl');
	__webpack_require__(46);
	__webpack_require__(47);
	ng.module('confitura', [
	        'ngAnimate', 'ngResource', 'ngSanitize', 'angular-loading-bar', 'ui.router','directives.page',
	        //require('twitter'),
	        __webpack_require__(50),
	        __webpack_require__(58),
	    //,
	        __webpack_require__(72),
	        __webpack_require__(102)
	        //require('speakers'),
	        //require('presentations'),
	        //require('organizers'),
	        //require('registration')
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
	                template: __webpack_require__(107)
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
	                templateUrl: 'v4p/v4p.tpl.html'
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
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
/* 36 */,
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(4);
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
/* 38 */
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

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(39)
			.module('directives.page', ['ngResource'])
			.factory('Pages', __webpack_require__(48))
			.directive('page', __webpack_require__(49))
			.name;

/***/ },
/* 48 */
/***/ function(module, exports) {

	'use strict';
	/* @ngInject */
	function Pages($resource, apiServer) {
		return $resource(apiServer + '/pages/:name', {name: '@name'}, {});
	}
	Pages.$inject = ["$resource", "apiServer"];

	module.exports = Pages;

/***/ },
/* 49 */
/***/ function(module, exports) {

	'use strict';
	/* @ngInject */
	function PageDirective(Pages) {
		return {
			scope: {name: '@'},
			template: '<div ng-bind-html="content.text"></div>',
			controller: /* @ngInject */["$scope", function ($scope) {
				$scope.content = Pages.get({name: $scope.name});
			}]
		};
	}
	PageDirective.$inject = ["Pages"];

	module.exports = PageDirective;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(51);
	__webpack_require__(39).module('news', [])
	    .factory('News', __webpack_require__(53))
	    .controller('NewsCtrl', __webpack_require__(54))
	    .directive('newsItem', __webpack_require__(56))
	;
	module.exports ='news';

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(52);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?root=..!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/less-loader/index.js!./news.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?root=..!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/less-loader/index.js!./news.less");
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

	exports = module.exports = __webpack_require__(14)();
	// imports


	// module
	exports.push([module.id, ".news-container {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: stretch;\n  -webkit-align-items: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  padding: 0;\n}\n.news-container news-item {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.news-container news-item .news-title {\n  display: block;\n  font-size: 4rem;\n  font-family: 'NeuzeitGro-Bol', Verdana, Tahoma, sans-serif;\n}\n.news-container news-item .news-excerpt {\n  -webkit-box-flex: 1;\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n.news-container news-item .news-excerpt,\n.news-container news-item .news-date {\n  display: block;\n  font-size: 2rem;\n}\n@media all and (max-width: 768px) {\n  .news-container {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n}\n.news-container .news-excerpt {\n  padding-top: 32px;\n  padding-bottom: 32px;\n}\n.news-container .news-confitura-left,\n.news-container .news-confitura-right {\n  -webkit-box-flex: 1;\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -webkit-flex-basis: 50%;\n      -ms-flex-preferred-size: 50%;\n          flex-basis: 50%;\n  min-height: 90vh;\n}\n.news-container .news-confitura-right {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: stretch;\n  -webkit-align-items: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  -webkit-align-content: stretch;\n      -ms-flex-line-pack: stretch;\n          align-content: stretch;\n}\n.news-container .news-confitura-right > div {\n  -webkit-box-flex: 1;\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n", ""]);

	// exports


/***/ },
/* 53 */
/***/ function(module, exports) {

	'use strict';
	/* @ngInject */
	function News($resource, apiServer) {
	    return $resource(apiServer + '/news/0/3');
	}
	News.$inject = ["$resource", "apiServer"];
	module.exports = News;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(55);
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
/* 55 */
/***/ function(module, exports) {

	var path = 'news/news.banner.tpl.html';
	var html = "<section id=\"news-confitura\">\n    <div class=\"row-fluid\">\n        <div class=\"col-lg-12 news-confitura-header\"><h2>News</h2></div>\n    </div>\n\n    <div class=\"news-container col-lg-12\" ng-controller=\"NewsCtrl as news\">\n        <news-item class=\"news-confitura-left font-white\" item=\"news.list[0]\"></news-item>\n        <div class=\"news-confitura-right\" ng-if=\"news.list.length > 1\">\n            <div class=\"semi-square black font-white\">\n                <news-item item=\"news.list[1]\"></news-item>\n            </div>\n            <div class=\"semi-square beige\" ng-if=\"news.list.length > 2\">\n                <news-item item=\"news.list[2]\"></news-item>\n            </div>\n        </div>\n    </div>\n\n</section>\n";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(57);
	function NewsItemDirective(){
	    return {
	        scope: {item: '='},
	        templateUrl: 'news/news.item.tpl.html'
	    };
	}
	module.exports = NewsItemDirective;

/***/ },
/* 57 */
/***/ function(module, exports) {

	var path = 'news/news.item.tpl.html';
	var html = "<div class=\"news-title  ease\">\n    {{item.title}}\n</div>\n<div class=\"news-excerpt ease\" ng-bind-html=\"item.shortText\">\n</div>\n<div class=\"news-date ease\">\n    {{item.date.month}} {{item.date.day}} {{item.date.year}}\n</div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(59);
	__webpack_require__(39).module('partners',[])
	    .factory('Partners', __webpack_require__(62))
	    .controller('PartnersController', __webpack_require__(63))
	    .controller('PartnerController', __webpack_require__(65))
	    .controller('PartnersBannerController', __webpack_require__(67))
	;
	module.exports ='partners';

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(60);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
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
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports


	// module
	exports.push([module.id, "section#partners-confitura .partners-header {\n  position: relative;\n  background: transparent url(" + __webpack_require__(61) + ") center center no-repeat;\n  background-size: cover;\n  filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='../../img/header-register.jpg', sizingMethod='scale');\n}\nsection#partners-confitura .partners-header h2 {\n  color: #ffffff;\n}\nsection#partners-confitura .partners-items {\n  background: transparent;\n  min-height: 350px;\n}\n@media all and (max-width: 768px) {\n  section#partners-confitura .partners-items {\n    min-height: 150px;\n  }\n}\nsection#partners-confitura .partner-type {\n  font-size: 3rem;\n  font-family: 'NeuzeitGro-Bol', Verdana, Tahoma, sans-serif;\n  padding-top: 70px;\n}\n@media all and (max-width: 768px) {\n  section#partners-confitura .partner-type {\n    padding-top: 5px;\n    padding-bottom: 20px;\n  }\n}\nsection#partners-confitura .partners-banner-container {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: space-around;\n      -ms-flex-pack: distribute;\n          justify-content: space-around;\n  -webkit-align-content: stretch;\n      -ms-flex-line-pack: stretch;\n          align-content: stretch;\n}\n@media all and (max-width: 768px) {\n  section#partners-confitura .partners-banner-container {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n}\nsection#partners-confitura .partners-banner-container > div {\n  -webkit-flex-basis: 100%;\n      -ms-flex-preferred-size: 100%;\n          flex-basis: 100%;\n}\nsection#partners-confitura .partner-header {\n  display: block;\n  text-align: center;\n  font-size: 4rem;\n  height: 110px;\n  font-family: 'NeuzeitGro-Bol', Verdana, Tahoma, sans-serif;\n}\nsection#partners-confitura .min-h {\n  height: 150px !important;\n}\nsection#partners-confitura .vcenter {\n  position: relative !important;\n}\nsection#partners-confitura .row-1140 {\n  display: block;\n  max-width: 1080px;\n  margin: 0 auto !important;\n}\nsection#partners-confitura .pt100 {\n  margin-top: 100px;\n}\nsection#partners-confitura .pb50 {\n  margin-bottom: 50px;\n}\nsection#partners-confitura .pb150 {\n  padding-bottom: 150px;\n}\nsection#partners-confitura img {\n  margin: auto;\n  max-width: 210px;\n  max-height: 80px;\n}\nsection#partners-confitura #partner {\n  padding-top: 50px;\n}\nsection#partners-confitura #partner img {\n  max-width: 400px;\n  max-height: 150px;\n}\nsection#partners-confitura .platinum img {\n  max-width: 350px;\n  max-height: 100px;\n}\nsection#partners-confitura .gold img {\n  max-width: 300px;\n  max-height: 70px;\n}\nsection#partners-confitura .silver img {\n  max-width: 250px;\n  max-height: 70px;\n}\nsection#partners-confitura .partner-description {\n  display: block;\n  text-shadow: none;\n  font-size: 2.5rem;\n  padding-top: 20px;\n  padding-left: 20px;\n  padding-right: 20px;\n}\nsection#partners-confitura .partners-logo-container {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-flow: row wrap;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  -webkit-justify-content: space-around;\n      -ms-flex-pack: distribute;\n          justify-content: space-around;\n}\n@media all and (max-width: 768px) {\n  section#partners-confitura .partners-logo-container {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n}\nsection#partners-confitura .partners-logo-container a {\n  padding: 20px;\n}\n", ""]);

	// exports


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "90e11006d489a2df093eb831379f754f.jpg";

/***/ },
/* 62 */
/***/ function(module, exports) {

	'use strict';

	/* @ngInject */
	function Partners($resource, apiServer) {
		return $resource(apiServer + '/sponsors');
	}
	Partners.$inject = ["$resource", "apiServer"];
	module.exports = Partners;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(64);

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
/* 64 */
/***/ function(module, exports) {

	var path = 'partners/partners.tpl.html';
	var html = "<section id=\"partners-confitura\" ng-controller=\"PartnersController as partners\">\n    <div class=\"row-fluid\">\n        <div class=\"col-lg-12 partners-header\"><h2>partners</h2></div>\n    </div>\n    <div class=\"row-fluid\">\n        <div class=\"col-lg-12 pt100 pb50\" ng-repeat=\"type in partners.types\" ng-if=\"partners.list[type]\" ng-class=\"type\">\n            <div class=\"bg-white row-1140 text-center partner-header\">{{type}}</div>\n            <div class=\"bg-white row-1140 text-center\">\n                <div class=\"text-center\">\n                    <div class=\"vcenter text-center partners-logo-container\">\n                        <a href=\"\" class=\"a-abs\" ng-repeat=\"partner in partners.list[type]\" ng-click=\"partners.detailsOf(partner)\">\n                            <img class=\"img-responsive\" ng-src=\"{{partner.logo}}\"/>\n                        </a>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</section>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(66);

	/* @ngInject */
	function PartnersController($stateParams) {
	    var vm = this;
	    console.log($stateParams);
	    vm.model = $stateParams.partner


	}
	PartnersController.$inject = ["$stateParams"];
	module.exports = PartnersController;

/***/ },
/* 66 */
/***/ function(module, exports) {

	var path = 'partners/partner.tpl.html';
	var html = "<section id=\"partners-confitura\" class=\"beige\" ng-controller=\"PartnerController as partner\">\n    <!--<div class=\"row-fluid beige\">-->\n    <!--<div class=\"col-lg-12 beige\"><h2></h2></div>-->\n    <!--</div>-->\n    <div class=\"row-fluid beige\" id=\"partner\">\n        <div class=\"col-lg-12 beige pb150\">\n            <div class=\"row-1140\">\n                <div class=\"col-lg-5 beige\">\n                    <span class=\"img-speaker\">\n<a ng-href=\"{{partner.model.url}}\" target=\"_blank\">\n    <img class=\"img-responsive margin-auto\" ng-src=\"{{partner.model.logo}}\"/>\n</a>                    </span>\n                </div>\n                <div class=\"col-lg-7 beige\">\n                    <div class=\"ta-left pt30 person-name\"><h3># {{partner.model.name}} #</h3></div>\n                    <div class=\"partner-description\" ng-bind-html=\"partner.model.description\"></div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</section>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	__webpack_require__(68);
	__webpack_require__(69);
	__webpack_require__(70);

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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 68 */
/***/ function(module, exports) {

	var path = 'partners/partners.banner.tpl.html';
	var html = "<section id=\"partners-confitura\" ng-controller=\"PartnersBannerController as banner\">\n    <div class=\"row-fluid\">\n        <div class=\"col-lg-12 col-md-12\"><h2>our partners</h2></div>\n    </div>\n    <div class=\"row-fluid col-lg-12 partners-banner-container\">\n        <div ng-repeat=\"type in banner.types\" ng-include=\"'partner-item.html'\" ng-if=\"banner.hasAnyFor(type)\"></div>\n    </div>\n</section>\n\n<script type=\"text/ng-template\" id=\"partner-item.html\">\n    <div class=\"partners-items\">\n        <div class=\"partner-logo text-center\" >\n            <ul class=\"bxslider\">\n                <li ng-repeat=\"partner in banner.getAllFor(type)\">\n                    <a ng-href=\"{{partner.url}}\" target=\"_blank\">\n                        <img ng-src=\"{{partner.logo}}\"/>\n                    </a>\n                </li>\n            </ul>\n        </div>\n        <span class=\"partner-type text-center\" ng-if=\"banner.hasAnyFor(type)\">{{type}}</span>\n    </div>\n</script>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/**
	 * bxSlider v4.2.5
	 * Copyright 2013-2015 Steven Wanderski
	 * Written while drinking Belgian ales and listening to jazz

	 * Licensed under MIT (http://opensource.org/licenses/MIT)
	 */

	!function(a){var b={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,wrapperClass:"bx-wrapper",touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,ariaLive:!0,ariaHidden:!0,keyboardEnabled:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",stopAutoOnClick:!1,autoHover:!1,autoDelay:0,autoSlideForOnePage:!1,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,shrinkItems:!1,onSliderLoad:function(){return!0},onSlideBefore:function(){return!0},onSlideAfter:function(){return!0},onSlideNext:function(){return!0},onSlidePrev:function(){return!0},onSliderResize:function(){return!0}};a.fn.bxSlider=function(c){if(0===this.length)return this;if(this.length>1)return this.each(function(){a(this).bxSlider(c)}),this;var d={},e=this,f=a(window).width(),g=a(window).height();if(!a(e).data("bxSlider")){var h=function(){a(e).data("bxSlider")||(d.settings=a.extend({},b,c),d.settings.slideWidth=parseInt(d.settings.slideWidth),d.children=e.children(d.settings.slideSelector),d.children.length<d.settings.minSlides&&(d.settings.minSlides=d.children.length),d.children.length<d.settings.maxSlides&&(d.settings.maxSlides=d.children.length),d.settings.randomStart&&(d.settings.startSlide=Math.floor(Math.random()*d.children.length)),d.active={index:d.settings.startSlide},d.carousel=d.settings.minSlides>1||d.settings.maxSlides>1?!0:!1,d.carousel&&(d.settings.preloadImages="all"),d.minThreshold=d.settings.minSlides*d.settings.slideWidth+(d.settings.minSlides-1)*d.settings.slideMargin,d.maxThreshold=d.settings.maxSlides*d.settings.slideWidth+(d.settings.maxSlides-1)*d.settings.slideMargin,d.working=!1,d.controls={},d.interval=null,d.animProp="vertical"===d.settings.mode?"top":"left",d.usingCSS=d.settings.useCSS&&"fade"!==d.settings.mode&&function(){for(var a=document.createElement("div"),b=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"],c=0;c<b.length;c++)if(void 0!==a.style[b[c]])return d.cssPrefix=b[c].replace("Perspective","").toLowerCase(),d.animProp="-"+d.cssPrefix+"-transform",!0;return!1}(),"vertical"===d.settings.mode&&(d.settings.maxSlides=d.settings.minSlides),e.data("origStyle",e.attr("style")),e.children(d.settings.slideSelector).each(function(){a(this).data("origStyle",a(this).attr("style"))}),j())},j=function(){var b=d.children.eq(d.settings.startSlide);e.wrap('<div class="'+d.settings.wrapperClass+'"><div class="bx-viewport"></div></div>'),d.viewport=e.parent(),d.settings.ariaLive&&!d.settings.ticker&&d.viewport.attr("aria-live","polite"),d.loader=a('<div class="bx-loading" />'),d.viewport.prepend(d.loader),e.css({width:"horizontal"===d.settings.mode?1e3*d.children.length+215+"%":"auto",position:"relative"}),d.usingCSS&&d.settings.easing?e.css("-"+d.cssPrefix+"-transition-timing-function",d.settings.easing):d.settings.easing||(d.settings.easing="swing"),d.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),d.viewport.parent().css({maxWidth:n()}),d.settings.pager||d.settings.controls||d.viewport.parent().css({margin:"0 auto 0px"}),d.children.css({"float":"horizontal"===d.settings.mode?"left":"none",listStyle:"none",position:"relative"}),d.children.css("width",o()),"horizontal"===d.settings.mode&&d.settings.slideMargin>0&&d.children.css("marginRight",d.settings.slideMargin),"vertical"===d.settings.mode&&d.settings.slideMargin>0&&d.children.css("marginBottom",d.settings.slideMargin),"fade"===d.settings.mode&&(d.children.css({position:"absolute",zIndex:0,display:"none"}),d.children.eq(d.settings.startSlide).css({zIndex:d.settings.slideZIndex,display:"block"})),d.controls.el=a('<div class="bx-controls" />'),d.settings.captions&&y(),d.active.last=d.settings.startSlide===q()-1,d.settings.video&&e.fitVids(),("all"===d.settings.preloadImages||d.settings.ticker)&&(b=d.children),d.settings.ticker?d.settings.pager=!1:(d.settings.controls&&w(),d.settings.auto&&d.settings.autoControls&&x(),d.settings.pager&&v(),(d.settings.controls||d.settings.autoControls||d.settings.pager)&&d.viewport.after(d.controls.el)),k(b,l)},k=function(b,c){var d=b.find('img:not([src=""]), iframe').length,e=0;return 0===d?void c():void b.find('img:not([src=""]), iframe').each(function(){a(this).one("load error",function(){++e===d&&c()}).each(function(){this.complete&&a(this).load()})})},l=function(){if(d.settings.infiniteLoop&&"fade"!==d.settings.mode&&!d.settings.ticker){var b="vertical"===d.settings.mode?d.settings.minSlides:d.settings.maxSlides,c=d.children.slice(0,b).clone(!0).addClass("bx-clone"),f=d.children.slice(-b).clone(!0).addClass("bx-clone");d.settings.ariaHidden&&(c.attr("aria-hidden",!0),f.attr("aria-hidden",!0)),e.append(c).prepend(f)}d.loader.remove(),s(),"vertical"===d.settings.mode&&(d.settings.adaptiveHeight=!0),d.viewport.height(m()),e.redrawSlider(),d.settings.onSliderLoad.call(e,d.active.index),d.initialized=!0,d.settings.responsive&&a(window).bind("resize",S),d.settings.auto&&d.settings.autoStart&&(q()>1||d.settings.autoSlideForOnePage)&&I(),d.settings.ticker&&J(),d.settings.pager&&E(d.settings.startSlide),d.settings.controls&&H(),d.settings.touchEnabled&&!d.settings.ticker&&N(),d.settings.keyboardEnabled&&!d.settings.ticker&&a(document).keydown(M)},m=function(){var b=0,c=a();if("vertical"===d.settings.mode||d.settings.adaptiveHeight)if(d.carousel){var e=1===d.settings.moveSlides?d.active.index:d.active.index*r();for(c=d.children.eq(e),i=1;i<=d.settings.maxSlides-1;i++)c=e+i>=d.children.length?c.add(d.children.eq(i-1)):c.add(d.children.eq(e+i))}else c=d.children.eq(d.active.index);else c=d.children;return"vertical"===d.settings.mode?(c.each(function(c){b+=a(this).outerHeight()}),d.settings.slideMargin>0&&(b+=d.settings.slideMargin*(d.settings.minSlides-1))):b=Math.max.apply(Math,c.map(function(){return a(this).outerHeight(!1)}).get()),"border-box"===d.viewport.css("box-sizing")?b+=parseFloat(d.viewport.css("padding-top"))+parseFloat(d.viewport.css("padding-bottom"))+parseFloat(d.viewport.css("border-top-width"))+parseFloat(d.viewport.css("border-bottom-width")):"padding-box"===d.viewport.css("box-sizing")&&(b+=parseFloat(d.viewport.css("padding-top"))+parseFloat(d.viewport.css("padding-bottom"))),b},n=function(){var a="100%";return d.settings.slideWidth>0&&(a="horizontal"===d.settings.mode?d.settings.maxSlides*d.settings.slideWidth+(d.settings.maxSlides-1)*d.settings.slideMargin:d.settings.slideWidth),a},o=function(){var a=d.settings.slideWidth,b=d.viewport.width();if(0===d.settings.slideWidth||d.settings.slideWidth>b&&!d.carousel||"vertical"===d.settings.mode)a=b;else if(d.settings.maxSlides>1&&"horizontal"===d.settings.mode){if(b>d.maxThreshold)return a;b<d.minThreshold?a=(b-d.settings.slideMargin*(d.settings.minSlides-1))/d.settings.minSlides:d.settings.shrinkItems&&(a=Math.floor((b+d.settings.slideMargin)/Math.ceil((b+d.settings.slideMargin)/(a+d.settings.slideMargin))-d.settings.slideMargin))}return a},p=function(){var a=1,b=null;return"horizontal"===d.settings.mode&&d.settings.slideWidth>0?d.viewport.width()<d.minThreshold?a=d.settings.minSlides:d.viewport.width()>d.maxThreshold?a=d.settings.maxSlides:(b=d.children.first().width()+d.settings.slideMargin,a=Math.floor((d.viewport.width()+d.settings.slideMargin)/b)):"vertical"===d.settings.mode&&(a=d.settings.minSlides),a},q=function(){var a=0,b=0,c=0;if(d.settings.moveSlides>0)if(d.settings.infiniteLoop)a=Math.ceil(d.children.length/r());else for(;b<d.children.length;)++a,b=c+p(),c+=d.settings.moveSlides<=p()?d.settings.moveSlides:p();else a=Math.ceil(d.children.length/p());return a},r=function(){return d.settings.moveSlides>0&&d.settings.moveSlides<=p()?d.settings.moveSlides:p()},s=function(){var a,b,c;d.children.length>d.settings.maxSlides&&d.active.last&&!d.settings.infiniteLoop?"horizontal"===d.settings.mode?(b=d.children.last(),a=b.position(),t(-(a.left-(d.viewport.width()-b.outerWidth())),"reset",0)):"vertical"===d.settings.mode&&(c=d.children.length-d.settings.minSlides,a=d.children.eq(c).position(),t(-a.top,"reset",0)):(a=d.children.eq(d.active.index*r()).position(),d.active.index===q()-1&&(d.active.last=!0),void 0!==a&&("horizontal"===d.settings.mode?t(-a.left,"reset",0):"vertical"===d.settings.mode&&t(-a.top,"reset",0)))},t=function(b,c,f,g){var h,i;d.usingCSS?(i="vertical"===d.settings.mode?"translate3d(0, "+b+"px, 0)":"translate3d("+b+"px, 0, 0)",e.css("-"+d.cssPrefix+"-transition-duration",f/1e3+"s"),"slide"===c?(e.css(d.animProp,i),0!==f?e.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(b){a(b.target).is(e)&&(e.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),F())}):F()):"reset"===c?e.css(d.animProp,i):"ticker"===c&&(e.css("-"+d.cssPrefix+"-transition-timing-function","linear"),e.css(d.animProp,i),0!==f?e.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(b){a(b.target).is(e)&&(e.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),t(g.resetValue,"reset",0),K())}):(t(g.resetValue,"reset",0),K()))):(h={},h[d.animProp]=b,"slide"===c?e.animate(h,f,d.settings.easing,function(){F()}):"reset"===c?e.css(d.animProp,b):"ticker"===c&&e.animate(h,f,"linear",function(){t(g.resetValue,"reset",0),K()}))},u=function(){for(var b="",c="",e=q(),f=0;e>f;f++)c="",d.settings.buildPager&&a.isFunction(d.settings.buildPager)||d.settings.pagerCustom?(c=d.settings.buildPager(f),d.pagerEl.addClass("bx-custom-pager")):(c=f+1,d.pagerEl.addClass("bx-default-pager")),b+='<div class="bx-pager-item"><a href="" data-slide-index="'+f+'" class="bx-pager-link">'+c+"</a></div>";d.pagerEl.html(b)},v=function(){d.settings.pagerCustom?d.pagerEl=a(d.settings.pagerCustom):(d.pagerEl=a('<div class="bx-pager" />'),d.settings.pagerSelector?a(d.settings.pagerSelector).html(d.pagerEl):d.controls.el.addClass("bx-has-pager").append(d.pagerEl),u()),d.pagerEl.on("click touchend","a",D)},w=function(){d.controls.next=a('<a class="bx-next" href="">'+d.settings.nextText+"</a>"),d.controls.prev=a('<a class="bx-prev" href="">'+d.settings.prevText+"</a>"),d.controls.next.bind("click touchend",z),d.controls.prev.bind("click touchend",A),d.settings.nextSelector&&a(d.settings.nextSelector).append(d.controls.next),d.settings.prevSelector&&a(d.settings.prevSelector).append(d.controls.prev),d.settings.nextSelector||d.settings.prevSelector||(d.controls.directionEl=a('<div class="bx-controls-direction" />'),d.controls.directionEl.append(d.controls.prev).append(d.controls.next),d.controls.el.addClass("bx-has-controls-direction").append(d.controls.directionEl))},x=function(){d.controls.start=a('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+d.settings.startText+"</a></div>"),d.controls.stop=a('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+d.settings.stopText+"</a></div>"),d.controls.autoEl=a('<div class="bx-controls-auto" />'),d.controls.autoEl.on("click",".bx-start",B),d.controls.autoEl.on("click",".bx-stop",C),d.settings.autoControlsCombine?d.controls.autoEl.append(d.controls.start):d.controls.autoEl.append(d.controls.start).append(d.controls.stop),d.settings.autoControlsSelector?a(d.settings.autoControlsSelector).html(d.controls.autoEl):d.controls.el.addClass("bx-has-controls-auto").append(d.controls.autoEl),G(d.settings.autoStart?"stop":"start")},y=function(){d.children.each(function(b){var c=a(this).find("img:first").attr("title");void 0!==c&&(""+c).length&&a(this).append('<div class="bx-caption"><span>'+c+"</span></div>")})},z=function(a){a.preventDefault(),d.controls.el.hasClass("disabled")||(d.settings.auto&&d.settings.stopAutoOnClick&&e.stopAuto(),e.goToNextSlide())},A=function(a){a.preventDefault(),d.controls.el.hasClass("disabled")||(d.settings.auto&&d.settings.stopAutoOnClick&&e.stopAuto(),e.goToPrevSlide())},B=function(a){e.startAuto(),a.preventDefault()},C=function(a){e.stopAuto(),a.preventDefault()},D=function(b){var c,f;b.preventDefault(),d.controls.el.hasClass("disabled")||(d.settings.auto&&d.settings.stopAutoOnClick&&e.stopAuto(),c=a(b.currentTarget),void 0!==c.attr("data-slide-index")&&(f=parseInt(c.attr("data-slide-index")),f!==d.active.index&&e.goToSlide(f)))},E=function(b){var c=d.children.length;return"short"===d.settings.pagerType?(d.settings.maxSlides>1&&(c=Math.ceil(d.children.length/d.settings.maxSlides)),void d.pagerEl.html(b+1+d.settings.pagerShortSeparator+c)):(d.pagerEl.find("a").removeClass("active"),void d.pagerEl.each(function(c,d){a(d).find("a").eq(b).addClass("active")}))},F=function(){if(d.settings.infiniteLoop){var a="";0===d.active.index?a=d.children.eq(0).position():d.active.index===q()-1&&d.carousel?a=d.children.eq((q()-1)*r()).position():d.active.index===d.children.length-1&&(a=d.children.eq(d.children.length-1).position()),a&&("horizontal"===d.settings.mode?t(-a.left,"reset",0):"vertical"===d.settings.mode&&t(-a.top,"reset",0))}d.working=!1,d.settings.onSlideAfter.call(e,d.children.eq(d.active.index),d.oldIndex,d.active.index)},G=function(a){d.settings.autoControlsCombine?d.controls.autoEl.html(d.controls[a]):(d.controls.autoEl.find("a").removeClass("active"),d.controls.autoEl.find("a:not(.bx-"+a+")").addClass("active"))},H=function(){1===q()?(d.controls.prev.addClass("disabled"),d.controls.next.addClass("disabled")):!d.settings.infiniteLoop&&d.settings.hideControlOnEnd&&(0===d.active.index?(d.controls.prev.addClass("disabled"),d.controls.next.removeClass("disabled")):d.active.index===q()-1?(d.controls.next.addClass("disabled"),d.controls.prev.removeClass("disabled")):(d.controls.prev.removeClass("disabled"),d.controls.next.removeClass("disabled")))},I=function(){if(d.settings.autoDelay>0){setTimeout(e.startAuto,d.settings.autoDelay)}else e.startAuto(),a(window).focus(function(){e.startAuto()}).blur(function(){e.stopAuto()});d.settings.autoHover&&e.hover(function(){d.interval&&(e.stopAuto(!0),d.autoPaused=!0)},function(){d.autoPaused&&(e.startAuto(!0),d.autoPaused=null)})},J=function(){var b,c,f,g,h,i,j,k,l=0;"next"===d.settings.autoDirection?e.append(d.children.clone().addClass("bx-clone")):(e.prepend(d.children.clone().addClass("bx-clone")),b=d.children.first().position(),l="horizontal"===d.settings.mode?-b.left:-b.top),t(l,"reset",0),d.settings.pager=!1,d.settings.controls=!1,d.settings.autoControls=!1,d.settings.tickerHover&&(d.usingCSS?(g="horizontal"===d.settings.mode?4:5,d.viewport.hover(function(){c=e.css("-"+d.cssPrefix+"-transform"),f=parseFloat(c.split(",")[g]),t(f,"reset",0)},function(){k=0,d.children.each(function(b){k+="horizontal"===d.settings.mode?a(this).outerWidth(!0):a(this).outerHeight(!0)}),h=d.settings.speed/k,i="horizontal"===d.settings.mode?"left":"top",j=h*(k-Math.abs(parseInt(f))),K(j)})):d.viewport.hover(function(){e.stop()},function(){k=0,d.children.each(function(b){k+="horizontal"===d.settings.mode?a(this).outerWidth(!0):a(this).outerHeight(!0)}),h=d.settings.speed/k,i="horizontal"===d.settings.mode?"left":"top",j=h*(k-Math.abs(parseInt(e.css(i)))),K(j)})),K()},K=function(a){var b,c,f,g=a?a:d.settings.speed,h={left:0,top:0},i={left:0,top:0};"next"===d.settings.autoDirection?h=e.find(".bx-clone").first().position():i=d.children.first().position(),b="horizontal"===d.settings.mode?-h.left:-h.top,c="horizontal"===d.settings.mode?-i.left:-i.top,f={resetValue:c},t(b,"ticker",g,f)},L=function(b){var c=a(window),d={top:c.scrollTop(),left:c.scrollLeft()},e=b.offset();return d.right=d.left+c.width(),d.bottom=d.top+c.height(),e.right=e.left+b.outerWidth(),e.bottom=e.top+b.outerHeight(),!(d.right<e.left||d.left>e.right||d.bottom<e.top||d.top>e.bottom)},M=function(a){var b=document.activeElement.tagName.toLowerCase(),c="input|textarea",d=new RegExp(b,["i"]),f=d.exec(c);if(null==f&&L(e)){if(39===a.keyCode)return z(a),!1;if(37===a.keyCode)return A(a),!1}},N=function(){d.touch={start:{x:0,y:0},end:{x:0,y:0}},d.viewport.bind("touchstart MSPointerDown pointerdown",O),d.viewport.on("click",".bxslider a",function(a){d.viewport.hasClass("click-disabled")&&(a.preventDefault(),d.viewport.removeClass("click-disabled"))})},O=function(a){if(d.controls.el.addClass("disabled"),d.working)a.preventDefault(),d.controls.el.removeClass("disabled");else{d.touch.originalPos=e.position();var b=a.originalEvent,c="undefined"!=typeof b.changedTouches?b.changedTouches:[b];d.touch.start.x=c[0].pageX,d.touch.start.y=c[0].pageY,d.viewport.get(0).setPointerCapture&&(d.pointerId=b.pointerId,d.viewport.get(0).setPointerCapture(d.pointerId)),d.viewport.bind("touchmove MSPointerMove pointermove",Q),d.viewport.bind("touchend MSPointerUp pointerup",R),d.viewport.bind("MSPointerCancel pointercancel",P)}},P=function(a){t(d.touch.originalPos.left,"reset",0),d.controls.el.removeClass("disabled"),d.viewport.unbind("MSPointerCancel pointercancel",P),d.viewport.unbind("touchmove MSPointerMove pointermove",Q),d.viewport.unbind("touchend MSPointerUp pointerup",R),d.viewport.get(0).releasePointerCapture&&d.viewport.get(0).releasePointerCapture(d.pointerId)},Q=function(a){var b=a.originalEvent,c="undefined"!=typeof b.changedTouches?b.changedTouches:[b],e=Math.abs(c[0].pageX-d.touch.start.x),f=Math.abs(c[0].pageY-d.touch.start.y),g=0,h=0;3*e>f&&d.settings.preventDefaultSwipeX?a.preventDefault():3*f>e&&d.settings.preventDefaultSwipeY&&a.preventDefault(),"fade"!==d.settings.mode&&d.settings.oneToOneTouch&&("horizontal"===d.settings.mode?(h=c[0].pageX-d.touch.start.x,g=d.touch.originalPos.left+h):(h=c[0].pageY-d.touch.start.y,g=d.touch.originalPos.top+h),t(g,"reset",0))},R=function(a){d.viewport.unbind("touchmove MSPointerMove pointermove",Q),d.controls.el.removeClass("disabled");var b=a.originalEvent,c="undefined"!=typeof b.changedTouches?b.changedTouches:[b],f=0,g=0;d.touch.end.x=c[0].pageX,d.touch.end.y=c[0].pageY,"fade"===d.settings.mode?(g=Math.abs(d.touch.start.x-d.touch.end.x),g>=d.settings.swipeThreshold&&(d.touch.start.x>d.touch.end.x?e.goToNextSlide():e.goToPrevSlide(),e.stopAuto())):("horizontal"===d.settings.mode?(g=d.touch.end.x-d.touch.start.x,f=d.touch.originalPos.left):(g=d.touch.end.y-d.touch.start.y,f=d.touch.originalPos.top),!d.settings.infiniteLoop&&(0===d.active.index&&g>0||d.active.last&&0>g)?t(f,"reset",200):Math.abs(g)>=d.settings.swipeThreshold?(0>g?e.goToNextSlide():e.goToPrevSlide(),e.stopAuto()):t(f,"reset",200)),d.viewport.unbind("touchend MSPointerUp pointerup",R),d.viewport.get(0).releasePointerCapture&&d.viewport.get(0).releasePointerCapture(d.pointerId)},S=function(b){if(d.initialized)if(d.working)window.setTimeout(S,10);else{var c=a(window).width(),h=a(window).height();(f!==c||g!==h)&&(f=c,g=h,e.redrawSlider(),d.settings.onSliderResize.call(e,d.active.index))}},T=function(a){var b=p();d.settings.ariaHidden&&!d.settings.ticker&&(d.children.attr("aria-hidden","true"),d.children.slice(a,a+b).attr("aria-hidden","false"))},U=function(a){return 0>a?d.settings.infiniteLoop?q()-1:d.active.index:a>=q()?d.settings.infiniteLoop?0:d.active.index:a};return e.goToSlide=function(b,c){var f,g,h,i,j=!0,k=0,l={left:0,top:0},n=null;if(d.oldIndex=d.active.index,d.active.index=U(b),!d.working&&d.active.index!==d.oldIndex){if(d.working=!0,j=d.settings.onSlideBefore.call(e,d.children.eq(d.active.index),d.oldIndex,d.active.index),"undefined"!=typeof j&&!j)return d.active.index=d.oldIndex,void(d.working=!1);"next"===c?d.settings.onSlideNext.call(e,d.children.eq(d.active.index),d.oldIndex,d.active.index)||(j=!1):"prev"===c&&(d.settings.onSlidePrev.call(e,d.children.eq(d.active.index),d.oldIndex,d.active.index)||(j=!1)),d.active.last=d.active.index>=q()-1,(d.settings.pager||d.settings.pagerCustom)&&E(d.active.index),d.settings.controls&&H(),"fade"===d.settings.mode?(d.settings.adaptiveHeight&&d.viewport.height()!==m()&&d.viewport.animate({height:m()},d.settings.adaptiveHeightSpeed),d.children.filter(":visible").fadeOut(d.settings.speed).css({zIndex:0}),d.children.eq(d.active.index).css("zIndex",d.settings.slideZIndex+1).fadeIn(d.settings.speed,function(){a(this).css("zIndex",d.settings.slideZIndex),F()})):(d.settings.adaptiveHeight&&d.viewport.height()!==m()&&d.viewport.animate({height:m()},d.settings.adaptiveHeightSpeed),!d.settings.infiniteLoop&&d.carousel&&d.active.last?"horizontal"===d.settings.mode?(n=d.children.eq(d.children.length-1),l=n.position(),k=d.viewport.width()-n.outerWidth()):(f=d.children.length-d.settings.minSlides,l=d.children.eq(f).position()):d.carousel&&d.active.last&&"prev"===c?(g=1===d.settings.moveSlides?d.settings.maxSlides-r():(q()-1)*r()-(d.children.length-d.settings.maxSlides),n=e.children(".bx-clone").eq(g),l=n.position()):"next"===c&&0===d.active.index?(l=e.find("> .bx-clone").eq(d.settings.maxSlides).position(),d.active.last=!1):b>=0&&(i=b*parseInt(r()),l=d.children.eq(i).position()),"undefined"!=typeof l?(h="horizontal"===d.settings.mode?-(l.left-k):-l.top,t(h,"slide",d.settings.speed)):d.working=!1),d.settings.ariaHidden&&T(d.active.index*r())}},e.goToNextSlide=function(){if(d.settings.infiniteLoop||!d.active.last){var a=parseInt(d.active.index)+1;e.goToSlide(a,"next")}},e.goToPrevSlide=function(){if(d.settings.infiniteLoop||0!==d.active.index){var a=parseInt(d.active.index)-1;e.goToSlide(a,"prev")}},e.startAuto=function(a){d.interval||(d.interval=setInterval(function(){"next"===d.settings.autoDirection?e.goToNextSlide():e.goToPrevSlide()},d.settings.pause),d.settings.autoControls&&a!==!0&&G("stop"))},e.stopAuto=function(a){d.interval&&(clearInterval(d.interval),d.interval=null,d.settings.autoControls&&a!==!0&&G("start"))},e.getCurrentSlide=function(){return d.active.index},e.getCurrentSlideElement=function(){return d.children.eq(d.active.index)},e.getSlideElement=function(a){return d.children.eq(a)},e.getSlideCount=function(){return d.children.length},e.isWorking=function(){return d.working},e.redrawSlider=function(){d.children.add(e.find(".bx-clone")).outerWidth(o()),d.viewport.css("height",m()),d.settings.ticker||s(),d.active.last&&(d.active.index=q()-1),d.active.index>=q()&&(d.active.last=!0),d.settings.pager&&!d.settings.pagerCustom&&(u(),E(d.active.index)),d.settings.ariaHidden&&T(d.active.index*r())},e.destroySlider=function(){d.initialized&&(d.initialized=!1,a(".bx-clone",this).remove(),d.children.each(function(){void 0!==a(this).data("origStyle")?a(this).attr("style",a(this).data("origStyle")):a(this).removeAttr("style")}),void 0!==a(this).data("origStyle")?this.attr("style",a(this).data("origStyle")):a(this).removeAttr("style"),a(this).unwrap().unwrap(),d.controls.el&&d.controls.el.remove(),d.controls.next&&d.controls.next.remove(),d.controls.prev&&d.controls.prev.remove(),d.pagerEl&&d.settings.controls&&!d.settings.pagerCustom&&d.pagerEl.remove(),a(".bx-caption",this).remove(),d.controls.autoEl&&d.controls.autoEl.remove(),clearInterval(d.interval),d.settings.responsive&&a(window).unbind("resize",S),d.settings.keyboardEnabled&&a(document).unbind("keydown",M),a(this).removeData("bxSlider"))},e.reloadSlider=function(b){void 0!==b&&(c=b),e.destroySlider(),h(),a(e).data("bxSlider",this)},h(),a(e).data("bxSlider",this),this}}}(jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(71);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
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
/* 71 */
/***/ function(module, exports) {

	module.exports = "/**\n * bxSlider v4.2.5\n * Copyright 2013-2015 Steven Wanderski\n * Written while drinking Belgian ales and listening to jazz\n\n * Licensed under MIT (http://opensource.org/licenses/MIT)\n */\n\n\n.bx-wrapper{position:relative;margin:0 auto 60px;padding:0;*zoom:1;-ms-touch-action:pan-y;touch-action:pan-y}.bx-wrapper img{max-width:100%;display:block}.bxslider{margin:0;padding:0}ul.bxslider{list-style:none}.bx-viewport{-webkit-transform:translatez(0)}.bx-wrapper{-moz-box-shadow:0 0 5px #ccc;-webkit-box-shadow:0 0 5px #ccc;box-shadow:0 0 5px #ccc;border:5px solid #fff;background:#fff}.bx-wrapper .bx-controls-auto,.bx-wrapper .bx-pager{position:absolute;bottom:-30px;width:100%}.bx-wrapper .bx-loading{min-height:50px;background:url(images/bx_loader.gif) center center no-repeat #fff;height:100%;width:100%;position:absolute;top:0;left:0;z-index:2000}.bx-wrapper .bx-pager{text-align:center;font-size:.85em;font-family:Arial;font-weight:700;color:#666;padding-top:20px}.bx-wrapper .bx-pager.bx-default-pager a{background:#666;text-indent:-9999px;display:block;width:10px;height:10px;margin:0 5px;outline:0;-moz-border-radius:5px;-webkit-border-radius:5px;border-radius:5px}.bx-wrapper .bx-pager.bx-default-pager a.active,.bx-wrapper .bx-pager.bx-default-pager a:focus,.bx-wrapper .bx-pager.bx-default-pager a:hover{background:#000}.bx-wrapper .bx-controls-auto .bx-controls-auto-item,.bx-wrapper .bx-pager-item{display:inline-block;*zoom:1;*display:inline}.bx-wrapper .bx-pager-item{font-size:0;line-height:0}.bx-wrapper .bx-prev{left:10px;background:url(images/controls.png) no-repeat 0 -32px}.bx-wrapper .bx-prev:focus,.bx-wrapper .bx-prev:hover{background-position:0 0}.bx-wrapper .bx-next{right:10px;background:url(images/controls.png) no-repeat -43px -32px}.bx-wrapper .bx-next:focus,.bx-wrapper .bx-next:hover{background-position:-43px 0}.bx-wrapper .bx-controls-direction a{position:absolute;top:50%;margin-top:-16px;outline:0;width:32px;height:32px;text-indent:-9999px;z-index:9999}.bx-wrapper .bx-controls-direction a.disabled{display:none}.bx-wrapper .bx-controls-auto{text-align:center}.bx-wrapper .bx-controls-auto .bx-start{display:block;text-indent:-9999px;width:10px;height:11px;outline:0;background:url(images/controls.png) -86px -11px no-repeat;margin:0 3px}.bx-wrapper .bx-controls-auto .bx-start.active,.bx-wrapper .bx-controls-auto .bx-start:focus,.bx-wrapper .bx-controls-auto .bx-start:hover{background-position:-86px 0}.bx-wrapper .bx-controls-auto .bx-stop{display:block;text-indent:-9999px;width:9px;height:11px;outline:0;background:url(images/controls.png) -86px -44px no-repeat;margin:0 3px}.bx-wrapper .bx-controls-auto .bx-stop.active,.bx-wrapper .bx-controls-auto .bx-stop:focus,.bx-wrapper .bx-controls-auto .bx-stop:hover{background-position:-86px -33px}.bx-wrapper .bx-controls.bx-has-controls-auto.bx-has-pager .bx-pager{text-align:left;width:80%}.bx-wrapper .bx-controls.bx-has-controls-auto.bx-has-pager .bx-controls-auto{right:0;width:35px}.bx-wrapper .bx-caption{position:absolute;bottom:0;left:0;background:#666;background:rgba(80,80,80,.75);width:100%}.bx-wrapper .bx-caption span{color:#fff;font-family:Arial;display:block;font-size:.85em;padding:10px}"

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(39);
	__webpack_require__(73);
	__webpack_require__(74);
	__webpack_require__(75);
	__webpack_require__(76);
	__webpack_require__(77);
	__webpack_require__(79);
	__webpack_require__(80);
	__webpack_require__(83);
	__webpack_require__(84);
	__webpack_require__(86);

	module.exports = angular.module('v4p',
			['ngCookies', 'cfp.hotkeys', 'ui.bootstrap', 'hmTouchEvents',
				__webpack_require__(88), __webpack_require__(47)])
			.factory('Vote', __webpack_require__(98))
			.factory('Voting', __webpack_require__(99))
			.controller('VotingController', __webpack_require__(101))
			.name;


/***/ },
/* 73 */
/***/ function(module, exports) {

	/*
	 * angular-ui-bootstrap
	 * http://angular-ui.github.io/bootstrap/

	 * Version: 0.12.1 - 2015-02-20
	 * License: MIT
	 */
	angular.module("ui.bootstrap",["ui.bootstrap.transition","ui.bootstrap.collapse","ui.bootstrap.accordion","ui.bootstrap.alert","ui.bootstrap.bindHtml","ui.bootstrap.buttons","ui.bootstrap.carousel","ui.bootstrap.dateparser","ui.bootstrap.position","ui.bootstrap.datepicker","ui.bootstrap.dropdown","ui.bootstrap.modal","ui.bootstrap.pagination","ui.bootstrap.tooltip","ui.bootstrap.popover","ui.bootstrap.progressbar","ui.bootstrap.rating","ui.bootstrap.tabs","ui.bootstrap.timepicker","ui.bootstrap.typeahead"]),angular.module("ui.bootstrap.transition",[]).factory("$transition",["$q","$timeout","$rootScope",function(a,b,c){function d(a){for(var b in a)if(void 0!==f.style[b])return a[b]}var e=function(d,f,g){g=g||{};var h=a.defer(),i=e[g.animation?"animationEndEventName":"transitionEndEventName"],j=function(){c.$apply(function(){d.unbind(i,j),h.resolve(d)})};return i&&d.bind(i,j),b(function(){angular.isString(f)?d.addClass(f):angular.isFunction(f)?f(d):angular.isObject(f)&&d.css(f),i||h.resolve(d)}),h.promise.cancel=function(){i&&d.unbind(i,j),h.reject("Transition cancelled")},h.promise},f=document.createElement("trans"),g={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"},h={WebkitTransition:"webkitAnimationEnd",MozTransition:"animationend",OTransition:"oAnimationEnd",transition:"animationend"};return e.transitionEndEventName=d(g),e.animationEndEventName=d(h),e}]),angular.module("ui.bootstrap.collapse",["ui.bootstrap.transition"]).directive("collapse",["$transition",function(a){return{link:function(b,c,d){function e(b){function d(){j===e&&(j=void 0)}var e=a(c,b);return j&&j.cancel(),j=e,e.then(d,d),e}function f(){k?(k=!1,g()):(c.removeClass("collapse").addClass("collapsing"),e({height:c[0].scrollHeight+"px"}).then(g))}function g(){c.removeClass("collapsing"),c.addClass("collapse in"),c.css({height:"auto"})}function h(){if(k)k=!1,i(),c.css({height:0});else{c.css({height:c[0].scrollHeight+"px"});{c[0].offsetWidth}c.removeClass("collapse in").addClass("collapsing"),e({height:0}).then(i)}}function i(){c.removeClass("collapsing"),c.addClass("collapse")}var j,k=!0;b.$watch(d.collapse,function(a){a?h():f()})}}}]),angular.module("ui.bootstrap.accordion",["ui.bootstrap.collapse"]).constant("accordionConfig",{closeOthers:!0}).controller("AccordionController",["$scope","$attrs","accordionConfig",function(a,b,c){this.groups=[],this.closeOthers=function(d){var e=angular.isDefined(b.closeOthers)?a.$eval(b.closeOthers):c.closeOthers;e&&angular.forEach(this.groups,function(a){a!==d&&(a.isOpen=!1)})},this.addGroup=function(a){var b=this;this.groups.push(a),a.$on("$destroy",function(){b.removeGroup(a)})},this.removeGroup=function(a){var b=this.groups.indexOf(a);-1!==b&&this.groups.splice(b,1)}}]).directive("accordion",function(){return{restrict:"EA",controller:"AccordionController",transclude:!0,replace:!1,templateUrl:"template/accordion/accordion.html"}}).directive("accordionGroup",function(){return{require:"^accordion",restrict:"EA",transclude:!0,replace:!0,templateUrl:"template/accordion/accordion-group.html",scope:{heading:"@",isOpen:"=?",isDisabled:"=?"},controller:function(){this.setHeading=function(a){this.heading=a}},link:function(a,b,c,d){d.addGroup(a),a.$watch("isOpen",function(b){b&&d.closeOthers(a)}),a.toggleOpen=function(){a.isDisabled||(a.isOpen=!a.isOpen)}}}}).directive("accordionHeading",function(){return{restrict:"EA",transclude:!0,template:"",replace:!0,require:"^accordionGroup",link:function(a,b,c,d,e){d.setHeading(e(a,function(){}))}}}).directive("accordionTransclude",function(){return{require:"^accordionGroup",link:function(a,b,c,d){a.$watch(function(){return d[c.accordionTransclude]},function(a){a&&(b.html(""),b.append(a))})}}}),angular.module("ui.bootstrap.alert",[]).controller("AlertController",["$scope","$attrs",function(a,b){a.closeable="close"in b,this.close=a.close}]).directive("alert",function(){return{restrict:"EA",controller:"AlertController",templateUrl:"template/alert/alert.html",transclude:!0,replace:!0,scope:{type:"@",close:"&"}}}).directive("dismissOnTimeout",["$timeout",function(a){return{require:"alert",link:function(b,c,d,e){a(function(){e.close()},parseInt(d.dismissOnTimeout,10))}}}]),angular.module("ui.bootstrap.bindHtml",[]).directive("bindHtmlUnsafe",function(){return function(a,b,c){b.addClass("ng-binding").data("$binding",c.bindHtmlUnsafe),a.$watch(c.bindHtmlUnsafe,function(a){b.html(a||"")})}}),angular.module("ui.bootstrap.buttons",[]).constant("buttonConfig",{activeClass:"active",toggleEvent:"click"}).controller("ButtonsController",["buttonConfig",function(a){this.activeClass=a.activeClass||"active",this.toggleEvent=a.toggleEvent||"click"}]).directive("btnRadio",function(){return{require:["btnRadio","ngModel"],controller:"ButtonsController",link:function(a,b,c,d){var e=d[0],f=d[1];f.$render=function(){b.toggleClass(e.activeClass,angular.equals(f.$modelValue,a.$eval(c.btnRadio)))},b.bind(e.toggleEvent,function(){var d=b.hasClass(e.activeClass);(!d||angular.isDefined(c.uncheckable))&&a.$apply(function(){f.$setViewValue(d?null:a.$eval(c.btnRadio)),f.$render()})})}}}).directive("btnCheckbox",function(){return{require:["btnCheckbox","ngModel"],controller:"ButtonsController",link:function(a,b,c,d){function e(){return g(c.btnCheckboxTrue,!0)}function f(){return g(c.btnCheckboxFalse,!1)}function g(b,c){var d=a.$eval(b);return angular.isDefined(d)?d:c}var h=d[0],i=d[1];i.$render=function(){b.toggleClass(h.activeClass,angular.equals(i.$modelValue,e()))},b.bind(h.toggleEvent,function(){a.$apply(function(){i.$setViewValue(b.hasClass(h.activeClass)?f():e()),i.$render()})})}}}),angular.module("ui.bootstrap.carousel",["ui.bootstrap.transition"]).controller("CarouselController",["$scope","$timeout","$interval","$transition",function(a,b,c,d){function e(){f();var b=+a.interval;!isNaN(b)&&b>0&&(h=c(g,b))}function f(){h&&(c.cancel(h),h=null)}function g(){var b=+a.interval;i&&!isNaN(b)&&b>0?a.next():a.pause()}var h,i,j=this,k=j.slides=a.slides=[],l=-1;j.currentSlide=null;var m=!1;j.select=a.select=function(c,f){function g(){if(!m){if(j.currentSlide&&angular.isString(f)&&!a.noTransition&&c.$element){c.$element.addClass(f);{c.$element[0].offsetWidth}angular.forEach(k,function(a){angular.extend(a,{direction:"",entering:!1,leaving:!1,active:!1})}),angular.extend(c,{direction:f,active:!0,entering:!0}),angular.extend(j.currentSlide||{},{direction:f,leaving:!0}),a.$currentTransition=d(c.$element,{}),function(b,c){a.$currentTransition.then(function(){h(b,c)},function(){h(b,c)})}(c,j.currentSlide)}else h(c,j.currentSlide);j.currentSlide=c,l=i,e()}}function h(b,c){angular.extend(b,{direction:"",active:!0,leaving:!1,entering:!1}),angular.extend(c||{},{direction:"",active:!1,leaving:!1,entering:!1}),a.$currentTransition=null}var i=k.indexOf(c);void 0===f&&(f=i>l?"next":"prev"),c&&c!==j.currentSlide&&(a.$currentTransition?(a.$currentTransition.cancel(),b(g)):g())},a.$on("$destroy",function(){m=!0}),j.indexOfSlide=function(a){return k.indexOf(a)},a.next=function(){var b=(l+1)%k.length;return a.$currentTransition?void 0:j.select(k[b],"next")},a.prev=function(){var b=0>l-1?k.length-1:l-1;return a.$currentTransition?void 0:j.select(k[b],"prev")},a.isActive=function(a){return j.currentSlide===a},a.$watch("interval",e),a.$on("$destroy",f),a.play=function(){i||(i=!0,e())},a.pause=function(){a.noPause||(i=!1,f())},j.addSlide=function(b,c){b.$element=c,k.push(b),1===k.length||b.active?(j.select(k[k.length-1]),1==k.length&&a.play()):b.active=!1},j.removeSlide=function(a){var b=k.indexOf(a);k.splice(b,1),k.length>0&&a.active?j.select(b>=k.length?k[b-1]:k[b]):l>b&&l--}}]).directive("carousel",[function(){return{restrict:"EA",transclude:!0,replace:!0,controller:"CarouselController",require:"carousel",templateUrl:"template/carousel/carousel.html",scope:{interval:"=",noTransition:"=",noPause:"="}}}]).directive("slide",function(){return{require:"^carousel",restrict:"EA",transclude:!0,replace:!0,templateUrl:"template/carousel/slide.html",scope:{active:"=?"},link:function(a,b,c,d){d.addSlide(a,b),a.$on("$destroy",function(){d.removeSlide(a)}),a.$watch("active",function(b){b&&d.select(a)})}}}),angular.module("ui.bootstrap.dateparser",[]).service("dateParser",["$locale","orderByFilter",function(a,b){function c(a){var c=[],d=a.split("");return angular.forEach(e,function(b,e){var f=a.indexOf(e);if(f>-1){a=a.split(""),d[f]="("+b.regex+")",a[f]="$";for(var g=f+1,h=f+e.length;h>g;g++)d[g]="",a[g]="$";a=a.join(""),c.push({index:f,apply:b.apply})}}),{regex:new RegExp("^"+d.join("")+"$"),map:b(c,"index")}}function d(a,b,c){return 1===b&&c>28?29===c&&(a%4===0&&a%100!==0||a%400===0):3===b||5===b||8===b||10===b?31>c:!0}this.parsers={};var e={yyyy:{regex:"\\d{4}",apply:function(a){this.year=+a}},yy:{regex:"\\d{2}",apply:function(a){this.year=+a+2e3}},y:{regex:"\\d{1,4}",apply:function(a){this.year=+a}},MMMM:{regex:a.DATETIME_FORMATS.MONTH.join("|"),apply:function(b){this.month=a.DATETIME_FORMATS.MONTH.indexOf(b)}},MMM:{regex:a.DATETIME_FORMATS.SHORTMONTH.join("|"),apply:function(b){this.month=a.DATETIME_FORMATS.SHORTMONTH.indexOf(b)}},MM:{regex:"0[1-9]|1[0-2]",apply:function(a){this.month=a-1}},M:{regex:"[1-9]|1[0-2]",apply:function(a){this.month=a-1}},dd:{regex:"[0-2][0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a}},d:{regex:"[1-2]?[0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a}},EEEE:{regex:a.DATETIME_FORMATS.DAY.join("|")},EEE:{regex:a.DATETIME_FORMATS.SHORTDAY.join("|")}};this.parse=function(b,e){if(!angular.isString(b)||!e)return b;e=a.DATETIME_FORMATS[e]||e,this.parsers[e]||(this.parsers[e]=c(e));var f=this.parsers[e],g=f.regex,h=f.map,i=b.match(g);if(i&&i.length){for(var j,k={year:1900,month:0,date:1,hours:0},l=1,m=i.length;m>l;l++){var n=h[l-1];n.apply&&n.apply.call(k,i[l])}return d(k.year,k.month,k.date)&&(j=new Date(k.year,k.month,k.date,k.hours)),j}}}]),angular.module("ui.bootstrap.position",[]).factory("$position",["$document","$window",function(a,b){function c(a,c){return a.currentStyle?a.currentStyle[c]:b.getComputedStyle?b.getComputedStyle(a)[c]:a.style[c]}function d(a){return"static"===(c(a,"position")||"static")}var e=function(b){for(var c=a[0],e=b.offsetParent||c;e&&e!==c&&d(e);)e=e.offsetParent;return e||c};return{position:function(b){var c=this.offset(b),d={top:0,left:0},f=e(b[0]);f!=a[0]&&(d=this.offset(angular.element(f)),d.top+=f.clientTop-f.scrollTop,d.left+=f.clientLeft-f.scrollLeft);var g=b[0].getBoundingClientRect();return{width:g.width||b.prop("offsetWidth"),height:g.height||b.prop("offsetHeight"),top:c.top-d.top,left:c.left-d.left}},offset:function(c){var d=c[0].getBoundingClientRect();return{width:d.width||c.prop("offsetWidth"),height:d.height||c.prop("offsetHeight"),top:d.top+(b.pageYOffset||a[0].documentElement.scrollTop),left:d.left+(b.pageXOffset||a[0].documentElement.scrollLeft)}},positionElements:function(a,b,c,d){var e,f,g,h,i=c.split("-"),j=i[0],k=i[1]||"center";e=d?this.offset(a):this.position(a),f=b.prop("offsetWidth"),g=b.prop("offsetHeight");var l={center:function(){return e.left+e.width/2-f/2},left:function(){return e.left},right:function(){return e.left+e.width}},m={center:function(){return e.top+e.height/2-g/2},top:function(){return e.top},bottom:function(){return e.top+e.height}};switch(j){case"right":h={top:m[k](),left:l[j]()};break;case"left":h={top:m[k](),left:e.left-f};break;case"bottom":h={top:m[j](),left:l[k]()};break;default:h={top:e.top-g,left:l[k]()}}return h}}}]),angular.module("ui.bootstrap.datepicker",["ui.bootstrap.dateparser","ui.bootstrap.position"]).constant("datepickerConfig",{formatDay:"dd",formatMonth:"MMMM",formatYear:"yyyy",formatDayHeader:"EEE",formatDayTitle:"MMMM yyyy",formatMonthTitle:"yyyy",datepickerMode:"day",minMode:"day",maxMode:"year",showWeeks:!0,startingDay:0,yearRange:20,minDate:null,maxDate:null}).controller("DatepickerController",["$scope","$attrs","$parse","$interpolate","$timeout","$log","dateFilter","datepickerConfig",function(a,b,c,d,e,f,g,h){var i=this,j={$setViewValue:angular.noop};this.modes=["day","month","year"],angular.forEach(["formatDay","formatMonth","formatYear","formatDayHeader","formatDayTitle","formatMonthTitle","minMode","maxMode","showWeeks","startingDay","yearRange"],function(c,e){i[c]=angular.isDefined(b[c])?8>e?d(b[c])(a.$parent):a.$parent.$eval(b[c]):h[c]}),angular.forEach(["minDate","maxDate"],function(d){b[d]?a.$parent.$watch(c(b[d]),function(a){i[d]=a?new Date(a):null,i.refreshView()}):i[d]=h[d]?new Date(h[d]):null}),a.datepickerMode=a.datepickerMode||h.datepickerMode,a.uniqueId="datepicker-"+a.$id+"-"+Math.floor(1e4*Math.random()),this.activeDate=angular.isDefined(b.initDate)?a.$parent.$eval(b.initDate):new Date,a.isActive=function(b){return 0===i.compare(b.date,i.activeDate)?(a.activeDateId=b.uid,!0):!1},this.init=function(a){j=a,j.$render=function(){i.render()}},this.render=function(){if(j.$modelValue){var a=new Date(j.$modelValue),b=!isNaN(a);b?this.activeDate=a:f.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.'),j.$setValidity("date",b)}this.refreshView()},this.refreshView=function(){if(this.element){this._refreshView();var a=j.$modelValue?new Date(j.$modelValue):null;j.$setValidity("date-disabled",!a||this.element&&!this.isDisabled(a))}},this.createDateObject=function(a,b){var c=j.$modelValue?new Date(j.$modelValue):null;return{date:a,label:g(a,b),selected:c&&0===this.compare(a,c),disabled:this.isDisabled(a),current:0===this.compare(a,new Date)}},this.isDisabled=function(c){return this.minDate&&this.compare(c,this.minDate)<0||this.maxDate&&this.compare(c,this.maxDate)>0||b.dateDisabled&&a.dateDisabled({date:c,mode:a.datepickerMode})},this.split=function(a,b){for(var c=[];a.length>0;)c.push(a.splice(0,b));return c},a.select=function(b){if(a.datepickerMode===i.minMode){var c=j.$modelValue?new Date(j.$modelValue):new Date(0,0,0,0,0,0,0);c.setFullYear(b.getFullYear(),b.getMonth(),b.getDate()),j.$setViewValue(c),j.$render()}else i.activeDate=b,a.datepickerMode=i.modes[i.modes.indexOf(a.datepickerMode)-1]},a.move=function(a){var b=i.activeDate.getFullYear()+a*(i.step.years||0),c=i.activeDate.getMonth()+a*(i.step.months||0);i.activeDate.setFullYear(b,c,1),i.refreshView()},a.toggleMode=function(b){b=b||1,a.datepickerMode===i.maxMode&&1===b||a.datepickerMode===i.minMode&&-1===b||(a.datepickerMode=i.modes[i.modes.indexOf(a.datepickerMode)+b])},a.keys={13:"enter",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down"};var k=function(){e(function(){i.element[0].focus()},0,!1)};a.$on("datepicker.focus",k),a.keydown=function(b){var c=a.keys[b.which];if(c&&!b.shiftKey&&!b.altKey)if(b.preventDefault(),b.stopPropagation(),"enter"===c||"space"===c){if(i.isDisabled(i.activeDate))return;a.select(i.activeDate),k()}else!b.ctrlKey||"up"!==c&&"down"!==c?(i.handleKeyDown(c,b),i.refreshView()):(a.toggleMode("up"===c?1:-1),k())}}]).directive("datepicker",function(){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/datepicker.html",scope:{datepickerMode:"=?",dateDisabled:"&"},require:["datepicker","?^ngModel"],controller:"DatepickerController",link:function(a,b,c,d){var e=d[0],f=d[1];f&&e.init(f)}}}).directive("daypicker",["dateFilter",function(a){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/day.html",require:"^datepicker",link:function(b,c,d,e){function f(a,b){return 1!==b||a%4!==0||a%100===0&&a%400!==0?i[b]:29}function g(a,b){var c=new Array(b),d=new Date(a),e=0;for(d.setHours(12);b>e;)c[e++]=new Date(d),d.setDate(d.getDate()+1);return c}function h(a){var b=new Date(a);b.setDate(b.getDate()+4-(b.getDay()||7));var c=b.getTime();return b.setMonth(0),b.setDate(1),Math.floor(Math.round((c-b)/864e5)/7)+1}b.showWeeks=e.showWeeks,e.step={months:1},e.element=c;var i=[31,28,31,30,31,30,31,31,30,31,30,31];e._refreshView=function(){var c=e.activeDate.getFullYear(),d=e.activeDate.getMonth(),f=new Date(c,d,1),i=e.startingDay-f.getDay(),j=i>0?7-i:-i,k=new Date(f);j>0&&k.setDate(-j+1);for(var l=g(k,42),m=0;42>m;m++)l[m]=angular.extend(e.createDateObject(l[m],e.formatDay),{secondary:l[m].getMonth()!==d,uid:b.uniqueId+"-"+m});b.labels=new Array(7);for(var n=0;7>n;n++)b.labels[n]={abbr:a(l[n].date,e.formatDayHeader),full:a(l[n].date,"EEEE")};if(b.title=a(e.activeDate,e.formatDayTitle),b.rows=e.split(l,7),b.showWeeks){b.weekNumbers=[];for(var o=h(b.rows[0][0].date),p=b.rows.length;b.weekNumbers.push(o++)<p;);}},e.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth(),a.getDate())-new Date(b.getFullYear(),b.getMonth(),b.getDate())},e.handleKeyDown=function(a){var b=e.activeDate.getDate();if("left"===a)b-=1;else if("up"===a)b-=7;else if("right"===a)b+=1;else if("down"===a)b+=7;else if("pageup"===a||"pagedown"===a){var c=e.activeDate.getMonth()+("pageup"===a?-1:1);e.activeDate.setMonth(c,1),b=Math.min(f(e.activeDate.getFullYear(),e.activeDate.getMonth()),b)}else"home"===a?b=1:"end"===a&&(b=f(e.activeDate.getFullYear(),e.activeDate.getMonth()));e.activeDate.setDate(b)},e.refreshView()}}}]).directive("monthpicker",["dateFilter",function(a){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/month.html",require:"^datepicker",link:function(b,c,d,e){e.step={years:1},e.element=c,e._refreshView=function(){for(var c=new Array(12),d=e.activeDate.getFullYear(),f=0;12>f;f++)c[f]=angular.extend(e.createDateObject(new Date(d,f,1),e.formatMonth),{uid:b.uniqueId+"-"+f});b.title=a(e.activeDate,e.formatMonthTitle),b.rows=e.split(c,3)},e.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth())-new Date(b.getFullYear(),b.getMonth())},e.handleKeyDown=function(a){var b=e.activeDate.getMonth();if("left"===a)b-=1;else if("up"===a)b-=3;else if("right"===a)b+=1;else if("down"===a)b+=3;else if("pageup"===a||"pagedown"===a){var c=e.activeDate.getFullYear()+("pageup"===a?-1:1);e.activeDate.setFullYear(c)}else"home"===a?b=0:"end"===a&&(b=11);e.activeDate.setMonth(b)},e.refreshView()}}}]).directive("yearpicker",["dateFilter",function(){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/year.html",require:"^datepicker",link:function(a,b,c,d){function e(a){return parseInt((a-1)/f,10)*f+1}var f=d.yearRange;d.step={years:f},d.element=b,d._refreshView=function(){for(var b=new Array(f),c=0,g=e(d.activeDate.getFullYear());f>c;c++)b[c]=angular.extend(d.createDateObject(new Date(g+c,0,1),d.formatYear),{uid:a.uniqueId+"-"+c});a.title=[b[0].label,b[f-1].label].join(" - "),a.rows=d.split(b,5)},d.compare=function(a,b){return a.getFullYear()-b.getFullYear()},d.handleKeyDown=function(a){var b=d.activeDate.getFullYear();"left"===a?b-=1:"up"===a?b-=5:"right"===a?b+=1:"down"===a?b+=5:"pageup"===a||"pagedown"===a?b+=("pageup"===a?-1:1)*d.step.years:"home"===a?b=e(d.activeDate.getFullYear()):"end"===a&&(b=e(d.activeDate.getFullYear())+f-1),d.activeDate.setFullYear(b)},d.refreshView()}}}]).constant("datepickerPopupConfig",{datepickerPopup:"yyyy-MM-dd",currentText:"Today",clearText:"Clear",closeText:"Done",closeOnDateSelection:!0,appendToBody:!1,showButtonBar:!0}).directive("datepickerPopup",["$compile","$parse","$document","$position","dateFilter","dateParser","datepickerPopupConfig",function(a,b,c,d,e,f,g){return{restrict:"EA",require:"ngModel",scope:{isOpen:"=?",currentText:"@",clearText:"@",closeText:"@",dateDisabled:"&"},link:function(h,i,j,k){function l(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}function m(a){if(a){if(angular.isDate(a)&&!isNaN(a))return k.$setValidity("date",!0),a;if(angular.isString(a)){var b=f.parse(a,n)||new Date(a);return isNaN(b)?void k.$setValidity("date",!1):(k.$setValidity("date",!0),b)}return void k.$setValidity("date",!1)}return k.$setValidity("date",!0),null}var n,o=angular.isDefined(j.closeOnDateSelection)?h.$parent.$eval(j.closeOnDateSelection):g.closeOnDateSelection,p=angular.isDefined(j.datepickerAppendToBody)?h.$parent.$eval(j.datepickerAppendToBody):g.appendToBody;h.showButtonBar=angular.isDefined(j.showButtonBar)?h.$parent.$eval(j.showButtonBar):g.showButtonBar,h.getText=function(a){return h[a+"Text"]||g[a+"Text"]},j.$observe("datepickerPopup",function(a){n=a||g.datepickerPopup,k.$render()});var q=angular.element("<div datepicker-popup-wrap><div datepicker></div></div>");q.attr({"ng-model":"date","ng-change":"dateSelection()"});var r=angular.element(q.children()[0]);j.datepickerOptions&&angular.forEach(h.$parent.$eval(j.datepickerOptions),function(a,b){r.attr(l(b),a)}),h.watchData={},angular.forEach(["minDate","maxDate","datepickerMode"],function(a){if(j[a]){var c=b(j[a]);if(h.$parent.$watch(c,function(b){h.watchData[a]=b}),r.attr(l(a),"watchData."+a),"datepickerMode"===a){var d=c.assign;h.$watch("watchData."+a,function(a,b){a!==b&&d(h.$parent,a)})}}}),j.dateDisabled&&r.attr("date-disabled","dateDisabled({ date: date, mode: mode })"),k.$parsers.unshift(m),h.dateSelection=function(a){angular.isDefined(a)&&(h.date=a),k.$setViewValue(h.date),k.$render(),o&&(h.isOpen=!1,i[0].focus())},i.bind("input change keyup",function(){h.$apply(function(){h.date=k.$modelValue})}),k.$render=function(){var a=k.$viewValue?e(k.$viewValue,n):"";i.val(a),h.date=m(k.$modelValue)};var s=function(a){h.isOpen&&a.target!==i[0]&&h.$apply(function(){h.isOpen=!1})},t=function(a){h.keydown(a)};i.bind("keydown",t),h.keydown=function(a){27===a.which?(a.preventDefault(),a.stopPropagation(),h.close()):40!==a.which||h.isOpen||(h.isOpen=!0)},h.$watch("isOpen",function(a){a?(h.$broadcast("datepicker.focus"),h.position=p?d.offset(i):d.position(i),h.position.top=h.position.top+i.prop("offsetHeight"),c.bind("click",s)):c.unbind("click",s)}),h.select=function(a){if("today"===a){var b=new Date;angular.isDate(k.$modelValue)?(a=new Date(k.$modelValue),a.setFullYear(b.getFullYear(),b.getMonth(),b.getDate())):a=new Date(b.setHours(0,0,0,0))}h.dateSelection(a)},h.close=function(){h.isOpen=!1,i[0].focus()};var u=a(q)(h);q.remove(),p?c.find("body").append(u):i.after(u),h.$on("$destroy",function(){u.remove(),i.unbind("keydown",t),c.unbind("click",s)})}}}]).directive("datepickerPopupWrap",function(){return{restrict:"EA",replace:!0,transclude:!0,templateUrl:"template/datepicker/popup.html",link:function(a,b){b.bind("click",function(a){a.preventDefault(),a.stopPropagation()})}}}),angular.module("ui.bootstrap.dropdown",[]).constant("dropdownConfig",{openClass:"open"}).service("dropdownService",["$document",function(a){var b=null;this.open=function(e){b||(a.bind("click",c),a.bind("keydown",d)),b&&b!==e&&(b.isOpen=!1),b=e},this.close=function(e){b===e&&(b=null,a.unbind("click",c),a.unbind("keydown",d))};var c=function(a){if(b){var c=b.getToggleElement();a&&c&&c[0].contains(a.target)||b.$apply(function(){b.isOpen=!1})}},d=function(a){27===a.which&&(b.focusToggleElement(),c())}}]).controller("DropdownController",["$scope","$attrs","$parse","dropdownConfig","dropdownService","$animate",function(a,b,c,d,e,f){var g,h=this,i=a.$new(),j=d.openClass,k=angular.noop,l=b.onToggle?c(b.onToggle):angular.noop;this.init=function(d){h.$element=d,b.isOpen&&(g=c(b.isOpen),k=g.assign,a.$watch(g,function(a){i.isOpen=!!a}))},this.toggle=function(a){return i.isOpen=arguments.length?!!a:!i.isOpen},this.isOpen=function(){return i.isOpen},i.getToggleElement=function(){return h.toggleElement},i.focusToggleElement=function(){h.toggleElement&&h.toggleElement[0].focus()},i.$watch("isOpen",function(b,c){f[b?"addClass":"removeClass"](h.$element,j),b?(i.focusToggleElement(),e.open(i)):e.close(i),k(a,b),angular.isDefined(b)&&b!==c&&l(a,{open:!!b})}),a.$on("$locationChangeSuccess",function(){i.isOpen=!1}),a.$on("$destroy",function(){i.$destroy()})}]).directive("dropdown",function(){return{controller:"DropdownController",link:function(a,b,c,d){d.init(b)}}}).directive("dropdownToggle",function(){return{require:"?^dropdown",link:function(a,b,c,d){if(d){d.toggleElement=b;var e=function(e){e.preventDefault(),b.hasClass("disabled")||c.disabled||a.$apply(function(){d.toggle()})};b.bind("click",e),b.attr({"aria-haspopup":!0,"aria-expanded":!1}),a.$watch(d.isOpen,function(a){b.attr("aria-expanded",!!a)}),a.$on("$destroy",function(){b.unbind("click",e)})}}}}),angular.module("ui.bootstrap.modal",["ui.bootstrap.transition"]).factory("$$stackedMap",function(){return{createNew:function(){var a=[];return{add:function(b,c){a.push({key:b,value:c})},get:function(b){for(var c=0;c<a.length;c++)if(b==a[c].key)return a[c]},keys:function(){for(var b=[],c=0;c<a.length;c++)b.push(a[c].key);return b},top:function(){return a[a.length-1]},remove:function(b){for(var c=-1,d=0;d<a.length;d++)if(b==a[d].key){c=d;break}return a.splice(c,1)[0]},removeTop:function(){return a.splice(a.length-1,1)[0]},length:function(){return a.length}}}}}).directive("modalBackdrop",["$timeout",function(a){return{restrict:"EA",replace:!0,templateUrl:"template/modal/backdrop.html",link:function(b,c,d){b.backdropClass=d.backdropClass||"",b.animate=!1,a(function(){b.animate=!0})}}}]).directive("modalWindow",["$modalStack","$timeout",function(a,b){return{restrict:"EA",scope:{index:"@",animate:"="},replace:!0,transclude:!0,templateUrl:function(a,b){return b.templateUrl||"template/modal/window.html"},link:function(c,d,e){d.addClass(e.windowClass||""),c.size=e.size,b(function(){c.animate=!0,d[0].querySelectorAll("[autofocus]").length||d[0].focus()}),c.close=function(b){var c=a.getTop();c&&c.value.backdrop&&"static"!=c.value.backdrop&&b.target===b.currentTarget&&(b.preventDefault(),b.stopPropagation(),a.dismiss(c.key,"backdrop click"))}}}}]).directive("modalTransclude",function(){return{link:function(a,b,c,d,e){e(a.$parent,function(a){b.empty(),b.append(a)})}}}).factory("$modalStack",["$transition","$timeout","$document","$compile","$rootScope","$$stackedMap",function(a,b,c,d,e,f){function g(){for(var a=-1,b=n.keys(),c=0;c<b.length;c++)n.get(b[c]).value.backdrop&&(a=c);return a}function h(a){var b=c.find("body").eq(0),d=n.get(a).value;n.remove(a),j(d.modalDomEl,d.modalScope,300,function(){d.modalScope.$destroy(),b.toggleClass(m,n.length()>0),i()})}function i(){if(k&&-1==g()){var a=l;j(k,l,150,function(){a.$destroy(),a=null}),k=void 0,l=void 0}}function j(c,d,e,f){function g(){g.done||(g.done=!0,c.remove(),f&&f())}d.animate=!1;var h=a.transitionEndEventName;if(h){var i=b(g,e);c.bind(h,function(){b.cancel(i),g(),d.$apply()})}else b(g)}var k,l,m="modal-open",n=f.createNew(),o={};return e.$watch(g,function(a){l&&(l.index=a)}),c.bind("keydown",function(a){var b;27===a.which&&(b=n.top(),b&&b.value.keyboard&&(a.preventDefault(),e.$apply(function(){o.dismiss(b.key,"escape key press")})))}),o.open=function(a,b){n.add(a,{deferred:b.deferred,modalScope:b.scope,backdrop:b.backdrop,keyboard:b.keyboard});var f=c.find("body").eq(0),h=g();if(h>=0&&!k){l=e.$new(!0),l.index=h;var i=angular.element("<div modal-backdrop></div>");i.attr("backdrop-class",b.backdropClass),k=d(i)(l),f.append(k)}var j=angular.element("<div modal-window></div>");j.attr({"template-url":b.windowTemplateUrl,"window-class":b.windowClass,size:b.size,index:n.length()-1,animate:"animate"}).html(b.content);var o=d(j)(b.scope);n.top().value.modalDomEl=o,f.append(o),f.addClass(m)},o.close=function(a,b){var c=n.get(a);c&&(c.value.deferred.resolve(b),h(a))},o.dismiss=function(a,b){var c=n.get(a);c&&(c.value.deferred.reject(b),h(a))},o.dismissAll=function(a){for(var b=this.getTop();b;)this.dismiss(b.key,a),b=this.getTop()},o.getTop=function(){return n.top()},o}]).provider("$modal",function(){var a={options:{backdrop:!0,keyboard:!0},$get:["$injector","$rootScope","$q","$http","$templateCache","$controller","$modalStack",function(b,c,d,e,f,g,h){function i(a){return a.template?d.when(a.template):e.get(angular.isFunction(a.templateUrl)?a.templateUrl():a.templateUrl,{cache:f}).then(function(a){return a.data})}function j(a){var c=[];return angular.forEach(a,function(a){(angular.isFunction(a)||angular.isArray(a))&&c.push(d.when(b.invoke(a)))}),c}var k={};return k.open=function(b){var e=d.defer(),f=d.defer(),k={result:e.promise,opened:f.promise,close:function(a){h.close(k,a)},dismiss:function(a){h.dismiss(k,a)}};if(b=angular.extend({},a.options,b),b.resolve=b.resolve||{},!b.template&&!b.templateUrl)throw new Error("One of template or templateUrl options is required.");var l=d.all([i(b)].concat(j(b.resolve)));return l.then(function(a){var d=(b.scope||c).$new();d.$close=k.close,d.$dismiss=k.dismiss;var f,i={},j=1;b.controller&&(i.$scope=d,i.$modalInstance=k,angular.forEach(b.resolve,function(b,c){i[c]=a[j++]}),f=g(b.controller,i),b.controllerAs&&(d[b.controllerAs]=f)),h.open(k,{scope:d,deferred:e,content:a[0],backdrop:b.backdrop,keyboard:b.keyboard,backdropClass:b.backdropClass,windowClass:b.windowClass,windowTemplateUrl:b.windowTemplateUrl,size:b.size})},function(a){e.reject(a)}),l.then(function(){f.resolve(!0)},function(){f.reject(!1)}),k},k}]};return a}),angular.module("ui.bootstrap.pagination",[]).controller("PaginationController",["$scope","$attrs","$parse",function(a,b,c){var d=this,e={$setViewValue:angular.noop},f=b.numPages?c(b.numPages).assign:angular.noop;this.init=function(f,g){e=f,this.config=g,e.$render=function(){d.render()},b.itemsPerPage?a.$parent.$watch(c(b.itemsPerPage),function(b){d.itemsPerPage=parseInt(b,10),a.totalPages=d.calculateTotalPages()}):this.itemsPerPage=g.itemsPerPage},this.calculateTotalPages=function(){var b=this.itemsPerPage<1?1:Math.ceil(a.totalItems/this.itemsPerPage);return Math.max(b||0,1)},this.render=function(){a.page=parseInt(e.$viewValue,10)||1},a.selectPage=function(b){a.page!==b&&b>0&&b<=a.totalPages&&(e.$setViewValue(b),e.$render())},a.getText=function(b){return a[b+"Text"]||d.config[b+"Text"]},a.noPrevious=function(){return 1===a.page},a.noNext=function(){return a.page===a.totalPages},a.$watch("totalItems",function(){a.totalPages=d.calculateTotalPages()}),a.$watch("totalPages",function(b){f(a.$parent,b),a.page>b?a.selectPage(b):e.$render()})}]).constant("paginationConfig",{itemsPerPage:10,boundaryLinks:!1,directionLinks:!0,firstText:"First",previousText:"Previous",nextText:"Next",lastText:"Last",rotate:!0}).directive("pagination",["$parse","paginationConfig",function(a,b){return{restrict:"EA",scope:{totalItems:"=",firstText:"@",previousText:"@",nextText:"@",lastText:"@"},require:["pagination","?ngModel"],controller:"PaginationController",templateUrl:"template/pagination/pagination.html",replace:!0,link:function(c,d,e,f){function g(a,b,c){return{number:a,text:b,active:c}}function h(a,b){var c=[],d=1,e=b,f=angular.isDefined(k)&&b>k;f&&(l?(d=Math.max(a-Math.floor(k/2),1),e=d+k-1,e>b&&(e=b,d=e-k+1)):(d=(Math.ceil(a/k)-1)*k+1,e=Math.min(d+k-1,b)));for(var h=d;e>=h;h++){var i=g(h,h,h===a);c.push(i)}if(f&&!l){if(d>1){var j=g(d-1,"...",!1);c.unshift(j)}if(b>e){var m=g(e+1,"...",!1);c.push(m)}}return c}var i=f[0],j=f[1];if(j){var k=angular.isDefined(e.maxSize)?c.$parent.$eval(e.maxSize):b.maxSize,l=angular.isDefined(e.rotate)?c.$parent.$eval(e.rotate):b.rotate;c.boundaryLinks=angular.isDefined(e.boundaryLinks)?c.$parent.$eval(e.boundaryLinks):b.boundaryLinks,c.directionLinks=angular.isDefined(e.directionLinks)?c.$parent.$eval(e.directionLinks):b.directionLinks,i.init(j,b),e.maxSize&&c.$parent.$watch(a(e.maxSize),function(a){k=parseInt(a,10),i.render()});var m=i.render;i.render=function(){m(),c.page>0&&c.page<=c.totalPages&&(c.pages=h(c.page,c.totalPages))}}}}}]).constant("pagerConfig",{itemsPerPage:10,previousText:"« Previous",nextText:"Next »",align:!0}).directive("pager",["pagerConfig",function(a){return{restrict:"EA",scope:{totalItems:"=",previousText:"@",nextText:"@"},require:["pager","?ngModel"],controller:"PaginationController",templateUrl:"template/pagination/pager.html",replace:!0,link:function(b,c,d,e){var f=e[0],g=e[1];g&&(b.align=angular.isDefined(d.align)?b.$parent.$eval(d.align):a.align,f.init(g,a))}}}]),angular.module("ui.bootstrap.tooltip",["ui.bootstrap.position","ui.bootstrap.bindHtml"]).provider("$tooltip",function(){function a(a){var b=/[A-Z]/g,c="-";return a.replace(b,function(a,b){return(b?c:"")+a.toLowerCase()
	})}var b={placement:"top",animation:!0,popupDelay:0},c={mouseenter:"mouseleave",click:"click",focus:"blur"},d={};this.options=function(a){angular.extend(d,a)},this.setTriggers=function(a){angular.extend(c,a)},this.$get=["$window","$compile","$timeout","$document","$position","$interpolate",function(e,f,g,h,i,j){return function(e,k,l){function m(a){var b=a||n.trigger||l,d=c[b]||b;return{show:b,hide:d}}var n=angular.extend({},b,d),o=a(e),p=j.startSymbol(),q=j.endSymbol(),r="<div "+o+'-popup title="'+p+"title"+q+'" content="'+p+"content"+q+'" placement="'+p+"placement"+q+'" animation="animation" is-open="isOpen"></div>';return{restrict:"EA",compile:function(){var a=f(r);return function(b,c,d){function f(){D.isOpen?l():j()}function j(){(!C||b.$eval(d[k+"Enable"]))&&(s(),D.popupDelay?z||(z=g(o,D.popupDelay,!1),z.then(function(a){a()})):o()())}function l(){b.$apply(function(){p()})}function o(){return z=null,y&&(g.cancel(y),y=null),D.content?(q(),w.css({top:0,left:0,display:"block"}),D.$digest(),E(),D.isOpen=!0,D.$digest(),E):angular.noop}function p(){D.isOpen=!1,g.cancel(z),z=null,D.animation?y||(y=g(r,500)):r()}function q(){w&&r(),x=D.$new(),w=a(x,function(a){A?h.find("body").append(a):c.after(a)})}function r(){y=null,w&&(w.remove(),w=null),x&&(x.$destroy(),x=null)}function s(){t(),u()}function t(){var a=d[k+"Placement"];D.placement=angular.isDefined(a)?a:n.placement}function u(){var a=d[k+"PopupDelay"],b=parseInt(a,10);D.popupDelay=isNaN(b)?n.popupDelay:b}function v(){var a=d[k+"Trigger"];F(),B=m(a),B.show===B.hide?c.bind(B.show,f):(c.bind(B.show,j),c.bind(B.hide,l))}var w,x,y,z,A=angular.isDefined(n.appendToBody)?n.appendToBody:!1,B=m(void 0),C=angular.isDefined(d[k+"Enable"]),D=b.$new(!0),E=function(){var a=i.positionElements(c,w,D.placement,A);a.top+="px",a.left+="px",w.css(a)};D.isOpen=!1,d.$observe(e,function(a){D.content=a,!a&&D.isOpen&&p()}),d.$observe(k+"Title",function(a){D.title=a});var F=function(){c.unbind(B.show,j),c.unbind(B.hide,l)};v();var G=b.$eval(d[k+"Animation"]);D.animation=angular.isDefined(G)?!!G:n.animation;var H=b.$eval(d[k+"AppendToBody"]);A=angular.isDefined(H)?H:A,A&&b.$on("$locationChangeSuccess",function(){D.isOpen&&p()}),b.$on("$destroy",function(){g.cancel(y),g.cancel(z),F(),r(),D=null})}}}}}]}).directive("tooltipPopup",function(){return{restrict:"EA",replace:!0,scope:{content:"@",placement:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-popup.html"}}).directive("tooltip",["$tooltip",function(a){return a("tooltip","tooltip","mouseenter")}]).directive("tooltipHtmlUnsafePopup",function(){return{restrict:"EA",replace:!0,scope:{content:"@",placement:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-html-unsafe-popup.html"}}).directive("tooltipHtmlUnsafe",["$tooltip",function(a){return a("tooltipHtmlUnsafe","tooltip","mouseenter")}]),angular.module("ui.bootstrap.popover",["ui.bootstrap.tooltip"]).directive("popoverPopup",function(){return{restrict:"EA",replace:!0,scope:{title:"@",content:"@",placement:"@",animation:"&",isOpen:"&"},templateUrl:"template/popover/popover.html"}}).directive("popover",["$tooltip",function(a){return a("popover","popover","click")}]),angular.module("ui.bootstrap.progressbar",[]).constant("progressConfig",{animate:!0,max:100}).controller("ProgressController",["$scope","$attrs","progressConfig",function(a,b,c){var d=this,e=angular.isDefined(b.animate)?a.$parent.$eval(b.animate):c.animate;this.bars=[],a.max=angular.isDefined(b.max)?a.$parent.$eval(b.max):c.max,this.addBar=function(b,c){e||c.css({transition:"none"}),this.bars.push(b),b.$watch("value",function(c){b.percent=+(100*c/a.max).toFixed(2)}),b.$on("$destroy",function(){c=null,d.removeBar(b)})},this.removeBar=function(a){this.bars.splice(this.bars.indexOf(a),1)}}]).directive("progress",function(){return{restrict:"EA",replace:!0,transclude:!0,controller:"ProgressController",require:"progress",scope:{},templateUrl:"template/progressbar/progress.html"}}).directive("bar",function(){return{restrict:"EA",replace:!0,transclude:!0,require:"^progress",scope:{value:"=",type:"@"},templateUrl:"template/progressbar/bar.html",link:function(a,b,c,d){d.addBar(a,b)}}}).directive("progressbar",function(){return{restrict:"EA",replace:!0,transclude:!0,controller:"ProgressController",scope:{value:"=",type:"@"},templateUrl:"template/progressbar/progressbar.html",link:function(a,b,c,d){d.addBar(a,angular.element(b.children()[0]))}}}),angular.module("ui.bootstrap.rating",[]).constant("ratingConfig",{max:5,stateOn:null,stateOff:null}).controller("RatingController",["$scope","$attrs","ratingConfig",function(a,b,c){var d={$setViewValue:angular.noop};this.init=function(e){d=e,d.$render=this.render,this.stateOn=angular.isDefined(b.stateOn)?a.$parent.$eval(b.stateOn):c.stateOn,this.stateOff=angular.isDefined(b.stateOff)?a.$parent.$eval(b.stateOff):c.stateOff;var f=angular.isDefined(b.ratingStates)?a.$parent.$eval(b.ratingStates):new Array(angular.isDefined(b.max)?a.$parent.$eval(b.max):c.max);a.range=this.buildTemplateObjects(f)},this.buildTemplateObjects=function(a){for(var b=0,c=a.length;c>b;b++)a[b]=angular.extend({index:b},{stateOn:this.stateOn,stateOff:this.stateOff},a[b]);return a},a.rate=function(b){!a.readonly&&b>=0&&b<=a.range.length&&(d.$setViewValue(b),d.$render())},a.enter=function(b){a.readonly||(a.value=b),a.onHover({value:b})},a.reset=function(){a.value=d.$viewValue,a.onLeave()},a.onKeydown=function(b){/(37|38|39|40)/.test(b.which)&&(b.preventDefault(),b.stopPropagation(),a.rate(a.value+(38===b.which||39===b.which?1:-1)))},this.render=function(){a.value=d.$viewValue}}]).directive("rating",function(){return{restrict:"EA",require:["rating","ngModel"],scope:{readonly:"=?",onHover:"&",onLeave:"&"},controller:"RatingController",templateUrl:"template/rating/rating.html",replace:!0,link:function(a,b,c,d){var e=d[0],f=d[1];f&&e.init(f)}}}),angular.module("ui.bootstrap.tabs",[]).controller("TabsetController",["$scope",function(a){var b=this,c=b.tabs=a.tabs=[];b.select=function(a){angular.forEach(c,function(b){b.active&&b!==a&&(b.active=!1,b.onDeselect())}),a.active=!0,a.onSelect()},b.addTab=function(a){c.push(a),1===c.length?a.active=!0:a.active&&b.select(a)},b.removeTab=function(a){var e=c.indexOf(a);if(a.active&&c.length>1&&!d){var f=e==c.length-1?e-1:e+1;b.select(c[f])}c.splice(e,1)};var d;a.$on("$destroy",function(){d=!0})}]).directive("tabset",function(){return{restrict:"EA",transclude:!0,replace:!0,scope:{type:"@"},controller:"TabsetController",templateUrl:"template/tabs/tabset.html",link:function(a,b,c){a.vertical=angular.isDefined(c.vertical)?a.$parent.$eval(c.vertical):!1,a.justified=angular.isDefined(c.justified)?a.$parent.$eval(c.justified):!1}}}).directive("tab",["$parse",function(a){return{require:"^tabset",restrict:"EA",replace:!0,templateUrl:"template/tabs/tab.html",transclude:!0,scope:{active:"=?",heading:"@",onSelect:"&select",onDeselect:"&deselect"},controller:function(){},compile:function(b,c,d){return function(b,c,e,f){b.$watch("active",function(a){a&&f.select(b)}),b.disabled=!1,e.disabled&&b.$parent.$watch(a(e.disabled),function(a){b.disabled=!!a}),b.select=function(){b.disabled||(b.active=!0)},f.addTab(b),b.$on("$destroy",function(){f.removeTab(b)}),b.$transcludeFn=d}}}}]).directive("tabHeadingTransclude",[function(){return{restrict:"A",require:"^tab",link:function(a,b){a.$watch("headingElement",function(a){a&&(b.html(""),b.append(a))})}}}]).directive("tabContentTransclude",function(){function a(a){return a.tagName&&(a.hasAttribute("tab-heading")||a.hasAttribute("data-tab-heading")||"tab-heading"===a.tagName.toLowerCase()||"data-tab-heading"===a.tagName.toLowerCase())}return{restrict:"A",require:"^tabset",link:function(b,c,d){var e=b.$eval(d.tabContentTransclude);e.$transcludeFn(e.$parent,function(b){angular.forEach(b,function(b){a(b)?e.headingElement=b:c.append(b)})})}}}),angular.module("ui.bootstrap.timepicker",[]).constant("timepickerConfig",{hourStep:1,minuteStep:1,showMeridian:!0,meridians:null,readonlyInput:!1,mousewheel:!0}).controller("TimepickerController",["$scope","$attrs","$parse","$log","$locale","timepickerConfig",function(a,b,c,d,e,f){function g(){var b=parseInt(a.hours,10),c=a.showMeridian?b>0&&13>b:b>=0&&24>b;return c?(a.showMeridian&&(12===b&&(b=0),a.meridian===p[1]&&(b+=12)),b):void 0}function h(){var b=parseInt(a.minutes,10);return b>=0&&60>b?b:void 0}function i(a){return angular.isDefined(a)&&a.toString().length<2?"0"+a:a}function j(a){k(),o.$setViewValue(new Date(n)),l(a)}function k(){o.$setValidity("time",!0),a.invalidHours=!1,a.invalidMinutes=!1}function l(b){var c=n.getHours(),d=n.getMinutes();a.showMeridian&&(c=0===c||12===c?12:c%12),a.hours="h"===b?c:i(c),a.minutes="m"===b?d:i(d),a.meridian=n.getHours()<12?p[0]:p[1]}function m(a){var b=new Date(n.getTime()+6e4*a);n.setHours(b.getHours(),b.getMinutes()),j()}var n=new Date,o={$setViewValue:angular.noop},p=angular.isDefined(b.meridians)?a.$parent.$eval(b.meridians):f.meridians||e.DATETIME_FORMATS.AMPMS;this.init=function(c,d){o=c,o.$render=this.render;var e=d.eq(0),g=d.eq(1),h=angular.isDefined(b.mousewheel)?a.$parent.$eval(b.mousewheel):f.mousewheel;h&&this.setupMousewheelEvents(e,g),a.readonlyInput=angular.isDefined(b.readonlyInput)?a.$parent.$eval(b.readonlyInput):f.readonlyInput,this.setupInputEvents(e,g)};var q=f.hourStep;b.hourStep&&a.$parent.$watch(c(b.hourStep),function(a){q=parseInt(a,10)});var r=f.minuteStep;b.minuteStep&&a.$parent.$watch(c(b.minuteStep),function(a){r=parseInt(a,10)}),a.showMeridian=f.showMeridian,b.showMeridian&&a.$parent.$watch(c(b.showMeridian),function(b){if(a.showMeridian=!!b,o.$error.time){var c=g(),d=h();angular.isDefined(c)&&angular.isDefined(d)&&(n.setHours(c),j())}else l()}),this.setupMousewheelEvents=function(b,c){var d=function(a){a.originalEvent&&(a=a.originalEvent);var b=a.wheelDelta?a.wheelDelta:-a.deltaY;return a.detail||b>0};b.bind("mousewheel wheel",function(b){a.$apply(d(b)?a.incrementHours():a.decrementHours()),b.preventDefault()}),c.bind("mousewheel wheel",function(b){a.$apply(d(b)?a.incrementMinutes():a.decrementMinutes()),b.preventDefault()})},this.setupInputEvents=function(b,c){if(a.readonlyInput)return a.updateHours=angular.noop,void(a.updateMinutes=angular.noop);var d=function(b,c){o.$setViewValue(null),o.$setValidity("time",!1),angular.isDefined(b)&&(a.invalidHours=b),angular.isDefined(c)&&(a.invalidMinutes=c)};a.updateHours=function(){var a=g();angular.isDefined(a)?(n.setHours(a),j("h")):d(!0)},b.bind("blur",function(){!a.invalidHours&&a.hours<10&&a.$apply(function(){a.hours=i(a.hours)})}),a.updateMinutes=function(){var a=h();angular.isDefined(a)?(n.setMinutes(a),j("m")):d(void 0,!0)},c.bind("blur",function(){!a.invalidMinutes&&a.minutes<10&&a.$apply(function(){a.minutes=i(a.minutes)})})},this.render=function(){var a=o.$modelValue?new Date(o.$modelValue):null;isNaN(a)?(o.$setValidity("time",!1),d.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')):(a&&(n=a),k(),l())},a.incrementHours=function(){m(60*q)},a.decrementHours=function(){m(60*-q)},a.incrementMinutes=function(){m(r)},a.decrementMinutes=function(){m(-r)},a.toggleMeridian=function(){m(720*(n.getHours()<12?1:-1))}}]).directive("timepicker",function(){return{restrict:"EA",require:["timepicker","?^ngModel"],controller:"TimepickerController",replace:!0,scope:{},templateUrl:"template/timepicker/timepicker.html",link:function(a,b,c,d){var e=d[0],f=d[1];f&&e.init(f,b.find("input"))}}}),angular.module("ui.bootstrap.typeahead",["ui.bootstrap.position","ui.bootstrap.bindHtml"]).factory("typeaheadParser",["$parse",function(a){var b=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;return{parse:function(c){var d=c.match(b);if(!d)throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "'+c+'".');return{itemName:d[3],source:a(d[4]),viewMapper:a(d[2]||d[1]),modelMapper:a(d[1])}}}}]).directive("typeahead",["$compile","$parse","$q","$timeout","$document","$position","typeaheadParser",function(a,b,c,d,e,f,g){var h=[9,13,27,38,40];return{require:"ngModel",link:function(i,j,k,l){var m,n=i.$eval(k.typeaheadMinLength)||1,o=i.$eval(k.typeaheadWaitMs)||0,p=i.$eval(k.typeaheadEditable)!==!1,q=b(k.typeaheadLoading).assign||angular.noop,r=b(k.typeaheadOnSelect),s=k.typeaheadInputFormatter?b(k.typeaheadInputFormatter):void 0,t=k.typeaheadAppendToBody?i.$eval(k.typeaheadAppendToBody):!1,u=i.$eval(k.typeaheadFocusFirst)!==!1,v=b(k.ngModel).assign,w=g.parse(k.typeahead),x=i.$new();i.$on("$destroy",function(){x.$destroy()});var y="typeahead-"+x.$id+"-"+Math.floor(1e4*Math.random());j.attr({"aria-autocomplete":"list","aria-expanded":!1,"aria-owns":y});var z=angular.element("<div typeahead-popup></div>");z.attr({id:y,matches:"matches",active:"activeIdx",select:"select(activeIdx)",query:"query",position:"position"}),angular.isDefined(k.typeaheadTemplateUrl)&&z.attr("template-url",k.typeaheadTemplateUrl);var A=function(){x.matches=[],x.activeIdx=-1,j.attr("aria-expanded",!1)},B=function(a){return y+"-option-"+a};x.$watch("activeIdx",function(a){0>a?j.removeAttr("aria-activedescendant"):j.attr("aria-activedescendant",B(a))});var C=function(a){var b={$viewValue:a};q(i,!0),c.when(w.source(i,b)).then(function(c){var d=a===l.$viewValue;if(d&&m)if(c.length>0){x.activeIdx=u?0:-1,x.matches.length=0;for(var e=0;e<c.length;e++)b[w.itemName]=c[e],x.matches.push({id:B(e),label:w.viewMapper(x,b),model:c[e]});x.query=a,x.position=t?f.offset(j):f.position(j),x.position.top=x.position.top+j.prop("offsetHeight"),j.attr("aria-expanded",!0)}else A();d&&q(i,!1)},function(){A(),q(i,!1)})};A(),x.query=void 0;var D,E=function(a){D=d(function(){C(a)},o)},F=function(){D&&d.cancel(D)};l.$parsers.unshift(function(a){return m=!0,a&&a.length>=n?o>0?(F(),E(a)):C(a):(q(i,!1),F(),A()),p?a:a?void l.$setValidity("editable",!1):(l.$setValidity("editable",!0),a)}),l.$formatters.push(function(a){var b,c,d={};return s?(d.$model=a,s(i,d)):(d[w.itemName]=a,b=w.viewMapper(i,d),d[w.itemName]=void 0,c=w.viewMapper(i,d),b!==c?b:a)}),x.select=function(a){var b,c,e={};e[w.itemName]=c=x.matches[a].model,b=w.modelMapper(i,e),v(i,b),l.$setValidity("editable",!0),r(i,{$item:c,$model:b,$label:w.viewMapper(i,e)}),A(),d(function(){j[0].focus()},0,!1)},j.bind("keydown",function(a){0!==x.matches.length&&-1!==h.indexOf(a.which)&&(-1!=x.activeIdx||13!==a.which&&9!==a.which)&&(a.preventDefault(),40===a.which?(x.activeIdx=(x.activeIdx+1)%x.matches.length,x.$digest()):38===a.which?(x.activeIdx=(x.activeIdx>0?x.activeIdx:x.matches.length)-1,x.$digest()):13===a.which||9===a.which?x.$apply(function(){x.select(x.activeIdx)}):27===a.which&&(a.stopPropagation(),A(),x.$digest()))}),j.bind("blur",function(){m=!1});var G=function(a){j[0]!==a.target&&(A(),x.$digest())};e.bind("click",G),i.$on("$destroy",function(){e.unbind("click",G),t&&H.remove()});var H=a(z)(x);t?e.find("body").append(H):j.after(H)}}}]).directive("typeaheadPopup",function(){return{restrict:"EA",scope:{matches:"=",query:"=",active:"=",position:"=",select:"&"},replace:!0,templateUrl:"template/typeahead/typeahead-popup.html",link:function(a,b,c){a.templateUrl=c.templateUrl,a.isOpen=function(){return a.matches.length>0},a.isActive=function(b){return a.active==b},a.selectActive=function(b){a.active=b},a.selectMatch=function(b){a.select({activeIdx:b})}}}}).directive("typeaheadMatch",["$http","$templateCache","$compile","$parse",function(a,b,c,d){return{restrict:"EA",scope:{index:"=",match:"=",query:"="},link:function(e,f,g){var h=d(g.templateUrl)(e.$parent)||"template/typeahead/typeahead-match.html";a.get(h,{cache:b}).success(function(a){f.replaceWith(c(a.trim())(e))})}}}]).filter("typeaheadHighlight",function(){function a(a){return a.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}return function(b,c){return c?(""+b).replace(new RegExp(a(c),"gi"),"<strong>$&</strong>"):b}});

	/*** EXPORTS FROM exports-loader ***/
	module.exports = angular;

/***/ },
/* 74 */
/***/ function(module, exports) {

	/*
	 * angular-ui-bootstrap
	 * http://angular-ui.github.io/bootstrap/

	 * Version: 0.12.1 - 2015-02-20
	 * License: MIT
	 */
	angular.module("ui.bootstrap",["ui.bootstrap.tpls","ui.bootstrap.transition","ui.bootstrap.collapse","ui.bootstrap.accordion","ui.bootstrap.alert","ui.bootstrap.bindHtml","ui.bootstrap.buttons","ui.bootstrap.carousel","ui.bootstrap.dateparser","ui.bootstrap.position","ui.bootstrap.datepicker","ui.bootstrap.dropdown","ui.bootstrap.modal","ui.bootstrap.pagination","ui.bootstrap.tooltip","ui.bootstrap.popover","ui.bootstrap.progressbar","ui.bootstrap.rating","ui.bootstrap.tabs","ui.bootstrap.timepicker","ui.bootstrap.typeahead"]),angular.module("ui.bootstrap.tpls",["template/accordion/accordion-group.html","template/accordion/accordion.html","template/alert/alert.html","template/carousel/carousel.html","template/carousel/slide.html","template/datepicker/datepicker.html","template/datepicker/day.html","template/datepicker/month.html","template/datepicker/popup.html","template/datepicker/year.html","template/modal/backdrop.html","template/modal/window.html","template/pagination/pager.html","template/pagination/pagination.html","template/tooltip/tooltip-html-unsafe-popup.html","template/tooltip/tooltip-popup.html","template/popover/popover.html","template/progressbar/bar.html","template/progressbar/progress.html","template/progressbar/progressbar.html","template/rating/rating.html","template/tabs/tab.html","template/tabs/tabset.html","template/timepicker/timepicker.html","template/typeahead/typeahead-match.html","template/typeahead/typeahead-popup.html"]),angular.module("ui.bootstrap.transition",[]).factory("$transition",["$q","$timeout","$rootScope",function(a,b,c){function d(a){for(var b in a)if(void 0!==f.style[b])return a[b]}var e=function(d,f,g){g=g||{};var h=a.defer(),i=e[g.animation?"animationEndEventName":"transitionEndEventName"],j=function(){c.$apply(function(){d.unbind(i,j),h.resolve(d)})};return i&&d.bind(i,j),b(function(){angular.isString(f)?d.addClass(f):angular.isFunction(f)?f(d):angular.isObject(f)&&d.css(f),i||h.resolve(d)}),h.promise.cancel=function(){i&&d.unbind(i,j),h.reject("Transition cancelled")},h.promise},f=document.createElement("trans"),g={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"},h={WebkitTransition:"webkitAnimationEnd",MozTransition:"animationend",OTransition:"oAnimationEnd",transition:"animationend"};return e.transitionEndEventName=d(g),e.animationEndEventName=d(h),e}]),angular.module("ui.bootstrap.collapse",["ui.bootstrap.transition"]).directive("collapse",["$transition",function(a){return{link:function(b,c,d){function e(b){function d(){j===e&&(j=void 0)}var e=a(c,b);return j&&j.cancel(),j=e,e.then(d,d),e}function f(){k?(k=!1,g()):(c.removeClass("collapse").addClass("collapsing"),e({height:c[0].scrollHeight+"px"}).then(g))}function g(){c.removeClass("collapsing"),c.addClass("collapse in"),c.css({height:"auto"})}function h(){if(k)k=!1,i(),c.css({height:0});else{c.css({height:c[0].scrollHeight+"px"});{c[0].offsetWidth}c.removeClass("collapse in").addClass("collapsing"),e({height:0}).then(i)}}function i(){c.removeClass("collapsing"),c.addClass("collapse")}var j,k=!0;b.$watch(d.collapse,function(a){a?h():f()})}}}]),angular.module("ui.bootstrap.accordion",["ui.bootstrap.collapse"]).constant("accordionConfig",{closeOthers:!0}).controller("AccordionController",["$scope","$attrs","accordionConfig",function(a,b,c){this.groups=[],this.closeOthers=function(d){var e=angular.isDefined(b.closeOthers)?a.$eval(b.closeOthers):c.closeOthers;e&&angular.forEach(this.groups,function(a){a!==d&&(a.isOpen=!1)})},this.addGroup=function(a){var b=this;this.groups.push(a),a.$on("$destroy",function(){b.removeGroup(a)})},this.removeGroup=function(a){var b=this.groups.indexOf(a);-1!==b&&this.groups.splice(b,1)}}]).directive("accordion",function(){return{restrict:"EA",controller:"AccordionController",transclude:!0,replace:!1,templateUrl:"template/accordion/accordion.html"}}).directive("accordionGroup",function(){return{require:"^accordion",restrict:"EA",transclude:!0,replace:!0,templateUrl:"template/accordion/accordion-group.html",scope:{heading:"@",isOpen:"=?",isDisabled:"=?"},controller:function(){this.setHeading=function(a){this.heading=a}},link:function(a,b,c,d){d.addGroup(a),a.$watch("isOpen",function(b){b&&d.closeOthers(a)}),a.toggleOpen=function(){a.isDisabled||(a.isOpen=!a.isOpen)}}}}).directive("accordionHeading",function(){return{restrict:"EA",transclude:!0,template:"",replace:!0,require:"^accordionGroup",link:function(a,b,c,d,e){d.setHeading(e(a,function(){}))}}}).directive("accordionTransclude",function(){return{require:"^accordionGroup",link:function(a,b,c,d){a.$watch(function(){return d[c.accordionTransclude]},function(a){a&&(b.html(""),b.append(a))})}}}),angular.module("ui.bootstrap.alert",[]).controller("AlertController",["$scope","$attrs",function(a,b){a.closeable="close"in b,this.close=a.close}]).directive("alert",function(){return{restrict:"EA",controller:"AlertController",templateUrl:"template/alert/alert.html",transclude:!0,replace:!0,scope:{type:"@",close:"&"}}}).directive("dismissOnTimeout",["$timeout",function(a){return{require:"alert",link:function(b,c,d,e){a(function(){e.close()},parseInt(d.dismissOnTimeout,10))}}}]),angular.module("ui.bootstrap.bindHtml",[]).directive("bindHtmlUnsafe",function(){return function(a,b,c){b.addClass("ng-binding").data("$binding",c.bindHtmlUnsafe),a.$watch(c.bindHtmlUnsafe,function(a){b.html(a||"")})}}),angular.module("ui.bootstrap.buttons",[]).constant("buttonConfig",{activeClass:"active",toggleEvent:"click"}).controller("ButtonsController",["buttonConfig",function(a){this.activeClass=a.activeClass||"active",this.toggleEvent=a.toggleEvent||"click"}]).directive("btnRadio",function(){return{require:["btnRadio","ngModel"],controller:"ButtonsController",link:function(a,b,c,d){var e=d[0],f=d[1];f.$render=function(){b.toggleClass(e.activeClass,angular.equals(f.$modelValue,a.$eval(c.btnRadio)))},b.bind(e.toggleEvent,function(){var d=b.hasClass(e.activeClass);(!d||angular.isDefined(c.uncheckable))&&a.$apply(function(){f.$setViewValue(d?null:a.$eval(c.btnRadio)),f.$render()})})}}}).directive("btnCheckbox",function(){return{require:["btnCheckbox","ngModel"],controller:"ButtonsController",link:function(a,b,c,d){function e(){return g(c.btnCheckboxTrue,!0)}function f(){return g(c.btnCheckboxFalse,!1)}function g(b,c){var d=a.$eval(b);return angular.isDefined(d)?d:c}var h=d[0],i=d[1];i.$render=function(){b.toggleClass(h.activeClass,angular.equals(i.$modelValue,e()))},b.bind(h.toggleEvent,function(){a.$apply(function(){i.$setViewValue(b.hasClass(h.activeClass)?f():e()),i.$render()})})}}}),angular.module("ui.bootstrap.carousel",["ui.bootstrap.transition"]).controller("CarouselController",["$scope","$timeout","$interval","$transition",function(a,b,c,d){function e(){f();var b=+a.interval;!isNaN(b)&&b>0&&(h=c(g,b))}function f(){h&&(c.cancel(h),h=null)}function g(){var b=+a.interval;i&&!isNaN(b)&&b>0?a.next():a.pause()}var h,i,j=this,k=j.slides=a.slides=[],l=-1;j.currentSlide=null;var m=!1;j.select=a.select=function(c,f){function g(){if(!m){if(j.currentSlide&&angular.isString(f)&&!a.noTransition&&c.$element){c.$element.addClass(f);{c.$element[0].offsetWidth}angular.forEach(k,function(a){angular.extend(a,{direction:"",entering:!1,leaving:!1,active:!1})}),angular.extend(c,{direction:f,active:!0,entering:!0}),angular.extend(j.currentSlide||{},{direction:f,leaving:!0}),a.$currentTransition=d(c.$element,{}),function(b,c){a.$currentTransition.then(function(){h(b,c)},function(){h(b,c)})}(c,j.currentSlide)}else h(c,j.currentSlide);j.currentSlide=c,l=i,e()}}function h(b,c){angular.extend(b,{direction:"",active:!0,leaving:!1,entering:!1}),angular.extend(c||{},{direction:"",active:!1,leaving:!1,entering:!1}),a.$currentTransition=null}var i=k.indexOf(c);void 0===f&&(f=i>l?"next":"prev"),c&&c!==j.currentSlide&&(a.$currentTransition?(a.$currentTransition.cancel(),b(g)):g())},a.$on("$destroy",function(){m=!0}),j.indexOfSlide=function(a){return k.indexOf(a)},a.next=function(){var b=(l+1)%k.length;return a.$currentTransition?void 0:j.select(k[b],"next")},a.prev=function(){var b=0>l-1?k.length-1:l-1;return a.$currentTransition?void 0:j.select(k[b],"prev")},a.isActive=function(a){return j.currentSlide===a},a.$watch("interval",e),a.$on("$destroy",f),a.play=function(){i||(i=!0,e())},a.pause=function(){a.noPause||(i=!1,f())},j.addSlide=function(b,c){b.$element=c,k.push(b),1===k.length||b.active?(j.select(k[k.length-1]),1==k.length&&a.play()):b.active=!1},j.removeSlide=function(a){var b=k.indexOf(a);k.splice(b,1),k.length>0&&a.active?j.select(b>=k.length?k[b-1]:k[b]):l>b&&l--}}]).directive("carousel",[function(){return{restrict:"EA",transclude:!0,replace:!0,controller:"CarouselController",require:"carousel",templateUrl:"template/carousel/carousel.html",scope:{interval:"=",noTransition:"=",noPause:"="}}}]).directive("slide",function(){return{require:"^carousel",restrict:"EA",transclude:!0,replace:!0,templateUrl:"template/carousel/slide.html",scope:{active:"=?"},link:function(a,b,c,d){d.addSlide(a,b),a.$on("$destroy",function(){d.removeSlide(a)}),a.$watch("active",function(b){b&&d.select(a)})}}}),angular.module("ui.bootstrap.dateparser",[]).service("dateParser",["$locale","orderByFilter",function(a,b){function c(a){var c=[],d=a.split("");return angular.forEach(e,function(b,e){var f=a.indexOf(e);if(f>-1){a=a.split(""),d[f]="("+b.regex+")",a[f]="$";for(var g=f+1,h=f+e.length;h>g;g++)d[g]="",a[g]="$";a=a.join(""),c.push({index:f,apply:b.apply})}}),{regex:new RegExp("^"+d.join("")+"$"),map:b(c,"index")}}function d(a,b,c){return 1===b&&c>28?29===c&&(a%4===0&&a%100!==0||a%400===0):3===b||5===b||8===b||10===b?31>c:!0}this.parsers={};var e={yyyy:{regex:"\\d{4}",apply:function(a){this.year=+a}},yy:{regex:"\\d{2}",apply:function(a){this.year=+a+2e3}},y:{regex:"\\d{1,4}",apply:function(a){this.year=+a}},MMMM:{regex:a.DATETIME_FORMATS.MONTH.join("|"),apply:function(b){this.month=a.DATETIME_FORMATS.MONTH.indexOf(b)}},MMM:{regex:a.DATETIME_FORMATS.SHORTMONTH.join("|"),apply:function(b){this.month=a.DATETIME_FORMATS.SHORTMONTH.indexOf(b)}},MM:{regex:"0[1-9]|1[0-2]",apply:function(a){this.month=a-1}},M:{regex:"[1-9]|1[0-2]",apply:function(a){this.month=a-1}},dd:{regex:"[0-2][0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a}},d:{regex:"[1-2]?[0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a}},EEEE:{regex:a.DATETIME_FORMATS.DAY.join("|")},EEE:{regex:a.DATETIME_FORMATS.SHORTDAY.join("|")}};this.parse=function(b,e){if(!angular.isString(b)||!e)return b;e=a.DATETIME_FORMATS[e]||e,this.parsers[e]||(this.parsers[e]=c(e));var f=this.parsers[e],g=f.regex,h=f.map,i=b.match(g);if(i&&i.length){for(var j,k={year:1900,month:0,date:1,hours:0},l=1,m=i.length;m>l;l++){var n=h[l-1];n.apply&&n.apply.call(k,i[l])}return d(k.year,k.month,k.date)&&(j=new Date(k.year,k.month,k.date,k.hours)),j}}}]),angular.module("ui.bootstrap.position",[]).factory("$position",["$document","$window",function(a,b){function c(a,c){return a.currentStyle?a.currentStyle[c]:b.getComputedStyle?b.getComputedStyle(a)[c]:a.style[c]}function d(a){return"static"===(c(a,"position")||"static")}var e=function(b){for(var c=a[0],e=b.offsetParent||c;e&&e!==c&&d(e);)e=e.offsetParent;return e||c};return{position:function(b){var c=this.offset(b),d={top:0,left:0},f=e(b[0]);f!=a[0]&&(d=this.offset(angular.element(f)),d.top+=f.clientTop-f.scrollTop,d.left+=f.clientLeft-f.scrollLeft);var g=b[0].getBoundingClientRect();return{width:g.width||b.prop("offsetWidth"),height:g.height||b.prop("offsetHeight"),top:c.top-d.top,left:c.left-d.left}},offset:function(c){var d=c[0].getBoundingClientRect();return{width:d.width||c.prop("offsetWidth"),height:d.height||c.prop("offsetHeight"),top:d.top+(b.pageYOffset||a[0].documentElement.scrollTop),left:d.left+(b.pageXOffset||a[0].documentElement.scrollLeft)}},positionElements:function(a,b,c,d){var e,f,g,h,i=c.split("-"),j=i[0],k=i[1]||"center";e=d?this.offset(a):this.position(a),f=b.prop("offsetWidth"),g=b.prop("offsetHeight");var l={center:function(){return e.left+e.width/2-f/2},left:function(){return e.left},right:function(){return e.left+e.width}},m={center:function(){return e.top+e.height/2-g/2},top:function(){return e.top},bottom:function(){return e.top+e.height}};switch(j){case"right":h={top:m[k](),left:l[j]()};break;case"left":h={top:m[k](),left:e.left-f};break;case"bottom":h={top:m[j](),left:l[k]()};break;default:h={top:e.top-g,left:l[k]()}}return h}}}]),angular.module("ui.bootstrap.datepicker",["ui.bootstrap.dateparser","ui.bootstrap.position"]).constant("datepickerConfig",{formatDay:"dd",formatMonth:"MMMM",formatYear:"yyyy",formatDayHeader:"EEE",formatDayTitle:"MMMM yyyy",formatMonthTitle:"yyyy",datepickerMode:"day",minMode:"day",maxMode:"year",showWeeks:!0,startingDay:0,yearRange:20,minDate:null,maxDate:null}).controller("DatepickerController",["$scope","$attrs","$parse","$interpolate","$timeout","$log","dateFilter","datepickerConfig",function(a,b,c,d,e,f,g,h){var i=this,j={$setViewValue:angular.noop};this.modes=["day","month","year"],angular.forEach(["formatDay","formatMonth","formatYear","formatDayHeader","formatDayTitle","formatMonthTitle","minMode","maxMode","showWeeks","startingDay","yearRange"],function(c,e){i[c]=angular.isDefined(b[c])?8>e?d(b[c])(a.$parent):a.$parent.$eval(b[c]):h[c]}),angular.forEach(["minDate","maxDate"],function(d){b[d]?a.$parent.$watch(c(b[d]),function(a){i[d]=a?new Date(a):null,i.refreshView()}):i[d]=h[d]?new Date(h[d]):null}),a.datepickerMode=a.datepickerMode||h.datepickerMode,a.uniqueId="datepicker-"+a.$id+"-"+Math.floor(1e4*Math.random()),this.activeDate=angular.isDefined(b.initDate)?a.$parent.$eval(b.initDate):new Date,a.isActive=function(b){return 0===i.compare(b.date,i.activeDate)?(a.activeDateId=b.uid,!0):!1},this.init=function(a){j=a,j.$render=function(){i.render()}},this.render=function(){if(j.$modelValue){var a=new Date(j.$modelValue),b=!isNaN(a);b?this.activeDate=a:f.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.'),j.$setValidity("date",b)}this.refreshView()},this.refreshView=function(){if(this.element){this._refreshView();var a=j.$modelValue?new Date(j.$modelValue):null;j.$setValidity("date-disabled",!a||this.element&&!this.isDisabled(a))}},this.createDateObject=function(a,b){var c=j.$modelValue?new Date(j.$modelValue):null;return{date:a,label:g(a,b),selected:c&&0===this.compare(a,c),disabled:this.isDisabled(a),current:0===this.compare(a,new Date)}},this.isDisabled=function(c){return this.minDate&&this.compare(c,this.minDate)<0||this.maxDate&&this.compare(c,this.maxDate)>0||b.dateDisabled&&a.dateDisabled({date:c,mode:a.datepickerMode})},this.split=function(a,b){for(var c=[];a.length>0;)c.push(a.splice(0,b));return c},a.select=function(b){if(a.datepickerMode===i.minMode){var c=j.$modelValue?new Date(j.$modelValue):new Date(0,0,0,0,0,0,0);c.setFullYear(b.getFullYear(),b.getMonth(),b.getDate()),j.$setViewValue(c),j.$render()}else i.activeDate=b,a.datepickerMode=i.modes[i.modes.indexOf(a.datepickerMode)-1]},a.move=function(a){var b=i.activeDate.getFullYear()+a*(i.step.years||0),c=i.activeDate.getMonth()+a*(i.step.months||0);i.activeDate.setFullYear(b,c,1),i.refreshView()},a.toggleMode=function(b){b=b||1,a.datepickerMode===i.maxMode&&1===b||a.datepickerMode===i.minMode&&-1===b||(a.datepickerMode=i.modes[i.modes.indexOf(a.datepickerMode)+b])},a.keys={13:"enter",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down"};var k=function(){e(function(){i.element[0].focus()},0,!1)};a.$on("datepicker.focus",k),a.keydown=function(b){var c=a.keys[b.which];if(c&&!b.shiftKey&&!b.altKey)if(b.preventDefault(),b.stopPropagation(),"enter"===c||"space"===c){if(i.isDisabled(i.activeDate))return;a.select(i.activeDate),k()}else!b.ctrlKey||"up"!==c&&"down"!==c?(i.handleKeyDown(c,b),i.refreshView()):(a.toggleMode("up"===c?1:-1),k())}}]).directive("datepicker",function(){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/datepicker.html",scope:{datepickerMode:"=?",dateDisabled:"&"},require:["datepicker","?^ngModel"],controller:"DatepickerController",link:function(a,b,c,d){var e=d[0],f=d[1];f&&e.init(f)}}}).directive("daypicker",["dateFilter",function(a){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/day.html",require:"^datepicker",link:function(b,c,d,e){function f(a,b){return 1!==b||a%4!==0||a%100===0&&a%400!==0?i[b]:29}function g(a,b){var c=new Array(b),d=new Date(a),e=0;for(d.setHours(12);b>e;)c[e++]=new Date(d),d.setDate(d.getDate()+1);return c}function h(a){var b=new Date(a);b.setDate(b.getDate()+4-(b.getDay()||7));var c=b.getTime();return b.setMonth(0),b.setDate(1),Math.floor(Math.round((c-b)/864e5)/7)+1}b.showWeeks=e.showWeeks,e.step={months:1},e.element=c;var i=[31,28,31,30,31,30,31,31,30,31,30,31];e._refreshView=function(){var c=e.activeDate.getFullYear(),d=e.activeDate.getMonth(),f=new Date(c,d,1),i=e.startingDay-f.getDay(),j=i>0?7-i:-i,k=new Date(f);j>0&&k.setDate(-j+1);for(var l=g(k,42),m=0;42>m;m++)l[m]=angular.extend(e.createDateObject(l[m],e.formatDay),{secondary:l[m].getMonth()!==d,uid:b.uniqueId+"-"+m});b.labels=new Array(7);for(var n=0;7>n;n++)b.labels[n]={abbr:a(l[n].date,e.formatDayHeader),full:a(l[n].date,"EEEE")};if(b.title=a(e.activeDate,e.formatDayTitle),b.rows=e.split(l,7),b.showWeeks){b.weekNumbers=[];for(var o=h(b.rows[0][0].date),p=b.rows.length;b.weekNumbers.push(o++)<p;);}},e.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth(),a.getDate())-new Date(b.getFullYear(),b.getMonth(),b.getDate())},e.handleKeyDown=function(a){var b=e.activeDate.getDate();if("left"===a)b-=1;else if("up"===a)b-=7;else if("right"===a)b+=1;else if("down"===a)b+=7;else if("pageup"===a||"pagedown"===a){var c=e.activeDate.getMonth()+("pageup"===a?-1:1);e.activeDate.setMonth(c,1),b=Math.min(f(e.activeDate.getFullYear(),e.activeDate.getMonth()),b)}else"home"===a?b=1:"end"===a&&(b=f(e.activeDate.getFullYear(),e.activeDate.getMonth()));e.activeDate.setDate(b)},e.refreshView()}}}]).directive("monthpicker",["dateFilter",function(a){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/month.html",require:"^datepicker",link:function(b,c,d,e){e.step={years:1},e.element=c,e._refreshView=function(){for(var c=new Array(12),d=e.activeDate.getFullYear(),f=0;12>f;f++)c[f]=angular.extend(e.createDateObject(new Date(d,f,1),e.formatMonth),{uid:b.uniqueId+"-"+f});b.title=a(e.activeDate,e.formatMonthTitle),b.rows=e.split(c,3)},e.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth())-new Date(b.getFullYear(),b.getMonth())},e.handleKeyDown=function(a){var b=e.activeDate.getMonth();if("left"===a)b-=1;else if("up"===a)b-=3;else if("right"===a)b+=1;else if("down"===a)b+=3;else if("pageup"===a||"pagedown"===a){var c=e.activeDate.getFullYear()+("pageup"===a?-1:1);e.activeDate.setFullYear(c)}else"home"===a?b=0:"end"===a&&(b=11);e.activeDate.setMonth(b)},e.refreshView()}}}]).directive("yearpicker",["dateFilter",function(){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/year.html",require:"^datepicker",link:function(a,b,c,d){function e(a){return parseInt((a-1)/f,10)*f+1}var f=d.yearRange;d.step={years:f},d.element=b,d._refreshView=function(){for(var b=new Array(f),c=0,g=e(d.activeDate.getFullYear());f>c;c++)b[c]=angular.extend(d.createDateObject(new Date(g+c,0,1),d.formatYear),{uid:a.uniqueId+"-"+c});a.title=[b[0].label,b[f-1].label].join(" - "),a.rows=d.split(b,5)},d.compare=function(a,b){return a.getFullYear()-b.getFullYear()},d.handleKeyDown=function(a){var b=d.activeDate.getFullYear();"left"===a?b-=1:"up"===a?b-=5:"right"===a?b+=1:"down"===a?b+=5:"pageup"===a||"pagedown"===a?b+=("pageup"===a?-1:1)*d.step.years:"home"===a?b=e(d.activeDate.getFullYear()):"end"===a&&(b=e(d.activeDate.getFullYear())+f-1),d.activeDate.setFullYear(b)},d.refreshView()}}}]).constant("datepickerPopupConfig",{datepickerPopup:"yyyy-MM-dd",currentText:"Today",clearText:"Clear",closeText:"Done",closeOnDateSelection:!0,appendToBody:!1,showButtonBar:!0}).directive("datepickerPopup",["$compile","$parse","$document","$position","dateFilter","dateParser","datepickerPopupConfig",function(a,b,c,d,e,f,g){return{restrict:"EA",require:"ngModel",scope:{isOpen:"=?",currentText:"@",clearText:"@",closeText:"@",dateDisabled:"&"},link:function(h,i,j,k){function l(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}function m(a){if(a){if(angular.isDate(a)&&!isNaN(a))return k.$setValidity("date",!0),a;if(angular.isString(a)){var b=f.parse(a,n)||new Date(a);return isNaN(b)?void k.$setValidity("date",!1):(k.$setValidity("date",!0),b)}return void k.$setValidity("date",!1)}return k.$setValidity("date",!0),null}var n,o=angular.isDefined(j.closeOnDateSelection)?h.$parent.$eval(j.closeOnDateSelection):g.closeOnDateSelection,p=angular.isDefined(j.datepickerAppendToBody)?h.$parent.$eval(j.datepickerAppendToBody):g.appendToBody;h.showButtonBar=angular.isDefined(j.showButtonBar)?h.$parent.$eval(j.showButtonBar):g.showButtonBar,h.getText=function(a){return h[a+"Text"]||g[a+"Text"]},j.$observe("datepickerPopup",function(a){n=a||g.datepickerPopup,k.$render()});var q=angular.element("<div datepicker-popup-wrap><div datepicker></div></div>");q.attr({"ng-model":"date","ng-change":"dateSelection()"});var r=angular.element(q.children()[0]);j.datepickerOptions&&angular.forEach(h.$parent.$eval(j.datepickerOptions),function(a,b){r.attr(l(b),a)}),h.watchData={},angular.forEach(["minDate","maxDate","datepickerMode"],function(a){if(j[a]){var c=b(j[a]);if(h.$parent.$watch(c,function(b){h.watchData[a]=b}),r.attr(l(a),"watchData."+a),"datepickerMode"===a){var d=c.assign;h.$watch("watchData."+a,function(a,b){a!==b&&d(h.$parent,a)})}}}),j.dateDisabled&&r.attr("date-disabled","dateDisabled({ date: date, mode: mode })"),k.$parsers.unshift(m),h.dateSelection=function(a){angular.isDefined(a)&&(h.date=a),k.$setViewValue(h.date),k.$render(),o&&(h.isOpen=!1,i[0].focus())},i.bind("input change keyup",function(){h.$apply(function(){h.date=k.$modelValue})}),k.$render=function(){var a=k.$viewValue?e(k.$viewValue,n):"";i.val(a),h.date=m(k.$modelValue)};var s=function(a){h.isOpen&&a.target!==i[0]&&h.$apply(function(){h.isOpen=!1})},t=function(a){h.keydown(a)};i.bind("keydown",t),h.keydown=function(a){27===a.which?(a.preventDefault(),a.stopPropagation(),h.close()):40!==a.which||h.isOpen||(h.isOpen=!0)},h.$watch("isOpen",function(a){a?(h.$broadcast("datepicker.focus"),h.position=p?d.offset(i):d.position(i),h.position.top=h.position.top+i.prop("offsetHeight"),c.bind("click",s)):c.unbind("click",s)}),h.select=function(a){if("today"===a){var b=new Date;angular.isDate(k.$modelValue)?(a=new Date(k.$modelValue),a.setFullYear(b.getFullYear(),b.getMonth(),b.getDate())):a=new Date(b.setHours(0,0,0,0))}h.dateSelection(a)},h.close=function(){h.isOpen=!1,i[0].focus()};var u=a(q)(h);q.remove(),p?c.find("body").append(u):i.after(u),h.$on("$destroy",function(){u.remove(),i.unbind("keydown",t),c.unbind("click",s)})}}}]).directive("datepickerPopupWrap",function(){return{restrict:"EA",replace:!0,transclude:!0,templateUrl:"template/datepicker/popup.html",link:function(a,b){b.bind("click",function(a){a.preventDefault(),a.stopPropagation()})}}}),angular.module("ui.bootstrap.dropdown",[]).constant("dropdownConfig",{openClass:"open"}).service("dropdownService",["$document",function(a){var b=null;this.open=function(e){b||(a.bind("click",c),a.bind("keydown",d)),b&&b!==e&&(b.isOpen=!1),b=e},this.close=function(e){b===e&&(b=null,a.unbind("click",c),a.unbind("keydown",d))};var c=function(a){if(b){var c=b.getToggleElement();a&&c&&c[0].contains(a.target)||b.$apply(function(){b.isOpen=!1})}},d=function(a){27===a.which&&(b.focusToggleElement(),c())}}]).controller("DropdownController",["$scope","$attrs","$parse","dropdownConfig","dropdownService","$animate",function(a,b,c,d,e,f){var g,h=this,i=a.$new(),j=d.openClass,k=angular.noop,l=b.onToggle?c(b.onToggle):angular.noop;this.init=function(d){h.$element=d,b.isOpen&&(g=c(b.isOpen),k=g.assign,a.$watch(g,function(a){i.isOpen=!!a}))},this.toggle=function(a){return i.isOpen=arguments.length?!!a:!i.isOpen},this.isOpen=function(){return i.isOpen},i.getToggleElement=function(){return h.toggleElement},i.focusToggleElement=function(){h.toggleElement&&h.toggleElement[0].focus()},i.$watch("isOpen",function(b,c){f[b?"addClass":"removeClass"](h.$element,j),b?(i.focusToggleElement(),e.open(i)):e.close(i),k(a,b),angular.isDefined(b)&&b!==c&&l(a,{open:!!b})}),a.$on("$locationChangeSuccess",function(){i.isOpen=!1}),a.$on("$destroy",function(){i.$destroy()})}]).directive("dropdown",function(){return{controller:"DropdownController",link:function(a,b,c,d){d.init(b)}}}).directive("dropdownToggle",function(){return{require:"?^dropdown",link:function(a,b,c,d){if(d){d.toggleElement=b;var e=function(e){e.preventDefault(),b.hasClass("disabled")||c.disabled||a.$apply(function(){d.toggle()})};b.bind("click",e),b.attr({"aria-haspopup":!0,"aria-expanded":!1}),a.$watch(d.isOpen,function(a){b.attr("aria-expanded",!!a)}),a.$on("$destroy",function(){b.unbind("click",e)})}}}}),angular.module("ui.bootstrap.modal",["ui.bootstrap.transition"]).factory("$$stackedMap",function(){return{createNew:function(){var a=[];return{add:function(b,c){a.push({key:b,value:c})},get:function(b){for(var c=0;c<a.length;c++)if(b==a[c].key)return a[c]},keys:function(){for(var b=[],c=0;c<a.length;c++)b.push(a[c].key);return b},top:function(){return a[a.length-1]},remove:function(b){for(var c=-1,d=0;d<a.length;d++)if(b==a[d].key){c=d;break}return a.splice(c,1)[0]},removeTop:function(){return a.splice(a.length-1,1)[0]},length:function(){return a.length}}}}}).directive("modalBackdrop",["$timeout",function(a){return{restrict:"EA",replace:!0,templateUrl:"template/modal/backdrop.html",link:function(b,c,d){b.backdropClass=d.backdropClass||"",b.animate=!1,a(function(){b.animate=!0})}}}]).directive("modalWindow",["$modalStack","$timeout",function(a,b){return{restrict:"EA",scope:{index:"@",animate:"="},replace:!0,transclude:!0,templateUrl:function(a,b){return b.templateUrl||"template/modal/window.html"},link:function(c,d,e){d.addClass(e.windowClass||""),c.size=e.size,b(function(){c.animate=!0,d[0].querySelectorAll("[autofocus]").length||d[0].focus()}),c.close=function(b){var c=a.getTop();c&&c.value.backdrop&&"static"!=c.value.backdrop&&b.target===b.currentTarget&&(b.preventDefault(),b.stopPropagation(),a.dismiss(c.key,"backdrop click"))}}}}]).directive("modalTransclude",function(){return{link:function(a,b,c,d,e){e(a.$parent,function(a){b.empty(),b.append(a)})}}}).factory("$modalStack",["$transition","$timeout","$document","$compile","$rootScope","$$stackedMap",function(a,b,c,d,e,f){function g(){for(var a=-1,b=n.keys(),c=0;c<b.length;c++)n.get(b[c]).value.backdrop&&(a=c);return a}function h(a){var b=c.find("body").eq(0),d=n.get(a).value;n.remove(a),j(d.modalDomEl,d.modalScope,300,function(){d.modalScope.$destroy(),b.toggleClass(m,n.length()>0),i()})}function i(){if(k&&-1==g()){var a=l;j(k,l,150,function(){a.$destroy(),a=null}),k=void 0,l=void 0}}function j(c,d,e,f){function g(){g.done||(g.done=!0,c.remove(),f&&f())}d.animate=!1;var h=a.transitionEndEventName;if(h){var i=b(g,e);c.bind(h,function(){b.cancel(i),g(),d.$apply()})}else b(g)}var k,l,m="modal-open",n=f.createNew(),o={};return e.$watch(g,function(a){l&&(l.index=a)}),c.bind("keydown",function(a){var b;27===a.which&&(b=n.top(),b&&b.value.keyboard&&(a.preventDefault(),e.$apply(function(){o.dismiss(b.key,"escape key press")})))}),o.open=function(a,b){n.add(a,{deferred:b.deferred,modalScope:b.scope,backdrop:b.backdrop,keyboard:b.keyboard});var f=c.find("body").eq(0),h=g();if(h>=0&&!k){l=e.$new(!0),l.index=h;var i=angular.element("<div modal-backdrop></div>");i.attr("backdrop-class",b.backdropClass),k=d(i)(l),f.append(k)}var j=angular.element("<div modal-window></div>");j.attr({"template-url":b.windowTemplateUrl,"window-class":b.windowClass,size:b.size,index:n.length()-1,animate:"animate"}).html(b.content);var o=d(j)(b.scope);n.top().value.modalDomEl=o,f.append(o),f.addClass(m)},o.close=function(a,b){var c=n.get(a);c&&(c.value.deferred.resolve(b),h(a))},o.dismiss=function(a,b){var c=n.get(a);c&&(c.value.deferred.reject(b),h(a))},o.dismissAll=function(a){for(var b=this.getTop();b;)this.dismiss(b.key,a),b=this.getTop()},o.getTop=function(){return n.top()},o}]).provider("$modal",function(){var a={options:{backdrop:!0,keyboard:!0},$get:["$injector","$rootScope","$q","$http","$templateCache","$controller","$modalStack",function(b,c,d,e,f,g,h){function i(a){return a.template?d.when(a.template):e.get(angular.isFunction(a.templateUrl)?a.templateUrl():a.templateUrl,{cache:f}).then(function(a){return a.data})}function j(a){var c=[];return angular.forEach(a,function(a){(angular.isFunction(a)||angular.isArray(a))&&c.push(d.when(b.invoke(a)))}),c}var k={};return k.open=function(b){var e=d.defer(),f=d.defer(),k={result:e.promise,opened:f.promise,close:function(a){h.close(k,a)},dismiss:function(a){h.dismiss(k,a)}};if(b=angular.extend({},a.options,b),b.resolve=b.resolve||{},!b.template&&!b.templateUrl)throw new Error("One of template or templateUrl options is required.");var l=d.all([i(b)].concat(j(b.resolve)));return l.then(function(a){var d=(b.scope||c).$new();d.$close=k.close,d.$dismiss=k.dismiss;var f,i={},j=1;b.controller&&(i.$scope=d,i.$modalInstance=k,angular.forEach(b.resolve,function(b,c){i[c]=a[j++]}),f=g(b.controller,i),b.controllerAs&&(d[b.controllerAs]=f)),h.open(k,{scope:d,deferred:e,content:a[0],backdrop:b.backdrop,keyboard:b.keyboard,backdropClass:b.backdropClass,windowClass:b.windowClass,windowTemplateUrl:b.windowTemplateUrl,size:b.size})},function(a){e.reject(a)}),l.then(function(){f.resolve(!0)},function(){f.reject(!1)}),k},k}]};return a}),angular.module("ui.bootstrap.pagination",[]).controller("PaginationController",["$scope","$attrs","$parse",function(a,b,c){var d=this,e={$setViewValue:angular.noop},f=b.numPages?c(b.numPages).assign:angular.noop;this.init=function(f,g){e=f,this.config=g,e.$render=function(){d.render()},b.itemsPerPage?a.$parent.$watch(c(b.itemsPerPage),function(b){d.itemsPerPage=parseInt(b,10),a.totalPages=d.calculateTotalPages()}):this.itemsPerPage=g.itemsPerPage},this.calculateTotalPages=function(){var b=this.itemsPerPage<1?1:Math.ceil(a.totalItems/this.itemsPerPage);return Math.max(b||0,1)},this.render=function(){a.page=parseInt(e.$viewValue,10)||1},a.selectPage=function(b){a.page!==b&&b>0&&b<=a.totalPages&&(e.$setViewValue(b),e.$render())},a.getText=function(b){return a[b+"Text"]||d.config[b+"Text"]},a.noPrevious=function(){return 1===a.page},a.noNext=function(){return a.page===a.totalPages},a.$watch("totalItems",function(){a.totalPages=d.calculateTotalPages()}),a.$watch("totalPages",function(b){f(a.$parent,b),a.page>b?a.selectPage(b):e.$render()})}]).constant("paginationConfig",{itemsPerPage:10,boundaryLinks:!1,directionLinks:!0,firstText:"First",previousText:"Previous",nextText:"Next",lastText:"Last",rotate:!0}).directive("pagination",["$parse","paginationConfig",function(a,b){return{restrict:"EA",scope:{totalItems:"=",firstText:"@",previousText:"@",nextText:"@",lastText:"@"},require:["pagination","?ngModel"],controller:"PaginationController",templateUrl:"template/pagination/pagination.html",replace:!0,link:function(c,d,e,f){function g(a,b,c){return{number:a,text:b,active:c}}function h(a,b){var c=[],d=1,e=b,f=angular.isDefined(k)&&b>k;f&&(l?(d=Math.max(a-Math.floor(k/2),1),e=d+k-1,e>b&&(e=b,d=e-k+1)):(d=(Math.ceil(a/k)-1)*k+1,e=Math.min(d+k-1,b)));for(var h=d;e>=h;h++){var i=g(h,h,h===a);c.push(i)}if(f&&!l){if(d>1){var j=g(d-1,"...",!1);c.unshift(j)}if(b>e){var m=g(e+1,"...",!1);c.push(m)}}return c}var i=f[0],j=f[1];if(j){var k=angular.isDefined(e.maxSize)?c.$parent.$eval(e.maxSize):b.maxSize,l=angular.isDefined(e.rotate)?c.$parent.$eval(e.rotate):b.rotate;c.boundaryLinks=angular.isDefined(e.boundaryLinks)?c.$parent.$eval(e.boundaryLinks):b.boundaryLinks,c.directionLinks=angular.isDefined(e.directionLinks)?c.$parent.$eval(e.directionLinks):b.directionLinks,i.init(j,b),e.maxSize&&c.$parent.$watch(a(e.maxSize),function(a){k=parseInt(a,10),i.render()
	});var m=i.render;i.render=function(){m(),c.page>0&&c.page<=c.totalPages&&(c.pages=h(c.page,c.totalPages))}}}}}]).constant("pagerConfig",{itemsPerPage:10,previousText:"« Previous",nextText:"Next »",align:!0}).directive("pager",["pagerConfig",function(a){return{restrict:"EA",scope:{totalItems:"=",previousText:"@",nextText:"@"},require:["pager","?ngModel"],controller:"PaginationController",templateUrl:"template/pagination/pager.html",replace:!0,link:function(b,c,d,e){var f=e[0],g=e[1];g&&(b.align=angular.isDefined(d.align)?b.$parent.$eval(d.align):a.align,f.init(g,a))}}}]),angular.module("ui.bootstrap.tooltip",["ui.bootstrap.position","ui.bootstrap.bindHtml"]).provider("$tooltip",function(){function a(a){var b=/[A-Z]/g,c="-";return a.replace(b,function(a,b){return(b?c:"")+a.toLowerCase()})}var b={placement:"top",animation:!0,popupDelay:0},c={mouseenter:"mouseleave",click:"click",focus:"blur"},d={};this.options=function(a){angular.extend(d,a)},this.setTriggers=function(a){angular.extend(c,a)},this.$get=["$window","$compile","$timeout","$document","$position","$interpolate",function(e,f,g,h,i,j){return function(e,k,l){function m(a){var b=a||n.trigger||l,d=c[b]||b;return{show:b,hide:d}}var n=angular.extend({},b,d),o=a(e),p=j.startSymbol(),q=j.endSymbol(),r="<div "+o+'-popup title="'+p+"title"+q+'" content="'+p+"content"+q+'" placement="'+p+"placement"+q+'" animation="animation" is-open="isOpen"></div>';return{restrict:"EA",compile:function(){var a=f(r);return function(b,c,d){function f(){D.isOpen?l():j()}function j(){(!C||b.$eval(d[k+"Enable"]))&&(s(),D.popupDelay?z||(z=g(o,D.popupDelay,!1),z.then(function(a){a()})):o()())}function l(){b.$apply(function(){p()})}function o(){return z=null,y&&(g.cancel(y),y=null),D.content?(q(),w.css({top:0,left:0,display:"block"}),D.$digest(),E(),D.isOpen=!0,D.$digest(),E):angular.noop}function p(){D.isOpen=!1,g.cancel(z),z=null,D.animation?y||(y=g(r,500)):r()}function q(){w&&r(),x=D.$new(),w=a(x,function(a){A?h.find("body").append(a):c.after(a)})}function r(){y=null,w&&(w.remove(),w=null),x&&(x.$destroy(),x=null)}function s(){t(),u()}function t(){var a=d[k+"Placement"];D.placement=angular.isDefined(a)?a:n.placement}function u(){var a=d[k+"PopupDelay"],b=parseInt(a,10);D.popupDelay=isNaN(b)?n.popupDelay:b}function v(){var a=d[k+"Trigger"];F(),B=m(a),B.show===B.hide?c.bind(B.show,f):(c.bind(B.show,j),c.bind(B.hide,l))}var w,x,y,z,A=angular.isDefined(n.appendToBody)?n.appendToBody:!1,B=m(void 0),C=angular.isDefined(d[k+"Enable"]),D=b.$new(!0),E=function(){var a=i.positionElements(c,w,D.placement,A);a.top+="px",a.left+="px",w.css(a)};D.isOpen=!1,d.$observe(e,function(a){D.content=a,!a&&D.isOpen&&p()}),d.$observe(k+"Title",function(a){D.title=a});var F=function(){c.unbind(B.show,j),c.unbind(B.hide,l)};v();var G=b.$eval(d[k+"Animation"]);D.animation=angular.isDefined(G)?!!G:n.animation;var H=b.$eval(d[k+"AppendToBody"]);A=angular.isDefined(H)?H:A,A&&b.$on("$locationChangeSuccess",function(){D.isOpen&&p()}),b.$on("$destroy",function(){g.cancel(y),g.cancel(z),F(),r(),D=null})}}}}}]}).directive("tooltipPopup",function(){return{restrict:"EA",replace:!0,scope:{content:"@",placement:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-popup.html"}}).directive("tooltip",["$tooltip",function(a){return a("tooltip","tooltip","mouseenter")}]).directive("tooltipHtmlUnsafePopup",function(){return{restrict:"EA",replace:!0,scope:{content:"@",placement:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-html-unsafe-popup.html"}}).directive("tooltipHtmlUnsafe",["$tooltip",function(a){return a("tooltipHtmlUnsafe","tooltip","mouseenter")}]),angular.module("ui.bootstrap.popover",["ui.bootstrap.tooltip"]).directive("popoverPopup",function(){return{restrict:"EA",replace:!0,scope:{title:"@",content:"@",placement:"@",animation:"&",isOpen:"&"},templateUrl:"template/popover/popover.html"}}).directive("popover",["$tooltip",function(a){return a("popover","popover","click")}]),angular.module("ui.bootstrap.progressbar",[]).constant("progressConfig",{animate:!0,max:100}).controller("ProgressController",["$scope","$attrs","progressConfig",function(a,b,c){var d=this,e=angular.isDefined(b.animate)?a.$parent.$eval(b.animate):c.animate;this.bars=[],a.max=angular.isDefined(b.max)?a.$parent.$eval(b.max):c.max,this.addBar=function(b,c){e||c.css({transition:"none"}),this.bars.push(b),b.$watch("value",function(c){b.percent=+(100*c/a.max).toFixed(2)}),b.$on("$destroy",function(){c=null,d.removeBar(b)})},this.removeBar=function(a){this.bars.splice(this.bars.indexOf(a),1)}}]).directive("progress",function(){return{restrict:"EA",replace:!0,transclude:!0,controller:"ProgressController",require:"progress",scope:{},templateUrl:"template/progressbar/progress.html"}}).directive("bar",function(){return{restrict:"EA",replace:!0,transclude:!0,require:"^progress",scope:{value:"=",type:"@"},templateUrl:"template/progressbar/bar.html",link:function(a,b,c,d){d.addBar(a,b)}}}).directive("progressbar",function(){return{restrict:"EA",replace:!0,transclude:!0,controller:"ProgressController",scope:{value:"=",type:"@"},templateUrl:"template/progressbar/progressbar.html",link:function(a,b,c,d){d.addBar(a,angular.element(b.children()[0]))}}}),angular.module("ui.bootstrap.rating",[]).constant("ratingConfig",{max:5,stateOn:null,stateOff:null}).controller("RatingController",["$scope","$attrs","ratingConfig",function(a,b,c){var d={$setViewValue:angular.noop};this.init=function(e){d=e,d.$render=this.render,this.stateOn=angular.isDefined(b.stateOn)?a.$parent.$eval(b.stateOn):c.stateOn,this.stateOff=angular.isDefined(b.stateOff)?a.$parent.$eval(b.stateOff):c.stateOff;var f=angular.isDefined(b.ratingStates)?a.$parent.$eval(b.ratingStates):new Array(angular.isDefined(b.max)?a.$parent.$eval(b.max):c.max);a.range=this.buildTemplateObjects(f)},this.buildTemplateObjects=function(a){for(var b=0,c=a.length;c>b;b++)a[b]=angular.extend({index:b},{stateOn:this.stateOn,stateOff:this.stateOff},a[b]);return a},a.rate=function(b){!a.readonly&&b>=0&&b<=a.range.length&&(d.$setViewValue(b),d.$render())},a.enter=function(b){a.readonly||(a.value=b),a.onHover({value:b})},a.reset=function(){a.value=d.$viewValue,a.onLeave()},a.onKeydown=function(b){/(37|38|39|40)/.test(b.which)&&(b.preventDefault(),b.stopPropagation(),a.rate(a.value+(38===b.which||39===b.which?1:-1)))},this.render=function(){a.value=d.$viewValue}}]).directive("rating",function(){return{restrict:"EA",require:["rating","ngModel"],scope:{readonly:"=?",onHover:"&",onLeave:"&"},controller:"RatingController",templateUrl:"template/rating/rating.html",replace:!0,link:function(a,b,c,d){var e=d[0],f=d[1];f&&e.init(f)}}}),angular.module("ui.bootstrap.tabs",[]).controller("TabsetController",["$scope",function(a){var b=this,c=b.tabs=a.tabs=[];b.select=function(a){angular.forEach(c,function(b){b.active&&b!==a&&(b.active=!1,b.onDeselect())}),a.active=!0,a.onSelect()},b.addTab=function(a){c.push(a),1===c.length?a.active=!0:a.active&&b.select(a)},b.removeTab=function(a){var e=c.indexOf(a);if(a.active&&c.length>1&&!d){var f=e==c.length-1?e-1:e+1;b.select(c[f])}c.splice(e,1)};var d;a.$on("$destroy",function(){d=!0})}]).directive("tabset",function(){return{restrict:"EA",transclude:!0,replace:!0,scope:{type:"@"},controller:"TabsetController",templateUrl:"template/tabs/tabset.html",link:function(a,b,c){a.vertical=angular.isDefined(c.vertical)?a.$parent.$eval(c.vertical):!1,a.justified=angular.isDefined(c.justified)?a.$parent.$eval(c.justified):!1}}}).directive("tab",["$parse",function(a){return{require:"^tabset",restrict:"EA",replace:!0,templateUrl:"template/tabs/tab.html",transclude:!0,scope:{active:"=?",heading:"@",onSelect:"&select",onDeselect:"&deselect"},controller:function(){},compile:function(b,c,d){return function(b,c,e,f){b.$watch("active",function(a){a&&f.select(b)}),b.disabled=!1,e.disabled&&b.$parent.$watch(a(e.disabled),function(a){b.disabled=!!a}),b.select=function(){b.disabled||(b.active=!0)},f.addTab(b),b.$on("$destroy",function(){f.removeTab(b)}),b.$transcludeFn=d}}}}]).directive("tabHeadingTransclude",[function(){return{restrict:"A",require:"^tab",link:function(a,b){a.$watch("headingElement",function(a){a&&(b.html(""),b.append(a))})}}}]).directive("tabContentTransclude",function(){function a(a){return a.tagName&&(a.hasAttribute("tab-heading")||a.hasAttribute("data-tab-heading")||"tab-heading"===a.tagName.toLowerCase()||"data-tab-heading"===a.tagName.toLowerCase())}return{restrict:"A",require:"^tabset",link:function(b,c,d){var e=b.$eval(d.tabContentTransclude);e.$transcludeFn(e.$parent,function(b){angular.forEach(b,function(b){a(b)?e.headingElement=b:c.append(b)})})}}}),angular.module("ui.bootstrap.timepicker",[]).constant("timepickerConfig",{hourStep:1,minuteStep:1,showMeridian:!0,meridians:null,readonlyInput:!1,mousewheel:!0}).controller("TimepickerController",["$scope","$attrs","$parse","$log","$locale","timepickerConfig",function(a,b,c,d,e,f){function g(){var b=parseInt(a.hours,10),c=a.showMeridian?b>0&&13>b:b>=0&&24>b;return c?(a.showMeridian&&(12===b&&(b=0),a.meridian===p[1]&&(b+=12)),b):void 0}function h(){var b=parseInt(a.minutes,10);return b>=0&&60>b?b:void 0}function i(a){return angular.isDefined(a)&&a.toString().length<2?"0"+a:a}function j(a){k(),o.$setViewValue(new Date(n)),l(a)}function k(){o.$setValidity("time",!0),a.invalidHours=!1,a.invalidMinutes=!1}function l(b){var c=n.getHours(),d=n.getMinutes();a.showMeridian&&(c=0===c||12===c?12:c%12),a.hours="h"===b?c:i(c),a.minutes="m"===b?d:i(d),a.meridian=n.getHours()<12?p[0]:p[1]}function m(a){var b=new Date(n.getTime()+6e4*a);n.setHours(b.getHours(),b.getMinutes()),j()}var n=new Date,o={$setViewValue:angular.noop},p=angular.isDefined(b.meridians)?a.$parent.$eval(b.meridians):f.meridians||e.DATETIME_FORMATS.AMPMS;this.init=function(c,d){o=c,o.$render=this.render;var e=d.eq(0),g=d.eq(1),h=angular.isDefined(b.mousewheel)?a.$parent.$eval(b.mousewheel):f.mousewheel;h&&this.setupMousewheelEvents(e,g),a.readonlyInput=angular.isDefined(b.readonlyInput)?a.$parent.$eval(b.readonlyInput):f.readonlyInput,this.setupInputEvents(e,g)};var q=f.hourStep;b.hourStep&&a.$parent.$watch(c(b.hourStep),function(a){q=parseInt(a,10)});var r=f.minuteStep;b.minuteStep&&a.$parent.$watch(c(b.minuteStep),function(a){r=parseInt(a,10)}),a.showMeridian=f.showMeridian,b.showMeridian&&a.$parent.$watch(c(b.showMeridian),function(b){if(a.showMeridian=!!b,o.$error.time){var c=g(),d=h();angular.isDefined(c)&&angular.isDefined(d)&&(n.setHours(c),j())}else l()}),this.setupMousewheelEvents=function(b,c){var d=function(a){a.originalEvent&&(a=a.originalEvent);var b=a.wheelDelta?a.wheelDelta:-a.deltaY;return a.detail||b>0};b.bind("mousewheel wheel",function(b){a.$apply(d(b)?a.incrementHours():a.decrementHours()),b.preventDefault()}),c.bind("mousewheel wheel",function(b){a.$apply(d(b)?a.incrementMinutes():a.decrementMinutes()),b.preventDefault()})},this.setupInputEvents=function(b,c){if(a.readonlyInput)return a.updateHours=angular.noop,void(a.updateMinutes=angular.noop);var d=function(b,c){o.$setViewValue(null),o.$setValidity("time",!1),angular.isDefined(b)&&(a.invalidHours=b),angular.isDefined(c)&&(a.invalidMinutes=c)};a.updateHours=function(){var a=g();angular.isDefined(a)?(n.setHours(a),j("h")):d(!0)},b.bind("blur",function(){!a.invalidHours&&a.hours<10&&a.$apply(function(){a.hours=i(a.hours)})}),a.updateMinutes=function(){var a=h();angular.isDefined(a)?(n.setMinutes(a),j("m")):d(void 0,!0)},c.bind("blur",function(){!a.invalidMinutes&&a.minutes<10&&a.$apply(function(){a.minutes=i(a.minutes)})})},this.render=function(){var a=o.$modelValue?new Date(o.$modelValue):null;isNaN(a)?(o.$setValidity("time",!1),d.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')):(a&&(n=a),k(),l())},a.incrementHours=function(){m(60*q)},a.decrementHours=function(){m(60*-q)},a.incrementMinutes=function(){m(r)},a.decrementMinutes=function(){m(-r)},a.toggleMeridian=function(){m(720*(n.getHours()<12?1:-1))}}]).directive("timepicker",function(){return{restrict:"EA",require:["timepicker","?^ngModel"],controller:"TimepickerController",replace:!0,scope:{},templateUrl:"template/timepicker/timepicker.html",link:function(a,b,c,d){var e=d[0],f=d[1];f&&e.init(f,b.find("input"))}}}),angular.module("ui.bootstrap.typeahead",["ui.bootstrap.position","ui.bootstrap.bindHtml"]).factory("typeaheadParser",["$parse",function(a){var b=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;return{parse:function(c){var d=c.match(b);if(!d)throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "'+c+'".');return{itemName:d[3],source:a(d[4]),viewMapper:a(d[2]||d[1]),modelMapper:a(d[1])}}}}]).directive("typeahead",["$compile","$parse","$q","$timeout","$document","$position","typeaheadParser",function(a,b,c,d,e,f,g){var h=[9,13,27,38,40];return{require:"ngModel",link:function(i,j,k,l){var m,n=i.$eval(k.typeaheadMinLength)||1,o=i.$eval(k.typeaheadWaitMs)||0,p=i.$eval(k.typeaheadEditable)!==!1,q=b(k.typeaheadLoading).assign||angular.noop,r=b(k.typeaheadOnSelect),s=k.typeaheadInputFormatter?b(k.typeaheadInputFormatter):void 0,t=k.typeaheadAppendToBody?i.$eval(k.typeaheadAppendToBody):!1,u=i.$eval(k.typeaheadFocusFirst)!==!1,v=b(k.ngModel).assign,w=g.parse(k.typeahead),x=i.$new();i.$on("$destroy",function(){x.$destroy()});var y="typeahead-"+x.$id+"-"+Math.floor(1e4*Math.random());j.attr({"aria-autocomplete":"list","aria-expanded":!1,"aria-owns":y});var z=angular.element("<div typeahead-popup></div>");z.attr({id:y,matches:"matches",active:"activeIdx",select:"select(activeIdx)",query:"query",position:"position"}),angular.isDefined(k.typeaheadTemplateUrl)&&z.attr("template-url",k.typeaheadTemplateUrl);var A=function(){x.matches=[],x.activeIdx=-1,j.attr("aria-expanded",!1)},B=function(a){return y+"-option-"+a};x.$watch("activeIdx",function(a){0>a?j.removeAttr("aria-activedescendant"):j.attr("aria-activedescendant",B(a))});var C=function(a){var b={$viewValue:a};q(i,!0),c.when(w.source(i,b)).then(function(c){var d=a===l.$viewValue;if(d&&m)if(c.length>0){x.activeIdx=u?0:-1,x.matches.length=0;for(var e=0;e<c.length;e++)b[w.itemName]=c[e],x.matches.push({id:B(e),label:w.viewMapper(x,b),model:c[e]});x.query=a,x.position=t?f.offset(j):f.position(j),x.position.top=x.position.top+j.prop("offsetHeight"),j.attr("aria-expanded",!0)}else A();d&&q(i,!1)},function(){A(),q(i,!1)})};A(),x.query=void 0;var D,E=function(a){D=d(function(){C(a)},o)},F=function(){D&&d.cancel(D)};l.$parsers.unshift(function(a){return m=!0,a&&a.length>=n?o>0?(F(),E(a)):C(a):(q(i,!1),F(),A()),p?a:a?void l.$setValidity("editable",!1):(l.$setValidity("editable",!0),a)}),l.$formatters.push(function(a){var b,c,d={};return s?(d.$model=a,s(i,d)):(d[w.itemName]=a,b=w.viewMapper(i,d),d[w.itemName]=void 0,c=w.viewMapper(i,d),b!==c?b:a)}),x.select=function(a){var b,c,e={};e[w.itemName]=c=x.matches[a].model,b=w.modelMapper(i,e),v(i,b),l.$setValidity("editable",!0),r(i,{$item:c,$model:b,$label:w.viewMapper(i,e)}),A(),d(function(){j[0].focus()},0,!1)},j.bind("keydown",function(a){0!==x.matches.length&&-1!==h.indexOf(a.which)&&(-1!=x.activeIdx||13!==a.which&&9!==a.which)&&(a.preventDefault(),40===a.which?(x.activeIdx=(x.activeIdx+1)%x.matches.length,x.$digest()):38===a.which?(x.activeIdx=(x.activeIdx>0?x.activeIdx:x.matches.length)-1,x.$digest()):13===a.which||9===a.which?x.$apply(function(){x.select(x.activeIdx)}):27===a.which&&(a.stopPropagation(),A(),x.$digest()))}),j.bind("blur",function(){m=!1});var G=function(a){j[0]!==a.target&&(A(),x.$digest())};e.bind("click",G),i.$on("$destroy",function(){e.unbind("click",G),t&&H.remove()});var H=a(z)(x);t?e.find("body").append(H):j.after(H)}}}]).directive("typeaheadPopup",function(){return{restrict:"EA",scope:{matches:"=",query:"=",active:"=",position:"=",select:"&"},replace:!0,templateUrl:"template/typeahead/typeahead-popup.html",link:function(a,b,c){a.templateUrl=c.templateUrl,a.isOpen=function(){return a.matches.length>0},a.isActive=function(b){return a.active==b},a.selectActive=function(b){a.active=b},a.selectMatch=function(b){a.select({activeIdx:b})}}}}).directive("typeaheadMatch",["$http","$templateCache","$compile","$parse",function(a,b,c,d){return{restrict:"EA",scope:{index:"=",match:"=",query:"="},link:function(e,f,g){var h=d(g.templateUrl)(e.$parent)||"template/typeahead/typeahead-match.html";a.get(h,{cache:b}).success(function(a){f.replaceWith(c(a.trim())(e))})}}}]).filter("typeaheadHighlight",function(){function a(a){return a.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}return function(b,c){return c?(""+b).replace(new RegExp(a(c),"gi"),"<strong>$&</strong>"):b}}),angular.module("template/accordion/accordion-group.html",[]).run(["$templateCache",function(a){a.put("template/accordion/accordion-group.html",'<div class="panel panel-default">\n  <div class="panel-heading">\n    <h4 class="panel-title">\n      <a href class="accordion-toggle" ng-click="toggleOpen()" accordion-transclude="heading"><span ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></a>\n    </h4>\n  </div>\n  <div class="panel-collapse" collapse="!isOpen">\n	  <div class="panel-body" ng-transclude></div>\n  </div>\n</div>\n')}]),angular.module("template/accordion/accordion.html",[]).run(["$templateCache",function(a){a.put("template/accordion/accordion.html",'<div class="panel-group" ng-transclude></div>')}]),angular.module("template/alert/alert.html",[]).run(["$templateCache",function(a){a.put("template/alert/alert.html",'<div class="alert" ng-class="[\'alert-\' + (type || \'warning\'), closeable ? \'alert-dismissable\' : null]" role="alert">\n    <button ng-show="closeable" type="button" class="close" ng-click="close()">\n        <span aria-hidden="true">&times;</span>\n        <span class="sr-only">Close</span>\n    </button>\n    <div ng-transclude></div>\n</div>\n')}]),angular.module("template/carousel/carousel.html",[]).run(["$templateCache",function(a){a.put("template/carousel/carousel.html",'<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel" ng-swipe-right="prev()" ng-swipe-left="next()">\n    <ol class="carousel-indicators" ng-show="slides.length > 1">\n        <li ng-repeat="slide in slides track by $index" ng-class="{active: isActive(slide)}" ng-click="select(slide)"></li>\n    </ol>\n    <div class="carousel-inner" ng-transclude></div>\n    <a class="left carousel-control" ng-click="prev()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-left"></span></a>\n    <a class="right carousel-control" ng-click="next()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-right"></span></a>\n</div>\n')}]),angular.module("template/carousel/slide.html",[]).run(["$templateCache",function(a){a.put("template/carousel/slide.html","<div ng-class=\"{\n    'active': leaving || (active && !entering),\n    'prev': (next || active) && direction=='prev',\n    'next': (next || active) && direction=='next',\n    'right': direction=='prev',\n    'left': direction=='next'\n  }\" class=\"item text-center\" ng-transclude></div>\n")}]),angular.module("template/datepicker/datepicker.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/datepicker.html",'<div ng-switch="datepickerMode" role="application" ng-keydown="keydown($event)">\n  <daypicker ng-switch-when="day" tabindex="0"></daypicker>\n  <monthpicker ng-switch-when="month" tabindex="0"></monthpicker>\n  <yearpicker ng-switch-when="year" tabindex="0"></yearpicker>\n</div>')}]),angular.module("template/datepicker/day.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/day.html",'<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{5 + showWeeks}}"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n    <tr>\n      <th ng-show="showWeeks" class="text-center"></th>\n      <th ng-repeat="label in labels track by $index" class="text-center"><small aria-label="{{label.full}}">{{label.abbr}}</small></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-show="showWeeks" class="text-center h6"><em>{{ weekNumbers[$index] }}</em></td>\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-muted\': dt.secondary, \'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/datepicker/month.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/month.html",'<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/datepicker/popup.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/popup.html",'<ul class="dropdown-menu" ng-style="{display: (isOpen && \'block\') || \'none\', top: position.top+\'px\', left: position.left+\'px\'}" ng-keydown="keydown($event)">\n	<li ng-transclude></li>\n	<li ng-if="showButtonBar" style="padding:10px 9px 2px">\n		<span class="btn-group pull-left">\n			<button type="button" class="btn btn-sm btn-info" ng-click="select(\'today\')">{{ getText(\'current\') }}</button>\n			<button type="button" class="btn btn-sm btn-danger" ng-click="select(null)">{{ getText(\'clear\') }}</button>\n		</span>\n		<button type="button" class="btn btn-sm btn-success pull-right" ng-click="close()">{{ getText(\'close\') }}</button>\n	</li>\n</ul>\n')}]),angular.module("template/datepicker/year.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/year.html",'<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="3"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/modal/backdrop.html",[]).run(["$templateCache",function(a){a.put("template/modal/backdrop.html",'<div class="modal-backdrop fade {{ backdropClass }}"\n     ng-class="{in: animate}"\n     ng-style="{\'z-index\': 1040 + (index && 1 || 0) + index*10}"\n></div>\n')}]),angular.module("template/modal/window.html",[]).run(["$templateCache",function(a){a.put("template/modal/window.html",'<div tabindex="-1" role="dialog" class="modal fade" ng-class="{in: animate}" ng-style="{\'z-index\': 1050 + index*10, display: \'block\'}" ng-click="close($event)">\n    <div class="modal-dialog" ng-class="{\'modal-sm\': size == \'sm\', \'modal-lg\': size == \'lg\'}"><div class="modal-content" modal-transclude></div></div>\n</div>')}]),angular.module("template/pagination/pager.html",[]).run(["$templateCache",function(a){a.put("template/pagination/pager.html",'<ul class="pager">\n  <li ng-class="{disabled: noPrevious(), previous: align}"><a href ng-click="selectPage(page - 1)">{{getText(\'previous\')}}</a></li>\n  <li ng-class="{disabled: noNext(), next: align}"><a href ng-click="selectPage(page + 1)">{{getText(\'next\')}}</a></li>\n</ul>')}]),angular.module("template/pagination/pagination.html",[]).run(["$templateCache",function(a){a.put("template/pagination/pagination.html",'<ul class="pagination">\n  <li ng-if="boundaryLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(1)">{{getText(\'first\')}}</a></li>\n  <li ng-if="directionLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(page - 1)">{{getText(\'previous\')}}</a></li>\n  <li ng-repeat="page in pages track by $index" ng-class="{active: page.active}"><a href ng-click="selectPage(page.number)">{{page.text}}</a></li>\n  <li ng-if="directionLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(page + 1)">{{getText(\'next\')}}</a></li>\n  <li ng-if="boundaryLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(totalPages)">{{getText(\'last\')}}</a></li>\n</ul>')}]),angular.module("template/tooltip/tooltip-html-unsafe-popup.html",[]).run(["$templateCache",function(a){a.put("template/tooltip/tooltip-html-unsafe-popup.html",'<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" bind-html-unsafe="content"></div>\n</div>\n')}]),angular.module("template/tooltip/tooltip-popup.html",[]).run(["$templateCache",function(a){a.put("template/tooltip/tooltip-popup.html",'<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="content"></div>\n</div>\n')}]),angular.module("template/popover/popover.html",[]).run(["$templateCache",function(a){a.put("template/popover/popover.html",'<div class="popover {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-show="title"></h3>\n      <div class="popover-content" ng-bind="content"></div>\n  </div>\n</div>\n')}]),angular.module("template/progressbar/bar.html",[]).run(["$templateCache",function(a){a.put("template/progressbar/bar.html",'<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: percent + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>')}]),angular.module("template/progressbar/progress.html",[]).run(["$templateCache",function(a){a.put("template/progressbar/progress.html",'<div class="progress" ng-transclude></div>')}]),angular.module("template/progressbar/progressbar.html",[]).run(["$templateCache",function(a){a.put("template/progressbar/progressbar.html",'<div class="progress">\n  <div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: percent + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>\n</div>')}]),angular.module("template/rating/rating.html",[]).run(["$templateCache",function(a){a.put("template/rating/rating.html",'<span ng-mouseleave="reset()" ng-keydown="onKeydown($event)" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="{{range.length}}" aria-valuenow="{{value}}">\n    <i ng-repeat="r in range track by $index" ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < value && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')">\n        <span class="sr-only">({{ $index < value ? \'*\' : \' \' }})</span>\n    </i>\n</span>')}]),angular.module("template/tabs/tab.html",[]).run(["$templateCache",function(a){a.put("template/tabs/tab.html",'<li ng-class="{active: active, disabled: disabled}">\n  <a href ng-click="select()" tab-heading-transclude>{{heading}}</a>\n</li>\n')}]),angular.module("template/tabs/tabset.html",[]).run(["$templateCache",function(a){a.put("template/tabs/tabset.html",'<div>\n  <ul class="nav nav-{{type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n  <div class="tab-content">\n    <div class="tab-pane" \n         ng-repeat="tab in tabs" \n         ng-class="{active: tab.active}"\n         tab-content-transclude="tab">\n    </div>\n  </div>\n</div>\n')}]),angular.module("template/timepicker/timepicker.html",[]).run(["$templateCache",function(a){a.put("template/timepicker/timepicker.html",'<table>\n	<tbody>\n		<tr class="text-center">\n			<td><a ng-click="incrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click="incrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			<td ng-show="showMeridian"></td>\n		</tr>\n		<tr>\n			<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidHours}">\n				<input type="text" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-mousewheel="incrementHours()" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			<td>:</td>\n			<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidMinutes}">\n				<input type="text" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			<td ng-show="showMeridian"><button type="button" class="btn btn-default text-center" ng-click="toggleMeridian()">{{meridian}}</button></td>\n		</tr>\n		<tr class="text-center">\n			<td><a ng-click="decrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click="decrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n			<td ng-show="showMeridian"></td>\n		</tr>\n	</tbody>\n</table>\n')}]),angular.module("template/typeahead/typeahead-match.html",[]).run(["$templateCache",function(a){a.put("template/typeahead/typeahead-match.html",'<a tabindex="-1" bind-html-unsafe="match.label | typeaheadHighlight:query"></a>')
	}]),angular.module("template/typeahead/typeahead-popup.html",[]).run(["$templateCache",function(a){a.put("template/typeahead/typeahead-popup.html",'<ul class="dropdown-menu" ng-show="isOpen()" ng-style="{top: position.top+\'px\', left: position.left+\'px\'}" style="display: block;" role="listbox" aria-hidden="{{!isOpen()}}">\n    <li ng-repeat="match in matches track by $index" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)" role="option" id="{{match.id}}">\n        <div typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>\n')}]);

	/*** EXPORTS FROM exports-loader ***/
	module.exports = angular;

/***/ },
/* 75 */
/***/ function(module, exports) {

	/*
	 AngularJS v1.5.5
	 (c) 2010-2016 Google, Inc. http://angularjs.org
	 License: MIT
	*/
	(function(n,c){'use strict';function l(b,a,g){var d=g.baseHref(),k=b[0];return function(b,e,f){var g,h;f=f||{};h=f.expires;g=c.isDefined(f.path)?f.path:d;c.isUndefined(e)&&(h="Thu, 01 Jan 1970 00:00:00 GMT",e="");c.isString(h)&&(h=new Date(h));e=encodeURIComponent(b)+"="+encodeURIComponent(e);e=e+(g?";path="+g:"")+(f.domain?";domain="+f.domain:"");e+=h?";expires="+h.toUTCString():"";e+=f.secure?";secure":"";f=e.length+1;4096<f&&a.warn("Cookie '"+b+"' possibly not set or overflowed because it was too large ("+
	f+" > 4096 bytes)!");k.cookie=e}}c.module("ngCookies",["ng"]).provider("$cookies",[function(){var b=this.defaults={};this.$get=["$$cookieReader","$$cookieWriter",function(a,g){return{get:function(d){return a()[d]},getObject:function(d){return(d=this.get(d))?c.fromJson(d):d},getAll:function(){return a()},put:function(d,a,m){g(d,a,m?c.extend({},b,m):b)},putObject:function(d,b,a){this.put(d,c.toJson(b),a)},remove:function(a,k){g(a,void 0,k?c.extend({},b,k):b)}}}]}]);c.module("ngCookies").factory("$cookieStore",
	["$cookies",function(b){return{get:function(a){return b.getObject(a)},put:function(a,c){b.putObject(a,c)},remove:function(a){b.remove(a)}}}]);l.$inject=["$document","$log","$browser"];c.module("ngCookies").provider("$$cookieWriter",function(){this.$get=l})})(window,window.angular);
	//# sourceMappingURL=angular-cookies.min.js.map


	/*** EXPORTS FROM exports-loader ***/
	module.exports = angular;

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*! 
	 * angular-hotkeys v1.7.0
	 * https://chieffancypants.github.io/angular-hotkeys
	 * Copyright (c) 2016 Wes Cruver
	 * License: MIT
	 */
	!function(){"use strict";angular.module("cfp.hotkeys",[]).provider("hotkeys",["$injector",function(a){this.includeCheatSheet=!0,this.useNgRoute=a.has("ngViewDirective"),this.templateTitle="Keyboard Shortcuts:",this.templateHeader=null,this.templateFooter=null,this.template='<div class="cfp-hotkeys-container fade" ng-class="{in: helpVisible}" style="display: none;"><div class="cfp-hotkeys"><h4 class="cfp-hotkeys-title" ng-if="!header">{{ title }}</h4><div ng-bind-html="header" ng-if="header"></div><table><tbody><tr ng-repeat="hotkey in hotkeys | filter:{ description: \'!$$undefined$$\' }"><td class="cfp-hotkeys-keys"><span ng-repeat="key in hotkey.format() track by $index" class="cfp-hotkeys-key">{{ key }}</span></td><td class="cfp-hotkeys-text">{{ hotkey.description }}</td></tr></tbody></table><div ng-bind-html="footer" ng-if="footer"></div><div class="cfp-hotkeys-close" ng-click="toggleCheatSheet()">&#215;</div></div></div>',this.cheatSheetHotkey="?",this.cheatSheetDescription="Show / hide this help menu",this.$get=["$rootElement","$rootScope","$compile","$window","$document",function(a,b,c,d,e){function f(){q=!1}function g(){q=!0}function h(a){var b={command:"⌘",shift:"⇧",left:"←",right:"→",up:"↑",down:"↓","return":"⏎",backspace:"⌫"};a=a.split("+");for(var c=0;c<a.length;c++)"mod"===a[c]&&(d.navigator&&d.navigator.platform.indexOf("Mac")>=0?a[c]="command":a[c]="ctrl"),a[c]=b[a[c]]||a[c];return a.join(" + ")}function i(a,b,c,d,e,f){this.combo=a instanceof Array?a:[a],this.description=b,this.callback=c,this.action=d,this.allowIn=e,this.persistent=f,this._formated=null}function j(){for(var a=r.hotkeys.length;a--;){var b=r.hotkeys[a];b&&!b.persistent&&m(b)}}function k(){r.helpVisible=!r.helpVisible,r.helpVisible?(w=n("esc"),m("esc"),l("esc",w.description,k,null,["INPUT","SELECT","TEXTAREA"])):(m("esc"),w!==!1&&l(w))}function l(a,b,c,d,e,f){var g,h=["INPUT","SELECT","TEXTAREA"],j=Object.prototype.toString.call(a);if("[object Object]"===j&&(b=a.description,c=a.callback,d=a.action,f=a.persistent,e=a.allowIn,a=a.combo),m(a),b instanceof Function?(d=c,c=b,b="$$undefined$$"):angular.isUndefined(b)&&(b="$$undefined$$"),void 0===f&&(f=!0),"function"==typeof c){g=c,e instanceof Array||(e=[]);for(var k,l=0;l<e.length;l++)e[l]=e[l].toUpperCase(),k=h.indexOf(e[l]),-1!==k&&h.splice(k,1);c=function(a){var b=!0;if(a){var c=a.target||a.srcElement,d=c.nodeName.toUpperCase();if((" "+c.className+" ").indexOf(" mousetrap ")>-1)b=!0;else for(var e=0;e<h.length;e++)if(h[e]===d){b=!1;break}}b&&p(g.apply(this,arguments))}}"string"==typeof d?Mousetrap.bind(a,p(c),d):Mousetrap.bind(a,p(c));var n=new i(a,b,c,d,e,f);return r.hotkeys.push(n),n}function m(a){var b=a instanceof i?a.combo:a;if(Mousetrap.unbind(b),angular.isArray(b)){for(var c=!0,d=b.length;d--;)c=m(b[d])&&c;return c}var e=r.hotkeys.indexOf(n(b));return e>-1?(r.hotkeys[e].combo.length>1?r.hotkeys[e].combo.splice(r.hotkeys[e].combo.indexOf(b),1):(angular.forEach(s,function(a){var b=a.indexOf(r.hotkeys[e]);-1!==b&&a.splice(b,1)}),r.hotkeys.splice(e,1)),!0):!1}function n(a){if(!a)return r.hotkeys;for(var b,c=0;c<r.hotkeys.length;c++)if(b=r.hotkeys[c],b.combo.indexOf(a)>-1)return b;return!1}function o(a){return a.$id in s||(s[a.$id]=[],a.$on("$destroy",function(){for(var b=s[a.$id].length;b--;)m(s[a.$id].pop())})),{add:function(b){var c;return c=arguments.length>1?l.apply(this,arguments):l(b),s[a.$id].push(c),this}}}function p(a){return function(c,d){if(a instanceof Array){var e=a[0],f=a[1];a=function(a){f.scope.$eval(e)}}b.$apply(function(){a(c,n(d))})}}var q=!0;Mousetrap.prototype.stopCallback=function(a,b){return q?(" "+b.className+" ").indexOf(" mousetrap ")>-1?!1:b.contentEditable&&"true"==b.contentEditable:!0},i.prototype.format=function(){if(null===this._formated){for(var a=this.combo[0],b=a.split(/[\s]/),c=0;c<b.length;c++)b[c]=h(b[c]);this._formated=b}return this._formated};var r=b.$new();r.hotkeys=[],r.helpVisible=!1,r.title=this.templateTitle,r.header=this.templateHeader,r.footer=this.templateFooter,r.toggleCheatSheet=k;var s={};if(this.useNgRoute&&b.$on("$routeChangeSuccess",function(a,b){j(),b&&b.hotkeys&&angular.forEach(b.hotkeys,function(a){var c=a[2];("string"==typeof c||c instanceof String)&&(a[2]=[c,b]),a[5]=!1,l.apply(this,a)})}),this.includeCheatSheet){var t=e[0],u=a[0],v=angular.element(this.template);l(this.cheatSheetHotkey,this.cheatSheetDescription,k),(u===t||u===t.documentElement)&&(u=t.body),angular.element(u).append(c(v)(r))}var w=!1,x={add:l,del:m,get:n,bindTo:o,template:this.template,toggleCheatSheet:k,includeCheatSheet:this.includeCheatSheet,cheatSheetHotkey:this.cheatSheetHotkey,cheatSheetDescription:this.cheatSheetDescription,useNgRoute:this.useNgRoute,purgeHotkeys:j,templateTitle:this.templateTitle,pause:f,unpause:g};return x}]}]).directive("hotkey",["hotkeys",function(a){return{restrict:"A",link:function(b,c,d){var e,f=[];angular.forEach(b.$eval(d.hotkey),function(b,c){e="string"==typeof d.hotkeyAllowIn?d.hotkeyAllowIn.split(/[\s,]+/):[],f.push(c),a.add({combo:c,description:d.hotkeyDescription,callback:b,action:d.hotkeyAction,allowIn:e})}),c.bind("$destroy",function(){angular.forEach(f,a.del)})}}}]).run(["hotkeys",function(a){}])}(),function(a,b,c){function d(a,b,c){return a.addEventListener?void a.addEventListener(b,c,!1):void a.attachEvent("on"+b,c)}function e(a){if("keypress"==a.type){var b=String.fromCharCode(a.which);return a.shiftKey||(b=b.toLowerCase()),b}return r[a.which]?r[a.which]:s[a.which]?s[a.which]:String.fromCharCode(a.which).toLowerCase()}function f(a,b){return a.sort().join(",")===b.sort().join(",")}function g(a){var b=[];return a.shiftKey&&b.push("shift"),a.altKey&&b.push("alt"),a.ctrlKey&&b.push("ctrl"),a.metaKey&&b.push("meta"),b}function h(a){return a.preventDefault?void a.preventDefault():void(a.returnValue=!1)}function i(a){return a.stopPropagation?void a.stopPropagation():void(a.cancelBubble=!0)}function j(a){return"shift"==a||"ctrl"==a||"alt"==a||"meta"==a}function k(){if(!q){q={};for(var a in r)a>95&&112>a||r.hasOwnProperty(a)&&(q[r[a]]=a)}return q}function l(a,b,c){return c||(c=k()[a]?"keydown":"keypress"),"keypress"==c&&b.length&&(c="keydown"),c}function m(a){return"+"===a?["+"]:(a=a.replace(/\+{2}/g,"+plus"),a.split("+"))}function n(a,b){var c,d,e,f=[];for(c=m(a),e=0;e<c.length;++e)d=c[e],u[d]&&(d=u[d]),b&&"keypress"!=b&&t[d]&&(d=t[d],f.push("shift")),j(d)&&f.push(d);return b=l(d,f,b),{key:d,modifiers:f,action:b}}function o(a,c){return a===b?!1:a===c?!0:o(a.parentNode,c)}function p(a){function c(a){a=a||{};var b,c=!1;for(b in u)a[b]?c=!0:u[b]=0;c||(x=!1)}function k(a,b,c,d,e,g){var h,i,k=[],l=c.type;if(!s._callbacks[a])return[];for("keyup"==l&&j(a)&&(b=[a]),h=0;h<s._callbacks[a].length;++h)if(i=s._callbacks[a][h],(d||!i.seq||u[i.seq]==i.level)&&l==i.action&&("keypress"==l&&!c.metaKey&&!c.ctrlKey||f(b,i.modifiers))){var m=!d&&i.combo==e,n=d&&i.seq==d&&i.level==g;(m||n)&&s._callbacks[a].splice(h,1),k.push(i)}return k}function l(a,b,c,d){s.stopCallback(b,b.target||b.srcElement,c,d)||a(b,c)===!1&&(h(b),i(b))}function m(a){"number"!=typeof a.which&&(a.which=a.keyCode);var b=e(a);if(b)return"keyup"==a.type&&v===b?void(v=!1):void s.handleKey(b,g(a),a)}function o(){clearTimeout(t),t=setTimeout(c,1e3)}function q(a,b,d,f){function g(b){return function(){x=b,++u[a],o()}}function h(b){l(d,b,a),"keyup"!==f&&(v=e(b)),setTimeout(c,10)}u[a]=0;for(var i=0;i<b.length;++i){var j=i+1===b.length,k=j?h:g(f||n(b[i+1]).action);r(b[i],k,f,a,i)}}function r(a,b,c,d,e){s._directMap[a+":"+c]=b,a=a.replace(/\s+/g," ");var f,g=a.split(" ");return g.length>1?void q(a,g,b,c):(f=n(a,c),s._callbacks[f.key]=s._callbacks[f.key]||[],k(f.key,f.modifiers,{type:f.action},d,a,e),void s._callbacks[f.key][d?"unshift":"push"]({callback:b,modifiers:f.modifiers,action:f.action,seq:d,level:e,combo:a}))}var s=this;if(a=a||b,!(s instanceof p))return new p(a);s.target=a,s._callbacks={},s._directMap={};var t,u={},v=!1,w=!1,x=!1;s._handleKey=function(a,b,d){var e,f=k(a,b,d),g={},h=0,i=!1;for(e=0;e<f.length;++e)f[e].seq&&(h=Math.max(h,f[e].level));for(e=0;e<f.length;++e)if(f[e].seq){if(f[e].level!=h)continue;i=!0,g[f[e].seq]=1,l(f[e].callback,d,f[e].combo,f[e].seq)}else i||l(f[e].callback,d,f[e].combo);var m="keypress"==d.type&&w;d.type!=x||j(a)||m||c(g),w=i&&"keydown"==d.type},s._bindMultiple=function(a,b,c){for(var d=0;d<a.length;++d)r(a[d],b,c)},d(a,"keypress",m),d(a,"keydown",m),d(a,"keyup",m)}for(var q,r={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},s={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},t={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},u={option:"alt",command:"meta","return":"enter",escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},v=1;20>v;++v)r[111+v]="f"+v;for(v=0;9>=v;++v)r[v+96]=v;p.prototype.bind=function(a,b,c){var d=this;return a=a instanceof Array?a:[a],d._bindMultiple.call(d,a,b,c),d},p.prototype.unbind=function(a,b){var c=this;return c.bind.call(c,a,function(){},b)},p.prototype.trigger=function(a,b){var c=this;return c._directMap[a+":"+b]&&c._directMap[a+":"+b]({},a),c},p.prototype.reset=function(){var a=this;return a._callbacks={},a._directMap={},a},p.prototype.stopCallback=function(a,b){var c=this;return(" "+b.className+" ").indexOf(" mousetrap ")>-1?!1:o(b,c.target)?!1:"INPUT"==b.tagName||"SELECT"==b.tagName||"TEXTAREA"==b.tagName||b.isContentEditable},p.prototype.handleKey=function(){var a=this;return a._handleKey.apply(a,arguments)},p.init=function(){var a=p(b);for(var c in a)"_"!==c.charAt(0)&&(p[c]=function(b){return function(){return a[b].apply(a,arguments)}}(c))},p.init(),a.Mousetrap=p,"undefined"!=typeof module&&module.exports&&(module.exports=p),"function"=="function"&&__webpack_require__(5)&&!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return p}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))}(window,document);

	/*** EXPORTS FROM exports-loader ***/
	module.exports = angular;

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(78);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../raw-loader/index.js!./../../exports-loader/index.js?angular!./hotkeys.min.css", function() {
				var newContent = require("!!./../../raw-loader/index.js!./../../exports-loader/index.js?angular!./hotkeys.min.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 78 */
/***/ function(module, exports) {

	module.exports = ".cfp-hotkeys,.cfp-hotkeys-container{width:100%;height:100%}.cfp-hotkeys-container{display:table!important;position:fixed;top:0;left:0;color:#333;font-size:1em;background-color:rgba(255,255,255,.9)}.cfp-content,.cfp-hotkeys{display:table-cell;vertical-align:middle}.cfp-hotkeys-container.fade{z-index:-1024;visibility:hidden;opacity:0;-webkit-transition:opacity .15s linear;-moz-transition:opacity .15s linear;-o-transition:opacity .15s linear;transition:opacity .15s linear}.cfp-hotkeys-container.fade.in{z-index:10002;visibility:visible;opacity:1}.cfp-hotkeys-title{font-weight:700;text-align:center;font-size:1.2em}.cfp-hotkeys table{margin:auto;color:#333}.cfp-hotkeys-keys{padding:5px;text-align:right}.cfp-hotkeys-key{display:inline-block;color:#fff;background-color:#333;border:1px solid #333;border-radius:5px;text-align:center;margin-right:5px;box-shadow:inset 0 1px 0 #666,0 1px 0 #bbb;padding:5px 9px;font-size:1em}.cfp-hotkeys-text{padding-left:10px;font-size:1em}.cfp-hotkeys-close{position:fixed;top:20px;right:20px;font-size:2em;font-weight:700;padding:5px 10px;border:1px solid #ddd;border-radius:5px;min-height:45px;min-width:45px;text-align:center}.cfp-hotkeys-close:hover{background-color:#fff;cursor:pointer}@media all and (max-width:500px){.cfp-hotkeys{font-size:.8em}}@media all and (min-width:750px){.cfp-hotkeys{font-size:1.2em}}\n\n/*** EXPORTS FROM exports-loader ***/\nmodule.exports = angular;"

/***/ },
/* 79 */
/***/ function(module, exports) {

	var path = 'v4p/v4p.tpl.html';
	var html = "<section id=\"speakers-confitura\" ng-controller=\"VotingController as voting\">\n    <div class=\"row-fluid\">\n        <div ng-if=\"voting.notStarted()\" class=\"bg-white row-1080 text-center register-excerpt\">\n            <page name=\"v4p-start\"></page>\n            <div>\n                <a class=\"btn btn-lg btn-primary btn-pink\" href=\"\" role=\"button\" ng-click=\"voting.start()\">Lets Start!</a>\n            </div>\n        </div>\n\n    </div>\n    <div class=\"row-fluid\" ng-if=\"voting.started()\">\n\n        <div class=\"bg-white row-1080 text-center register-excerpt\" ng-if=\"!voting.isActive()\">\n            <page name=\"v4p-end\"></page>\n        </div>\n        <div class=\"col-lg-12 pt150 pb150 vote-slider-cnt\" ng-if=\"voting.isActive()\">\n            <h3>{{voting.currentIdx()}}/{{voting.votes.length}}</h3>\n            <div class=\"row-1140 vote-slider\">\n                <div class=\"vote-slide\" ng-repeat=\"vote in voting.votes\">\n                    <div class=\"col-lg-5\">\n                        <span class=\"img-speaker\" ng-repeat=\"speaker in vote.presentation.speakers\">\n                            <img class=\"img-responsive margin-auto clickable\"\n                                 data-lazy=\"{{speaker.photo}}\"\n                                 ng-class=\"{empty: speaker.photo == ''}\"\n                                 ng-click=\"voting.showSpeaker(speaker)\"\n                            />\n                            <div class=\"mcci-header ta-leftperson-name vote-person\">{{speaker.fullName}}</div>\n                        </span>\n\n                    </div>\n                    <div class=\"col-lg-7 vote-info\">\n\t\t\t\t\t\t\t\t<span class=\"social-speaker\">\n\t\t\t\t\t\t\t\t\t<a class=\"vote-mark\"\n                                       ng-repeat=\"rate in voting.rating\"\n                                       ng-class=\"{selected: rate == vote.vote}\"\n                                       ng-click=\"voting.vote(rate)\">{{rate}}</a>\n\t\t\t\t\t\t\t\t</span>\n                        <div class=\"mcci-header ta-left pt30 vote-title\"><h3>{{vote.presentation.title}}</h3></div>\n\n                        <div class=\"mcci-header ta-left description-type\">\n                            <span class=\"selected\" ng-click=\"voting.showInfo('short')\"\n                                  ng-class=\"{selected: voting.configuration.info == 'short'}\">TL;DR</span> | <span\n                                ng-click=\"voting.showInfo('full')\" ng-class=\"{selected: voting.configuration.info == 'full'}\">Full</span>\n                        </div>\n\n                        <div class=\"mcci-content ta-left\" ng-bind-html=\"voting.getInfoFor(vote.presentation)\">\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</section>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(81);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?root=..!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/less-loader/index.js!./v4p.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?root=..!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/less-loader/index.js!./v4p.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports


	// module
	exports.push([module.id, ".vote-slider {\n  position: relative;\n  display: block;\n  max-width: 1140px;\n  margin: 0 auto !important;\n}\n.vote-title h3 {\n  text-align: left;\n}\n.vote-person {\n  font-size: 2.5rem;\n  padding-top: 30px;\n  padding-bottom: 30px;\n  font-family: 'NeuzeitGro-Bol', Verdana, Tahoma, sans-serif;\n  /* NeuzeitGro-Bol */\n  text-align: center;\n}\n.social-content {\n  display: block;\n  text-align: center;\n  padding: 30px 0;\n  font-family: 'NeuzeitGro-Bol', Verdana, Tahoma, sans-serif;\n  /* NeuzeitGro-Bol */\n  font-size: 24px;\n  color: #ff0040;\n}\n.social-speaker a.vote-mark,\n.social-speaker a.vote-mark:link,\n.social-speaker a.vote-mark:active,\n.social-speaker a.vote-mark:visited,\n.social-speaker a.vote-mark:hover {\n  display: inline-block;\n  width: 60px;\n  height: 60px;\n  background: #e2e2e2;\n  color: #000000;\n  font-family: 'NeuzeitGro-Bol', Verdana, Tahoma, sans-serif;\n  /* NeuzeitGro-Bol */\n  margin: 0 15px;\n  font-size: 2rem;\n  line-height: 60px;\n}\n.social-speaker a.vote-mark:hover,\n.social-speaker a.vote-mark.selected {\n  color: #ffffff;\n  background: #ff0040;\n}\n.img-speaker img {\n  width: 250px;\n  margin: auto;\n}\n.img-speaker img.empty {\n  background: url(" + __webpack_require__(82) + ");\n  height: 250px;\n  background-size: contain;\n}\ndiv.vote-next,\ndiv.vote-prev {\n  width: 28px;\n  height: 44px;\n  background-size: cover;\n  display: block;\n}\ndiv.vote-next:before,\ndiv.vote-prev:before {\n  display: none;\n}\ndiv.vote-next,\ndiv.vote-next:hover {\n  background: url(" + __webpack_require__(27) + ") no-repeat;\n}\ndiv.vote-prev,\ndiv.vote-prev:hover {\n  background: url(" + __webpack_require__(26) + ") no-repeat;\n}\n@media screen and (max-width: 1280px) {\n  .vote-prev,\n  .vote-next {\n    display: none !important;\n  }\n}\n.vote-slider-cnt {\n  background: #ffffff !important;\n}\n.vote-slide {\n  height: auto !important;\n}\n.social-speaker a:link,\n.social-speaker a:active,\n.social-speaker a:visited,\n.social-speaker a:hover {\n  border: none;\n  outline: none;\n  font-size: 24px;\n  color: #e4d7c6;\n  text-decoration: none;\n}\n.social-speaker {\n  display: block;\n  text-align: center;\n}\n.social-speaker [class*=\"fa fa-\"] {\n  background-color: #b9ad9f;\n  border-radius: 30px !important;\n  -webkit-border-radius: 30px !important;\n  -moz-border-radius: 30px !important;\n  display: inline-block;\n  height: 30px;\n  line-height: 30px;\n  width: 30px;\n  font-size: 15px;\n  text-align: center;\n  margin: 20px 0;\n}\n.social-speaker [class*=\"fa fa-\"]:hover {\n  background-color: #ff0040;\n}\n.slick-slide,\n.slide {\n  margin: 0;\n}\n.slide {\n  position: relative;\n  width: 375px;\n  height: 375px;\n}\n@media screen and (max-width: 768px) {\n  #speakers-confitura .vote-info {\n    padding: 20px;\n  }\n}\n#speakers-confitura .slick-prev,\n#speakers-confitura .slick-next {\n  top: 200px;\n}\n#speakers-confitura .slick-prev:before,\n#speakers-confitura .slick-next:before {\n  color: #000000;\n}\n.slick-arrow {\n  width: 28px;\n  height: 44px;\n}\n.description-type {\n  font-size: 2rem;\n  font-weight: bold;\n  color: lightgrey;\n}\n@media screen and (max-width: 768px) {\n  .description-type {\n    text-align: center !important;\n  }\n}\n.description-type span {\n  cursor: pointer;\n}\n.description-type span.selected,\n.description-type span:hover {\n  color: #ff0040;\n}\n.clickable {\n  cursor: pointer;\n}\n", ""]);

	// exports


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "75cfddffcef0911f354e1783ba351d9e.png";

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
	     _ _      _       _
	 ___| (_) ___| | __  (_)___
	/ __| | |/ __| |/ /  | / __|
	\__ \ | | (__|   < _ | \__ \
	|___/_|_|\___|_|\_(_)/ |___/
	                   |__/

	 Version: 1.6.0
	  Author: Ken Wheeler
	 Website: http://kenwheeler.github.io
	    Docs: http://kenwheeler.github.io/slick
	    Repo: http://github.com/kenwheeler/slick
	  Issues: http://github.com/kenwheeler/slick/issues

	 */
	!function(a){"use strict"; true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4)], __WEBPACK_AMD_DEFINE_FACTORY__ = (a), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"undefined"!=typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function c(c,d){var f,e=this;e.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(c),appendDots:a(c),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(b,c){return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},e.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.focussed=!1,e.interrupted=!1,e.hidden="hidden",e.paused=!0,e.positionProp=null,e.respondTo=null,e.rowCount=1,e.shouldClick=!0,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.visibilityChange="visibilitychange",e.windowWidth=0,e.windowTimer=null,f=a(c).data("slick")||{},e.options=a.extend({},e.defaults,d,f),e.currentSlide=e.options.initialSlide,e.originalSettings=e.options,"undefined"!=typeof document.mozHidden?(e.hidden="mozHidden",e.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(e.hidden="webkitHidden",e.visibilityChange="webkitvisibilitychange"),e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.changeSlide=a.proxy(e.changeSlide,e),e.clickHandler=a.proxy(e.clickHandler,e),e.selectHandler=a.proxy(e.selectHandler,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.instanceUid=b++,e.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,e.registerBreakpoints(),e.init(!0)}var b=0;return c}(),b.prototype.activateADA=function(){var a=this;a.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},b.prototype.addSlide=b.prototype.slickAdd=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({height:b},a.options.speed)}},b.prototype.animateSlide=function(b,c){var d={},e=this;e.animateHeight(),e.options.rtl===!0&&e.options.vertical===!1&&(b=-b),e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?(e.options.rtl===!0&&(e.currentLeft=-e.currentLeft),a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){a=Math.ceil(a),e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}})):(e.applyTransition(),b=Math.ceil(b),e.options.vertical===!1?d[e.animType]="translate3d("+b+"px, 0px, 0px)":d[e.animType]="translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.getNavTarget=function(){var b=this,c=b.options.asNavFor;return c&&null!==c&&(c=a(c).not(b.$slider)),c},b.prototype.asNavFor=function(b){var c=this,d=c.getNavTarget();null!==d&&"object"==typeof d&&d.each(function(){var c=a(this).slick("getSlick");c.unslicked||c.slideHandler(b,!0)})},b.prototype.applyTransition=function(a){var b=this,c={};b.options.fade===!1?c[b.transitionType]=b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:c[b.transitionType]="opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayClear(),a.slideCount>a.options.slidesToShow&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this,b=a.currentSlide+a.options.slidesToScroll;a.paused||a.interrupted||a.focussed||(a.options.infinite===!1&&(1===a.direction&&a.currentSlide+1===a.slideCount-1?a.direction=0:0===a.direction&&(b=a.currentSlide-a.options.slidesToScroll,a.currentSlide-1===0&&(a.direction=1))),a.slideHandler(b))},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&(b.$prevArrow=a(b.options.prevArrow).addClass("slick-arrow"),b.$nextArrow=a(b.options.nextArrow).addClass("slick-arrow"),b.slideCount>b.options.slidesToShow?(b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.prependTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},b.prototype.buildDots=function(){var c,d,b=this;if(b.options.dots===!0&&b.slideCount>b.options.slidesToShow){for(b.$slider.addClass("slick-dotted"),d=a("<ul />").addClass(b.options.dotsClass),c=0;c<=b.getDotCount();c+=1)d.append(a("<li />").append(b.options.customPaging.call(this,b,c)));b.$dots=d.appendTo(b.options.appendDots),b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(b.options.slide+":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("data-slick-index",b).data("originalStyling",a(c).attr("style")||"")}),b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),(b.options.centerMode===!0||b.options.swipeToSlide===!0)&&(b.options.slidesToScroll=1),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.buildRows=function(){var b,c,d,e,f,g,h,a=this;if(e=document.createDocumentFragment(),g=a.$slider.children(),a.options.rows>1){for(h=a.options.slidesPerRow*a.options.rows,f=Math.ceil(g.length/h),b=0;f>b;b++){var i=document.createElement("div");for(c=0;c<a.options.rows;c++){var j=document.createElement("div");for(d=0;d<a.options.slidesPerRow;d++){var k=b*h+(c*a.options.slidesPerRow+d);g.get(k)&&j.appendChild(g.get(k))}i.appendChild(j)}e.appendChild(i)}a.$slider.empty().append(e),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},b.prototype.checkResponsive=function(b,c){var e,f,g,d=this,h=!1,i=d.$slider.width(),j=window.innerWidth||a(window).width();if("window"===d.respondTo?g=j:"slider"===d.respondTo?g=i:"min"===d.respondTo&&(g=Math.min(j,i)),d.options.responsive&&d.options.responsive.length&&null!==d.options.responsive){f=null;for(e in d.breakpoints)d.breakpoints.hasOwnProperty(e)&&(d.originalSettings.mobileFirst===!1?g<d.breakpoints[e]&&(f=d.breakpoints[e]):g>d.breakpoints[e]&&(f=d.breakpoints[e]));null!==f?null!==d.activeBreakpoint?(f!==d.activeBreakpoint||c)&&(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):null!==d.activeBreakpoint&&(d.activeBreakpoint=null,d.options=d.originalSettings,b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b),h=f),b||h===!1||d.$slider.trigger("breakpoint",[d,h])}},b.prototype.changeSlide=function(b,c){var f,g,h,d=this,e=a(b.currentTarget);switch(e.is("a")&&b.preventDefault(),e.is("li")||(e=e.closest("li")),h=d.slideCount%d.options.slidesToScroll!==0,f=h?0:(d.slideCount-d.currentSlide)%d.options.slidesToScroll,b.data.message){case"previous":g=0===f?d.options.slidesToScroll:d.options.slidesToShow-f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide-g,!1,c);break;case"next":g=0===f?d.options.slidesToScroll:f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide+g,!1,c);break;case"index":var i=0===b.data.index?0:b.data.index||e.index()*d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i),!1,c),e.children().trigger("focus");break;default:return}},b.prototype.checkNavigable=function(a){var c,d,b=this;if(c=b.getNavigableIndexes(),d=0,a>c[c.length-1])a=c[c.length-1];else for(var e in c){if(a<c[e]){a=d;break}d=c[e]}return a},b.prototype.cleanUpEvents=function(){var b=this;b.options.dots&&null!==b.$dots&&a("li",b.$dots).off("click.slick",b.changeSlide).off("mouseenter.slick",a.proxy(b.interrupt,b,!0)).off("mouseleave.slick",a.proxy(b.interrupt,b,!1)),b.$slider.off("focus.slick blur.slick"),b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow&&b.$prevArrow.off("click.slick",b.changeSlide),b.$nextArrow&&b.$nextArrow.off("click.slick",b.changeSlide)),b.$list.off("touchstart.slick mousedown.slick",b.swipeHandler),b.$list.off("touchmove.slick mousemove.slick",b.swipeHandler),b.$list.off("touchend.slick mouseup.slick",b.swipeHandler),b.$list.off("touchcancel.slick mouseleave.slick",b.swipeHandler),b.$list.off("click.slick",b.clickHandler),a(document).off(b.visibilityChange,b.visibility),b.cleanUpSlideEvents(),b.options.accessibility===!0&&b.$list.off("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().off("click.slick",b.selectHandler),a(window).off("orientationchange.slick.slick-"+b.instanceUid,b.orientationChange),a(window).off("resize.slick.slick-"+b.instanceUid,b.resize),a("[draggable!=true]",b.$slideTrack).off("dragstart",b.preventDefault),a(window).off("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).off("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.cleanUpSlideEvents=function(){var b=this;b.$list.off("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.off("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.cleanUpRows=function(){var b,a=this;a.options.rows>1&&(b=a.$slides.children().children(),b.removeAttr("style"),a.$slider.empty().append(b))},b.prototype.clickHandler=function(a){var b=this;b.shouldClick===!1&&(a.stopImmediatePropagation(),a.stopPropagation(),a.preventDefault())},b.prototype.destroy=function(b){var c=this;c.autoPlayClear(),c.touchObject={},c.cleanUpEvents(),a(".slick-cloned",c.$slider).detach(),c.$dots&&c.$dots.remove(),c.$prevArrow&&c.$prevArrow.length&&(c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.prevArrow)&&c.$prevArrow.remove()),c.$nextArrow&&c.$nextArrow.length&&(c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.nextArrow)&&c.$nextArrow.remove()),c.$slides&&(c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){a(this).attr("style",a(this).data("originalStyling"))}),c.$slideTrack.children(this.options.slide).detach(),c.$slideTrack.detach(),c.$list.detach(),c.$slider.append(c.$slides)),c.cleanUpRows(),c.$slider.removeClass("slick-slider"),c.$slider.removeClass("slick-initialized"),c.$slider.removeClass("slick-dotted"),c.unslicked=!0,b||c.$slider.trigger("destroy",[c])},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;c.cssTransitions===!1?(c.$slides.eq(a).css({zIndex:c.options.zIndex}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:c.options.zIndex}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.fadeSlideOut=function(a){var b=this;b.cssTransitions===!1?b.$slides.eq(a).animate({opacity:0,zIndex:b.options.zIndex-2},b.options.speed,b.options.easing):(b.applyTransition(a),b.$slides.eq(a).css({opacity:0,zIndex:b.options.zIndex-2}))},b.prototype.filterSlides=b.prototype.slickFilter=function(a){var b=this;null!==a&&(b.$slidesCache=b.$slides,b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.focusHandler=function(){var b=this;b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*:not(.slick-arrow)",function(c){c.stopImmediatePropagation();var d=a(this);setTimeout(function(){b.options.pauseOnFocus&&(b.focussed=d.is(":focus"),b.autoPlay())},0)})},b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var a=this,b=0,c=0,d=0;if(a.options.infinite===!0)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else if(a.options.centerMode===!0)d=a.slideCount;else if(a.options.asNavFor)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else d=1+Math.ceil((a.slideCount-a.options.slidesToShow)/a.options.slidesToScroll);return d-1},b.prototype.getLeft=function(a){var c,d,f,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(!0),b.options.infinite===!0?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=b.slideWidth*b.options.slidesToShow*-1,e=d*b.options.slidesToShow*-1),b.slideCount%b.options.slidesToScroll!==0&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(a>b.slideCount?(b.slideOffset=(b.options.slidesToShow-(a-b.slideCount))*b.slideWidth*-1,e=(b.options.slidesToShow-(a-b.slideCount))*d*-1):(b.slideOffset=b.slideCount%b.options.slidesToScroll*b.slideWidth*-1,e=b.slideCount%b.options.slidesToScroll*d*-1))):a+b.options.slidesToShow>b.slideCount&&(b.slideOffset=(a+b.options.slidesToShow-b.slideCount)*b.slideWidth,e=(a+b.options.slidesToShow-b.slideCount)*d),b.slideCount<=b.options.slidesToShow&&(b.slideOffset=0,e=0),b.options.centerMode===!0&&b.options.infinite===!0?b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth:b.options.centerMode===!0&&(b.slideOffset=0,b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)),c=b.options.vertical===!1?a*b.slideWidth*-1+b.slideOffset:a*d*-1+e,b.options.variableWidth===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,b.options.centerMode===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow+1),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,c+=(b.$list.width()-f.outerWidth())/2)),c},b.prototype.getOption=b.prototype.slickGetOption=function(a){var b=this;return b.options[a]},b.prototype.getNavigableIndexes=function(){var e,a=this,b=0,c=0,d=[];for(a.options.infinite===!1?e=a.slideCount:(b=-1*a.options.slidesToScroll,c=-1*a.options.slidesToScroll,e=2*a.slideCount);e>b;)d.push(b),b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d},b.prototype.getSlick=function(){return this},b.prototype.getSlideCount=function(){var c,d,e,b=this;return e=b.options.centerMode===!0?b.slideWidth*Math.floor(b.options.slidesToShow/2):0,b.options.swipeToSlide===!0?(b.$slideTrack.find(".slick-slide").each(function(c,f){return f.offsetLeft-e+a(f).outerWidth()/2>-1*b.swipeLeft?(d=f,!1):void 0}),c=Math.abs(a(d).attr("data-slick-index")-b.currentSlide)||1):b.options.slidesToScroll},b.prototype.goTo=b.prototype.slickGoTo=function(a,b){var c=this;c.changeSlide({data:{message:"index",index:parseInt(a)}},b)},b.prototype.init=function(b){var c=this;a(c.$slider).hasClass("slick-initialized")||(a(c.$slider).addClass("slick-initialized"),c.buildRows(),c.buildOut(),c.setProps(),c.startLoad(),c.loadSlider(),c.initializeEvents(),c.updateArrows(),c.updateDots(),c.checkResponsive(!0),c.focusHandler()),b&&c.$slider.trigger("init",[c]),c.options.accessibility===!0&&c.initADA(),c.options.autoplay&&(c.paused=!1,c.autoPlay())},b.prototype.initADA=function(){var b=this;b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),b.$slideTrack.attr("role","listbox"),b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c){a(this).attr({role:"option","aria-describedby":"slick-slide"+b.instanceUid+c})}),null!==b.$dots&&b.$dots.attr("role","tablist").find("li").each(function(c){a(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+b.instanceUid+c,id:"slick-slide"+b.instanceUid+c})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),b.activateADA()},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.off("click.slick").on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&a("li",b.$dots).on("mouseenter.slick",a.proxy(b.interrupt,b,!0)).on("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.initSlideEvents=function(){var b=this;b.options.pauseOnHover&&(b.$list.on("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.on("mouseleave.slick",a.proxy(b.interrupt,b,!1)))},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.initSlideEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.$list.on("click.slick",b.clickHandler),a(document).on(b.visibilityChange,a.proxy(b.visibility,b)),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,a.proxy(b.orientationChange,b)),a(window).on("resize.slick.slick-"+b.instanceUid,a.proxy(b.resize,b)),a("[draggable!=true]",b.$slideTrack).on("dragstart",b.preventDefault),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show()},b.prototype.keyHandler=function(a){var b=this;a.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===a.keyCode&&b.options.accessibility===!0?b.changeSlide({data:{message:b.options.rtl===!0?"next":"previous"}}):39===a.keyCode&&b.options.accessibility===!0&&b.changeSlide({data:{message:b.options.rtl===!0?"previous":"next"}}))},b.prototype.lazyLoad=function(){function g(c){a("img[data-lazy]",c).each(function(){var c=a(this),d=a(this).attr("data-lazy"),e=document.createElement("img");e.onload=function(){c.animate({opacity:0},100,function(){c.attr("src",d).animate({opacity:1},200,function(){c.removeAttr("data-lazy").removeClass("slick-loading")}),b.$slider.trigger("lazyLoaded",[b,c,d])})},e.onerror=function(){c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),b.$slider.trigger("lazyLoadError",[b,c,d])},e.src=d})}var c,d,e,f,b=this;b.options.centerMode===!0?b.options.infinite===!0?(e=b.currentSlide+(b.options.slidesToShow/2+1),f=e+b.options.slidesToShow+2):(e=Math.max(0,b.currentSlide-(b.options.slidesToShow/2+1)),f=2+(b.options.slidesToShow/2+1)+b.currentSlide):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=Math.ceil(e+b.options.slidesToShow),b.options.fade===!0&&(e>0&&e--,f<=b.slideCount&&f++)),c=b.$slider.find(".slick-slide").slice(e,f),g(c),b.slideCount<=b.options.slidesToShow?(d=b.$slider.find(".slick-slide"),g(d)):b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),g(d)):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),g(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.next=b.prototype.slickNext=function(){var a=this;a.changeSlide({data:{message:"next"}})},b.prototype.orientationChange=function(){var a=this;a.checkResponsive(),a.setPosition()},b.prototype.pause=b.prototype.slickPause=function(){var a=this;a.autoPlayClear(),a.paused=!0},b.prototype.play=b.prototype.slickPlay=function(){var a=this;a.autoPlay(),a.options.autoplay=!0,a.paused=!1,a.focussed=!1,a.interrupted=!1},b.prototype.postSlide=function(a){var b=this;b.unslicked||(b.$slider.trigger("afterChange",[b,a]),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay&&b.autoPlay(),b.options.accessibility===!0&&b.initADA())},b.prototype.prev=b.prototype.slickPrev=function(){var a=this;a.changeSlide({data:{message:"previous"}})},b.prototype.preventDefault=function(a){a.preventDefault()},b.prototype.progressiveLazyLoad=function(b){b=b||1;var e,f,g,c=this,d=a("img[data-lazy]",c.$slider);d.length?(e=d.first(),f=e.attr("data-lazy"),g=document.createElement("img"),g.onload=function(){e.attr("src",f).removeAttr("data-lazy").removeClass("slick-loading"),c.options.adaptiveHeight===!0&&c.setPosition(),c.$slider.trigger("lazyLoaded",[c,e,f]),c.progressiveLazyLoad()},g.onerror=function(){3>b?setTimeout(function(){c.progressiveLazyLoad(b+1)},500):(e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),c.$slider.trigger("lazyLoadError",[c,e,f]),c.progressiveLazyLoad())},g.src=f):c.$slider.trigger("allImagesLoaded",[c])},b.prototype.refresh=function(b){var d,e,c=this;e=c.slideCount-c.options.slidesToShow,!c.options.infinite&&c.currentSlide>e&&(c.currentSlide=e),c.slideCount<=c.options.slidesToShow&&(c.currentSlide=0),d=c.currentSlide,c.destroy(!0),a.extend(c,c.initials,{currentSlide:d}),c.init(),b||c.changeSlide({data:{message:"index",index:d}},!1)},b.prototype.registerBreakpoints=function(){var c,d,e,b=this,f=b.options.responsive||null;if("array"===a.type(f)&&f.length){b.respondTo=b.options.respondTo||"window";for(c in f)if(e=b.breakpoints.length-1,d=f[c].breakpoint,f.hasOwnProperty(c)){for(;e>=0;)b.breakpoints[e]&&b.breakpoints[e]===d&&b.breakpoints.splice(e,1),e--;b.breakpoints.push(d),b.breakpointSettings[d]=f[c].settings}b.breakpoints.sort(function(a,c){return b.options.mobileFirst?a-c:c-a})}},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.slideCount<=b.options.slidesToShow&&(b.currentSlide=0),b.registerBreakpoints(),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.cleanUpSlideEvents(),b.initSlideEvents(),b.checkResponsive(!1,!0),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.setPosition(),b.focusHandler(),b.paused=!b.options.autoplay,b.autoPlay(),b.$slider.trigger("reInit",[b])},b.prototype.resize=function(){var b=this;a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.unslicked||b.setPosition()},50))},b.prototype.removeSlide=b.prototype.slickRemove=function(a,b,c){var d=this;return"boolean"==typeof a?(b=a,a=b===!0?0:d.slideCount-1):a=b===!0?--a:a,d.slideCount<1||0>a||a>d.slideCount-1?!1:(d.unload(),c===!0?d.$slideTrack.children().remove():d.$slideTrack.children(this.options.slide).eq(a).remove(),d.$slides=d.$slideTrack.children(this.options.slide),d.$slideTrack.children(this.options.slide).detach(),d.$slideTrack.append(d.$slides),d.$slidesCache=d.$slides,void d.reinit())},b.prototype.setCSS=function(a){var d,e,b=this,c={};b.options.rtl===!0&&(a=-a),d="left"==b.positionProp?Math.ceil(a)+"px":"0px",e="top"==b.positionProp?Math.ceil(a)+"px":"0px",c[b.positionProp]=a,b.transformsEnabled===!1?b.$slideTrack.css(c):(c={},b.cssTransitions===!1?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var a=this;a.options.vertical===!1?a.options.centerMode===!0&&a.$list.css({padding:"0px "+a.options.centerPadding}):(a.$list.height(a.$slides.first().outerHeight(!0)*a.options.slidesToShow),a.options.centerMode===!0&&a.$list.css({padding:a.options.centerPadding+" 0px"})),a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),a.options.vertical===!1&&a.options.variableWidth===!1?(a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length))):a.options.variableWidth===!0?a.$slideTrack.width(5e3*a.slideCount):(a.slideWidth=Math.ceil(a.listWidth),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0)*a.$slideTrack.children(".slick-slide").length)));var b=a.$slides.first().outerWidth(!0)-a.$slides.first().width();a.options.variableWidth===!1&&a.$slideTrack.children(".slick-slide").width(a.slideWidth-b)},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=b.slideWidth*d*-1,b.options.rtl===!0?a(e).css({position:"relative",right:c,top:0,zIndex:b.options.zIndex-2,opacity:0}):a(e).css({position:"relative",left:c,top:0,zIndex:b.options.zIndex-2,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:b.options.zIndex-1,opacity:1})},b.prototype.setHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height",b)}},b.prototype.setOption=b.prototype.slickSetOption=function(){var c,d,e,f,h,b=this,g=!1;if("object"===a.type(arguments[0])?(e=arguments[0],g=arguments[1],h="multiple"):"string"===a.type(arguments[0])&&(e=arguments[0],f=arguments[1],g=arguments[2],"responsive"===arguments[0]&&"array"===a.type(arguments[1])?h="responsive":"undefined"!=typeof arguments[1]&&(h="single")),"single"===h)b.options[e]=f;else if("multiple"===h)a.each(e,function(a,c){b.options[a]=c});else if("responsive"===h)for(d in f)if("array"!==a.type(b.options.responsive))b.options.responsive=[f[d]];else{for(c=b.options.responsive.length-1;c>=0;)b.options.responsive[c].breakpoint===f[d].breakpoint&&b.options.responsive.splice(c,1),c--;b.options.responsive.push(f[d])}g&&(b.unload(),b.reinit())},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.setHeight(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade(),a.$slider.trigger("setPosition",[a])},b.prototype.setProps=function(){var a=this,b=document.body.style;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),a.options.fade&&("number"==typeof a.options.zIndex?a.options.zIndex<3&&(a.options.zIndex=3):a.options.zIndex=a.defaults.zIndex),void 0!==b.OTransform&&(a.animType="OTransform",a.transformType="-o-transform",a.transitionType="OTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition",void 0===b.perspectiveProperty&&void 0===b.MozPerspective&&(a.animType=!1)),void 0!==b.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition",void 0===b.msTransform&&(a.animType=!1)),void 0!==b.transform&&a.animType!==!1&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=a.options.useTransform&&null!==a.animType&&a.animType!==!1},b.prototype.setSlideClasses=function(a){var c,d,e,f,b=this;d=b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),b.$slides.eq(a).addClass("slick-current"),b.options.centerMode===!0?(c=Math.floor(b.options.slidesToShow/2),b.options.infinite===!0&&(a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active").attr("aria-hidden","false"):(e=b.options.slidesToShow+a,
	d.slice(e-c+1,e+c+2).addClass("slick-active").attr("aria-hidden","false")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center")),b.$slides.eq(a).addClass("slick-center")):a>=0&&a<=b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):d.length<=b.options.slidesToShow?d.addClass("slick-active").attr("aria-hidden","false"):(f=b.slideCount%b.options.slidesToShow,e=b.options.infinite===!0?b.options.slidesToShow+a:a,b.options.slidesToShow==b.options.slidesToScroll&&b.slideCount-a<b.options.slidesToShow?d.slice(e-(b.options.slidesToShow-f),e+f).addClass("slick-active").attr("aria-hidden","false"):d.slice(e,e+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if(b.options.fade===!0&&(b.options.centerMode=!1),b.options.infinite===!0&&b.options.fade===!1&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=b.options.centerMode===!0?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1)d=c-1,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d-b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");for(c=0;e>c;c+=1)d=c,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d+b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.interrupt=function(a){var b=this;a||b.autoPlay(),b.interrupted=a},b.prototype.selectHandler=function(b){var c=this,d=a(b.target).is(".slick-slide")?a(b.target):a(b.target).parents(".slick-slide"),e=parseInt(d.attr("data-slick-index"));return e||(e=0),c.slideCount<=c.options.slidesToShow?(c.setSlideClasses(e),void c.asNavFor(e)):void c.slideHandler(e)},b.prototype.slideHandler=function(a,b,c){var d,e,f,g,j,h=null,i=this;return b=b||!1,i.animating===!0&&i.options.waitForAnimate===!0||i.options.fade===!0&&i.currentSlide===a||i.slideCount<=i.options.slidesToShow?void 0:(b===!1&&i.asNavFor(a),d=a,h=i.getLeft(d),g=i.getLeft(i.currentSlide),i.currentLeft=null===i.swipeLeft?g:i.swipeLeft,i.options.infinite===!1&&i.options.centerMode===!1&&(0>a||a>i.getDotCount()*i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):i.options.infinite===!1&&i.options.centerMode===!0&&(0>a||a>i.slideCount-i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):(i.options.autoplay&&clearInterval(i.autoPlayTimer),e=0>d?i.slideCount%i.options.slidesToScroll!==0?i.slideCount-i.slideCount%i.options.slidesToScroll:i.slideCount+d:d>=i.slideCount?i.slideCount%i.options.slidesToScroll!==0?0:d-i.slideCount:d,i.animating=!0,i.$slider.trigger("beforeChange",[i,i.currentSlide,e]),f=i.currentSlide,i.currentSlide=e,i.setSlideClasses(i.currentSlide),i.options.asNavFor&&(j=i.getNavTarget(),j=j.slick("getSlick"),j.slideCount<=j.options.slidesToShow&&j.setSlideClasses(i.currentSlide)),i.updateDots(),i.updateArrows(),i.options.fade===!0?(c!==!0?(i.fadeSlideOut(f),i.fadeSlide(e,function(){i.postSlide(e)})):i.postSlide(e),void i.animateHeight()):void(c!==!0?i.animateSlide(h,function(){i.postSlide(e)}):i.postSlide(e))))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?e.options.rtl===!1?"left":"right":360>=d&&d>=315?e.options.rtl===!1?"left":"right":d>=135&&225>=d?e.options.rtl===!1?"right":"left":e.options.verticalSwiping===!0?d>=35&&135>=d?"down":"up":"vertical"},b.prototype.swipeEnd=function(a){var c,d,b=this;if(b.dragging=!1,b.interrupted=!1,b.shouldClick=b.touchObject.swipeLength>10?!1:!0,void 0===b.touchObject.curX)return!1;if(b.touchObject.edgeHit===!0&&b.$slider.trigger("edge",[b,b.swipeDirection()]),b.touchObject.swipeLength>=b.touchObject.minSwipe){switch(d=b.swipeDirection()){case"left":case"down":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide+b.getSlideCount()):b.currentSlide+b.getSlideCount(),b.currentDirection=0;break;case"right":case"up":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide-b.getSlideCount()):b.currentSlide-b.getSlideCount(),b.currentDirection=1}"vertical"!=d&&(b.slideHandler(c),b.touchObject={},b.$slider.trigger("swipe",[b,d]))}else b.touchObject.startX!==b.touchObject.curX&&(b.slideHandler(b.currentSlide),b.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(b.options.swipe===!1||"ontouchend"in document&&b.options.swipe===!1||b.options.draggable===!1&&-1!==a.type.indexOf("mouse")))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,b.options.verticalSwiping===!0&&(b.touchObject.minSwipe=b.listHeight/b.options.touchThreshold),a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var d,e,f,g,h,b=this;return h=void 0!==a.originalEvent?a.originalEvent.touches:null,!b.dragging||h&&1!==h.length?!1:(d=b.getLeft(b.currentSlide),b.touchObject.curX=void 0!==h?h[0].pageX:a.clientX,b.touchObject.curY=void 0!==h?h[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),b.options.verticalSwiping===!0&&(b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curY-b.touchObject.startY,2)))),e=b.swipeDirection(),"vertical"!==e?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),g=(b.options.rtl===!1?1:-1)*(b.touchObject.curX>b.touchObject.startX?1:-1),b.options.verticalSwiping===!0&&(g=b.touchObject.curY>b.touchObject.startY?1:-1),f=b.touchObject.swipeLength,b.touchObject.edgeHit=!1,b.options.infinite===!1&&(0===b.currentSlide&&"right"===e||b.currentSlide>=b.getDotCount()&&"left"===e)&&(f=b.touchObject.swipeLength*b.options.edgeFriction,b.touchObject.edgeHit=!0),b.options.vertical===!1?b.swipeLeft=d+f*g:b.swipeLeft=d+f*(b.$list.height()/b.listWidth)*g,b.options.verticalSwiping===!0&&(b.swipeLeft=d+f*g),b.options.fade===!0||b.options.touchMove===!1?!1:b.animating===!0?(b.swipeLeft=null,!1):void b.setCSS(b.swipeLeft)):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return b.interrupted=!0,1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,void(b.dragging=!0))},b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.remove(),b.$nextArrow&&b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},b.prototype.unslick=function(a){var b=this;b.$slider.trigger("unslick",[b,a]),b.destroy()},b.prototype.updateArrows=function(){var b,a=this;b=Math.floor(a.options.slidesToShow/2),a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&!a.options.infinite&&(a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&a.options.centerMode===!1?(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-1&&a.options.centerMode===!0&&(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},b.prototype.visibility=function(){var a=this;a.options.autoplay&&(document[a.hidden]?a.interrupted=!0:a.interrupted=!1)},a.fn.slick=function(){var f,g,a=this,c=arguments[0],d=Array.prototype.slice.call(arguments,1),e=a.length;for(f=0;e>f;f++)if("object"==typeof c||"undefined"==typeof c?a[f].slick=new b(a[f],c):g=a[f].slick[c].apply(a[f].slick,d),"undefined"!=typeof g)return g;return a}});

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(85);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../raw-loader/index.js!./slick.css", function() {
				var newContent = require("!!./../../raw-loader/index.js!./slick.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 85 */
/***/ function(module, exports) {

	module.exports = "/* Slider */\n.slick-slider\n{\n    position: relative;\n\n    display: block;\n    box-sizing: border-box;\n\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n\n    -webkit-touch-callout: none;\n    -khtml-user-select: none;\n    -ms-touch-action: pan-y;\n        touch-action: pan-y;\n    -webkit-tap-highlight-color: transparent;\n}\n\n.slick-list\n{\n    position: relative;\n\n    display: block;\n    overflow: hidden;\n\n    margin: 0;\n    padding: 0;\n}\n.slick-list:focus\n{\n    outline: none;\n}\n.slick-list.dragging\n{\n    cursor: pointer;\n    cursor: hand;\n}\n\n.slick-slider .slick-track,\n.slick-slider .slick-list\n{\n    -webkit-transform: translate3d(0, 0, 0);\n       -moz-transform: translate3d(0, 0, 0);\n        -ms-transform: translate3d(0, 0, 0);\n         -o-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n}\n\n.slick-track\n{\n    position: relative;\n    top: 0;\n    left: 0;\n\n    display: block;\n}\n.slick-track:before,\n.slick-track:after\n{\n    display: table;\n\n    content: '';\n}\n.slick-track:after\n{\n    clear: both;\n}\n.slick-loading .slick-track\n{\n    visibility: hidden;\n}\n\n.slick-slide\n{\n    display: none;\n    float: left;\n\n    height: 100%;\n    min-height: 1px;\n}\n[dir='rtl'] .slick-slide\n{\n    float: right;\n}\n.slick-slide img\n{\n    display: block;\n}\n.slick-slide.slick-loading img\n{\n    display: none;\n}\n.slick-slide.dragging img\n{\n    pointer-events: none;\n}\n.slick-initialized .slick-slide\n{\n    display: block;\n}\n.slick-loading .slick-slide\n{\n    visibility: hidden;\n}\n.slick-vertical .slick-slide\n{\n    display: block;\n\n    height: auto;\n\n    border: 1px solid transparent;\n}\n.slick-arrow.slick-hidden {\n    display: none;\n}\n"

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(87);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../raw-loader/index.js!./slick-theme.css", function() {
				var newContent = require("!!./../../raw-loader/index.js!./slick-theme.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 87 */
/***/ function(module, exports) {

	module.exports = "@charset 'UTF-8';\n/* Slider */\n.slick-loading .slick-list\n{\n    background: #fff url('./ajax-loader.gif') center center no-repeat;\n}\n\n/* Icons */\n@font-face\n{\n    font-family: 'slick';\n    font-weight: normal;\n    font-style: normal;\n\n    src: url('./fonts/slick.eot');\n    src: url('./fonts/slick.eot?#iefix') format('embedded-opentype'), url('./fonts/slick.woff') format('woff'), url('./fonts/slick.ttf') format('truetype'), url('./fonts/slick.svg#slick') format('svg');\n}\n/* Arrows */\n.slick-prev,\n.slick-next\n{\n    font-size: 0;\n    line-height: 0;\n\n    position: absolute;\n    top: 50%;\n\n    display: block;\n\n    width: 20px;\n    height: 20px;\n    padding: 0;\n    -webkit-transform: translate(0, -50%);\n    -ms-transform: translate(0, -50%);\n    transform: translate(0, -50%);\n\n    cursor: pointer;\n\n    color: transparent;\n    border: none;\n    outline: none;\n    background: transparent;\n}\n.slick-prev:hover,\n.slick-prev:focus,\n.slick-next:hover,\n.slick-next:focus\n{\n    color: transparent;\n    outline: none;\n    background: transparent;\n}\n.slick-prev:hover:before,\n.slick-prev:focus:before,\n.slick-next:hover:before,\n.slick-next:focus:before\n{\n    opacity: 1;\n}\n.slick-prev.slick-disabled:before,\n.slick-next.slick-disabled:before\n{\n    opacity: .25;\n}\n\n.slick-prev:before,\n.slick-next:before\n{\n    font-family: 'slick';\n    font-size: 20px;\n    line-height: 1;\n\n    opacity: .75;\n    color: white;\n\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n.slick-prev\n{\n    left: -25px;\n}\n[dir='rtl'] .slick-prev\n{\n    right: -25px;\n    left: auto;\n}\n.slick-prev:before\n{\n    content: '←';\n}\n[dir='rtl'] .slick-prev:before\n{\n    content: '→';\n}\n\n.slick-next\n{\n    right: -25px;\n}\n[dir='rtl'] .slick-next\n{\n    right: auto;\n    left: -25px;\n}\n.slick-next:before\n{\n    content: '→';\n}\n[dir='rtl'] .slick-next:before\n{\n    content: '←';\n}\n\n/* Dots */\n.slick-dotted.slick-slider\n{\n    margin-bottom: 30px;\n}\n\n.slick-dots\n{\n    position: absolute;\n    bottom: -25px;\n\n    display: block;\n\n    width: 100%;\n    padding: 0;\n    margin: 0;\n\n    list-style: none;\n\n    text-align: center;\n}\n.slick-dots li\n{\n    position: relative;\n\n    display: inline-block;\n\n    width: 20px;\n    height: 20px;\n    margin: 0 5px;\n    padding: 0;\n\n    cursor: pointer;\n}\n.slick-dots li button\n{\n    font-size: 0;\n    line-height: 0;\n\n    display: block;\n\n    width: 20px;\n    height: 20px;\n    padding: 5px;\n\n    cursor: pointer;\n\n    color: transparent;\n    border: 0;\n    outline: none;\n    background: transparent;\n}\n.slick-dots li button:hover,\n.slick-dots li button:focus\n{\n    outline: none;\n}\n.slick-dots li button:hover:before,\n.slick-dots li button:focus:before\n{\n    opacity: 1;\n}\n.slick-dots li button:before\n{\n    font-family: 'slick';\n    font-size: 6px;\n    line-height: 20px;\n\n    position: absolute;\n    top: 0;\n    left: 0;\n\n    width: 20px;\n    height: 20px;\n\n    content: '•';\n    text-align: center;\n\n    opacity: .25;\n    color: black;\n\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n.slick-dots li.slick-active button:before\n{\n    opacity: .75;\n    color: black;\n}\n"

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(89);
	__webpack_require__(73);
	__webpack_require__(74);
	__webpack_require__(76);
	__webpack_require__(77);

	module.exports = __webpack_require__(39)
			.module('directives.person', ['ngAnimate', 'cfp.hotkeys', 'ui.bootstrap'])
			.directive('person', __webpack_require__(90))
			.directive('persons', __webpack_require__(93))
			.service('PersonModal', __webpack_require__(95))
			.name;

/***/ },
/* 89 */
/***/ function(module, exports) {

	/**
	 * @license AngularJS v1.5.5
	 * (c) 2010-2016 Google, Inc. http://angularjs.org
	 * License: MIT
	 */
	(function(window, angular) {'use strict';

	/* jshint ignore:start */
	var noop        = angular.noop;
	var copy        = angular.copy;
	var extend      = angular.extend;
	var jqLite      = angular.element;
	var forEach     = angular.forEach;
	var isArray     = angular.isArray;
	var isString    = angular.isString;
	var isObject    = angular.isObject;
	var isUndefined = angular.isUndefined;
	var isDefined   = angular.isDefined;
	var isFunction  = angular.isFunction;
	var isElement   = angular.isElement;

	var ELEMENT_NODE = 1;
	var COMMENT_NODE = 8;

	var ADD_CLASS_SUFFIX = '-add';
	var REMOVE_CLASS_SUFFIX = '-remove';
	var EVENT_CLASS_PREFIX = 'ng-';
	var ACTIVE_CLASS_SUFFIX = '-active';
	var PREPARE_CLASS_SUFFIX = '-prepare';

	var NG_ANIMATE_CLASSNAME = 'ng-animate';
	var NG_ANIMATE_CHILDREN_DATA = '$$ngAnimateChildren';

	// Detect proper transitionend/animationend event names.
	var CSS_PREFIX = '', TRANSITION_PROP, TRANSITIONEND_EVENT, ANIMATION_PROP, ANIMATIONEND_EVENT;

	// If unprefixed events are not supported but webkit-prefixed are, use the latter.
	// Otherwise, just use W3C names, browsers not supporting them at all will just ignore them.
	// Note: Chrome implements `window.onwebkitanimationend` and doesn't implement `window.onanimationend`
	// but at the same time dispatches the `animationend` event and not `webkitAnimationEnd`.
	// Register both events in case `window.onanimationend` is not supported because of that,
	// do the same for `transitionend` as Safari is likely to exhibit similar behavior.
	// Also, the only modern browser that uses vendor prefixes for transitions/keyframes is webkit
	// therefore there is no reason to test anymore for other vendor prefixes:
	// http://caniuse.com/#search=transition
	if (isUndefined(window.ontransitionend) && isDefined(window.onwebkittransitionend)) {
	  CSS_PREFIX = '-webkit-';
	  TRANSITION_PROP = 'WebkitTransition';
	  TRANSITIONEND_EVENT = 'webkitTransitionEnd transitionend';
	} else {
	  TRANSITION_PROP = 'transition';
	  TRANSITIONEND_EVENT = 'transitionend';
	}

	if (isUndefined(window.onanimationend) && isDefined(window.onwebkitanimationend)) {
	  CSS_PREFIX = '-webkit-';
	  ANIMATION_PROP = 'WebkitAnimation';
	  ANIMATIONEND_EVENT = 'webkitAnimationEnd animationend';
	} else {
	  ANIMATION_PROP = 'animation';
	  ANIMATIONEND_EVENT = 'animationend';
	}

	var DURATION_KEY = 'Duration';
	var PROPERTY_KEY = 'Property';
	var DELAY_KEY = 'Delay';
	var TIMING_KEY = 'TimingFunction';
	var ANIMATION_ITERATION_COUNT_KEY = 'IterationCount';
	var ANIMATION_PLAYSTATE_KEY = 'PlayState';
	var SAFE_FAST_FORWARD_DURATION_VALUE = 9999;

	var ANIMATION_DELAY_PROP = ANIMATION_PROP + DELAY_KEY;
	var ANIMATION_DURATION_PROP = ANIMATION_PROP + DURATION_KEY;
	var TRANSITION_DELAY_PROP = TRANSITION_PROP + DELAY_KEY;
	var TRANSITION_DURATION_PROP = TRANSITION_PROP + DURATION_KEY;

	var isPromiseLike = function(p) {
	  return p && p.then ? true : false;
	};

	var ngMinErr = angular.$$minErr('ng');
	function assertArg(arg, name, reason) {
	  if (!arg) {
	    throw ngMinErr('areq', "Argument '{0}' is {1}", (name || '?'), (reason || "required"));
	  }
	  return arg;
	}

	function mergeClasses(a,b) {
	  if (!a && !b) return '';
	  if (!a) return b;
	  if (!b) return a;
	  if (isArray(a)) a = a.join(' ');
	  if (isArray(b)) b = b.join(' ');
	  return a + ' ' + b;
	}

	function packageStyles(options) {
	  var styles = {};
	  if (options && (options.to || options.from)) {
	    styles.to = options.to;
	    styles.from = options.from;
	  }
	  return styles;
	}

	function pendClasses(classes, fix, isPrefix) {
	  var className = '';
	  classes = isArray(classes)
	      ? classes
	      : classes && isString(classes) && classes.length
	          ? classes.split(/\s+/)
	          : [];
	  forEach(classes, function(klass, i) {
	    if (klass && klass.length > 0) {
	      className += (i > 0) ? ' ' : '';
	      className += isPrefix ? fix + klass
	                            : klass + fix;
	    }
	  });
	  return className;
	}

	function removeFromArray(arr, val) {
	  var index = arr.indexOf(val);
	  if (val >= 0) {
	    arr.splice(index, 1);
	  }
	}

	function stripCommentsFromElement(element) {
	  if (element instanceof jqLite) {
	    switch (element.length) {
	      case 0:
	        return [];
	        break;

	      case 1:
	        // there is no point of stripping anything if the element
	        // is the only element within the jqLite wrapper.
	        // (it's important that we retain the element instance.)
	        if (element[0].nodeType === ELEMENT_NODE) {
	          return element;
	        }
	        break;

	      default:
	        return jqLite(extractElementNode(element));
	        break;
	    }
	  }

	  if (element.nodeType === ELEMENT_NODE) {
	    return jqLite(element);
	  }
	}

	function extractElementNode(element) {
	  if (!element[0]) return element;
	  for (var i = 0; i < element.length; i++) {
	    var elm = element[i];
	    if (elm.nodeType == ELEMENT_NODE) {
	      return elm;
	    }
	  }
	}

	function $$addClass($$jqLite, element, className) {
	  forEach(element, function(elm) {
	    $$jqLite.addClass(elm, className);
	  });
	}

	function $$removeClass($$jqLite, element, className) {
	  forEach(element, function(elm) {
	    $$jqLite.removeClass(elm, className);
	  });
	}

	function applyAnimationClassesFactory($$jqLite) {
	  return function(element, options) {
	    if (options.addClass) {
	      $$addClass($$jqLite, element, options.addClass);
	      options.addClass = null;
	    }
	    if (options.removeClass) {
	      $$removeClass($$jqLite, element, options.removeClass);
	      options.removeClass = null;
	    }
	  }
	}

	function prepareAnimationOptions(options) {
	  options = options || {};
	  if (!options.$$prepared) {
	    var domOperation = options.domOperation || noop;
	    options.domOperation = function() {
	      options.$$domOperationFired = true;
	      domOperation();
	      domOperation = noop;
	    };
	    options.$$prepared = true;
	  }
	  return options;
	}

	function applyAnimationStyles(element, options) {
	  applyAnimationFromStyles(element, options);
	  applyAnimationToStyles(element, options);
	}

	function applyAnimationFromStyles(element, options) {
	  if (options.from) {
	    element.css(options.from);
	    options.from = null;
	  }
	}

	function applyAnimationToStyles(element, options) {
	  if (options.to) {
	    element.css(options.to);
	    options.to = null;
	  }
	}

	function mergeAnimationDetails(element, oldAnimation, newAnimation) {
	  var target = oldAnimation.options || {};
	  var newOptions = newAnimation.options || {};

	  var toAdd = (target.addClass || '') + ' ' + (newOptions.addClass || '');
	  var toRemove = (target.removeClass || '') + ' ' + (newOptions.removeClass || '');
	  var classes = resolveElementClasses(element.attr('class'), toAdd, toRemove);

	  if (newOptions.preparationClasses) {
	    target.preparationClasses = concatWithSpace(newOptions.preparationClasses, target.preparationClasses);
	    delete newOptions.preparationClasses;
	  }

	  // noop is basically when there is no callback; otherwise something has been set
	  var realDomOperation = target.domOperation !== noop ? target.domOperation : null;

	  extend(target, newOptions);

	  // TODO(matsko or sreeramu): proper fix is to maintain all animation callback in array and call at last,but now only leave has the callback so no issue with this.
	  if (realDomOperation) {
	    target.domOperation = realDomOperation;
	  }

	  if (classes.addClass) {
	    target.addClass = classes.addClass;
	  } else {
	    target.addClass = null;
	  }

	  if (classes.removeClass) {
	    target.removeClass = classes.removeClass;
	  } else {
	    target.removeClass = null;
	  }

	  oldAnimation.addClass = target.addClass;
	  oldAnimation.removeClass = target.removeClass;

	  return target;
	}

	function resolveElementClasses(existing, toAdd, toRemove) {
	  var ADD_CLASS = 1;
	  var REMOVE_CLASS = -1;

	  var flags = {};
	  existing = splitClassesToLookup(existing);

	  toAdd = splitClassesToLookup(toAdd);
	  forEach(toAdd, function(value, key) {
	    flags[key] = ADD_CLASS;
	  });

	  toRemove = splitClassesToLookup(toRemove);
	  forEach(toRemove, function(value, key) {
	    flags[key] = flags[key] === ADD_CLASS ? null : REMOVE_CLASS;
	  });

	  var classes = {
	    addClass: '',
	    removeClass: ''
	  };

	  forEach(flags, function(val, klass) {
	    var prop, allow;
	    if (val === ADD_CLASS) {
	      prop = 'addClass';
	      allow = !existing[klass];
	    } else if (val === REMOVE_CLASS) {
	      prop = 'removeClass';
	      allow = existing[klass];
	    }
	    if (allow) {
	      if (classes[prop].length) {
	        classes[prop] += ' ';
	      }
	      classes[prop] += klass;
	    }
	  });

	  function splitClassesToLookup(classes) {
	    if (isString(classes)) {
	      classes = classes.split(' ');
	    }

	    var obj = {};
	    forEach(classes, function(klass) {
	      // sometimes the split leaves empty string values
	      // incase extra spaces were applied to the options
	      if (klass.length) {
	        obj[klass] = true;
	      }
	    });
	    return obj;
	  }

	  return classes;
	}

	function getDomNode(element) {
	  return (element instanceof angular.element) ? element[0] : element;
	}

	function applyGeneratedPreparationClasses(element, event, options) {
	  var classes = '';
	  if (event) {
	    classes = pendClasses(event, EVENT_CLASS_PREFIX, true);
	  }
	  if (options.addClass) {
	    classes = concatWithSpace(classes, pendClasses(options.addClass, ADD_CLASS_SUFFIX));
	  }
	  if (options.removeClass) {
	    classes = concatWithSpace(classes, pendClasses(options.removeClass, REMOVE_CLASS_SUFFIX));
	  }
	  if (classes.length) {
	    options.preparationClasses = classes;
	    element.addClass(classes);
	  }
	}

	function clearGeneratedClasses(element, options) {
	  if (options.preparationClasses) {
	    element.removeClass(options.preparationClasses);
	    options.preparationClasses = null;
	  }
	  if (options.activeClasses) {
	    element.removeClass(options.activeClasses);
	    options.activeClasses = null;
	  }
	}

	function blockTransitions(node, duration) {
	  // we use a negative delay value since it performs blocking
	  // yet it doesn't kill any existing transitions running on the
	  // same element which makes this safe for class-based animations
	  var value = duration ? '-' + duration + 's' : '';
	  applyInlineStyle(node, [TRANSITION_DELAY_PROP, value]);
	  return [TRANSITION_DELAY_PROP, value];
	}

	function blockKeyframeAnimations(node, applyBlock) {
	  var value = applyBlock ? 'paused' : '';
	  var key = ANIMATION_PROP + ANIMATION_PLAYSTATE_KEY;
	  applyInlineStyle(node, [key, value]);
	  return [key, value];
	}

	function applyInlineStyle(node, styleTuple) {
	  var prop = styleTuple[0];
	  var value = styleTuple[1];
	  node.style[prop] = value;
	}

	function concatWithSpace(a,b) {
	  if (!a) return b;
	  if (!b) return a;
	  return a + ' ' + b;
	}

	var $$rAFSchedulerFactory = ['$$rAF', function($$rAF) {
	  var queue, cancelFn;

	  function scheduler(tasks) {
	    // we make a copy since RAFScheduler mutates the state
	    // of the passed in array variable and this would be difficult
	    // to track down on the outside code
	    queue = queue.concat(tasks);
	    nextTick();
	  }

	  queue = scheduler.queue = [];

	  /* waitUntilQuiet does two things:
	   * 1. It will run the FINAL `fn` value only when an uncanceled RAF has passed through
	   * 2. It will delay the next wave of tasks from running until the quiet `fn` has run.
	   *
	   * The motivation here is that animation code can request more time from the scheduler
	   * before the next wave runs. This allows for certain DOM properties such as classes to
	   * be resolved in time for the next animation to run.
	   */
	  scheduler.waitUntilQuiet = function(fn) {
	    if (cancelFn) cancelFn();

	    cancelFn = $$rAF(function() {
	      cancelFn = null;
	      fn();
	      nextTick();
	    });
	  };

	  return scheduler;

	  function nextTick() {
	    if (!queue.length) return;

	    var items = queue.shift();
	    for (var i = 0; i < items.length; i++) {
	      items[i]();
	    }

	    if (!cancelFn) {
	      $$rAF(function() {
	        if (!cancelFn) nextTick();
	      });
	    }
	  }
	}];

	/**
	 * @ngdoc directive
	 * @name ngAnimateChildren
	 * @restrict AE
	 * @element ANY
	 *
	 * @description
	 *
	 * ngAnimateChildren allows you to specify that children of this element should animate even if any
	 * of the children's parents are currently animating. By default, when an element has an active `enter`, `leave`, or `move`
	 * (structural) animation, child elements that also have an active structural animation are not animated.
	 *
	 * Note that even if `ngAnimteChildren` is set, no child animations will run when the parent element is removed from the DOM (`leave` animation).
	 *
	 *
	 * @param {string} ngAnimateChildren If the value is empty, `true` or `on`,
	 *     then child animations are allowed. If the value is `false`, child animations are not allowed.
	 *
	 * @example
	 * <example module="ngAnimateChildren" name="ngAnimateChildren" deps="angular-animate.js" animations="true">
	     <file name="index.html">
	       <div ng-controller="mainController as main">
	         <label>Show container? <input type="checkbox" ng-model="main.enterElement" /></label>
	         <label>Animate children? <input type="checkbox" ng-model="main.animateChildren" /></label>
	         <hr>
	         <div ng-animate-children="{{main.animateChildren}}">
	           <div ng-if="main.enterElement" class="container">
	             List of items:
	             <div ng-repeat="item in [0, 1, 2, 3]" class="item">Item {{item}}</div>
	           </div>
	         </div>
	       </div>
	     </file>
	     <file name="animations.css">

	      .container.ng-enter,
	      .container.ng-leave {
	        transition: all ease 1.5s;
	      }

	      .container.ng-enter,
	      .container.ng-leave-active {
	        opacity: 0;
	      }

	      .container.ng-leave,
	      .container.ng-enter-active {
	        opacity: 1;
	      }

	      .item {
	        background: firebrick;
	        color: #FFF;
	        margin-bottom: 10px;
	      }

	      .item.ng-enter,
	      .item.ng-leave {
	        transition: transform 1.5s ease;
	      }

	      .item.ng-enter {
	        transform: translateX(50px);
	      }

	      .item.ng-enter-active {
	        transform: translateX(0);
	      }
	    </file>
	    <file name="script.js">
	      angular.module('ngAnimateChildren', ['ngAnimate'])
	        .controller('mainController', function() {
	          this.animateChildren = false;
	          this.enterElement = false;
	        });
	    </file>
	  </example>
	 */
	var $$AnimateChildrenDirective = ['$interpolate', function($interpolate) {
	  return {
	    link: function(scope, element, attrs) {
	      var val = attrs.ngAnimateChildren;
	      if (angular.isString(val) && val.length === 0) { //empty attribute
	        element.data(NG_ANIMATE_CHILDREN_DATA, true);
	      } else {
	        // Interpolate and set the value, so that it is available to
	        // animations that run right after compilation
	        setData($interpolate(val)(scope));
	        attrs.$observe('ngAnimateChildren', setData);
	      }

	      function setData(value) {
	        value = value === 'on' || value === 'true';
	        element.data(NG_ANIMATE_CHILDREN_DATA, value);
	      }
	    }
	  };
	}];

	var ANIMATE_TIMER_KEY = '$$animateCss';

	/**
	 * @ngdoc service
	 * @name $animateCss
	 * @kind object
	 *
	 * @description
	 * The `$animateCss` service is a useful utility to trigger customized CSS-based transitions/keyframes
	 * from a JavaScript-based animation or directly from a directive. The purpose of `$animateCss` is NOT
	 * to side-step how `$animate` and ngAnimate work, but the goal is to allow pre-existing animations or
	 * directives to create more complex animations that can be purely driven using CSS code.
	 *
	 * Note that only browsers that support CSS transitions and/or keyframe animations are capable of
	 * rendering animations triggered via `$animateCss` (bad news for IE9 and lower).
	 *
	 * ## Usage
	 * Once again, `$animateCss` is designed to be used inside of a registered JavaScript animation that
	 * is powered by ngAnimate. It is possible to use `$animateCss` directly inside of a directive, however,
	 * any automatic control over cancelling animations and/or preventing animations from being run on
	 * child elements will not be handled by Angular. For this to work as expected, please use `$animate` to
	 * trigger the animation and then setup a JavaScript animation that injects `$animateCss` to trigger
	 * the CSS animation.
	 *
	 * The example below shows how we can create a folding animation on an element using `ng-if`:
	 *
	 * ```html
	 * <!-- notice the `fold-animation` CSS class -->
	 * <div ng-if="onOff" class="fold-animation">
	 *   This element will go BOOM
	 * </div>
	 * <button ng-click="onOff=true">Fold In</button>
	 * ```
	 *
	 * Now we create the **JavaScript animation** that will trigger the CSS transition:
	 *
	 * ```js
	 * ngModule.animation('.fold-animation', ['$animateCss', function($animateCss) {
	 *   return {
	 *     enter: function(element, doneFn) {
	 *       var height = element[0].offsetHeight;
	 *       return $animateCss(element, {
	 *         from: { height:'0px' },
	 *         to: { height:height + 'px' },
	 *         duration: 1 // one second
	 *       });
	 *     }
	 *   }
	 * }]);
	 * ```
	 *
	 * ## More Advanced Uses
	 *
	 * `$animateCss` is the underlying code that ngAnimate uses to power **CSS-based animations** behind the scenes. Therefore CSS hooks
	 * like `.ng-EVENT`, `.ng-EVENT-active`, `.ng-EVENT-stagger` are all features that can be triggered using `$animateCss` via JavaScript code.
	 *
	 * This also means that just about any combination of adding classes, removing classes, setting styles, dynamically setting a keyframe animation,
	 * applying a hardcoded duration or delay value, changing the animation easing or applying a stagger animation are all options that work with
	 * `$animateCss`. The service itself is smart enough to figure out the combination of options and examine the element styling properties in order
	 * to provide a working animation that will run in CSS.
	 *
	 * The example below showcases a more advanced version of the `.fold-animation` from the example above:
	 *
	 * ```js
	 * ngModule.animation('.fold-animation', ['$animateCss', function($animateCss) {
	 *   return {
	 *     enter: function(element, doneFn) {
	 *       var height = element[0].offsetHeight;
	 *       return $animateCss(element, {
	 *         addClass: 'red large-text pulse-twice',
	 *         easing: 'ease-out',
	 *         from: { height:'0px' },
	 *         to: { height:height + 'px' },
	 *         duration: 1 // one second
	 *       });
	 *     }
	 *   }
	 * }]);
	 * ```
	 *
	 * Since we're adding/removing CSS classes then the CSS transition will also pick those up:
	 *
	 * ```css
	 * /&#42; since a hardcoded duration value of 1 was provided in the JavaScript animation code,
	 * the CSS classes below will be transitioned despite them being defined as regular CSS classes &#42;/
	 * .red { background:red; }
	 * .large-text { font-size:20px; }
	 *
	 * /&#42; we can also use a keyframe animation and $animateCss will make it work alongside the transition &#42;/
	 * .pulse-twice {
	 *   animation: 0.5s pulse linear 2;
	 *   -webkit-animation: 0.5s pulse linear 2;
	 * }
	 *
	 * @keyframes pulse {
	 *   from { transform: scale(0.5); }
	 *   to { transform: scale(1.5); }
	 * }
	 *
	 * @-webkit-keyframes pulse {
	 *   from { -webkit-transform: scale(0.5); }
	 *   to { -webkit-transform: scale(1.5); }
	 * }
	 * ```
	 *
	 * Given this complex combination of CSS classes, styles and options, `$animateCss` will figure everything out and make the animation happen.
	 *
	 * ## How the Options are handled
	 *
	 * `$animateCss` is very versatile and intelligent when it comes to figuring out what configurations to apply to the element to ensure the animation
	 * works with the options provided. Say for example we were adding a class that contained a keyframe value and we wanted to also animate some inline
	 * styles using the `from` and `to` properties.
	 *
	 * ```js
	 * var animator = $animateCss(element, {
	 *   from: { background:'red' },
	 *   to: { background:'blue' }
	 * });
	 * animator.start();
	 * ```
	 *
	 * ```css
	 * .rotating-animation {
	 *   animation:0.5s rotate linear;
	 *   -webkit-animation:0.5s rotate linear;
	 * }
	 *
	 * @keyframes rotate {
	 *   from { transform: rotate(0deg); }
	 *   to { transform: rotate(360deg); }
	 * }
	 *
	 * @-webkit-keyframes rotate {
	 *   from { -webkit-transform: rotate(0deg); }
	 *   to { -webkit-transform: rotate(360deg); }
	 * }
	 * ```
	 *
	 * The missing pieces here are that we do not have a transition set (within the CSS code nor within the `$animateCss` options) and the duration of the animation is
	 * going to be detected from what the keyframe styles on the CSS class are. In this event, `$animateCss` will automatically create an inline transition
	 * style matching the duration detected from the keyframe style (which is present in the CSS class that is being added) and then prepare both the transition
	 * and keyframe animations to run in parallel on the element. Then when the animation is underway the provided `from` and `to` CSS styles will be applied
	 * and spread across the transition and keyframe animation.
	 *
	 * ## What is returned
	 *
	 * `$animateCss` works in two stages: a preparation phase and an animation phase. Therefore when `$animateCss` is first called it will NOT actually
	 * start the animation. All that is going on here is that the element is being prepared for the animation (which means that the generated CSS classes are
	 * added and removed on the element). Once `$animateCss` is called it will return an object with the following properties:
	 *
	 * ```js
	 * var animator = $animateCss(element, { ... });
	 * ```
	 *
	 * Now what do the contents of our `animator` variable look like:
	 *
	 * ```js
	 * {
	 *   // starts the animation
	 *   start: Function,
	 *
	 *   // ends (aborts) the animation
	 *   end: Function
	 * }
	 * ```
	 *
	 * To actually start the animation we need to run `animation.start()` which will then return a promise that we can hook into to detect when the animation ends.
	 * If we choose not to run the animation then we MUST run `animation.end()` to perform a cleanup on the element (since some CSS classes and styles may have been
	 * applied to the element during the preparation phase). Note that all other properties such as duration, delay, transitions and keyframes are just properties
	 * and that changing them will not reconfigure the parameters of the animation.
	 *
	 * ### runner.done() vs runner.then()
	 * It is documented that `animation.start()` will return a promise object and this is true, however, there is also an additional method available on the
	 * runner called `.done(callbackFn)`. The done method works the same as `.finally(callbackFn)`, however, it does **not trigger a digest to occur**.
	 * Therefore, for performance reasons, it's always best to use `runner.done(callback)` instead of `runner.then()`, `runner.catch()` or `runner.finally()`
	 * unless you really need a digest to kick off afterwards.
	 *
	 * Keep in mind that, to make this easier, ngAnimate has tweaked the JS animations API to recognize when a runner instance is returned from $animateCss
	 * (so there is no need to call `runner.done(doneFn)` inside of your JavaScript animation code).
	 * Check the {@link ngAnimate.$animateCss#usage animation code above} to see how this works.
	 *
	 * @param {DOMElement} element the element that will be animated
	 * @param {object} options the animation-related options that will be applied during the animation
	 *
	 * * `event` - The DOM event (e.g. enter, leave, move). When used, a generated CSS class of `ng-EVENT` and `ng-EVENT-active` will be applied
	 * to the element during the animation. Multiple events can be provided when spaces are used as a separator. (Note that this will not perform any DOM operation.)
	 * * `structural` - Indicates that the `ng-` prefix will be added to the event class. Setting to `false` or omitting will turn `ng-EVENT` and
	 * `ng-EVENT-active` in `EVENT` and `EVENT-active`. Unused if `event` is omitted.
	 * * `easing` - The CSS easing value that will be applied to the transition or keyframe animation (or both).
	 * * `transitionStyle` - The raw CSS transition style that will be used (e.g. `1s linear all`).
	 * * `keyframeStyle` - The raw CSS keyframe animation style that will be used (e.g. `1s my_animation linear`).
	 * * `from` - The starting CSS styles (a key/value object) that will be applied at the start of the animation.
	 * * `to` - The ending CSS styles (a key/value object) that will be applied across the animation via a CSS transition.
	 * * `addClass` - A space separated list of CSS classes that will be added to the element and spread across the animation.
	 * * `removeClass` - A space separated list of CSS classes that will be removed from the element and spread across the animation.
	 * * `duration` - A number value representing the total duration of the transition and/or keyframe (note that a value of 1 is 1000ms). If a value of `0`
	 * is provided then the animation will be skipped entirely.
	 * * `delay` - A number value representing the total delay of the transition and/or keyframe (note that a value of 1 is 1000ms). If a value of `true` is
	 * used then whatever delay value is detected from the CSS classes will be mirrored on the elements styles (e.g. by setting delay true then the style value
	 * of the element will be `transition-delay: DETECTED_VALUE`). Using `true` is useful when you want the CSS classes and inline styles to all share the same
	 * CSS delay value.
	 * * `stagger` - A numeric time value representing the delay between successively animated elements
	 * ({@link ngAnimate#css-staggering-animations Click here to learn how CSS-based staggering works in ngAnimate.})
	 * * `staggerIndex` - The numeric index representing the stagger item (e.g. a value of 5 is equal to the sixth item in the stagger; therefore when a
	 *   `stagger` option value of `0.1` is used then there will be a stagger delay of `600ms`)
	 * * `applyClassesEarly` - Whether or not the classes being added or removed will be used when detecting the animation. This is set by `$animate` when enter/leave/move animations are fired to ensure that the CSS classes are resolved in time. (Note that this will prevent any transitions from occurring on the classes being added and removed.)
	 * * `cleanupStyles` - Whether or not the provided `from` and `to` styles will be removed once
	 *    the animation is closed. This is useful for when the styles are used purely for the sake of
	 *    the animation and do not have a lasting visual effect on the element (e.g. a collapse and open animation).
	 *    By default this value is set to `false`.
	 *
	 * @return {object} an object with start and end methods and details about the animation.
	 *
	 * * `start` - The method to start the animation. This will return a `Promise` when called.
	 * * `end` - This method will cancel the animation and remove all applied CSS classes and styles.
	 */
	var ONE_SECOND = 1000;
	var BASE_TEN = 10;

	var ELAPSED_TIME_MAX_DECIMAL_PLACES = 3;
	var CLOSING_TIME_BUFFER = 1.5;

	var DETECT_CSS_PROPERTIES = {
	  transitionDuration:      TRANSITION_DURATION_PROP,
	  transitionDelay:         TRANSITION_DELAY_PROP,
	  transitionProperty:      TRANSITION_PROP + PROPERTY_KEY,
	  animationDuration:       ANIMATION_DURATION_PROP,
	  animationDelay:          ANIMATION_DELAY_PROP,
	  animationIterationCount: ANIMATION_PROP + ANIMATION_ITERATION_COUNT_KEY
	};

	var DETECT_STAGGER_CSS_PROPERTIES = {
	  transitionDuration:      TRANSITION_DURATION_PROP,
	  transitionDelay:         TRANSITION_DELAY_PROP,
	  animationDuration:       ANIMATION_DURATION_PROP,
	  animationDelay:          ANIMATION_DELAY_PROP
	};

	function getCssKeyframeDurationStyle(duration) {
	  return [ANIMATION_DURATION_PROP, duration + 's'];
	}

	function getCssDelayStyle(delay, isKeyframeAnimation) {
	  var prop = isKeyframeAnimation ? ANIMATION_DELAY_PROP : TRANSITION_DELAY_PROP;
	  return [prop, delay + 's'];
	}

	function computeCssStyles($window, element, properties) {
	  var styles = Object.create(null);
	  var detectedStyles = $window.getComputedStyle(element) || {};
	  forEach(properties, function(formalStyleName, actualStyleName) {
	    var val = detectedStyles[formalStyleName];
	    if (val) {
	      var c = val.charAt(0);

	      // only numerical-based values have a negative sign or digit as the first value
	      if (c === '-' || c === '+' || c >= 0) {
	        val = parseMaxTime(val);
	      }

	      // by setting this to null in the event that the delay is not set or is set directly as 0
	      // then we can still allow for negative values to be used later on and not mistake this
	      // value for being greater than any other negative value.
	      if (val === 0) {
	        val = null;
	      }
	      styles[actualStyleName] = val;
	    }
	  });

	  return styles;
	}

	function parseMaxTime(str) {
	  var maxValue = 0;
	  var values = str.split(/\s*,\s*/);
	  forEach(values, function(value) {
	    // it's always safe to consider only second values and omit `ms` values since
	    // getComputedStyle will always handle the conversion for us
	    if (value.charAt(value.length - 1) == 's') {
	      value = value.substring(0, value.length - 1);
	    }
	    value = parseFloat(value) || 0;
	    maxValue = maxValue ? Math.max(value, maxValue) : value;
	  });
	  return maxValue;
	}

	function truthyTimingValue(val) {
	  return val === 0 || val != null;
	}

	function getCssTransitionDurationStyle(duration, applyOnlyDuration) {
	  var style = TRANSITION_PROP;
	  var value = duration + 's';
	  if (applyOnlyDuration) {
	    style += DURATION_KEY;
	  } else {
	    value += ' linear all';
	  }
	  return [style, value];
	}

	function createLocalCacheLookup() {
	  var cache = Object.create(null);
	  return {
	    flush: function() {
	      cache = Object.create(null);
	    },

	    count: function(key) {
	      var entry = cache[key];
	      return entry ? entry.total : 0;
	    },

	    get: function(key) {
	      var entry = cache[key];
	      return entry && entry.value;
	    },

	    put: function(key, value) {
	      if (!cache[key]) {
	        cache[key] = { total: 1, value: value };
	      } else {
	        cache[key].total++;
	      }
	    }
	  };
	}

	// we do not reassign an already present style value since
	// if we detect the style property value again we may be
	// detecting styles that were added via the `from` styles.
	// We make use of `isDefined` here since an empty string
	// or null value (which is what getPropertyValue will return
	// for a non-existing style) will still be marked as a valid
	// value for the style (a falsy value implies that the style
	// is to be removed at the end of the animation). If we had a simple
	// "OR" statement then it would not be enough to catch that.
	function registerRestorableStyles(backup, node, properties) {
	  forEach(properties, function(prop) {
	    backup[prop] = isDefined(backup[prop])
	        ? backup[prop]
	        : node.style.getPropertyValue(prop);
	  });
	}

	var $AnimateCssProvider = ['$animateProvider', function($animateProvider) {
	  var gcsLookup = createLocalCacheLookup();
	  var gcsStaggerLookup = createLocalCacheLookup();

	  this.$get = ['$window', '$$jqLite', '$$AnimateRunner', '$timeout',
	               '$$forceReflow', '$sniffer', '$$rAFScheduler', '$$animateQueue',
	       function($window,   $$jqLite,   $$AnimateRunner,   $timeout,
	                $$forceReflow,   $sniffer,   $$rAFScheduler, $$animateQueue) {

	    var applyAnimationClasses = applyAnimationClassesFactory($$jqLite);

	    var parentCounter = 0;
	    function gcsHashFn(node, extraClasses) {
	      var KEY = "$$ngAnimateParentKey";
	      var parentNode = node.parentNode;
	      var parentID = parentNode[KEY] || (parentNode[KEY] = ++parentCounter);
	      return parentID + '-' + node.getAttribute('class') + '-' + extraClasses;
	    }

	    function computeCachedCssStyles(node, className, cacheKey, properties) {
	      var timings = gcsLookup.get(cacheKey);

	      if (!timings) {
	        timings = computeCssStyles($window, node, properties);
	        if (timings.animationIterationCount === 'infinite') {
	          timings.animationIterationCount = 1;
	        }
	      }

	      // we keep putting this in multiple times even though the value and the cacheKey are the same
	      // because we're keeping an internal tally of how many duplicate animations are detected.
	      gcsLookup.put(cacheKey, timings);
	      return timings;
	    }

	    function computeCachedCssStaggerStyles(node, className, cacheKey, properties) {
	      var stagger;

	      // if we have one or more existing matches of matching elements
	      // containing the same parent + CSS styles (which is how cacheKey works)
	      // then staggering is possible
	      if (gcsLookup.count(cacheKey) > 0) {
	        stagger = gcsStaggerLookup.get(cacheKey);

	        if (!stagger) {
	          var staggerClassName = pendClasses(className, '-stagger');

	          $$jqLite.addClass(node, staggerClassName);

	          stagger = computeCssStyles($window, node, properties);

	          // force the conversion of a null value to zero incase not set
	          stagger.animationDuration = Math.max(stagger.animationDuration, 0);
	          stagger.transitionDuration = Math.max(stagger.transitionDuration, 0);

	          $$jqLite.removeClass(node, staggerClassName);

	          gcsStaggerLookup.put(cacheKey, stagger);
	        }
	      }

	      return stagger || {};
	    }

	    var cancelLastRAFRequest;
	    var rafWaitQueue = [];
	    function waitUntilQuiet(callback) {
	      rafWaitQueue.push(callback);
	      $$rAFScheduler.waitUntilQuiet(function() {
	        gcsLookup.flush();
	        gcsStaggerLookup.flush();

	        // DO NOT REMOVE THIS LINE OR REFACTOR OUT THE `pageWidth` variable.
	        // PLEASE EXAMINE THE `$$forceReflow` service to understand why.
	        var pageWidth = $$forceReflow();

	        // we use a for loop to ensure that if the queue is changed
	        // during this looping then it will consider new requests
	        for (var i = 0; i < rafWaitQueue.length; i++) {
	          rafWaitQueue[i](pageWidth);
	        }
	        rafWaitQueue.length = 0;
	      });
	    }

	    function computeTimings(node, className, cacheKey) {
	      var timings = computeCachedCssStyles(node, className, cacheKey, DETECT_CSS_PROPERTIES);
	      var aD = timings.animationDelay;
	      var tD = timings.transitionDelay;
	      timings.maxDelay = aD && tD
	          ? Math.max(aD, tD)
	          : (aD || tD);
	      timings.maxDuration = Math.max(
	          timings.animationDuration * timings.animationIterationCount,
	          timings.transitionDuration);

	      return timings;
	    }

	    return function init(element, initialOptions) {
	      // all of the animation functions should create
	      // a copy of the options data, however, if a
	      // parent service has already created a copy then
	      // we should stick to using that
	      var options = initialOptions || {};
	      if (!options.$$prepared) {
	        options = prepareAnimationOptions(copy(options));
	      }

	      var restoreStyles = {};
	      var node = getDomNode(element);
	      if (!node
	          || !node.parentNode
	          || !$$animateQueue.enabled()) {
	        return closeAndReturnNoopAnimator();
	      }

	      var temporaryStyles = [];
	      var classes = element.attr('class');
	      var styles = packageStyles(options);
	      var animationClosed;
	      var animationPaused;
	      var animationCompleted;
	      var runner;
	      var runnerHost;
	      var maxDelay;
	      var maxDelayTime;
	      var maxDuration;
	      var maxDurationTime;
	      var startTime;
	      var events = [];

	      if (options.duration === 0 || (!$sniffer.animations && !$sniffer.transitions)) {
	        return closeAndReturnNoopAnimator();
	      }

	      var method = options.event && isArray(options.event)
	            ? options.event.join(' ')
	            : options.event;

	      var isStructural = method && options.structural;
	      var structuralClassName = '';
	      var addRemoveClassName = '';

	      if (isStructural) {
	        structuralClassName = pendClasses(method, EVENT_CLASS_PREFIX, true);
	      } else if (method) {
	        structuralClassName = method;
	      }

	      if (options.addClass) {
	        addRemoveClassName += pendClasses(options.addClass, ADD_CLASS_SUFFIX);
	      }

	      if (options.removeClass) {
	        if (addRemoveClassName.length) {
	          addRemoveClassName += ' ';
	        }
	        addRemoveClassName += pendClasses(options.removeClass, REMOVE_CLASS_SUFFIX);
	      }

	      // there may be a situation where a structural animation is combined together
	      // with CSS classes that need to resolve before the animation is computed.
	      // However this means that there is no explicit CSS code to block the animation
	      // from happening (by setting 0s none in the class name). If this is the case
	      // we need to apply the classes before the first rAF so we know to continue if
	      // there actually is a detected transition or keyframe animation
	      if (options.applyClassesEarly && addRemoveClassName.length) {
	        applyAnimationClasses(element, options);
	      }

	      var preparationClasses = [structuralClassName, addRemoveClassName].join(' ').trim();
	      var fullClassName = classes + ' ' + preparationClasses;
	      var activeClasses = pendClasses(preparationClasses, ACTIVE_CLASS_SUFFIX);
	      var hasToStyles = styles.to && Object.keys(styles.to).length > 0;
	      var containsKeyframeAnimation = (options.keyframeStyle || '').length > 0;

	      // there is no way we can trigger an animation if no styles and
	      // no classes are being applied which would then trigger a transition,
	      // unless there a is raw keyframe value that is applied to the element.
	      if (!containsKeyframeAnimation
	           && !hasToStyles
	           && !preparationClasses) {
	        return closeAndReturnNoopAnimator();
	      }

	      var cacheKey, stagger;
	      if (options.stagger > 0) {
	        var staggerVal = parseFloat(options.stagger);
	        stagger = {
	          transitionDelay: staggerVal,
	          animationDelay: staggerVal,
	          transitionDuration: 0,
	          animationDuration: 0
	        };
	      } else {
	        cacheKey = gcsHashFn(node, fullClassName);
	        stagger = computeCachedCssStaggerStyles(node, preparationClasses, cacheKey, DETECT_STAGGER_CSS_PROPERTIES);
	      }

	      if (!options.$$skipPreparationClasses) {
	        $$jqLite.addClass(element, preparationClasses);
	      }

	      var applyOnlyDuration;

	      if (options.transitionStyle) {
	        var transitionStyle = [TRANSITION_PROP, options.transitionStyle];
	        applyInlineStyle(node, transitionStyle);
	        temporaryStyles.push(transitionStyle);
	      }

	      if (options.duration >= 0) {
	        applyOnlyDuration = node.style[TRANSITION_PROP].length > 0;
	        var durationStyle = getCssTransitionDurationStyle(options.duration, applyOnlyDuration);

	        // we set the duration so that it will be picked up by getComputedStyle later
	        applyInlineStyle(node, durationStyle);
	        temporaryStyles.push(durationStyle);
	      }

	      if (options.keyframeStyle) {
	        var keyframeStyle = [ANIMATION_PROP, options.keyframeStyle];
	        applyInlineStyle(node, keyframeStyle);
	        temporaryStyles.push(keyframeStyle);
	      }

	      var itemIndex = stagger
	          ? options.staggerIndex >= 0
	              ? options.staggerIndex
	              : gcsLookup.count(cacheKey)
	          : 0;

	      var isFirst = itemIndex === 0;

	      // this is a pre-emptive way of forcing the setup classes to be added and applied INSTANTLY
	      // without causing any combination of transitions to kick in. By adding a negative delay value
	      // it forces the setup class' transition to end immediately. We later then remove the negative
	      // transition delay to allow for the transition to naturally do it's thing. The beauty here is
	      // that if there is no transition defined then nothing will happen and this will also allow
	      // other transitions to be stacked on top of each other without any chopping them out.
	      if (isFirst && !options.skipBlocking) {
	        blockTransitions(node, SAFE_FAST_FORWARD_DURATION_VALUE);
	      }

	      var timings = computeTimings(node, fullClassName, cacheKey);
	      var relativeDelay = timings.maxDelay;
	      maxDelay = Math.max(relativeDelay, 0);
	      maxDuration = timings.maxDuration;

	      var flags = {};
	      flags.hasTransitions          = timings.transitionDuration > 0;
	      flags.hasAnimations           = timings.animationDuration > 0;
	      flags.hasTransitionAll        = flags.hasTransitions && timings.transitionProperty == 'all';
	      flags.applyTransitionDuration = hasToStyles && (
	                                        (flags.hasTransitions && !flags.hasTransitionAll)
	                                         || (flags.hasAnimations && !flags.hasTransitions));
	      flags.applyAnimationDuration  = options.duration && flags.hasAnimations;
	      flags.applyTransitionDelay    = truthyTimingValue(options.delay) && (flags.applyTransitionDuration || flags.hasTransitions);
	      flags.applyAnimationDelay     = truthyTimingValue(options.delay) && flags.hasAnimations;
	      flags.recalculateTimingStyles = addRemoveClassName.length > 0;

	      if (flags.applyTransitionDuration || flags.applyAnimationDuration) {
	        maxDuration = options.duration ? parseFloat(options.duration) : maxDuration;

	        if (flags.applyTransitionDuration) {
	          flags.hasTransitions = true;
	          timings.transitionDuration = maxDuration;
	          applyOnlyDuration = node.style[TRANSITION_PROP + PROPERTY_KEY].length > 0;
	          temporaryStyles.push(getCssTransitionDurationStyle(maxDuration, applyOnlyDuration));
	        }

	        if (flags.applyAnimationDuration) {
	          flags.hasAnimations = true;
	          timings.animationDuration = maxDuration;
	          temporaryStyles.push(getCssKeyframeDurationStyle(maxDuration));
	        }
	      }

	      if (maxDuration === 0 && !flags.recalculateTimingStyles) {
	        return closeAndReturnNoopAnimator();
	      }

	      if (options.delay != null) {
	        var delayStyle;
	        if (typeof options.delay !== "boolean") {
	          delayStyle = parseFloat(options.delay);
	          // number in options.delay means we have to recalculate the delay for the closing timeout
	          maxDelay = Math.max(delayStyle, 0);
	        }

	        if (flags.applyTransitionDelay) {
	          temporaryStyles.push(getCssDelayStyle(delayStyle));
	        }

	        if (flags.applyAnimationDelay) {
	          temporaryStyles.push(getCssDelayStyle(delayStyle, true));
	        }
	      }

	      // we need to recalculate the delay value since we used a pre-emptive negative
	      // delay value and the delay value is required for the final event checking. This
	      // property will ensure that this will happen after the RAF phase has passed.
	      if (options.duration == null && timings.transitionDuration > 0) {
	        flags.recalculateTimingStyles = flags.recalculateTimingStyles || isFirst;
	      }

	      maxDelayTime = maxDelay * ONE_SECOND;
	      maxDurationTime = maxDuration * ONE_SECOND;
	      if (!options.skipBlocking) {
	        flags.blockTransition = timings.transitionDuration > 0;
	        flags.blockKeyframeAnimation = timings.animationDuration > 0 &&
	                                       stagger.animationDelay > 0 &&
	                                       stagger.animationDuration === 0;
	      }

	      if (options.from) {
	        if (options.cleanupStyles) {
	          registerRestorableStyles(restoreStyles, node, Object.keys(options.from));
	        }
	        applyAnimationFromStyles(element, options);
	      }

	      if (flags.blockTransition || flags.blockKeyframeAnimation) {
	        applyBlocking(maxDuration);
	      } else if (!options.skipBlocking) {
	        blockTransitions(node, false);
	      }

	      // TODO(matsko): for 1.5 change this code to have an animator object for better debugging
	      return {
	        $$willAnimate: true,
	        end: endFn,
	        start: function() {
	          if (animationClosed) return;

	          runnerHost = {
	            end: endFn,
	            cancel: cancelFn,
	            resume: null, //this will be set during the start() phase
	            pause: null
	          };

	          runner = new $$AnimateRunner(runnerHost);

	          waitUntilQuiet(start);

	          // we don't have access to pause/resume the animation
	          // since it hasn't run yet. AnimateRunner will therefore
	          // set noop functions for resume and pause and they will
	          // later be overridden once the animation is triggered
	          return runner;
	        }
	      };

	      function endFn() {
	        close();
	      }

	      function cancelFn() {
	        close(true);
	      }

	      function close(rejected) { // jshint ignore:line
	        // if the promise has been called already then we shouldn't close
	        // the animation again
	        if (animationClosed || (animationCompleted && animationPaused)) return;
	        animationClosed = true;
	        animationPaused = false;

	        if (!options.$$skipPreparationClasses) {
	          $$jqLite.removeClass(element, preparationClasses);
	        }
	        $$jqLite.removeClass(element, activeClasses);

	        blockKeyframeAnimations(node, false);
	        blockTransitions(node, false);

	        forEach(temporaryStyles, function(entry) {
	          // There is only one way to remove inline style properties entirely from elements.
	          // By using `removeProperty` this works, but we need to convert camel-cased CSS
	          // styles down to hyphenated values.
	          node.style[entry[0]] = '';
	        });

	        applyAnimationClasses(element, options);
	        applyAnimationStyles(element, options);

	        if (Object.keys(restoreStyles).length) {
	          forEach(restoreStyles, function(value, prop) {
	            value ? node.style.setProperty(prop, value)
	                  : node.style.removeProperty(prop);
	          });
	        }

	        // the reason why we have this option is to allow a synchronous closing callback
	        // that is fired as SOON as the animation ends (when the CSS is removed) or if
	        // the animation never takes off at all. A good example is a leave animation since
	        // the element must be removed just after the animation is over or else the element
	        // will appear on screen for one animation frame causing an overbearing flicker.
	        if (options.onDone) {
	          options.onDone();
	        }

	        if (events && events.length) {
	          // Remove the transitionend / animationend listener(s)
	          element.off(events.join(' '), onAnimationProgress);
	        }

	        //Cancel the fallback closing timeout and remove the timer data
	        var animationTimerData = element.data(ANIMATE_TIMER_KEY);
	        if (animationTimerData) {
	          $timeout.cancel(animationTimerData[0].timer);
	          element.removeData(ANIMATE_TIMER_KEY);
	        }

	        // if the preparation function fails then the promise is not setup
	        if (runner) {
	          runner.complete(!rejected);
	        }
	      }

	      function applyBlocking(duration) {
	        if (flags.blockTransition) {
	          blockTransitions(node, duration);
	        }

	        if (flags.blockKeyframeAnimation) {
	          blockKeyframeAnimations(node, !!duration);
	        }
	      }

	      function closeAndReturnNoopAnimator() {
	        runner = new $$AnimateRunner({
	          end: endFn,
	          cancel: cancelFn
	        });

	        // should flush the cache animation
	        waitUntilQuiet(noop);
	        close();

	        return {
	          $$willAnimate: false,
	          start: function() {
	            return runner;
	          },
	          end: endFn
	        };
	      }

	      function onAnimationProgress(event) {
	        event.stopPropagation();
	        var ev = event.originalEvent || event;

	        // we now always use `Date.now()` due to the recent changes with
	        // event.timeStamp in Firefox, Webkit and Chrome (see #13494 for more info)
	        var timeStamp = ev.$manualTimeStamp || Date.now();

	        /* Firefox (or possibly just Gecko) likes to not round values up
	         * when a ms measurement is used for the animation */
	        var elapsedTime = parseFloat(ev.elapsedTime.toFixed(ELAPSED_TIME_MAX_DECIMAL_PLACES));

	        /* $manualTimeStamp is a mocked timeStamp value which is set
	         * within browserTrigger(). This is only here so that tests can
	         * mock animations properly. Real events fallback to event.timeStamp,
	         * or, if they don't, then a timeStamp is automatically created for them.
	         * We're checking to see if the timeStamp surpasses the expected delay,
	         * but we're using elapsedTime instead of the timeStamp on the 2nd
	         * pre-condition since animationPauseds sometimes close off early */
	        if (Math.max(timeStamp - startTime, 0) >= maxDelayTime && elapsedTime >= maxDuration) {
	          // we set this flag to ensure that if the transition is paused then, when resumed,
	          // the animation will automatically close itself since transitions cannot be paused.
	          animationCompleted = true;
	          close();
	        }
	      }

	      function start() {
	        if (animationClosed) return;
	        if (!node.parentNode) {
	          close();
	          return;
	        }

	        // even though we only pause keyframe animations here the pause flag
	        // will still happen when transitions are used. Only the transition will
	        // not be paused since that is not possible. If the animation ends when
	        // paused then it will not complete until unpaused or cancelled.
	        var playPause = function(playAnimation) {
	          if (!animationCompleted) {
	            animationPaused = !playAnimation;
	            if (timings.animationDuration) {
	              var value = blockKeyframeAnimations(node, animationPaused);
	              animationPaused
	                  ? temporaryStyles.push(value)
	                  : removeFromArray(temporaryStyles, value);
	            }
	          } else if (animationPaused && playAnimation) {
	            animationPaused = false;
	            close();
	          }
	        };

	        // checking the stagger duration prevents an accidentally cascade of the CSS delay style
	        // being inherited from the parent. If the transition duration is zero then we can safely
	        // rely that the delay value is an intentional stagger delay style.
	        var maxStagger = itemIndex > 0
	                         && ((timings.transitionDuration && stagger.transitionDuration === 0) ||
	                            (timings.animationDuration && stagger.animationDuration === 0))
	                         && Math.max(stagger.animationDelay, stagger.transitionDelay);
	        if (maxStagger) {
	          $timeout(triggerAnimationStart,
	                   Math.floor(maxStagger * itemIndex * ONE_SECOND),
	                   false);
	        } else {
	          triggerAnimationStart();
	        }

	        // this will decorate the existing promise runner with pause/resume methods
	        runnerHost.resume = function() {
	          playPause(true);
	        };

	        runnerHost.pause = function() {
	          playPause(false);
	        };

	        function triggerAnimationStart() {
	          // just incase a stagger animation kicks in when the animation
	          // itself was cancelled entirely
	          if (animationClosed) return;

	          applyBlocking(false);

	          forEach(temporaryStyles, function(entry) {
	            var key = entry[0];
	            var value = entry[1];
	            node.style[key] = value;
	          });

	          applyAnimationClasses(element, options);
	          $$jqLite.addClass(element, activeClasses);

	          if (flags.recalculateTimingStyles) {
	            fullClassName = node.className + ' ' + preparationClasses;
	            cacheKey = gcsHashFn(node, fullClassName);

	            timings = computeTimings(node, fullClassName, cacheKey);
	            relativeDelay = timings.maxDelay;
	            maxDelay = Math.max(relativeDelay, 0);
	            maxDuration = timings.maxDuration;

	            if (maxDuration === 0) {
	              close();
	              return;
	            }

	            flags.hasTransitions = timings.transitionDuration > 0;
	            flags.hasAnimations = timings.animationDuration > 0;
	          }

	          if (flags.applyAnimationDelay) {
	            relativeDelay = typeof options.delay !== "boolean" && truthyTimingValue(options.delay)
	                  ? parseFloat(options.delay)
	                  : relativeDelay;

	            maxDelay = Math.max(relativeDelay, 0);
	            timings.animationDelay = relativeDelay;
	            delayStyle = getCssDelayStyle(relativeDelay, true);
	            temporaryStyles.push(delayStyle);
	            node.style[delayStyle[0]] = delayStyle[1];
	          }

	          maxDelayTime = maxDelay * ONE_SECOND;
	          maxDurationTime = maxDuration * ONE_SECOND;

	          if (options.easing) {
	            var easeProp, easeVal = options.easing;
	            if (flags.hasTransitions) {
	              easeProp = TRANSITION_PROP + TIMING_KEY;
	              temporaryStyles.push([easeProp, easeVal]);
	              node.style[easeProp] = easeVal;
	            }
	            if (flags.hasAnimations) {
	              easeProp = ANIMATION_PROP + TIMING_KEY;
	              temporaryStyles.push([easeProp, easeVal]);
	              node.style[easeProp] = easeVal;
	            }
	          }

	          if (timings.transitionDuration) {
	            events.push(TRANSITIONEND_EVENT);
	          }

	          if (timings.animationDuration) {
	            events.push(ANIMATIONEND_EVENT);
	          }

	          startTime = Date.now();
	          var timerTime = maxDelayTime + CLOSING_TIME_BUFFER * maxDurationTime;
	          var endTime = startTime + timerTime;

	          var animationsData = element.data(ANIMATE_TIMER_KEY) || [];
	          var setupFallbackTimer = true;
	          if (animationsData.length) {
	            var currentTimerData = animationsData[0];
	            setupFallbackTimer = endTime > currentTimerData.expectedEndTime;
	            if (setupFallbackTimer) {
	              $timeout.cancel(currentTimerData.timer);
	            } else {
	              animationsData.push(close);
	            }
	          }

	          if (setupFallbackTimer) {
	            var timer = $timeout(onAnimationExpired, timerTime, false);
	            animationsData[0] = {
	              timer: timer,
	              expectedEndTime: endTime
	            };
	            animationsData.push(close);
	            element.data(ANIMATE_TIMER_KEY, animationsData);
	          }

	          if (events.length) {
	            element.on(events.join(' '), onAnimationProgress);
	          }

	          if (options.to) {
	            if (options.cleanupStyles) {
	              registerRestorableStyles(restoreStyles, node, Object.keys(options.to));
	            }
	            applyAnimationToStyles(element, options);
	          }
	        }

	        function onAnimationExpired() {
	          var animationsData = element.data(ANIMATE_TIMER_KEY);

	          // this will be false in the event that the element was
	          // removed from the DOM (via a leave animation or something
	          // similar)
	          if (animationsData) {
	            for (var i = 1; i < animationsData.length; i++) {
	              animationsData[i]();
	            }
	            element.removeData(ANIMATE_TIMER_KEY);
	          }
	        }
	      }
	    };
	  }];
	}];

	var $$AnimateCssDriverProvider = ['$$animationProvider', function($$animationProvider) {
	  $$animationProvider.drivers.push('$$animateCssDriver');

	  var NG_ANIMATE_SHIM_CLASS_NAME = 'ng-animate-shim';
	  var NG_ANIMATE_ANCHOR_CLASS_NAME = 'ng-anchor';

	  var NG_OUT_ANCHOR_CLASS_NAME = 'ng-anchor-out';
	  var NG_IN_ANCHOR_CLASS_NAME = 'ng-anchor-in';

	  function isDocumentFragment(node) {
	    return node.parentNode && node.parentNode.nodeType === 11;
	  }

	  this.$get = ['$animateCss', '$rootScope', '$$AnimateRunner', '$rootElement', '$sniffer', '$$jqLite', '$document',
	       function($animateCss,   $rootScope,   $$AnimateRunner,   $rootElement,   $sniffer,   $$jqLite,   $document) {

	    // only browsers that support these properties can render animations
	    if (!$sniffer.animations && !$sniffer.transitions) return noop;

	    var bodyNode = $document[0].body;
	    var rootNode = getDomNode($rootElement);

	    var rootBodyElement = jqLite(
	      // this is to avoid using something that exists outside of the body
	      // we also special case the doc fragment case because our unit test code
	      // appends the $rootElement to the body after the app has been bootstrapped
	      isDocumentFragment(rootNode) || bodyNode.contains(rootNode) ? rootNode : bodyNode
	    );

	    var applyAnimationClasses = applyAnimationClassesFactory($$jqLite);

	    return function initDriverFn(animationDetails) {
	      return animationDetails.from && animationDetails.to
	          ? prepareFromToAnchorAnimation(animationDetails.from,
	                                         animationDetails.to,
	                                         animationDetails.classes,
	                                         animationDetails.anchors)
	          : prepareRegularAnimation(animationDetails);
	    };

	    function filterCssClasses(classes) {
	      //remove all the `ng-` stuff
	      return classes.replace(/\bng-\S+\b/g, '');
	    }

	    function getUniqueValues(a, b) {
	      if (isString(a)) a = a.split(' ');
	      if (isString(b)) b = b.split(' ');
	      return a.filter(function(val) {
	        return b.indexOf(val) === -1;
	      }).join(' ');
	    }

	    function prepareAnchoredAnimation(classes, outAnchor, inAnchor) {
	      var clone = jqLite(getDomNode(outAnchor).cloneNode(true));
	      var startingClasses = filterCssClasses(getClassVal(clone));

	      outAnchor.addClass(NG_ANIMATE_SHIM_CLASS_NAME);
	      inAnchor.addClass(NG_ANIMATE_SHIM_CLASS_NAME);

	      clone.addClass(NG_ANIMATE_ANCHOR_CLASS_NAME);

	      rootBodyElement.append(clone);

	      var animatorIn, animatorOut = prepareOutAnimation();

	      // the user may not end up using the `out` animation and
	      // only making use of the `in` animation or vice-versa.
	      // In either case we should allow this and not assume the
	      // animation is over unless both animations are not used.
	      if (!animatorOut) {
	        animatorIn = prepareInAnimation();
	        if (!animatorIn) {
	          return end();
	        }
	      }

	      var startingAnimator = animatorOut || animatorIn;

	      return {
	        start: function() {
	          var runner;

	          var currentAnimation = startingAnimator.start();
	          currentAnimation.done(function() {
	            currentAnimation = null;
	            if (!animatorIn) {
	              animatorIn = prepareInAnimation();
	              if (animatorIn) {
	                currentAnimation = animatorIn.start();
	                currentAnimation.done(function() {
	                  currentAnimation = null;
	                  end();
	                  runner.complete();
	                });
	                return currentAnimation;
	              }
	            }
	            // in the event that there is no `in` animation
	            end();
	            runner.complete();
	          });

	          runner = new $$AnimateRunner({
	            end: endFn,
	            cancel: endFn
	          });

	          return runner;

	          function endFn() {
	            if (currentAnimation) {
	              currentAnimation.end();
	            }
	          }
	        }
	      };

	      function calculateAnchorStyles(anchor) {
	        var styles = {};

	        var coords = getDomNode(anchor).getBoundingClientRect();

	        // we iterate directly since safari messes up and doesn't return
	        // all the keys for the coords object when iterated
	        forEach(['width','height','top','left'], function(key) {
	          var value = coords[key];
	          switch (key) {
	            case 'top':
	              value += bodyNode.scrollTop;
	              break;
	            case 'left':
	              value += bodyNode.scrollLeft;
	              break;
	          }
	          styles[key] = Math.floor(value) + 'px';
	        });
	        return styles;
	      }

	      function prepareOutAnimation() {
	        var animator = $animateCss(clone, {
	          addClass: NG_OUT_ANCHOR_CLASS_NAME,
	          delay: true,
	          from: calculateAnchorStyles(outAnchor)
	        });

	        // read the comment within `prepareRegularAnimation` to understand
	        // why this check is necessary
	        return animator.$$willAnimate ? animator : null;
	      }

	      function getClassVal(element) {
	        return element.attr('class') || '';
	      }

	      function prepareInAnimation() {
	        var endingClasses = filterCssClasses(getClassVal(inAnchor));
	        var toAdd = getUniqueValues(endingClasses, startingClasses);
	        var toRemove = getUniqueValues(startingClasses, endingClasses);

	        var animator = $animateCss(clone, {
	          to: calculateAnchorStyles(inAnchor),
	          addClass: NG_IN_ANCHOR_CLASS_NAME + ' ' + toAdd,
	          removeClass: NG_OUT_ANCHOR_CLASS_NAME + ' ' + toRemove,
	          delay: true
	        });

	        // read the comment within `prepareRegularAnimation` to understand
	        // why this check is necessary
	        return animator.$$willAnimate ? animator : null;
	      }

	      function end() {
	        clone.remove();
	        outAnchor.removeClass(NG_ANIMATE_SHIM_CLASS_NAME);
	        inAnchor.removeClass(NG_ANIMATE_SHIM_CLASS_NAME);
	      }
	    }

	    function prepareFromToAnchorAnimation(from, to, classes, anchors) {
	      var fromAnimation = prepareRegularAnimation(from, noop);
	      var toAnimation = prepareRegularAnimation(to, noop);

	      var anchorAnimations = [];
	      forEach(anchors, function(anchor) {
	        var outElement = anchor['out'];
	        var inElement = anchor['in'];
	        var animator = prepareAnchoredAnimation(classes, outElement, inElement);
	        if (animator) {
	          anchorAnimations.push(animator);
	        }
	      });

	      // no point in doing anything when there are no elements to animate
	      if (!fromAnimation && !toAnimation && anchorAnimations.length === 0) return;

	      return {
	        start: function() {
	          var animationRunners = [];

	          if (fromAnimation) {
	            animationRunners.push(fromAnimation.start());
	          }

	          if (toAnimation) {
	            animationRunners.push(toAnimation.start());
	          }

	          forEach(anchorAnimations, function(animation) {
	            animationRunners.push(animation.start());
	          });

	          var runner = new $$AnimateRunner({
	            end: endFn,
	            cancel: endFn // CSS-driven animations cannot be cancelled, only ended
	          });

	          $$AnimateRunner.all(animationRunners, function(status) {
	            runner.complete(status);
	          });

	          return runner;

	          function endFn() {
	            forEach(animationRunners, function(runner) {
	              runner.end();
	            });
	          }
	        }
	      };
	    }

	    function prepareRegularAnimation(animationDetails) {
	      var element = animationDetails.element;
	      var options = animationDetails.options || {};

	      if (animationDetails.structural) {
	        options.event = animationDetails.event;
	        options.structural = true;
	        options.applyClassesEarly = true;

	        // we special case the leave animation since we want to ensure that
	        // the element is removed as soon as the animation is over. Otherwise
	        // a flicker might appear or the element may not be removed at all
	        if (animationDetails.event === 'leave') {
	          options.onDone = options.domOperation;
	        }
	      }

	      // We assign the preparationClasses as the actual animation event since
	      // the internals of $animateCss will just suffix the event token values
	      // with `-active` to trigger the animation.
	      if (options.preparationClasses) {
	        options.event = concatWithSpace(options.event, options.preparationClasses);
	      }

	      var animator = $animateCss(element, options);

	      // the driver lookup code inside of $$animation attempts to spawn a
	      // driver one by one until a driver returns a.$$willAnimate animator object.
	      // $animateCss will always return an object, however, it will pass in
	      // a flag as a hint as to whether an animation was detected or not
	      return animator.$$willAnimate ? animator : null;
	    }
	  }];
	}];

	// TODO(matsko): use caching here to speed things up for detection
	// TODO(matsko): add documentation
	//  by the time...

	var $$AnimateJsProvider = ['$animateProvider', function($animateProvider) {
	  this.$get = ['$injector', '$$AnimateRunner', '$$jqLite',
	       function($injector,   $$AnimateRunner,   $$jqLite) {

	    var applyAnimationClasses = applyAnimationClassesFactory($$jqLite);
	         // $animateJs(element, 'enter');
	    return function(element, event, classes, options) {
	      var animationClosed = false;

	      // the `classes` argument is optional and if it is not used
	      // then the classes will be resolved from the element's className
	      // property as well as options.addClass/options.removeClass.
	      if (arguments.length === 3 && isObject(classes)) {
	        options = classes;
	        classes = null;
	      }

	      options = prepareAnimationOptions(options);
	      if (!classes) {
	        classes = element.attr('class') || '';
	        if (options.addClass) {
	          classes += ' ' + options.addClass;
	        }
	        if (options.removeClass) {
	          classes += ' ' + options.removeClass;
	        }
	      }

	      var classesToAdd = options.addClass;
	      var classesToRemove = options.removeClass;

	      // the lookupAnimations function returns a series of animation objects that are
	      // matched up with one or more of the CSS classes. These animation objects are
	      // defined via the module.animation factory function. If nothing is detected then
	      // we don't return anything which then makes $animation query the next driver.
	      var animations = lookupAnimations(classes);
	      var before, after;
	      if (animations.length) {
	        var afterFn, beforeFn;
	        if (event == 'leave') {
	          beforeFn = 'leave';
	          afterFn = 'afterLeave'; // TODO(matsko): get rid of this
	        } else {
	          beforeFn = 'before' + event.charAt(0).toUpperCase() + event.substr(1);
	          afterFn = event;
	        }

	        if (event !== 'enter' && event !== 'move') {
	          before = packageAnimations(element, event, options, animations, beforeFn);
	        }
	        after  = packageAnimations(element, event, options, animations, afterFn);
	      }

	      // no matching animations
	      if (!before && !after) return;

	      function applyOptions() {
	        options.domOperation();
	        applyAnimationClasses(element, options);
	      }

	      function close() {
	        animationClosed = true;
	        applyOptions();
	        applyAnimationStyles(element, options);
	      }

	      var runner;

	      return {
	        $$willAnimate: true,
	        end: function() {
	          if (runner) {
	            runner.end();
	          } else {
	            close();
	            runner = new $$AnimateRunner();
	            runner.complete(true);
	          }
	          return runner;
	        },
	        start: function() {
	          if (runner) {
	            return runner;
	          }

	          runner = new $$AnimateRunner();
	          var closeActiveAnimations;
	          var chain = [];

	          if (before) {
	            chain.push(function(fn) {
	              closeActiveAnimations = before(fn);
	            });
	          }

	          if (chain.length) {
	            chain.push(function(fn) {
	              applyOptions();
	              fn(true);
	            });
	          } else {
	            applyOptions();
	          }

	          if (after) {
	            chain.push(function(fn) {
	              closeActiveAnimations = after(fn);
	            });
	          }

	          runner.setHost({
	            end: function() {
	              endAnimations();
	            },
	            cancel: function() {
	              endAnimations(true);
	            }
	          });

	          $$AnimateRunner.chain(chain, onComplete);
	          return runner;

	          function onComplete(success) {
	            close(success);
	            runner.complete(success);
	          }

	          function endAnimations(cancelled) {
	            if (!animationClosed) {
	              (closeActiveAnimations || noop)(cancelled);
	              onComplete(cancelled);
	            }
	          }
	        }
	      };

	      function executeAnimationFn(fn, element, event, options, onDone) {
	        var args;
	        switch (event) {
	          case 'animate':
	            args = [element, options.from, options.to, onDone];
	            break;

	          case 'setClass':
	            args = [element, classesToAdd, classesToRemove, onDone];
	            break;

	          case 'addClass':
	            args = [element, classesToAdd, onDone];
	            break;

	          case 'removeClass':
	            args = [element, classesToRemove, onDone];
	            break;

	          default:
	            args = [element, onDone];
	            break;
	        }

	        args.push(options);

	        var value = fn.apply(fn, args);
	        if (value) {
	          if (isFunction(value.start)) {
	            value = value.start();
	          }

	          if (value instanceof $$AnimateRunner) {
	            value.done(onDone);
	          } else if (isFunction(value)) {
	            // optional onEnd / onCancel callback
	            return value;
	          }
	        }

	        return noop;
	      }

	      function groupEventedAnimations(element, event, options, animations, fnName) {
	        var operations = [];
	        forEach(animations, function(ani) {
	          var animation = ani[fnName];
	          if (!animation) return;

	          // note that all of these animations will run in parallel
	          operations.push(function() {
	            var runner;
	            var endProgressCb;

	            var resolved = false;
	            var onAnimationComplete = function(rejected) {
	              if (!resolved) {
	                resolved = true;
	                (endProgressCb || noop)(rejected);
	                runner.complete(!rejected);
	              }
	            };

	            runner = new $$AnimateRunner({
	              end: function() {
	                onAnimationComplete();
	              },
	              cancel: function() {
	                onAnimationComplete(true);
	              }
	            });

	            endProgressCb = executeAnimationFn(animation, element, event, options, function(result) {
	              var cancelled = result === false;
	              onAnimationComplete(cancelled);
	            });

	            return runner;
	          });
	        });

	        return operations;
	      }

	      function packageAnimations(element, event, options, animations, fnName) {
	        var operations = groupEventedAnimations(element, event, options, animations, fnName);
	        if (operations.length === 0) {
	          var a,b;
	          if (fnName === 'beforeSetClass') {
	            a = groupEventedAnimations(element, 'removeClass', options, animations, 'beforeRemoveClass');
	            b = groupEventedAnimations(element, 'addClass', options, animations, 'beforeAddClass');
	          } else if (fnName === 'setClass') {
	            a = groupEventedAnimations(element, 'removeClass', options, animations, 'removeClass');
	            b = groupEventedAnimations(element, 'addClass', options, animations, 'addClass');
	          }

	          if (a) {
	            operations = operations.concat(a);
	          }
	          if (b) {
	            operations = operations.concat(b);
	          }
	        }

	        if (operations.length === 0) return;

	        // TODO(matsko): add documentation
	        return function startAnimation(callback) {
	          var runners = [];
	          if (operations.length) {
	            forEach(operations, function(animateFn) {
	              runners.push(animateFn());
	            });
	          }

	          runners.length ? $$AnimateRunner.all(runners, callback) : callback();

	          return function endFn(reject) {
	            forEach(runners, function(runner) {
	              reject ? runner.cancel() : runner.end();
	            });
	          };
	        };
	      }
	    };

	    function lookupAnimations(classes) {
	      classes = isArray(classes) ? classes : classes.split(' ');
	      var matches = [], flagMap = {};
	      for (var i=0; i < classes.length; i++) {
	        var klass = classes[i],
	            animationFactory = $animateProvider.$$registeredAnimations[klass];
	        if (animationFactory && !flagMap[klass]) {
	          matches.push($injector.get(animationFactory));
	          flagMap[klass] = true;
	        }
	      }
	      return matches;
	    }
	  }];
	}];

	var $$AnimateJsDriverProvider = ['$$animationProvider', function($$animationProvider) {
	  $$animationProvider.drivers.push('$$animateJsDriver');
	  this.$get = ['$$animateJs', '$$AnimateRunner', function($$animateJs, $$AnimateRunner) {
	    return function initDriverFn(animationDetails) {
	      if (animationDetails.from && animationDetails.to) {
	        var fromAnimation = prepareAnimation(animationDetails.from);
	        var toAnimation = prepareAnimation(animationDetails.to);
	        if (!fromAnimation && !toAnimation) return;

	        return {
	          start: function() {
	            var animationRunners = [];

	            if (fromAnimation) {
	              animationRunners.push(fromAnimation.start());
	            }

	            if (toAnimation) {
	              animationRunners.push(toAnimation.start());
	            }

	            $$AnimateRunner.all(animationRunners, done);

	            var runner = new $$AnimateRunner({
	              end: endFnFactory(),
	              cancel: endFnFactory()
	            });

	            return runner;

	            function endFnFactory() {
	              return function() {
	                forEach(animationRunners, function(runner) {
	                  // at this point we cannot cancel animations for groups just yet. 1.5+
	                  runner.end();
	                });
	              };
	            }

	            function done(status) {
	              runner.complete(status);
	            }
	          }
	        };
	      } else {
	        return prepareAnimation(animationDetails);
	      }
	    };

	    function prepareAnimation(animationDetails) {
	      // TODO(matsko): make sure to check for grouped animations and delegate down to normal animations
	      var element = animationDetails.element;
	      var event = animationDetails.event;
	      var options = animationDetails.options;
	      var classes = animationDetails.classes;
	      return $$animateJs(element, event, classes, options);
	    }
	  }];
	}];

	var NG_ANIMATE_ATTR_NAME = 'data-ng-animate';
	var NG_ANIMATE_PIN_DATA = '$ngAnimatePin';
	var $$AnimateQueueProvider = ['$animateProvider', function($animateProvider) {
	  var PRE_DIGEST_STATE = 1;
	  var RUNNING_STATE = 2;
	  var ONE_SPACE = ' ';

	  var rules = this.rules = {
	    skip: [],
	    cancel: [],
	    join: []
	  };

	  function makeTruthyCssClassMap(classString) {
	    if (!classString) {
	      return null;
	    }

	    var keys = classString.split(ONE_SPACE);
	    var map = Object.create(null);

	    forEach(keys, function(key) {
	      map[key] = true;
	    });
	    return map;
	  }

	  function hasMatchingClasses(newClassString, currentClassString) {
	    if (newClassString && currentClassString) {
	      var currentClassMap = makeTruthyCssClassMap(currentClassString);
	      return newClassString.split(ONE_SPACE).some(function(className) {
	        return currentClassMap[className];
	      });
	    }
	  }

	  function isAllowed(ruleType, element, currentAnimation, previousAnimation) {
	    return rules[ruleType].some(function(fn) {
	      return fn(element, currentAnimation, previousAnimation);
	    });
	  }

	  function hasAnimationClasses(animation, and) {
	    var a = (animation.addClass || '').length > 0;
	    var b = (animation.removeClass || '').length > 0;
	    return and ? a && b : a || b;
	  }

	  rules.join.push(function(element, newAnimation, currentAnimation) {
	    // if the new animation is class-based then we can just tack that on
	    return !newAnimation.structural && hasAnimationClasses(newAnimation);
	  });

	  rules.skip.push(function(element, newAnimation, currentAnimation) {
	    // there is no need to animate anything if no classes are being added and
	    // there is no structural animation that will be triggered
	    return !newAnimation.structural && !hasAnimationClasses(newAnimation);
	  });

	  rules.skip.push(function(element, newAnimation, currentAnimation) {
	    // why should we trigger a new structural animation if the element will
	    // be removed from the DOM anyway?
	    return currentAnimation.event == 'leave' && newAnimation.structural;
	  });

	  rules.skip.push(function(element, newAnimation, currentAnimation) {
	    // if there is an ongoing current animation then don't even bother running the class-based animation
	    return currentAnimation.structural && currentAnimation.state === RUNNING_STATE && !newAnimation.structural;
	  });

	  rules.cancel.push(function(element, newAnimation, currentAnimation) {
	    // there can never be two structural animations running at the same time
	    return currentAnimation.structural && newAnimation.structural;
	  });

	  rules.cancel.push(function(element, newAnimation, currentAnimation) {
	    // if the previous animation is already running, but the new animation will
	    // be triggered, but the new animation is structural
	    return currentAnimation.state === RUNNING_STATE && newAnimation.structural;
	  });

	  rules.cancel.push(function(element, newAnimation, currentAnimation) {
	    // cancel the animation if classes added / removed in both animation cancel each other out,
	    // but only if the current animation isn't structural

	    if (currentAnimation.structural) return false;

	    var nA = newAnimation.addClass;
	    var nR = newAnimation.removeClass;
	    var cA = currentAnimation.addClass;
	    var cR = currentAnimation.removeClass;

	    // early detection to save the global CPU shortage :)
	    if ((isUndefined(nA) && isUndefined(nR)) || (isUndefined(cA) && isUndefined(cR))) {
	      return false;
	    }

	    return hasMatchingClasses(nA, cR) || hasMatchingClasses(nR, cA);
	  });

	  this.$get = ['$$rAF', '$rootScope', '$rootElement', '$document', '$$HashMap',
	               '$$animation', '$$AnimateRunner', '$templateRequest', '$$jqLite', '$$forceReflow',
	       function($$rAF,   $rootScope,   $rootElement,   $document,   $$HashMap,
	                $$animation,   $$AnimateRunner,   $templateRequest,   $$jqLite,   $$forceReflow) {

	    var activeAnimationsLookup = new $$HashMap();
	    var disabledElementsLookup = new $$HashMap();
	    var animationsEnabled = null;

	    function postDigestTaskFactory() {
	      var postDigestCalled = false;
	      return function(fn) {
	        // we only issue a call to postDigest before
	        // it has first passed. This prevents any callbacks
	        // from not firing once the animation has completed
	        // since it will be out of the digest cycle.
	        if (postDigestCalled) {
	          fn();
	        } else {
	          $rootScope.$$postDigest(function() {
	            postDigestCalled = true;
	            fn();
	          });
	        }
	      };
	    }

	    // Wait until all directive and route-related templates are downloaded and
	    // compiled. The $templateRequest.totalPendingRequests variable keeps track of
	    // all of the remote templates being currently downloaded. If there are no
	    // templates currently downloading then the watcher will still fire anyway.
	    var deregisterWatch = $rootScope.$watch(
	      function() { return $templateRequest.totalPendingRequests === 0; },
	      function(isEmpty) {
	        if (!isEmpty) return;
	        deregisterWatch();

	        // Now that all templates have been downloaded, $animate will wait until
	        // the post digest queue is empty before enabling animations. By having two
	        // calls to $postDigest calls we can ensure that the flag is enabled at the
	        // very end of the post digest queue. Since all of the animations in $animate
	        // use $postDigest, it's important that the code below executes at the end.
	        // This basically means that the page is fully downloaded and compiled before
	        // any animations are triggered.
	        $rootScope.$$postDigest(function() {
	          $rootScope.$$postDigest(function() {
	            // we check for null directly in the event that the application already called
	            // .enabled() with whatever arguments that it provided it with
	            if (animationsEnabled === null) {
	              animationsEnabled = true;
	            }
	          });
	        });
	      }
	    );

	    var callbackRegistry = {};

	    // remember that the classNameFilter is set during the provider/config
	    // stage therefore we can optimize here and setup a helper function
	    var classNameFilter = $animateProvider.classNameFilter();
	    var isAnimatableClassName = !classNameFilter
	              ? function() { return true; }
	              : function(className) {
	                return classNameFilter.test(className);
	              };

	    var applyAnimationClasses = applyAnimationClassesFactory($$jqLite);

	    function normalizeAnimationDetails(element, animation) {
	      return mergeAnimationDetails(element, animation, {});
	    }

	    // IE9-11 has no method "contains" in SVG element and in Node.prototype. Bug #10259.
	    var contains = window.Node.prototype.contains || function(arg) {
	      // jshint bitwise: false
	      return this === arg || !!(this.compareDocumentPosition(arg) & 16);
	      // jshint bitwise: true
	    };

	    function findCallbacks(parent, element, event) {
	      var targetNode = getDomNode(element);
	      var targetParentNode = getDomNode(parent);

	      var matches = [];
	      var entries = callbackRegistry[event];
	      if (entries) {
	        forEach(entries, function(entry) {
	          if (contains.call(entry.node, targetNode)) {
	            matches.push(entry.callback);
	          } else if (event === 'leave' && contains.call(entry.node, targetParentNode)) {
	            matches.push(entry.callback);
	          }
	        });
	      }

	      return matches;
	    }

	    function filterFromRegistry(list, matchContainer, matchCallback) {
	      var containerNode = extractElementNode(matchContainer);
	      return list.filter(function(entry) {
	        var isMatch = entry.node === containerNode &&
	                        (!matchCallback || entry.callback === matchCallback);
	        return !isMatch;
	      });
	    }

	    function cleanupEventListeners(phase, element) {
	      if (phase === 'close' && !element[0].parentNode) {
	        // If the element is not attached to a parentNode, it has been removed by
	        // the domOperation, and we can safely remove the event callbacks
	        $animate.off(element);
	      }
	    }

	    var $animate = {
	      on: function(event, container, callback) {
	        var node = extractElementNode(container);
	        callbackRegistry[event] = callbackRegistry[event] || [];
	        callbackRegistry[event].push({
	          node: node,
	          callback: callback
	        });

	        // Remove the callback when the element is removed from the DOM
	        jqLite(container).on('$destroy', function() {
	          var animationDetails = activeAnimationsLookup.get(node);

	          if (!animationDetails) {
	            // If there's an animation ongoing, the callback calling code will remove
	            // the event listeners. If we'd remove here, the callbacks would be removed
	            // before the animation ends
	            $animate.off(event, container, callback);
	          }
	        });
	      },

	      off: function(event, container, callback) {
	        if (arguments.length === 1 && !angular.isString(arguments[0])) {
	          container = arguments[0];
	          for (var eventType in callbackRegistry) {
	            callbackRegistry[eventType] = filterFromRegistry(callbackRegistry[eventType], container);
	          }

	          return;
	        }

	        var entries = callbackRegistry[event];
	        if (!entries) return;

	        callbackRegistry[event] = arguments.length === 1
	            ? null
	            : filterFromRegistry(entries, container, callback);
	      },

	      pin: function(element, parentElement) {
	        assertArg(isElement(element), 'element', 'not an element');
	        assertArg(isElement(parentElement), 'parentElement', 'not an element');
	        element.data(NG_ANIMATE_PIN_DATA, parentElement);
	      },

	      push: function(element, event, options, domOperation) {
	        options = options || {};
	        options.domOperation = domOperation;
	        return queueAnimation(element, event, options);
	      },

	      // this method has four signatures:
	      //  () - global getter
	      //  (bool) - global setter
	      //  (element) - element getter
	      //  (element, bool) - element setter<F37>
	      enabled: function(element, bool) {
	        var argCount = arguments.length;

	        if (argCount === 0) {
	          // () - Global getter
	          bool = !!animationsEnabled;
	        } else {
	          var hasElement = isElement(element);

	          if (!hasElement) {
	            // (bool) - Global setter
	            bool = animationsEnabled = !!element;
	          } else {
	            var node = getDomNode(element);
	            var recordExists = disabledElementsLookup.get(node);

	            if (argCount === 1) {
	              // (element) - Element getter
	              bool = !recordExists;
	            } else {
	              // (element, bool) - Element setter
	              disabledElementsLookup.put(node, !bool);
	            }
	          }
	        }

	        return bool;
	      }
	    };

	    return $animate;

	    function queueAnimation(element, event, initialOptions) {
	      // we always make a copy of the options since
	      // there should never be any side effects on
	      // the input data when running `$animateCss`.
	      var options = copy(initialOptions);

	      var node, parent;
	      element = stripCommentsFromElement(element);
	      if (element) {
	        node = getDomNode(element);
	        parent = element.parent();
	      }

	      options = prepareAnimationOptions(options);

	      // we create a fake runner with a working promise.
	      // These methods will become available after the digest has passed
	      var runner = new $$AnimateRunner();

	      // this is used to trigger callbacks in postDigest mode
	      var runInNextPostDigestOrNow = postDigestTaskFactory();

	      if (isArray(options.addClass)) {
	        options.addClass = options.addClass.join(' ');
	      }

	      if (options.addClass && !isString(options.addClass)) {
	        options.addClass = null;
	      }

	      if (isArray(options.removeClass)) {
	        options.removeClass = options.removeClass.join(' ');
	      }

	      if (options.removeClass && !isString(options.removeClass)) {
	        options.removeClass = null;
	      }

	      if (options.from && !isObject(options.from)) {
	        options.from = null;
	      }

	      if (options.to && !isObject(options.to)) {
	        options.to = null;
	      }

	      // there are situations where a directive issues an animation for
	      // a jqLite wrapper that contains only comment nodes... If this
	      // happens then there is no way we can perform an animation
	      if (!node) {
	        close();
	        return runner;
	      }

	      var className = [node.className, options.addClass, options.removeClass].join(' ');
	      if (!isAnimatableClassName(className)) {
	        close();
	        return runner;
	      }

	      var isStructural = ['enter', 'move', 'leave'].indexOf(event) >= 0;

	      var documentHidden = $document[0].hidden;

	      // this is a hard disable of all animations for the application or on
	      // the element itself, therefore  there is no need to continue further
	      // past this point if not enabled
	      // Animations are also disabled if the document is currently hidden (page is not visible
	      // to the user), because browsers slow down or do not flush calls to requestAnimationFrame
	      var skipAnimations = !animationsEnabled || documentHidden || disabledElementsLookup.get(node);
	      var existingAnimation = (!skipAnimations && activeAnimationsLookup.get(node)) || {};
	      var hasExistingAnimation = !!existingAnimation.state;

	      // there is no point in traversing the same collection of parent ancestors if a followup
	      // animation will be run on the same element that already did all that checking work
	      if (!skipAnimations && (!hasExistingAnimation || existingAnimation.state != PRE_DIGEST_STATE)) {
	        skipAnimations = !areAnimationsAllowed(element, parent, event);
	      }

	      if (skipAnimations) {
	        // Callbacks should fire even if the document is hidden (regression fix for issue #14120)
	        if (documentHidden) notifyProgress(runner, event, 'start');
	        close();
	        if (documentHidden) notifyProgress(runner, event, 'close');
	        return runner;
	      }

	      if (isStructural) {
	        closeChildAnimations(element);
	      }

	      var newAnimation = {
	        structural: isStructural,
	        element: element,
	        event: event,
	        addClass: options.addClass,
	        removeClass: options.removeClass,
	        close: close,
	        options: options,
	        runner: runner
	      };

	      if (hasExistingAnimation) {
	        var skipAnimationFlag = isAllowed('skip', element, newAnimation, existingAnimation);
	        if (skipAnimationFlag) {
	          if (existingAnimation.state === RUNNING_STATE) {
	            close();
	            return runner;
	          } else {
	            mergeAnimationDetails(element, existingAnimation, newAnimation);
	            return existingAnimation.runner;
	          }
	        }
	        var cancelAnimationFlag = isAllowed('cancel', element, newAnimation, existingAnimation);
	        if (cancelAnimationFlag) {
	          if (existingAnimation.state === RUNNING_STATE) {
	            // this will end the animation right away and it is safe
	            // to do so since the animation is already running and the
	            // runner callback code will run in async
	            existingAnimation.runner.end();
	          } else if (existingAnimation.structural) {
	            // this means that the animation is queued into a digest, but
	            // hasn't started yet. Therefore it is safe to run the close
	            // method which will call the runner methods in async.
	            existingAnimation.close();
	          } else {
	            // this will merge the new animation options into existing animation options
	            mergeAnimationDetails(element, existingAnimation, newAnimation);

	            return existingAnimation.runner;
	          }
	        } else {
	          // a joined animation means that this animation will take over the existing one
	          // so an example would involve a leave animation taking over an enter. Then when
	          // the postDigest kicks in the enter will be ignored.
	          var joinAnimationFlag = isAllowed('join', element, newAnimation, existingAnimation);
	          if (joinAnimationFlag) {
	            if (existingAnimation.state === RUNNING_STATE) {
	              normalizeAnimationDetails(element, newAnimation);
	            } else {
	              applyGeneratedPreparationClasses(element, isStructural ? event : null, options);

	              event = newAnimation.event = existingAnimation.event;
	              options = mergeAnimationDetails(element, existingAnimation, newAnimation);

	              //we return the same runner since only the option values of this animation will
	              //be fed into the `existingAnimation`.
	              return existingAnimation.runner;
	            }
	          }
	        }
	      } else {
	        // normalization in this case means that it removes redundant CSS classes that
	        // already exist (addClass) or do not exist (removeClass) on the element
	        normalizeAnimationDetails(element, newAnimation);
	      }

	      // when the options are merged and cleaned up we may end up not having to do
	      // an animation at all, therefore we should check this before issuing a post
	      // digest callback. Structural animations will always run no matter what.
	      var isValidAnimation = newAnimation.structural;
	      if (!isValidAnimation) {
	        // animate (from/to) can be quickly checked first, otherwise we check if any classes are present
	        isValidAnimation = (newAnimation.event === 'animate' && Object.keys(newAnimation.options.to || {}).length > 0)
	                            || hasAnimationClasses(newAnimation);
	      }

	      if (!isValidAnimation) {
	        close();
	        clearElementAnimationState(element);
	        return runner;
	      }

	      // the counter keeps track of cancelled animations
	      var counter = (existingAnimation.counter || 0) + 1;
	      newAnimation.counter = counter;

	      markElementAnimationState(element, PRE_DIGEST_STATE, newAnimation);

	      $rootScope.$$postDigest(function() {
	        var animationDetails = activeAnimationsLookup.get(node);
	        var animationCancelled = !animationDetails;
	        animationDetails = animationDetails || {};

	        // if addClass/removeClass is called before something like enter then the
	        // registered parent element may not be present. The code below will ensure
	        // that a final value for parent element is obtained
	        var parentElement = element.parent() || [];

	        // animate/structural/class-based animations all have requirements. Otherwise there
	        // is no point in performing an animation. The parent node must also be set.
	        var isValidAnimation = parentElement.length > 0
	                                && (animationDetails.event === 'animate'
	                                    || animationDetails.structural
	                                    || hasAnimationClasses(animationDetails));

	        // this means that the previous animation was cancelled
	        // even if the follow-up animation is the same event
	        if (animationCancelled || animationDetails.counter !== counter || !isValidAnimation) {
	          // if another animation did not take over then we need
	          // to make sure that the domOperation and options are
	          // handled accordingly
	          if (animationCancelled) {
	            applyAnimationClasses(element, options);
	            applyAnimationStyles(element, options);
	          }

	          // if the event changed from something like enter to leave then we do
	          // it, otherwise if it's the same then the end result will be the same too
	          if (animationCancelled || (isStructural && animationDetails.event !== event)) {
	            options.domOperation();
	            runner.end();
	          }

	          // in the event that the element animation was not cancelled or a follow-up animation
	          // isn't allowed to animate from here then we need to clear the state of the element
	          // so that any future animations won't read the expired animation data.
	          if (!isValidAnimation) {
	            clearElementAnimationState(element);
	          }

	          return;
	        }

	        // this combined multiple class to addClass / removeClass into a setClass event
	        // so long as a structural event did not take over the animation
	        event = !animationDetails.structural && hasAnimationClasses(animationDetails, true)
	            ? 'setClass'
	            : animationDetails.event;

	        markElementAnimationState(element, RUNNING_STATE);
	        var realRunner = $$animation(element, event, animationDetails.options);

	        // this will update the runner's flow-control events based on
	        // the `realRunner` object.
	        runner.setHost(realRunner);
	        notifyProgress(runner, event, 'start', {});

	        realRunner.done(function(status) {
	          close(!status);
	          var animationDetails = activeAnimationsLookup.get(node);
	          if (animationDetails && animationDetails.counter === counter) {
	            clearElementAnimationState(getDomNode(element));
	          }
	          notifyProgress(runner, event, 'close', {});
	        });
	      });

	      return runner;

	      function notifyProgress(runner, event, phase, data) {
	        runInNextPostDigestOrNow(function() {
	          var callbacks = findCallbacks(parent, element, event);
	          if (callbacks.length) {
	            // do not optimize this call here to RAF because
	            // we don't know how heavy the callback code here will
	            // be and if this code is buffered then this can
	            // lead to a performance regression.
	            $$rAF(function() {
	              forEach(callbacks, function(callback) {
	                callback(element, phase, data);
	              });
	              cleanupEventListeners(phase, element);
	            });
	          } else {
	            cleanupEventListeners(phase, element);
	          }
	        });
	        runner.progress(event, phase, data);
	      }

	      function close(reject) { // jshint ignore:line
	        clearGeneratedClasses(element, options);
	        applyAnimationClasses(element, options);
	        applyAnimationStyles(element, options);
	        options.domOperation();
	        runner.complete(!reject);
	      }
	    }

	    function closeChildAnimations(element) {
	      var node = getDomNode(element);
	      var children = node.querySelectorAll('[' + NG_ANIMATE_ATTR_NAME + ']');
	      forEach(children, function(child) {
	        var state = parseInt(child.getAttribute(NG_ANIMATE_ATTR_NAME));
	        var animationDetails = activeAnimationsLookup.get(child);
	        if (animationDetails) {
	          switch (state) {
	            case RUNNING_STATE:
	              animationDetails.runner.end();
	              /* falls through */
	            case PRE_DIGEST_STATE:
	              activeAnimationsLookup.remove(child);
	              break;
	          }
	        }
	      });
	    }

	    function clearElementAnimationState(element) {
	      var node = getDomNode(element);
	      node.removeAttribute(NG_ANIMATE_ATTR_NAME);
	      activeAnimationsLookup.remove(node);
	    }

	    function isMatchingElement(nodeOrElmA, nodeOrElmB) {
	      return getDomNode(nodeOrElmA) === getDomNode(nodeOrElmB);
	    }

	    /**
	     * This fn returns false if any of the following is true:
	     * a) animations on any parent element are disabled, and animations on the element aren't explicitly allowed
	     * b) a parent element has an ongoing structural animation, and animateChildren is false
	     * c) the element is not a child of the body
	     * d) the element is not a child of the $rootElement
	     */
	    function areAnimationsAllowed(element, parentElement, event) {
	      var bodyElement = jqLite($document[0].body);
	      var bodyElementDetected = isMatchingElement(element, bodyElement) || element[0].nodeName === 'HTML';
	      var rootElementDetected = isMatchingElement(element, $rootElement);
	      var parentAnimationDetected = false;
	      var animateChildren;
	      var elementDisabled = disabledElementsLookup.get(getDomNode(element));

	      var parentHost = jqLite.data(element[0], NG_ANIMATE_PIN_DATA);
	      if (parentHost) {
	        parentElement = parentHost;
	      }

	      parentElement = getDomNode(parentElement);

	      while (parentElement) {
	        if (!rootElementDetected) {
	          // angular doesn't want to attempt to animate elements outside of the application
	          // therefore we need to ensure that the rootElement is an ancestor of the current element
	          rootElementDetected = isMatchingElement(parentElement, $rootElement);
	        }

	        if (parentElement.nodeType !== ELEMENT_NODE) {
	          // no point in inspecting the #document element
	          break;
	        }

	        var details = activeAnimationsLookup.get(parentElement) || {};
	        // either an enter, leave or move animation will commence
	        // therefore we can't allow any animations to take place
	        // but if a parent animation is class-based then that's ok
	        if (!parentAnimationDetected) {
	          var parentElementDisabled = disabledElementsLookup.get(parentElement);

	          if (parentElementDisabled === true && elementDisabled !== false) {
	            // disable animations if the user hasn't explicitly enabled animations on the
	            // current element
	            elementDisabled = true;
	            // element is disabled via parent element, no need to check anything else
	            break;
	          } else if (parentElementDisabled === false) {
	            elementDisabled = false;
	          }
	          parentAnimationDetected = details.structural;
	        }

	        if (isUndefined(animateChildren) || animateChildren === true) {
	          var value = jqLite.data(parentElement, NG_ANIMATE_CHILDREN_DATA);
	          if (isDefined(value)) {
	            animateChildren = value;
	          }
	        }

	        // there is no need to continue traversing at this point
	        if (parentAnimationDetected && animateChildren === false) break;

	        if (!bodyElementDetected) {
	          // we also need to ensure that the element is or will be a part of the body element
	          // otherwise it is pointless to even issue an animation to be rendered
	          bodyElementDetected = isMatchingElement(parentElement, bodyElement);
	        }

	        if (bodyElementDetected && rootElementDetected) {
	          // If both body and root have been found, any other checks are pointless,
	          // as no animation data should live outside the application
	          break;
	        }

	        if (!rootElementDetected) {
	          // If no rootElement is detected, check if the parentElement is pinned to another element
	          parentHost = jqLite.data(parentElement, NG_ANIMATE_PIN_DATA);
	          if (parentHost) {
	            // The pin target element becomes the next parent element
	            parentElement = getDomNode(parentHost);
	            continue;
	          }
	        }

	        parentElement = parentElement.parentNode;
	      }

	      var allowAnimation = (!parentAnimationDetected || animateChildren) && elementDisabled !== true;
	      return allowAnimation && rootElementDetected && bodyElementDetected;
	    }

	    function markElementAnimationState(element, state, details) {
	      details = details || {};
	      details.state = state;

	      var node = getDomNode(element);
	      node.setAttribute(NG_ANIMATE_ATTR_NAME, state);

	      var oldValue = activeAnimationsLookup.get(node);
	      var newValue = oldValue
	          ? extend(oldValue, details)
	          : details;
	      activeAnimationsLookup.put(node, newValue);
	    }
	  }];
	}];

	var $$AnimationProvider = ['$animateProvider', function($animateProvider) {
	  var NG_ANIMATE_REF_ATTR = 'ng-animate-ref';

	  var drivers = this.drivers = [];

	  var RUNNER_STORAGE_KEY = '$$animationRunner';

	  function setRunner(element, runner) {
	    element.data(RUNNER_STORAGE_KEY, runner);
	  }

	  function removeRunner(element) {
	    element.removeData(RUNNER_STORAGE_KEY);
	  }

	  function getRunner(element) {
	    return element.data(RUNNER_STORAGE_KEY);
	  }

	  this.$get = ['$$jqLite', '$rootScope', '$injector', '$$AnimateRunner', '$$HashMap', '$$rAFScheduler',
	       function($$jqLite,   $rootScope,   $injector,   $$AnimateRunner,   $$HashMap,   $$rAFScheduler) {

	    var animationQueue = [];
	    var applyAnimationClasses = applyAnimationClassesFactory($$jqLite);

	    function sortAnimations(animations) {
	      var tree = { children: [] };
	      var i, lookup = new $$HashMap();

	      // this is done first beforehand so that the hashmap
	      // is filled with a list of the elements that will be animated
	      for (i = 0; i < animations.length; i++) {
	        var animation = animations[i];
	        lookup.put(animation.domNode, animations[i] = {
	          domNode: animation.domNode,
	          fn: animation.fn,
	          children: []
	        });
	      }

	      for (i = 0; i < animations.length; i++) {
	        processNode(animations[i]);
	      }

	      return flatten(tree);

	      function processNode(entry) {
	        if (entry.processed) return entry;
	        entry.processed = true;

	        var elementNode = entry.domNode;
	        var parentNode = elementNode.parentNode;
	        lookup.put(elementNode, entry);

	        var parentEntry;
	        while (parentNode) {
	          parentEntry = lookup.get(parentNode);
	          if (parentEntry) {
	            if (!parentEntry.processed) {
	              parentEntry = processNode(parentEntry);
	            }
	            break;
	          }
	          parentNode = parentNode.parentNode;
	        }

	        (parentEntry || tree).children.push(entry);
	        return entry;
	      }

	      function flatten(tree) {
	        var result = [];
	        var queue = [];
	        var i;

	        for (i = 0; i < tree.children.length; i++) {
	          queue.push(tree.children[i]);
	        }

	        var remainingLevelEntries = queue.length;
	        var nextLevelEntries = 0;
	        var row = [];

	        for (i = 0; i < queue.length; i++) {
	          var entry = queue[i];
	          if (remainingLevelEntries <= 0) {
	            remainingLevelEntries = nextLevelEntries;
	            nextLevelEntries = 0;
	            result.push(row);
	            row = [];
	          }
	          row.push(entry.fn);
	          entry.children.forEach(function(childEntry) {
	            nextLevelEntries++;
	            queue.push(childEntry);
	          });
	          remainingLevelEntries--;
	        }

	        if (row.length) {
	          result.push(row);
	        }

	        return result;
	      }
	    }

	    // TODO(matsko): document the signature in a better way
	    return function(element, event, options) {
	      options = prepareAnimationOptions(options);
	      var isStructural = ['enter', 'move', 'leave'].indexOf(event) >= 0;

	      // there is no animation at the current moment, however
	      // these runner methods will get later updated with the
	      // methods leading into the driver's end/cancel methods
	      // for now they just stop the animation from starting
	      var runner = new $$AnimateRunner({
	        end: function() { close(); },
	        cancel: function() { close(true); }
	      });

	      if (!drivers.length) {
	        close();
	        return runner;
	      }

	      setRunner(element, runner);

	      var classes = mergeClasses(element.attr('class'), mergeClasses(options.addClass, options.removeClass));
	      var tempClasses = options.tempClasses;
	      if (tempClasses) {
	        classes += ' ' + tempClasses;
	        options.tempClasses = null;
	      }

	      var prepareClassName;
	      if (isStructural) {
	        prepareClassName = 'ng-' + event + PREPARE_CLASS_SUFFIX;
	        $$jqLite.addClass(element, prepareClassName);
	      }

	      animationQueue.push({
	        // this data is used by the postDigest code and passed into
	        // the driver step function
	        element: element,
	        classes: classes,
	        event: event,
	        structural: isStructural,
	        options: options,
	        beforeStart: beforeStart,
	        close: close
	      });

	      element.on('$destroy', handleDestroyedElement);

	      // we only want there to be one function called within the post digest
	      // block. This way we can group animations for all the animations that
	      // were apart of the same postDigest flush call.
	      if (animationQueue.length > 1) return runner;

	      $rootScope.$$postDigest(function() {
	        var animations = [];
	        forEach(animationQueue, function(entry) {
	          // the element was destroyed early on which removed the runner
	          // form its storage. This means we can't animate this element
	          // at all and it already has been closed due to destruction.
	          if (getRunner(entry.element)) {
	            animations.push(entry);
	          } else {
	            entry.close();
	          }
	        });

	        // now any future animations will be in another postDigest
	        animationQueue.length = 0;

	        var groupedAnimations = groupAnimations(animations);
	        var toBeSortedAnimations = [];

	        forEach(groupedAnimations, function(animationEntry) {
	          toBeSortedAnimations.push({
	            domNode: getDomNode(animationEntry.from ? animationEntry.from.element : animationEntry.element),
	            fn: function triggerAnimationStart() {
	              // it's important that we apply the `ng-animate` CSS class and the
	              // temporary classes before we do any driver invoking since these
	              // CSS classes may be required for proper CSS detection.
	              animationEntry.beforeStart();

	              var startAnimationFn, closeFn = animationEntry.close;

	              // in the event that the element was removed before the digest runs or
	              // during the RAF sequencing then we should not trigger the animation.
	              var targetElement = animationEntry.anchors
	                  ? (animationEntry.from.element || animationEntry.to.element)
	                  : animationEntry.element;

	              if (getRunner(targetElement)) {
	                var operation = invokeFirstDriver(animationEntry);
	                if (operation) {
	                  startAnimationFn = operation.start;
	                }
	              }

	              if (!startAnimationFn) {
	                closeFn();
	              } else {
	                var animationRunner = startAnimationFn();
	                animationRunner.done(function(status) {
	                  closeFn(!status);
	                });
	                updateAnimationRunners(animationEntry, animationRunner);
	              }
	            }
	          });
	        });

	        // we need to sort each of the animations in order of parent to child
	        // relationships. This ensures that the child classes are applied at the
	        // right time.
	        $$rAFScheduler(sortAnimations(toBeSortedAnimations));
	      });

	      return runner;

	      // TODO(matsko): change to reference nodes
	      function getAnchorNodes(node) {
	        var SELECTOR = '[' + NG_ANIMATE_REF_ATTR + ']';
	        var items = node.hasAttribute(NG_ANIMATE_REF_ATTR)
	              ? [node]
	              : node.querySelectorAll(SELECTOR);
	        var anchors = [];
	        forEach(items, function(node) {
	          var attr = node.getAttribute(NG_ANIMATE_REF_ATTR);
	          if (attr && attr.length) {
	            anchors.push(node);
	          }
	        });
	        return anchors;
	      }

	      function groupAnimations(animations) {
	        var preparedAnimations = [];
	        var refLookup = {};
	        forEach(animations, function(animation, index) {
	          var element = animation.element;
	          var node = getDomNode(element);
	          var event = animation.event;
	          var enterOrMove = ['enter', 'move'].indexOf(event) >= 0;
	          var anchorNodes = animation.structural ? getAnchorNodes(node) : [];

	          if (anchorNodes.length) {
	            var direction = enterOrMove ? 'to' : 'from';

	            forEach(anchorNodes, function(anchor) {
	              var key = anchor.getAttribute(NG_ANIMATE_REF_ATTR);
	              refLookup[key] = refLookup[key] || {};
	              refLookup[key][direction] = {
	                animationID: index,
	                element: jqLite(anchor)
	              };
	            });
	          } else {
	            preparedAnimations.push(animation);
	          }
	        });

	        var usedIndicesLookup = {};
	        var anchorGroups = {};
	        forEach(refLookup, function(operations, key) {
	          var from = operations.from;
	          var to = operations.to;

	          if (!from || !to) {
	            // only one of these is set therefore we can't have an
	            // anchor animation since all three pieces are required
	            var index = from ? from.animationID : to.animationID;
	            var indexKey = index.toString();
	            if (!usedIndicesLookup[indexKey]) {
	              usedIndicesLookup[indexKey] = true;
	              preparedAnimations.push(animations[index]);
	            }
	            return;
	          }

	          var fromAnimation = animations[from.animationID];
	          var toAnimation = animations[to.animationID];
	          var lookupKey = from.animationID.toString();
	          if (!anchorGroups[lookupKey]) {
	            var group = anchorGroups[lookupKey] = {
	              structural: true,
	              beforeStart: function() {
	                fromAnimation.beforeStart();
	                toAnimation.beforeStart();
	              },
	              close: function() {
	                fromAnimation.close();
	                toAnimation.close();
	              },
	              classes: cssClassesIntersection(fromAnimation.classes, toAnimation.classes),
	              from: fromAnimation,
	              to: toAnimation,
	              anchors: [] // TODO(matsko): change to reference nodes
	            };

	            // the anchor animations require that the from and to elements both have at least
	            // one shared CSS class which effectively marries the two elements together to use
	            // the same animation driver and to properly sequence the anchor animation.
	            if (group.classes.length) {
	              preparedAnimations.push(group);
	            } else {
	              preparedAnimations.push(fromAnimation);
	              preparedAnimations.push(toAnimation);
	            }
	          }

	          anchorGroups[lookupKey].anchors.push({
	            'out': from.element, 'in': to.element
	          });
	        });

	        return preparedAnimations;
	      }

	      function cssClassesIntersection(a,b) {
	        a = a.split(' ');
	        b = b.split(' ');
	        var matches = [];

	        for (var i = 0; i < a.length; i++) {
	          var aa = a[i];
	          if (aa.substring(0,3) === 'ng-') continue;

	          for (var j = 0; j < b.length; j++) {
	            if (aa === b[j]) {
	              matches.push(aa);
	              break;
	            }
	          }
	        }

	        return matches.join(' ');
	      }

	      function invokeFirstDriver(animationDetails) {
	        // we loop in reverse order since the more general drivers (like CSS and JS)
	        // may attempt more elements, but custom drivers are more particular
	        for (var i = drivers.length - 1; i >= 0; i--) {
	          var driverName = drivers[i];
	          if (!$injector.has(driverName)) continue; // TODO(matsko): remove this check

	          var factory = $injector.get(driverName);
	          var driver = factory(animationDetails);
	          if (driver) {
	            return driver;
	          }
	        }
	      }

	      function beforeStart() {
	        element.addClass(NG_ANIMATE_CLASSNAME);
	        if (tempClasses) {
	          $$jqLite.addClass(element, tempClasses);
	        }
	        if (prepareClassName) {
	          $$jqLite.removeClass(element, prepareClassName);
	          prepareClassName = null;
	        }
	      }

	      function updateAnimationRunners(animation, newRunner) {
	        if (animation.from && animation.to) {
	          update(animation.from.element);
	          update(animation.to.element);
	        } else {
	          update(animation.element);
	        }

	        function update(element) {
	          getRunner(element).setHost(newRunner);
	        }
	      }

	      function handleDestroyedElement() {
	        var runner = getRunner(element);
	        if (runner && (event !== 'leave' || !options.$$domOperationFired)) {
	          runner.end();
	        }
	      }

	      function close(rejected) { // jshint ignore:line
	        element.off('$destroy', handleDestroyedElement);
	        removeRunner(element);

	        applyAnimationClasses(element, options);
	        applyAnimationStyles(element, options);
	        options.domOperation();

	        if (tempClasses) {
	          $$jqLite.removeClass(element, tempClasses);
	        }

	        element.removeClass(NG_ANIMATE_CLASSNAME);
	        runner.complete(!rejected);
	      }
	    };
	  }];
	}];

	/**
	 * @ngdoc directive
	 * @name ngAnimateSwap
	 * @restrict A
	 * @scope
	 *
	 * @description
	 *
	 * ngAnimateSwap is a animation-oriented directive that allows for the container to
	 * be removed and entered in whenever the associated expression changes. A
	 * common usecase for this directive is a rotating banner or slider component which
	 * contains one image being present at a time. When the active image changes
	 * then the old image will perform a `leave` animation and the new element
	 * will be inserted via an `enter` animation.
	 *
	 * @animations
	 * | Animation                        | Occurs                               |
	 * |----------------------------------|--------------------------------------|
	 * | {@link ng.$animate#enter enter}  | when the new element is inserted to the DOM  |
	 * | {@link ng.$animate#leave leave}  | when the old element is removed from the DOM |
	 *
	 * @example
	 * <example name="ngAnimateSwap-directive" module="ngAnimateSwapExample"
	 *          deps="angular-animate.js"
	 *          animations="true" fixBase="true">
	 *   <file name="index.html">
	 *     <div class="container" ng-controller="AppCtrl">
	 *       <div ng-animate-swap="number" class="cell swap-animation" ng-class="colorClass(number)">
	 *         {{ number }}
	 *       </div>
	 *     </div>
	 *   </file>
	 *   <file name="script.js">
	 *     angular.module('ngAnimateSwapExample', ['ngAnimate'])
	 *       .controller('AppCtrl', ['$scope', '$interval', function($scope, $interval) {
	 *         $scope.number = 0;
	 *         $interval(function() {
	 *           $scope.number++;
	 *         }, 1000);
	 *
	 *         var colors = ['red','blue','green','yellow','orange'];
	 *         $scope.colorClass = function(number) {
	 *           return colors[number % colors.length];
	 *         };
	 *       }]);
	 *   </file>
	 *  <file name="animations.css">
	 *  .container {
	 *    height:250px;
	 *    width:250px;
	 *    position:relative;
	 *    overflow:hidden;
	 *    border:2px solid black;
	 *  }
	 *  .container .cell {
	 *    font-size:150px;
	 *    text-align:center;
	 *    line-height:250px;
	 *    position:absolute;
	 *    top:0;
	 *    left:0;
	 *    right:0;
	 *    border-bottom:2px solid black;
	 *  }
	 *  .swap-animation.ng-enter, .swap-animation.ng-leave {
	 *    transition:0.5s linear all;
	 *  }
	 *  .swap-animation.ng-enter {
	 *    top:-250px;
	 *  }
	 *  .swap-animation.ng-enter-active {
	 *    top:0px;
	 *  }
	 *  .swap-animation.ng-leave {
	 *    top:0px;
	 *  }
	 *  .swap-animation.ng-leave-active {
	 *    top:250px;
	 *  }
	 *  .red { background:red; }
	 *  .green { background:green; }
	 *  .blue { background:blue; }
	 *  .yellow { background:yellow; }
	 *  .orange { background:orange; }
	 *  </file>
	 * </example>
	 */
	var ngAnimateSwapDirective = ['$animate', '$rootScope', function($animate, $rootScope) {
	  return {
	    restrict: 'A',
	    transclude: 'element',
	    terminal: true,
	    priority: 600, // we use 600 here to ensure that the directive is caught before others
	    link: function(scope, $element, attrs, ctrl, $transclude) {
	      var previousElement, previousScope;
	      scope.$watchCollection(attrs.ngAnimateSwap || attrs['for'], function(value) {
	        if (previousElement) {
	          $animate.leave(previousElement);
	        }
	        if (previousScope) {
	          previousScope.$destroy();
	          previousScope = null;
	        }
	        if (value || value === 0) {
	          previousScope = scope.$new();
	          $transclude(previousScope, function(element) {
	            previousElement = element;
	            $animate.enter(element, null, $element);
	          });
	        }
	      });
	    }
	  };
	}];

	/* global angularAnimateModule: true,

	   ngAnimateSwapDirective,
	   $$AnimateAsyncRunFactory,
	   $$rAFSchedulerFactory,
	   $$AnimateChildrenDirective,
	   $$AnimateQueueProvider,
	   $$AnimationProvider,
	   $AnimateCssProvider,
	   $$AnimateCssDriverProvider,
	   $$AnimateJsProvider,
	   $$AnimateJsDriverProvider,
	*/

	/**
	 * @ngdoc module
	 * @name ngAnimate
	 * @description
	 *
	 * The `ngAnimate` module provides support for CSS-based animations (keyframes and transitions) as well as JavaScript-based animations via
	 * callback hooks. Animations are not enabled by default, however, by including `ngAnimate` the animation hooks are enabled for an Angular app.
	 *
	 * <div doc-module-components="ngAnimate"></div>
	 *
	 * # Usage
	 * Simply put, there are two ways to make use of animations when ngAnimate is used: by using **CSS** and **JavaScript**. The former works purely based
	 * using CSS (by using matching CSS selectors/styles) and the latter triggers animations that are registered via `module.animation()`. For
	 * both CSS and JS animations the sole requirement is to have a matching `CSS class` that exists both in the registered animation and within
	 * the HTML element that the animation will be triggered on.
	 *
	 * ## Directive Support
	 * The following directives are "animation aware":
	 *
	 * | Directive                                                                                                | Supported Animations                                                     |
	 * |----------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
	 * | {@link ng.directive:ngRepeat#animations ngRepeat}                                                        | enter, leave and move                                                    |
	 * | {@link ngRoute.directive:ngView#animations ngView}                                                       | enter and leave                                                          |
	 * | {@link ng.directive:ngInclude#animations ngInclude}                                                      | enter and leave                                                          |
	 * | {@link ng.directive:ngSwitch#animations ngSwitch}                                                        | enter and leave                                                          |
	 * | {@link ng.directive:ngIf#animations ngIf}                                                                | enter and leave                                                          |
	 * | {@link ng.directive:ngClass#animations ngClass}                                                          | add and remove (the CSS class(es) present)                               |
	 * | {@link ng.directive:ngShow#animations ngShow} & {@link ng.directive:ngHide#animations ngHide}            | add and remove (the ng-hide class value)                                 |
	 * | {@link ng.directive:form#animation-hooks form} & {@link ng.directive:ngModel#animation-hooks ngModel}    | add and remove (dirty, pristine, valid, invalid & all other validations) |
	 * | {@link module:ngMessages#animations ngMessages}                                                          | add and remove (ng-active & ng-inactive)                                 |
	 * | {@link module:ngMessages#animations ngMessage}                                                           | enter and leave                                                          |
	 *
	 * (More information can be found by visiting each the documentation associated with each directive.)
	 *
	 * ## CSS-based Animations
	 *
	 * CSS-based animations with ngAnimate are unique since they require no JavaScript code at all. By using a CSS class that we reference between our HTML
	 * and CSS code we can create an animation that will be picked up by Angular when an the underlying directive performs an operation.
	 *
	 * The example below shows how an `enter` animation can be made possible on an element using `ng-if`:
	 *
	 * ```html
	 * <div ng-if="bool" class="fade">
	 *    Fade me in out
	 * </div>
	 * <button ng-click="bool=true">Fade In!</button>
	 * <button ng-click="bool=false">Fade Out!</button>
	 * ```
	 *
	 * Notice the CSS class **fade**? We can now create the CSS transition code that references this class:
	 *
	 * ```css
	 * /&#42; The starting CSS styles for the enter animation &#42;/
	 * .fade.ng-enter {
	 *   transition:0.5s linear all;
	 *   opacity:0;
	 * }
	 *
	 * /&#42; The finishing CSS styles for the enter animation &#42;/
	 * .fade.ng-enter.ng-enter-active {
	 *   opacity:1;
	 * }
	 * ```
	 *
	 * The key thing to remember here is that, depending on the animation event (which each of the directives above trigger depending on what's going on) two
	 * generated CSS classes will be applied to the element; in the example above we have `.ng-enter` and `.ng-enter-active`. For CSS transitions, the transition
	 * code **must** be defined within the starting CSS class (in this case `.ng-enter`). The destination class is what the transition will animate towards.
	 *
	 * If for example we wanted to create animations for `leave` and `move` (ngRepeat triggers move) then we can do so using the same CSS naming conventions:
	 *
	 * ```css
	 * /&#42; now the element will fade out before it is removed from the DOM &#42;/
	 * .fade.ng-leave {
	 *   transition:0.5s linear all;
	 *   opacity:1;
	 * }
	 * .fade.ng-leave.ng-leave-active {
	 *   opacity:0;
	 * }
	 * ```
	 *
	 * We can also make use of **CSS Keyframes** by referencing the keyframe animation within the starting CSS class:
	 *
	 * ```css
	 * /&#42; there is no need to define anything inside of the destination
	 * CSS class since the keyframe will take charge of the animation &#42;/
	 * .fade.ng-leave {
	 *   animation: my_fade_animation 0.5s linear;
	 *   -webkit-animation: my_fade_animation 0.5s linear;
	 * }
	 *
	 * @keyframes my_fade_animation {
	 *   from { opacity:1; }
	 *   to { opacity:0; }
	 * }
	 *
	 * @-webkit-keyframes my_fade_animation {
	 *   from { opacity:1; }
	 *   to { opacity:0; }
	 * }
	 * ```
	 *
	 * Feel free also mix transitions and keyframes together as well as any other CSS classes on the same element.
	 *
	 * ### CSS Class-based Animations
	 *
	 * Class-based animations (animations that are triggered via `ngClass`, `ngShow`, `ngHide` and some other directives) have a slightly different
	 * naming convention. Class-based animations are basic enough that a standard transition or keyframe can be referenced on the class being added
	 * and removed.
	 *
	 * For example if we wanted to do a CSS animation for `ngHide` then we place an animation on the `.ng-hide` CSS class:
	 *
	 * ```html
	 * <div ng-show="bool" class="fade">
	 *   Show and hide me
	 * </div>
	 * <button ng-click="bool=!bool">Toggle</button>
	 *
	 * <style>
	 * .fade.ng-hide {
	 *   transition:0.5s linear all;
	 *   opacity:0;
	 * }
	 * </style>
	 * ```
	 *
	 * All that is going on here with ngShow/ngHide behind the scenes is the `.ng-hide` class is added/removed (when the hidden state is valid). Since
	 * ngShow and ngHide are animation aware then we can match up a transition and ngAnimate handles the rest.
	 *
	 * In addition the addition and removal of the CSS class, ngAnimate also provides two helper methods that we can use to further decorate the animation
	 * with CSS styles.
	 *
	 * ```html
	 * <div ng-class="{on:onOff}" class="highlight">
	 *   Highlight this box
	 * </div>
	 * <button ng-click="onOff=!onOff">Toggle</button>
	 *
	 * <style>
	 * .highlight {
	 *   transition:0.5s linear all;
	 * }
	 * .highlight.on-add {
	 *   background:white;
	 * }
	 * .highlight.on {
	 *   background:yellow;
	 * }
	 * .highlight.on-remove {
	 *   background:black;
	 * }
	 * </style>
	 * ```
	 *
	 * We can also make use of CSS keyframes by placing them within the CSS classes.
	 *
	 *
	 * ### CSS Staggering Animations
	 * A Staggering animation is a collection of animations that are issued with a slight delay in between each successive operation resulting in a
	 * curtain-like effect. The ngAnimate module (versions >=1.2) supports staggering animations and the stagger effect can be
	 * performed by creating a **ng-EVENT-stagger** CSS class and attaching that class to the base CSS class used for
	 * the animation. The style property expected within the stagger class can either be a **transition-delay** or an
	 * **animation-delay** property (or both if your animation contains both transitions and keyframe animations).
	 *
	 * ```css
	 * .my-animation.ng-enter {
	 *   /&#42; standard transition code &#42;/
	 *   transition: 1s linear all;
	 *   opacity:0;
	 * }
	 * .my-animation.ng-enter-stagger {
	 *   /&#42; this will have a 100ms delay between each successive leave animation &#42;/
	 *   transition-delay: 0.1s;
	 *
	 *   /&#42; As of 1.4.4, this must always be set: it signals ngAnimate
	 *     to not accidentally inherit a delay property from another CSS class &#42;/
	 *   transition-duration: 0s;
	 * }
	 * .my-animation.ng-enter.ng-enter-active {
	 *   /&#42; standard transition styles &#42;/
	 *   opacity:1;
	 * }
	 * ```
	 *
	 * Staggering animations work by default in ngRepeat (so long as the CSS class is defined). Outside of ngRepeat, to use staggering animations
	 * on your own, they can be triggered by firing multiple calls to the same event on $animate. However, the restrictions surrounding this
	 * are that each of the elements must have the same CSS className value as well as the same parent element. A stagger operation
	 * will also be reset if one or more animation frames have passed since the multiple calls to `$animate` were fired.
	 *
	 * The following code will issue the **ng-leave-stagger** event on the element provided:
	 *
	 * ```js
	 * var kids = parent.children();
	 *
	 * $animate.leave(kids[0]); //stagger index=0
	 * $animate.leave(kids[1]); //stagger index=1
	 * $animate.leave(kids[2]); //stagger index=2
	 * $animate.leave(kids[3]); //stagger index=3
	 * $animate.leave(kids[4]); //stagger index=4
	 *
	 * window.requestAnimationFrame(function() {
	 *   //stagger has reset itself
	 *   $animate.leave(kids[5]); //stagger index=0
	 *   $animate.leave(kids[6]); //stagger index=1
	 *
	 *   $scope.$digest();
	 * });
	 * ```
	 *
	 * Stagger animations are currently only supported within CSS-defined animations.
	 *
	 * ### The `ng-animate` CSS class
	 *
	 * When ngAnimate is animating an element it will apply the `ng-animate` CSS class to the element for the duration of the animation.
	 * This is a temporary CSS class and it will be removed once the animation is over (for both JavaScript and CSS-based animations).
	 *
	 * Therefore, animations can be applied to an element using this temporary class directly via CSS.
	 *
	 * ```css
	 * .zipper.ng-animate {
	 *   transition:0.5s linear all;
	 * }
	 * .zipper.ng-enter {
	 *   opacity:0;
	 * }
	 * .zipper.ng-enter.ng-enter-active {
	 *   opacity:1;
	 * }
	 * .zipper.ng-leave {
	 *   opacity:1;
	 * }
	 * .zipper.ng-leave.ng-leave-active {
	 *   opacity:0;
	 * }
	 * ```
	 *
	 * (Note that the `ng-animate` CSS class is reserved and it cannot be applied on an element directly since ngAnimate will always remove
	 * the CSS class once an animation has completed.)
	 *
	 *
	 * ### The `ng-[event]-prepare` class
	 *
	 * This is a special class that can be used to prevent unwanted flickering / flash of content before
	 * the actual animation starts. The class is added as soon as an animation is initialized, but removed
	 * before the actual animation starts (after waiting for a $digest).
	 * It is also only added for *structural* animations (`enter`, `move`, and `leave`).
	 *
	 * In practice, flickering can appear when nesting elements with structural animations such as `ngIf`
	 * into elements that have class-based animations such as `ngClass`.
	 *
	 * ```html
	 * <div ng-class="{red: myProp}">
	 *   <div ng-class="{blue: myProp}">
	 *     <div class="message" ng-if="myProp"></div>
	 *   </div>
	 * </div>
	 * ```
	 *
	 * It is possible that during the `enter` animation, the `.message` div will be briefly visible before it starts animating.
	 * In that case, you can add styles to the CSS that make sure the element stays hidden before the animation starts:
	 *
	 * ```css
	 * .message.ng-enter-prepare {
	 *   opacity: 0;
	 * }
	 *
	 * ```
	 *
	 * ## JavaScript-based Animations
	 *
	 * ngAnimate also allows for animations to be consumed by JavaScript code. The approach is similar to CSS-based animations (where there is a shared
	 * CSS class that is referenced in our HTML code) but in addition we need to register the JavaScript animation on the module. By making use of the
	 * `module.animation()` module function we can register the animation.
	 *
	 * Let's see an example of a enter/leave animation using `ngRepeat`:
	 *
	 * ```html
	 * <div ng-repeat="item in items" class="slide">
	 *   {{ item }}
	 * </div>
	 * ```
	 *
	 * See the **slide** CSS class? Let's use that class to define an animation that we'll structure in our module code by using `module.animation`:
	 *
	 * ```js
	 * myModule.animation('.slide', [function() {
	 *   return {
	 *     // make note that other events (like addClass/removeClass)
	 *     // have different function input parameters
	 *     enter: function(element, doneFn) {
	 *       jQuery(element).fadeIn(1000, doneFn);
	 *
	 *       // remember to call doneFn so that angular
	 *       // knows that the animation has concluded
	 *     },
	 *
	 *     move: function(element, doneFn) {
	 *       jQuery(element).fadeIn(1000, doneFn);
	 *     },
	 *
	 *     leave: function(element, doneFn) {
	 *       jQuery(element).fadeOut(1000, doneFn);
	 *     }
	 *   }
	 * }]);
	 * ```
	 *
	 * The nice thing about JS-based animations is that we can inject other services and make use of advanced animation libraries such as
	 * greensock.js and velocity.js.
	 *
	 * If our animation code class-based (meaning that something like `ngClass`, `ngHide` and `ngShow` triggers it) then we can still define
	 * our animations inside of the same registered animation, however, the function input arguments are a bit different:
	 *
	 * ```html
	 * <div ng-class="color" class="colorful">
	 *   this box is moody
	 * </div>
	 * <button ng-click="color='red'">Change to red</button>
	 * <button ng-click="color='blue'">Change to blue</button>
	 * <button ng-click="color='green'">Change to green</button>
	 * ```
	 *
	 * ```js
	 * myModule.animation('.colorful', [function() {
	 *   return {
	 *     addClass: function(element, className, doneFn) {
	 *       // do some cool animation and call the doneFn
	 *     },
	 *     removeClass: function(element, className, doneFn) {
	 *       // do some cool animation and call the doneFn
	 *     },
	 *     setClass: function(element, addedClass, removedClass, doneFn) {
	 *       // do some cool animation and call the doneFn
	 *     }
	 *   }
	 * }]);
	 * ```
	 *
	 * ## CSS + JS Animations Together
	 *
	 * AngularJS 1.4 and higher has taken steps to make the amalgamation of CSS and JS animations more flexible. However, unlike earlier versions of Angular,
	 * defining CSS and JS animations to work off of the same CSS class will not work anymore. Therefore the example below will only result in **JS animations taking
	 * charge of the animation**:
	 *
	 * ```html
	 * <div ng-if="bool" class="slide">
	 *   Slide in and out
	 * </div>
	 * ```
	 *
	 * ```js
	 * myModule.animation('.slide', [function() {
	 *   return {
	 *     enter: function(element, doneFn) {
	 *       jQuery(element).slideIn(1000, doneFn);
	 *     }
	 *   }
	 * }]);
	 * ```
	 *
	 * ```css
	 * .slide.ng-enter {
	 *   transition:0.5s linear all;
	 *   transform:translateY(-100px);
	 * }
	 * .slide.ng-enter.ng-enter-active {
	 *   transform:translateY(0);
	 * }
	 * ```
	 *
	 * Does this mean that CSS and JS animations cannot be used together? Do JS-based animations always have higher priority? We can make up for the
	 * lack of CSS animations by using the `$animateCss` service to trigger our own tweaked-out, CSS-based animations directly from
	 * our own JS-based animation code:
	 *
	 * ```js
	 * myModule.animation('.slide', ['$animateCss', function($animateCss) {
	 *   return {
	 *     enter: function(element) {
	*        // this will trigger `.slide.ng-enter` and `.slide.ng-enter-active`.
	 *       return $animateCss(element, {
	 *         event: 'enter',
	 *         structural: true
	 *       });
	 *     }
	 *   }
	 * }]);
	 * ```
	 *
	 * The nice thing here is that we can save bandwidth by sticking to our CSS-based animation code and we don't need to rely on a 3rd-party animation framework.
	 *
	 * The `$animateCss` service is very powerful since we can feed in all kinds of extra properties that will be evaluated and fed into a CSS transition or
	 * keyframe animation. For example if we wanted to animate the height of an element while adding and removing classes then we can do so by providing that
	 * data into `$animateCss` directly:
	 *
	 * ```js
	 * myModule.animation('.slide', ['$animateCss', function($animateCss) {
	 *   return {
	 *     enter: function(element) {
	 *       return $animateCss(element, {
	 *         event: 'enter',
	 *         structural: true,
	 *         addClass: 'maroon-setting',
	 *         from: { height:0 },
	 *         to: { height: 200 }
	 *       });
	 *     }
	 *   }
	 * }]);
	 * ```
	 *
	 * Now we can fill in the rest via our transition CSS code:
	 *
	 * ```css
	 * /&#42; the transition tells ngAnimate to make the animation happen &#42;/
	 * .slide.ng-enter { transition:0.5s linear all; }
	 *
	 * /&#42; this extra CSS class will be absorbed into the transition
	 * since the $animateCss code is adding the class &#42;/
	 * .maroon-setting { background:red; }
	 * ```
	 *
	 * And `$animateCss` will figure out the rest. Just make sure to have the `done()` callback fire the `doneFn` function to signal when the animation is over.
	 *
	 * To learn more about what's possible be sure to visit the {@link ngAnimate.$animateCss $animateCss service}.
	 *
	 * ## Animation Anchoring (via `ng-animate-ref`)
	 *
	 * ngAnimate in AngularJS 1.4 comes packed with the ability to cross-animate elements between
	 * structural areas of an application (like views) by pairing up elements using an attribute
	 * called `ng-animate-ref`.
	 *
	 * Let's say for example we have two views that are managed by `ng-view` and we want to show
	 * that there is a relationship between two components situated in within these views. By using the
	 * `ng-animate-ref` attribute we can identify that the two components are paired together and we
	 * can then attach an animation, which is triggered when the view changes.
	 *
	 * Say for example we have the following template code:
	 *
	 * ```html
	 * <!-- index.html -->
	 * <div ng-view class="view-animation">
	 * </div>
	 *
	 * <!-- home.html -->
	 * <a href="#/banner-page">
	 *   <img src="./banner.jpg" class="banner" ng-animate-ref="banner">
	 * </a>
	 *
	 * <!-- banner-page.html -->
	 * <img src="./banner.jpg" class="banner" ng-animate-ref="banner">
	 * ```
	 *
	 * Now, when the view changes (once the link is clicked), ngAnimate will examine the
	 * HTML contents to see if there is a match reference between any components in the view
	 * that is leaving and the view that is entering. It will scan both the view which is being
	 * removed (leave) and inserted (enter) to see if there are any paired DOM elements that
	 * contain a matching ref value.
	 *
	 * The two images match since they share the same ref value. ngAnimate will now create a
	 * transport element (which is a clone of the first image element) and it will then attempt
	 * to animate to the position of the second image element in the next view. For the animation to
	 * work a special CSS class called `ng-anchor` will be added to the transported element.
	 *
	 * We can now attach a transition onto the `.banner.ng-anchor` CSS class and then
	 * ngAnimate will handle the entire transition for us as well as the addition and removal of
	 * any changes of CSS classes between the elements:
	 *
	 * ```css
	 * .banner.ng-anchor {
	 *   /&#42; this animation will last for 1 second since there are
	 *          two phases to the animation (an `in` and an `out` phase) &#42;/
	 *   transition:0.5s linear all;
	 * }
	 * ```
	 *
	 * We also **must** include animations for the views that are being entered and removed
	 * (otherwise anchoring wouldn't be possible since the new view would be inserted right away).
	 *
	 * ```css
	 * .view-animation.ng-enter, .view-animation.ng-leave {
	 *   transition:0.5s linear all;
	 *   position:fixed;
	 *   left:0;
	 *   top:0;
	 *   width:100%;
	 * }
	 * .view-animation.ng-enter {
	 *   transform:translateX(100%);
	 * }
	 * .view-animation.ng-leave,
	 * .view-animation.ng-enter.ng-enter-active {
	 *   transform:translateX(0%);
	 * }
	 * .view-animation.ng-leave.ng-leave-active {
	 *   transform:translateX(-100%);
	 * }
	 * ```
	 *
	 * Now we can jump back to the anchor animation. When the animation happens, there are two stages that occur:
	 * an `out` and an `in` stage. The `out` stage happens first and that is when the element is animated away
	 * from its origin. Once that animation is over then the `in` stage occurs which animates the
	 * element to its destination. The reason why there are two animations is to give enough time
	 * for the enter animation on the new element to be ready.
	 *
	 * The example above sets up a transition for both the in and out phases, but we can also target the out or
	 * in phases directly via `ng-anchor-out` and `ng-anchor-in`.
	 *
	 * ```css
	 * .banner.ng-anchor-out {
	 *   transition: 0.5s linear all;
	 *
	 *   /&#42; the scale will be applied during the out animation,
	 *          but will be animated away when the in animation runs &#42;/
	 *   transform: scale(1.2);
	 * }
	 *
	 * .banner.ng-anchor-in {
	 *   transition: 1s linear all;
	 * }
	 * ```
	 *
	 *
	 *
	 *
	 * ### Anchoring Demo
	 *
	  <example module="anchoringExample"
	           name="anchoringExample"
	           id="anchoringExample"
	           deps="angular-animate.js;angular-route.js"
	           animations="true">
	    <file name="index.html">
	      <a href="#/">Home</a>
	      <hr />
	      <div class="view-container">
	        <div ng-view class="view"></div>
	      </div>
	    </file>
	    <file name="script.js">
	      angular.module('anchoringExample', ['ngAnimate', 'ngRoute'])
	        .config(['$routeProvider', function($routeProvider) {
	          $routeProvider.when('/', {
	            templateUrl: 'home.html',
	            controller: 'HomeController as home'
	          });
	          $routeProvider.when('/profile/:id', {
	            templateUrl: 'profile.html',
	            controller: 'ProfileController as profile'
	          });
	        }])
	        .run(['$rootScope', function($rootScope) {
	          $rootScope.records = [
	            { id:1, title: "Miss Beulah Roob" },
	            { id:2, title: "Trent Morissette" },
	            { id:3, title: "Miss Ava Pouros" },
	            { id:4, title: "Rod Pouros" },
	            { id:5, title: "Abdul Rice" },
	            { id:6, title: "Laurie Rutherford Sr." },
	            { id:7, title: "Nakia McLaughlin" },
	            { id:8, title: "Jordon Blanda DVM" },
	            { id:9, title: "Rhoda Hand" },
	            { id:10, title: "Alexandrea Sauer" }
	          ];
	        }])
	        .controller('HomeController', [function() {
	          //empty
	        }])
	        .controller('ProfileController', ['$rootScope', '$routeParams', function($rootScope, $routeParams) {
	          var index = parseInt($routeParams.id, 10);
	          var record = $rootScope.records[index - 1];

	          this.title = record.title;
	          this.id = record.id;
	        }]);
	    </file>
	    <file name="home.html">
	      <h2>Welcome to the home page</h1>
	      <p>Please click on an element</p>
	      <a class="record"
	         ng-href="#/profile/{{ record.id }}"
	         ng-animate-ref="{{ record.id }}"
	         ng-repeat="record in records">
	        {{ record.title }}
	      </a>
	    </file>
	    <file name="profile.html">
	      <div class="profile record" ng-animate-ref="{{ profile.id }}">
	        {{ profile.title }}
	      </div>
	    </file>
	    <file name="animations.css">
	      .record {
	        display:block;
	        font-size:20px;
	      }
	      .profile {
	        background:black;
	        color:white;
	        font-size:100px;
	      }
	      .view-container {
	        position:relative;
	      }
	      .view-container > .view.ng-animate {
	        position:absolute;
	        top:0;
	        left:0;
	        width:100%;
	        min-height:500px;
	      }
	      .view.ng-enter, .view.ng-leave,
	      .record.ng-anchor {
	        transition:0.5s linear all;
	      }
	      .view.ng-enter {
	        transform:translateX(100%);
	      }
	      .view.ng-enter.ng-enter-active, .view.ng-leave {
	        transform:translateX(0%);
	      }
	      .view.ng-leave.ng-leave-active {
	        transform:translateX(-100%);
	      }
	      .record.ng-anchor-out {
	        background:red;
	      }
	    </file>
	  </example>
	 *
	 * ### How is the element transported?
	 *
	 * When an anchor animation occurs, ngAnimate will clone the starting element and position it exactly where the starting
	 * element is located on screen via absolute positioning. The cloned element will be placed inside of the root element
	 * of the application (where ng-app was defined) and all of the CSS classes of the starting element will be applied. The
	 * element will then animate into the `out` and `in` animations and will eventually reach the coordinates and match
	 * the dimensions of the destination element. During the entire animation a CSS class of `.ng-animate-shim` will be applied
	 * to both the starting and destination elements in order to hide them from being visible (the CSS styling for the class
	 * is: `visibility:hidden`). Once the anchor reaches its destination then it will be removed and the destination element
	 * will become visible since the shim class will be removed.
	 *
	 * ### How is the morphing handled?
	 *
	 * CSS Anchoring relies on transitions and keyframes and the internal code is intelligent enough to figure out
	 * what CSS classes differ between the starting element and the destination element. These different CSS classes
	 * will be added/removed on the anchor element and a transition will be applied (the transition that is provided
	 * in the anchor class). Long story short, ngAnimate will figure out what classes to add and remove which will
	 * make the transition of the element as smooth and automatic as possible. Be sure to use simple CSS classes that
	 * do not rely on DOM nesting structure so that the anchor element appears the same as the starting element (since
	 * the cloned element is placed inside of root element which is likely close to the body element).
	 *
	 * Note that if the root element is on the `<html>` element then the cloned node will be placed inside of body.
	 *
	 *
	 * ## Using $animate in your directive code
	 *
	 * So far we've explored how to feed in animations into an Angular application, but how do we trigger animations within our own directives in our application?
	 * By injecting the `$animate` service into our directive code, we can trigger structural and class-based hooks which can then be consumed by animations. Let's
	 * imagine we have a greeting box that shows and hides itself when the data changes
	 *
	 * ```html
	 * <greeting-box active="onOrOff">Hi there</greeting-box>
	 * ```
	 *
	 * ```js
	 * ngModule.directive('greetingBox', ['$animate', function($animate) {
	 *   return function(scope, element, attrs) {
	 *     attrs.$observe('active', function(value) {
	 *       value ? $animate.addClass(element, 'on') : $animate.removeClass(element, 'on');
	 *     });
	 *   });
	 * }]);
	 * ```
	 *
	 * Now the `on` CSS class is added and removed on the greeting box component. Now if we add a CSS class on top of the greeting box element
	 * in our HTML code then we can trigger a CSS or JS animation to happen.
	 *
	 * ```css
	 * /&#42; normally we would create a CSS class to reference on the element &#42;/
	 * greeting-box.on { transition:0.5s linear all; background:green; color:white; }
	 * ```
	 *
	 * The `$animate` service contains a variety of other methods like `enter`, `leave`, `animate` and `setClass`. To learn more about what's
	 * possible be sure to visit the {@link ng.$animate $animate service API page}.
	 *
	 *
	 * ## Callbacks and Promises
	 *
	 * When `$animate` is called it returns a promise that can be used to capture when the animation has ended. Therefore if we were to trigger
	 * an animation (within our directive code) then we can continue performing directive and scope related activities after the animation has
	 * ended by chaining onto the returned promise that animation method returns.
	 *
	 * ```js
	 * // somewhere within the depths of the directive
	 * $animate.enter(element, parent).then(function() {
	 *   //the animation has completed
	 * });
	 * ```
	 *
	 * (Note that earlier versions of Angular prior to v1.4 required the promise code to be wrapped using `$scope.$apply(...)`. This is not the case
	 * anymore.)
	 *
	 * In addition to the animation promise, we can also make use of animation-related callbacks within our directives and controller code by registering
	 * an event listener using the `$animate` service. Let's say for example that an animation was triggered on our view
	 * routing controller to hook into that:
	 *
	 * ```js
	 * ngModule.controller('HomePageController', ['$animate', function($animate) {
	 *   $animate.on('enter', ngViewElement, function(element) {
	 *     // the animation for this route has completed
	 *   }]);
	 * }])
	 * ```
	 *
	 * (Note that you will need to trigger a digest within the callback to get angular to notice any scope-related changes.)
	 */

	/**
	 * @ngdoc service
	 * @name $animate
	 * @kind object
	 *
	 * @description
	 * The ngAnimate `$animate` service documentation is the same for the core `$animate` service.
	 *
	 * Click here {@link ng.$animate to learn more about animations with `$animate`}.
	 */
	angular.module('ngAnimate', [])
	  .directive('ngAnimateSwap', ngAnimateSwapDirective)

	  .directive('ngAnimateChildren', $$AnimateChildrenDirective)
	  .factory('$$rAFScheduler', $$rAFSchedulerFactory)

	  .provider('$$animateQueue', $$AnimateQueueProvider)
	  .provider('$$animation', $$AnimationProvider)

	  .provider('$animateCss', $AnimateCssProvider)
	  .provider('$$animateCssDriver', $$AnimateCssDriverProvider)

	  .provider('$$animateJs', $$AnimateJsProvider)
	  .provider('$$animateJsDriver', $$AnimateJsDriverProvider);


	})(window, window.angular);


	/*** EXPORTS FROM exports-loader ***/
	module.exports = angular;

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	function PersonDirective() {
		return {
			restrict: 'E',
			scope: {
				person: "=for"
			},
			template: __webpack_require__(91),
			controller: __webpack_require__(92)
		};
	}
	module.exports = PersonDirective;

/***/ },
/* 91 */
/***/ function(module, exports) {

	module.exports = "<section class=\"person\" ng-click=\"showModal()\">\n\t<div class=\"person-photo\"  ng-if=\"showPhoto\">\n\t\t<img ng-src=\"{{person.photo}}\"/>\n\t</div>\n\t<h2>{{person.fullName}}</h2>\n</section>";

/***/ },
/* 92 */
/***/ function(module, exports) {

	'use strict';
	/* @ngInject */
	function PersonDirectiveController($scope, $attrs, PersonModal) {
		$scope.showPhoto = $attrs.textOnly !== undefined ? false : true;
		$scope.showModal = function () {
			PersonModal.openFor([$scope.person]);
		};

		$scope.$on('person.modal:open', function (event, speakers) {
			$scope.showModal();
		});

	}
	PersonDirectiveController.$inject = ["$scope", "$attrs", "PersonModal"];
	module.exports = PersonDirectiveController;

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	function PersonsDirective() {
		return {
			restrict: 'E',
			scope: {
				persons: "=for",
				filter: "="
			},
			template: __webpack_require__(94)
		};
	}
	module.exports = PersonsDirective;

/***/ },
/* 94 */
/***/ function(module, exports) {

	module.exports = "<section class=\"persons\">\n\t<person for=\"person\"\n\t\t\t\t\tng-repeat=\"person in persons | filter: {fullName: filter}\"></person>\n</section>";

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/* @ngInject */
	function PersonModal($modal) {
		var _speakerModal;
		var _callback = null;
		this.openFor = function (persons) {
			if (_speakerModal) {
				return;
			}
			_speakerModal = $modal.open({
				backdropClass: 'person-modal-backdrop',
				windowClass: 'person-modal',
				size: 'md',
				template: __webpack_require__(96),
				controller: __webpack_require__(97),
				resolve: {
					persons: function () {
						return persons;
					}
				}
			});
			_speakerModal.result.finally(function () {
				_speakerModal = null;
				if (_callback !== null) {
					_callback();
				}
			});
			return this;
		};

		this.onClose = function (callback) {
			_callback = callback;
		};
	}
	PersonModal.$inject = ["$modal"];

	module.exports = PersonModal;

/***/ },
/* 96 */
/***/ function(module, exports) {

	module.exports = "<div class=\"modal-body\">\n\t<md-button class=\"md-icon-button close\" ng-click=\"$close()\"><md-icon>close</md-icon></md-button>\n\t<aside ng-if=\"hasMany()\" class=\"navigation\">\n\t\t<span class=\"prev-arrow\" ng-click=\"prev()\"></span>\n\t</aside>\n\t<section>\n\t\t<div class=\"img-speaker\">\n\t\t\t<img class=\"img-responsive margin-auto\"  ng-src=\"{{person().photo}}\"\n\t\t\t\t ng-class=\"{empty: person().photo == null}\"\n\n\t\t\t>\n\t\t</div>\n\t\t<section>\n\t\t\t<div class=\"mcci-header ta-leftperson-name vote-person ng-binding\">{{person().fullName}}</div>\n\n\t\t\t<div class=\"mcci-content\" ng-bind-html=\"person().bio\"></div>\n\t\t</section>\n\t\t<section>\n\t\t\t<a ng-repeat=\"presentation in person().presentations\"\n\t\t\t\t ui-sref=\"presentations({id: presentation.id})\"\n\t\t\t\t ng-click=\"$close()\">\n\t\t\t\t<h3 class=\"presentation-title\">\n\t\t\t\t\t{{presentation.title}}\n\t\t\t\t</h3>\n\t\t\t</a>\n\t\t</section>\n\t</section>\n\n\t<aside ng-if=\"hasMany()\" class=\"navigation\">\n\t\t<span class=\"next-arrow\" ng-click=\"next()\"></span>\n\t</aside>\n</div>";

/***/ },
/* 97 */
/***/ function(module, exports) {

	'use strict';
	/* @ngInject */
	function PersonModalController(persons, $scope, hotkeys) {
		unbindKeys();
		bindKeys();
		var idx = 0;
		$scope.hasMany = function () {
			return persons.length > 1;
		};

		$scope.person = function () {
			return persons[idx];
		};
		$scope.next = function () {
			idx = (idx + 1) % persons.length;
		};
		$scope.prev = function () {
			idx = Math.abs(idx - 1) % persons.length;
		};

		$scope.$on('modal.closing', function () {
			unbindKeys();
		});

		function unbindKeys() {
			hotkeys.del('alt+left');
			hotkeys.del('alt+right');
		}

		function bindKeys() {
			hotkeys.bindTo($scope)
					.add({
						persistent: false,
						combo: 'alt+right',
						description: 'Następna prezentacja',
						callback: function (event) {
							event.preventDefault();
							$scope.next();
						}
					})
					.add({
						persistent: false,
						combo: 'alt+left',
						description: 'Poprzednia prezentacja',
						callback: function (event) {
							event.preventDefault();
							$scope.prev();
						}
					});
		}
	}
	PersonModalController.$inject = ["persons", "$scope", "hotkeys"];

	module.exports = PersonModalController;

/***/ },
/* 98 */
/***/ function(module, exports) {

	'use strict';

	/* @ngInject */
	function Vote($resource, apiServer) {
		return $resource(apiServer + '/v4p/:key', {'key': '@key'}, {});
	}
	Vote.$inject = ["$resource", "apiServer"];

	module.exports = Vote;

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var _ = __webpack_require__(100);
	/* @ngInject */
	function Voting(Vote, $q, $cookies) {
		var _items = [];
		var _idx = 0;

		function move(direction) {
			_idx += direction;
		}


		function moveVote(direction) {
			var vote = _items[_idx].vote + direction;
			if (vote < -1 || vote > 1) {
				vote = direction;
			}
			return vote;
		}


		return {
			get: function () {
				var deferred = $q.defer();
				var key = $cookies.get('key');
				var voteObj = Vote.get({key: key}, function () {
					_idx = voteObj.voted;
					_items = voteObj.presentations;
					_.each(_items, function (item) {
						if (item.vote === null) {
							item.vote = 0;
						}
					});
					$cookies.put('key', voteObj.key);
					deferred.resolve(_items);
				});
				return deferred.promise;
			},
			getIdx: function () {
				return _idx + 1;
			},
			isActive: function () {
				return _.isEmpty(_items) || _idx < _items.length;
			},
			next: function () {
				move(1);
			},
			prev: function () {
				if (this.hasPrevious()) {
					move(-1);
					return true;
				} else {
					return false;
				}
			},
			hasPrevious: function () {
				return _idx > 0;
			},
			isCurrent: function (idx) {
				return _idx === idx;
			},
			getCurrent: function () {
				return _items[_idx];
			},
			vote: function (vote) {
				this.getCurrent().vote = vote;
			},
			up: function () {
				this.vote(moveVote(1));
			},
			down: function () {
				this.vote(moveVote(-1));
			},
			submit: function () {
				var current = this.getCurrent();
				var vote = new Vote();
				vote.key = $cookies.get('key') || '';
				vote.rate = current.vote;
				vote.presentationId = current.presentation.id;
				var deferred = $q.defer();
				vote.$save(function () {
					deferred.resolve();
				});
				return deferred.promise;
			},
			notStarted: function () {
				return _.isUndefined($cookies.get('started'));
			},
			start: function () {
				$cookies.put('started', true);
			}

		};
	}
	Voting.$inject = ["Vote", "$q", "$cookies"];
	module.exports = Voting;

/***/ },
/* 100 */,
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	var _ = __webpack_require__(100);
	/* @ngInject */
	function VotingController(Voting, hotkeys, $scope, PersonModal, $timeout) {
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
	VotingController.$inject = ["Voting", "hotkeys", "$scope", "PersonModal", "$timeout"];

	module.exports = VotingController;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(103);
	__webpack_require__(105);
	__webpack_require__(39).module('cookies', [])
	    .controller('CookiesController', __webpack_require__(106))
	;
	module.exports ='cookies';

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(104);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?root=..!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/less-loader/index.js!./cookies.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?root=..!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/less-loader/index.js!./cookies.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports


	// module
	exports.push([module.id, "#cookie {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  display: block;\n  width: 100%;\n  height: 100px;\n  background: #000000;\n  z-index: 9999;\n  color: #ffffff;\n  padding: 10px;\n  font-family: 'NeuzeitGro-Reg', Verdana, Tahoma, sans-serif;\n  /* NeuzeitGro-Bol */\n  font-size: 14px;\n  line-height: 16px;\n  text-align: center;\n}\n#cookie #cookie-agree {\n  display: block;\n  width: 100%;\n  color: #ff0040;\n  cursor: pointer;\n}\n", ""]);

	// exports


/***/ },
/* 105 */
/***/ function(module, exports) {

	var path = 'cookies/cookies.tpl.html';
	var html = "<div id=\"cookie\" ng-controller=\"CookiesController as cookies\" ng-show=\"cookies.isNotAccepted()\">\n    <strong>Our website uses cookies!</strong>\n    confitura.pl uses cookies to improve user experience. We also show safe and secure advertising to support this site.By using our website you consent to our cookies in accordance with our Cookie Policy.\n    <a id=\"cookie-agree\" ng-click=\"cookies.accept()\" href=\"\">I agree</a>\n</div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 106 */
/***/ function(module, exports) {

	function CookiesController($cookies){
	    var vm = this;
	    vm.isNotAccepted = isNotAccepted;
	    vm.accept = accept;

	    function isNotAccepted(){
	        return $cookies.get('is-accepted') !== 'true';
	    }

	    function accept(){
	        $cookies.put('is-accepted', 'true');
	    }


	}

	module.exports = CookiesController;

/***/ },
/* 107 */
/***/ function(module, exports) {

	module.exports = "<header>\n    <div class=\"row-fluid\">\n        <div id=\"own-carousel\" class=\"col-lg-12 own-carousel\">\n            <div class=\"container\">\n                <div class=\"carousel-caption\">\n                    <h1>confitura 2016</h1>\n                    <p class=\"carousel-p\">Java Conference for Polish community\n                    </p>\n                    <p><a class=\"btn btn-lg btn-primary btn-pink\" ui-sref=\"registration\" role=\"button\">Registration</a></p>\n                </div>\n            </div>\n        </div>\n    </div>\n</header>\n\n<!-- /container fluid -->\n<div class=\"container-fluid\">\n\n    <section id=\"main-confitura\">\n        <div class=\"row-fluid\">\n            <div class=\"col-lg-12 col-md-12\"><h2>confitura 2016</h2></div>\n            <div class=\"col-lg-12 col-md-12 main-confitura-content\">\n                <div class=\"main-confitura-content-inner\">\n                    <div class=\"col-lg-6 col-md-6\">\n                        <h3>2nd of July 2016</h3>\n\t\t\t\t\t\t\t<span class=\"mcci-content\">\n\t\t\t\t\t\t\t\tConfitura is a one day conference. it starts at around 9 a.m. and finish at 7 p.m.\n\t\t\t\t\t\t\t</span>\n                    </div>\n                    <div class=\"col-lg-6 col-md-6\">\n                        <h3>University of Warsaw, the main campus</h3>\n\t\t\t\t\t\t\t<span class=\"mcci-content\">\n\t\t\t\t\t\t\t\t5 parallel sessions. 7 slots in each session. Chillout room and, last but not least, sponsors booth where you can talk, win attractive awards or even find a new job.\n\t\t\t\t\t\t\t</span>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </section>\n\n    <section id=\"about-confitura\">\n        <div class=\"row-fluid\">\n            <div class=\"col-lg-12 about-confitura-header\"><h2>about us</h2></div>\n            <div class=\"col-lg-12 about-confitura-content\">\n                <div class=\"about-confitura-content-inner\">\n                    <div>\n\n                        Confitura is one of the biggest Java conferences in Poland. It’s the place where Polish and International leaders of\n                        the Java community share their Java knowledge and experience during sessions and breaks. Each year we host around\n                        1400 participants keen to find out about new technologies. The conference used to be totally free of charge but last\n                        year we decided to use the opportunity to help others and introduced a charity donation based model of registering.\n                        We collect symbolic donations of 20 zł (~ €4) with help of the Allegro Charity Platform (all the money go <strong>directly</strong>\n                        to a charity organization) and invite our donors to register.\n                        <br><strong>Registration is required</strong>.\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n\n    <div ng-include=\"'news/news.banner.tpl.html'\"></div>\n\n    <div ng-include=\"'partners/partners.banner.tpl.html'\"></div>\n</div>\n\n";

/***/ }
]);