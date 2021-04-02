// function to deal the cards 
        //within needs to determine difficulty level.
        //template literals to apply a base format for card layout 3x4 (3 rows x 4 columns on xl, 4 r x 3 x on smaller devices)
        //add extra row (4 cards) per difficulty

let easyLevel = 12; //put these in function so they are not global
let mediumLevel = 16;
let hardLevel = 20;

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") == "start") {
               alert("You clicked start")
            } else {
                let difficultyLevel = this.getAttribute("data-type");
                alert(`You clicked ${difficultyLevel}`);
            };
            buttons.classList.remove("active"); //console doesn't like this - **think of better way**
            this.classList.add("active");

        })
    }
})

//function to generate pairs of pictures, randomize in the layot.

//function to flip cards once clicked
//function to check if 2 cards match - if do hide (add to score count), if dont flip back over.

//function to declare end of game/stop timer when all cards are "hidden" / matched


// pop up if user tries to leave game before finished window.beforeunload

function startGame () {

}

function cardsClicked () {

}

function checkPairMatch () {

}

function numberOfClicks () {

}

function timeTaken () {

}