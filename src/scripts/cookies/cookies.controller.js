function CookiesController($cookies){
    var vm = this;
    vm.isNotAccepted = isNotAccepted;
    vm.accept = accept;

    function isNotAccepted(){
        return $cookies.get('is-accepted') !== 'true';
    }

    function accept(){
        $cookies.put('is-accepted', 'true');
    }


}

module.exports = CookiesController;