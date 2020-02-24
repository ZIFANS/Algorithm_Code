// LeetCode题目方法三
var maxProfit = function(prices) {
    let ans = 0;

    for (let i = 1; i < prices.length; ++i) {
        if (prices[i] > prices[i - 1]) 
            ans += prices[i] - prices[i - 1];
    }
    return ans;
};

// 峰值-峰谷 相加所有的。
var maxProfit = function(prices) {
    let ans = 0, i = 0, valley = prices[0], peak = prices[0];

    while (i < prices.length - 1) {
        while (i < prices.length - 1 && prices[i] >= prices[i + 1])
            ++i;
        valley = prices[i];
        while (i < prices.length - 1 && prices[i] <= prices[i + 1])
            ++i;
        peak = prices[i];
        ans += peak - valley;
    }
    return ans;
};