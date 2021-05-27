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
console.log(totalCost); */
alert("The price for the movie is: " + ((3+5+1) * 3));

// 3.b

alert("You will make $" + ((400 * 6) + (380 * 4) + (350 * 10)));

// 3.c

var full = confirm("Is the class full?");
var confilct = confirm("Is there a conflict?");
alert("You can enroll in class:" + (full && !confilct));

// 3.d
var premium = confirm("Are you a premium member");
var quantity = Number(prompt("How many items did you buy"));
var expired = confirm("Is the coupon expired");
alert("You can get the discount" + ((!expired) && (premium || (quantity > 2))));

// 4
var username = 'codeup';
var password = 'notastrongpassword';

var password_is_five_characters = password.length >= 5;
var username_not_in_password = !password.includes(username);
var username_less_than_twenty_chars = username.length <= 20;
var no_whitespace = password === password.trim() && username === username.trim();

console.log(password_is_five_characters);
console.log(username_not_in_password);
console.log(username_less_than_twenty_chars);
console.log(no_whitespace);