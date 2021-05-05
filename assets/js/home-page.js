let dCards = [];


document.addEventListener("DOMContentLoaded", function(){

    let dCards = document.getElementsByClassName("demo-card");

    for (let dCard of dCards) {
        dCard.addEventListener("click", flipDemo);
    }

    let resetButton = document.getElementById("demo");
    resetButton.addEventListener("click", demoReset);

    shuffleDCards();

});

function shuffleDCards() {
    let cards = document.getElementsByClassName("demo-card");

    for (let card of cards) {
        let randomPos = Math.floor(Math.random() * 6);
        card.style.order = randomPos;
    }
}

function flipDemo (event) {
    
    this.classList.add("flip");
    dCards.push(this);

    demoMatch();
}

function demoMatch() {

    let firstDCard = dCards[0];
    let secondDCard = dCards[1];

    firstDCard.removeEventListener("click", flipDemo);


    if (dCards.length === 2) {
        secondDCard.removeEventListener("click", flipDemo);
        lockDBoard();

        if (firstDCard.dataset.succulent === secondDCard.dataset.succulent) {
        firstDCard.classList.add("matched");
        secondDCard.classList.add("matched");
        dCards = [];
        setTimeout(unlockDBoard, 1000);
        } else {
            setTimeout(noDMatch, 1500); //added timeout as wasn't showing that the 2nd card didnt match before unflipping
            dCards = [];
        }
    }
}

function noDMatch (firstDCard, secondDCard) {
    let dCards = document.getElementsByClassName("demo-card");

    for (let dCard of dCards) {
        dCard.classList.remove("flip");
        dCard.addEventListener("click", flipDemo);
    }
}

function lockDBoard() {
     let dCards = document.getElementsByClassName("demo-card");

    for (let dCard of dCards) {
       dCard.removeEventListener("click", flipDemo);
    }
}

function unlockDBoard() {
     let dCards = document.getElementsByClassName("demo-card");

    for (let dCard of dCards) {
      dCard.addEventListener("click", flipDemo);
    }
}

function demoReset() {

    let dCards = document.getElementsByClassName("demo-card");

    for (let dCard of dCards) {
      dCard.classList.remove("matched", "flip");
    }
}

