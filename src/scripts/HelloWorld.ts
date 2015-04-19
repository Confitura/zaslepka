class HelloWorld {
    constructor(public firstName:String, public lastName:String) {
    }

    sayHello() {
        return "Hello " + this.firstName + " " + this.lastName;
    }
}

var hello = new HelloWorld('Michal', 'Margiel');
hello.sayHello();