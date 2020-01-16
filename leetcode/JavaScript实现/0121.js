// 自己的代码
// 思路其实很简单，就是先找到一个最小值，然后找到一个最大值。让差值最大。
// 我这里先将第一元素设置为最小值
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
