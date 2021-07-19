if (basket == 'undefined') {
    var basket;
}

basket = [];

basket.push({
    title: 'FirstProduct',
    price: 150
});

basket.push({
    title: 'SecondProduct',
    price: 732
});

basket.push({
    title: 'ThirdProduct',
    price: 214
});

alert(countBasketPrice(basket));

function countBasketPrice(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].price;
    }
    return sum;
}