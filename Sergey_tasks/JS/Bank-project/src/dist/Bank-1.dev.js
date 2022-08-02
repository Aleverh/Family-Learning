"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var today = new Date();

function initClients() {
  var balance = JSON.parse(localStorage.getItem("balance")) || [];
  var clientUser = balance.find(function (elem) {
    return elem.clientsLogin === localStorage.getItem("activeClient");
  });
  containerMovements.innerHTML = "";
  var transferMoney = 0;
  var incomeMoney = 0;

  if (clientUser) {
    containerApp.style.opacity = "1";
    labelBalance.innerHTML = clientUser.currentBalance + "€"; //--Создаем строки и записываем в них историю движения средств------

    clientUser.movements.forEach(function (item) {
      var row = document.createElement("div");
      row.classList.add("movements__row");
      containerMovements.append(row);
      var type = document.createElement("div");
      item > 0 ? type.classList.add("movements__type", "movements__type-deposit") : type.classList.add("movements__type", "movements__type-withdrawal");
      row.append(type);
      var spanText = document.createElement("span");
      item > 0 ? spanText.textContent = "deposit" : spanText.textContent = "withdraval";
      type.append(spanText);
      var spanDate = document.createElement("div");
      spanDate.classList.add("movements__date");
      spanDate.textContent = "".concat(today.getDate(), ".0").concat(today.getMonth() + 1, ".").concat(today.getFullYear(), "   ").concat(today.getHours(), ":").concat(today.getMinutes());
      row.append(spanDate);
      var value = document.createElement("div");
      value.classList.add("movements__value");
      row.append(value);
      var spanDeposit = document.createElement("span");
      spanDeposit.textContent = item + "€";
      value.append(spanDeposit);
      item > 0 ? transferMoney += item : incomeMoney += item;
    });
  }

  labelSumIn.innerHTML = transferMoney + "€";
  labelSumOut.innerHTML = incomeMoney + "€";
}

var _default = initClients;
exports["default"] = _default;