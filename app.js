const products = [
    {
        id: 1,
        title: 'Lenovo Yoga',
        price: 3000,
    },
    {
        id: 2,
        title: 'Acer Aspire',
        price: 1800,
    },
    {
        id: 3,
        title: 'Dell Vostro',
        price: 3400
    },
];

let order = [];

function addToBasket(productId) {
    // проверяем наличие товара в заказе
    let foundItem = order.find(item => productId === item.id);

    // при наличии выдаём alert, что товар уже в корзине
    if (foundItem) {
        alert(`${foundItem.title} уже в корзине`);

    // если товар еще не в корзине, добавляем его из массива products
    } else {
        let productToAdd = products.find(item => productId === item.id);
        order = [...order, productToAdd];
    }

    renderCart();
    rerenderTotalPrice();
}


function removeFromBasket(productId) {
    // удаляем товара из корзины
    order = order.filter(item => productId !== item.id);
    
    renderCart();
    rerenderTotalPrice();
}


function rerenderTotalPrice() {
    // подсчёт общей стоимости заказа
    let totalPrice = order.reduce((accumulator, item) => accumulator + item.price, 0);

    document.getElementById('total').innerText = totalPrice;
}

// Этот метод остается без изменений
function renderCart() {
    const cart = document.getElementById('basket-items');

    cart.innerHTML = '';
    order.forEach(item => {
        const el = document.createElement('li');
        el.innerText = item.title;
        el.onclick = () => removeFromBasket(item.id);
        cart.appendChild(el);
    })
}