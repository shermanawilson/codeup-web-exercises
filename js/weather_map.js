'use strict'

$(document).ready(function () {

    // variables here
    var map;
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
            $('#main-card-col').html("");

            data.daily.forEach(function (day, index) { // index is like i in for loop
                if (index < 5) {
                    console.log(day); // this is where i can take apart info for each day
                    var weatherCard = `
                 <div class="col-6" id="main-card-col">
                     <div class="card" style="width: 18rem;">
                         <div class="card-header">
                            ${new Date(day.dt * 1000).toDateString()}
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

            })  // end of for each loop

            // on drag in , marker drag, drag to coordinates!!
            mapboxgl.accessToken = mapboxAPIKey

            var coordinates = $('#map')
            map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v11',
                zoom: 9,
                center: [long, lat]
            });
            var placeMarker = new mapboxgl.Marker({
                draggable: true
            })
                .setLngLat([long, lat])
                .addTo(map);


            function onDragEnd() {
                // TBD

                var lngLat = placeMarker.getLngLat();
                // coordinates.style.display = 'block';
                // coordinates.innerHTML =
                //     'Longitude: ' + long + '<br />Latitude: ' + lat;
                map.flyTo({
                    center: [long, lat],
                    essential: true // this animation is considered essential with respect to prefers-reduced-motion
                })
            }

            placeMarker.on('dragend', onDragEnd())
        }) // end of .done function
    }


    $('#find_button').click(function (e) {
        e.preventDefault();
        var address = $("#userInput").val();
        console.log(address)
        geocode(address, mapboxAPIKey).then(function(result) {
            console.log(result);
            long = result[0];
            lat = result[1];
        });
        weatherData();

    }); // end of find button click function


    // TODO: There should be an almost animation that when you press the button it zooms into the
    // TODO: location location, when pressed to go somewhere else it zooms out of where you are and zooms
    // TODO: into new location

    // Step 1: Get the functionality to work for pulling new coordinates
    // Step 2: Get it to zoom into location
    // Step 3: Get it to zoom out from current location and zoom into new location


}) // end of document.ready




