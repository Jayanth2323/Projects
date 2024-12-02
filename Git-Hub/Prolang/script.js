function buyProduct(productName) {
    alert(`Thank you for purchasing ${productName}!`);
}

function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    alert(`Thank you, ${name}! Your message has been sent.`);
    document.getElementById('contactForm').reset();
}