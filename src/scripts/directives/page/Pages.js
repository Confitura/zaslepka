'use strict';
/* @ngInject */
function Pages($resource, apiServer) {
	return $resource(apiServer + '/pages/:name', {name: '@name'}, {});
}

module.exports = Pages;