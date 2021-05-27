"use strict";


console.log("Hello from External JavaScript");



var favColor = confirm("What is your favorite color?");
console.log(favColor);

var favoriteColor = prompt("What is your favorite color?");
alert("Great, " + favoriteColor + " is my favorite color too!");

// Answer for 3.a
/*
var littleMermaid = 3;
var brotherBear = 5;
var hercules = 1;
var totalCost;

totalCost = ((littleMermaid * 3) + (brotherBear * 3) + (hercules * 3));
console.log(totalCost);
alert("The price for the movie is: " + totalCost); */

// 3.b

alert("You will make $" + ((400 * 6) + (380 * 4) + (350 * 10)));

// 3.c

var full = confirm("Is the class full?");
var confilct = confirm("Is there a conflict?");
alert("You can enroll in class:" + (full && !confilct));

// 3.d
