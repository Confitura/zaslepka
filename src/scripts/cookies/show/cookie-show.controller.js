require('./cookie-show.tpl.html');

function CookieShowController($cookies){
    var vm = this;
    vm.get = get;
    function get(){
        return $cookies.get('key');
    }
}

module.exports = CookieShowController;