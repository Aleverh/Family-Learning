"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Clients = function Clients(clientsName, clientsLogin, clientsPin, currentBalance) {
  _classCallCheck(this, Clients);

  this.clientsName = clientsName;
  this.clientsLogin = clientsLogin;
  this.clientsPin = clientsPin;
  this.currentBalance = currentBalance;
  this.movements = [];
};

var clientsName = document.querySelector("").value;
var clientsLogin = document.querySelector("").value;
var clientsPin = document.querySelector("").value;
var currentBalance = document.querySelector("").value;
var newClients = new Clients(clientsName, clientsLogin, clientsPin, currentBalance);
console.log(newClients);
accounts.push(newClients); // localStorage.setItem("balance", JSON.stringify(accounts));