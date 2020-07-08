// Iniciando minhas variéveis // 


let board = ["", "", "", "", "", "", "", "", ""];
let playertime = 0;
let symbols = ['jogador1', 'jogador2'];
let gameOver = false;
 let winStates = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

function handleMove(position) {

    if (gameOver) {
        return;

    }

    if (board[position] == '') {
        board[position] = symbols[playertime];


        gameOver = isWin();

        if (gameOver == false) {
           
            playertime = (playertime == 0) ? 1 : 0;

        }
    }

    return gameOver;

}
function isWin() {
   

    for (let i = 0; i < winStates.length; i++) {
        let seq = winStates[i];

        let quadrado1 = seq[0];
        let quadrado2 = seq[1];
        let quadrado3 = seq[2];

        if (board[quadrado1] == board[quadrado2] &&
            board[quadrado1] == board[quadrado3] &&
            board[quadrado1] != '') {

            return true;
        }
    }
    return false;
}

