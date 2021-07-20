if (basket == 'undefined') {
    var basket;
}

basket = {
    products: [],
    totalPrice: function () {
        let sum = 0;
        for (let i = 0; i < this.products.length; i++) {
            sum += this.products[i].price;
        }
        return sum;
    }
};

basket.products.push({
    title: 'FirstProduct',
    price: 150
});

basket.products.push({
    title: 'SecondProduct',
    price: 737
});

basket.products.push({
    title: 'ThirdProduct',
    price: 214
});

alert(basket.totalPrice());