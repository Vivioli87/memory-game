//global variable as used in several functions -empty array

let clickedCards = [];


// wait for the DOM to load before running game.

document.addEventListener("DOMContentLoaded", function(){

    let buttons = document.getElementsByClassName("btn-secondary");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            let difficultyLevel = this.getAttribute("data-level");
            resetButtons();
            this.classList.add("active-level");
            runGame(difficultyLevel);
        });
    }


    //default game to load on page load - removed to ensure the modal works on level chosen.
   //runGame("easy");
});

//wrote separate function as removing 'active-level' class in above function wouldn't work
function resetButtons () {
    let buttons = document.getElementsByClassName("btn-secondary");

    for (let button of buttons) {
        button.classList.remove("active-level");
    }
}

function runGame(difficultyLevel) {

    let levelChosen = document.getElementById("level-chosen");
    levelChosen.innerHTML = `${difficultyLevel}`;

    if (difficultyLevel === "easy") {
        displayEasyLevel();
    } else if (difficultyLevel === "medium") {
        displayMediumLevel();
    } else {
        displayHardLevel();
    }
}


//removing cards functions called at start to remove any additional cards added by selecting other levels
//reset scores
function displayEasyLevel () {

    removeMedCards();
    removeHardCards();
    resetScores();

    let cards = document.getElementsByClassName("game-card");

   for (let card of cards) {
       card.addEventListener("click", flipCard);
       if (card.classList.contains("easy-level")) {
           card.classList.remove("inactive", "matched", "flip");
       }
    }
// timeout set to reload cards first then shuffle if difficulty changed mid game
    setTimeout(shuffleCards, 500);
}


// adds 4 new cards to play with 
//removing cards functions called at start to remove any additional cards added by selecting other levels
//reset scores
function displayMediumLevel () {
    displayEasyLevel();
    removeMedCards();
    removeHardCards();
    resetScores();

    let gameArea = document.getElementsByClassName("game-card-area")[0];
    let medCard1 = document.createElement('div');
    medCard1.classList.add("game-card", "medium-level");
    medCard1.setAttribute("data-succulent", "turquoise");
    medCard1.innerHTML = `
        <div class="card-back">
            <img src="./assets/Images/card-cover2.jpg" alt="back of card">
            <h3 class="text-overlay">Succulent Match</h3>
        </div>
        <div class="card-front">
            <img src="./assets/Images/erol-ahmed-aIYFR0vbADk-unsplash-resized.jpg" alt="turquoise succulent">
        </div>
        `;
    let medCard1Clone = medCard1.cloneNode(true);
    let medCard2 = document.createElement('div');
    medCard2.classList.add("game-card", "medium-level");
    medCard2.setAttribute("data-succulent", "aloe");
    medCard2.innerHTML = `
        <div class="card-back">
            <img src="./assets/Images/card-cover2.jpg" alt="back of card">
            <h3 class="text-overlay">Succulent Match</h3>
        </div>
        <div class="card-front">
            <img src="./assets/Images/jude-smart-lE6z79guKI0-unsplash-resized.jpg" alt="aloe succulent">
        </div>
        `;
    let medCard2Clone = medCard2.cloneNode(true);

    gameArea.appendChild(medCard1);
    gameArea.appendChild(medCard1Clone);
    gameArea.appendChild(medCard2);
    gameArea.appendChild(medCard2Clone);

    let cards = document.getElementsByClassName("game-card");

   for (let card of cards) {
       card.addEventListener("click", flipCard);
        if (card.classList.contains("medium-level")) {
           card.classList.remove("inactive", "matched", "flip");
       }
    }
    setTimeout(shuffleCards, 500);
}


// adds the 4 cards from medium level and 4 extra cards
//reset scores
function displayHardLevel () {
    displayMediumLevel();
    resetScores();
    let gameArea = document.getElementsByClassName("game-card-area")[0];
    let hardCard1 = document.createElement('div');
    hardCard1.classList.add("game-card", "hard-level");
    hardCard1.setAttribute("data-succulent", "jellybean");
    hardCard1.innerHTML = `
        <div class="card-back">
            <img src="./assets/Images/card-cover2.jpg" alt="back of card">
            <h3 class="text-overlay">Succulent Match</h3>
        </div>
        <div class="card-front">
            <img src="./assets/Images/michal-hlavac-i5drL-SLTmY-unsplash-re-sized.jpg" alt="jelly bean succulent">
        </div>
        `;
    let hardCard1Clone = hardCard1.cloneNode(true);
    let hardCard2 = document.createElement('div');
    hardCard2.classList.add("game-card", "hard-level");
    hardCard2.setAttribute("data-succulent", "green");
    hardCard2.innerHTML = `
        <div class="card-back">
            <img src="./assets/Images/card-cover2.jpg" alt="back of card">
            <h3 class="text-overlay">Succulent Match</h3>
        </div>
        <div class="card-front">
            <img src="./assets/Images/lily-li-QU_QqdKv-Uk-unsplash-resized.jpg" alt="green succulent">
        </div>
        `;
    let hardCard2Clone = hardCard2.cloneNode(true);

    gameArea.appendChild(hardCard1);
    gameArea.appendChild(hardCard1Clone);
    gameArea.appendChild(hardCard2);
    gameArea.appendChild(hardCard2Clone);


    let cards = document.getElementsByClassName("game-card");

   for (let card of cards) {
       card.addEventListener("click", flipCard);
       if (card.classList.contains("hard-level")) {
           card.classList.remove("inactive", "matched", "flip");
       }
    }
    setTimeout(shuffleCards, 500);
}

//removes medium level cards from play
function removeMedCards () {
    let medCards = document.getElementsByClassName("medium-level");
    while (medCards.length > 0) {
        medCards[0].parentNode.removeChild(medCards[0]);
    }
}

//removes hard level cards from play
function removeHardCards () {
    let hardCards = document.getElementsByClassName("hard-level");
    while (hardCards.length > 0) {
        hardCards[0].parentNode.removeChild(hardCards[0]);
    }
}

//resets scores with new games
function resetScores () {
    document.getElementById("correct-matches").innerText = "0";
    document.getElementById("incorrect-matches").innerText = "0";
    document.getElementById("moves").innerText = "0";
    document.getElementById("accuracy").innerText = "0";

}

//assigns random order to cards/shuffles cards
function shuffleCards() {
    let cards = document.getElementsByClassName("game-card");

    for (let card of cards) {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    }
}

//flips the card when clicked and adds to clicked cards array to check if match
function flipCard (event) {

    this.classList.add("flip");
    clickedCards.push(this);

    checkMatch();
}

//checks if the 2 cards selected match based on data-succulent attribute
function checkMatch () {

    let firstCard = clickedCards[0];
    let secondCard = clickedCards[1];

    //stops the same card being clicked twice/double clicked and matched

    firstCard.removeEventListener("click", flipCard); 

    if (clickedCards.length === 2) {
        secondCard.removeEventListener("click", flipCard);
        lockBoard();

        if (firstCard.dataset.succulent === secondCard.dataset.succulent) {
            firstCard.classList.add("matched");
            secondCard.classList.add("matched");
            incrementCorrectMatches();
            numberOfMoves();
            accuracy();
            clickedCards = [];
            setTimeout(unlockBoard, 1000);
        } else {
            setTimeout(noMatch, 1500); //added timeout as wasn't showing that the 2nd card didnt match before unflipping
            clickedCards = [];
        };
    }

    gameWon();
}

//code to execute if pair is not a match

function noMatch (firstCard, secondCard) {
    let cards = document.getElementsByClassName("game-card");

    for (let card of cards) {
        card.classList.remove("flip");
        card.addEventListener("click", flipCard);
    }
    incrementIncorrectMatches();
    numberOfMoves();
    accuracy();
}

//funtions to lockboard when clickedcards array reaches a length of 2 items to avoid a 3rd card being clicked
//lockBoard removes the event listeners and unlockBoard adds them back when there's a match.
function lockBoard() {
    let cards = document.getElementsByClassName("game-card");

    for (let card of cards) {
        card.removeEventListener("click", flipCard);
    }
}

function unlockBoard() {
    let cards = document.getElementsByClassName("game-card");

    for (let card of cards) {
        card.addEventListener("click", flipCard);
    }
}

//reveals 'Congratulations message' when all cards have been matched.

function gameWon () {
    let gameContainer = document.getElementsByClassName("inner-container")[0];
    let winInfo = document.createElement('div');
    let moves = parseInt(document.getElementById("moves").innerText);
    let accuracy = parseInt(document.getElementById("accuracy").innerText);
    let winSound = new Audio('./assets/sounds/Small-crowd-clapping.mp3');
    winInfo.classList.add("win-info-container");
    winInfo.innerHTML = `
    <h2>Congratulations! </h2>
    <h4>You have completed this Level</h4>
    <p>You took ${moves} moves to complete this level</p>
    <p>Your accuracy was: ${accuracy}%</p>
    <button onclick="document.location='game.html'" class="game-page-button">Click to play again!</button>
    `;

    let cards = document.getElementsByClassName("game-card");
  let unmatchedCards = $(cards).not('.matched');
    if (unmatchedCards.length === 0) {
        gameContainer.innerHTML = "";
        gameContainer.appendChild(winInfo);
        winSound.play();
    }
}

//functions to increase/calculate scores based on moves taken
function incrementCorrectMatches () {
    let oldScore = parseInt(document.getElementById("correct-matches").innerText);
    document.getElementById("correct-matches").innerText = ++oldScore;
}

function incrementIncorrectMatches () {
    let oldScore = parseInt(document.getElementById("incorrect-matches").innerText);
    document.getElementById("incorrect-matches").innerText = ++oldScore;
}

function numberOfMoves () {
    let oldScore = parseInt(document.getElementById("moves").innerText);
    document.getElementById("moves").innerText = ++oldScore;
}

function accuracy () {
    let numberOfMoves = parseInt(document.getElementById("moves").innerText);
    let correctMatches = parseInt(document.getElementById("correct-matches").innerText);
    document.getElementById("accuracy").innerText = Math.round((correctMatches/numberOfMoves) * 100);
}
