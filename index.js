const stone = document.querySelector('#stone');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const result = document.querySelector('#result');
const restartButton = document.querySelector('#restart');
const userScore = document.querySelector('#user');
const cpuScore = document.querySelector('#cpu');
const display = document.querySelector('#output');
const scoreContainer = document.querySelector('#scores')
const gameOutput = ['stone', 'paper', 'scissors'];

let count = 1;
restartButton.style.visibility = "hidden";

function displayCard(userInput, programInput) {
    display.innerHTML = "";
    let userCard = document.createElement('img');
    userCard.setAttribute('src', `./images/${userInput}.png`)
    display.appendChild(userCard);
    let cpuCard = document.createElement('img');
    cpuCard.setAttribute('src', `./images/${programInput}.png`)
    display.appendChild(cpuCard);
}

function colorChanger(scoreBorderColor, userScoreColor, CpuScoreColor) {
    scoreContainer.style.borderColor = scoreBorderColor;
    userScore.style.color = userScoreColor;
    cpuScore.style.color = CpuScoreColor;
}

function gameLogic(userInput, programInput) {

    displayCard(userInput, programInput);

    if (userInput === programInput) {
        result.innerText = "Its a tie";
        colorChanger("gray", "white", "white");
    }

    else if ((userInput === 'stone' && programInput === 'scissors') || (userInput === 'paper' && programInput === 'stone') || (userInput === 'scissors' && programInput === 'paper')) {
        result.innerText = "Yay!!! You Won "
        userScore.innerText = Number(userScore.innerText) + 1;
        colorChanger("green", "green", "white");
    }

    else {
        result.innerHTML = "Sorry , You Lost"
        cpuScore.innerText = Number(cpuScore.innerText) + 1;
        colorChanger("red", "white", "red");
    }

    count = cpuScore.innerText > userScore.innerText ? cpuScore.innerText : userScore.innerText;

    if (Number(count) === 3) {

        if (userScore.innerText > cpuScore.innerText) {
            result.innerText = "Congratulations! You Nailed It";
        }

        else {
            result.innerText = "Game Over. Better luck next time ;)";
        }
        restartButton.style.visibility = "visible";
    }
}

(()=>{
window.addEventListener('click', (e) => {
    if (e.target.id === 'restart') {
        count = 0;
        userScore.innerText = 0;
        cpuScore.innerText = 0;
        result.innerText = "Let's start";
        restartButton.style.visibility = "hidden";
        colorChanger("white", "white", "white");
        display.innerHTML = "";
        display.innerHTML = '<span id="userHand">✊🏻</span> <span id="cpuHand" >✊🏻</span>';
    }

    if (count < 3) {
        let randomNumber = Math.round((Math.random() * 10) / 5);

        if (e.target.id === 'stone' || e.target.id === 'stoneImage') {
            gameLogic(gameOutput[0], gameOutput[randomNumber]);
        }

        else if (e.target.id === 'paper' || e.target.id === 'paperImage') {
            gameLogic(gameOutput[1], gameOutput[randomNumber]);
        }

        else if (e.target.id === "scissors" || e.target.id === 'scissorsImage') {
            gameLogic(gameOutput[2], gameOutput[randomNumber]);
        }

        else {
            return;
        }
    }
})
})();