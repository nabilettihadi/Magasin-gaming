document.addEventListener("DOMContentLoaded", () => {
    const cartItemsElement = document.getElementById("cartItems");
    const cartTotalElement = document.getElementById("cartTotal");
    const checkoutButton = document.getElementById("checkoutButton");

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const products = [
        {
            "id": 1,
            "name": "Personalisation de Pc Gamer",
            "price": 200,
            "image": "image/1.png",
            dataCategorie: "pcportable"
        },
        {
            "id": 2,
            "name": "Personalisation d'accessoires",
            "price": 250,
            "image": "image/rectangle 31.png",
            dataCategorie: "accessoires"
        },
        {
            "id": 3,
            "name": "Personalisation de Pc Gamer",
            "price": 290,
            "image": "image/3.png",
            dataCategorie: "pcGamer"
        },
        {
            "id": 4,
            "name": "Personalisation d'accessoire",
            "price": 200,
            "image": "image/4.png",
            dataCategorie: "accessoires"
        },
        {
            "id": 5,
            "name": "Personalisation d'accessoire",
            "price": 300,
            "image": "image/5.png",
            dataCategorie: "accessoires"
        },
        {
            "id": 6,
            "name": "Écrans et Moniteurs PC",
            "price": 200,
            "image": "image/6.png",
            dataCategorie: "chaisesEtBureauGaming"
        },
        {
            "id": 7,
            "name": "Personalisation d'accessoires",
            "price": 280,
            "image": "image/7.png",
            dataCategorie: "accessoires"
        },
        {
            "id": 8,
            "name": "Écrans et Moniteurs PC",
            "price": 300,
            "image": "image/8.png",
            dataCategorie: "ecrantEtMoniteursPc"
        },
        {
            "id": 9,
            "name": "Écrans et Moniteurs PC",
            "price": 100,
            "image": "image/9.png",
            dataCategorie: "ecrantEtMoniteursPc"
        },
        {
            "id": 2,
            "name": "Personalisation d'accessoires",
            "price": 250,
            "image": "image/rectangle 31.png",
            dataCategorie: "accessoires"
        },
        {
            "id": 3,
            "name": "Personalisation de Pc Gamer",
            "price": 290,
            "image": "image/3.png",
            dataCategorie: "pcGamer"
        },
        {
            "id": 4,
            "name": "Personalisation d'accessoire",
            "price": 200,
            "image": "image/4.png",
            dataCategorie: "accessoires",
            dataCategorie: "pcGamer"
        },
        {
            "id": 5,
            "name": "Personalisation d'accessoire",
            "price": 300,
            "image": "image/5.png",
            dataCategorie: "accessoires"
        },
        {
            "id": 6,
            "name": "Écrans et Moniteurs PC",
            "price": 200,
            "image": "image/6.png",
            dataCategorie: "chaisesEtBureauGaming"
        },
        {
            "id": 7,
            "name": "Personalisation d'accessoires",
            "price": 280,
            "image": "image/7.png",
            dataCategorie: "accessoires"
        },
        {
            "id": 8,
            "name": "Écrans et Moniteurs PC",
            "price": 300,
            "image": "image/8.png",
            dataCategorie: "ecrantEtMoniteursPc"
        },
        {
            "id": 11,
            "name": "Écrans et Moniteurs PC",
            "price": 100,
            "image": "image/rectangle 31 (1).png",
            dataCategorie: "ecrantEtMoniteursPc"
        },
        {
            "id": 1,
            "name": "Personalisation de Pc Gamer",
            "price": 200,
            "image": "image/1.png",
            dataCategorie: "pcportable"
        },
        {
            "id": 10,
            "name": "Chaises & Bureau Gaming",
            "price": 250,
            "image": "image/2.png",
            dataCategorie: "chaisesEtBureauGaming"
        },
        {
            "id": 3,
            "name": "Personalisation de Pc Gamer",
            "price": 290,
            "image": "image/3.png",
            dataCategorie: "pcGamer"
        },
        {
            "id": 4,
            "name": "Personalisation d'accessoire",
            "price": 200,
            "image": "image/4.png",
            dataCategorie: "accessoires"
        },
        {
            "id": 5,
            "name": "Personalisation d'accessoire",
            "price": 300,
            "image": "image/5.png",
            dataCategorie: "accessoires"
        },
        {
            "id": 6,
            "name": "Chaises & Bureau Gaming",
            "price": 200,
            "image": "image/6.png",
            dataCategorie: "chaisesEtBureauGaming"
        },
        {
            "id": 7,
            "name": "Personalisation d'accessoires",
            "price": 280,
            "image": "image/7.png",
            dataCategorie: "accessoires"
        },
        {
            "id": 8,
            "name": "Écrans et Moniteurs PC",
            "price": 300,
            "image": "image/8.png",
            dataCategorie: "ecrantEtMoniteursPc"
        },
        {
            "id": 9,
            "name": "Écrans et Moniteurs PC",
            "price": 100,
            "image": "image/9.png",
            dataCategorie: "ecrantEtMoniteursPc"
        },
        {
            "id": 2,
            "name": "Personalisation d'accessoires",
            "price": 250,
            "image": "image/rectangle 31.png",
            dataCategorie: "accessoires"
        }
    ];

    function calculateCartTotal() {
        let total = 0;
        for (const item of cart) {
            const product = products.find((p) => p.id === item.product_id);
            if (product) {
                total += product.price * item.quantity;
            }
        }
        return total;
    }
    function updateCartDisplay() {
        cartItemsElement.innerHTML = "";

        for (const item of cart) {
            const product = products.find((p) => p.id === item.product_id);
            if (product) {
                const cartItem = document.createElement("div");
                cartItem.classList.add("cart-item");
                cartItem.innerHTML = `
                    <div class="cart-item-info">
                        <img src="${product.image}" alt="${product.name}">
                        <div>
                            <h3>${product.name}</h3>
                            <p>Price: $${product.price}</p>
                            <p>Quantity: ${item.quantity}</p>
                        </div>
                    </div>
                `;
                cartItemsElement.appendChild(cartItem);
            }
        }

        const total = calculateCartTotal();
        cartTotalElement.innerHTML = `Total: $${total}`;
    }
    updateCartDisplay();

    checkoutButton.addEventListener("click", () => {
        cart.length = 0;
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartDisplay(); 
        alert("Checkout completed successfully!");
    });
});
