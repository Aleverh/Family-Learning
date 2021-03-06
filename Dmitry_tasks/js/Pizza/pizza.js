'use strict';
const basket = document.querySelector('.basket');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close-modal')
const body = document.querySelector('body')
const modalBox = document.querySelector('.modal-box')
const buy1 = document.querySelector('.buy1')
const buy2 = document.querySelector('.buy2')
const buy3 = document.querySelector('.buy3')
const buy4 = document.querySelector('.buy4')
const buttonBuy = document.querySelectorAll('.buy')
const cost = document.querySelector('.cost')
const number = document.querySelector('.number')
function bebe(){
    if(localStorage.getItem('number') > 0){
        number.textContent = localStorage.getItem('number');
    }else number.textContent = 0;

    if (localStorage.getItem('pizzas') > 0){
        cost.textContent = localStorage.getItem('pizzas')
    }else cost.textContent = 0;
}
bebe()
let plusAfter
let minusAfter = 0;
let howMany = 0;
let francheska = 199;
let karbonara = 219;
let ricco = 229;
let chiliyskaya = 199;
let productNow, productAfter, costNow, costAfter;
productNow = 0;
costNow = 0;
const pizzas = [
    {
        name: "Франческа",
        info: "Сливочный соус дор-блю, сыр моцарелла, салями, бекон",
        price: 199,
        src: "pictures/франческо.png",
    },
    {
        name: "Карбонара",
        info: "Сливочный соус сыр моцарелла, бекон, шампиньоны, ветчина, сыр пармезан, яйцо куриное",
        price: 219,
        src: "pictures/карбонара.png",
    },
    {
        name: "Ricco",
        info: "Соус из томатов, салями, ветчина, охотничьи колбаски, бекон, копчёное куриное филе, сыр моцарелла, шампиньоны, маринованный лук, болгарский перец, помидоры, маслины, чесночное масло",
        price: 229,
        src: "pictures/ricco.png",
    },
    {
        name: "Чилийская",
        info: "Соус из томатов, сыр моцарелла, куриное филе, салями, соус острый, чесночное масло",
        price: 219,
        src: "pictures/чилийская.png",
    },
]
// Кнопка корзины--------------------------------------
basket.addEventListener('click', (event) =>{
    if (number.textContent > 0){
        modal.style.display = 'block';
        event.stopPropagation()
    }
    });
//Закрытие модалки по крестику-------------------------------
close.addEventListener('click', () =>{
    modal.style.display = "none";
});
//Закрытие модалки по esc-------------------------------
document.addEventListener('keydown', function (e){
    if(e.key === 'Escape'){
        modal.style.display = "none";
        basket.style.border = "2px solid white";
    }
});
////Закрытие модалки по клику-------------------------------
document.addEventListener('click', function (event){
    // if (event.target.className !== "modal"){
    if ((event.target).closest(".modal")){
        return;
    }
    modal.style.display = 'none';
});
//Подсчет товаров-----------------------------------
buttonBuy.forEach(element =>
    element.addEventListener('click', () =>{
        productAfter = + 1 + Number(localStorage.getItem('number'));
        number.textContent = productAfter;
        localStorage.setItem('number', productAfter)
    })
);
//Подсчет цены------------------------------------
buy1.addEventListener('click', () =>{
    costAfter = + francheska + Number(localStorage.getItem('pizzas'));
    document.querySelector('.cost').textContent = costAfter;
    localStorage.setItem('pizzas', costAfter)


     document.querySelector('.pizza-table-img').src = "pictures/франческо.png";
    document.querySelector('.pizza-name').textContent = 'Франческа';
    document.querySelector('.pizza-info').textContent = 'Сливочный соус дор-блю, сыр моцарелла, салями, бекон'
    document.querySelector('.pizza-price').textContent = '199 грн';
    // document.querySelector('.delete-busket').addEventListener('click', (event) =>{
    //     document.querySelector('.ta').remove()
    //     event.stopPropagation()
    // });

});
buy2.addEventListener('click', () =>{
    costAfter = + karbonara + Number(localStorage.getItem('pizzas'));
    document.querySelector('.cost').textContent = costAfter;
    localStorage.setItem('pizzas', costAfter);

    const clone = (document.querySelector('.ta'));
    const clone2 = clone.cloneNode(true);
    clone.after(clone2)

    document.querySelector('.pizza-table-img').src = "pictures/карбонара.png";
    document.querySelector('.pizza-name').textContent = 'Карбонара';
    document.querySelector('.pizza-info').textContent = 'Сливочный соус сыр моцарелла, бекон, шампиньоны, ветчина, сыр пармезан, яйцо куриное'
    document.querySelector('.pizza-price').textContent = '219 грн';

    plus.forEach(element =>
        element.addEventListener('click', () => {
            plusAfter = minusAfter += 1;
            document.querySelector('.how-many').textContent = plusAfter;
        })
    );
});
buy3.addEventListener('click', () =>{
    costAfter = + ricco + Number(localStorage.getItem('pizzas'));
    document.querySelector('.cost').textContent = costAfter;
    localStorage.setItem('pizzas', costAfter)

    const clone = (document.querySelector('.ta'));
    const clone3 = clone.cloneNode(true);
    clone.after(clone3)

    document.querySelector('.pizza-table-img').src = "pictures/ricco.png";
    document.querySelector('.pizza-name').textContent = 'Ricco';
    document.querySelector('.pizza-info').textContent = 'Соус из томатов, салями, ветчина, охотничьи колбаски, бекон, копчёное куриное филе, сыр моцарелла, шампиньоны, маринованный лук, болгарский перец, помидоры, маслины, чесночное масло'
    document.querySelector('.pizza-price').textContent = '229 грн';

});
buy4.addEventListener('click', () =>{
    costAfter = + chiliyskaya + Number(localStorage.getItem('pizzas'));
    document.querySelector('.cost').textContent = costAfter;
    localStorage.setItem('pizzas', costAfter)

    const clone = (document.querySelector('.ta'));
    const clone4 = clone.cloneNode(true);
    clone.after(clone4)

    document.querySelector('.pizza-table-img').src = "pictures/чилийская.png";
    document.querySelector('.pizza-name').textContent = 'Чилийская';
    document.querySelector('.pizza-info').textContent = 'Соус из томатов, сыр моцарелла, куриное филе, салями, соус острый, чесночное масло'
    document.querySelector('.pizza-price').textContent = '199 грн';
});
console.log(localStorage.getItem('pizzas'));
console.log(localStorage.getItem('number'));

const minus = document.querySelector('.minus')
const plus = document.querySelectorAll('.plus');




plus.forEach(element =>
    element.addEventListener('click', () => {
    plusAfter = minusAfter += 1;
    document.querySelector('.how-many').textContent = plusAfter;
    })
);

// plus.addEventListener('click', () => {
//     plusAfter = minusAfter += 1;
//     document.querySelector('.how-many').textContent = plusAfter;
// });
// minus.addEventListener('click', () =>{
//         minusAfter = plusAfter -= 1;
//         document.querySelector('.how-many').textContent = minusAfter;
// });


// document.querySelector('.delete-busket').addEventListener('click', () =>{
//     // document.querySelector('.pizza-table-img').src = "";
//     // document.querySelector('.pizza-name').textContent = "";
//     // document.querySelector('.pizza-info').textContent = "";
//     // document.querySelector('.pizza-price').textContent = "";
//     document.querySelector('.ta').style.display = "none"
//     // modal.style.display = "none"
// });

