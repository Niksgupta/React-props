

class Car{

    constructor(){
        this.wheels =4;
        this.type = 'Hatchback';
    }

    whateverfunction(){
        console.log('hey triggered');

    }
}

class Ford extends Car{
    constructor(){
        super();
    }
    
}

const car = new Car();

const ford = new Ford();

car.whateverfunction()

console.log(ford)