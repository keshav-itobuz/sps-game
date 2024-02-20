const stone = document.querySelector('#stone');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const result = document.querySelector('#result');
const restartButton = document.querySelector('#restart');
const playerOne = document.querySelector('#user');
const playerTwo = document.querySelector('#cpu');
const display = document.querySelector('#output');
const gameOutput = ['stone', 'paper', 'scissors'];
let count = 1;
function displayCard(userInput, programInput) {
    display.innerHTML = "";
    let userCard = document.createElement('img');
    // console.log(`{userInput}.png`);
    userCard.setAttribute('src', `./images/${userInput}.png`)
    display.appendChild(userCard);
    let cpuCard = document.createElement('img');
    // console.log(`{programInput}.png`);
    cpuCard.setAttribute('src', `./images/${programInput}.png`)
    display.appendChild(cpuCard);
}

function gameLogic(userInput, programInput) {
    displayCard(userInput, programInput);
    if (userInput === programInput) {
        result.innerText = "Its a tie"
    }
    else if ((userInput === 'stone' && programInput === 'scissors') || (userInput === 'paper' && programInput === 'stone') || (userInput === 'scissors' && programInput === 'paper')) {
        result.innerText = "Yay!!! You Won "
        playerOne.innerText = Number(playerOne.innerText) + 1;
    }
    else {
        result.innerHTML = "Sorry , You Loss"
        playerTwo.innerText = Number(playerTwo.innerText) + 1;
    }
    count = playerTwo.innerText > playerOne.innerText ? playerTwo.innerText : playerOne.innerText;
    if (Number(count) === 5) {
        if (playerOne.innerText > playerTwo.innerText) {
            result.innerText = "Congratulations! The Game is Over. You Nailed It";
        }
        else {
            result.innerText = "Game Over. Better luck next time ;).";
        }
    }
}

window.addEventListener('click', (e) => {
    if (e.target.id === 'restart') {
        count = 0;
        playerOne.innerText = 0;
        playerTwo.innerText = 0;
        display.innerHTML="";
        result.innerText = "Let's start";
    }

    if (count < 5) {
        let randomNumber = Math.round((Math.random() * 10) / 5);
        if (e.target.id === 'stone') {
            gameLogic(gameOutput[0], gameOutput[randomNumber]);
        }
        else if (e.target.id === 'paper') {
            gameLogic(gameOutput[1], gameOutput[randomNumber]);
        }
        else if (e.target.id === "scissors") {
            gameLogic(gameOutput[2], gameOutput[randomNumber]);
        }
        else {
            return;
        }
    }

})