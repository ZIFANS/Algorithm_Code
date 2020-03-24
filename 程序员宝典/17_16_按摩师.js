// 1、动态规划 空间复杂度O(N)
var massage = function(nums) {
    let len = nums.length;
    
    if (len === 0)
        return 0;
    if (len === 1)
        return nums[0];
    
    let dp = new Array(len).fill(0);
    dp[0] = nums[0], dp[1] = Math.max(nums[0], nums[1]);

    for (let i = 2; i < len; ++i) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    }

    return dp[len - 1];
};

// 2、DP 优化
var massage = function(nums) {
    let first = 0, second = 0;

    for (let i = 0; i < nums.length; ++i) {
        let temp = Math.max(second, first + nums[i]);
        first = second;
        second = temp;
    }

    return second;
};