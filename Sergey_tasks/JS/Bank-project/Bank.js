"use strict";

// BANKIST APP
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [],
  pin: 1,
  login: "js",
  currentBalance: 1000,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [],
  pin: 2,
  login: "jd",
  currentBalance: 2000,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [],
  pin: 3,
  login: "stw",
  currentBalance: 3000,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [],
  pin: 4,
  login: "ss",
  currentBalance: 4000,
};
let accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');
//---------------------------------------------------------------------------
const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');
const movementsRowDeposit = document.querySelector(".movements__row-deposit");
const movementsRowWithdrawal = document.querySelector(".movements__row-withdrawal");
const movementsTypeDeposit = document.querySelector(".movements__type-deposit");
const movementsTypeWithdrawal = document.querySelector(".movements__type-withdrawal");
const movementsValueDeposit = document.querySelector(".movements__value-deposit");
const movementsValueWithdrawal = document.querySelector(".movements__value-withdrawal");
//---------------------------------------------------------------------------
const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');
//---------------------------------------------------------------------------
const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUserName = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//--Переменные ---------------------------------------------------------------
const today = new Date();
let closeActiveUser;

//--Запись в данных массива accounts в localStorage если они не записаны
function init(){
   if(JSON.parse(localStorage.getItem("balance")))
      return init = null;
   else localStorage.setItem("balance", JSON.stringify(accounts))
}
init();

//--Проверка Login и пароль и если TRUE то вывод на экран данных активного клиента
btnLogin.addEventListener("click", () =>{

   labelDate.textContent = `${today.getDate()}.0${today.getMonth() + 1}.${today.getFullYear()}`;
   //--Считываем Login и пароль из Input ------------------
   const clientLogin = inputLoginUsername.value;
   const clientPin = parseInt(inputLoginPin.value);
   //-------------------------------------------------------
   const clientVerify = JSON.parse(localStorage.getItem("balance")).find(elem => elem.login === clientLogin && elem.pin === clientPin);
   if(clientVerify){
      //--Записываем  в localStorage Login активного клиента -------------
      const activeClient = clientVerify.login;
      localStorage.setItem("activeClient", activeClient);
   }
   initClients();
   closeActiveUser = setInterval(timer, 1000);
});

//--Перевод средств (Transfer)-------------------------------------------
btnTransfer.addEventListener("click", () => {
   const transfer = (JSON.parse(localStorage.getItem("balance")) || []);
   //--Переводим средства и записываем в Local Storage -----------------
   transfer.map(elem => {
      if (elem.login === inputTransferTo.value && elem.login !== localStorage.getItem("activeClient")){
         elem.currentBalance += parseInt(inputTransferAmount.value);
         elem.movements.push(parseInt(inputTransferAmount.value));
         return {...elem,}
      }
      if (elem.login === localStorage.getItem("activeClient")){
         elem.currentBalance -= parseInt(inputTransferAmount.value);
         elem.movements.push(- parseInt(inputTransferAmount.value));
         labelBalance.innerHTML = "elem.currentBalance" + "€";
         return {...elem,}
      }
   });
   inputTransferTo.value = "";
   inputTransferAmount.value = "";

   localStorage.setItem("balance", JSON.stringify(transfer));
   initClients();
});

//--Добавление строк------------------------------------------------------------------------ 
function initClients(){
   const balance = JSON.parse(localStorage.getItem("balance")) || [];
   const clientUser = balance.find(elem => elem.login === localStorage.getItem("activeClient"));

   containerMovements.innerHTML = "";
   let transferMoney = 0;
   let incomeMoney = 0;
   
   if(clientUser){ 
      containerApp.style.opacity = "1";
      labelBalance.innerHTML = clientUser.currentBalance + "€";

      //--Создаем строки и записываем в них историю движения средств------
      clientUser.movements.forEach(item => {
         if(item > 0) {
            const rowDeposit = document.createElement("div");
            rowDeposit.classList.add("movements__row-deposit");

            const typeDeposit = document.createElement("div");
            typeDeposit.classList.add("movements__type", "movements__type-deposit");
            rowDeposit.append(typeDeposit);

            const spanText = document.createElement("span");
            spanText.textContent = "deposit";
            typeDeposit.append(spanText);

            const spanDateDeposit = document.createElement("div");
            spanDateDeposit.classList.add("movements__date");
            spanDateDeposit.textContent = `${today.getDate()}.0${today.getMonth() + 1}.${today.getFullYear()}   ${today.getHours()}:${today.getMinutes()}`;
            rowDeposit.append(spanDateDeposit);

            const valueDeposit = document.createElement("div");
            valueDeposit.classList.add("movements__value", "movements__value-deposit");
            rowDeposit.append(valueDeposit);

            const spanDeposit = document.createElement("span");
            spanDeposit.textContent = item + "€";
            valueDeposit.append(spanDeposit);

            containerMovements.append(rowDeposit);
            transferMoney += item;
         }
         else if (item < 0 ){
            const rowWithdrawal = document.createElement("div");
            rowWithdrawal.classList.add("movements__row-withdrawal");

               const typeWithdrawal = document.createElement("div");
               typeWithdrawal.classList.add("movements__type", "movements__type-withdrawal");
               rowWithdrawal.append(typeWithdrawal);

               const spanWithdrawal = document.createElement("span");
               spanWithdrawal.textContent = "withdraval";
               typeWithdrawal.append(spanWithdrawal);

               const spanDateWithdrawal = document.createElement("div");
               spanDateWithdrawal.classList.add("movements__date");
               spanDateWithdrawal.textContent = `${today.getDate()}.0${today.getMonth() + 1}.${today.getFullYear()}   ${today.getHours()}:${today.getMinutes()}`;
               rowWithdrawal.append(spanDateWithdrawal);

               const valueWithdrawal = document.createElement("div");
               valueWithdrawal.classList.add("movements__value", "movements__value-withdrawal");
               rowWithdrawal.append(valueWithdrawal);

               const spanText1 = document.createElement("span");
               spanText1.textContent = item + "€";
               valueWithdrawal.append(spanText1);

            containerMovements.append(rowWithdrawal);
            incomeMoney += item;
         }
      });
   }
   else console.log("Неправильный Login или пароль");
   labelSumIn.innerHTML = transferMoney + "€";
   labelSumOut.innerHTML = incomeMoney + "€";

}
initClients();

//--Запрос кредита  Request loan----------------------------------------------------
btnLoan.addEventListener("click", () => {
   const requestLoan = JSON.parse(localStorage.getItem("balance"));
   const loanAmount = parseInt(inputLoanAmount.value);

   requestLoan.map(elem =>{
      if (elem.login === localStorage.getItem("activeClient") && loanAmount <= elem.currentBalance){
         elem.currentBalance += loanAmount; 
         elem.movements.push(loanAmount);
         labelBalance.innerHTML = "elem.currentBalance" + "€";
         return {...elem,}
      }
   });
   inputLoanAmount.value = "";
   localStorage.setItem("balance", JSON.stringify(requestLoan));
   accounts = JSON.parse(localStorage.getItem("balance"));

   initClients();
});

//-- Закрытие сессии активного клиента по его Login и Pin и обновление страницы--
btnClose.addEventListener("click", () => {
   const closeAccount = JSON.parse(localStorage.getItem("balance"));
   const closeUser = closeAccount.find(elem => elem.login === inputCloseUserName.value && elem.pin === parseInt(inputClosePin.value));

   delActiveUser();
});

//--Сортировка транзакций--------------------------------------------------------------
btnSort.addEventListener("click", ()  => {
   const sortTransfer = JSON.parse(localStorage.getItem("balance"));
   const sortUser = sortTransfer.find(elem => elem.login === localStorage.getItem("activeClient"))
      sortUser.movements.sort(function(x, y){
         return y - x; 
      }); 
   localStorage.setItem("balance", JSON.stringify(sortTransfer));
   initClients();
});
//-- Функция обрабатывающая закрытие сессии активного клиента обновление страницы------
function delActiveUser(){
   labelBalance.innerHTML = "";
   localStorage.removeItem("activeClient");
   inputCloseUserName.value = "";
   inputClosePin.value = "";
   inputLoginUsername.value = "";
   inputLoginPin.value = "";
   labelSumIn.innerHTML = "0€";
   labelSumOut.innerHTML = "0€";
   // setTimeout(() =>  clearInterval(closeActiveUser), 50);
   initClients();
}
//--Timer------------------------------------------------------------------------------
let newTime = Number(new Date()) + 300000;
function timer() {
   // let newTime = Number(new Date()) + 300000;
   let nowTime = Number(new Date());
   let distance = newTime - nowTime;

   let minutes = Math.floor(distance / 1000 / 60) % 60;
   let seconds = Math.floor(distance /1000) % 60;

   let timerMinutes = document.querySelector(".minutes");
   let timerSeconds = document.querySelector(".seconds");

   timerMinutes.textContent = "0" + minutes;
   timerSeconds.textContent = seconds;

   if (distance < 0) {
      delActiveUser();
   }
}


