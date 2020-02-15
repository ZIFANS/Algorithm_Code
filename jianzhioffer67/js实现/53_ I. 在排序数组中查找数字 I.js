// 自己的代码
// 虽然题目没有说O(logn),但是自己知道这样的题，如果O(n)时间复杂度，肯定要优化
var search = function(nums, target) {
    let ans = 0;
    let start = nums.indexOf(target), end = nums.lastIndexOf(target);
    if (start !== -1) {
        ans = end - start + 1;
    }
    return ans;
};

// 二分法
