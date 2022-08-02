"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//------------------------------------------------------------------------
var Client = function Client(clientsName, clientsLogin, clientsPin, currentBalance) {
  _classCallCheck(this, Client);

  this.clientsName = clientsName;
  this.clientsLogin = clientsLogin;
  this.clientsPin = clientsPin;
  this.currentBalance = currentBalance;
  this.movements = [];
};

btnReg.addEventListener("click", function () {
  var clientsName = inputClientsName.value;
  var clientsLogin = inputClientsLogin.value;
  var clientsPin = parseInt(inputClientsPin.value);
  var currentBalance = parseInt(inputCurrentBalance.value);
  var newClients = new Client(clientsName, clientsLogin, clientsPin, currentBalance);
  var balance = JSON.parse(localStorage.getItem("balance")) || [];
  localStorage.setItem("balance", JSON.stringify([].concat(_toConsumableArray(balance), [newClients]))); //--Очищение полей input

  document.querySelectorAll("input").forEach(function (elem) {
    return elem.value = "";
  });
});