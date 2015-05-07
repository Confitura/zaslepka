'use strict';
/* @ngInject */
function Twitter($resource, apiServer) {
    return $resource(apiServer + '/twitter');
}
module.exports = Twitter;