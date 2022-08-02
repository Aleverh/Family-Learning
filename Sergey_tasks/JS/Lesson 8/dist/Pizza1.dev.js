"use strict"; // window.onstorage = event => {
//    console.log(event);
// };

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var modal = document.querySelector(".modal");
var modalBody = document.querySelector(".modal__body");
var buttonOrder = document.querySelectorAll(".button__order");
var pizzaType = document.querySelector(".modal__pizza-type");
var pizzaMenu = document.querySelector(".pizza-menu");
var buttonClose = document.querySelectorAll(".modal__close");
var pizzaPrice = document.querySelectorAll(".pizza__price");
var inputValue = document.querySelector(".input-number");
var quantity = document.querySelector(".modal__pizza-quantity"); //------------------------------------------------------------------

var spanResult = document.querySelector(".modal-order__span-resalt");
var modalOrder = document.querySelector(".modal-order");
var modalOrderBlock = document.querySelector(".modal-order__block");
var modalOrderQuantity = document.querySelector(".modal-order__quantity"); //-------------------------------------------------------------------

var buttonResaltOpen = document.querySelector(".button-resalt__open");
var buttonResaltClose = document.querySelector(".button-resalt__close"); //-------------------------------------------------------------------

var headerButton = document.querySelector(".header__button");
var headerQuantity = document.querySelector(".header__quantity");
var headerSum = document.querySelector(".header__summa"); //-------------------------------------------------------------------

var table = document.querySelector("tbody");
var tr = document.querySelector(".tr-clon"); //--------------------------------------------------------------------

var selectedPizza = null; //------------------------------------------------------------------

var pizzas = [{
  name: "  C cыром",
  raiting: 4,
  description: "Начинка – салями, сыр с добавлением острых специй и перца чили.",
  price: 250,
  imgUrl: "Images/Pizza1.jpeg",
  imgStar: "Images/Star%201.png"
}, {
  name: "  Крестьянская",
  raiting: 3,
  description: "Главный ингредиент – баклажаны с добавлением сыра, грибов и томатов.",
  price: 200,
  imgUrl: "Images/Pizza2.jpeg",
  imgStar: "Images/Star%201.png"
}, {
  name: "  C пармезаном",
  raiting: 5,
  description: "Начинка – салями, сыр с добавлением острых специй и перца чили. Основа – томатный или сливочный соус",
  price: 240,
  imgUrl: "Images/Pizza3.jpeg",
  imgStar: "Images/Star%201.png"
}, {
  name: "  Каприччиоза",
  raiting: 3,
  description: "Начинка – ветчина, сыр, шампиньоны, артишок, оливки.",
  price: 260,
  imgUrl: "Images/Pizza4.jpeg",
  imgStar: "Images/Star%201.png"
}, {
  name: "  C рикотте",
  raiting: 5,
  description: "Основа – любая, к рикотте и листьям шпината добавляются специи и оливки.",
  price: 230,
  imgUrl: "Images/Pizza5.jpeg",
  imgStar: "Images/Star%201.png"
}, {
  name: "  Горы и море",
  raiting: 4,
  description: "Основные ингредиенты – белые грибы и любые морепродукты с добавлением сыра.",
  price: 220,
  imgUrl: "Images/Pizza6.jpeg",
  imgStar: "Images/Star%201.png"
}, {
  name: "  Падана",
  raiting: 3,
  description: "Начинка – готовая полента, цуккини, мясо, сыр.",
  price: 280,
  imgUrl: "Images/Pizza7.jpeg",
  imgStar: "Images/Star%201.png"
}, {
  name: "  Немецкая",
  raiting: 4,
  description: "Начинка – острая колбаса, сыр, оливки.",
  price: 210,
  imgUrl: "Images/Pizza8.jpeg",
  imgStar: "Images/Star%201.png"
}]; //--Выбор пиццы-----------------------------------------------

pizzaMenu.addEventListener("click", function (event) {
  if (event.target.closest(".button__order")) {
    modal.style.display = "block";
    var pizzaName = event.target.getAttribute("data-pizzaName");
    selectedPizza = pizzas.find(function (elem) {
      return elem.name === pizzaName;
    });
    pizzaType.textContent = selectedPizza.name;
  }
}); //--Кнопка добавить----------------------------------------------------

quantity.addEventListener("click", function () {
  var pizzaCount = parseInt(inputValue.value);
  var isPizzaExist = false;
  var oldOrder = (JSON.parse(localStorage.getItem("order")) || []). // .filter(item => item.name !== selectedPizza.name)
  map(function (item) {
    if (item.name !== selectedPizza.name) return item;
    isPizzaExist = true;
    var count = item.count + pizzaCount;
    return _objectSpread({}, item, {
      count: count,
      sum: count * item.price
    });
  });

  if (!isPizzaExist) {
    var newPizza = {
      name: selectedPizza.name,
      count: pizzaCount,
      price: selectedPizza.price,
      sum: selectedPizza.price * pizzaCount
    };
    oldOrder.push(newPizza);
  }

  localStorage.setItem("order", JSON.stringify(oldOrder));
  closeModalPizza();
  updateOrder();
}); //------------------------------------------------------------------------

function updateOrder() {
  var order = JSON.parse(localStorage.getItem("order")) || [];
  var finalPrice = order.reduce(function (a, b) {
    return a + b.sum;
  }, 0);
  var pizzaCount = order.reduce(function (a, b) {
    return a + b.count;
  }, 0);

  var oldElements = _toConsumableArray(document.querySelectorAll('.tr-clone') || []);

  oldElements.forEach(function (item) {
    return item.remove();
  }); // update bag info

  headerSum.textContent = finalPrice + " грн.";
  headerQuantity.textContent = pizzaCount + " шт."; // update modal info

  console.log(order);
  order.forEach(function (elem) {
    var trClone = tr.cloneNode(true);
    trClone.classList.add('tr-clone');
    var iconClearPizza = trClone.querySelector(".clear-pizza");
    iconClearPizza.style.display = "block";
    iconClearPizza.setAttribute("basket", "".concat(elem.name));
    var tableName = trClone.querySelector(".th_1");
    var tableCount = trClone.querySelector(".th_2");
    var tablePrice = trClone.querySelector(".th_3");
    var tableSum = trClone.querySelector(".th_4");
    tableName.textContent = elem.name;
    tableCount.textContent = elem.count;
    tablePrice.textContent = elem.price;
    tableSum.textContent = elem.sum;
    table.append(trClone);
  }); // delPizza();

  spanResult.textContent = finalPrice;
}

;
updateOrder(); //-------------------------------------------------------------
// const tableName = document.querySelectorAll(".th_1");

var clearPizza = document.querySelectorAll(".th_5"); // const delPizzaOrder = document.querySelectorAll(".tr-clone");

table.addEventListener("click", function (event) {
  if (event.target.className = "th_5") {
    var elemMas = event.target.getAttribute("basket");
    var arrIsLocal = JSON.parse(localStorage.getItem("order"));
    var qqq = arrIsLocal.filter(function (elem) {
      return elem.name !== elemMas;
    });
    localStorage.setItem("order", JSON.stringify(qqq));
    updateOrder();
  }
}); // elem.addEventListener("click", (event) =>  {  
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
// function delPizza(){
//    const delPizzaOrder = document.querySelector(".tr-clone");
//    console.log(qqq);
//    delPizzaOrder.remove();
// }  
//--Открыть окно заказа (корзины)-------------------------------

headerButton.addEventListener("click", function () {
  modalOrder.style.display = "block"; // updateOrder();
}); //-------------------------------------------------------------

buttonResaltOpen.addEventListener("click", function () {}); //--Нажатие на клавишу ESC--------------------------------

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModalPizza();
  }
}); //--Нажатие на кнопку  мыши ------------------------------

modal.addEventListener("click", function (e) {
  if (!e.target.closest(".modal__content")) closeModalPizza();
}); //--Кнопки закрытия всплывающих окон-------------------------

buttonClose.forEach(function (buttonClose) {
  buttonClose.addEventListener("click", function (event) {
    if (event.target.closest(".modal__close")) {
      closeModalPizza();
      closeModalOrder(); // updateOrder();
    }
  });
}); //-------------------------------------------------------------

function closeModalPizza() {
  modal.style.display = "none";
} //--Ф-я закрывающая окно заказа (корзины)-----------------------


function closeModalOrder() {
  modalOrder.style.display = "none";
} //--Кнопкa  отменить заказ---------------------------


buttonResaltClose.addEventListener("click", function () {
  spanResult.textContent = "";
  headerQuantity.textContent = "";
  headerSum.textContent = "";
  localStorage.clear();
  closeModalOrder();
}); //-------------------------------------------------------------------------

function init() {
  var stars = ["<img src=Images/Star%201.png>", "<img src=Images/Star%201.png>", "<img src=Images/Star%201.png>", "<img src=Images/Star%201.png>", "<img src=Images/Star%201.png>"];
  pizzas.forEach(function (elem) {
    var images = Array(elem.raiting).fill('Images/Star%201.png');
    if (images.length < 5) images = [].concat(_toConsumableArray(images), _toConsumableArray(Array(5 - images.length).fill('Images/Star%205.png'))); // console.log(images);

    pizzaMenu.innerHTML += "  <div class=\"pizza-menu__var pizza-menu__var_1\">\n            <div class=\"pizza__description\">\n             <img class=\"pizza__img\" src=\"".concat(elem.imgUrl, "\" width=\"200px\" height=\"200px\">\n               <h3 class=\"pizza__h3\">").concat(elem.name, "</h3>\n               <div class=\"pizza__stars\">\n                  ").concat(images.map(function (item) {
      return "<img src = \"".concat(item, "\">");
    }), "\n               </div>\n               <p class=\"pizza__description_p\">").concat(elem.description, "</p>\n            </div>\n            <div class=\"pizza__order\">\n               <button data-pizzaName = \"").concat(elem.name, "\" class=\"button button__order\">\u0417\u0410\u041A\u0410\u0417A\u0422\u042C</button>\n               <p data-price = \"1\" class=\"pizza__price\">").concat(elem.price, " \u0433\u0440\u043D.</p>\n            </div>\n         </div>");
  });
}

;
init(); // ${stars.slice(length - elem.raiting).join("")}