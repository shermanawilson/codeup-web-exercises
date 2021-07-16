'use strict'

$(document).ready(function () {

    // variables here
    var lat = 29.424349 // when clicked , geocode what user's typed, in click function
    var long = -98.491142 // get coordinates, reset lat & long in click function then call weatherData
    weatherData();

    function weatherData() {
        $.get(`https://api.openweathermap.org/data/2.5/onecall`, {
            appid: `e70517c8a46dc67c044058b59cf52317`,
            lat: lat, //make not hard coded
            lon: long, //make not hard coded
            units: `imperial` //temp is in f
        }).done(function (data) {
            console.log(data);

            data.daily.forEach(function (day, index) { // index is like i in for loop
                if (index < 5) {
                    console.log(day); // this is where i can take apart info for each day
                    var weatherCard = `
                 <div class="col-6" id="main-card-col">
                     <div class="card" style="width: 18rem;">
                         <div class="card-header">
                            ${new Date(day.dt * 1000)}
                        </div>
                          <ul class="list-group list-group-flush">
                            <li class="list-group-item">${day.temp.morn} / ${day.temp.night} </li>
                            <li class="list-group-item"><img src="https://openweathermap.org/img/w/${day.weather[0].icon}.png"></li>
                            <li class="list-group-item">Description: ${day.weather[0].description} </li>
                            <li class="list-group-item">Humidty: ${day.humidity} </li>
                            <li class="list-group-item">Wind: ${day.wind_speed}</li>
                            <li class="list-group-item">Pressure: ${day.pressure}</li>
                         </ul>
                 </div>`
                    $('#main-card-col').append(weatherCard)
                }

            })

            // on drag in , marker drag, drag to coordinates!!
            mapboxgl.accessToken = mapboxAPIKey
            var map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v11',
                zoom: 18,
                center: [long, lat]
            });
            var placeMarker = new mapboxgl.Marker()
                .setLngLat([long, lat])
                .addTo(map);
        })
    }

    function updatesInfo() {
        // click function on button
        //geocode user input , using that to set them as long and lat var's
        // geocode user input, call on var
        // call weather data, will do so but with new coordinates
        var address = $("#userInput").val();
        console.log(address)
        geocode(address, mapboxAPIKey).then(function(result) {
            console.log(result);
            map.setCenter(result);
            map.setZoom(17);

        });
    }

    $('#find_button').click(function (e) {
        e.preventDefault();
        var address = $("#userInput").val();
        console.log(address)
        geocode(address, mapboxAPIKey).then(function(result) {
            console.log(result);
            map.setCenter(result);
            map.setZoom(17);

        });
    });


}) // end of document.ready