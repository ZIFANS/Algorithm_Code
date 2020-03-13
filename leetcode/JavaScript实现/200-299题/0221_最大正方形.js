// 动态规划
/*
1.我们用 0 初始化另一个矩阵 dp，维数和原始矩阵维数相同；
2.dp(i,j) 表示的是由 1 组成的最大正方形的边长；
3.(0,0) 开始，对原始矩阵中的每一个 1，我们将当前元素的值更新为
dp(i, j)=min(dp(i−1, j), dp(i−1, j−1), dp(i, j−1))+1
4.我们还用一个变量记录当前出现的最大边长，这样遍历一次，找到最大的正方形边长 maxsqlenmaxsqlen，
那么结果就是 maxsqlen * maxsqlen
*/
var maximalSquare = function(matrix) {
    let rows = matrix.length, cols = rows > 0 ? matrix[0].length : 0;
    let maxLen = 0;
    let dp = new Array(rows + 1);

    // 初始化二维数组
    // dp[i][j]表示matrix[i-1][j-1]所能构成的正方形的最大边长
    for (let i = 0; i <= rows; ++i) {
        dp[i] = new Array(cols + 1).fill(0);
    }

    for (let i = 1; i <= rows; ++i) {
        for (let j = 1; j <= cols; ++j) {
            if (matrix[i - 1][j - 1] === '1') {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[ i - 1][j - 1]) + 1;
                maxLen = Math.max(maxLen, dp[i][j]);
            }
        }
    }

    return maxLen * maxLen;
};

// DP优化
/*
这里是一个常见的对于动态规划的空间复杂度的优化问题，本题的不同之处在于，还需要保存dp[i-1][j-1]处的值，
因此，使用一个临时变量将dp[i-1][j-1]进行保存即可。
*/
