function SubMenu(){
    const submenu = document.getElementById("burgermenu");
    submenu.classList.toggle("hidden");
}

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

        const sessionName = form.sessionName.value;
        const location = form.location.value;
        const startDate = form.startDate.value;
        const endDate = form.endDate.value;

        if(sessionName == "") {
            console.log("Session est null !");
        } else if (location == "") {
            console.log("Lieu est null !");
        } else if (startDate.search(/[\d]{2}\/[\d]{2}\/[\d]{4}/g)  != 0) {
            console.log("Date de début !");
        } else if (endDate.search(/[\d]{2}\/[\d]{2}\/[\d]{4}/g) != 0) {
            console.log("Date de fin !");
        } else {
            const table = document.getElementById("table");
            console.log(table);
            let row = table.insertRow(-1);

            let sessionNameCell = row.insertCell(0);
            let locationCell = row.insertCell(1);
            let startDateCell = row.insertCell(2);
            let endDateCell = row.insertCell(3);
            let actionsCell = row.insertCell(4);

            sessionNameCell.innerHTML = sessionName;
            locationCell.innerHTML = location;
            startDateCell.innerHTML = startDate;
            endDateCell.innerHTML = endDate;
            actionsCell.innerHTML = `<td><button class="delete" onclick="Delete(this)">Supprimer</button></td>`;
        }
    });
});

function Delete(btn) {
    const row = btn.closest("tr");
    row.remove();
}

function Dark()
{
    const body = document.getElementById("body");
    const header = document.getElementById("header");
    const logo = document.getElementById("logo");
    const table = document.getElementById("table");
   
    body.classList.toggle("body-dark");
    header.classList.toggle("header-dark");
    logo.classList.toggle("logo-dark");
    table.classList.toggle("table-dark");
}