let currentMarker = "X" // whose turn it is
let playerXScore = 0 // total of bit values for player X
let playerOScore = 0 // total of bit values for player 0
let winner = false 
let player1wins = 0
let player2wins = 0
let winsArray = [7, 56, 448, 73, 146, 292, 273, 84];// possible winning combinations
// get and set player names
let player1name = prompt("Enter name of player 1: ", "Carrie")
let player2name = prompt("Enter name of player 2: ", "Computer")
let currentPlayer = player1name
let cats = 0
let cellsUsed = 0

// called at start onload of body
function start() {
    document.getElementById("player").innerHTML = "Choose a square"
}

function incrementWins(currentPlayer) {
    if (currentPlayer === player1name) { 
        player1wins = Number(player1wins) + 1 
    } else {
        player2wins = Number(player2wins) + 1
    }
}
// called with each click
function playerMoved(id, value) {
    // do not mark a used cell
    if (id.innerHTML === "" ) {
        changeText(id);
        updateScore(value);
        cellsUsed += 1
        document.getElementById("cells-used").innerHTML = "Cells used: " + cellsUsed
        if (cellsUsed === 1) {
            document.getElementById("who-won").innerHTML = ""
        }
        // switch markers and check if current player is a winner
        if (currentMarker === "X") {
            checkForWinner(playerXScore)
        } else {
            checkForWinner(playerOScore)
        }
        if (winner) {
            incrementWins(currentPlayer)
            resetGame(id)
        } 
    } // end if id.innerHTML
    document.getElementById("player1wins").innerHTML = player1name + "'s wins: " + player1wins.toString() 
    document.getElementById("player2wins").innerHTML = player2name + "'s wins: " + player2wins.toString()
    document.getElementById("cat").innerHTML = "Cats: " + cats.toString()
    switchPlayers()
} // end playerMoved()

function changeText(id) {
    // set clicked square to marker
    id.innerHTML = currentMarker
    
    if (currentMarker === "X") {
        id.style.color = "#945600" 
        id.style.color = "#51bbfe" 
        id.style.color = "#6d545d" 
    } else {
        id.style.color = "#c75000" 
        id.style.color = "#756d54" 
    }
}

// receives the player's score
function checkForWinner(score) {
    for (let i = 0; i < winsArray.length; i++) {
        if ((winsArray[i] & score) === winsArray[i]) {
            document.getElementById("who-won").innerHTML = currentPlayer + " won!"
            winner = true
            return true
        } // end if
    } // end for
    if (cellsUsed >= 9) {
        cats += 1
        winner = true
        document.getElementById("who-won").innerHTML = "Cat!"
    }
    return false
} 

function switchPlayers() {
    if (currentMarker === "X") {
        currentMarker = "O"
        currentPlayer = player2name
    } else {
        currentMarker = "X"
        currentPlayer = player1name
    }
    document.getElementById("player").innerHTML = currentPlayer + "'s move"
}

function resetGame(id) {
    // document.getElementById("who-won").innerHTML = "Cat!"
    cellsUsed = 0
    let cellArray = document.getElementsByClassName("cell")
    for (let i = 0; i < cellArray.length; i++) {
        cellArray[i].innerHTML = ""
    }
    playerXScore = 0
    playerOScore = 0
    winner = false
    currentMarker = "X" // X always goes first
    if (currentPlayer === player1name) {
        currentPlayer = player2name
    } else {
        currentPlayer = player1name
    }
}

function updateScore(value) {
    if (currentMarker === "X") {
        playerXScore += value
    } else {
        playerOScore += value
    }
}

