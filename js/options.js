function Options() {
    const div = document.getElementById("menu");
    div.classList.toggle("hidden");
}

function Dark()
{
    const body = document.getElementById("body");
    const header = document.getElementById("header");
    const divs = document.querySelectorAll(".settings div");
    const session = document.getElementById("session");
    const item = document.getElementById("item");
    const card1 = document.getElementById("card1");
    const card2 = document.getElementById("card2");
    const progress = document.getElementById("progress");
    
    console.log(divs);

    body.classList.toggle("body-dark");
    header.classList.toggle("header-dark");
    session.classList.toggle("session-dark");
    item.classList.toggle("item-dark");
    card1.classList.toggle("card-dark");
    card2.classList.toggle("card-dark");
    progress.classList.toggle("progress-dark");
    divs.forEach((div, index) => {
        div.classList.toggle(index % 2 === 0 ? "settings-div-odd-dark" : "settings-div-even-dark");
    });
}