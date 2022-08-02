"use strict"; // BANKIST APP

var account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [-700],
  pin: 1,
  login: "js",
  currentBalance: 1000
};
var account2 = {
  owner: 'Jessica Davis',
  movements: [5000, -150],
  pin: 2,
  login: "jd",
  currentBalance: 2000
};
var account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200],
  pin: 3,
  login: "stw",
  currentBalance: 3000
};
var account4 = {
  owner: 'Sarah Smith',
  movements: [430, -200, 300, -300],
  pin: 4,
  login: "ss",
  currentBalance: 4000
};
var accounts = [account1, account2, account3, account4]; // Elements

var labelWelcome = document.querySelector('.welcome');
var labelDate = document.querySelector('.date');
var labelBalance = document.querySelector('.balance__value');
var labelSumIn = document.querySelector('.summary__value--in');
var labelSumOut = document.querySelector('.summary__value--out');
var labelSumInterest = document.querySelector('.summary__value--interest');
var labelTimer = document.querySelector('.timer'); //-----------------------------------------------------------------------------

var containerApp = document.querySelector('.app');
var containerMovements = document.querySelector('.movements');
var movementsRow = document.querySelectorAll(".movements__row");
var movementsRowDeposit = document.querySelector(".movements__row-deposit");
var movementsRowWithdrawal = document.querySelector(".movements__row-withdrawal");
var movementsTypeDeposit = document.querySelector(".movements__type-deposit");
var movementsTypeWithdrawal = document.querySelector(".movements__type-withdrawal");
var movementsValueDeposit = document.querySelector(".movements__value-deposit");
var movementsValueWithdrawal = document.querySelector(".movements__value-withdrawal"); //---------------------------------------------------------------------------

var btnLogin = document.querySelector('.login__btn');
var btnTransfer = document.querySelector('.form__btn--transfer');
var btnLoan = document.querySelector('.form__btn--loan');
var btnClose = document.querySelector('.form__btn--close');
var btnSort = document.querySelector('.btn--sort'); //---------------------------------------------------------------------------

var inputLoginUsername = document.querySelector('.login__input--user');
var inputLoginPin = document.querySelector('.login__input--pin');
var inputTransferTo = document.querySelector('.form__input--to');
var inputTransferAmount = document.querySelector('.form__input--amount');
var inputLoanAmount = document.querySelector('.form__input--loan-amount');
var inputCloseUsername = document.querySelector('.form__input--user');
var inputClosePin = document.querySelector('.form__input--pin'); //--------------------------------------------------------------------
//--Запись в LocalStorage массива клиентских данных при обновлении и перезагрузке

function initClients() {
  localStorage.setItem("balance", JSON.stringify(accounts));
  var clients = JSON.parse(localStorage.getItem("balance")) || []; // console.log(clients);
}

initClients(); //--Переменные--------------------------------------------------------------

var chooseClient = null; //-Выбор клиента
//--Выбор клиента по Login и паролю-----------------------------------------

btnLogin.addEventListener("click", function () {
  var clientBalance = JSON.parse(localStorage.getItem("balance")) || [];
  checkClient();
}); //--Проверка Login и пароль и если TRUE то вывод на экран данных клиента

function checkClient() {
  //--Считываем Login и пароль из Input ------------------
  var clientLogin = inputLoginUsername.value;
  var clientPin = parseInt(inputLoginPin.value);
  accounts.find(function (elem) {
    if (chooseClient = elem.login === clientLogin && elem.pin === clientPin) {
      containerApp.style.opacity = "1";
      labelBalance.innerHTML = elem.currentBalance + "€";
      elem.movements.forEach(function (item) {
        if (item > 0) {
          var cloneDeposit = movementsRowDeposit.cloneNode(true);
          containerMovements.append(cloneDeposit);
          movementsValueDeposit.textContent = item;
          console.log(movementsValueDeposit.textContent);
        } else if (item < 0) {
          var cloneWithdrawal = movementsRowWithdrawal.cloneNode(true);
          containerMovements.append(cloneWithdrawal);
          movementsValueWithdrawal.textContent = item;
          console.log(movementsValueWithdrawal.textContent);
        } // movementsRow.forEach(row => {row.style.display = "none"});

      }); // movementsRowDeposit.style.display = "none";
      // movementsRowWithdrawal.style.display = "none";
      // movementsRow.forEach(row => {row.style.display = "none"});
    } else console.log("Неправильный Login или пароль");
  });
} //-----------------------------------------------------------------