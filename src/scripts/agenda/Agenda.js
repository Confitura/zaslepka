'use strict';
/* @ngInject */
function Agenda($resource, apiServer) {
    return $resource(apiServer + '/agenda');


}
module.exports = Agenda;