
// creating variables to hold the number of wins, losses and setting them all to zero 
var wins = 0;
var losses = 0;
var score = 0;
var computerGuess = 0;
var images = ["assets/images/orange.png", "assets/images/red.png", "assets/images/blue.png", "assets/images/purple.png"]

// Call the function to initiate the Game
playGame();

function playGame() {
    // Randomly chooses the Computer's guess.
    computerGuess = [Math.floor(Math.random() * 101) + 19];
    console.log(computerGuess); // for test only
    $("#random").text(computerGuess);

    for (var i = 0; i < images.length; i++) {
        var crystal = $("<img>");
        crystal.addClass("crystal");
        crystal.attr("src", images[i]);
        crystal.attr("value", (Math.floor(Math.random() * 12) + 1));
        crystal.attr("height", "80px");
        $(".crystal-images").append(crystal);
    }
}

function winner() {
    wins++;
    $("#match").text("You Win!");
    $("#wins").text("Wins: " + wins);
    reset();
}

function loser() {
    losses++;
    $("#match").text("You Lose!");
    $("#losses").text("Losses: " + losses);
    reset();
}

function reset() {
    score = 0;
    $(".crystal-images").empty();
    $("#total-score").text("Your total score is: 0");
    $("#player-score").text("0");
    playGame();
}

function crystalClick() {

    $("#match").text("");
    var crystalValue = parseInt($(this).attr("value"));
    console.log($(this).attr('value'))
    console.log('crystalValue', crystalValue);  // for test only
    score += crystalValue;
    console.log("UserTotal= /score " + score);
    $("#total-score").text("Your total score is: " + score);
    $("#player-score").text(score);

    if (score == computerGuess) {
        winner();
    }

    else if (score > computerGuess) {
        loser();
    }
};
// Delegated event handler
// this took a while to figure out. The click event did not work after reset function
$(document).on("click", ".crystal", crystalClick);
