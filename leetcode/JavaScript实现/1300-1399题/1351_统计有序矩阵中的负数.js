// 1、暴力法
var countNegatives = function(grid) {
    let ans = 0;

    for (let i = 0; i < grid.length; ++i) {
        for (let j = 0; j < grid[0].length; ++j) {
            if (grid[i][j] < 0) {
                ++ans;
            }
        }
    }

    return ans;
};

// 2、根据数组特点：
/*
统计矩阵中负数个数，若一行中一个数字为负，则该数字后面都是负数，无需再循环判断，0只递减行序号，
若数字非负，再递减列序号
*/
var countNegatives = function(grid) {
    let rows = grid.length, cols = grid[0].length;
    let i = rows - 1, j = 0, ans = 0;

    while (i >= 0 && j < cols) {
        if (grid[i][j] < 0) {
            ans += cols - j;
            --i;
        } else {
            ++j;
        }
    }

    return ans;
};