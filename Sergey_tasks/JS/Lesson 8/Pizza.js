"use strict";
const modal = document.querySelector(".modal");
const modalBody = document.querySelector(".modal__body");
const buttonOrder = document.querySelectorAll(".button__order");
const pizzaType = document.querySelector(".modal__pizza-type");
const pizzaMenu = document.querySelector(".pizza-menu");
const buttonClose = document.querySelectorAll(".modal__close");
const pizzaPrice = document.querySelectorAll(".pizza__price");
const inputValue = document.querySelector(".input-number");
const quantity = document.querySelector(".modal__pizza-quantity");
//------------------------------------------------------------------
const spanResalt = document.querySelector(".modal-order__span-resalt");
const modalOrder = document.querySelector(".modal-order");
const modalOrderBlock = document.querySelector(".modal-order__block");
const modalOrderQuantity = document.querySelector(".modal-order__quantity");
//-------------------------------------------------------------------
const buttonResaltOpen = document.querySelector(".button-resalt__open");
const buttonResaltClose = document.querySelector(".button-resalt__close");
//-------------------------------------------------------------------
const headerButton = document.querySelector(".header__button");
const headerQuantity = document.querySelector(".header__quantity");
const headerSum = document.querySelector(".header__summa");
//-------------------------------------------------------------------
const tableName = document.querySelector(".th_1");
const tableCount = document.querySelector(".th_2");
const tablePrice = document.querySelector(".th_3");
const tableSum = document.querySelector(".th_4");
//-------------------------------------------------------------------
const table = document.querySelector("table");
const tr = document.querySelector(".tr-clon");
//--------------------------------------------------------------------
let pizzaVariant;
let number;
let pizzaQuantity = 0; 
let totalQuantity = 0;
let pizzaPriceOrder = 0;
let totalSumma = 0;
//------------------------------------------------------------------
const pizzas = [
   {
      name: "  C cыром",
      raiting: 5,
      description: "Начинка – салями, сыр с добавлением острых специй и перца чили.",
      price: 250,
      imgUrl: "Images/Pizza1.jpeg",
   },
   {
      name: "  Крестьянская",
      raiting: 3,
      description: "Главный ингредиент – баклажаны с добавлением сыра, грибов и томатов.",
      price: 200,
      imgUrl: "Images/Pizza2.jpeg",
   },
      {
      name: "  C пармезаном",
      raiting: 5,
      description: "Начинка – салями, сыр с добавлением острых специй и перца чили. Основа – томатный или сливочный соус",
      price: 240,
      imgUrl: "Images/Pizza3.jpeg",
   },
      {
      name: "  Каприччиоза",
      raiting: 5,
      description: "Начинка – ветчина, сыр, шампиньоны, артишок, оливки.",
      price: 260,
      imgUrl: "Images/Pizza4.jpeg",
   },
      {
      name: "  C рикотте",
      raiting: 5,
      description: "Основа – любая, к рикотте и листьям шпината добавляются специи и оливки.",
      price: 230,
      imgUrl: "Images/Pizza5.jpeg",
   },
     {
      name: "  Горы и море",
      raiting: 4,
      description: "Основные ингредиенты – белые грибы и любые морепродукты с добавлением сыра.",
      price: 220,
      imgUrl: "Images/Pizza6.jpeg",
   },
      {
      name: "  Падана",
      raiting: 5,
      description: "Начинка – готовая полента, цуккини, мясо, сыр.",
      price: 280,
      imgUrl: "Images/Pizza7.jpeg",
   },
      {
      name: "  Немецкая",
      raiting: 4,
      description: "Начинка – острая колбаса, сыр, оливки.",
      price: 210,
      imgUrl: "Images/Pizza8.jpeg",
   },
];
//--Выбор пиццы-----------------------------------------------
pizzaMenu.addEventListener("click", function (event) { 
   modal.style.display = "block";
   if(event.target.closest(".button__order")) {
      pizzaVariant = event.target.getAttribute("data-pizzaName");
      const selectedPizza = pizzas.find(elem => elem.name === pizzaVariant);
      pizzaPriceOrder = selectedPizza.price;
      pizzaType.textContent = selectedPizza.name;
   }
});
//--Кнопка добавить----------------------------------------------------
quantity.addEventListener("click", () => {
   pizzaQuantity = parseInt(inputValue.value);
   totalQuantity += pizzaQuantity;
   //-------------------------------------------------------------------
   totalSumma += pizzaQuantity * parseInt(localStorage.getItem("price"));
   headerSum.textContent = totalSumma + " грн.";
   headerQuantity.textContent = totalQuantity + " шт.";
   localStorage.setItem("totalSumma", totalSumma);

   spanResalt.textContent = totalSumma;
   closeModalPizza(); 
   //--------------------------------------------------------------------
   const oldOrder = JSON.parse(localStorage.getItem("order")) || [];
   const newElement = {
      name: pizzaVariant,
      count: pizzaQuantity,
      price: pizzaPriceOrder,
      sum: pizzaPriceOrder * pizzaQuantity,
   }

   oldOrder.push(newElement);
   localStorage.setItem("order", JSON.stringify(oldOrder)); 

   const trClon = tr.cloneNode(true);
   table.append(trClon);

   JSON.parse(localStorage.getItem("order")).forEach(elem => {
      tableName.textContent = elem.name;
      tableCount.textContent = elem.count;
      tablePrice.textContent = elem.price;
      tableSum.textContent = elem.sum;
   })
});

//--Открыть окно заказа (корзины)-------------------------------
headerButton.addEventListener("click", () => {
   modalOrder.style.display = "block";
});
//-------------------------------------------------------------
buttonResaltOpen.addEventListener("click", () => {

});
//--Нажатие на клавишу ESC--------------------------------
document.addEventListener("keydown", (e) => {
   if(e.key === "Escape"){closeModalPizza();}
}); 
//--Нажатие на кнопку  мыши ------------------------------
modal.addEventListener("click", (e) => {
   if(!e.target.closest(".modal__content"))
      closeModalPizza();
});
//--Кнопки закрытия всплывающих окон-------------------------
buttonClose.forEach(buttonClose => {
   buttonClose.addEventListener("click", (event) => {
      if(event.target.closest(".modal__close")){
         closeModalPizza();
         closeModalOrder();
      }
   })
});
//-------------------------------------------------------------
function closeModalPizza(){
   modal.style.display = "none";
}
//--Ф-я закрывающая окно заказа (корзины)-----------------------
function closeModalOrder(){
   modalOrder.style.display = "none";
}
//--Кнопкa оформить  заказ---------------------------

//--Кнопкa  отменить заказ---------------------------
buttonResaltClose.addEventListener("click", () => {
   spanResalt.textContent = "";
   headerQuantity.textContent = "";
   headerSum.textContent = "";

   localStorage.clear();
   closeModalOrder();
});
//---------------------------------------------------------------------------
function init(){
   pizzas.forEach(elem => {
      pizzaMenu.innerHTML += 
      `  <div class="pizza-menu__var pizza-menu__var_1">
            <div class="pizza__description">
             <img class="pizza__img" src="${elem.imgUrl}" width="200px" height="200px">
               <h3 class="pizza__h3">${elem.name}</h3>
               <div class="pizza__stars">
                  <img src="Images/Star%201.png">
                  <img src="Images/Star%201.png">
                  <img src="Images/Star%201.png">
                  <img src="Images/Star%201.png">
                  <img src="Images/Star%201.png">
               </div>
               <p class="pizza__description_p">${elem.description}</p>
            </div>
            <div class="pizza__order">
               <button data-pizzaName = "${elem.name}" class="button button__order">ЗАКАЗAТЬ</button>
               <p data-price = "1" class="pizza__price">${elem.price} грн.</p>
            </div>
         </div>`
   }) 
};
init();


