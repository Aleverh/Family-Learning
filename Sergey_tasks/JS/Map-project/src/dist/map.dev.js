"use strict";

require("./map.html");

require("./map.css");

require("leaflet");

// you can see demo on this page https://mapty.netlify.app/ ----------------------
init();

function init() {
  //---your location and coords record in LocalStorage--------------------------
  var myCoords = JSON.parse(localStorage.getItem("myCoords")) || [];
  navigator.geolocation.getCurrentPosition(function (_ref) {
    var coords = _ref.coords;
    var latitude = coords.latitude,
        longitude = coords.longitude;
    var currentCoords = [latitude, longitude];
    localStorage.setItem("myCoords", JSON.stringify(currentCoords));
  });

  if (JSON.parse(localStorage.getItem("movements"))) {
    updateTraningField();
  }
} //---initialisation map------------------------------------------------------------


var map = L.map('map').setView(JSON.parse(localStorage.getItem("myCoords")), 17);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
L.marker(JSON.parse(localStorage.getItem("myCoords"))).addTo(map).bindPopup('Ваше местоположение').openPopup();
showMarker(); // const li = document.querySelector(".sidebar");
// //---Moving objects center of the map -------------------------------------------------------
// li.addEventListener("click", (event) =>{
//     // const movements = JSON.parse(localStorage.getItem("movements"));
//     if(event.target.closest(".workout")) {
//         let coordsTraning = event.target.getAttribute("data-id");
//         co
//         localStorage.setItem("myCoords", JSON.stringify(coordsTraning));
//         console.log(coordsTraning);
//     //    map =  L.map('map').setView(JSON.parse(localStorage.getItem("myCoords")), 17);
//     //    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
//     //    L.marker(JSON.parse(localStorage.getItem("myCoords"))).addTo(map)
//     //         .bindPopup('Ваше местоположение')
//     //         .openPopup()
//         map.remove();
//         let map = L.map('map', {
//             center: [coordsTraning],
//             zoom: 13
//         });
//     }
// })
//---recording coords in LocajStarage when you click on the point maps--------------

map.on("click", function (elem) {
  form.style.opacity = "1";
  var newCoords = [elem.latlng.lat, elem.latlng.lng];
  localStorage.setItem("newCoords", JSON.stringify(newCoords));
  showMarker();
}); //---Choose a workout---------------------------------------------------------------

inputType.addEventListener("click", checkTraning);

function checkTraning() {
  var cycling = document.querySelector(".form__row--cycling");
  var running = document.querySelector(".form__row--running");

  if (inputType.value === "running") {
    cycling.classList.remove("form__row--hidden");
    running.classList.add("form__row--hidden");
  }

  if (inputType.value === "cycling") {
    cycling.classList.add("form__row--hidden");
    running.classList.remove("form__row--hidden");
  }
} //---Adding new markers to the map---------------------------------------------------


function showMarker() {
  var movements = JSON.parse(localStorage.getItem("movements")) || [];
  movements.forEach(function (elem) {
    var marker = L.marker([elem.newCoords[0], elem.newCoords[1]]);
    marker.addTo(map);
    marker.bindPopup("".concat(inputType.value, " on ", "".concat(today.getDate(), ".0").concat(today.getMonth() + 1, ".").concat(today.getFullYear())));
    marker.openPopup();
  });
} //---Init constants, created new object and object saving in Local Starage------------


function dataValidation() {
  var arrayMovements = JSON.parse(localStorage.getItem("movements")) || [];
  var newCoords = JSON.parse(localStorage.getItem("newCoords"));
  var type = inputType.value;
  var distance = parseInt(inputDistance.value);
  var duration = parseInt(inputDuration.value);
  var cadence = parseInt(inputCadence.value);
  var elevation = parseInt(inputElevation.value);
  var date = "".concat(today.getDate(), ".0").concat(today.getMonth() + 1, ".").concat(today.getFullYear());
  var newMovement = new Movements(newCoords, type, distance, duration, cadence, elevation, date);
  newMovement.buildField();
  arrayMovements.push(newMovement);
  localStorage.setItem("movements", JSON.stringify(arrayMovements));
  newMovement.clearLocalStorage();
} //---Run the object creation function--------------------------------------------------------


button.addEventListener("click", function () {
  form.style.opacity = "0";
  dataValidation();
  showMarker();
  document.querySelectorAll("input").forEach(function (elem) {
    return elem.value = "";
  });
}); //---Updates programm------------------------------------------------------------------------

function updateTraningField() {
  var movements = JSON.parse(localStorage.getItem("movements"));
  movements.forEach(function (elem) {
    var newCoords = elem.newCoords;
    var type = elem.type;
    var distance = elem.distance;
    var duration = elem.duration;
    var cadence = elem.cadence;
    var elevation = elem.elevation;
    var updateMovement = new Movements(newCoords, type, distance, duration, cadence, elevation);
    updateMovement.buildField();
  });
}