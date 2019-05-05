/*----- cached element references -----*/
const squares = Array.from(document.querySelectorAll('#board div'));
const messages = document.querySelector('h2');
/*----- constants -----*/
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];
/*----- app's state (variables) -----*/
let board;
let turn = 'X';
let win;

function init() {
    board = [
    '', '', '',
    '', '', '',
    '', '', ''
    ];
    render();
    };
    //be sure to call the init function!
init();
win = board[0] && board[0] === board[1] && board[0] === board[2] ? board[0] : null;
messages.textContent = win === 'T' ? `That's a tie, queen!` : win ? `${win} wins the game!` : `It's ${turn}'s turn!`;

function render() {
    board.forEach(function(val, idx){
        squares[idx].textContent = val;
    });
    messages.textContent = `It's ${turn}'s turn!`;
    win = getWinner();
    messages.textContent = win === 'T' ? `That's a tie, queen!` : win ? `${win} wins the game!` : `It's ${turn}'s turn!`;
};

/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleTurn);
document.getElementById('reset-button').addEventListener('click', init);
/*----- functions -----*/
function handleTurn(event) {
    let idx = squares.findIndex(function(square) {
    return square === event.target;
    });
    board[idx] = turn;
    turn = turn === 'X' ? 'O' : 'X';
    render();
};
function getWinner() {
    let winner = null;
    winningCombos.forEach(function(combo) {
    if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) winner = board[combo[0]];
    });
    return winner ? winner : board.includes('') ? null : 'T';
};