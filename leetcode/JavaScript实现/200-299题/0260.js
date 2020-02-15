// 自己的代码，不能用hash在剑指offer的第56题进行优化了
var singleNumber = function (nums) {
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