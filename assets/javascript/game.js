var seaAnimals = ["pilot whale", "plankton", "hammerhead shark", "ctenophore", "sea sponge", "barnacle", "copepod", "starfish", "manta ray", "bottlenose dolphin", "humboldt squid", "spider crab", "dogfish", "leatherback turtle", "octopus", "marlin", "remora", "gerald", "aquaman"];

var winCount = 1;
var lossCount = 1;
var guessesLeft = 6;
var oldGuesses = [];


var computerChoice = seaAnimals[Math.floor(Math.random() * seaAnimals.length)];
console.log(computerChoice);

var blankWord = [];

for (i = 0; i < computerChoice.length; i++) {
    if (computerChoice[i] === " ") {
        blankWord.push("&nbsp");
    } else {
        blankWord.push("_");
    };
};

document.getElementById("current-word").innerHTML = blankWord.join("");

function newGame() {
    document.getElementById("press-key").style.visibility = "visible";
    computerChoice = seaAnimals[Math.floor(Math.random() * seaAnimals.length)];
    console.log(computerChoice);

    blankWord = [];
        
        for (i = 0; i < computerChoice.length; i++) {
            if (computerChoice[i] === " ") {
                blankWord.push("&nbsp");
            } else {
                blankWord.push("_");
            };
        };
        
        document.getElementById("current-word").innerHTML = blankWord.join("");
        oldGuesses = [];
        document.getElementById("old-guesses").textContent = oldGuesses.join("");
        guessesLeft = 6;
        document.getElementById("guesses-left").textContent = guessesLeft;
        document.getElementById("head").style.visibility = "hidden";
        document.getElementById("right-arm").style.visibility = "hidden";
        document.getElementById("left-arm").style.visibility = "hidden";
        document.getElementById("his-body").style.visibility = "hidden";
        document.getElementById("right-leg").style.visibility = "hidden";
        document.getElementById("left-leg").style.visibility = "hidden";
}

document.onkeyup = function(event) {

    document.getElementById("press-key").style.visibility = "hidden";

    var userGuess = event.key;

    for (var i = 0; i < computerChoice.length; i++) {
        if (computerChoice[i] === userGuess) {
            blankWord.splice(i, 1, userGuess);
            document.getElementById("current-word").innerHTML = blankWord.join("");
        } 
    }

    if (computerChoice.indexOf(userGuess) === -1) {
        guessesLeft = guessesLeft - 1;
        document.getElementById("guesses-left").textContent = guessesLeft;
        if (oldGuesses.indexOf(userGuess) === -1) {
            oldGuesses.push(userGuess);
            document.getElementById("old-guesses").textContent = oldGuesses.join("");
        };
        if (guessesLeft === 5) {
        document.getElementById("head").style.visibility = "visible";
        } else if (guessesLeft === 4) {
            document.getElementById("his-body").style.visibility = "visible";
        } else if (guessesLeft === 3) {
            document.getElementById("right-arm").style.visibility = "visible";
        } else if (guessesLeft === 2) {
            document.getElementById("left-arm").style.visibility = "visible";
        } else if (guessesLeft === 1) {
            document.getElementById("right-leg").style.visibility = "visible";
        } else if (guessesLeft === 0) {
            document.getElementById("left-leg").style.visibility = "visible";
        };
    }

    if (guessesLeft === 0) {
        document.getElementById("loss-count").textContent = lossCount;
        lossCount = lossCount + 1;
        blankWord = computerChoice;
        document.getElementById("current-word").textContent = blankWord;
        alert("You lost!");
        setTimeout(newGame, 2000);
    }   
    
    if (blankWord.indexOf("_") === -1 && guessesLeft !== 0 && document.getElementById("left-leg").style.visibility !== "visible") {
        document.getElementById("win-count").textContent = winCount;
        winCount = winCount + 1;
        alert("You win!");
        setTimeout(newGame, 2000);
    }


    }

