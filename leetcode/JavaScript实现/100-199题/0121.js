// 自己的代码
var maxProfit = function(prices) {
    let len = prices.length;
    let ans = 0, min = prices[0];
    
    for (let i = 1; i < len; ++i) {
        if (prices[i] > min) {
            ans = Math.max(ans, prices[i] - min);
        } else {
            min = prices[i];
        }
    }
    return ans;
};



// 这里是LeetCode上的官网解法，我感觉和我的解法差不都意思
var maxProfit = function(prices) {
    let len = prices.length;
    let minPrice = prices[0];
    let ans = 0;
    for(let i = 1; i < len; ++i) {
        if(prices[i] < minPrice) {
            minPrice = prices[i];
        }
        if(prices[i] - minPrice > ans) {
            ans = prices[i] - minPrice;
        }
    }
    return ans;
};
