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
    //this just logs each key you press's keycode
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
    document.body.style.backgroundImage = "url('http://sfwallpaper.com/images/background-images-for-websites-8.jpg')";

    // document.body.style.backgroundImage = "url('')"

    //added audio file to play once reached
    var audio = new Audio('audio/Kay-S-Beats-Juice-RB-Type-Hip-hop-Trap-Beat-ProdKayS.mp3');
    audio.play();


    // this line changes the text once the code is active
    document.body.innerHTML = "<h1>\'Thanks for stopping by! Here are a few quotes :)'\</h1>"
    // "<h1>\'Thanks for stopping by! Here are a few quotes :)'\</h1>"
    // "<p>\"The events in our lives happen in a sequence in time, but in their significance to ourselves they find their own order the continuous thread of revelation.\" Eudora Welty</p>"
    // "<p>\'They say a person needs just three things to be truly happy in this world: Someone to love, something to do, and something to hope for.'\</p>"
    // "<p>\'There's nothing like deep breaths after laughing that hard. Nothing in the world like a sore stomach for the right reasons'\</p>"
    // "<p>\'It's so hard to forget pain, but it's even harder to remember sweetness. We have no scar to show for happiness. We learn so little from peace.'\</p>"
    // "<p>\'It isn't what you have or who you are or where you are or what you are doing that makes you happy or unhappy. It is what you think about it.'\</p>"
    //     "</div>"
    function paragraphFunction(p_tags) {
        var html = '<div id="paragraphs">';
        html += '<h1>' + "Thanks for stopping by! Here are a few quotes :)" + '</h1>';
        html += '<p>' + 'They say a person needs just three things to be truly happy in this world: Someone to love, something to do, and something to hope for.' + '</p>';
        html += '<p>' + "It's so hard to forget pain, but it's even harder to remember sweetness. We have no scar to show for happiness. We learn so little from peace." + '</p>';
        html += '<p>' + "It isn't what you have or who you are or where you are or what you are doing that makes you happy or unhappy. It is what you think about it." + '</p>';
        html += '</div>';

        return html;
    }
    document.body.innerHTML = paragraphFunction();

    $("#paragraphs").click(function(){
        $("#paragraphs").animate({height: "300px"});
    });

    //alerts user that they now have 30 lives
    alert("You have added 30 lives!");
}
