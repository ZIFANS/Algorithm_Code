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
var uniquePaths = function (m, n) {
    let dp = new Array(m);
    for (let i = 0; i < m; ++i) {
        dp[i] = new Array(n).fill(0);
    }
    for (let i = 0; i < m; ++i) 
        dp[i][0] = 1;
    for (let i = 0; i < n; ++i) 
        dp[0][i] = 1;
    for (let i = 1; i < m; ++i) {
        for (let j = 1; j < n; ++j) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[m - 1][n - 1];
};

// 优化，只用一维数组即可
var uniquePaths = function (m, n) {
    let dp = new Array(n).fill(0);  
    dp[0] = 1;

    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (j > 0) 
                dp[j] += dp[j - 1];
        }
    }
    return dp[n - 1];
};
