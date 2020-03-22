// 无障碍
// 第一种DP，用二维数组存 
/*
第一步：
1 1 1 1 1 1
1 0 0 0 0 0
1 0 0 0 0 0 

第二步：
1 1 1 1 1 1
1 2 3 4 5 6
1 3 6 10 15 21
*/
// 1、DP 二维数组
var uniquePaths = function(m, n) {
    let dp = new Array(m);

    for (let i = 0; i < m; ++i) {
        dp[i] = new Array(n).fill(0);
    }

    // 第一列初始化为 1
    for (let i = 0; i < m; ++i) {
        dp[i][0] = 1;
    }

    // 第一行初始化为 1
    for (let i = 0; i < n; ++i) {
        dp[0][i] = 1;
    }

    for (let i = 1; i < m; ++i) {
        for (let j = 1; j < n; ++j) {
            // DP 转移方程
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    return dp[m - 1][n - 1];
};


// 2、DP 一维数组。意思和优化后的DP一样，只是吧if判断去掉了 代码更简洁
var uniquePaths = function(m, n) {
    let dp = new Array(n).fill(0);
    dp[0] = 1;

    for (let i = 0; i < m; ++i) {
        for (let j = 1; j < n; ++j) {
            dp[j] += dp[j - 1];
        }
    }

    return dp[n - 1];
};