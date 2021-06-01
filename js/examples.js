/* if (something) {
    // execute code only if it's true
}

(     ) can be evaluated as either true or false

If whats in the () is false, we'll skip code

    The condition has to evalute to true
condition is inside ()

if (something) {
    // execute code if true
    if (something) {

    } else {

    }

} else {
    //execute code if false
}



if (something1 && something2) {
    //execute code if true
} else {
    //execute if false
}


if (grade == 100) {
    console.log("You rock");
} else if (grade >= 90) {
    console.log("You earned A");
} else if (grade >=80) {
    conosle.log("You earned a B ");
} else if (grade >= 70) {
    console.log("You passed!");
} else {
    console.log("Try again");
}

*/
// If else if else

var weShouldDeleteStuff = confirm('Are you sure you want to delete everything?');

if (weShouldDeleteStuff) {
    alert("Everything was deleted");
    // delete all the things...
} else {
    alert("Operation Canceled!");
}
// If else If Else

var pizzaPreference = prompt("What kind of pizza do you like?");

if (pizzaPreference === "pineapple and hot sauce") {
    alert("What a coincidence, that's my favorite!");
} else if (pizzaPreference === "cheese") {
    alert("Just plain cheese? Okay...");
} else {
    alert(pizzaPreference + " isn't my favorite, but let's order some!");
}

/* Ternary Operator (Shorthand If/Else)

'use strict';

var message;

if (success) {
    message = "Operation was successful.";
} else {
    message = "Oops, something went wrong.";
}

// the above if/else can be re-written as:
var message = (success) ? "Operation was successful." : "Oops, something went wrong.";

*/

// Switch Statement, very similar to if/else for 3+ conditions

var pizzaPreference = prompt("What kind of pizza do you like?");

switch(pizzaPreference) {
    case "pineapple and hot sauce":
        alert("What a coincidence, that's my favorite!");
        break;
    case "cheese":
        alert("Just plain cheese? Okay...");
        break;
    default:
        alert(pizzaPreference + " isn't my favorite, but let's order some!");
        break;
}
