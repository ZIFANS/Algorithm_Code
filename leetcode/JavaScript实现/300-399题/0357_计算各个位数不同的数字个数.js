// 1、动态规划
/*
动态规划：
dp[i]表示增加长度为i位的数字一共有多少不同的数。
转移矩阵：
dp[i] = dp[i - 1] * (10 - (i - 1))

新增第i位时，长度为i位的所有数字不同的个数 = 长度为i-1位所有数字不同的个数 * 剩余可供选择的个数；
类似10重for循环遍历；

dp[0] = 1;
dp[1] = 9(原因是0不能作为首字母被选择,所以dp实际表示的有多少种不同排列的数字，而不是数字组合)
dp[2] = 9x9
dp[3] = 9x9x8
dp[4] = 9x9x8x7
dp[5] = 9x9x8x7x6
dp[6] = 9x9x8x7x6x5
dp[7] = 9x9x8x7x6x5x4
dp[8] = 9x9x8x7x6x5x4x3
dp[9] = 9x9x8x7x6x5x4x3x2
dp[10] = 9x9x8x7x6x5x4x3x2x1
*/
var countNumbersWithUniqueDigits = function(n) {
    if (n === 0)
        return 1;
    if (n === 1)
        return 10;
    
    let dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 9;
    let sum = dp[0] + dp[1];

    for (let i = 2; i <= Math.min(n, 10); ++i) {
        dp[i] = dp[i - 1] * (11 - i);
        sum += dp[i];
    }

    return sum;
};
