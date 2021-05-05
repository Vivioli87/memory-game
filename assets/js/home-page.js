let dCards = [];


let topScores = {
    easy: {
    names: ["Anonymous1", "Anonymous2", "Anonymous3"],
    times: [300, 400, 500]
    },
    medium: {
    names: ["Anonymous1", "Anonymous2", "Anonymous3"],
    times: [300, 400, 500]
    },
    hard: {
    names: ["Anonymous1", "Anonymous2", "Anonymous3"],
    times: [300, 400, 500]
    }
};

document.addEventListener("DOMContentLoaded", function(){

    startingScores();

    let dCards = document.getElementsByClassName("demo-card");

    for (let dCard of dCards) {
        dCard.addEventListener("click", flipDemo);
    }

    let resetButton = document.getElementById("demo");
    resetButton.addEventListener("click", demoReset);

});


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
    }

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


//update scores

function startingScores() {   

    //easy
    let easy1Name = topScores.easy.names[0];
    let easy2Name = topScores.easy.names[1];
    let easy3Name = topScores.easy.names[2];

    document.getElementById("easy-one-name").innerHTML = easy1Name;
    document.getElementById("easy-two-name").innerHTML = easy2Name;
    document.getElementById("easy-three-name").innerHTML =easy3Name;

    let easy1Time = topScores.easy.times[0];
    let easy2Time = topScores.easy.times[1];
    let easy3Time = topScores.easy.times[2];

    document.getElementById("easy-one-time").innerHTML = easy1Time;
    document.getElementById("easy-two-time").innerHTML = easy2Time;
    document.getElementById("easy-three-time").innerHTML = easy3Time;

    //med

    let med1Name = topScores.medium.names[0];
    let med2Name = topScores.medium.names[1];
    let med3Name = topScores.medium.names[2];

    document.getElementById("med-one-name").innerHTML = med1Name;
    document.getElementById("med-two-name").innerHTML = med2Name;
    document.getElementById("med-three-name").innerHTML =med3Name;

    let med1Time = topScores.medium.times[0];
    let med2Time = topScores.medium.times[1];
    let med3Time = topScores.medium.times[2];

    document.getElementById("med-one-time").innerHTML = med1Time;
    document.getElementById("med-two-time").innerHTML = med2Time;
    document.getElementById("med-three-time").innerHTML = med3Time;

    //hard

    let hard1Name = topScores.hard.names[0];
    let hard2Name = topScores.hard.names[1];
    let hard3Name = topScores.hard.names[2];

    document.getElementById("hard-one-name").innerHTML = hard1Name;
    document.getElementById("hard-two-name").innerHTML = hard2Name;
    document.getElementById("hard-three-name").innerHTML = hard3Name;

    let hard1Time = topScores.hard.times[0];
    let hard2Time = topScores.hard.times[1];
    let hard3Time = topScores.hard.times[2];

    document.getElementById("hard-one-time").innerHTML = hard1Time;
    document.getElementById("hard-two-time").innerHTML = hard2Time;
    document.getElementById("hard-three-time").innerHTML = hard3Time;


};
