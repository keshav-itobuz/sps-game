const stone = document.querySelector('#stone');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const result = document.querySelector('#result');
const restartButton = document.querySelector('#restart');
const playerOne = document.querySelector('#user');
const playerTwo = document.querySelector('#cpu');
const display = document.querySelector('#output');
const scoreContainer = document.querySelector('#scores')
const gameOutput = ['stone', 'paper', 'scissors'];
let count = 1;
restartButton.style.display = "none";
function displayCard(userInput, programInput) {
    display.innerHTML = "";
    let userCard = document.createElement('img');
    userCard.setAttribute('src', `./images/${userInput}.png`)
    display.appendChild(userCard);
    let cpuCard = document.createElement('img');
    cpuCard.setAttribute('src', `./images/${programInput}.png`)
    display.appendChild(cpuCard);
}

function gameLogic(userInput, programInput) {
    displayCard(userInput, programInput);
    restartButton.style.display = "none";
    if (userInput === programInput) {
        result.innerText = "Its a tie";
        scoreContainer.style.borderColor = "gray";
        playerOne.style.color = "white";
        playerTwo.style.color = "white";
    }
    else if ((userInput === 'stone' && programInput === 'scissors') || (userInput === 'paper' && programInput === 'stone') || (userInput === 'scissors' && programInput === 'paper')) {
        result.innerText = "Yay!!! You Won "
        playerOne.innerText = Number(playerOne.innerText) + 1;
        scoreContainer.style.borderColor = "green";
        playerOne.style.color = "green";
        playerTwo.style.color = "white";
    }
    else {
        result.innerHTML = "Sorry , You Lost"
        playerTwo.innerText = Number(playerTwo.innerText) + 1;
        scoreContainer.style.borderColor = "red";
        playerOne.style.color = "white";
        playerTwo.style.color = "red";
    }
    count = playerTwo.innerText > playerOne.innerText ? playerTwo.innerText : playerOne.innerText;
    if (Number(count) === 3) {
        if (playerOne.innerText > playerTwo.innerText) {
            result.innerText = "Congratulations! You Nailed It";
        }
        else {
            result.innerText = "Game Over. Better luck next time ;)";
        }
        restartButton.style.display = "block";
    }
}

window.addEventListener('click', (e) => {
    if (e.target.id === 'restart') {
        count = 0;
        playerOne.innerText = 0;
        playerTwo.innerText = 0;
        display.innerHTML = "";
        result.innerText = "Let's start";
        scoreContainer.style.borderColor = "white";
        playerOne.style.color = "white";
        playerTwo.style.color = "white";
        restartButton.style.display = "none";
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