'use strict';

/* @ngInject */
function Partners($resource, apiServer) {
	return $resource(apiServer + '/sponsors');
}
module.exports = Partners;