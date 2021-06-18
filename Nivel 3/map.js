let mymap = L.map("myMap").setView([41.3868463, 2.1705621], 17);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  minZoom: 10,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org.copyright">OpenStreetMap</a> contributors',
}).addTo(mymap);

//   Icono personalizado

let myIcon = L.icon({
  iconUrl: "./img/google-maps-new.png",
  iconSize: [45, 45], //Tamaño Icon
  iconAnchor: [28, 94], //Distancia con respecto al marcador
  popupAnchor: [-3, -76], //Distancia con respecto a la ventana emergente
});

//Añado marcador Calle Balmes 16
let marker = L.marker([41.3871076867213, 2.166022941836958]).addTo(mymap);

// // Info marcador
marker
  .bindPopup(
    `<b>Restaurant Centfocs</b><br><br> Restaurante mediterráneo<br>Carrer de Balmes, 16 -08007 Barcelona`
  )
  .openPopup();

// Obtengo Latitud al hacer click en cualquier parte del mapa.
function onMapClick(e) {
  let info;

  if (mymap.hasLayer(marker)) {
    //boolean true
    mymap.removeLayer(marker);
  }
  marker = L.marker(e.latlng, { icon: myIcon });
  info = `<b> Lat: ${e.latlng.lat} Lng: ${e.latlng.lng} <b>`;

  marker.bindPopup(info);
  mymap.addLayer(marker);
  marker.openPopup();
}
mymap.on("click", onMapClick);
