
"use strict";
// window.onstorage = event => {
//    console.log(event);
// };
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
const spanResult = document.querySelector(".modal-order__span-resalt");
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
const table = document.querySelector("tbody");
const tr = document.querySelector(".tr-clon");
//--------------------------------------------------------------------
let selectedPizza = null;
//------------------------------------------------------------------
const pizzas = [
   {
      name: "  C cыром",
      raiting: 4,
      description: "Начинка – салями, сыр с добавлением острых специй и перца чили.",
      price: 250,
      imgUrl: "Images/Pizza1.jpeg",
      imgStar: "Images/Star%201.png",
   },
   {
      name: "  Крестьянская",
      raiting: 3,
      description: "Главный ингредиент – баклажаны с добавлением сыра, грибов и томатов.",
      price: 200,
      imgUrl: "Images/Pizza2.jpeg",
      imgStar: "Images/Star%201.png",
   },
      {
      name: "  C пармезаном",
      raiting: 5,
      description: "Начинка – салями, сыр с добавлением острых специй и перца чили. Основа – томатный или сливочный соус",
      price: 240,
      imgUrl: "Images/Pizza3.jpeg",
      imgStar: "Images/Star%201.png",
   },
      {
      name: "  Каприччиоза",
      raiting: 3,
      description: "Начинка – ветчина, сыр, шампиньоны, артишок, оливки.",
      price: 260,
      imgUrl: "Images/Pizza4.jpeg",
      imgStar: "Images/Star%201.png",
   },
      {
      name: "  C рикотте",
      raiting: 5,
      description: "Основа – любая, к рикотте и листьям шпината добавляются специи и оливки.",
      price: 230,
      imgUrl: "Images/Pizza5.jpeg",
      imgStar: "Images/Star%201.png",
   },
     {
      name: "  Горы и море",
      raiting: 4,
      description: "Основные ингредиенты – белые грибы и любые морепродукты с добавлением сыра.",
      price: 220,
      imgUrl: "Images/Pizza6.jpeg",
      imgStar: "Images/Star%201.png",
   },
      {
      name: "  Падана",
      raiting: 3,
      description: "Начинка – готовая полента, цуккини, мясо, сыр.",
      price: 280,
      imgUrl: "Images/Pizza7.jpeg",
      imgStar: "Images/Star%201.png",
   },
      {
      name: "  Немецкая",
      raiting: 4,
      description: "Начинка – острая колбаса, сыр, оливки.",
      price: 210,
      imgUrl: "Images/Pizza8.jpeg",
      imgStar: "Images/Star%201.png",
   },
];
//--Выбор пиццы-----------------------------------------------
pizzaMenu.addEventListener("click", function (event) {
   if(event.target.closest(".button__order")) {
      modal.style.display = "block";
      const pizzaName = event.target.getAttribute("data-pizzaName");
      selectedPizza = pizzas.find(elem => elem.name === pizzaName);
      pizzaType.textContent = selectedPizza.name;
   }
});
//--Кнопка добавить----------------------------------------------------
quantity.addEventListener("click", () => {
   const pizzaCount = parseInt(inputValue.value);
   let isPizzaExist = false;

   const oldOrder = (JSON.parse(localStorage.getItem("order")) || [])
      .map(item => {
         if (item.name !== selectedPizza.name)
            return item;
            isPizzaExist = true;
            const count = item.count + pizzaCount;
            return { ...item, count, sum: count * item.price }
      });
      if (!isPizzaExist) {
         const newPizza = {
            name: selectedPizza.name,
            count: pizzaCount,
            price: selectedPizza.price,
            sum: selectedPizza.price * pizzaCount,
         }
         oldOrder.push(newPizza);
      }
   localStorage.setItem("order", JSON.stringify(oldOrder));

   closeModalPizza();
   updateOrder();
});
//------------------------------------------------------------------------
function updateOrder() {
   const order = JSON.parse(localStorage.getItem("order")) || [];
 
   const finalPrice = order.reduce((a, b) => a + b.sum, 0);
   const pizzaCount = order.reduce((a, b) => a + b.count, 0);
   const oldElements = [...(document.querySelectorAll('.tr-clone') || [])];

   oldElements.forEach(item => item.remove());

   // update bag info
   headerSum.textContent = finalPrice + " грн.";
   headerQuantity.textContent = pizzaCount + " шт.";
   // update modal info

   console.log(order);
   order.forEach(elem => {
      const trClone = tr.cloneNode(true);
      trClone.classList.add('tr-clone');

      const iconClearPizza = trClone.querySelector(".clear-pizza");
      iconClearPizza.style.display = "block";
      iconClearPizza.setAttribute("basket", `${elem.name}`);
      console.log(iconClearPizza);
      
      const tableName = trClone.querySelector(".th_1");
      const tableCount = trClone.querySelector(".th_2");
      const tablePrice = trClone.querySelector(".th_3");
      const tableSum = trClone.querySelector(".th_4");

      tableName.textContent = elem.name;
      tableCount.textContent = elem.count;
      tablePrice.textContent = elem.price;
      tableSum.textContent = elem.sum;
      table.append(trClone);
   });
   // delPizza();
   spanResult.textContent = finalPrice;
};
updateOrder();
//-------------------------------------------------------------
const clearPizza = document.querySelectorAll(".th_5");
// const delPizzaOrder = document.querySelectorAll(".tr-clone");

table.addEventListener("click", (event) =>{
   if( event.target.className = "th_5"){
      const elemMas = event.target.getAttribute("basket");

      const arrIsLocal = JSON.parse(localStorage.getItem("order"));

      const qqq = arrIsLocal.filter(elem => elem.name !== elemMas)
      localStorage.setItem("order", JSON.stringify(qqq));
      updateOrder();
   }
});
   // elem.addEventListener("click", (event) =>  {  
   
   //    const elemMas = event.target.getAttribute("basket");
   //    const arrIsLocal = JSON.parse(localStorage.getItem("order"));
   //    const qqq = arrIsLocal.filter(elem => elem.name !== elemMas)
   //    localStorage.setItem("order", JSON.stringify(qqq));

   //    updateOrder();
      
      // if (arrIsLocal.filter(elem => elem.name !== elemMas)) {
      //    console.log(arrIsLocal);
      //    localStorage.setItem("order", JSON.stringify(arrIsLocal));
      // }
//    });
// });

//--Открыть окно заказа (корзины)-------------------------------
headerButton.addEventListener("click", () => {
   modalOrder.style.display = "block"
   // updateOrder();
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
//--Кнопкa  отменить заказ---------------------------
buttonResaltClose.addEventListener("click", () => {
   spanResult.textContent = "";
   headerQuantity.textContent = "";
   headerSum.textContent = "";
   localStorage.clear();
   closeModalOrder();
});
//-------------------------------------------------------------------------
function init(){
   const stars = ["<img src=Images/Star%201.png>", "<img src=Images/Star%201.png>","<img src=Images/Star%201.png>","<img src=Images/Star%201.png>", "<img src=Images/Star%201.png>"];
   pizzas.forEach(elem => {
      let images = Array(elem.raiting).fill('Images/Star%201.png');
      if (images.length < 5)
         images = [...images, ...Array(5 - images.length).fill('Images/Star%205.png')];
      // console.log(images);
      pizzaMenu.innerHTML += 
      `  <div class="pizza-menu__var pizza-menu__var_1">
            <div class="pizza__description">
             <img class="pizza__img" src="${elem.imgUrl}" width="200px" height="200px">
               <h3 class="pizza__h3">${elem.name}</h3>
               <div class="pizza__stars">
                  ${images.map(item => `<img src = "${item}">`) }
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

// ${stars.slice(length - elem.raiting).join("")}