/*
1、初始：
1 3 1
1 5 1
4 2 1

2、把第1行 和 第1列 用前缀和的方式处理。
1 4 5
2 5 1
6 2 1
再双重for循环：
    外层for从第2行开始，最后1行结束
    内层for从第2列开始，最后1列结束
比较左方和上方的值，并取其中较大者，加到当前位置的值上
1 4 5
2 9 10
6 11 12
*/
var maxValue = function(grid) {
    let rows = grid.length, cols = grid[0].length;

    for (let i = 1; i < rows; ++i) {
        grid[i][0] += grid[i - 1][0];
    }
    for (let j = 1; j < cols; ++j) {
        grid[0][j] += grid[0][j- 1];
    }
    for (let i = 1; i < rows; ++i) {
        for (let j = 1; j < cols; ++j) {
            grid[i][j] += Math.max(grid[i - 1][j], grid[i][j - 1]);
        }
    }
    return grid[rows- 1][cols - 1];
};