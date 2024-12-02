document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

if (username === "" || password === "") {
        alert("Please enter both username and password.");
        return;
    }
    console.log("Username:", username);
    console.log("Password:", password);
});

    