// 暴力，直接方法
var distributeCandies = function(candies, num_people) {
    let ans = new Array(num_people).fill(0);   
    let index = 0;

    while (candies !== 0) {
        ans[index % num_people] += Math.min(candies, index + 1);
        candies -= Math.min(candies, index + 1);
        index += 1;
    }
    return ans;
};