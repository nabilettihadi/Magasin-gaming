let listProductHTML = document.querySelector('.listProduct');
let listCartHTML = document.querySelector('.listCart');
let listFavorHTML = document.querySelector('.listFavor');
let iconCart = document.querySelector('.icon-cart');
let iconCartSpan = document.querySelector('.icon-cart span');
let iconFavor = document.querySelector('.icon-favor');
let iconFavorSpan = document.querySelector('.icon-favor span');
let body = document.querySelector('body');
let closeFavor = document.querySelector('.closeFavor');
let closeCart = document.querySelector('.close');
const pagination = document.getElementById("pagination");
let products = [
    {
        "id": 1,
        "name": "LD01 LOUNGE CHAIR",
        "price": 200,
        "image": "image/1.png"
    },
    {
        "id": 2,
        "name": "LD02 LOUNGE CHAIR",
        "price": 250,
        "image": "image/2.png"
    },
    {
        "id": 3,
        "name": "LD03 LOUNGE CHAIR",
        "price": 290,
        "image": "image/3.png"
    },
    {
        "id": 4,
        "name": "LD04 LOUNGE CHAIR",
        "price": 200,
        "image": "image/4.png"
    },
    {
        "id": 5,
        "name": "LD05 LOUNGE CHAIR",
        "price": 300,
        "image": "image/5.png"
    },
    {
        "id": 6,
        "name": "LD06 LOUNGE CHAIR",
        "price": 200,
        "image": "image/6.png"
    },
    {
        "id": 7,
        "name": "LD06 LOUNGE CHAIR",
        "price": 280,
        "image": "image/7.png"
    },
    {
        "id": 8,
        "name": "LD06 LOUNGE CHAIR",
        "price": 300,
        "image": "image/8.png"
    },
    {
        "id": 9,
        "name": "LD06 LOUNGE CHAIR",
        "price": 100,
        "image": "image/9.png"
    },
    {
        "id": 2,
        "name": "LD02 LOUNGE CHAIR",
        "price": 250,
        "image": "image/2.png"
    },
    {
        "id": 3,
        "name": "LD03 LOUNGE CHAIR",
        "price": 290,
        "image": "image/3.png"
    },
    {
        "id": 4,
        "name": "LD04 LOUNGE CHAIR",
        "price": 200,
        "image": "image/4.png"
    },
    {
        "id": 5,
        "name": "LD05 LOUNGE CHAIR",
        "price": 300,
        "image": "image/5.png"
    },
    {
        "id": 6,
        "name": "LD06 LOUNGE CHAIR",
        "price": 200,
        "image": "image/6.png"
    },
    {
        "id": 7,
        "name": "LD06 LOUNGE CHAIR",
        "price": 280,
        "image": "image/7.png"
    },
    {
        "id": 8,
        "name": "LD06 LOUNGE CHAIR",
        "price": 300,
        "image": "image/8.png"
    },
    {
        "id": 9,
        "name": "LD06 LOUNGE CHAIR",
        "price": 100,
        "image": "image/9.png"
    }
];

const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});

let cart = [];

iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})
closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})

let favorites = [];
iconFavor.addEventListener('click', () => {
    body.classList.toggle('showFavorites');
})
closeFavor.addEventListener('click', () => {
    body.classList.toggle('showFavorites');
})

const addDataToHTML = () => {
    if (products.length > 0) {
        products.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.dataset.id = product.id;
            newProduct.classList.add('item');
            newProduct.classList.add('tems');
            newProduct.innerHTML =
                `<img src="${product.image}" alt="">
                <h2>${product.name}</h2>
                <div class="price">$${product.price}</div>
                <button class="addCart">Add To Cart</button>
                <button class="addToFavor">Add To Favorites</button>`;
            listProductHTML.appendChild(newProduct);
        });
    }
}

listProductHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if (positionClick.classList.contains('addCart')) {
        let id_product = positionClick.parentElement.dataset.id;
        addToCart(id_product);
    }
    else if (positionClick.classList.contains('addToFavor')) {
        let id_product = positionClick.parentElement.dataset.id;
        addToFavorites(id_product);
    }

})

const addToCart = (product_id) => {
    let positionThisProductInCart = cart.findIndex((value) => value.product_id == product_id);
    if (cart.length <= 0) {
        cart = [{
            product_id: product_id,
            quantity: 1
        }];
    } else if (positionThisProductInCart < 0) {
        cart.push({
            product_id: product_id,
            quantity: 1
        });
    } else {
        cart[positionThisProductInCart].quantity = cart[positionThisProductInCart].quantity + 1;
    }
    addCartToHTML();
    addCartToMemory();
}

const addCartToMemory = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
}

const addCartToHTML = () => {
    listCartHTML.innerHTML = '';
    let totalQuantity = 0;
    if (cart.length > 0) {
        cart.forEach(item => {
            totalQuantity = totalQuantity + item.quantity;
            let newItem = document.createElement('div');
            newItem.classList.add('item');
            newItem.dataset.id = item.product_id;

            let positionProduct = products.findIndex((value) => value.id == item.product_id);
            let info = products[positionProduct];
            listCartHTML.appendChild(newItem);
            newItem.innerHTML = `
            <div class="image">
                    <img src="${info.image}">
                </div>
                <div class="name">
                ${info.name}
                </div>
                <div class="totalPrice">$${info.price * item.quantity}</div>
                <div class="quantity">
                    <span class="minus">-</span>
                    <span>${item.quantity}</span>
                    <span class="plus">+</span>
                </div>
            `;
        })
    }
    iconCartSpan.innerText = totalQuantity;
}

listCartHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if (positionClick.classList.contains('minus') || positionClick.classList.contains('plus')) {
        let product_id = positionClick.parentElement.parentElement.dataset.id;
        let type = 'minus';
        if (positionClick.classList.contains('plus')) {
            type = 'plus';
        }
        changeQuantityCart(product_id, type);
    }
})

const changeQuantityCart = (product_id, type) => {
    let positionItemInCart = cart.findIndex((value) => value.product_id == product_id);
    if (positionItemInCart >= 0) {
        let info = cart[positionItemInCart];
        switch (type) {
            case 'plus':
                cart[positionItemInCart].quantity = cart[positionItemInCart].quantity + 1;
                break;

            default:
                let changeQuantity = cart[positionItemInCart].quantity - 1;
                if (changeQuantity > 0) {
                    cart[positionItemInCart].quantity = changeQuantity;
                } else {
                    cart.splice(positionItemInCart, 1);
                }
            break;
        }
    }
    addCartToHTML();
    addCartToMemory();
}

const initApp = () => {
    addDataToHTML();

    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
        addCartToHTML();
    }
}



// const initFavor = () => {

//     if (localStorage.getItem('favorites')) {
//         favorites = JSON.parse(localStorage.getItem('favorites'));
//         addFavoritesToHTML();
//     }
// }

initApp();


// listProductHTML.addEventListener('click', (event) => {
//     let positionClick = event.target;
//     if (positionClick.classList.contains('addToFavor')) {
//         let id_product = positionClick.parentElement.dataset.id;
//         addToFavorites(id_product);
//     }
// });

const addToFavorites = (product_id) => {
    const isAlreadyFavorited = favorites.some(item => item.product_id === product_id);

    if (isAlreadyFavorited) {
        favorites = favorites.filter(item => item.product_id !== product_id);
    } else {
        favorites.push({ product_id });
    }

    addFavoritesToHTML();
    addFavoritesToMemory();
}

const addFavoritesToMemory = () => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
}


const addFavoritesToHTML = () => {
    listFavorHTML.innerHTML = '';
    let totalFavorites = favorites.length;
    iconFavorSpan.innerText = totalFavorites;

    if (favorites.length > 0) {
        favorites.forEach(item => {
            let newFavorItem = document.createElement('div');
            newFavorItem.classList.add('item');
            newFavorItem.dataset.id = item.product_id;

            let positionProduct = products.findIndex(value => value.id == item.product_id);
            let info = products[positionProduct];

            listFavorHTML.appendChild(newFavorItem);
            newFavorItem.innerHTML = `
                <img src="${info.image}" alt="">
                <h2>${info.name}</h2>
                <div class="price">$${info.price}</div>
            `;
        });
    }
}

// const initFavor = () => {
//     addDataToHTML();

//     if (localStorage.getItem('favorites')) {
//         favorites = JSON.parse(localStorage.getItem('favorites'));
//         addFavoritesToHTML();
//     }
// }

initFavor();


function displayProducts(page) {
    products.forEach((aticle, index) => {
        const div = listProductHTML.children[index];
        if (div) {
            div.classList.remove("active");
        }
    });

    const itemsPerPage = 9;
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    for (let i = start; i < end && i < products.length; i++) {
        const product = products[i];
        const div = listProductHTML.children[i];
        if (div) {
            div.textContent = product;
            div.classList.add("active");
        }
    }
}

// Function to create pagination buttons
function createPaginationButtons() {
    const pageCount = Math.ceil(products.length / 9);
    for (let i = 1; i <= pageCount; i++) {
        const button = document.createElement("button");
        button.id = `page${i}`;
        button.textContent = i;
        button.addEventListener("click", () => {
            displayProducts(i);
        });
        pagination.appendChild(button);
    }
}

// Create initial article elements
for (let i = 0; i < products.length; i++) {
    const div = document.createElement("div");
    div.classList.add("product");
    listProductHTML.appendChild(div);
}
const initFavor = () =>{
    addDataToHTML();
    if (localStorage.getItem('favorites')) {
        favorites = JSON.parse(localStorage.getItem('favorites'));
        addFavoritesToHTML();
    }
}
// Initial display on page load
displayProducts(1);
createPaginationButtons();