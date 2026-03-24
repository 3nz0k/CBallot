document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("connexion");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const login = form.login.value;
        const password = form.password.value;

        console.log("Login :", login);
        console.log("Password :", password);
    });
});