'use strict';
import Leaflet from 'leaflet';
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

// Создание класса с методами внутри
class Workouts {
    constructor(dist, dur, cad, elev, inp, date, id) {
        this.id = id
        this.distance = dist;
        this.duration = dur;
        this.cadence = cad;
        this.elevation = elev;
        this.inputType = inp;
        this.date = date;
    }
    render() {
        const countKmh = `${this.duration / 60 * this.distance}`;
        const workoutsDate = `${this.date}`;
        let html = "";
        if (this.inputType === 'running') {
            html =
            `<li class="workout workout--running" data-id = ${JSON.stringify(this.id)}>
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
            html =
            `<li class="workout workout--cycling" data-id="${JSON.stringify(this.id)}">
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
        containerWorkouts.insertAdjacentHTML('beforeend', html);
        };
}
// Дефолт для формы
class App {
    #workouts = [];
    #map;
    #mapEvent;

    constructor() {
        containerWorkouts.innerHTML = "";
        inputType.addEventListener("click", this.inputTypeHandler);
        this.getWorkoutsFromLocalStorage();
        this.renderWorkouts();
        this.getGeolocation();
        document.addEventListener('keydown', this.addNewTrain);
        this.showCenter();

    }
    // Центрирование карты по клику на тренеровку
    showCenter() {
        const train = document.querySelectorAll('.workout');
        train.forEach(elem => {
            elem.addEventListener('click', (e) => {
                this.#map.setView(JSON.parse(elem.getAttribute('data-id')), 13)
            })
        })
    }

    // Добавление в массив информацию о тренеровке, нахождение координат клика
    showForm() {
        this.#map.on('click', (e) => {
            this.#mapEvent = e;
            form.style.opacity = '1';
            form.style.position = "relative";
        })
    }

    addNewTrain = (event) => {
        if (event.key === 'Enter' && inputDistance.value > 0 && inputDuration.value > 0 && (inputCadence.value > 0 || inputElevation.value > 0)) {
            const newTrain = {
                inputType: inputType.value,
                distance: inputDistance.value,
                duration: inputDuration.value,
                cadence: inputCadence.value,
                location: this.#mapEvent.latlng,
                date: months[new Date().getMonth()] + new Date().getDay(),
                elevation: inputElevation.value,
                id: this.#mapEvent.latlng,
            };
            this.clearForm()
            this.#workouts.push(newTrain);
            localStorage.setItem("workouts", JSON.stringify(this.#workouts));
            new Workouts(newTrain.distance, newTrain.duration, newTrain.cadence, newTrain.elevation, newTrain.inputType, newTrain.date, newTrain.id).render();
            this.renderMarkers();
            this.showCenter();
        }
    }
    clearForm(){
        inputDuration.value = "";
        inputDistance.value = "";
        inputCadence.value = "";
        inputElevation.value = "";
        form.style.opacity = "0";
        form.style.position = "absolute";
    }
    // Запись в localStorage пустого массива и рендеринг тренеровок
    renderWorkouts() {
        form.style.position = "absolute";
        this.#workouts.forEach(elem => {
            new Workouts(elem.distance, elem.duration, elem.cadence, elem.elevation, elem.inputType, elem.date, elem.id).render();
        })
    }

    getWorkoutsFromLocalStorage() {
        this.#workouts = JSON.parse(localStorage.getItem("workouts")) || [];
    }

    // Проверка на тип тренировки
    inputTypeHandler = () => {
        if (inputType.value === "running") {
            document.querySelector('.form__row-cycling').classList.add('form__row--hidden');
            document.querySelector('.form__row-running').classList.remove('form__row--hidden');
        }
        if (inputType.value === "cycling") {
            document.querySelector('.form__row-cycling').classList.remove('form__row--hidden');
            document.querySelector('.form__row-running').classList.add('form__row--hidden');
        }
    }

// Добавление маркера
    renderMarkers() {
        this.#workouts.forEach(elem => {
            if (elem.inputType === "running") {
                this.renderMarker(elem,'  🏃‍♂ ')
            } else {
                this.renderMarker(elem, ' 🚴‍♀ ')
            }
        })
    };
    renderMarker(elem, title){
        Leaflet.marker(elem.location).addTo(this.#map)
            .bindPopup(` ${title} ${elem.inputType.charAt(0).toUpperCase() + elem.inputType.slice(1)} on ${elem.date}`)
            .openPopup();
    }
// Отрисовка карты, нахождение координат пользователя
    getGeolocation() {
        navigator.geolocation.getCurrentPosition(({coords}) => {
            const {latitude, longitude} = coords;
            const currentCoords = [latitude, longitude];
            this.#map = L.map('map').setView(currentCoords, 13);
            Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.#map);
            this.showForm();
            this.renderMarkers();
        })
    }
}

new App();
