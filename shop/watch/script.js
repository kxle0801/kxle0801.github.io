document.addEventListener("DOMContentLoaded", function () {
    const addToCartBtns = document.querySelectorAll('#addtocart');
    const cartItems = document.querySelector(".cart-items");
    const totalElement = document.querySelector(".total");    
    let cart = [];

    addToCartBtns.forEach(function (addToCartBtn) {
        addToCartBtn.addEventListener('click', function () {
            const originalButtonText = addToCartBtn.textContent;

            addToCartBtn.textContent = 'Please Wait';

            setTimeout(function () {
                addToCartBtn.textContent = '✅ Finished';
                addToCartBtn.style.backgroundColor = '#333333';
                addToCartBtn.style.borderColor = '#3d3d3d';
                addToCartBtn.style.color = '#fff';
                
                cartCount()
                
                const product = addToCartBtn.parentNode;
                const title = product.querySelector("#item-name").textContent;
                const price = parseFloat(product.querySelector("#item-price").textContent.slice(1));

                const existingItem = cart.find(item => item.title === title);

                if (existingItem) {
                    existingItem.quantity++;
                    existingItem.total += price;
                } else {
                    const item = {
                        title: title,
                        price: price,
                        quantity: 1,
                        total: price
                    };
                    cart.push(item);
                }
                updateCart();
                setTimeout(function () {
                    addToCartBtn.textContent = originalButtonText;
                    addToCartBtn.style.backgroundColor = '#3d3d3d';
                    addToCartBtn.style.borderColor = '#3d3d3d';
                    addToCartBtn.style.color = '#fff';

                }, 4000);
            }, 2500);
        });
    });

    function updateCart() {
        cartItems.innerHTML = "";
        let cartTotal = 0;
    
        cart.forEach(function (item) {
            const cartItem = document.createElement("li");
    
            const itemContainer = document.createElement("div");
    
            const removeButton = document.createElement("button");
            removeButton.className = "remove-button";
            removeButton.textContent = "remove";
            removeButton.addEventListener("click", function () {
                removeItemFromCart(item);
            });
    
            itemContainer.appendChild(removeButton);
    
            const itemDetails = document.createElement("span");
            itemDetails.textContent = ` ${item.title} (Count: ${item.quantity}) - ₱${item.total.toFixed(2)}`;
    
            itemContainer.appendChild(itemDetails);
    
            cartItem.appendChild(itemContainer);
    
            cartItems.appendChild(cartItem);
            cartTotal += item.total;
        });
    
        totalElement.textContent = `₱${cartTotal.toFixed(2)}`;
    }

    function removeItemFromCart(item) {
        const itemIndex = cart.findIndex(cartItem => cartItem.title === item.title);
        if (itemIndex !== -1) {
            cart.splice(itemIndex, 1);
            updateCart();
        }
    }

    var count = 0;

    function cartCount() {
        count++;
        document.getElementById("cart-count").innerHTML = "Cart(" + count + ")";
    }
});

// NONE TEXT

document.addEventListener("DOMContentLoaded", function () {
    const addToCartBtns = document.querySelectorAll('#addtocart-icon');
    const cartItems = document.querySelector(".cart-items");
    const totalElement = document.querySelector(".total");    
    let cart = [];

    addToCartBtns.forEach(function (addToCartBtn) {
        addToCartBtn.addEventListener('click', function () {
            addToCartBtn.textContent = '...';

            setTimeout(function () {
                addToCartBtn.textContent = '✅';
                
                cartCount()
                
                const product = addToCartBtn.parentNode;
                const title = product.querySelector("#item-name-icon").textContent;
                const price = parseFloat(product.querySelector("#item-price-icon").textContent.slice(1));

                const existingItem = cart.find(item => item.title === title);

                if (existingItem) {
                    existingItem.quantity++;
                    existingItem.total += price;
                } else {
                    const item = {
                        title: title,
                        price: price,
                        quantity: 1,
                        total: price
                    };
                    cart.push(item);
                }
                updateCart();
                setTimeout(function () {
                    addToCartBtn.textContent = "🛒";
                }, 4000);
            }, 2500);
        });
    });

    function updateCart() {
        cartItems.innerHTML = "";
        let cartTotal = 0;
    
        cart.forEach(function (item) {
            const cartItem = document.createElement("li");
    
            const itemContainer = document.createElement("div");
    
            const removeButton = document.createElement("button");
            removeButton.className = "remove-button";
            removeButton.textContent = "remove";
            removeButton.addEventListener("click", function () {
                removeItemFromCart(item);
            });
    
            itemContainer.appendChild(removeButton);
    
            const itemDetails = document.createElement("span");
            itemDetails.textContent = ` ${item.title} (Count: ${item.quantity}) - ₱${item.total.toFixed(2)}`;
    
            itemContainer.appendChild(itemDetails);
    
            cartItem.appendChild(itemContainer);
    
            cartItems.appendChild(cartItem);
            cartTotal += item.total;
        });
    
        totalElement.textContent = `₱${cartTotal.toFixed(2)}`;
    }

    function removeItemFromCart(item) {
        const itemIndex = cart.findIndex(cartItem => cartItem.title === item.title);
        if (itemIndex !== -1) {
            cart.splice(itemIndex, 1);
            updateCart();
            reduceCart();
        }
    }

    var count = 0;

    function cartCount() {
        count++;
        document.getElementById("cart-count").innerHTML = "Cart(" + count + ")";
    }

    function reduceCart() {
        count--;
        document.getElementById("cart-count").innerHTML = "Cart(" + count + ")";
    }
});

function checkoutForm() {
    window.location.href = "purchase.html";
}

const blurHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header')
}

window.addEventListener('scroll', blurHeader)