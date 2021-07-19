'use strict'

$(document).ready(function () {




    var lat = 29.424349 // when clicked , geocode what user's typed, in click function
    var long = -98.491142 // get coordinates, reset lat & long in click function then call weatherData

    mapboxgl.accessToken = mapboxAPIKey


    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        zoom: 15,
        center: [long, lat]
    });
   var placeMarker = new mapboxgl.Marker({
        draggable: true
    })
       placeMarker
           .setLngLat([long, lat])
           .addTo(map);
   //for multiple, put ; on the last one.

    // variables here
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
                     <div class="card col-2" style="width: 18rem;">
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
        }) // end of .done function
    } // end of weatherData function


    function onDragEnd() {
     var lngLat = placeMarker.getLngLat()
        console.log(lngLat);


        reverseGeocode(lngLat, mapboxAPIKey).then(function(result) {
            console.log(result);
            $('#current_city').html('Current Location: ' + result);
            placeMarker
                .setLngLat([long, lat])

            map.flyTo({
                center: [long, lat],
                essential: true // this animation is considered essential with respect to prefers-reduced-motion
            }) // end of map . flyTo
        }); // end of reverse geocode




     // this is where we need to try and display the location
        long = lngLat.lng;
        lat = lngLat.lat;
        weatherData();
    } // end of onDragEnd function

// look up call back functions ***********
    placeMarker.on('dragend', onDragEnd)

    $('#find_button').click(function (e) {
        e.preventDefault();
        var address = $("#userInput").val();
        var lngLat = placeMarker.getLngLat();
        console.log(address)

        $('#current_city').html('Current Location: ' + address);

        geocode(address, mapboxAPIKey).then(function(result) {
            console.log(result);
            long = result[0];
            lat = result[1];

            placeMarker
                .setLngLat([long, lat])

            map.flyTo({
                center: [long, lat],
                essential: true // this animation is considered essential with respect to prefers-reduced-motion
            }) // end of map . flyTo
        }); // end of geocode function
        weatherData();
    }); // end of find button click function

}) // end of document.ready




