"use strict";

require("./Bank.html");

require("./Bank.scss");

var _Bank3 = _interopRequireDefault(require("./Bank-1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

"use strict"; //------------------------------------------------------------------------


var closeActiveUser;
var timeSession = 300000; //-время сессии

var today = new Date(); //--Запись в данных массива accounts в localStorage если они не записаны

function init() {
  labelDate.textContent = "".concat(today.getDate(), ".0").concat(today.getMonth() + 1, ".").concat(today.getFullYear());
  closeActiveUser = setInterval(timer, 1000);
}

init();
(0, _Bank3["default"])(); //--Проверка Login и пароль и если TRUE то вывод на экран данных активного клиента

btnLogin.addEventListener("click", function () {
  var clientLogin = inputLoginUsername.value;
  var clientPin = parseInt(inputLoginPin.value);
  var balance = JSON.parse(localStorage.getItem("balance"));
  var clientVerify = balance.find(function (elem) {
    return elem.clientsLogin === clientLogin && elem.clientsPin === clientPin;
  });

  if (clientVerify) {
    //--Записываем  в localStorage Login активного клиента и запускаем таймер--------
    containerApp.style.opacity = "0";
    var activeClient = clientVerify.clientsLogin;
    localStorage.setItem("activeClient", activeClient);
    var activePin = clientVerify.clientsPin;
    localStorage.setItem("activePin", JSON.stringify(activePin));
    document.querySelectorAll(".log__input--del").forEach(function (elem) {
      return elem.value = "";
    });
    var newTime = Number(new Date()) + timeSession;
    localStorage.setItem("timer", JSON.stringify(newTime));
    closeActiveUser = setInterval(timer, 1000);
  }

  (0, _Bank3["default"])();
}); //--Перевод средств (Transfer)-------------------------------------------

btnTransfer.addEventListener("click", function () {
  var balance = JSON.parse(localStorage.getItem("balance")) || [];
  var inputTransfer = inputTransferTo.value;
  var transferAmount = parseInt(inputTransferAmount.value);

  if (inputTransferTo && transferAmount && transferAmount < parseInt(labelBalance.innerHTML)) {
    var transfer = balance.map(function (elem) {
      if (elem.clientsLogin === inputTransfer && elem.clientsLogin !== localStorage.getItem("activeClient")) {
        return _objectSpread({}, elem, {
          currentBalance: elem.currentBalance + transferAmount,
          movements: [].concat(_toConsumableArray(elem.movements), [transferAmount])
        });
      } else if (elem.clientsLogin === localStorage.getItem("activeClient")) {
        return _objectSpread({}, elem, {
          currentBalance: elem.currentBalance - transferAmount,
          movements: [].concat(_toConsumableArray(elem.movements), [-transferAmount])
        });
      }

      return elem;
    });
    document.querySelectorAll(".transfer__input--del").forEach(function (elem) {
      return elem.value = "";
    });
    labelBalance.innerHTML = "elem.currentBalance" + "€";
    localStorage.setItem("balance", JSON.stringify(transfer));
  }

  (0, _Bank3["default"])();
}); //--Запрос кредита  Request loan----------------------------------------------------

btnLoan.addEventListener("click", function () {
  var balance = JSON.parse(localStorage.getItem("balance"));
  var loanAmount = parseInt(inputLoanAmount.value);
  var credit = balance.map(function (elem) {
    if (elem.clientsLogin === localStorage.getItem("activeClient") && loanAmount <= elem.currentBalance) {
      return _objectSpread({}, elem, {
        currentBalance: elem.currentBalance + loanAmount,
        movements: [].concat(_toConsumableArray(elem.movements), [loanAmount])
      });
    }

    return elem;
  });
  labelBalance.innerHTML = "elem.currentBalance" + "€";
  inputLoanAmount.value = "";
  localStorage.setItem("balance", JSON.stringify(credit));
  (0, _Bank3["default"])();
}); //-- Закрытие сессии активного клиента по его Login и Pin и обновление страницы--

btnClose.addEventListener("click", function () {
  var balance = JSON.parse(localStorage.getItem("balance"));
  var closePin = parseInt(inputClosePin.value);

  if (inputCloseUserName.value === localStorage.getItem("activeClient") && closePin === JSON.parse(localStorage.getItem("activePin"))) {
    var closeUser = balance.filter(function (elem) {
      if (elem.clientsLogin != localStorage.getItem("activeClient") && elem.clientsPin != parseInt(inputClosePin.value)) return elem;
    });
    localStorage.setItem("balance", JSON.stringify(closeUser));
    clearInterval(closeActiveUser);
    delActiveUser();
  }
}); //--Сортировка транзакций--------------------------------------------------------------

btnSort.addEventListener("click", function () {
  var balance = JSON.parse(localStorage.getItem("balance"));
  var sortUser = balance.find(function (elem) {
    return elem.clientsLogin === localStorage.getItem("activeClient");
  });
  sortUser.movements.sort(function (x, y) {
    return y - x;
  });
  localStorage.setItem("balance", JSON.stringify(balance));
  (0, _Bank3["default"])();
}); //-- Функция обрабатывающая закрытие сессии активного клиента обновление страницы------

function delActiveUser() {
  localStorage.removeItem("activeClient");
  containerApp.style.opacity = "0";
  document.querySelectorAll(".close__input--del").forEach(function (elem) {
    return elem.value = "";
  });
} //--Timer------------------------------------------------------------------------------


function timer() {
  var nowTime = Number(new Date());
  var distance = JSON.parse(localStorage.getItem("timer")) - nowTime;
  var minutes = Math.floor(distance / 1000 / 60) % 60;
  var seconds = Math.floor(distance / 1000) % 60;
  var timerMinutes = document.querySelector(".minutes");
  var timerSeconds = document.querySelector(".seconds");
  timerMinutes.textContent = "0" + minutes;
  timerSeconds.textContent = seconds < 10 ? "0" + seconds : seconds;

  if (distance <= 0) {
    clearInterval(closeActiveUser);
    delActiveUser();
    return;
  }
}