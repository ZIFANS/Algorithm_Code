// 动态规划
var numDecodings = function(s) {
    let len = s.length;
    if (len === 0 || s[0] === '0')
        return 0;
    
    let dp = new Array(s.length + 1).fill(0);
    dp[0] = 1;

    for (let i = 0; i < len; ++i) {
        if (s[i] === '0') {
            if (s[i - 1] !== '1' && s[i - 1] !== '2')
                return 0;
            dp[i + 1] = dp[i - 1];
        } else if (s[i - 1] === '1' || (s[i - 1] === '2' && s[i] < '7')) {
            dp[i + 1] = dp[i - 1] + dp[i];
        } else {
            dp[i + 1] = dp[i];
        }
    }

    return dp[len];
};
