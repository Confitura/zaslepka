var HelloWorld = (function () {
    function HelloWorld(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    HelloWorld.prototype.sayHello = function () {
        return "Hello " + this.firstName + " " + this.lastName;
    };
    return HelloWorld;
})();
var hello = new HelloWorld('Michal', 'Margiel');
hello.sayHello();
//# sourceMappingURL=HelloWorld.js.map