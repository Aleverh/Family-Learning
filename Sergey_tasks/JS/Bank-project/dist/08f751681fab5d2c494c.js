//------------------------------------------------------------------------
class Client {
   constructor(clientsName, clientsLogin, clientsPin, currentBalance){
      this.clientsName = clientsName;
      this.clientsLogin = clientsLogin;
      this.clientsPin = clientsPin;
      this.currentBalance = currentBalance;
      this.movements = [];
   }
}
btnReg.addEventListener("click", () => {
   const clientsName = inputClientsName.value;
   const clientsLogin = inputClientsLogin.value;
   const clientsPin = parseInt(inputClientsPin.value);
   const currentBalance = parseInt(inputCurrentBalance.value);

   const newClients = new Client(clientsName, clientsLogin, clientsPin, currentBalance);

   const balance = JSON.parse(localStorage.getItem("balance")) || [];
   localStorage.setItem("balance", JSON.stringify([...balance, newClients]));

   //--Очищение полей input
   document.querySelectorAll("input").forEach(elem => elem.value = "");
});