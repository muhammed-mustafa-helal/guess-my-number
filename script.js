'use strict';

//variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}
const displayScore = function (score) {
    document.querySelector('.score').textContent = score;
}
//Dom Manipulation
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    //Check if there is an input by the user. 
    if (!guess || guess > 20 || guess < 1) {
        displayMessage("⛔ Not a valid Number!");
    }
    // When player guess correctly
    else if (guess === secretNumber) {
        displayMessage("🎉 Correct Number!");
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    //When player guesses wrongly
    else if (guess !== secretNumber) {
        if (score > 1) {
            guess > secretNumber ? displayMessage("👇 Go Lower") : displayMessage("👆 Go Higher");
            score--;
            displayScore(score);
        }
        else {
            displayMessage("🤯 You lose the game");
            displayScore(0);
        }
    }

});

//Implementing play again button
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage("Start guessing...");
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').style.width = '15rem';
    displayScore(20);
    document.querySelector('.guess').value = '';
});

