// 有障碍 与62题有点不同。
/*
S 0 1 0 
0 0 0 0
1 1 1 0
0 0 0 F
第一步，判断obstacleGrid[0][0] 是否等于 1，等于1，说明路不同。

第二步，初始化obstacleGrid[0][0] 让其等于1,并且初始化第一行和第一列
1 1 0 0
1 0 0 0
0 1 1 0
0 0 0 F

第三步，根据转移方程计算
1 1 0 0
1 2 2 2 
0 0 0 2 
0 0 0 2 
obstacleGrid[row -1][col -1]就是答案
*/
// 1、动态规划
var uniquePathsWithObstacles = function(obstacleGrid) {
    let rows = obstacleGrid.length, cols = obstacleGrid[0].length;

    if (obstacleGrid[0][0] === 1)
        return 0;
    // 初始化start为1
    obstacleGrid[0][0] = 1;

    // 初始化第一列
    for (let i = 1; i < rows; ++i) {
        obstacleGrid[i][0] = (obstacleGrid[i][0] === 0 && obstacleGrid[i - 1][0] === 1) ? 1 : 0;
    }

    // 初始化第一行
    for (let i = 1; i < cols; ++i) {
        obstacleGrid[0][i] = (obstacleGrid[0][i] === 0 && obstacleGrid[0][i - 1] === 1) ? 1 : 0;
    }

    for (let i = 1; i < rows; ++i) {
        for (let j = 1; j < cols; ++j) {
            if (obstacleGrid[i][j] === 0) {
                obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1];
            } else {
                obstacleGrid[i][j] = 0;
            }
        }
    }

    return obstacleGrid[rows - 1][cols - 1];
};

