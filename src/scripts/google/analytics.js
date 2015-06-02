var $ = require('jquery');
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