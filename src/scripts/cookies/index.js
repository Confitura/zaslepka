'use strict';
require('./cookies.less');
require('./cookies.tpl.html');
require('ng').module('cookies', [])
    .controller('CookiesController', require('./cookies.controller'))
;
module.exports ='cookies';