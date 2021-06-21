'use strict';

//variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//Dom Manipulation
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    //Check if there is an input by the user. 
    if (!guess) {
        document.querySelector('.message').textContent = "⛔ No Number!"
    }
    // When player guess correctly
    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = "🎉 Correct Number!"
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    //When player guesses too high
    else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = "📈 Too high";
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = "🤯 You lose the game";
            document.querySelector('.score').textContent = 0;
        }
    }
    //When player guesses too high
    else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = "📉 Too low";
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.score').textContent = "🤯 You lose the game";
            document.querySelector('.score').textContent = 0;
        }
    }

});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.score').textContent = 20;
    document.querySelector('.guess').value = '';
});

