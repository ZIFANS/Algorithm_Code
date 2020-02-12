// 自己的代码，第一想法就是暴力解，但是不是特别好
var maxSlidingWindow = function(nums, k) {
    let len = nums.length, ans = [];
    if(len === 0 || k < 0)
        return [];
    for(let i = 0; i < len - k + 1; ++i) {
        let max = -Number.MAX_VALUE;
        for(let j = i; j < i + k; ++j) {
            max = Math.max(max, nums[j]);
        }
        ans.push(max);
    }
    return ans;
};

// 下次补充一个动态规划