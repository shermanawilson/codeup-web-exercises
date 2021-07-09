'use strict'
// JavaScript

// When you click on the text, it will say something nice :)
// let mainOne = document.querySelector('#main-one');
// mainOne.addEventListener('click', function mainFunction() {
//     alert('You are enough');
// });

// console.log($(document));



// J Query

// $(document).ready(function() {
//     const h1 = $('#main-one');
//     console.log(h1);
//     $(h1).click(alert('You are enough'));
//
// });


// this calls the h1 tag with the main-one id and the .bind acts as the addEventListener
// inside of the function has the alert. the function does not have to be named.
$('#main-one').bind('click', function() {
    alert("Sometimes you've got to let everything go - purge yourself. If you are unhappy with anything... " +
        "whatever is bringing you down, get rid of it. Because you'll find that when you're free, your true creativity, your true self comes out.");
});