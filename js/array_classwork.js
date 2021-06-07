'use strict';

//alert("hey");

let test = [];
let colors = [];
let stuff = [];

// array is a memory location that stores more than one thing
      //  ex:
        test = [15, 56, 32 ,27 ,376];
        colors = ["green", "blue", "orange", "purple"];
        stuff = [1, 2, 3, "a", "b", "c", undefined, null, ["hello", "there", "person"]];
        console.log("output the array test");
        console.log(test);
console.log("********************************************************************");

        console.log("output the colors array");
        console.log(colors);
console.log("********************************************************************");

        console.log("output the stuff array");
        console.log(stuff);
console.log("********************************************************************");


        console.log("output the 4th element");
        console.log(stuff[4]);
console.log("********************************************************************");

        console.log("output for loop")
        for(let number = 1; number < stuff.length; number++) {
            console.log(number[stuff]);
        }
console.log("********************************************************************");

        var shapes = ["square", "rectangle", "circle", "triangle"];

        shapes.forEach(function(shape) {
            console.log("Here is a lovely shape: " + shape + ".");
});
console.log("********************************************************************");

        for(let number = 0; number < shapes.length; number++) {
                console.log("Here is a lovely shape: " + shapes[number])
        }

console.log("********************************************************************");
var daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday'];

console.log(daysOfTheWeek);
// ['Monday', 'Tuesday', 'Wednesday', 'Thursday']

// let's add 'Sunday' to the beginning of the week
daysOfTheWeek.unshift('Sunday');

console.log(daysOfTheWeek);
// ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday']

// let's add 'Friday' and 'Saturday' to the end of the week
daysOfTheWeek.push('Friday', 'Saturday');

console.log(daysOfTheWeek);
// ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']


console.log("********************************************************************");



var todoList = ['Take out the trash', 'Clean the car', 'Pay the bills'];

console.log('My todo list:');
console.log(todoList);
// ['Take out the trash', 'Clean the car', 'Pay the bills']

console.log('Completing the last item: ' + todoList[todoList.length - 1]);

// let's remove the last item
var removedItem = todoList.pop();

// log what we did
console.log('Task complete: ' + removedItem);

console.log(todoList);
// ['Take out the trash', 'Clean the car']

console.log('Completing the first item: ' + todoList[0]);

// let's remove the first item
var doneItem = todoList.shift();

// log what we did
console.log('Task complete: ' + doneItem);

console.log(todoList);
// ['Clean the car']

console.log("********************************************************************");




var colors2 = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'red'];

var index = colors2.indexOf('green');
console.log(index);
// 3

index = colors.indexOf('red');
console.log(index);
// 0

index = colors.lastIndexOf('red');
console.log(index);
// 7
console.log("********************************************************************");


var colors4 = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var slice = colors4.slice(2, 4);

console.log(colors4); // colors is unchanged
// ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

console.log(slice); // ['yellow', 'green']

slice = colors.slice(3);
console.log(slice); // ['green', 'blue', 'indigo', 'violet']


var colors5 = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

console.log(colors5);
// ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

console.log('Reversing the colors array.');

colors.reverse();

console.log(colors);
// ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red']


var colors11 = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

console.log(colors11);
// ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

console.log('Sorting the colors array.');

colors.sort();

console.log(colors);
// ['blue', 'green', 'indigo', 'orange', 'red', 'violet', 'yellow']

console.log("********************************************************************");




var namesString = "Joe,Bob,Sally";

console.log(namesString);
// Joe,Bob,Sally

var namesArray = namesString.split(',');

console.log(namesArray);

console.log("********************************************************************");




var namesArray = ['Joe', 'Bob', 'Sally'];

console.log(namesArray);
// ['Joe', 'Bob', 'Sally']

var namesString = namesArray.join(',');

console.log(namesString);
// Joe,Bob,Sally