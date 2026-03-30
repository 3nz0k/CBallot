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
    const submenu = document.getElementById("burgermenu");
    submenu.classList.toggle("hidden");
}

function Options() {
    const div = document.getElementById("menu");
    div.classList.toggle("hidden");
}

function Dark()
{
    // const body = document.getElementById("body");
    // const header = document.getElementById("header");
    const divs = document.querySelectorAll(".settings div");
    // const session = document.getElementById("session");
    // const item = document.getElementById("item");
    // const card1 = document.getElementById("card1");
    // const card2 = document.getElementById("card2");
    // const progress = document.getElementById("progress");
    // const leftArrow = document.getElementById("leftArrow");
    // const rightArrow = document.getElementById("rightArrow");

    // body.classList.toggle("body-dark");
    // header.classList.toggle("header-dark");
    // session.classList.toggle("session-dark");
    // item.classList.toggle("item-dark");
    // card1.classList.toggle("card-dark");
    // card2.classList.toggle("card-dark");
    // progress.classList.toggle("progress-dark");
    divs.forEach((div, index) => {
        div.classList.toggle(index % 2 === 0 ? "settings-div-odd-dark" : "settings-div-even-dark");
    });
}

function Delete(btn) {
    const row = btn.closest("tr");
    row.remove();
}