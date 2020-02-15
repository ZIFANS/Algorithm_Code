// 自己的代码，第一想法就是hash
// 题目没有要求时间复杂度是O(n)，空间复杂度是O(1)。
var singleNumber = function(nums) {
    let map = new Map();
    let len = nums.length;

    for (let i = 0; i < len; ++i) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
    }
    for (let i = 0; i < len; ++i) {
        if (map.get(nums[i]) === 1)
            return nums[i];
    }
};