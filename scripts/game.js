function resetGameStatus(){
    gameIsOver = false;
    activePlayer = 0; 
    currentRound = 1;
    gameOverElement.firstElementChild.innerHTML = 'You won, <span id="winner">Player Name</span>';
    gameOverElement.style.display = 'none';

    //looping inside an array 
    for(let i = 0; i<3; i++){
        for(let j = 0; j < 3; j++){
            gameData[i][j] = 0;
        }
    }
    for (const gameFieldElement of gameFieldElements) {
        gameFieldElement.textContent = "";
        gameFieldElement.classList.remove('disabled')
      }


}
function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("Please set custom player name for both players");
    return;
  }
  resetGameStatus();
  activePlayerNameelement.textContent = players[activePlayer].name;
  gameAreaElement.style.display = "block";
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerNameelement.textContent = players[activePlayer].name;
}

function selectGameField(event) {
    if(gameIsOver === true){
        return;
    }
  const selectedField = event.target;
  const selectedColumn = selectedField.dataset.col - 1;
  const selectedRow = selectedField.dataset.row - 1;

  if (gameData[selectedRow][selectedColumn] > 0) {
    alert("Please selected unselected field");
    return;
  }
  selectedField.textContent = players[activePlayer].symbol;
  selectedField.classList.add("disabled");

  gameData[selectedRow][selectedColumn] = activePlayer + 1;
  const winnerId = checkForGameOver();

  if (winnerId !== 0) {
    endGame(winnerId);
  }
  currentRound++;
  switchPlayer();
  // console.log(event.target)
}

function checkForGameOver() {
  // if(gameData[0][0] > 0 && gameData[0][0] === gameData[0][1] && gameData[0][1] === gameData[0][2]){
  //     return gameData[0][0];
  // }
  // if(gameData[1][0] > 0 && gameData[1][0] === gameData[1][1] && gameData[1][1] === gameData[1][2]){
  //     return gameData[1][0];
  // }
  // if(gameData[2][0] > 0 && gameData[2][0] === gameData[2][1] && gameData[2][1] === gameData[2 ][2]){
  //     return gameData[0][0];
  // }
  // Checking the rows for equality
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }

  // Checking the columns for equality
  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[0][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }
  // Diagonal: Top left to bottom right
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }

  // Diagonal: Bottom left to top right
  if (
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] === gameData[0][2]
  ) {
    return gameData[2][0];
  }
  if (currentRound === 9) {
    return -1;
  }
  return 0;
}

function endGame(winnerId) {
    gameIsOver = true;
  gameOverElement.style.display = "block";
  if (winnerId > 0) {
    const winnerName = players[winnerId - 1].name;
    gameOverElement.firstElementChild.firstElementChild.textContent =
      winnerName;
  } else {
    gameOverElement.firstElementChild.textContent = "'It`s a draw!";
  }
  pElement.style.display = "none";
}
