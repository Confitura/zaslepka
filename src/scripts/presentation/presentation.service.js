'use strict';
/* @ngInject */
function Presentations($resource, apiServer) {
	return $resource(apiServer + '/presentations');
}
module.exports = Presentations;