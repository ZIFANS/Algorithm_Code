// BFS
var orangesRotting = function (grid) {
    let q = [];
    let newFresh = 0, minutes = 0;

    for (let i = 0; i < grid.length; ++i) {
        for (let j = 0; j < grid[0].length; ++j) {
            if (grid[i][j] === 2)
                q.push([i, j]);
            if (grid[i][j] === 1)
                ++newFresh;
        }
    }
    
    while (q.length && newFresh) {
        let newQ = [];
        while (q.length) {
            let badOrange = q.shift();
            let newRottens = infectOthers(grid, badOrange[0], badOrange[1], newQ);
            newFresh -= newRottens;
        }
        ++minutes;
        q = newQ;
    }
    if (newFresh !== 0) 
        return -1;
    return minutes;
};
var infectOthers = function (grid, i, j, q) {
    let infected = 0;

    // 向上
    if (i > 0 && grid[i - 1][j] === 1) {    
        grid[i - 1][j]++;
        infected++;
        q.push([i - 1, j]);
    }
    // 向右
    if (j < grid[0].length - 1 && grid[i][j + 1] === 1) {
        grid[i][j + 1]++;
        infected++;
        q.push([i, j + 1]);
    }
    // 向下
    if (i < grid.length - 1 && grid[i + 1][j] === 1) {
        grid[i + 1][j]++;
        infected++;
        q.push([i + 1, j]);
    }
    // 向左
    if (j > 0 && grid[i][j - 1] === 1) {
        grid[i][j - 1]++;
        infected++;
        q.push([i, j - 1]);
    }
    
    return infected;
}