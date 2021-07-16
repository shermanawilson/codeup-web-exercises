'use strict'

$(document).ready(function () {



    $.get(`https://api.openweathermap.org/data/2.5/weather`, {
        appid: `e70517c8a46dc67c044058b59cf52317`,
        q:     "San Antonio, US",
        units: `imperial` //temp is in f
    });

// on drag in , marker drag, drag to coordinates!!











}) // end of document.ready