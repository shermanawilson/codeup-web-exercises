"use strict";

/**
 *
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */
function sayHello(name) {
    return "Hello, " + name + "!";
}

/**
 *
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
// var name = "Sherma'n";
var helloMessage = sayHello("Sherma'n");

console.log(helloMessage);

/**
 *
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
var myName = "Sherma'n";
console.log(sayHello(myName));
// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 *
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

function isTwo(value) {
    var result;
    if(value === 2) {
        result = true;
    } else {
        result = false;
    }
    return result;
}
console.log(random);
console.log(isTwo(random));
/**
 *
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */
function calculateTip(num1, num2) {
   /*  var yourToatl = prompt("Your total bill is: $" + num2 + "! How much would you like to tip?");
    console.log("The total for the bill before tip is: $" + num2);
    alert("You should tip: $" + (num2 - (num2 * num1))); */
    return num1 * num2;
}
console.log(calculateTip(.15, 25.00).toFixed(2));

/**
 *
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
var num1 = 20;
var num2 = 0.20;

num1 = prompt("Enter total bill");
num2 = prompt("Enter the tip percentage");
alert("The tip should be " + calculateTip(num2, num1).toFixed(2));
/**
 *
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */
function applyDiscount(price, discountPercentage) {
    return price - (discountPercentage * price);
}
console.log("Final TODO result: $" + (applyDiscount(45.99, 0.12).toFixed(2)));