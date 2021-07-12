
var ptag;
var mainHeader;
var codeupBorder;
var fontSize;
var allH1;
var allP;
var allLi;
var allEm;
$(document).ready(function() {
    //id selectors

    //turns the background of the main p-tag skyblue and alerts the contents of the main p-tag
    ptag = $('#main-ptag');
    ptag.css('background-color', 'skyblue');
    $(ptag).click(alert($(ptag).text()));

    //id selectors

    //turns the background-color pink and alerts the contents of the main header
    mainHeader = $('#main-header');
    mainHeader.css('background-color', 'green');
    $(mainHeader).click(alert($(mainHeader).text()));

    //class selectors

    //turns the border red with a 1px border
    codeupBorder = $('.codeup');
    codeupBorder.css({'border':'solid red 1px'});

    // element selectors

    //changes the font size to 20px for all li elements
    fontSize = $('li');
    fontSize.css({'font-size':'20px'});

    //assigns all h1, p and li tags
    allH1 = $('h1');
    allP = $('p');
    allLi = $('li');

    //alerts the page the contents of all the h1 elements
    $(allH1).click(alert($(allH1).text()));
    allH1.css('background-color', 'yellow');

    //combines all h1, p and li elements
    allEm = $( "h1, p, li" );





});