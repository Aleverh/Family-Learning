"use strict";

import "./Bank.html";
import "./Bank.scss";
import initClients from "./Bank-1";

//------------------------------------------------------------------------
let closeActiveUser;
const timeSession = 300000;  //-время сессии
const today = new Date();

//--Запись в данных массива accounts в localStorage если они не записаны
function init(){
   labelDate.textContent = `${today.getDate()}.0${today.getMonth() + 1}.${today.getFullYear()}`;
   closeActiveUser = setInterval(timer, 1000);
}
init();
initClients();

//--Проверка Login и пароль и если TRUE то вывод на экран данных активного клиента
btnLogin.addEventListener("click", () =>{
   const clientLogin = inputLoginUsername.value;
   const clientPin = parseInt(inputLoginPin.value);
   const balance = JSON.parse(localStorage.getItem("balance"))
   const clientVerify = balance.find(elem => elem.clientsLogin === clientLogin && elem.clientsPin === clientPin);
   if(clientVerify){
      //--Записываем  в localStorage Login активного клиента и запускаем таймер--------
      containerApp.style.opacity = "0";
      const activeClient = clientVerify.clientsLogin;
      localStorage.setItem("activeClient", activeClient);
      const activePin = clientVerify.clientsPin;
      localStorage.setItem("activePin" , JSON.stringify(activePin));

      document.querySelectorAll(".log__input--del").forEach(elem => elem.value = "");

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

   if (inputTransferTo && transferAmount && (transferAmount < parseInt(labelBalance.innerHTML))){
      const transfer = balance.map(elem => {
         if (elem.clientsLogin === inputTransfer && elem.clientsLogin !== localStorage.getItem("activeClient")){
            return {...elem,
               currentBalance: elem.currentBalance + transferAmount,
               movements: [...elem.movements,  transferAmount],
            }
         }
         else if (elem.clientsLogin === localStorage.getItem("activeClient")){
               return {...elem,
                  currentBalance: elem.currentBalance - transferAmount,
                  movements: [...elem.movements, (- transferAmount)],
               }
         }
         return elem;
      });
      document.querySelectorAll(".transfer__input--del").forEach(elem => elem.value = "");
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
      if (elem.clientsLogin === localStorage.getItem("activeClient") && loanAmount <= elem.currentBalance){
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
   const closePin = parseInt(inputClosePin.value);
   if((inputCloseUserName.value === localStorage.getItem("activeClient")) && closePin === JSON.parse(localStorage.getItem("activePin"))){
      const closeUser = balance.filter(elem => {
         if(elem.clientsLogin != localStorage.getItem("activeClient") && elem.clientsPin != parseInt(inputClosePin.value))
            return elem;
      });
      localStorage.setItem("balance", JSON.stringify(closeUser));
      clearInterval(closeActiveUser);
      delActiveUser(); 
   }
});

//--Сортировка транзакций--------------------------------------------------------------
btnSort.addEventListener("click", ()  => {
   const balance = JSON.parse(localStorage.getItem("balance"));
   const sortUser = balance.find(elem => elem.clientsLogin === localStorage.getItem("activeClient"))
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
   document.querySelectorAll(".close__input--del").forEach(elem => elem.value = "");
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


