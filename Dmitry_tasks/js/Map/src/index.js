'use strict';
import 'leaflet';
import './style.css';
import logo from './images/logo.png';
const imgLogo = document.getElementById('logoType');
imgLogo.src = logo;
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
const workouts = [];
// Запись в localStorage пустого массива
function init(){
    if (!JSON.parse(localStorage.getItem("workouts"))) {
        localStorage.setItem("workouts", JSON.stringify(workouts))
    }
}
init();
// Отрисовка карты, нахождение координат пользователя и координаты клика, добавление маркера, добавление в массив инфу о тренеровке
navigator.geolocation.getCurrentPosition(({ coords }) => {
    const {latitude, longitude} = coords;
    const currentCoords = [latitude, longitude];

    const map = L.map('map').setView(currentCoords, 13);
    map.on('click', (e) => {
        const allWorkouts = JSON.parse(localStorage.getItem("workouts"));
        console.log(e.latlng);
        form.style.opacity = '1';
        form.style.position = "relative"
        document.addEventListener('keydown',  (event) => {
            if (event.key === 'Enter' && inputDistance.value > 0 && inputDuration.value > 0 && (inputCadence.value > 0 || inputElevation.value > 0)) {
                console.log(e.latlng);
                const newTrain = {
                    inputType: inputType.value,
                    distance: inputDistance.value,
                    duration: inputDuration.value,
                    cadence: inputCadence.value,
                    location: e.latlng,
                    date: months[new Date().getMonth()] + new Date().getDay(),
                    elevation: inputElevation.value,
                }
                console.log(newTrain);
                inputDuration.value = "";
                inputDistance.value = "";
                inputCadence.value = "";
                inputElevation.value = "";
                form.style.opacity = "0";
                form.style.position = "absolute"
                allWorkouts.push(newTrain);
                localStorage.setItem("workouts", JSON.stringify(allWorkouts));
                allWorkouts.forEach(elem => {
                    const www = new RenderWorkouts(elem.distance, elem.duration, elem.cadence, elem.elevation, elem.inputType, elem.date);
                    www.addDist();
                })
                renderMarker()
            }
        })
    })
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    function renderMarker(){
        const allWorkouts = JSON.parse(localStorage.getItem("workouts"));
        allWorkouts.forEach(elem => {
            if (elem.inputType === "running") {
                L.marker(elem.location).addTo(map)
                    .openPopup()
                    .bindPopup(` 🏃‍♂ ${elem.inputType.charAt(0).toUpperCase() + elem.inputType.slice(1)} on ${elem.date}`);
            }
            if (elem.inputType === "cycling") {
                L.marker(elem.location).addTo(map)
                    .bindPopup(` 🚴‍♀ ${elem.inputType.charAt(0).toUpperCase() + elem.inputType.slice(1)} on ${elem.date}`)
                    .openPopup();
            }
        })
    }
    renderMarker();
})
// Проверка на тип тренировки
inputType.addEventListener('click', () => {
    if (inputType.value === "running"){
        document.querySelector('.form__row-cycling').classList.add('form__row--hidden');
        document.querySelector('.form__row-running').classList.remove('form__row--hidden');
    }
    if (inputType.value === "cycling"){
        document.querySelector('.form__row-cycling').classList.remove('form__row--hidden');
        document.querySelector('.form__row-running').classList.add('form__row--hidden');
    }
})
// Создание класса с методами внутри
class RenderWorkouts {
    constructor(dist, dur, cad, elev, inp, date) {
        this.distance = dist;
        this.duration = dur;
        this.cadence = cad;
        this.elevation = elev;
        this.inputType = inp;
        this.date = date;
    }
    addDist(){
            const countKmh = `${this.duration / 60 * this.distance}`;
            const workoutsDate = `${this.date}`;
            containerWorkouts.innerHTML = "";
                if (this.inputType === 'running'){
                    containerWorkouts.innerHTML +=
                    `<li class="workout workout--running" data-id="1234567890">
                      <h2 class="workout__title">Running on ${workoutsDate}</h2>
                      <div class="workout__details">
                        <span class="workout__icon">🏃‍♂️</span>
                        <span class="workout__value">${this.distance}</span>
                        <span class="workout__unit">km</span>
                      </div>
                      <div class="workout__details">
                        <span class="workout__icon">⏱</span>
                        <span class="workout__value">${this.duration}</span>
                        <span class="workout__unit">min</span>
                      </div>
                      <div class="workout__details">
                        <span class="workout__icon">⚡️</span>
                        <span class="workout__value">${this.duration / this.distance}</span>
                        <span class="workout__unit">min/km</span>
                      </div>
                      <div class="workout__details">
                        <span class="workout__icon">🦶🏼</span>
                        <span class="workout__value">${this.cadence}</span>
                        <span class="workout__unit">spm</span>
                      </div>
                     </li>`
                } else {
                         containerWorkouts.innerHTML +=
                            `<li class="workout workout--cycling" data-id="1234567891">
                              <h2 class="workout__title">Cycling on ${workoutsDate}</h2>
                              <div class="workout__details">
                                <span class="workout__icon">🚴‍♀️</span>
                                <span class="workout__value">${this.distance}</span>
                                <span class="workout__unit">km</span>
                              </div>
                              <div class="workout__details">
                                <span class="workout__icon">⏱</span>
                                <span class="workout__value">${this.duration}</span>
                                <span class="workout__unit">min</span>
                              </div>
                              <div class="workout__details">
                                <span class="workout__icon">⚡️</span>
                                <span class="workout__value">${countKmh}</span>
                                <span class="workout__unit">km/h</span>
                              </div>
                              <div class="workout__details">
                                <span class="workout__icon">⛰</span>
                                <span class="workout__value">${this.elevation}</span>
                                <span class="workout__unit">m</span>
                              </div>
                            </li>`
                        }
    }
}
// Дефолт для формы
function initForm(){
    form.style.position = "absolute";
    const allWorkouts = JSON.parse(localStorage.getItem("workouts"));
    allWorkouts.forEach(elem =>{
        new RenderWorkouts(elem.distance, elem.duration, elem.cadence, elem.elevation, elem.inputType, elem.date).addDist();
    })
}
initForm();