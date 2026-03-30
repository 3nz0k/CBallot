function Add() {
    const modal = document.getElementById("modalAdd");

    modal.classList.remove("hidden");
}

function Close() {
    const modal = document.getElementById("modalAdd");
    modal.classList.add("hidden");
}

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const lastName = form.lastName.value;
        const firstName = form.firstName.value;

        console.log("lastName :", lastName);
        console.log("firstName :", firstName);
    });
});

function Submenu(){
    const submenu = document.getElementById("submenu");
    submenu.classList.toggle("hidden");
}