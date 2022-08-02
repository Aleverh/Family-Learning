"use strict";

var today = new Date();
var containerWorkouts = document.querySelector('.workouts');
var li = document.querySelector(".sidebar");
var borderRunning = document.querySelector(".workout--running");
var borderCycling = document.querySelector(".workout--cycling");
var form = document.querySelector('.form');
var hidden = document.querySelector('.hidden');
var inputType = document.querySelector('.form__input--type');
var inputDistance = document.querySelector('.form__input--distance');
var inputDuration = document.querySelector('.form__input--duration');
var inputCadence = document.querySelector('.form__input--cadence');
var inputElevation = document.querySelector('.form__input--elevation');
var button = document.querySelector(".form__btn");