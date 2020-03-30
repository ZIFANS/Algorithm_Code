// 1、DFS
var numIslands = function(grid) {
    if (!grid || grid.length === 0)
        return 0;
    let rows = grid.length,
        cols = grid[0].length,
        ans = 0;

    let sink = (i, j) => {
        if (grid[i][j] === '0')
            return 0;
        grid[i][j] = '0';
        if (i + 1 < rows && grid[i + 1][j] === '1')
            sink(i + 1, j);
        if (i - 1 >= 0 && grid[i - 1][j] === '1')
            sink(i - 1, j);
        if (j + 1 < cols && grid[i][j + 1] === '1')
            sink(i, j + 1);
        if (j >= 0 && grid[i][j - 1] === '1')
            sink(i, j - 1);
        return 1;
    };

    for (let i = 0; i < rows; ++i) {
        for (let j = 0; j < cols; ++j) {
            if (grid[i][j] === '1') {
                ans += sink(i, j);
            }
        }
    }

    return ans;
};
