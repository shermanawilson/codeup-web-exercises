`use strict`


const people = [`shy`,`shawn`,`mani`];

let i = 0;
for (let element of people) {
    console.log(`This is the index ${people.indexOf(element)}`)
}

people.forEach(function(person,index) {
console.log(person);
})
//
// function sayHello(name) {
// return `Hello from ${name}!`
// }
// const functionName = parameter => what is executed;
const sayHello = name => `Hello from ${name}!`;

// const sayHello = name => {
//     const nameToDisplay = name.toUpperCase();
//     return `Hello from ${nameToDisplay}!`;
// }

// const sayHello = () => {
//     const nameToDisplay = name.toUpperCase();
//     return `Hello from ${title}.${nameToDisplay}!`;
// }


// default parameter
function sayHello(name = "Tim") {
    return `Hello from ${name}`;
}

// let age = 27;

// var aPerson = {
//     name: `Bethany`,
//     age
// }
//
// console.log(aPerson)
// const personBuilder = (name, age) => {
//     // let usersName = name;
//     // let usersAge = age;
//     return {name, age}
// }
//
// // const aUser = personBuilder(`Oscar`, `68`);
//
// const aUser = {usersName: `Seth`, age: 34};
// const {usersName, age} = aUser;
//
// console.log(usersName);
// console.log(age);
//
// console.log(`This is Oscar's Name: ${usersName}`);



const food = [`orange`, `crawfish`, `shrimp`, `greens`];
// [element0, element1] , grabs in order, result looks like: pizza, apple
const [foodOne, foodTwo, foodThree, foodFour] = food;
console.log(foodOne)
console.log(foodTwo)
console.log(foodThree)
console.log(foodFour)
