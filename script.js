const playerScore = document.getElementById('playerScore');
const botScore = document.getElementById('clankerScore');

const outputResult = document.getElementById('resultArea');

const choices = ['rock', 'paper', 'scissors'];
let player = 0;
let bot = 0;

const rules = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
};

function userChoice(move) {
    const botMove = choices[Math.floor(Math.random() * choices.length)];

    if (move === botMove) {
        outputResult.textContent = `You both chose ${move}. It's a tie! 🤝`;
    } else if (rules[move] === botMove) {
        player++;
        playerScore.textContent = player;
        outputResult.textContent = `You chose ${move}. Clanker chose ${botMove}. You Win! 🎉`;
    } else {
        bot++;
        botScore.textContent = bot;
        outputResult.textContent = `You chose ${move}. Clanker chose ${botMove}. You Lose 💀`;
  }
}