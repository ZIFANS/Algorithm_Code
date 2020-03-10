/*
DP转移方程：
1、当一个数和它前面的数组成的数在0-25之间的时候，对翻译数目有增益，此时dp[i]=dp[i-1]+dp[i-2]

2、相反组成的数不在0-25之间，对翻译数目无增益，dp[i]=dp[i-1]
*/
var translateNum = function(num) {
    let numToString = num.toString();
    let dp = new Array(numToString.length + 1).fill(1);

    for (let i = 1; i < numToString.length; ++i) {
        if (numToString[i - 1] === '1' || (numToString[i] <= 5 && numToString[i - 1] == '2')) {
            dp[i + 1] = dp[i] + dp[i - 1];
        } else {
            dp[i + 1] = dp[i];
        }
    }
    return dp[numToString.length];
};

