function openPlayerConfig(event) {
  playerConfigOverlay.style.display = "block";
  backdrop.style.display = "block";
  const selectedPlayer = event.target.dataset.playerid;
  editedPlayer =  +selectedPlayer; //1 or 2 
}

function closePlayerConfig() {
  playerConfigOverlay.style.display = "none";
  backdrop.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  playerNameInput.value = "";
  errorMessage.textContent = "";
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get("player-name").trim();

  if (!enteredPlayerName) {
    // enteredplayer === '' same
    //alert()
    const selectedPlayer = event.target.dataset.playerid;
    console.log(selectedPlayer);
    event.target.firstElementChild.classList.add("error");
    errorMessage.textContent = "Please Enter a valid name";
    return;//stop the fucntion
  }
 const updatePlayerDataElement = document.getElementById('player-' + editedPlayer + "-data");
 updatePlayerDataElement.children[1].textContent = enteredPlayerName;
//the first way 
// if(editedPlayer === 1){
//     players[0].name = enteredPlayerName;
// }
// else{
//     players[1].name = enteredPlayerName;
// }
players[editedPlayer - 1].name = enteredPlayerName;

closePlayerConfig()
}
