// 就是简单的DP
var maxProfit = function(prices) {
    let ans = 0, len = prices.length;
    if (len === 1)
        return 0;
    let min = prices[0];

    for (let i = 1; i < len; ++i) {
        if (prices[i] > min) {
            ans = Math.max(ans, prices[i] - min);
        } else {
            min = prices[i];
        }
    }

    return ans;
};