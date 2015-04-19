'use strict';
/* ngInject */
function News($resource, apiServer) {
    return $resource(apiServer + '/news/0/1');
}
module.exports = News;