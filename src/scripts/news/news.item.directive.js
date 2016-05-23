'use strict';
require('./news.item.tpl.html');
function NewsItemDirective(){
    return {
        scope: {item: '='},
        templateUrl: 'news/news.item.tpl.html'
    };
}
module.exports = NewsItemDirective;