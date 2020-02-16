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
var search = function (nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        let middleIndex = Math.floor((right - left) / 2) + left;
        let temp = nums[middleIndex];
        if (target > temp) {
            left = middleIndex + 1;
        } else if (target < temp) {
            right = middleIndex - 1;
        } else {
            if (nums[left] !== target) {
                left = left + 1;
            } else if (nums[right] !== target) {
                right = right - 1;
            } else {
                return right - left + 1;
            }
        }
    }
    return 0;
};