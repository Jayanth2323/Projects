let cart = [];
let total = 0;

function addToCart(TechName, TechPrice) {
    cart.push({ name: TechName, price: TechPrice });
    total += TechPrice;
    updateCart();
    alert(`Added ${TechName} to cart. Total: $${total}`);
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const totalPrice = document.getElementById('total-price');

    if (!cartItems || !cartCount || !totalPrice) {
        return;
    }

    if (cart.length === 0) {
        cartItems.innerHTML = 'Your cart is empty.';
        cartCount.textContent = 0;
        totalPrice.textContent = 'Total: $0';
        return;
    }

    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
    });


    cartCount.textContent = cart.length;
    totalPrice.textContent = `Total: $${total}`;

    document.getElementById('cart').style.display = 'block';
    document.getElementById('cart-items').style.display = 'block';
    document.getElementById('total-price').style.display = 'block';

    document.getElementById('contact').style.display = 'none';
    document.getElementById('contactForm').style.display = 'none';

    document.getElementById('techs').style.display = 'none';

    document.getElementById('contact').style.display = 'none';

    document.getElementById('contact').style.display = 'none';

    document.getElementById('contactForm').style.display = 'none';
}

function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    alert(`Thank you, ${name}! Your message has been sent.`);
    document.getElementById('contactForm').reset();
}