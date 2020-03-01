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
var maxSlidingWindow = function(nums, k) {
    let len = nums.length;
    let ans = []

    if (len === 0 || k < 0)
        return [];
    let temp = nums.slice(0, k);
    ans.push(Math.max(...temp));
    for (let i = k; i < len; ++i) {
        temp.shift();           // 减去头部
        temp.push(nums[i]);    // 向尾部添加新的
        ans.push(Math.max(...temp));
    }
    return ans;
};