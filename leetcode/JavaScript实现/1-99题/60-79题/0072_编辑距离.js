// 1、动态规划
/*
1.dp状态定义
dp[i][j]表示w1的前i个字母要转换成w2的前j个字母所需的最少操作数。

2.dp状态转移方程
w1,w2字母相同：word1[i-1] == word2[j-1] ---> 
    dp[i-1][j-1]
w1,w2字母不同则为三种操作最小值：--->
    Math.min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1]) + 1

dp[i-1][j] 删除
dp[i][j-1] 插入
dp[i-1][j-1] 替换

3.如果i*j==0 即有一单词为0,直接返回i+j
*/

var minDistance = function(word1, word2) {
    let n = word1.length, m = word2.length;
    let dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0));
    
    for (let i = 0; i <= n; ++i) {
        dp[i][0] = i;
    }
    for (let j = 0; j <= m; ++j) {
        dp[0][j] = j;
    }

    // DP
    for (let i = 0; i <= n; ++i) {
        for (let j = 0; j <= m; ++j) {
            if (i * j) {
                dp[i][j] = word1[i - 1] === word2[j - 1] ? dp[i - 1][j - 1] : (Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1);
            } else {    
                dp[i][j] = i + j;
            }
        }
    }

    return dp[n][m];
};