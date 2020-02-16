// 参考了别人代码，回溯发
var exist = function(board, word) {
    //越界处理
    board[-1] = [];
    board.push([]);
    //寻找首个字母
    for (let y = 0; y < board.length; ++y) {
        for (let x = 0; x < board[0].length; ++x) {
            if (word[0] === board[y][x] && backtrack(y, x, 0)) {
                return true;
            }
        }
    }
    function backtrack(y, x, i) {
        if (i + 1 === word.length)
            return true;
        let temp = board[y][x];
        board[y][x] = false;
        // 向右
        if (board[y][x + 1] === word[i + 1] && backtrack(y, x + 1, i + 1))
            return true;
        // 向左
        if (board[y][x - 1] === word[i + 1] && backtrack(y, x - 1, i + 1))
            return true;
        // 向下
        if (board[y + 1][x] === word[i + 1] && backtrack(y + 1, x, i + 1))
            return true;
        // 向上
        if (board[y - 1][x] === word[i + 1] && backtrack(y - 1, x, i + 1))
            return true;
        board[y][x] = temp;
    }
    return false;
};