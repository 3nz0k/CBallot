const candidates = [
    {
        "representative": {
            "firstName": "Louis",
            "pic": "photo.png"
        },
        "alternate": {
            "firstName": "Emma",
            "pic": "photo.png"
        }
    },
    {
        "representative": {
            "firstName": "Bob",
            "pic": "photo.png"
        },
        "alternate": {
            "firstName": "Bobby",
            "pic": "photo.png"
        }
    },
    {
        "representative": {
            "firstName": "Alice",
            "pic": "photo.png"
        },
        "alternate": {
            "firstName": "Dimitri",
            "pic": "photo.png"
        }
    },
    {
        "representative": {
            "firstName": "Jules",
            "pic": "photo.png"
        },
        "alternate": {
            "firstName": "Candice",
            "pic": "photo.png"
        }
    }
];

//Fonction OPTION POUR LE DARK MODE
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
    const leftArrow = document.getElementById("leftArrow");
    const rightArrow = document.getElementById("rightArrow");

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

    if(rightArrow.classList.toggle("rightArrow-dark") || leftArrow.classList.toggle("leftArrow-dark")){
        leftArrow.src = "/img/arrows/dark_left_arrow.png";
        rightArrow.src = "/img/arrows/dark_right_arrow.png";
    } else {
        leftArrow.src = "/img/arrows/light_left_arrow.png";
        rightArrow.src = "/img/arrows/light_right_arrow.png";
    }
}

//FONCTION POUR CHANGER LES NOMS DES PERSONNES
let index = 0;

function updateCard() {
        document.getElementById("card1").firstElementChild.innerHTML = candidates[index].representative.firstName;
        document.getElementById("card2").firstElementChild.innerHTML = candidates[index].alternate.firstName;
}

function rightArrow() {
    if(index < candidates.length -1) {
        index++;
        updateCard();
    }
}

function leftArrow() { 
    if(index > 0) {
        index--;
        updateCard();
    }
}

//Fonction pour voter pour ce binome
let voteNumbers = 0;
function Voter() {
    console.log("Tu viens de voter pour : " + candidates[index].representative.firstName);
    if (voteNumbers < 10)
    {
        voteNumbers++;
        document.getElementById("progress").firstElementChild.innerHTML = voteNumbers + " / 10 votes";
        let progressBar = document.getElementById("progress").lastElementChild;
        progressBar.value = voteNumbers;
    }
}