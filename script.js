let cart = [];
let total = 0;

function addToCart(item, price) {
    cart.push({ item, price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    cartList.innerHTML = '';
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = <span>${item.item} - $${item.price}</span>;
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'btn-secondary';
        
        removeBtn.onclick = () => removeFromCart(index);
        li.appendChild(removeBtn);
        cartList.appendChild(li);
    });
    document.getElementById('total').textContent = total.toFixed(2);
    cartCount.textContent = cart.length;
}

function removeFromCart(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    updateCart();
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    alert('Order placed! Total: $${total.toFixed(2)}. Well deliver soon.');
    cart = [];
    total = 0;
    updateCart();
}

document.getElementById('order-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Order submitted! Thank you for choosing Foodie Deliver.');
});