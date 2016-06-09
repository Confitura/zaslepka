'use strict';

/* @ngInject */
function Registration($resource, apiServer) {
	return $resource(apiServer + '/register/:token', {token: '@token'}, {});
}
module.exports = Registration;