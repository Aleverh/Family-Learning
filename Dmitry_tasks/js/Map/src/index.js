'use strict';
import 'leaflet';
import './style.css';
import logo from './images/logo.png';
import {extend} from "leaflet/dist/leaflet-src.esm";
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

// Создание класса с методами внутри
class Workouts {
    constructor(dist, dur, cad, elev, inp, date) {
        this.distance = dist;
        this.duration = dur;
        this.cadence = cad;
        this.elevation = elev;
        this.inputType = inp;
        this.date = date;
    }
    render(){
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
// class Running extends Workouts{
//
// }
// class Cycling extends Workouts{
//
// }
// Дефолт для формы
class App {
    #workouts = [];
    #map;
    constructor() {
        inputType.addEventListener("click", this.inputTypeHandler);
        this.getWorkoutsFromLocalStorage();
        this.initForm();
        this.getGeolocation()
        document.addEventListener('keydown',  (event) => {
            if (event.key === 'Enter' && inputDistance.value > 0 && inputDuration.value > 0 && (inputCadence.value > 0 || inputElevation.value > 0)) {
                console.log(this.#map._lastCenter);
                const newTrain = {
                    inputType: inputType.value,
                    distance: inputDistance.value,
                    duration: inputDuration.value,
                    cadence: inputCadence.value,
                    location: this.#map._lastCenter,
                    date: months[new Date().getMonth()] + new Date().getDay(),
                    elevation: inputElevation.value,
                }
                inputDuration.value = "";
                inputDistance.value = "";
                inputCadence.value = "";
                inputElevation.value = "";
                form.style.opacity = "0";
                form.style.position = "absolute"
                this.#workouts.push(newTrain);
                localStorage.setItem("workouts", JSON.stringify(this.#workouts));
                this.#workouts.forEach(elem => {
                    const www = new Workouts(elem.distance, elem.duration, elem.cadence, elem.elevation, elem.inputType, elem.date);
                    www.render();
                })
                this.renderMarker()
            }
        })
    }
    // Запись в localStorage пустого массива и рендеринг тренеровок
    initForm(){
        form.style.position = "absolute";
        this.#workouts.forEach(elem =>{
            new Workouts(elem.distance, elem.duration, elem.cadence, elem.elevation, elem.inputType, elem.date).render();
        })
    }
    getWorkoutsFromLocalStorage(){
       this.#workouts = JSON.parse(localStorage.getItem("workouts")) || [];
    }
    // Проверка на тип тренировки
    inputTypeHandler = () => {
        if (inputType.value === "running"){
            document.querySelector('.form__row-cycling').classList.add('form__row--hidden');
            document.querySelector('.form__row-running').classList.remove('form__row--hidden');
        }
        if (inputType.value === "cycling"){
            document.querySelector('.form__row-cycling').classList.remove('form__row--hidden');
            document.querySelector('.form__row-running').classList.add('form__row--hidden');
        }
    }

// Добавление маркера
    renderMarker(){
        this.#workouts.forEach(elem => {
            if (elem.inputType === "running") {
                L.marker(elem.location).addTo(this.#map)
                    .openPopup()
                    .bindPopup(` 🏃‍♂ ${elem.inputType.charAt(0).toUpperCase() + elem.inputType.slice(1)} on ${elem.date}`);
            }
            if (elem.inputType === "cycling") {
                L.marker(elem.location).addTo(this.#map)
                    .bindPopup(` 🚴‍♀ ${elem.inputType.charAt(0).toUpperCase() + elem.inputType.slice(1)} on ${elem.date}`)
                    .openPopup();
            }
        })
    }
// Отрисовка карты, нахождение координат пользователя
    getGeolocation(){
        navigator.geolocation.getCurrentPosition(({ coords }) => {
            const {latitude, longitude} = coords;
            const currentCoords = [latitude, longitude];
            this.#map = L.map('map').setView(currentCoords, 13);
            this.renderClickOnMap()
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.#map);
            this.renderMarker();
        })
    }
// Добавление в массив информацию о тренеровке, нахождение координат клика
    renderClickOnMap(map){
            this.#map.on('click', (e) => {
            console.log(e);
            form.style.opacity = '1';
            form.style.position = "relative"
        })
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.#map);
    }
}
const iii = new App();
