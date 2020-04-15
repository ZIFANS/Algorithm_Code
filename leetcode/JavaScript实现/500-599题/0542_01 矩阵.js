// 1、动态规划
var updateMatrix = function(matrix) {
    let rows = matrix.length, cols = matrix[0].length;
    let dp = new Array(rows).fill(Infinity).map(() => new Array(cols).fill(Infinity));

    for (let i = 0; i < rows; ++i) {
        for (let j = 0; j < cols; ++j) {
            if (matrix[i][j] === 0)
                dp[i][j] = 0;
            else {
                if (i > 0)
                    dp[i][j] = Math.min(dp[i][j], dp[i - 1][j] + 1);
                if (j > 0)
                    dp[i][j] = Math.min(dp[i][j], dp[i][j - 1] + 1);
            }
        }
    }

    for (let i = rows - 1; i >= 0; --i) {
        for (let j = cols - 1; j >= 0; --j) {
            if (i < rows - 1)
                dp[i][j] = Math.min(dp[i][j], dp[i + 1][j] + 1);
            if (j < cols - 1)
                dp[i][j] = Math.min(dp[i][j], dp[i][j + 1] + 1);
        }
    }

    return dp;
};

