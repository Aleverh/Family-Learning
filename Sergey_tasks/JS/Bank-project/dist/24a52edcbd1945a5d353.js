import "./Bank.html";
import "./Bank.scss";
import initClients from "./Bank-1";

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
//-------------------------------------------------------------------------
let accounts = [account1, account2, account3, account4];
let closeActiveUser;
const timeSession = 300000;  //-время сессии
const today = new Date();

//--Запись в данных массива accounts в localStorage если они не записаны
function init(){
   labelDate.textContent = `${today.getDate()}.0${today.getMonth() + 1}.${today.getFullYear()}`;
   if(! JSON.parse(localStorage.getItem("balance"))){
      localStorage.setItem("balance", JSON.stringify(accounts));
   }
   closeActiveUser = setInterval(timer, 1000);
}
init();
initClients();

//--Проверка Login и пароль и если TRUE то вывод на экран данных активного клиента
btnLogin.addEventListener("click", () =>{
   const clientLogin = inputLoginUsername.value;
   const clientPin = parseInt(inputLoginPin.value);

   const balance = JSON.parse(localStorage.getItem("balance"))
   const clientVerify = balance.find(elem => elem.login === clientLogin && elem.pin === clientPin);
   if(clientVerify){
      //--Записываем  в localStorage Login активного клиента и запускаем таймер--------
      containerApp.style.opacity = "0";
      const activeClient = clientVerify.login;
      localStorage.setItem("activeClient", activeClient);
      let newTime = Number(new Date()) + timeSession;
      localStorage.setItem("timer", JSON.stringify(newTime));
      closeActiveUser = setInterval(timer, 1000);
   }
   initClients();
});

//--Перевод средств (Transfer)-------------------------------------------
btnTransfer.addEventListener("click", () => {
   const balance = (JSON.parse(localStorage.getItem("balance")) || []);
   const inputTransfer = inputTransferTo.value;
   const transferAmount = parseInt(inputTransferAmount.value);

   if (inputTransferTo.value && transferAmount){
      const transfer = balance.map(elem => {
         if (elem.login === inputTransfer && elem.login !== localStorage.getItem("activeClient")){
            return {...elem,
               currentBalance: elem.currentBalance + parseInt(inputTransferAmount.value),
               movements: [...elem.movements,  parseInt(inputTransferAmount.value)],
            }
         }
         else if (elem.login === localStorage.getItem("activeClient")){
               return {...elem,
                  currentBalance: elem.currentBalance - parseInt(inputTransferAmount.value),
                  movements: [...elem.movements, (- parseInt(inputTransferAmount.value))],
               }
         }
         return elem;
      });
      inputTransferTo.value = "";
      inputTransferAmount.value = "";
      labelBalance.innerHTML = "elem.currentBalance" + "€";
      localStorage.setItem("balance", JSON.stringify(transfer));
   }
   initClients();
});

//--Запрос кредита  Request loan----------------------------------------------------
btnLoan.addEventListener("click", () => {
   const balance = JSON.parse(localStorage.getItem("balance"));
   const loanAmount = parseInt(inputLoanAmount.value);
   const credit = balance.map(elem =>{
      if (elem.login === localStorage.getItem("activeClient") && loanAmount <= elem.currentBalance){
         return {...elem,
            currentBalance: elem.currentBalance + loanAmount,
            movements:  [...elem.movements, loanAmount],
         }
      }
      return elem;
   });
   labelBalance.innerHTML = "elem.currentBalance" + "€";
   inputLoanAmount.value = "";
   localStorage.setItem("balance", JSON.stringify(credit));
   initClients();
});

//-- Закрытие сессии активного клиента по его Login и Pin и обновление страницы--
btnClose.addEventListener("click", () => {
   const balance = JSON.parse(localStorage.getItem("balance"));
   const closeUser = balance.find(elem => elem.login === inputCloseUserName.value && elem.pin === parseInt(inputClosePin.value));
   if(closeUser){
      clearInterval(closeActiveUser);
      delActiveUser(); 
   }
});

//--Сортировка транзакций--------------------------------------------------------------
btnSort.addEventListener("click", ()  => {
   const balance = JSON.parse(localStorage.getItem("balance"));
   const sortUser = balance.find(elem => elem.login === localStorage.getItem("activeClient"))
      sortUser.movements.sort(function(x, y){
         return y - x; 
      }); 
   localStorage.setItem("balance", JSON.stringify(balance));
   initClients();
});

//-- Функция обрабатывающая закрытие сессии активного клиента обновление страницы------
function delActiveUser(){
   localStorage.removeItem("activeClient");
   containerApp.style.opacity = "0";
   inputLoginUsername.value = ""; 
   inputLoginPin.value = "";
}

//--Timer------------------------------------------------------------------------------
function timer() {
   const nowTime = Number(new Date());
   const distance =  JSON.parse(localStorage.getItem("timer")) - nowTime;

   const minutes = Math.floor(distance / 1000 / 60) % 60;
   const seconds = Math.floor(distance /1000) % 60;

   const timerMinutes = document.querySelector(".minutes");
   const timerSeconds = document.querySelector(".seconds");

   timerMinutes.textContent = "0" + minutes;
   timerSeconds.textContent = seconds < 10 ? "0" + seconds : seconds;

   if (distance <= 0) {
      clearInterval(closeActiveUser);
      delActiveUser();
      return;
   }
}


