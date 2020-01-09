// 暴力法
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let len = nums.length;
    let ans = [];
    for(let i = 0; i < len; ++i) {
        for(let j = i + 1; j < len; ++j) {
            if(nums[i] + nums[j] === target) {
                ans.push(i);
                ans.push(j);
            }
        }
    }
    return ans;
};


// 哈希法
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = {};
    for(let i = 0; i < nums.length; ++i) {
        if(map[target - nums[i]] !== undefined) {
            return [map[target - nums[i]], i];
        }
        map[nums[i]] = i;
    }
};