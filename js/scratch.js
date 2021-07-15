'use strict'

mapboxgl.accessToken = mapboxAPIKey;
// where the browser asks for your location
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
})

function successLocation(position) {
    console.log(position);
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
setupMap([-98.61188, 29.60118])
}

function setupMap(center) {
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        zoom: 15,
        center: center
    });
    var nav = new mapboxgl.NavigationControl();
    map.addControl(nav);


    var directions = new MapboxDirections({
        accessToken: mapboxAPIKey
    });
    map.addControl(directions, 'top-left');
}


