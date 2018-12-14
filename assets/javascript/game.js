// creating variables to hold the number of wins, losses and setting them all to zero 
var wins = 0;
var losses = 0;
var computerGuess = [];
var crystalsValue = [0, 0, 0, 0];

// Create variables that hold references to the places in the HTML where we want to display things.
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var randomNumber = document.getElementById("random");
var totalScoreText = document.getElementById("total-score");

$(document).ready(function () {

    // Call the function to initiate the Game
    playGame();

    function playGame() {
        // Randomly chooses the Computer's guess.
        computerGuess = [Math.floor(Math.random() * 101) + 19];
        console.log(computerGuess); // for test only
        $("#random").text(computerGuess);

        for (var i = 0; i < crystalsValue.length; i++) {
            var n = [Math.floor(Math.random() * 12) +1];
            crystalsValue.push(n);
        }
        console.log(crystalsValue);
    }

});