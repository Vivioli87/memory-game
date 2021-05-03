let dCards = [];

document.addEventListener("DOMContentLoaded", function(){

    let dCards = document.getElementsByClassName("demo-card");

    for (let dCard of dCards) {
        dCard.addEventListener("click", flipDemo);
    };
})


function flipDemo (event) {
    
    this.classList.add("flip");
    dCards.push(this);

    demoMatch();
}

function demoMatch() {

    let firstDCard = dCards[0];
    let secondDCard = dCards[1];

    firstDCard.removeEventListener("click", flipDemo);
    secondDCard.removeEventListener("click", flipDemo);

    if (dCards.length === 2) {
       lockDBoard();
    };

    if (firstDCard.dataset.succulent === secondDCard.dataset.succulent) {
        firstDCard.classList.add("matched");
        secondDCard.classList.add("matched");
        dCards = [];
        setTimeout(unlockDBoard, 1000);
    } else {
        setTimeout(noDMatch, 1500); //added timeout as wasn't showing that the 2nd card didnt match before unflipping
        dCards = [];
    };
}

function noDMatch (firstDCard, secondDCard) {
    let dCards = document.getElementsByClassName("demo-card");

    for (let dCard of dCards) {
        dCard.classList.remove("flip");
        dCard.addEventListener("click", flipDemo);
    };
}

function lockDBoard() {
     let dCards = document.getElementsByClassName("demo-card");

    for (let dCard of dCards) {
       dCard.removeEventListener("click", flipDemo);
    };
}

function unlockDBoard() {
     let dCards = document.getElementsByClassName("demo-card");

    for (let dCard of dCards) {
      dCard.addEventListener("click", flipDemo);
    };
}
