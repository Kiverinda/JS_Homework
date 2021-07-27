var cart = {
    products: [],
    totalPrice: function () {
        var res = 0;
        let variable;
        for (var i = 0; i < this.products.length; i++) {
            variable = this.products[i].price;
            res = res + variable;
        }
        return res;
    }
};

var productDescription = {
    os: "Операционная система",
    core: "Количество ядер",
    freguence: "Частота процессора",
    ram: "Оперативная память",
    capacity: "Ёмкость аккумулятора",
    color: "Цвет"
};

var listProducts = [{
        title: `Смартфон Apple iPhone 11 128GB Black (MHDH3RU/A)`,
        description: {
            os: "Android",
            core: "8",
            freguence: "4 x 2.0 + 4 x 1.8",
            ram: "4",
            capacity: "5000",
            color: "Красный"
        },
        images: [`images/sams-1.webp`,
            `images/sams-2.webp`,
            `images/sams-3.webp`
        ],
        price: 35000
    },
    {
        title: `Смартфон XIAOMI Poco X3 128Gb`,
        description: {
            os: `Android 10`,
            core: `8`,
            freguence: `2300`,
            color: `Серый`
        },
        images: [`images/xiaomi-1.jpg`,
            `images/xiaomi-2.jpg`,
            `images/xiaomi-3.jpg`,
            `images/xiaomi-4.jpg`
        ],
        price: 18490
    },
    {
        title: `Смартфон SAMSUNG Galaxy Note 20 Ultra`,
        description: {
            os: `Android`,
            core: `8`,
            ram: `8`,
            capacity: `4500`,
            color: `Белый`
        },
        images: [`images/samsung-1.jpg`,
            `images/samsung-2.jpg`
        ],
        price: 89900
    }
];

var divContent = document.getElementsByClassName("content")[0];

var cartHeader = document.getElementsByClassName("total-price")[0];
cartHeader.innerText = `${cart.totalPrice()}`;

for (let i = 0; i < listProducts.length; i++) {
    var divContainer = document.createElement("div");
    divContainer.classList.add("container");
    divContent.appendChild(divContainer);

    var divContainerLeft = document.createElement("div");
    divContainerLeft.classList.add("container-left");
    divContainer.appendChild(divContainerLeft);

    var divContainerCenter = document.createElement("div");
    divContainerCenter.classList.add("container-center");
    divContainer.appendChild(divContainerCenter);

    var divContainerRight = document.createElement("div");
    divContainerRight.classList.add("container-right");
    divContainer.appendChild(divContainerRight);

    if (listProducts[i].images.length != null && listProducts[i].images[0] != "") {
        var divFirstImage = document.createElement("div");
        divFirstImage.classList.add("first-image");
        divFirstImage.innerHTML = "<img src = \"" + listProducts[i].images[0] +
            "\" alt=\"first images\">";
        divContainerLeft.appendChild(divFirstImage);
    }

    var divSecondImages = document.createElement("div");
    divSecondImages.classList.add("second-iamges");
    for (let j = 0; j < listProducts[i].images.length; j++) {
        divSecondImages.innerHTML = divSecondImages.innerHTML +
            `<img src = "${listProducts[i].images[j]}" alt="second images">`;
    }
    divContainerLeft.appendChild(divSecondImages);

    var divTitle = document.createElement("div");
    divTitle.classList.add("title");
    divTitle.innerHTML = `<h3>${listProducts[i].title}</h3>`;
    divContainerCenter.appendChild(divTitle);

    var divDescription = document.createElement("div");
    divDescription.classList.add("description");
    divContainerCenter.appendChild(divDescription);

    var divNameDescription = document.createElement("div");
    divNameDescription.classList.add("name-description");
    divDescription.appendChild(divNameDescription);

    var divValueDescription = document.createElement("div");
    divValueDescription.classList.add("value-description");
    divDescription.appendChild(divValueDescription);

    for (var key in listProducts[i].description) {
        if (listProducts[i].description[key] != "") {
            var divСurrentNameDescription = document.createElement("div");
            divСurrentNameDescription.classList.add(`${key}`);
            divСurrentNameDescription.innerHTML =
                `${productDescription[key]}`;
            divNameDescription.appendChild(divСurrentNameDescription);

            var divСurrentValueDescription = document.createElement("div");
            divСurrentValueDescription.classList.add(`${key}-value`);
            divСurrentValueDescription.innerHTML =
                `${listProducts[i].description[key]}`;
            divValueDescription.appendChild(divСurrentValueDescription);
        }
    }

    var divListProducts = document.createElement("div");
    divListProducts.classList.add("list-products");
    divContainerRight.appendChild(divListProducts);

    var divPrice = document.createElement("div");
    divPrice.classList.add("price");
    divPrice.innerText = listProducts[i].price;
    divContainerRight.appendChild(divPrice);

    var buttonAddCart = document.createElement("button");
    buttonAddCart.classList.add("add-cart");
    buttonAddCart.setAttribute("data-num-product", `${i}`);
    buttonAddCart.innerHTML = `Добавить в корзину`;
    buttonAddCart.addEventListener('click', addCart);
    divContainerRight.appendChild(buttonAddCart);
}

var modal = document.getElementById("cart-modal");
var btn = document.getElementById("btn-modal-window");
var span = document.getElementsByClassName("close-modal-window")[0];

btn.onclick = function () {
    modal.style.display = "block";
};

span.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

function addCart(eventObj) {
    let el = eventObj.target;
    let num = el.getAttribute("data-num-product");
    cart.products.push(listProducts[num]);
    cartHeader.innerText = `${cart.totalPrice()}`;
    el.innerHTML = `В корзине`;

    var divCartContent = document.getElementsByClassName("cart-content")[0];

    var productInCart = document.createElement("div");
    productInCart.classList.add("one-product-in-cart");
    divCartContent.appendChild(productInCart);

    var imageProductInCart = document.createElement("div");
    imageProductInCart.classList.add("image-product-in-cart");
    imageProductInCart.innerHTML = `<img src="${listProducts[num].images[0]}">`;
    productInCart.appendChild(imageProductInCart);

    var titleProductInCart = document.createElement("div");
    titleProductInCart.classList.add("title-product-in-cart");
    titleProductInCart.innerHTML = listProducts[num].title;
    productInCart.appendChild(titleProductInCart);

    var priceProductInCart = document.createElement("div");
    priceProductInCart.classList.add("price-product-in-cart");
    priceProductInCart.innerHTML = listProducts[num].price;
    productInCart.appendChild(priceProductInCart);
}