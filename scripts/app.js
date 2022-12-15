// editedPlayer varible is to check which player is editting the name
const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;
const players = [
  {
    name: "",
    symbol: "x",
  },
  {
    name: "",
    symbol: "o",
  },
];

const formElement = document.querySelector("form");
const pElement = document.getElementById("ur-turn");

const playerName1 = document.getElementById("player1-name");
const playerName2 = document.getElementById("player2-name");

const playerConfigOverlay = document.getElementById("config-overlay");

const playerNameInput = document.getElementById("player-name");
const gameAreaElement = document.getElementById("active-game");
const activePlayerNameelement = document.getElementById("active-player-name");
const gameOverElement = document.getElementById("game-over");

const errorMessage = document.getElementById("config-error");

const startNewGameBtn = document.getElementById("start-game-btn");
const editButtonPlayer1 = document.getElementById("edit-player-1-btn");
const editButtonPlayer2 = document.getElementById("edit-player-2-btn");
const backdrop = document.getElementById("backdrop");
const cancelButoon = document.getElementById("cancel-config");
const gameFieldElements = document.querySelectorAll("#game-board li"); //queryselctor pass css
// const gameBoardElement = document.getElementById('game-board')

editButtonPlayer1.addEventListener("click", openPlayerConfig);
editButtonPlayer2.addEventListener("click", openPlayerConfig);

backdrop.addEventListener("click", closePlayerConfig);
cancelButoon.addEventListener("click", closePlayerConfig);

formElement.addEventListener("submit", savePlayerConfig);

startNewGameBtn.addEventListener("click", startNewGame);

for (const gameFieldElement of gameFieldElements) {
  gameFieldElement.addEventListener("click", selectGameField);
}

// gameBoardElement.addEventListener('click',selectGameField);
