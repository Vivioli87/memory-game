// global variables - tried to keep to a minimum
const cards = document.getElementsByClassName("game-card");
const buttons = document.getElementsByClassName("btn-secondary");

let clickedCards = [];


//shuffle cards on page load.

document.addEventListener("DOMContentLoaded", function(){
    shuffleCards();

    for (let card of cards) {
        card.addEventListener("click", flipCard);
    };

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") == "start") {
               startGame();
            } else {
                let difficultyLevel = this.getAttribute("data-type");
                alert(`You clicked ${difficultyLevel}`);
            };
            document.getElementsByClassName("btn-secondary").classList.remove("active-level");
            this.classList.add("active-level");
        })
    }
})

function shuffleCards() {
    for (let card of cards) {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    };
}

function flipCard (event) {
    this.classList.add("flip");
    clickedCards.push(this);
    console.log(clickedCards);

    checkMatch();
}


function checkMatch () {

    let firstCard = clickedCards[0];
    let secondCard = clickedCards[1];

    if (firstCard.dataset.succulent === secondCard.dataset.succulent) {
        firstCard.classList.add("matched");
        secondCard.classList.add("matched");
        clickedCards = [];
    } else {
        clickedCards = [];
        setTimeout(noMatch, 1500); //added timeout as wasn't showing that the 2nd card didnt match
    };
}

function noMatch () {
    for (let card of cards) {
        card.classList.remove("flip");
        card.addEventListener("click", flipCard);
    };
}

function numberOfMoves () {

}

function timeTaken () {

}