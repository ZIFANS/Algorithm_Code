// 别人的思想，回溯算法这里确实刷题少。
var exist = function(board, word) {
    board[-1] = [];
    board.push([]);

    for(let y = 0; y < board.length; ++y) {
        for(let x = 0; x < board.length; ++x) {
            if(word[0] === board[y][x] && backtrack(y, x, 0))
                return true;
        }
    }
    function backtrack(y, x, i) {
        if(i + 1 === word.length)
            return true;
        let temp = board[y][x];
        board[y][x] = false;
        if(board[y][x + 1] === word[i + 1] && backtrack(y, x + 1, i + 1))
            return true;
        if(board[y][x - 1] === word[i + 1] && backtrack(y, x - 1, i + 1)) 
            return true;
        if(board[y + 1][x] === word[i + 1] && backtrack(y + 1, x, i + 1))
            return true;
        if(board[y - 1][x] === word[i + 1] && backtrack(y - 1, x, i + 1))
            return true;
        board[y][x] = temp;
    }
    return false;
};