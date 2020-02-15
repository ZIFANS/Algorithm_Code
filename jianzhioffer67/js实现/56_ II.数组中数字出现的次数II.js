// 自己的代码，第一想法就是hash
var singleNumber = function(nums) {
    let map = new Map();
    let len = nums.length, ans;

    for (let i = 0; i < len; ++i) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
    }
    for (let i = 0; i < len; ++i) {
        if (map.get(nums[i]) === 1)
            ans = nums[i];
    }
    return ans;
};