
var mymap = L.map('mapid',{
  crs: L.CRS.Simple
}).setView([500,  500], 10);
var bounds = [[0, 0], [3468, 5669]];
var image = L.imageOverlay('/donniemap/assets/map-large.jpg', bounds).addTo(mymap);
mymap.fitBounds(bounds);
var markersById = {};

markersById[1] = L.marker(L.latLng([1800, 1500])).addTo(mymap).bindPopup('<h3><a href="/blogs/article-template.html">Donkey Shows in New Mexico? Not what you think</a></h3><p>Mexico City, NM</p>').openPopup();
markersById[2] = L.marker(L.latLng([1900,1400])).addTo(mymap).bindPopup('<h3><a href="/blogs/article-template.html">Best Burger Joint Before Allegations? GHOSTS INVOLVED!?!?!</a></h3><p>Kalispell, MT</p>').openPopup();

function centerMapOnPost(markerId){
  mymap.panTo(markersById[markerId].getLatLng());
  markersById[markerId].openPopup();
}
function goToZipCodePage(){
  let zipcode = window.location.href.remove("index.html") + document.getElementById("nsize").value() + ".html";
  window.open(zipcode);
}
