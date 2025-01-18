const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('resetButton');
let currentPlayer = 'X';
let gameActive = true;
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleCellClick(e) {
    const cell = e.target;
    const index = cell.getAttribute('data-index');

    if (cell.textContent !== '' || !gameActive) return;

    cell.textContent = currentPlayer;
    checkWinner();

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWinner() {
    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (cells[a].textContent && 
            cells[a].textContent === cells[b].textContent && 
            cells[a].textContent === cells[c].textContent) {
                alert(`Jogador ${cells[a].textContent} venceu!`);
                gameActive = false;
                return;
        }
    }

    if ([...cells].every(cell => cell.textContent !== '')) {
        alert('Empate!');
        gameActive = false;
    }
}

function resetGame() {
    cells.forEach(cell => cell.textContent = '');
    currentPlayer = 'X';
    gameActive = true;
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetButton.addEventListener('click', resetGame);
