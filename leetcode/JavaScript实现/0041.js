// 别人的方法，计数排序
var firstMissingPositive = function(nums) {
    let len = nums.length;
    for (let i = 0; i < len; ++i) {
        while (nums[i] > 0 && nums[i] <= len && nums[nums[i]] !== nums[i]) {
            [nums[nums[i]], nums[i]] = [nums[i], nums[nums[i]]];
        }
    }
    for (let i = 1; i <= len; ++i) {
        if (nums[i] !== i)
            return i;
    }
    return len + 1;
};
