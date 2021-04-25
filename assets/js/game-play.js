//global variable as used in several functions -empty array

let clickedCards = [];

// wait for the DOM to load before running game.
//shuffle cards on page load.

document.addEventListener("DOMContentLoaded", function(){

    let buttons = document.getElementsByClassName("btn-secondary");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            let difficultyLevel = this.getAttribute("data-level");
            this.classList.add("active-level")
            runGame(difficultyLevel);
        })
    }
    //default game to load on page load
    runGame("easy");
})

function runGame(difficultyLevel) {

    if (difficultyLevel === "easy") {
        displayEasyLevel();
    } else if (difficultyLevel === "medium") {
        displayMediumLevel();
    } else {
        displayHardLevel();
    };
}

function displayEasyLevel () {
    shuffleCards();

    let cards = document.getElementsByClassName("game-card");

   for (let card of cards) {
       card.addEventListener("click", flipCard);
       if (card.classList.contains("easy-level")) {
           card.classList.remove("inactive");
       };
    };
}
// adds 4 new cards to play with *NEED TO CHANGE IMAGES - USED OLD IMAGES TO TEST*
function displayMediumLevel () {
    let gameArea = document.getElementsByClassName("game-card-area")[0];
    let medCard1 = document.createElement('div');
    medCard1.classList.add("game-card", "medium-level");
    medCard1.innerHTML = `
        <div class="card-back">
            <img src="./assets/Images/card-cover2.jpg" alt="back of card">
            <h3 class="text-overlay">Succulent Match</h3>
        </div>
        <div class="card-front">
            <img src="./assets/Images/gulnaz-shaidullina-Aot6EFo3rWc-unsplash-re-sized.jpg" alt="grey succulent">
        </div>
        `;
    let medCard1Clone = medCard1.cloneNode(true);
    let medCard2 = document.createElement('div');
    medCard2.classList.add("game-card", "medium-level", "hard-level");
    medCard2.innerHTML = `
        <div class="card-back">
            <img src="./assets/Images/card-cover2.jpg" alt="back of card">
            <h3 class="text-overlay">Succulent Match</h3>
        </div>
        <div class="card-front">
            <img src="./assets/Images/gulnaz-shaidullina-Aot6EFo3rWc-unsplash-re-sized.jpg" alt="grey succulent">
        </div>
        `;
    let medCard2Clone = medCard2.cloneNode(true);

    gameArea.appendChild(medCard1);
    gameArea.appendChild(medCard1Clone);
    gameArea.appendChild(medCard2);
    gameArea.appendChild(medCard2Clone);
    shuffleCards();

    let cards = document.getElementsByClassName("game-card");

   for (let card of cards) {
       card.addEventListener("click", flipCard);
        if (card.classList.contains("medium-level")) {
           card.classList.remove("inactive");
       };
    };
}
// adds the 4 cards from medium level and 4 extra cards
function displayHardLevel () {
    displayMediumLevel();
    let gameArea = document.getElementsByClassName("game-card-area")[0];
    let hardCard1 = document.createElement('div');
    hardCard1.classList.add("game-card", "hard-level");
    hardCard1.innerHTML = `
        <div class="card-back">
            <img src="./assets/Images/card-cover2.jpg" alt="back of card">
            <h3 class="text-overlay">Succulent Match</h3>
        </div>
        <div class="card-front">
            <img src="./assets/Images/gulnaz-shaidullina-Aot6EFo3rWc-unsplash-re-sized.jpg" alt="grey succulent">
        </div>
        `;
    let hardCard1Clone = hardCard1.cloneNode(true);
    let hardCard2 = document.createElement('div');
    hardCard2.classList.add("game-card", "hard-level");
    hardCard2.innerHTML = `
        <div class="card-back">
            <img src="./assets/Images/card-cover2.jpg" alt="back of card">
            <h3 class="text-overlay">Succulent Match</h3>
        </div>
        <div class="card-front">
            <img src="./assets/Images/gulnaz-shaidullina-Aot6EFo3rWc-unsplash-re-sized.jpg" alt="grey succulent">
        </div>
        `;
    let hardCard2Clone = hardCard2.cloneNode(true);

    gameArea.appendChild(hardCard1);
    gameArea.appendChild(hardCard1Clone);
    gameArea.appendChild(hardCard2);
    gameArea.appendChild(hardCard2Clone);


    shuffleCards();

    let cards = document.getElementsByClassName("game-card");

   for (let card of cards) {
       card.addEventListener("click", flipCard);
       if (card.classList.contains("hard-level")) {
           card.classList.remove("inactive");
       };
    };
}

function shuffleCards() {
    let cards = document.getElementsByClassName("game-card");

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

    console.log(clickedCards)

    let firstCard = clickedCards[0];
    let secondCard = clickedCards[1];

    if (firstCard.dataset.succulent === secondCard.dataset.succulent) {
        firstCard.classList.add("matched");
        secondCard.classList.add("matched");
        incrementCorrectMatches();
        clickedCards = [];
    } else {
        setTimeout(noMatch, 1500); //added timeout as wasn't showing that the 2nd card didnt match
        clickedCards = [];
    };
}

function noMatch (firstCard, secondCard) {
    let cards = document.getElementsByClassName("game-card");

    for (let card of cards) {
        card.classList.remove("flip");
        card.addEventListener("click", flipCard);
    };
    incrementIncorrectMatches();
}

function incrementCorrectMatches () {
    let oldScore = parseInt(document.getElementById("correct-matches").innerText);
    document.getElementById("correct-matches").innerText = ++oldScore;
}

function incrementIncorrectMatches () {
    let oldScore = parseInt(document.getElementById("incorrect-matches").innerText);
    document.getElementById("incorrect-matches").innerText = ++oldScore;
}

function numberOfMoves () {

}

function timeTaken () {

}