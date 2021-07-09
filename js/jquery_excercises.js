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
// var h1;
// var randoDiv;
// var image;
// $(document).ready(function() {
//      h1 = $('#main-one');
//      image = $('#img');
//      randoDiv = $('#randomDiv');
//     console.log(h1);
//     image.css('width', '50%');
//     image.css('border', 'solid 15px hotpink');
//     randoDiv.html('<input type="date">');
//     h1.html('If you click the image now, I will give you a quote! :)');
//     $(h1).click(alert('You are enough'));
//
// });

// bellow allows the user to click on the text and have a nice quote alert to them

// this calls the h1 tag with the main-one id and the .bind acts as the addEventListener
// inside of the function has the alert. the function does not have to be named.
// $('img').bind('click', function() {
//     alert("Sometimes you've got to let everything go - purge yourself. If you are unhappy with anything... " +
//         "whatever is bringing you down, get rid of it. Because you'll find that when you're free, your true creativity, your true self comes out.");
// });

// *** let mainOne = document.querySelector('#main-one'); **  is equal to ** $('#main-one') **
// mainOne.addEventListener('click', function mainFunction(); **  is equal to ** .bind('click', function() **


//Alert contents of the element, (an id)
var ptag;
var mainHeader;
var codeupBorder;
var fontSize;
var allH1;
var allP;
var allLi;
$(document).ready(function() {
     ptag = $('#main-ptag');
    ptag.css('background-color', 'skyblue');
    $(ptag).click(alert($(ptag).text()));
    mainHeader = $('#main-header');
    mainHeader.css('background-color', 'pink');
    $(mainHeader).click(alert($(mainHeader).text()));
    codeupBorder = $('.codeup');
    codeupBorder.css({'border':'solid red 1px'});
    fontSize = $('li');
    fontSize.css({'font-size':'20px'});
    allH1 = $('h1');
    allP = $('p');
    allLi = $('li');
    $(allH1).click(alert($(allH1).text()));
    var allEm = allH1 + allP + allLi;

});