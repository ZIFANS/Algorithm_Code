var gameOfLife = function(board) {
    for (let i = 0; i < board.length; ++i) {
        for (let j = 0; j < board[0].length; ++j) {
            board[i][j] = checkLoc(board, i, j);
        }
    }
    for (let i = 0; i < board.length; ++i) {
        for (let j = 0; j < board[0].length; ++j) {
            board[i][j] = board[i][j] === 1 || board[i][j] === -2 ? 1 : 0;
        }
    }
};
function checkLoc(board, i, j) {
    let count = 0;
    let left = Math.max(j - 1, 0);
    let right = Math.min(j + 1, board[i].length - 1);
    let top = Math.max(i - 1, 0);
    let bottom = Math.min(i + 1, board.length - 1);
    for (let x = top; x <= bottom; ++x) {
        for (let y = left; y <= right; ++y) {
            count = board[x][y] === 1 || board[x][y] === - 1 ? count + 1 : count;
        }
    }
    return board[i][j] === 1 ? (count === 3 || count === 4 ? 1 : -1) : (count === 3 ? -2 : 0);
}
