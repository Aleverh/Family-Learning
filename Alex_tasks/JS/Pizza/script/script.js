'use strict';
const modal = [document.querySelector('.modal'), document.querySelector('.overlay')];
const showBtn = document.querySelector('.header__basket');
showBtn.addEventListener('click', function (e) {
    e.preventDefault();
    modal.forEach(item => {
        item.classList.remove('hidden')
    });
});
//?----------------is not working----------------------
/* document.addEventListener('click', function (e) {
    if (e.target.closest('.basket')) {
        openModal();
    }
}); */
//?----------------------------------------------------
//-------------------open modal function--------------------------------------
function openModal() {
    modal.forEach(item => {
        item.classList.remove('.hidden');
    });
}
//-------------------closing modal function--------------------------------------
function closeModal() {
    modal.forEach(item => {
        item.classList.add('hidden')
    })
};
//------------------close modal by pressing Esc----------------------------------
document.addEventListener('keyup', function (e) {
    if (e.code === 'Escape') {
        closeModal()
    }
});
//----------------closing modal by pressing btn----------------------------------
document.addEventListener('click', function (e) {
    if (e.target.closest('.close')) {
        closeModal()
    }
});
//----------------closing modal by clicking outside modal-------------------------
document.addEventListener('click', function (e) {
    if (e.target === modal[1]) {
        closeModal();
    }
});
//----------------pizza data------------------------------------------------------
const pizzaData = [{
    id: 1,
    name: 'Верона',
    price: 110.00,
    description: `Шинка, гриби печериці, сир пармезан, трюфельна олія, базилік, сир
    моцарелла, вершковий соус`,
    size: 40,
    img: `<img src="./img/pizza1.png" alt="">`,
}, {
    id: 2,
    name: 'Діавола',
    price: 135.00,
    description: `Салямі чорізо, салямі мілано, перець чилі свіжий і сухий, цибуля
    маринована, сир моцарелла, неаполітанський соус`,
    size: 40,
    img: `<img src="./img/pizza2.png" alt="">`,
}, {
    id: 3,
    name: 'Карбонара',
    price: 120.00,
    description: `Бекон, жовток курячий, часник, базилік, свіжий сир моцарелла, сир пармезан,
    вершковий соус`,
    size: 40,
    img: `<img src="./img/pizza3.png" alt="">`,
}, {
    id: 4,
    name: 'Пепероні',
    price: 125.00,
    description: `Салямі перероні, сир моцарела, сир пармезан, спеції, томатний соус`,
    size: 40,
    img: `<img src="./img/pizza4.png" alt="">`,
},];
//------------------create menu------------------------------------------------------
const menu = document.querySelector('.menu');
pizzaData.forEach(element => {
    menu.insertAdjacentHTML('beforeend',
        `
    <div class="menu__card card" data-id="${element.id}">
    <div class="card__img">${element.img}</div>
    <h3 class="card__title">${element.name}</h3>
    <p class="card__description">${element.description}</p>
    <span class="price">${element.price + " грн"}</span>
    <span class="size">${element.size + " см"}</span>
    <button class="card__button">Замовити</button>
</div>
    `)
});
//------------------ adding element function and button------------------------------
function addFoundPizza(dataIndex) {
    const myPizza = pizzaData.find(item => item.id === dataIndex);
    const storageData = JSON.parse(localStorage.getItem(`pizza`));
    const storedPizzaCount = storageData.find(item => item.id === dataIndex).count;
    const priceResult = Number(storedPizzaCount) * myPizza.price;
    modal[0].insertAdjacentHTML("beforeEnd",
        `
        <div class="addedItem" name="pizza${dataIndex}" data-key="${dataIndex}">
            <span class="addedItem__remove">&times;</span>
            <div class="addedItem__img">${myPizza.img}</div>
            <span class="addedItem__name">${myPizza.name}</span>
            <img src="./img/minusbutton.png" alt="" class="addedItem__minusButton">
            <img src="./img/plusbutton.png" alt="" class="addedItem__plusButton">
            <span class="addedItem__amount">${storedPizzaCount}</span>
            <span class="addedItem__cost">${priceResult}</span>
        </div>
        `);
};
const addBtn = Array.from(document.getElementsByClassName('card__button'));
addBtn.forEach(element => {
    const elementParrent = element.closest('.menu__card');
    element.addEventListener("click", (element) => {
        const dataIndex = Number(elementParrent.getAttribute('data-id'));
        let storageData = JSON.parse(localStorage.getItem('pizza'));
        if (!localStorage.getItem(`pizza`)) {
            localStorage.setItem(`pizza`, JSON.stringify([{ id: dataIndex, count: 1 }]))
        } else if (!storageData.find(item => item.id === dataIndex)) {
            storageData.push({ id: dataIndex, count: 1 });
            localStorage.setItem(`pizza`, JSON.stringify(storageData));
        };
        const myOrder = Array.from(modal[0].querySelectorAll('.addedItem')).map(item => Number(item.getAttribute('data-key'))) || [];
        if (myOrder.includes(dataIndex)) {
            increaseAmount(document.getElementsByName(`pizza${dataIndex}`)[0]);
        } else {
            return addFoundPizza(dataIndex);
        }
    })
});
// -------------delete added pizza---------------------------------------
function deleteItem(item) {
    item.parentElement.remove();
};
modal[0].addEventListener('click', function (e) {
    if (e.target.closest('.addedItem__remove')) {
        deleteItem(e.target.closest('.addedItem__remove'));
        const storageData = JSON.parse(localStorage.getItem('pizza'))
        if (storageData[1]) {
            const itemToDelete = storageData.find(item=>item.id===Number(e.target.parentElement.getAttribute('data-key')));
            const indexOfItemToDelete = storageData.indexOf(itemToDelete);
            storageData.splice(indexOfItemToDelete, 1);
            localStorage.setItem(`pizza`, JSON.stringify(storageData));
        } else {
            localStorage.removeItem('pizza')
        }
    }
});
//-------------edit amount of pizza---------------------------------------
function increaseAmount(item) {
    const itemParrent = item.closest('.addedItem');
    const currentPizzaAmount = itemParrent.querySelector('.addedItem__amount');
    let pizzaAmount = Number(currentPizzaAmount.textContent);
    const currentPizzaCost = itemParrent.querySelector('.addedItem__cost');
    const pizzaCost = Number(currentPizzaCost.textContent) / pizzaAmount;
    currentPizzaAmount.textContent = ++pizzaAmount;
    currentPizzaCost.textContent = Number(currentPizzaAmount.textContent) * pizzaCost;
    const storageData = JSON.parse(localStorage.getItem(`pizza`));
    const storedPizzaCount = storageData.find(item => item.id === Number(itemParrent.getAttribute('data-key')));
    storedPizzaCount.count = pizzaAmount;
    localStorage.setItem(`pizza`, JSON.stringify(storageData));
};
function decreaseamount(item) {
    const itemParrent = item.closest('.addedItem');
    const currentPizzaAmount = itemParrent.querySelector('.addedItem__amount');
    let pizzaAmount = Number(currentPizzaAmount.textContent);
    const currentPizzaCost = itemParrent.querySelector('.addedItem__cost');
    const pizzaCost = Number(currentPizzaCost.textContent) / pizzaAmount;
    if (pizzaAmount > 1) {
        currentPizzaAmount.textContent = --pizzaAmount;
        currentPizzaCost.textContent = Number(currentPizzaAmount.textContent) * pizzaCost;
    };
    const storageData = JSON.parse(localStorage.getItem(`pizza`));
    const storedPizzaCount = storageData.find(item => item.id === Number(itemParrent.getAttribute('data-key')));
    storedPizzaCount.count = pizzaAmount;
    localStorage.setItem(`pizza`, JSON.stringify(storageData));
}
modal[0].addEventListener('click', function (e) {
    if (e.target.closest('.addedItem__plusButton')) {
        increaseAmount(e.target.closest('.addedItem__plusButton'));
    }
});
modal[0].addEventListener('click', function (e) {
    if (e.target.closest('.addedItem__minusButton')) {
        decreaseamount(e.target.closest('.addedItem__minusButton'));
    }
});
//-------------onload fill order from storage------------------------------
let itemId = [1, 2, 3, 4];
itemId.forEach(id => {
    const storageData = JSON.parse(localStorage.getItem('pizza')) || [];
    if (storageData.find(item=>item.id===id)) {
        addFoundPizza(id)
    }
});
