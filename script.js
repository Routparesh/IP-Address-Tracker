// let geo_location = 'https://geo.ipify.org/api/v2/country?apiKey=at_gyGuAAYIeRYFoYdCedFKtJn3KiCOL&ipAddress=8.8.8.8'

// fetch(geo_location)
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((error)=>{
//     console.log(error)
// })

var map = L.map('map').setView([51.505, -0.09], 13);
var orm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

orm.addTo(map);

var marker = L.marker([51.5, -0.09]).addTo(map);

var popup = L.popup()
    .setLatLng([51.513, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(map);