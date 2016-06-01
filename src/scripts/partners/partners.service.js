'use strict';

/* @ngInject */
function Partners($resource, apiServer) {
	return $resource(apiServer + '/sponsors/:name');
}
module.exports = Partners;