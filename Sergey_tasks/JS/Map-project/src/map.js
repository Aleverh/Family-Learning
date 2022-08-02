"use strict";

import "./map.html";
import "./map.css";
import "leaflet";

// you can see demo on this page https://mapty.netlify.app/ ----------------------

init(); 
function init(){
    //---your location and coords record in LocalStorage--------------------------
    const myCoords = (JSON.parse(localStorage.getItem("myCoords")) || []);
    navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords;
        const currentCoords = [latitude, longitude];
        localStorage.setItem("myCoords", JSON.stringify(currentCoords));
    });
    if(JSON.parse(localStorage.getItem("movements"))){
        updateTraningField();
    }
}
//---initialisation map------------------------------------------------------------
const map = L.map('map').setView(JSON.parse(localStorage.getItem("myCoords")), 17);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
L.marker(JSON.parse(localStorage.getItem("myCoords"))).addTo(map)
    .bindPopup('Ваше местоположение')
    .openPopup(); 
showMarker();

// const li = document.querySelector(".sidebar");
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
map.on("click", (elem) => {
    form.style.opacity = "1";
    const newCoords = [elem.latlng.lat, elem.latlng.lng]; 
    localStorage.setItem("newCoords", JSON.stringify(newCoords));
    showMarker();
});

//---Choose a workout---------------------------------------------------------------
inputType.addEventListener("click", checkTraning);
function checkTraning(){
    const cycling = document.querySelector(".form__row--cycling");
    const running = document.querySelector(".form__row--running");
    if(inputType.value === "running"){
        cycling.classList.remove("form__row--hidden");
        running.classList.add("form__row--hidden");
    }
    if(inputType.value === "cycling"){
        cycling.classList.add("form__row--hidden");
        running.classList.remove("form__row--hidden");
    }
}

//---Adding new markers to the map---------------------------------------------------
function showMarker(){
    const movements = JSON.parse(localStorage.getItem("movements")) || [];
    movements.forEach(elem => {
        let marker = L.marker([elem.newCoords[0], elem.newCoords[1]]);
        marker.addTo(map);
        marker.bindPopup(`${inputType.value} on ${`${today.getDate()}.0${today.getMonth() + 1}.${today.getFullYear()}`}`);
        marker.openPopup();
    });
}

//---Init constants, created new object and object saving in Local Starage------------
function dataValidation(){
    const arrayMovements = JSON.parse(localStorage.getItem("movements")) || [];
    const newCoords = JSON.parse(localStorage.getItem("newCoords"));
    const type = inputType.value;
    const distance = parseInt(inputDistance.value);
    const duration = parseInt(inputDuration.value);
    const cadence = parseInt(inputCadence.value);
    const elevation = parseInt(inputElevation.value);
    const date = `${today.getDate()}.0${today.getMonth() + 1}.${today.getFullYear()}`;

    const newMovement = new Movements(newCoords, type, distance, duration, cadence, elevation, date);
    newMovement.buildField();
    arrayMovements.push(newMovement);
    localStorage.setItem("movements", JSON.stringify(arrayMovements));
    newMovement.clearLocalStorage();
}

//---Run the object creation function--------------------------------------------------------
button.addEventListener("click", () =>{
    form.style.opacity = "0";
    dataValidation();
    showMarker();
    document.querySelectorAll("input").forEach(elem => elem.value = "");
});
//---Updates programm------------------------------------------------------------------------
function updateTraningField(){
    const movements = JSON.parse(localStorage.getItem("movements"));
    movements.forEach(elem => {
        const newCoords = elem.newCoords;
        const type = elem.type;
        const distance = elem.distance;
        const duration = elem.duration;
        const cadence = elem.cadence;
        const elevation = elem.elevation;

        const updateMovement = new Movements(newCoords, type, distance, duration, cadence, elevation);
        updateMovement.buildField();
    })
}

