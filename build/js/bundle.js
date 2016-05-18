webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(2);


/***/ },

/***/ 2:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(3);
	__webpack_require__(9);
	__webpack_require__(34);
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
		__webpack_require__(50),
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
							template: __webpack_require__(55)
						})
						.state('partners', {
							url: '/partners',
							templateUrl: 'views/partners.html'
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
			}]);

/***/ },

/***/ 34:
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(35);
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

/***/ 37:
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

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(35)))

/***/ },

/***/ 46:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(38).module('news', [])
	    .factory('News', __webpack_require__(47))
	    .controller('NewsCtrl', __webpack_require__(48));
	module.exports ='news';

/***/ },

/***/ 47:
/***/ function(module, exports) {

	'use strict';
	/* @ngInject */
	function News($resource, apiServer) {
	    return $resource(apiServer + '/news/0/3');
	}
	News.$inject = ["$resource", "apiServer"];
	module.exports = News;

/***/ },

/***/ 48:
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

/***/ 49:
/***/ function(module, exports) {

	var path = 'news/news.banner.tpl.html';
	var html = "<section id=\"news-confitura\">\n    <div class=\"row-fluid\">\n        <div class=\"col-lg-12 news-confitura-header\"><h2>News</h2></div>\n    </div>\n\n    <div class=\"news-container col-lg-12\" ng-controller=\"NewsCtrl as news\">\n        <div class=\"news-confitura-left\">\n    <span class=\"news-title font-white ease\">\n    {{news.list[0].title}}\n    </span>\n    <span class=\"news-excerpt font-white ease\" ng-bind-html=\"news.list[0].shortText\">\n    </span>\n    <span class=\"news-date font-white ease\">\n     {{news.list[0].date.month}} {{news.list[0].date.day}} {{news.list[0].date.year}}\n    </span>\n        </div>\n        <div class=\"news-confitura-right\" ng-if=\"news.list.length > 1\">\n            <div class=\"semi-square black\">\n    <span class=\"news-title font-white ease\">\n    {{news.list[1].title}}\n    </span>\n    <span class=\"news-excerpt font-white ease\" ng-bind-html=\"news.list[1].shortText\">\n    </span>\n    <span class=\"news-date font-white ease\">\n        {{news.list[1].date.month}} {{news.list[1].date.day}} {{news.list[1].date.year}}\n\n    </span>\n            </div>\n            <div class=\"semi-square beige\" ng-if=\"news.list.length > 2\">\n    <span class=\"news-title font-black ease\">\n   {{news.list[2].title}}\n    </span>\n    <span class=\"news-excerpt font-black ease\" ng-bind-html=\"news.list[2].shortText\">\n    </span>\n    <span class=\"news-date font-black ease\">\n   {{news.list[2].date.month}} {{news.list[2].date.day}} {{news.list[2].date.year}}\n    </span>\n            </div>\n        </div>\n    </div>\n\n</section>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },

/***/ 50:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(38).module('partners',[])
	    .factory('Partners', __webpack_require__(51))
	    .controller('PartnersController', __webpack_require__(52));
	module.exports ='partners';

/***/ },

/***/ 51:
/***/ function(module, exports) {

	'use strict';

	/* @ngInject */
	function Partners($resource, apiServer) {
		return $resource(apiServer + '/sponsors');
	}
	Partners.$inject = ["$resource", "apiServer"];
	module.exports = Partners;

/***/ },

/***/ 52:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var _ = __webpack_require__(53);
	__webpack_require__(54);

	/* @ngInject */
	function PartnersController(Partners) {
		var partners = Partners.get();

		var vm = this;
		vm.types = [
			'platynowi',
			'złoci',
			'srebrni',
			'brązowi',
			'technologiczni',
			'media'
		];

		vm.selected = vm.types[0];


		vm.hasAnyFor = function (type) {
			return partners[type].length > 0;
		};

		vm.select = function (type) {
			vm.selected = type;
		};

		vm.getForSelected = function () {
			return partners[vm.selected];
		};

		vm.isSelected = function (type) {
			return vm.selected === type;
		};


	}
	PartnersController.$inject = ["Partners"];
	module.exports = PartnersController;

/***/ },

/***/ 54:
/***/ function(module, exports) {

	var path = 'partners/partners.tpl.html';
	var html = "<section id=\"partners-confitura\">\n    <!--<div class=\"row-fluid\">-->\n        <!--<div class=\"col-lg-12 col-md-12\"><h2>our partners</h2></div>-->\n    <!--</div>-->\n    <!--<div class=\"row-fluid\">-->\n        <!--<div class=\"col-lg-3 partners-items\">-->\n            <!--<span class=\"partner-logo text-center\"><img src=\"partners/partner001.png\" alt=\"roche\"/></span>-->\n            <!--<span class=\"partner-type text-center\">platynowy</span>-->\n        <!--</div>-->\n        <!--<div class=\"col-lg-3 partners-items\">-->\n            <!--<span class=\"partner-logo text-center\"><img src=\"partners/partner002.png\" alt=\"7n\"/></span>-->\n            <!--<span class=\"partner-type text-center\">złoci</span>-->\n        <!--</div>-->\n        <!--<div class=\"col-lg-3 partners-items\">-->\n            <!--<span class=\"partner-logo text-center\"><img src=\"partners/partner003.png\" alt=\"4 finance\"/></span>-->\n            <!--<span class=\"partner-type text-center\">srebrni</span>-->\n        <!--</div>-->\n        <!--<div class=\"col-lg-3 partners-items\">-->\n            <!--<span class=\"partner-logo text-center\"><img src=\"partners/partner004.png\" alt=\"labs\"/></span>-->\n            <!--<span class=\"partner-type text-center\">brązowi</span>-->\n        <!--</div>-->\n    <!--</div>-->\n</section>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },

/***/ 55:
/***/ function(module, exports) {

	module.exports = "<div class=\"row\">\n\t<div class=\"col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1\">\n\t\t<div class=\"banner\"></div>\n\t</div>\n</div>\n<div class=\"corner\"></div>\n<div class=\"top\"></div>\n<div class=\"main\">\n\t<div class=\"twitter \" ng-controller=\"TwitterCtrl\">\n\t\t<div class=\"twitter-icon-big\"></div>\n\t\t<div class=\"ng-cloak\">\n\t\t\t<div class=\"twitter-text\">{{tweet.text}}</div>\n\t\t\t<div class=\"twitter-date\">{{getDate(tweet.created_at)}}</div>\n\t\t\t<div class=\"twitter-name\">@confiturapl</div>\n\t\t</div>\n\t</div>\n\t<div class=\"splitter hidden-xs hidden-sm \"></div>\n\t<div class=\"news\" ng-controller=\"NewsCtrl\">\n\t\t<div class=\"ng-cloak\">\n\t\t\t<h2 class=\"news-title\">{{news.title}}</h2>\n\n\t\t\t<div class=\"news-author\">Napisał: {{news.author}}</div>\n\t\t\t<div class=\"news-text\" ng-bind-html=\"news.shortText\"></div>\n\t\t</div>\n\t</div>\n\t<div class=\"clearfix\"></div>\n</div>\n<div class=\"bottom-margin\"></div>\n<div class=\"persons-widget\">\n\t<div ng-include=\"'views/speakers-widget.html'\"></div>\n</div>\n\n";

/***/ }

});