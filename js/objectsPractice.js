// This is one way to create an object in JavaScript
// var car = new Object();

//Here is another way to create a object
// var car = {};
//
var arry = [1, 2, 3, 4, 5];
arry.shift();
//console.log(arry);
car = {
    make: "Honda",
    model: "Civic",
    numberOfCylinders: 4,
    numberOfDoors: 4,
    numberOfSeats: 5,
    transmission: "automatic",
    year: 2012,
    owner: {
        name: "Shy",
        heightInInches: 66,
        age: 24,
        daughter: {
            name: "Maggie",
            age: 2
        }
    }
}

var person = {
    name: "Shy",
    heightInInches: 66,
    age: 24
}

var child = {
    name: "Maggie",
    age: 2
}
person.daughter = child;

car.owner = person;

//console.log(person);

console.log(car);

car.info = function (name){
    if(name !== undefined) {
        return "Hi, my name is " + name + " and I own a " + car.year + ", " + car.make + " " + car.model
    }
    return car.year + ", " + car.make + " " + car.model
}
console.log(car.info("Billy"));



car.info = infoFunction

carTwo = {
    make: "Ford",
    model: "Fusion",
    numberOfCylinders: 4,
    numberOfDoors: 4,
    numberOfSeats: 5,
    transmission: "automatic",
    year: 2016,
    owner: {
        getName: function () {
            return this.name;
        }
    }
        name: "Tod",
        heightInInches: 72,
        age: 44,
        daughter: {
            name: "Bella",
            age: 12
        }
    }
    info: infoFunction
}

function infoFunction(arg) {
    if (arg !== true) {
        return "Hi, my name is " + name + " and I own a " + car.year + ", " + car.make + " " + car.

            return this.year + ", " + this.make + " " + this.model
    }




