// 自己的代码，第一想法就是hash
var singleNumbers = function(nums) {
    let map = new Map();
    let ans = [], len = nums.length;
    if (len === 0)
        return ans;

    for (let i = 0; i < len; ++i) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
    }
    for (let i = 0; i < len; ++i) {
        if (map.get(nums[i]) === 1)
            ans.push(nums[i]);
    }
    return ans;
};