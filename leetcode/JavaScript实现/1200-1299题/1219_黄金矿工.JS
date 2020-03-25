// 1、回溯算法
/*
思路：深度优先搜索
1、注意终止递归的条件：
    遇到没有黄金的格子，也就是值为 0 的格子
    无效格子，超出了格子边界
2、使用 0 标记使用过的格子
*/
var getMaximumGold = function (grid) {
    let rows = grid.length, cols = grid[0].length;
    let ans = 0;

    if (rows === 0)
        return ans;

    // 回溯函数
    let backtrack = (count, row, col) => {
        ans = Math.max(ans, count);
        // 回溯上下左右四个方位
        let ways = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1]
        ];

        for (let i = 0; i < 4; ++i) {
            let crow = row + ways[i][0],
                ccol = col + ways[i][1];
            if (crow < 0 || ccol < 0 || crow >= rows || ccol >= cols || grid[crow][ccol] === 0) {
                continue;
            }
            let temp = grid[crow][ccol];
            grid[crow][ccol] = 0;
            backtrack(count + temp, crow, ccol);
            grid[crow][ccol] = temp;
        }
    };

    for (let i = 0; i < rows; ++i) {
        for (let j = 0; j < cols; ++j) {
            if (grid[i][j] === 0)   
                continue;
            let remember = grid[i][j];
            grid[i][j] = 0;
            backtrack(remember, i, j);
            grid[i][j] = remember;
        }
    }
    return ans;
};