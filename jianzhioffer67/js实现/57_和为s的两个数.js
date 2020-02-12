// 自己的代码
// 思想就是双指针。
var twoSum = function(nums, target) {
    let left = 0, right = nums.length - 1;
    while( left <= right) {
        if (nums[left] + nums[right] === target) {
            return [nums[left], nums[right]];
        } else if (nums[left] + nums[right] < target) {
            ++left;
        } else {
            --right;
        }
    }
};