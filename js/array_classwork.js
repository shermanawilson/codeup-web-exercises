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