// 递归
var maxAreaOfIsland = function (grid) {
    let ans = [];
    
    for (let i = 0; i < grid.length; ++i) {
        for (let j = 0; j < grid[0].length; ++j) {
            ans.push(spread(grid, i, j));
        }
    }
    // ES5求最大值：return Math.max.apply(null, result)
    return Math.max(...ans);
};
function spread(grid, i, j) {
    if (i >= 0 && i < grid.length && j >= 0 && j < grid[0].length && grid[i][j] === 1) {
        grid[i][j] = 0;
        return 1 + spread(grid, i - 1, j) + spread(grid, i + 1, j) + spread(grid, i, j - 1) + spread(grid, i, j + 1);
    } else {
        return 0;
    }
}

