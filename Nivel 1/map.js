
let mymap = L.map('myMap').setView([41.3868463,2.1705621], 17); 

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{
    maxZoom: 19,
    minZoom: 10,
    attribution: '&copy; <a href="https://www.openstreetmap.org.copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);



// Añado marcador Calle Balmes 16
let marker = L.marker([41.3871076867213, 2.166022941836958]).addTo(mymap);

// Mensaje marcador
marker.bindPopup(`<b>Restaurant Centfocs</b><br><br> Restaurante mediterráneo<br>Carrer de Balmes, 1608007 Barcelona`).openPopup();
