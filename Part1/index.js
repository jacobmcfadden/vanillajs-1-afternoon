const winningCombo = [[0, 1, 2], [0, 4, 8], [1, 4, 7], [0, 3, 6], [2, 4, 6], [2, 5, 8], [3, 4, 5], [6, 7, 8]];

let gameProgress = [];

const allBoxes = document.getElementsByTagName('td');


let gameWinner = "";

function play(value) {
    const selectedBox = document.getElementById(value);
    
    const playerSpan = document.getElementById('player');
    
    if(selectedBox.innerText === "") {

        selectedBox.innerText = playerSpan.innerText;
        
        gameProgress[value] = playerSpan.innerText;

        // looking at current boxes and cross references them to the winning combo's
        for(i = 0; i < winningCombo.length; i++) {
                let xWins = 0;
                let oWins = 0;
            for(j = 0; j < winningCombo[i].length; j++) {

                if(gameProgress[winningCombo[i][j]] === 'X') {
                    xWins++;
                } else if (gameProgress[winningCombo[i][j]] === 'O') {
                    oWins++;
                } else {

                }
            }

            // area to check for a winner
            if(xWins === 3 || oWins === 3) {
                gameWinner = playerSpan.innerText;
            }
        }
        let fullBoard = true;
        for (let i = 0; i <= 8; i++) {
          if (gameProgress[i] === undefined) {
            fullBoard = false;
          }
        }
        // Notify players if there is a winner or the gameboard is full
        if (gameWinner === 'X' || gameWinner === 'O') {
            window.alert(gameWinner + " has 3 in a row and is the winner!");
        gameReset();
        } else if (fullBoard === true) {
            window.alert('There was no winner, try again!')
            gameReset();
        } else {
            // Switch the active player span to the next players turn
            if(playerSpan.innerText === 'X') {
                playerSpan.innerText = 'O'
            } else {
                playerSpan.innerText = 'X'
            }
        }
        // console.log(gameProgress);

    } else {

    }

    
}

function gameReset() {

    for(i = 0; i < allBoxes.length; i++) {
        allBoxes[i].innerText = ""
    }
    gameWinner = "";
    gameProgress = [];
}