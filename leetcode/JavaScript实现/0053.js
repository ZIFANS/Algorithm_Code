// 自己的代码
// 第一想法就是动态规划 ， 这样的题做了很多次了
var maxSubArray = function(nums) {
    let max = nums[0];
    let sum = 0;
    for(let num of nums) {
        sum = sum < 0 ? 0 : sum;
        sum += num;
        max = Math.max(sum, max);
    }
    return max;
};

