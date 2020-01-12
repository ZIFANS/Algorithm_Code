// 自己的代码
// 第一想法就是动态规划 ， 这样的题做了很多次了
var maxSubArray = function(nums) {
    let len = nums.length, maxSum = nums[0];
    for(let i = 1; i < len; ++i) {
        if(nums[i - 1] > 0)
            nums[i] += nums[i - 1];
        maxSum = Math.max(nums[i], maxSum);
    }
    return maxSum;
};

