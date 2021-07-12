'use strict'
// JavaScript

// When you click on the text, it will say something nice :)
// let mainOne = document.querySelector('#main-one');
// mainOne.addEventListener('click', function mainFunction() {
//     alert('You are enough');
// });

// console.log($(document));


// J Query

// down bellow allows an alert to go off when page is loaded
var h1;
var randoDiv;
var image;
$(document).ready(function () {
    h1 = $('#main-one');
    image = $('#img');
    randoDiv = $('#randomDiv');
    console.log(h1);
    image.css('width', '50%');
    image.css('border', 'solid 15px hotpink');
    randoDiv.html('<input type="date">');
    h1.html('If you click the image now, I will give you a quote! :)');
    $(h1).click(alert('You are enough'));

});

// bellow allows the user to click on the text and have a nice quote alert to them

// this calls the h1 tag with the main-one id and the .bind acts as the addEventListener
// inside of the function has the alert. the function does not have to be named.
$('img').bind('click', function () {
    alert("Sometimes you've got to let everything go - purge yourself. If you are unhappy with anything... " +
        "whatever is bringing you down, get rid of it. Because you'll find that when you're free, your true creativity, your true self comes out.");
});

// *** let mainOne = document.querySelector('#main-one'); **  is equal to ** $('#main-one') **
// mainOne.addEventListener('click', function mainFunction(); **  is equal to ** .bind('click', function() **


//Alert contents of the element, (an id)
var ptag;
var mainHeader;
var mainHeader2;
var codeupBorder;
var fontSize;
var allH1;
var allP;
var allLi;
var allEm;
var hoverIn;
var hoverOut;
$(document).ready(function () {
    //id selectors

    //turns the background of the main p-tag skyblue and alerts the contents of the main p-tag
    ptag = $('#main-ptag');
    ptag.css('background-color', 'skyblue');
    alert($(ptag).text());

    //id selectors

    //turns the background-color pink and alerts the contents of the main header
    mainHeader = $('#main-header');
    mainHeader.css('background-color', 'green');
    alert($(mainHeader).text());

    //class selectors

    //turns the border red with a 1px border
    codeupBorder = $('.codeup');
    codeupBorder.css({'border': 'solid red 1px'});

    // element selectors

    //changes the font size to 20px for all li elements
    fontSize = $('li');
    fontSize.css({'font-size': '20px'});

    //assigns all h1, p and li tags
    allH1 = $('h1');
    allP = $('p');
    allLi = $('li');

    //alerts the page the contents of all the h1 elements
    alert($(allH1).text());


    //combines all h1, p and li elements and highlights them all yellow!
    allEm = $("h1, p, li");
    allEm.css('background-color', '#ffffcc');

    // turns second h1 blue when clicked
    mainHeader2 = $('#main-header2');
        $(mainHeader2).click(function () {
            mainHeader2.css('background-color', 'lightblue');
        });

        //changes font size of all p tags to 18px
        $(allP).dblclick(function () {
            allP.css('font-size', '18px');
        });

        //this will turn text red
        hoverIn = function () {
            allLi.css('color', 'red');
        }
        //this will turn text back to black
        hoverOut = function () {
            allLi.css('color', 'black');
        }
        // this will make the functionality work for hovering
        $(allLi).hover(hoverIn, hoverOut);

        // bellow is the same thing but written out longer

        // //changes all li to red when hovered over
        // $(allLi).hover(function () {
        //     allLi.css('color', 'red');
        // }, //this will change it back to black once the user is no longer hovering
        //   $(allLi).hover(function () {
        //       allLi.css('color', 'black');
        //     }))
    });


