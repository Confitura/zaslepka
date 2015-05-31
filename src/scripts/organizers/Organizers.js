'use strict';

/* @ngInject */
function Organizers($resource, apiServer) {
	return $resource(apiServer + '/hosts/:type', {'type': '@type'}, {});
}
module.exports = Organizers;