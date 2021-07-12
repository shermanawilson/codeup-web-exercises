"use strict";
// array that has each piece of the code
var keysToBePassed = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b'
};

//this array holds the pattern we want the user to type in to get lives
var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
// this is where in the array it starts
var konamiCodeLocation = 0;

//this is the function that holds all the functionality
$(document).keydown(function (event) { // allows whatever the function for pressed down wants to dispaly
    //this links our object that holds keycodes
    var key = keysToBePassed[event.keyCode];
    // this is for the array of the code pattern,
    var requiredKey = konamiCode[konamiCodeLocation];
    console.log(event.keyCode);
    //if what's being typed is equal in sequence
    if (key == requiredKey) {
        //then go to the next key typed
        konamiCodeLocation++;
        //if the location is the same length as the code then it's going to run the code works function and start the location at 0
        if (konamiCodeLocation == konamiCode.length) {
            theCodeWorks();
            konamiCodeLocation = 0;
        } // if it does not match, it's going to reset the location to 0 until it does
    } else {
        konamiCodeLocation = 0;
    }
});

function theCodeWorks() {
    //makes background image of my choosing
    document.body.style.backgroundImage = "url('img/watercolor.jpeg')";

    //added audio file to play once reached
    var audio = new Audio('audio/Symphony No.6 (1st movement).mp3');
    audio.play();

    // this line changes the text once the code is active
    document.body.innerHTML = "Wow, I cant believe you made it! Welp, here's some classical music and beautiful art for our background! Oh , and if you're curious about what the key codes you're typing are you can always open up your inspector tool and check it out in the console!!"

    //alerts user that they now have 30 lives
    alert("You have added 30 lives!");
}
