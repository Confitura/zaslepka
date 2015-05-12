'use strict';

/* @ngInject */
function Vote($resource, apiServer) {
	return $resource(apiServer + '/v4p/:key', {'key': '@key'}, {});
}

module.exports = Vote;