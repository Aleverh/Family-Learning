const today = new Date();

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
         const row = document.createElement("div");
         row.classList.add("movements__row");
         containerMovements.append(row);

         const type = document.createElement("div");
         item > 0 ? type.classList.add("movements__type", "movements__type-deposit") : type.classList.add("movements__type", "movements__type-withdrawal");
         row.append(type);

         const spanText = document.createElement("span");
         item > 0 ? spanText.textContent = "deposit" : spanText.textContent = "withdraval";
         type.append(spanText);

         const spanDate = document.createElement("div");
         spanDate.classList.add("movements__date");
         spanDate.textContent = `${today.getDate()}.0${today.getMonth() + 1}.${today.getFullYear()}   ${today.getHours()}:${today.getMinutes()}`;
         row.append(spanDate);

         const value = document.createElement("div");
         value.classList.add("movements__value");
         row.append(value);

         const spanDeposit = document.createElement("span");
         spanDeposit.textContent = item + "€";
         value.append(spanDeposit);

         item > 0 ? transferMoney += item :  incomeMoney += item;
      });
   }
   labelSumIn.innerHTML = transferMoney + "€";
   labelSumOut.innerHTML = incomeMoney + "€";
}

export default initClients;
