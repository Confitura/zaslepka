'use strict';

/* @ngInject */
function Speakers($resource, apiServer) {
	return $resource(apiServer + '/speakers');
}
module.exports = Speakers;