'use strict';
/* @ngInject */
function News($resource, apiServer) {
    return $resource(apiServer + '/news/0/3');
}
module.exports = News;