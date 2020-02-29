// 自己的代码。第一想法就是暴力解
var maxSlidingWindow = function(nums, k) {
    let len = nums.length, ans = [];

    if(len === 0 || k < 0)
        return [];
    for (let i = 0; i <= len - k; ++i) {
        let max = -Number.MAX_SAFE_INTEGER;
        for (let j = i; j < i + k; ++j) {
            max = Math.max(max, nums[j]);
        }
        ans.push(max);
    }
    return ans;
};

// 第二解法：滑动窗口
