// Iniciando minhas variéveis // 


let board = ["", "", "", "", "", "", "", "", ""];
let playertime = 0;
let symbols = ['o', 'x'];
let gameOver = false;


function handleMove(position) {

    if (gameOver) {
        return;

    }

    if (board[position] == '') {
        board[position] = symbols[playertime];
    

        if (playertime == 0) {
            playertime = 1;
        } else {
            playertime = 0;
        }
 
    }  

}

