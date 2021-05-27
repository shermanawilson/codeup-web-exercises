"use strict";


console.log("Hello from External JavaScript");


alert("Welcome to my website");

var favColor = confirm("What is your favorite color?");
console.log(favColor);

var favoriteColor = prompt("What is your favorite color?");
if(favoriteColor == "blue") {
    console.log("That's my favorite color too!");
} else {
    console.log("That's okay!")
}
console.log('The user entered: ' + favoriteColor);