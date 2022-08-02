class Clients {
   constructor(clientsName, clientsLogin, clientsPin, currentBalance){
      this.clientsName = clientsName;
      this.clientsLogin = clientsLogin;
      this.clientsPin = clientsPin;
      this.currentBalance = currentBalance;
      this.movements = [];
   }
}

let clientsName = document.querySelector("").value;
let clientsLogin = document.querySelector("").value;
let clientsPin = document.querySelector("").value;
let currentBalance = document.querySelector("").value;

const newClients = new Clients(clientsName, clientsLogin, clientsPin, currentBalance);
console.log(newClients);

accounts.push(newClients);
// localStorage.setItem("balance", JSON.stringify(accounts));

